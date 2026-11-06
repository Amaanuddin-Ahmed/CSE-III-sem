const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

// 1. In renderNotesDivision, change default open to collapsed
app = app.replace(
  "if (!state.expandedNotesUnits) {\n      state.expandedNotesUnits = { 1: true, 2: true, 3: true, 4: true, 5: true, 'multi': true };\n    }",
  "if (!state.expandedNotesUnits) {\n      state.expandedNotesUnits = {};\n    }"
);
app = app.replace(
  "if (!state.expandedNotesUnits) {\r\n      state.expandedNotesUnits = { 1: true, 2: true, 3: true, 4: true, 5: true, 'multi': true };\r\n    }",
  "if (!state.expandedNotesUnits) {\r\n      state.expandedNotesUnits = {};\r\n    }"
);

// Replace isExpanded in unit rendering
app = app.replace(
  "const isExpanded = state.expandedNotesUnits[u] !== false;",
  "const isExpanded = state.notesChapterFilter !== 'all' ? true : Boolean(state.expandedNotesUnits[u]);"
);

// Replace isExpanded in multi rendering
app = app.replace(
  "const isExpanded = state.expandedNotesUnits['multi'] !== false;",
  "const isExpanded = Boolean(state.expandedNotesUnits['multi']);"
);

// 2. In renderMathExpr, ensure katex-error never shows red error text
const oldKatex = `    if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(expr, {
          displayMode: isBlock,
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render error, falling back to clean text math:', err);
      }
    }`;

const newKatex = `    if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
      try {
        const rendered = window.katex.renderToString(expr, {
          displayMode: isBlock,
          throwOnError: false
        });
        if (rendered && !rendered.includes('katex-error')) {
          return rendered;
        }
      } catch (err) {
        console.warn('KaTeX render error, falling back to clean text math:', err);
      }
    }`;

if (app.includes(oldKatex)) {
  app = app.replace(oldKatex, newKatex);
} else {
  // Try CRLF
  const oldKatexCRLF = oldKatex.replace(/\n/g, '\r\n');
  const newKatexCRLF = newKatex.replace(/\n/g, '\r\n');
  if (app.includes(oldKatexCRLF)) {
    app = app.replace(oldKatexCRLF, newKatexCRLF);
  } else {
    console.warn('Could not directly replace oldKatex block, will search by sub-match');
    app = app.replace(/return window\.katex\.renderToString\(expr,\s*\{[\s\S]*?throwOnError:\s*false\s*\}\);/, `const rendered = window.katex.renderToString(expr, {
          displayMode: isBlock,
          throwOnError: false
        });
        if (rendered && !rendered.includes('katex-error')) {
          return rendered;
        }`);
  }
}

// 3. Add convertLatexArraysToHumanText at the beginning of formatGeminiResponse
const helperFunc = `
  function convertLatexArraysToHumanText(str) {
    if (!str || typeof str !== 'string' || !str.includes('\\\\begin{array}')) return str;
    return str.replace(/(\\$\\$)?\\s*\\\\begin\\{array\\}[^}]*\\}([\\s\\S]*?)\\\\end\\{array\\}\\s*(\\$\\$)?/g, (match, d1, inner, d2) => {
      // Check if table
      if (inner.includes('\\\\times') || inner.includes('Vertex in') || inner.includes('|')) {
        const rows = inner.split('\\\\\\\\').map(l => l.replace(/\\\\hline/g, '').trim()).filter(Boolean);
        if (rows.length >= 2) {
          const cleanRows = rows.map(r => r.split('&').map(c => c.replace(/\\\\text\\{([^}]*)\\}/g, '$1').replace(/\\\\times_?{?(\\d+)}?/g, '×$1').replace(/\\\\times/g, '×').replace(/[\\$\\\\]/g, '').trim()));
          const maxCols = Math.max(...cleanRows.map(r => r.length));
          cleanRows.forEach(r => { while (r.length < maxCols) r.push(''); });
          const header = '| ' + cleanRows[0].join(' | ') + ' |';
          const sep = '| ' + Array(maxCols).fill(':---:').join(' | ') + ' |';
          const body = cleanRows.slice(1).map(r => '| ' + r.join(' | ') + ' |').join('\\n');
          return '\\n\\n' + header + '\\n' + sep + '\\n' + body + '\\n\\n';
        }
      }

      // Arithmetic / aligned math calculation
      const lines = inner.split('\\\\\\\\').map(l => l.trim()).filter(Boolean);
      const rows = [];
      const hasDividerBefore = new Set();
      lines.forEach((l) => {
        if (l.includes('\\\\hline')) {
          hasDividerBefore.add(rows.length);
          l = l.replace(/\\\\hline/g, '').trim();
        }
        if (!l) return;
        const cells = l.split('&').map(c => {
          return c
            .replace(/\\\\text\\{([^}]*)\\}/g, '$1')
            .replace(/\\\\mathbf\\{([^}]*)\\}/g, '$1')
            .replace(/\\\\mathit\\{([^}]*)\\}/g, '$1')
            .replace(/_\\{?(\\d+)\\}?/g, '_$1')
            .replace(/\\\\,/g, ' ')
            .replace(/\\\\quad/g, ' ')
            .replace(/[\\$]/g, '')
            .trim();
        });
        rows.push(cells);
      });

      if (!rows.length) return match;
      const maxCols = Math.max(...rows.map(r => r.length));
      const colWidths = Array(maxCols).fill(0);
      rows.forEach(r => {
        r.forEach((c, i) => { colWidths[i] = Math.max(colWidths[i], c.length); });
      });

      const out = [];
      rows.forEach((r, idx) => {
        if (hasDividerBefore.has(idx)) {
          const len = colWidths.reduce((a, b) => a + b, 0) + 3 * (maxCols - 1);
          out.push('-'.repeat(Math.max(len, 14)));
        }
        const formatted = r.map((c, i) => (i === 0 ? c.padStart(colWidths[i]) : c.padEnd(colWidths[i])));
        out.push(formatted.join('   '));
      });

      return '\\n\\n\`\`\`text\\n' + out.join('\\n') + '\\n\`\`\`\\n\\n';
    });
  }
`;

// Insert helper right before formatGeminiResponse
const targetFmt = 'function formatGeminiResponse(rawText) {';
if (app.includes(targetFmt)) {
  app = app.replace(targetFmt, helperFunc + '\n  ' + targetFmt + '\n    rawText = convertLatexArraysToHumanText(rawText);');
}

fs.writeFileSync('app.js', app, 'utf8');
console.log('Successfully updated app.js for collapsed notes and clean human-readable math!');

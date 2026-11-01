// scripts/scan-inventory.js
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const fileExts = ['.html', '.css', '.js'];
const ignoreDirs = ['node_modules', '.git', '.cache', '.vercel'];

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (ignoreDirs.some(id => fullPath.includes(id))) continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      const ext = path.extname(file);
      if (fileExts.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const files = getFiles(rootDir);
console.log(`Found ${files.length} relevant files for scanning.`);

// 1. Color values regex: #[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)
const colorRegex = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
const colorCounts = {};
let totalColorOccurrences = 0;

// 2. Style attributes and DOM style manipulations
let styleAttrCount = 0;
let stylePropCount = 0;
let fillStrokeCount = 0;

// 3. CSS variables: var(-- and :root
let cssVarUsageCount = 0;
let rootBlocksCount = 0;
const cssVarDefs = new Set();

// 4. Libraries check
let mermaidMatches = 0;
let katexMatches = 0;
let confettiMatches = 0;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(rootDir, f);

  // Match colors
  const colors = content.match(colorRegex) || [];
  totalColorOccurrences += colors.length;
  for (const c of colors) {
    const norm = c.toLowerCase().trim();
    colorCounts[norm] = (colorCounts[norm] || 0) + 1;
  }

  // Style matches
  const styleAttrs = content.match(/style\s*=\s*["'][^"']*["']/g) || [];
  styleAttrCount += styleAttrs.length;

  const styleProps = content.match(/\.style\.[a-zA-Z]+/g) || [];
  stylePropCount += styleProps.length;

  const fillStrokes = content.match(/fill\s*=|stroke\s*=/g) || [];
  fillStrokeCount += fillStrokes.length;

  // CSS vars in CSS
  if (f.endsWith('.css')) {
    const vars = content.match(/var\(--[a-zA-Z0-9_-]+\)/g) || [];
    cssVarUsageCount += vars.length;

    const defs = content.match(/--[a-zA-Z0-9_-]+(?=\s*:)/g) || [];
    defs.forEach(d => cssVarDefs.add(d));

    const roots = content.match(/:root\s*\{/g) || [];
    rootBlocksCount += roots.length;
  }

  // Libraries
  const mMatches = content.match(/mermaid/gi) || [];
  mermaidMatches += mMatches.length;

  const kMatches = content.match(/katex/gi) || [];
  katexMatches += kMatches.length;

  const cMatches = content.match(/confetti/gi) || [];
  confettiMatches += cMatches.length;
}

console.log('--- SCAN RESULTS ---');
console.log('Total Color Occurrences:', totalColorOccurrences);
console.log('Unique Colors Count:', Object.keys(colorCounts).length);
console.log('Top 15 Colors:');
const sortedColors = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]);
sortedColors.slice(0, 15).forEach(([c, cnt]) => console.log(`  ${c}: ${cnt}`));

console.log('\n--- STYLE ATTRS & MANIPULATION ---');
console.log('Inline style="" attributes:', styleAttrCount);
console.log('JS .style.<prop> assignments:', stylePropCount);
console.log('SVG fill=/stroke= attributes:', fillStrokeCount);

console.log('\n--- CSS VARIABLES & :ROOT ---');
console.log(':root blocks in CSS:', rootBlocksCount);
console.log('Defined CSS variables:', cssVarDefs.size, Array.from(cssVarDefs));
console.log('var(--...) usages in CSS:', cssVarUsageCount);

console.log('\n--- LIBRARIES DETECTED ---');
console.log('Mermaid references:', mermaidMatches);
console.log('KaTeX references:', katexMatches);
console.log('Confetti references:', confettiMatches);

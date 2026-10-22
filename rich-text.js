/**
 * MGIT PYQ Hub — Shared rich text renderer.
 *
 * One place for maths (KaTeX), inline code and fenced code. Used by the quiz,
 * flashcards and any other surface that can contain a formula.
 *
 * Supported delimiters: $...$, $$...$$, \(...\), \[...\]
 * Literal currency such as "₹500 and $5" is never treated as maths.
 */

(function () {
  'use strict';

  const TOKEN_PREFIX = '\u0000RT';
  const TOKEN_SUFFIX = '\u0000';

  const UNICODE_FALLBACK = [
    [/\\times/g, ' × '],
    [/\\cdot/g, ' · '],
    [/\\div/g, ' ÷ '],
    [/\\pm/g, ' ± '],
    [/\\mp/g, ' ∓ '],
    [/\\le(q)?\b/g, ' ≤ '],
    [/\\ge(q)?\b/g, ' ≥ '],
    [/\\ne(q)?\b/g, ' ≠ '],
    [/\\approx/g, ' ≈ '],
    [/\\equiv/g, ' ≡ '],
    [/\\notin\b/g, ' ∉ '],
    [/\\in\b/g, ' ∈ '],
    [/\\subseteq/g, ' ⊆ '],
    [/\\subset\b/g, ' ⊂ '],
    [/\\cup\b/g, ' ∪ '],
    [/\\cap\b/g, ' ∩ '],
    [/\\forall\b/g, ' ∀ '],
    [/\\exists\b/g, ' ∃ '],
    [/\\rightarrow|\\to\b/g, ' → '],
    [/\\Rightarrow|\\implies\b/g, ' ⇒ '],
    [/\\leftarrow\b/g, ' ← '],
    [/\\Leftrightarrow|\\iff\b/g, ' ⇔ '],
    [/\\infty\b/g, ' ∞ '],
    [/\\sum\b/g, ' ∑ '],
    [/\\prod\b/g, ' ∏ '],
    [/\\int\b/g, ' ∫ '],
    [/\\neg\b/g, ' ¬ '],
    [/\\land\b/g, ' ∧ '],
    [/\\lor\b/g, ' ∨ '],
    [/\\alpha\b/g, 'α'],
    [/\\beta\b/g, 'β'],
    [/\\gamma\b/g, 'γ'],
    [/\\delta\b/g, 'δ'],
    [/\\Delta\b/g, 'Δ'],
    [/\\epsilon\b/g, 'ε'],
    [/\\theta\b/g, 'θ'],
    [/\\lambda\b/g, 'λ'],
    [/\\mu\b/g, 'μ'],
    [/\\pi\b/g, 'π'],
    [/\\rho\b/g, 'ρ'],
    [/\\sigma\b/g, 'σ'],
    [/\\tau\b/g, 'τ'],
    [/\\phi\b/g, 'φ'],
    [/\\omega\b/g, 'ω'],
    [/\\Omega\b/g, 'Ω'],
    [/\\gcd\b/g, ' gcd '],
    [/\\log\b/g, ' log '],
    [/\\ln\b/g, ' ln '],
    [/\\sin\b/g, ' sin '],
    [/\\cos\b/g, ' cos '],
    [/\\tan\b/g, ' tan '],
    [/\\lim\b/g, ' lim '],
    [/\\text\{([^}]+)\}/g, ' $1 '],
    [/\\mathrm\{([^}]+)\}/g, ' $1 '],
    [/\\mathbf\{([^}]+)\}/g, ' $1 '],
    [/\\mathit\{([^}]+)\}/g, ' $1 '],
    [/\\left|\\right/g, ''],
    [/\\binom\{([^}]+)\}\{([^}]+)\}/g, 'C($1, $2)'],
    [/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)'],
    [/\\sqrt\{([^}]+)\}/g, '√($1)']
  ];

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function hasMathSignal(expr) {
    const value = String(expr || '').trim();
    if (!value) return false;
    // Backslash commands, scripts, grouping, relations and operators.
    if (/[\\^_{}=<>]/.test(value)) return true;
    // Common Unicode maths and Greek letters.
    if (/[∑∏∫∈∉≤≥≠≈≡⊂⊆∪∩∀∃→⇒←⇔⊕¬∧∨πθλμσΩ∞√]/.test(value)) return true;
    // Delimited variables such as $G$, $H$, $x_i$, $NO_x$ and $f(x)$.
    // Currency is still protected by the escaped-dollar check and the
    // trailing-digit lookahead in tokenizeMath, so "$5" stays literal.
    if (/[A-Za-z]/.test(value)) return true;
    // Typical algebra: a_n = 3a_{n-1} + 2, n!/(r!(n-r)!) etc.
    if (/[+\-*/!|]/.test(value)) return true;
    // Ranges, ordered pairs, numeric lists and single values: $[10, 50]$,
    // $(1, 0)$, $9, 10, 11$, $0$.
    if (/[\[\],;]/.test(value)) return true;
    if (/^\d+(?:\.\d+)?$/.test(value)) return true;
    return false;
  }

  function cleanLatexForDisplay(expr) {
    let clean = String(expr == null ? '' : expr);
    UNICODE_FALLBACK.forEach(([pattern, replacement]) => {
      clean = clean.replace(pattern, replacement);
    });
    clean = clean
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/\^([0-9A-Za-z+\-])/g, '<sup>$1</sup>')
      .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
      .replace(/_([0-9A-Za-z+\-])/g, '<sub>$1</sub>')
      .replace(/\\([A-Za-z]+)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();

    // Drop stray maths delimiters but keep escaped currency readable.
    clean = clean
      .replace(/(^|[^\\])\$/g, '$1')
      .replace(/\\\$/g, '$')
      .replace(/\\%/g, '%')
      .replace(/\\_/g, '_')
      .replace(/\\/g, '');
    return clean;
  }

  function renderMath(expr, isBlock) {
    const value = String(expr == null ? '' : expr).trim();
    if (!value) return '';

    if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(value, {
          displayMode: !!isBlock,
          throwOnError: true,
          strict: 'ignore',
          trust: false
        });
      } catch (err) {
        // Fall through to readable Unicode.
      }
    }

    const clean = cleanLatexForDisplay(value);
    return isBlock
      ? `<span class="rt-math rt-math-block">${clean}</span>`
      : `<span class="rt-math">${clean}</span>`;
  }

  function tokenizeMath(text, tokens) {
    let output = text;

    // Block maths first: $$...$$ and \[...\]
    output = output.replace(/\$\$([\s\S]+?)\$\$/g, (match, expr) => {
      if (!hasMathSignal(expr)) return match;
      const index = tokens.length;
      tokens.push({ type: 'math', expr, block: true });
      return `${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });
    output = output.replace(/\\\[([\s\S]+?)\\\]/g, (match, expr) => {
      const index = tokens.length;
      tokens.push({ type: 'math', expr, block: true });
      return `${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });

    // Inline maths: $...$ and \(...\)
    output = output.replace(/(^|[^\\])\$((?:\\\$|[^$\n])+?)\$(?!\d)/g, (match, prefix, expr) => {
      if (!hasMathSignal(expr)) return match;
      const index = tokens.length;
      tokens.push({ type: 'math', expr, block: false });
      return `${prefix}${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });
    output = output.replace(/\\\(([\s\S]+?)\\\)/g, (match, expr) => {
      const index = tokens.length;
      tokens.push({ type: 'math', expr, block: false });
      return `${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });

    return output;
  }

  function render(text, options) {
    const opts = options || {};
    if (text == null) return '';

    const tokens = [];
    let source = String(text);

    // Protect fenced code (language tag preserved).
    source = source.replace(/```([A-Za-z0-9_+-]*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
      const index = tokens.length;
      tokens.push({ type: 'codeblock', lang: lang || '', code: code.replace(/\s+$/, '') });
      return `${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });

    // Protect inline code so TeX-looking code is never parsed as maths.
    source = source.replace(/`([^`\n]+)`/g, (match, code) => {
      const index = tokens.length;
      tokens.push({ type: 'code', code });
      return `${TOKEN_PREFIX}${index}${TOKEN_SUFFIX}`;
    });

    source = tokenizeMath(source, tokens);

    // Escaped dollar signs left outside maths are literal currency. Inside
    // maths they stay as \$ so KaTeX can render the currency symbol.
    source = source.replace(/\\\$/g, '$');

    let html = escapeHtml(source);
    html = html.replace(/\r\n/g, '\n').replace(/\n/g, '<br>');

    html = html.replace(/\u0000RT(\d+)\u0000/g, (match, indexText) => {
      const token = tokens[parseInt(indexText, 10)];
      if (!token) return '';
      if (token.type === 'math') return renderMath(token.expr, token.block);
      if (token.type === 'code') return `<code class="rt-inline-code">${escapeHtml(token.code)}</code>`;
      if (token.type === 'codeblock') {
        const langClass = token.lang ? ` class="language-${escapeHtml(token.lang)}"` : '';
        return `<pre class="rt-code-block"><code${langClass}>${escapeHtml(token.code)}</code></pre>`;
      }
      return '';
    });

    return html;
  }

  function renderInto(element, text, options) {
    if (!element) return;
    element.innerHTML = render(text, options);
  }

  function hasMath(text) {
    const tokens = [];
    const source = tokenizeMath(String(text == null ? '' : text), tokens);
    return tokens.some(token => token.type === 'math') || source !== String(text == null ? '' : text);
  }

  const api = { render, renderInto, renderMath, cleanLatexForDisplay, hasMath, escapeHtml };
  window.RichText = api;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})();

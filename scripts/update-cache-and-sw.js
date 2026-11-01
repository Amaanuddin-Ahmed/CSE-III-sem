// scripts/update-cache-and-sw.js
const fs = require('fs');
const path = require('path');

// 1. Update sw.js
let sw = fs.readFileSync('sw.js', 'utf8');

// Ensure latest cache name
sw = sw.replace(/const CACHE_NAME = '[^']+';/, "const CACHE_NAME = 'mgit-hub-v2026.11.01-fix242d-5';");

// Ensure network-first for solutions JSON
if (!sw.includes("url.pathname.includes('/data/solutions/')")) {
  const target = '// 2. Navigation and code/assets that ship with a deploy: network first.';
  const addition = `// 1.5 Solution datasets and JSON data: always network first so updates load instantly\n  if (url.pathname.includes('/data/solutions/') || url.pathname.includes('/solutions/') || url.pathname.endsWith('.json')) {\n    event.respondWith(networkFirst(event));\n    return;\n  }\n\n  `;
  sw = sw.replace(target, addition + target);
}
fs.writeFileSync('sw.js', sw, 'utf8');
console.log('[1/3] sw.js updated successfully.');

// 2. Update app.js
let app = fs.readFileSync('app.js', 'utf8');

// A. Add isStaleFallback function if not present
const staleHelper = `
  function isStaleFallbackSolution(text) {
    if (!text || typeof text !== 'string') return true;
    return text.includes('Establish the given mathematical assumptions') ||
           text.includes('Core Principle & Formal Definitions') ||
           text.includes('State the standard mathematical definitions') ||
           text.includes('State boundary conditions or edge cases') ||
           text.includes('Step 1: Establish the given mathematical');
  }

  // Purge any stale generic fallback solutions from localStorage immediately
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith('mgit_sol_')) {
        const val = localStorage.getItem(k);
        if (isStaleFallbackSolution(val)) {
          localStorage.removeItem(k);
        }
      }
    }
  } catch (e) {}
`;

if (!app.includes('isStaleFallbackSolution')) {
  app = app.replace('const solutionsCache = {};', 'const solutionsCache = {};\n' + staleHelper);
}

// B. Update getSolutionForQuestion in app.js
const oldGetSol = `async function getSolutionForQuestion(q) {
    if (!q || !q.subjectId) return null;
    const subId = q.subjectId.toUpperCase();

    // 1. Check in-memory cache
    if (!solutionsCache[subId]) {
      try {
        const res = await fetch(\`data/solutions/\${subId}.json\`);
        if (res.ok) {
          const json = await res.json();
          solutionsCache[subId] = json.solutions || json || {};
        } else {
          solutionsCache[subId] = {};
        }
      } catch (e) {
        solutionsCache[subId] = {};
      }
    }

    const subSolutions = solutionsCache[subId] || {};
    const normKey = subId.toLowerCase() + '|' + (q.question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\\s+/g, ' ').trim();
    
    // Strict exact match only - prevents cross-question duplicate answers
    if (subSolutions[normKey]) return subSolutions[normKey];

    // Check localStorage cache for previously AI-generated answers
    try {
      const localStored = localStorage.getItem('mgit_sol_' + normKey);
      if (localStored) {
        const parsed = JSON.parse(localStored);
        if (parsed && parsed.answerMd) return parsed;
      }
    } catch (e) {}

    return null;
  }`;

const newGetSol = `async function getSolutionForQuestion(q) {
    if (!q || !q.subjectId) return null;
    const subId = q.subjectId.toUpperCase();

    // 1. Check in-memory cache (with cache buster query string to bypass stale SW/browser cache)
    if (!solutionsCache[subId]) {
      try {
        const res = await fetch(\`data/solutions/\${subId}.json?v=\${Date.now()}\`, { cache: 'no-cache' });
        if (res.ok) {
          const json = await res.json();
          solutionsCache[subId] = json.solutions || json || {};
        } else {
          solutionsCache[subId] = {};
        }
      } catch (e) {
        solutionsCache[subId] = {};
      }
    }

    const subSolutions = solutionsCache[subId] || {};
    const normKey = subId.toLowerCase() + '|' + (q.question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\\s+/g, ' ').trim();
    
    // Strict exact match only - ensure not stale template
    if (subSolutions[normKey] && !isStaleFallbackSolution(subSolutions[normKey].answerMd)) {
      return subSolutions[normKey];
    }
    if (subSolutions[q.id] && !isStaleFallbackSolution(subSolutions[q.id].answerMd)) {
      return subSolutions[q.id];
    }

    // Check localStorage cache for previously AI-generated answers
    try {
      const localStored = localStorage.getItem('mgit_sol_' + normKey);
      if (localStored) {
        const parsed = JSON.parse(localStored);
        if (parsed && parsed.answerMd && !isStaleFallbackSolution(parsed.answerMd)) {
          return parsed;
        } else {
          localStorage.removeItem('mgit_sol_' + normKey);
        }
      }
    } catch (e) {}

    return null;
  }`;

if (app.includes(oldGetSol)) {
  app = app.replace(oldGetSol, newGetSol);
} else {
  // Try regex replace
  app = app.replace(/async function getSolutionForQuestion\(q\)[\s\S]*?return null;\s*\}/, newGetSol);
}

// C. In openSolutionModal, also verify preSolution is not stale
const oldPreSolCheck = `if (preSolution && preSolution.answerMd) {
      if (bodyEl) bodyEl.innerHTML = formatGeminiResponse(preSolution.answerMd);
      if (statusChip) statusChip.textContent = 'Model Academic Solution';
      return;
    }`;

const newPreSolCheck = `if (preSolution && preSolution.answerMd && !isStaleFallbackSolution(preSolution.answerMd)) {
      if (bodyEl) bodyEl.innerHTML = formatGeminiResponse(preSolution.answerMd);
      if (statusChip) statusChip.textContent = 'Model Academic Solution';
      return;
    }`;

if (app.includes(oldPreSolCheck)) {
  app = app.replace(oldPreSolCheck, newPreSolCheck);
}

fs.writeFileSync('app.js', app, 'utf8');
console.log('[2/3] app.js updated successfully.');

// 3. Update pwa-install.js to trigger immediate registration update
let pwa = fs.readFileSync('pwa-install.js', 'utf8');
pwa = pwa.replace(
  "navigator.serviceWorker.register('./sw.js')",
  "navigator.serviceWorker.register('./sw.js').then(r => { r.update(); return r; })"
);
fs.writeFileSync('pwa-install.js', pwa, 'utf8');
console.log('[3/3] pwa-install.js updated successfully.');

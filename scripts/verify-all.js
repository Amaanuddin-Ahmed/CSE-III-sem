const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');

console.log('--- Verifying MGIT PYQ Hub Upgrades ---');

// 1. Verify notes-summaries.js
const summariesSrc = fs.readFileSync(path.join(root, 'notes-summaries.js'), 'utf8');
const sCtx = {};
vm.createContext(sCtx);
vm.runInContext(summariesSrc + ';globalThis.S = NOTE_SUMMARIES;', sCtx);
const summaries = sCtx.S;
console.log('✓ notes-summaries.js: Loaded successfully, total notes:', Object.keys(summaries).length);
if (Object.keys(summaries).length < 61) {
  throw new Error('Expected 61 note summaries, got: ' + Object.keys(summaries).length);
}

// Check sample summary
const dm1 = summaries['NOTE-DM-01'];
console.log('✓ Sample NOTE-DM-01 title:', dm1.title, '| topics count:', dm1.topics.length, '| formulas:', dm1.topics.reduce((acc, t) => acc + (t.formulas?.length || 0), 0));

// 2. Verify syntax of app.js and sw.js
const { execSync } = require('child_process');
execSync('node -c app.js', { cwd: root });
console.log('✓ app.js syntax check passed.');
execSync('node -c sw.js', { cwd: root });
console.log('✓ sw.js syntax check passed.');

// 3. Verify index.html loads notes-summaries.js
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!html.includes('notes-summaries.js')) {
  throw new Error('index.html is missing script tag for notes-summaries.js');
}
console.log('✓ index.html loads notes-summaries.js.');

// 4. Verify style.css button emphasis
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
if (!css.includes('.note-open-btn') || !css.includes('.note-read-btn')) {
  throw new Error('style.css missing note button classes');
}
console.log('✓ style.css includes .note-open-btn and .note-read-btn with custom styling.');

// 5. Verify sw.js caches notes-summaries.js
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
if (!sw.includes("'notes-summaries.js'")) {
  throw new Error('sw.js missing notes-summaries.js in STATIC_ASSETS');
}
console.log('✓ sw.js caches notes-summaries.js.');

console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY!');

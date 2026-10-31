const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- RUNNING AUDIT & INTEGRITY CHECK ---');

const baseDir = path.join(__dirname, '..');

// 1. Verify JS Syntax of modified files
const filesToTest = [
  'app.js',
  'mascot.js',
  'practice-runner.js',
  'activity-tracker.js',
  'pwa-install.js',
  'scope-map.js'
];

let hasErrors = false;
filesToTest.forEach(rel => {
  const fullPath = path.join(baseDir, rel);
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    new Function(content);
    console.log(`[PASS] Syntax check: ${rel}`);
  } catch (e) {
    console.error(`[FAIL] Syntax error in ${rel}:`, e.message);
    hasErrors = true;
  }
});

// Check api/gemini.js with node -c
try {
  execSync(`node -c "${path.join(baseDir, 'api', 'gemini.js')}"`);
  console.log('[PASS] Syntax check: api/gemini.js');
} catch (e) {
  console.error('[FAIL] Syntax error in api/gemini.js:', e.message);
  hasErrors = true;
}

// 2. Verify HTML IDs referenced in JS
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const requiredIds = [
  'flashcardContinueModal',
  'flashContinueTitle',
  'flashContinueText',
  'flashContinueSubText',
  'flashContinueNextBtn',
  'flashContinueNotesBtn',
  'flashContinueExitBtn',
  'askWithModal',
  'askWithModalTitle',
  'closeAskWithModalBtn',
  'askOptionBuiltin',
  'askOptionChatgpt',
  'askOptionGemini',
  'solutionModal',
  'closeSolutionModalBtn',
  'solSubjectBadge',
  'solMarksBadge',
  'solUnitBadge',
  'solQuestionTitle',
  'solAnswerBody',
  'solAskAiDeeperBtn',
  'solCloseBtn',
  'modalViewSolutionBtn',
  'modalSolveAiBtn',
  'sessionProgressFill',
  'sessionProgressTrack',
  'sessionCurrentCount',
  'sessionTotalCount',
  'sessionCounterPill',
  'fcCounter'
];

requiredIds.forEach(id => {
  if (!indexHtml.includes(`id="${id}"`)) {
    console.error(`[FAIL] Missing ID in index.html: ${id}`);
    hasErrors = true;
  } else {
    console.log(`[PASS] ID found in index.html: ${id}`);
  }
});

// 3. Check for stray question marks in mascot.js
const mascotContent = fs.readFileSync(path.join(baseDir, 'mascot.js'), 'utf8');
if (mascotContent.includes('<text x="124" y="11"') || mascotContent.includes('>?<')) {
  console.error('[FAIL] Stray question mark found in mascot.js!');
  hasErrors = true;
} else {
  console.log('[PASS] mascot.js clean of stray ? glyphs');
}

// 4. Check for 1 Mark occurrences in app.js
const appContent = fs.readFileSync(path.join(baseDir, 'app.js'), 'utf8');
if (appContent.includes("'1 Mark'") || appContent.includes('"1 Mark"')) {
  console.error('[FAIL] Found un-normalized 1 Mark string in app.js!');
  hasErrors = true;
} else {
  console.log('[PASS] Marks normalized to 2 Marks in app.js');
}

if (!hasErrors) {
  console.log('\n>>> ALL VERIFICATION CHECKS PASSED PERFECTLY! <<<');
} else {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
}

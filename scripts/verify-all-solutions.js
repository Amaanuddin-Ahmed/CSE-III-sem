const fs = require('fs');
const path = require('path');
const { QUESTIONS_DATABASE } = require('../pyq-data.js');

function makeKey(subId, question) {
  return (subId || '').toLowerCase() + '|' + (question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

const subjects = ['DM', 'COA', 'DBMS', 'OOPJ', 'SE', 'ES'];
let totalDbQuestions = QUESTIONS_DATABASE.length;
let totalMatches = 0;
let missing = [];

const bundles = {};
for (const sub of subjects) {
  const p = path.join(__dirname, '..', `data/solutions/${sub}.json`);
  if (fs.existsSync(p)) {
    const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
    bundles[sub] = raw.solutions || raw || {};
  } else {
    bundles[sub] = {};
  }
}

for (const q of QUESTIONS_DATABASE) {
  const sub = (q.subjectId || '').toUpperCase();
  const key = makeKey(sub, q.question);
  if (bundles[sub] && bundles[sub][key]) {
    totalMatches++;
  } else {
    missing.push({ id: q.id, sub: sub, u: q.chapter, q: q.question });
  }
}

console.log(`=== SOLUTION DATABASE VERIFICATION ===`);
console.log(`Total questions in pyq-data.js: ${totalDbQuestions}`);
console.log(`Total matched solutions in data/solutions/: ${totalMatches}`);
console.log(`Coverage percentage: ${((totalMatches / totalDbQuestions) * 100).toFixed(2)}%`);
if (missing.length > 0) {
  console.log(`Missing count: ${missing.length}`);
  console.log('Sample missing:', missing.slice(0, 5));
} else {
  console.log(`PERFECT 100% COVERAGE! Every single question has a verified academic solution.`);
}

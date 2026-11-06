const fs = require('fs');

const coa = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));
const sol = coa.solutions;

const boilerplateKeys = [];
for (const [k, v] of Object.entries(sol)) {
  const s = JSON.stringify(v);
  if (s.includes('Core Engineering Definition & Architectural Principle') || s.includes('Adhering to structured architectural design ensures optimal throughput')) {
    boilerplateKeys.push(k);
  }
}

console.log('Total boilerplate keys:', boilerplateKeys.length);
console.log('Sample keys:', boilerplateKeys.slice(0, 10));

let code1 = fs.readFileSync('pyq-data.js', 'utf8')
  .replace('const SUBJECTS_DATA', 'globalThis.SUBJECTS_DATA')
  .replace('const NOTES_DATA', 'globalThis.NOTES_DATA')
  .replace('const QUESTIONS_DATABASE', 'globalThis.QUESTIONS_DATABASE');
eval(code1);

const questionsToFix = QUESTIONS_DATABASE.filter(q => q.subjectId === 'COA' && (boilerplateKeys.includes(q.id) || boilerplateKeys.includes('coa|' + q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim())));
console.log('Matching questions in QUESTIONS_DATABASE:', questionsToFix.length);

fs.writeFileSync('scripts/coa_boilerplate_questions.json', JSON.stringify(questionsToFix, null, 2), 'utf8');
console.log('Saved to scripts/coa_boilerplate_questions.json');

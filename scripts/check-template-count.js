const fs = require('fs');

const coa = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));
const sol = coa.solutions || coa;

const questions = JSON.parse(fs.readFileSync('data/coa-unit-3-4-5-questions.json', 'utf8'));

let templateCount = 0;
let realCount = 0;
let missingCount = 0;

questions.forEach(q => {
  const normKey = q.normKey;
  const entry = sol[normKey] || sol[q.id];
  if (!entry) {
    missingCount++;
  } else if (entry.answerMd.includes('MR-25 Regulation') || entry.answerMd.includes('deterministic control sequencing') || entry.answerMd.includes('Core Engineering Definition & Architectural Principle')) {
    templateCount++;
  } else {
    realCount++;
  }
});

console.log('COA Units 3, 4, 5 solution status:');
console.log('Template / Generic solutions to replace:', templateCount);
console.log('Already detailed solutions:', realCount);
console.log('Missing completely:', missingCount);
console.log('Total questions in Units 3, 4, 5:', questions.length);

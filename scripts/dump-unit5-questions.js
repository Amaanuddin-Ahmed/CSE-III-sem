const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('data/coa-unit-3-4-5-questions.json', 'utf8'));
const u5 = questions.filter(q => Number(q.chapter) === 5);

console.log('Unit 5 total questions:', u5.length);
u5.forEach((q, idx) => {
  console.log(`${idx + 1}. [${q.marks}M] (${q.id}) ${q.question}`);
});

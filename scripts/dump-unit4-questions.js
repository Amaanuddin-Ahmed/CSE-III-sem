const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('data/coa-unit-3-4-5-questions.json', 'utf8'));
const u4 = questions.filter(q => Number(q.chapter) === 4);

console.log('Unit 4 total questions:', u4.length);
u4.forEach((q, idx) => {
  console.log(`${idx + 1}. [${q.marks}M] (${q.id}) ${q.question}`);
});

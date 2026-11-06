const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('data/coa-unit-3-4-5-questions.json', 'utf8'));
const u3 = questions.filter(q => Number(q.chapter) === 3);

console.log('Unit 3 total questions:', u3.length);
u3.forEach((q, idx) => {
  console.log(`${idx + 1}. [${q.marks}M] (${q.id}) ${q.question}`);
});

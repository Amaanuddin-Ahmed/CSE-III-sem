const fs = require('fs');

const coa = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));
const sol = coa.solutions || coa;

// Search for cache incoherence
const matches = [];
for (const [k, v] of Object.entries(sol)) {
  if (k.includes('incoherence') || k.includes('cache')) {
    matches.push({ key: k, answer: (v.answerMd || '').slice(0, 300) });
  }
}

console.log('Matches count:', matches.length);
matches.slice(0, 5).forEach(m => {
  console.log('\n--- KEY:', m.key);
  console.log(m.answer);
});

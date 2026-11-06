const fs = require('fs');

const dm = JSON.parse(fs.readFileSync('data/solutions/DM.json', 'utf8'));
const coa = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));

const dmSampleKey = Object.keys(dm.solutions)[0];
const dmSample = dm.solutions[dmSampleKey];

const coaSampleKey = Object.keys(coa.solutions)[0];
const coaSample = coa.solutions[coaSampleKey];

console.log('=== DM Sample ===');
console.log('Key:', dmSampleKey);
console.log('Object structure:', Object.keys(dmSample));
console.log('AnswerMd (first 400 chars):\n', dmSample.answerMd.slice(0, 400));

console.log('\n=== COA Sample ===');
console.log('Key:', coaSampleKey);
console.log('Object structure:', Object.keys(coaSample));
console.log('AnswerMd (first 400 chars):\n', coaSample.answerMd.slice(0, 400));

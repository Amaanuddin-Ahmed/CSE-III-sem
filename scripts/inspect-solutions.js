const fs = require('fs');

const dm = JSON.parse(fs.readFileSync('data/solutions/DM.json', 'utf8'));
const coa = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));

console.log('DM solution keys count:', Object.keys(dm.solutions || dm).length);
console.log('COA solution keys count:', Object.keys(coa.solutions || coa).length);

// Sample a key from DM
const dmKeys = Object.keys(dm.solutions || dm);
console.log('\nSample DM key:', dmKeys[0]);
console.log('Sample DM solution preview:\n', (dm.solutions || dm)[dmKeys[0]].answerMd.slice(0, 300));

// Sample a key from COA
const coaKeys = Object.keys(coa.solutions || coa);
console.log('\nSample COA key:', coaKeys[0]);
console.log('Sample COA solution preview:\n', (coa.solutions || coa)[coaKeys[0]].answerMd.slice(0, 300));

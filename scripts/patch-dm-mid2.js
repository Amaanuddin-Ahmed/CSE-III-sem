// scripts/patch-dm-mid2.js
const fs = require('fs');
const path = require('path');

// 1. Gather all solutions
const u3_1 = require('./gen-unit3-part1.js');
const u3_2 = require('./gen-unit3-part2.js');
const u3_3 = require('./gen-unit3-part3.js');
const u3_4 = require('./gen-unit3-part4.js');
const u4_1 = require('./gen-unit4-part1.js');
const u4_2 = require('./gen-unit4-part2.js');
const u4_3 = require('./gen-unit4-part3.js');
const u5_1 = require('./gen-unit5-part1.js');
const u5_2 = require('./gen-unit5-part2.js');

const allNewSolutions = Object.assign({}, u3_1, u3_2, u3_3, u3_4, u4_1, u4_2, u4_3, u5_1, u5_2);
console.log(`Total new solutions loaded: ${Object.keys(allNewSolutions).length}`);

// 2. Load dm-unsolved list
const unsolved = require('./dm-unsolved.json');
console.log(`Total unsolved items to patch: ${unsolved.length}`);

// 3. Load master DM.json
const dmJsonPath = path.join(__dirname, '..', 'data', 'solutions', 'DM.json');
const dmData = JSON.parse(fs.readFileSync(dmJsonPath, 'utf8'));

let filesPatched = 0;
let jsonEntriesPatched = 0;

for (const item of unsolved) {
  const sol = allNewSolutions[item.id];
  if (!sol) {
    console.warn(`WARNING: Missing solution for ${item.id}`);
    continue;
  }

  // Update file on disk
  const unitDir = path.join(__dirname, '..', 'solutions', 'DM', `unit-${item.unit}`);
  const filePath = path.join(unitDir, item.file);

  const filePayload = {
    id: item.id,
    subjectId: 'DM',
    chapter: item.unit,
    part: item.marks === 1 || item.marks === 2 ? 'A' : 'B',
    marks: item.marks,
    question: item.question,
    answerMd: sol.answerMd
  };

  fs.writeFileSync(filePath, JSON.stringify(filePayload, null, 2), 'utf8');
  filesPatched++;

  // Update in DM.json
  const normKey = 'dm|' + (item.question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  
  dmData.solutions[normKey] = {
    key: normKey,
    subjectId: 'DM',
    question: item.question,
    chapter: item.unit,
    marks: item.marks,
    answerMd: sol.answerMd
  };

  // Also key by item.id if needed
  dmData.solutions[item.id] = {
    key: item.id,
    subjectId: 'DM',
    question: item.question,
    chapter: item.unit,
    marks: item.marks,
    answerMd: sol.answerMd
  };

  jsonEntriesPatched++;
}

dmData.updatedAt = new Date().toISOString();
fs.writeFileSync(dmJsonPath, JSON.stringify(dmData, null, 2), 'utf8');

console.log(`Successfully patched ${filesPatched} individual JSON files.`);
console.log(`Successfully patched ${jsonEntriesPatched} entries in data/solutions/DM.json.`);

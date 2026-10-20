const fs = require('fs');
const app = fs.readFileSync('CSE-III-sem/app.js', 'utf8');

const oldRefs = [
  'yearCheckboxesRow',
  'questionsListContainer',
  'setupYearCheckboxes',
  'renderYearCheckboxes'
];

oldRefs.forEach(ref => {
  const count = (app.match(new RegExp('\\b' + ref + '\\b', 'g')) || []).length;
  console.log(`${ref}: ${count} occurrences`);
});

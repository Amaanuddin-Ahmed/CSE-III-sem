const fs = require('fs');

let code1 = fs.readFileSync('pyq-data.js', 'utf8')
  .replace('const SUBJECTS_DATA', 'globalThis.SUBJECTS_DATA')
  .replace('const NOTES_DATA', 'globalThis.NOTES_DATA')
  .replace('const QUESTIONS_DATABASE', 'globalThis.QUESTIONS_DATABASE');
eval(code1);

let code2 = fs.readFileSync('scope-map.js', 'utf8')
  .replace('const EXAM_CONFIG', 'globalThis.EXAM_CONFIG')
  .replace('const SCOPE_MAP', 'globalThis.SCOPE_MAP');
eval(code2);

console.log('--- MID-2 VERIFICATION ---');
['DM', 'COA', 'OOPJ', 'DBMS', 'SE'].forEach(sub => {
  const qList = QUESTIONS_DATABASE.filter(q => q.subjectId === sub);
  const mid2All = qList.filter(q => isItemInScope(q, 'mid2'));
  const mid2U3 = qList.filter(q => q.chapter === 3 && isItemInScope(q, 'mid2'));
  const totalU3 = qList.filter(q => q.chapter === 3);
  console.log(`${sub}: Total Mid-2 = ${mid2All.length} | Unit 3 in Mid-2 = ${mid2U3.length} of ${totalU3.length}`);
});

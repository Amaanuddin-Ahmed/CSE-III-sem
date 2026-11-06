const fs = require('fs');
let code1 = fs.readFileSync('pyq-data.js', 'utf8')
  .replace('const SUBJECTS_DATA', 'globalThis.SUBJECTS_DATA')
  .replace('const NOTES_DATA', 'globalThis.NOTES_DATA')
  .replace('const QUESTIONS_DATABASE', 'globalThis.QUESTIONS_DATABASE');
eval(code1);

const sampleNote = NOTES_DATA.find(n => n.subjectId === 'COA');
console.log(JSON.stringify(sampleNote, null, 2));

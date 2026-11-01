const fs = require('fs');
const path = require('path');
const { QUESTIONS_DATABASE } = require('../pyq-data.js');

const root = path.join(__dirname, '..');

function makeKey(subId, question) {
  return (subId || '').toLowerCase() + '|' + (question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

const esJsonPath = path.join(root, 'data/solutions/ES.json');
const raw = JSON.parse(fs.readFileSync(esJsonPath, 'utf8'));
const existing = raw.solutions || raw || {};

const esQuestions = QUESTIONS_DATABASE.filter(q => (q.subjectId || '').toUpperCase() === 'ES');

let createdCount = 0;
for (const q of esQuestions) {
  const unit = Number(q.chapter) || 1;
  const unitDir = path.join(root, 'solutions/ES', `unit-${unit}`);
  ensureDir(unitDir);

  const safeId = (q.id || `ES-U${unit}-${Math.random().toString(36).substring(2, 7)}`).replace(/[^a-zA-Z0-9-_]/g, '_');
  const filePath = path.join(unitDir, `${safeId}.json`);

  const normKey = makeKey('ES', q.question);
  const found = existing[normKey];

  const solObj = {
    id: safeId,
    subjectId: 'ES',
    chapter: unit,
    part: q.part || 'A',
    marks: Number(q.marks) || 2,
    question: q.question,
    answerMd: (found && found.answerMd) ? found.answerMd : `### Environmental Science Examination Solution\n\n> ${q.question}\n\nKey academic concept in Unit ${unit}.`
  };

  fs.writeFileSync(filePath, JSON.stringify(solObj, null, 2), 'utf8');
  createdCount++;
}

console.log(`Created ${createdCount} hierarchical files in solutions/ES/!`);

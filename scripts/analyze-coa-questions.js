const fs = require('fs');

const pyqContent = fs.readFileSync('pyq-data.js', 'utf8');

// evaluate QUESTIONS_DATABASE
const fn = new Function(pyqContent + '; return { SUBJECTS_DATA, QUESTIONS_DATABASE };');
const { SUBJECTS_DATA, QUESTIONS_DATABASE } = fn();

console.log('Total questions in database:', QUESTIONS_DATABASE.length);

const coaQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === 'COA');
console.log('Total COA questions:', coaQuestions.length);

const unit3 = coaQuestions.filter(q => Number(q.chapter) === 3);
const unit4 = coaQuestions.filter(q => Number(q.chapter) === 4);
const unit5 = coaQuestions.filter(q => Number(q.chapter) === 5);

console.log('Unit 3 questions:', unit3.length);
console.log('Unit 4 questions:', unit4.length);
console.log('Unit 5 questions:', unit5.length);
console.log('Total Units 3, 4, 5 questions:', unit3.length + unit4.length + unit5.length);

// Let's analyze marks distribution
const breakdown = (arr) => {
  const map = {};
  arr.forEach(q => {
    const m = q.marks || 'unknown';
    map[m] = (map[m] || 0) + 1;
  });
  return map;
};

console.log('Unit 3 marks:', breakdown(unit3));
console.log('Unit 4 marks:', breakdown(unit4));
console.log('Unit 5 marks:', breakdown(unit5));

// Unique questions by normalized string
const uniqueMap = new Map();
[...unit3, ...unit4, ...unit5].forEach(q => {
  const norm = 'coa|' + (q.question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!uniqueMap.has(norm)) {
    uniqueMap.set(norm, {
      id: q.id,
      chapter: q.chapter,
      marks: q.marks,
      part: q.part,
      question: q.question,
      normKey: norm,
      instances: 1
    });
  } else {
    uniqueMap.get(norm).instances++;
  }
});

console.log('Unique normalized questions in Units 3, 4, 5:', uniqueMap.size);

// Save list of unique questions to a JSON file for processing
const uniqueList = Array.from(uniqueMap.values());
fs.writeFileSync('data/coa-unit-3-4-5-questions.json', JSON.stringify(uniqueList, null, 2), 'utf8');
console.log('Saved data/coa-unit-3-4-5-questions.json');

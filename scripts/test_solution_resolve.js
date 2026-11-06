const fs = require('fs');

let pyq = fs.readFileSync('pyq-data.js', 'utf8')
  .replace('const SUBJECTS_DATA', 'globalThis.SUBJECTS_DATA')
  .replace('const NOTES_DATA', 'globalThis.NOTES_DATA')
  .replace('const QUESTIONS_DATABASE', 'globalThis.QUESTIONS_DATABASE');
eval(pyq);

const coaData = JSON.parse(fs.readFileSync('data/solutions/COA.json', 'utf8'));

// Mock solutionsCache
const solutionsCache = {
  COA: coaData.solutions
};

function isStaleFallbackSolution(text) {
  if (!text || typeof text !== 'string') return true;
  return text.includes('Establish the given mathematical assumptions') ||
         text.includes('Core Principle & Formal Definitions') ||
         text.includes('State the standard mathematical definitions') ||
         text.includes('State boundary conditions or edge cases') ||
         text.includes('Step 1: Establish the given mathematical') ||
         text.includes('Core Engineering Definition & Architectural Principle') ||
         text.includes('Adhering to structured architectural design ensures optimal throughput');
}

function getSolutionForQuestion(q) {
  const subId = q.subjectId.toUpperCase();
  const subSolutions = solutionsCache[subId] || {};
  const normKey = subId.toLowerCase() + '|' + (q.question || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

  const candidate = subSolutions[normKey] || subSolutions[q.id];
  if (candidate) {
    const text = typeof candidate === 'string' ? candidate : (candidate.answerMd || candidate.solution || candidate.answer || '');
    if (text && !isStaleFallbackSolution(text)) {
      return { answerMd: text, question: q.question, subjectId: q.subjectId };
    }
  }
  return null;
}

const testQ = QUESTIONS_DATABASE.find(q => q.id === 'COA-A5-0383');
console.log('Testing question:', testQ.id, testQ.question);
const sol = getSolutionForQuestion(testQ);
console.log('Solution resolved successfully:', Boolean(sol));
if (sol) {
  console.log('First 200 chars of solution:\n', sol.answerMd.substring(0, 200));
}

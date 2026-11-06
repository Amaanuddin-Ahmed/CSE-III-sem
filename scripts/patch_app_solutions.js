const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

// 1. Update isStaleFallbackSolution
const oldStaleFn = `function isStaleFallbackSolution(text) {
    if (!text || typeof text !== 'string') return true;
    return text.includes('Establish the given mathematical assumptions') ||
           text.includes('Core Principle & Formal Definitions') ||
           text.includes('State the standard mathematical definitions') ||
           text.includes('State boundary conditions or edge cases') ||
           text.includes('Step 1: Establish the given mathematical');
  }`;

const newStaleFn = `function isStaleFallbackSolution(text) {
    if (!text || typeof text !== 'string') return true;
    return text.includes('Establish the given mathematical assumptions') ||
           text.includes('Core Principle & Formal Definitions') ||
           text.includes('State the standard mathematical definitions') ||
           text.includes('State boundary conditions or edge cases') ||
           text.includes('Step 1: Establish the given mathematical') ||
           text.includes('Core Engineering Definition & Architectural Principle') ||
           text.includes('Adhering to structured architectural design ensures optimal throughput');
  }`;

app = app.replace(oldStaleFn, newStaleFn);

// 2. Update getSolutionForQuestion
const oldGetSol = `    // Strict exact match only - ensure not stale template
    if (subSolutions[normKey] && !isStaleFallbackSolution(subSolutions[normKey].answerMd)) {
      return subSolutions[normKey];
    }
    if (subSolutions[q.id] && !isStaleFallbackSolution(subSolutions[q.id].answerMd)) {
      return subSolutions[q.id];
    }`;

const newGetSol = `    // Support both preSolution object with .answerMd and direct markdown strings
    const candidate = subSolutions[normKey] || subSolutions[q.id];
    if (candidate) {
      const text = typeof candidate === 'string' ? candidate : (candidate.answerMd || candidate.solution || candidate.answer || '');
      if (text && !isStaleFallbackSolution(text)) {
        return { answerMd: text, question: q.question, subjectId: q.subjectId };
      }
    }`;

app = app.replace(oldGetSol, newGetSol);

// 3. Update localStorage check in getSolutionForQuestion
const oldLocalSol = `    // Check localStorage cache for previously AI-generated answers
    try {
      const localStored = localStorage.getItem('mgit_sol_' + normKey);
      if (localStored) {
        const parsed = JSON.parse(localStored);
        if (parsed && parsed.answerMd && !isStaleFallbackSolution(parsed.answerMd)) {
          return parsed;
        } else {
          localStorage.removeItem('mgit_sol_' + normKey);
        }
      }
    } catch (e) {}`;

const newLocalSol = `    // Check localStorage cache for previously AI-generated answers
    try {
      const localStored = localStorage.getItem('mgit_sol_' + normKey);
      if (localStored) {
        const parsed = JSON.parse(localStored);
        const text = parsed ? (typeof parsed === 'string' ? parsed : (parsed.answerMd || parsed.solution || parsed.answer || '')) : '';
        if (text && !isStaleFallbackSolution(text)) {
          return { answerMd: text, question: q.question, subjectId: q.subjectId };
        } else {
          localStorage.removeItem('mgit_sol_' + normKey);
        }
      }
    } catch (e) {}`;

app = app.replace(oldLocalSol, newLocalSol);

// 4. Update solAskAiDeeperBtn click handler in openSolutionModal
const oldAskDeeper = `    const askDeeperBtn = document.getElementById('solAskAiDeeperBtn');
    if (askDeeperBtn) {
      askDeeperBtn.onclick = () => {
        const promptText = buildAskWithAiPrompt(q);
        closeSolutionModal();
        openGeminiModal();
        if (el.geminiQueryInput) {
          el.geminiQueryInput.value = promptText;
          el.geminiQueryInput.dispatchEvent(new Event('input'));
          el.geminiQueryInput.focus();
        }
      };
    }`;

const newAskDeeper = `    const askDeeperBtn = document.getElementById('solAskAiDeeperBtn');
    if (askDeeperBtn) {
      askDeeperBtn.onclick = () => {
        closeSolutionModal();
        openAskWithModal(q);
      };
    }`;

app = app.replace(oldAskDeeper, newAskDeeper);

// 5. Update preSolution check in openSolutionModal
const oldPreSolCheck = `    if (preSolution && preSolution.answerMd && !isStaleFallbackSolution(preSolution.answerMd)) {
      if (bodyEl) bodyEl.innerHTML = formatGeminiResponse(preSolution.answerMd);
      if (statusChip) statusChip.textContent = 'Model Academic Solution';
      return;
    }`;

const newPreSolCheck = `    const solutionText = preSolution ? (preSolution.answerMd || (typeof preSolution === 'string' ? preSolution : '')) : '';
    if (solutionText && !isStaleFallbackSolution(solutionText)) {
      if (bodyEl) bodyEl.innerHTML = formatGeminiResponse(solutionText);
      if (statusChip) statusChip.textContent = 'Model Academic Solution';
      return;
    }`;

app = app.replace(oldPreSolCheck, newPreSolCheck);

fs.writeFileSync('app.js', app, 'utf8');
console.log('app.js successfully patched for solutions and Ask with AI modal!');

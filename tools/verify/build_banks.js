/**
 * Build the three practice banks from the audited legacy banks plus the
 * canonical MR-25 content in content-audit/canonical/*.json.
 *
 * Outputs:
 *   data/sem-practice.js   - complete deck, Units 1-5
 *   data/mid1-practice.js  - Units 1-2 + Unit 3 first half
 *   data/mid2-practice.js  - Unit 3 second half + Units 4-5
 *   content-audit/build_manifest.json
 *
 * The script never edits the UI or the app schema. It only rewrites the
 * static content banks and preserves every existing card ID it keeps.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'data');
const CANON = path.join(ROOT, 'content-audit', 'canonical');
const SUBJECTS = ['DM', 'COA', 'OOPJ', 'DBMS', 'SE', 'ES', 'IE'];
const BANKS = ['sem', 'mid1', 'mid2'];

const legacy = {
  sem: require(path.join(ROOT, 'content-audit', '.legacy', 'sem-practice.js')),
  mid1: require(path.join(ROOT, 'content-audit', '.legacy', 'mid1-practice.js')),
  mid2: require(path.join(ROOT, 'content-audit', '.legacy', 'mid2-practice.js'))
};
const syllabusMap = require(path.join(ROOT, 'content-audit', 'syllabus_map.json'));
const { SCOPE_MAP } = require(path.join(ROOT, 'scope-map.js'));

const canonical = {};
for (const s of SUBJECTS) {
  canonical[s] = JSON.parse(fs.readFileSync(path.join(CANON, s + '.json'), 'utf8'));
}

const topicScope = new Map();
for (const s of SUBJECTS) {
  const units = syllabusMap.subjects[s].units;
  for (const u of Object.keys(units)) {
    for (const t of units[u].topics) topicScope.set(t.id, t.scope);
  }
}

function clone(v) {
  return JSON.parse(JSON.stringify(v));
}

function isTrueFalse(card) {
  return /-M2-TF-\d+$/.test(card.id) ||
    (card.type === 'mcq' && Array.isArray(card.options) && card.options.length === 2 &&
      String(card.options[0]).trim().toLowerCase() === 'true' &&
      String(card.options[1]).trim().toLowerCase() === 'false');
}

function normalizeType(card) {
  if (isTrueFalse(card)) {
    card.type = 'tf';
    delete card.options;
    delete card.accepted;
    return;
  }
  if (card.type === 'mcq') {
    delete card.accepted;
  } else if (card.type === 'fib') {
    delete card.options;
    delete card.answerIndex;
  }
}

function classifyByKeywords(card, subject) {
  const split = SCOPE_MAP.unit3Splits[subject];
  if (!split) return null;
  const text = [card.topic, card.question, card.front, card.back]
    .filter(Boolean).join(' ').toLowerCase();
  let mid1 = 0;
  let mid2 = 0;
  for (const kw of split.mid1Keywords) if (text.includes(kw.toLowerCase())) mid1 += 2;
  for (const kw of split.mid2Keywords) if (text.includes(kw.toLowerCase())) mid2 += 2;
  if (mid1 > mid2) return 'mid1';
  if (mid2 > mid1) return 'mid2';
  return null;
}

function decideUnit3Scope(card, subject, banks, origin, fix) {
  if (fix && (fix.scope === 'mid1' || fix.scope === 'mid2')) return fix.scope;
  if (origin !== 'canonical') {
    if (banks.has('mid1') && banks.has('mid2')) return 'both';
    if (banks.has('mid1')) return 'mid1';
    if (banks.has('mid2')) return 'mid2';
  }
  if (card.scope === 'mid1' || card.scope === 'mid2') return card.scope;
  if (card.topicId && topicScope.has(card.topicId)) {
    const sc = topicScope.get(card.topicId);
    if (sc === 'mid1' || sc === 'mid2') return sc;
  }
  return classifyByKeywords(card, subject) || 'mid1';
}

function rotateForBalance(cards) {
  // Deterministic rotation: after this pass every 4-option MCQ sits in a
  // balanced answer position while the correct option text is unchanged.
  const mcqs = cards
    .filter(c => c.type === 'mcq' && Array.isArray(c.options) && c.options.length === 4)
    .sort((a, b) => a.id.localeCompare(b.id));
  mcqs.forEach((card, i) => {
    const target = i % 4;
    const current = Number.isInteger(card.answerIndex) ? card.answerIndex : 0;
    if (current === target) return;
    const correct = card.options[current];
    if (correct === undefined) return;
    const rest = card.options.filter((_, idx) => idx !== current);
    const next = [];
    let r = 0;
    for (let j = 0; j < 4; j++) next.push(j === target ? correct : rest[r++]);
    card.options = next;
    card.answerIndex = target;
  });
}

function sortCards(list, kind) {
  const typeRank = { mcq: 0, tf: 1, fib: 2 };
  return list.sort((a, b) => {
    const ua = Number(a.unit) || 0;
    const ub = Number(b.unit) || 0;
    if (ua !== ub) return ua - ub;
    if (kind === 'quiz') {
      const ta = typeRank[a.type] === undefined ? 9 : typeRank[a.type];
      const tb = typeRank[b.type] === undefined ? 9 : typeRank[b.type];
      if (ta !== tb) return ta - tb;
    }
    return String(a.id).localeCompare(String(b.id));
  });
}

const pools = {};
const manifest = {
  generatedBy: 'tools/verify/build_banks.js',
  subjects: SUBJECTS,
  banks: {},
  counts: {},
  topicCoverage: {}
};

for (const s of SUBJECTS) {
  const quizPool = new Map();
  const flashPool = new Map();

  for (const bank of BANKS) {
    const d = legacy[bank];
    for (const card of (d.quiz[s] || [])) {
      if (!quizPool.has(card.id)) {
        quizPool.set(card.id, { card: clone(card), banks: new Set(), origin: bank });
      }
      quizPool.get(card.id).banks.add(bank);
    }
    for (const card of ((d.flashcards && d.flashcards[s]) || [])) {
      if (!flashPool.has(card.id)) {
        flashPool.set(card.id, { card: clone(card), banks: new Set(), origin: bank });
      }
      flashPool.get(card.id).banks.add(bank);
    }
  }

  const fixes = canonical[s].fixes || {};

  for (const [id, entry] of quizPool) {
    const fix = fixes[id];
    if (fix) Object.assign(entry.card, clone(fix));
    normalizeType(entry.card);
    entry.card.source = 'syllabus';
    entry.unit3Scope = decideUnit3Scope(entry.card, s, entry.banks, entry.origin, fix);
  }
  for (const [id, entry] of flashPool) {
    const fix = fixes[id];
    if (fix) Object.assign(entry.card, clone(fix));
    entry.unit3Scope = decideUnit3Scope(entry.card, s, entry.banks, entry.origin, fix);
  }

  for (const card of canonical[s].mcq) {
    if (quizPool.has(card.id)) throw new Error(`Canonical MCQ ID collision: ${card.id}`);
    const entry = { card: clone(card), banks: new Set(['canonical']), origin: 'canonical' };
    if (fixes[card.id]) Object.assign(entry.card, clone(fixes[card.id]));
    normalizeType(entry.card);
    entry.card.source = 'syllabus';
    entry.unit3Scope = decideUnit3Scope(entry.card, s, entry.banks, entry.origin, fixes[card.id] || null);
    quizPool.set(card.id, entry);
  }
  for (const card of canonical[s].flash) {
    if (flashPool.has(card.id)) throw new Error(`Canonical flash ID collision: ${card.id}`);
    const entry = { card: clone(card), banks: new Set(['canonical']), origin: 'canonical' };
    if (fixes[card.id]) Object.assign(entry.card, clone(fixes[card.id]));
    entry.unit3Scope = decideUnit3Scope(entry.card, s, entry.banks, entry.origin, fixes[card.id] || null);
    flashPool.set(card.id, entry);
  }

  pools[s] = { quiz: quizPool, flash: flashPool };
}

// Balance MCQ answer positions across the unique deck, before splitting.
const allMcqCards = [];
for (const s of SUBJECTS) for (const e of pools[s].quiz.values()) allMcqCards.push(e.card);
rotateForBalance(allMcqCards);

function stripForOutput(card, bank, kind) {
  const out = clone(card);
  delete out.topicId;
  if (kind === 'quiz') {
    out.scope = bank;
  } else {
    delete out.scope;
  }
  return out;
}

function buildBank(bank) {
  const quiz = {};
  const flashcards = {};
  for (const s of SUBJECTS) {
    const q = [];
    const f = [];
    for (const e of pools[s].quiz.values()) {
      const unit = Number(e.card.unit);
      const sc = e.unit3Scope;
      const inScope = bank === 'sem' ||
        (bank === 'mid1' && (unit <= 2 || (unit === 3 && (sc === 'mid1' || sc === 'both')))) ||
        (bank === 'mid2' && (unit >= 4 || (unit === 3 && (sc === 'mid2' || sc === 'both'))));
      if (inScope) q.push(stripForOutput(e.card, bank, 'quiz'));
    }
    for (const e of pools[s].flash.values()) {
      const unit = Number(e.card.unit);
      const sc = e.unit3Scope;
      const inScope = bank === 'sem' ||
        (bank === 'mid1' && (unit <= 2 || (unit === 3 && (sc === 'mid1' || sc === 'both')))) ||
        (bank === 'mid2' && (unit >= 4 || (unit === 3 && (sc === 'mid2' || sc === 'both'))));
      if (inScope) f.push(stripForOutput(e.card, bank, 'flash'));
    }
    quiz[s] = sortCards(q, 'quiz');
    flashcards[s] = sortCards(f, 'flash');
  }
  return { quiz, flashcards };
}

const meta = {
  sem: {
    constName: 'SEM_PRACTICE',
    exam: 'sem',
    target: 'MGIT CSE Semester III - Semester End Examination',
    file: 'sem-practice.js',
    header: 'Semester End Comprehensive Question Bank & Flashcards',
    note: 'Units 1-5 Complete'
  },
  mid1: {
    constName: 'MID1_PRACTICE',
    exam: 'mid1',
    target: 'MGIT CSE Semester III - Mid-1 Examination',
    file: 'mid1-practice.js',
    header: 'Mid-1 Practice Question Bank & Flashcards',
    note: 'Units 1-2 + Unit 3 Part 1'
  },
  mid2: {
    constName: 'MID2_PRACTICE',
    exam: 'mid2',
    target: 'MGIT CSE Semester III - Mid-2 Examination',
    file: 'mid2-practice.js',
    header: 'Mid-2 Practice Question Bank & Flashcards',
    note: 'Unit 3 Part 2 + Units 4-5'
  }
};

for (const bank of BANKS) {
  const built = buildBank(bank);
  const m = meta[bank];
  const data = {
    version: '1.1.0',
    exam: m.exam,
    regulation: 'MR-25',
    targetAudience: m.target,
    subjects: SUBJECTS,
    quiz: built.quiz,
    flashcards: built.flashcards
  };
  const body = JSON.stringify(data, null, 2);
  const text = `/**\n * MGIT PYQ HUB - ${m.header}\n * Rebuilt for MR-25 CSE Semester III (${m.note})\n * Content audit: content-audit/\n */\nconst ${m.constName} = ${body};\n\nif (typeof window !== 'undefined') {\n  window.${m.constName} = ${m.constName};\n}\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ${m.constName};\n}\n`;
  fs.writeFileSync(path.join(DATA, m.file), text, 'utf8');

  manifest.banks[bank] = {
    quiz: Object.fromEntries(SUBJECTS.map(s => [s, built.quiz[s].length])),
    flashcards: Object.fromEntries(SUBJECTS.map(s => [s, built.flashcards[s].length]))
  };
  manifest.counts[bank] = {
    quiz: SUBJECTS.reduce((n, s) => n + built.quiz[s].length, 0),
    flashcards: SUBJECTS.reduce((n, s) => n + built.flashcards[s].length, 0),
    mcq: SUBJECTS.reduce((n, s) => n + built.quiz[s].filter(q => q.type === 'mcq').length, 0),
    tf: SUBJECTS.reduce((n, s) => n + built.quiz[s].filter(q => q.type === 'tf').length, 0),
    fib: SUBJECTS.reduce((n, s) => n + built.quiz[s].filter(q => q.type === 'fib').length, 0)
  };
}

// Topic coverage is reported from the canonical topic ids and the legacy
// topic labels; the emitted banks do not gain a new topicId field.
for (const s of SUBJECTS) {
  const topics = new Set();
  for (const e of pools[s].quiz.values()) if (e.card.topicId) topics.add(e.card.topicId);
  for (const e of pools[s].flash.values()) if (e.card.topicId) topics.add(e.card.topicId);
  manifest.topicCoverage[s] = Array.from(topics).sort();
}

fs.writeFileSync(path.join(ROOT, 'content-audit', 'build_manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log('Built banks:');
for (const bank of BANKS) {
  console.log(`  ${bank}: ${manifest.counts[bank].quiz} quiz (${manifest.counts[bank].mcq} MCQ, ${manifest.counts[bank].tf} TF, ${manifest.counts[bank].fib} FIB), ${manifest.counts[bank].flashcards} flashcards`);
}

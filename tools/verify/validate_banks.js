/**
 * Validate the rebuilt practice banks against the MR-25 content rules and
 * write content-audit/coverage_matrix.csv plus validation_report.json.
 *
 * Hard errors make the process exit non-zero. Soft targets (difficulty mix)
 * are reported as warnings so the report can explain any residual gap.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'data');
const AUDIT = path.join(ROOT, 'content-audit');
const SUBJECTS = ['DM', 'COA', 'OOPJ', 'DBMS', 'SE', 'ES', 'IE'];
const FLOOR_MCQ = { DM: 62, COA: 62, OOPJ: 62, DBMS: 62, SE: 62, ES: 60, IE: 60 };
const FLOOR_FLASH = { DM: 72, COA: 72, OOPJ: 72, DBMS: 72, SE: 72, ES: 72, IE: 72 };

const banks = {
  sem: require(path.join(DATA, 'sem-practice.js')),
  mid1: require(path.join(DATA, 'mid1-practice.js')),
  mid2: require(path.join(DATA, 'mid2-practice.js'))
};
const legacy = {
  sem: require(path.join(AUDIT, '.legacy', 'sem-practice.js')),
  mid1: require(path.join(AUDIT, '.legacy', 'mid1-practice.js')),
  mid2: require(path.join(AUDIT, '.legacy', 'mid2-practice.js'))
};
const syllabusMap = require(path.join(AUDIT, 'syllabus_map.json'));

const errors = [];
const warnings = [];
const stats = { banks: {}, subjects: {}, coverage: [] };

// The emitted banks intentionally omit topicId, but the builder records the
// canonical topic ids it used. Merge those with keyword matching below so
// coverage reflects authored mappings instead of text overlap alone.
let manifestTopics = {};
try {
  const manifest = JSON.parse(fs.readFileSync(path.join(AUDIT, 'build_manifest.json'), 'utf8'));
  manifestTopics = manifest.topicCoverage || {};
} catch { /* manifest is optional; keyword matching still works */ }

function words(s) {
  return String(s || '').trim().split(/\s+/).filter(Boolean).length;
}

function numberedLineTooLong(text) {
  return String(text || '').split(/\r?\n/).some(line => {
    const m = line.match(/^\s*(\d+)[.)]\s+(.*)$/);
    return m && words(m[2]) > 14;
  });
}

function isMetaOption(opt) {
  const t = String(opt || '').trim().toLowerCase();
  return /^(all|none|both)\s+(of\s+the\s+above|of\s+these|the\s+above)$/.test(t) ||
    /^(all|none|both)$/.test(t);
}

function topicKeywords(subject, unit) {
  const u = syllabusMap.subjects[subject].units[String(unit)];
  return u ? u.topics : [];
}

function mapCardToTopic(card, subject) {
  const topics = topicKeywords(subject, card.unit);
  if (!topics.length) return null;
  const text = [card.topic, card.question, card.front, card.back, ...(card.options || [])]
    .filter(Boolean).join(' ').toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const t of topics) {
    let score = 0;
    for (const kw of t.keywords || []) {
      if (kw && text.includes(String(kw).toLowerCase())) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = t.id;
    }
  }
  return best;
}

function checkBank(bankName, bank) {
  const b = { quiz: 0, mcq: 0, tf: 0, fib: 0, flashcards: 0, subjects: {} };
  const allIds = new Set();
  const allText = new Map();

  for (const s of SUBJECTS) {
    const quiz = bank.quiz[s] || [];
    const flash = (bank.flashcards && bank.flashcards[s]) || [];
    const sub = { quiz: quiz.length, mcq: 0, tf: 0, fib: 0, flashcards: flash.length, units: {} };

    for (const q of quiz) {
      b.quiz++;
      if (q.type === 'mcq') b.mcq++;
      else if (q.type === 'tf') b.tf++;
      else if (q.type === 'fib') b.fib++;
      else errors.push(`${bankName}/${q.id}: unknown quiz type ${q.type}`);

      if (allIds.has(q.id)) errors.push(`${bankName}: duplicate quiz id ${q.id}`);
      allIds.add(q.id);

      const textKey = String(q.question || '').trim().toLowerCase();
      if (allText.has(textKey)) errors.push(`${bankName}: duplicate question text ${q.id} ~ ${allText.get(textKey)}`);
      allText.set(textKey, q.id);

      if (q.type === 'mcq') {
        sub.mcq++;
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          errors.push(`${bankName}/${q.id}: MCQ has ${q.options ? q.options.length : 0} options`);
        }
        if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 3) {
          errors.push(`${bankName}/${q.id}: invalid answerIndex ${q.answerIndex}`);
        }
        if ((q.options || []).some(isMetaOption)) {
          errors.push(`${bankName}/${q.id}: meta option all/none/both of the above`);
        }
        if (/\bnot\b/i.test(q.question || '')) {
          sub.notCount = (sub.notCount || 0) + 1;
        }
      } else if (q.type === 'tf') {
        sub.tf++;
        if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 1) {
          errors.push(`${bankName}/${q.id}: invalid TF answerIndex ${q.answerIndex}`);
        }
        if (Array.isArray(q.options) && q.options.length) {
          warnings.push(`${bankName}/${q.id}: TF still carries an options array`);
        }
      } else if (q.type === 'fib') {
        sub.fib++;
        if (!Array.isArray(q.accepted) || !q.accepted.length) {
          errors.push(`${bankName}/${q.id}: FIB has no accepted answers`);
        }
      }

      if (q.type === 'mcq' && q.explanation && words(q.explanation) > 45) {
        errors.push(`${bankName}/${q.id}: explanation ${words(q.explanation)} words (>45)`);
      }
      if (q.source && /^pyq:/i.test(String(q.source))) {
        errors.push(`${bankName}/${q.id}: unverified PYQ source label ${q.source}`);
      }
      if (q.topicId) errors.push(`${bankName}/${q.id}: topicId leaked into output`);

      sub.units[q.unit] = sub.units[q.unit] || { quiz: 0, mcq: 0, flash: 0 };
      sub.units[q.unit].quiz++;
      if (q.type === 'mcq') sub.units[q.unit].mcq++;
    }

    for (const f of flash) {
      b.flashcards++;
      if (allIds.has(f.id)) errors.push(`${bankName}: duplicate flash id ${f.id}`);
      allIds.add(f.id);

      const textKey = String(f.front || '').trim().toLowerCase();
      if (allText.has(textKey)) errors.push(`${bankName}: duplicate flash front ${f.id} ~ ${allText.get(textKey)}`);
      allText.set(textKey, f.id);

      if (words(f.front) > 20) errors.push(`${bankName}/${f.id}: front ${words(f.front)} words (>20)`);
      if (words(f.back) > 90) errors.push(`${bankName}/${f.id}: back ${words(f.back)} words (>90)`);
      if (numberedLineTooLong(f.back)) warnings.push(`${bankName}/${f.id}: numbered line >14 words`);
      if (f.scope) errors.push(`${bankName}/${f.id}: flash scope field leaked into output`);
      if (f.topicId) errors.push(`${bankName}/${f.id}: topicId leaked into output`);

      sub.units[f.unit] = sub.units[f.unit] || { quiz: 0, mcq: 0, flash: 0 };
      sub.units[f.unit].flash++;
    }

    if (sub.mcq && sub.notCount / sub.mcq > 0.10) {
      warnings.push(`${bankName}/${s}: NOT questions ${sub.notCount}/${sub.mcq} (>10%)`);
    }
    b.subjects[s] = sub;
    stats.subjects[`${bankName}/${s}`] = sub;
  }

  stats.banks[bankName] = b;
}

checkBank('sem', banks.sem);
checkBank('mid1', banks.mid1);
checkBank('mid2', banks.mid2);

// Scope checks: mid-term banks must not carry units outside their range.
for (const s of SUBJECTS) {
  for (const q of (banks.mid1.quiz[s] || [])) {
    if (Number(q.unit) >= 4) errors.push(`mid1/${q.id}: Unit ${q.unit} is outside Mid-1 scope`);
  }
  for (const q of (banks.mid2.quiz[s] || [])) {
    if (Number(q.unit) <= 2) errors.push(`mid2/${q.id}: Unit ${q.unit} is outside Mid-2 scope`);
  }
  for (const f of ((banks.mid1.flashcards && banks.mid1.flashcards[s]) || [])) {
    if (Number(f.unit) >= 4) errors.push(`mid1/${f.id}: Unit ${f.unit} is outside Mid-1 scope`);
  }
  for (const f of ((banks.mid2.flashcards && banks.mid2.flashcards[s]) || [])) {
    if (Number(f.unit) <= 2) errors.push(`mid2/${f.id}: Unit ${f.unit} is outside Mid-2 scope`);
  }
}

// Coverage floors and answer-position distribution for the complete deck.
const positionCounts = [0, 0, 0, 0];
const difficulty = { easy: 0, medium: 0, hard: 0 };
let semMcq = 0;
for (const s of SUBJECTS) {
  const quiz = banks.sem.quiz[s] || [];
  const flash = (banks.sem.flashcards && banks.sem.flashcards[s]) || [];
  const mcq = quiz.filter(q => q.type === 'mcq');
  const tf = quiz.filter(q => q.type === 'tf');
  const fib = quiz.filter(q => q.type === 'fib');

  if (mcq.length < FLOOR_MCQ[s]) errors.push(`sem/${s}: ${mcq.length} MCQ, floor ${FLOOR_MCQ[s]}`);
  if (flash.length < FLOOR_FLASH[s]) errors.push(`sem/${s}: ${flash.length} flashcards, floor ${FLOOR_FLASH[s]}`);

  for (const q of mcq) {
    semMcq++;
    positionCounts[q.answerIndex]++;
    difficulty[q.difficulty] = (difficulty[q.difficulty] || 0) + 1;
  }

  const covered = new Set(manifestTopics[s] || []);
  for (const card of [...quiz, ...flash]) {
    const t = mapCardToTopic(card, s);
    if (t) covered.add(t);
  }
  const totalTopics = Object.values(syllabusMap.subjects[s].units)
    .reduce((n, u) => n + u.topics.length, 0);

  for (let unit = 1; unit <= 5; unit++) {
    const uq = quiz.filter(q => Number(q.unit) === unit);
    const uf = flash.filter(f => Number(f.unit) === unit);
    const unitTopics = topicKeywords(s, unit);
    const unitIds = new Set(unitTopics.map(x => x.id));
    const unitCovered = new Set((manifestTopics[s] || []).filter(id => unitIds.has(id)));
    for (const card of [...uq, ...uf]) {
      const t = mapCardToTopic(card, s);
      if (t && unitIds.has(t)) unitCovered.add(t);
    }
    stats.coverage.push({
      subject: s,
      unit,
      mcq: uq.filter(q => q.type === 'mcq').length,
      tf: uq.filter(q => q.type === 'tf').length,
      fib: uq.filter(q => q.type === 'fib').length,
      flashcards: uf.length,
      topics_in_unit: unitTopics.length,
      topics_covered: unitCovered.size,
      coverage_pct: unitTopics.length ? Math.round(100 * unitCovered.size / unitTopics.length) : 0
    });
    if (!uq.length) warnings.push(`sem/${s}/U${unit}: no quiz cards`);
    if (!uf.length) warnings.push(`sem/${s}/U${unit}: no flashcards`);
  }

  if (covered.size < totalTopics) {
    warnings.push(`sem/${s}: topic coverage ${covered.size}/${totalTopics} (topicId + keyword)`);
  }
}

const totalMcq = semMcq;
const totalFlash = SUBJECTS.reduce((n, s) => n + (banks.sem.flashcards[s] || []).length, 0);
if (totalMcq < 430) errors.push(`sem: total MCQ ${totalMcq}, floor 430`);
if (totalFlash < 510) errors.push(`sem: total flashcards ${totalFlash}, floor 510`);

for (let i = 0; i < 4; i++) {
  const pct = 100 * positionCounts[i] / totalMcq;
  if (pct < 22 || pct > 28) errors.push(`sem: answer position ${'ABCD'[i]} = ${pct.toFixed(1)}% (target 22-28%)`);
}

const easyPct = 100 * difficulty.easy / totalMcq;
const mediumPct = 100 * difficulty.medium / totalMcq;
const hardPct = 100 * difficulty.hard / totalMcq;
if (easyPct < 25 || easyPct > 35) warnings.push(`sem: easy ${easyPct.toFixed(1)}% (target ~30%)`);
if (mediumPct < 40 || mediumPct > 50) warnings.push(`sem: medium ${mediumPct.toFixed(1)}% (target ~45%)`);
if (hardPct < 20 || hardPct > 30) warnings.push(`sem: hard ${hardPct.toFixed(1)}% (target ~25%)`);

// ID preservation: compare the union of legacy IDs with the rebuilt sem deck.
const legacyIds = new Set();
for (const b of Object.values(legacy)) {
  for (const s of SUBJECTS) {
    for (const q of (b.quiz[s] || [])) legacyIds.add(q.id);
    for (const f of ((b.flashcards && b.flashcards[s]) || [])) legacyIds.add(f.id);
  }
}
const newIds = new Set();
for (const s of SUBJECTS) {
  for (const q of (banks.sem.quiz[s] || [])) newIds.add(q.id);
  for (const f of ((banks.sem.flashcards && banks.sem.flashcards[s]) || [])) newIds.add(f.id);
}
const deleted = [...legacyIds].filter(id => !newIds.has(id));
const added = [...newIds].filter(id => !legacyIds.has(id));
if (deleted.length) errors.push(`sem: ${deleted.length} legacy IDs were dropped: ${deleted.slice(0, 8).join(', ')}`);

const report = {
  generatedAt: new Date().toISOString(),
  totals: { mcq: totalMcq, flashcards: totalFlash, quiz: stats.banks.sem.quiz, tf: stats.banks.sem.tf, fib: stats.banks.sem.fib },
  answerPositions: Object.fromEntries(positionCounts.map((n, i) => ['ABCD'[i], n])),
  difficulty,
  difficultyPct: { easy: +easyPct.toFixed(1), medium: +mediumPct.toFixed(1), hard: +hardPct.toFixed(1) },
  banks: stats.banks,
  legacyIds: legacyIds.size,
  newIds: newIds.size,
  addedIds: added.length,
  deletedIds: deleted,
  errors,
  warnings,
  coverage: stats.coverage
};

fs.writeFileSync(path.join(AUDIT, 'validation_report.json'), JSON.stringify(report, null, 2) + '\n', 'utf8');

const header = 'subject,unit,mcq,tf,fib,flashcards,topics_in_unit,topics_covered,coverage_pct';
const rows = stats.coverage.map(r =>
  [r.subject, r.unit, r.mcq, r.tf, r.fib, r.flashcards, r.topics_in_unit, r.topics_covered, r.coverage_pct].join(',')
);
fs.writeFileSync(path.join(AUDIT, 'coverage_matrix.csv'), [header, ...rows].join('\n') + '\n', 'utf8');

console.log('Semester-End deck:');
console.log(`  MCQ ${totalMcq} | TF ${stats.banks.sem.tf} | FIB ${stats.banks.sem.fib} | Flashcards ${totalFlash}`);
console.log(`  Answer positions A/B/C/D: ${positionCounts.join(' / ')}`);
console.log(`  Difficulty: easy ${easyPct.toFixed(1)}% | medium ${mediumPct.toFixed(1)}% | hard ${hardPct.toFixed(1)}%`);
console.log(`  IDs: ${newIds.size} total, ${added.length} added, ${deleted.length} dropped`);
console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}`);
if (errors.length) {
  console.error('\nFirst errors:');
  for (const e of errors.slice(0, 20)) console.error('  - ' + e);
  process.exit(1);
}

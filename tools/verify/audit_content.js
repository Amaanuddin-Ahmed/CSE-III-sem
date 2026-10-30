#!/usr/bin/env node
/*
 * audit_content.js — Phase 3 audit of every existing practice card.
 *
 * Reads the three static banks, dedupes by ID (Semester End wins because it is the
 * canonical complete deck), and writes:
 *   content-audit/audit_report.csv   one row per unique card
 *   content-audit/audit_summary.md   counts, distributions and the rule set
 *
 * Severity:
 *   error   — breaks a hard rule in the brief or the app schema
 *   warn    — likely defect, or a length/format rule that needs a human decision
 *   info    — observation only (e.g. a NOT question, a flagged extension)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const banks = {
  mid1: require(path.join(ROOT, 'data', 'mid1-practice.js')),
  mid2: require(path.join(ROOT, 'data', 'mid2-practice.js')),
  sem: require(path.join(ROOT, 'data', 'sem-practice.js')),
};

const SUBJECTS = ['DM', 'COA', 'OOPJ', 'DBMS', 'SE', 'ES', 'IE'];

// Pre-MR25 topics that must not ship as MR25 content. Rules are subject-scoped
// and test only the prompt/topic, because an explanation may legitimately mention
// a neighbouring concept ("unlike applets", "not a pipeline").
const OOS = {
  COA: [
    [/pipelin|vector process|array processor|multiprocessor|interconnection network|omega network|arbitration|crossbar/i, 'Pipelining/multiprocessors are Course-Objective wording, not MR25 Unit V text'],
    [/virtual memory|page fault|paging|\braid\b|flynn|cache coherence/i, 'Not named in MR25 COA Unit V'],
  ],
  DM: [
    [/probability|bayes|random variable/i, 'Probability is not in the MR25 DM units'],
  ],
  OOPJ: [
    [/jdbc|servlet/i, 'JDBC/servlet is not named in the MR25 OOPJ units'],
    [/\bgenerics?\b/i, 'Generics is not named in the MR25 OOPJ units'],
    [/\bserializ(e|ation)\b/i, 'Serialization is not named in the MR25 OOPJ units'],
    [/\bannotations?\b/i, 'Annotations are not named in the MR25 OOPJ units'],
    [/\bapplets?\b/i, 'Applets are not named in the MR25 OOPJ units (Swing is)'],
    [/autobox/i, 'Autoboxing is not named in the MR25 OOPJ units'],
  ],
  DBMS: [
    [/shadow paging|nosql|query optimi[sz]ation|join algorithm|\braid\b/i, 'Not named in MR25 DBMS Unit V'],
  ],
  ES: [
    [/air pollution|noise pollution|municipal solid waste|solid waste|e-waste|bioremediation|forest act|wildlife act|carbon cycle|phosphorus cycle|water cycle|ecological pyramid|carrying capacity/i, 'Not named in the MR25 ES units'],
  ],
};

const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
const words = s => {
  const t = norm(s)
    .replace(/\$[^$]*\$/g, ' x ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[•·]/g, ' ');
  return t ? t.split(/\s+/).filter(Boolean).length : 0;
};

// Flashcard kind is not a schema field; infer it from the topic and prompt.
function cardKind(topic, front) {
  const t = (topic + ' ' + front).toLowerCase();
  if (/\bvs\b|versus|compare|comparison|difference|distinguish/.test(t)) return 'Compare';
  if (/procedure|steps|algorithm|how to|write a program|construct|derive|calculate|solve/.test(t)) return 'Procedure';
  if (/formula|equation|law|theorem|identity|expression/.test(t)) return 'Formula';
  if (/trap|mistake|pitfall|avoid|caution/.test(t)) return 'Trap';
  if (/skeleton|answer|structure of|how many marks|write/.test(t)) return 'Answer-skeleton';
  return 'Concept';
}
const BACK_LIMIT = { Concept: 50, Formula: 50, Trap: 50, Procedure: 90, Compare: 90, 'Answer-skeleton': 90 };

// Load and dedupe. Semester End is canonical; Mid-2 keeps IDs the Sem bank lacks.
const cards = new Map();
const order = [];
for (const bankName of ['mid1', 'mid2', 'sem']) {
  const bank = banks[bankName];
  for (const subject of SUBJECTS) {
    for (const q of bank.quiz[subject] || []) {
      const key = q.id || `MISSING-${bankName}-${subject}-${order.length}`;
      if (!cards.has(key)) {
        cards.set(key, { id: key, subject, banks: [], quiz: null, flash: null });
        order.push(key);
      }
      const c = cards.get(key);
      c.banks.push(bankName);
      if (!c.quiz || bankName === 'sem') c.quiz = { ...q, _bank: bankName };
    }
    for (const f of bank.flashcards[subject] || []) {
      const key = f.id || `MISSING-${bankName}-${subject}-${order.length}`;
      if (!cards.has(key)) {
        cards.set(key, { id: key, subject, banks: [], quiz: null, flash: null });
        order.push(key);
      }
      const c = cards.get(key);
      if (!c.banks.includes(bankName)) c.banks.push(bankName);
      if (!c.flash || bankName === 'sem') c.flash = { ...f, _bank: bankName };
    }
  }
}

const rows = [];
const seenText = new Map();
const stats = {
  total: 0, mcq: 0, fib: 0, tf: 0, flash: 0,
  errors: 0, warns: 0, clean: 0,
  subjects: {}, difficulty: { easy: 0, medium: 0, hard: 0 },
  answerPos: [0, 0, 0, 0], notQuestions: 0,
  frontOver: 0, backOver: 0, explanationOver: 0,
  oos: 0, tfAsMcq: 0, optionCount: 0, answerIndex: 0,
};

for (const id of order) {
  const c = cards.get(id);
  const issues = [];
  const add = (sev, msg) => issues.push({ sev, msg });
  const item = c.quiz || c.flash;
  const isFlash = !!c.flash;
  const subject = item.subjectId || c.subject;
  const unit = Number(item.unit);
  const topic = norm(item.topic);

  stats.total++;
  stats.subjects[subject] = stats.subjects[subject] || { mcq: 0, fib: 0, tf: 0, flash: 0, errors: 0, warns: 0 };
  const ss = stats.subjects[subject];

  if (!item.id) add('error', 'missing id');
  if (!subject || !SUBJECTS.includes(subject)) add('error', 'missing/invalid subject');
  if (!Number.isInteger(unit) || unit < 1 || unit > 5) add('error', 'missing/invalid unit');
  if (!topic) add('warn', 'missing topic');
  if (item.highYield === undefined && isFlash) add('info', 'highYield not set');

  if (isFlash) {
    stats.flash++; ss.flash++;
    const front = norm(item.front), back = norm(item.back);
    const backRaw = String(item.back || '');
    if (!front) add('error', 'missing front');
    if (!back) add('error', 'missing back');
    const fw = words(front), bw = words(back);
    const kind = cardKind(topic, front);
    if (fw > 20) { stats.frontOver++; add('error', `front ${fw} words > 20`); }
    if (bw > BACK_LIMIT[kind]) { stats.backOver++; add('error', `${kind} back ${bw} words > ${BACK_LIMIT[kind]}`); }
    // Keep raw newlines here: norm() collapses them, which would merge every list
    // into one long line and raise a false numbered-line warning.
    const numbered = backRaw.split(/\n+/).filter(l => /^\s*\d+[.)]\s+/.test(l));
    for (const line of numbered) {
      if (words(line.replace(/^\s*\d+[.)]\s+/, '')) > 14) {
        add('warn', 'numbered line > 14 words');
        break;
      }
    }
    if (!/keywords:/i.test(back)) add('info', 'no Keywords line yet');
  } else {
    const q = c.quiz;
    const type = q.type;
    if (!['mcq', 'fib', 'tf'].includes(type)) add('error', `invalid type "${type}"`);
    if (type === 'mcq') {
      stats.mcq++; ss.mcq++;
      const opts = Array.isArray(q.options) ? q.options : [];
      if (opts.length !== 4) { stats.optionCount++; add('error', `mcq has ${opts.length} options`); }
      if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= opts.length) {
        stats.answerIndex++; add('error', 'answerIndex out of range');
      } else {
        stats.answerPos[q.answerIndex]++;
      }
      if (new Set(opts.map(o => norm(o).toLowerCase())).size !== opts.length) add('error', 'duplicate option text');
      if (opts.some(o => /^(all|none) of (the )?above$/i.test(norm(o)) || /^both \(?[ab]\)?( and \(?[ab]\)?)?$/i.test(norm(o)) || /^both of the above$/i.test(norm(o)))) add('error', 'all/none/both option');
      if (opts.length === 2 && opts.every(o => /^(true|false)$/i.test(norm(o)))) {
        stats.tfAsMcq++; add('error', 'True/False stored as type mcq');
      }
    } else if (type === 'fib') {
      stats.fib++; ss.fib++;
      if (!Array.isArray(q.accepted) || !q.accepted.length) add('error', 'fib without accepted[]');
      if (q.options) add('warn', 'fib has options[]');
    } else if (type === 'tf') {
      stats.tf++; ss.tf++;
      // The runner hardcodes True/False for type "tf", so an absent options[]
      // is valid; only a present-but-wrong options[] is a defect.
      if (Array.isArray(q.options) && q.options.length !== 2) add('warn', 'tf should have two options');
    }
    if (!['easy', 'medium', 'hard'].includes(q.difficulty)) add('warn', 'invalid difficulty');
    else if (type === 'mcq') stats.difficulty[q.difficulty]++;
    if (!q.explanation) add('warn', 'missing explanation');
    else {
      const ew = words(q.explanation);
      if (ew > 45) { stats.explanationOver++; add('warn', `explanation ${ew} words > 45`); }
    }
    if (/\bNOT\b|\bEXCEPT\b/.test(q.question || '')) { stats.notQuestions++; add('info', 'NOT/EXCEPT question'); }
    if (!q.source) add('info', 'missing source');
  }

  const promptBlob = [item.topic, isFlash ? item.front : item.question].join(' ');
  for (const [re, why] of OOS[subject] || []) {
    if (re.test(promptBlob)) { stats.oos++; add('error', `out of scope: ${why}`); break; }
  }
  const blob = [item.topic, item.question, item.front, item.back, item.explanation, ...(item.options || [])].join(' ');
  const textKey = norm(isFlash ? item.front : item.question).toLowerCase().replace(/[^a-z0-9 ]/g, '');
  if (textKey.length > 30) {
    if (seenText.has(textKey)) add('warn', `duplicate text of ${seenText.get(textKey)}`);
    else seenText.set(textKey, id);
  }
  if (/\$/.test(blob) && (blob.match(/\$/g) || []).length % 2) add('warn', 'unbalanced $ delimiters');

  const errors = issues.filter(i => i.sev === 'error');
  const warns = issues.filter(i => i.sev === 'warn');
  if (errors.length) { stats.errors++; ss.errors++; }
  if (warns.length) { stats.warns++; ss.warns++; }
  if (!errors.length && !warns.length) stats.clean++;

  rows.push({
    id, banks: c.banks.join('+'), subject, unit,
    kind: isFlash ? 'flashcard' : c.quiz.type,
    cardKind: isFlash ? cardKind(topic, item.front) : '',
    topic,
    severity: errors.length ? 'error' : warns.length ? 'warn' : 'ok',
    issues: issues.map(i => `${i.sev}:${i.msg}`).join('; '),
    q_words: isFlash ? words(item.front) : words(item.question),
    back_words: isFlash ? words(item.back) : '',
    expl_words: isFlash ? '' : words(item.explanation),
    options: isFlash ? '' : (item.options ? item.options.length : 0),
    answer: isFlash ? '' : (item.answerIndex ?? ''),
    difficulty: isFlash ? '' : (item.difficulty || ''),
    snippet: norm(isFlash ? item.front : item.question).slice(0, 90).replace(/"/g, '""'),
  });
}

// Quote any cell that contains a comma, quote or newline so the report stays
// parseable by spreadsheet tools (topics and issue text often contain commas).
const csvCell = v => {
  const s = String(v ?? '');
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = ['id,banks,subject,unit,kind,card_kind,topic,severity,issues,q_words,back_words,expl_words,options,answer,difficulty,snippet'];
for (const r of rows) {
  csv.push([r.id, r.banks, r.subject, r.unit, r.kind, r.cardKind, r.topic, r.severity,
    r.issues, r.q_words, r.back_words, r.expl_words, r.options, r.answer, r.difficulty,
    r.snippet].map(csvCell).join(','));
}
fs.writeFileSync(path.join(ROOT, 'content-audit', 'audit_report.csv'), csv.join('\n') + '\n');

const pct = n => ((100 * n) / stats.total).toFixed(1);
const posTotal = stats.answerPos.reduce((a, b) => a + b, 0) || 1;
const md = [];
md.push('# AUDIT_SUMMARY — rebuilt practice cards (post-rebuild)');
md.push('');
md.push(`Generated by \`tools/verify/audit_content.js\` from the three static banks. One row per unique ID in \`audit_report.csv\`.`);
md.push('');
md.push('## Totals');
md.push('');
md.push('| Metric | Value |');
md.push('|---|---:|');
md.push(`| Unique cards | ${stats.total} |`);
md.push(`| MCQ | ${stats.mcq} |`);
md.push(`| FIB | ${stats.fib} |`);
md.push(`| True/False | ${stats.tf} |`);
md.push(`| Flashcards | ${stats.flash} |`);
md.push(`| Cards with at least one error | ${stats.errors} |`);
md.push(`| Cards with at least one warning | ${stats.warns} |`);
md.push(`| Clean cards | ${stats.clean} |`);
md.push('');
md.push('## Rule violations');
md.push('');
md.push('| Rule | Count |');
md.push('|---|---:|');
md.push(`| True/False stored as MCQ | ${stats.tfAsMcq} |`);
md.push(`| MCQ without exactly 4 options | ${stats.optionCount} |`);
md.push(`| MCQ answerIndex out of range | ${stats.answerIndex} |`);
md.push(`| Flashcard front > 20 words | ${stats.frontOver} |`);
md.push(`| Flashcard back over its limit | ${stats.backOver} |`);
md.push(`| Explanation > 45 words | ${stats.explanationOver} |`);
md.push(`| Out-of-scope wording | ${stats.oos} |`);
md.push(`| NOT/EXCEPT questions | ${stats.notQuestions} |`);
md.push('');
md.push('## Per subject');
md.push('');
md.push('| Subject | MCQ | FIB | TF | Flashcards | Errors | Warnings |');
md.push('|---|---:|---:|---:|---:|---:|---:|');
for (const s of SUBJECTS) {
  const v = stats.subjects[s] || { mcq: 0, fib: 0, tf: 0, flash: 0, errors: 0, warns: 0 };
  md.push(`| ${s} | ${v.mcq} | ${v.fib} | ${v.tf} | ${v.flash} | ${v.errors} | ${v.warns} |`);
}
md.push('');
md.push('## Distributions');
md.push('');
const diffTotal = stats.mcq || 1;
md.push(`Difficulty (MCQ only): easy ${stats.difficulty.easy} (${((100 * stats.difficulty.easy) / diffTotal).toFixed(1)}%), medium ${stats.difficulty.medium} (${((100 * stats.difficulty.medium) / diffTotal).toFixed(1)}%), hard ${stats.difficulty.hard} (${((100 * stats.difficulty.hard) / diffTotal).toFixed(1)}%). Target is roughly 30/45/25; see \`REVIEW_QUEUE.md\` for the residual gap.`);
md.push('');
md.push('Answer position (MCQ only): ' + stats.answerPos.map((n, i) => `${'ABCD'[i]} ${n} (${((100 * n) / posTotal).toFixed(1)}%)`).join(', ') + '.');
md.push('');
md.push('## How to use the report');
md.push('');
md.push('- `severity=error` rows are blocking: fix before the rebuilt deck ships.');
md.push('- `severity=warn` rows need a human decision; many are legacy formatting, not wrong content.');
md.push('- `info` rows are observations (NOT questions, missing Keywords line, flagged extensions).');
md.push('- The `issues` column is semicolon-separated, with the severity repeated per issue.');
md.push('- Duplicate text is reported on the later ID only.');
md.push('');
md.push('## Known limits');
md.push('');
md.push('- The emitted banks have no `topicId` (schema unchanged), so this audit cannot prove a card matches its unit; it only proves the card is internally valid and not obviously out of scope. Topic coverage is tracked in `coverage_matrix.csv` from the canonical `topicId` sidecar plus keyword matching.');
md.push('- Flashcard kind (Concept/Formula/Trap/Procedure/Compare/Answer-skeleton) is inferred from topic and prompt because the schema has no field for it.');
md.push('- Word counts strip LaTeX but keep visible symbols, so a formula-heavy card can be one or two words above a limit without being unreadable.');
md.push('');
fs.writeFileSync(path.join(ROOT, 'content-audit', 'audit_summary.md'), md.join('\n'));

console.log(JSON.stringify({ total: stats.total, mcq: stats.mcq, fib: stats.fib, tf: stats.tf, flash: stats.flash, errors: stats.errors, warns: stats.warns, clean: stats.clean, tfAsMcq: stats.tfAsMcq, optionCount: stats.optionCount, answerIndex: stats.answerIndex, frontOver: stats.frontOver, backOver: stats.backOver, explanationOver: stats.explanationOver, oos: stats.oos, notQuestions: stats.notQuestions }, null, 1));
console.log('subjects', stats.subjects);
console.log('difficulty', stats.difficulty, 'answerPos', stats.answerPos);

#!/usr/bin/env node
/*
 * analyze_patterns.js — cluster near-duplicate PYQ stems per subject.
 *
 * Input : content-audit/pyq_records.json
 * Output: content-audit/pattern_clusters.json
 *
 * Clustering is deliberately conservative: two stems join a cluster when their
 * content-token Jaccard is >= 0.6, or when one stem's token set is a subset of
 * the other with at least four shared tokens (a "part of" restatement).
 * Stop-words and exam boilerplate are removed first. This is a reading aid,
 * not a claim about paper statistics.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const records = require(path.join(ROOT, 'content-audit', 'pyq_records.json')).records;

const STOP = new Set((
  'a an the of and or in on for with to from by is are was were be been being ' +
  'what which who whom whose how why when where explain define describe discuss ' +
  'write short note notes on difference between compare distinguish list state ' +
  'give example examples various different type types kind kinds using use used ' +
  'draw diagram block neat labelled explain briefly detail details following ' +
  'any two each also its it this that these those can could would should may ' +
  'do does did has have had not no yes if then than as at into over under about ' +
  'suitable take taking consider assuming assume question marks'
).split(/\s+/));

const SYN = [
  [/\bcolour\b/g, 'color'],
  [/\bmodelling\b/g, 'modeling'],
  [/\boptimisation\b/g, 'optimization'],
  [/\borganisation\b/g, 'organization'],
  [/\bbehaviour\b/g, 'behavior'],
  [/\bprogramme\b/g, 'program'],
  [/\bcharacter\b/g, 'char'],
  [/\bcharacters\b/g, 'char'],
  [/\bmultiprogramming\b/g, 'multiprogram'],
  [/\bmultiprocessor\b/g, 'multiprocess'],
  [/\bnormalisation\b/g, 'normalization'],
  [/\bnormalise\b/g, 'normalize'],
  [/\bnormalised\b/g, 'normalized'],
  [/\bnormal form\b/g, 'normalform'],
  [/\bthird normal form\b/g, '3nf'],
  [/\bsecond normal form\b/g, '2nf'],
  [/\bfirst normal form\b/g, '1nf'],
  [/\bboyce codd\b/g, 'bcnf'],
  [/\bentity relationship\b/g, 'er'],
  [/\buml\b/g, 'uml'],
];

function tokens(text) {
  let t = ' ' + String(text).toLowerCase() + ' ';
  for (const [re, rep] of SYN) t = t.replace(re, rep);
  t = t.replace(/[^a-z0-9+#.]+/g, ' ');
  const out = new Set();
  for (let w of t.split(/\s+/)) {
    w = w.replace(/^\.+|\.+$/g, '');
    if (!w || w.length < 3 || STOP.has(w)) continue;
    if (/^\d+$/.test(w)) continue;
    // light stemming so "diagram/diagrams", "process/processes" collapse
    w = w.replace(/(ies)$/, 'y').replace(/(ses|xes|ches|shes)$/, 's').replace(/s$/, '');
    if (w.length < 3 || STOP.has(w)) continue;
    out.add(w);
  }
  return out;
}

function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
}

function subsetish(a, b) {
  const small = a.size <= b.size ? a : b;
  const big = small === a ? b : a;
  if (small.size < 4) return false;
  let inter = 0;
  for (const x of small) if (big.has(x)) inter++;
  return inter === small.size;
}

const bySubject = new Map();
for (const q of records) {
  if (!bySubject.has(q.subject)) bySubject.set(q.subject, []);
  bySubject.get(q.subject).push(q);
}

const result = {};
for (const [subject, items] of bySubject) {
  const toks = items.map(q => tokens(q.question));
  const parent = items.map((_, i) => i);
  const find = i => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (i, j) => {
    const a = find(i), b = find(j);
    if (a !== b) parent[b] = a;
  };
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (toks[i].size < 4 || toks[j].size < 4) continue;
      const jac = jaccard(toks[i], toks[j]);
      if (jac >= 0.6 || subsetish(toks[i], toks[j])) union(i, j);
    }
  }
  const groups = new Map();
  items.forEach((q, i) => {
    const root = find(i);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(q);
  });
  const clusters = [...groups.values()]
    .filter(g => g.length >= 2)
    .map(g => {
      const years = [...new Set(g.flatMap(q => q.years || []))].sort();
      const topics = [...new Set(g.flatMap(q => q.topics || []))].sort();
      const marks = [...new Set(g.map(q => q.marks))].sort((a, b) => a - b);
      const sample = g.slice().sort((a, b) => b.question.length - a.question.length)[0].question;
      return { size: g.length, years, marks, topics, sample, ids: g.map(q => q.id) };
    })
    .sort((a, b) => b.size - a.size || b.years.length - a.years.length);
  result[subject] = { questions: items.length, clusters };
}

fs.writeFileSync(
  path.join(ROOT, 'content-audit', 'pattern_clusters.json'),
  JSON.stringify(result, null, 2) + '\n'
);

for (const [subject, data] of Object.entries(result)) {
  const big = data.clusters.filter(c => c.size >= 3);
  console.log(`\n== ${subject}: ${data.questions} questions, ${data.clusters.length} clusters, ${big.length} with 3+`);
  for (const c of data.clusters.slice(0, 12)) {
    console.log(`  x${c.size} [${c.years.join(',')}] ${c.sample.slice(0, 110)}`);
  }
}

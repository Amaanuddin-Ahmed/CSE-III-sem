/**
 * Phase 2 — PYQ mining.
 * Maps every parsed PYQ in pyq-data.js to one or more syllabus topics using the
 * keyword lists in syllabus_map.json, dedupes duplicate paper uploads by session
 * label, and computes the brief's priority score:
 *   S = 3 * distinct academic years + 2 * semester-end appearances + 1 * mid appearances
 * Tiers: A >= 9, B 5-8, C 1-4, D 0.
 */
const fs = require('fs');
const path = require('path');
const { QUESTIONS_DATABASE } = require('../../pyq-data.js');
const map = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'content-audit', 'syllabus_map.json'), 'utf8'));

const topics = [];
for (const [sub, info] of Object.entries(map.subjects)) {
  for (const [unit, u] of Object.entries(info.units)) {
    for (const t of u.topics) topics.push({ ...t, subject: sub, unit: Number(unit) });
  }
}

const STOP = new Set(['the','and','for','with','from','that','this','are','was','were','has','have','not','but','its','into','than','then','when','where','which','what','how','why','all','any','can','may','use','used','using','two','three','one','also','such','only','more','most','some','each','other','their','there','these','those','been','being','does','did','will','would','could','should','about','over','under','between','within','without','after','before','during','through','because','while','both','same','different','given','find','explain','describe','discuss','define','write','state','draw','show','prove','derive','calculate','compute','list','compare','difference','differences','short','note','notes','example','examples','answer','question','paper','marks','unit']);
const norm = s => ' ' + String(s || '').toLowerCase().replace(/\\[a-z]+/g, ' ').replace(/[^a-z0-9+]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ';

// Extra disambiguation for short/ambiguous keywords.
function contextPenalty(topic, q) {
  let p = 0;
  if (topic.id === 'DM.U3.T05' && /\bgroup of\b|\bgroup of \d|\bcommittee\b|\bpeople\b|\bstudents\b/.test(q)) p += 6;
  if (topic.id === 'DM.U2.T03' && /\bgroup\b/.test(q) && !/\brelation\b/.test(q)) p += 2;
  if (topic.id === 'DM.U5.T03' && /\btree\b/.test(q) && /\bbinary search tree\b|\bavl\b|\bb tree\b/.test(q)) p += 2;
  if (topic.id === 'COA.U2.T11' && /\bsequence counter\b/.test(q)) p += 2;
  // COA disambiguation: the old unit tags are unreliable and some words are generic.
  if (topic.id === 'COA.U1.T07' && /instruction cycle|fetch|decode|register transfer|\br[0-9]\b/.test(q)) p += 12;
  if (topic.id === 'COA.U3.T07' && /instruction format/.test(q)) p += 10;
  if (topic.id === 'COA.U3.T09' && /instruction cycle|fetch phase|machine cycle/.test(q)) p -= 4;
  if (topic.id === 'COA.U4.T05' && /instruction format/.test(q)) p -= 4;
  if (topic.id === 'COA.U3.T01' && /register transfer|\br[0-9]\s*(<-|←|:)|rtl/.test(q)) p -= 3;
  if (topic.id === 'COA.U3.T02' && /multiplexer|tri-?state|bus/.test(q) && /register/.test(q)) p -= 3;
  if (topic.id === 'COA.U3.T08' && !/timing|control signal|sequence counter/.test(q)) p += 4;
  if (topic.id === 'COA.U4.T07' && !/program control|data transfer|data manipulation|status flag|cisc|risc/.test(q)) p += 4;
  return p;
}

// Questions from the pre-MR25 unit map that the MR25 unit text does not name.
// They stay in the corpus but are excluded from the topic matrix, so a high
// count here is a syllabus-drift signal, not a content gap.
const OOS = {
  COA: /\bpipelin|vector process|array processor|multiprocessor|multi processor|interconnection|omega|arbitration|parallel process|loosely coupled|tightly coupled|crossbar|multiport memory|hypercube|memory interleav|processor memory/,
  DM: /\bprobability|bayes|random variable|variance|expected value|uniform \(|dice|pack of|poker|binomial distribution/,
  OOPJ: /\bjdbc|servlet|\bgenerics?\b|serializ|serialis|annotation|autobox|\bapplets?\b/,
};

// Last-resort topical aliases for in-scope questions whose wording misses the
// syllabus keyword list. Applied only when the keyword pass returns nothing.
const ALIAS = {
  COA: [
    [/functional unit|operational concept|components? of (the )?computer|block diagram of (a )?(digital )?computer/, 'COA.U1.T07'],
    [/machine instruction|instruction word|instruction format|elements of.*instruction/, 'COA.U3.T07'],
    [/micro[ -]?operations?/, 'COA.U3.T03'],
    [/shift operation|ashl|shra/, 'COA.U3.T05'],
    [/arithmetic circuit|arithmetic unit|alsu|combinational arithmetic/, 'COA.U3.T06'],
    [/micro[ -]?program|control unit|sequencer/, 'COA.U4.T01'],
    [/address sequencing/, 'COA.U4.T02'],
    [/signed (magnitude|number)|2'?s complement|binary division|division algorithm|restoring/, 'COA.U4.T10'],
    [/floating[ -]?point/, 'COA.U1.T06'],
    [/cache|memory hierarch|main memory|associative memory|auxiliary memory/, 'COA.U5.T06'],
    [/direct memory access|\bdma\b/, 'COA.U5.T05'],
    [/interrupt/, 'COA.U5.T04'],
    [/modes? of transfer|data transfer/, 'COA.U5.T03'],
  ],
  DM: [
    [/well[ -]?formed|validity|premises|inference|tautolog|logically implied|inconsistent|consistent/, 'DM.U1.T05'],
    [/predicate|quantifier|\(\u2200|\(\u2203|\(x\)/, 'DM.U1.T06'],
    [/set|union|intersection|cartesian|power set/, 'DM.U2.T01'],
    [/relation|matrix of r/, 'DM.U2.T03'],
    [/function|injective|surjective|bijective/, 'DM.U2.T06'],
    [/permutation|combination|arrangement|word|seated|select|distribute|number of ways/, 'DM.U4.T02'],
    [/binomial|coefficient|middle term|expansion/, 'DM.U4.T06'],
    [/inclusion|exclusion/, 'DM.U4.T08'],
    [/recurrence|generating function/, 'DM.U4.T10'],
    [/graph|euler|hamilton|chromatic|isomorph|planar|\bks\b|kn/, 'DM.U5.T01'],
  ],
  OOPJ: [
    [/feature|buzzword|jvm|jdk|jre|history of java/, 'OOPJ.U1.T02'],
    [/access (modifier|specifier)|constructor|class|object|variables?/, 'OOPJ.U1.T05'],
    [/exception|try block|catch|finally|throw/, 'OOPJ.U3.T01'],
    [/thread|multitask|daemon|synchroniz/, 'OOPJ.U3.T06'],
    [/layout/, 'OOPJ.U4.T08'],
    [/menu/, 'OOPJ.U5.T05'],
    [/collection|arraylist|hashmap|scanner|comparator/, 'OOPJ.U4.T03'],
    [/file|stream|reader|writer/, 'OOPJ.U4.T04'],
    [/event|listener/, 'OOPJ.U4.T05'],
    [/swing|jframe|jbutton|jlabel/, 'OOPJ.U5.T01'],
  ],
  DBMS: [
    [/applications? of database|purpose of database|file processing/, 'DBMS.U1.T01'],
    [/data ?base administrator|\bdba\b/, 'DBMS.U1.T03'],
    [/architecture|levels? of abstraction|data independence/, 'DBMS.U1.T02'],
    [/e-?r (diagram|model)|entity|relationship/, 'DBMS.U1.T04'],
    [/extended e-?r|specialization|generalization|aggregation|weak entity/, 'DBMS.U1.T06'],
    [/relational algebra/, 'DBMS.U2.T05'],
    [/\bsql\b|query/, 'DBMS.U3.T01'],
    [/normal form|\b[1-5]nf\b|bcnf/, 'DBMS.U3.T11'],
    [/transaction/, 'DBMS.U4.T01'],
    [/b\+ ?tree|tree based index|isam/, 'DBMS.U5.T06'],
    [/index/, 'DBMS.U5.T03'],
    [/file organization/, 'DBMS.U5.T02'],
  ],
  SE: [
    [/software engineering|characteristics? of software|legacy|myths?/, 'SE.U1.T01'],
    [/layer|process framework|umbrella/, 'SE.U1.T02'],
    [/cmmi/, 'SE.U1.T03'],
    [/process model|waterfall|spiral|incremental|concurrent|component based|evolutionary|unified process/, 'SE.U1.T04'],
    [/agile/, 'SE.U1.T05'],
    [/requirement|elicitation/, 'SE.U2.T01'],
    [/\bsrs\b|requirements? document/, 'SE.U2.T03'],
    [/design concept|design principle/, 'SE.U3.T02'],
    [/design model/, 'SE.U3.T03'],
    [/architecture/, 'SE.U3.T04'],
    [/\buml\b/, 'SE.U3.T06'],
    [/test strateg|software testing|testing strategy/, 'SE.U4.T01'],
    [/black[ -]?box|boundary value/, 'SE.U4.T02'],
    [/white[ -]?box|basis path/, 'SE.U4.T03'],
    [/debug/, 'SE.U4.T05'],
    [/metric|measure/, 'SE.U4.T06'],
    [/risk/, 'SE.U5.T01'],
    [/quality|\bsqa\b/, 'SE.U5.T04'],
    [/review/, 'SE.U5.T05'],
    [/reliability/, 'SE.U5.T07'],
  ],
};

function classify(q) {
  const text = norm(q.question);
  const words = new Set(text.trim().split(' '));
  if (OOS[q.subjectId] && OOS[q.subjectId].test(text)) {
    return { topics: [], score: 0, margin: 0, outOfScope: true };
  }
  const scored = [];
  for (const t of topics) {
    if (t.subject !== q.subjectId) continue;
    let score = 0;
    for (const kw of t.keywords) {
      const k = kw.toLowerCase();
      if (k.includes(' ')) {
        if (text.includes(' ' + k + ' ') || text.includes(k)) score += 2 + Math.min(2, k.split(' ').length);
      } else if (k.length <= 3) {
        if (words.has(k)) score += 2;
      } else if (text.includes(k)) {
        score += 1 + Math.min(2, Math.floor(k.length / 6));
      }
    }
    score -= contextPenalty(t, text);
    if (score > 0) scored.push({ t, score });
  }
  scored.sort((a, b) => b.score - a.score || a.t.id.localeCompare(b.t.id));
  if (!scored.length) {
    for (const [re, id] of ALIAS[q.subjectId] || []) {
      if (re.test(text)) return { topics: [id], score: 2, margin: 2, alias: true };
    }
    return { topics: [], score: 0, margin: 0 };
  }
  const best = scored[0];
  const second = scored[1] ? scored[1].score : 0;
  // Keep up to two topics when the second is close (multi-part questions).
  const picked = [best.t];
  if (scored[1] && scored[1].score >= Math.max(2, best.score * 0.6) && scored[1].t.unit === best.t.unit) picked.push(scored[1].t);
  return { topics: picked.map(t => t.id), score: best.score, margin: best.score - second, all: scored.slice(0, 4) };
}

// Dedupe duplicate uploads: a question's appearances are keyed by session label.
function uniqueSessions(q) {
  const out = [];
  const seen = new Set();
  for (const a of q.appearances || []) {
    const key = (a.label || a.session || a.paperName || '') + '|' + (a.qno || '');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(a);
  }
  return out.length ? out : [{ year: (q.years && q.years[0]) || 0, label: q.paperName || '', marks: q.marks, part: q.part }];
}

const records = [];
const unmapped = [];
for (const q of QUESTIONS_DATABASE) {
  const c = classify(q);
  const sessions = uniqueSessions(q);
  const years = [...new Set(sessions.map(a => a.year).filter(Boolean))];
  const isMid = sessions.some(a => /mid/i.test(a.label || '') || /mid/i.test(q.paperName || ''));
  const rec = {
    id: q.id, subject: q.subjectId, oldChapter: q.chapter, marks: q.marks, part: q.part,
    question: q.question, paper: q.paperName, years, sessions: sessions.map(a => a.label || a.session || a.paperName),
    topics: c.topics, confidence: c.margin >= 2 ? 'high' : (c.score >= 2 ? 'medium' : 'low'),
    score: c.score, isMid, outOfScope: !!c.outOfScope, alias: !!c.alias
  };
  records.push(rec);
  if (!c.topics.length) unmapped.push(rec);
}

// Aggregate per topic
const byTopic = new Map();
for (const t of topics) byTopic.set(t.id, { topic: t, qids: [], years: new Set(), sem: 0, mid: 0, marks: [] });
for (const r of records) {
  for (const id of r.topics) {
    const a = byTopic.get(id); if (!a) continue;
    a.qids.push(r.id);
    r.years.forEach(y => a.years.add(y));
    if (r.isMid) a.mid++; else a.sem++;
    a.marks.push(r.marks);
  }
}
const rows = [];
for (const [id, a] of byTopic) {
  const S = 3 * a.years.size + 2 * a.sem + 1 * a.mid;
  const tier = S >= 9 ? 'A' : S >= 5 ? 'B' : S >= 1 ? 'C' : 'D';
  rows.push({ id, subject: a.topic.subject, unit: a.topic.unit, title: a.topic.title, tier, S, years: [...a.years].sort(), sem: a.sem, mid: a.mid, qids: a.qids, marks: a.marks });
}
rows.sort((a, b) => a.subject.localeCompare(b.subject) || a.unit - b.unit || b.S - a.S || a.id.localeCompare(b.id));

const csv = ['topic_id,subject,unit,tier,S,distinct_years,sem_appearances,mid_appearances,question_ids'];
for (const r of rows) csv.push([r.id, r.subject, r.unit, r.tier, r.S, r.years.join('|'), r.sem, r.mid, r.qids.join('|')].join(','));
fs.writeFileSync(path.join(__dirname, '..', '..', 'content-audit', 'pyq_topic_matrix.csv'), csv.join('\n'));
fs.writeFileSync(path.join(__dirname, '..', '..', 'content-audit', 'pyq_records.json'), JSON.stringify({ records, unmapped: unmapped.map(u => ({ id: u.id, subject: u.subject, marks: u.marks, question: u.question, outOfScope: u.outOfScope })) }, null, 1));

const tierCount = { A: 0, B: 0, C: 0, D: 0 };
for (const r of rows) tierCount[r.tier]++;
const oos = records.filter(r => r.outOfScope);
console.log('questions', records.length, 'mapped', records.filter(r => r.topics.length).length, 'outOfScope', oos.length, 'unmapped', unmapped.length);
console.log('topics', rows.length, 'tiers', tierCount);
console.log('\nTop 40 by S:');
for (const r of rows.slice(0, 40)) console.log(`${r.id}\t${r.tier}\tS=${r.S}\t${r.title}\t(${r.qids.length} q)`);
console.log('\nUnmapped by subject:');
const uu = {}; for (const u of unmapped) uu[u.subject] = (uu[u.subject] || 0) + 1; console.log(uu);
console.log('Out of scope by subject:');
const oo = {}; for (const u of oos) oo[u.subject] = (oo[u.subject] || 0) + 1; console.log(oo);

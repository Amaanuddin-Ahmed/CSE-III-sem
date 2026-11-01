const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { NOTES_DATA } = require('../pyq-data.js');

const root = path.join(__dirname, '..');

function loadGlobal(file, name) {
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src + `\n;globalThis.__X = ${name};`, ctx);
  return ctx.__X;
}

const CONTENT = loadGlobal('notes-content.js', 'NOTES_CONTENT');

const NOISE = [
  /^\s*page\s*\d+/i,
  /^\s*\d+\s*$/,
  /^\s*fig(?:ure)?\.?\s*\d/i,
  /^\s*table\s*\d/i,
  /^\s*(?:prepared|downloaded|shared|scanned)\b/i,
  /^\s*(?:whatsapp|telegram|instagram)\b/i,
  /^\s*[-_=*]{3,}\s*$/,
  /^\s*©/,
  /^\s*(?:unit|module)\s*[-–]?\s*[ivx\d]+\s*$/i
];

const META_SENTENCE = /^(?:most of the topics|no explanation|it is not possible|the exposition of such topics|the principal results|the reader is assumed|this book|you have already|the only language|what are these|who here|how many|almost everyone|computer science is nothing|today you saw|by the end of this semester|now tell me|question\s*\d|answer\s*\d|syllabus|course outcomes?|learning objectives?|text ?book|reference book|prepared by|mr\.|mrs\.|prof\.|assistant professor|department of)/i;
const BAD_HEADING = /^(?:question\s*\d+|q\s*\d+|answer|solution|example\s*\d*|fig(?:ure)?|table|note|notes|discrete|mathematics|computer science|set|rule|c|python|java|assembly|if|then|else|and|or|not|dbms|ai|cs|ug|syllabus|topics? in this unit|contents?|whatsapp|instagram|facebook|google maps|social sites?|internet|just for fun|one more question|now tell me why|how many watched these)/i;
const FRONT_MATTER = /^(?:computer organization and architecture|discrete mathematics|unit\s*[-–]?\s*[ivx\d]+(?:\s*[-–]?\s*(?:lecture notes|handouts?|part\s*\d+))?|lecture notes|handouts?)$/i;

function clean(s) {
  return String(s || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\uF000-\uF0FF]/g, ' ')
    .replace(/^\?\s*(?=[A-Z"“])/, '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\|\s*/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

function isNoise(line) {
  if (!line || line.length < 3) return true;
  if (NOISE.some(r => r.test(line))) return true;
  if (/^[•●▪◦*\-–—]\s*$/.test(line)) return true;
  if ((line.match(/[^\w\s.,;:()\[\]{}+\-*/=<>≤≥→←↔∑√∫%°′″]/g) || []).length > line.length * 0.45) return true;
  return false;
}

function upperRatio(s) {
  const letters = s.replace(/[^A-Za-z]/g, '');
  if (!letters) return 0;
  return (s.match(/[A-Z]/g) || []).length / letters.length;
}

const HEADING_WORDS = /\b(definition|introduction|types?|classification|properties|characteristics|working|structure|architecture|algorithm|design|analysis|procedure|examples?|applications?|advantages?|disadvantages?|limitations?|theorem|proof|laws?|rules?|operations?|representation|conversion|circuits?|diagram|model|normalization|normal forms?|joins?|keys?|sql|transaction|process|life ?cycle|testing|maintenance|requirements?|software|ecosystem|biodiversity|energy|pollution|entrepreneur|business|market|graph|tree|relation|function|group|ring|field|lattice|boolean|logic|set|matrix|combinatorics|recurrence|induction|counting|probability|proposition|predicate|inference|quantifier|semigroup|monoid|isomorphism|homomorphism|poset|hasse)\b/i;

function headingTitle(line) {
  let s = clean(line)
    .replace(/^#+\s*/, '')
    .replace(/^[-–•]\s*/, '')
    .replace(/^\d+(?:\.\d+)*[.)]?\s*/, '')
    .replace(/\s*[.:;,…]+\s*$/, '')
    .trim();
  if (!s) return '';
  s = s
    .replace(/^(?:what|why|how)\s+(?:is|are|do|does|did|can|could|should)\s+/i, '')
    .replace(/^(?:what|why|how)\s+/i, '')
    .replace(/^define\s+/i, '')
    .replace(/^explain\s+/i, '')
    .replace(/^write\s+(?:a\s+)?(?:short\s+)?note\s+on\s+/i, '')
    .replace(/\?+$/, '')
    .replace(/\s*[-–—]\s*$/, '')
    .trim();
  if (s.length < 3 || s.length > 72) return '';
  if (s.split(/\s+/).length > 10) return '';
  if (/[.!?]$/.test(s)) return '';
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s;
}

function isHeading(line, nextLine) {
  const raw = clean(line);
  if (!raw || isNoise(raw)) return false;
  if (/^[•●▪◦*\-–—]/.test(raw)) return false;
  if (/^(?:fig|table|example|solution|question|answer)\b/i.test(raw)) return false;
  if (/[.!?]$/.test(raw)) return false;
  if (/^(?:when|by|then|so|thus|hence|therefore|here|this|these|those|that is|it is|there is|there are)\b/i.test(raw)) return false;
  if (/\bfig(?:ure)?\.?\s*\d/i.test(raw)) return false;
  if (/[:;]\s*$/.test(raw)) return false;
  if (/^[A-Za-z]\s+[a-z]/.test(raw)) return false;
  if (/^["'“”‘’]/.test(raw)) return false;
  // Headings are labels, not full sentences. Reject clause-like lines such as
  // "Hamiltonian every cycle graph is Hamiltonian".
  if (/\b(?:is|are|was|were|can|could|will|would|should)\b/i.test(raw) && raw.split(/\s+/).length > 4 &&
      !/^(?:what|why|how|define|explain)\b/i.test(raw)) return false;
  if ((raw.match(/["“”]/g) || []).length % 2 === 1) return false;
  if (raw.length > 78) return false;
  if (raw.split(/\s+/).length < 2 || raw.split(/\s+/).length > 10) return false;
  if (BAD_HEADING.test(raw)) return false;
  if (/[=×÷∈≤≥→←↔∑√∫⊕∧∨]/.test(raw)) return false;
  if (/^["'“”‘’]/.test(raw)) return false;
  if (/^(?:whatsapp|instagram|facebook|google maps|ai|computer science)\b/i.test(raw)) return false;
  const title = headingTitle(raw);
  if (!title || BAD_HEADING.test(title)) return false;

  const numbered = /^\d+(?:\.\d+)*[.)]?\s+\S/.test(raw);
  const upper = upperRatio(raw) > 0.62;
  const keyword = HEADING_WORDS.test(raw);
  const words = raw.split(/\s+/).length;
  const titleish = /^[A-Z][A-Za-z0-9&/(),\-'\s]+$/.test(raw) && words <= 8;
  const question = /^(?:what|why|how|define|explain)\b/i.test(raw) && words <= 9;
  const next = clean(nextLine || '');
  const hasNext = next && !isNoise(next);
  if (!hasNext) return false;
  return numbered || upper || question || (keyword && titleish);
}

function stripBullet(s) {
  return clean(s)
    .replace(/^[\s\u25A0-\u25FF•●▪◦*\-–—?]+/, '')
    .trim();
}

function paragraph(lines) {
  return clean(lines.join(' ')
    .replace(/[\u25A0-\u25FF•●▪◦]\s*/g, ' ')
    .replace(/(?:^|\s)[-–—]\s+/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/([a-z0-9])([A-Z][a-z])/g, '$1 $2')
    .trim();
}

function sentences(text) {
  return clean(text)
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-Z0-9("'])/)
    .map(s => s.trim())
    .filter(s => s.length >= 55 && s.length <= 300)
    .filter(s => !META_SENTENCE.test(s))
    .filter(s => !/^(?:fig|table|example|solution|question|answer)\b/i.test(s))
    .filter(s => !/[•●▪◦]/.test(s))
    .filter(s => !/\?\?|\.{3,}|_{3,}|—{2,}/.test(s))
    .filter(s => !/[?]$/.test(s))
    .filter(s => !/^(?:why|what|how|who|which|when|where)\b/i.test(s))
    .filter(s => s.split(/\s+/).length >= 7)
    .filter(s => /[a-z]/.test(s));
}

function dedupe(list) {
  const out = [];
  for (const item of list) {
    const key = item.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (!key) continue;
    if (out.some(o => o.key === key)) continue;
    out.push({ key, text: item });
  }
  return out.map(o => o.text);
}

function isReadable(text) {
  const value = String(text || '').trim();
  if (value.length < 18) return false;
  const compact = value.replace(/\s/g, '');
  const letters = (compact.match(/[A-Za-z]/g) || []).length;
  if (letters / Math.max(compact.length, 1) < 0.48) return false;
  if ((value.match(/[A-Za-z]{3,}/g) || []).length < 3) return false;
  if (/\uFFFD|[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(value)) return false;
  return true;
}

function isGoodTitle(title) {
  const value = String(title || '').trim();
  if (!isReadable(value)) return false;
  if (/^[^A-Za-z0-9]/.test(value)) return false;
  if ((value.match(/[^A-Za-z0-9\s&/(),.'-]/g) || []).length > 3) return false;
  if (/^(?:repeat|since|because|although|while|whereas|it|this|these|those)\b/i.test(value)) return false;
  if (/["“”]/.test(value)) return false;
  const afterColon = value.split(/:\s*/).slice(1).join(' ');
  if (afterColon && afterColon.split(/\s+/).filter(Boolean).length >= 3) return false;
  if (/\b(?:the|a|an|of|for|to|in|on|or|and|with|by|from|at|as|that|which|is|are|was|were|can|could|will|would|should)$/i.test(value)) return false;
  const words = value.split(/\s+/).filter(Boolean);
  const last = words[words.length - 1] || '';
  if (last.length <= 3 && /^[a-z]+$/.test(last)) return false;
  return true;
}

function pickSummary(lines) {
  const text = paragraph(lines);
  const out = [];
  let len = 0;
  for (const s of sentences(text)) {
    if (out.some(o => o.toLowerCase() === s.toLowerCase())) continue;
    if (len + s.length > 330 && out.length) break;
    out.push(s);
    len += s.length;
    if (out.length >= 2) break;
  }
  if (!out.length) {
    const fallback = clean(text);
    if (fallback.length >= 50) return fallback.slice(0, 280).replace(/\s+\S*$/, '') + '…';
  }
  return out.join(' ');
}

function pickPoints(lines) {
  const candidates = [];
  for (const line of lines) {
    const raw = clean(line);
    const isBullet = /^[\s\u25A0-\u25FF•●▪◦*\-–—?]\s*\S/.test(raw) || /^\d+[.)]\s+\S/.test(raw);
    if (!isBullet) continue;
    const t = stripBullet(raw);
    if (t.length < 22 || t.length > 150) continue;
    if (META_SENTENCE.test(t)) continue;
    if (/\.{3,}|_{3,}/.test(t)) continue;
    candidates.push(t);
  }
  return dedupe(candidates).slice(0, 3);
}

function pickFormulas(lines) {
  const candidates = [];
  for (const line of lines) {
    const t = stripBullet(line);
    if (t.length < 6 || t.length > 110) continue;
    if (!/[=∈≤≥→←↔∑√∫⊕∧∨×÷]/.test(t)) continue;
    if (/^(?:fig|table|example|solution|question|answer)\b/i.test(t)) continue;
    if (META_SENTENCE.test(t)) continue;
    if ((t.match(/[=∈≤≥→←↔∑√∫⊕∧∨×÷]/g) || []).length > 8) continue;
    if (/^[+\-]?\(?[A-Za-z0-9]+\s*[+*\/-]\s*[A-Za-z0-9]+\s*\)?\s*[+\-=]/.test(t) && !/[a-z]/.test(t)) continue;
    candidates.push(t);
  }
  return dedupe(candidates).slice(0, 2);
}

function pickExample(lines) {
  const text = paragraph(lines);
  const m = text.match(/(?:^|[.!?]\s+)(?:Example\s*\d*\s*[:\-]|For\s+example,)\s*([^.!?]{20,170}[.!?]?)/i);
  if (!m) return '';
  const example = m[1].trim();
  if (!example || /[•●▪◦]/.test(example) || /\binclude\b/i.test(example)) return '';
  return example;
}

function buildSummary(note) {
  const entry = CONTENT[note.id];
  if (!entry || !Array.isArray(entry.pages)) return null;

  const rawLines = entry.pages.flatMap(p => String(p.t || '').split(/\n/)).map(clean).filter(Boolean);
  const lines = rawLines.filter(l => !isNoise(l));

  const sections = [];
  let current = null;
  let buffer = [];

  const flush = () => {
    if (!current) return;
    const text = paragraph(buffer);
    if (text.length > 80) {
      current.text = text;
      current.lines = buffer.slice();
      current.rawText = buffer.join(' ');
      sections.push(current);
    }
    buffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isHeading(line, lines[i + 1])) {
      flush();
      current = { title: headingTitle(line), rawTitle: line };
    } else if (current) {
      buffer.push(line);
    }
  }
  flush();

  const generic = /^(?:introduction|topics in this unit|contents|syllabus|conclusion|summary|references?|bibliography)$/i;
  // Scanned notes often repeat the same running header on every page. Keep one
  // section per title (the one with the most body text) instead of showing the
  // same topic four times.
  const uniqueSections = [];
  const titleIndex = new Map();
  for (const s of sections) {
    const key = String(s.title || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (!key) continue;
    if (titleIndex.has(key)) {
      const existing = uniqueSections[titleIndex.get(key)];
      if (s.text.length > existing.text.length) uniqueSections[titleIndex.get(key)] = s;
      continue;
    }
    titleIndex.set(key, uniqueSections.length);
    uniqueSections.push(s);
  }
  const cleanedSections = uniqueSections
    .filter(s => s.title && !generic.test(s.title) && !FRONT_MATTER.test(s.title))
    .filter(s => !/^\s*(?:syllabus|unit\s*[-–]?\s*[ivx\d]+\s*(?:lecture notes|handouts?))\b/i.test(s.text))
    .filter(s => {
      const q = (s.rawText.match(/\?/g) || []).length;
      const pua = (s.rawText.match(/[\uF000-\uF0FF]/g) || []).length;
      return q <= 3 && pua < s.rawText.length * 0.15;
    })
    .map(s => ({
      title: s.title,
      text: s.text,
      lines: s.lines,
      summary: pickSummary([s.text]),
      points: pickPoints(s.lines),
      formulas: pickFormulas(s.lines)
    }))
    .filter(s => s.summary && !META_SENTENCE.test(s.summary));

  // Keep the strongest topics, but preserve their original order so the
  // summary still reads like the PDF from start to finish.
  const ranked = cleanedSections
    .map((s, i) => ({ s, i, score: s.text.length + (HEADING_WORDS.test(s.title) ? 180 : 0) + (s.points.length * 30) }))
    .filter(x => x.s.text.length >= 120)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .sort((a, b) => a.i - b.i)
    .map(x => x.s);

  let exampleUsed = false;
  let topics = ranked.map(s => {
    let example = pickExample(s.lines);
    if (exampleUsed || example.length > 150) example = '';
    if (example) exampleUsed = true;
    return {
      title: s.title,
      summary: s.summary,
      points: s.points,
      formulas: s.formulas,
      example: example && example.length <= 150 ? example : ''
    };
  });

  let overview = '';
  const overviewSentences = sentences(paragraph(lines.slice(0, 1200)));
  const keywords = (note.title + ' ' + (note.subjectId || '')).toLowerCase().split(/[^a-z]+/).filter(w => w.length > 3);
  const scored = overviewSentences.map((s, i) => {
    let score = 0;
    const low = s.toLowerCase();
    if (/\b(?:is|are|refers? to|defined as|means|consists? of)\b/i.test(s)) score += 4;
    if (keywords.some(k => low.includes(k))) score += 3;
    if (/^the\b/i.test(s)) score += 1;
    if (s.length > 160) score += 1;
    if (/you|your|we|our/i.test(s)) score -= 1;
    score -= i * 0.02;
    return { s, score, i };
  }).sort((a, b) => b.score - a.score);
  if (scored.length) overview = scored[0].s;
  if (!overview) {
    for (const s of ranked) {
      if (s.summary && !META_SENTENCE.test(s.summary)) { overview = s.summary; break; }
    }
  }
  if (!overview) {
    overview = pickSummary(lines.slice(0, 120));
  }
  if (overview.length > 430) overview = overview.slice(0, 427).replace(/\s+\S*$/, '') + '…';

  // Handwritten/scanned notes often produce lines that look like headings but
  // are OCR noise. Keep only readable topics; if too few remain, show an honest
  // limited summary instead of random text.
  topics = topics.filter(t => isGoodTitle(t.title) && isReadable(t.summary));
  let limited = false;
  const sourceLimited = entry.quality === 'limited';
  if (!isReadable(overview)) {
    overview = (note.description && note.description.length > 20)
      ? note.description
      : `This note covers ${note.title}. Open the full PDF for the exact content.`;
  }
  // Files the source index already marks as low-quality OCR must never be
  // turned into confident-looking topic cards.
  if (sourceLimited) topics = [];
  if (topics.length < 2) {
    limited = true;
    const desc = note.description && note.description.length > 20
      ? note.description
      : `This note covers ${note.title}.`;
    const descPoints = desc.split(/[,;]/).map(s => s.trim()).filter(s => s.length > 8).slice(0, 4);
    topics = [{
      title: 'What this note covers',
      summary: `${desc} The extracted text is too noisy for a reliable section-by-section summary, so open the full PDF for diagrams, exact wording and handwritten pages.`,
      points: descPoints,
      formulas: [],
      example: ''
    }];
    overview = desc;
  }

  const mustKnow = [];
  if (!limited) {
    for (const t of topics) {
      for (const f of t.formulas) {
        if (!mustKnow.includes(f)) mustKnow.push(f);
        if (mustKnow.length >= 6) break;
      }
      if (mustKnow.length >= 6) break;
    }
    if (mustKnow.length < 4) {
      for (const t of topics) {
        for (const p of t.points) {
          if (!mustKnow.includes(p)) mustKnow.push(p);
          if (mustKnow.length >= 6) break;
        }
        if (mustKnow.length >= 6) break;
      }
    }
  }

  return {
    noteId: note.id,
    subjectId: note.subjectId,
    chapter: note.chapter,
    title: note.title,
    pageCount: entry.pages.length,
    quality: entry.quality || 'good',
    limited,
    limitedReason: limited ? (sourceLimited ? 'handwritten' : 'extraction') : '',
    overview,
    topics,
    mustKnow
  };
}

const output = {};
for (const note of NOTES_DATA) {
  if (!CONTENT[note.id]) continue;
  const summary = buildSummary(note);
  if (summary && (summary.overview || summary.topics.length)) output[note.id] = summary;
}

fs.writeFileSync(path.join(root, 'notes-summaries.js'),
  '/* Auto-generated structured summaries from notes-content.js. */\n' +
  'const NOTE_SUMMARIES = ' + JSON.stringify(output, null, 1) + ';\n' +
  "if (typeof window !== 'undefined') window.NOTE_SUMMARIES = NOTE_SUMMARIES;\n" +
  "if (typeof module !== 'undefined') module.exports = { NOTE_SUMMARIES };\n");

console.log('wrote summaries for', Object.keys(output).length, 'notes');
for (const id of Object.keys(output).slice(0, 4)) {
  const s = output[id];
  console.log('\n', id, s.title, 'topics', s.topics.length, 'overview', s.overview.slice(0, 140));
  console.log(JSON.stringify(s.topics.slice(0, 3), null, 1).slice(0, 1800));
}

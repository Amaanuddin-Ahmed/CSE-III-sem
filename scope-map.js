/**
 * MGIT PYQ Hub — Central Syllabus Scoping Engine & MR-25 Scope Map
 * 
 * Rules:
 * - Mid-1: Units 1–2 plus the 1st half of Unit 3
 * - Mid-2: 2nd half of Unit 3 plus Units 4–5
 * - Semester End: Complete applicable syllabus (Units 1 to 5)
 */

const EXAM_CONFIG = {
  upcoming: 'mid2',
  exams: {
    mid1: {
      id: 'mid1',
      name: 'Mid-1',
      title: 'Mid-Term 1',
      unitsLabel: 'Units 1–2 + Unit 3 (1st half)',
      badge: null,
      description: 'Revise your first internal examination syllabus.',
      bannerSubtitle: "Only what’s in your Mid-1 syllabus",
      units: [1, 2, 3],
      unit3Scope: 'mid1',
      unit3Label: 'Unit 3 (1st half)'
    },
    mid2: {
      id: 'mid2',
      name: 'Mid-2',
      title: 'Mid-Term 2',
      unitsLabel: 'Unit 3 (2nd half) + Units 4–5',
      badge: 'Upcoming',
      description: 'Focus on the upcoming internal examination.',
      bannerSubtitle: "Only what’s in your Mid-2 syllabus",
      units: [3, 4, 5],
      unit3Scope: 'mid2',
      unit3Label: 'Unit 3 (2nd half)'
    },
    sem: {
      id: 'sem',
      name: 'Semester End',
      title: 'Semester End Examination',
      unitsLabel: 'All 5 Units',
      badge: null,
      description: 'Prepare across the complete semester syllabus.',
      bannerSubtitle: "Complete semester-end syllabus",
      units: [1, 2, 3, 4, 5],
      unit3Scope: 'both',
      unit3Label: 'Unit 3'
    }
  }
};

const SCOPE_MAP = {
  unit3Splits: {
    DM: {
      subject: 'Discrete Mathematics',
      unit3Title: 'Algebraic Structures: Algebraic Systems, Semigroups, Monoids, Lattices and Boolean Algebra',
      mid1Description: 'Algebraic Systems, Semigroups and Monoids',
      mid2Description: 'Lattices as Partially Ordered Sets and Boolean Algebra',
      mid1Keywords: ['algebraic system', 'algebraic structure', 'semigroup', 'semi group', 'monoid', 'submonoid', 'sub monoid', 'subsemigroup', 'closure', 'associative', 'binary operation', 'identity element', 'identity and inverse', 'inverse element', 'subalgebra', 'direct product', 'homomorphism', 'isomorphism', 'forms a group', 'group under', 'abelian group', 'define a group', 'multiplicative group', 'in any group', 'order of every element', 'order of an element', 'subgroup', 'cyclic group', 'coset', 'lagrange', 'normal subgroup'],
      mid2Keywords: ['lattice', 'sublattice', 'poset', 'partially ordered', 'partial order', 'boolean algebra', 'boolean function', 'boolean expression', 'boolean simplification', 'bounded lattice', 'distributive lattice', 'lattice operations', 'complement', 'lub', 'glb', 'join and meet', 'absorption']
    },
    COA: {
      subject: 'Computer Organization & Architecture',
      unit3Title: 'Register Transfer Language, Micro-operations and Basic Computer Organization',
      mid1Description: 'Register Transfer Language, Bus and Memory Transfers, Arithmetic/Logic/Shift Micro-operations and the Arithmetic Logic Shift Unit',
      mid2Description: 'Basic Computer Organization and Design: Instruction Codes, Computer Registers, Instruction Cycle, Memory-Reference Instructions, I/O and Interrupt',
      mid1Keywords: ['register transfer', 'rtl', 'bus transfer', 'memory transfer', 'bus and memory', 'micro operation', 'microoperation', 'micro-operation', 'arithmetic micro', 'logic micro', 'shift micro', 'arithmetic logic shift', 'alsu'],
      mid2Keywords: ['instruction code', 'computer register', 'instruction cycle', 'memory reference', 'timing and control', 'input output', 'input/output', 'interrupt', 'basic computer organization', 'program counter', 'instruction register', 'bidirectional input', 'enable/load']
    },
    OOPJ: {
      subject: 'Object-Oriented Programming through Java',
      unit3Title: 'Exception Handling and Multithreading',
      mid1Description: 'Exception Handling: try, catch, throw, throws and finally; Built-in and Custom Exception Subclasses',
      mid2Description: 'Multithreading: Thread Life Cycle, Priorities, Synchronization, Inter-thread Communication, Thread Groups and Daemon Threads',
      mid1Keywords: ['exception', 'try', 'catch', 'finally', 'throw', 'throws', 'throwable', 'checked exception', 'unchecked exception', 'custom exception', 'user-defined exception', 'resumptive', 'termination or resumptive'],
      mid2Keywords: ['thread', 'multithreading', 'multitasking', 'lightweight process', 'process-based', 'process based', 'runnable', 'synchronization', 'synchronized', 'deadlock', 'inter-thread', 'inter thread', 'wait', 'notify', 'notifyall', 'thread priority', 'life cycle', 'daemon']
    },
    DBMS: {
      subject: 'Database Management Systems',
      unit3Title: 'SQL, Constraints, Triggers and Schema Refinement (Normalization)',
      mid1Description: 'SQL: Basic Queries, UNION/INTERSECT/EXCEPT, Nested Queries, Aggregation, NULLs, Constraints and Triggers',
      mid2Description: 'Schema Refinement: Redundancy, Decompositions, Functional Dependencies, 1NF–BCNF, Lossless Join, Multivalued Dependencies, 4NF and 5NF',
      mid1Keywords: ['sql', 'select', 'union', 'intersect', 'except', 'nested quer', 'aggregation', 'null value', 'trigger', 'active database', 'integrity constraint', 'constraint', 'types of joins', 'stored procedure'],
      mid2Keywords: ['redundancy', 'decomposition', 'functional dependenc', '1nf', '2nf', '3nf', 'bcnf', 'lossless', 'multivalued dependenc', 'multi valued dependenc', 'join dependency', '4nf', '5nf', 'normal form', 'normalization', 'canonical cover', 'attribute closure', 'closure of', 'armstrong', 'prime attribute', 'anomaly', 'schema refinement']
    },
    SE: {
      subject: 'Software Engineering',
      unit3Title: 'Design Engineering, Architectural Design and UML Modeling',
      mid1Description: 'Design Process and Quality, Design Concepts and the Design Model, Software Architecture, Data Design, Architectural Styles and Patterns',
      mid2Description: 'UML Conceptual Model, Structural Modeling, Use Case, Class, Sequence, Collaboration, Activity and Component Diagrams',
      mid1Keywords: ['design process', 'design quality', 'design concept', 'design model', 'design principle', 'design strateg', 'software architecture', 'data design', 'architectural style', 'architectural pattern', 'architectural design', 'architecture', 'modularity', 'abstraction', 'refinement', 'cohesion', 'coupling', 'component level design', 'data flow'],
      mid2Keywords: ['uml', 'use case', 'class diagram', 'sequence diagram', 'collaboration diagram', 'activity diagram', 'component diagram', 'structural modeling', 'unified modeling', 'class based model', 'object model', 'behavioural model', 'behavioral model', 'static diagram', 'generalization relationship']
    },
    ES: {
      subject: 'Environmental Studies',
      unit3Title: 'Biodiversity and Biotic Resources',
      mid1Description: 'Biodiversity: Definition, Levels (Genetic, Species, Ecosystem) and Values',
      mid2Description: 'Threats to Biodiversity (Habitat Loss, Poaching, Man–Wildlife Conflict) and In-situ / Ex-situ Conservation',
      mid1Keywords: ['biodiversity', 'genetic diversity', 'species diversity', 'ecosystem diversity', 'value of biodiversity', 'consumptive', 'productive', 'aesthetic', 'ethical', 'optional value'],
      mid2Keywords: ['habitat loss', 'poaching', 'man-wildlife', 'man wildlife', 'conservation', 'in-situ', 'ex-situ', 'endangered', 'extinction', 'threat to biodiversity', 'wildlife']
    },
    IE: {
      subject: 'Innovation and Entrepreneurship',
      unit3Title: 'Opportunity Assessment and Prototype Development',
      mid1Description: 'Global Competitors, Industry Trends, Market Sizing (TAM, SAM, SOM) and Opportunity Scope',
      mid2Description: 'Prototyping, Minimum Viable Product (MVP), Testing and Validation',
      mid1Keywords: ['competitor', 'industry trend', 'market sizing', 'tam', 'sam', 'som', 'opportunity assessment', 'market size', 'potential scale'],
      mid2Keywords: ['prototype', 'mvp', 'minimum viable product', 'testing', 'validation', 'validate', 'no-code', 'developing a prototype']
    }
  }
};

/*
 * `const` declarations do NOT become properties of `window`. The app reads
 * `window.EXAM_CONFIG` and `window.SCOPE_MAP`, so publish compatible views of
 * the config here instead of silently falling back to Mid-2 everywhere.
 */
if (typeof window !== 'undefined') {
  // Flat map keyed by exam id: { mid1, mid2, sem }
  window.EXAM_CONFIG = EXAM_CONFIG.exams;
  // Preserve the full nested object for callers that need `unit3Splits`.
  window.SCOPE_MAP = SCOPE_MAP.unit3Splits;
  window.EXAM_CONFIG_FULL = EXAM_CONFIG;
  window.SCOPE_MAP_FULL = SCOPE_MAP;
  window.getNoteUnits = getNoteUnits;
  window.isNoteInScope = isNoteInScope;
}

/**
 * Check whether a question, note or resource belongs to the requested examination scope
 */
function isItemInScope(item, examId) {
  if (!examId || examId === 'sem') return true;

  const unit = Number(item.chapter !== undefined ? item.chapter : item.unit);
  if (isNaN(unit) || unit <= 0) return true; // Keep unassigned resources accessible

  if (examId === 'mid1') {
    if (unit === 1 || unit === 2) return true;
    if (unit >= 4) return false;
    // Unit 3 handling
    if (item.scope === 'mid1') return true;
    if (item.scope === 'mid2') return false;
    return matchUnit3Mid1(item);
  }

  if (examId === 'mid2') {
    if (unit >= 4 && unit <= 5) return true;
    if (unit <= 2) return false;
    // Unit 3 handling
    if (item.scope === 'mid2') return true;
    if (item.scope === 'mid1') return false;
    return matchUnit3Mid2(item);
  }

  return true;
}

/**
 * Classify a Unit 3 item into one half of the syllabus.
 * Returns 'mid1', 'mid2', or null when the text gives no confident answer.
 *
 * Null is deliberate: assigning an unknown question to a half by id parity
 * (the old behaviour) invented scope. Unknown Unit 3 items stay visible in
 * Semester End and are listed in docs/CONTENT_REVIEW.md for manual review.
 */
function classifyUnit3(item) {
  if (!item) return null;
  if (item.scope === 'mid1' || item.scope === 'mid2') return item.scope;

  const subCode = item.subjectId || item.subject || '';
  const splitInfo = SCOPE_MAP.unit3Splits[subCode];
  if (!splitInfo) return null;

  const text = ((item.question || '') + ' ' + (item.title || '') + ' ' + (item.topicTag || '')).toLowerCase();

  let mid1Score = 0;
  for (const kw of splitInfo.mid1Keywords) {
    if (text.includes(kw.toLowerCase())) mid1Score += 2;
  }

  let mid2Score = 0;
  for (const kw of splitInfo.mid2Keywords) {
    if (text.includes(kw.toLowerCase())) mid2Score += 2;
  }

  if (mid1Score > mid2Score) return 'mid1';
  if (mid2Score > mid1Score) return 'mid2';
  return null;
}

function matchUnit3Mid1(item) {
  return classifyUnit3(item) === 'mid1';
}

function matchUnit3Mid2(item) {
  return classifyUnit3(item) === 'mid2';
}

/**
 * Notes are whole-unit resources. Unlike a single question, a Unit 3 note
 * covers both halves of the syllabus, so it must stay visible in Mid-1 and
 * Mid-2 instead of being pushed through the Unit 3 keyword split.
 */
function getNoteUnits(note) {
  if (!note) return [];
  const raw = Array.isArray(note.chapters) && note.chapters.length
    ? note.chapters
    : [note.chapter !== undefined ? note.chapter : note.unit];
  return Array.from(new Set(raw.map(Number).filter(n => Number.isFinite(n) && n > 0))).sort((a, b) => a - b);
}

function isNoteInScope(note, examId) {
  if (!note || !examId || examId === 'sem') return true;
  const units = getNoteUnits(note);
  if (units.length === 0) return true;
  const exam = EXAM_CONFIG.exams[examId];
  if (!exam || !Array.isArray(exam.units)) return true;
  return units.some(unit => exam.units.includes(unit));
}

/**
 * Filter an array of items (questions, notes, flashcards) for the selected exam
 */
function filterItemsForExam(items, examId) {
  if (!Array.isArray(items)) return [];
  if (!examId || examId === 'sem') return items;
  return items.filter(item => isItemInScope(item, examId));
}

/**
 * Get in-scope chapter numbers for a given exam
 */
function getInScopeChapters(examId) {
  if (!examId || examId === 'sem') return [1, 2, 3, 4, 5];
  if (examId === 'mid1') return [1, 2, 3];
  if (examId === 'mid2') return [3, 4, 5];
  return [1, 2, 3, 4, 5];
}

/**
 * Get formatted chapter title for active exam scope
 */
function getScopedChapterTitle(subjectId, chapterNum, examId) {
  const ch = Number(chapterNum);
  const subjects = typeof SUBJECTS_DATA !== 'undefined' ? SUBJECTS_DATA : {};
  const sub = subjects[subjectId];
  const origTitle = (sub && sub.chapters && sub.chapters[ch]) ? sub.chapters[ch] : `Unit ${ch}`;

  if (ch === 3) {
    if (examId === 'mid1') {
      const split = SCOPE_MAP.unit3Splits[subjectId];
      return split ? split.mid1Description : `${origTitle} (1st half)`;
    }
    if (examId === 'mid2') {
      const split = SCOPE_MAP.unit3Splits[subjectId];
      return split ? split.mid2Description : `${origTitle} (2nd half)`;
    }
  }

  return origTitle;
}

// Export for Node.js environments and browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXAM_CONFIG,
    SCOPE_MAP,
    isItemInScope,
    isNoteInScope,
    classifyUnit3,
    filterItemsForExam,
    getInScopeChapters,
    getScopedChapterTitle
  };
}

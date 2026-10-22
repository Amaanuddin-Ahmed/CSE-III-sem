/**
 * MGIT PYQ Hub — Central Syllabus Scoping Engine & MR-25 Scope Map
 * 
 * Rules:
 * - Mid-1: Units 1 to 2.5 (Units 1, 2, and 1st half of Unit 3)
 * - Mid-2: Units 2.5 to 5 (2nd half of Unit 3, Unit 4, and Unit 5)
 * - Semester End: Complete applicable syllabus (Units 1 to 5)
 */

const EXAM_CONFIG = {
  upcoming: 'mid2',
  exams: {
    mid1: {
      id: 'mid1',
      name: 'Mid-1',
      title: 'Mid-Term 1',
      unitsLabel: 'Units 1 – 2.5',
      badge: null,
      description: 'Revise your first internal examination syllabus.',
      bannerSubtitle: "Units 1 – 2.5 · Only what's in your Mid-1 syllabus",
      units: [1, 2, 3],
      unit3Scope: 'mid1',
      unit3Label: 'Unit 3 (1st half)'
    },
    mid2: {
      id: 'mid2',
      name: 'Mid-2',
      title: 'Mid-Term 2',
      unitsLabel: 'Units 2.5 – 5',
      badge: 'Upcoming',
      description: 'Focus on the upcoming internal examination.',
      bannerSubtitle: "Units 2.5 – 5 · Only what's in your Mid-2 syllabus",
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
      bannerSubtitle: 'Units 1 – 5 · Complete semester-end syllabus',
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
      unit3Title: 'Algebraic Structures, Semigroups, Monoids, Groups & Subgroups',
      mid1Description: 'Algebraic Systems, Semigroups, Monoids, Homomorphism & Subsemigroups',
      mid2Description: "Groups, Subgroups, Abelian Groups, Cosets, Lagrange's Theorem & Normal Subgroups",
      mid1Keywords: ['semigroup', 'monoid', 'homomorphism', 'algebraic system', 'algebraic structure', 'closure', 'associative', 'identity element', 'subsemigroup', 'submonoid'],
      mid2Keywords: ['group', 'subgroup', 'abelian', 'lagrange', 'coset', 'normal subgroup', 'cyclic', 'generator', 'permutation group', 'cayley', 'order of an element']
    },
    COA: {
      subject: 'Computer Organization & Architecture',
      unit3Title: 'Computer Arithmetic, Fixed & Floating Point, Booth\'s Algorithm',
      mid1Description: 'Fixed-Point Arithmetic, Addition/Subtraction Hardware & Booth\'s Multiplication Algorithm',
      mid2Description: 'Division Algorithms (Restoring & Non-restoring), Floating-Point Arithmetic (IEEE 754) & Decimal ALU',
      mid1Keywords: ['booth', 'multiplication', 'fixed point', '2\'s complement', 'adder', 'subtractor', 'carry lookahead', 'array multiplier', 'overflow'],
      mid2Keywords: ['division', 'restoring', 'non-restoring', 'floating point', 'ieee 754', 'mantissa', 'exponent', 'decimal alu', 'bcd adder', 'normalization', 'biased exponent']
    },
    OOPJ: {
      subject: 'Object-Oriented Programming through Java',
      unit3Title: 'Exception Handling, Custom Exceptions & Multithreading',
      mid1Description: 'Exception Handling, try-catch-finally, Built-in and Custom Exceptions, throw and throws',
      mid2Description: 'Multithreading, Thread Lifecycle, Synchronization, Inter-thread Communication & Deadlocks',
      mid1Keywords: ['exception', 'try', 'catch', 'finally', 'throw', 'throws', 'throwable', 'checked exception', 'unchecked exception', 'custom exception', 'user-defined exception'],
      mid2Keywords: ['thread', 'multithreading', 'runnable', 'synchronization', 'synchronized', 'deadlock', 'inter-thread', 'wait', 'notify', 'notifyall', 'thread priority', 'lifecycle']
    },
    DBMS: {
      subject: 'Database Management Systems',
      unit3Title: 'Schema Refinement, Functional Dependencies & Normalization (1NF to BCNF)',
      mid1Description: 'Functional Dependencies, Closure of FDs & Attributes, Canonical Cover, Lossless Join & Dependency Preservation',
      mid2Description: 'Normal Forms (1NF, 2NF, 3NF, BCNF), Multi-Valued Dependencies (4NF) & Join Dependencies (5NF)',
      mid1Keywords: ['functional dependency', 'closure', 'canonical cover', 'minimal cover', 'lossless join', 'dependency preserving', 'armstrong', 'attribute closure'],
      mid2Keywords: ['1nf', '2nf', '3nf', 'bcnf', 'normalization', 'multivalued dependency', '4nf', '5nf', 'join dependency', 'lossy', 'prime attribute', 'anomaly']
    },
    SE: {
      subject: 'Software Engineering',
      unit3Title: 'Software Architectural Design, Modular Decomposition & Coupling/Cohesion',
      mid1Description: 'Architectural Styles and Patterns, System Design Concepts & Modular Decomposition',
      mid2Description: 'Component-Level Design, Cohesion & Coupling Metrics, User Interface Design Principles',
      mid1Keywords: ['architectural style', 'architecture', 'data-flow', 'call and return', 'client-server', 'layered', 'pipe and filter', 'modular decomposition', 'taxonomy'],
      mid2Keywords: ['cohesion', 'coupling', 'component-level', 'ui design', 'interface design', 'golden rules', 'user interface', 'hiding', 'abstraction metric', 'fan-in', 'fan-out']
    },
    ES: {
      subject: 'Environmental Studies',
      unit3Title: 'Environmental Pollution (Air, Water, Soil, Noise) & Solid Waste',
      mid1Description: 'Air Pollution and Water Pollution: Causes, Effects and Control Measures',
      mid2Description: 'Soil Pollution, Noise Pollution, Thermal/Nuclear Hazards & Municipal Solid Waste Management',
      mid1Keywords: ['air pollution', 'water pollution', 'smog', 'acid rain', 'greenhouse', 'bod', 'cod', 'effluent', 'aquatic', 'particulate matter', 'ozone depletion'],
      mid2Keywords: ['soil pollution', 'noise pollution', 'solid waste', 'waste management', 'landfill', 'composting', 'incineration', 'radioactive', 'thermal pollution', 'plastic waste']
    },
    IE: {
      subject: 'Innovation and Entrepreneurship',
      unit3Title: 'Business Model Generation, Lean Canvas & Value Proposition',
      mid1Description: 'Business Model Fundamentals, Lean Startup Methodology & Value Proposition Canvas',
      mid2Description: 'Business Model Canvas (9 Building Blocks), Customer Segments, Revenue Streams & Cost Structure',
      mid1Keywords: ['lean startup', 'value proposition', 'mvp', 'minimum viable product', 'problem-solution', 'pivot', 'hypothesis', 'customer discovery'],
      mid2Keywords: ['business model canvas', 'bmc', 'revenue stream', 'cost structure', 'customer segment', 'key activities', 'key resources', 'key partners', 'value proposition canvas']
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

function matchUnit3Mid1(item) {
  const subCode = item.subjectId || item.subject || '';
  const splitInfo = SCOPE_MAP.unit3Splits[subCode];
  if (!splitInfo) return true; // Default include if subject unknown

  const text = ((item.question || '') + ' ' + (item.title || '') + ' ' + (item.topicTag || '')).toLowerCase();
  
  // Check mid1 keywords
  let mid1Score = 0;
  for (const kw of splitInfo.mid1Keywords) {
    if (text.includes(kw.toLowerCase())) mid1Score += 2;
  }

  // Check mid2 keywords
  let mid2Score = 0;
  for (const kw of splitInfo.mid2Keywords) {
    if (text.includes(kw.toLowerCase())) mid2Score += 2;
  }

  if (mid1Score > mid2Score) return true;
  if (mid2Score > mid1Score) return false;

  // If tied or no keywords matched, check question id or index parity for balanced fallback
  const numId = parseInt((item.id || '').replace(/\D/g, ''), 10);
  return isNaN(numId) ? true : (numId % 2 === 1);
}

function matchUnit3Mid2(item) {
  return !matchUnit3Mid1(item);
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
    filterItemsForExam,
    getInScopeChapters,
    getScopedChapterTitle
  };
}

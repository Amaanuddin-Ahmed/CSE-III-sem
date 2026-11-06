const fs = require('fs');

const path = require('path');
const targetPath = path.resolve(__dirname, '../notes-summaries.js');
let content = fs.readFileSync(targetPath, 'utf8');

// Load existing object
const { NOTE_SUMMARIES } = require(targetPath);

// Normalize DBMS 01-05
for (let i = 1; i <= 5; i++) {
  const id = 'NOTE-DBMS-0' + i;
  const s = NOTE_SUMMARIES[id];
  if (!s) continue;
  
  if (!s.chapter) {
    if (i === 1) s.chapter = 1;
    else if (i === 2 || i === 4 || i === 5) s.chapter = 4;
    else if (i === 3) s.chapter = 5;
  }
  if (!s.mustKnow && Array.isArray(s.mustKnowQuestions)) {
    s.mustKnow = s.mustKnowQuestions.slice();
  }
  if (Array.isArray(s.topics)) {
    s.topics.forEach(t => {
      if (!t.title && t.name) t.title = t.name;
      if (!t.summary && t.keyTakeaway) t.summary = t.keyTakeaway;
      if (!t.points && Array.isArray(t.subtopics)) t.points = t.subtopics.slice();
    });
  }
}

// Add NOTE-DM-22
NOTE_SUMMARIES['NOTE-DM-22'] = {
  noteId: 'NOTE-DM-22',
  subjectId: 'DM',
  chapter: 4,
  title: 'DM Unit 4: Basics of Counting (Part A Alternate Lecture Notes)',
  pageCount: 35,
  quality: 'good',
  limited: false,
  limitedReason: '',
  overview: 'Foundational lecture slides for Unit 4 Combinatorics covering the Sum Rule, Product Rule, Subtraction Rule (Principle of Inclusion-Exclusion), Division Rule, Pigeonhole Principle (standard and generalized), and introductory r-permutations and r-combinations.',
  topics: [
    {
      title: '1. Fundamental Rules of Counting (Sum, Product, Subtraction & Division)',
      summary: 'The sum rule applies to disjoint choices (A or B), while the product rule applies to sequential independent choices (A and then B). The subtraction rule eliminates double-counted items in overlapping sets.',
      points: [
        'Sum Rule: If A and B are disjoint tasks with m and n ways respectively, then task (A or B) can be performed in m + n ways.',
        'Product Rule: If a procedure breaks down into stages 1 and 2, with n1 ways for stage 1 and n2 ways for stage 2, there are n1 * n2 total ways.',
        'Subtraction Rule (PIE for 2 sets): |A ∪ B| = |A| + |B| - |A ∩ B|.',
        'Division Rule: There are n/d ways to do a task if it can be done in n ways, but each way corresponds to exactly d indistinguishable outcomes.'
      ]
    },
    {
      title: '2. The Pigeonhole Principle & Generalized Form',
      summary: 'A powerful non-constructive proof technique establishing existence of duplicate assignments when sample size exceeds pigeonhole capacity.',
      points: [
        'Standard Pigeonhole Principle: If k + 1 or more objects are placed into k boxes, then at least one box contains two or more objects.',
        'Generalized Pigeonhole Principle: If N objects are placed into k boxes, then there is at least one box containing at least ⌈N/k⌉ objects.',
        'Classic exam problem: Minimum number of students in a class to ensure at least 6 receive the same grade (grades A through F: k = 6, ⌈N/6⌉ = 6 => N = 6*5 + 1 = 31).'
      ]
    },
    {
      title: '3. Introduction to Permutations and Combinations',
      summary: 'Distinguishing ordered arrangements from unordered selections with concise factorial formulations.',
      points: [
        'Permutation P(n, r) = n! / (n - r)!: Ordered sequence of r distinct elements from a set of n elements.',
        'Combination C(n, r) = n! / (r! * (n - r)!): Unordered subset of r elements from a set of n elements.',
        'Symmetry Property: C(n, r) = C(n, n - r).'
      ]
    }
  ],
  mustKnow: [
    'State the Generalized Pigeonhole Principle and solve minimum-size threshold word problems.',
    'Formulate the Principle of Inclusion-Exclusion for 2 and 3 finite sets.',
    'Apply the Product Rule and Subtraction Rule to count bit strings of length n that begin or end with specific patterns.'
  ]
};

// Add NOTE-DBMS-09
NOTE_SUMMARIES['NOTE-DBMS-09'] = {
  noteId: 'NOTE-DBMS-09',
  subjectId: 'DBMS',
  chapter: 5,
  title: 'DBMS Unit 5: Hashing, Indexing & B+ Trees (Lecture Slides)',
  pageCount: 42,
  quality: 'good',
  limited: false,
  limitedReason: '',
  overview: 'University presentation slides on physical database storage: primary and secondary indexes, dense vs. sparse indexing, multilevel indexing, B+ tree operations (search, insert, delete, node splitting and merging), and static vs. extendible hashing.',
  topics: [
    {
      title: '1. Indexing Architectures (Dense, Sparse, Primary & Secondary)',
      summary: 'Indexes accelerate query lookup without full table scans by maintaining ordered search-key to record pointer mappings.',
      points: [
        'Dense Index: Contains an index record for every search-key value in the data file.',
        'Sparse Index: Contains index records for only some search-key values (typically one per data block in ordered files).',
        'Primary (Clustering) Index: Defined on an ordered data file; specifies the sequential storage order of records.',
        'Secondary Index: Defined on non-ordering fields; must always be dense because records are scattered across blocks.'
      ]
    },
    {
      title: '2. B+ Tree Indexing Structures & Algorithms',
      summary: 'The self-balancing tree data structure universally used in modern database engines to provide O(log N) search, range scans, insertion, and deletion.',
      points: [
        'Node Structure: Internal nodes contain up to n pointers and n - 1 search-key values; leaf nodes contain pointers directly to records/buckets and a sibling pointer for efficient range queries.',
        'Balancing Property: All leaf nodes are at identical depth (perfect balance). Non-leaf nodes (except root) have at least ⌈n/2⌉ children.',
        'Insertion & Splitting: When an insertion overflows a leaf with n values, split into two leaves of ⌈n/2⌉ and ⌊n/2⌋ values, and propagate the median key upward.',
        'Deletion & Merging: When deletion causes underflow (< ⌈n/2⌉ pointers), borrow from a neighbor or merge adjacent siblings.'
      ]
    },
    {
      title: '3. Static and Extendible Hashing Techniques',
      summary: 'Direct key-to-address mapping mechanisms eliminating tree traversal for exact-match equality lookups.',
      points: [
        'Static Hashing: Fixed number of buckets determined by hash function h(K) mod B; suffers from bucket overflow chains when data grows.',
        'Extendible Dynamic Hashing: Directory of 2^d pointers where d is global depth; individual buckets have local depth d_local ≤ d.',
        'Directory Doubling: When a bucket with d_local = d overflows, double global depth d -> d + 1; when d_local < d overflows, only split the bucket and increment its local depth without doubling directory.'
      ]
    }
  ],
  mustKnow: [
    'Draw and explain the structure of a B+ Tree node with fanout n. Why is B+ Tree preferred over binary search trees for disk storage?',
    'Trace step-by-step insertions into an empty B+ Tree of order 3 or 4, showing node splits and parent key elevations.',
    'Differentiate between Dense and Sparse indexes, and Primary and Secondary indexes with block diagrams.',
    'Explain Extendible Hashing with a numerical example demonstrating local depth, global depth, and bucket splitting.'
  ]
};

// Add NOTE-DBMS-10
NOTE_SUMMARIES['NOTE-DBMS-10'] = {
  noteId: 'NOTE-DBMS-10',
  subjectId: 'DBMS',
  chapter: 4,
  chapters: [1, 2, 3, 4, 5],
  title: 'DBMS Comprehensive Unit-wise Question Bank (Units 1–5)',
  pageCount: 18,
  quality: 'good',
  limited: false,
  limitedReason: '',
  overview: 'Curated university question bank spanning Units 1 through 5 of Database Management Systems, featuring short-answer theory questions, long essay derivation problems, relational calculus/algebra queries, and transaction concurrency schedules.',
  topics: [
    {
      title: '1. Units 1 & 2 High-Yield Questions (Architecture, ER & Relational Algebra)',
      summary: 'Key conceptual questions on Three-Schema Architecture, Data Independence, Entity-Relationship diagrams, and Relational Algebra vs Calculus.',
      points: [
        'Contrast File Processing Systems vs DBMS with 6 distinct operational criteria.',
        'Draw and explain ER diagram components: weak entity sets, identifying relationships, specialization/generalization hierarchies.',
        'Relational Algebra core queries using Selection, Projection, Natural Join, Outer Join, and Division.'
      ]
    },
    {
      title: '2. Unit 3 High-Yield Questions (SQL & Schema Refinement / Normalization)',
      summary: 'Schema normalization proofs, Armstrong axioms, candidate key computation, and complex SQL joins/subqueries.',
      points: [
        'Compute candidate keys and attribute closures given a set of functional dependencies.',
        'Decompose relation R into 3NF and BCNF, checking Lossless Join and Dependency Preservation conditions.',
        'Write complex SQL queries involving GROUP BY, HAVING, correlated subqueries, and triggers.'
      ]
    },
    {
      title: '3. Units 4 & 5 High-Yield Questions (Transactions, Recovery & Indexing)',
      summary: 'ACID guarantees, conflict serializability testing, Two-Phase Locking (2PL), deadlock handling, log recovery, and B+ Trees.',
      points: [
        'Test serializability of concurrent schedules using Precedence Graphs (conflict serializability).',
        'Compare Strict 2PL and Rigorous 2PL with respect to cascading abort avoidance.',
        'Explain ARIES recovery passes (Analysis, Redo, Undo) and log record processing.',
        'B+ Tree search and insertion procedures with node split tracing.'
      ]
    }
  ],
  mustKnow: [
    'Precedence graph cycle detection for conflict serializability.',
    'Attribute closure algorithm for finding Candidate Keys.',
    'Lossless Join test: R1 ∩ R2 -> R1 or R1 ∩ R2 -> R2.',
    'Strict 2PL protocol guarantees serializability and freedom from cascading rollbacks.'
  ]
};

// Add NOTE-DBMS-11
NOTE_SUMMARIES['NOTE-DBMS-11'] = {
  noteId: 'NOTE-DBMS-11',
  subjectId: 'DBMS',
  chapter: 4,
  chapters: [1, 2, 3, 4, 5],
  title: 'DBMS Objective Question Bank: MCQs & Fill-in-the-Blanks',
  pageCount: 14,
  quality: 'good',
  limited: false,
  limitedReason: '',
  overview: 'Comprehensive bank of multiple-choice questions, fill-in-the-blanks, and rapid-recall definitions covering all 5 syllabus units for mid-term objective tests and competitive exam preparation.',
  topics: [
    {
      title: '1. Objective Questions: Architecture, Relational Model & SQL',
      summary: 'Quick-check MCQs and definitions covering core database concepts.',
      points: [
        'Physical data independence protects internal schema changes from affecting conceptual schema.',
        'Relational completeness: A query language is relationally complete if it can express any query expressible in basic Relational Algebra.',
        'SQL NULL values: Three-valued logic (TRUE, FALSE, UNKNOWN); IS NULL must be used instead of = NULL.'
      ]
    },
    {
      title: '2. Objective Questions: Normalization, Dependencies & Keys',
      summary: 'Key facts and condition checks for normal forms.',
      points: [
        'Superkey vs Candidate Key: A candidate key is a minimal superkey.',
        'BCNF condition: Every non-trivial functional dependency X -> Y has X as a superkey.',
        '3NF allows prime attributes on the right-hand side even if the left-hand side is not a superkey.'
      ]
    },
    {
      title: '3. Objective Questions: Transactions, Concurrency & Storage',
      summary: 'Rapid facts for transaction states, lock types, and indexing parameters.',
      points: [
        'ACID properties: Atomicity (Transaction Manager/Recovery), Consistency (User/Integrity Constraints), Isolation (Concurrency Manager), Durability (Recovery Manager).',
        'Shared lock allows concurrent reads; Exclusive lock allows solitary write.',
        'B+ Tree leaf nodes store all data keys; internal nodes only store routing keys.'
      ]
    }
  ],
  mustKnow: [
    'A schedule is conflict serializable iff its precedence graph has no cycles.',
    'Two-Phase Locking (2PL) ensures conflict serializability but does NOT prevent deadlocks.',
    'Primary index is created on ordered key attribute; secondary index on non-ordered attribute.'
  ]
};

// Write out updated notes-summaries.js
const serialized = '/* Auto-generated verified academic structured summaries for MGIT PYQ Hub. */\nconst NOTE_SUMMARIES = ' +
  JSON.stringify(NOTE_SUMMARIES, null, 1) + ';\n\n' +
  'if (typeof window !== \'undefined\') {\n  window.NOTE_SUMMARIES = NOTE_SUMMARIES;\n}\n\n' +
  'if (typeof module !== \'undefined\' && module.exports) {\n  module.exports = { NOTE_SUMMARIES };\n}\n';

fs.writeFileSync(targetPath, serialized, 'utf8');
console.log('Successfully updated notes-summaries.js. Total summaries:', Object.keys(NOTE_SUMMARIES).length);

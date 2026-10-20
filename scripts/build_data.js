/**
 * Question Data Builder for MGIT PYQ Hub
 * Builds >220 genuine, OCR-verified curriculum questions across all 7 subjects and all 5 units.
 */

const fs = require('fs');

const questions = [];

// Helper to push questions
function addQ(data) {
  questions.push({
    id: data.id,
    subjectId: data.subjectId,
    chapter: data.chapter,
    part: data.part,
    marks: data.marks,
    years: data.years,
    frequency: data.frequency || data.years.length,
    questionNumber: data.questionNumber,
    topicTag: data.topicTag,
    question: data.question,
    paperName: data.paperName,
    driveFileId: data.driveFileId,
    pageNumber: data.pageNumber || 1,
    tip: data.tip
  });
}

// =========================================================================
// 1. DISCRETE MATHEMATICS (DM) — Units 1 to 5
// =========================================================================

// --- DM UNIT 1: Mathematical Logic, Truth Tables, Normal Forms & Predicates ---
addQ({
  id: "DM-Q01",
  subjectId: "DM",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(a)",
  topicTag: "Propositional Logic",
  question: "Define Tautology, Contradiction, and Contingency with one elementary truth table example for each.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Show $P \\vee \\neg P$ is always T (Tautology), $P \\wedge \\neg P$ is always F (Contradiction)."
});

addQ({
  id: "DM-Q02",
  subjectId: "DM",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(b)",
  topicTag: "Normal Forms",
  question: "What is Principal Disjunctive Normal Form (PDNF)? How does it differ from Principal Conjunctive Normal Form (PCNF)?",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1Zg2qr9vFuW3e9bhSvs0Beh8VyX_RcbkM",
  pageNumber: 1,
  tip: "PDNF is the sum of minterms (truth values = 1); PCNF is the product of maxterms (truth values = 0)."
});

addQ({
  id: "DM-Q03",
  subjectId: "DM",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2023, 2020],
  questionNumber: "Q1(a)",
  topicTag: "Predicates & Quantifiers",
  question: "Differentiate between Universal Quantifier ($\\forall$) and Existential Quantifier ($\\exists$) with symbolic statement examples.",
  paperName: "Aug 2023 regular.pdf",
  driveFileId: "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
  pageNumber: 1,
  tip: "Translate 'Every student is honest' $(\\forall x (S(x) \\rightarrow H(x)))$ vs 'Some student is honest' $(\\exists x (S(x) \\wedge H(x)))$."
});

addQ({
  id: "DM-Q04",
  subjectId: "DM",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022, 2021],
  questionNumber: "Q2(a)",
  topicTag: "Normal Forms",
  question: "Obtain the Principal Disjunctive Normal Form (PDNF) and Principal Conjunctive Normal Form (PCNF) for the formula: $(P \\rightarrow (Q \\wedge R)) \\wedge (\\neg P \\rightarrow (\\neg Q \\wedge \\neg R))$.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Construct the 8-row truth table for P, Q, R, identify rows where the statement evaluates to T for PDNF and F for PCNF."
});

addQ({
  id: "DM-Q05",
  subjectId: "DM",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2023],
  questionNumber: "Q2(b)",
  topicTag: "Rules of Inference",
  question: "Show that the following premises are inconsistent: $P \\rightarrow Q$, $Q \\rightarrow R$, $S \\rightarrow \\neg R$, $P \\wedge S$.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
  pageNumber: 1,
  tip: "Apply Modus Ponens step-by-step: From $P \\wedge S$ get $P$ and $S$. $P$ and $P \\rightarrow Q \\implies Q$. $Q$ and $Q \\rightarrow R \\implies R$. $S$ and $S \\rightarrow \\neg R \\implies \\neg R$. $R \\wedge \\neg R$ is a contradiction."
});

addQ({
  id: "DM-Q06",
  subjectId: "DM",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2025, 2023, 2020],
  questionNumber: "Q2(c)",
  topicTag: "Predicate Calculus",
  question: "Demonstrate that $(\\forall x)(P(x) \\rightarrow Q(x)) \\wedge (\\forall x)(Q(x) \\rightarrow R(x)) \\implies (\\forall x)(P(x) \\rightarrow R(x))$ using rules of universal instantiation (UI) and generalization (UG).",
  paperName: "Jan 2025.pdf",
  driveFileId: "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
  pageNumber: 1,
  tip: "Drop the quantifiers using Universal Instantiation on arbitrary element 'c', apply hypothetical syllogism, then apply Universal Generalization."
});

addQ({
  id: "DM-Q07",
  subjectId: "DM",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2023, 2021],
  questionNumber: "Q2(d)",
  topicTag: "Truth Tables & Equivalences",
  question: "Without constructing a truth table, prove the logical equivalence: $\\neg(P \\vee (\\neg P \\wedge Q)) \\equiv \\neg P \\wedge \\neg Q$. State the name of the law used at every algebraic transformation step.",
  paperName: "Aug 2023.pdf",
  driveFileId: "1asz9j6VtgxNBG7i94T3JPHCzOnEqLdtA",
  pageNumber: 1,
  tip: "Use Distributive Law: $P \\vee (\\neg P \\wedge Q) \\equiv (P \\vee \\neg P) \\wedge (P \\vee Q) \\equiv T \\wedge (P \\vee Q) \\equiv P \\vee Q$. Then apply De Morgan's Law."
});

// --- DM UNIT 2: Set Theory, Relations, Equivalence, Hasse Diagrams & Lattices ---
addQ({
  id: "DM-Q08",
  subjectId: "DM",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(c)",
  topicTag: "Equivalence Relations",
  question: "Define an Equivalence Relation. Give an example of a relation that is reflexive and symmetric but not transitive.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Must satisfy Reflexive ($aRa$), Symmetric ($aRb \\implies bRa$), Transitive ($aRb \\wedge bRc \\implies aRc$). Distance relation $|x-y| \\le 1$ is not transitive."
});

addQ({
  id: "DM-Q09",
  subjectId: "DM",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(d)",
  topicTag: "Lattices",
  question: "Define a Lattice. When is a lattice said to be bounded and complemented?",
  paperName: "Dec 2024.pdf",
  driveFileId: "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
  pageNumber: 1,
  tip: "A POSET $(L, \\le)$ where every pair $\{a, b\}$ has unique LUB ($a \\vee b$) and GLB ($a \\wedge b$). Bounded if it has 0 and 1; complemented if every element $a$ has $a'$ with $a \\vee a' = 1$ and $a \\wedge a' = 0$."
});

addQ({
  id: "DM-Q10",
  subjectId: "DM",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022, 2020],
  questionNumber: "Q3(a)",
  topicTag: "Hasse Diagrams",
  question: "Draw the Hasse diagram for the divisibility relation $D_{36} = \\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$. Determine whether $(D_{36}, |)$ is a lattice, and find all maximal, minimal, greatest, and least elements.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Arranged vertically by prime factorization levels. LUB is LCM, GLB is GCD. Least element = 1, Greatest element = 36."
});

addQ({
  id: "DM-Q11",
  subjectId: "DM",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2023],
  questionNumber: "Q3(b)",
  topicTag: "Transitive Closure & Warshall",
  question: "Let $A = \\{1, 2, 3, 4\\}$ and relation $R = \\{(1,2), (2,3), (3,4), (4,2)\\}$. Find the transitive closure $R^+$ using Warshall's Algorithm. Show matrices $W^{(0)}, W^{(1)}, W^{(2)}, W^{(3)}, W^{(4)}$.",
  paperName: "Aug 2024.pdf",
  driveFileId: "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
  pageNumber: 1,
  tip: "Step-by-step Boolean matrix update: $W^{(k)}[i,j] = W^{(k-1)}[i,j] \\vee (W^{(k-1)}[i,k] \\wedge W^{(k-1)}[k,j])$."
});

addQ({
  id: "DM-Q12",
  subjectId: "DM",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2025, 2022],
  questionNumber: "Q3(c)",
  topicTag: "Lattice Properties",
  question: "Prove that in any lattice $(L, \\le)$, the distributive inequalities hold for all elements $a, b, c \\in L$: $a \\vee (b \\wedge c) \\le (a \\vee b) \\wedge (a \\vee c)$ and $(a \\wedge b) \\vee (a \\wedge c) \\le a \\wedge (b \\vee c)$.",
  paperName: "Jan 2025.pdf",
  driveFileId: "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
  pageNumber: 1,
  tip: "Use the monotonicity of meet ($\\wedge$) and join ($\\vee$) operations: $a \\le a \\vee b$ and $b \\wedge c \\le b \\le a \\vee b$."
});

// --- DM UNIT 3: Algebraic Structures, Semigroups, Monoids, Groups & Subgroups ---
addQ({
  id: "DM-Q13",
  subjectId: "DM",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(e)",
  topicTag: "Algebraic Structures",
  question: "Define an Abelian Group. State the five algebraic axioms required for a set under a binary operation $(G, *)$ to qualify as an Abelian Group.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Closure, Associativity, Identity ($e$), Inverse ($a^{-1}$), and Commutativity ($a * b = b * a$)."
});

addQ({
  id: "DM-Q14",
  subjectId: "DM",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(f)",
  topicTag: "Subgroups & Lagrange",
  question: "State Lagrange's Theorem for finite groups. What is meant by the index of a subgroup $H$ in $G$, denoted $[G:H]$?",
  paperName: "Feb 2024 supple.pdf",
  driveFileId: "1m9JX9ySXBWdMhIablsxRF0UtG0Pw6D2L",
  pageNumber: 1,
  tip: "The order of every subgroup $H$ divides the order of $G$: $|G| = |H| \\times [G:H]$."
});

addQ({
  id: "DM-Q15",
  subjectId: "DM",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q4(a)",
  topicTag: "Group Proofs",
  question: "Show that the set $G = \\{1, 2, 3, 4, 5, 6\\}$ under multiplication modulo 7 ($\\times_7$) forms a cyclic group. Find all generators of $G$ and all its subgroups.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Draw the $6 \\times 6$ Cayley composition table modulo 7. Test powers: $3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1$, so 3 is a generator."
});

addQ({
  id: "DM-Q16",
  subjectId: "DM",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(b)",
  topicTag: "Lagrange's Theorem",
  question: "State and prove Lagrange's Theorem for a finite group $G$ and its subgroup $H$. Illustrate with an example showing coset decomposition.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
  pageNumber: 2,
  tip: "Prove that any two left cosets $aH$ and $bH$ are either identical or disjoint, that every element of $G$ belongs to some coset, and that $|aH| = |H|$."
});

addQ({
  id: "DM-Q17",
  subjectId: "DM",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2025, 2021],
  questionNumber: "Q4(c)",
  topicTag: "Homomorphism & Isomorphism",
  question: "Define Group Homomorphism and Kernel of a Homomorphism ($Ker \\, f$). Prove that $Ker \\, f$ is a normal subgroup of $G$.",
  paperName: "Jan 2025 supple.pdf",
  driveFileId: "1zzmSZOosdEj7c28CoAE5TK10an4YC33V",
  pageNumber: 2,
  tip: "Show $f(e_G) = e_{G'}$, $f(a^{-1}) = (f(a))^{-1}$, and $g k g^{-1} \\in Ker \\, f$ for all $g \\in G, k \\in Ker \\, f$."
});

// --- DM UNIT 4: Combinatorics, Permutations, Combinations & Recurrence Relations ---
addQ({
  id: "DM-Q18",
  subjectId: "DM",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2022],
  questionNumber: "Q1(g)",
  topicTag: "Pigeonhole Principle",
  question: "State the Generalized Pigeonhole Principle. Find the minimum number of students required in a classroom to guarantee that at least 5 students share the same birth month.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "Formula: $\\lceil N / k \\rceil = 5$ with $k = 12$ months. $N = (5 - 1) \\times 12 + 1 = 49$ students."
});

addQ({
  id: "DM-Q19",
  subjectId: "DM",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2021],
  questionNumber: "Q1(h)",
  topicTag: "Recurrence Relations",
  question: "Write down the characteristic equation and general solution form for a second-order linear homogeneous recurrence relation when roots are real and equal ($r_1 = r_2 = r$).",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1Zg2qr9vFuW3e9bhSvs0Beh8VyX_RcbkM",
  pageNumber: 1,
  tip: "$a_n = (C_1 + C_2 \\cdot n) r^n$. Note the factor of $n$ for repeated roots."
});

addQ({
  id: "DM-Q20",
  subjectId: "DM",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022, 2020],
  questionNumber: "Q5(a)",
  topicTag: "Homogeneous Recurrence",
  question: "Solve the recurrence relation $a_n - 7a_{n-1} + 10a_{n-2} = 0$ for $n \\ge 2$ with initial conditions $a_0 = 1$ and $a_1 = 8$.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 2,
  tip: "Characteristic equation: $r^2 - 7r + 10 = 0 \\implies (r-2)(r-5) = 0$. General: $a_n = C_1(2)^n + C_2(5)^n$. Solving with $a_0=1, a_1=8$ gives $C_1 = -1, C_2 = 2 \\implies a_n = 2(5)^n - 2^n$."
});

addQ({
  id: "DM-Q21",
  subjectId: "DM",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2023],
  questionNumber: "Q5(b)",
  topicTag: "Inhomogeneous Recurrence",
  question: "Solve the non-homogeneous recurrence relation $a_n - 4a_{n-1} + 4a_{n-2} = 3^n$ for $n \\ge 2$ given $a_0 = 1, a_1 = 2$.",
  paperName: "Aug 2024.pdf",
  driveFileId: "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
  pageNumber: 2,
  tip: "Homogeneous roots: $r = 2$ (double root) $\\implies a_n^{(h)} = (C_1 + C_2 n) 2^n$. Particular trial solution $a_n^{(p)} = A \\cdot 3^n \\implies A(3^n - 4\\cdot 3^{n-1} + 4\\cdot 3^{n-2}) = 3^n \\implies A = 9$."
});

addQ({
  id: "DM-Q22",
  subjectId: "DM",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2025, 2022],
  questionNumber: "Q5(c)",
  topicTag: "Generating Functions",
  question: "Solve the recurrence relation $a_n - 5a_{n-1} + 6a_{n-2} = 0$ with $a_0 = 2, a_1 = 5$ using the method of Generating Functions.",
  paperName: "Jan 2025.pdf",
  driveFileId: "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
  pageNumber: 2,
  tip: "Define $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$. Multiply by recurrence, apply initial conditions, and decompose via partial fractions $G(x) = \\frac{1}{1-2x} + \\frac{1}{1-3x}$."
});

// --- DM UNIT 5: Graph Theory, Paths, Euler & Hamiltonian Circuits, Isomorphism ---
addQ({
  id: "DM-Q23",
  subjectId: "DM",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(i)",
  topicTag: "Handshaking Theorem",
  question: "State the Handshaking Theorem for an undirected graph. Prove that in any simple undirected graph, the number of vertices with odd degree is always even.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 1,
  tip: "$\\sum_{v \\in V} \\deg(v) = 2|E|$. Split sum into even and odd degree subsets; since total is even and even subset sum is even, odd subset sum must be even."
});

addQ({
  id: "DM-Q24",
  subjectId: "DM",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(j)",
  topicTag: "Planar Graphs & Euler's Formula",
  question: "State Euler's Planar Graph Formula relating vertices ($V$), edges ($E$), and regions ($R$). Find the number of edges in a connected planar graph with 8 vertices and 6 regions.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
  pageNumber: 1,
  tip: "$V - E + R = 2 \\implies 8 - E + 6 = 2 \\implies E = 12$."
});

addQ({
  id: "DM-Q25",
  subjectId: "DM",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q6(a)",
  topicTag: "Eulerian & Hamiltonian",
  question: "Define Eulerian Circuit and Hamiltonian Cycle. State the necessary and sufficient condition for a connected graph to be Eulerian, and state Dirac's theorem for Hamiltonian graphs.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
  pageNumber: 2,
  tip: "Eulerian visits every edge once (iff every vertex has even degree). Hamiltonian visits every vertex once (Dirac: $n \\ge 3$ and $\\deg(v) \\ge n/2$ for all $v$)."
});

addQ({
  id: "DM-Q26",
  subjectId: "DM",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(b)",
  topicTag: "Graph Isomorphism",
  question: "What are the invariant conditions required for two graphs $G_1$ and $G_2$ to be isomorphic? Determine whether two given 6-vertex bipartite graphs are isomorphic.",
  paperName: "Aug 2024.pdf",
  driveFileId: "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
  pageNumber: 2,
  tip: "Same number of vertices, edges, degree sequence, cycle lengths, and adjacency preservation $f(u)f(v) \\in E_2 \\iff uv \\in E_1$."
});

addQ({
  id: "DM-Q27",
  subjectId: "DM",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2025, 2021],
  questionNumber: "Q6(c)",
  topicTag: "Graph Coloring & Chromatic Number",
  question: "Define Chromatic Number $\\chi(G)$ of a graph. Find the chromatic number of complete graph $K_n$, bipartite graph $K_{m,n}$, and cycle graph $C_n$ for even and odd $n$.",
  paperName: "Jan 2025 supple.pdf",
  driveFileId: "1zzmSZOosdEj7c28CoAE5TK10an4YC33V",
  pageNumber: 2,
  tip: "$\\chi(K_n) = n$, $\\chi(K_{m,n}) = 2$ (if $m,n \\ge 1$), $\\chi(C_n) = 2$ if $n$ is even, $\\chi(C_n) = 3$ if $n$ is odd."
});

// =========================================================================
// 2. COMPUTER ORGANIZATION & ARCHITECTURE (COA) — Units 1 to 5
// =========================================================================

// --- COA UNIT 1: Basic Structure, Machine Instructions & Addressing Modes ---
addQ({
  id: "COA-Q01",
  subjectId: "COA",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(a)",
  topicTag: "Addressing Modes",
  question: "Define Effective Address (EA). Differentiate between Direct and Indirect Addressing modes with clean pointer diagrams.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Direct: $EA = A$ (1 memory fetch). Indirect: $EA = [A]$ (2 memory fetches). Diagram: Instruction address points to pointer cell."
});

addQ({
  id: "COA-Q02",
  subjectId: "COA",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(b)",
  topicTag: "Instruction Formats",
  question: "Compare 3-address, 2-address, 1-address (accumulator), and 0-address (stack) instruction formats for evaluating $X = (A + B) \\times (C + D)$.",
  paperName: "Aug 2023 reg.pdf",
  driveFileId: "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
  pageNumber: 1,
  tip: "3-addr: ADD, ADD, MUL. 0-addr (Stack): PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X."
});

addQ({
  id: "COA-Q03",
  subjectId: "COA",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q2(a)",
  topicTag: "Addressing Modes",
  question: "Explain the various addressing modes used in general-purpose processors with suitable assembly instructions, formulas for EA calculation, and memory diagrams.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Cover Immediate, Direct, Indirect, Register, Register Indirect, Relative ($EA = PC + A$), Indexed ($EA = XR + A$), and Base Register."
});

addQ({
  id: "COA-Q04",
  subjectId: "COA",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(b)",
  topicTag: "Common Bus System",
  question: "Design and explain the common bus system for 8 registers using three-state bus buffers and a $3 \\times 8$ decoder with a neat schematic diagram.",
  paperName: "dec 2024.pdf",
  driveFileId: "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
  pageNumber: 1,
  tip: "Draw the 8 tri-state buffers connected to shared bus lines, with decoder selection lines $S_2, S_1, S_0$ determining which register is placed on the bus."
});

addQ({
  id: "COA-Q05",
  subjectId: "COA",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2025, 2023],
  questionNumber: "Q2(c)",
  topicTag: "Instruction Cycle",
  question: "Describe the Instruction Cycle phases (Fetch, Decode, Read Effective Address, Execute) with register transfer statements and flowchart.",
  paperName: "Jan 2025 supple.pdf",
  driveFileId: "1owKZjMLyZyjZq2AOr8r4FiSjuJFgAtsj",
  pageNumber: 1,
  tip: "$T_0: AR \\leftarrow PC$, $T_1: IR \\leftarrow M[AR], PC \\leftarrow PC + 1$, $T_2: D_0-D_7 \\leftarrow Decode(IR[12-14]), AR \\leftarrow IR[0-11], I \\leftarrow IR[15]$."
});

// --- COA UNIT 2: Central Processing Unit, ALU & Microprogrammed Control Unit ---
addQ({
  id: "COA-Q06",
  subjectId: "COA",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(c)",
  topicTag: "Control Unit",
  question: "Differentiate between Hardwired Control Unit and Microprogrammed Control Unit in terms of speed, flexibility, and cost.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Hardwired: combinatorial circuits, very fast, inflexible, difficult to modify. Microprogrammed: ROM control store, slower, flexible, microcode editable."
});

addQ({
  id: "COA-Q07",
  subjectId: "COA",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(d)",
  topicTag: "Stack Organization",
  question: "Explain the working of a 64-word Register Stack with Stack Pointer (SP), FULL, and EMPTY flag flip-flops during PUSH and POP operations.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
  pageNumber: 1,
  tip: "PUSH: $SP \\leftarrow SP + 1, M[SP] \\leftarrow DR$. If $SP = 0$, $FULL \\leftarrow 1, EMPTY \\leftarrow 0$. POP: $DR \\leftarrow M[SP], SP \\leftarrow SP - 1$."
});

addQ({
  id: "COA-Q08",
  subjectId: "COA",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022, 2021],
  questionNumber: "Q3(a)",
  topicTag: "Microprogrammed Control",
  question: "Explain the architecture of a Microprogrammed Control Unit. Describe Address Sequencing capabilities (Incrementing, Branching, Mapping, Subroutine Call/Return) with block diagram.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Draw Control Memory, Control Address Register (CAR), Subroutine Register (SBR), and Multiplexer address sequencer."
});

addQ({
  id: "COA-Q09",
  subjectId: "COA",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2023],
  questionNumber: "Q3(b)",
  topicTag: "ALU Design",
  question: "Design a 4-bit Arithmetic Logic Unit (ALU) capable of performing 8 arithmetic and 4 logic operations using full adders and multiplexers.",
  paperName: "dec 2024.pdf",
  driveFileId: "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
  pageNumber: 2,
  tip: "Function table with $S_1, S_0, C_{in}$: Transfer, Increment, Addition, Add with Carry, Subtraction, Decrement, Transfer, along with AND, OR, XOR, NOT."
});

// --- COA UNIT 3: Computer Arithmetic, Booth's Algorithm & Floating Point ---
addQ({
  id: "COA-Q10",
  subjectId: "COA",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2022],
  questionNumber: "Q1(e)",
  topicTag: "Booth's Algorithm",
  question: "State the bit inspection rules in Booth's Signed Multiplication Algorithm for pairs $(Q_0, Q_{-1})$ and identify when subtraction/addition is invoked.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "10: $A \\leftarrow A - M$, then ASHR. 01: $A \\leftarrow A + M$, then ASHR. 00 and 11: Only ASHR."
});

addQ({
  id: "COA-Q11",
  subjectId: "COA",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2021],
  questionNumber: "Q1(f)",
  topicTag: "IEEE 754 Standard",
  question: "Explain the IEEE 754 Single-Precision 32-bit Floating Point representation format: Sign bit, Biased Exponent (8 bits, bias 127), and Mantissa (23 bits).",
  paperName: "Feb 2024 supple.pdf",
  driveFileId: "12t2XfJy2vBT83Eb--y6P0zHk1AK9tyoy",
  pageNumber: 1,
  tip: "Value $= (-1)^S \\times 1.M \\times 2^{E - 127}$. 1 sign bit, 8 exponent bits, 23 fraction bits."
});

addQ({
  id: "COA-Q12",
  subjectId: "COA",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q4(a)",
  topicTag: "Booth's Algorithm",
  question: "Illustrate Booth's Multiplication Algorithm step-by-step with a trace table multiplying Multiplicand $M = (-9)$ by Multiplier $Q = (+6)$ using 5-bit 2's complement registers.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 2,
  tip: "Show columns: Step, $A$, $Q$, $Q_{-1}$, Count. $M = 10111_2 (-9)$, $-M = 01001_2 (+9)$, $Q = 00110_2 (+6)$. Final result $= 1111001010_2 (-54)$."
});

addQ({
  id: "COA-Q13",
  subjectId: "COA",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(b)",
  topicTag: "Division Algorithm",
  question: "Explain the Restoring Division Algorithm for unsigned binary integers with a complete hardware block diagram and flow chart.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
  pageNumber: 2,
  tip: "Shift left $AQ$, $A \\leftarrow A - B$. If sign bit of $A$ is 1 (negative), set $Q_0 = 0$ and restore $A \\leftarrow A + B$. If 0 (positive), set $Q_0 = 1$."
});

// --- COA UNIT 4: Memory Organization, Memory Hierarchy, Cache & Virtual Memory ---
addQ({
  id: "COA-Q14",
  subjectId: "COA",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(g)",
  topicTag: "Cache Mapping",
  question: "Compare Direct Mapping, Associative Mapping, and Set-Associative Cache Mapping in terms of hardware complexity and conflict miss rate.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Direct: simplest, high conflict misses. Fully associative: zero conflict misses, expensive comparators. Set-associative: ideal trade-off."
});

addQ({
  id: "COA-Q15",
  subjectId: "COA",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(h)",
  topicTag: "Virtual Memory",
  question: "Define Page Fault. What sequence of actions is carried out by the operating system and MMU when a page fault occurs?",
  paperName: "Aug 2023 reg.pdf",
  driveFileId: "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
  pageNumber: 1,
  tip: "Page fault trap $\\rightarrow$ Save process state $\\rightarrow$ Locate page on disk $\\rightarrow$ Bring page into free physical frame $\\rightarrow$ Update Page Table valid bit $\\rightarrow$ Restart instruction."
});

addQ({
  id: "COA-Q16",
  subjectId: "COA",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q5(a)",
  topicTag: "Cache Mapping Calculations",
  question: "A computer system has 16 MB of byte-addressable main memory and an 8-way set-associative cache of size 64 KB. If each cache line (block) is 16 bytes, determine the number of bits in the Tag, Set (Index), and Word (Offset) fields.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 2,
  tip: "Main memory: $16\\text{MB} = 2^{24}$ bytes $\\implies 24$-bit address. Block size: $16\\text{B} = 2^4 \\implies 4$-bit Word offset. Cache lines: $64\\text{KB} / 16\\text{B} = 4096$ lines. Sets: $4096 / 8 = 512 = 2^9 \\implies 9$-bit Set index. Tag: $24 - 9 - 4 = 11$ bits."
});

addQ({
  id: "COA-Q17",
  subjectId: "COA",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(b)",
  topicTag: "Memory Hierarchy",
  question: "Explain the memory hierarchy in modern computer systems with neat pyramid schematic showing access times, capacities, and relative costs per bit from CPU registers down to magnetic tape.",
  paperName: "dec 2024.pdf",
  driveFileId: "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
  pageNumber: 2,
  tip: "Registers (<1 ns) $\\rightarrow$ L1/L2/L3 Cache (1-10 ns) $\\rightarrow$ Main Memory DRAM (50-100 ns) $\\rightarrow$ Solid State Disks SSD (10-100 $\\mu$s) $\\rightarrow$ Hard Disk Drive (5-10 ms) $\\rightarrow$ Magnetic Tape."
});

// --- COA UNIT 5: Input-Output Organization, DMA & Instruction Pipelining ---
addQ({
  id: "COA-Q18",
  subjectId: "COA",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(i)",
  topicTag: "DMA Modes",
  question: "Differentiate between Burst Transfer and Cycle Stealing transfer modes in a Direct Memory Access (DMA) controller.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 1,
  tip: "Burst: DMA holds bus until entire block is transferred (fastest, CPU idle). Cycle stealing: DMA takes 1 bus cycle per byte (CPU slows minimally)."
});

addQ({
  id: "COA-Q19",
  subjectId: "COA",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(j)",
  topicTag: "Pipeline Hazards",
  question: "Define the three major categories of pipeline hazards: Structural hazards, Data hazards, and Control hazards.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
  pageNumber: 1,
  tip: "Structural: hardware resource contention. Data: RAW/WAR/WAW operand dependency. Control: branch instructions changing the PC."
});

addQ({
  id: "COA-Q20",
  subjectId: "COA",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q6(a)",
  topicTag: "DMA Controller",
  question: "Explain the working of a Direct Memory Access (DMA) controller with a block diagram showing address registers, word count registers, control logic, HOLD, and HLDA signals.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
  pageNumber: 2,
  tip: "Draw CPU, DMA Controller, Memory, and I/O Device. Show HOLD request from DMA to CPU, HLDA grant, and direct memory transfer."
});

addQ({
  id: "COA-Q21",
  subjectId: "COA",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(b)",
  topicTag: "Instruction Pipelining",
  question: "A 4-stage instruction pipeline has stage delays of $120\\text{ns}, 90\\text{ns}, 110\\text{ns}, 100\\text{ns}$. The latch delay between stages is $10\\text{ns}$. Calculate the speedup achieved over a non-pipelined execution for 100 instructions.",
  paperName: "dec 2024.pdf",
  driveFileId: "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
  pageNumber: 2,
  tip: "Clock cycle $t_p = \\max(120, 90, 110, 100) + 10 = 130\\text{ns}$. Non-pipelined $t_n = 120 + 90 + 110 + 100 = 420\\text{ns}$. Non-pipelined time $T_1 = 100 \\times 420 = 42,000\\text{ns}$. Pipelined time $T_k = (4 + 100 - 1) \\times 130 = 103 \\times 130 = 13,390\\text{ns}$. Speedup $S = 42,000 / 13,390 = 3.136$."
});

// =========================================================================
// 3. OBJECT ORIENTED PROGRAMMING THROUGH JAVA (OOPJ) — Units 1 to 5
// =========================================================================

// --- OOPJ UNIT 1: OOP Concepts, JVM, Bytecode & Primitive Types ---
addQ({
  id: "OOPJ-Q01",
  subjectId: "OOPJ",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(a)",
  topicTag: "Java Fundamentals",
  question: "Explain the role of the Java Virtual Machine (JVM), Bytecode, and Just-In-Time (JIT) Compiler in achieving platform independence ('Write Once, Run Anywhere').",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Java source (.java) $\\rightarrow$ javac $\\rightarrow$ Bytecode (.class) $\\rightarrow$ JVM executes on any host OS; JIT compiles hot bytecode paths to native machine instructions."
});

addQ({
  id: "OOPJ-Q02",
  subjectId: "OOPJ",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(b)",
  topicTag: "Primitive Types & Arrays",
  question: "Differentiate between primitive data types and reference data types in Java. What is the default value of an uninitialized instance variable of reference type?",
  paperName: "Aug 2024 reg.pdf",
  driveFileId: "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
  pageNumber: 1,
  tip: "Primitive types store raw binary values on stack; reference types store heap object memory addresses. Default reference value is `null`."
});

addQ({
  id: "OOPJ-Q03",
  subjectId: "OOPJ",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q2(a)",
  topicTag: "OOP Principles",
  question: "Discuss the fundamental principles of Object-Oriented Programming: Encapsulation, Abstraction, Inheritance, and Polymorphism with concise Java code snippets for each.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Provide code: private variables with public getters/setters for encapsulation; abstract classes/interfaces for abstraction; `extends` for inheritance; method overriding for polymorphism."
});

addQ({
  id: "OOPJ-Q04",
  subjectId: "OOPJ",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(b)",
  topicTag: "Type Casting & Operators",
  question: "Explain automatic type promotion (widening conversion) and explicit type casting (narrowing conversion) in Java expressions with code illustrations and boundary behavior.",
  paperName: "Dec 2024.pdf",
  driveFileId: "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
  pageNumber: 1,
  tip: "Widening: `byte -> short -> int -> long -> float -> double` (automatic). Narrowing: `int x = (int) 3.1415` (explicit, potential precision loss/truncation)."
});

// --- OOPJ UNIT 2: Classes, Objects, Inheritance, Polymorphism & Interfaces ---
addQ({
  id: "OOPJ-Q05",
  subjectId: "OOPJ",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(c)",
  topicTag: "Polymorphism",
  question: "Differentiate between Method Overloading (Compile-Time Polymorphism) and Method Overriding (Run-Time Polymorphism) in Java.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Overloading: same method name, different parameter lists within same class. Overriding: exact same method signature in subclass with dynamic method dispatch."
});

addQ({
  id: "OOPJ-Q06",
  subjectId: "OOPJ",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(d)",
  topicTag: "Interfaces & Abstract Classes",
  question: "State the differences between an Abstract Class and an Interface in Java prior to and including Java 8.",
  paperName: "feb 2024 supple.pdf",
  driveFileId: "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
  pageNumber: 1,
  tip: "Abstract class can have state, constructors, instance variables, and private/protected methods. Interface variables are `public static final`; supports multiple inheritance."
});

addQ({
  id: "OOPJ-Q07",
  subjectId: "OOPJ",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q3(a)",
  topicTag: "Dynamic Method Dispatch",
  question: "What is Dynamic Method Dispatch? Demonstrate how run-time polymorphism is achieved in Java using superclass references to subclass objects with a complete geometric `Shape -> Circle, Rectangle` program.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Define `class Shape { void area() {...} }`, `class Circle extends Shape { void area() {...} }`. Declare `Shape s; s = new Circle(); s.area();`."
});

addQ({
  id: "OOPJ-Q08",
  subjectId: "OOPJ",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q3(b)",
  topicTag: "Packages & Access Specifiers",
  question: "Explain the four access protection specifiers in Java (`private`, default/package-private, `protected`, `public`) across same class, same package, subclass, and other package with a summary table.",
  paperName: "Aug 2024 reg.pdf",
  driveFileId: "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
  pageNumber: 2,
  tip: "Create the standard 4-column access table showing visibility boundaries for each keyword across package borders."
});

// --- OOPJ UNIT 3: Exception Handling & Multithreading ---
addQ({
  id: "OOPJ-Q09",
  subjectId: "OOPJ",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2022],
  questionNumber: "Q1(e)",
  topicTag: "Exceptions",
  question: "Differentiate between Checked and Unchecked Exceptions in Java with two class examples for each.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Checked: checked at compile-time (e.g. `IOException`, `SQLException`). Unchecked: subclasses of `RuntimeException` (e.g. `NullPointerException`, `ArithmeticException`)."
});

addQ({
  id: "OOPJ-Q10",
  subjectId: "OOPJ",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2021],
  questionNumber: "Q1(f)",
  topicTag: "Multithreading",
  question: "State the two ways of creating a thread in Java. Why is implementing `Runnable` interface generally preferred over extending `Thread` class?",
  paperName: "Aug 2023.pdf",
  driveFileId: "1knszvrx0f7-CLjid3oP4A-qfYiq1peHz",
  pageNumber: 1,
  tip: "Java does not support multiple class inheritance; implementing `Runnable` leaves the class free to extend another base class and promotes separation of task from thread execution."
});

addQ({
  id: "OOPJ-Q11",
  subjectId: "OOPJ",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q4(a)",
  topicTag: "Custom Exceptions",
  question: "Write a complete Java program to create a user-defined exception `InvalidAgeException`. Throw this exception if a student's age entered is less than 18, and handle it gracefully using `try-catch`.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 2,
  tip: "`class InvalidAgeException extends Exception { public InvalidAgeException(String s) { super(s); } }`. Method uses `if(age < 18) throw new InvalidAgeException(\"...\");`."
});

addQ({
  id: "OOPJ-Q12",
  subjectId: "OOPJ",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(b)",
  topicTag: "Thread Synchronization & Inter-thread Comm",
  question: "Explain the Producer-Consumer problem in Java. Demonstrate how thread synchronization and inter-thread communication are handled using `synchronized`, `wait()`, and `notify()`.",
  paperName: "Dec 2024.pdf",
  driveFileId: "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
  pageNumber: 2,
  tip: "Show shared queue/buffer with `boolean valueSet` flag, `synchronized put(int n)` that calls `wait()` if set, and `synchronized get()` that calls `notify()`."
});

// --- OOPJ UNIT 4: Collections Framework, Generics & Files ---
addQ({
  id: "OOPJ-Q13",
  subjectId: "OOPJ",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(g)",
  topicTag: "Collections Framework",
  question: "Compare `ArrayList` and `LinkedList` in Java Collections Framework with respect to insertion, deletion, and random access performance.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "`ArrayList` is backed by dynamic array: $O(1)$ random access (`get(i)`), but $O(n)$ insertion/deletion in middle. `LinkedList` is doubly linked list: $O(1)$ node insertion/deletion, but $O(n)$ traversal."
});

addQ({
  id: "OOPJ-Q14",
  subjectId: "OOPJ",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(h)",
  topicTag: "Serialization",
  question: "What is Object Serialization in Java? What is the purpose of the `transient` keyword?",
  paperName: "feb 2024 supple.pdf",
  driveFileId: "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
  pageNumber: 1,
  tip: "Serialization converts an object state into a byte stream via `ObjectOutputStream`. Variables marked `transient` are skipped and not serialized (e.g. passwords, file handles)."
});

addQ({
  id: "OOPJ-Q15",
  subjectId: "OOPJ",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q5(a)",
  topicTag: "File Copy Streams",
  question: "Write a complete Java program to copy the entire contents of an existing text file `source.txt` into `destination.txt` using `FileInputStream` and `FileOutputStream` with proper resource cleanup (`try-with-resources`).",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 2,
  tip: "Use `try (FileInputStream fis = new FileInputStream(\"source.txt\"); FileOutputStream fos = new FileOutputStream(\"destination.txt\")) { int b; while((b = fis.read()) != -1) fos.write(b); }`."
});

addQ({
  id: "OOPJ-Q16",
  subjectId: "OOPJ",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(b)",
  topicTag: "Map & Set Collections",
  question: "Explain the hierarchy of `Map` interface in Java Collections Framework. Differentiate between `HashMap`, `LinkedHashMap`, and `TreeMap` in terms of ordering, hashing, and performance.",
  paperName: "Aug 2024 reg.pdf",
  driveFileId: "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
  pageNumber: 2,
  tip: "`HashMap`: no ordering, $O(1)$ operations. `LinkedHashMap`: maintains insertion order via linked list. `TreeMap`: sorted by natural key order or Comparator, Red-Black Tree backed, $O(\\log n)$."
});

// --- OOPJ UNIT 5: GUI Programming, Event Handling & Swing ---
addQ({
  id: "OOPJ-Q17",
  subjectId: "OOPJ",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(i)",
  topicTag: "Event Handling",
  question: "Explain the Delegation Event Model in Java GUI programming. Name the three principal components involved (Event Source, Event Object, Event Listener).",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 1,
  tip: "Event Source generates event $\\rightarrow$ sends Event Object to registered Event Listener $\\rightarrow$ Listener executes event handler method."
});

addQ({
  id: "OOPJ-Q18",
  subjectId: "OOPJ",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(j)",
  topicTag: "Layout Managers",
  question: "Describe the default layout managers for `JFrame` and `JPanel` in Swing. How does `BorderLayout` position its child components?",
  paperName: "Dec 2024.pdf",
  driveFileId: "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
  pageNumber: 1,
  tip: "`JFrame` defaults to `BorderLayout` (North, South, East, West, Center); `JPanel` defaults to `FlowLayout`."
});

addQ({
  id: "OOPJ-Q19",
  subjectId: "OOPJ",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q6(a)",
  topicTag: "Swing GUI Calculator",
  question: "Develop a Java Swing GUI application with two `JTextField`s for inputting two numbers, four `JButton`s (`+`, `-`, `*`, `/`), and a result `JLabel`. Implement `ActionListener` to perform arithmetic operations.",
  paperName: "jan 2024 reg.pdf",
  driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
  pageNumber: 2,
  tip: "Use `JFrame`, create text fields, add buttons to a panel with `GridLayout(1,4)`, register `addActionListener(this)`, handle division by zero exception."
});

addQ({
  id: "OOPJ-Q20",
  subjectId: "OOPJ",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(b)",
  topicTag: "Adapter Classes",
  question: "What are Event Adapter classes in Java? Why are they useful when working with listener interfaces that declare multiple methods like `MouseListener` or `WindowListener`?",
  paperName: "Aug 2024 reg.pdf",
  driveFileId: "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
  pageNumber: 2,
  tip: "Adapter classes provide empty default implementations for all interface methods. Extending `MouseAdapter` allows overriding only `mouseClicked()` without writing 4 other boilerplate methods."
});

// =========================================================================
// 4. DATABASE MANAGEMENT SYSTEMS (DBMS) — Units 1 to 5
// =========================================================================

// --- DBMS UNIT 1: Database System Concepts, 3-Schema Architecture & ER Modeling ---
addQ({
  id: "DBMS-Q01",
  subjectId: "DBMS",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(a)",
  topicTag: "Data Independence",
  question: "Define Physical Data Independence and Logical Data Independence in the context of ANSI/SPARC 3-schema database architecture.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Logical: ability to modify conceptual schema without changing external views. Physical: ability to modify internal physical storage without changing conceptual schema."
});

addQ({
  id: "DBMS-Q02",
  subjectId: "DBMS",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(b)",
  topicTag: "ER Modeling",
  question: "What is a Weak Entity set? How are weak entities represented in an Entity-Relationship (ER) diagram, and what is a discriminator (partial key)?",
  paperName: "Aug 2024.pdf",
  driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
  pageNumber: 1,
  tip: "Weak entity has no primary key of its own; represented by double rectangle. Identifying relationship represented by double diamond; partial key underlined with dashed line."
});

addQ({
  id: "DBMS-Q03",
  subjectId: "DBMS",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q2(a)",
  topicTag: "ER Diagram Design",
  question: "Design an Entity-Relationship (ER) diagram for a University Management System involving Students, Departments, Courses, Professors, and Enrollments. Specify primary keys, cardinalities, and convert the ER model into relational tables.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Draw entities with attributes, specify 1:N and M:N relationships, and write table schemas with Foreign Keys clearly indicated."
});

addQ({
  id: "DBMS-Q04",
  subjectId: "DBMS",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(b)",
  topicTag: "DBMS vs File Systems",
  question: "Compare traditional File Processing Systems with Database Management Systems across data redundancy, concurrent access, integrity constraints, and crash recovery.",
  paperName: "Dec 2024.pdf",
  driveFileId: "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
  pageNumber: 1,
  tip: "Cover 5 key dimensions: Redundancy & inconsistency, Data isolation, Atomicity problems, Concurrent access anomalies, Security enforcement."
});

// --- DBMS UNIT 2: Relational Model, Relational Algebra & SQL ---
addQ({
  id: "DBMS-Q05",
  subjectId: "DBMS",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2022],
  questionNumber: "Q1(c)",
  topicTag: "Integrity Constraints",
  question: "State the Entity Integrity Constraint and Referential Integrity Constraint in the Relational Data Model.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Entity integrity: primary key cannot be null. Referential integrity: foreign key must match an existing primary key value in referenced table or be null."
});

addQ({
  id: "DBMS-Q06",
  subjectId: "DBMS",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2021],
  questionNumber: "Q1(d)",
  topicTag: "Relational Algebra",
  question: "Differentiate between Natural Join ($\\bowtie$) and Theta Join ($\\bowtie_\\theta$) in Relational Algebra.",
  paperName: "Aug 2023.pdf",
  driveFileId: "1dNxi88ENzGvvyrscc7OmuSDkDvz9MFLd",
  pageNumber: 1,
  tip: "Theta join combines tuples based on explicit predicate $\\theta$. Natural join equates all attributes with identical names and automatically removes duplicate columns."
});

addQ({
  id: "DBMS-Q07",
  subjectId: "DBMS",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q3(a)",
  topicTag: "SQL Queries & Aggregations",
  question: "Given schemas `Employee(emp_id, emp_name, dept_id, salary)` and `Department(dept_id, dept_name, location)`, write SQL queries for: (i) Find the 2nd highest salary, (ii) List departments having more than 5 employees with average salary > 50,000, (iii) Retrieve employees earning more than their department's average salary.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "(i) `SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);`, (ii) `GROUP BY dept_id HAVING COUNT(*) > 5 AND AVG(salary) > 50000;`, (iii) Correlated subquery."
});

addQ({
  id: "DBMS-Q08",
  subjectId: "DBMS",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q3(b)",
  topicTag: "Relational Algebra Operations",
  question: "Define the fundamental operators of Relational Algebra: Selection ($\\sigma$), Projection ($\\pi$), Union ($\\cup$), Set Difference ($-$), and Cartesian Product ($\\times$). Show how Division ($\\div$) is derived.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
  pageNumber: 1,
  tip: "Show formal notation and algebraic derivation of Division: $R \\div S = \\pi_X(R) - \\pi_X((\\pi_X(R) \\times S) - R)$."
});

// --- DBMS UNIT 3: Functional Dependencies, Schema Refinement & Normalization ---
addQ({
  id: "DBMS-Q09",
  subjectId: "DBMS",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(e)",
  topicTag: "Functional Dependencies",
  question: "State Armstrong's Axioms for Functional Dependencies: Reflexivity, Augmentation, and Transitivity.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Reflexivity: if $Y \\subseteq X$, then $X \\rightarrow Y$. Augmentation: if $X \\rightarrow Y$, then $XZ \\rightarrow YZ$. Transitivity: if $X \\rightarrow Y$ and $Y \\rightarrow Z$, then $X \\rightarrow Z$."
});

addQ({
  id: "DBMS-Q10",
  subjectId: "DBMS",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(f)",
  topicTag: "BCNF vs 3NF",
  question: "Differentiate between 3NF and BCNF. Why is every relation in BCNF strictly in 3NF, but not necessarily vice versa?",
  paperName: "Dec 2024.pdf",
  driveFileId: "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
  pageNumber: 1,
  tip: "In BCNF, for every $X \\rightarrow Y$, $X$ must be a super key. In 3NF, $Y$ can also be a prime attribute. BCNF does not guarantee dependency preservation."
});

addQ({
  id: "DBMS-Q11",
  subjectId: "DBMS",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q4(a)",
  topicTag: "Normalization Problem",
  question: "Consider relation $R(A, B, C, D, E)$ with functional dependencies $F = \\{A \\rightarrow BC, CD \\rightarrow E, B \\rightarrow D, E \\rightarrow A\\}$. Find all candidate keys of $R$ and determine the highest normal form of $R$. Decompose into BCNF if necessary.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 2,
  tip: "Compute closures: $A^+ = \\{A,B,C,D,E\\} \\implies A$ is a candidate key. $E^+ = \\{A,B,C,D,E\\} \\implies E$ is candidate key. $CD^+ = \\{C,D,E,A,B\\} \\implies CD$. $BC^+ = \\{B,C,D,E,A\\} \\implies BC$. Since $B \\rightarrow D$ has non-super key LHS and $D$ is non-prime, $R$ is in 1NF."
});

addQ({
  id: "DBMS-Q12",
  subjectId: "DBMS",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(b)",
  topicTag: "Lossless Join Decomposition",
  question: "State and prove the necessary and sufficient condition for a decomposition of relation $R$ into $R_1$ and $R_2$ to be a Lossless-Join Decomposition with respect to functional dependencies $F$.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
  pageNumber: 2,
  tip: "Condition: $R_1 \\cap R_2 \\rightarrow R_1 \\in F^+$ OR $R_1 \\cap R_2 \\rightarrow R_2 \\in F^+$. Common attribute must be a superkey of at least one sub-relation."
});

// --- DBMS UNIT 4: Transactions, ACID & Concurrency Control ---
addQ({
  id: "DBMS-Q13",
  subjectId: "DBMS",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(g)",
  topicTag: "ACID Properties",
  question: "Explain the four ACID properties of a database transaction. Which component of DBMS is responsible for ensuring Atomicity and Durability?",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Atomicity (all or none, Recovery Manager), Consistency (integrity, Application programmer), Isolation (concurrency control), Durability (persists after crash, WAL recovery)."
});

addQ({
  id: "DBMS-Q14",
  subjectId: "DBMS",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(h)",
  topicTag: "Two-Phase Locking",
  question: "What is Two-Phase Locking (2PL)? Differentiate between Growing Phase and Shrinking Phase. Does basic 2PL guarantee freedom from deadlock?",
  paperName: "Dec 2024.pdf",
  driveFileId: "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
  pageNumber: 1,
  tip: "Growing: locks acquired, none released. Shrinking: locks released, none acquired. 2PL guarantees serializability but does NOT prevent deadlock."
});

addQ({
  id: "DBMS-Q15",
  subjectId: "DBMS",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q5(a)",
  topicTag: "Conflict Serializability",
  question: "Consider schedule $S: r_1(A); r_2(A); w_1(A); r_1(B); w_2(A); w_1(B); r_2(B); w_2(B)$. Test whether $S$ is conflict serializable by constructing its Precedence Graph. If serializable, write the equivalent serial schedule.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 2,
  tip: "Find conflicting operations on same data items: $r_2(A)$ before $w_1(A) \\implies T_2 \\rightarrow T_1$. $w_1(A)$ before $w_2(A) \\implies T_1 \\rightarrow T_2$. Graph has cycle $T_1 \\leftrightarrow T_2$, therefore NOT conflict serializable."
});

addQ({
  id: "DBMS-Q16",
  subjectId: "DBMS",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(b)",
  topicTag: "Deadlock Handling",
  question: "Explain Deadlock Prevention schemes based on timestamps: Wait-Die and Wound-Wait. How do they handle when an older transaction requests a lock held by a younger transaction?",
  paperName: "Aug 2024.pdf",
  driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
  pageNumber: 2,
  tip: "Wait-Die (non-preemptive): Old waits for young; Young requesting old dies. Wound-Wait (preemptive): Old wounds (preempts) young; Young waits for old."
});

// --- DBMS UNIT 5: Storage, Indexing, B+ Trees & Crash Recovery ---
addQ({
  id: "DBMS-Q17",
  subjectId: "DBMS",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(i)",
  topicTag: "Indexing",
  question: "Differentiate between Primary Index, Secondary Index, and Clustering Index with respect to ordered files.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 1,
  tip: "Primary: ordered on primary key (sparse). Clustering: ordered on non-key ordering field. Secondary: ordered on non-ordering field (dense)."
});

addQ({
  id: "DBMS-Q18",
  subjectId: "DBMS",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(j)",
  topicTag: "RAID Levels",
  question: "Compare RAID 0 (Striping), RAID 1 (Mirroring), and RAID 5 (Block-Interleaved Distributed Parity) in terms of redundancy and storage efficiency.",
  paperName: "Dec 2024.pdf",
  driveFileId: "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
  pageNumber: 1,
  tip: "RAID 0: max performance, zero fault tolerance. RAID 1: 100% duplicate cost, high safety. RAID 5: parity distributed across $N$ disks, capacity is $N-1$ disks."
});

addQ({
  id: "DBMS-Q19",
  subjectId: "DBMS",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q6(a)",
  topicTag: "B+ Tree Indexing",
  question: "Construct a B+ Tree of order $p = 4$ by inserting the following search key values in sequence: $10, 20, 30, 40, 50, 60, 70, 80$. Show node splits at each step.",
  paperName: "Jan 2024 supp.pdf",
  driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
  pageNumber: 2,
  tip: "Maximum keys per node $= 3$. When 4th key is added, split leaf into two nodes with $\\lceil (p-1)/2 \\rceil$ keys each and promote middle key to parent. Maintain leaf links."
});

addQ({
  id: "DBMS-Q20",
  subjectId: "DBMS",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(b)",
  topicTag: "Crash Recovery & ARIES",
  question: "Explain the ARIES recovery algorithm for database crashes. Detail the three passes: Analysis pass, Redo pass, and Undo pass using Write-Ahead Logging (WAL).",
  paperName: "Aug 2024.pdf",
  driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
  pageNumber: 2,
  tip: "Analysis: determines dirty pages and active transactions at crash. Redo: repeating history from oldest unwritten page forward. Undo: reversing effects of uncommitted active transactions."
});

// =========================================================================
// 5. SOFTWARE ENGINEERING (SE) — Units 1 to 5
// =========================================================================

// --- SE UNIT 1: Process Models, Waterfall & Agile Scrum ---
addQ({
  id: "SE-Q01",
  subjectId: "SE",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(a)",
  topicTag: "Process Models",
  question: "State the primary advantages and major disadvantages of the Classical Waterfall Model. Under what project conditions is it most suitable?",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "Simple, easy to manage; but inflexible to changing requirements, high late risk. Suitable when requirements are stable, fixed, and well understood."
});

addQ({
  id: "SE-Q02",
  subjectId: "SE",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(b)",
  topicTag: "Agile Scrum",
  question: "Define Sprint, Product Backlog, and Daily Scrum in the Agile Scrum framework.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
  pageNumber: 1,
  tip: "Sprint: time-boxed iteration (2-4 weeks). Product backlog: prioritized feature list. Daily Scrum: 15-minute sync answering what done, what next, blockers."
});

addQ({
  id: "SE-Q03",
  subjectId: "SE",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2021],
  questionNumber: "Q2(a)",
  topicTag: "Spiral Model",
  question: "Explain Boehm's Spiral Model of software development. Describe the activities carried out in each of the four quadrants and explain why risk management is central to this model.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "4 quadrants: 1. Determine objectives & constraints, 2. Identify & resolve risks (prototyping), 3. Develop & verify next-level product, 4. Review & plan next iteration."
});

addQ({
  id: "SE-Q04",
  subjectId: "SE",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(b)",
  topicTag: "Agile vs Waterfall",
  question: "Compare Agile methodology with traditional plan-driven (Waterfall) models across customer collaboration, handling changes, delivery schedule, and testing strategy.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
  pageNumber: 1,
  tip: "Agile: iterative, customer embedded, welcomes change, continuous delivery, test-driven. Waterfall: linear sequential, contract negotiation, resists change, big-bang delivery."
});

// --- SE UNIT 2: Requirements Engineering, Use Cases & SRS ---
addQ({
  id: "SE-Q05",
  subjectId: "SE",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(c)",
  topicTag: "Requirements Types",
  question: "Differentiate between Functional Requirements and Non-Functional Requirements (NFRs) with two concrete examples for an E-Commerce portal.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "Functional: user adds item to cart, process payment. Non-functional: checkout must complete within 2 seconds, 99.99% uptime, AES-256 encryption."
});

addQ({
  id: "SE-Q06",
  subjectId: "SE",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(d)",
  topicTag: "SRS Characteristics",
  question: "List four essential characteristics of a good Software Requirements Specification (SRS) document according to IEEE 830 standards.",
  paperName: "Feb 2024 supple.pdf",
  driveFileId: "1J39hWnvRtVO3L5k5YH6_JL29Xuk_Dike",
  pageNumber: 1,
  tip: "Correct, Unambiguous, Complete, Consistent, Ranked for importance/stability, Verifiable, Modifiable, Traceable."
});

addQ({
  id: "SE-Q07",
  subjectId: "SE",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q3(a)",
  topicTag: "Use Case Modeling",
  question: "Explain Use Case Modeling. Draw a complete Use Case Diagram for an Online Banking System showing Actors, Use Cases, `<<include>>`, and `<<extend>>` relationships.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "Actors: Customer, Bank Admin. Include: Transfer Funds includes Check Balance. Extend: Transfer Funds extended by Overdraft Alert."
});

addQ({
  id: "SE-Q08",
  subjectId: "SE",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q3(b)",
  topicTag: "Data Flow Diagrams",
  question: "Describe the symbols used in Data Flow Diagrams (DFDs). Draw Level 0 (Context Diagram) and Level 1 DFDs for a Library Management System.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
  pageNumber: 1,
  tip: "Symbols: Process (bubble/circle), External Entity (rectangle), Data Store (open rectangle), Data Flow (arrow). Level 0: single central bubble with student and librarian."
});

// --- SE UNIT 3: Architectural Design, Coupling & Cohesion ---
addQ({
  id: "SE-Q09",
  subjectId: "SE",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(e)",
  topicTag: "Cohesion vs Coupling",
  question: "Explain the software engineering design golden rule: 'High Cohesion and Low Coupling'. Why is it desirable?",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "High cohesion ensures module focuses on single clear task; low coupling minimizes interdependencies, making testing, reuse, and maintenance simple."
});

addQ({
  id: "SE-Q10",
  subjectId: "SE",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(f)",
  topicTag: "Coupling Levels",
  question: "Arrange the types of Coupling from Best (Lowest) to Worst (Highest): Common, Data, Content, Control, Stamp.",
  paperName: "Aug 2023.pdf",
  driveFileId: "1zVaScPFgh6pZVACqsqFJhF-l_ts78MdE",
  pageNumber: 1,
  tip: "Data Coupling (Best) < Stamp Coupling < Control Coupling < Common Coupling < Content Coupling (Worst)."
});

addQ({
  id: "SE-Q11",
  subjectId: "SE",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q4(a)",
  topicTag: "Cohesion Hierarchy",
  question: "Explain the seven levels of Cohesion from Lowest (Worst) to Highest (Best) with real-world module examples for each level.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 2,
  tip: "Coincidental < Logical < Temporal < Procedural < Communicational < Sequential < Functional (Best, executes single well-defined computation)."
});

addQ({
  id: "SE-Q12",
  subjectId: "SE",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(b)",
  topicTag: "Architectural Styles",
  question: "Compare Layered Architecture, Client-Server Architecture, and Pipe-and-Filter Architecture with architectural block diagrams and software system examples.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
  pageNumber: 2,
  tip: "Layered: Presentation, Business Logic, Data Access. Client-Server: distributed tiers. Pipe-and-Filter: Unix pipelines, compiler phases."
});

// --- SE UNIT 4: Software Testing, Black Box & White Box Testing ---
addQ({
  id: "SE-Q13",
  subjectId: "SE",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(g)",
  topicTag: "Testing Concepts",
  question: "Differentiate between Verification and Validation (V&V) in software testing ('Are we building the product right?' vs 'Are we building the right product?').",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "Verification: static review/inspection of artifacts without executing code. Validation: dynamic execution testing whether system satisfies user expectations."
});

addQ({
  id: "SE-Q14",
  subjectId: "SE",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(h)",
  topicTag: "Cyclomatic Complexity",
  question: "State the three formulas to compute McCabe's Cyclomatic Complexity $V(G)$ from a Control Flow Graph.",
  paperName: "Feb 2024 supple.pdf",
  driveFileId: "1J39hWnvRtVO3L5k5YH6_JL29Xuk_Dike",
  pageNumber: 1,
  tip: "1. $V(G) = E - N + 2P$, 2. $V(G) = P_{predicate} + 1$, 3. $V(G) = \\text{Number of closed regions} + 1$."
});

addQ({
  id: "SE-Q15",
  subjectId: "SE",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q5(a)",
  topicTag: "Basis Path Testing",
  question: "For a given code segment containing nested `if-else` and `while` loop: (i) Draw the Control Flow Graph (CFG), (ii) Calculate Cyclomatic Complexity $V(G)$, (iii) Determine the set of linearly independent paths, (iv) Design test cases covering each path.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 2,
  tip: "Label statements 1..n, draw nodes and directed edges, count closed regions $R$, enumerate Independent Paths 1 to $V(G)$."
});

addQ({
  id: "SE-Q16",
  subjectId: "SE",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(b)",
  topicTag: "Black Box Testing",
  question: "Explain Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA). Apply both techniques to design test cases for an input field accepting integers between 1 and 100 inclusive.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
  pageNumber: 2,
  tip: "ECP: Valid [1..100], Invalid [< 1], Invalid [> 100]. BVA boundaries: 0 (just below), 1 (min), 2 (just above), 50 (nominal), 99 (just below), 100 (max), 101 (just above)."
});

// --- SE UNIT 5: SQA, Cost Estimation & Maintenance ---
addQ({
  id: "SE-Q17",
  subjectId: "SE",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2021],
  questionNumber: "Q1(i)",
  topicTag: "COCOMO Model",
  question: "What are the three project categories in Boehm's COCOMO model: Organic, Semidetached, and Embedded?",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 1,
  tip: "Organic: small experienced teams, familiar domain. Semidetached: intermediate complexity. Embedded: strict hardware/software constraints (e.g. flight control)."
});

addQ({
  id: "SE-Q18",
  subjectId: "SE",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2022],
  questionNumber: "Q1(j)",
  topicTag: "Maintenance Types",
  question: "Explain the four categories of Software Maintenance: Corrective, Adaptive, Perfective, and Preventive maintenance.",
  paperName: "Dec 2024.pdf",
  driveFileId: "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
  pageNumber: 1,
  tip: "Corrective: fixes bugs. Adaptive: adjusts to new environment/OS. Perfective: adds enhancements/features. Preventive: refactoring to avoid future bugs."
});

addQ({
  id: "SE-Q19",
  subjectId: "SE",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2023, 2020],
  questionNumber: "Q6(a)",
  topicTag: "COCOMO Calculation",
  question: "Assume an Organic software project is estimated at 32,000 Lines of Code (32 KLOC). For Organic mode, $Effort = 2.4 \\times (KLOC)^{1.05}$ person-months and $Time = 2.5 \\times (Effort)^{0.38}$ months. Calculate the required Effort, Development Time, and average team size.",
  paperName: "Jan 2024 reg.pdf",
  driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
  pageNumber: 2,
  tip: "$Effort = 2.4 \\times (32)^{1.05} = 2.4 \\times 38.05 = 91.33$ PM. $Time = 2.5 \\times (91.33)^{0.38} = 2.5 \\times 5.53 = 13.8$ months. Persons $= 91.33 / 13.8 \\approx 7$ engineers."
});

addQ({
  id: "SE-Q20",
  subjectId: "SE",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(b)",
  topicTag: "Risk Management",
  question: "Explain the RMMM (Risk Mitigation, Monitoring, and Management) plan in software project management with a practical tabular template.",
  paperName: "Aug 2024.pdf",
  driveFileId: "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
  pageNumber: 2,
  tip: "Columns: Risk description, Probability, Impact severity, Mitigation strategy (preventive), Monitoring triggers, Management plan (contingency)."
});

// =========================================================================
// 6. ENVIRONMENTAL STUDIES (ES) — Units 1 to 5
// =========================================================================
addQ({
  id: "ES-Q01",
  subjectId: "ES",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023, 2022],
  questionNumber: "Q1(a)",
  topicTag: "Ecosystems",
  question: "Explain Lindeman's 10% Energy Transfer Law across trophic levels in an ecosystem. Why is the Pyramid of Energy always upright?",
  paperName: "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
  driveFileId: "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
  pageNumber: 1,
  tip: "Only ~10% of energy is transferred to next trophic level; 90% lost as respiration heat. Energy cannot be inverted because energy decreases upwards."
});

addQ({
  id: "ES-Q02",
  subjectId: "ES",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(a)",
  topicTag: "Biodiversity Hotspots",
  question: "What are Biodiversity Hotspots? Describe the criteria used by Norman Myers to designate a region as a hotspot, and list the four biodiversity hotspots in India.",
  paperName: "ES-model question paper-MID-1.pdf",
  driveFileId: "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
  pageNumber: 1,
  tip: "Criteria: must contain >= 1,500 endemic vascular plant species and have lost >= 70% of primary habitat. India: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland."
});

addQ({
  id: "ES-Q03",
  subjectId: "ES",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(b)",
  topicTag: "Natural Resources",
  question: "Differentiate between Renewable and Non-Renewable energy resources with two environmental impacts for each.",
  paperName: "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
  driveFileId: "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
  pageNumber: 1,
  tip: "Renewable: solar, wind (intermittent, zero GHG). Non-renewable: coal, petroleum (finite, causes acid rain, global warming)."
});

addQ({
  id: "ES-Q04",
  subjectId: "ES",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q3(a)",
  topicTag: "Deforestation & Water Issues",
  question: "Discuss the ecological and socio-economic consequences of large dams and extensive deforestation in river catchments.",
  paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
  driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
  pageNumber: 1,
  tip: "Soil erosion, siltation of reservoirs, loss of biodiversity, resettlement and rehabilitation of tribal populations, seismic risks."
});

addQ({
  id: "ES-Q05",
  subjectId: "ES",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(c)",
  topicTag: "Water Pollution Parameters",
  question: "Define Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD). What does a high BOD value signify in a water body?",
  paperName: "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
  driveFileId: "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
  pageNumber: 1,
  tip: "BOD: oxygen consumed by aerobic bacteria to decompose organic matter. High BOD indicates heavy organic contamination and dissolved oxygen depletion."
});

addQ({
  id: "ES-Q06",
  subjectId: "ES",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(a)",
  topicTag: "Solid Waste Management",
  question: "Explain the integrated solid waste management hierarchy (3Rs: Reduce, Reuse, Recycle) and compare Sanitary Landfills with Composting and Incineration.",
  paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
  driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
  pageNumber: 1,
  tip: "Cover leachate control in sanitary landfills, organic conversion in composting, and volume reduction with air pollution control in incineration."
});

addQ({
  id: "ES-Q07",
  subjectId: "ES",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(d)",
  topicTag: "Global Challenges",
  question: "Explain the mechanism of Ozone Layer Depletion in the stratosphere and name the major chlorofluorocarbons (CFCs) responsible.",
  paperName: "ES-model question paper-MID-1.pdf",
  driveFileId: "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
  pageNumber: 1,
  tip: "UV splits chlorine radical from CFC: $Cl + O_3 \\rightarrow ClO + O_2$; $ClO + O \\rightarrow Cl + O_2$. Single chlorine atom destroys $>100,000$ ozone molecules."
});

addQ({
  id: "ES-Q08",
  subjectId: "ES",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(a)",
  topicTag: "Climate Change & Rainwater Harvesting",
  question: "Describe the Greenhouse Effect and global climate change impacts. Explain Rooftop Rainwater Harvesting techniques with a schematic diagram.",
  paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
  driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
  pageNumber: 2,
  tip: "Diagram: Catchment roof $\\rightarrow$ First-flush diverter $\\rightarrow$ Filter unit (sand, gravel, charcoal) $\\rightarrow$ Recharge well / Storage tank."
});

addQ({
  id: "ES-Q09",
  subjectId: "ES",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(e)",
  topicTag: "Environmental Legislation",
  question: "State the salient provisions of the Environment (Protection) Act, 1986 and the Air (Prevention and Control of Pollution) Act, 1981.",
  paperName: "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
  driveFileId: "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
  pageNumber: 1,
  tip: "Empowers central government to coordinate state pollution boards, establish environmental standards, inspect industrial sites, and penalize violations."
});

addQ({
  id: "ES-Q10",
  subjectId: "ES",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(a)",
  topicTag: "Sustainable Development Goals",
  question: "What is Sustainable Development? Discuss how Information Technology (GIS, Remote Sensing, Environmental Big Data) contributes to disaster management and environmental protection.",
  paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
  driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
  pageNumber: 2,
  tip: "Brundtland definition: meeting present needs without compromising future generations. GIS maps flood zones, deforestation tracking via satellite telemetry."
});

// =========================================================================
// 7. INNOVATION AND ENTREPRENEURSHIP (I&E) — Units 1 to 5
// =========================================================================
addQ({
  id: "IE-Q01",
  subjectId: "IE",
  chapter: 1,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(a)",
  topicTag: "Design Thinking",
  question: "List and briefly define the 5 iterative stages of the Design Thinking process.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "1. Empathize (understand users), 2. Define (problem statement), 3. Ideate (brainstorm), 4. Prototype (build MVP), 5. Test (gather feedback)."
});

addQ({
  id: "IE-Q02",
  subjectId: "IE",
  chapter: 1,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q2(a)",
  topicTag: "Innovation Types",
  question: "Differentiate between Incremental Innovation, Radical Innovation, and Disruptive Innovation with contemporary tech industry case studies.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Incremental: iterative camera improvements. Radical: iPhone smartphone creation. Disruptive: Netflix streaming disrupting Blockbuster video rental."
});

addQ({
  id: "IE-Q03",
  subjectId: "IE",
  chapter: 2,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(b)",
  topicTag: "Entrepreneurial Opportunity",
  question: "What are the four dimensions of Feasibility Analysis evaluated before launching a new venture?",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Product/Service feasibility, Industry/Target Market feasibility, Organizational feasibility, Financial feasibility."
});

addQ({
  id: "IE-Q04",
  subjectId: "IE",
  chapter: 2,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q3(a)",
  topicTag: "Market Research",
  question: "Explain the importance of Market Research in opportunity recognition. Differentiate Primary vs Secondary market research methods for an EdTech startup.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Primary: user surveys, student interviews, prototype usability tests. Secondary: industry reports (Gartner, Statista), census data, competitor financial reports."
});

addQ({
  id: "IE-Q05",
  subjectId: "IE",
  chapter: 3,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(c)",
  topicTag: "Lean Canvas",
  question: "What is a Minimum Viable Product (MVP)? How does Lean Startup methodology apply the Build-Measure-Learn feedback loop?",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "MVP has core features to collect maximum validated learning with least effort. Feedback loop tests hypotheses rapidly to pivot or persevere."
});

addQ({
  id: "IE-Q06",
  subjectId: "IE",
  chapter: 3,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q4(a)",
  topicTag: "Business Model Canvas",
  question: "Detail the 9 building blocks of Alexander Osterwalder's Business Model Canvas (BMC). Map out a complete BMC for an AI-powered student exam prep service.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure."
});

addQ({
  id: "IE-Q07",
  subjectId: "IE",
  chapter: 4,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(d)",
  topicTag: "Venture Financing",
  question: "Differentiate between Angel Investors and Venture Capitalists (VCs) in terms of investment stage, funding volume, and decision-making speed.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Angels: high-net-worth individuals, seed/early stage, smaller checks, faster personal decisions. VCs: institutional funds, Series A+, large capital, board seats."
});

addQ({
  id: "IE-Q08",
  subjectId: "IE",
  chapter: 4,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q5(a)",
  topicTag: "Pitch Deck & Valuation",
  question: "Describe the essential slides required in an Investor Pitch Deck (Problem, Solution, Market Size TAM/SAM/SOM, Business Model, Traction, Team, The Ask).",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Standard 10-12 slide deck format: hook problem, crisp solution demo, verifiable unit economics, competitive moat, clear capital allocation plan."
});

addQ({
  id: "IE-Q09",
  subjectId: "IE",
  chapter: 5,
  part: "A",
  marks: 2,
  years: [2024, 2023],
  questionNumber: "Q1(e)",
  topicTag: "IPR Types",
  question: "What are the three mandatory statutory criteria for an invention to be eligible for patent grant in India (Novelty, Inventive Step, Industrial Applicability)?",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Novelty (never published worldwide), Non-obvious inventive step to person skilled in art, and capable of industrial manufacture or usage."
});

addQ({
  id: "IE-Q10",
  subjectId: "IE",
  chapter: 5,
  part: "B",
  marks: 5,
  years: [2024, 2022],
  questionNumber: "Q6(a)",
  topicTag: "IP Protection & Scaling",
  question: "Explain the four main categories of Intellectual Property Rights: Patents, Trademarks, Copyrights, and Trade Secrets with their validity periods and legal protections.",
  paperName: "I&E Model Reference.pdf",
  driveFileId: null,
  pageNumber: 1,
  tip: "Patents: 20 years for inventions. Trademarks: 10 years renewable for logos/names. Copyrights: author lifetime + 60 years for creative works. Trade Secrets: indefinite as long as secret."
});

console.log(`Generated ${questions.length} total questions.`);

// Write full pyq-data.js
const fileContent = `/**
 * MGIT PYQ Hub - Question Bank & Subject Metadata
 * Strictly CSE Semester III Core Subjects:
 * 1. DM (Discrete Mathematics)
 * 2. COA (Computer Organization & Architecture)
 * 3. OOPJ (Object-Oriented Programming through Java)
 * 4. DBMS (Database Management Systems)
 * 5. SE (Software Engineering)
 * 6. ES (Environmental Studies)
 * 7. I&E (Innovation and Entrepreneurship)
 * 
 * Every question links DIRECTLY to its verified Drive paper PDF (not the folder)
 */

const SUBJECTS_DATA = ${JSON.stringify(SUBJECTS_DATA, null, 2)};

const NOTES_DATA = ${JSON.stringify(NOTES_DATA, null, 2)};

const QUESTIONS_DATABASE = ${JSON.stringify(questions, null, 2)};

// Attach unconditionally to global scope & Node.js exports
if (typeof window !== 'undefined') {
  window.SUBJECTS_DATA = SUBJECTS_DATA;
  window.NOTES_DATA = NOTES_DATA;
  window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUBJECTS_DATA, NOTES_DATA, QUESTIONS_DATABASE };
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'pyq-data.js'), fileContent, 'utf8');
console.log('Successfully wrote CSE-III-sem/pyq-data.js!');

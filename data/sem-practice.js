/**
 * MGIT PYQ HUB - Semester End Comprehensive Question Bank & Flashcards
 * Auto-generated & verified for MR-25 CSE Semester III (Units 1-5 Complete)
 */
const SEM_PRACTICE = {
  "version": "1.0.0",
  "exam": "sem",
  "regulation": "MR-25",
  "targetAudience": "MGIT CSE Semester III - Semester End Examination",
  "subjects": [
    "DM",
    "COA",
    "OOPJ",
    "DBMS",
    "SE",
    "ES",
    "IE"
  ],
  "quiz": {
    "DM": [
      {
        "id": "DM-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Tautology",
        "question": "A compound proposition that evaluates to true under every possible truth assignment is called a:",
        "options": [
          "Contradiction",
          "Tautology",
          "Equivalence",
          "Contingency"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-SEM-2023",
        "explanation": "A tautology is universally true under every interpretation (e.g., $p \\lor \\neg p$)."
      },
      {
        "id": "DM-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "De Morgan's Laws",
        "question": "According to De Morgan's Law, $\\neg(p \\land q)$ is equivalent to $\\neg p$ _______ $\\neg q$.",
        "accepted": [
          "\\lor",
          "or",
          "v"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DM-SEM-2022",
        "explanation": "De Morgan's Laws: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$."
      },
      {
        "id": "DM-SEM-003",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Modus Ponens",
        "question": "Which rule of inference deduces $q$ from premises $p$ and $p \\rightarrow q$?",
        "options": [
          "Modus Tollens",
          "Hypothetical Syllogism",
          "Modus Ponens",
          "Disjunctive Syllogism"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-SEM-2024",
        "explanation": "Modus Ponens affirms antecedent: $(p \\land (p \\rightarrow q)) \\implies q$."
      },
      {
        "id": "DM-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Equivalence Relations",
        "question": "An equivalence relation on a set must be reflexive, symmetric, and _______.",
        "accepted": [
          "transitive"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DM-SEM-2022",
        "explanation": "An equivalence relation satisfies reflexivity, symmetry, and transitivity."
      },
      {
        "id": "DM-SEM-005",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Lattices",
        "question": "A POSET $(L, \\le)$ is called a Lattice if every pair of elements has:",
        "options": [
          "A maximum element only",
          "No cycles",
          "Both a unique GLB (meet) and unique LUB (join)",
          "A minimum element only"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-SEM-2023",
        "explanation": "In a lattice, every pair has a unique greatest lower bound ($a \\land b$) and least upper bound ($a \\lor b$)."
      },
      {
        "id": "DM-SEM-006",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Bijection",
        "question": "A function that is both injective (one-to-one) and surjective (onto) is called a _______ function.",
        "accepted": [
          "bijective",
          "bijection"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A bijection gives a one-to-one correspondence between sets, enabling inversion."
      },
      {
        "id": "DM-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Groups & Properties",
        "question": "An algebraic structure $(G, *)$ is called a group if it satisfies which of the following set of axioms?",
        "options": [
          "Closure and Associativity only",
          "Closure, Associativity, Identity, and Inverses",
          "Closure, Identity, and Commutativity",
          "Closure, Associativity, and Identity only"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2023",
        "explanation": "A group must satisfy four fundamental axioms: closure, associativity, existence of an identity element, and existence of an inverse for every element."
      },
      {
        "id": "DM-M2-002",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Lagrange's Theorem",
        "question": "According to Lagrange's Theorem for finite groups, if $H$ is a subgroup of a finite group $G$, then:",
        "options": [
          "The order of $G$ divides the order of $H$",
          "$|G| = |H| + 1$",
          "$|H|$ and $|G|$ must both be prime numbers",
          "The order of $H$ divides the order of $G$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2024",
        "explanation": "Lagrange's Theorem states that the order of any subgroup $H$ divides the order of the parent finite group $G$. The ratio $|G|/|H|$ is called the index of $H$ in $G$."
      },
      {
        "id": "DM-M2-003",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Abelian Groups",
        "question": "A group $(G, *)$ that also satisfies the commutative property for all pairs of elements is called an _______ group.",
        "accepted": [
          "abelian",
          "abelian group",
          "commutative"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An abelian group (named after mathematician Niels Henrik Abel) is any group where the binary operation is commutative: $a * b = b * a$ for all $a, b \\in G$."
      },
      {
        "id": "DM-M2-004",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Cyclic Groups",
        "question": "Which of the following elements are generators of the cyclic group $(\\mathbb{Z}_6, +_6)$?",
        "options": [
          "2 and 4",
          "1 and 5",
          "3 only",
          "0 only"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2023",
        "explanation": "In $(\\mathbb{Z}_n, +_n)$, an element $g$ is a generator if and only if $\\gcd(g, n) = 1$. The positive integers less than 6 and coprime to 6 are 1 and 5."
      },
      {
        "id": "DM-M2-005",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Cosets",
        "question": "The total number of distinct left (or right) cosets of a subgroup $H$ in a finite group $G$ is called the _______ of $H$ in $G$.",
        "accepted": [
          "index",
          "index of h in g",
          "index of h"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The index of $H$ in $G$, denoted by $[G : H]$, is defined as $|G| / |H|$, which precisely equals the number of distinct cosets of $H$ in $G$."
      },
      {
        "id": "DM-M2-006",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Normal Subgroups",
        "question": "A subgroup $H$ of a group $G$ is called a normal subgroup if for all $g \\in G$ and $h \\in H$:",
        "options": [
          "$g h g = h$",
          "$g h = h$",
          "$g^2 \\in H$",
          "$g h g^{-1} \\in H$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2022",
        "explanation": "A subgroup $H$ is normal ($H \\trianglelefteq G$) if and only if it is invariant under conjugation, meaning $g h g^{-1} \\in H$ for all $g \\in G$ and $h \\in H$."
      },
      {
        "id": "DM-M2-007",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Group Inverses",
        "question": "In any group $(G, *)$, the inverse of $(a * b)$ is equal to _______.",
        "accepted": [
          "b^-1 * a^-1",
          "b^(-1)*a^(-1)",
          "b' * a'",
          "inv(b)*inv(a)"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "By the socks-and-shoes reversal law of group inverses, $(a * b)^{-1} = b^{-1} * a^{-1}$."
      },
      {
        "id": "DM-M2-008",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Subgroup Test",
        "question": "A non-empty subset $H$ of a group $G$ is a subgroup if and only if for every pair of elements $a, b \\in H$:",
        "options": [
          "$a^{-1} * b^{-1} \\in G$",
          "$a * b \\in G$",
          "$a = b$",
          "$a * b^{-1} \\in H$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2024",
        "explanation": "The standard one-step subgroup criterion requires $a * b^{-1} \\in H$ for all $a, b \\in H$, automatically proving both closure and existence of inverses."
      },
      {
        "id": "DM-M2-009",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Prime Order",
        "question": "Every finite group of prime order $p$ is guaranteed to be:",
        "options": [
          "Infinite",
          "Without an identity element",
          "Non-abelian",
          "Cyclic and Abelian"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2023",
        "explanation": "By Lagrange's theorem, any group of prime order has no proper non-trivial subgroups, so every non-identity element generates the whole group. Every cyclic group is abelian."
      },
      {
        "id": "DM-M2-010",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Identity Uniqueness",
        "question": "In any mathematical group $(G, *)$, the identity element is always _______.",
        "accepted": [
          "unique",
          "single",
          "one"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "If $e_1$ and $e_2$ are both identities, then $e_1 = e_1 * e_2 = e_2$. Thus the identity element of any group is strictly unique."
      },
      {
        "id": "DM-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Pigeonhole Principle",
        "question": "If $k+1$ objects are distributed into $k$ boxes, then at least one box must contain at least how many objects?",
        "options": [
          "k",
          "k+1",
          "1",
          "2"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2024",
        "explanation": "The Pigeonhole Principle states that if $n$ items are placed into $k$ boxes and $n > k$, at least one box contains $\\ge \\lceil n/k \\rceil = 2$ items."
      },
      {
        "id": "DM-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Pigeonhole Application",
        "question": "In a group of 13 people, at least _______ people must share the same birth month.",
        "accepted": [
          "2",
          "two"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "With 12 months in a calendar year, 13 people placed into 12 month categories forces at least $\\lceil 13/12 \\rceil = 2$ people to share a month."
      },
      {
        "id": "DM-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Inclusion-Exclusion",
        "question": "For two finite sets $A$ and $B$, the cardinality $|A \\cup B|$ is given by:",
        "options": [
          "$|A| + |B| + |A \\cap B|$",
          "$|A| + |B| - |A \\cap B|$",
          "$|A| + |B|$",
          "$|A| \\times |B|$"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2022",
        "explanation": "The Principle of Inclusion-Exclusion corrects for double-counted intersection elements: $|A \\cup B| = |A| + |B| - |A \\cap B|$."
      },
      {
        "id": "DM-M2-014",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Recurrence Relations",
        "question": "What is the characteristic equation for the recurrence relation $a_n - 5a_{n-1} + 6a_{n-2} = 0$?",
        "options": [
          "$r - 5 = 0$",
          "$r^2 - 5r + 6 = 0$",
          "$r^2 - 6r + 5 = 0$",
          "$r^2 + 5r - 6 = 0$"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2023",
        "explanation": "Substituting $a_n = r^n$ gives $r^n - 5r^{n-1} + 6r^{n-2} = 0$. Dividing by $r^{n-2}$ yields $r^2 - 5r + 6 = 0$."
      },
      {
        "id": "DM-M2-015",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Characteristic Roots",
        "question": "The characteristic roots of $r^2 - 5r + 6 = 0$ are 2 and _______.",
        "accepted": [
          "3",
          "three"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Factoring $(r-2)(r-3) = 0$ gives roots $r_1 = 2$ and $r_2 = 3$."
      },
      {
        "id": "DM-M2-016",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Fibonacci Numbers",
        "question": "Given $F_0 = 0$, $F_1 = 1$, and $F_n = F_{n-1} + F_{n-2}$, what is the value of $F_6$?",
        "options": [
          "21",
          "13",
          "5",
          "8"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2024",
        "explanation": "The sequence values are: F0=0, F1=1, F2=1, F3=2, F4=3, F5=5, F6=8."
      },
      {
        "id": "DM-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Generating Functions",
        "question": "The ordinary generating function for the constant sequence $1, 1, 1, 1, \\dots$ is:",
        "options": [
          "$\\frac{1}{1 + x}$",
          "$e^x$",
          "$\\frac{1}{1 - x}$",
          "$\\frac{x}{1 - x}$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2023",
        "explanation": "The infinite geometric series $\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\dots = \\frac{1}{1-x}$ for $|x| < 1$."
      },
      {
        "id": "DM-M2-018",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Combinations",
        "question": "The number of combinations of $n$ distinct objects taken $r$ at a time is $C(n,r) = \\frac{n!}{r! \\cdot (_______)!}$.",
        "accepted": [
          "n-r",
          "n - r",
          "(n-r)"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The standard combination formula is $C(n,r) = \\frac{n!}{r!(n-r)!}$."
      },
      {
        "id": "DM-M2-019",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Circular Permutations",
        "question": "In how many ways can 5 distinct people sit around a circular table?",
        "options": [
          "60",
          "120",
          "12",
          "24"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2022",
        "explanation": "Circular permutations of $n$ distinct objects is $(n-1)!$. For 5 people, $(5-1)! = 4! = 24$ ways."
      },
      {
        "id": "DM-M2-020",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Derangements",
        "question": "A permutation of $n$ elements in which no element appears in its original position is called a _______.",
        "accepted": [
          "derangement",
          "derangements"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A derangement is a permutation with zero fixed points, denoted by $!n$ or $D_n$."
      },
      {
        "id": "DM-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Handshaking Theorem",
        "question": "The Handshaking Theorem states that in any undirected graph $G=(V, E)$, the sum of vertex degrees equals:",
        "options": [
          "$|E|$",
          "$2 \\times |E|$",
          "$|V| \\times |E|$",
          "$2 \\times |V|$"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2024",
        "explanation": "Each edge has two incident endpoints, so each edge contributes exactly 2 to the sum of degrees: $\\sum_{v \\in V} \\deg(v) = 2|E|$."
      },
      {
        "id": "DM-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Odd Degree Vertices",
        "question": "In any undirected graph, the number of vertices with an odd degree is always an _______ integer.",
        "accepted": [
          "even",
          "even number"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Since $\\sum \\deg(v) = 2|E|$ (an even number), the sum of degrees of odd-degree vertices must be even, forcing their count to be even."
      },
      {
        "id": "DM-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Euler Circuit",
        "question": "A connected undirected graph contains an Euler circuit if and only if:",
        "options": [
          "Every vertex has an even degree",
          "It is a complete graph",
          "Exactly two vertices have odd degree",
          "It has no cycles"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2023",
        "explanation": "Euler's theorem guarantees a closed trail traversing every edge exactly once if and only if all vertices have an even degree."
      },
      {
        "id": "DM-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Euler Path",
        "question": "A connected graph has an Euler path (not a circuit) if and only if it has exactly _______ vertices of odd degree.",
        "accepted": [
          "2",
          "two"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An open Euler path must start at one odd-degree vertex and end at the second odd-degree vertex."
      },
      {
        "id": "DM-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Hamiltonian Cycle",
        "question": "A Hamiltonian cycle in a graph is a closed loop that visits:",
        "options": [
          "All odd degree vertices only",
          "Every vertex exactly once (except start/end)",
          "Every face of the graph",
          "Every edge exactly once"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2024",
        "explanation": "A Hamiltonian cycle visits every vertex of the graph exactly once, unlike an Euler circuit which traverses every edge."
      },
      {
        "id": "DM-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Planar Graphs",
        "question": "For any connected planar graph with $V$ vertices, $E$ edges, and $R$ regions (faces), Euler's formula is:",
        "options": [
          "$V - E + R = 2$",
          "$V + E + R = 2$",
          "$V + E - R = 2$",
          "$V - E - R = 2$"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2023",
        "explanation": "Euler's formula for connected planar graphs states $V - E + R = 2$."
      },
      {
        "id": "DM-M2-027",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Planar Graph Edges",
        "question": "A simple connected planar graph with $V \\ge 3$ vertices satisfies the inequality $E \\le 3V - _______$.",
        "accepted": [
          "6",
          "six"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Since every region has at least 3 boundary edges, $2E \\ge 3R$. Combining this with $V - E + R = 2$ gives $E \\le 3V - 6$."
      },
      {
        "id": "DM-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Complete Graphs",
        "question": "How many edges are present in a complete graph $K_n$ on $n$ vertices?",
        "options": [
          "$2n - 1$",
          "$n^2$",
          "$\\frac{n(n-1)}{2}$",
          "$n(n-1)$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2022",
        "explanation": "In $K_n$, every pair of distinct vertices has an edge, giving $C(n,2) = \\frac{n(n-1)}{2}$ edges."
      },
      {
        "id": "DM-M2-029",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Bipartite Graphs",
        "question": "A graph $G$ is bipartite if and only if it contains no cycles of:",
        "options": [
          "Length 4",
          "Odd length",
          "Length greater than 3",
          "Even length"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-2024",
        "explanation": "König's theorem states that a graph is bipartite (2-colorable) if and only if it contains no odd-length cycles."
      },
      {
        "id": "DM-M2-030",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Graph Coloring",
        "question": "The minimal number of colors needed to color the vertices of a graph so that no two adjacent vertices share a color is the _______ number.",
        "accepted": [
          "chromatic",
          "chromatic number"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The chromatic number, denoted $\\chi(G)$, is the minimal number of colors required for a proper vertex coloring."
      },
      {
        "id": "DM-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Four Color Theorem",
        "question": "According to the Four Color Theorem, what is the maximum chromatic number for any planar graph?",
        "options": [
          "3",
          "5",
          "6",
          "4"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-2023",
        "explanation": "The Four Color Theorem proves that any planar graph can be colored using at most 4 colors ($\\\\chi(G) \\le 4$)."
      },
      {
        "id": "DM-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Tree Edges",
        "question": "A tree with $n$ vertices always contains exactly _______ edges.",
        "accepted": [
          "n-1",
          "n - 1",
          "(n-1)"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A tree is a connected graph with no cycles, which always contains exactly $n - 1$ edges for $n$ vertices."
      }
    ],
    "COA": [
      {
        "id": "COA-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "2's Complement Range",
        "question": "What is the numerical range of an $n$-bit 2's complement signed integer?",
        "options": [
          "$0$ to $2^n - 1$",
          "$-2^n$ to $2^n - 1$",
          "$-2^{n-1}$ to $2^{n-1} - 1$",
          "$-(2^{n-1}-1)$ to $2^{n-1}-1$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-SEM-2022",
        "explanation": "An $n$-bit 2's complement integer has range $[-2^{n-1}, 2^{n-1}-1]$ because 0 is represented with sign bit 0."
      },
      {
        "id": "COA-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Booth's Algorithm",
        "question": "In Booth's signed multiplication algorithm, when the bit pair $(Q_0, Q_{-1})$ is $(1, 0)$, register $A$ performs $A \\leftarrow A$ _______ $M$.",
        "accepted": [
          "-",
          "minus",
          "- m",
          "subtraction"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-COA-SEM-2023",
        "explanation": "In Booth's algorithm: $(1, 0) \\implies A \\leftarrow A - M$; $(0, 1) \\implies A \\leftarrow A + M$; $(0,0)$ and $(1,1) \\implies$ shift only."
      },
      {
        "id": "COA-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Hardwired vs Microprogrammed",
        "question": "Which of the following is an advantage of Hardwired Control units over Microprogrammed Control units?",
        "options": [
          "Faster instruction execution speed",
          "Lower hardware chip layout complexity",
          "Ease of modifying instruction set",
          "Lower cost for complex CISC architectures"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-SEM-2024",
        "explanation": "Hardwired control uses combinational logic gates and executes instructions at maximum silicon speed (RISC), whereas microprogrammed control uses a control memory lookup."
      },
      {
        "id": "COA-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Control Address Register",
        "question": "In a microprogrammed control unit, the address of the next microinstruction is held in the Control _______ Register (CAR).",
        "accepted": [
          "address",
          "car"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Control Address Register (CAR) specifies the address in Control ROM containing the microinstruction to be executed."
      },
      {
        "id": "COA-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Division Algorithms",
        "question": "In the restoring division algorithm, what operation is performed if the trial subtraction $(A - M)$ yields a negative remainder?",
        "options": [
          "$A$ is left as negative and $Q_0$ is set to 1",
          "$M$ is shifted left",
          "The dividend is cleared",
          "$A$ is restored by adding $M$ back and $Q_0$ is set to 0"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2023",
        "explanation": "In restoring division, if the remainder becomes negative, the partial remainder must be restored by adding divisor $M$ back ($A \\leftarrow A + M$) and setting quotient bit $Q_0 = 0$."
      },
      {
        "id": "COA-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Non-Restoring Division",
        "question": "In non-restoring division, if register $A$ is negative, the next cycle performs an _______ operation instead of subtraction.",
        "accepted": [
          "addition",
          "add",
          "a + m"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Non-restoring division avoids restoring additions by adding $M$ in the subsequent cycle if the current partial remainder $A$ is negative ($A < 0$)."
      },
      {
        "id": "COA-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "IEEE 754 Format",
        "question": "In the standard IEEE 754 32-bit single-precision floating-point format, how many bits are allocated for sign, exponent, and mantissa (fraction)?",
        "options": [
          "1 bit sign, 7 bits exponent, 24 bits fraction",
          "1 bit sign, 11 bits exponent, 20 bits fraction",
          "2 bits sign, 8 bits exponent, 22 bits fraction",
          "1 bit sign, 8 bits exponent, 23 bits fraction"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2024",
        "explanation": "IEEE 754 single-precision (32-bit) uses 1 bit for sign, 8 bits for biased exponent, and 23 bits for normalized mantissa."
      },
      {
        "id": "COA-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "IEEE 754 Bias",
        "question": "The exponent bias added to the true exponent in IEEE 754 single-precision 32-bit format is _______.",
        "accepted": [
          "127",
          "+127"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2023",
        "explanation": "The 8-bit exponent field uses an excess-127 bias, so an actual exponent $E$ is stored as $E + 127$."
      },
      {
        "id": "COA-M2-005",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Floating-Point Normalization",
        "question": "In normalized IEEE 754 representation, what is the implicit leading bit of the mantissa?",
        "options": [
          "1",
          "0",
          "Sign bit",
          "Parity bit"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Normalized binary floating point numbers have a hidden/implicit 1 before the binary point ($1.F$), saving one bit of storage precision."
      },
      {
        "id": "COA-M2-006",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "BCD Adder",
        "question": "When the sum of two BCD digits exceeds 9, a binary correction factor of _______ (binary 0110) must be added.",
        "accepted": [
          "6",
          "six",
          "0110"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2022",
        "explanation": "Since BCD codes 0–9 and skips invalid states 10–15, adding 6 ($0110_2$) skips the 6 invalid codes and produces the correct carry."
      },
      {
        "id": "COA-M2-007",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Floating-Point Multiplication",
        "question": "When multiplying two floating-point numbers in IEEE 754, what is done with the exponents?",
        "options": [
          "Exponents remain unchanged",
          "Exponents are added and bias is subtracted",
          "Exponents are subtracted",
          "Exponents are multiplied"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Since stored exponents already contain bias ($E_1 + B$ and $E_2 + B$), adding them gives $E_1 + E_2 + 2B$, so bias $B$ must be subtracted once."
      },
      {
        "id": "COA-M2-008",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Double Precision",
        "question": "The total bit width of an IEEE 754 double-precision floating point number is _______ bits.",
        "accepted": [
          "64",
          "64 bits"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Double-precision uses 64 bits: 1 sign bit, 11 exponent bits (bias 1023), and 52 fraction bits."
      },
      {
        "id": "COA-M2-009",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Floating-Point Zero",
        "question": "In IEEE 754 standard, zero is represented when:",
        "options": [
          "All 32 bits are 1",
          "Exponent is 0 and fraction is 0",
          "Fraction is 1 and exponent is 0",
          "Exponent is 255 and fraction is 0"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "When both the biased exponent and fraction fields are all zeros, the number represents $\\pm 0$ depending on the sign bit."
      },
      {
        "id": "COA-M2-010",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Arithmetic Overflow",
        "question": "In 2's complement addition, an overflow occurs if two operands with the same sign produce a result with the _______ sign.",
        "accepted": [
          "opposite",
          "different",
          "wrong",
          "inverted"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Overflow occurs when adding two positive numbers yields a negative result, or adding two negative numbers yields a positive result."
      },
      {
        "id": "COA-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Memory Hierarchy",
        "question": "Which of the following memories is fastest in access time but has the smallest storage capacity?",
        "options": [
          "CPU Registers",
          "Level 1 Cache",
          "Solid State Drive (SSD)",
          "Main Memory (RAM)"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2024",
        "explanation": "CPU registers are located directly inside the processor core and operate at clock speed, making them the fastest and most expensive per bit."
      },
      {
        "id": "COA-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Hit Ratio",
        "question": "If 90 memory references hit in cache out of 100 total references, the cache hit ratio is _______ %.",
        "accepted": [
          "90",
          "90%",
          "0.9"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Hit ratio $h = \\frac{\\text{Hits}}{\\text{Total Accesses}} = \\frac{90}{100} = 0.90$ (90%)."
      },
      {
        "id": "COA-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cache Mapping",
        "question": "In direct-mapped cache, a memory block $j$ is mapped to cache line $i$ using the formula:",
        "options": [
          "$i = j \\pmod m$, where $m$ is the number of cache lines",
          "$i = j / m$",
          "$i = j \\times m$",
          "$i = j + m$"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2023",
        "explanation": "Direct mapping uniquely maps main memory block $j$ to cache block $i = j \\pmod m$, where $m$ is the total number of lines in cache."
      },
      {
        "id": "COA-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Associative Cache",
        "question": "In a fully _______ cache, any memory block can be placed in any available line of the cache.",
        "accepted": [
          "associative",
          "fully associative"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Fully associative cache eliminates conflict misses because any main memory block can reside in any cache line."
      },
      {
        "id": "COA-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cache Write Policies",
        "question": "Which cache write policy writes updated data simultaneously to both the cache and main memory?",
        "options": [
          "Write-Through",
          "Write-Back",
          "No-Write Allocate",
          "Write-Allocate"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2024",
        "explanation": "Write-through immediately updates both cache and main memory on a write hit, guaranteeing consistency at the expense of memory bus traffic."
      },
      {
        "id": "COA-M2-016",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Dirty Bit",
        "question": "In write-back cache, a _______ bit is set to 1 whenever a cache block is modified.",
        "accepted": [
          "dirty",
          "dirty bit",
          "modified",
          "modified bit"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The dirty (modified) bit indicates that the cache block has been written to and must be flushed to main memory when evicted."
      },
      {
        "id": "COA-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "SRAM vs DRAM",
        "question": "Why is Dynamic RAM (DRAM) slower than Static RAM (SRAM)?",
        "options": [
          "DRAM is non-volatile",
          "DRAM uses 6 transistors per cell",
          "DRAM cannot be multiplexed",
          "DRAM stores charge on capacitors and requires periodic refreshing"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2022",
        "explanation": "DRAM cells store bits as charge on tiny capacitors that leak and require periodic refresh cycles, whereas SRAM uses bistable flip-flop latches."
      },
      {
        "id": "COA-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Virtual Memory",
        "question": "Virtual memory gives the programmer the illusion of a main memory that is:",
        "options": [
          "Completely immune to address errors",
          "Much larger than actual physical memory",
          "Non-volatile like magnetic tape",
          "Faster than CPU registers"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2023",
        "explanation": "Virtual memory maps large virtual address spaces onto smaller physical RAM by swapping pages to and from secondary storage."
      },
      {
        "id": "COA-M2-019",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "TLB",
        "question": "The special high-speed hardware cache used to translate virtual page numbers to physical frame numbers is called the _______.",
        "accepted": [
          "tlb",
          "translation lookaside buffer"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The Translation Lookaside Buffer (TLB) caches recent page table translations, avoiding two memory accesses per virtual reference."
      },
      {
        "id": "COA-M2-020",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Page Fault",
        "question": "A page fault exception is generated by the MMU when:",
        "options": [
          "The CPU executes an invalid opcode",
          "A cache line is evicted",
          "The referenced page is not currently present in physical RAM",
          "Virtual memory is full"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2024",
        "explanation": "A page fault occurs when a program attempts to access a page marked invalid in the page table (not loaded in physical memory)."
      },
      {
        "id": "COA-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA Transfer",
        "question": "Direct Memory Access (DMA) allows high-speed I/O devices to transfer data directly to/from memory without:",
        "options": [
          "The system bus",
          "Any memory address register",
          "A clock signal",
          "Continuous CPU involvement"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2023",
        "explanation": "DMA offloads block data transfers from the CPU, transferring data directly between memory and peripherals under DMA controller supervision."
      },
      {
        "id": "COA-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA Stealing",
        "question": "In cycle _______ mode, the DMA controller temporarily takes control of the memory bus for one bus cycle at a time.",
        "accepted": [
          "stealing",
          "cycle stealing"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In cycle stealing, the DMA controller takes the system bus for one bus cycle to transfer one byte/word, then releases it back to the CPU."
      },
      {
        "id": "COA-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Interrupts",
        "question": "In vectored interrupts, how does the CPU determine the address of the Interrupt Service Routine (ISR)?",
        "options": [
          "The address is hardcoded at location 0",
          "The interrupting device supplies a vector address on the data bus",
          "The CPU polls every peripheral in sequence",
          "The OS searches the disk"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2024",
        "explanation": "In vectored interrupt systems, the peripheral hardware provides an interrupt vector that directly indexes the interrupt vector table."
      },
      {
        "id": "COA-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA Mode",
        "question": "The DMA transfer mode where an entire block of data is transferred continuously before releasing the bus is called _______ mode.",
        "accepted": [
          "burst",
          "burst mode",
          "block"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In burst (block) transfer mode, the DMA controller holds the bus until the entire block of bytes has been transferred."
      },
      {
        "id": "COA-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Instruction Pipelining",
        "question": "In an ideal $k$-stage instruction pipeline with cycle time $\\tau$, what is the speedup factor for $n$ instructions when $n$ is very large?",
        "options": [
          "$k \\times n$",
          "$n / k$",
          "$k$",
          "$k / 2$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2023",
        "explanation": "The maximum theoretical speedup of a $k$-stage pipeline over a non-pipelined processor for large $n$ approaches the number of stages $k$."
      },
      {
        "id": "COA-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Pipeline Hazards",
        "question": "A data hazard (RAW - Read After Write) in a pipeline occurs when:",
        "options": [
          "A branch instruction changes program counter",
          "A cache miss occurs",
          "An instruction depends on the result of a previous instruction still in the pipeline",
          "Two instructions need the same hardware resource simultaneously"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2024",
        "explanation": "Data hazards occur when an instruction attempts to read a register or memory location before a preceding instruction has written its result."
      },
      {
        "id": "COA-M2-027",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Branch Hazards",
        "question": "Control hazards in an instruction pipeline are caused by conditional _______ instructions.",
        "accepted": [
          "branch",
          "branching",
          "jump"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Control (branch) hazards occur when the pipeline cannot determine the next instruction address until a conditional branch evaluates."
      },
      {
        "id": "COA-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Operand Forwarding",
        "question": "Which hardware optimization resolves data hazards without stalling the pipeline?",
        "options": [
          "Dynamic RAM refreshing",
          "Instruction cache prefetching",
          "Operand Forwarding (Bypassing)",
          "Branch target buffers"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2022",
        "explanation": "Operand forwarding (data bypassing) routes the output of the ALU directly back to the ALU input for the next instruction, eliminating stall bubbles."
      },
      {
        "id": "COA-M2-029",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Structural Hazards",
        "question": "When two instructions attempt to access the same physical resource (such as a single memory port) at the same time, a _______ hazard occurs.",
        "accepted": [
          "structural",
          "structural hazard",
          "resource"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Structural hazards arise from hardware resource conflicts when the processor lacks sufficient functional units to execute all overlapping stages."
      },
      {
        "id": "COA-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Programmed I/O",
        "question": "The primary disadvantage of Programmed I/O is that:",
        "options": [
          "The CPU wastes clock cycles in a busy-waiting polling loop",
          "It cannot transfer bytes",
          "It requires specialized DMA controllers",
          "It causes pipeline structural hazards"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-2023",
        "explanation": "In Programmed I/O, the CPU is trapped in a tight loop repeatedly polling the device status register until the device is ready."
      },
      {
        "id": "COA-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Daisy Chaining",
        "question": "In interrupt priority management, daisy chaining is a hardware technique that establishes priority through:",
        "options": [
          "Time-slice multiplexing",
          "Independent interrupt lines for each device",
          "Serial connection of devices in priority order",
          "Software polling"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-2024",
        "explanation": "Daisy chaining connects the interrupt acknowledge signal in series from the highest priority device to lowest priority device."
      },
      {
        "id": "COA-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Pipeline Efficiency",
        "question": "The ratio of actual speedup achieved by a pipeline to the number of stages $k$ is called pipeline _______.",
        "accepted": [
          "efficiency",
          "pipeline efficiency"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Pipeline efficiency $\\eta = \\frac{\\text{Speedup}}{k}$ measures the proportion of time that stages are actively doing useful work."
      }
    ],
    "OOPJ": [
      {
        "id": "OOPJ-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "JVM Bytecode",
        "question": "What is Java bytecode and how is it executed?",
        "options": [
          "Encrypted source text",
          "Intermediate machine-independent instruction set executed by the Java Virtual Machine (JVM)",
          "Native x86 machine instructions",
          "Assembly source code compiled by C++ linker"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-SEM-2022",
        "explanation": "Java javac compiles source code (.java) into platform-independent bytecode (.class), which any platform JVM interprets or JIT-compiles."
      },
      {
        "id": "OOPJ-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Polymorphism Types",
        "question": "Method overloading in Java is an example of compile-time (or _______) polymorphism.",
        "accepted": [
          "static",
          "compile-time"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-SEM-2023",
        "explanation": "Method overloading resolves method binding at compile time (static polymorphism), while method overriding resolves dynamically at runtime."
      },
      {
        "id": "OOPJ-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Interfaces & Multiple Inheritance",
        "question": "Why does Java support multiple inheritance of interfaces but not multiple inheritance of classes?",
        "options": [
          "To prevent the Diamond Problem of ambiguous state and method implementations",
          "Java does support multiple class inheritance",
          "Because interfaces cannot declare constants",
          "Because interfaces are slower to allocate"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-SEM-2024",
        "explanation": "Multiple class inheritance creates ambiguity (the Diamond Problem) regarding which superclass field or method is inherited. Interfaces avoid this by separating contract from implementation."
      },
      {
        "id": "OOPJ-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Super Keyword",
        "question": "To explicitly invoke an immediate superclass constructor, a subclass constructor must call _______() as its first statement.",
        "accepted": [
          "super",
          "super()"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-SEM-2022",
        "explanation": "The super() call must be the very first statement in a constructor to initialize superclass state properly."
      },
      {
        "id": "OOPJ-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Creation",
        "question": "Which two mechanisms can be used in Java to define and create a new thread of execution?",
        "options": [
          "Implementing the Callable interface or extending the Process class",
          "Extending the Thread class or implementing the Runnable interface",
          "Using the synchronized keyword or using volatile variables",
          "Extending the Applet class or implementing Serializable"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "In Java, a thread can be created either by subclassing java.lang.Thread and overriding run(), or by implementing java.lang.Runnable and passing it to a Thread instance."
      },
      {
        "id": "OOPJ-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Execution Method",
        "question": "To start a new thread and cause its run() method to execute in a separate call stack, we invoke the _______() method.",
        "accepted": [
          "start",
          "start()"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "Calling start() allocates a new native call stack and transitions the thread to the Runnable state, after which the JVM invokes its run() method."
      },
      {
        "id": "OOPJ-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Lifecycle States",
        "question": "Which of the following represents valid states in the Java Thread lifecycle (Thread.State enum)?",
        "options": [
          "STARTING, RUNNING, SLEEPING, DEAD",
          "NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED",
          "READY, EXECUTING, SUSPENDED, STOPPED",
          "INIT, ACTIVE, IDLE, DESTROYED"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "Thread.State enum defines six distinct lifecycle states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, and TERMINATED."
      },
      {
        "id": "OOPJ-M2-004",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Synchronization",
        "question": "What happens when a thread enters a synchronized instance method of an object?",
        "options": [
          "It prevents all other threads from accessing local variables",
          "It acquires the lock on the entire class object",
          "It terminates all lower-priority threads running in parallel",
          "It acquires the intrinsic lock (monitor) of that object instance"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "Every Java object has an intrinsic monitor lock. A thread entering a synchronized instance method must acquire this monitor lock on 'this' instance before executing."
      },
      {
        "id": "OOPJ-M2-005",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Inter-thread Communication",
        "question": "The inter-thread communication methods wait(), notify(), and notifyAll() are defined in the java.lang._______ class.",
        "accepted": [
          "object",
          "java.lang.object"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "Because monitor locks are associated with individual objects rather than threads, wait(), notify(), and notifyAll() are member methods of the root java.lang.Object class."
      },
      {
        "id": "OOPJ-M2-006",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "IllegalMonitorStateException",
        "question": "If a thread calls wait() or notify() on an object without holding that object's monitor lock, what runtime exception is thrown?",
        "options": [
          "InterruptedException",
          "IllegalMonitorStateException",
          "IllegalThreadStateException",
          "NullPointerException"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Calling wait(), notify(), or notifyAll() outside a synchronized context synchronized on that specific object throws java.lang.IllegalMonitorStateException at runtime."
      },
      {
        "id": "OOPJ-M2-007",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Priorities",
        "question": "In Java, thread priorities range from Thread.MIN_PRIORITY (1) to Thread.MAX_PRIORITY (_______).",
        "accepted": [
          "10",
          "ten"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "Java assigns thread priorities on an integer scale from 1 (MIN_PRIORITY) through 5 (NORM_PRIORITY) up to 10 (MAX_PRIORITY)."
      },
      {
        "id": "OOPJ-M2-008",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread join()",
        "question": "What is the purpose of invoking threadA.join() from within threadB?",
        "options": [
          "ThreadB pauses execution until ThreadA completes execution",
          "ThreadA is assigned the highest priority",
          "ThreadA immediately terminates ThreadB",
          "Both threads merge their call stacks and run concurrently"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "The join() method allows one thread to wait for the completion of another. Calling threadA.join() puts the calling thread into WAITING state until threadA dies."
      },
      {
        "id": "OOPJ-M2-009",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Deadlock Condition",
        "question": "A situation where two or more threads are blocked forever, each waiting for a lock held by the other, is called _______.",
        "accepted": [
          "deadlock",
          "a deadlock"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Deadlock occurs when concurrent threads hold mutually exclusive resources while waiting circular-fashion for locks held by each other."
      },
      {
        "id": "OOPJ-M2-010",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Volatile Keyword",
        "question": "What guarantee does the 'volatile' keyword provide for a variable in Java multithreading?",
        "options": [
          "Ensures the variable cannot be serialized",
          "Guarantees visibility of changes across threads by reading/writing directly from main memory",
          "Guarantees mutual exclusion and atomic compound operations (like count++)",
          "Prevents the variable from being garbage collected"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "The volatile modifier ensures memory visibility: reads and writes go directly to main memory rather than thread-local CPU caches, though it does not provide atomicity for compound updates."
      },
      {
        "id": "OOPJ-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Byte Streams vs Character Streams",
        "question": "Which superclasses form the root of all byte-oriented input and output streams in Java respectively?",
        "options": [
          "DataInputStream and DataOutputStream",
          "InputStream and OutputStream",
          "FileInputStream and FileOutputStream",
          "Reader and Writer"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "In java.io, byte streams are derived from abstract classes InputStream and OutputStream (handling 8-bit bytes), while character streams derive from Reader and Writer (16-bit Unicode)."
      },
      {
        "id": "OOPJ-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Buffered Reading",
        "question": "To read text efficiently line-by-line from a character stream, we wrap a FileReader inside a _______Reader.",
        "accepted": [
          "buffered",
          "bufferedreader"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "BufferedReader buffers characters for efficient reading and provides the convenient readLine() method to read complete lines of text."
      },
      {
        "id": "OOPJ-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Java Serialization",
        "question": "Which interface must a Java class implement to permit its instances to be serialized using ObjectOutputStream?",
        "options": [
          "java.io.External",
          "java.lang.Comparable",
          "java.io.Serializable",
          "java.io.Clonable"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "java.io.Serializable is a marker interface (with no methods) that indicates a class can be flattened into a byte stream via ObjectOutputStream."
      },
      {
        "id": "OOPJ-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Serialization Transient Modifier",
        "question": "To prevent a specific field of an object from being serialized, we declare it with the _______ keyword.",
        "accepted": [
          "transient"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "The transient modifier signals to Java serialization mechanism that the field should not be persisted; upon deserialization, transient fields take their default values."
      },
      {
        "id": "OOPJ-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Try-With-Resources",
        "question": "In Java 7+ try-with-resources statement, what interface must the resource object implement so that it is closed automatically?",
        "options": [
          "java.lang.Flushable",
          "java.lang.AutoCloseable",
          "java.lang.Disposable",
          "java.io.CloseableInterface"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Any resource object implementing java.lang.AutoCloseable (or java.io.Closeable) can be opened in a try(...) header and will have its close() invoked automatically upon exit."
      },
      {
        "id": "OOPJ-M2-016",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Generics Type Safety",
        "question": "What is the primary motivation for introducing Generics in Java 5?",
        "options": [
          "Allowing primitive types as template parameters directly",
          "Increasing runtime speed through multiple inheritance",
          "Enabling automatic memory management for primitives",
          "Compile-time type checking and eliminating explicit type casts"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "Generics provide compile-time type safety by detecting type mismatches at compilation, eliminating the need for error-prone explicit runtime type casts."
      },
      {
        "id": "OOPJ-M2-017",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Generics Type Erasure",
        "question": "The process by which the Java compiler removes generic type parameters and substitutes raw types or bounds in bytecode is called type _______.",
        "accepted": [
          "erasure",
          "type erasure"
        ],
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Type erasure removes generic type arguments at compile time to maintain binary compatibility with older JVM versions and bytecode."
      },
      {
        "id": "OOPJ-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Bounded Type Parameters",
        "question": "Which syntax correctly defines an upper-bounded generic method accepting any subclass of Number in Java?",
        "options": [
          "public <T : Number> void process(List<T> list)",
          "public <T implements Number> void process(List<T> list)",
          "public <T super Number> void process(List<T> list)",
          "public <T extends Number> void process(List<T> list)"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "Upper bounds in generics are specified using the 'extends' keyword (<T extends Number>), which restricts T to Number or any of its subclasses (Integer, Double, etc.)."
      },
      {
        "id": "OOPJ-M2-019",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Wildcards in Generics",
        "question": "In Java generics, the unbound wildcard symbol used to represent an unknown type is _______.",
        "accepted": [
          "?",
          "question mark"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The wildcard character '?' represents an unknown type (e.g. List<?> can refer to a list of any type of object)."
      },
      {
        "id": "OOPJ-M2-020",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "RandomAccessFile",
        "question": "Which java.io class allows both reading and writing at arbitrary positions within a file using seek()?",
        "options": [
          "RandomAccessFile",
          "DataOutputStream",
          "SequenceInputStream",
          "FileChannelStream"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "RandomAccessFile implements DataInput and DataOutput and supports direct seeking to any byte offset using the seek(long position) method."
      },
      {
        "id": "OOPJ-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Collections Hierarchy",
        "question": "Which of the following interfaces is NOT a sub-interface of java.util.Collection?",
        "options": [
          "java.util.List",
          "java.util.Map",
          "java.util.Set",
          "java.util.Queue"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "Map represents key-value pairs and does not extend java.util.Collection; List, Set, and Queue are the three primary direct sub-interfaces of Collection."
      },
      {
        "id": "OOPJ-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Set Characteristics",
        "question": "A Set in the Java Collections Framework is a collection that cannot contain _______ elements.",
        "accepted": [
          "duplicate",
          "duplicates",
          "duplicate elements"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "By mathematical definition, a java.util.Set models a mathematical set abstraction and does not allow duplicate elements (at most one null)."
      },
      {
        "id": "OOPJ-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ArrayList vs LinkedList",
        "question": "Why is an ArrayList generally preferred over a LinkedList for random read access operations?",
        "options": [
          "LinkedList does not implement the List interface",
          "ArrayList takes $O(1)$ time to insert at the beginning",
          "LinkedList uses contiguous memory blocks",
          "ArrayList provides $O(1)$ constant-time indexed lookup via underlying array"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "ArrayList is backed by a dynamic array, so get(i) performs direct pointer offset calculation in O(1) time, whereas LinkedList requires O(n) sequential node traversal."
      },
      {
        "id": "OOPJ-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Sorting Collections",
        "question": "To define natural ordering for objects of a class, the class must implement the java.lang._______ interface.",
        "accepted": [
          "comparable"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "Implementing Comparable<T> requires overriding compareTo(T o), which establishes the default natural sorting order used by Collections.sort()."
      },
      {
        "id": "OOPJ-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Comparable vs Comparator",
        "question": "What is the key difference between Comparable and Comparator interfaces?",
        "options": [
          "Comparator modifies the original class bytecode",
          "Comparable defines natural order inside the class via compareTo(), while Comparator provides custom order outside via compare()",
          "Comparable is in java.util while Comparator is in java.lang",
          "Comparable cannot be used with TreeSet"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "Comparable<T> (java.lang) imparts natural ordering inside the class definition (compareTo), whereas Comparator<T> (java.util) allows multiple separate custom comparison strategies (compare)."
      },
      {
        "id": "OOPJ-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "HashMap Internal Hashing",
        "question": "In Java 8, when the number of colliding elements in a single HashMap bucket exceeds the TREEIFY_THRESHOLD (8), the linked list is converted into a:",
        "options": [
          "Binary Search Tree without balance",
          "Skip List",
          "Balanced Red-Black Tree",
          "Min-Heap"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Java 8 improves HashMap worst-case collision performance from O(n) to O(log n) by transforming chained lists exceeding 8 entries into balanced red-black trees."
      },
      {
        "id": "OOPJ-M2-027",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "HashMap Keys",
        "question": "For HashMap to work correctly, any custom class used as a key must properly override both equals() and _______().",
        "accepted": [
          "hashcode",
          "hashcode()"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "The contract between equals() and hashCode() requires that if two objects are equal according to equals(), they must return identical hashCode() values."
      },
      {
        "id": "OOPJ-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Delegation Event Model",
        "question": "In Java's Delegation Event Model, which component generates the event when a user interacts with a GUI control?",
        "options": [
          "Event Dispatch Thread",
          "Event Source",
          "Event Listener",
          "Event Adapter"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2022",
        "explanation": "In the Delegation Event Model, the Event Source (e.g. JButton) detects the user interaction, creates an Event object, and delegates it to registered Event Listeners."
      },
      {
        "id": "OOPJ-M2-029",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "ActionListener Method",
        "question": "The ActionListener interface contains a single callback method named _______(ActionEvent e).",
        "accepted": [
          "actionperformed",
          "actionperformed()"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-2024",
        "explanation": "ActionListener is a functional interface containing only void actionPerformed(ActionEvent e), triggered whenever a button is clicked or menu item is selected."
      },
      {
        "id": "OOPJ-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Event Adapters",
        "question": "What is the primary benefit of using Event Adapter classes (such as MouseAdapter or WindowAdapter)?",
        "options": [
          "They run event callbacks in a separate daemon thread",
          "They provide empty default implementations so you override only the methods you need",
          "They increase rendering speed of GUI components",
          "They convert AWT events to Swing events automatically"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Adapter classes implement listener interfaces with blank method bodies, sparing developers from implementing unused methods of multi-method listener interfaces."
      },
      {
        "id": "OOPJ-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Swing vs AWT",
        "question": "Why are Swing components referred to as 'lightweight' compared to AWT components?",
        "options": [
          "Swing does not support mouse events",
          "Swing components consume zero RAM memory",
          "Swing components only run in applet browsers",
          "Swing components are written purely in Java and drawn without native OS peer windows"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-OOPJ-2023",
        "explanation": "AWT components are heavyweight because they tie directly to underlying OS GUI widgets (peers). Swing components are lightweight, painted entirely in Java on top of top-level containers."
      },
      {
        "id": "OOPJ-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Default Layout",
        "question": "The default layout manager for a standard JFrame's content pane is _______Layout.",
        "accepted": [
          "border",
          "borderlayout"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "JFrame's content pane defaults to BorderLayout (dividing regions into North, South, East, West, and Center), while JPanel defaults to FlowLayout."
      }
    ],
    "DBMS": [
      {
        "id": "DBMS-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Three-Schema Architecture",
        "question": "Which level of the ANSI-SPARC three-schema architecture describes what data is stored in the database and the relationships among them?",
        "options": [
          "Physical (Internal) Schema",
          "External (View) Schema",
          "Storage Engine Schema",
          "Conceptual (Logical) Schema"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-SEM-2022",
        "explanation": "The conceptual level describes the entire database structure, entities, relationships, constraints, and security rules without physical disk storage details."
      },
      {
        "id": "DBMS-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Physical Data Independence",
        "question": "The capacity to change the internal physical storage schema without having to alter the conceptual schema is called physical data _______.",
        "accepted": [
          "independence"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-SEM-2023",
        "explanation": "Physical data independence insulates the conceptual design from changes in file organizations, disk indexing, and physical storage hardware."
      },
      {
        "id": "DBMS-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Relational Algebra Operations",
        "question": "Which relational algebra operation selects rows that satisfy a specified predicate condition?",
        "options": [
          "Cartesian Product ($\\times$)",
          "Intersection ($\\cap$)",
          "Projection ($\\pi$)",
          "Selection ($\\sigma$)"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-SEM-2024",
        "explanation": "Selection ($\\sigma_p(R)$) filters rows meeting condition $p$. Projection ($\\pi$) filters columns."
      },
      {
        "id": "DBMS-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Referential Integrity",
        "question": "A foreign key in a child table enforces referential integrity by pointing to a primary or candidate key in the _______ table.",
        "accepted": [
          "parent",
          "referenced"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-SEM-2022",
        "explanation": "Referential integrity guarantees that a foreign key value must either exist in the referenced parent table or be null."
      },
      {
        "id": "DBMS-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "First Normal Form (1NF)",
        "question": "A relation is in First Normal Form (1NF) if and only if:",
        "options": [
          "Every non-key attribute is fully functionally dependent on the primary key",
          "Every determinant is a super key",
          "All attribute values are atomic and non-divisible",
          "There are no transitive dependencies"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "First Normal Form requires that every attribute domain contains only atomic (indivisible) scalar values and each tuple has a single value for each attribute."
      },
      {
        "id": "DBMS-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Second Normal Form (2NF)",
        "question": "A relation is in 2NF if it is in 1NF and contains no _______ functional dependencies.",
        "accepted": [
          "partial",
          "partial functional dependencies",
          "partial dependencies"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "2NF eliminates partial dependencies where a non-prime attribute depends on a proper subset of any candidate key."
      },
      {
        "id": "DBMS-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Third Normal Form (3NF)",
        "question": "For a non-trivial functional dependency $X \\rightarrow Y$ to hold in 3NF, which condition must be met?",
        "options": [
          "$X$ is a superkey OR $Y$ is a prime attribute",
          "$Y$ must be a foreign key",
          "$X$ must be a single attribute",
          "$X$ must be a candidate key AND $Y$ must be a prime attribute"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "In 3NF, for every non-trivial FD $X \\rightarrow Y$, either $X$ is a superkey or each attribute in $Y - X$ is a prime attribute (part of some candidate key)."
      },
      {
        "id": "DBMS-M2-004",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Boyce-Codd Normal Form (BCNF)",
        "question": "How does Boyce-Codd Normal Form (BCNF) differ from 3NF?",
        "options": [
          "BCNF handles multi-valued dependencies",
          "BCNF does not guarantee lossless-join decomposition",
          "BCNF allows non-prime attributes to determine prime attributes",
          "BCNF requires every determinant $X$ in $X \\rightarrow Y$ to be a superkey without exception"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "BCNF is strictly stronger than 3NF: for every non-trivial FD $X \\rightarrow Y$, $X$ must be a superkey. It eliminates the 3NF loophole where $Y$ is a prime attribute."
      },
      {
        "id": "DBMS-M2-005",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Lossless-Join Decomposition",
        "question": "A decomposition of $R$ into $R_1$ and $R_2$ is lossless-join if $R_1 \\cap R_2$ forms a _______ of at least one of the relations.",
        "accepted": [
          "superkey",
          "super key",
          "candidate key"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "By Heath's Theorem, a decomposition into $(R_1, R_2)$ is guaranteed lossless if $R_1 \\cap R_2 \\rightarrow R_1$ or $R_1 \\cap R_2 \\rightarrow R_2$ (i.e. common attributes form a superkey of $R_1$ or $R_2$)."
      },
      {
        "id": "DBMS-M2-006",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Dependency Preservation",
        "question": "Which of the following normal forms guarantees both lossless-join decomposition AND dependency preservation simultaneously?",
        "options": [
          "4NF",
          "5NF",
          "3NF",
          "BCNF"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "Any relation can always be decomposed into 3NF while preserving dependencies and guaranteeing a lossless join. BCNF guarantees lossless join, but dependency preservation is not always achievable."
      },
      {
        "id": "DBMS-M2-007",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Fourth Normal Form (4NF)",
        "question": "Fourth Normal Form (4NF) is designed specifically to eliminate non-trivial _______-valued dependencies.",
        "accepted": [
          "multi",
          "multivalued",
          "multi-valued"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "4NF addresses multi-valued dependencies ($X \\twoheadrightarrow Y$), ensuring that if $X \\twoheadrightarrow Y$ holds, $X$ must be a superkey."
      },
      {
        "id": "DBMS-M2-008",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Fifth Normal Form (5NF)",
        "question": "Fifth Normal Form (5NF), also known as Project-Join Normal Form (PJNF), deals with which type of dependencies?",
        "options": [
          "Join Dependencies",
          "Multi-valued Dependencies",
          "Partial Dependencies",
          "Transitive Dependencies"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "5NF deals with Join Dependencies (JD, denoted $\\bowtie[R_1, R_2, \\dots, R_n]$), ensuring relations cannot be losslessly decomposed into smaller projections unless all join components are superkeys."
      },
      {
        "id": "DBMS-M2-009",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ACID Properties",
        "question": "Which ACID property guarantees that all operations of a transaction are completed successfully or none of them have any effect?",
        "options": [
          "Atomicity",
          "Consistency",
          "Durability",
          "Isolation"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "Atomicity (all-or-nothing principle) guarantees that a transaction is treated as a single atomic unit of work: if any step fails, the system rolls back to the initial state."
      },
      {
        "id": "DBMS-M2-010",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Durability Mechanism",
        "question": "The ACID property ensuring that committed changes survive system crashes and power failures is _______.",
        "accepted": [
          "durability"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "Durability guarantees that once a transaction commits, its updates are permanently recorded in non-volatile storage even in the event of an immediate system crash."
      },
      {
        "id": "DBMS-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Conflict Serializability",
        "question": "Two operations $I_i$ and $I_j$ in a concurrent schedule are said to conflict if they belong to different transactions, access the same data item, and:",
        "options": [
          "Both of them are read operations",
          "Both of them are commit operations",
          "At least one of them is a write operation",
          "They are separated by a checkpoint"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "Operations conflict if they are from different transactions on the same data item and at least one is a write ($R_1(A)-W_2(A)$, $W_1(A)-R_2(A)$, or $W_1(A)-W_2(A)$)."
      },
      {
        "id": "DBMS-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Precedence Graph",
        "question": "A concurrent schedule is conflict serializable if and only if its precedence (serialization) graph contains no _______.",
        "accepted": [
          "cycle",
          "cycles",
          "directed cycle",
          "loop"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "A schedule is conflict serializable if its precedence graph is acyclic. A topological sort of the acyclic graph yields an equivalent serial schedule."
      },
      {
        "id": "DBMS-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Two-Phase Locking (2PL)",
        "question": "What is the defining rule of the Two-Phase Locking (2PL) protocol?",
        "options": [
          "A transaction cannot acquire any new lock once it releases any lock",
          "All locks must be exclusive locks",
          "Transactions can only lock the entire database",
          "Read locks are released immediately after reading"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "In 2PL, a transaction consists of a Growing Phase (acquiring locks without releasing any) and a Shrinking Phase (releasing locks without acquiring any new ones)."
      },
      {
        "id": "DBMS-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Strict Two-Phase Locking",
        "question": "Strict 2PL requires that all _______ locks held by a transaction must be retained until the transaction commits or aborts.",
        "accepted": [
          "exclusive",
          "write",
          "exclusive locks",
          "x locks"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "Strict 2PL holds all exclusive (X) locks until the transaction completes, preventing cascading rollbacks (cascadeless recovery)."
      },
      {
        "id": "DBMS-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Deadlock in 2PL",
        "question": "Does the basic Two-Phase Locking (2PL) protocol guarantee freedom from deadlocks?",
        "options": [
          "Yes, 2PL prevents both serializability violations and deadlocks",
          "No, 2PL guarantees serializability but does NOT prevent deadlocks",
          "Only if shared locks are disallowed",
          "Yes, because the shrinking phase resolves all cycles"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "2PL guarantees conflict serializability, but it does NOT prevent deadlock. Two transactions can easily enter a mutual lock wait state."
      },
      {
        "id": "DBMS-M2-016",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Wait-Die Deadlock Scheme",
        "question": "In the Wait-Die deadlock prevention scheme based on timestamps, if an older transaction requests a lock held by a younger transaction, the older transaction is allowed to _______.",
        "accepted": [
          "wait"
        ],
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "In Wait-Die: Older requests younger $\\rightarrow$ older waits. Younger requests older $\\rightarrow$ younger dies (aborts and restarts)."
      },
      {
        "id": "DBMS-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Timestamp-Ordering Protocol",
        "question": "Thomas' Write Rule is an optimization to the Timestamp-Ordering protocol that safely ignores outdated write operations when:",
        "options": [
          "The transaction aborts",
          "$TS(T) < W\\text{-timestamp}(Q)$",
          "$TS(T) > W\\text{-timestamp}(Q)$",
          "$TS(T) < R\\text{-timestamp}(Q)$"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Thomas' Write Rule observes that if $TS(T) < W\\text{-timestamp}(Q)$, the value written by $T$ has already been overwritten by a newer transaction, so $T$'s write can be safely skipped without aborting."
      },
      {
        "id": "DBMS-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "View Serializability",
        "question": "Which statement accurately describes the relationship between Conflict Serializability and View Serializability?",
        "options": [
          "Every conflict serializable schedule is view serializable, but not vice versa",
          "Conflict serializability and view serializability are completely identical sets",
          "Every view serializable schedule is conflict serializable",
          "Neither set is a subset of the other"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "Conflict Serializability $\\subset$ View Serializability. Schedules containing blind writes may be view serializable without being conflict serializable."
      },
      {
        "id": "DBMS-M2-019",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Write-Ahead Logging (WAL)",
        "question": "The Write-Ahead Logging (WAL) protocol dictates that:",
        "options": [
          "All read locks must be written to the log",
          "Database buffer frames must be written to disk before transactions commit",
          "Checkpoints must occur before every update",
          "The log record for an update must be written to stable non-volatile storage before the actual database page is written to disk"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "WAL requires that undo log records are flushed to non-volatile disk before dirty database pages are written to disk, ensuring atomicity and recoverability."
      },
      {
        "id": "DBMS-M2-020",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Checkpointing",
        "question": "To avoid scanning the entire log file from the very beginning during crash recovery, the DBMS periodically creates _______ in the log.",
        "accepted": [
          "checkpoint",
          "checkpoints",
          "a checkpoint"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "Checkpoints flush all active buffer pages to disk and write a checkpoint record, allowing crash recovery to ignore log records prior to the checkpoint."
      },
      {
        "id": "DBMS-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Deferred Modification Recovery",
        "question": "In the Deferred Database Modification recovery scheme, updates are written to the database disk only after:",
        "options": [
          "The system enters an idle state",
          "Every single SQL statement executes",
          "The first read operation is completed",
          "The transaction commits successfully"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "Deferred modification postpones all disk writes until transaction commit. Hence, uncommitted aborted transactions require no UNDO operations, only REDO for committed ones."
      },
      {
        "id": "DBMS-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Immediate Modification Recovery",
        "question": "In Immediate Database Modification recovery, recovery after a crash requires both REDO and _______ operations on transactions.",
        "accepted": [
          "undo"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "Immediate modification allows uncommitted writes to reach disk, requiring UNDO for uncommitted transactions and REDO for committed transactions."
      },
      {
        "id": "DBMS-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Shadow Paging",
        "question": "What is the primary advantage of Shadow Paging compared to log-based recovery schemes?",
        "options": [
          "It works without a page table",
          "It does not require maintaining an undo log or redo log during runtime",
          "It completely eliminates disk fragmentation",
          "It allows multiple transactions to write to the same page concurrently"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Shadow paging maintains two page tables: a current page table and a shadow page table. Recovery simply discards the current page table without needing log redo/undo, though it causes data clustering loss."
      },
      {
        "id": "DBMS-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Dense Index",
        "question": "An index is called _______ if an index entry appears for every single search key value in the file.",
        "accepted": [
          "dense",
          "a dense index"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "In a dense index, every search-key value in the data file has an explicit corresponding index record. In a sparse index, entries appear only for some search-keys (typically block headers)."
      },
      {
        "id": "DBMS-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Clustering Index",
        "question": "A clustering (primary) index is defined as an index on a file where:",
        "options": [
          "The index is stored exclusively in RAM cache",
          "The physical ordering of records in the data file matches the ordering of the index search keys",
          "Every field in the record is indexed simultaneously",
          "Multiple search keys point to the same physical disk block"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "A clustering index is built on an ordered data file where the physical record sequence corresponds to the index search key ordering. A file can have at most one clustering index."
      },
      {
        "id": "DBMS-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "B+ Tree Leaf Nodes",
        "question": "In a B+ Tree index, where are actual record pointers (data pointers) stored?",
        "options": [
          "In both internal nodes and leaf nodes equally",
          "Only in the root node",
          "Exclusively in a separate hash table",
          "Only in the leaf nodes, which are linked together in a doubly linked list"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-2024",
        "explanation": "In a B+ Tree, internal nodes store only router search-keys and child pointers; all actual record pointers reside in leaf nodes, which are linked sequentially for efficient range scans."
      },
      {
        "id": "DBMS-M2-027",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "B+ Tree Fan-out",
        "question": "Compared to a standard B-Tree, a B+ Tree has a much larger fan-out because internal nodes do not store data _______.",
        "accepted": [
          "pointers",
          "records",
          "data pointers"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Because internal nodes omit record pointers, more search keys fit per disk page, resulting in a higher branching factor (fan-out) and lower tree height."
      },
      {
        "id": "DBMS-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "B+ Tree Search Complexity",
        "question": "What is the worst-case time complexity to search for a record in a balanced B+ Tree with $N$ entries and fanout order $m$?",
        "options": [
          "$O(\\log_m N)$",
          "$O(N)$",
          "$O(N \\log N)$",
          "$O(1)$"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-DBMS-2023",
        "explanation": "A B+ tree is height-balanced with height bounded by $\\lceil \\log_{\\lceil m/2 \\rceil} N \\rceil$, yielding $O(\\log_m N)$ disk I/O operations for search."
      },
      {
        "id": "DBMS-M2-029",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "B-Tree Node Capacity",
        "question": "In a B-Tree of order $m$, every non-root node must contain at least $\\lceil m/2 \\rceil - 1$ keys and at most _______ keys.",
        "accepted": [
          "m-1",
          "m - 1"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A node in a B-Tree of order $m$ has at most $m$ child pointers and $m - 1$ search keys, and at least $\\lceil m/2 \\rceil - 1$ keys (except the root)."
      },
      {
        "id": "DBMS-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Secondary Indexing",
        "question": "Why must a secondary index on an unordered (heap) data file always be a dense index?",
        "options": [
          "Because secondary indexes are stored on magnetic tape",
          "Because heap files do not support primary keys",
          "Because records are not physically sorted by the secondary key, so sparse pointers cannot determine ranges",
          "Because secondary indexes only allow unique attributes"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "source": "pyq:MR25-DBMS-2022",
        "explanation": "Sparse indexing relies on physical sorting of records to bracket search ranges. If the file is not sorted on the indexed attribute, every record must have an explicit entry, requiring a dense index."
      },
      {
        "id": "DBMS-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ARIES Recovery Algorithm",
        "question": "Which three phases are executed in order during crash recovery by the ARIES recovery algorithm?",
        "options": [
          "Check, Log, and Commit",
          "Analysis, Redo, and Undo",
          "Verify, Clean, and Rebuild",
          "Scan, Lock, and Release"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "ARIES operates in three distinct phases: 1. Analysis (reconstructs state and dirty pages at crash), 2. Redo (repeats history to bring database to exact crash state), 3. Undo (reverses uncommitted transactions)."
      },
      {
        "id": "DBMS-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Multi-Level Indexing",
        "question": "When a primary index becomes too large to fit in memory, we construct an outer index on the index itself, forming a _______-level index.",
        "accepted": [
          "multi",
          "multi-level",
          "multilevel"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Multi-level indexing treats the primary index as a base data file and builds a sparse outer index over it, reducing disk block transfers exponentially."
      }
    ],
    "SE": [
      {
        "id": "SE-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Waterfall vs Agile",
        "question": "Which software process model is most appropriate when requirements are highly dynamic, ambiguous, and rapidly evolving?",
        "options": [
          "Cleanroom Engineering",
          "Agile / Scrum Model",
          "V-Model",
          "Classical Waterfall Model"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-SEM-2022",
        "explanation": "Agile welcomes changing requirements through short iterative sprints, continuous customer feedback, and adaptive planning."
      },
      {
        "id": "SE-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Spiral Model Risk",
        "question": "The defining core feature of Boehm's Spiral Model that sets it apart from other lifecycle models is explicit _______ analysis.",
        "accepted": [
          "risk",
          "risk management",
          "risk analysis"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-SEM-2023",
        "explanation": "Every loop of the Spiral Model begins with objective identification and is governed by explicit risk analysis and prototyping."
      },
      {
        "id": "SE-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Functional vs Non-Functional",
        "question": "Which of the following is an example of a Non-Functional Requirement (NFR)?",
        "options": [
          "The user can search products by title",
          "The system must process 1,000 transactions per second with 99.99% uptime",
          "The system calculates GST tax on invoices",
          "The admin can generate monthly sales reports"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-SEM-2024",
        "explanation": "Non-functional requirements specify quality attributes, constraints, performance, scalability, and security rather than specific behaviors."
      },
      {
        "id": "SE-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "SRS Document Standard",
        "question": "The Software Requirements Specification (SRS) document standard is defined by IEEE Standard _______.",
        "accepted": [
          "830",
          "ieee 830"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "IEEE 830 (now ISO/IEC/IEEE 29148) provides standard guidelines for drafting complete, unambiguous SRS documents."
      },
      {
        "id": "SE-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Cohesion Types",
        "question": "Which type of cohesion is considered the highest and most desirable in component-level software design?",
        "options": [
          "Coincidental Cohesion",
          "Communicational Cohesion",
          "Sequential Cohesion",
          "Functional Cohesion"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Functional cohesion is the strongest form, where every element in a component contributes solely to executing a single, well-defined mathematical or logical task."
      },
      {
        "id": "SE-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Worst Cohesion",
        "question": "The weakest and least desirable form of cohesion, where elements are grouped together arbitrarily with no meaningful relationship, is _______ cohesion.",
        "accepted": [
          "coincidental"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Coincidental cohesion occurs when parts of a module are bundled together purely by happenstance, creating code that is impossible to maintain or reuse."
      },
      {
        "id": "SE-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Coupling Types",
        "question": "Which of the following coupling types represents the worst (tightest) form of coupling between two modules?",
        "options": [
          "Control Coupling",
          "Content Coupling",
          "Data Coupling",
          "Common Coupling"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2024",
        "explanation": "Content coupling is the tightest and worst form: one module modifies or relies on the internal implementation, branch targets, or private memory of another module."
      },
      {
        "id": "SE-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Best Coupling",
        "question": "The loosest and most desirable form of coupling, where modules communicate solely by passing simple primitive parameters, is _______ coupling.",
        "accepted": [
          "data",
          "data coupling"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Data coupling occurs when modules pass only primitive data values as arguments, providing minimal dependency and maximum independence."
      },
      {
        "id": "SE-M2-005",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Common Coupling",
        "question": "Common coupling occurs between two or more software modules when:",
        "options": [
          "Modules call each other's public constructors",
          "Both modules access and manipulate shared global data structures",
          "One module controls the internal logic branch of another",
          "One module passes composite data records to another"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Common coupling arises when multiple modules share access to global memory areas or global variables, making side effects hard to trace."
      },
      {
        "id": "SE-M2-006",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Theo Mandel's Golden Rules",
        "question": "According to Theo Mandel's three Golden Rules of User Interface Design, which of the following is NOT one of the rules?",
        "options": [
          "Place the user in control",
          "Make the interface consistent",
          "Reduce the user's memory load",
          "Maximize graphics and animation complexity"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2024",
        "explanation": "Theo Mandel's 3 Golden Rules are: 1. Place the user in control, 2. Reduce the user's memory load, and 3. Make the interface consistent."
      },
      {
        "id": "SE-M2-007",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "UI Design Principle",
        "question": "To reduce the user's memory load, interfaces should favor visual recognition rather than requiring active _______ of command syntax.",
        "accepted": [
          "recall",
          "memorization",
          "memory"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A foundational UI tenet is that recognition is easier than recall: displaying available choices, icons, and menus relieves the student or user from memorizing commands."
      },
      {
        "id": "SE-M2-008",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Verification vs Validation",
        "question": "In software engineering, what is the core difference between Verification and Validation (Boehm's definitions)?",
        "options": [
          "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'",
          "Verification only tests code, while Validation only checks design diagrams",
          "Verification is performed by users, while Validation is performed by compilers",
          "There is no difference; they are synonymous"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Verification ensures that the software conforms to its design specification ('Are we building the product right?'). Validation ensures the software meets real user needs ('Are we building the right product?')."
      },
      {
        "id": "SE-M2-009",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Integration Testing Stubs",
        "question": "In Top-Down integration testing, dummy subprogram routines called _______ are used to simulate subordinate modules that are not yet written.",
        "accepted": [
          "stubs",
          "stub"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Stubs act as dummy subordinate modules in top-down integration testing, returning simulated canned responses until real sub-modules are integrated."
      },
      {
        "id": "SE-M2-010",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Bottom-Up Integration Drivers",
        "question": "In Bottom-Up integration testing, what auxiliary program component is written to invoke and pass test cases to low-level modules?",
        "options": [
          "Test Stub",
          "Mock Spy",
          "Virtual Anchor",
          "Test Driver"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2024",
        "explanation": "In bottom-up testing, high-level control routines are absent, so test drivers are constructed to invoke worker modules and capture their return values."
      },
      {
        "id": "SE-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Regression Testing",
        "question": "What is the primary objective of performing Regression Testing after a code modification?",
        "options": [
          "To confirm that recent bug fixes or changes have not introduced new defects into previously working features",
          "To measure the execution speed of database transactions",
          "To replace manual black-box tests with unit tests",
          "To verify that code passes compiler optimization passes"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Regression testing re-executes a subset of existing test suites after changes to ensure that existing functionality remains intact and bug-free."
      },
      {
        "id": "SE-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Smoke Testing",
        "question": "A preliminary set of fast, end-to-end tests run on a new software build to determine whether it is stable enough for formal testing is called a _______ test.",
        "accepted": [
          "smoke",
          "smoke test",
          "sanity"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Smoke testing (or build verification testing) quickly validates that core functions run without crashing before investing time in comprehensive test suites."
      },
      {
        "id": "SE-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cyclomatic Complexity Formula",
        "question": "For a program flow graph with $E$ edges, $N$ nodes, and $P$ connected components, McCabe's Cyclomatic Complexity $V(G)$ is calculated as:",
        "options": [
          "$V(G) = E \\times N / P$",
          "$V(G) = E + N - P$",
          "$V(G) = N - E + 2$",
          "$V(G) = E - N + 2P$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2023",
        "explanation": "McCabe's cyclomatic complexity is $V(G) = E - N + 2P$. For a single component ($P = 1$), it equals $E - N + 2$, which also equals the number of predicate nodes $+ 1$ ($P_{red} + 1$)."
      },
      {
        "id": "SE-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Basis Path Predicates",
        "question": "In a flow graph with a single entry and exit ($P = 1$), if there are 4 predicate (decision) nodes, the cyclomatic complexity is _______.",
        "accepted": [
          "5",
          "five"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2024",
        "explanation": "Using the alternative predicate formula $V(G) = P_{red} + 1$, where $P_{red} = 4$, we get $V(G) = 4 + 1 = 5$ linearly independent basis paths."
      },
      {
        "id": "SE-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Boundary Value Analysis (BVA)",
        "question": "For an integer input variable valid in the range $[10, 50]$, which set of test input values reflects Boundary Value Analysis guidelines?",
        "options": [
          "9, 10, 11, 49, 50, 51",
          "15, 25, 35, 45",
          "0, 10, 25, 50, 100",
          "10, 20, 30, 40, 50"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Boundary Value Analysis focuses on boundary values and their immediate neighbors: minimum, just above minimum, just below minimum, maximum, just below maximum, and just above maximum ($9, 10, 11, 49, 50, 51$)."
      },
      {
        "id": "SE-M2-016",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Equivalence Partitioning",
        "question": "A black-box testing technique that divides the input domain into classes of data from which test cases can be derived is called _______ partitioning.",
        "accepted": [
          "equivalence",
          "equivalence class"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Equivalence partitioning divides the input domain into equivalence classes (valid and invalid) under the assumption that all values in a class exhibit identical program behavior."
      },
      {
        "id": "SE-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "White-Box vs Black-Box",
        "question": "Which of the following testing methodologies relies exclusively on knowledge of internal control flow paths, conditions, and statements?",
        "options": [
          "Black-Box Testing (Behavioral Testing)",
          "Boundary Value Analysis",
          "White-Box Testing (Structural Testing)",
          "User Acceptance Testing (UAT)"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2024",
        "explanation": "White-box (glass-box/structural) testing exercises internal logic paths, data flow, loops, and conditions based directly on source code inspection."
      },
      {
        "id": "SE-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Alpha vs Beta Testing",
        "question": "Where and by whom is Alpha testing typically conducted?",
        "options": [
          "At the developer's site by end users in a controlled environment",
          "By independent ISO certification auditors",
          "By compilers during automated nightly builds",
          "At end-user customer sites in live unmonitored settings"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Alpha testing is performed at the software developer's site by representative users in a controlled environment, whereas Beta testing is conducted at customer sites in realistic unmonitored production conditions."
      },
      {
        "id": "SE-M2-019",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "McCall's Quality Factors",
        "question": "In McCall's Quality Factors model, into which three categories are software quality factors organized?",
        "options": [
          "Product Operation, Product Revision, and Product Transition",
          "Functional, Non-Functional, and Architectural",
          "Design, Coding, and Testing",
          "Reliability, Usability, and Scalability"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2022",
        "explanation": "McCall's model organizes 11 quality factors under 3 views: Product Operation (using it), Product Revision (changing it), and Product Transition (porting it to new environments)."
      },
      {
        "id": "SE-M2-020",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "SEI CMM Levels",
        "question": "The SEI Capability Maturity Model (CMM/CMMI) defines exactly _______ levels of process maturity.",
        "accepted": [
          "5",
          "five"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "CMMI has 5 maturity levels: 1. Initial (ad-hoc), 2. Managed/Repeatable, 3. Defined, 4. Quantitatively Managed, 5. Optimizing."
      },
      {
        "id": "SE-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "CMMI Level 5",
        "question": "What is the primary characteristic of an organization operating at CMMI Level 5 (Optimizing)?",
        "options": [
          "Software development is outsourced",
          "Project metrics are completely eliminated",
          "Continuous process improvement powered by quantitative feedback and piloting innovative ideas",
          "Processes are documented but unpredictable"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2024",
        "explanation": "At Level 5 (Optimizing), an organization focuses on continuous process improvement using statistical root-cause analysis, defect prevention, and innovative technology pilots."
      },
      {
        "id": "SE-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "CMM Level 1",
        "question": "At CMM Level 1 (Initial), software development processes are characterized as chaotic and _______.",
        "accepted": [
          "ad hoc",
          "ad-hoc",
          "adhoc"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "At Level 1, processes are ad-hoc, informal, and heroic, with success depending entirely on individual talent rather than reproducible engineering discipline."
      },
      {
        "id": "SE-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Basic COCOMO Model",
        "question": "In Boehm's Basic COCOMO model, what are the three development modes classified according to project team size and innovation?",
        "options": [
          "Standard, Enterprise, and Critical",
          "Organic, Semidetached, and Embedded",
          "Agile, Waterfall, and Spiral",
          "Small, Medium, and Large"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Basic COCOMO defines 3 project modes: Organic (small, familiar teams), Semidetached (intermediate team with mixed experience), and Embedded (tight hardware/software constraints)."
      },
      {
        "id": "SE-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "COCOMO Effort Formula",
        "question": "In the Basic COCOMO effort equation $E = a \\cdot (\\text{KLOC})^b$, the unit of effort $E$ is measured in person-_______.",
        "accepted": [
          "months",
          "month",
          "pm"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "COCOMO effort $E$ is expressed in Person-Months (PM), representing the work done by one person in one calendar month."
      },
      {
        "id": "SE-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Formal Technical Review (FTR)",
        "question": "What is the primary objective of a Formal Technical Review (FTR) during software quality assurance?",
        "options": [
          "To replace compilers and automated linters",
          "To uncover defects in function, logic, or implementation early in the development lifecycle",
          "To evaluate individual team member performance for annual bonuses",
          "To explain marketing strategies to clients"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2024",
        "explanation": "FTRs (inspections and walkthroughs) are peer reviews aimed strictly at discovering defects early in artifacts (specs, designs, code), where fixes cost a fraction of post-release remediation."
      },
      {
        "id": "SE-M2-026",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "RMMM Plan",
        "question": "The acronym RMMM in software risk management stands for Risk Mitigation, Monitoring, and _______.",
        "accepted": [
          "management"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "An RMMM plan articulates strategies for Risk Mitigation (avoidance), Risk Monitoring (tracking warning triggers), and Risk Management (contingency response)."
      },
      {
        "id": "SE-M2-027",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Software Maintenance Types",
        "question": "Modifying software to adapt it to changes in its execution environment (such as a new OS version, updated DBMS, or cloud infrastructure) is termed:",
        "options": [
          "Adaptive Maintenance",
          "Preventive Maintenance",
          "Corrective Maintenance",
          "Perfective Maintenance"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2022",
        "explanation": "Adaptive maintenance modifies the system to cope with external environmental changes (hardware, operating system, external libraries) without altering core functionality."
      },
      {
        "id": "SE-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Corrective Maintenance",
        "question": "Which software maintenance category addresses diagnosing and rectifying residual errors and bug reports submitted by end users after release?",
        "options": [
          "Adaptive Maintenance",
          "Perfective Maintenance",
          "Corrective Maintenance",
          "Preventive Maintenance"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-2023",
        "explanation": "Corrective maintenance (bug fixing) repairs errors and defects discovered while the application is in live operational production."
      },
      {
        "id": "SE-M2-029",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Preventive Maintenance",
        "question": "Re-engineering and refactoring code to improve maintainability and prevent future bugs before they arise is called _______ maintenance.",
        "accepted": [
          "preventive"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Preventive maintenance (software re-engineering) refactors software to make it easier to understand, test, and maintain, proactively averting future decay."
      },
      {
        "id": "SE-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Risk Projection",
        "question": "In software risk projection (estimation), risk impact is calculated using which two primary metrics?",
        "options": [
          "Compiler warnings and Cyclomatic complexity",
          "Probability of occurrence and Severity of impact (Loss)",
          "Number of developers and Project duration",
          "Cost of code and Lines of code"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-SE-2024",
        "explanation": "Risk exposure is quantified as $RE = P \\times C$, where $P$ is the probability of the hazard occurring and $C$ is the cost/consequence of loss if it occurs."
      },
      {
        "id": "SE-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ISO 9126 Standard",
        "question": "The ISO 9126 standard evaluates software product quality across six key attributes: Functionality, Reliability, Usability, Efficiency, Maintainability, and:",
        "options": [
          "Programmability",
          "Popularity",
          "Portability",
          "Profitability"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "ISO 9126 defines six top-level software characteristics: Functionality, Reliability, Usability, Efficiency, Maintainability, and Portability."
      },
      {
        "id": "SE-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Perfective Maintenance Dominance",
        "question": "Empirical studies reveal that _______ maintenance (adding new user features and UI enhancements) accounts for over 50% of all software maintenance costs.",
        "accepted": [
          "perfective"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Perfective maintenance involves adding new features and performance enhancements requested by users, accounting for the lion's share of total lifecycle maintenance spend."
      }
    ],
    "ES": [
      {
        "id": "ES-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Ecological Pyramids",
        "question": "Which ecological pyramid is ALWAYS upright and cannot be inverted in any ecosystem?",
        "options": [
          "Pyramid of Energy",
          "Pyramid of Trophic Depth",
          "Pyramid of Numbers",
          "Pyramid of Biomass"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-SEM-2022",
        "explanation": "By the Second Law of Thermodynamics (Lindeman's 10% rule), energy decreases progressively at each trophic transfer, so the Pyramid of Energy is always strictly upright."
      },
      {
        "id": "ES-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Biodiversity Hotspots",
        "question": "To qualify as a global Biodiversity Hotspot, an area must contain at least 1,500 endemic vascular plant species and have lost at least _______% of its primary habitat.",
        "accepted": [
          "70",
          "70%"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-ES-SEM-2023",
        "explanation": "Norman Myers' criteria require $\\ge 1,500$ endemic plant species and $\\ge 70\\%$ habitat loss."
      },
      {
        "id": "ES-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "BOD in Water Pollution",
        "question": "A high Biochemical Oxygen Demand (BOD) value in a freshwater stream indicates:",
        "options": [
          "Heavy organic pollution and severe depletion of dissolved oxygen",
          "Excessive groundwater percolation",
          "High dissolved mineral salt concentration",
          "Clean, pristine drinking water"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-SEM-2024",
        "explanation": "BOD measures the amount of oxygen required by aerobic microbes to oxidize organic waste; high BOD means heavy organic contamination that suffocates aquatic life."
      },
      {
        "id": "ES-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Minamata Disease",
        "question": "Minamata disease was a catastrophic neurological illness caused by industrial pollution of waterways with _______ (heavy metal).",
        "accepted": [
          "mercury",
          "methylmercury",
          "hg"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Methylmercury bioaccumulated in fish and shellfish in Minamata Bay, Japan, causing devastating neurological damage to humans."
      },
      {
        "id": "ES-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Noise Pollution Limits",
        "question": "According to the Central Pollution Control Board (CPCB) of India, what is the permissible ambient noise level for residential zones during daytime?",
        "options": [
          "75 dB(A)",
          "65 dB(A)",
          "45 dB(A)",
          "55 dB(A)"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "CPCB noise limits for residential zones are 55 dB(A) during day time (6:00 AM to 10:00 PM) and 45 dB(A) during night time (10:00 PM to 6:00 AM)."
      },
      {
        "id": "ES-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Noise Measurement Unit",
        "question": "Ambient noise level is standardly measured in decibels on the _______-weighted scale, denoted as dB(A).",
        "accepted": [
          "a",
          "a-weighted",
          "a weighted"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "The A-weighting filter curve closely matches human ear sensitivity across different sound frequencies, making dB(A) the universal regulatory metric."
      },
      {
        "id": "ES-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Solid Waste Management Hierarchy",
        "question": "Which waste management approach is considered the highest priority according to the universal waste hierarchy?",
        "options": [
          "Recycling",
          "Source Reduction (Reduce)",
          "Energy Recovery (Incineration)",
          "Sanitary Landfilling"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2024",
        "explanation": "The 3R hierarchy places Source Reduction (Prevention/Reduce) at the very top, followed by Reuse, Recycling, Energy Recovery, and finally Landfilling as the last resort."
      },
      {
        "id": "ES-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Composting",
        "question": "The biological decomposition of organic solid wastes under aerobic conditions into nutrient-rich humus is known as _______.",
        "accepted": [
          "composting",
          "compost"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "Composting converts biodegradable organic matter into stable humus soil conditioner through the metabolic action of aerobic bacteria and fungi."
      },
      {
        "id": "ES-M2-005",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Landfill Leachate",
        "question": "What is 'leachate' in the context of municipal solid waste sanitary landfills?",
        "options": [
          "Methane gas extracted from decomposing trash",
          "The top clay barrier preventing rainwater intrusion",
          "Ash remaining after waste incineration",
          "Contaminated liquid percolating through landfill waste that can pollute groundwater aquifers"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2022",
        "explanation": "Leachate is toxic liquid formed when rainwater percolates through compacted landfill waste, dissolving heavy metals and toxic chemicals that threaten groundwater aquifers."
      },
      {
        "id": "ES-M2-006",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Landfill Gas",
        "question": "The primary greenhouse gas produced by anaerobic decomposition of municipal solid waste in landfills is _______ ($CH_4$).",
        "accepted": [
          "methane",
          "ch4"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2024",
        "explanation": "Anaerobic digestion of organic matter in deep landfills produces landfill gas containing roughly 50-60% methane ($CH_4$) and 40-50% carbon dioxide ($CO_2$)."
      },
      {
        "id": "ES-M2-007",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Bio-magnification",
        "question": "Biomagnification of non-biodegradable persistent organic pollutants like DDT causes which ecological effect in predatory birds?",
        "options": [
          "Loss of feather pigmentation",
          "Resistance to bacterial infection",
          "Accelerated chick gestation",
          "Eggshell thinning leading to premature egg breakage and population collapse"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2023",
        "explanation": "DDT accumulates in apex raptors (e.g. bald eagles, falcons) via biomagnification, inhibiting calcium ATPase and causing severe eggshell thinning that crushes clutches."
      },
      {
        "id": "ES-M2-008",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Earthquake Measurement",
        "question": "The amount of energy released by an earthquake at its hypocenter is quantified on the:",
        "options": [
          "Beaufort Scale",
          "Richter Magnitude Scale",
          "Mercalli Intensity Scale",
          "Mohs Scale"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "The Richter scale calculates earthquake magnitude based on the logarithm of seismic wave amplitude, whereas the Mercalli scale rates observed surface damage intensity."
      },
      {
        "id": "ES-M2-009",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Brundtland Sustainable Development",
        "question": "According to the 1987 Brundtland Commission Report 'Our Common Future', Sustainable Development is defined as:",
        "options": [
          "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
          "Complete preservation of all nature reserves without human economic activity",
          "Equal distribution of mineral wealth among all nations",
          "Achieving 100% industrial output through fossil fuel expansion"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "The landmark Brundtland definition emphasizes inter-generational and intra-generational equity: meeting present needs while preserving natural capital for future generations."
      },
      {
        "id": "ES-M2-010",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Rainwater Harvesting",
        "question": "The technique of collecting and storing rainwater from rooftops or surface catchments for productive reuse or groundwater recharge is called rainwater _______.",
        "accepted": [
          "harvesting"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "Rainwater harvesting captures monsoon precipitation before runoff loss, mitigating urban water scarcity and replenishing depleting aquifers."
      },
      {
        "id": "ES-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Acid Rain Chemistry",
        "question": "Which primary atmospheric pollutants react with water vapor to precipitate as Acid Rain ($pH < 5.6$)?",
        "options": [
          "Chlorofluorocarbons ($CFCs$) and Ozone ($O_3$)",
          "Sulfur dioxide ($SO_2$) and Nitrogen oxides ($NO_x$)",
          "Lead particulates and Ammonia",
          "Carbon monoxide ($CO$) and Methane ($CH_4$)"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2024",
        "explanation": "$SO_2$ and $NO_x$ emitted from coal power plants and vehicles oxidize into sulfuric acid ($H_2SO_4$) and nitric acid ($HNO_3$), depressing rain pH below 5.6."
      },
      {
        "id": "ES-M2-012",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Acid Rain pH",
        "question": "Normal clean rainwater has a slightly acidic pH of about 5.6 due to dissolved atmospheric _______.",
        "accepted": [
          "carbon dioxide",
          "co2"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2023",
        "explanation": "Dissolved $CO_2$ forms weak carbonic acid ($H_2CO_3$), giving pristine unpolluted rain a natural background pH of roughly 5.6."
      },
      {
        "id": "ES-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Ozone Layer Depletion",
        "question": "Which international environmental treaty was adopted in 1987 to phase out the production of Chlorofluorocarbons (CFCs) and protect the stratospheric ozone layer?",
        "options": [
          "Montreal Protocol",
          "Paris Agreement",
          "Ramsar Convention",
          "Kyoto Protocol"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "The Montreal Protocol (1987) is universally ratified and regulates nearly 100 ozone-depleting substances, famously allowing the stratospheric ozone hole to heal."
      },
      {
        "id": "ES-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Ozone Thickness Unit",
        "question": "The total atmospheric column concentration of stratospheric ozone is measured in _______ Units (DU).",
        "accepted": [
          "dobson",
          "dobson units",
          "du"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2024",
        "explanation": "One Dobson Unit corresponds to an ozone layer 0.01 mm thick at standard temperature and pressure (STP). Normal atmospheric ozone is roughly 300 DU."
      },
      {
        "id": "ES-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Greenhouse Effect GWP",
        "question": "Which major greenhouse gas has the highest 100-year Global Warming Potential (GWP) among the common atmospheric greenhouse gases listed below?",
        "options": [
          "Carbon Dioxide ($CO_2$)",
          "Water Vapor ($H_2O$)",
          "Methane ($CH_4$)",
          "Nitrous Oxide ($N_2O$)"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2023",
        "explanation": "While $CO_2$ has a baseline GWP of 1, methane ($CH_4$) has a GWP of ~28-30, and nitrous oxide ($N_2O$) has a very high GWP of ~265-298 over 100 years."
      },
      {
        "id": "ES-M2-016",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Kyoto Protocol",
        "question": "The _______ Protocol (1997) was an international treaty that set legally binding emission reduction targets for industrialized nations to combat global warming.",
        "accepted": [
          "kyoto",
          "kyoto protocol"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "The Kyoto Protocol committed Annex I industrialized countries to limit and reduce greenhouse gas emissions in accordance with agreed individual targets."
      },
      {
        "id": "ES-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Chernobyl Nuclear Disaster",
        "question": "The Chernobyl nuclear power disaster occurred in 1986 in which former Soviet republic?",
        "options": [
          "Russia",
          "Kazakhstan",
          "Ukraine",
          "Belarus"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Chernobyl disaster occurred on April 26, 1986, at reactor No. 4 of the Chernobyl Nuclear Power Plant near Pripyat in northern Ukraine."
      },
      {
        "id": "ES-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Resettlement and Rehabilitation",
        "question": "What is the primary socio-environmental challenge associated with constructing mega hydroelectric dams like Sardar Sarovar or Tehri?",
        "options": [
          "Depletion of atmospheric nitrogen",
          "Involuntary displacement, loss of cultural heritage, and inadequate rehabilitation of local indigenous communities",
          "Loss of tidal energy",
          "Cooling of downstream river temperatures causing ice formation"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2023",
        "explanation": "Large dams submerge fertile agricultural valleys and displacement leads to severance from traditional livelihoods, necessitating comprehensive Resettlement and Rehabilitation (R&R)."
      },
      {
        "id": "ES-M2-019",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Environment Protection Act Year",
        "question": "The umbrella 'Environment (Protection) Act' in India was enacted by Parliament in the year:",
        "options": [
          "1981",
          "1974",
          "1986",
          "1992"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "Enacted in 1986 in the wake of the 1984 Bhopal Gas Tragedy, the Environment (Protection) Act serves as overarching umbrella legislation empowering the central government to set national quality standards."
      },
      {
        "id": "ES-M2-020",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Water Act Year",
        "question": "The Water (Prevention and Control of Pollution) Act was enacted in India in the year _______.",
        "accepted": [
          "1974"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "The Water Act of 1974 established the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) to maintain and restore water wholesomeness."
      },
      {
        "id": "ES-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Air Act Amendment",
        "question": "In which year was the Air (Prevention and Control of Pollution) Act amended to explicitly include 'noise' within the definition of air pollutants?",
        "options": [
          "1981",
          "1987",
          "2000",
          "1995"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2024",
        "explanation": "Originally passed in 1981, the Air Act was amended in 1987 to expand the definition of air pollutant to include noise, paving the way for the Noise Pollution Rules 2000."
      },
      {
        "id": "ES-M2-022",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Wildlife Protection Act",
        "question": "The Wildlife Protection Act was enacted in India in the year _______ to protect endangered animals and regulate national parks.",
        "accepted": [
          "1972"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "The Wildlife Protection Act of 1972 established schedules of protected flora/fauna, outlawed poaching, and authorized declarations of Sanctuaries, National Parks, and Tiger Reserves."
      },
      {
        "id": "ES-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Forest Conservation Act",
        "question": "Under the Forest Conservation Act 1980, whose prior approval is mandatory before any reserved forest land can be diverted for non-forest purposes?",
        "options": [
          "Private timber corporations",
          "State Forest Department officers only",
          "The Central Government of India (MoEFCC)",
          "The local Gram Panchayat"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2023",
        "explanation": "Section 2 of the Forest Conservation Act 1980 mandates prior approval from the Central Government (Ministry of Environment, Forest and Climate Change) before diverting any forest land."
      },
      {
        "id": "ES-M2-024",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Population Pyramids",
        "question": "A triangular population pyramid with a broad base and narrow apex indicates a rapidly _______ population with high birth rates.",
        "accepted": [
          "growing",
          "expanding",
          "increasing"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A broad base reflects high natality and a large proportion of young dependants, characteristic of developing nations with rapid demographic growth."
      },
      {
        "id": "ES-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "HIV/AIDS Transmission",
        "question": "Human Immunodeficiency Virus (HIV) does NOT transmit through which of the following everyday interactions?",
        "options": [
          "Unscreened blood transfusions",
          "Mother-to-child transmission during childbirth or breastfeeding",
          "Unprotected sexual intercourse",
          "Sharing meals, handshakes, or using the same toilet seat"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2022",
        "explanation": "HIV cannot survive outside body fluids and is not transmitted through casual social contact, saliva, sweat, hugging, food sharing, or insect bites."
      },
      {
        "id": "ES-M2-026",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "GIS in Environmental Management",
        "question": "The spatial digital software tool used extensively for forest cover mapping, disaster zoning, and watershed analysis is Geographic _______ Systems (GIS).",
        "accepted": [
          "information",
          "information system",
          "information systems"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Geographic Information System (GIS) integrates satellite remote sensing imagery and spatial databases to monitor deforestation, flood inundation, and pollution plumes."
      },
      {
        "id": "ES-M2-027",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Value Education",
        "question": "What is the primary role of Value Education in environmental sustainability?",
        "options": [
          "Teaching advanced industrial coal mining techniques",
          "Inculcating moral responsibility, ecological respect, and sustainable lifestyle ethics among citizens",
          "Maximizing consumer demand for single-use plastic goods",
          "Eliminating traditional agrarian conservation wisdom"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Value education cultivates an ethical ecocentric mindset, fostering respect for biodiversity, self-restraint, and sustainable conservation behavior."
      },
      {
        "id": "ES-M2-028",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "World Environment Day",
        "question": "World Environment Day is observed globally every year on the _______ of June.",
        "accepted": [
          "5th",
          "5",
          "fifth"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "June 5th commemorates the opening day of the United Nations Conference on the Human Environment (Stockholm 1972)."
      },
      {
        "id": "ES-M2-029",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ENVIS Information System",
        "question": "The Environmental Information System (ENVIS) established by MoEFCC serves to:",
        "options": [
          "Manufacture solar panels",
          "Issue corporate patent licenses",
          "Manage defense satellite operations",
          "Collect, collate, and disseminate environmental information to researchers, policy-makers, and the public"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "ENVIS was established in 1982 by the Indian Ministry of Environment to act as a decentralized network providing reliable ecological data and scientific research across nodal centers."
      },
      {
        "id": "ES-M2-030",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Article 48A Constitution",
        "question": "Article _______ of the Constitution of India directs the State to protect and improve the environment and safeguard forests and wildlife.",
        "accepted": [
          "48a",
          "48-a",
          "48 a"
        ],
        "difficulty": "hard",
        "source": "pyq:MR25-ES-2024",
        "explanation": "Article 48A was added by the 42nd Amendment (1976), enshrining state responsibility for environmental conservation in the Directive Principles of State Policy."
      },
      {
        "id": "ES-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "E-Waste Hazards",
        "question": "Which hazardous heavy metal commonly found in CRT computer monitors and solder causes neurological and developmental damage?",
        "options": [
          "Gold ($Au$)",
          "Lead ($Pb$)",
          "Aluminum ($Al$)",
          "Iron ($Fe$)"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-2023",
        "explanation": "E-waste contains toxic heavy metals, most notably lead in soldering alloys and CRT funnel glass, which impairs cognitive development and damages kidneys."
      },
      {
        "id": "ES-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Fundamental Duty 51A(g)",
        "question": "Article 51A(g) states that it is the fundamental duty of every citizen to protect and improve the natural environment, including forests, lakes, rivers, and _______.",
        "accepted": [
          "wildlife"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-ES-2022",
        "explanation": "Article 51A(g) establishes: 'It shall be the duty of every citizen of India to protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures.'"
      }
    ],
    "IE": [
      {
        "id": "IE-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "sem",
        "topic": "Design Thinking Stages",
        "question": "What are the 5 iterative stages of Stanford d.school's Design Thinking process?",
        "options": [
          "Plan, Code, Test, Deploy, and Maintain",
          "Attract, Engage, Convert, Retain, and Delight",
          "Discover, Fund, File, Sell, and Exit",
          "Empathize, Define, Ideate, Prototype, and Test"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-SEM-2022",
        "explanation": "Design Thinking follows: 1. Empathize (understand users), 2. Define (frame problem), 3. Ideate (brainstorm solutions), 4. Prototype (build low-fidelity models), 5. Test (gather feedback)."
      },
      {
        "id": "IE-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "sem",
        "topic": "Minimum Viable Product (MVP)",
        "question": "In Eric Ries' Lean Startup methodology, a version of a new product that allows a team to collect the maximum validated learning with the least effort is an _______ (acronym).",
        "accepted": [
          "mvp",
          "minimum viable product"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-SEM-2023",
        "explanation": "An MVP tests core value hypotheses with real users before investing heavy engineering capital."
      },
      {
        "id": "IE-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "sem",
        "topic": "Lean Startup Feedback Loop",
        "question": "What is the core iterative engine of the Lean Startup methodology?",
        "options": [
          "Build-Measure-Learn feedback loop",
          "Waterfall phased progression",
          "Plan-Do-Check-Act loop",
          "Risk-Mitigation cycle"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-SEM-2024",
        "explanation": "Lean Startup centers on the Build-Measure-Learn cycle: turn ideas into products, measure customer response, and learn whether to pivot or persevere."
      },
      {
        "id": "IE-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "sem",
        "topic": "Startup Pivot",
        "question": "A structured course correction designed to test a new fundamental hypothesis about the product, business model, or engine of growth is called a _______.",
        "accepted": [
          "pivot"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A pivot changes strategic direction while keeping one foot grounded in what has already been validated."
      },
      {
        "id": "IE-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Business Model Canvas Blocks",
        "question": "How many building blocks constitute Alexander Osterwalder's standard Business Model Canvas (BMC)?",
        "options": [
          "7",
          "5",
          "12",
          "9"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "The Business Model Canvas comprises exactly 9 core building blocks covering the four primary areas of a business: customers, offer, infrastructure, and financial viability."
      },
      {
        "id": "IE-M2-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Value Proposition Block",
        "question": "In the Business Model Canvas, the collection of products and services that create value for a specific customer segment is called the Value _______.",
        "accepted": [
          "proposition",
          "propositions"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "The Value Proposition block describes the unique bundle of products and services that solve a customer problem or satisfy a customer need."
      },
      {
        "id": "IE-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "BMC Customer Segments",
        "question": "Which block of the Business Model Canvas defines the different groups of people or organizations an enterprise aims to reach and serve?",
        "options": [
          "Customer Segments",
          "Customer Relationships",
          "Key Partnerships",
          "Channels"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "Customer Segments defines who the product or service is built for (e.g. mass market, niche market, segmented, diversified, or multi-sided platforms)."
      },
      {
        "id": "IE-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "LTV to CAC Ratio",
        "question": "For a healthy venture, the ratio of Customer Lifetime Value (LTV) to Customer Acquisition Cost (CAC) should ideally be at least _______ : 1.",
        "accepted": [
          "3",
          "3:1",
          "3 to 1"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A healthy benchmark is $LTV / CAC \\ge 3:1$. If the ratio is below 1:1, the startup is losing money acquiring users; if it is 5:1 or higher, the company is under-investing in growth."
      },
      {
        "id": "IE-M2-005",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Cost-Driven vs Value-Driven",
        "question": "In the BMC Cost Structure block, what distinguishes a 'Cost-Driven' business model (like Ryanair or IndiGo)?",
        "options": [
          "Operates as a non-profit charity",
          "Relying purely on government subsidies",
          "Focuses on minimizing costs wherever possible through lean operations, low pricing, and automation",
          "Focuses primarily on premium value creation and personalized luxury service"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Cost-driven models focus on aggressive cost minimization, low price value propositions, maximum automation, and extensive outsourcing."
      },
      {
        "id": "IE-M2-006",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Revenue Streams",
        "question": "A recurring pricing model where customers pay a recurring periodic fee (monthly/yearly) for continuous access to software or content is called a _______ model.",
        "accepted": [
          "subscription",
          "subscription model",
          "saas"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "Subscription models provide predictable recurring revenue streams (ARR/MRR) common in SaaS (Software-as-a-Service) and media streaming."
      },
      {
        "id": "IE-M2-007",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Channels Block",
        "question": "What is the primary function of the 'Channels' block in the Business Model Canvas?",
        "options": [
          "Defining internal employee HR hierarchy",
          "Calculating manufacturing depreciation rates",
          "Describing how a company communicates with and reaches its customer segments to deliver a value proposition",
          "Documenting legal patent filings"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "Channels encompass communication, distribution, and sales touchpoints: awareness, evaluation, purchase, delivery, and after-sales support."
      },
      {
        "id": "IE-M2-008",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Bootstrapping",
        "question": "What does 'Bootstrapping' mean in the startup ecosystem?",
        "options": [
          "Merging with a publicly listed shell company",
          "Building and growing a business using personal savings and early customer revenue without external equity investment",
          "Raising a Series A venture capital round from Silicon Valley funds",
          "Taking an emergency short-term bank loan"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "Bootstrapping refers to self-funding a startup through founder savings, sweat equity, and customer cash flows, retaining 100% equity and control."
      },
      {
        "id": "IE-M2-009",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Angel Investor",
        "question": "High-net-worth individuals who invest their own personal capital into early-stage startups in exchange for equity or convertible debt are called _______ investors.",
        "accepted": [
          "angel",
          "angels",
          "angel investors"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Angel investors provide seed-stage funding and mentorship to nascent ventures before venture capital institutions step in."
      },
      {
        "id": "IE-M2-010",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Pre-Money vs Post-Money Valuation",
        "question": "If an investor invests \\$2 million into a startup at a \\$8 million pre-money valuation, what is the post-money valuation and the investor's equity stake?",
        "options": [
          "Post-money is \\$6 million, investor gets 33.3% equity",
          "Post-money is \\$10 million, investor gets 25% equity",
          "Post-money is \\$10 million, investor gets 20% equity",
          "Post-money is \\$8 million, investor gets 25% equity"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-IE-2024",
        "explanation": "$\\text{Post-Money} = \\text{Pre-Money} + \\text{Investment} = \\$8M + \\$2M = \\$10M$. The investor's equity ownership is $\\text{Investment} / \\text{Post-Money} = \\$2M / \\$10M = 20\\%$."
      },
      {
        "id": "IE-M2-011",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Startup Runway",
        "question": "If a startup has \\$600,000 in cash and has a net monthly burn rate of \\$50,000, its cash runway is _______ months.",
        "accepted": [
          "12",
          "12 months"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Runway = Total Cash Balance / Net Monthly Burn Rate = \\$600,000 / \\$50,000 = 12 months before cash exhaustion."
      },
      {
        "id": "IE-M2-012",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Break-Even Point Formula",
        "question": "In financial planning, the Break-Even Point (in units) is calculated using which formula?",
        "options": [
          "$\\text{Variable Costs} / \\text{Fixed Costs}$",
          "$(\\text{Fixed Costs} + \\text{Variable Costs}) \\times \\text{Selling Price}$",
          "$\\text{Fixed Costs} / (\\text{Selling Price per Unit} - \\text{Variable Cost per Unit})$",
          "$\\text{Total Revenue} / \\text{Total Assets}$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "Break-Even Quantity = Fixed Costs / Contribution Margin per Unit, where Contribution Margin = Selling Price - Variable Cost per unit."
      },
      {
        "id": "IE-M2-013",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Venture Capital Due Diligence",
        "question": "The comprehensive audit of a startup's financial records, legal standing, code architecture, and customer contracts performed by investors before funding is called due _______.",
        "accepted": [
          "diligence"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "Due diligence is the rigorous investigation that venture capital funds conduct into legal, financial, and technical claims before wiring funds."
      },
      {
        "id": "IE-M2-014",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Term Sheet Liquidation Preference",
        "question": "In a venture capital Term Sheet, what does a '1x Non-Participating Liquidation Preference' mean?",
        "options": [
          "Investors can force liquidation after 1 year",
          "Founders receive their salary before investors get paid",
          "The company cannot be sold for less than 1x its valuation",
          "Preferred shareholders receive back their initial investment amount before common shareholders receive any exit proceeds"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Liquidation preference determines payout order upon an exit: preferred shareholders get their initial invested capital (1x) back before common shareholders receive distributions."
      },
      {
        "id": "IE-M2-015",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cap Table",
        "question": "A spreadsheet or table that details a company's percentage ownership, equity dilution, and value of shares across all founders and investors is called a _______ table.",
        "accepted": [
          "cap",
          "capitalization",
          "cap table"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "A Capitalization Table (Cap Table) breaks down equity ownership, share classes, option pools (ESOPs), and investor stakes across funding rounds."
      },
      {
        "id": "IE-M2-016",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Crowdfunding Models",
        "question": "Kickstarter and Indiegogo operate primarily on which crowdfunding model?",
        "options": [
          "Donation Crowdfunding for disaster relief",
          "Equity Crowdfunding",
          "Debt Crowdfunding (Peer-to-Peer)",
          "Reward-based Crowdfunding"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Platforms like Kickstarter use reward-based crowdfunding: backers pledge funds in exchange for non-financial rewards (early product prototypes, special merchandise) rather than equity shares."
      },
      {
        "id": "IE-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Government Startup Initiatives",
        "question": "The 'Startup India Seed Fund Scheme' (SISFS) was launched by the Government of India primarily to:",
        "options": [
          "Collect corporate taxes in advance",
          "Mandate that startups hire only government civil servants",
          "Provide financial assistance to early-stage startups for proof of concept, prototype development, and product trials",
          "Buy controlling equity in private unicorn tech startups"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "SISFS provides financial assistance up to Rs 20 lakh as a grant for proof-of-concept and up to Rs 50 lakh via debt/convertibles for commercialization through recognized incubators."
      },
      {
        "id": "IE-M2-018",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Patent Criteria",
        "question": "Under the Indian Patents Act 1970, which three criteria must an invention satisfy to be granted a patent?",
        "options": [
          "Low cost, High popularity, and Cloud compatibility",
          "Theoretical elegance, Academic publication, and Free use",
          "Novelty, Inventive Step (Non-obviousness), and Industrial Applicability",
          "Open source licensing, Brevity, and Artistic beauty"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "To qualify for a patent, an invention must be new (novelty), involve an inventive step not obvious to a person skilled in the art, and be capable of industrial application."
      },
      {
        "id": "IE-M2-019",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Patent Validity Period",
        "question": "In India, the statutory term of protection for a granted patent is _______ years from the date of filing.",
        "accepted": [
          "20",
          "20 years"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Under the Indian Patents Act 1970 (aligned with TRIPS), every granted patent has a term of 20 years from the date of patent application filing."
      },
      {
        "id": "IE-M2-020",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Trademark Protection",
        "question": "What is the primary function of a Trademark under the Trade Marks Act 1999?",
        "options": [
          "To keep computer source code confidential",
          "To distinguish goods or services of one enterprise from those of competitors and prevent consumer confusion",
          "To protect the functional mechanical design of a machine",
          "To grant exclusive rights over mathematical formulas"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "A trademark protects distinctive symbols, words, logos, or slogans (e.g. Nike Swoosh, Apple logo) that identify the commercial source of goods and prevent brand impersonation."
      },
      {
        "id": "IE-M2-021",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Trademark Validity Term",
        "question": "A registered trademark in India is valid for _______ years and can be renewed indefinitely upon paying renewal fees.",
        "accepted": [
          "10",
          "10 years"
        ],
        "difficulty": "medium",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Trademarks are granted for 10-year terms and may be renewed indefinitely every 10 years upon payment of renewal fees."
      },
      {
        "id": "IE-M2-022",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Copyright Term",
        "question": "Under the Indian Copyright Act 1957, what is the standard duration of copyright protection for original literary and computer software works?",
        "options": [
          "Lifetime of the author plus 60 years after their death",
          "20 years from registration",
          "100 years from creation",
          "50 years from publication"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-IE-2022",
        "explanation": "For literary, musical, dramatic, and artistic works (including software source code), copyright subsists during the author's lifetime plus 60 years counted from the year following death."
      },
      {
        "id": "IE-M2-023",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Trade Secret Definition",
        "question": "Confidential business information that provides a competitive edge (such as Coca-Cola's syrup formula or Google's search ranking algorithm) is protected as a trade _______.",
        "accepted": [
          "secret",
          "secrets"
        ],
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Trade secrets protect proprietary formulas, algorithms, customer lists, and processes whose economic value derives from remaining undisclosed, protected via non-disclosure agreements (NDAs)."
      },
      {
        "id": "IE-M2-024",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Geographical Indication (GI)",
        "question": "Which of the following is an example of an authorized Geographical Indication (GI Tag) in India?",
        "options": [
          "Intel Core i7",
          "Tesla Model 3",
          "Darjeeling Tea",
          "Windows 11"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "Darjeeling Tea was the first product in India to receive a GI tag (2004-05), certifying that its unique quality and aroma originate exclusively from the Darjeeling region of West Bengal."
      },
      {
        "id": "IE-M2-025",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Patent Cooperation Treaty",
        "question": "The international treaty that allows an inventor to seek patent protection simultaneously in over 150 countries via a single international application is the _______ (acronym).",
        "accepted": [
          "pct",
          "patent cooperation treaty"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The Patent Cooperation Treaty (PCT) administered by WIPO streamlines multi-country patent filings through a unified international search and preliminary examination procedure."
      },
      {
        "id": "IE-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Initial Public Offering (IPO)",
        "question": "An Initial Public Offering (IPO) represents which type of startup exit strategy?",
        "options": [
          "Selling company assets at auction due to insolvency",
          "Selling company shares to the public for the first time on a recognized stock exchange (e.g. BSE/NSE)",
          "Distributing products through retail franchisors",
          "Acquiring a smaller competing firm"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2022",
        "explanation": "An IPO transitions a privately held corporation into a publicly traded company on stock exchanges, providing massive liquidity to founders, early employees, and investors."
      },
      {
        "id": "IE-M2-027",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Acqui-hire Exit",
        "question": "What is an 'Acqui-hire' in tech venture exits?",
        "options": [
          "Hiring only remote independent contractors",
          "A hostile takeover by competing founders",
          "A larger corporation acquires a startup primarily to recruit its specialized engineering and product talent rather than for its product",
          "Outsourcing recruitment to third-party headhunters"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-IE-2023",
        "explanation": "In an acqui-hire (acquisition + hire), a larger tech company buys a struggling or nascent startup to onboard its skilled engineering/AI team, often shutting down the original product."
      },
      {
        "id": "IE-M2-028",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Customer Churn",
        "question": "The percentage of subscribers who cancel or fail to renew their subscription over a given period is known as the customer _______ rate.",
        "accepted": [
          "churn",
          "churn rate"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Churn rate is a vital SaaS metric; if churn is too high, customer acquisition costs cannot be amortized, severely depressing enterprise valuation."
      },
      {
        "id": "IE-M2-029",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Network Effects",
        "question": "Network Effects occur when a product or platform becomes increasingly valuable to existing users as:",
        "options": [
          "The company borrows bank debt",
          "Server CPU clocks increase",
          "More people use the service (e.g. WhatsApp, LinkedIn, Uber)",
          "Manufacturing factory size doubles"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-2024",
        "explanation": "Direct and indirect network effects (Metcalfe's Law) create immense defensive moats: each incremental user adds utility to the entire network of participants."
      },
      {
        "id": "IE-M2-030",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Section 8 Company",
        "question": "In India, social enterprises and non-profit organizations are frequently incorporated under Section _______ of the Companies Act 2013.",
        "accepted": [
          "8",
          "eight"
        ],
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Section 8 companies are registered for promoting charitable objectives (arts, science, environment) and apply all profits toward promoting their mission without dividend payouts."
      },
      {
        "id": "IE-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Corporate Social Responsibility (CSR)",
        "question": "Under Section 135 of the Indian Companies Act 2013, qualifying companies must spend at least what percentage of their average net profit on CSR activities?",
        "options": [
          "2%",
          "5%",
          "10%",
          "1%"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "pyq:MR25-IE-2023",
        "explanation": "Section 135 mandates that qualifying companies spend at least 2% of their average net profits over the immediately preceding 3 financial years on CSR initiatives."
      },
      {
        "id": "IE-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "IPR Design Act",
        "question": "The visual aesthetic shape, pattern, or ornamental configuration of an industrial product is protected under the Designs Act of _______.",
        "accepted": [
          "2000"
        ],
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "The Designs Act 2000 protects novel aesthetic visual configurations and ornamental appearances of manufactured articles for an initial term of 10 years (extendable by 5)."
      }
    ]
  },
  "flashcards": {
    "DM": [
      {
        "id": "FC-SEM-DM-U1",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Logical Equivalence Laws",
        "highYield": true,
        "front": "State De Morgan's and Contrapositive Laws.",
        "back": "• De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$; $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$.\n• Contrapositive: $p \\to q \\equiv \\neg q \\to \\neg p$."
      },
      {
        "id": "FC-SEM-DM-U2",
        "subjectId": "DM",
        "unit": 2,
        "topic": "POSET Axioms",
        "highYield": true,
        "front": "What three properties define a Partial Order (POSET)?",
        "back": "1. Reflexive: $a \\le a$\n2. Antisymmetric: $a \\le b \\land b \\le a \\implies a = b$\n3. Transitive: $a \\le b \\land b \\le c \\implies a \\le c$."
      },
      {
        "id": "FC-DM-01",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Group Definition",
        "highYield": true,
        "front": "What four axioms define a Group $(G, *)$?",
        "back": "1. Closure: $a*b \\in G$\n2. Associativity: $(a*b)*c = a*(b*c)$\n3. Identity: $a*e = e*a = a$\n4. Inverse: $a*a^{-1} = a^{-1}*a = e$"
      },
      {
        "id": "FC-DM-02",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Abelian Group",
        "highYield": true,
        "front": "What extra property makes a group an Abelian Group?",
        "back": "Commutativity: $a * b = b * a$ for all $a, b \\in G$."
      },
      {
        "id": "FC-DM-03",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Lagrange's Theorem",
        "highYield": true,
        "front": "State Lagrange's Theorem for finite groups.",
        "back": "The order of every subgroup $H$ divides the order of finite group $G$:\n$|G| / |H| = [G : H]$ (index of $H$)."
      },
      {
        "id": "FC-DM-04",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Cyclic Group",
        "highYield": true,
        "front": "What is a Cyclic Group?",
        "back": "A group $G$ generated by a single element $a$: every $x \\in G$ can be written as $a^k$ for some integer $k$ ($G = \\langle a \\rangle$)."
      },
      {
        "id": "FC-DM-05",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Normal Subgroup",
        "highYield": true,
        "front": "What is a Normal Subgroup?",
        "back": "A subgroup $H \\trianglelefteq G$ where left and right cosets coincide: $gH = Hg$, or $g h g^{-1} \\in H$ for all $g \\in G, h \\in H$."
      },
      {
        "id": "FC-DM-06",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Order of an Element",
        "highYield": false,
        "front": "How is the order of an element $a \\in G$ defined?",
        "back": "The smallest positive integer $m$ such that $a^m = e$. If no such $m$ exists, $a$ has infinite order."
      },
      {
        "id": "FC-DM-07",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Pigeonhole Principle",
        "highYield": true,
        "front": "State the Generalized Pigeonhole Principle.",
        "back": "If $N$ objects are placed into $k$ boxes, at least one box contains at least $\\lceil N/k \\rceil$ objects."
      },
      {
        "id": "FC-DM-08",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Inclusion-Exclusion Formula",
        "highYield": true,
        "front": "Write the Principle of Inclusion-Exclusion for 3 sets.",
        "back": "$|A \\cup B \\cup C| = (|A|+|B|+|C|) - (|A\\cap B|+|B\\cap C|+|A\\cap C|) + |A\\cap B\\cap C|$"
      },
      {
        "id": "FC-DM-09",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Homogeneous Recurrence",
        "highYield": true,
        "front": "How is a linear homogeneous recurrence with roots $r_1 \\ne r_2$ solved?",
        "back": "General solution: $a_n = C_1(r_1)^n + C_2(r_2)^n$, where constants $C_1, C_2$ are found from initial conditions."
      },
      {
        "id": "FC-DM-10",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Repeated Characteristic Roots",
        "highYield": false,
        "front": "What is the solution form when characteristic root $r$ has multiplicity 2?",
        "back": "General solution: $a_n = (C_1 + C_2 \\cdot n) \\cdot r^n$."
      },
      {
        "id": "FC-DM-11",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Generating Function of $a^n$",
        "highYield": true,
        "front": "What is the generating function for the sequence $1, a, a^2, a^3, \\dots$?",
        "back": "$G(x) = \\frac{1}{1 - ax}$ for $|ax| < 1$."
      },
      {
        "id": "FC-DM-12",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Derangement Formula",
        "highYield": false,
        "front": "What is the formula for the number of derangements $D_n$?",
        "back": "$D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$"
      },
      {
        "id": "FC-DM-13",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Handshaking Theorem",
        "highYield": true,
        "front": "State the Handshaking Theorem.",
        "back": "$\\sum_{v \\in V} \\deg(v) = 2|E|$. Sum of all vertex degrees is twice the number of edges."
      },
      {
        "id": "FC-DM-14",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Euler Circuit Condition",
        "highYield": true,
        "front": "When does a connected graph have an Euler Circuit vs Euler Path?",
        "back": "• Euler Circuit: Every vertex has even degree.\n• Euler Path: Exactly 2 vertices have odd degree."
      },
      {
        "id": "FC-DM-15",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Hamiltonian Graph",
        "highYield": true,
        "front": "What is a Hamiltonian Cycle?",
        "back": "A closed cycle that visits every vertex in the graph exactly once (and returns to the start)."
      },
      {
        "id": "FC-DM-16",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Euler's Planar Formula",
        "highYield": true,
        "front": "State Euler's Formula for connected planar graphs.",
        "back": "$V - E + R = 2$, where $V$ is vertices, $E$ is edges, and $R$ is faces/regions."
      },
      {
        "id": "FC-DM-17",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Planar Edge Bound",
        "highYield": true,
        "front": "What is the edge bound for a simple planar graph with $V \\ge 3$?",
        "back": "$E \\le 3V - 6$. For triangle-free planar graphs: $E \\le 2V - 4$."
      },
      {
        "id": "FC-DM-18",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Chromatic Number",
        "highYield": true,
        "front": "What is Chromatic Number $\\chi(G)$?",
        "back": "The minimum number of colors needed to color vertices so that no two adjacent vertices share the same color."
      },
      {
        "id": "FC-DM-19",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Four Color Theorem",
        "highYield": true,
        "front": "What is the Four Color Theorem?",
        "back": "Every planar graph has a chromatic number of at most 4 ($\\chi(G) \\le 4$)."
      },
      {
        "id": "FC-DM-20",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Bipartite Characterization",
        "highYield": true,
        "front": "When is a graph bipartite (2-colorable)?",
        "back": "A graph is bipartite if and only if it contains no cycles of odd length."
      }
    ],
    "COA": [
      {
        "id": "FC-SEM-COA-U1",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Booth's Multiplication Rules",
        "highYield": true,
        "front": "State Booth's Algorithm bit-pair operations for $(Q_0, Q_{-1})$.",
        "back": "• 00: Arithmetic Shift Right only.\n• 01: $A \\leftarrow A + M$, then Arithmetic Shift Right.\n• 10: $A \\leftarrow A - M$, then Arithmetic Shift Right.\n• 11: Arithmetic Shift Right only."
      },
      {
        "id": "FC-SEM-COA-U2",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Hardwired vs Microprogrammed Control",
        "highYield": true,
        "front": "Compare Hardwired and Microprogrammed Control Units.",
        "back": "• Hardwired: Combinational gates, fastest execution, rigid/inflexible (RISC).\n• Microprogrammed: Microcode in Control ROM, slower due to memory access, highly flexible/reprogrammable (CISC)."
      },
      {
        "id": "FC-COA-01",
        "subjectId": "COA",
        "unit": 3,
        "topic": "IEEE 754 Single Precision",
        "highYield": true,
        "front": "What is the 32-bit layout of IEEE 754 Single Precision Floating Point?",
        "back": "• Sign bit: 1 bit (0 = positive, 1 = negative)\n• Exponent: 8 bits (Bias = 127)\n• Fraction (Mantissa): 23 bits with implicit leading 1 ($1.F$)"
      },
      {
        "id": "FC-COA-02",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Restoring vs Non-Restoring Division",
        "highYield": true,
        "front": "What is the key difference between Restoring and Non-Restoring Division?",
        "back": "• Restoring: If $(A - M) < 0$, restores $A \\leftarrow A + M$ and sets $Q_0 = 0$.\n• Non-Restoring: Does not restore; if $A < 0$, adds $M$ in the next cycle."
      },
      {
        "id": "FC-COA-03",
        "subjectId": "COA",
        "unit": 3,
        "topic": "BCD Addition Rule",
        "highYield": true,
        "front": "When and why do we add 6 ($0110_2$) in BCD addition?",
        "back": "If the binary sum exceeds 9 ($1001$) or generates an output carry, add $0110_2$ to skip the 6 invalid 4-bit states."
      },
      {
        "id": "FC-COA-04",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Memory Hierarchy Levels",
        "highYield": true,
        "front": "Order memory hierarchy levels from fastest to slowest.",
        "back": "1. CPU Registers (fastest, smallest, costliest)\n2. Level 1, 2, 3 Cache (SRAM)\n3. Main Memory (DRAM)\n4. Solid State Drive / HDD (slowest, largest)"
      },
      {
        "id": "FC-COA-05",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Cache Hit Ratio & Average Memory Access Time (AMAT)",
        "highYield": true,
        "front": "Write the formula for Average Memory Access Time (AMAT).",
        "back": "$\\text{AMAT} = T_{\\text{cache}} + (1 - h) \\times T_{\\text{miss\\_penalty}}$, where $h$ is hit ratio."
      },
      {
        "id": "FC-COA-06",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Cache Mapping Techniques",
        "highYield": true,
        "front": "Name the 3 cache mapping techniques and their main trade-off.",
        "back": "1. Direct: Simple, fastest lookup, but high conflict misses.\n2. Fully Associative: Zero conflict misses, but costly hardware search.\n3. Set Associative: Best balance of speed and hit rate."
      },
      {
        "id": "FC-COA-07",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Write-Through vs Write-Back",
        "highYield": true,
        "front": "Differentiate Write-Through from Write-Back cache.",
        "back": "• Write-Through: Writes immediately to both cache and RAM.\n• Write-Back: Writes only to cache; writes to RAM only when block is evicted (using dirty bit)."
      },
      {
        "id": "FC-COA-08",
        "subjectId": "COA",
        "unit": 4,
        "topic": "SRAM vs DRAM",
        "highYield": true,
        "front": "Why is SRAM used for Cache and DRAM for Main Memory?",
        "back": "• SRAM: Flip-flop based, fast, no refresh needed, but large footprint/expensive.\n• DRAM: Capacitor based, dense, cheap, but slower and requires periodic refresh."
      },
      {
        "id": "FC-COA-09",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Translation Lookaside Buffer (TLB)",
        "highYield": true,
        "front": "What is a TLB and what problem does it solve?",
        "back": "A high-speed associative hardware cache for Page Table entries that eliminates the extra memory access required for address translation."
      },
      {
        "id": "FC-COA-10",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Page Fault",
        "highYield": true,
        "front": "What happens on a Page Fault?",
        "back": "1. MMU traps to OS kernel.\n2. OS locates page in swap space.\n3. Selects victim page in RAM and writes back if dirty.\n4. Reads new page into RAM and updates page table."
      },
      {
        "id": "FC-COA-11",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Direct Memory Access (DMA)",
        "highYield": true,
        "front": "What is DMA and why is it used?",
        "back": "Allows high-speed peripherals to transfer blocks of data directly to/from main memory without CPU intervention, freeing the CPU for computation."
      },
      {
        "id": "FC-COA-12",
        "subjectId": "COA",
        "unit": 5,
        "topic": "DMA Transfer Modes",
        "highYield": true,
        "front": "Define Burst Mode vs Cycle Stealing in DMA.",
        "back": "• Burst Mode: DMA controller holds bus until entire block is moved.\n• Cycle Stealing: DMA takes bus for 1 cycle per byte, interweaving with CPU."
      },
      {
        "id": "FC-COA-13",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Programmed vs Interrupt-Driven I/O",
        "highYield": true,
        "front": "Compare Programmed I/O with Interrupt-Driven I/O.",
        "back": "• Programmed I/O: CPU wastes time in a busy-waiting polling loop.\n• Interrupt-Driven I/O: CPU does other work; device signals via interrupt when ready."
      },
      {
        "id": "FC-COA-14",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Pipelining Speedup Formula",
        "highYield": true,
        "front": "State the ideal speedup formula for a $k$-stage pipeline.",
        "back": "$S_k = \\frac{n \\cdot k}{k + n - 1}$. For large $n$ ($n \\gg k$), maximum theoretical speedup approaches $k$."
      },
      {
        "id": "FC-COA-15",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Pipeline Hazards",
        "highYield": true,
        "front": "Name the 3 types of pipeline hazards and their causes.",
        "back": "1. Structural: Hardware resource conflict (e.g. single memory port).\n2. Data: Read-After-Write (RAW) data dependency.\n3. Control: Branch instructions altering PC."
      },
      {
        "id": "FC-COA-16",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Data Bypassing (Forwarding)",
        "highYield": true,
        "front": "How does Data Forwarding resolve data hazards?",
        "back": "Routes computed ALU results directly to the input of subsequent pipeline stages via multiplexers before writing back to register file."
      },
      {
        "id": "FC-COA-17",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Daisy Chaining",
        "highYield": true,
        "front": "How does Daisy Chaining work for interrupt priority?",
        "back": "Hardware priority line wired in series. Interrupt acknowledge signal passes through devices from highest to lowest; first requesting device intercepts it."
      },
      {
        "id": "FC-COA-18",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Cache Line Replacement Algorithms",
        "highYield": false,
        "front": "Name 3 common cache block replacement policies.",
        "back": "1. LRU (Least Recently Used) - best hit rate\n2. FIFO (First In First Out) - simple hardware\n3. LFU (Least Frequently Used)"
      },
      {
        "id": "FC-COA-19",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Pipeline Flush",
        "highYield": true,
        "front": "What is a Pipeline Flush (Stall)?",
        "back": "When a branch is taken, all speculative instructions already fetched into the pipeline are discarded (flushed), introducing stall bubble cycles."
      },
      {
        "id": "FC-COA-20",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Memory Mapped vs Isolated I/O",
        "highYield": false,
        "front": "Differentiate Memory-Mapped I/O from Isolated (I/O Mapped) I/O.",
        "back": "• Memory-Mapped: I/O ports share address space with RAM; uses standard load/store.\n• Isolated: Separate I/O address space; requires special IN and OUT instructions."
      }
    ],
    "OOPJ": [
      {
        "id": "FC-SEM-OOPJ-U1",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Method Overloading vs Overriding",
        "highYield": true,
        "front": "Differentiate Method Overloading and Method Overriding.",
        "back": "• Overloading: Same class, same name, different parameter signature, resolved at compile-time (static).\n• Overriding: Subclass redefines inherited method with exact same signature, resolved at runtime (dynamic method dispatch)."
      },
      {
        "id": "FC-SEM-OOPJ-U2",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Abstract Class vs Interface",
        "highYield": true,
        "front": "Compare Abstract Classes and Interfaces in Java 8+.",
        "back": "• Abstract Class: Can maintain instance state/fields and constructors; single inheritance.\n• Interface: Only public static final constants; default & static methods; supports multiple inheritance."
      },
      {
        "id": "FC-OOPJ-01",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Thread Creation Mechanisms",
        "highYield": true,
        "front": "What are the two primary ways to create a Thread in Java?",
        "back": "1. Extend java.lang.Thread and override run()\n2. Implement java.lang.Runnable and pass it to new Thread(runnable). (Preferred to allow extending another class)."
      },
      {
        "id": "FC-OOPJ-02",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "start() vs run()",
        "highYield": true,
        "front": "What is the difference between calling start() and run() on a Thread?",
        "back": "• start(): Creates a new native execution thread with its own call stack and invokes run().\n• run(): Executes synchronously on the current thread like a normal method call (no multithreading)."
      },
      {
        "id": "FC-OOPJ-03",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Thread Lifecycle States",
        "highYield": true,
        "front": "Name the 6 states in the Thread.State enum.",
        "back": "1. NEW\n2. RUNNABLE\n3. BLOCKED (waiting for monitor lock)\n4. WAITING\n5. TIMED_WAITING (sleep/timed wait)\n6. TERMINATED"
      },
      {
        "id": "FC-OOPJ-04",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Synchronized Method vs Block",
        "highYield": true,
        "front": "Why is a synchronized block preferred over a synchronized method?",
        "back": "Synchronized blocks reduce the lock scope to only the critical section code, minimizing thread contention and improving concurrency performance."
      },
      {
        "id": "FC-OOPJ-05",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "wait() vs sleep()",
        "highYield": true,
        "front": "Key differences between wait() and Thread.sleep()?",
        "back": "• wait(): Member of Object; releases the lock; awakened by notify()/notifyAll(); must be in synchronized context.\n• sleep(): Member of Thread; holds locks while sleeping; wakes on timeout."
      },
      {
        "id": "FC-OOPJ-06",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Deadlock Conditions",
        "highYield": true,
        "front": "What are the 4 Coffman conditions required for Deadlock?",
        "back": "1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait"
      },
      {
        "id": "FC-OOPJ-07",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Byte vs Character Streams",
        "highYield": true,
        "front": "Compare Byte Streams and Character Streams in java.io.",
        "back": "• Byte Streams: Derived from InputStream/OutputStream; handles raw 8-bit binary data (images, audio).\n• Character Streams: Derived from Reader/Writer; handles 16-bit Unicode characters with character encoding."
      },
      {
        "id": "FC-OOPJ-08",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Serialization & serialVersionUID",
        "highYield": true,
        "front": "What is serialVersionUID and why should it be explicitly declared?",
        "back": "A unique version identifier for a Serializable class. Declaring it explicitly prevents InvalidClassException during deserialization when harmless class changes occur."
      },
      {
        "id": "FC-OOPJ-09",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "transient Keyword",
        "highYield": true,
        "front": "What does the transient keyword do during serialization?",
        "back": "Marks a field to be excluded from object serialization (e.g. passwords, file handles, calculated values). It resets to default value upon deserialization."
      },
      {
        "id": "FC-OOPJ-10",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Generics: PECS Principle",
        "highYield": true,
        "front": "What is the PECS rule in Java Generics wildcards?",
        "back": "Producer Extends, Consumer Super:\n• Use <? extends T> when reading data from a collection (Producer).\n• Use <? super T> when writing data into a collection (Consumer)."
      },
      {
        "id": "FC-OOPJ-11",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Generics Type Erasure",
        "highYield": false,
        "front": "What happens during Type Erasure in Java compiler?",
        "back": "Type parameters are replaced with their upper bound (or Object if unbounded), type casts are inserted where needed, and bridge methods are generated to preserve polymorphism."
      },
      {
        "id": "FC-OOPJ-12",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "ArrayList vs LinkedList",
        "highYield": true,
        "front": "When should you choose ArrayList over LinkedList?",
        "back": "• ArrayList: Frequent random index access (O(1)), cache-friendly, less memory overhead.\n• LinkedList: Frequent insertion/deletion at head or middle when already positioned (O(1)), no array copying."
      },
      {
        "id": "FC-OOPJ-13",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "HashSet vs TreeSet",
        "highYield": true,
        "front": "Compare HashSet and TreeSet.",
        "back": "• HashSet: Backed by HashMap, O(1) average lookup/insert, unordered.\n• TreeSet: Backed by Red-Black Tree (NavigableMap), O(log n) lookup/insert, sorted in natural/comparator order."
      },
      {
        "id": "FC-OOPJ-14",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "HashMap vs ConcurrentHashMap",
        "highYield": true,
        "front": "Why is ConcurrentHashMap superior to Hashtable or Collections.synchronizedMap?",
        "back": "Hashtable locks the entire map for every operation. ConcurrentHashMap uses lock striping / synchronized buckets and lock-free reads (volatile CAS), offering much higher concurrent throughput."
      },
      {
        "id": "FC-OOPJ-15",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Comparable vs Comparator",
        "highYield": true,
        "front": "Contrast Comparable<T> and Comparator<T>.",
        "back": "• Comparable<T>: java.lang; defines natural single ordering via int compareTo(T o) on 'this' object.\n• Comparator<T>: java.util; defines separate external multiple sorting strategies via int compare(T o1, T o2)."
      },
      {
        "id": "FC-OOPJ-16",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "equals() and hashCode() Contract",
        "highYield": true,
        "front": "State the contract between equals() and hashCode().",
        "back": "1. If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode().\n2. If hashCodes match, objects are NOT required to be equal (hash collision allowed)."
      },
      {
        "id": "FC-OOPJ-17",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Delegation Event Model Components",
        "highYield": true,
        "front": "What are the 3 core elements of the Delegation Event Model?",
        "back": "1. Event Source: Generates the event (e.g. JButton, JTextField).\n2. Event Object: Encapsulates state change (e.g. ActionEvent).\n3. Event Listener: Interface implementing handler methods (e.g. ActionListener)."
      },
      {
        "id": "FC-OOPJ-18",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Adapter Classes",
        "highYield": false,
        "front": "What are Event Adapter classes in AWT/Swing?",
        "back": "Abstract classes that provide empty implementations of listener interfaces with multiple methods (e.g. MouseAdapter), allowing developers to override only required callbacks."
      },
      {
        "id": "FC-OOPJ-19",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Heavyweight vs Lightweight Components",
        "highYield": true,
        "front": "Why are Swing components called 'lightweight' compared to AWT?",
        "back": "AWT uses native OS windowing peers (heavyweight). Swing components are written purely in Java (lightweight), drawn onto a top-level canvas, giving identical look-and-feel across all platforms."
      },
      {
        "id": "FC-OOPJ-20",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "AWT/Swing Layout Managers",
        "highYield": false,
        "front": "Name the 5 common AWT/Swing Layout Managers.",
        "back": "1. FlowLayout: Arranges left-to-right in lines.\n2. BorderLayout: 5 regions (North, South, East, West, Center).\n3. GridLayout: Uniform $m \\times n$ grid.\n4. CardLayout: Stacks like a deck of cards.\n5. GridBagLayout: Highly flexible non-uniform grid."
      }
    ],
    "DBMS": [
      {
        "id": "FC-SEM-DBMS-U1",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Three-Schema Architecture",
        "highYield": true,
        "front": "Name the 3 levels of ANSI-SPARC Database Architecture.",
        "back": "1. External (View) Level: User and application customized views.\n2. Conceptual (Logical) Level: What data is stored and entity relationships.\n3. Internal (Physical) Level: How data is physically stored on disk (indexes, clustering)."
      },
      {
        "id": "FC-SEM-DBMS-U2",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Relational Algebra Operators",
        "highYield": true,
        "front": "List the 5 fundamental Relational Algebra operators.",
        "back": "1. Selection ($\\sigma$): Row filtering.\n2. Projection ($\\pi$): Column selection.\n3. Cartesian Product ($\\times$): Cross join.\n4. Set Union ($\\cup$): Combines tuples.\n5. Set Difference ($-$)."
      },
      {
        "id": "FC-DBMS-01",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "1NF, 2NF, 3NF, BCNF Summary",
        "highYield": true,
        "front": "State the core condition for 1NF, 2NF, 3NF, and BCNF.",
        "back": "• 1NF: Atomic scalar values, no repeating groups.\n• 2NF: 1NF + no partial dependencies (non-prime fully dependent on key).\n• 3NF: 2NF + no transitive dependencies (for $X \\to Y$, $X$ is superkey or $Y$ is prime).\n• BCNF: For every non-trivial $X \\to Y$, $X$ MUST be a superkey."
      },
      {
        "id": "FC-DBMS-02",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "3NF vs BCNF Tradeoff",
        "highYield": true,
        "front": "What is the fundamental tradeoff between 3NF and BCNF?",
        "back": "3NF always guarantees both Lossless Join and Dependency Preservation.\nBCNF guarantees Lossless Join, but Dependency Preservation cannot always be achieved."
      },
      {
        "id": "FC-DBMS-03",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Lossless Join Decomposition Condition",
        "highYield": true,
        "front": "What condition guarantees that decomposing $R$ into $(R_1, R_2)$ is Lossless?",
        "back": "The common attributes must form a superkey of at least one relation:\n$(R_1 \\cap R_2) \\to R_1 \\quad \\text{or} \\quad (R_1 \\cap R_2) \\to R_2$."
      },
      {
        "id": "FC-DBMS-04",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Multi-Valued Dependency & 4NF",
        "highYield": true,
        "front": "Define Multi-Valued Dependency (MVD) and 4NF.",
        "back": "• MVD ($X \\twoheadrightarrow Y$): $Y$ is independent of $R - X - Y$ given $X$.\n• 4NF: If non-trivial $X \\twoheadrightarrow Y$ holds, $X$ must be a superkey."
      },
      {
        "id": "FC-DBMS-05",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "ACID Properties & Components",
        "highYield": true,
        "front": "Match ACID properties to the DBMS subsystem responsible for them.",
        "back": "• Atomicity: Recovery Manager (Log-based Undo)\n• Consistency: Application programmer + Integrity constraints\n• Isolation: Concurrency Control Manager (Locking/Timestamping)\n• Durability: Recovery Manager (WAL Redo)"
      },
      {
        "id": "FC-DBMS-06",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Conflict Operations",
        "highYield": true,
        "front": "When do two operations in a concurrent schedule conflict?",
        "back": "When they: 1. Belong to different transactions, 2. Access the same data item, 3. At least one of them is a WRITE operation ($R-W$, $W-R$, $W-W$)."
      },
      {
        "id": "FC-DBMS-07",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Conflict vs View Serializability",
        "highYield": true,
        "front": "What is the difference between Conflict and View Serializability?",
        "back": "Conflict serializability can be transformed into a serial schedule by swapping non-conflicting operations (tested via acyclic Precedence Graph in O(V+E)). View serializability is NP-complete and allows blind writes."
      },
      {
        "id": "FC-DBMS-08",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Two-Phase Locking (2PL)",
        "highYield": true,
        "front": "What is the Two-Phase Locking protocol and its guarantee?",
        "back": "Phase 1: Growing (acquiring locks, releasing none).\nPhase 2: Shrinking (releasing locks, acquiring none).\n• Guarantees: Conflict Serializability.\n• Does NOT guarantee: Freedom from Deadlock."
      },
      {
        "id": "FC-DBMS-09",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Strict 2PL vs Rigorous 2PL",
        "highYield": true,
        "front": "Differentiate Strict 2PL and Rigorous 2PL.",
        "back": "• Strict 2PL: All Exclusive (X) locks held until commit/abort (prevents cascading aborts).\n• Rigorous 2PL: ALL locks (both Shared S and Exclusive X) held until commit/abort."
      },
      {
        "id": "FC-DBMS-10",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Wait-Die vs Wound-Wait",
        "highYield": true,
        "front": "Compare Wait-Die and Wound-Wait deadlock prevention.",
        "back": "• Wait-Die (Non-preemptive): Old requests young $\\to$ old waits. Young requests old $\\to$ young dies.\n• Wound-Wait (Preemptive): Old requests young $\\to$ young is wounded (preempted/aborts). Young requests old $\\to$ young waits."
      },
      {
        "id": "FC-DBMS-11",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Thomas' Write Rule",
        "highYield": false,
        "front": "What does Thomas' Write Rule state in Timestamp Ordering?",
        "back": "If a transaction $T$ attempts $W(Q)$ and $TS(T) < W\\text{-timestamp}(Q)$, the write is simply ignored instead of aborting $T$, because its write has already been overwritten by a newer value."
      },
      {
        "id": "FC-DBMS-12",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Write-Ahead Logging (WAL)",
        "highYield": true,
        "front": "State the Write-Ahead Logging (WAL) protocol rules.",
        "back": "1. Undo rule: Before a dirty database page is written to disk, its corresponding undo log record must be flushed to stable storage.\n2. Redo rule: Before a transaction commits, all its log records must be flushed to stable storage."
      },
      {
        "id": "FC-DBMS-13",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Deferred vs Immediate Modification",
        "highYield": true,
        "front": "Compare Deferred Modification with Immediate Modification during crash recovery.",
        "back": "• Deferred: Writes to disk only after commit $\\implies$ Requires only REDO (no UNDO ever).\n• Immediate: Writes can happen before commit $\\implies$ Requires both UNDO (uncommitted) and REDO (committed)."
      },
      {
        "id": "FC-DBMS-14",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Checkpointing in Recovery",
        "highYield": true,
        "front": "What is Checkpointing and why is it crucial?",
        "back": "Periodically pauses log writing, flushes all modified memory buffers to disk, and records `<CHECKPOINT>` in the log. Crash recovery never needs to scan log records prior to the checkpoint."
      },
      {
        "id": "FC-DBMS-15",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Shadow Paging",
        "highYield": false,
        "front": "What is Shadow Paging and its main disadvantage?",
        "back": "Maintains Current Page Table and Shadow Page Table on disk. Atomic switch on commit. Disadvantages: Data page clustering is destroyed, and garbage collection of old pages creates overhead."
      },
      {
        "id": "FC-DBMS-16",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Dense vs Sparse Index",
        "highYield": true,
        "front": "Distinguish between Dense and Sparse Indexes.",
        "back": "• Dense Index: An entry exists for EVERY search-key value in the data file.\n• Sparse Index: An entry exists only for some search-key values (typically one per disk block; requires ordered data)."
      },
      {
        "id": "FC-DBMS-17",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Clustered vs Secondary Index",
        "highYield": true,
        "front": "Compare Primary (Clustered) Index with Secondary Index.",
        "back": "• Primary/Clustering Index: Physical file is sorted on this search key (at most ONE per table).\n• Secondary Index: Physical file is NOT ordered by this key; points to records via primary key or pointer (can have MULTIPLE)."
      },
      {
        "id": "FC-DBMS-18",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "B-Tree vs B+ Tree",
        "highYield": true,
        "front": "Why are B+ Trees preferred over B-Trees for database indexing?",
        "back": "1. Internal nodes store keys only $\\implies$ higher fan-out $\\implies$ shorter tree height.\n2. Leaves contain all records and are linked sequentially $\\implies$ lightning-fast range queries."
      },
      {
        "id": "FC-DBMS-19",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "B+ Tree Height Bound",
        "highYield": false,
        "front": "What is the maximum height of a B+ Tree with $N$ entries and order $m$?",
        "back": "$h \\le \\lceil \\log_{\\lceil m/2 \\rceil} (N/2) \\rceil + 1$. Because fan-out is large (typically 100+), B+ tree height rarely exceeds 3 or 4 in production databases."
      },
      {
        "id": "FC-DBMS-20",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "ARIES 3 Recovery Phases",
        "highYield": true,
        "front": "Name and define the 3 phases of the ARIES recovery algorithm.",
        "back": "1. Analysis: Scans forward from last checkpoint to find active transactions (undo list) and dirty pages.\n2. Redo: Repeats history forward from oldest unwritten page LSN to restore exact crash state.\n3. Undo: Scans backward undoing active uncommitted transactions."
      }
    ],
    "SE": [
      {
        "id": "FC-SEM-SE-U1",
        "subjectId": "SE",
        "unit": 1,
        "topic": "SDLC Models Comparison",
        "highYield": true,
        "front": "When should you choose Waterfall vs Spiral vs Agile?",
        "back": "• Waterfall: Stable, well-understood requirements, zero ambiguity.\n• Spiral: High-risk, large-scale, mission-critical systems.\n• Agile/Scrum: Rapidly evolving requirements, fast time-to-market, customer collaboration."
      },
      {
        "id": "FC-SEM-SE-U2",
        "subjectId": "SE",
        "unit": 2,
        "topic": "SRS Characteristics",
        "highYield": true,
        "front": "List 5 essential characteristics of a good SRS document.",
        "back": "1. Correct\n2. Unambiguous\n3. Complete\n4. Consistent\n5. Verifiable / Testable"
      },
      {
        "id": "FC-SE-01",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Cohesion Hierarchy",
        "highYield": true,
        "front": "Rank Cohesion types from best (strongest) to worst (weakest).",
        "back": "1. Functional (Best - single dedicated task)\n2. Sequential (Output of A is input to B)\n3. Communicational (Operate on same data)\n4. Procedural\n5. Temporal\n6. Logical\n7. Coincidental (Worst - random grouping)"
      },
      {
        "id": "FC-SE-02",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Coupling Hierarchy",
        "highYield": true,
        "front": "Rank Coupling types from best (loosest) to worst (tightest).",
        "back": "1. Data Coupling (Best - primitive parameters passed)\n2. Stamp Coupling (Data structures passed)\n3. Control Coupling (Flags control logic)\n4. External Coupling\n5. Common Coupling (Shared global memory)\n6. Content Coupling (Worst - modifies other module's internals)"
      },
      {
        "id": "FC-SE-03",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Theo Mandel's 3 Golden Rules",
        "highYield": true,
        "front": "What are Theo Mandel's 3 Golden Rules for UI Design?",
        "back": "1. Place the user in control (undo, flexible paths, non-modal).\n2. Reduce the user's memory load (recognition over recall, chunking, defaults).\n3. Make the interface consistent (visual layouts, typography, verb-noun grammar)."
      },
      {
        "id": "FC-SE-04",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Verification vs Validation",
        "highYield": true,
        "front": "What is the difference between Verification and Validation?",
        "back": "• Verification: 'Are we building the product right?' Checks conformance to specifications (reviews, inspections, static analysis).\n• Validation: 'Are we building the right product?' Checks software against customer operational needs (testing against user requirements)."
      },
      {
        "id": "FC-SE-05",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Top-Down vs Bottom-Up Integration",
        "highYield": true,
        "front": "Contrast Top-Down and Bottom-Up Integration Testing.",
        "back": "• Top-Down: Integrates from top control module downward; requires STUBS (dummy worker subroutines).\n• Bottom-Up: Integrates from low-level leaf modules upward; requires DRIVERS (dummy calling programs)."
      },
      {
        "id": "FC-SE-06",
        "subjectId": "SE",
        "unit": 4,
        "topic": "McCabe's Cyclomatic Complexity Formula",
        "highYield": true,
        "front": "Write McCabe's Cyclomatic Complexity formulas for flow graph $G$.",
        "back": "1. $V(G) = E - N + 2P$ (Edges - Nodes + 2×Components)\n2. For $P = 1$: $V(G) = E - N + 2$\n3. $V(G) = P_{red} + 1$ (Predicate nodes + 1)\n4. $V(G) = \\text{Number of enclosed regions} + 1$"
      },
      {
        "id": "FC-SE-07",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Basis Path Testing",
        "highYield": true,
        "front": "What is Basis Path Testing and what does $V(G)$ guarantee?",
        "back": "A white-box technique that derives linearly independent execution paths through code. $V(G)$ gives the exact upper bound on the number of test cases required to guarantee 100% statement and branch coverage."
      },
      {
        "id": "FC-SE-08",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Boundary Value Analysis (BVA)",
        "highYield": true,
        "front": "What test cases are chosen for a variable with valid range $[a, b]$ in BVA?",
        "back": "Test values: $a-1, a, a+1$ (around minimum) and $b-1, b, b+1$ (around maximum), plus a nominal center value. Errors congregate heavily at boundaries."
      },
      {
        "id": "FC-SE-09",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Equivalence Class Partitioning",
        "highYield": true,
        "front": "How does Equivalence Class Partitioning work?",
        "back": "Partitions input data into valid and invalid equivalence classes. Selects one test case representative from each partition, minimizing redundant tests while covering all operational modes."
      },
      {
        "id": "FC-SE-10",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Alpha vs Beta Testing",
        "highYield": true,
        "front": "Compare Alpha and Beta Testing.",
        "back": "• Alpha: Conducted at developer's site by users with developer recording errors.\n• Beta: Conducted at real client/customer sites in live uncontrolled production environment."
      },
      {
        "id": "FC-SE-11",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Smoke vs Sanity Testing",
        "highYield": false,
        "front": "Distinguish between Smoke Testing and Sanity Testing.",
        "back": "• Smoke: Broad, shallow test of the entire system on a new build to verify basic readiness for deep testing.\n• Sanity: Narrow, deep test focused specifically on recently patched bugs to verify quick fixes."
      },
      {
        "id": "FC-SE-12",
        "subjectId": "SE",
        "unit": 5,
        "topic": "SEI CMMI 5 Maturity Levels",
        "highYield": true,
        "front": "List the 5 levels of CMMI and their defining keyword.",
        "back": "Level 1: Initial (Ad-hoc, chaotic)\nLevel 2: Managed (Repeatable project management)\nLevel 3: Defined (Standardized organizational process)\nLevel 4: Quantitatively Managed (Statistical control & metrics)\nLevel 5: Optimizing (Continuous defect prevention & innovation)"
      },
      {
        "id": "FC-SE-13",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Basic COCOMO Modes",
        "highYield": true,
        "front": "What are the 3 project types in Basic COCOMO and their characteristics?",
        "back": "1. Organic: Small, experienced teams in familiar environment (Effort $E = 2.4(\\text{KLOC})^{1.05}$).\n2. Semidetached: Medium teams with mixed experience ($E = 3.0(\\text{KLOC})^{1.12}$).\n3. Embedded: Complex projects with tight hardware/regulatory constraints ($E = 3.6(\\text{KLOC})^{1.20}$)."
      },
      {
        "id": "FC-SE-14",
        "subjectId": "SE",
        "unit": 5,
        "topic": "McCall's Quality Factors 3 Views",
        "highYield": true,
        "front": "What are the 3 pillars of McCall's software quality model?",
        "back": "1. Product Operation: Correctness, Reliability, Efficiency, Integrity, Usability.\n2. Product Revision: Maintainability, Flexibility, Testability.\n3. Product Transition: Portability, Reusability, Interoperability."
      },
      {
        "id": "FC-SE-15",
        "subjectId": "SE",
        "unit": 5,
        "topic": "RMMM Plan Components",
        "highYield": true,
        "front": "Explain the 3 parts of an RMMM Plan.",
        "back": "• Risk Mitigation: Proactive steps taken to avoid the risk.\n• Risk Monitoring: Tracking risk factors to detect when it is becoming reality.\n• Risk Management: Contingency actions deployed when the risk turns into an actual problem."
      },
      {
        "id": "FC-SE-16",
        "subjectId": "SE",
        "unit": 5,
        "topic": "4 Types of Software Maintenance",
        "highYield": true,
        "front": "Name and define the 4 types of software maintenance.",
        "back": "1. Corrective (20%): Fixing reported operational bugs.\n2. Adaptive (25%): Adapting to new OS, hardware, or external environment changes.\n3. Perfective (50%+): Adding enhancements and new user features.\n4. Preventive (5%): Re-engineering to improve maintainability and forestall future issues."
      },
      {
        "id": "FC-SE-17",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Formal Technical Review (FTR) Rules",
        "highYield": false,
        "front": "What are 3 core golden rules of a Formal Technical Review (FTR)?",
        "back": "1. Review the product, NOT the producer (maintain objectivity).\n2. Keep it focused (typically under 2 hours, 3-5 reviewers).\n3. Stick to finding defects; do NOT redesign or solve problems during review."
      },
      {
        "id": "FC-SE-18",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Risk Exposure Formula",
        "highYield": true,
        "front": "How is Risk Exposure ($RE$) calculated?",
        "back": "$RE = P \\times C$, where $P$ is the probability of the adverse risk event occurring ($0 < P < 1$), and $C$ is the cost/loss incurred if it occurs."
      },
      {
        "id": "FC-SE-19",
        "subjectId": "SE",
        "unit": 5,
        "topic": "ISO 9126 Six Characteristics",
        "highYield": false,
        "front": "Name the 6 top-level quality characteristics in ISO 9126.",
        "back": "1. Functionality\n2. Reliability\n3. Usability\n4. Efficiency\n5. Maintainability\n6. Portability"
      },
      {
        "id": "FC-SE-20",
        "subjectId": "SE",
        "unit": 5,
        "topic": "White-Box vs Black-Box Testing",
        "highYield": true,
        "front": "Summarize White-Box vs Black-Box Testing.",
        "back": "• White-Box: Tests internal code paths, logic branches, and statements (Basis path, Cyclomatic complexity, Data flow).\n• Black-Box: Tests external inputs/outputs against functional requirements without seeing internal code (BVA, Equivalence partitioning)."
      }
    ],
    "ES": [
      {
        "id": "FC-SEM-ES-U1",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Lindeman's 10% Law",
        "highYield": true,
        "front": "State Lindeman's 10% Law of Energy Transfer.",
        "back": "Only about 10% of chemical energy from one trophic level is converted into organic biomass at the next level; the remaining 90% is dissipated as metabolic respiration heat."
      },
      {
        "id": "FC-SEM-ES-U2",
        "subjectId": "ES",
        "unit": 2,
        "topic": "BOD vs COD",
        "highYield": true,
        "front": "Compare BOD with COD.",
        "back": "• BOD: Measures biodegradable organic matter via 5-day aerobic microbial incubation at 20°C.\n• COD: Measures total (both biodegradable and non-biodegradable) organic content via rapid chemical oxidation with potassium dichromate ($K_2Cr_2O_7$). COD > BOD always."
      },
      {
        "id": "FC-ES-01",
        "subjectId": "ES",
        "unit": 3,
        "topic": "CPCB Ambient Noise Standards",
        "highYield": true,
        "front": "State CPCB ambient noise limits for Day and Night in dB(A).",
        "back": "• Industrial: 75 dB (Day) / 70 dB (Night)\n• Commercial: 65 dB (Day) / 55 dB (Night)\n• Residential: 55 dB (Day) / 45 dB (Night)\n• Silence Zone (100m around hospitals/schools): 50 dB (Day) / 40 dB (Night)"
      },
      {
        "id": "FC-ES-02",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Solid Waste Hierarchy (3Rs)",
        "highYield": true,
        "front": "Rank the Solid Waste Management hierarchy from most preferred to least.",
        "back": "1. Source Reduction & Prevention (Reduce - Best)\n2. Reuse\n3. Recycling & Composting\n4. Energy Recovery (Incineration / Waste-to-Energy)\n5. Sanitary Landfill Disposal (Least preferred)"
      },
      {
        "id": "FC-ES-03",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Landfill Leachate Prevention",
        "highYield": true,
        "front": "What is Leachate and how is it controlled in modern sanitary landfills?",
        "back": "Toxic liquid formed when rainwater percolates through decomposing waste. Controlled by impermeable composite liners (high-density polyethylene HDPE + compacted clay) and perforated leachate collection pipes."
      },
      {
        "id": "FC-ES-04",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Biomagnification vs Bioaccumulation",
        "highYield": true,
        "front": "Differentiate Bioaccumulation from Biomagnification.",
        "back": "• Bioaccumulation: Increase of a chemical concentration in a single organism's tissue over its lifespan.\n• Biomagnification: Progressive increase of toxic concentration at higher trophic levels up the food chain (e.g. DDT, Mercury)."
      },
      {
        "id": "FC-ES-05",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Brundtland Sustainable Development",
        "highYield": true,
        "front": "State the Brundtland definition of Sustainable Development.",
        "back": "'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' (Brundtland Report / WCED 1987)."
      },
      {
        "id": "FC-ES-06",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Rainwater Harvesting Techniques",
        "highYield": true,
        "front": "What are the two major techniques of Rainwater Harvesting?",
        "back": "1. Storage for Direct Use: Collecting rooftop runoff into masonry/plastic storage cisterns for domestic use.\n2. Groundwater Recharge: Diverting water into percolation pits, recharge trenches, and abandoned dug wells to revive aquifers."
      },
      {
        "id": "FC-ES-07",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Acid Rain Reactions",
        "highYield": true,
        "front": "Write the chemical reactions causing Acid Rain.",
        "back": "• $SO_2 + H_2O \\to H_2SO_3 \\xrightarrow{O_2} H_2SO_4$ (Sulfuric Acid)\n• $2NO_2 + H_2O \\to HNO_2 + HNO_3$ (Nitric Acid)\n• Occurs when precipitation pH drops below 5.6."
      },
      {
        "id": "FC-ES-08",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Ozone Depletion Mechanism & CFCs",
        "highYield": true,
        "front": "How do CFCs destroy stratospheric ozone?",
        "back": "UV photolysis releases chlorine radical: $CF_2Cl_2 \\xrightarrow{h\\nu} CF_2Cl + Cl^\\bullet$.\n$Cl^\\bullet + O_3 \\to ClO^\\bullet + O_2$\n$ClO^\\bullet + O \\to Cl^\\bullet + O_2$\nA single chlorine atom catalytically destroys over 100,000 ozone molecules!"
      },
      {
        "id": "FC-ES-09",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Montreal vs Kyoto Protocol",
        "highYield": true,
        "front": "Compare Montreal Protocol with Kyoto Protocol.",
        "back": "• Montreal Protocol (1987): Phasing out Ozone-Depleting Substances (CFCs, Halons).\n• Kyoto Protocol (1997): Binding emission caps on Greenhouse Gases ($CO_2, CH_4, N_2O, SF_6, HFCs, PFCs$) to fight global warming."
      },
      {
        "id": "FC-ES-10",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Global Warming Potential (GWP)",
        "highYield": true,
        "front": "Order major GHGs by 100-year Global Warming Potential (GWP).",
        "back": "$CO_2$ (1) < $CH_4$ (~28) < $N_2O$ (~265) < $CFCs/HFCs$ (1,000 to 12,000+). $CO_2$ causes most warming due to sheer emitted volume."
      },
      {
        "id": "FC-ES-11",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Major Nuclear Accidents",
        "highYield": false,
        "front": "Name the 3 most infamous nuclear power plant disasters.",
        "back": "1. Three Mile Island (USA, 1979) - Partial core meltdown.\n2. Chernobyl (Ukraine, 1986) - Level 7 steam explosion & graphite fire, massive radioactive fallout.\n3. Fukushima Daiichi (Japan, 2011) - Level 7 tsunami-induced blackout & meltdowns."
      },
      {
        "id": "FC-ES-12",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Indian Environmental Acts Timeline",
        "highYield": true,
        "front": "Match Indian environmental acts to their enactment years.",
        "back": "• 1972: Wildlife Protection Act\n• 1974: Water (Prevention & Control of Pollution) Act\n• 1980: Forest Conservation Act\n• 1981: Air (Prevention & Control of Pollution) Act\n• 1986: Environment (Protection) Act (Umbrella Act)"
      },
      {
        "id": "FC-ES-13",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Environment (Protection) Act 1986 Genesis",
        "highYield": true,
        "front": "What event triggered the enactment of the Environment Protection Act 1986?",
        "back": "The catastrophic Bhopal Gas Tragedy (December 2-3, 1984), where methyl isocyanate (MIC) gas leaked from Union Carbide plant, killing thousands."
      },
      {
        "id": "FC-ES-14",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Constitutional Articles 48A & 51A(g)",
        "highYield": true,
        "front": "Quote Constitutional Articles 48A and 51A(g).",
        "back": "• Art 48A (Directive Principle): State shall endeavor to protect and improve the environment and safeguard forests/wildlife.\n• Art 51A(g) (Fundamental Duty): Duty of every citizen to protect and improve the natural environment including forests, lakes, rivers, and wildlife."
      },
      {
        "id": "FC-ES-15",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Air Act 1987 Amendment on Noise",
        "highYield": false,
        "front": "How is noise legally regulated under Indian environmental statutes?",
        "back": "The Air Act was amended in 1987 to include 'noise' within the definition of air pollutants under Section 2(a), giving legal teeth to the Noise Pollution (Regulation & Control) Rules 2000."
      },
      {
        "id": "FC-ES-16",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Demographic Transition Theory",
        "highYield": true,
        "front": "What are the 4 stages of the Demographic Transition Model?",
        "back": "Stage 1: High birth & death rates (stationary).\nStage 2: High birth, falling death rates (population explosion).\nStage 3: Falling birth rate (growth slows).\nStage 4: Low birth and death rates (stable/aging population)."
      },
      {
        "id": "FC-ES-17",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Role of IT in Environment",
        "highYield": true,
        "front": "How does Information Technology aid Environmental Conservation?",
        "back": "1. Remote Sensing (RS) & GIS: Real-time monitoring of deforestation, coastal erosion, groundwater, and wildfires.\n2. Disaster Warning: Supercomputer weather models for cyclone tracking.\n3. Public Portals: CPCB real-time AQI monitoring and ENVIS databases."
      },
      {
        "id": "FC-ES-18",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Hazardous E-Waste Materials",
        "highYield": false,
        "front": "Name 4 hazardous toxic substances found in discarded electronics (E-waste).",
        "back": "1. Lead (CRT monitors, solder - neurological toxin)\n2. Mercury (CCFL backlights, switches - brain/kidney damage)\n3. Cadmium (rechargeable Ni-Cd batteries - osteomalacia)\n4. Brominated Flame Retardants (BFRs) in plastics"
      },
      {
        "id": "FC-ES-19",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Important Environmental Days",
        "highYield": false,
        "front": "Recall the calendar dates of 4 key Environmental observances.",
        "back": "• World Water Day: March 22\n• Earth Day: April 22\n• World Environment Day: June 5\n• World Ozone Day: September 16"
      },
      {
        "id": "FC-ES-20",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Wildlife Protection Schedules",
        "highYield": false,
        "front": "How are species protected under India's Wildlife Protection Act 1972?",
        "back": "Species are categorized into Schedules: Schedule I and II provide absolute protection and highest penalties for poaching (e.g. Tiger, Lion, Elephant, Snow Leopard). Schedules III & IV protect non-endangered animals; Schedule V lists vermin."
      }
    ],
    "IE": [
      {
        "id": "FC-SEM-IE-U1",
        "subjectId": "IE",
        "unit": 1,
        "topic": "5 Stages of Design Thinking",
        "highYield": true,
        "front": "List the 5 steps of the Design Thinking process in order.",
        "back": "1. Empathize (observe and interview users)\n2. Define (formulate Point-of-View problem statement)\n3. Ideate (brainstorm divergent ideas)\n4. Prototype (build rapid testable mockups)\n5. Test (gather feedback and iterate)"
      },
      {
        "id": "FC-SEM-IE-U2",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Build-Measure-Learn Cycle",
        "highYield": true,
        "front": "Explain the Build-Measure-Learn feedback loop.",
        "back": "• Build: Develop Minimum Viable Product (MVP).\n• Measure: Collect quantitative and qualitative customer usage data.\n• Learn: Validate assumptions, then decide to Pivot (change strategy) or Persevere (optimize)."
      },
      {
        "id": "FC-IE-01",
        "subjectId": "IE",
        "unit": 3,
        "topic": "9 Blocks of Business Model Canvas",
        "highYield": true,
        "front": "List all 9 building blocks of the Business Model Canvas.",
        "back": "1. Customer Segments\n2. Value Propositions\n3. Channels\n4. Customer Relationships\n5. Revenue Streams\n6. Key Resources\n7. Key Activities\n8. Key Partnerships\n9. Cost Structure"
      },
      {
        "id": "FC-IE-02",
        "subjectId": "IE",
        "unit": 3,
        "topic": "LTV and CAC Definitions",
        "highYield": true,
        "front": "Define CAC and LTV, and state the target benchmark ratio.",
        "back": "• CAC (Customer Acquisition Cost): Total marketing & sales spend / Number of new customers acquired.\n• LTV (Customer Lifetime Value): Gross profit generated by a customer over entire relationship.\n• Golden Target: $LTV / CAC \\ge 3:1$."
      },
      {
        "id": "FC-IE-03",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Startup Funding Stages",
        "highYield": true,
        "front": "Order the typical venture funding stages from earliest to mature.",
        "back": "1. Pre-Seed / Bootstrapping (Founders, F&F)\n2. Seed Stage (Angel Investors, Micro-VCs, Grants)\n3. Series A (Product-market fit, VC firms)\n4. Series B & C (Scaling, market expansion, Growth PE)\n5. Exit: IPO or Strategic M&A"
      },
      {
        "id": "IE-IE-04",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Pre-Money vs Post-Money Valuation",
        "highYield": true,
        "front": "State the relationship between Pre-Money, Post-Money, and Investor Equity.",
        "back": "• $\\text{Post-Money Valuation} = \\text{Pre-Money Valuation} + \\text{New Investment Amount}$\n• $\\text{Investor Equity Ownership} = \\frac{\\text{New Investment Amount}}{\\text{Post-Money Valuation}}$"
      },
      {
        "id": "FC-IE-05",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Burn Rate & Cash Runway",
        "highYield": true,
        "front": "How are Net Burn Rate and Runway calculated?",
        "back": "• Net Burn Rate = Monthly Cash Inflow - Monthly Cash Outflow (negative cash flow per month).\n• $\\text{Runway (months)} = \\frac{\\text{Current Cash Balance}}{\\text{Net Monthly Burn Rate}}$"
      },
      {
        "id": "FC-IE-06",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Break-Even Quantity Formula",
        "highYield": true,
        "front": "What is the formula for Break-Even Quantity ($Q_{BE}$)?",
        "back": "$Q_{BE} = \\frac{\\text{Fixed Costs}}{\\text{Price per Unit} - \\text{Variable Cost per Unit}} = \\frac{FC}{\\text{Contribution Margin}}$"
      },
      {
        "id": "FC-IE-07",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Angel Investor vs Venture Capitalist",
        "highYield": true,
        "front": "Compare Angel Investors and Venture Capitalists (VCs).",
        "back": "• Angel Investor: Individual investing personal wealth; earlier seed stages; smaller checks (\\$10k-\\$200k); less bureaucratic.\n• Venture Capital: Professional firm investing limited partners' (LP) institutional money; Series A+; large checks (\\$1M-\\$50M+); board seat demands."
      },
      {
        "id": "FC-IE-08",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Cap Table Purpose",
        "highYield": true,
        "front": "What is a Capitalization Table (Cap Table) and what does it prevent?",
        "back": "A record of equity ownership percentages, share classes, and option pool (ESOP) dilution across founders and investors. Prevents disputes and accidental loss of founder voting control."
      },
      {
        "id": "FC-IE-09",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Term Sheet Protective Provisions",
        "highYield": false,
        "front": "Name 3 common investor protective clauses in a Term Sheet.",
        "back": "1. Liquidation Preference: Preferred payout ahead of common stock on exit.\n2. Anti-Dilution Protection: Protects against down rounds (Weighted Average / Full Ratchet).\n3. Drag-Along Rights: Forces minority holders to agree to a sale approved by majority."
      },
      {
        "id": "FC-IE-10",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Crowdfunding Models",
        "highYield": false,
        "front": "Name the 4 primary Crowdfunding models.",
        "back": "1. Reward-based (Kickstarter - gadgets, perks)\n2. Equity-based (Pledgers get actual company stock)\n3. Debt/P2P lending (Microloans repaid with interest)\n4. Donation-based (GoFundMe - medical/charity)"
      },
      {
        "id": "FC-IE-11",
        "subjectId": "IE",
        "unit": 5,
        "topic": "4 Major Forms of IPR",
        "highYield": true,
        "front": "Compare Patents, Copyrights, Trademarks, and Trade Secrets.",
        "back": "• Patent: Technical inventions (20 yrs).\n• Copyright: Literary/artistic/software expression (Life + 60 yrs).\n• Trademark: Distinctive brand names/logos (10 yrs renewable).\n• Trade Secret: Proprietary secret formulas/algorithms (Indefinite while kept confidential)."
      },
      {
        "id": "FC-IE-12",
        "subjectId": "IE",
        "unit": 5,
        "topic": "3 Patentability Criteria in India",
        "highYield": true,
        "front": "What 3 requirements make an invention patentable under Indian law?",
        "back": "1. Novelty (New, not published anywhere in the world prior to filing).\n2. Inventive Step (Non-obvious to a person ordinarily skilled in the art).\n3. Industrial Applicability (Capable of being manufactured or used in industry)."
      },
      {
        "id": "FC-IE-13",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Section 3(k) Indian Patents Act",
        "highYield": true,
        "front": "What is Section 3(k) of the Indian Patents Act 1970?",
        "back": "States that mathematical methods, business methods, computer algorithms per se, or computer programmes per se are NOT patentable inventions in India (software must show technical effect tied to hardware)."
      },
      {
        "id": "FC-IE-14",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Trademark Registration Duration",
        "highYield": true,
        "front": "What is the lifespan of a Trademark in India?",
        "back": "A registered trademark lasts for 10 years from the date of application and can be renewed indefinitely every 10 years upon paying statutory renewal fees."
      },
      {
        "id": "FC-IE-15",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Copyright Duration in India",
        "highYield": true,
        "front": "How long does Copyright protection last for published books and software?",
        "back": "During the entire lifetime of the author + 60 years after the calendar year of their death."
      },
      {
        "id": "FC-IE-16",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Patent Cooperation Treaty (PCT)",
        "highYield": false,
        "front": "What is the PCT and its primary benefit for international startups?",
        "back": "An international patent agreement allowing an inventor to file one single PCT application with WIPO, preserving the priority filing date across 155+ member nations for up to 30 months before entering costly national phases."
      },
      {
        "id": "FC-IE-17",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Geographical Indications (GI)",
        "highYield": false,
        "front": "What does a Geographical Indication (GI) protect? Give 2 Indian examples.",
        "back": "Protects goods possessing a unique quality, reputation, or characteristic attributable strictly to their geographical origin.\nExamples: Darjeeling Tea, Hyderabadi Haleem, Kanchipuram Silk, Mysore Sandalwood."
      },
      {
        "id": "FC-IE-18",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Startup Exit Strategies",
        "highYield": true,
        "front": "List the 4 primary exit options for tech startups.",
        "back": "1. IPO (Initial Public Offering - listing on public stock exchange)\n2. M&A (Merger & Acquisition by a tech giant)\n3. Secondary Sale (Selling shares to larger PE/growth funds)\n4. Acqui-hire (Acquiring company primarily to hire its talent)"
      },
      {
        "id": "FC-IE-19",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Network Effects & Moats",
        "highYield": true,
        "front": "Define Network Effects and explain why they create durable moats.",
        "back": "Occurs when a product becomes exponentially more valuable as the user base expands (Metcalfe's Law: Value $\\propto N^2$). Competitors cannot easily displace the incumbent because users face massive switching friction."
      },
      {
        "id": "FC-IE-20",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Corporate Social Responsibility (CSR) in India",
        "highYield": false,
        "front": "What are the Section 135 CSR mandate criteria in India?",
        "back": "Companies with Net Worth $\\ge 500$ Cr, Turnover $\\ge 1000$ Cr, or Net Profit $\\ge 5$ Cr must spend at least 2% of their average 3-year net profits on approved CSR social/environmental initiatives."
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.SEM_PRACTICE = SEM_PRACTICE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEM_PRACTICE;
}

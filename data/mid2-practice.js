/**
 * MGIT PYQ HUB - Mid-2 Practice Question Bank & Flashcards
 * Rebuilt for MR-25 CSE Semester III (Unit 3 Part 2 + Units 4-5)
 * Content audit: content-audit/
 */
const MID2_PRACTICE = {
  "version": "1.1.0",
  "exam": "mid2",
  "regulation": "MR-25",
  "targetAudience": "MGIT CSE Semester III - Mid-2 Examination",
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
        "id": "DM-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Groups & Properties",
        "question": "An algebraic structure $(G, *)$ is called a group if it satisfies which of the following set of axioms?",
        "options": [
          "Closure and Associativity only",
          "Closure, Identity, and Commutativity",
          "Closure, Associativity, and Identity only",
          "Closure, Associativity, Identity, and Inverses"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
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
          "The order of $H$ divides the order of $G$",
          "The order of $G$ divides the order of $H$",
          "$|G| = |H| + 1$",
          "$|H|$ and $|G|$ must both be prime numbers"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Lagrange's Theorem states that the order of any subgroup $H$ divides the order of the parent finite group $G$. The ratio $|G|/|H|$ is called the index of $H$ in $G$."
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
        "source": "syllabus",
        "explanation": "In $(\\mathbb{Z}_n, +_n)$, an element $g$ is a generator if and only if $\\gcd(g, n) = 1$. The positive integers less than 6 and coprime to 6 are 1 and 5."
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
          "$g h g^{-1} \\in H$",
          "$g^2 \\in H$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A subgroup $H$ is normal ($H \\trianglelefteq G$) if and only if it is invariant under conjugation, meaning $g h g^{-1} \\in H$ for all $g \\in G$ and $h \\in H$."
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
        "source": "syllabus",
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
          "Cyclic and Abelian",
          "Infinite",
          "Without an identity element",
          "Non-abelian"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "By Lagrange's theorem, any group of prime order has no proper non-trivial subgroups, so every non-identity element generates the whole group. Every cyclic group is abelian."
      },
      {
        "id": "DM-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Lattice meet",
        "question": "In a lattice, the meet $a \\land b$ of two elements is:",
        "options": [
          "Their least upper bound",
          "Their sum",
          "Their complement",
          "Their greatest lower bound"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Meet is the greatest lower bound (GLB); join is the least upper bound (LUB). Both must exist for every pair in a lattice.",
        "source": "syllabus"
      },
      {
        "id": "DM-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Subgroups & Lagrange's Theorem",
        "question": "According to Lagrange's Theorem, the order of every subgroup of a finite group G divides the order of G.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. Lagrange's theorem states that if G is a finite group and H is a subgroup of G, then |H| divides |G|."
      },
      {
        "id": "DM-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Groups & Identity Uniqueness",
        "question": "A group (G, *) can possess more than one distinct identity element.",
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "False. The identity element in any group is strictly unique."
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
          "2",
          "k+1",
          "1"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Pigeonhole Principle states that if $n$ items are placed into $k$ boxes and $n > k$, at least one box contains $\\ge \\lceil n/k \\rceil = 2$ items."
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
          "$|A| + |B|$",
          "$|A| + |B| - |A \\cap B|$",
          "$|A| \\times |B|$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
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
          "$r^2 - 6r + 5 = 0$",
          "$r^2 + 5r - 6 = 0$",
          "$r^2 - 5r + 6 = 0$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Substituting $a_n = r^n$ gives $r^n - 5r^{n-1} + 6r^{n-2} = 0$. Dividing by $r^{n-2}$ yields $r^2 - 5r + 6 = 0$."
      },
      {
        "id": "DM-M2-016",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Fibonacci Numbers",
        "question": "Given $F_0 = 0$, $F_1 = 1$, and $F_n = F_{n-1} + F_{n-2}$, what is the value of $F_6$?",
        "options": [
          "8",
          "21",
          "13",
          "5"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
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
          "$\\frac{1}{1 - x}$",
          "$e^x$",
          "$\\frac{x}{1 - x}$"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The infinite geometric series $\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\dots = \\frac{1}{1-x}$ for $|x| < 1$."
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
          "24",
          "12"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Circular permutations of $n$ distinct objects is $(n-1)!$. For 5 people, $(5-1)! = 4! = 24$ ways."
      },
      {
        "id": "DM-SEM-058",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Distinct permutations",
        "question": "How many distinct arrangements can be formed from the letters of the word LEVEL?",
        "options": [
          "30",
          "20",
          "60",
          "120"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice, so the count is $5!/(2!\\,2!)=30$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-059",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Combinations",
        "question": "The value of $\\binom{7}{3}$ is:",
        "options": [
          "21",
          "35",
          "42",
          "210"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "$\\binom{7}{3}=7!/(3!\\,4!)=(7 \\times 6 \\times 5)/(3 \\times 2 \\times 1)=35$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-060",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Binomial coefficient",
        "question": "The coefficient of $x^3$ in the expansion of $(1+x)^6$ is:",
        "options": [
          "6",
          "15",
          "20",
          "120"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "By the binomial theorem the coefficient is $\\binom{6}{3}=20$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Counting functions",
        "question": "How many functions can be defined from a set with 3 elements to a set with 2 elements?",
        "options": [
          "6",
          "9",
          "12",
          "8"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Each of the 3 domain elements independently chooses one of 2 codomain elements, giving $2^3=8$ functions.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Recurrence solution",
        "question": "The recurrence $a_n=2a_{n-1}+1$ with $a_0=0$ has the closed form:",
        "options": [
          "$a_n=2^n-1$",
          "$a_n=2^n$",
          "$a_n=2^{n+1}-1$",
          "$a_n=n^2$"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "The first values are 0, 1, 3, 7, 15, which are one less than powers of two, so $a_n=2^n-1$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-071",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Derangements",
        "question": "The number of derangements of 4 distinct objects is:",
        "options": [
          "6",
          "9",
          "12",
          "24"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "By inclusion-exclusion, $!4 = 24(1-1+1/2-1/6+1/24)=24-24+12-4+1=9$.",
        "source": "syllabus"
      },
      {
        "id": "DM-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Normal Subgroups",
        "question": "Every subgroup of an abelian group is a normal subgroup.",
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "True. In an abelian group, g*h = h*g for all elements, so g*H = H*g holds for all g in G."
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
          "$|V| \\times |E|$",
          "$2 \\times |V|$",
          "$2 \\times |E|$"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Each edge has two incident endpoints, so each edge contributes exactly 2 to the sum of degrees: $\\sum_{v \\in V} \\deg(v) = 2|E|$."
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
        "source": "syllabus",
        "explanation": "Euler's theorem guarantees a closed trail traversing every edge exactly once if and only if all vertices have an even degree."
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
        "source": "syllabus",
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
          "$V + E + R = 2$",
          "$V + E - R = 2$",
          "$V - E + R = 2$",
          "$V - E - R = 2$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Euler's formula for connected planar graphs states $V - E + R = 2$."
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
          "$n(n-1)$",
          "$\\frac{n(n-1)}{2}$"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
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
          "Odd length",
          "Length 4",
          "Length greater than 3",
          "Even length"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "K├╢nig's theorem states that a graph is bipartite (2-colorable) if and only if it contains no odd-length cycles."
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
          "4",
          "5",
          "6"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Four Color Theorem proves that any planar graph can be colored using at most 4 colors ($\\\\chi(G) \\le 4$)."
      },
      {
        "id": "DM-SEM-063",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Handshaking lemma",
        "question": "In any undirected graph, the sum of all vertex degrees equals:",
        "options": [
          "The number of vertices",
          "Twice the number of edges",
          "The number of edges",
          "Twice the number of vertices"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Each edge contributes one to the degree of each endpoint, so the degree sum counts every edge twice.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-064",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Tree edges",
        "question": "A tree with $n$ vertices has exactly:",
        "options": [
          "$n$ edges",
          "$n+1$ edges",
          "$n-1$ edges",
          "$2n$ edges"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "A tree is connected and acyclic, and every connected acyclic graph on $n$ vertices has $n-1$ edges.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-065",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Planarity",
        "question": "Which of the following graphs is non-planar?",
        "options": [
          "$C_4$",
          "$K_4$",
          "A tree with 10 vertices",
          "$K_5$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "$K_5$ cannot be drawn in the plane without crossing edges. $K_4$ is planar, and every tree is planar.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-066",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Euler circuit",
        "question": "A connected undirected graph has an Euler circuit if and only if:",
        "options": [
          "Every vertex has even degree",
          "Exactly two vertices have odd degree",
          "It is a tree",
          "It is bipartite"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "An Euler circuit uses every edge once and returns to the start, which requires every vertex to have even degree.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Chromatic number",
        "question": "The chromatic number of a cycle graph $C_5$ is:",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "An odd cycle cannot be coloured with two colours, and three colours suffice, so $\\chi(C_5)=3$.",
        "source": "syllabus"
      },
      {
        "id": "DM-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Cyclic Groups",
        "question": "Every cyclic group is guaranteed to be an abelian group.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. Since all elements in a cyclic group are powers of a generator g (i.e. g^a * g^b = g^(a+b) = g^b * g^a), all cyclic groups are abelian."
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
        "id": "COA-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Division Algorithms",
        "question": "In the restoring division algorithm, what operation is performed if the trial subtraction $(A - M)$ yields a negative remainder?",
        "options": [
          "$A$ is left as negative and $Q_0$ is set to 1",
          "$M$ is shifted left",
          "$A$ is restored by adding $M$ back and $Q_0$ is set to 0",
          "The dividend is cleared"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In restoring division, if the remainder becomes negative, the partial remainder must be restored by adding divisor $M$ back ($A \\leftarrow A + M$) and setting quotient bit $Q_0 = 0$."
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
        "source": "syllabus",
        "explanation": "IEEE 754 single-precision (32-bit) uses 1 bit for sign, 8 bits for biased exponent, and 23 bits for normalized mantissa."
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
        "id": "COA-M2-009",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Floating-Point Zero",
        "question": "In IEEE 754 standard, zero is represented when:",
        "options": [
          "All 32 bits are 1",
          "Fraction is 1 and exponent is 0",
          "Exponent is 0 and fraction is 0",
          "Exponent is 255 and fraction is 0"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "When both the biased exponent and fraction fields are all zeros, the number represents $\\pm 0$ depending on the sign bit."
      },
      {
        "id": "COA-SEM-075",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Direct addressing",
        "question": "In a basic computer, the program counter holds 100 and a memory-reference instruction contains address 105. With direct addressing, the effective address is:",
        "options": [
          "105",
          "5",
          "100",
          "205"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "In direct addressing the address field itself is the effective address, so the operand is read from location 105.",
        "source": "syllabus"
      },
      {
        "id": "COA-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Restoring Division Algorithm",
        "question": "In the restoring division algorithm, if the remainder after subtraction is negative, the original value must be restored by adding the divisor back.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. When A < 0, the quotient bit is set to 0 and A is restored by computing A = A + M."
      },
      {
        "id": "COA-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "IEEE 754 Floating Point",
        "question": "In the IEEE 754 32-bit single-precision floating point standard, the exponent bias is 127.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. For an 8-bit exponent, the bias is 2^(8-1) - 1 = 127."
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
        "source": "syllabus",
        "explanation": "The 8-bit exponent field uses an excess-127 bias, so an actual exponent $E$ is stored as $E + 127$."
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
        "source": "syllabus",
        "explanation": "Since BCD codes 0ΓÇô9 and skips invalid states 10ΓÇô15, adding 6 ($0110_2$) skips the 6 invalid codes and produces the correct carry."
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
          "Level 1 Cache",
          "Solid State Drive (SSD)",
          "Main Memory (RAM)",
          "CPU Registers"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "CPU registers are located directly inside the processor core and operate at clock speed, making them the fastest and most expensive per bit."
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
        "source": "syllabus",
        "explanation": "Direct mapping uniquely maps main memory block $j$ to cache block $i = j \\pmod m$, where $m$ is the total number of lines in cache."
      },
      {
        "id": "COA-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cache Write Policies",
        "question": "Which cache write policy writes updated data simultaneously to both the cache and main memory?",
        "options": [
          "Write-Back",
          "Write-Through",
          "No-Write Allocate",
          "Write-Allocate"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Write-through immediately updates both cache and main memory on a write hit, guaranteeing consistency at the expense of memory bus traffic."
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
          "DRAM stores charge on capacitors and requires periodic refreshing",
          "DRAM cannot be multiplexed"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "DRAM cells store bits as charge on tiny capacitors that leak and require periodic refresh cycles, whereas SRAM uses bistable flip-flop latches."
      },
      {
        "id": "COA-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cache write policy",
        "question": "In a write-through cache, a write operation updates:",
        "options": [
          "Only the cache line",
          "Only main memory",
          "Neither the cache nor main memory",
          "Both the cache line and main memory"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Write-through writes to both cache and main memory, so memory is always current but every write costs a memory access."
      },
      {
        "id": "COA-M2-020",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Associative memory",
        "question": "Associative memory is searched by:",
        "options": [
          "Its content",
          "Its physical address",
          "A stack pointer",
          "A page table"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Associative memory compares the search key against all stored words in parallel, so it is content-addressable rather than address-addressed."
      },
      {
        "id": "COA-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Control word",
        "question": "A control word in microprogrammed control is:",
        "options": [
          "A machine instruction",
          "A memory address",
          "A group of control bits for one micro-operation",
          "An interrupt vector"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The control word is the set of bits that enables the datapath signals for one microinstruction.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Address sequencing",
        "question": "Address sequencing in a microprogrammed control unit determines:",
        "options": [
          "The ALU result",
          "The cache index",
          "The I/O device number",
          "The next microinstruction address"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Sequencing logic chooses the next control-memory address, using the control address register, mapping bits and branch conditions.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-063",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Instruction format",
        "question": "An instruction format typically contains:",
        "options": [
          "An opcode and one or more address fields",
          "Only an opcode",
          "Only data",
          "Only a parity bit"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The opcode selects the operation, and address fields identify registers, memory or immediate operands.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-064",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Addressing modes",
        "question": "In immediate addressing, the operand is:",
        "options": [
          "Stored at a memory address given in the instruction",
          "Part of the instruction itself",
          "Held in the program counter",
          "Always in the stack"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Immediate addressing embeds the operand in the instruction, so no extra memory fetch is needed for the value.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-065",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Booth algorithm",
        "question": "Booth's multiplication algorithm is preferred because it:",
        "options": [
          "Works only for unsigned numbers",
          "Needs no registers",
          "Handles signed numbers in two's complement",
          "Always performs one addition per bit"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Booth recodes the multiplier so signed two's complement operands can be multiplied directly, skipping runs of 1s.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-066",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Restoring division",
        "question": "In restoring division, when the partial remainder becomes negative, the next step is to:",
        "options": [
          "Set the quotient bit to 1 and continue",
          "Stop the algorithm",
          "Shift the divisor left",
          "Add the divisor back and set the quotient bit to 0"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "A negative remainder means the divisor was too large, so it is restored by adding the divisor back and the quotient bit is 0.",
        "source": "syllabus"
      },
      {
        "id": "COA-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Non-Restoring Division",
        "question": "Non-restoring division performs a restoring addition step in every clock cycle where remainder is negative.",
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "False. Non-restoring division eliminates the restore step entirely by shifting and either adding or subtracting in the subsequent cycle."
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
        "id": "COA-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA Transfer",
        "question": "Direct Memory Access (DMA) allows high-speed I/O devices to transfer data directly to/from memory without:",
        "options": [
          "The system bus",
          "Continuous CPU involvement",
          "Any memory address register",
          "A clock signal"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "DMA offloads block data transfers from the CPU, transferring data directly between memory and peripherals under DMA controller supervision."
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
          "The CPU polls every peripheral in sequence",
          "The interrupting device supplies a vector address on the data bus",
          "The OS searches the disk"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In vectored interrupt systems, the peripheral hardware provides an interrupt vector that directly indexes the interrupt vector table."
      },
      {
        "id": "COA-M2-025",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Control memory",
        "question": "Control memory in a microprogrammed control unit stores:",
        "options": [
          "Program data",
          "Interrupt vectors",
          "Cache lines",
          "Microinstructions"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Control memory holds the microinstruction sequence that generates control signals for each machine instruction."
      },
      {
        "id": "COA-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Microinstruction sequencing",
        "question": "The register that holds the address of the next microinstruction is the:",
        "options": [
          "Control address register",
          "Instruction register",
          "Memory address register",
          "Accumulator"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The control address register supplies the control-memory address; the sequencing logic updates it after each microinstruction."
      },
      {
        "id": "COA-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Modes of transfer",
        "question": "In programmed I/O, the CPU:",
        "options": [
          "Continues executing other programs while the device works",
          "Repeatedly checks the device status and waits",
          "Uses DMA to move each word",
          "Uses an interrupt for every word"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Programmed I/O busy-waits: the CPU polls the status flag and cannot do useful work until the device is ready."
      },
      {
        "id": "COA-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Programmed I/O",
        "question": "The primary disadvantage of Programmed I/O is that:",
        "options": [
          "It cannot transfer bytes",
          "It requires specialized DMA controllers",
          "The CPU wastes clock cycles in a busy-waiting polling loop",
          "It causes pipeline structural hazards"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
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
          "Software polling",
          "Serial connection of devices in priority order"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Daisy chaining connects the interrupt acknowledge signal in series from the highest priority device to lowest priority device."
      },
      {
        "id": "COA-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "I/O interface",
        "question": "The main purpose of an I/O interface is to:",
        "options": [
          "Match speed and format between the CPU bus and a device",
          "Execute arithmetic instructions",
          "Store the program",
          "Generate the clock"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The interface buffers data and converts between CPU bus signals and device-specific formats and timing.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-068",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Asynchronous transfer",
        "question": "Asynchronous data transfer between two independent units commonly uses:",
        "options": [
          "A common clock",
          "Handshaking signals",
          "A parity bit only",
          "DMA only"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Handshake signals such as request and acknowledge let a sender and receiver coordinate without a shared clock.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-069",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Programmed I/O",
        "question": "The main disadvantage of programmed I/O is that the CPU:",
        "options": [
          "Cannot access memory",
          "Cannot use interrupts",
          "Busy-waits and wastes time",
          "Needs a DMA controller"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The CPU repeatedly polls the device status and cannot execute other work while waiting.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-070",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Priority interrupt",
        "question": "A priority interrupt system is needed to:",
        "options": [
          "Ignore all interrupts",
          "Increase clock speed",
          "Replace main memory",
          "Decide which interrupt is serviced first"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "When several devices request service, priority logic selects the most urgent request and masks lower-priority ones.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-071",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA",
        "question": "During a DMA block transfer, the CPU is:",
        "options": [
          "Freed after granting the bus",
          "Involved in every word transfer",
          "Stopped permanently",
          "Required to execute an interrupt per word"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "The DMA controller moves the block itself; the CPU grants the bus and is interrupted once at the end of the block.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-072",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Direct-mapped cache",
        "question": "A direct-mapped cache has 8 lines. How many index bits are needed?",
        "options": [
          "2",
          "3",
          "4",
          "8"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "The index selects one of 8 lines, so $\\log_2 8 = 3$ index bits are required.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-076",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA transfer time",
        "question": "A DMA controller transfers a 512-byte block by cycle stealing, using one memory cycle per byte. If each memory cycle takes 0.5 μs, the total transfer time is:",
        "options": [
          "128 μs",
          "256 μs",
          "512 μs",
          "1024 μs"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "$512 \\times 0.5\\,\\mu s = 256\\,\\mu s$.",
        "source": "syllabus"
      },
      {
        "id": "COA-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA Direct Memory Access",
        "question": "DMA controllers transfer blocks of data directly between I/O devices and main memory without continuous CPU intervention.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. The DMA controller takes over the system bus from the CPU to perform high-speed block transfers directly."
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
        "id": "COA-M2-027",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "DMA transfer",
        "question": "In DMA, the transfer of a data block between an I/O device and memory is initiated by the device sending a _______ request to the CPU.",
        "accepted": [
          "bus",
          "DMA",
          "hold",
          "bus request"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The DMA controller asserts a bus-request (hold) signal; the CPU grants the bus and the controller moves the block directly."
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
        "id": "COA-M2-032",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Cache hit ratio",
        "question": "A cache has 90% hits and 10% misses. If a hit costs 1 cycle and a miss costs 21 cycles, the average access time is _______ cycles.",
        "accepted": [
          "3",
          "3 cycles"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Average = 0.9 x 1 + 0.1 x 21 = 0.9 + 2.1 = 3 cycles."
      }
    ],
    "OOPJ": [
      {
        "id": "OOPJ-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Creation",
        "question": "Which two mechanisms can be used in Java to define and create a new thread of execution?",
        "options": [
          "Extending the Thread class or implementing the Runnable interface",
          "Implementing the Callable interface or extending the Process class",
          "Using the synchronized keyword or using volatile variables",
          "Extending the Applet class or implementing Serializable"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "In Java, a thread can be created either by subclassing java.lang.Thread and overriding run(), or by implementing java.lang.Runnable and passing it to a Thread instance."
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
        "source": "syllabus",
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
          "It acquires the intrinsic lock (monitor) of that object instance",
          "It terminates all lower-priority threads running in parallel"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Every Java object has an intrinsic monitor lock. A thread entering a synchronized instance method must acquire this monitor lock on 'this' instance before executing."
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
          "IllegalThreadStateException",
          "NullPointerException",
          "IllegalMonitorStateException"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Calling wait(), notify(), or notifyAll() outside a synchronized context synchronized on that specific object throws java.lang.IllegalMonitorStateException at runtime."
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
        "source": "syllabus",
        "explanation": "The join() method allows one thread to wait for the completion of another. Calling threadA.join() puts the calling thread into WAITING state until threadA dies."
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
        "id": "OOPJ-SEM-059",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread creation",
        "question": "Which two ways can create a thread in Java?",
        "options": [
          "Extend Runnable or implement Thread",
          "Implement Callable only",
          "Use the main method only",
          "Extend Thread or implement Runnable"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A class can extend Thread and override run(), or implement Runnable and pass it to a Thread.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-075",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread wait state",
        "question": "A thread calls `wait()` on an object. It releases the object's monitor and enters which state?",
        "options": [
          "RUNNABLE",
          "BLOCKED",
          "TERMINATED",
          "WAITING"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "explanation": "A call to wait() releases the monitor and places the thread in the WAITING state until another thread calls notify() or notifyAll().",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Java Thread Invocation",
        "question": "Directly invoking t.run() in Java causes the code to execute in a brand-new concurrent thread.",
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "False. Calling run() directly merely executes the method in the caller's current thread; t.start() is required to spawn a new concurrent thread."
      },
      {
        "id": "OOPJ-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Thread Synchronization",
        "question": "In Java, the synchronized keyword can be applied to methods and blocks, but cannot be applied directly to class variables.",
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "True. 'synchronized' modifier is valid only on methods and code blocks, not variable declarations (variables use 'volatile')."
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
        "source": "syllabus",
        "explanation": "Calling start() allocates a new native call stack and transitions the thread to the Runnable state, after which the JVM invokes its run() method."
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
        "source": "syllabus",
        "explanation": "Because monitor locks are associated with individual objects rather than threads, wait(), notify(), and notifyAll() are member methods of the root java.lang.Object class."
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
        "source": "syllabus",
        "explanation": "Java assigns thread priorities on an integer scale from 1 (MIN_PRIORITY) through 5 (NORM_PRIORITY) up to 10 (MAX_PRIORITY)."
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
        "id": "OOPJ-M2-011",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Byte Streams vs Character Streams",
        "question": "Which superclasses form the root of all byte-oriented input and output streams in Java respectively?",
        "options": [
          "DataInputStream and DataOutputStream",
          "FileInputStream and FileOutputStream",
          "InputStream and OutputStream",
          "Reader and Writer"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "In java.io, byte streams are derived from abstract classes InputStream and OutputStream (handling 8-bit bytes), while character streams derive from Reader and Writer (16-bit Unicode)."
      },
      {
        "id": "OOPJ-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Character streams",
        "question": "Which class is commonly used to read characters from a text file?",
        "options": [
          "FileInputStream",
          "DataOutputStream",
          "RandomAccessFile",
          "FileReader"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "FileReader is a character stream for text; FileInputStream reads raw bytes and would need explicit decoding."
      },
      {
        "id": "OOPJ-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Try-With-Resources",
        "question": "In Java 7+ try-with-resources statement, what interface must the resource object implement so that it is closed automatically?",
        "options": [
          "java.lang.AutoCloseable",
          "java.lang.Flushable",
          "java.lang.Disposable",
          "java.io.CloseableInterface"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Any resource object implementing java.lang.AutoCloseable (or java.io.Closeable) can be opened in a try(...) header and will have its close() invoked automatically upon exit."
      },
      {
        "id": "OOPJ-M2-016",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ArrayList",
        "question": "Which java.util class implements a resizable array?",
        "options": [
          "HashMap",
          "ArrayList",
          "HashSet",
          "TreeMap"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "ArrayList stores elements in a resizable array and provides index-based access."
      },
      {
        "id": "OOPJ-M2-018",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "JTable",
        "question": "Which Swing component displays data in rows and columns?",
        "options": [
          "JList",
          "JComboBox",
          "JTable",
          "JTextArea"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "JTable renders a table model as rows and columns; JList shows a one-dimensional list."
      },
      {
        "id": "OOPJ-M2-020",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "RandomAccessFile",
        "question": "Which java.io class allows both reading and writing at arbitrary positions within a file using seek()?",
        "options": [
          "DataOutputStream",
          "SequenceInputStream",
          "FileChannelStream",
          "RandomAccessFile"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "RandomAccessFile implements DataInput and DataOutput and supports direct seeking to any byte offset using the seek(long position) method."
      },
      {
        "id": "OOPJ-SEM-060",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "String immutability",
        "question": "Java String objects are immutable, which means:",
        "options": [
          "Their value cannot be changed after creation",
          "They cannot be printed",
          "They cannot be shared",
          "They can hold only characters"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "String methods return a new object; the original string's characters never change, which makes sharing and caching safe.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "StringBuilder",
        "question": "StringBuilder is preferred over String for heavy concatenation because it:",
        "options": [
          "Is immutable",
          "Modifies the same buffer without creating many objects",
          "Is thread-safe",
          "Uses less memory than a char array"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "StringBuilder appends in place, avoiding the many temporary String objects that repeated concatenation creates.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ArrayList vs LinkedList",
        "question": "Which operation is faster on an ArrayList than on a LinkedList?",
        "options": [
          "Insertion at the front",
          "Removal from the middle",
          "Random access by index",
          "Iteration with an iterator"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "ArrayList stores elements contiguously, so get(i) is constant time; LinkedList must walk from an end.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-063",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "HashMap",
        "question": "In a HashMap, duplicate keys:",
        "options": [
          "Cause a compile error",
          "Are stored twice",
          "Are silently ignored",
          "Replace the previous value"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Keys are unique; put() with an existing key overwrites its value and returns the old value.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-064",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "java.io",
        "question": "Which stream class is used to read raw bytes from a file?",
        "options": [
          "FileInputStream",
          "FileReader",
          "BufferedWriter",
          "PrintWriter"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "FileInputStream is a byte stream; FileReader is its character-stream counterpart.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-065",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Delegation event model",
        "question": "In the delegation event model, an event source:",
        "options": [
          "Handles its own events",
          "Registers listeners and sends events to them",
          "Polls the listener",
          "Creates a new thread per event"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "The source registers listener objects and delegates event handling by calling their methods.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-066",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Layout managers",
        "question": "Which layout manager arranges components in five regions: north, south, east, west and centre?",
        "options": [
          "FlowLayout",
          "GridLayout",
          "BorderLayout",
          "CardLayout"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "BorderLayout uses the five named regions; FlowLayout lays components left to right in a row.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-076",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ArrayList subList",
        "question": "What is the result of `new ArrayList<>(Arrays.asList(1,2,3)).subList(0,2).size()`?",
        "options": [
          "2",
          "1",
          "3",
          "An exception is thrown"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "subList(0,2) returns the elements at indices 0 and 1, so the sublist contains two elements.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Thread join() Method",
        "question": "Calling thread.join() causes the calling thread to pause until the referenced thread completes its execution.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. join() waits for a thread to die before continuing execution."
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
        "source": "syllabus",
        "explanation": "BufferedReader buffers characters for efficient reading and provides the convenient readLine() method to read complete lines of text."
      },
      {
        "id": "OOPJ-M2-014",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Buffered streams",
        "question": "Wrapping a FileReader in a _______ reduces the number of disk reads by buffering characters.",
        "accepted": [
          "BufferedReader",
          "buffered reader"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "BufferedReader adds an in-memory buffer and useful methods such as readLine()."
      },
      {
        "id": "OOPJ-M2-017",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "HashMap",
        "question": "A java.util.HashMap stores data as _______ pairs and allows one null key.",
        "accepted": [
          "key-value",
          "key value",
          "key/value"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "HashMap maps unique keys to values; it permits one null key and multiple null values."
      },
      {
        "id": "OOPJ-M2-019",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Comparator",
        "question": "The java.util interface used to define a custom ordering for objects is _______.",
        "accepted": [
          "Comparator",
          "comparator"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Comparator supplies a compare method for an ordering that is external to the class, unlike Comparable."
      },
      {
        "id": "OOPJ-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Collections Hierarchy",
        "question": "Which of the following interfaces is NOT a sub-interface of java.util.Collection?",
        "options": [
          "java.util.Map",
          "java.util.List",
          "java.util.Set",
          "java.util.Queue"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Map represents key-value pairs and does not extend java.util.Collection; List, Set, and Queue are the three primary direct sub-interfaces of Collection."
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
          "ArrayList provides $O(1)$ constant-time indexed lookup via underlying array",
          "ArrayList takes $O(1)$ time to insert at the beginning",
          "LinkedList uses contiguous memory blocks"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "ArrayList is backed by a dynamic array, so get(i) performs direct pointer offset calculation in O(1) time, whereas LinkedList requires O(n) sequential node traversal."
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
          "Comparable is in java.util while Comparator is in java.lang",
          "Comparable defines natural order inside the class via compareTo(), while Comparator provides custom order outside via compare()",
          "Comparable cannot be used with TreeSet"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
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
          "Min-Heap",
          "Balanced Red-Black Tree"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "Java 8 improves HashMap worst-case collision performance from O(n) to O(log n) by transforming chained lists exceeding 8 entries into balanced red-black trees."
      },
      {
        "id": "OOPJ-M2-028",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Delegation Event Model",
        "question": "In Java's Delegation Event Model, which component generates the event when a user interacts with a GUI control?",
        "options": [
          "Event Source",
          "Event Dispatch Thread",
          "Event Listener",
          "Event Adapter"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "In the Delegation Event Model, the Event Source (e.g. JButton) detects the user interaction, creates an Event object, and delegates it to registered Event Listeners."
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
          "Swing components are written purely in Java and drawn without native OS peer windows",
          "Swing components only run in applet browsers"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "AWT components are heavyweight because they tie directly to underlying OS GUI widgets (peers). Swing components are lightweight, painted entirely in Java on top of top-level containers."
      },
      {
        "id": "OOPJ-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Swing vs AWT",
        "question": "Swing components are called lightweight because they:",
        "options": [
          "Use native peer windows for every component",
          "Cannot be displayed",
          "Require no event handling",
          "Are drawn by Java without a native peer per component"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Swing paints most components itself, so they do not each need an operating-system peer, unlike heavyweight AWT components.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-068",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "JFrame",
        "question": "JFrame is a:",
        "options": [
          "Top-level container with a title bar",
          "Lightweight button",
          "Layout manager",
          "Event listener"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "JFrame is a top-level window with a title bar and border, used as the main container of a Swing application.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-069",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "JButton",
        "question": "Which listener interface handles a JButton click?",
        "options": [
          "MouseListener",
          "ActionListener",
          "KeyListener",
          "WindowListener"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A button fires an ActionEvent, handled by ActionListener's actionPerformed method.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-070",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "JLabel",
        "question": "A JLabel is used to:",
        "options": [
          "Accept text input",
          "Hold a menu",
          "Display a short text or icon",
          "Start a thread"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "JLabel shows read-only text or an icon; JTextField is used when the user must type input.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-071",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "JList and JComboBox",
        "question": "Which component shows a drop-down list of choices?",
        "options": [
          "JList",
          "JTable",
          "JSlider",
          "JComboBox"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "JComboBox is a drop-down selector; JList shows the choices as a visible list.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-072",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Menus",
        "question": "Which class represents a menu bar in Swing?",
        "options": [
          "JMenuBar",
          "JMenu",
          "JMenuItem",
          "JPopupMenu"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "JMenuBar is attached to a frame; it contains JMenu objects, which contain JMenuItem objects.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Inter-thread Communication",
        "question": "The wait(), notify(), and notifyAll() methods in Java belong to java.lang.Thread rather than java.lang.Object.",
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "False. They are defined directly on java.lang.Object because monitor locks are associated with individual object instances."
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
        "source": "syllabus",
        "explanation": "By mathematical definition, a java.util.Set models a mathematical set abstraction and does not allow duplicate elements (at most one null)."
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
        "source": "syllabus",
        "explanation": "Implementing Comparable<T> requires overriding compareTo(T o), which establishes the default natural sorting order used by Collections.sort()."
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
        "source": "syllabus",
        "explanation": "The contract between equals() and hashCode() requires that if two objects are equal according to equals(), they must return identical hashCode() values."
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
        "source": "syllabus",
        "explanation": "ActionListener is a functional interface containing only void actionPerformed(ActionEvent e), triggered whenever a button is clicked or menu item is selected."
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
        "id": "DBMS-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "First Normal Form (1NF)",
        "question": "A relation is in First Normal Form (1NF) if and only if:",
        "options": [
          "All attribute values are atomic and non-divisible",
          "Every non-key attribute is fully functionally dependent on the primary key",
          "Every determinant is a super key",
          "There are no transitive dependencies"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "First Normal Form requires that every attribute domain contains only atomic (indivisible) scalar values and each tuple has a single value for each attribute."
      },
      {
        "id": "DBMS-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Third Normal Form (3NF)",
        "question": "For a non-trivial functional dependency $X \\rightarrow Y$ to hold in 3NF, which condition must be met?",
        "options": [
          "$Y$ must be a foreign key",
          "$X$ is a superkey OR $Y$ is a prime attribute",
          "$X$ must be a single attribute",
          "$X$ must be a candidate key AND $Y$ must be a prime attribute"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
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
          "BCNF requires every determinant $X$ in $X \\rightarrow Y$ to be a superkey without exception",
          "BCNF allows non-prime attributes to determine prime attributes"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "BCNF is strictly stronger than 3NF: for every non-trivial FD $X \\rightarrow Y$, $X$ must be a superkey. It eliminates the 3NF loophole where $Y$ is a prime attribute."
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
          "BCNF",
          "3NF"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Any relation can always be decomposed into 3NF while preserving dependencies and guaranteeing a lossless join. BCNF guarantees lossless join, but dependency preservation is not always achievable."
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
        "id": "DBMS-SEM-074",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Normal form identification",
        "question": "Relation $R(A,B,C)$ has functional dependencies $A \\to B$ and $B \\to C$. Which is the highest normal form R satisfies?",
        "options": [
          "1NF",
          "3NF",
          "2NF",
          "BCNF"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "explanation": "A is the only candidate key. B and C are non-prime, and the transitive dependency $A\\to B\\to C$ violates 3NF, so R is in 2NF.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "BCNF vs 3NF",
        "question": "Every relational schema that satisfies Boyce-Codd Normal Form (BCNF) is guaranteed to also satisfy Third Normal Form (3NF).",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. BCNF is a stricter form of 3NF. If every determinant is a superkey, 3NF conditions are automatically met."
      },
      {
        "id": "DBMS-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "2NF Partial Dependency",
        "question": "A relation in 2NF allows non-prime attributes to be partially dependent on a composite candidate key.",
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "False. 2NF strictly prohibits any partial dependency of non-prime attributes on candidate keys."
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
        "source": "syllabus",
        "explanation": "2NF eliminates partial dependencies where a non-prime attribute depends on a proper subset of any candidate key."
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
        "source": "syllabus",
        "explanation": "By Heath's Theorem, a decomposition into $(R_1, R_2)$ is guaranteed lossless if $R_1 \\cap R_2 \\rightarrow R_1$ or $R_1 \\cap R_2 \\rightarrow R_2$ (i.e. common attributes form a superkey of $R_1$ or $R_2$)."
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
        "id": "DBMS-M2-009",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ACID Properties",
        "question": "Which ACID property guarantees that all operations of a transaction are completed successfully or none of them have any effect?",
        "options": [
          "Consistency",
          "Atomicity",
          "Durability",
          "Isolation"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Atomicity (all-or-nothing principle) guarantees that a transaction is treated as a single atomic unit of work: if any step fails, the system rolls back to the initial state."
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
        "source": "syllabus",
        "explanation": "Operations conflict if they are from different transactions on the same data item and at least one is a write ($R_1(A)-W_2(A)$, $W_1(A)-R_2(A)$, or $W_1(A)-W_2(A)$)."
      },
      {
        "id": "DBMS-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Two-Phase Locking (2PL)",
        "question": "What is the defining rule of the Two-Phase Locking (2PL) protocol?",
        "options": [
          "All locks must be exclusive locks",
          "Transactions can only lock the entire database",
          "Read locks are released immediately after reading",
          "A transaction cannot acquire any new lock once it releases any lock"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In 2PL, a transaction consists of a Growing Phase (acquiring locks without releasing any) and a Shrinking Phase (releasing locks without acquiring any new ones)."
      },
      {
        "id": "DBMS-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Deadlock in 2PL",
        "question": "Does the basic Two-Phase Locking (2PL) protocol guarantee freedom from deadlocks?",
        "options": [
          "No, 2PL guarantees serializability but does NOT prevent deadlocks",
          "Yes, 2PL prevents both serializability violations and deadlocks",
          "Only if shared locks are disallowed",
          "Yes, because the shrinking phase resolves all cycles"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "2PL guarantees conflict serializability, but it does NOT prevent deadlock. Two transactions can easily enter a mutual lock wait state."
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
          "Conflict serializability and view serializability are completely identical sets",
          "Every view serializable schedule is conflict serializable",
          "Every conflict serializable schedule is view serializable, but not vice versa",
          "Neither set is a subset of the other"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Conflict Serializability $\\subset$ View Serializability. Schedules containing blind writes may be view serializable without being conflict serializable."
      },
      {
        "id": "DBMS-SEM-058",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "ACID",
        "question": "Which ACID property guarantees that a committed transaction survives a crash?",
        "options": [
          "Atomicity",
          "Consistency",
          "Durability",
          "Isolation"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Durability means committed changes are permanent, usually because they are written to stable storage or the log.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-059",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Conflict serializability",
        "question": "A schedule is conflict serializable if and only if its precedence graph is:",
        "options": [
          "Complete",
          "Bipartite",
          "Connected",
          "Acyclic"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "A cycle in the precedence graph means conflicting operations cannot be ordered, so the schedule is not conflict serializable.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-060",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Two-phase locking",
        "question": "The two phases of 2PL are:",
        "options": [
          "Growing phase and shrinking phase",
          "Read phase and write phase",
          "Commit phase and abort phase",
          "Lock phase and unlock phase"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A transaction acquires locks in the growing phase and releases them in the shrinking phase; no lock is acquired after release.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Timestamp ordering",
        "question": "Timestamp ordering resolves conflicts by:",
        "options": [
          "Blocking every transaction",
          "Ordering operations by transaction timestamps",
          "Using only shared locks",
          "Ignoring older transactions"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Each transaction gets a timestamp, and conflicting operations must execute in timestamp order; violations abort the transaction.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Deadlock",
        "question": "Basic two-phase locking can still suffer from:",
        "options": [
          "Dirty reads only",
          "Loss of durability",
          "Deadlock",
          "Syntax errors"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "2PL guarantees conflict serializability but does not prevent cycles of waiting, so deadlock is possible.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-063",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Log-based recovery",
        "question": "In immediate database modification, which log records are needed for recovery?",
        "options": [
          "Only commit records",
          "Only checkpoint records",
          "No log records",
          "Undo records for uncommitted transactions and redo records for committed ones"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Because changes may reach the database before commit, recovery undoes uncommitted work and redoes committed work.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-064",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Checkpoint",
        "question": "A checkpoint in a DBMS primarily:",
        "options": [
          "Limits the portion of the log that recovery must scan",
          "Deletes the log",
          "Commits every active transaction",
          "Creates a new index"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A checkpoint flushes data and records active transactions, so recovery can start from a recent consistent point.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-075",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Precedence graph",
        "question": "A precedence graph for a schedule contains edges $T_1 \\to T_2$ and $T_2 \\to T_1$. The schedule is:",
        "options": [
          "conflict serializable",
          "recoverable",
          "strict",
          "not conflict serializable"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "explanation": "A cycle in the precedence graph means the schedule is not conflict serializable, because no serial order can preserve both conflicting orders.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Binary Relation BCNF",
        "question": "Any relational schema consisting of exactly two attributes is always in BCNF.",
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "True. In a binary relation R(A, B), either A -> B (A is key), B -> A (B is key), or neither (AB is key). In all cases it is in BCNF."
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
        "source": "syllabus",
        "explanation": "Durability guarantees that once a transaction commits, its updates are permanently recorded in non-volatile storage even in the event of an immediate system crash."
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
        "source": "syllabus",
        "explanation": "A schedule is conflict serializable if its precedence graph is acyclic. A topological sort of the acyclic graph yields an equivalent serial schedule."
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
        "source": "syllabus",
        "explanation": "Strict 2PL holds all exclusive (X) locks until the transaction completes, preventing cascading rollbacks (cascadeless recovery)."
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
        "source": "syllabus",
        "explanation": "WAL requires that undo log records are flushed to non-volatile disk before dirty database pages are written to disk, ensuring atomicity and recoverability."
      },
      {
        "id": "DBMS-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Deferred Modification Recovery",
        "question": "In the Deferred Database Modification recovery scheme, updates are written to the database disk only after:",
        "options": [
          "The transaction commits successfully",
          "The system enters an idle state",
          "Every single SQL statement executes",
          "The first read operation is completed"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Deferred modification postpones all disk writes until transaction commit. Hence, uncommitted aborted transactions require no UNDO operations, only REDO for committed ones."
      },
      {
        "id": "DBMS-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Log-based recovery",
        "question": "In deferred database modification, the log is used to:",
        "options": [
          "Undo uncommitted changes",
          "Redo committed changes after a crash",
          "Delete the log",
          "Compress the database"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Deferred modification writes to the database only after commit, so recovery redoes committed transactions and ignores uncommitted ones."
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
          "Every field in the record is indexed simultaneously",
          "The physical ordering of records in the data file matches the ordering of the index search keys",
          "Multiple search keys point to the same physical disk block"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
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
        "source": "syllabus",
        "explanation": "In a B+ Tree, internal nodes store only router search-keys and child pointers; all actual record pointers reside in leaf nodes, which are linked sequentially for efficient range scans."
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
        "source": "syllabus",
        "explanation": "A B+ tree is height-balanced with height bounded by $\\lceil \\log_{\\lceil m/2 \\rceil} N \\rceil$, yielding $O(\\log_m N)$ disk I/O operations for search."
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
          "Because records are not physically sorted by the secondary key, so sparse pointers cannot determine ranges",
          "Because heap files do not support primary keys",
          "Because secondary indexes only allow unique attributes"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "source": "syllabus",
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
          "Verify, Clean, and Rebuild",
          "Analysis, Redo, and Undo",
          "Scan, Lock, and Release"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "ARIES operates in three distinct phases: 1. Analysis (reconstructs state and dirty pages at crash), 2. Redo (repeats history to bring database to exact crash state), 3. Undo (reverses uncommitted transactions)."
      },
      {
        "id": "DBMS-SEM-065",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Buffer pool",
        "question": "The buffer pool in a DBMS is used to:",
        "options": [
          "Store the schema permanently",
          "Cache disk pages in memory",
          "Compile SQL",
          "Encrypt data"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "The buffer pool keeps frequently used pages in RAM and uses a replacement policy when space is needed.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-066",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "File organization",
        "question": "In a heap file organization, records are:",
        "options": [
          "Stored in sorted order by key",
          "Stored only in a B+ tree",
          "Stored in no particular order",
          "Stored only in a hash table"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "A heap file appends records wherever space is available, so insertion is fast but search may require a scan.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Clustered index",
        "question": "A clustered index:",
        "options": [
          "Has one entry per row in a separate file",
          "Can exist many times per table",
          "Works only on hash values",
          "Determines the physical order of data records"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Because the data is stored in the index order, a table can have only one clustered index; secondary indexes are separate.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-068",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Hash indexing",
        "question": "Hash-based indexing is most efficient for:",
        "options": [
          "Equality searches",
          "Range queries",
          "Sorted output",
          "Prefix matching"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A hash function maps a key directly to a bucket, which is ideal for equality but destroys order for ranges.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-069",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ISAM",
        "question": "ISAM is:",
        "options": [
          "A dynamic B+ tree",
          "A static index structure with an overflow area",
          "A hash table",
          "A concurrency protocol"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "ISAM builds a static index over sorted data and sends new records to overflow pages; B+ trees rebalance instead.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-070",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "B+ tree",
        "question": "In a B+ tree, data records are pointed to from:",
        "options": [
          "Only the root",
          "Internal nodes only",
          "Leaf nodes only",
          "Every node equally"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Internal nodes hold only keys for routing; all data pointers sit in the leaves, which are linked for range scans.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-071",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Index data structures",
        "question": "A dense index contains:",
        "options": [
          "An entry only for the first record of each block",
          "No keys",
          "Only hash values",
          "An entry for every search-key value"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "A dense index has one entry per search-key value; a sparse index has one entry per block.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Lossless Join Decomposition",
        "question": "It is always possible to decompose any relation into BCNF while simultaneously guaranteeing both Lossless Join and Dependency Preservation.",
        "answerIndex": 1,
        "difficulty": "hard",
        "source": "syllabus",
        "explanation": "False. While lossless join can always be achieved in BCNF, dependency preservation is not always achievable (it is guaranteed only up to 3NF)."
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
        "source": "syllabus",
        "explanation": "Checkpoints flush all active buffer pages to disk and write a checkpoint record, allowing crash recovery to ignore log records prior to the checkpoint."
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
        "source": "syllabus",
        "explanation": "Immediate modification allows uncommitted writes to reach disk, requiring UNDO for uncommitted transactions and REDO for committed transactions."
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
        "source": "syllabus",
        "explanation": "In a dense index, every search-key value in the data file has an explicit corresponding index record. In a sparse index, entries appear only for some search-keys (typically block headers)."
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
        "source": "syllabus",
        "explanation": "Functional cohesion is the strongest form, where every element in a component contributes solely to executing a single, well-defined mathematical or logical task."
      },
      {
        "id": "SE-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Coupling Types",
        "question": "Which of the following coupling types represents the worst (tightest) form of coupling between two modules?",
        "options": [
          "Content Coupling",
          "Control Coupling",
          "Data Coupling",
          "Common Coupling"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Content coupling is the tightest and worst form: one module modifies or relies on the internal implementation, branch targets, or private memory of another module."
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
        "source": "syllabus",
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
          "Maximize graphics and animation complexity",
          "Reduce the user's memory load"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Theo Mandel's 3 Golden Rules are: 1. Place the user in control, 2. Reduce the user's memory load, and 3. Make the interface consistent."
      },
      {
        "id": "SE-SEM-058",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Use case diagram",
        "question": "A use case diagram shows:",
        "options": [
          "The internal flow of a method",
          "Actors and the use cases they interact with",
          "Database indexes",
          "The project budget"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Use case diagrams model system boundaries, actors and the services (use cases) each actor can invoke.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-074",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Sequence diagram",
        "question": "Which UML diagram best shows time-ordered messages exchanged between objects?",
        "options": [
          "Class diagram",
          "Sequence diagram",
          "Component diagram",
          "Use case diagram"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "A sequence diagram arranges objects horizontally and messages vertically in time order, showing the interaction sequence.",
        "source": "syllabus"
      },
      {
        "id": "SE-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Cohesion Principles",
        "question": "Functional cohesion represents the highest, most desirable degree of cohesion in modular software design.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. A functionally cohesive module performs exactly one well-defined computation or objective."
      },
      {
        "id": "SE-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Coupling Levels",
        "question": "Content coupling is the most desirable form of coupling because it gives components direct access to each other's memory.",
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "False. Content coupling is the tightest and worst form of coupling because one module modifies the internal code or private data of another."
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
        "source": "syllabus",
        "explanation": "Coincidental cohesion occurs when parts of a module are bundled together purely by happenstance, creating code that is impossible to maintain or reuse."
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
        "source": "syllabus",
        "explanation": "Data coupling occurs when modules pass only primitive data values as arguments, providing minimal dependency and maximum independence."
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
          "Verification only tests code, while Validation only checks design diagrams",
          "Verification is performed by users, while Validation is performed by compilers",
          "There is no difference; they are synonymous",
          "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Verification ensures that the software conforms to its design specification ('Are we building the product right?'). Validation ensures the software meets real user needs ('Are we building the right product?')."
      },
      {
        "id": "SE-M2-010",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Bottom-Up Integration Drivers",
        "question": "In Bottom-Up integration testing, what auxiliary program component is written to invoke and pass test cases to low-level modules?",
        "options": [
          "Test Driver",
          "Test Stub",
          "Mock Spy",
          "Virtual Anchor"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
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
          "To measure the execution speed of database transactions",
          "To confirm that recent bug fixes or changes have not introduced new defects into previously working features",
          "To replace manual black-box tests with unit tests",
          "To verify that code passes compiler optimization passes"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Regression testing re-executes a subset of existing test suites after changes to ensure that existing functionality remains intact and bug-free."
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
          "$V(G) = E - N + 2P$",
          "$V(G) = N - E + 2$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "McCabe's cyclomatic complexity is $V(G) = E - N + 2P$. For a single component ($P = 1$), it equals $E - N + 2$, which also equals the number of predicate nodes $+ 1$ ($P_{red} + 1$)."
      },
      {
        "id": "SE-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Boundary Value Analysis (BVA)",
        "question": "For an integer input variable valid in the range $[10, 50]$, which set of test input values reflects Boundary Value Analysis guidelines?",
        "options": [
          "15, 25, 35, 45",
          "0, 10, 25, 50, 100",
          "10, 20, 30, 40, 50",
          "9, 10, 11, 49, 50, 51"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Boundary Value Analysis focuses on boundary values and their immediate neighbors: minimum, just above minimum, just below minimum, maximum, just below maximum, and just above maximum ($9, 10, 11, 49, 50, 51$)."
      },
      {
        "id": "SE-M2-017",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "White-Box vs Black-Box",
        "question": "Which of the following testing methodologies relies exclusively on knowledge of internal control flow paths, conditions, and statements?",
        "options": [
          "White-Box Testing (Structural Testing)",
          "Black-Box Testing (Behavioral Testing)",
          "Boundary Value Analysis",
          "User Acceptance Testing (UAT)"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
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
          "By independent ISO certification auditors",
          "At the developer's site by end users in a controlled environment",
          "By compilers during automated nightly builds",
          "At end-user customer sites in live unmonitored settings"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Alpha testing is performed at the software developer's site by representative users in a controlled environment, whereas Beta testing is conducted at customer sites in realistic unmonitored production conditions."
      },
      {
        "id": "SE-SEM-059",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Black-box testing",
        "question": "Black-box testing derives test cases from:",
        "options": [
          "The source code structure",
          "The compiler output",
          "The specification and expected behaviour",
          "The database schema only"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Black-box tests use inputs and expected outputs without inspecting internal code, so they can be written from requirements.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-060",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Boundary value analysis",
        "question": "For an input range of 1 to 100, boundary value analysis tests:",
        "options": [
          "Only 50",
          "1 and 100 only",
          "All values from 1 to 100",
          "0, 1, 100 and 101"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Boundary value analysis tests just inside and just outside each boundary, so 0, 1, 100 and 101 are the key values.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "White-box testing",
        "question": "White-box testing is also called:",
        "options": [
          "Structural testing",
          "Behavioural testing",
          "Acceptance testing",
          "Regression testing"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "White-box testing examines internal paths and structure, so it is structural testing.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cyclomatic complexity",
        "question": "A flow graph has 9 edges and 7 nodes. Its cyclomatic complexity is:",
        "options": [
          "2",
          "4",
          "3",
          "5"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "$V(G)=E-N+2=9-7+2=4$, the number of linearly independent paths.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-063",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Integration testing",
        "question": "Top-down integration testing starts with:",
        "options": [
          "The lowest-level modules",
          "The database",
          "The main control module and stubs",
          "The user interface only"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Top-down integration begins at the main module and uses stubs for lower-level modules not yet integrated.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-064",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Verification vs validation",
        "question": "Verification asks:",
        "options": [
          "Are we building the right product?",
          "Will the customer pay?",
          "Is the team productive?",
          "Are we building the product right?"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Verification checks conformance to specification; validation checks that the specification meets the user's need.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-065",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Debugging",
        "question": "Debugging differs from testing because debugging:",
        "options": [
          "Removes the defect after it is found",
          "Finds the defect",
          "Replaces requirements",
          "Measures performance"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Testing reveals failures; debugging locates and corrects the underlying defect.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-075",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Cyclomatic complexity",
        "question": "A flow graph has 12 edges, 9 nodes and 2 connected components. Its cyclomatic complexity is:",
        "options": [
          "3",
          "5",
          "7",
          "9"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "explanation": "$V(G)=E-N+2P=12-9+2(2)=7$.",
        "source": "syllabus"
      },
      {
        "id": "SE-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Design Heuristics",
        "question": "High Cohesion paired with Low Coupling is a fundamental heuristic for creating maintainable, testable software.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. High cohesion ensures modules are focused, while low coupling prevents changes in one module from rippling into others."
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
        "source": "syllabus",
        "explanation": "Stubs act as dummy subordinate modules in top-down integration testing, returning simulated canned responses until real sub-modules are integrated."
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
        "source": "syllabus",
        "explanation": "Smoke testing (or build verification testing) quickly validates that core functions run without crashing before investing time in comprehensive test suites."
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
        "source": "syllabus",
        "explanation": "Using the alternative predicate formula $V(G) = P_{red} + 1$, where $P_{red} = 4$, we get $V(G) = 4 + 1 = 5$ linearly independent basis paths."
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
        "source": "syllabus",
        "explanation": "Equivalence partitioning divides the input domain into equivalence classes (valid and invalid) under the assumption that all values in a class exhibit identical program behavior."
      },
      {
        "id": "SE-M2-019",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "McCall's Quality Factors",
        "question": "In McCall's Quality Factors model, into which three categories are software quality factors organized?",
        "options": [
          "Functional, Non-Functional, and Architectural",
          "Design, Coding, and Testing",
          "Product Operation, Product Revision, and Product Transition",
          "Reliability, Usability, and Scalability"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "McCall's model organizes 11 quality factors under 3 views: Product Operation (using it), Product Revision (changing it), and Product Transition (porting it to new environments)."
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
          "Processes are documented but unpredictable",
          "Continuous process improvement powered by quantitative feedback and piloting innovative ideas"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "At Level 5 (Optimizing), an organization focuses on continuous process improvement using statistical root-cause analysis, defect prevention, and innovative technology pilots."
      },
      {
        "id": "SE-M2-023",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Basic COCOMO Model",
        "question": "In Boehm's Basic COCOMO model, what are the three development modes classified according to project team size and innovation?",
        "options": [
          "Organic, Semidetached, and Embedded",
          "Standard, Enterprise, and Critical",
          "Agile, Waterfall, and Spiral",
          "Small, Medium, and Large"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Basic COCOMO defines 3 project modes: Organic (small, familiar teams), Semidetached (intermediate team with mixed experience), and Embedded (tight hardware/software constraints)."
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
        "source": "syllabus",
        "explanation": "FTRs (inspections and walkthroughs) are peer reviews aimed strictly at discovering defects early in artifacts (specs, designs, code), where fixes cost a fraction of post-release remediation."
      },
      {
        "id": "SE-M2-027",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Software Maintenance Types",
        "question": "Modifying software to adapt it to changes in its execution environment (such as a new OS version, updated DBMS, or cloud infrastructure) is termed:",
        "options": [
          "Preventive Maintenance",
          "Corrective Maintenance",
          "Adaptive Maintenance",
          "Perfective Maintenance"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
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
          "Preventive Maintenance",
          "Corrective Maintenance"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Corrective maintenance (bug fixing) repairs errors and defects discovered while the application is in live operational production."
      },
      {
        "id": "SE-M2-030",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Risk Projection",
        "question": "In software risk projection (estimation), risk impact is calculated using which two primary metrics?",
        "options": [
          "Probability of occurrence and Severity of impact (Loss)",
          "Compiler warnings and Cyclomatic complexity",
          "Number of developers and Project duration",
          "Cost of code and Lines of code"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
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
          "Portability",
          "Popularity",
          "Profitability"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "ISO 9126 defines six top-level software characteristics: Functionality, Reliability, Usability, Efficiency, Maintainability, and Portability."
      },
      {
        "id": "SE-SEM-066",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Risk exposure",
        "question": "Risk exposure is computed as:",
        "options": [
          "Probability + impact",
          "Probability x impact",
          "Cost / schedule",
          "Effort x people"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Risk exposure multiplies the probability of an occurrence by the loss if it occurs, giving a expected loss.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Reactive vs proactive risk",
        "question": "A proactive risk strategy:",
        "options": [
          "Waits for the risk to occur",
          "Ignores all risks",
          "Identifies and mitigates risk before it occurs",
          "Transfers every risk to the customer"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Proactive risk management plans mitigation in advance; reactive management responds only after the risk becomes a problem.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-068",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "RMMM",
        "question": "RMMM stands for:",
        "options": [
          "Requirements Modeling and Management",
          "Reliability Measurement and Maintenance",
          "Review, Measure, Modify, Maintain",
          "Risk Mitigation, Monitoring and Management"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "The RMMM plan documents how each risk will be mitigated, monitored and managed if it occurs.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-069",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "SQA",
        "question": "Software quality assurance is primarily:",
        "options": [
          "A set of planned activities across the process",
          "A testing phase at the end",
          "A tool for compiling code",
          "A replacement for project management"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "SQA is process-wide: it plans reviews, audits, standards and measurements rather than acting only at the end.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-070",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Formal technical review",
        "question": "Which review is the most formal and uses a trained moderator?",
        "options": [
          "Desk check",
          "Inspection",
          "Walkthrough",
          "Pair programming"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "An inspection follows a defined process with roles, checklists and a moderator, and records defects formally.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-071",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Reliability",
        "question": "Mean time to failure (MTTF) measures:",
        "options": [
          "How long a repair takes",
          "The number of developers",
          "How long a system runs before failing",
          "The size of the code"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "MTTF is the average operating time between failures; MTTR measures repair time.",
        "source": "syllabus"
      },
      {
        "id": "SE-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Cyclomatic Complexity",
        "question": "McCabe's Cyclomatic Complexity metric calculates the number of linearly independent paths through a module's control flow graph.",
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "True. V(G) = E - N + 2P provides the minimum number of test cases required to achieve branch coverage."
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
        "source": "syllabus",
        "explanation": "CMMI has 5 maturity levels: 1. Initial (ad-hoc), 2. Managed/Repeatable, 3. Defined, 4. Quantitatively Managed, 5. Optimizing."
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
        "source": "syllabus",
        "explanation": "COCOMO effort $E$ is expressed in Person-Months (PM), representing the work done by one person in one calendar month."
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
        "source": "syllabus",
        "explanation": "An RMMM plan articulates strategies for Risk Mitigation (avoidance), Risk Monitoring (tracking warning triggers), and Risk Management (contingency response)."
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
        "id": "ES-M2-001",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Soil pollution",
        "question": "Which practice is a major cause of soil salinity in irrigated fields?",
        "options": [
          "Excess irrigation without drainage",
          "Crop rotation",
          "Organic mulching",
          "Contour ploughing"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Excess irrigation raises the water table; evaporation then leaves dissolved salts in the root zone."
      },
      {
        "id": "ES-M2-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Wastewater treatment",
        "question": "Primary wastewater treatment mainly removes:",
        "options": [
          "Dissolved nutrients",
          "Suspended solids by physical settling",
          "Pathogens by chlorination",
          "Heavy metals by ion exchange"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Primary treatment is physical: screening, grit removal and sedimentation remove suspended solids."
      },
      {
        "id": "ES-M2-005",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Climate change",
        "question": "The greenhouse gas with the greatest long-term contribution to human-driven warming is:",
        "options": [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Argon"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Carbon dioxide from fossil fuel combustion is the largest cumulative contributor to anthropogenic warming."
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
        "source": "syllabus",
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
          "Richter Magnitude Scale",
          "Beaufort Scale",
          "Mercalli Intensity Scale",
          "Mohs Scale"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Richter scale calculates earthquake magnitude based on the logarithm of seismic wave amplitude, whereas the Mercalli scale rates observed surface damage intensity."
      },
      {
        "id": "ES-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Threats to biodiversity",
        "question": "The greatest cause of current biodiversity loss is:",
        "options": [
          "Volcanic eruptions",
          "Earthquakes",
          "Solar radiation",
          "Habitat loss and fragmentation"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Land conversion and fragmentation destroy habitats and isolate populations, the leading driver of extinction.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Conservation",
        "question": "A biosphere reserve is an example of:",
        "options": [
          "In-situ conservation",
          "Ex-situ conservation",
          "Captive breeding",
          "Seed banking"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "In-situ conservation protects species in their natural habitat; zoos and seed banks are ex-situ.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-058",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Ex-situ conservation",
        "question": "Which is an ex-situ conservation method?",
        "options": [
          "National park",
          "Botanical garden",
          "Wildlife sanctuary",
          "Biosphere reserve"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A botanical garden maintains plants outside their natural habitat, which is ex-situ conservation.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-073",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Species-area relationship",
        "question": "The species-area relationship is commonly expressed as:",
        "options": [
          "$S = cA^z$",
          "$S = c + A$",
          "$S = c/A$",
          "$S = A^2$"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Species richness S rises with area A according to $S=cA^z$, where c is a constant and z is the slope in log-log space.",
        "source": "syllabus"
      },
      {
        "id": "ES-M2-TF-01",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Soil pollution",
        "question": "Excessive use of chemical fertilizers can cause eutrophication of nearby water bodies.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Runoff carrying nitrates and phosphates feeds algal blooms, which deplete oxygen when they decompose."
      },
      {
        "id": "ES-M2-TF-02",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Wastewater treatment",
        "question": "Secondary wastewater treatment is primarily a biological process.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Secondary treatment uses microorganisms to break down dissolved organic matter, often in an activated-sludge tank."
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
        "source": "syllabus",
        "explanation": "The A-weighting filter curve closely matches human ear sensitivity across different sound frequencies, making dB(A) the universal regulatory metric."
      },
      {
        "id": "ES-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Soil pollution",
        "question": "The buildup of soluble salts in soil due to poor irrigation is called _______.",
        "accepted": [
          "salinization",
          "salination",
          "salinisation"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Salinization occurs when irrigation water evaporates and leaves salts behind in the root zone."
      },
      {
        "id": "ES-M2-006",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Ozone depletion",
        "question": "Ozone in the stratosphere is destroyed mainly by _______ released from CFCs.",
        "accepted": [
          "chlorine",
          "chlorine atoms",
          "free chlorine"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "UV light breaks CFCs apart, releasing chlorine atoms that catalytically destroy ozone molecules."
      },
      {
        "id": "ES-M2-009",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Brundtland Sustainable Development",
        "question": "According to the 1987 Brundtland Commission Report 'Our Common Future', Sustainable Development is defined as:",
        "options": [
          "Complete preservation of all nature reserves without human economic activity",
          "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
          "Equal distribution of mineral wealth among all nations",
          "Achieving 100% industrial output through fossil fuel expansion"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The landmark Brundtland definition emphasizes inter-generational and intra-generational equity: meeting present needs while preserving natural capital for future generations."
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
          "Lead particulates and Ammonia",
          "Sulfur dioxide ($SO_2$) and Nitrogen oxides ($NO_x$)",
          "Carbon monoxide ($CO$) and Methane ($CH_4$)"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "$SO_2$ and $NO_x$ emitted from coal power plants and vehicles oxidize into sulfuric acid ($H_2SO_4$) and nitric acid ($HNO_3$), depressing rain pH below 5.6."
      },
      {
        "id": "ES-M2-013",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Ozone Layer Depletion",
        "question": "Which international environmental treaty was adopted in 1987 to phase out the production of Chlorofluorocarbons (CFCs) and protect the stratospheric ozone layer?",
        "options": [
          "Paris Agreement",
          "Ramsar Convention",
          "Kyoto Protocol",
          "Montreal Protocol"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Montreal Protocol (1987) is universally ratified and regulates nearly 100 ozone-depleting substances, famously allowing the stratospheric ozone hole to heal."
      },
      {
        "id": "ES-M2-015",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Greenhouse Effect GWP",
        "question": "Which major greenhouse gas has the highest 100-year Global Warming Potential (GWP) among the common atmospheric greenhouse gases listed below?",
        "options": [
          "Nitrous Oxide ($N_2O$)",
          "Carbon Dioxide ($CO_2$)",
          "Water Vapor ($H_2O$)",
          "Methane ($CH_4$)"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "While $CO_2$ has a baseline GWP of 1, methane ($CH_4$) has a GWP of ~28-30, and nitrous oxide ($N_2O$) has a very high GWP of ~265-298 over 100 years."
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
          "Ukraine",
          "Kazakhstan",
          "Belarus"
        ],
        "answerIndex": 1,
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
          "Loss of tidal energy",
          "Involuntary displacement, loss of cultural heritage, and inadequate rehabilitation of local indigenous communities",
          "Cooling of downstream river temperatures causing ice formation"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Large dams submerge fertile agricultural valleys and displacement leads to severance from traditional livelihoods, necessitating comprehensive Resettlement and Rehabilitation (R&R)."
      },
      {
        "id": "ES-SEM-059",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Soil pollution",
        "question": "Which agricultural practice most directly causes soil pollution?",
        "options": [
          "Crop rotation",
          "Contour ploughing",
          "Excessive pesticide use",
          "Organic composting"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Pesticides and fertilizers accumulate in soil, harming soil organisms and leaching into water.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-060",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Wastewater treatment",
        "question": "Activated sludge treatment is a:",
        "options": [
          "Primary physical process",
          "Tertiary chemical process",
          "Disinfection process",
          "Secondary biological process"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Air and microorganisms in the aeration tank break down dissolved organic matter, a secondary biological process.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-061",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Tertiary treatment",
        "question": "Tertiary treatment is used mainly to:",
        "options": [
          "Remove nutrients, pathogens or specific pollutants",
          "Remove large debris",
          "Settle grit",
          "Reduce biological oxygen demand only"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Tertiary treatment polishes secondary effluent by removing nutrients, pathogens or trace pollutants.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-062",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Climate change",
        "question": "The enhanced greenhouse effect is caused by:",
        "options": [
          "A thinning ozone layer",
          "Increasing greenhouse gas concentrations",
          "Volcanic dust alone",
          "Changes in Earth's orbit only"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Human emissions of CO2, methane and other gases trap more outgoing infrared radiation, warming the surface.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-063",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Ozone depletion",
        "question": "Ozone depletion is most severe over:",
        "options": [
          "The tropics",
          "The equator",
          "Antarctica",
          "Deserts"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Polar stratospheric clouds in the extremely cold Antarctic winter make chlorine-catalysed ozone destruction especially severe.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-064",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Kyoto Protocol",
        "question": "The Kyoto Protocol primarily targets:",
        "options": [
          "Ozone-depleting substances",
          "Hazardous waste trade",
          "Marine pollution",
          "Greenhouse gas emissions"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Kyoto sets binding greenhouse-gas reduction targets for developed countries; Montreal handles ozone-depleting substances.",
        "source": "syllabus"
      },
      {
        "id": "ES-M2-TF-03",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Biomagnification",
        "question": "Biomagnification describes the increasing concentration of persistent non-biodegradable toxins at each higher trophic level.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. Substances like DDT and heavy metals accumulate in fatty tissues and multiply up the food chain."
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
        "source": "syllabus",
        "explanation": "Rainwater harvesting captures monsoon precipitation before runoff loss, mitigating urban water scarcity and replenishing depleting aquifers."
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
        "source": "syllabus",
        "explanation": "Dissolved $CO_2$ forms weak carbonic acid ($H_2CO_3$), giving pristine unpolluted rain a natural background pH of roughly 5.6."
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
        "source": "syllabus",
        "explanation": "One Dobson Unit corresponds to an ozone layer 0.01 mm thick at standard temperature and pressure (STP). Normal atmospheric ozone is roughly 300 DU."
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
        "source": "syllabus",
        "explanation": "The Kyoto Protocol committed Annex I industrialized countries to limit and reduce greenhouse gas emissions in accordance with agreed individual targets."
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
          "1992",
          "1986"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Enacted in 1986 in the wake of the 1984 Bhopal Gas Tragedy, the Environment (Protection) Act serves as overarching umbrella legislation empowering the central government to set national quality standards."
      },
      {
        "id": "ES-M2-021",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Air Act Amendment",
        "question": "In which year was the Air (Prevention and Control of Pollution) Act amended to explicitly include 'noise' within the definition of air pollutants?",
        "options": [
          "1987",
          "1981",
          "2000",
          "1995"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Originally passed in 1981, the Air Act was amended in 1987 to expand the definition of air pollutant to include noise, paving the way for the Noise Pollution Rules 2000."
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
          "The Central Government of India (MoEFCC)",
          "State Forest Department officers only",
          "The local Gram Panchayat"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Section 2 of the Forest Conservation Act 1980 mandates prior approval from the Central Government (Ministry of Environment, Forest and Climate Change) before diverting any forest land."
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
          "Sharing meals, handshakes, or using the same toilet seat",
          "Unprotected sexual intercourse"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "HIV cannot survive outside body fluids and is not transmitted through casual social contact, saliva, sweat, hugging, food sharing, or insect bites."
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
          "Maximizing consumer demand for single-use plastic goods",
          "Eliminating traditional agrarian conservation wisdom",
          "Inculcating moral responsibility, ecological respect, and sustainable lifestyle ethics among citizens"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Value education cultivates an ethical ecocentric mindset, fostering respect for biodiversity, self-restraint, and sustainable conservation behavior."
      },
      {
        "id": "ES-M2-029",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "ENVIS Information System",
        "question": "The Environmental Information System (ENVIS) established by MoEFCC serves to:",
        "options": [
          "Collect, collate, and disseminate environmental information to researchers, policy-makers, and the public",
          "Manufacture solar panels",
          "Issue corporate patent licenses",
          "Manage defense satellite operations"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "ENVIS was established in 1982 by the Indian Ministry of Environment to act as a decentralized network providing reliable ecological data and scientific research across nodal centers."
      },
      {
        "id": "ES-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Kyoto and Montreal",
        "question": "The Montreal Protocol is an international agreement to:",
        "options": [
          "Reduce greenhouse gases",
          "Phase out ozone-depleting substances",
          "Protect wetlands",
          "Ban nuclear testing"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Montreal Protocol (1987) phases out CFCs and other ozone-depleting substances; Kyoto targets greenhouse gases."
      },
      {
        "id": "ES-SEM-065",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Environmental Protection Act",
        "question": "The Environment (Protection) Act in India was enacted in:",
        "options": [
          "1986",
          "1972",
          "1974",
          "1981"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The EPA 1986 followed the Bhopal gas tragedy and gives the central government broad powers to protect the environment.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-066",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Air Act",
        "question": "The Air (Prevention and Control of Pollution) Act was enacted in:",
        "options": [
          "1974",
          "1981",
          "1986",
          "1991"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "The Air Act 1981 created pollution control boards and powers to regulate industrial emissions.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-067",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Water Act",
        "question": "The Water (Prevention and Control of Pollution) Act was enacted in:",
        "options": [
          "1981",
          "1986",
          "1974",
          "2000"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The Water Act 1974 established the Central and State Pollution Control Boards.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-068",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "EIA",
        "question": "The first step in an environmental impact assessment is:",
        "options": [
          "Public hearing",
          "Monitoring",
          "Mitigation",
          "Screening to decide whether an EIA is needed"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Screening determines whether a project requires a full EIA; scoping then defines the issues to study.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-069",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Sustainable development",
        "question": "Sustainable development is defined as development that:",
        "options": [
          "Meets present needs without compromising future generations",
          "Maximises present consumption",
          "Stops all industrial growth",
          "Depends only on technology"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The Brundtland definition balances present needs with the ability of future generations to meet theirs.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-070",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Green chemistry",
        "question": "Green chemistry aims to:",
        "options": [
          "Increase hazardous waste",
          "Design chemical products and processes that reduce or eliminate hazards",
          "Replace all chemicals with plastics",
          "Increase energy use"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Green chemistry applies principles such as waste prevention, safer solvents and energy efficiency at the design stage.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-074",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "EIA sequence",
        "question": "Which sequence gives the correct order of environmental impact assessment steps?",
        "options": [
          "Scoping → screening → reporting → baseline study → review → mitigation → impact prediction",
          "Screening → scoping → baseline study → impact prediction → mitigation → reporting → review",
          "Baseline study → screening → review → scoping → mitigation → reporting → impact prediction",
          "Impact prediction → review → screening → scoping → reporting → baseline study → mitigation"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "EIA first decides whether assessment is needed (screening), defines its scope, collects baseline data, predicts impacts, plans mitigation, reports and then undergoes review.",
        "source": "syllabus"
      },
      {
        "id": "ES-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Composting",
        "question": "Composting is a biological decomposition process that converts biodegradable organic waste into nutrient-rich humus.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "True. Aerobic composting by microorganisms transforms municipal organic waste into fertile soil conditioner."
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
        "source": "syllabus",
        "explanation": "The Water Act of 1974 established the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) to maintain and restore water wholesomeness."
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
        "source": "syllabus",
        "explanation": "The Wildlife Protection Act of 1972 established schedules of protected flora/fauna, outlawed poaching, and authorized declarations of Sanctuaries, National Parks, and Tiger Reserves."
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
        "source": "syllabus",
        "explanation": "June 5th commemorates the opening day of the United Nations Conference on the Human Environment (Stockholm 1972)."
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
        "source": "syllabus",
        "explanation": "Article 48A was added by the 42nd Amendment (1976), enshrining state responsibility for environmental conservation in the Directive Principles of State Policy."
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
        "source": "syllabus",
        "explanation": "Article 51A(g) establishes: 'It shall be the duty of every citizen of India to protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures.'"
      }
    ],
    "IE": [
      {
        "id": "IE-SEM-023",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Prototyping",
        "question": "A prototype is best described as:",
        "options": [
          "the final commercial product",
          "a legal document for patent filing",
          "an early model used to test and communicate a concept",
          "a complete business plan"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "A prototype is an early, often simplified model that lets the team test assumptions, gather feedback and communicate the concept.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-024",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Minimum viable product",
        "question": "The main purpose of a Minimum Viable Product (MVP) is to:",
        "options": [
          "maximise features before launch",
          "replace all customer research",
          "raise the largest possible funding round",
          "test core value hypotheses with minimum effort and maximum validated learning"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "An MVP delivers just enough functionality to test the core value proposition and learn from real users before scaling.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-025",
        "type": "mcq",
        "unit": 3,
        "scope": "mid2",
        "topic": "Prototype validation",
        "question": "Prototype testing and validation should mainly focus on:",
        "options": [
          "observing real users and checking whether the solution solves their problem",
          "confirming the founder's assumptions without user input",
          "adding every requested feature immediately",
          "finalising the legal structure"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Testing with real users shows whether the prototype solves the problem and which assumptions need revision.",
        "source": "syllabus"
      },
      {
        "id": "IE-M2-TF-03",
        "type": "tf",
        "unit": 3,
        "scope": "mid2",
        "topic": "Prototype",
        "question": "A prototype is an early model used to test and communicate a product concept.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A prototype makes the concept tangible so the team can gather feedback before full development."
      },
      {
        "id": "IE-SEM-002",
        "type": "fib",
        "unit": 3,
        "scope": "mid2",
        "topic": "Minimum viable product",
        "question": "A version of a product that allows a team to collect the maximum validated learning with the least effort is called a minimum _______ product.",
        "accepted": [
          "viable",
          "viable product"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An MVP tests the core value hypothesis with real users before the team invests in a full product."
      },
      {
        "id": "IE-M1-003",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas problem block",
        "question": "Which Lean Canvas block lists the top customer problems and existing alternatives?",
        "options": [
          "Solution",
          "Channels",
          "Key Metrics",
          "Problem"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Problem block captures the main customer pains and the alternatives they currently use."
      },
      {
        "id": "IE-M2-001",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas blocks",
        "question": "How many blocks does the Lean Canvas use to summarise a startup?",
        "options": [
          "9",
          "5",
          "7",
          "12"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Lean Canvas uses nine blocks, including Problem, Solution, Key Metrics, Cost Structure and Unfair Advantage."
      },
      {
        "id": "IE-M2-003",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas customer segments",
        "question": "Which Lean Canvas block defines the groups of people the venture aims to serve?",
        "options": [
          "Key Metrics",
          "Customer Segments",
          "Cost Structure",
          "Unfair Advantage"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Customer Segments identifies the target users and buyers, which anchors the rest of the canvas."
      },
      {
        "id": "IE-M2-005",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Subscription business model",
        "question": "A business model in which customers pay a recurring fee for continuing access to a product is called a:",
        "options": [
          "one-time sale model",
          "barter model",
          "subscription model",
          "franchise model"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Subscription models generate recurring revenue, such as monthly software or streaming fees, instead of a single purchase."
      },
      {
        "id": "IE-M2-007",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas channels",
        "question": "In the Lean Canvas, the Channels block describes:",
        "options": [
          "the cost of raw materials",
          "the key metrics used to measure growth",
          "the unfair advantage of the founder",
          "how the venture reaches and delivers value to customers"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Channels covers the routes used to reach customers, from awareness and evaluation to purchase and delivery."
      },
      {
        "id": "IE-M2-010",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Fixed cost",
        "question": "Which cost remains unchanged when output rises in the short run?",
        "options": [
          "Variable cost",
          "Fixed cost",
          "Raw material cost",
          "Packaging cost"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Fixed costs, such as rent, do not vary with output over the relevant short-run range; variable costs do."
      },
      {
        "id": "IE-M2-012",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Break-even formula",
        "question": "Break-even quantity is calculated by dividing fixed costs by:",
        "options": [
          "selling price per unit",
          "variable cost per unit",
          "contribution per unit",
          "total cost per unit"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Break-even quantity = fixed costs ÷ (selling price − variable cost per unit), where the denominator is contribution per unit."
      },
      {
        "id": "IE-M2-014",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "People plan",
        "question": "Which part of a business plan describes the roles, skills and hiring needed by the venture?",
        "options": [
          "Sales plan",
          "Financial plan",
          "Patent plan",
          "People plan"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The people plan covers organisation structure, roles, skills, hiring and the cost of the team."
      },
      {
        "id": "IE-M2-029",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Direct channel",
        "question": "Which is an example of a direct channel for reaching customers?",
        "options": [
          "The company's own website",
          "A wholesaler",
          "A retailer",
          "A distributor"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A direct channel connects the venture straight to the customer, such as its own website or store, without intermediaries."
      },
      {
        "id": "IE-SEM-026",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Business model",
        "question": "A business model describes:",
        "options": [
          "only the company's office layout",
          "how a venture creates, delivers and captures value",
          "the personal hobbies of the founders",
          "the list of all competitors"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A business model explains how an organisation creates value for customers, delivers it and captures revenue at a sustainable cost.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-027",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas",
        "question": "The Lean Canvas replaces lengthy business plans with a one-page model built around:",
        "options": [
          "five financial statements",
          "three legal contracts",
          "nine problem-solution blocks",
          "seven marketing channels only"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The Lean Canvas summarises a startup on one page using nine blocks, including Problem, Solution, Key Metrics and Unfair Advantage.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-028",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Business plan components",
        "question": "Which set lists typical components of a business plan?",
        "options": [
          "Patent, trademark and copyright",
          "Empathy, define and ideate",
          "TAM, SAM and SOM",
          "Sales plan, people plan and financial plan"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "The MR25 syllabus names sales, people and financial plans as core business-plan components, supported by the overall strategy.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-029",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Variable cost",
        "question": "A cost that changes in direct proportion to the number of units produced is a:",
        "options": [
          "variable cost",
          "fixed cost",
          "sunk cost",
          "opportunity cost"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Variable costs rise and fall with output, such as raw materials, while fixed costs remain constant over a relevant range.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-030",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Break-even analysis",
        "question": "A product sells for ₹500, variable cost is ₹300 per unit and fixed costs are ₹40,000. The break-even quantity is:",
        "options": [
          "80 units",
          "200 units",
          "133 units",
          "400 units"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "Contribution per unit = ₹500 − ₹300 = ₹200. Break-even = ₹40,000 ÷ ₹200 = 200 units.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-031",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Unit economics",
        "question": "Unit economics is concerned with:",
        "options": [
          "the total size of the national economy",
          "the number of units in a warehouse",
          "revenue and cost associated with one customer or unit of sale",
          "the salary of the CEO only"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Unit economics compares the revenue earned from one customer or unit with the costs of acquiring and serving it.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-032",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Economies of scale",
        "question": "Economies of scale occur when:",
        "options": [
          "fixed costs disappear completely",
          "every additional unit costs more than the previous one",
          "a firm reduces its customer base",
          "average cost per unit falls as output increases"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Economies of scale arise when spreading fixed costs and improving efficiency lower the average cost per unit as volume grows.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-033",
        "type": "mcq",
        "unit": 4,
        "scope": "mid2",
        "topic": "Go-to-market strategy",
        "question": "A go-to-market strategy mainly decides:",
        "options": [
          "which channels to use and how to reach and acquire customers",
          "which programming language to use",
          "how to register a patent",
          "how to conduct employee appraisals"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A GTM strategy selects channels, messaging and acquisition tactics to reach target customers and convert them into buyers.",
        "source": "syllabus"
      },
      {
        "id": "IE-M2-TF-01",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas structure",
        "question": "The Lean Canvas is structured around nine core blocks.",
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Lean Canvas uses nine blocks, including Problem, Solution, Key Metrics and Unfair Advantage."
      },
      {
        "id": "IE-M2-TF-02",
        "type": "tf",
        "unit": 4,
        "scope": "mid2",
        "topic": "Unfair advantage",
        "question": "In the Lean Canvas, an unfair advantage is something that cannot easily be copied or bought by competitors.",
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "An unfair advantage is a durable edge, such as proprietary data or network effects, that rivals cannot easily replicate."
      },
      {
        "id": "IE-M2-002",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Unique value proposition",
        "question": "In the Lean Canvas, the block that states why the product is different and worth buying is the Unique _______ Proposition.",
        "accepted": [
          "Value",
          "value"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Unique Value Proposition states the single clear reason a customer should choose this product over alternatives."
      },
      {
        "id": "IE-M2-006",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Lean Canvas revenue streams",
        "question": "In the Lean Canvas, the block that lists how the venture earns money is called Revenue _______.",
        "accepted": [
          "Streams",
          "streams"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Revenue Streams lists the sources and pricing models through which the venture earns money."
      },
      {
        "id": "IE-M2-011",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Contribution margin",
        "question": "Revenue from one customer minus the cost of serving that customer is called the _______ margin.",
        "accepted": [
          "contribution",
          "contribution margin"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Contribution margin shows how much each sale contributes towards fixed costs and profit."
      },
      {
        "id": "IE-M2-013",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Business plan",
        "question": "A document that forecasts sales, people and finances for a new venture is called a business _______.",
        "accepted": [
          "plan"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A business plan sets out the venture's strategy and includes sales, people and financial plans."
      },
      {
        "id": "IE-M2-015",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Financial plan",
        "question": "A financial plan projects revenue, costs and expected _______ for the venture.",
        "accepted": [
          "profit",
          "profitability"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The financial plan converts the business model into forecasts of revenue, costs and profit."
      },
      {
        "id": "IE-M2-028",
        "type": "fib",
        "unit": 4,
        "scope": "mid2",
        "topic": "Go-to-market strategy",
        "question": "The plan for reaching target customers through selected channels is called the go-to-_______ strategy.",
        "accepted": [
          "market"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A go-to-market strategy defines target segments, channels, messaging and acquisition tactics."
      },
      {
        "id": "IE-M2-008",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Non-dilutive funding",
        "question": "Which funding source usually supports a startup without diluting founder ownership?",
        "options": [
          "Government grant or subsidy",
          "Angel equity investment",
          "Venture capital round",
          "Initial public offering"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Grants and subsidies provide funds without taking equity, unlike angel, venture capital or public-market investors."
      },
      {
        "id": "IE-M2-016",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Crowdfunding",
        "question": "Which funding method pools small contributions from many people, usually through an online platform?",
        "options": [
          "Crowdfunding",
          "Venture capital",
          "Bank term loan",
          "Trade credit"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Crowdfunding raises small amounts from many backers, often in reward-, donation-, debt- or equity-based forms."
      },
      {
        "id": "IE-M2-017",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Startup India Seed Fund",
        "question": "The Startup India Seed Fund Scheme primarily supports early-stage startups by:",
        "options": [
          "collecting corporate taxes in advance",
          "providing financial assistance for proof of concept, prototyping and product trials",
          "mandating government employment quotas",
          "buying controlling equity in unicorns"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "SISFS provides seed funding for early-stage validation, prototyping and market entry, not for buying controlling stakes."
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
        "source": "syllabus",
        "explanation": "To qualify for a patent, an invention must be new (novelty), involve an inventive step not obvious to a person skilled in the art, and be capable of industrial application."
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
          "To protect the functional mechanical design of a machine",
          "To grant exclusive rights over mathematical formulas",
          "To distinguish goods or services of one enterprise from those of competitors and prevent consumer confusion"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A trademark protects distinctive symbols, words, logos, or slogans (e.g. Nike Swoosh, Apple logo) that identify the commercial source of goods and prevent brand impersonation."
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
        "source": "syllabus",
        "explanation": "For literary, musical, dramatic, and artistic works (including software source code), copyright subsists during the author's lifetime plus 60 years counted from the year following death."
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
          "Darjeeling Tea",
          "Tesla Model 3",
          "Windows 11"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Darjeeling Tea was the first product in India to receive a GI tag (2004-05), certifying that its unique quality and aroma originate exclusively from the Darjeeling region of West Bengal."
      },
      {
        "id": "IE-M2-026",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Licensing",
        "question": "A licence agreement typically allows the licensee to use intellectual property in exchange for a _______.",
        "options": [
          "patent",
          "trademark",
          "royalty",
          "copyright"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The licensor permits use of the IP and usually receives a fee or royalty, while ownership stays with the licensor."
      },
      {
        "id": "IE-M2-027",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Startup lifecycle",
        "question": "In a typical startup lifecycle, which stage normally follows problem validation?",
        "options": [
          "Idea generation",
          "Company registration",
          "Public listing",
          "Prototype and MVP development"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "After validating the problem, the team builds a prototype or MVP to test the solution with users."
      },
      {
        "id": "IE-M2-031",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "NISP",
        "question": "The National Innovation and Startup Policy primarily encourages innovation in:",
        "options": [
          "foreign embassies",
          "higher-education institutions",
          "stock exchanges",
          "civil courts"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "NISP gives universities and colleges a framework for student and faculty innovation, incubation and startup support."
      },
      {
        "id": "IE-SEM-034",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Startup registration",
        "question": "Which is a basic legal requirement for formally registering a startup in India?",
        "options": [
          "A patent granted before incorporation",
          "Incorporation with the appropriate registrar and a unique business name",
          "A minimum of 100 employees",
          "A public listing on a stock exchange"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Formal registration begins with incorporating the venture and securing a unique name with the registrar; patents and listings are not prerequisites.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-035",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Pitch preparation",
        "question": "A startup pitch should primarily communicate:",
        "options": [
          "every technical detail of the codebase",
          "the founder's school marks",
          "the problem, solution, market opportunity, traction and team",
          "the complete employee handbook"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Investors look for a clear problem, credible solution, market size, evidence of traction and a capable team.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-036",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Startup funding",
        "question": "Which source provides early-stage financial support to a startup without taking equity?",
        "options": [
          "Angel equity investment",
          "Venture capital round",
          "Initial public offering",
          "Government grant or subsidy scheme"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Grants and subsidies support eligible startups without diluting founder ownership, unlike equity investors.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-037",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "NISP",
        "question": "The National Innovation and Startup Policy (NISP) is mainly intended to:",
        "options": [
          "promote innovation and entrepreneurship in higher-education institutions",
          "ban student startups",
          "replace all government funding",
          "regulate foreign trade"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "NISP provides a framework for universities and colleges to support student and faculty innovation, incubation and startup creation.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-038",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Patentability",
        "question": "Which set lists the three main patentability requirements in India?",
        "options": [
          "Novelty, beauty and popularity",
          "Novelty, inventive step and industrial application",
          "Profit, publicity and patent fee",
          "Copyright, trademark and design"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "An invention must be new, involve an inventive step and be capable of industrial application; it must also fall within patentable subject matter.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-039",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Patent term",
        "question": "The term of a granted Indian patent is generally:",
        "options": [
          "5 years from filing",
          "10 years from filing",
          "20 years from filing",
          "the life of the inventor plus 60 years"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Indian patents are granted for 20 years from the date of filing, subject to renewal fees.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-040",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Geographical indication",
        "question": "Which form of intellectual property identifies the geographical origin of a product?",
        "options": [
          "Copyright",
          "Trademark",
          "Patent",
          "Geographical Indication"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A Geographical Indication protects a product name linked to a specific place and its traditional quality or reputation.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-041",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Licensing",
        "question": "Licensing a technology allows the owner to:",
        "options": [
          "permit another party to use the technology under agreed conditions",
          "give up all rights permanently",
          "avoid all legal documentation",
          "prevent any future innovation"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A licence grants permission to use intellectual property on defined terms, while ownership remains with the licensor.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-042",
        "type": "mcq",
        "unit": 5,
        "scope": "mid2",
        "topic": "Startup lifecycle",
        "question": "Which sequence best represents a typical startup lifecycle?",
        "options": [
          "Patent → retirement → idea → launch",
          "Idea → validation → growth → maturity or exit",
          "IPO → idea → validation → incorporation",
          "Maturity → idea → prototype → exit"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A startup typically moves from idea and validation through growth to maturity, with exit or scale as possible later outcomes.",
        "source": "syllabus"
      },
      {
        "id": "IE-M2-TF-04",
        "type": "tf",
        "unit": 5,
        "scope": "mid2",
        "topic": "Grant funding",
        "question": "A government grant usually dilutes the founder's ownership of the startup.",
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Grants normally provide funds without taking equity, so they do not dilute founder ownership."
      },
      {
        "id": "IE-M2-009",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Government grant",
        "question": "A government scheme that gives eligible startups financial support without taking equity is called a _______.",
        "accepted": [
          "grant",
          "subsidy",
          "government grant"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A grant or subsidy supports eligible ventures financially while leaving ownership with the founders."
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
        "source": "syllabus",
        "explanation": "Under the Indian Patents Act 1970 (aligned with TRIPS), every granted patent has a term of 20 years from the date of patent application filing."
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
        "source": "syllabus",
        "explanation": "Trademarks are granted for 10-year terms and may be renewed indefinitely every 10 years upon payment of renewal fees."
      },
      {
        "id": "IE-M2-023",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Design registration",
        "question": "A registered design protects the visual _______ of an article, not its technical function.",
        "accepted": [
          "appearance",
          "shape",
          "ornamentation"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Design law protects the outward appearance, shape, pattern or ornamentation of a product; functional features belong to patent law."
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
        "id": "IE-M2-030",
        "type": "fib",
        "unit": 5,
        "scope": "mid2",
        "topic": "Incorporation",
        "question": "The legal process of forming a company is called _______.",
        "accepted": [
          "incorporation",
          "registration"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Incorporation creates the company as a separate legal entity and is a core step in startup registration."
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
        "back": "A group $(G, *)$ is Abelian (commutative) when $a * b = b * a$ for all $a, b \\in G$. Every cyclic group is Abelian, but the converse is false: the Klein four-group is Abelian yet not cyclic. Keywords: commutativity, cyclic group, Klein four-group."
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
        "id": "FC-SEM-DM-43",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Lattice",
        "highYield": true,
        "front": "When is a POSet a lattice?",
        "back": "Every pair of elements must have a greatest lower bound (meet) and a least upper bound (join) inside the set.\nKeywords: lattice, meet, join, GLB, LUB"
      },
      {
        "id": "FC-SEM-DM-44",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Boolean algebra",
        "highYield": true,
        "front": "What is a Boolean algebra?",
        "back": "A complemented distributive lattice with least element 0 and greatest element 1. It obeys commutative, associative, distributive, identity and complement laws.\nKeywords: Boolean algebra, complemented, distributive, complement"
      },
      {
        "id": "FC-SEM-DM-59",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Lattice properties and special lattices",
        "highYield": false,
        "front": "Define a bounded, complemented, and distributive lattice.",
        "back": "1. Bounded: has least element 0 and greatest element 1.\n2. Complemented: every a has b with a∨b=1 and a∧b=0.\n3. Distributive: a∧(b∨c)=(a∧b)∨(a∧c).\n4. A non-distributive lattice contains the pentagon N5 or diamond M3.\nKeywords: bounded, complemented, distributive, pentagon, diamond"
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
        "back": "If the characteristic equation has a root $r$ of multiplicity 2, the general solution is $a_n = (C_1 + C_2 n) r^n$. For multiplicity $k$, use $(C_1 + C_2 n + \\dots + C_k n^{k-1}) r^n$ and determine the constants from the initial conditions."
      },
      {
        "id": "FC-DM-11",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Generating Function of $a^n$",
        "highYield": true,
        "front": "What is the generating function for the sequence $1, a, a^2, a^3, \\dots$?",
        "back": "For the geometric sequence $1, a, a^2, a^3, \\dots$, the generating function is $G(x) = \\sum_{n \\ge 0} a^n x^n = \\frac{1}{1 - ax}$, valid for $|ax| < 1$. It is the basic building block for solving recurrences and counting problems."
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
        "id": "FC-SEM-DM-45",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Sum and product rules",
        "highYield": true,
        "front": "State the sum rule and the product rule of counting.",
        "back": "Sum rule: if tasks are mutually exclusive, add the counts. Product rule: if a task has independent stages, multiply the counts.\nKeywords: sum rule, product rule, counting"
      },
      {
        "id": "FC-SEM-DM-46",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Permutation formula",
        "highYield": true,
        "front": "How many permutations of $n$ distinct objects are there?",
        "back": "$n!$ arrangements. For $r$ positions chosen from $n$ distinct objects, the count is $P(n,r)=n!/(n-r)!$.\nKeywords: permutation, factorial, arrangement"
      },
      {
        "id": "FC-SEM-DM-47",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Combination formula",
        "highYield": true,
        "front": "How many ways can you choose $r$ objects from $n$ distinct objects?",
        "back": "$\\binom{n}{r}=n!/[r!(n-r)!]$. Order does not matter; choosing $r$ is the same as leaving out $n-r$.\nKeywords: combination, choose, binomial coefficient"
      },
      {
        "id": "FC-SEM-DM-48",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Stars and bars",
        "highYield": true,
        "front": "How many non-negative integer solutions does $x_1+\\cdots+x_k=n$ have?",
        "back": "$\\binom{n+k-1}{k-1}$. Place $n$ identical items into $k$ boxes separated by $k-1$ bars.\nKeywords: stars and bars, non-negative solutions, distribution"
      },
      {
        "id": "FC-SEM-DM-49",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Binomial theorem",
        "highYield": true,
        "front": "State the binomial theorem and its general term.",
        "back": "$(x+y)^n=\\sum_{r=0}^{n}\\binom{n}{r}x^{n-r}y^r$. The general term is $\\binom{n}{r}x^{n-r}y^r$.\nKeywords: binomial theorem, general term, coefficient"
      },
      {
        "id": "FC-SEM-DM-50",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Inclusion-exclusion",
        "highYield": true,
        "front": "State the inclusion-exclusion principle for two and three sets.",
        "back": "$|A \\cup B|=|A|+|B|-|A \\cap B|$. For three sets, subtract the three pairwise intersections and add back the triple intersection.\nKeywords: inclusion-exclusion, union, intersection"
      },
      {
        "id": "FC-SEM-DM-51",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Recurrence relations",
        "highYield": true,
        "front": "How do you solve a linear homogeneous recurrence with constant coefficients?",
        "back": "Write the characteristic equation, find its roots, and combine powers of the roots. Repeated roots need an extra factor of $n$.\nKeywords: recurrence, characteristic equation, homogeneous"
      },
      {
        "id": "FC-SEM-DM-60",
        "subjectId": "DM",
        "unit": 4,
        "topic": "Multinomial theorem",
        "highYield": false,
        "front": "State the multinomial theorem for (x1 + x2 + ... + xk)^n.",
        "back": "1. Expand as the sum over n1+...+nk=n of n!/(n1!...nk!) x1^n1...xk^nk.\n2. The coefficient n!/(n1!...nk!) is the multinomial coefficient.\n3. For k=2 it reduces to the binomial theorem.\nKeywords: multinomial, coefficient, binomial"
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
        "back": "ΓÇó Euler Circuit: Every vertex has even degree.\nΓÇó Euler Path: Exactly 2 vertices have odd degree."
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
        "back": "For a connected simple planar graph with $V \\ge 3$: $E \\le 3V - 6$. If the graph is triangle-free (no 3-cycles), the tighter bound is $E \\le 2V - 4$. Both follow from Euler's formula $V - E + F = 2$ together with $3F \\le 2E$ (or $4F \\le 2E$ when triangle-free)."
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
      },
      {
        "id": "FC-SEM-DM-52",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Handshaking lemma",
        "highYield": true,
        "front": "State the handshaking lemma and one consequence.",
        "back": "$\\sum_v \\deg(v)=2|E|$. Therefore the number of odd-degree vertices in any graph is even.\nKeywords: handshaking, degree sum, odd vertices"
      },
      {
        "id": "FC-SEM-DM-53",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Graph isomorphism",
        "highYield": true,
        "front": "What must two isomorphic graphs share?",
        "back": "The same number of vertices and edges, the same degree sequence, and the same cycle structure. These are necessary, not sufficient.\nKeywords: isomorphism, degree sequence, invariant"
      },
      {
        "id": "FC-SEM-DM-54",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Tree properties",
        "highYield": true,
        "front": "List three equivalent definitions of a tree.",
        "back": "A connected acyclic graph; a connected graph with $n-1$ edges; a graph with a unique simple path between every pair of vertices.\nKeywords: tree, acyclic, connected, unique path"
      },
      {
        "id": "FC-SEM-DM-55",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Kruskal and Prim",
        "highYield": true,
        "front": "Compare Kruskal's and Prim's minimum spanning tree algorithms.",
        "back": "Kruskal sorts all edges and adds the cheapest edge that avoids a cycle. Prim grows one tree from a start vertex, always adding the cheapest crossing edge.\nKeywords: Kruskal, Prim, MST, greedy"
      },
      {
        "id": "FC-SEM-DM-56",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Euler and Hamiltonian",
        "highYield": true,
        "front": "Distinguish an Euler circuit from a Hamiltonian cycle.",
        "back": "Euler circuit uses every edge exactly once and returns to the start. Hamiltonian cycle visits every vertex exactly once and returns to the start.\nKeywords: Euler, Hamiltonian, circuit, cycle"
      },
      {
        "id": "FC-SEM-DM-57",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Euler formula",
        "highYield": true,
        "front": "State Euler's formula for a connected planar graph.",
        "back": "$V-E+F=2$, where $F$ counts the outer face. For a planar graph with $V \\ge 3$, $E \\le 3V-6$.\nKeywords: Euler formula, planar, faces, vertices, edges"
      },
      {
        "id": "FC-SEM-DM-58",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Chromatic number",
        "highYield": true,
        "front": "What is the chromatic number of a graph, and of $K_n$?",
        "back": "The minimum number of colours needed so adjacent vertices differ. $\\chi(K_n)=n$, and a graph is bipartite exactly when $\\chi \\le 2$.\nKeywords: chromatic number, colouring, bipartite, clique"
      },
      {
        "id": "FC-SEM-DM-61",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Directed trees",
        "highYield": false,
        "front": "What is a directed tree (arborescence)?",
        "back": "1. A directed tree has one root with in-degree 0.\n2. Every other vertex has in-degree exactly 1.\n3. Its underlying undirected graph is a tree.\n4. An out-tree directs edges away from the root; an in-tree directs them toward it.\nKeywords: arborescence, root, in-degree, out-tree, in-tree"
      },
      {
        "id": "FC-SEM-DM-62",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Binary trees and traversals",
        "highYield": true,
        "front": "List preorder, inorder, and postorder binary tree traversals.",
        "back": "1. Preorder: visit root, then left subtree, then right subtree.\n2. Inorder: visit left subtree, root, then right subtree.\n3. Postorder: visit left subtree, right subtree, then root.\n4. In a full binary tree every node has 0 or 2 children.\nKeywords: preorder, inorder, postorder, full binary tree"
      },
      {
        "id": "FC-SEM-DM-63",
        "subjectId": "DM",
        "unit": 5,
        "topic": "Hamiltonian graphs",
        "highYield": true,
        "front": "What is a Hamiltonian cycle, and state Dirac's theorem.",
        "back": "1. A Hamiltonian cycle visits every vertex once and returns to start.\n2. Dirac: if n≥3 and every vertex degree ≥ n/2, a Hamiltonian cycle exists.\n3. Ore: if deg(u)+deg(v) ≥ n for every non-adjacent pair, one exists.\nKeywords: Hamiltonian, Dirac, Ore, cycle"
      }
    ],
    "COA": [
      {
        "id": "FC-COA-01",
        "subjectId": "COA",
        "unit": 3,
        "topic": "IEEE 754 Single Precision",
        "highYield": true,
        "front": "What is the 32-bit layout of IEEE 754 Single Precision Floating Point?",
        "back": "ΓÇó Sign bit: 1 bit (0 = positive, 1 = negative)\nΓÇó Exponent: 8 bits (Bias = 127)\nΓÇó Fraction (Mantissa): 23 bits with implicit leading 1 ($1.F$)"
      },
      {
        "id": "FC-COA-02",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Restoring vs Non-Restoring Division",
        "highYield": true,
        "front": "What is the key difference between Restoring and Non-Restoring Division?",
        "back": "ΓÇó Restoring: If $(A - M) < 0$, restores $A \\leftarrow A + M$ and sets $Q_0 = 0$.\nΓÇó Non-Restoring: Does not restore; if $A < 0$, adds $M$ in the next cycle."
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
        "id": "FC-SEM-COA-63",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Timing and control",
        "highYield": false,
        "front": "What generates control signals in a basic computer?",
        "back": "1. A sequence counter and decoder produce timing signals T0, T1, ...\n2. The control unit combines timing with instruction bits and flags.\n3. Control signals activate registers, memory, and ALU operations.\n4. Hardwired control uses gates; microprogrammed control uses a control store.\nKeywords: timing, control unit, sequence counter, microprogram"
      },
      {
        "id": "FC-SEM-COA-64",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Instruction cycle",
        "highYield": true,
        "front": "List the phases of the instruction cycle.",
        "back": "1. Fetch: read the instruction from memory into IR.\n2. Decode: determine the operation and addressing mode.\n3. Execute: perform the operation, possibly reading or writing memory.\n4. Interrupt: service a pending interrupt before the next fetch.\nKeywords: fetch, decode, execute, interrupt, instruction cycle"
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
        "back": "ΓÇó Write-Through: Writes immediately to both cache and RAM.\nΓÇó Write-Back: Writes only to cache; writes to RAM only when block is evicted (using dirty bit)."
      },
      {
        "id": "FC-COA-08",
        "subjectId": "COA",
        "unit": 4,
        "topic": "SRAM vs DRAM",
        "highYield": true,
        "front": "Why is SRAM used for Cache and DRAM for Main Memory?",
        "back": "ΓÇó SRAM: Flip-flop based, fast, no refresh needed, but large footprint/expensive.\nΓÇó DRAM: Capacitor based, dense, cheap, but slower and requires periodic refresh."
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
        "topic": "Write-through vs write-back",
        "highYield": true,
        "front": "Compare write-through and write-back cache policies.",
        "back": "Write-through updates cache and memory on every write. Write-back updates only the cache and writes the dirty line later, saving memory traffic but needing a dirty bit.\nKeywords: write-through, write-back, dirty bit"
      },
      {
        "id": "FC-SEM-COA-47",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Control memory",
        "highYield": true,
        "front": "What is stored in control memory?",
        "back": "Microinstructions, each containing a control word and sequencing information. The control unit reads them in sequence to generate datapath signals.\nKeywords: control memory, microinstruction, control word, sequencing"
      },
      {
        "id": "FC-SEM-COA-48",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Address sequencing",
        "highYield": true,
        "front": "What are the four sources of the next microinstruction address?",
        "back": "Increment the control address register, branch on a condition, jump to a mapping address for an opcode, or return from a subroutine.\nKeywords: address sequencing, increment, branch, mapping, subroutine"
      },
      {
        "id": "FC-SEM-COA-49",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Instruction formats",
        "highYield": true,
        "front": "Compare zero-, one- and two-address instruction formats.",
        "back": "Zero-address uses a stack. One-address uses an implicit accumulator. Two-address names two operands, usually destination and source.\nKeywords: instruction format, zero address, one address, two address"
      },
      {
        "id": "FC-SEM-COA-50",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Addressing modes",
        "highYield": true,
        "front": "List five common addressing modes.",
        "back": "Immediate, direct, indirect, register and indexed. Each trades instruction bits against the number of memory accesses needed.\nKeywords: addressing mode, immediate, direct, indirect, indexed"
      },
      {
        "id": "FC-SEM-COA-51",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Data transfer and manipulation",
        "highYield": true,
        "front": "Distinguish data transfer from data manipulation instructions.",
        "back": "Transfer instructions move data between registers and memory. Manipulation instructions perform arithmetic, logic or shift operations on data.\nKeywords: data transfer, data manipulation, arithmetic, logic"
      },
      {
        "id": "FC-SEM-COA-52",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Booth's algorithm",
        "highYield": true,
        "front": "Why does Booth's algorithm skip runs of 1s?",
        "back": "It recodes the multiplier into +1, 0 and -1 transitions, so a run of 1s becomes one subtraction and one addition instead of many additions.\nKeywords: Booth, recoding, signed, run of ones"
      },
      {
        "id": "FC-SEM-COA-53",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Division algorithms",
        "highYield": true,
        "front": "Compare restoring and non-restoring division.",
        "back": "Restoring division adds the divisor back after a negative remainder. Non-restoring division keeps the negative remainder and corrects at the end, saving operations.\nKeywords: restoring, non-restoring, remainder, quotient"
      },
      {
        "id": "FC-SEM-COA-65",
        "subjectId": "COA",
        "unit": 4,
        "topic": "General register organization",
        "highYield": false,
        "front": "What does a general register organization with seven registers use?",
        "back": "1. Seven registers feed two multiplexers selected by SELA and SELB.\n2. An ALU combines them; SELD chooses the destination register.\n3. A 3-bit selection code addresses one of eight inputs.\n4. Control signals load the selected destination on the clock edge.\nKeywords: general register, SELA, SELB, SELD, multiplexer"
      },
      {
        "id": "FC-SEM-COA-66",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Addition and subtraction",
        "highYield": false,
        "front": "How is subtraction performed with two's-complement addition?",
        "back": "1. Take the two's complement of the subtrahend.\n2. Add it to the minuend using the same binary adder.\n3. Discard the final carry out of the sign bit.\n4. Overflow occurs when same-sign operands give an opposite-sign result.\nKeywords: two's complement, subtraction, adder, overflow, carry"
      },
      {
        "id": "FC-SEM-COA-67",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Floating-point arithmetic",
        "highYield": true,
        "front": "Outline floating-point addition.",
        "back": "1. Compare exponents and align the smaller mantissa by shifting right.\n2. Add or subtract the aligned mantissas.\n3. Normalize the result and round it.\n4. Adjust the exponent for any normalization shift.\nKeywords: align exponent, mantissa, normalize, round, floating point"
      },
      {
        "id": "FC-SEM-COA-68",
        "subjectId": "COA",
        "unit": 4,
        "topic": "Decimal arithmetic unit and operations",
        "highYield": false,
        "front": "Why is BCD addition corrected with a +6 adjustment?",
        "back": "1. Adding two BCD digits can produce a sum above 9.\n2. Adding 0110 skips the six invalid BCD codes 1010-1111.\n3. A carry out propagates to the next BCD digit.\n4. Nine's and ten's complements support BCD subtraction.\nKeywords: BCD, correction, +6, nine's complement, decimal adder"
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
        "back": "ΓÇó Burst Mode: DMA controller holds bus until entire block is moved.\nΓÇó Cycle Stealing: DMA takes bus for 1 cycle per byte, interweaving with CPU."
      },
      {
        "id": "FC-COA-13",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Programmed vs Interrupt-Driven I/O",
        "highYield": true,
        "front": "Compare Programmed I/O with Interrupt-Driven I/O.",
        "back": "ΓÇó Programmed I/O: CPU wastes time in a busy-waiting polling loop.\nΓÇó Interrupt-Driven I/O: CPU does other work; device signals via interrupt when ready."
      },
      {
        "id": "FC-COA-14",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Memory hierarchy",
        "highYield": true,
        "front": "Why does a memory hierarchy improve performance?",
        "back": "Small fast memories sit near the CPU and large slow memories sit farther away. Locality of reference makes most accesses hit the fast levels.\nKeywords: memory hierarchy, locality, cache, cost"
      },
      {
        "id": "FC-COA-15",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Associative memory",
        "highYield": true,
        "front": "What is associative memory and where is it used?",
        "back": "Memory searched by content rather than address. It is used in cache tag directories and TLBs, where a tag must be matched in parallel.\nKeywords: associative memory, content addressable, tag, TLB"
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
        "topic": "DMA",
        "highYield": true,
        "front": "How does DMA improve I/O performance?",
        "back": "A DMA controller moves a block directly between device and memory, so the CPU is interrupted once per block instead of once per word.\nKeywords: DMA, block transfer, bus request, interrupt"
      },
      {
        "id": "FC-COA-20",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Memory Mapped vs Isolated I/O",
        "highYield": false,
        "front": "Differentiate Memory-Mapped I/O from Isolated (I/O Mapped) I/O.",
        "back": "ΓÇó Memory-Mapped: I/O ports share address space with RAM; uses standard load/store.\nΓÇó Isolated: Separate I/O address space; requires special IN and OUT instructions."
      },
      {
        "id": "FC-SEM-COA-54",
        "subjectId": "COA",
        "unit": 5,
        "topic": "I/O interface",
        "highYield": true,
        "front": "What functions does an I/O interface perform?",
        "back": "It buffers data, converts between serial and parallel or between word sizes, synchronises timing, and presents status and control registers to the CPU.\nKeywords: I/O interface, buffer, conversion, status, control"
      },
      {
        "id": "FC-SEM-COA-55",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Asynchronous transfer",
        "highYield": true,
        "front": "Explain strobe and handshake asynchronous transfer.",
        "back": "Strobe: one unit pulses a strobe when data is ready. Handshake: request and acknowledge signals confirm that both sides have seen the data.\nKeywords: asynchronous, strobe, handshake, request, acknowledge"
      },
      {
        "id": "FC-SEM-COA-56",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Modes of transfer",
        "highYield": true,
        "front": "Compare programmed I/O, interrupt-driven I/O and DMA.",
        "back": "Programmed I/O busy-waits. Interrupt-driven I/O lets the CPU work until the device interrupts. DMA moves a whole block without per-word CPU work.\nKeywords: programmed I/O, interrupt, DMA, transfer"
      },
      {
        "id": "FC-SEM-COA-57",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Priority interrupt",
        "highYield": true,
        "front": "How does a priority interrupt system resolve simultaneous requests?",
        "back": "A priority encoder or daisy chain selects the highest-priority request. Lower-priority requests are masked until the current service routine finishes.\nKeywords: priority interrupt, encoder, daisy chain, mask"
      },
      {
        "id": "FC-SEM-COA-58",
        "subjectId": "COA",
        "unit": 5,
        "topic": "DMA",
        "highYield": true,
        "front": "What are the three DMA transfer modes?",
        "back": "Burst mode holds the bus for a whole block. Cycle stealing takes one cycle at a time. Transparent DMA uses idle CPU cycles.\nKeywords: DMA, burst, cycle stealing, transparent"
      },
      {
        "id": "FC-SEM-COA-59",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Memory hierarchy",
        "highYield": true,
        "front": "Order the memory hierarchy from fastest to slowest.",
        "back": "Registers, cache, main memory, auxiliary storage. Speed and cost per bit fall as capacity rises.\nKeywords: memory hierarchy, registers, cache, main memory, auxiliary"
      },
      {
        "id": "FC-SEM-COA-60",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Cache mapping",
        "highYield": true,
        "front": "Compare direct, associative and set-associative cache mapping.",
        "back": "Direct maps each block to one line. Fully associative allows any line. Set-associative restricts a block to one set but allows any line in that set.\nKeywords: direct mapped, associative, set associative, cache"
      },
      {
        "id": "FC-SEM-COA-69",
        "subjectId": "COA",
        "unit": 5,
        "topic": "Auxiliary memory",
        "highYield": false,
        "front": "Define seek time, rotational latency, and access time for a disk.",
        "back": "1. Seek time: moving the head to the required track.\n2. Rotational latency: waiting for the sector to reach the head.\n3. Access time = seek + rotational latency + transfer time.\n4. A cylinder is all tracks at one arm position.\nKeywords: auxiliary memory, track, sector, cylinder, access time"
      }
    ],
    "OOPJ": [
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
        "back": "ΓÇó start(): Creates a new native execution thread with its own call stack and invokes run().\nΓÇó run(): Executes synchronously on the current thread like a normal method call (no multithreading)."
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
        "back": "ΓÇó wait(): Member of Object; releases the lock; awakened by notify()/notifyAll(); must be in synchronized context.\nΓÇó sleep(): Member of Thread; holds locks while sleeping; wakes on timeout."
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
        "id": "FC-SEM-OOPJ-45",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Thread vs process",
        "highYield": true,
        "front": "Compare a thread and a process.",
        "back": "A process has its own memory space. Threads share the process memory, so they are lighter to create but need synchronisation.\nKeywords: thread, process, shared memory, synchronisation"
      },
      {
        "id": "FC-SEM-OOPJ-46",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Thread life cycle",
        "highYield": true,
        "front": "List the states in the Java thread life cycle.",
        "back": "New, runnable, running, blocked/waiting, and terminated. A thread moves to runnable when start() is called.\nKeywords: new, runnable, running, blocked, terminated"
      },
      {
        "id": "FC-SEM-OOPJ-47",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Synchronization",
        "highYield": true,
        "front": "What does the synchronized keyword guarantee?",
        "back": "Only one thread at a time executes a synchronized method or block on the same monitor, preventing race conditions on shared data.\nKeywords: synchronized, monitor, race condition, mutual exclusion"
      },
      {
        "id": "FC-OOPJ-07",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Byte vs Character Streams",
        "highYield": true,
        "front": "Compare Byte Streams and Character Streams in java.io.",
        "back": "ΓÇó Byte Streams: Derived from InputStream/OutputStream; handles raw 8-bit binary data (images, audio).\nΓÇó Character Streams: Derived from Reader/Writer; handles 16-bit Unicode characters with character encoding."
      },
      {
        "id": "FC-OOPJ-08",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "BufferedReader",
        "highYield": true,
        "front": "What is BufferedReader used for?",
        "back": "It wraps a character stream and buffers input, making reads efficient and providing readLine() for line-by-line text input.\nKeywords: BufferedReader, buffer, readLine, character stream"
      },
      {
        "id": "FC-OOPJ-09",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "FileWriter",
        "highYield": true,
        "front": "How do you write text to a file in Java?",
        "back": "Create a FileWriter (optionally wrapped in BufferedWriter or PrintWriter) and call write() or println(), then close it in a finally block or try-with-resources.\nKeywords: FileWriter, BufferedWriter, write, close"
      },
      {
        "id": "FC-OOPJ-10",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Collections utility",
        "highYield": true,
        "front": "What does java.util.Collections provide?",
        "back": "Static helpers for collections: sort, reverse, shuffle, binarySearch, max, min and unmodifiable wrappers.\nKeywords: Collections, sort, reverse, binarySearch, utility"
      },
      {
        "id": "FC-OOPJ-11",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Iterator",
        "highYield": false,
        "front": "What is an Iterator and why use it?",
        "back": "An object that walks a collection one element at a time with hasNext() and next(). It lets you traverse without exposing the collection's internal structure.\nKeywords: Iterator, hasNext, next, traverse"
      },
      {
        "id": "FC-SEM-OOPJ-40",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Exploring the Object class",
        "highYield": true,
        "front": "Which methods does every Java class inherit from Object?",
        "back": "1. toString, equals, and hashCode describe and compare objects.\n2. getClass returns the runtime Class object.\n3. clone creates a copy; finalize was historically called before collection.\n4. wait, notify, and notifyAll support monitor coordination.\nKeywords: Object class, toString, equals, hashCode, getClass, clone"
      },
      {
        "id": "FC-SEM-OOPJ-48",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "String methods",
        "highYield": true,
        "front": "Name five commonly used String methods.",
        "back": "length(), charAt(), substring(), indexOf(), equals(). Remember that equals() compares content while == compares references.\nKeywords: String, length, charAt, substring, equals"
      },
      {
        "id": "FC-SEM-OOPJ-49",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "String vs StringBuffer",
        "highYield": true,
        "front": "Compare String, StringBuffer and StringBuilder.",
        "back": "String is immutable. StringBuffer is mutable and synchronized. StringBuilder is mutable and faster but not thread-safe.\nKeywords: String, StringBuffer, StringBuilder, mutable, synchronized"
      },
      {
        "id": "FC-SEM-OOPJ-50",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Collections framework",
        "highYield": true,
        "front": "Name the main interfaces of the Java Collections framework.",
        "back": "Collection, List, Set, Queue, Deque and Map. List keeps order, Set forbids duplicates, Map stores key-value pairs.\nKeywords: Collection, List, Set, Queue, Map"
      },
      {
        "id": "FC-SEM-OOPJ-51",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "ArrayList vs LinkedList",
        "highYield": true,
        "front": "When would you choose a LinkedList over an ArrayList?",
        "back": "When you frequently insert or remove at the ends or middle and rarely need random access. ArrayList wins for index-based reads.\nKeywords: ArrayList, LinkedList, random access, insertion"
      },
      {
        "id": "FC-SEM-OOPJ-52",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "HashMap",
        "highYield": true,
        "front": "How does a HashMap locate a key?",
        "back": "It computes the key's hashCode(), maps it to a bucket, then uses equals() to find the exact entry. Collisions are chained or treeified.\nKeywords: HashMap, hashCode, equals, bucket, collision"
      },
      {
        "id": "FC-SEM-OOPJ-53",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Byte vs character streams",
        "highYield": true,
        "front": "Distinguish byte streams and character streams.",
        "back": "Byte streams move 8-bit bytes and suit binary data. Character streams move 16-bit Unicode characters and handle text encoding.\nKeywords: byte stream, character stream, binary, Unicode"
      },
      {
        "id": "FC-SEM-OOPJ-54",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Delegation event model",
        "highYield": true,
        "front": "Explain the delegation event model.",
        "back": "An event source registers listener objects. When an event occurs, the source calls the listener's handler method with an event object.\nKeywords: delegation, source, listener, event object"
      },
      {
        "id": "FC-SEM-OOPJ-55",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Adapter classes",
        "highYield": true,
        "front": "Why use an adapter class for events?",
        "back": "An adapter implements all methods of a listener interface with empty bodies, so you override only the event you need instead of every method.\nKeywords: adapter, listener, empty methods, override"
      },
      {
        "id": "FC-SEM-OOPJ-56",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Layout managers",
        "highYield": true,
        "front": "Name the five standard layout managers and one use of each.",
        "back": "Flow arranges in a row, Border uses five regions, Grid makes equal cells, Card stacks pages, GridBag allows constraints.\nKeywords: FlowLayout, BorderLayout, GridLayout, CardLayout, GridBagLayout"
      },
      {
        "id": "FC-SEM-OOPJ-67",
        "subjectId": "OOPJ",
        "unit": 4,
        "topic": "Graphics",
        "highYield": false,
        "front": "Which Graphics methods draw shapes and text in Java AWT?",
        "back": "1. drawLine, drawRect, and drawOval outline shapes.\n2. fillRect and fillOval draw filled shapes.\n3. drawString renders text at a baseline point.\n4. setColor and setFont change the current drawing state.\nKeywords: Graphics, drawLine, drawRect, drawOval, drawString, setColor"
      },
      {
        "id": "FC-OOPJ-12",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "ArrayList vs LinkedList",
        "highYield": true,
        "front": "When should you choose ArrayList over LinkedList?",
        "back": "ΓÇó ArrayList: Frequent random index access (O(1)), cache-friendly, less memory overhead.\nΓÇó LinkedList: Frequent insertion/deletion at head or middle when already positioned (O(1)), no array copying."
      },
      {
        "id": "FC-OOPJ-13",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "HashSet vs TreeSet",
        "highYield": true,
        "front": "Compare HashSet and TreeSet.",
        "back": "ΓÇó HashSet: Backed by HashMap, O(1) average lookup/insert, unordered.\nΓÇó TreeSet: Backed by Red-Black Tree (NavigableMap), O(log n) lookup/insert, sorted in natural/comparator order."
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
        "back": "ΓÇó Comparable<T>: java.lang; defines natural single ordering via int compareTo(T o) on 'this' object.\nΓÇó Comparator<T>: java.util; defines separate external multiple sorting strategies via int compare(T o1, T o2)."
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
      },
      {
        "id": "FC-SEM-OOPJ-57",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Swing and MVC",
        "highYield": true,
        "front": "Why does Swing use an MVC architecture?",
        "back": "The model holds data, the view renders it and the controller handles input. Separating them lets one model drive several views.\nKeywords: Swing, MVC, model, view, controller"
      },
      {
        "id": "FC-SEM-OOPJ-58",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Containers",
        "highYield": true,
        "front": "Distinguish a top-level container from an intermediate container.",
        "back": "A top-level container such as JFrame is a window managed by the OS. Intermediate containers such as JPanel group components inside another container.\nKeywords: top-level container, JFrame, JPanel, intermediate"
      },
      {
        "id": "FC-SEM-OOPJ-59",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Swing components",
        "highYield": true,
        "front": "Match JTextField, JTextArea and JPasswordField to their use.",
        "back": "JTextField: one line of input. JTextArea: multiple lines. JPasswordField: masked input that hides characters.\nKeywords: JTextField, JTextArea, JPasswordField, input"
      },
      {
        "id": "FC-SEM-OOPJ-60",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Lists and tables",
        "highYield": true,
        "front": "When use JList, JComboBox or JTable?",
        "back": "JList for a visible list of choices, JComboBox for a compact drop-down, JTable for rows and columns of data.\nKeywords: JList, JComboBox, JTable, selection"
      },
      {
        "id": "FC-SEM-OOPJ-61",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "Menus",
        "highYield": true,
        "front": "How are JMenuBar, JMenu and JMenuItem related?",
        "back": "JMenuBar is the bar attached to a frame. It contains JMenu objects, and each JMenu contains JMenuItem entries.\nKeywords: JMenuBar, JMenu, JMenuItem, menu"
      },
      {
        "id": "FC-SEM-OOPJ-62",
        "subjectId": "OOPJ",
        "unit": 5,
        "topic": "JFrame lifecycle",
        "highYield": false,
        "front": "What does setVisible(true) do to a JFrame?",
        "back": "It makes the frame display on screen. Before that, setSize() and setDefaultCloseOperation() are normally called.\nKeywords: JFrame, setVisible, setSize, close operation"
      }
    ],
    "DBMS": [
      {
        "id": "FC-DBMS-01",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "1NF, 2NF, 3NF, BCNF Summary",
        "highYield": true,
        "front": "State the core condition for 1NF, 2NF, 3NF, and BCNF.",
        "back": "ΓÇó 1NF: Atomic scalar values, no repeating groups.\nΓÇó 2NF: 1NF + no partial dependencies (non-prime fully dependent on key).\nΓÇó 3NF: 2NF + no transitive dependencies (for $X \\to Y$, $X$ is superkey or $Y$ is prime).\nΓÇó BCNF: For every non-trivial $X \\to Y$, $X$ MUST be a superkey."
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
        "back": "ΓÇó MVD ($X \\twoheadrightarrow Y$): $Y$ is independent of $R - X - Y$ given $X$.\nΓÇó 4NF: If non-trivial $X \\twoheadrightarrow Y$ holds, $X$ must be a superkey."
      },
      {
        "id": "FC-SEM-DBMS-48",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Decomposition",
        "highYield": true,
        "front": "What two properties should a decomposition have?",
        "back": "Lossless join: joining the pieces recovers exactly the original relation. Dependency preservation: all functional dependencies remain enforceable.\nKeywords: decomposition, lossless join, dependency preservation"
      },
      {
        "id": "FC-SEM-DBMS-66",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Problems caused by redundancy",
        "highYield": true,
        "front": "Which anomalies does data redundancy cause?",
        "back": "1. Insertion anomaly: cannot insert a fact without unrelated data.\n2. Deletion anomaly: deleting one fact erases another.\n3. Update anomaly: the same fact must be updated in many rows.\n4. Normalization reduces redundancy by decomposition.\nKeywords: redundancy, insertion anomaly, deletion anomaly, update anomaly"
      },
      {
        "id": "FC-SEM-DBMS-67",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "BCNF",
        "highYield": true,
        "front": "State the condition for Boyce-Codd Normal Form.",
        "back": "1. For every nontrivial functional dependency X → Y, X must be a superkey.\n2. BCNF is stricter than 3NF.\n3. A relation in 3NF may still violate BCNF.\n4. Decompose on the violating dependency to reach BCNF.\nKeywords: BCNF, functional dependency, superkey, decomposition"
      },
      {
        "id": "FC-SEM-DBMS-68",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Lossless join decomposition",
        "highYield": true,
        "front": "What makes a binary decomposition lossless?",
        "back": "1. Decompose R into R1 and R2.\n2. Lossless if R1 ∩ R2 contains a key of R1 or R2.\n3. Then projecting and rejoining reconstructs exactly R.\n4. A lossy decomposition creates spurious tuples.\nKeywords: lossless join, binary decomposition, common attribute, superkey"
      },
      {
        "id": "FC-DBMS-05",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "ACID Properties & Components",
        "highYield": true,
        "front": "Match ACID properties to the DBMS subsystem responsible for them.",
        "back": "ΓÇó Atomicity: Recovery Manager (Log-based Undo)\nΓÇó Consistency: Application programmer + Integrity constraints\nΓÇó Isolation: Concurrency Control Manager (Locking/Timestamping)\nΓÇó Durability: Recovery Manager (WAL Redo)"
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
        "back": "Phase 1: Growing (acquiring locks, releasing none).\nPhase 2: Shrinking (releasing locks, acquiring none).\nΓÇó Guarantees: Conflict Serializability.\nΓÇó Does NOT guarantee: Freedom from Deadlock."
      },
      {
        "id": "FC-DBMS-09",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Strict 2PL vs Rigorous 2PL",
        "highYield": true,
        "front": "Differentiate Strict 2PL and Rigorous 2PL.",
        "back": "ΓÇó Strict 2PL: All Exclusive (X) locks held until commit/abort (prevents cascading aborts).\nΓÇó Rigorous 2PL: ALL locks (both Shared S and Exclusive X) held until commit/abort."
      },
      {
        "id": "FC-DBMS-10",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Wait-Die vs Wound-Wait",
        "highYield": true,
        "front": "Compare Wait-Die and Wound-Wait deadlock prevention.",
        "back": "ΓÇó Wait-Die (Non-preemptive): Old requests young $\\to$ old waits. Young requests old $\\to$ young dies.\nΓÇó Wound-Wait (Preemptive): Old requests young $\\to$ young is wounded (preempted/aborts). Young requests old $\\to$ young waits."
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
        "id": "FC-SEM-DBMS-49",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "ACID properties",
        "highYield": true,
        "front": "Explain the four ACID properties.",
        "back": "Atomicity: all or nothing. Consistency: valid state to valid state. Isolation: concurrent transactions do not interfere. Durability: committed changes persist.\nKeywords: atomicity, consistency, isolation, durability"
      },
      {
        "id": "FC-SEM-DBMS-50",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Transaction states",
        "highYield": true,
        "front": "List the states of a transaction.",
        "back": "Active, partially committed, committed, failed and aborted. A committed transaction cannot be rolled back.\nKeywords: active, partially committed, committed, failed, aborted"
      },
      {
        "id": "FC-SEM-DBMS-51",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Serializability",
        "highYield": true,
        "front": "Distinguish conflict and view serializability.",
        "back": "Conflict serializability orders conflicting read/write pairs and is checked by an acyclic precedence graph. View serializability is broader but harder to test.\nKeywords: conflict, view, serializability, precedence graph"
      },
      {
        "id": "FC-SEM-DBMS-52",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Two-phase locking",
        "highYield": true,
        "front": "Explain the two phases of 2PL.",
        "back": "Growing phase: acquire locks, release none. Shrinking phase: release locks, acquire none. Strict 2PL holds exclusive locks until commit.\nKeywords: 2PL, growing, shrinking, strict, lock"
      },
      {
        "id": "FC-SEM-DBMS-53",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Timestamp ordering",
        "highYield": true,
        "front": "How does timestamp ordering decide the order of conflicting operations?",
        "back": "Each transaction has a timestamp. For a conflicting pair, the older transaction must execute first; otherwise the younger one aborts.\nKeywords: timestamp, older, younger, conflict, abort"
      },
      {
        "id": "FC-SEM-DBMS-54",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Multiple granularity",
        "highYield": true,
        "front": "What is multiple-granularity locking?",
        "back": "Locks can be taken at different levels (database, file, page, tuple). Intention locks on ancestors signal that a descendant will be locked.\nKeywords: granularity, intention lock, hierarchy, page, tuple"
      },
      {
        "id": "FC-SEM-DBMS-55",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Log-based recovery",
        "highYield": true,
        "front": "What do UNDO and REDO do during recovery?",
        "back": "UNDO reverses the changes of transactions that did not commit. REDO reapplies the changes of committed transactions whose data may not have reached disk.\nKeywords: UNDO, REDO, committed, uncommitted, log"
      },
      {
        "id": "FC-SEM-DBMS-56",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Validation-based protocol",
        "highYield": false,
        "front": "What are the three phases of validation-based concurrency control?",
        "back": "Read phase, validation phase and write phase. A transaction proceeds only if its validation succeeds against overlapping transactions.\nKeywords: validation, read phase, write phase, optimistic"
      },
      {
        "id": "FC-SEM-DBMS-69",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Recoverability",
        "highYield": false,
        "front": "Distinguish recoverable, cascadeless, and strict schedules.",
        "back": "1. Recoverable: a transaction commits only after reading uncommitted data commits.\n2. Cascadeless: reads only committed data, preventing cascading rollback.\n3. Strict: neither reads nor writes uncommitted data.\n4. Strict is the strongest of the three.\nKeywords: recoverable, cascadeless, strict, dirty read, rollback"
      },
      {
        "id": "FC-SEM-DBMS-70",
        "subjectId": "DBMS",
        "unit": 4,
        "topic": "Implementation of isolation and testing for serializability",
        "highYield": false,
        "front": "How is conflict serializability tested?",
        "back": "1. Build a precedence graph with a node per transaction.\n2. Add edge Ti → Tj for each conflict where Ti precedes Tj.\n3. The schedule is conflict serializable if the graph is acyclic.\n4. Isolation levels trade consistency against concurrency.\nKeywords: precedence graph, conflict serializable, acyclic, isolation level"
      },
      {
        "id": "FC-DBMS-12",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Write-Ahead Logging (WAL)",
        "highYield": true,
        "front": "State the Write-Ahead Logging (WAL) protocol rules.",
        "back": "1. Undo rule: flush undo log before writing a dirty page.\n2. Redo rule: flush all log records before commit.\nKeywords: WAL, undo, redo, flush"
      },
      {
        "id": "FC-DBMS-13",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Deferred vs Immediate Modification",
        "highYield": true,
        "front": "Compare Deferred Modification with Immediate Modification during crash recovery.",
        "back": "ΓÇó Deferred: Writes to disk only after commit $\\implies$ Requires only REDO (no UNDO ever).\nΓÇó Immediate: Writes can happen before commit $\\implies$ Requires both UNDO (uncommitted) and REDO (committed)."
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
        "topic": "Checkpoints",
        "highYield": false,
        "front": "Why are checkpoints used in recovery?",
        "back": "A checkpoint records a consistent state and the active transactions, so recovery after a crash need not scan the entire log from the beginning.\nKeywords: checkpoint, recovery, log, consistent state"
      },
      {
        "id": "FC-DBMS-16",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Dense vs Sparse Index",
        "highYield": true,
        "front": "Distinguish between Dense and Sparse Indexes.",
        "back": "ΓÇó Dense Index: An entry exists for EVERY search-key value in the data file.\nΓÇó Sparse Index: An entry exists only for some search-key values (typically one per disk block; requires ordered data)."
      },
      {
        "id": "FC-DBMS-17",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Clustered vs Secondary Index",
        "highYield": true,
        "front": "Compare Primary (Clustered) Index with Secondary Index.",
        "back": "ΓÇó Primary/Clustering Index: Physical file is sorted on this search key (at most ONE per table).\nΓÇó Secondary Index: Physical file is NOT ordered by this key; points to records via primary key or pointer (can have MULTIPLE)."
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
        "back": "1. Analysis: find active transactions and dirty pages from the checkpoint.\n2. Redo: repeat history from the oldest unwritten page.\n3. Undo: roll back uncommitted transactions in reverse order.\nKeywords: ARIES, analysis, redo, undo"
      },
      {
        "id": "FC-SEM-DBMS-57",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Storage hierarchy",
        "highYield": true,
        "front": "Why does a DBMS use a buffer pool?",
        "back": "Disk access is far slower than memory. The buffer pool caches pages and a replacement policy decides which page to evict.\nKeywords: buffer pool, page, cache, replacement, disk"
      },
      {
        "id": "FC-SEM-DBMS-58",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "File organization",
        "highYield": true,
        "front": "Compare heap, sorted and hash file organizations.",
        "back": "Heap: fast insert, slow search. Sorted: fast range search, costly insert. Hash: fast equality, no order.\nKeywords: heap, sorted, hash, insert, search"
      },
      {
        "id": "FC-SEM-DBMS-59",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Index types",
        "highYield": true,
        "front": "Distinguish clustered, primary and secondary indexes.",
        "back": "Clustered: data ordered by the index key. Primary: index on the ordering key, often clustered. Secondary: separate index on a non-ordering key.\nKeywords: clustered, primary, secondary, ordering key"
      },
      {
        "id": "FC-SEM-DBMS-60",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Dense vs sparse index",
        "highYield": true,
        "front": "Compare dense and sparse indexes.",
        "back": "Dense: one entry per search-key value. Sparse: one entry per block, possible only when data is ordered by the key.\nKeywords: dense, sparse, search key, block"
      },
      {
        "id": "FC-SEM-DBMS-61",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Hash indexing",
        "highYield": true,
        "front": "When does hash indexing fail to help?",
        "back": "For range queries, sorted output and prefix searches, because hashing destroys key order. It is best for exact equality.\nKeywords: hash index, range, equality, order"
      },
      {
        "id": "FC-SEM-DBMS-62",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "ISAM",
        "highYield": true,
        "front": "How does ISAM differ from a B+ tree?",
        "back": "ISAM has a static index and overflow pages, so performance degrades as overflow grows. A B+ tree rebalances and stays height-balanced.\nKeywords: ISAM, static, overflow, B+ tree, balanced"
      },
      {
        "id": "FC-SEM-DBMS-63",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "B+ tree",
        "highYield": true,
        "front": "Why are B+ trees preferred for database indexes?",
        "back": "They stay balanced, support logarithmic search, and link leaves for efficient range scans. Internal nodes fan out widely, keeping height low.\nKeywords: B+ tree, balanced, range scan, fan-out"
      },
      {
        "id": "FC-SEM-DBMS-64",
        "subjectId": "DBMS",
        "unit": 5,
        "topic": "Choosing a file organization",
        "highYield": false,
        "front": "What factors guide the choice of file organization?",
        "back": "Query mix (equality versus range), insert/delete rate, record size, ordering needs and the cost of scanning versus direct access.\nKeywords: file organization, query mix, cost, scan, access"
      }
    ],
    "SE": [
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
        "id": "FC-SEM-SE-48",
        "subjectId": "SE",
        "unit": 3,
        "topic": "UML diagrams",
        "highYield": true,
        "front": "Name the six UML diagram types in the MR25 unit.",
        "back": "Use case, class, sequence, collaboration, activity and component diagrams. Structural diagrams show static structure; behavioural diagrams show interaction.\nKeywords: use case, class, sequence, collaboration, activity, component"
      },
      {
        "id": "FC-SEM-SE-49",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Class diagram",
        "highYield": true,
        "front": "What does a class diagram show?",
        "back": "Classes, their attributes and operations, and the relationships among them: association, aggregation, composition, generalization and dependency.\nKeywords: class diagram, attributes, association, generalization"
      },
      {
        "id": "FC-SEM-SE-68",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Collaboration diagrams",
        "highYield": false,
        "front": "What does a UML collaboration diagram show?",
        "back": "1. Objects are drawn as rectangles connected by links.\n2. Numbered messages show the order of interaction.\n3. It emphasizes structural organization over time.\n4. UML 2 renamed it the communication diagram.\nKeywords: collaboration diagram, communication diagram, object, link, message"
      },
      {
        "id": "FC-SEM-SE-69",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Activity diagrams",
        "highYield": false,
        "front": "Which elements make up a UML activity diagram?",
        "back": "1. Initial and final states mark start and end.\n2. Action states represent individual activities.\n3. Decision and merge nodes branch and rejoin flows.\n4. Fork and join nodes model concurrent flows; swimlanes assign responsibility.\nKeywords: activity diagram, action state, decision, fork, join, swimlane"
      },
      {
        "id": "FC-SE-04",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Verification vs Validation",
        "highYield": true,
        "front": "What is the difference between Verification and Validation?",
        "back": "ΓÇó Verification: 'Are we building the product right?' Checks conformance to specifications (reviews, inspections, static analysis).\nΓÇó Validation: 'Are we building the right product?' Checks software against customer operational needs (testing against user requirements)."
      },
      {
        "id": "FC-SE-05",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Top-Down vs Bottom-Up Integration",
        "highYield": true,
        "front": "Contrast Top-Down and Bottom-Up Integration Testing.",
        "back": "ΓÇó Top-Down: Integrates from top control module downward; requires STUBS (dummy worker subroutines).\nΓÇó Bottom-Up: Integrates from low-level leaf modules upward; requires DRIVERS (dummy calling programs)."
      },
      {
        "id": "FC-SE-06",
        "subjectId": "SE",
        "unit": 4,
        "topic": "McCabe's Cyclomatic Complexity Formula",
        "highYield": true,
        "front": "Write McCabe's Cyclomatic Complexity formulas for flow graph $G$.",
        "back": "1. $V(G) = E - N + 2P$ (Edges - Nodes + 2├ùComponents)\n2. For $P = 1$: $V(G) = E - N + 2$\n3. $V(G) = P_{red} + 1$ (Predicate nodes + 1)\n4. $V(G) = \\text{Number of enclosed regions} + 1$"
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
        "back": "ΓÇó Alpha: Conducted at developer's site by users with developer recording errors.\nΓÇó Beta: Conducted at real client/customer sites in live uncontrolled production environment."
      },
      {
        "id": "FC-SE-11",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Smoke vs Sanity Testing",
        "highYield": false,
        "front": "Distinguish between Smoke Testing and Sanity Testing.",
        "back": "ΓÇó Smoke: Broad, shallow test of the entire system on a new build to verify basic readiness for deep testing.\nΓÇó Sanity: Narrow, deep test focused specifically on recently patched bugs to verify quick fixes."
      },
      {
        "id": "FC-SEM-SE-50",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Testing strategy",
        "highYield": true,
        "front": "List the four levels of software testing.",
        "back": "Unit, integration, system and acceptance testing. Each level verifies a different scope, from one module to the whole product.\nKeywords: unit, integration, system, acceptance"
      },
      {
        "id": "FC-SEM-SE-51",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Black-box techniques",
        "highYield": true,
        "front": "Name three black-box test design techniques.",
        "back": "Equivalence partitioning, boundary value analysis and decision table testing. Each derives cases from the specification.\nKeywords: equivalence partitioning, boundary value, decision table"
      },
      {
        "id": "FC-SEM-SE-52",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Boundary value analysis",
        "highYield": true,
        "front": "Why is boundary value analysis effective?",
        "back": "Defects cluster at the edges of input domains. Testing just below, on and just above each boundary catches off-by-one errors.\nKeywords: boundary, off-by-one, edge, input domain"
      },
      {
        "id": "FC-SEM-SE-53",
        "subjectId": "SE",
        "unit": 4,
        "topic": "White-box techniques",
        "highYield": true,
        "front": "Name three white-box coverage criteria.",
        "back": "Statement coverage, branch or decision coverage, and path coverage. Basis path testing uses cyclomatic complexity to bound the paths.\nKeywords: statement, branch, path, basis path"
      },
      {
        "id": "FC-SEM-SE-54",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Cyclomatic complexity",
        "highYield": true,
        "front": "State two formulas for cyclomatic complexity.",
        "back": "$V(G)=E-N+2$ for a connected flow graph, or $V(G)=P+1$ where $P$ is the number of predicate nodes.\nKeywords: cyclomatic, edges, nodes, predicate, independent paths"
      },
      {
        "id": "FC-SEM-SE-55",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Integration testing",
        "highYield": true,
        "front": "Compare top-down and bottom-up integration.",
        "back": "Top-down starts at the main module and uses stubs. Bottom-up starts at low-level modules and uses drivers. Sandwich combines both.\nKeywords: top-down, bottom-up, stub, driver, sandwich"
      },
      {
        "id": "FC-SEM-SE-56",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Validation testing",
        "highYield": true,
        "front": "What is the difference between validation and system testing?",
        "back": "System testing checks the whole product against requirements. Validation testing checks that the product meets the customer's expectations in their environment.\nKeywords: system testing, validation, customer, requirements"
      },
      {
        "id": "FC-SEM-SE-57",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Debugging",
        "highYield": true,
        "front": "Name three debugging approaches.",
        "back": "Brute force (print statements), backtracking (trace backward) and cause elimination (binary search or induction). Debugging follows a failing test.\nKeywords: brute force, backtracking, cause elimination"
      },
      {
        "id": "FC-SEM-SE-58",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Software metrics",
        "highYield": true,
        "front": "Distinguish process, product and project metrics.",
        "back": "Process metrics measure the development process. Product metrics measure the software artefact. Project metrics measure schedule, effort and cost.\nKeywords: process, product, project, effort, cost"
      },
      {
        "id": "FC-SEM-SE-70",
        "subjectId": "SE",
        "unit": 4,
        "topic": "Metrics for software quality",
        "highYield": false,
        "front": "Which metrics indicate software quality?",
        "back": "1. Defect density: defects per thousand lines of code.\n2. Defect removal efficiency: defects found before delivery divided by total defects.\n3. Reliability metrics use failure intensity and mean time between failures.\n4. McCall and ISO 9126 group quality into characteristics.\nKeywords: defect density, DRE, reliability, McCall, ISO 9126"
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
        "back": "ΓÇó Risk Mitigation: Proactive steps taken to avoid the risk.\nΓÇó Risk Monitoring: Tracking risk factors to detect when it is becoming reality.\nΓÇó Risk Management: Contingency actions deployed when the risk turns into an actual problem."
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
        "back": "ΓÇó White-Box: Tests internal code paths, logic branches, and statements (Basis path, Cyclomatic complexity, Data flow).\nΓÇó Black-Box: Tests external inputs/outputs against functional requirements without seeing internal code (BVA, Equivalence partitioning)."
      },
      {
        "id": "FC-SEM-SE-59",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Software risk",
        "highYield": true,
        "front": "What is a software risk?",
        "back": "A possible future event that would harm the project's schedule, cost, quality or scope. It has a probability and an impact.\nKeywords: risk, probability, impact, schedule, quality"
      },
      {
        "id": "FC-SEM-SE-60",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Reactive vs proactive",
        "highYield": true,
        "front": "Compare reactive and proactive risk strategies.",
        "back": "Reactive waits for the risk to become a problem and then responds. Proactive identifies risks early and plans mitigation before they occur.\nKeywords: reactive, proactive, mitigation, early"
      },
      {
        "id": "FC-SEM-SE-61",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Risk identification",
        "highYield": true,
        "front": "Name four categories of software risk.",
        "back": "Technical, schedule, cost and people risks. Product and process risks are also common categories.\nKeywords: technical, schedule, cost, people"
      },
      {
        "id": "FC-SEM-SE-62",
        "subjectId": "SE",
        "unit": 5,
        "topic": "RMMM plan",
        "highYield": true,
        "front": "What does an RMMM plan contain?",
        "back": "For each risk: a mitigation action, monitoring indicators and a management/contingency plan if the risk occurs.\nKeywords: RMMM, mitigation, monitoring, contingency"
      },
      {
        "id": "FC-SEM-SE-63",
        "subjectId": "SE",
        "unit": 5,
        "topic": "SQA",
        "highYield": true,
        "front": "What does software quality assurance do?",
        "back": "It plans and audits the process: standards, reviews, measurements and corrective action, so quality is built in rather than tested at the end.\nKeywords: SQA, process, audit, standard, review"
      },
      {
        "id": "FC-SEM-SE-64",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Formal technical reviews",
        "highYield": true,
        "front": "Compare a walkthrough and an inspection.",
        "back": "A walkthrough is informal: the author presents the work to peers. An inspection is formal, with defined roles, checklists and recorded defects.\nKeywords: walkthrough, inspection, informal, formal, checklist"
      },
      {
        "id": "FC-SEM-SE-65",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Reliability",
        "highYield": true,
        "front": "Define MTTF and MTTR.",
        "back": "MTTF is the mean operating time before a failure. MTTR is the mean time to repair. Availability is MTTF / (MTTF + MTTR).\nKeywords: MTTF, MTTR, availability, failure, repair"
      },
      {
        "id": "FC-SEM-SE-66",
        "subjectId": "SE",
        "unit": 5,
        "topic": "ISO 9000",
        "highYield": false,
        "front": "What does ISO 9000 certify?",
        "back": "It certifies that an organisation follows a documented quality management process, not that a particular product is defect-free.\nKeywords: ISO 9000, quality management, process, certification"
      },
      {
        "id": "FC-SEM-SE-71",
        "subjectId": "SE",
        "unit": 5,
        "topic": "Statistical software quality assurance",
        "highYield": false,
        "front": "How does statistical SQA use Pareto analysis?",
        "back": "1. Collect defect data and classify defects by cause.\n2. Plot causes by frequency in descending order.\n3. The vital few causes account for most defects.\n4. Fix those causes first to maximize quality improvement.\nKeywords: statistical SQA, Pareto, vital few, defect cause"
      }
    ],
    "ES": [
      {
        "id": "FC-ES-01",
        "subjectId": "ES",
        "unit": 3,
        "topic": "CPCB Ambient Noise Standards",
        "highYield": true,
        "front": "State CPCB ambient noise limits for Day and Night in dB(A).",
        "back": "ΓÇó Industrial: 75 dB (Day) / 70 dB (Night)\nΓÇó Commercial: 65 dB (Day) / 55 dB (Night)\nΓÇó Residential: 55 dB (Day) / 45 dB (Night)\nΓÇó Silence Zone (100m around hospitals/schools): 50 dB (Day) / 40 dB (Night)"
      },
      {
        "id": "FC-ES-02",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Wastewater treatment",
        "highYield": true,
        "front": "Compare primary, secondary and tertiary wastewater treatment.",
        "back": "Primary: physical settling of solids. Secondary: biological removal of dissolved organics. Tertiary: advanced nutrient, pathogen or metal removal.\nKeywords: primary, secondary, tertiary, biological, nutrient"
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
        "back": "ΓÇó Bioaccumulation: Increase of a chemical concentration in a single organism's tissue over its lifespan.\nΓÇó Biomagnification: Progressive increase of toxic concentration at higher trophic levels up the food chain (e.g. DDT, Mercury)."
      },
      {
        "id": "FC-SEM-ES-44",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Threats to biodiversity",
        "highYield": true,
        "front": "Name the four main threats to biodiversity.",
        "back": "Habitat loss and fragmentation, over-exploitation, invasive species and pollution. Climate change is an increasing fifth threat.\nKeywords: habitat loss, over-exploitation, invasive, pollution, climate"
      },
      {
        "id": "FC-SEM-ES-45",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Man-wildlife conflict",
        "highYield": true,
        "front": "Why does man-wildlife conflict occur?",
        "back": "Human settlements and agriculture encroach on habitats, so animals raid crops or attack livestock and people retaliate.\nKeywords: man-wildlife conflict, encroachment, crop raid, retaliation"
      },
      {
        "id": "FC-SEM-ES-46",
        "subjectId": "ES",
        "unit": 3,
        "topic": "In-situ conservation",
        "highYield": true,
        "front": "Name three in-situ conservation areas.",
        "back": "National parks, wildlife sanctuaries and biosphere reserves. They protect species within their natural habitat.\nKeywords: in-situ, national park, sanctuary, biosphere reserve"
      },
      {
        "id": "FC-SEM-ES-47",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Ex-situ conservation",
        "highYield": true,
        "front": "Name three ex-situ conservation methods.",
        "back": "Zoos and captive breeding, botanical gardens, and seed or gene banks. They maintain organisms outside their habitat.\nKeywords: ex-situ, zoo, botanical garden, seed bank"
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
        "back": "1. Storage for direct use: collect rooftop runoff in tanks.\n2. Groundwater recharge: divert runoff into pits and trenches.\nKeywords: rainwater harvesting, storage, recharge, runoff"
      },
      {
        "id": "FC-ES-07",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Acid Rain Reactions",
        "highYield": true,
        "front": "Write the chemical reactions causing Acid Rain.",
        "back": "ΓÇó $SO_2 + H_2O \\to H_2SO_3 \\xrightarrow{O_2} H_2SO_4$ (Sulfuric Acid)\nΓÇó $2NO_2 + H_2O \\to HNO_2 + HNO_3$ (Nitric Acid)\nΓÇó Occurs when precipitation pH drops below 5.6."
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
        "back": "ΓÇó Montreal Protocol (1987): Phasing out Ozone-Depleting Substances (CFCs, Halons).\nΓÇó Kyoto Protocol (1997): Binding emission caps on Greenhouse Gases ($CO_2, CH_4, N_2O, SF_6, HFCs, PFCs$) to fight global warming."
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
        "id": "FC-SEM-ES-50",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Soil pollution",
        "highYield": true,
        "front": "Name four causes of soil pollution.",
        "back": "Pesticides, chemical fertilizers, industrial waste and improper disposal of plastics or e-waste. Salinization is another cause.\nKeywords: pesticide, fertilizer, industrial waste, salinization"
      },
      {
        "id": "FC-SEM-ES-51",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Wastewater treatment",
        "highYield": true,
        "front": "What happens in primary, secondary and tertiary treatment?",
        "back": "Primary removes solids by settling. Secondary uses microbes to remove dissolved organics. Tertiary removes nutrients, pathogens or specific pollutants.\nKeywords: primary, secondary, tertiary, settling, microbes"
      },
      {
        "id": "FC-SEM-ES-52",
        "subjectId": "ES",
        "unit": 4,
        "topic": "BOD and COD",
        "highYield": true,
        "front": "Define BOD and COD.",
        "back": "BOD: oxygen consumed by microbes to decompose organic matter. COD: oxygen needed to oxidise all chemically oxidisable matter. COD is usually higher.\nKeywords: BOD, COD, oxygen, organic matter"
      },
      {
        "id": "FC-SEM-ES-53",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Climate change",
        "highYield": true,
        "front": "Name four greenhouse gases and their main sources.",
        "back": "CO2 from fossil fuels, methane from agriculture and landfills, nitrous oxide from fertilizers, and fluorinated gases from industry.\nKeywords: carbon dioxide, methane, nitrous oxide, fluorinated gases"
      },
      {
        "id": "FC-SEM-ES-54",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Climate impacts",
        "highYield": true,
        "front": "List four impacts of climate change.",
        "back": "Rising sea level, more extreme weather, shifting crop zones and loss of biodiversity. Water scarcity and health risks also increase.\nKeywords: sea level, extreme weather, crops, biodiversity"
      },
      {
        "id": "FC-SEM-ES-55",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Ozone depletion",
        "highYield": true,
        "front": "What is the net effect of chlorine atoms on stratospheric ozone?",
        "back": "A chlorine atom reacts with ozone to form chlorine monoxide and oxygen. The chlorine is regenerated, so one atom can destroy many ozone molecules in a catalytic cycle.\nKeywords: chlorine, catalytic, ozone, CFC"
      },
      {
        "id": "FC-SEM-ES-56",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Ozone effects",
        "highYield": true,
        "front": "What are the effects of ozone depletion?",
        "back": "More UV-B reaches the surface, causing skin cancer, cataracts, crop damage and harm to marine plankton.\nKeywords: UV-B, skin cancer, cataract, crop, plankton"
      },
      {
        "id": "FC-SEM-ES-57",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Kyoto and Montreal",
        "highYield": true,
        "front": "Compare the Kyoto Protocol and the Montreal Protocol.",
        "back": "Montreal (1987) phases out ozone-depleting substances. Kyoto (1997) sets greenhouse-gas reduction targets for developed countries.\nKeywords: Montreal, Kyoto, ozone, greenhouse gas, targets"
      },
      {
        "id": "FC-SEM-ES-58",
        "subjectId": "ES",
        "unit": 4,
        "topic": "Pollutant classification",
        "highYield": false,
        "front": "Distinguish primary and secondary pollutants.",
        "back": "Primary pollutants are emitted directly, such as SO2 or particulates. Secondary pollutants form in the atmosphere, such as ozone or smog.\nKeywords: primary pollutant, secondary pollutant, emitted, formed"
      },
      {
        "id": "FC-ES-12",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Indian Environmental Acts Timeline",
        "highYield": true,
        "front": "Match Indian environmental acts to their enactment years.",
        "back": "ΓÇó 1972: Wildlife Protection Act\nΓÇó 1974: Water (Prevention & Control of Pollution) Act\nΓÇó 1980: Forest Conservation Act\nΓÇó 1981: Air (Prevention & Control of Pollution) Act\nΓÇó 1986: Environment (Protection) Act (Umbrella Act)"
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
        "back": "ΓÇó Art 48A (Directive Principle): State shall endeavor to protect and improve the environment and safeguard forests/wildlife.\nΓÇó Art 51A(g) (Fundamental Duty): Duty of every citizen to protect and improve the natural environment including forests, lakes, rivers, and wildlife."
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
        "topic": "EIA baseline data",
        "highYield": false,
        "front": "What baseline data does an EIA need?",
        "back": "Pre-project data on air, water, soil, noise, ecology and socio-economic conditions, so later impacts can be measured against a known state.\nKeywords: EIA, baseline, air, water, ecology, socio-economic"
      },
      {
        "id": "FC-ES-19",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Important Environmental Days",
        "highYield": false,
        "front": "Recall the calendar dates of 4 key Environmental observances.",
        "back": "ΓÇó World Water Day: March 22\nΓÇó Earth Day: April 22\nΓÇó World Environment Day: June 5\nΓÇó World Ozone Day: September 16"
      },
      {
        "id": "FC-ES-20",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Wildlife Protection Schedules",
        "highYield": false,
        "front": "How are species protected under India's Wildlife Protection Act 1972?",
        "back": "Species are categorized into Schedules: Schedule I and II provide absolute protection and highest penalties for poaching (e.g. Tiger, Lion, Elephant, Snow Leopard). Schedules III & IV protect non-endangered animals; Schedule V lists vermin."
      },
      {
        "id": "FC-SEM-ES-59",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Environmental Protection Act",
        "highYield": true,
        "front": "What powers does the Environment (Protection) Act 1986 give?",
        "back": "It empowers the central government to set standards, restrict industries, inspect premises and punish violations to protect the environment.\nKeywords: EPA 1986, standards, inspection, penalty"
      },
      {
        "id": "FC-SEM-ES-60",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Air and Water Acts",
        "highYield": true,
        "front": "What do the Air Act 1981 and Water Act 1974 regulate?",
        "back": "The Air Act regulates industrial emissions and ambient air quality. The Water Act regulates discharge into water bodies and created the pollution control boards.\nKeywords: Air Act 1981, Water Act 1974, emission, discharge, boards"
      },
      {
        "id": "FC-SEM-ES-61",
        "subjectId": "ES",
        "unit": 5,
        "topic": "EIA process",
        "highYield": true,
        "front": "List the main steps of an EIA.",
        "back": "Screening, scoping, baseline study, impact prediction, mitigation, environmental management plan, public hearing, appraisal and monitoring.\nKeywords: screening, scoping, baseline, prediction, mitigation, monitoring"
      },
      {
        "id": "FC-SEM-ES-62",
        "subjectId": "ES",
        "unit": 5,
        "topic": "EIA baseline data",
        "highYield": true,
        "front": "Why is baseline data collected before an EIA?",
        "back": "Baseline data records pre-project air, water, soil, noise, ecological and socio-economic conditions. It gives a reference against which predicted and actual impacts can be measured.\nKeywords: baseline, EIA, reference, impact"
      },
      {
        "id": "FC-SEM-ES-63",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Sustainable development",
        "highYield": true,
        "front": "What are the two key ideas in the Brundtland definition?",
        "back": "The definition combines meeting present needs with not compromising the ability of future generations to meet theirs. It balances intra-generational and inter-generational equity.\nKeywords: Brundtland, present needs, future generations, equity"
      },
      {
        "id": "FC-SEM-ES-64",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Green chemistry",
        "highYield": true,
        "front": "Name four principles of green chemistry.",
        "back": "Prevent waste, use safer chemicals, design energy-efficient processes and prefer renewable feedstocks. Catalysis and safer solvents are also core.\nKeywords: green chemistry, waste prevention, safer chemicals, energy, feedstock"
      },
      {
        "id": "FC-SEM-ES-65",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Green building",
        "highYield": true,
        "front": "What makes a building green?",
        "back": "Efficient energy and water use, renewable materials, good indoor air quality, waste reduction and site planning that protects the surroundings.\nKeywords: green building, energy, water, materials, indoor air"
      },
      {
        "id": "FC-SEM-ES-66",
        "subjectId": "ES",
        "unit": 5,
        "topic": "Low-carbon lifestyle",
        "highYield": false,
        "front": "Give four examples of a low-carbon lifestyle.",
        "back": "Use public transport or cycle, save electricity, reduce meat and food waste, and reuse or recycle products.\nKeywords: low carbon, transport, electricity, food waste, recycle"
      }
    ],
    "IE": [
      {
        "id": "FC-M1-IE-05",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Minimum viable product",
        "highYield": true,
        "front": "What is a Minimum Viable Product?",
        "back": "An MVP is the smallest version of a product that delivers enough value to test the core hypothesis with real users and generate validated learning without building every planned feature.\nKeywords: MVP, minimum, viable, validated learning"
      },
      {
        "id": "FC-SEM-IE-21",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Prototyping",
        "highYield": true,
        "front": "Why build a prototype?",
        "back": "A prototype makes an idea tangible so the team can test assumptions, gather user feedback, communicate the concept and reduce the cost of changes before full development.\nKeywords: prototype, assumption, feedback, iteration"
      },
      {
        "id": "FC-SEM-IE-22",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Minimum viable product",
        "highYield": true,
        "front": "What should an MVP include and exclude?",
        "back": "Include the smallest feature set that delivers core value and lets real users complete the main task. Exclude nice-to-have features, polish and scale work until the hypothesis is validated.\nKeywords: MVP, core value, scope, hypothesis"
      },
      {
        "id": "FC-SEM-IE-23",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Prototype testing",
        "highYield": false,
        "front": "How should a prototype be tested?",
        "back": "Define the hypothesis, select representative users, give them realistic tasks, observe behaviour, record problems and compare results with success criteria. Avoid leading questions.\nKeywords: prototype, test, hypothesis, user, observation"
      },
      {
        "id": "FC-SEM-IE-24",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Validation",
        "highYield": true,
        "front": "What counts as validation of a prototype?",
        "back": "Evidence that users can use the solution and that it solves the target problem: completed tasks, positive usability feedback, willingness to adopt or pay, and measurable improvement over the current alternative.\nKeywords: validation, evidence, usability, adoption"
      },
      {
        "id": "FC-IE-01",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Lean Canvas blocks",
        "highYield": true,
        "front": "List the nine Lean Canvas blocks.",
        "back": "1. Problem.\n2. Customer segments.\n3. Unique value proposition.\n4. Solution.\n5. Channels.\n6. Revenue streams.\n7. Cost structure.\n8. Key metrics.\n9. Unfair advantage.\nKeywords: Lean Canvas, problem, solution, metrics, advantage"
      },
      {
        "id": "FC-IE-05",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Unit economics",
        "highYield": true,
        "front": "What is unit economics?",
        "back": "Unit economics compares revenue and cost per unit, such as per customer or order. It shows whether each sale is profitable before fixed costs and whether growth creates value.\nKeywords: unit economics, revenue, cost, contribution, profitability"
      },
      {
        "id": "FC-IE-06",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Break-even analysis",
        "highYield": true,
        "front": "State the break-even quantity formula.",
        "back": "Break-even quantity = fixed costs ÷ (selling price per unit − variable cost per unit). The denominator is the contribution per unit.\nKeywords: break-even, fixed cost, contribution, selling price"
      },
      {
        "id": "FC-IE-08",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Business plan components",
        "highYield": true,
        "front": "Name the main components of a business plan.",
        "back": "Opportunity, market and competition, product or service, sales plan, people plan, financial plan, risks and milestones. The MR25 syllabus highlights sales, people and financial plans.\nKeywords: business plan, sales plan, people plan, financial plan"
      },
      {
        "id": "FC-IE-09",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Sales and people plans",
        "highYield": false,
        "front": "What do the sales and people plans cover?",
        "back": "The sales plan covers target customers, pricing, channels, targets and sales process. The people plan covers roles, skills, organisation structure, hiring, compensation and team cost.\nKeywords: sales plan, people plan, pricing, hiring"
      },
      {
        "id": "FC-IE-10",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Go-to-market channels",
        "highYield": false,
        "front": "What does a go-to-market plan decide?",
        "back": "Target segment, positioning, channels, pricing, sales approach, digital presence and customer-acquisition tactics, with metrics for reach, conversion and cost.\nKeywords: go-to-market, channel, positioning, acquisition"
      },
      {
        "id": "FC-M1-IE-03",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Lean Canvas blocks",
        "highYield": true,
        "front": "What are the nine Lean Canvas blocks?",
        "back": "1. Problem.\n2. Customer segments.\n3. Unique value proposition.\n4. Solution.\n5. Channels.\n6. Revenue streams.\n7. Cost structure.\n8. Key metrics.\n9. Unfair advantage.\nKeywords: Lean Canvas, problem, solution, metrics, advantage"
      },
      {
        "id": "FC-SEM-IE-25",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Business model",
        "highYield": true,
        "front": "What does a business model describe?",
        "back": "How a venture creates value for a customer segment, delivers that value through channels and relationships, and captures revenue while covering its costs.\nKeywords: business model, value, delivery, revenue, cost"
      },
      {
        "id": "FC-SEM-IE-26",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Lean Canvas",
        "highYield": true,
        "front": "Which Lean Canvas blocks cover customers and money?",
        "back": "Customer Segments and Channels describe who is served and how they are reached. Revenue Streams, Cost Structure and Key Metrics describe how money is earned, spent and tracked.\nKeywords: customer segments, channels, revenue, cost, metrics"
      },
      {
        "id": "FC-SEM-IE-27",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Business plan",
        "highYield": true,
        "front": "What are the main components of a business plan?",
        "back": "The plan usually covers the opportunity, market and competition, product or service, sales plan, people plan, financial plan, risks and milestones. The MR25 syllabus highlights sales, people and financial plans.\nKeywords: business plan, sales plan, people plan, financial plan"
      },
      {
        "id": "FC-SEM-IE-28",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Sales plan",
        "highYield": false,
        "front": "What does a sales plan contain?",
        "back": "Target customers and segments, value proposition, pricing, sales channels, sales targets, sales process, team and budget, and the metrics used to track performance.\nKeywords: sales plan, target, pricing, channel, target"
      },
      {
        "id": "FC-SEM-IE-29",
        "subjectId": "IE",
        "unit": 4,
        "topic": "People plan",
        "highYield": false,
        "front": "What does a people plan cover?",
        "back": "The roles and skills needed, organisation structure, hiring timeline, compensation, training, retention and the cost of the team required to execute the business plan.\nKeywords: people plan, roles, hiring, compensation, team"
      },
      {
        "id": "FC-SEM-IE-30",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Financial plan and costs",
        "highYield": true,
        "front": "Distinguish fixed, variable and total cost.",
        "back": "Fixed costs do not change with output in the short run, such as rent. Variable costs change with output, such as materials. Total cost is fixed cost plus variable cost at a given volume.\nKeywords: fixed cost, variable cost, total cost, output"
      },
      {
        "id": "FC-SEM-IE-31",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Unit economics",
        "highYield": true,
        "front": "Why can positive unit economics still produce a loss?",
        "back": "Unit economics ignores fixed overheads, founder salaries, one-off development costs and poor capacity utilisation. A venture can profit on each sale yet lose money overall until volume covers fixed costs.\nKeywords: unit economics, fixed cost, overhead, volume"
      },
      {
        "id": "FC-SEM-IE-32",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Economies of scale",
        "highYield": false,
        "front": "What causes economies of scale?",
        "back": "Spreading fixed costs over more units, bulk purchasing, specialisation, learning effects and better capacity utilisation all lower average cost as output rises.\nKeywords: economies of scale, fixed cost, average cost, output"
      },
      {
        "id": "FC-SEM-IE-33",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Go-to-market",
        "highYield": true,
        "front": "Distinguish a channel from an acquisition tactic.",
        "back": "A channel is the route used to reach customers, such as a website, retailer or marketplace. An acquisition tactic is a specific action within that channel, such as an ad campaign or referral offer.\nKeywords: channel, tactic, acquisition, route"
      },
      {
        "id": "IE-IE-04",
        "subjectId": "IE",
        "unit": 4,
        "topic": "Pre-Money vs Post-Money Valuation",
        "highYield": true,
        "front": "State the relationship between Pre-Money, Post-Money, and Investor Equity.",
        "back": "ΓÇó $\\text{Post-Money Valuation} = \\text{Pre-Money Valuation} + \\text{New Investment Amount}$\nΓÇó $\\text{Investor Equity Ownership} = \\frac{\\text{New Investment Amount}}{\\text{Post-Money Valuation}}$"
      },
      {
        "id": "FC-IE-03",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Startup funding sources",
        "highYield": true,
        "front": "Name common startup funding sources.",
        "back": "Founder savings, friends and family, government grants and schemes, angel investors, venture capital, incubators and accelerators, bank loans and crowdfunding.\nKeywords: funding, grant, angel, venture capital, incubator"
      },
      {
        "id": "FC-IE-07",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Grants versus equity",
        "highYield": true,
        "front": "Compare grant funding with equity funding.",
        "back": "A grant provides money without giving up ownership, but it is limited and often tied to eligibility or milestones. Equity funding gives investors a share of the company and usually brings mentoring and networks.\nKeywords: grant, equity, dilution, ownership"
      },
      {
        "id": "FC-IE-11",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Forms of IPR",
        "highYield": true,
        "front": "Compare patents, copyright, trademarks and GI.",
        "back": "A patent protects an invention. Copyright protects original creative and software works. A trademark identifies the source of goods or services. A Geographical Indication protects a product name linked to a place.\nKeywords: patent, copyright, trademark, GI"
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
        "topic": "Startup lifecycle",
        "highYield": true,
        "front": "Describe the typical startup lifecycle.",
        "back": "Idea, problem validation, prototype and MVP, early customers, product-market fit, growth and scaling, maturity, and finally exit, acquisition or long-term operation.\nKeywords: lifecycle, idea, validation, growth, exit"
      },
      {
        "id": "FC-IE-19",
        "subjectId": "IE",
        "unit": 5,
        "topic": "NISP",
        "highYield": true,
        "front": "What is the National Innovation and Startup Policy?",
        "back": "NISP is a framework for higher-education institutions to promote student and faculty innovation through incubation, flexible academic policies, mentoring, funding support and industry linkages.\nKeywords: NISP, higher education, incubation, innovation, policy"
      },
      {
        "id": "FC-IE-20",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Licensing and technology transfer",
        "highYield": false,
        "front": "What is licensing and technology transfer?",
        "back": "Licensing lets another party use intellectual property on agreed terms, often for a fee or royalty. Technology transfer moves knowledge, skills and rights from a developer to a user for commercial application.\nKeywords: licensing, royalty, technology transfer, commercialisation"
      },
      {
        "id": "FC-SEM-IE-34",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Startup requirements",
        "highYield": false,
        "front": "What are basic requirements to start a venture?",
        "back": "A validated problem, a viable solution, a founding team with complementary skills, a business model, legal registration and access to initial resources or funding.\nKeywords: startup, problem, team, business model, registration"
      },
      {
        "id": "FC-SEM-IE-35",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Founding team and mentors",
        "highYield": true,
        "front": "Why are the founding team and mentors important?",
        "back": "A balanced team brings technical, commercial and operational skills. Mentors provide experience, networks and challenge assumptions, helping founders avoid common mistakes.\nKeywords: founding team, skills, mentor, network"
      },
      {
        "id": "FC-SEM-IE-36",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Pitch preparation",
        "highYield": true,
        "front": "What should a venture pitch cover?",
        "back": "Problem, solution, target market, business model, traction, competition, team, financial projections and the ask. Keep it clear, evidence-based and focused on why the venture can win.\nKeywords: pitch, problem, traction, team, ask"
      },
      {
        "id": "FC-SEM-IE-37",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Registration and legal aspects",
        "highYield": false,
        "front": "What legal steps does startup registration involve?",
        "back": "Choose a business structure, obtain name approval, incorporate with the registrar, obtain tax registrations, open a bank account and comply with sector-specific licences and employment laws.\nKeywords: registration, incorporation, tax, licence, compliance"
      },
      {
        "id": "FC-SEM-IE-38",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Funding opportunities",
        "highYield": true,
        "front": "Which funding source suits validation, and which suits scaling?",
        "back": "Grants, incubators and angel rounds usually suit validation and early prototypes. Venture capital and larger institutional rounds usually suit proven unit economics and scaling.\nKeywords: grant, angel, venture capital, validation, scaling"
      },
      {
        "id": "FC-SEM-IE-39",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Institutional support",
        "highYield": false,
        "front": "What institutional support is available to startups?",
        "back": "Incubators, accelerators, technology parks, government agencies, industry associations and university cells provide workspace, mentoring, funding access, training and networking.\nKeywords: incubator, accelerator, government, mentoring, network"
      },
      {
        "id": "FC-SEM-IE-40",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Startup lifecycle",
        "highYield": false,
        "front": "What are the main risks at each startup stage?",
        "back": "Idea stage: is the problem real? Validation: will customers adopt? Early growth: can the model acquire customers profitably? Scaling: can operations and cash flow keep pace?\nKeywords: idea, validation, growth, scaling, risk"
      },
      {
        "id": "FC-SEM-IE-41",
        "subjectId": "IE",
        "unit": 5,
        "topic": "NISP",
        "highYield": true,
        "front": "What does NISP expect a college to provide?",
        "back": "An incubation cell, flexible academic credit or leave for founders, mentoring, access to labs and industry, IP support and a clear startup policy.\nKeywords: NISP, incubation, credit, mentoring, IP"
      },
      {
        "id": "FC-SEM-IE-42",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Patents and designs",
        "highYield": true,
        "front": "What is patentable, and what does a design protect?",
        "back": "A patent protects a new, inventive and industrially applicable invention. A design registration protects the visual shape, configuration, pattern or ornament of an article, not its technical function.\nKeywords: patent, novelty, inventive step, industrial application, design"
      },
      {
        "id": "FC-SEM-IE-43",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Patent grant procedure",
        "highYield": false,
        "front": "Outline the Indian patent grant procedure.",
        "back": "File an application, publish it after 18 months, request examination, respond to objections, attend the hearing if needed, and receive grant if the application is accepted. Opposition is possible.\nKeywords: patent, filing, publication, examination, grant"
      },
      {
        "id": "FC-SEM-IE-44",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Patent rights",
        "highYield": true,
        "front": "What rights does a patent grant, and how long?",
        "back": "A patent gives the owner the right to exclude others from making, using, selling or importing the claimed invention for 20 years from filing, subject to renewal fees and national law.\nKeywords: patent rights, exclude, 20 years, renewal"
      },
      {
        "id": "FC-SEM-IE-45",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Copyright, trademark and GI",
        "highYield": true,
        "front": "Distinguish copyright, trademark and GI.",
        "back": "Copyright protects original literary, artistic and software works. A trademark identifies the source of goods or services. A Geographical Indication protects a product name tied to a place and its traditional quality.\nKeywords: copyright, trademark, GI, origin, protection"
      },
      {
        "id": "FC-SEM-IE-46",
        "subjectId": "IE",
        "unit": 5,
        "topic": "Licensing and technology transfer",
        "highYield": false,
        "front": "Distinguish licensing from assigning intellectual property.",
        "back": "A licence lets another party use the IP on agreed terms while the owner keeps ownership. An assignment transfers ownership of the IP to the other party.\nKeywords: licence, assignment, ownership, IP"
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.MID2_PRACTICE = MID2_PRACTICE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MID2_PRACTICE;
}

/**
 * MGIT PYQ HUB - Mid-1 Practice Question Bank & Flashcards
 * Rebuilt for MR-25 CSE Semester III (Units 1-2 + Unit 3 Part 1)
 * Content audit: content-audit/
 */
const MID1_PRACTICE = {
  "version": "1.1.0",
  "exam": "mid1",
  "regulation": "MR-25",
  "targetAudience": "MGIT CSE Semester III - Mid-1 Examination",
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
        "id": "DM-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Tautology",
        "question": "A compound proposition that is true under every truth assignment is called a:",
        "options": [
          "Tautology",
          "Fallacy",
          "Contradiction",
          "Contingency"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A tautology is a logical formula that is true in every possible interpretation."
      },
      {
        "id": "DM-M1-003",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Contrapositive",
        "question": "What is the contrapositive of the conditional statement 'If it rains, the grass is wet' ($p \\rightarrow q$)?",
        "options": [
          "If the grass is wet, it rains",
          "If the grass is not wet, it does not rain ($\\neg q \\rightarrow \\neg p$)",
          "If it does not rain, the grass is not wet",
          "It rains and the grass is not wet"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$, which is logically equivalent to $p \\to q$."
      },
      {
        "id": "DM-M1-005",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Predicates & Quantifiers",
        "question": "Which quantified formula correctly translates 'Every student loves mathematics'?",
        "options": [
          "$\\exists x (S(x) \\rightarrow M(x))$",
          "$\\exists x (S(x) \\land M(x))$",
          "$\\forall x (S(x) \\rightarrow M(x))$",
          "$\\forall x (S(x) \\land M(x))$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Universal claims across a category use conditional implication: for all $x$, if $x$ is a student then $x$ loves mathematics."
      },
      {
        "id": "DM-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Tautology",
        "question": "A compound proposition that evaluates to true under every possible truth assignment is called a:",
        "options": [
          "Contradiction",
          "Equivalence",
          "Tautology",
          "Contingency"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A tautology is universally true under every interpretation (e.g., $p \\lor \\neg p$)."
      },
      {
        "id": "DM-SEM-003",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Modus Ponens",
        "question": "Which rule of inference deduces $q$ from premises $p$ and $p \\rightarrow q$?",
        "options": [
          "Modus Tollens",
          "Hypothetical Syllogism",
          "Disjunctive Syllogism",
          "Modus Ponens"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Modus Ponens affirms antecedent: $(p \\land (p \\rightarrow q)) \\implies q$."
      },
      {
        "id": "DM-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Propositions",
        "question": "Which of the following is **not** a proposition?",
        "options": [
          "$2+2=4$",
          "What time is it?",
          "Delhi is the capital of India",
          "5 is an odd number"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A proposition must have a definite truth value. A question has no truth value, so it is not a proposition.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Truth table size",
        "question": "How many rows are needed in the truth table of a compound proposition with 4 distinct propositional variables?",
        "options": [
          "4",
          "8",
          "16",
          "32"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Each variable has two truth values, so 4 variables produce $2^4=16$ distinct assignments.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Conditional truth condition",
        "question": "The conditional $p \\to q$ is false only when:",
        "options": [
          "$p$ is false and $q$ is false",
          "$p$ is false and $q$ is true",
          "$p$ is true and $q$ is true",
          "$p$ is true and $q$ is false"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "An implication is false only when the antecedent is true and the consequent is false; all other cases are true.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Tautology",
        "question": "Which compound proposition is a tautology?",
        "options": [
          "$(p \\land q) \\to p$",
          "$(p \\lor q) \\to p$",
          "$p \\to (p \\land q)$",
          "$(p \\to q) \\land p$"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "If $p \\land q$ is true, then $p$ is true, so the implication is always true. The other forms fail for some assignment.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "PDNF",
        "question": "The principal disjunctive normal form of $p \\to q$ is:",
        "options": [
          "$\\Sigma m(1,2,3)$",
          "$\\Sigma m(0,1,3)$",
          "$\\Sigma m(0,2,3)$",
          "$\\Sigma m(0,1,2)$"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "$p \\to q \\equiv \\neg p \\lor q$ is true for assignments 00, 01 and 11, that is minterms 0, 1 and 3.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Modus tollens",
        "question": "From the premises $p \\to q$ and $\\neg q$, which conclusion follows by modus tollens?",
        "options": [
          "$q$",
          "$p$",
          "$\\neg p$",
          "$\\neg q \\to p$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Modus tollens has the form $p \\to q$, $\\neg q$ therefore $\\neg p$. It is the contrapositive of modus ponens.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-045",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Quantifier negation",
        "question": "The negation of $\\forall x\\, P(x)$ is:",
        "options": [
          "$\\forall x\\, \\neg P(x)$",
          "$\\exists x\\, P(x)$",
          "$\\neg\\exists x\\, P(x)$",
          "$\\exists x\\, \\neg P(x)$"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Negating a universal statement produces an existential statement with the predicate negated: $\\neg\\forall x P(x) \\equiv \\exists x \\neg P(x)$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-046",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Inference rule",
        "question": "The argument form $p \\to q$, $p$, therefore $q$ is called:",
        "options": [
          "Modus ponens",
          "Modus tollens",
          "Hypothetical syllogism",
          "Disjunctive syllogism"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Affirming the antecedent is modus ponens. Hypothetical syllogism chains two implications; disjunctive syllogism uses a disjunction.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-068",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Logical equivalence",
        "question": "The compound proposition $(p \\to q) \\land (q \\to p)$ is logically equivalent to:",
        "options": [
          "$p \\lor q$",
          "$p \\land q$",
          "$p \\leftrightarrow q$",
          "$\\neg p \\lor q$"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "explanation": "The conjunction of a conditional and its converse is true exactly when p and q have the same truth value, which is the biconditional.",
        "source": "syllabus"
      },
      {
        "id": "DM-M1-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "De Morgan's Laws",
        "question": "The negation of $(p \\land q)$ is logically equivalent to $\\neg p \\lor$ _______.",
        "accepted": [
          "\\neg q",
          "~q",
          "not q",
          "!q"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "De Morgan's law: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$."
      },
      {
        "id": "DM-M1-004",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Modus Tollens",
        "question": "The inference rule $(\\neg q \\land (p \\rightarrow q)) \\implies \\neg p$ is known as Modus _______.",
        "accepted": [
          "tollens"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Modus Tollens (denying the consequent) deduces the negation of the antecedent from the negation of the consequent."
      },
      {
        "id": "DM-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "De Morgan's Laws",
        "question": "According to De Morgan's Law, $\\neg(p \\land q)$ is equivalent to $\\neg p$ _______ $\\neg q$.",
        "accepted": [
          "\\lor",
          "or",
          "v"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "De Morgan's Laws: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$."
      },
      {
        "id": "DM-M1-006",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Equivalence Relations",
        "question": "Which of the following is NOT a requirement for a relation to be an Equivalence Relation?",
        "options": [
          "Symmetry",
          "Reflexivity",
          "Transitivity",
          "Antisymmetry"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An equivalence relation requires reflexivity, symmetry, and transitivity. Antisymmetry is required for a POSET, not an equivalence relation."
      },
      {
        "id": "DM-M1-008",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "POSET Definition",
        "question": "A relation that is reflexive, antisymmetric, and transitive is called a:",
        "options": [
          "Partial Order",
          "Equivalence Relation",
          "Symmetric Closure",
          "Total Disjunction"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A partially ordered set (POSET) is defined by reflexivity, antisymmetry, and transitivity."
      },
      {
        "id": "DM-SEM-005",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Lattices",
        "question": "A POSET $(L, \\le)$ is called a Lattice if every pair of elements has:",
        "options": [
          "Both a unique GLB (meet) and unique LUB (join)",
          "A maximum element only",
          "No cycles",
          "A minimum element only"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In a lattice, every pair has a unique greatest lower bound ($a \\land b$) and least upper bound ($a \\lor b$)."
      },
      {
        "id": "DM-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Cartesian product",
        "question": "If $|A|=3$ and $|B|=4$, then $|A \\times B|$ equals:",
        "options": [
          "7",
          "12",
          "64",
          "81"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "The Cartesian product contains one ordered pair for each choice of an element from $A$ and an element from $B$, so $3 \\times 4 = 12$.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Power set",
        "question": "How many subsets does a set with 5 elements have?",
        "options": [
          "5",
          "10",
          "32",
          "25"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Each element is either included or excluded, giving $2^5=32$ subsets, including the empty set and the whole set.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Equivalence relation",
        "question": "A relation that is reflexive, symmetric and transitive is called:",
        "options": [
          "A partial order",
          "A function",
          "A closure",
          "An equivalence relation"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Those three properties define an equivalence relation, which partitions the set into disjoint equivalence classes.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Hasse diagram",
        "question": "In the divisibility POSET on $\\{1,2,3,6\\}$, the least element is:",
        "options": [
          "1",
          "2",
          "3",
          "6"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "1 divides every element, so it is below all of them in the divisibility order. 6 is the greatest element.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Bijection",
        "question": "The function $f:\\mathbb{R}\\to\\mathbb{R}$, $f(x)=2x+1$, is:",
        "options": [
          "Injective but not surjective",
          "Bijective",
          "Surjective but not injective",
          "Neither injective nor surjective"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "The function is linear with non-zero slope, so it is one-to-one; for every $y$ the value $x=(y-1)/2$ is real, so it is onto.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Warshall algorithm",
        "question": "Warshall's algorithm is used to compute the:",
        "options": [
          "Reflexive closure only",
          "Symmetric closure only",
          "Transitive closure of a relation",
          "Inverse of a relation"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Warshall's algorithm builds the transitive closure in $O(n^3)$ time by allowing intermediate vertices one at a time.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-053",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Counting partitions",
        "question": "How many equivalence relations exist on the set $\\{a,b\\}$?",
        "options": [
          "1",
          "3",
          "4",
          "2"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "The partitions are $\\{\\{a\\},\\{b\\}\\}$ and $\\{\\{a,b\\}\\}$, so there are two equivalence relations.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-069",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Counting equivalence relations",
        "question": "How many equivalence relations are there on the set $\\{1,2,3\\}$?",
        "options": [
          "3",
          "7",
          "9",
          "5"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "explanation": "Equivalence relations correspond to partitions. The five partitions are one block, three two-block partitions and three singleton blocks.",
        "source": "syllabus"
      },
      {
        "id": "DM-M1-007",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Partition",
        "question": "An equivalence relation on a set $A$ partitions $A$ into mutually disjoint equivalence _______.",
        "accepted": [
          "classes",
          "class"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The Fundamental Theorem of Equivalence Relations states that an equivalence relation induces a partition of the set into disjoint equivalence classes."
      },
      {
        "id": "DM-M1-009",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Lattices",
        "question": "In a lattice, the unique greatest lower bound (GLB) of elements $a$ and $b$ is called the _______.",
        "accepted": [
          "meet",
          "glb"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "The GLB is termed 'meet' ($a \\land b$), and the LUB is termed 'join' ($a \\lor b$)."
      },
      {
        "id": "DM-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Equivalence Relations",
        "question": "An equivalence relation on a set must be reflexive, symmetric, and _______.",
        "accepted": [
          "transitive"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An equivalence relation satisfies reflexivity, symmetry, and transitivity."
      },
      {
        "id": "DM-SEM-006",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
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
        "id": "DM-M1-010",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Semigroup Definition",
        "question": "An algebraic structure $(S, *)$ is called a Semigroup if the binary operation $*$ satisfies:",
        "options": [
          "Closure, Associativity, and Identity",
          "Closure and Associativity",
          "Closure only",
          "Closure and Commutativity only"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A semigroup satisfies closure and associativity. A monoid adds an identity element."
      },
      {
        "id": "DM-M1-012",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Semigroup Homomorphism",
        "question": "A mapping $f: (S, *) \\rightarrow (T, \\cdot)$ between two semigroups is a Homomorphism if for all $a, b \\in S$:",
        "options": [
          "$f(a * b) = f(a) + f(b)$",
          "$f(a) = f(b)$",
          "$f(a * b) = f(a) \\cdot f(b)$",
          "$f(a * b) = a \\cdot b$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A homomorphism preserves algebraic operations: $f(a * b) = f(a) \\cdot f(b)$."
      },
      {
        "id": "DM-SEM-054",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Semigroup",
        "question": "A semigroup is a non-empty set together with a binary operation that is:",
        "options": [
          "Associative",
          "Commutative",
          "Idempotent",
          "Invertible"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A semigroup requires only closure and associativity. Commutativity, identity and inverses are additional properties.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-055",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Monoid",
        "question": "A monoid is a semigroup that also has:",
        "options": [
          "An inverse for every element",
          "An identity element",
          "A commutative operation",
          "A finite number of elements"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A monoid adds a two-sided identity to an associative binary operation. Inverses are required only for a group.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Group inverse",
        "question": "In a group $(G,*)$, the inverse of an element $a$ is:",
        "options": [
          "Always equal to $a$",
          "Equal to the identity",
          "Unique",
          "Not necessarily in $G$"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "If $b$ and $c$ are both inverses of $a$, then $b=b*(a*c)=(b*a)*c=c$, so the inverse is unique.",
        "source": "syllabus"
      },
      {
        "id": "DM-SEM-070",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Order of a group element",
        "question": "In the group $(\\mathbb{Z}_7 \\setminus \\{0\\}, \\times_7)$, the order of the element $2$ is:",
        "options": [
          "3",
          "2",
          "4",
          "6"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "Compute powers modulo 7: $2^1=2$, $2^2=4$, $2^3=8\\equiv1$. The smallest positive exponent giving the identity is 3.",
        "source": "syllabus"
      },
      {
        "id": "DM-M1-011",
        "type": "fib",
        "unit": 3,
        "scope": "mid1",
        "topic": "Monoid Identity",
        "question": "In the monoid $(\\mathbb{N}, +)$ of natural numbers under addition (with 0), the identity element is _______.",
        "accepted": [
          "0",
          "zero"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "For any $n \\in \\mathbb{N}$, $n + 0 = 0 + n = n$, so 0 is the additive identity."
      }
    ],
    "COA": [
      {
        "id": "COA-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "2's Complement",
        "question": "What is the 2's complement of the binary number 0101100?",
        "options": [
          "1010100",
          "0101101",
          "1010011",
          "1101100"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "To find 2's complement: invert all bits (1010011) and add 1 $\\implies 1010100$."
      },
      {
        "id": "COA-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "2's Complement Range",
        "question": "What is the numerical range of an $n$-bit 2's complement signed integer?",
        "options": [
          "$-2^{n-1}$ to $2^{n-1} - 1$",
          "$0$ to $2^n - 1$",
          "$-2^n$ to $2^n - 1$",
          "$-(2^{n-1}-1)$ to $2^{n-1}-1$"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "An $n$-bit 2's complement integer has range $[-2^{n-1}, 2^{n-1}-1]$ because 0 is represented with sign bit 0."
      },
      {
        "id": "COA-SEM-037",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "2's complement range",
        "question": "The range of integers representable in 8-bit two's complement is:",
        "options": [
          "$-127$ to $+127$",
          "$0$ to $255$",
          "$-128$ to $+127$",
          "$-128$ to $+128$"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "With 8 bits, one pattern is needed for zero, so the range is $-2^{7}$ to $2^{7}-1$, that is $-128$ to $+127$.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-038",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "IEEE 754 bias",
        "question": "The exponent bias used in IEEE 754 single-precision floating point is:",
        "options": [
          "64",
          "128",
          "1023",
          "127"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Single precision uses 8 exponent bits with bias 127; double precision uses 11 bits with bias 1023.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "BCD representation",
        "question": "The BCD representation 0111 1001 stands for the decimal number:",
        "options": [
          "79",
          "57",
          "69",
          "121"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Each nibble is a decimal digit: 0111 is 7 and 1001 is 9, so the value is 79.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Gray code",
        "question": "The Gray code equivalent of the binary number 1011 is:",
        "options": [
          "1101",
          "1110",
          "1010",
          "1001"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Gray bits are $g_3=b_3$, then each next bit is the XOR of adjacent binary bits: 1, 1, 1, 0 gives 1110.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Universal gates",
        "question": "Which gate is called a universal gate because any Boolean function can be built from it alone?",
        "options": [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "NAND (and NOR) can implement NOT, AND and OR, so either one alone is functionally complete.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Parity",
        "question": "A parity bit is added to a binary code mainly to:",
        "options": [
          "Increase storage capacity",
          "Correct all multi-bit errors",
          "Compress the data",
          "Detect single-bit errors"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Parity makes the number of 1s even or odd, so a single-bit error changes parity and is detected. It cannot correct errors.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Address space",
        "question": "A memory has a 12-bit address. How many addressable words does it have?",
        "options": [
          "4096",
          "512",
          "1024",
          "8192"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A 12-bit address selects one of $2^{12}=4096$ locations.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Register transfer",
        "question": "The register transfer statement $R2 \\leftarrow R1$ means:",
        "options": [
          "Exchange R1 and R2",
          "Copy the contents of R1 into R2",
          "Add R1 to R2",
          "Clear both registers"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "The arrow denotes a transfer; the source R1 is copied into the destination R2, and R1 keeps its value.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-045",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Functional units",
        "question": "Which set lists the three basic functional units of a digital computer?",
        "options": [
          "ALU, cache, register",
          "Control unit, bus, clock",
          "CPU, main memory, I/O",
          "RAM, ROM, disk"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "A digital computer is organised around the processor, main memory and input/output units, connected by buses.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-073",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Hexadecimal conversion",
        "question": "The hexadecimal number $2F$ is equal to which decimal value?",
        "options": [
          "31",
          "63",
          "47",
          "95"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "$2F_{16}=2\\times16+15=32+15=47$.",
        "source": "syllabus"
      },
      {
        "id": "COA-M1-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Booth's Multiplier",
        "question": "Booth's algorithm performs signed multiplication directly on numbers in _______'s complement representation.",
        "accepted": [
          "2",
          "two",
          "2's"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Booth's multiplication treats 2's complement signed operands without needing separate sign handling."
      },
      {
        "id": "COA-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Booth's Algorithm",
        "question": "In Booth's signed multiplication algorithm, when the bit pair $(Q_0, Q_{-1})$ is $(1, 0)$, register $A$ performs $A \\leftarrow A$ _______ $M$.",
        "accepted": [
          "-",
          "minus",
          "- m",
          "subtraction"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "In Booth's algorithm: $(1, 0) \\implies A \\leftarrow A - M$; $(0, 1) \\implies A \\leftarrow A + M$; $(0,0)$ and $(1,1) \\implies$ shift only."
      },
      {
        "id": "COA-M1-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Microinstruction Sequencing",
        "question": "Which hardware component selects between the incrementer and branch address in a microprogrammed control unit?",
        "options": [
          "ALU",
          "Multiplexer",
          "Decoder",
          "Priority Encoder"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "A multiplexer selects whether the next microinstruction address comes from the sequencer incrementer or an external branch address."
      },
      {
        "id": "COA-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Hardwired vs Microprogrammed",
        "question": "Which of the following is an advantage of Hardwired Control units over Microprogrammed Control units?",
        "options": [
          "Lower hardware chip layout complexity",
          "Faster instruction execution speed",
          "Ease of modifying instruction set",
          "Lower cost for complex CISC architectures"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Hardwired control uses combinational logic gates and executes instructions at maximum silicon speed (RISC), whereas microprogrammed control uses a control memory lookup."
      },
      {
        "id": "COA-SEM-046",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Karnaugh map",
        "question": "A Karnaugh map for 4 variables has how many cells?",
        "options": [
          "4",
          "8",
          "32",
          "16"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A K-map has one cell per input combination, so 4 variables give $2^4=16$ cells.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Half adder",
        "question": "For a half adder with inputs A and B, the sum and carry are:",
        "options": [
          "$A \\oplus B$ and $AB$",
          "$A+B$ and $AB$",
          "$AB$ and $A \\oplus B$",
          "$A \\oplus B$ and $A+B$"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The sum bit is XOR and the carry bit is AND. A half adder cannot accept an incoming carry.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Full adder",
        "question": "A full adder has how many inputs and outputs?",
        "options": [
          "2 inputs, 2 outputs",
          "3 inputs, 2 outputs",
          "3 inputs, 3 outputs",
          "4 inputs, 2 outputs"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A full adder takes A, B and carry-in, and produces sum and carry-out.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Multiplexer",
        "question": "An 8-to-1 multiplexer requires how many select lines?",
        "options": [
          "2",
          "4",
          "3",
          "8"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "With $n$ select lines a multiplexer can choose among $2^n$ inputs, and $2^3=8$.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Decoder",
        "question": "A 3-to-8 decoder has how many output lines?",
        "options": [
          "3",
          "6",
          "16",
          "8"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A decoder asserts exactly one of $2^3=8$ outputs for each input combination.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "D flip-flop",
        "question": "The next-state equation of a D flip-flop is:",
        "options": [
          "$Q^+=D$",
          "$Q^+=\\bar{D}$",
          "$Q^+=J\\bar{Q}+\\bar{K}Q$",
          "$Q^+=T \\oplus Q$"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A D flip-flop simply captures the input: the next state equals D. The other equations describe JK and T flip-flops.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Counter design",
        "question": "What is the minimum number of flip-flops needed for a modulo-10 counter?",
        "options": [
          "3",
          "4",
          "5",
          "10"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "A modulo-10 counter needs 10 states, and $2^3=8$ is too few while $2^4=16$ is enough, so 4 flip-flops are required.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-053",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "BCD adder",
        "question": "In a BCD adder, correction is needed when the 4-bit sum is:",
        "options": [
          "Less than 9",
          "Exactly 5",
          "Greater than 9 or a carry is produced",
          "Always even"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "If the binary sum exceeds 9 or produces a carry, 6 is added to skip the six invalid BCD codes.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-054",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Magnitude comparator",
        "question": "A 4-bit magnitude comparator typically provides how many comparison outputs?",
        "options": [
          "1",
          "2",
          "4",
          "3"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "It reports $A>B$, $A=B$ and $A<B$, so three outputs are needed.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-055",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Shift register",
        "question": "A 4-bit serial-in shift register needs how many clock pulses to load 4 bits?",
        "options": [
          "4",
          "1",
          "2",
          "8"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "One bit enters per clock, so four bits require four clock pulses.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-074",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Multiplexer tree",
        "question": "How many 2-to-1 multiplexers are required to build an 8-to-1 multiplexer using a tree structure?",
        "options": [
          "8",
          "15",
          "16",
          "7"
        ],
        "answerIndex": 3,
        "difficulty": "hard",
        "explanation": "An 8-to-1 tree needs four 2-to-1 multiplexers for the first stage, two for the second and one for the final stage: $4+2+1=7$.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
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
        "id": "COA-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Bus transfer",
        "question": "Multiple registers can share a common bus using:",
        "options": [
          "Only AND gates",
          "Multiplexers or tri-state buffers",
          "Flip-flops",
          "Decoders only"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A multiplexer selects one source, or tri-state buffers let one register drive the bus while the others are disabled.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Arithmetic micro-operation",
        "question": "The micro-operation $R3 \\leftarrow R1 + R2$ is classified as:",
        "options": [
          "A logic micro-operation",
          "A shift micro-operation",
          "An arithmetic micro-operation",
          "A transfer micro-operation"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Addition is an arithmetic micro-operation; it changes the numerical value rather than individual bits or position.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-058",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Logic micro-operation",
        "question": "Which operation selectively complements the bits of a register where a mask has 1s?",
        "options": [
          "AND",
          "OR",
          "Shift",
          "XOR"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "XOR with a mask of 1s inverts the selected bits and leaves the 0 positions unchanged.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-059",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Arithmetic shift",
        "question": "An arithmetic right shift of a signed binary number:",
        "options": [
          "Preserves the sign bit",
          "Fills the leftmost bit with 0",
          "Reverses the bit order",
          "Always doubles the value"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Arithmetic right shift copies the sign bit into the vacated position, which divides a signed number by 2 while keeping its sign.",
        "source": "syllabus"
      },
      {
        "id": "COA-SEM-060",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "ALSU",
        "question": "The arithmetic logic shift unit selects its operation using:",
        "options": [
          "The clock only",
          "A set of select inputs",
          "The accumulator sign",
          "The program counter"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Select inputs choose among arithmetic, logic and shift functions, and the result is steered to the output.",
        "source": "syllabus"
      },
      {
        "id": "COA-M1-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid1",
        "topic": "Fixed Point Addition",
        "question": "In fixed-point arithmetic, overflow during addition of two positive numbers is detected when the sign bit of the sum becomes _______.",
        "accepted": [
          "1",
          "one",
          "negative"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Adding two positive operands ($S_1=0, S_2=0$) that exceeds register capacity turns the MSB to 1 (negative), signalling overflow."
      }
    ],
    "OOPJ": [
      {
        "id": "OOPJ-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Java Platform Independence",
        "question": "Java achieves platform independence through which architectural mechanism?",
        "options": [
          "Translating into C++ code",
          "Direct assembly generation",
          "Compilation into bytecode executed on platform-specific JVMs",
          "Running purely in web browsers"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Javac compiles source into standard bytecode (.class), which is executed on any system equipped with a compatible JVM."
      },
      {
        "id": "OOPJ-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "JVM Bytecode",
        "question": "What is Java bytecode and how is it executed?",
        "options": [
          "Encrypted source text",
          "Native x86 machine instructions",
          "Assembly source code compiled by C++ linker",
          "Intermediate machine-independent instruction set executed by the Java Virtual Machine (JVM)"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Java javac compiles source code (.java) into platform-independent bytecode (.class), which any platform JVM interprets or JIT-compiles."
      },
      {
        "id": "OOPJ-SEM-037",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "JVM",
        "question": "Java source code is compiled into:",
        "options": [
          "Native machine code",
          "Bytecode",
          "Assembly language",
          "Microcode"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "javac produces platform-independent bytecode, which the JVM interprets or compiles for the host machine.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-038",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "JDK and JRE",
        "question": "Which statement about JDK and JRE is correct?",
        "options": [
          "JRE includes the JDK",
          "They are unrelated",
          "JDK includes the JRE plus development tools",
          "JDK runs only applets"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The JDK bundles the JRE with compilers and tools such as javac and javadoc.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Primitive sizes",
        "question": "How many bytes does a Java int occupy?",
        "options": [
          "2",
          "8",
          "It depends on the platform",
          "4"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Java fixes primitive sizes: int is 4 bytes, short is 2, long is 8, and char is 2.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Narrowing conversion",
        "question": "Assigning a double to an int without a cast is:",
        "options": [
          "A compile-time error because it is a narrowing conversion",
          "Allowed automatically",
          "Allowed only at runtime",
          "Allowed if the value is positive"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A double may lose its fractional part, so Java requires an explicit cast for narrowing conversions.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Switch statement",
        "question": "Which types are allowed in a classic Java switch selector?",
        "options": [
          "Only int",
          "int, char, byte, short, String and enum",
          "Any object",
          "Only boolean"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Classic switch accepts integral types, char, String and enum constants; boolean and arbitrary objects are not allowed.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Loop control",
        "question": "Which loop is guaranteed to execute its body at least once?",
        "options": [
          "for",
          "while",
          "do-while",
          "enhanced for"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "A do-while checks its condition after the body, so the body runs once even if the condition is false.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Constructor",
        "question": "A Java constructor has:",
        "options": [
          "A return type of void",
          "A return type of int",
          "The same name as the class but must return this",
          "No return type"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A constructor has the class name and no return type; adding void turns it into an ordinary method.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "static members",
        "question": "A static method can directly access:",
        "options": [
          "Only static variables and static methods",
          "Only instance variables",
          "Both instance and static members",
          "Only local variables"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A static method has no this reference, so it cannot directly use instance fields; it can use static members.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-045",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "this reference",
        "question": "The this keyword refers to:",
        "options": [
          "The superclass object",
          "The current object",
          "The class itself",
          "A static instance"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "this is a reference to the object on which the current method was invoked; it is used to disambiguate fields from parameters.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-073",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Increment operators",
        "question": "What is printed by `int x = 5; System.out.println(x++ + ++x);`?",
        "options": [
          "10",
          "12",
          "11",
          "13"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "`x++` yields 5 and leaves x as 6; `++x` then increments x to 7 and yields 7. The sum is $5+7=12$.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Polymorphism Types",
        "question": "Method overloading in Java is an example of compile-time (or _______) polymorphism.",
        "accepted": [
          "static",
          "compile-time"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Method overloading resolves method binding at compile time (static polymorphism), while method overriding resolves dynamically at runtime."
      },
      {
        "id": "OOPJ-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
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
        "source": "syllabus",
        "explanation": "Multiple class inheritance creates ambiguity (the Diamond Problem) regarding which superclass field or method is inherited. Interfaces avoid this by separating contract from implementation."
      },
      {
        "id": "OOPJ-SEM-046",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Inheritance",
        "question": "Which keyword is used by a subclass to call its superclass constructor?",
        "options": [
          "this",
          "extends",
          "super",
          "implements"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "super(...) invokes the parent constructor and must be the first statement in the subclass constructor.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "final keyword",
        "question": "A final method in Java:",
        "options": [
          "Cannot be called",
          "Must be static",
          "Can be overridden only once",
          "Cannot be overridden"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "final prevents overriding; a final class cannot be extended, and a final variable cannot be reassigned.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Overriding",
        "question": "Method overriding requires:",
        "options": [
          "Same name and same parameter list in a subclass",
          "Same name but different parameters",
          "A static method",
          "A private superclass method"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Overriding replaces an inherited method with the same signature; different parameters would be overloading.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Abstract class",
        "question": "Which statement about an abstract class is correct?",
        "options": [
          "It cannot have constructors",
          "It can have both abstract and concrete methods",
          "It must have only abstract methods",
          "It can be instantiated directly"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "An abstract class may mix abstract and concrete members and can declare constructors, but it cannot be instantiated.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Interface fields",
        "question": "Fields declared in a Java interface are implicitly:",
        "options": [
          "private and final",
          "protected and static",
          "public, static and final",
          "instance variables"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Interface fields are constants: public, static and final, even when those modifiers are omitted.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Packages",
        "question": "The statement package com.example; must appear:",
        "options": [
          "Anywhere in the file",
          "Inside the class",
          "After the imports",
          "As the first non-comment statement"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "A package declaration must be the first non-comment statement, before any import.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Access modifiers",
        "question": "Which access modifier makes a member visible only within its own class?",
        "options": [
          "private",
          "public",
          "protected",
          "default"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "private restricts access to the declaring class; default (package-private) also allows the same package.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-053",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Polymorphism",
        "question": "Runtime polymorphism in Java is achieved through:",
        "options": [
          "Method overloading",
          "Method overriding with a superclass reference",
          "Static methods",
          "Constructors"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "A superclass reference can point to a subclass object, and the overridden method is chosen at runtime.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-054",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Substitutability",
        "question": "The principle that a subclass object can be used wherever a superclass object is expected is called:",
        "options": [
          "Encapsulation",
          "Abstraction",
          "Substitutability",
          "Modularity"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Liskov substitutability lets client code depend on the supertype without knowing the concrete subtype.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-074",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Runtime polymorphism",
        "question": "If `A a = new B();` and both A and B define `show()`, which method runs when `a.show()` is called?",
        "options": [
          "A's show()",
          "A compile-time error occurs",
          "B's show()",
          "Neither method runs"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "explanation": "The reference type is A but the object is B. Method overriding is resolved at runtime from the actual object type, so B's show() runs.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-M1-002",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Interface Keyword",
        "question": "A class implements an interface in Java using the _______ keyword.",
        "accepted": [
          "implements"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The 'implements' keyword binds a class to provide concrete implementations for methods declared in an interface."
      },
      {
        "id": "OOPJ-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Super Keyword",
        "question": "To explicitly invoke an immediate superclass constructor, a subclass constructor must call _______() as its first statement.",
        "accepted": [
          "super",
          "super()"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The super() call must be the very first statement in a constructor to initialize superclass state properly."
      },
      {
        "id": "OOPJ-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Exception Handling",
        "question": "Which block in Java exception handling ALWAYS executes whether an exception is thrown or not?",
        "options": [
          "catch",
          "throw",
          "try",
          "finally"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "The finally block is guaranteed to execute after try/catch blocks (unless System.exit() is called), ideal for releasing resources."
      },
      {
        "id": "OOPJ-SEM-055",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Exception hierarchy",
        "question": "All Java exceptions ultimately extend:",
        "options": [
          "Exception",
          "Error",
          "RuntimeException",
          "Throwable"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Throwable is the root; Exception and Error are its two main branches.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Checked exceptions",
        "question": "A checked exception must be:",
        "options": [
          "Caught or declared with throws",
          "Ignored at compile time",
          "Always a RuntimeException",
          "Thrown only by the JVM"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "The compiler requires checked exceptions to be handled in a try-catch or listed in the method's throws clause.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "finally block",
        "question": "A finally block executes:",
        "options": [
          "Only when no exception occurs",
          "Whether or not an exception occurs",
          "Only when an exception occurs",
          "Only if System.exit is called"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "finally is used for cleanup and runs even when an exception is thrown or a return is executed, except on a JVM exit.",
        "source": "syllabus"
      },
      {
        "id": "OOPJ-SEM-058",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "throw vs throws",
        "question": "The difference between throw and throws is that:",
        "options": [
          "throw declares, throws raises",
          "Both raise exceptions",
          "throw raises an exception object, throws declares it",
          "Both declare exceptions"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "throw is a statement that raises an exception; throws is a method-clause declaration of possible exceptions.",
        "source": "syllabus"
      }
    ],
    "DBMS": [
      {
        "id": "DBMS-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Database Users",
        "question": "Which database user interacts with the system primarily by invoking pre-written application programs (e.g. bank teller)?",
        "options": [
          "Database Administrator (DBA)",
          "Sophisticated User",
          "Naive (Parametric) User",
          "System Analyst"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Naive users interact with the database via dedicated application forms and interfaces without knowing SQL."
      },
      {
        "id": "DBMS-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
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
        "source": "syllabus",
        "explanation": "The conceptual level describes the entire database structure, entities, relationships, constraints, and security rules without physical disk storage details."
      },
      {
        "id": "DBMS-SEM-037",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "DBMS vs file system",
        "question": "The main advantage of a DBMS over a file-processing system is that a DBMS:",
        "options": [
          "Stores data in flat files",
          "Controls redundancy and enforces integrity",
          "Needs no users",
          "Removes the need for backups"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A DBMS centralises data, reduces duplication and enforces constraints, which file systems leave to each application.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-038",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Data independence",
        "question": "Logical data independence means the ability to change the:",
        "options": [
          "Physical storage without changing the conceptual schema",
          "External views without changing the conceptual schema",
          "Conceptual schema without changing external views",
          "Hardware without changing anything"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Logical independence shields external schemas from changes to the conceptual schema; physical independence shields the conceptual schema from storage changes.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "DBA",
        "question": "Which task belongs to the database administrator?",
        "options": [
          "Writing every application program",
          "Designing the CPU",
          "Compiling SQL queries only",
          "Granting user authorisation and tuning performance"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "The DBA manages schema, users, authorisation, backups and performance, rather than writing all application code.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Weak entity",
        "question": "A weak entity set is one that:",
        "options": [
          "Cannot be uniquely identified by its own attributes alone",
          "Has no attributes",
          "Has no relationship",
          "Is always optional"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A weak entity depends on an owner entity and is identified by a partial key plus the owner's key.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Cardinality",
        "question": "A many-to-one relationship from A to B means:",
        "options": [
          "Many A entities relate to many B entities",
          "Each A relates to at most one B, but one B may relate to many A",
          "Each A relates to exactly one B and vice versa",
          "No A relates to B"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Many A entities may point to the same B entity, while each A has at most one B.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Specialization",
        "question": "Specialization in the ER model is the process of:",
        "options": [
          "Combining entities into a superclass",
          "Removing all relationships",
          "Creating subclasses from a superclass based on distinguishing attributes",
          "Converting tables to files"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Specialization is top-down: a general entity is divided into subclasses with specialised attributes.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "ER-to-relational mapping",
        "question": "When mapping a many-to-many relationship to relations, the usual approach is to:",
        "options": [
          "Add a foreign key to one side only",
          "Merge both entities into one",
          "Drop the relationship",
          "Create a separate relation with the keys of both entities"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "A many-to-many relationship needs its own relation whose key combines the participating entity keys.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Entity vs attribute",
        "question": "Which item is best modelled as an entity rather than an attribute?",
        "options": [
          "A course with its own code and credits",
          "A student's age",
          "A student's name",
          "A student's marks in one subject"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "A course has its own identity and attributes, so it is an entity; age and name describe a student.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-072",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Mapping many-to-many relationships",
        "question": "A many-to-many relationship between entity sets A and B is mapped to relations by creating:",
        "options": [
          "a separate relation containing the keys of A and B",
          "a foreign key in A only",
          "a foreign key in B only",
          "no relation at all"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "A many-to-many relationship cannot be represented by a foreign key on either side, so a junction relation stores both participating keys.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Physical Data Independence",
        "question": "The capacity to change the internal physical storage schema without having to alter the conceptual schema is called physical data _______.",
        "accepted": [
          "independence"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Physical data independence insulates the conceptual design from changes in file organizations, disk indexing, and physical storage hardware."
      },
      {
        "id": "DBMS-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Relational Algebra Operations",
        "question": "Which relational algebra operation selects rows that satisfy a specified predicate condition?",
        "options": [
          "Selection ($\\sigma$)",
          "Cartesian Product ($\\times$)",
          "Intersection ($\\cap$)",
          "Projection ($\\pi$)"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Selection ($\\sigma_p(R)$) filters rows meeting condition $p$. Projection ($\\pi$) filters columns."
      },
      {
        "id": "DBMS-SEM-045",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Relational model terms",
        "question": "In the relational model, a row of a table is called a:",
        "options": [
          "Attribute",
          "Tuple",
          "Domain",
          "Schema"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "A relation is a table, a tuple is a row, an attribute is a column and a domain is the set of allowed values.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-046",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Primary key",
        "question": "A primary key must be:",
        "options": [
          "Unique but may be null",
          "Nullable and duplicate",
          "Unique and not null",
          "Always numeric"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "The primary key uniquely identifies each tuple and cannot contain NULL, because NULL is not a value.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Foreign key",
        "question": "A foreign key enforces:",
        "options": [
          "Entity integrity",
          "Domain independence",
          "Physical independence",
          "Referential integrity"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A foreign key value must match a primary key value in the referenced relation, or be NULL, preserving referential integrity.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Relational algebra",
        "question": "The relational algebra operation that selects rows satisfying a condition is:",
        "options": [
          "Selection ($\\sigma$)",
          "Projection ($\\pi$)",
          "Join ($\\bowtie$)",
          "Union ($\\cup$)"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Selection filters tuples by a predicate; projection chooses columns.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Projection",
        "question": "The projection operator $\\pi_{name, age}(Student)$ returns:",
        "options": [
          "Only rows with those values",
          "Only the name and age columns",
          "A Cartesian product",
          "A grouped table"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Projection keeps the listed attributes and discards the others; duplicate rows are removed in the formal model.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Natural join",
        "question": "A natural join of two relations:",
        "options": [
          "Combines every pair of tuples",
          "Requires no common attributes",
          "Joins on all common attributes and removes duplicate columns",
          "Always produces an empty relation"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Natural join equates common attributes and keeps one copy of each; a Cartesian product pairs every tuple with every tuple.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Set operations",
        "question": "For $R \\cup S$ to be valid in relational algebra, $R$ and $S$ must be:",
        "options": [
          "Any two relations",
          "Joined by a foreign key",
          "Sorted",
          "Union-compatible"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Union compatibility means the same number of attributes with compatible domains in the same order.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Relational calculus",
        "question": "Relational calculus is:",
        "options": [
          "Non-procedural and declarative",
          "Procedural like relational algebra",
          "A physical storage model",
          "A concurrency protocol"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Calculus states what result is wanted rather than how to compute it; algebra gives an explicit sequence of operations.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-073",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Natural join cardinality",
        "question": "Relation R has 4 tuples and relation S has 3 tuples. What is the maximum possible number of tuples in $R \\bowtie S$ on a common attribute?",
        "options": [
          "3",
          "12",
          "4",
          "7"
        ],
        "answerIndex": 1,
        "difficulty": "hard",
        "explanation": "If every R tuple matches every S tuple on the join attribute, the natural join contains $4\\times3=12$ tuples.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-M1-002",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Candidate Key",
        "question": "A minimal superkey with no redundant attributes is called a _______ key.",
        "accepted": [
          "candidate",
          "candidate key"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "A candidate key uniquely identifies tuples and contains no proper subset that also uniquely identifies tuples."
      },
      {
        "id": "DBMS-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Referential Integrity",
        "question": "A foreign key in a child table enforces referential integrity by pointing to a primary or candidate key in the _______ table.",
        "accepted": [
          "parent",
          "referenced"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Referential integrity guarantees that a foreign key value must either exist in the referenced parent table or be null."
      },
      {
        "id": "DBMS-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Attribute Closure",
        "question": "The attribute closure $X^+$ with respect to a set of functional dependencies $F$ is:",
        "options": [
          "All candidate keys",
          "The primary key of $X$",
          "The foreign keys pointing to $X$",
          "The set of all attributes functionally determined by $X$ under $F$"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "$X^+$ is computed using Armstrong's axioms and includes every attribute $A$ such that $X \\rightarrow A$ can be derived from $F$."
      },
      {
        "id": "DBMS-SEM-053",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "SQL SELECT",
        "question": "Which SQL clause filters individual rows before grouping?",
        "options": [
          "HAVING",
          "WHERE",
          "ORDER BY",
          "GROUP BY"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "WHERE filters rows before grouping; HAVING filters groups after aggregation.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-054",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Aggregation",
        "question": "Which function returns the number of rows in a group?",
        "options": [
          "SUM()",
          "AVG()",
          "COUNT()",
          "MAX()"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "COUNT() counts rows or non-null values; SUM adds numeric values and AVG computes their mean.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-055",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Nested queries",
        "question": "A subquery used with IN must return:",
        "options": [
          "Exactly one row",
          "A whole table with all columns",
          "No rows",
          "A single column of values"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "IN compares a value against a set, so the subquery returns one column; a scalar subquery returns one value.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Triggers",
        "question": "A database trigger is a block of code that:",
        "options": [
          "Fires automatically on a specified event",
          "Runs only when called by a user",
          "Replaces all constraints",
          "Stores the query plan"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A trigger is attached to an event such as INSERT or UPDATE and fires automatically, unlike a stored procedure.",
        "source": "syllabus"
      },
      {
        "id": "DBMS-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "NULL semantics",
        "question": "In SQL, the comparison NULL = NULL evaluates to:",
        "options": [
          "TRUE",
          "UNKNOWN",
          "FALSE",
          "0"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "NULL means unknown, so equality with NULL yields UNKNOWN; use IS NULL to test for a null value.",
        "source": "syllabus"
      }
    ],
    "SE": [
      {
        "id": "SE-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Waterfall Strengths",
        "question": "The Classical Waterfall model is best suited for projects where:",
        "options": [
          "Requirements change every week",
          "Requirements are completely clear, stable, and well-understood upfront",
          "Prototypes must be demonstrated immediately",
          "The team has never used the programming language"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Waterfall works well for stable projects where requirements are locked in stone and changes are minimal."
      },
      {
        "id": "SE-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Waterfall vs Agile",
        "question": "Which software process model is most appropriate when requirements are highly dynamic, ambiguous, and rapidly evolving?",
        "options": [
          "Cleanroom Engineering",
          "V-Model",
          "Agile / Scrum Model",
          "Classical Waterfall Model"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Agile welcomes changing requirements through short iterative sprints, continuous customer feedback, and adaptive planning."
      },
      {
        "id": "SE-SEM-037",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Software characteristics",
        "question": "Which property distinguishes software from hardware?",
        "options": [
          "Software is engineered, not manufactured",
          "Software wears out physically",
          "Software cannot be modified",
          "Software has no lifecycle"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Software is developed and maintained rather than manufactured; it does not wear out physically, though it deteriorates as changes accumulate.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-038",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Software myths",
        "question": "Which statement is a management myth about software?",
        "options": [
          "Requirements change",
          "Adding people to a late project always speeds it up",
          "Testing takes time",
          "Maintenance costs money"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Brooks's law says adding people to a late project can slow it further because of communication and ramp-up overhead.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Layered technology",
        "question": "The four layers of software engineering are:",
        "options": [
          "Requirements, design, code, test",
          "People, product, process, project",
          "Tools, methods, process, quality focus",
          "Plan, do, check, act"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Software engineering is layered on a quality focus, with process, methods and tools above it.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Umbrella activities",
        "question": "Which of the following is an umbrella activity in a software process?",
        "options": [
          "Coding",
          "Unit testing",
          "Requirements gathering",
          "Software configuration management"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Umbrella activities such as configuration management, quality assurance and risk management run across the whole process.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "CMMI",
        "question": "How many maturity levels does CMMI define?",
        "options": [
          "5",
          "3",
          "4",
          "6"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "CMMI has five levels: initial, managed, defined, quantitatively managed and optimizing.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Waterfall model",
        "question": "The main weakness of the waterfall model is that it:",
        "options": [
          "Has no documentation",
          "Makes late changes expensive",
          "Cannot handle small projects",
          "Requires no customer input"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Waterfall freezes requirements early, so a change discovered late forces rework of completed phases.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Spiral model",
        "question": "The spiral model is particularly suitable when:",
        "options": [
          "Requirements are stable and complete",
          "The project is very small",
          "Risk is high and requirements evolve",
          "No prototyping is allowed"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Each spiral loop includes risk analysis and a prototype, so the model suits large, risky projects with changing requirements.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Incremental model",
        "question": "In incremental development, the system is:",
        "options": [
          "Delivered once at the end",
          "Never tested",
          "Documented only after release",
          "Built and delivered in usable increments"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Each increment adds usable functionality, so the customer gets working software earlier and feedback shapes later increments.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-045",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Agile",
        "question": "Which value is central to the Agile Manifesto?",
        "options": [
          "Responding to change over following a plan",
          "Comprehensive documentation over working software",
          "Contract negotiation over customer collaboration",
          "Processes over individuals"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Agile values working software, customer collaboration and response to change over their heavier-weight counterparts.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-072",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "CMMI level 5",
        "question": "In CMMI, an organisation at maturity Level 5 is described as:",
        "options": [
          "Initial",
          "Managed",
          "Defined",
          "Optimising"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Level 5 is the Optimising level, where the organisation continuously improves its processes using quantitative feedback and innovation.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Spiral Model Risk",
        "question": "The defining core feature of Boehm's Spiral Model that sets it apart from other lifecycle models is explicit _______ analysis.",
        "accepted": [
          "risk",
          "risk management",
          "risk analysis"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Every loop of the Spiral Model begins with objective identification and is governed by explicit risk analysis and prototyping."
      },
      {
        "id": "SE-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Functional vs Non-Functional",
        "question": "Which of the following is an example of a Non-Functional Requirement (NFR)?",
        "options": [
          "The user can search products by title",
          "The system calculates GST tax on invoices",
          "The admin can generate monthly sales reports",
          "The system must process 1,000 transactions per second with 99.99% uptime"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Non-functional requirements specify quality attributes, constraints, performance, scalability, and security rather than specific behaviors."
      },
      {
        "id": "SE-SEM-046",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Functional requirements",
        "question": "A functional requirement describes:",
        "options": [
          "A quality attribute such as response time",
          "A service or behaviour the system must provide",
          "A hardware constraint",
          "A project budget"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Functional requirements state what the system does; non-functional requirements constrain qualities such as performance or security.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Non-functional requirements",
        "question": "Which is a non-functional requirement?",
        "options": [
          "The system shall print a receipt",
          "The system shall store student records",
          "The system shall respond within 2 seconds",
          "The system shall allow login"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Response time is a quality constraint, so it is non-functional; the other options describe services.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "SRS characteristics",
        "question": "Which property is essential in a good SRS?",
        "options": [
          "Ambiguity",
          "Redundancy",
          "Informality",
          "Verifiability"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Each requirement must be testable, so verifiability is essential; ambiguity and redundancy are defects.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Requirements elicitation",
        "question": "Which technique is used to understand how users actually perform their work?",
        "options": [
          "Ethnography",
          "Cyclomatic analysis",
          "Regression testing",
          "Configuration audit"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "Ethnography observes users in their real environment, revealing tacit work practices that interviews may miss.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Requirements validation",
        "question": "Requirements validation asks:",
        "options": [
          "Are we building the product right?",
          "Are we building the right product?",
          "Is the code efficient?",
          "Is the team large enough?"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Validation checks that the requirements reflect what the customer needs; verification checks conformance to specification.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Requirements management",
        "question": "Requirements traceability helps to:",
        "options": [
          "Compile the code",
          "Measure CPU usage",
          "Link requirements to design, code and tests",
          "Replace version control"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Traceability shows where each requirement is realised and tested, which supports impact analysis when it changes.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Feasibility study",
        "question": "Which feasibility is concerned with whether the project can be built with current technology?",
        "options": [
          "Economic feasibility",
          "Legal feasibility",
          "Schedule feasibility",
          "Technical feasibility"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Technical feasibility checks available technology and skills; economic feasibility checks cost versus benefit.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-053",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "User vs system requirements",
        "question": "System requirements are:",
        "options": [
          "Detailed descriptions of what the system must do",
          "Written for end users in plain language",
          "The same as user requirements",
          "Only non-functional"
        ],
        "answerIndex": 0,
        "difficulty": "medium",
        "explanation": "User requirements are high-level statements for customers; system requirements expand them into detailed, precise specifications.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-073",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Requirements traceability",
        "question": "A requirements traceability matrix is used mainly to:",
        "options": [
          "link requirements to design, code and tests",
          "estimate the project budget",
          "schedule staff holidays",
          "design the user interface"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "A traceability matrix records links from each requirement to design elements, implementation and test cases, supporting impact analysis and coverage checks.",
        "source": "syllabus"
      },
      {
        "id": "SE-M1-002",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "UML Use Case",
        "question": "In a UML Use Case diagram, external entities that interact with the system are called _______.",
        "accepted": [
          "actors",
          "actor"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Actors represent humans, external software, or hardware systems initiating or receiving use case actions."
      },
      {
        "id": "SE-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
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
        "id": "SE-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Architectural Styles",
        "question": "Which software architectural style organizes subsystems into layers, where each layer provides services only to the layer above it?",
        "options": [
          "Pipe-and-Filter Architecture",
          "Blackboard Architecture",
          "Layered (Multitier) Architecture",
          "Event-Driven Architecture"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "In layered architecture (e.g. presentation, business logic, data access), dependencies flow strictly top-to-bottom."
      },
      {
        "id": "SE-SEM-054",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Cohesion",
        "question": "Which type of cohesion is the most desirable?",
        "options": [
          "Coincidental",
          "Functional",
          "Logical",
          "Temporal"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Functional cohesion means every part of a module contributes to one well-defined task, the strongest form.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-055",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Coupling",
        "question": "Which type of coupling is the least desirable?",
        "options": [
          "Data coupling",
          "Stamp coupling",
          "Content coupling",
          "Control coupling"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Content coupling lets one module modify another's internals, the tightest and most fragile form.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-056",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Design model",
        "question": "The design model typically includes:",
        "options": [
          "Only the source code",
          "Only test cases",
          "Only the project schedule",
          "Data, architectural, interface and component designs"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "The design model covers data design, architectural design, interface design and component-level design.",
        "source": "syllabus"
      },
      {
        "id": "SE-SEM-057",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Architectural styles",
        "question": "A layered architecture organises a system as:",
        "options": [
          "A hierarchy where each layer uses the one below",
          "Independent peer modules",
          "A single monolithic module",
          "A shared global state"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Each layer provides services to the layer above and consumes services from the layer below, hiding lower-level details.",
        "source": "syllabus"
      }
    ],
    "ES": [
      {
        "id": "ES-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Ecosystem Trophic Levels",
        "question": "In a terrestrial ecosystem, green plants and phytoplankton occupy which trophic level?",
        "options": [
          "Secondary Consumers",
          "Decomposers",
          "Primary Producers (First Trophic Level)",
          "Primary Consumers"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Autotrophic primary producers capture solar radiation via photosynthesis and form the base first trophic level."
      },
      {
        "id": "ES-SEM-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Energy flow",
        "question": "In a food chain, the amount of energy transferred from one trophic level to the next is roughly:",
        "options": [
          "1%",
          "50%",
          "10%",
          "90%"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "About 90% of energy is lost as heat and in waste, so roughly 10% passes to the next trophic level."
      },
      {
        "id": "ES-SEM-037",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Ecosystem definition",
        "question": "An ecosystem is best defined as:",
        "options": [
          "A community of organisms interacting with their physical environment",
          "A group of organisms of one species",
          "Only the non-living part of an environment",
          "A single food chain"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "An ecosystem includes the biotic community and the abiotic environment interacting as a functional unit.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-038",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Biotic and abiotic components",
        "question": "Which of the following is an abiotic component of an ecosystem?",
        "options": [
          "Bacteria",
          "Soil minerals",
          "Fungi",
          "Grass"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Soil minerals are non-living; bacteria, fungi and grass are biotic components.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-039",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Food chain",
        "question": "In a grazing food chain, the producer is:",
        "options": [
          "A herbivore",
          "A carnivore",
          "A green plant",
          "A decomposer"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Green plants fix sunlight by photosynthesis and form the first trophic level of a grazing food chain.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-040",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Energy flow",
        "question": "Energy flow in an ecosystem is:",
        "options": [
          "Cyclic",
          "Reversible",
          "Random",
          "Unidirectional"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "Energy enters as sunlight and is lost as heat at each step, so it flows one way rather than cycling.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-041",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Nitrogen cycle",
        "question": "The conversion of atmospheric nitrogen into ammonia by bacteria is called:",
        "options": [
          "Nitrogen fixation",
          "Nitrification",
          "Denitrification",
          "Ammonification"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Nitrogen fixation converts inert N2 into usable ammonia; nitrification then converts ammonia to nitrite and nitrate.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-042",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Bioaccumulation",
        "question": "Bioaccumulation refers to:",
        "options": [
          "The increase of a pollutant along a food chain",
          "The buildup of a pollutant within a single organism",
          "The breakdown of a pollutant by microbes",
          "The movement of a pollutant through soil"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Bioaccumulation is buildup within one organism; biomagnification is the increase in concentration at higher trophic levels.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-043",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Biomagnification",
        "question": "Biomagnification is most likely for a pollutant that is:",
        "options": [
          "Water-soluble and easily excreted",
          "Rapidly biodegradable",
          "Fat-soluble and slowly metabolised",
          "A harmless nutrient"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Fat-soluble, persistent substances such as DDT and mercury accumulate in tissue and concentrate up the food chain.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-044",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Ecosystem function",
        "question": "Which process returns nitrogen to the atmosphere?",
        "options": [
          "Nitrification",
          "Nitrogen fixation",
          "Assimilation",
          "Denitrification"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Denitrifying bacteria convert nitrates back to N2 gas, closing the nitrogen cycle.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-071",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Energy transfer",
        "question": "Producers capture 10,000 kcal. If each trophic level transfers 10% of its energy, how much reaches the secondary consumers?",
        "options": [
          "1,000 kcal",
          "10 kcal",
          "100 kcal",
          "1 kcal"
        ],
        "answerIndex": 2,
        "difficulty": "hard",
        "explanation": "Primary consumers receive $10,000\\times0.10=1,000$ kcal; secondary consumers receive $1,000\\times0.10=100$ kcal.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-002",
        "type": "fib",
        "unit": 1,
        "scope": "mid1",
        "topic": "Biodiversity Hotspots",
        "question": "To qualify as a global Biodiversity Hotspot, an area must contain at least 1,500 endemic vascular plant species and have lost at least _______% of its primary habitat.",
        "accepted": [
          "70",
          "70%"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Norman Myers' criteria require $\\ge 1,500$ endemic plant species and $\\ge 70\\%$ habitat loss."
      },
      {
        "id": "ES-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "BOD in Water Pollution",
        "question": "A high Biochemical Oxygen Demand (BOD) value in a freshwater stream indicates:",
        "options": [
          "Excessive groundwater percolation",
          "High dissolved mineral salt concentration",
          "Clean, pristine drinking water",
          "Heavy organic pollution and severe depletion of dissolved oxygen"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "BOD measures the amount of oxygen required by aerobic microbes to oxidize organic waste; high BOD means heavy organic contamination that suffocates aquatic life."
      },
      {
        "id": "ES-SEM-045",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Resource classification",
        "question": "Which is a non-renewable resource?",
        "options": [
          "Coal",
          "Solar energy",
          "Wind energy",
          "Biomass"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Coal forms over millions of years and is consumed faster than it is replenished, so it is non-renewable.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-046",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Renewable energy",
        "question": "Which renewable source still releases soot and carbon dioxide when burned?",
        "options": [
          "Solar",
          "Biomass",
          "Wind",
          "Geothermal"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Biomass regrows, but burning it releases particulate matter and carbon dioxide.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-047",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Dams",
        "question": "A major social problem caused by large dams is:",
        "options": [
          "Increased rainfall",
          "Reduced siltation",
          "Displacement of local communities",
          "Lower water tables"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Large reservoirs submerge land and displace people, alongside ecological and siltation problems.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-048",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Mining impacts",
        "question": "Acid mine drainage is caused by:",
        "options": [
          "Excess organic farming",
          "Volcanic ash",
          "Ocean currents",
          "Rainwater reacting with exposed sulphide minerals"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Water and oxygen react with sulphide minerals such as pyrite to form sulphuric acid, which acidifies streams.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-049",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Deforestation",
        "question": "Deforestation commonly leads to:",
        "options": [
          "Increased soil erosion",
          "Higher groundwater recharge",
          "Lower atmospheric carbon",
          "Greater biodiversity"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Tree roots bind soil; removing them increases runoff and erosion and reduces infiltration.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-050",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Water resources",
        "question": "Over-extraction of groundwater can cause:",
        "options": [
          "Increased aquifer recharge",
          "Land subsidence",
          "Higher rainfall",
          "Reduced salinity"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Removing water from pore spaces compacts the aquifer, causing the land surface to sink.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-051",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Energy resources",
        "question": "Which is a secondary energy source?",
        "options": [
          "Coal",
          "Sunlight",
          "Electricity",
          "Wind"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Electricity is produced by converting primary sources such as coal, wind or sunlight.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-052",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Forest resources",
        "question": "Which forest function is lost first when a watershed is deforested?",
        "options": [
          "Timber production",
          "Tourism",
          "Carbon storage",
          "Soil and water retention"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Without vegetation cover, the watershed loses its ability to intercept rain and hold soil, increasing floods and erosion.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-072",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Groundwater conservation",
        "question": "Which agricultural practice most directly reduces groundwater depletion?",
        "options": [
          "Flood irrigation",
          "Clearing forests for farmland",
          "Drilling more deep borewells",
          "Drip irrigation"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Drip irrigation delivers water directly to plant roots and reduces evaporation and seepage losses compared with flood irrigation.",
        "source": "syllabus"
      },
      {
        "id": "ES-M1-002",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Renewable Energy",
        "question": "Solar, wind, geothermal, and tidal energies are classified as _______ energy resources.",
        "accepted": [
          "renewable"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Renewable resources regenerate naturally over human timescales without depleting."
      },
      {
        "id": "ES-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
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
        "id": "ES-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Value of biodiversity",
        "question": "The value of biodiversity that reflects the willingness to preserve species for future generations is called:",
        "options": [
          "Consumptive value",
          "Productive value",
          "Aesthetic value",
          "Option value"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Option value is the potential future use or existence value kept open for later generations."
      },
      {
        "id": "ES-SEM-053",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Biodiversity levels",
        "question": "The three levels of biodiversity are:",
        "options": [
          "Genetic, species and ecosystem",
          "Local, regional and global",
          "Plant, animal and microbial",
          "Terrestrial, aquatic and aerial"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Biodiversity is studied at genetic, species and ecosystem levels, from variation within a species to whole habitats.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-054",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Genetic diversity",
        "question": "Genetic diversity is important because it:",
        "options": [
          "Makes all individuals identical",
          "Helps populations adapt to changing conditions",
          "Reduces reproduction",
          "Eliminates rare alleles"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "Variation in alleles gives a population the raw material to adapt to disease, climate and other changes.",
        "source": "syllabus"
      },
      {
        "id": "ES-SEM-055",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Value of biodiversity",
        "question": "The value assigned to a species because people simply value its existence is:",
        "options": [
          "Consumptive use value",
          "Productive use value",
          "Existence value",
          "Option value"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Existence value is the benefit people derive from knowing a species exists, independent of any use.",
        "source": "syllabus"
      }
    ],
    "IE": [
      {
        "id": "IE-M1-001",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Entrepreneurial Traits",
        "question": "Which psychological characteristic is most strongly associated with successful entrepreneurs (David McClelland)?",
        "options": [
          "Avoidance of customer communication",
          "Aversion to all financial risk",
          "High Need for Achievement (nAch) and Calculated Risk-Taking",
          "Desire for routine repetitive tasks"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "McClelland's empirical research identifies high Need for Achievement (nAch), internal locus of control, and calculated risk-taking as primary entrepreneurial traits."
      },
      {
        "id": "IE-SEM-005",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Innovation versus invention",
        "question": "Innovation is best distinguished from invention because innovation:",
        "options": [
          "applies a new idea to create value in the market",
          "creates a new idea or device for the first time",
          "is limited to scientific laboratories",
          "always requires a patent"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Invention is the first creation of an idea or device; innovation turns that idea into a useful product, process or service that creates value.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-006",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Incremental innovation",
        "question": "A company improves an existing smartphone by adding a better camera and a faster processor. This is an example of:",
        "options": [
          "radical innovation",
          "incremental innovation",
          "disruptive innovation",
          "architectural innovation"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Incremental innovation improves existing products along established performance dimensions; it does not create a new market or technology trajectory.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-007",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Disruptive innovation",
        "question": "Disruptive innovation typically begins by:",
        "options": [
          "serving the most demanding customers with premium features",
          "replacing all existing products in a single launch",
          "targeting overlooked or low-end customers with a simpler, cheaper offer",
          "focusing only on government contracts"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Disruptive innovations start in overlooked or low-end segments, then improve until they challenge established firms from below.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-008",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Service innovation",
        "question": "Which characteristic is more typical of service innovation than manufacturing innovation?",
        "options": [
          "Large inventories of finished goods",
          "Mass production on an assembly line",
          "Long physical distribution chains",
          "Close customer participation in delivery"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Services are often produced and consumed together, so customers participate in delivery; manufacturing innovation usually focuses on physical products and processes.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-009",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Culture of innovation",
        "question": "Which practice best helps an organisation build a culture of innovation?",
        "options": [
          "Encouraging experimentation and tolerating well-reasoned failure",
          "Punishing every failed experiment",
          "Rewarding only routine compliance",
          "Centralising all decisions with one manager"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "A culture of innovation supports experimentation, psychological safety and learning from failure, rather than punishing every unsuccessful attempt.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-010",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "Intrapreneur",
        "question": "An employee who develops and champions a new venture inside an existing company is called an:",
        "options": [
          "angel investor",
          "intrapreneur",
          "franchisee",
          "auditor"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "explanation": "An intrapreneur acts like an entrepreneur within an organisation, using its resources to develop new products or ventures.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-011",
        "type": "mcq",
        "unit": 1,
        "scope": "mid1",
        "topic": "On-campus startups",
        "question": "Which statement best describes the importance of on-campus startups?",
        "options": [
          "They replace all classroom learning",
          "They guarantee immediate venture funding",
          "They let students test entrepreneurial ideas with low initial risk and mentorship",
          "They are restricted to engineering students"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "On-campus startups give students a low-risk setting to validate ideas, build teams and access mentors before entering the market.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-001",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Design thinking stages",
        "question": "What are the five stages of the design thinking process?",
        "options": [
          "Plan, Code, Test, Deploy, Maintain",
          "Attract, Engage, Convert, Retain, Delight",
          "Empathize, Define, Ideate, Prototype, Test",
          "Discover, Fund, File, Sell, Exit"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Design thinking moves from empathising with users to defining the problem, ideating solutions, prototyping and testing them."
      },
      {
        "id": "IE-SEM-003",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Problem-customer fit",
        "question": "Which activity is the most direct way to validate problem-customer fit?",
        "options": [
          "Writing more code before talking to users",
          "Designing a logo and choosing office space",
          "Registering the company before testing demand",
          "Interviewing target customers about the problem and current alternatives"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Direct customer interviews reveal whether the problem is real, urgent and currently solved poorly, which is the core evidence for problem-customer fit."
      },
      {
        "id": "IE-SEM-012",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Problem gap",
        "question": "In opportunity identification, a gap refers to:",
        "options": [
          "a legal defect in a company's registration",
          "the difference between two financial statements",
          "a missing section in a business plan",
          "an unmet customer need or inefficient way of serving a market"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "A gap is an unmet need, underserved segment or inefficient solution that creates room for a new product or service.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-013",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Demographic segmentation",
        "question": "Dividing a market by age, income and occupation is called:",
        "options": [
          "demographic segmentation",
          "geographic segmentation",
          "psychographic segmentation",
          "behavioural segmentation"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Demographic segmentation uses measurable population characteristics such as age, income, gender and occupation.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-014",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Problem-customer fit",
        "question": "Problem-customer fit is validated when:",
        "options": [
          "the founders finish writing code",
          "customers confirm that the problem is important and the proposed solution addresses it",
          "the startup registers a company",
          "the product has the most features in the market"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Problem-customer fit exists when real customers recognise the problem as significant and accept that the proposed solution addresses it.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-015",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Competitor and trend mapping",
        "question": "Mapping competitors and industry trends helps an entrepreneur to:",
        "options": [
          "avoid talking to customers",
          "guarantee that no competitor will enter",
          "identify gaps, benchmark offerings and anticipate market shifts",
          "set product prices without cost data"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "explanation": "Competitor and trend mapping reveals gaps, relative strengths and likely market changes, informing the opportunity assessment.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-016",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Porter five forces",
        "question": "In Porter's Five Forces model, the threat of substitutes refers to:",
        "options": [
          "new firms entering the same industry",
          "the bargaining power of suppliers",
          "rivalry among existing firms",
          "alternative products that can satisfy the same customer need"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "explanation": "Substitutes are different products or services that meet the same need, limiting the price a firm can charge.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-017",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "Brainstorming",
        "question": "Which rule is most important in a brainstorming session?",
        "options": [
          "Encourage many ideas and defer judgement",
          "Criticise ideas immediately",
          "Allow only senior managers to speak",
          "Record only fully developed plans"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "explanation": "Brainstorming separates idea generation from evaluation, encouraging quantity and free association before ideas are screened.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-018",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "SCAMPER",
        "question": "SCAMPER is an ideation technique that prompts users to:",
        "options": [
          "survey, calculate, analyse, measure, predict, evaluate and report",
          "substitute, combine, adapt, modify, put to other use, eliminate and reverse",
          "select, compare, assess, monitor, plan, execute and review",
          "start, communicate, automate, manage, produce, evaluate and recycle"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "SCAMPER uses seven prompts - Substitute, Combine, Adapt, Modify, Put to another use, Eliminate and Reverse - to generate variations.",
        "source": "syllabus"
      },
      {
        "id": "IE-M1-002",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Design Thinking Empathy",
        "question": "The first phase of the Design Thinking process, where founders conduct interviews to understand user pains, is _______.",
        "accepted": [
          "empathize",
          "empathy"
        ],
        "difficulty": "easy",
        "source": "syllabus",
        "explanation": "Empathize immerses designers in the user's emotional and operational context to uncover latent needs."
      },
      {
        "id": "IE-SEM-004",
        "type": "fib",
        "unit": 2,
        "scope": "mid1",
        "topic": "Iterating problem-customer fit",
        "question": "After customer interviews show that the original pain point is not urgent, the team should revise the problem _______ and target segment.",
        "accepted": [
          "statement",
          "definition"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "Iteration means updating the problem statement and segment until the evidence shows a real, prioritised customer need."
      },
      {
        "id": "IE-SEM-019",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Global competitor mapping",
        "question": "Global competitor mapping primarily helps a startup to:",
        "options": [
          "ignore local customer needs",
          "avoid product differentiation",
          "understand worldwide players, their offerings and competitive gaps",
          "reduce its legal registration work"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "explanation": "Mapping global competitors shows who else solves the problem, how they position themselves and where a new venture can differentiate.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-020",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "SAM",
        "question": "In market sizing, SAM stands for:",
        "options": [
          "Strategic Addressable Market",
          "Sales and Marketing",
          "Segment Analysis Matrix",
          "Serviceable Available Market"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "explanation": "SAM is the Serviceable Available Market: the part of the total market that fits the startup's offer and reach.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-021",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "TAM SAM SOM calculation",
        "question": "A city has 500,000 households. If 40% own pets and the startup's service can reach 25% of pet-owning households, the SAM is:",
        "options": [
          "50,000 households",
          "125,000 households",
          "200,000 households",
          "500,000 households"
        ],
        "answerIndex": 0,
        "difficulty": "hard",
        "explanation": "Pet-owning households = 500,000 × 0.40 = 200,000. The serviceable share is 200,000 × 0.25 = 50,000.",
        "source": "syllabus"
      },
      {
        "id": "IE-SEM-022",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Opportunity scale",
        "question": "Assessing the potential scale of an opportunity mainly means estimating:",
        "options": [
          "the founder's personal savings",
          "how large the venture can grow if the model succeeds",
          "the number of employees in the first week",
          "the legal fees for registration"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "explanation": "Scale assessment estimates the size and reach the venture could achieve, helping decide whether the opportunity is worth pursuing.",
        "source": "syllabus"
      },
      {
        "id": "IE-M2-004",
        "type": "fib",
        "unit": 3,
        "scope": "mid1",
        "topic": "SOM",
        "question": "The portion of the serviceable market that a startup can realistically win is called the _______.",
        "accepted": [
          "SOM",
          "serviceable obtainable market"
        ],
        "difficulty": "medium",
        "source": "syllabus",
        "explanation": "SOM is the serviceable obtainable market: the share the venture can realistically capture given competition and resources."
      }
    ]
  },
  "flashcards": {
    "DM": [
      {
        "id": "FC-M1-DM-01",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Tautology vs Contradiction",
        "highYield": true,
        "front": "What is the difference between a Tautology and a Contradiction?",
        "back": "ΓÇó Tautology: Always TRUE under every truth assignment (e.g., $p \\lor \\neg p$).\nΓÇó Contradiction: Always FALSE under every truth assignment (e.g., $p \\land \\neg p$)."
      },
      {
        "id": "FC-M1-DM-02",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Modus Ponens vs Modus Tollens",
        "highYield": true,
        "front": "State the inference rules for Modus Ponens and Modus Tollens.",
        "back": "ΓÇó Modus Ponens: From $p$ and $p \\to q$, conclude $q$.\nΓÇó Modus Tollens: From $\\neg q$ and $p \\to q$, conclude $\\neg p$."
      },
      {
        "id": "FC-M1-DM-03",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Principal Normal Forms (PCNF & PDNF)",
        "highYield": true,
        "front": "What are PDNF and PCNF in propositional logic?",
        "back": "ΓÇó PDNF (Disjunctive): Sum of minterms where formula evaluates to TRUE.\nΓÇó PCNF (Conjunctive): Product of maxterms where formula evaluates to FALSE."
      },
      {
        "id": "FC-M1-DM-04",
        "subjectId": "DM",
        "unit": 1,
        "topic": "De Morgan's Laws",
        "highYield": true,
        "front": "State De Morgan's Laws for logic and sets.",
        "back": "ΓÇó $\\neg (p \\land q) \\equiv \\neg p \\lor \\neg q$\nΓÇó $\\neg (p \\lor q) \\equiv \\neg p \\land \\neg q$\nΓÇó Sets: $(A \\cap B)' = A' \\cup B'$ and $(A \\cup B)' = A' \\cap B'$."
      },
      {
        "id": "FC-M1-DM-05",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Universal vs Existential Quantifiers",
        "highYield": true,
        "front": "How do negations of quantifiers work?",
        "back": "ΓÇó $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$\nΓÇó $\\neg(\\exists x P(x)) \\equiv \\forall x \\neg P(x)$"
      },
      {
        "id": "FC-SEM-DM-23",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Proposition",
        "highYield": true,
        "front": "What makes a sentence a proposition?",
        "back": "It declares a statement that is either true or false, but not both. Questions, commands and exclamations are not propositions.\nKeywords: statement, truth value, declarative"
      },
      {
        "id": "FC-SEM-DM-24",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Connectives",
        "highYield": true,
        "front": "When is a conjunction true, and when is a disjunction false?",
        "back": "Conjunction $p \\land q$ is true only when both parts are true. Disjunction $p \\lor q$ is false only when both parts are false.\nKeywords: conjunction, disjunction, truth conditions"
      },
      {
        "id": "FC-SEM-DM-25",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Tautology and contradiction",
        "highYield": true,
        "front": "Define tautology, contradiction and contingency.",
        "back": "Tautology: true under every assignment. Contradiction: false under every assignment. Contingency: true for some assignments and false for others.\nKeywords: tautology, contradiction, contingency"
      },
      {
        "id": "FC-SEM-DM-26",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Logical equivalence laws",
        "highYield": true,
        "front": "State De Morgan's laws and the distributive laws.",
        "back": "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$.\n$p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$; the dual holds for $\\lor$ over $\\land$.\nKeywords: De Morgan, distributive, equivalence"
      },
      {
        "id": "FC-SEM-DM-27",
        "subjectId": "DM",
        "unit": 1,
        "topic": "PDNF and PCNF",
        "highYield": true,
        "front": "How do you obtain PDNF and PCNF from a truth table?",
        "back": "PDNF: OR the minterms whose rows have value 1. PCNF: AND the maxterms whose rows have value 0.\nKeywords: PDNF, PCNF, minterm, maxterm"
      },
      {
        "id": "FC-SEM-DM-28",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Modus ponens and tollens",
        "highYield": true,
        "front": "State modus ponens and modus tollens.",
        "back": "Modus ponens: $p \\to q$, $p$ therefore $q$. Modus tollens: $p \\to q$, $\\neg q$ therefore $\\neg p$.\nKeywords: modus ponens, modus tollens, inference"
      },
      {
        "id": "FC-SEM-DM-29",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Quantifiers",
        "highYield": false,
        "front": "How do you negate a universally quantified statement?",
        "back": "$\\neg\\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$. Likewise $\\neg\\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)$.\nKeywords: universal, existential, negation, quantifier"
      },
      {
        "id": "FC-SEM-DM-30",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Validity of arguments",
        "highYield": true,
        "front": "What does it mean for an argument to be valid?",
        "back": "The conclusion must be true whenever all premises are true. Validity concerns form, not the actual truth of the premises.\nKeywords: validity, premises, conclusion, inference"
      },
      {
        "id": "FC-SEM-DM-U1",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Logical Equivalence Laws",
        "highYield": true,
        "front": "State De Morgan's and Contrapositive Laws.",
        "back": "ΓÇó De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$; $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$.\nΓÇó Contrapositive: $p \\to q \\equiv \\neg q \\to \\neg p$."
      },
      {
        "id": "FC-M1-DM-06",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Equivalence Relation Properties",
        "highYield": true,
        "front": "What three properties define an Equivalence Relation?",
        "back": "1. Reflexive: $(a, a) \\in R$ for all $a \\in A$.\n2. Symmetric: $(a, b) \\in R \\implies (b, a) \\in R$.\n3. Transitive: $(a, b), (b, c) \\in R \\implies (a, c) \\in R$."
      },
      {
        "id": "FC-M1-DM-07",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Partial Order (Poset)",
        "highYield": true,
        "front": "What three properties define a Partial Order Relation (Poset)?",
        "back": "1. Reflexive: $(a, a) \\in R$.\n2. Anti-symmetric: $(a, b) \\in R$ and $(b, a) \\in R \\implies a = b$.\n3. Transitive: $(a, b), (b, c) \\in R \\implies (a, c) \\in R$."
      },
      {
        "id": "FC-M1-DM-08",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Hasse Diagram Rules",
        "highYield": true,
        "front": "How is a Hasse Diagram constructed from a Poset?",
        "back": "ΓÇó Omit all self-loops (reflexivity implied).\nΓÇó Omit all transitive edges (transitivity implied).\nΓÇó Draw edges pointing upwards so direction is implicit."
      },
      {
        "id": "FC-M1-DM-09",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Lattice Definition",
        "highYield": true,
        "front": "What is a Lattice in discrete mathematics?",
        "back": "A Poset $(L, \\le)$ where every pair of elements $a, b \\in L$ has:\nΓÇó Least Upper Bound: $a \\lor b$ (LUB / Join)\nΓÇó Greatest Lower Bound: $a \\land b$ (GLB / Meet)."
      },
      {
        "id": "FC-M1-DM-10",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Principle of Inclusion-Exclusion",
        "highYield": true,
        "front": "State the Principle of Inclusion-Exclusion for 2 and 3 sets.",
        "back": "ΓÇó $|A \\cup B| = |A| + |B| - |A \\cap B|$\nΓÇó $|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |A \\cap C|) + |A \\cap B \\cap C|$."
      },
      {
        "id": "FC-SEM-DM-31",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Set operations",
        "highYield": true,
        "front": "Define union, intersection, difference and complement.",
        "back": "$A \\cup B$: elements in either set. $A \\cap B$: elements in both. $A-B$: in $A$ but not $B$. $A^c$: in the universal set but not $A$.\nKeywords: union, intersection, difference, complement"
      },
      {
        "id": "FC-SEM-DM-32",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Power set",
        "highYield": true,
        "front": "How many subsets does an $n$-element set have?",
        "back": "A set with $n$ elements has $2^n$ subsets, including the empty set and the set itself. The power set is $P(A)$.\nKeywords: power set, subsets, cardinality"
      },
      {
        "id": "FC-SEM-DM-33",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Relation properties",
        "highYield": true,
        "front": "Define reflexive, symmetric and transitive relations.",
        "back": "Reflexive: $(a,a) \\in R$ for every $a$. Symmetric: $(a,b) \\in R \\Rightarrow (b,a) \\in R$. Transitive: $(a,b),(b,c) \\in R \\Rightarrow (a,c) \\in R$.\nKeywords: reflexive, symmetric, transitive, relation"
      },
      {
        "id": "FC-SEM-DM-34",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Equivalence classes",
        "highYield": true,
        "front": "How does an equivalence relation partition a set?",
        "back": "The equivalence classes are disjoint, non-empty, and their union is the whole set. Every partition defines an equivalence relation.\nKeywords: equivalence class, partition, disjoint"
      },
      {
        "id": "FC-SEM-DM-35",
        "subjectId": "DM",
        "unit": 2,
        "topic": "POSet and Hasse diagram",
        "highYield": true,
        "front": "What is a Hasse diagram and what does it omit?",
        "back": "A Hasse diagram draws a finite POSet with larger elements above smaller ones. It omits self-loops and edges implied by transitivity.\nKeywords: POSet, Hasse, partial order, transitive reduction"
      },
      {
        "id": "FC-SEM-DM-36",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Function types",
        "highYield": true,
        "front": "Distinguish injective, surjective and bijective functions.",
        "back": "Injective: distinct inputs give distinct outputs. Surjective: every codomain element is hit. Bijective: both, so an inverse function exists.\nKeywords: injective, surjective, bijective, inverse"
      },
      {
        "id": "FC-SEM-DM-37",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Warshall algorithm",
        "highYield": false,
        "front": "What does Warshall's algorithm compute and in what time?",
        "back": "It computes the transitive closure of a relation on $n$ elements in $O(n^3)$ time, using a matrix and one intermediate vertex per pass.\nKeywords: Warshall, transitive closure, matrix"
      },
      {
        "id": "FC-SEM-DM-38",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Composition of relations",
        "highYield": false,
        "front": "How is the composition $R \\circ S$ of two relations defined?",
        "back": "$(a,c) \\in R \\circ S$ when there exists $b$ with $(a,b) \\in R$ and $(b,c) \\in S$. Composition is associative but not generally commutative.\nKeywords: composition, relation, associative"
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
        "id": "FC-M1-DM-11",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Semigroup vs Monoid",
        "highYield": true,
        "front": "What distinguishes a Semigroup from a Monoid?",
        "back": "ΓÇó Semigroup $(S, *)$: Closed and Associative: $(a * b) * c = a * (b * c)$.\nΓÇó Monoid $(M, *)$: A Semigroup with an Identity element $e$ such that $a * e = e * a = a$."
      },
      {
        "id": "FC-M1-DM-12",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Group Axioms",
        "highYield": true,
        "front": "What four axioms must an algebraic system $(G, *)$ satisfy to be a Group?",
        "back": "1. Closure: $a * b \\in G$.\n2. Associativity: $(a * b) * c = a * (b * c)$.\n3. Identity: $a * e = e * a = a$.\n4. Inverse: every $a$ has $a^{-1}$ with $a * a^{-1} = e$.\nKeywords: closure, associativity, identity, inverse"
      },
      {
        "id": "FC-M1-DM-13",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Abelian Group",
        "highYield": true,
        "front": "What additional condition makes a Group an Abelian Group?",
        "back": "A group $(G, *)$ is Abelian (commutative) when $a * b = b * a$ for all $a, b \\in G$. Every cyclic group is Abelian, but the converse is false: the Klein four-group is Abelian yet not cyclic. Keywords: commutativity, cyclic group, Klein four-group."
      },
      {
        "id": "FC-M1-DM-14",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Lagrange's Theorem",
        "highYield": true,
        "front": "What is the index of a subgroup?",
        "back": "The index $[G:H]$ is the number of distinct left cosets of $H$ in $G$. For a finite group, $|G| = [G:H]\\times|H|$.\nKeywords: index, coset, Lagrange, subgroup"
      },
      {
        "id": "FC-M1-DM-15",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Cosets & Subgroups",
        "highYield": true,
        "front": "What is a Left Coset of subgroup $H$ in $G$?",
        "back": "For $a \\in G$, the left coset $aH = \\{a * h \\mid h \\in H\\}$. Any two cosets are either identical or disjoint."
      },
      {
        "id": "FC-SEM-DM-39",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Algebraic system",
        "highYield": true,
        "front": "What is an algebraic system?",
        "back": "A non-empty set with one or more finitary operations closed on that set. The operations may be binary, unary or nullary.\nKeywords: algebraic system, closure, operation"
      },
      {
        "id": "FC-SEM-DM-40",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Semigroup",
        "highYield": true,
        "front": "What is the difference between a semigroup and a monoid?",
        "back": "A semigroup needs closure and associativity. A monoid is a semigroup with a two-sided identity element.\nKeywords: semigroup, monoid, identity, associative"
      },
      {
        "id": "FC-SEM-DM-41",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Group axioms",
        "highYield": true,
        "front": "State the four group axioms.",
        "back": "Closure, associativity, existence of an identity, and an inverse for every element. A group is abelian when the operation is commutative.\nKeywords: group, closure, identity, inverse, abelian"
      },
      {
        "id": "FC-SEM-DM-42",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Homomorphism",
        "highYield": true,
        "front": "What is a homomorphism between two algebraic systems?",
        "back": "A map $f$ that preserves the operation: $f(a*b)=f(a)\\,f(b)$. A bijective homomorphism is an isomorphism.\nKeywords: homomorphism, isomorphism, operation preserving"
      }
    ],
    "COA": [
      {
        "id": "FC-M1-COA-01",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Von Neumann Architecture vs Harvard",
        "highYield": true,
        "front": "Differentiate between Von Neumann and Harvard architecture.",
        "back": "ΓÇó Von Neumann: Single shared memory & bus for both data and instructions (Von Neumann bottleneck).\nΓÇó Harvard: Separate physical memories and buses for instructions and data (simultaneous fetch & access)."
      },
      {
        "id": "FC-M1-COA-02",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Addressing Modes: Immediate vs Direct vs Indirect",
        "highYield": true,
        "front": "Compare Immediate, Direct, and Indirect addressing modes.",
        "back": "ΓÇó Immediate: Operand is part of instruction (`ADD #5`).\nΓÇó Direct: Address field gives memory address of operand (`ADD 1000`).\nΓÇó Indirect: Address field points to memory containing effective address (`ADD @1000`)."
      },
      {
        "id": "FC-M1-COA-03",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Relative & Indexed Addressing Modes",
        "highYield": true,
        "front": "How are Effective Addresses calculated in Relative and Indexed addressing?",
        "back": "ΓÇó Relative: $EA = PC + \\text{Address Field}$ (used in branch instructions).\nΓÇó Indexed: $EA = XR + \\text{Address Field}$ (used for array indexing)."
      },
      {
        "id": "FC-M1-COA-04",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Instruction Formats (3 vs 2 vs 1 vs 0 Address)",
        "highYield": true,
        "front": "How do 3, 2, 1, and 0-address machines execute arithmetic?",
        "back": "ΓÇó 3-Address: `ADD R1, R2, R3` ($R1 \\leftarrow R2 + R3$)\nΓÇó 2-Address: `ADD R1, R2` ($R1 \\leftarrow R1 + R2$)\nΓÇó 1-Address: `ADD X` ($AC \\leftarrow AC + M[X]$)\nΓÇó 0-Address: `ADD` (Pops top two stack elements, pushes sum)."
      },
      {
        "id": "FC-M1-COA-05",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Big-Endian vs Little-Endian",
        "highYield": true,
        "front": "What is the difference between Big-Endian and Little-Endian byte ordering?",
        "back": "ΓÇó Big-Endian: Most Significant Byte (MSB) stored at lowest memory address.\nΓÇó Little-Endian: Least Significant Byte (LSB) stored at lowest memory address."
      },
      {
        "id": "FC-SEM-COA-23",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Number systems",
        "highYield": true,
        "front": "Convert binary 1101 to decimal and hexadecimal.",
        "back": "1101 in decimal is $8+4+1=13$; in hexadecimal it is D.\nKeywords: binary, decimal, hexadecimal, conversion"
      },
      {
        "id": "FC-SEM-COA-24",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Complements",
        "highYield": true,
        "front": "How do you form the 2's complement of a binary number?",
        "back": "Invert every bit (1's complement), then add 1. It represents the negative of the original number.\nKeywords: 2's complement, 1's complement, negative"
      },
      {
        "id": "FC-SEM-COA-25",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Fixed-point representation",
        "highYield": true,
        "front": "What is fixed-point representation?",
        "back": "The radix point is assumed at a fixed position. Integers and fractions use separate conventions, and the range is limited by the word size.\nKeywords: fixed point, radix point, range, precision"
      },
      {
        "id": "FC-SEM-COA-26",
        "subjectId": "COA",
        "unit": 1,
        "topic": "IEEE 754 format",
        "highYield": true,
        "front": "What are the three fields of an IEEE 754 single-precision number?",
        "back": "1 sign bit, 8 exponent bits with bias 127, and 23 fraction bits. The leading 1 of the significand is implicit.\nKeywords: IEEE 754, sign, exponent, mantissa, bias"
      },
      {
        "id": "FC-SEM-COA-27",
        "subjectId": "COA",
        "unit": 1,
        "topic": "BCD and Gray code",
        "highYield": true,
        "front": "Why are BCD and Gray code used?",
        "back": "BCD maps each decimal digit to four bits for display arithmetic. Gray code changes one bit between adjacent values, reducing transition errors.\nKeywords: BCD, Gray code, decimal, adjacent"
      },
      {
        "id": "FC-SEM-COA-28",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Error detection",
        "highYield": false,
        "front": "How does a parity bit detect an error?",
        "back": "The parity bit makes the total number of 1s even or odd. A single-bit error flips the parity, so the receiver detects it.\nKeywords: parity, error detection, single bit"
      },
      {
        "id": "FC-SEM-COA-29",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Logic gates",
        "highYield": true,
        "front": "Why are NAND and NOR called universal gates?",
        "back": "Each can implement NOT, AND and OR, so any Boolean circuit can be built using only NAND gates or only NOR gates.\nKeywords: NAND, NOR, universal gate, functional completeness"
      },
      {
        "id": "FC-SEM-COA-30",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Binary storage",
        "highYield": false,
        "front": "What is a register and how does it store a bit?",
        "back": "A register is a group of flip-flops that holds a binary word. Each flip-flop stores one bit until the next clock updates it.\nKeywords: register, flip-flop, binary word, clock"
      },
      {
        "id": "FC-SEM-COA-31",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Computer organization",
        "highYield": true,
        "front": "Distinguish computer organization from computer architecture.",
        "back": "Architecture is the programmer-visible instruction set and behaviour. Organization is how the hardware implements it: buses, control, memory and timing.\nKeywords: architecture, organization, instruction set, implementation"
      },
      {
        "id": "FC-SEM-COA-U1",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Booth's Multiplication Rules",
        "highYield": true,
        "front": "State Booth's Algorithm bit-pair operations for $(Q_0, Q_{-1})$.",
        "back": "ΓÇó 00: Arithmetic Shift Right only.\nΓÇó 01: $A \\leftarrow A + M$, then Arithmetic Shift Right.\nΓÇó 10: $A \\leftarrow A - M$, then Arithmetic Shift Right.\nΓÇó 11: Arithmetic Shift Right only."
      },
      {
        "id": "FC-M1-COA-06",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Hardwired vs Microprogrammed Control Unit",
        "highYield": true,
        "front": "Compare Hardwired and Microprogrammed Control Units.",
        "back": "ΓÇó Hardwired: Combinational logic gates, faster speed, rigid and difficult to modify.\nΓÇó Microprogrammed: Microinstructions stored in Control ROM, slower due to memory access, flexible and easy to update."
      },
      {
        "id": "FC-M1-COA-07",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Control Word in Register Organization",
        "highYield": true,
        "front": "What are the components of a CPU Control Word?",
        "back": "ΓÇó SELA (3 bits): Selects Source Register A.\nΓÇó SELB (3 bits): Selects Source Register B.\nΓÇó SELD (3 bits): Selects Destination Register.\nΓÇó OPR (5 bits): Selects ALU operation."
      },
      {
        "id": "FC-M1-COA-08",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Stack Organization (Push/Pop)",
        "highYield": true,
        "front": "How do Push and Pop operations update the Stack Pointer (SP)?",
        "back": "ΓÇó Push: $SP \\leftarrow SP - 1$; $M[SP] \\leftarrow DR$ (for descending stack).\nΓÇó Pop: $DR \\leftarrow M[SP]$; $SP \\leftarrow SP + 1$."
      },
      {
        "id": "FC-SEM-COA-32",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Combinational vs sequential",
        "highYield": true,
        "front": "Distinguish combinational and sequential circuits.",
        "back": "Combinational output depends only on present inputs. Sequential output depends on present inputs and stored state, so it uses flip-flops and a clock.\nKeywords: combinational, sequential, state, clock"
      },
      {
        "id": "FC-SEM-COA-33",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Adder circuits",
        "highYield": true,
        "front": "Compare a half adder and a full adder.",
        "back": "Half adder: two inputs, no carry-in, outputs sum and carry. Full adder: three inputs including carry-in, used to chain bits into a ripple-carry adder.\nKeywords: half adder, full adder, carry, ripple"
      },
      {
        "id": "FC-SEM-COA-34",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Multiplexer and decoder",
        "highYield": true,
        "front": "What is the difference between a multiplexer and a decoder?",
        "back": "A multiplexer selects one of many inputs onto one output. A decoder takes a binary code and activates one of many outputs.\nKeywords: multiplexer, decoder, select, output"
      },
      {
        "id": "FC-SEM-COA-35",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Flip-flops",
        "highYield": true,
        "front": "Compare SR, JK, D and T flip-flops.",
        "back": "SR has set/reset but an invalid state. JK removes that invalid state. D stores the input. T toggles when T=1.\nKeywords: SR, JK, D, T, flip-flop, toggle"
      },
      {
        "id": "FC-SEM-COA-36",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Sequential design",
        "highYield": true,
        "front": "List the steps in sequential circuit design.",
        "back": "Derive the state diagram, build the state table, reduce states, assign binary codes, choose flip-flops, derive excitation and output equations, then draw the circuit.\nKeywords: state diagram, state table, reduction, assignment, excitation"
      },
      {
        "id": "FC-SEM-COA-37",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Shift registers",
        "highYield": true,
        "front": "What are the four modes of a bidirectional shift register?",
        "back": "Hold, shift left, shift right and load. Mode select inputs choose the path through the register.\nKeywords: shift register, hold, left, right, load"
      },
      {
        "id": "FC-SEM-COA-38",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Counters",
        "highYield": true,
        "front": "Distinguish ripple and synchronous counters.",
        "back": "Ripple counters clock each flip-flop from the previous output, so delays accumulate. Synchronous counters clock all flip-flops together, giving faster and glitch-free operation.\nKeywords: ripple, synchronous, clock, propagation delay"
      },
      {
        "id": "FC-SEM-COA-39",
        "subjectId": "COA",
        "unit": 2,
        "topic": "BCD adder",
        "highYield": false,
        "front": "When and why does a BCD adder add 6?",
        "back": "When the 4-bit sum exceeds 9 or a carry appears, adding 6 skips the six invalid BCD codes 1010 to 1111.\nKeywords: BCD adder, correction, invalid codes"
      },
      {
        "id": "FC-SEM-COA-40",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Comparator",
        "highYield": false,
        "front": "What does a magnitude comparator output?",
        "back": "Three signals: $A>B$, $A=B$ and $A<B$. Comparators can be cascaded for words wider than four bits.\nKeywords: comparator, greater, equal, less"
      },
      {
        "id": "FC-SEM-COA-61",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Binary multiplier",
        "highYield": false,
        "front": "How does a basic binary multiplier form partial products?",
        "back": "1. Each multiplier bit ANDs the multiplicand to form one partial product.\n2. Partial products are shifted left by the bit position.\n3. Shifted partial products are added to give the product.\n4. An n-bit multiply needs up to 2n product bits.\nKeywords: multiplicand, multiplier, partial product, shift, add"
      },
      {
        "id": "FC-SEM-COA-62",
        "subjectId": "COA",
        "unit": 2,
        "topic": "HDL for combinational circuits",
        "highYield": false,
        "front": "How is a combinational circuit described in Verilog?",
        "back": "1. Declare inputs and outputs in a module header.\n2. Use assign for continuous dataflow expressions.\n3. Use always @(*) with blocking assignments for behavioral code.\n4. Gate primitives such as and, or, not model structural designs.\nKeywords: Verilog, module, assign, always, gate-level"
      },
      {
        "id": "FC-SEM-COA-U2",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Hardwired vs Microprogrammed Control",
        "highYield": true,
        "front": "When is hardwired control preferred over microprogrammed control?",
        "back": "Hardwired control is preferred when speed and high volume matter and the instruction set is stable. Microprogrammed control is preferred when the instruction set must be flexible or complex.\nKeywords: hardwired, microprogrammed, speed, flexibility"
      },
      {
        "id": "FC-M1-COA-09",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Register Transfer Language (RTL)",
        "highYield": true,
        "front": "Explain the RTL notation: $P: R2 \\leftarrow R1$.",
        "back": "If control signal $P = 1$, the contents of register $R1$ are transferred into register $R2$ synchronized by the next clock edge."
      },
      {
        "id": "FC-M1-COA-10",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Common Bus System using Multiplexers",
        "highYield": true,
        "front": "How many multiplexers and select lines are needed to construct a common bus for 4 registers of 8 bits each?",
        "back": "ΓÇó Multiplexers needed: 8 (one per bit position).\nΓÇó MUX size: $4 \\times 1$ MUX.\nΓÇó Select lines: $\\log_2(4) = 2$ lines ($S_1, S_0$)."
      },
      {
        "id": "FC-M1-COA-11",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Three-State Bus Buffers",
        "highYield": true,
        "front": "What are the three states of a Tri-State Buffer?",
        "back": "1. Logic 0 (low impedance).\n2. Logic 1 (low impedance).\n3. High-Impedance State (Hi-Z): open circuit, effectively disconnected from the shared bus."
      },
      {
        "id": "FC-M1-COA-12",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Shift Micro-operations: Logical vs Circular vs Arithmetic",
        "highYield": true,
        "front": "Differentiate between Logical, Circular, and Arithmetic Shifts.",
        "back": "ΓÇó Logical Shift: Transfers 0 into serial input (shl/shr).\nΓÇó Circular Shift (Rotate): Bit shifted out enters opposite end (cil/cir).\nΓÇó Arithmetic Shift: Shifts signed binary number; left shift checks overflow ($V$), right shift preserves sign bit."
      },
      {
        "id": "FC-M1-COA-13",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Arithmetic Logic Shift Unit (ALSU)",
        "highYield": true,
        "front": "What operations are integrated into a single ALSU stage?",
        "back": "Arithmetic operations (Add, Sub, Inc, Dec), Logic operations (AND, OR, XOR, NOT), and Shift operations (shl, shr) selected via common function select lines ($S_3, S_2, S_1, S_0$)."
      },
      {
        "id": "FC-SEM-COA-41",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Register transfer language",
        "highYield": true,
        "front": "What is register transfer language?",
        "back": "A notation for describing data movement and operations between registers, using statements such as $R2 \\leftarrow R1$ and conditional transfers.\nKeywords: RTL, register transfer, notation, conditional"
      },
      {
        "id": "FC-SEM-COA-42",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Bus construction",
        "highYield": true,
        "front": "How is a common bus built from registers?",
        "back": "Use multiplexers to select a source, or tri-state buffers so only one register drives the bus at a time.\nKeywords: common bus, multiplexer, tri-state, source"
      },
      {
        "id": "FC-SEM-COA-43",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Arithmetic micro-operations",
        "highYield": true,
        "front": "List four arithmetic micro-operations.",
        "back": "Add, subtract, increment and decrement. Subtraction is usually implemented as addition of the 2's complement.\nKeywords: arithmetic, add, subtract, increment, decrement"
      },
      {
        "id": "FC-SEM-COA-44",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Logic micro-operations",
        "highYield": true,
        "front": "What do AND, OR and XOR masks do to a register?",
        "back": "AND clears bits where the mask is 0. OR sets bits where the mask is 1. XOR complements bits where the mask is 1.\nKeywords: logic micro-operation, mask, AND, OR, XOR"
      },
      {
        "id": "FC-SEM-COA-45",
        "subjectId": "COA",
        "unit": 3,
        "topic": "Shift micro-operations",
        "highYield": true,
        "front": "Distinguish logical and arithmetic shifts.",
        "back": "Logical shift inserts 0. Arithmetic right shift copies the sign bit, preserving the sign; arithmetic left shift behaves like logical left shift.\nKeywords: logical shift, arithmetic shift, sign bit"
      },
      {
        "id": "FC-SEM-COA-46",
        "subjectId": "COA",
        "unit": 3,
        "topic": "ALSU",
        "highYield": true,
        "front": "What does the arithmetic logic shift unit do?",
        "back": "It performs arithmetic, logic and shift operations on two operands, selected by control inputs, and produces the result plus status flags.\nKeywords: ALSU, arithmetic, logic, shift, select"
      }
    ],
    "OOPJ": [
      {
        "id": "FC-M1-OOPJ-01",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Four Core OOP Pillars",
        "highYield": true,
        "front": "Name and define the four fundamental OOP principles in Java.",
        "back": "1. Encapsulation: Binding data & methods into a class; data hiding via `private`.\n2. Inheritance: Reusability of parent attributes & methods via `extends`.\n3. Polymorphism: Same interface, different behavior (Overloading & Overriding).\n4. Abstraction: Hiding internal complexity, showing essential features (`abstract` class, `interface`)."
      },
      {
        "id": "FC-M1-OOPJ-02",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "JVM vs JRE vs JDK",
        "highYield": true,
        "front": "Distinguish between JVM, JRE, and JDK.",
        "back": "ΓÇó JVM: Abstract engine that interprets/JIT-compiles bytecode into native machine code.\nΓÇó JRE: JVM + core Java class libraries (runs Java programs).\nΓÇó JDK: JRE + development tools (`javac`, `javadoc`, debugger)."
      },
      {
        "id": "FC-M1-OOPJ-03",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Type Casting (Widening vs Narrowing)",
        "highYield": true,
        "front": "What is the difference between Widening and Narrowing conversion in Java?",
        "back": "ΓÇó Widening (Implicit): Smaller type to larger type (`int` to `double`); safe, no data loss.\nΓÇó Narrowing (Explicit): Larger type to smaller type (`double` to `int`); requires explicit cast `(int)d`, potential precision loss."
      },
      {
        "id": "FC-SEM-OOPJ-23",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "OOP principles",
        "highYield": true,
        "front": "Name the four core principles of object-oriented programming.",
        "back": "Encapsulation, abstraction, inheritance and polymorphism. Together they support modular, reusable and maintainable code.\nKeywords: encapsulation, abstraction, inheritance, polymorphism"
      },
      {
        "id": "FC-SEM-OOPJ-24",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Java buzzwords",
        "highYield": true,
        "front": "List five Java buzzwords and what each means.",
        "back": "Simple, object-oriented, platform-independent, secure, robust. Bytecode plus the JVM gives write-once-run-anywhere portability.\nKeywords: simple, object-oriented, platform independent, secure, robust"
      },
      {
        "id": "FC-SEM-OOPJ-25",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "JVM, JRE and JDK",
        "highYield": true,
        "front": "Distinguish JVM, JRE and JDK.",
        "back": "JVM executes bytecode. JRE adds the class libraries needed to run programs. JDK adds the compiler and development tools.\nKeywords: JVM, JRE, JDK, bytecode"
      },
      {
        "id": "FC-SEM-OOPJ-26",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Primitive types",
        "highYield": true,
        "front": "List the eight Java primitive types and their sizes.",
        "back": "byte 1, short 2, int 4, long 8, float 4, double 8, char 2, boolean JVM-dependent. Sizes are fixed across platforms.\nKeywords: byte, short, int, long, float, double, char, boolean"
      },
      {
        "id": "FC-SEM-OOPJ-27",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Type casting",
        "highYield": true,
        "front": "Distinguish widening and narrowing conversion.",
        "back": "Widening goes to a larger type and is automatic. Narrowing goes to a smaller type and needs an explicit cast because data may be lost.\nKeywords: widening, narrowing, cast, conversion"
      },
      {
        "id": "FC-SEM-OOPJ-28",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Constructors",
        "highYield": true,
        "front": "What is constructor overloading?",
        "back": "Declaring several constructors with different parameter lists in the same class, so objects can be created in different ways.\nKeywords: constructor, overloading, parameter list"
      },
      {
        "id": "FC-SEM-OOPJ-29",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "static",
        "highYield": true,
        "front": "What does the static keyword mean?",
        "back": "The member belongs to the class rather than to an instance. Static methods have no this reference and are shared by all objects.\nKeywords: static, class member, shared, no this"
      },
      {
        "id": "FC-SEM-OOPJ-30",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Garbage collection",
        "highYield": false,
        "front": "How does Java garbage collection work?",
        "back": "The JVM automatically reclaims objects that are no longer reachable. Programmers can suggest collection with System.gc(), but cannot force it.\nKeywords: garbage collection, reachable, JVM, System.gc"
      },
      {
        "id": "FC-SEM-OOPJ-31",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Recursion",
        "highYield": false,
        "front": "What two parts must every recursive method have?",
        "back": "A base case that stops the recursion and a recursive case that moves toward the base case. Missing either causes a stack overflow.\nKeywords: recursion, base case, recursive case, stack overflow"
      },
      {
        "id": "FC-SEM-OOPJ-63",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Nested and inner classes",
        "highYield": false,
        "front": "Distinguish static nested, inner, local, and anonymous classes.",
        "back": "1. Static nested: declared static; no outer instance needed.\n2. Inner: non-static member class; holds an outer instance.\n3. Local: declared inside a method; scope limited to that block.\n4. Anonymous: unnamed class defined and instantiated in one expression.\nKeywords: nested class, inner class, static nested, local, anonymous"
      },
      {
        "id": "FC-SEM-OOPJ-64",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "String class basics",
        "highYield": true,
        "front": "Why is a Java String immutable, and what is the string pool?",
        "back": "1. A String's character data cannot change after construction.\n2. Methods such as concat and substring return new String objects.\n3. String literals are interned in a shared pool.\n4. equals compares content; == compares references.\nKeywords: String, immutable, string pool, literal, equals"
      },
      {
        "id": "FC-SEM-OOPJ-U1",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "Method Overloading vs Overriding",
        "highYield": true,
        "front": "Differentiate Method Overloading and Method Overriding.",
        "back": "ΓÇó Overloading: Same class, same name, different parameter signature, resolved at compile-time (static).\nΓÇó Overriding: Subclass redefines inherited method with exact same signature, resolved at runtime (dynamic method dispatch)."
      },
      {
        "id": "FC-M1-OOPJ-04",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Method Overloading vs Overriding",
        "highYield": true,
        "front": "Compare Method Overloading and Method Overriding in Java.",
        "back": "ΓÇó Overloading: Same class, same name, different parameter signature; Compile-time polymorphism.\nΓÇó Overriding: Parent & Child classes, same name and identical signature; Runtime polymorphism (`@Override`)."
      },
      {
        "id": "FC-M1-OOPJ-05",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "The `this` and `super` Keywords",
        "highYield": true,
        "front": "What are the primary uses of `this` and `super` in Java?",
        "back": "ΓÇó `this`: Refers to current object instance; resolves variable shadowing (`this.x = x`) and constructor chaining (`this()`).\nΓÇó `super`: Refers to direct superclass; calls parent constructor (`super()`) and parent overridden methods (`super.show()`)."
      },
      {
        "id": "FC-M1-OOPJ-06",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Abstract Class vs Interface",
        "highYield": true,
        "front": "Key differences between Abstract Classes and Interfaces in Java (Java 8+).",
        "back": "ΓÇó Abstract Class: Can have state (instance variables) and constructors; single inheritance (`extends`).\nΓÇó Interface: Variables are `public static final`; multiple inheritance (`implements`); can have `default` & `static` methods."
      },
      {
        "id": "FC-M1-OOPJ-07",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "The `final` Keyword",
        "highYield": true,
        "front": "What happens when `final` is applied to a Variable, Method, or Class?",
        "back": "ΓÇó `final` Variable: Constant value, cannot be reassigned.\nΓÇó `final` Method: Cannot be overridden in subclasses.\nΓÇó `final` Class: Cannot be inherited (e.g., `java.lang.String`)."
      },
      {
        "id": "FC-SEM-OOPJ-32",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Inheritance",
        "highYield": true,
        "front": "What is inheritance and what is its main benefit?",
        "back": "A subclass acquires the accessible members of a superclass. It promotes reuse and substitutability but can create tight coupling.\nKeywords: inheritance, subclass, reuse, coupling"
      },
      {
        "id": "FC-SEM-OOPJ-33",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "super and final",
        "highYield": true,
        "front": "What do super and final do?",
        "back": "super calls the parent constructor or member. final prevents overriding a method, extending a class or reassigning a variable.\nKeywords: super, final, override, extend"
      },
      {
        "id": "FC-SEM-OOPJ-34",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Overloading vs overriding",
        "highYield": true,
        "front": "Compare method overloading and method overriding.",
        "back": "Overloading: same name, different parameters, compile-time choice. Overriding: same signature in a subclass, runtime choice through a superclass reference.\nKeywords: overloading, overriding, compile time, runtime"
      },
      {
        "id": "FC-SEM-OOPJ-35",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Abstract class vs interface",
        "highYield": true,
        "front": "Compare an abstract class and an interface.",
        "back": "An abstract class can hold state and concrete methods and allows single inheritance. An interface declares a contract and a class can implement several.\nKeywords: abstract class, interface, state, multiple inheritance"
      },
      {
        "id": "FC-SEM-OOPJ-36",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Access modifiers",
        "highYield": true,
        "front": "Order the four access levels from most to least open.",
        "back": "public, protected, default (package-private), private. protected also allows subclasses in other packages.\nKeywords: public, protected, default, private, access"
      },
      {
        "id": "FC-SEM-OOPJ-37",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Packages",
        "highYield": true,
        "front": "What is a package and why use one?",
        "back": "A namespace that groups related classes. It prevents name clashes, controls access and supports modular deployment.\nKeywords: package, namespace, access, modularity"
      },
      {
        "id": "FC-SEM-OOPJ-38",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Interface",
        "highYield": true,
        "front": "How does a class implement an interface?",
        "back": "Use implements in the class declaration and provide bodies for all abstract methods, or declare the class abstract.\nKeywords: interface, implements, abstract method, contract"
      },
      {
        "id": "FC-SEM-OOPJ-39",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Forms of inheritance",
        "highYield": false,
        "front": "Name three forms of inheritance.",
        "back": "Single, multilevel and hierarchical. Java also allows multiple interface inheritance but not multiple class inheritance.\nKeywords: single, multilevel, hierarchical, multiple"
      },
      {
        "id": "FC-SEM-OOPJ-U2",
        "subjectId": "OOPJ",
        "unit": 2,
        "topic": "Abstract Class vs Interface",
        "highYield": true,
        "front": "Compare Abstract Classes and Interfaces in Java 8+.",
        "back": "ΓÇó Abstract Class: Can maintain instance state/fields and constructors; single inheritance.\nΓÇó Interface: Only public static final constants; default & static methods; supports multiple inheritance."
      },
      {
        "id": "FC-M1-OOPJ-08",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Checked vs Unchecked Exceptions",
        "highYield": true,
        "front": "Distinguish between Checked and Unchecked Exceptions in Java.",
        "back": "ΓÇó Checked: Subclasses of `Exception` (excluding `RuntimeException`); verified at compile time (`IOException`, `SQLException`); must be handled or declared.\nΓÇó Unchecked: Subclasses of `RuntimeException` and `Error`; occur at runtime (`NullPointerException`, `ArrayIndexOutOfBoundsException`)."
      },
      {
        "id": "FC-M1-OOPJ-09",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "`throw` vs `throws`",
        "highYield": true,
        "front": "Compare the `throw` and `throws` keywords in Java.",
        "back": "ΓÇó `throw`: Explicitly triggers an exception instance inside a method body (`throw new ArithmeticException(\"Divide by zero\");`).\nΓÇó `throws`: Declared in method signature to indicate exceptions the method may pass to its caller (`void read() throws IOException`)."
      },
      {
        "id": "FC-M1-OOPJ-10",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "The `finally` Block Guarantee",
        "highYield": true,
        "front": "When does the `finally` block execute in Java?",
        "back": "Always executes whether an exception is thrown, caught, or unhandled, even after a `return` statement. Only bypassed if `System.exit(0)` is invoked or JVM crashes."
      },
      {
        "id": "FC-M1-OOPJ-11",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Custom User-Defined Exception",
        "highYield": true,
        "front": "How do you create a custom exception class in Java?",
        "back": "Extend `Exception` (for checked) or `RuntimeException` (for unchecked) and pass message to `super(message)`:\n```java\nclass InvalidAgeException extends Exception {\n  public InvalidAgeException(String msg) { super(msg); }\n}\n```"
      },
      {
        "id": "FC-SEM-OOPJ-41",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Exception handling",
        "highYield": true,
        "front": "What is an exception and why handle it?",
        "back": "An exception is an event that disrupts normal flow. Handling separates error recovery from the main logic and prevents abrupt termination.\nKeywords: exception, error, recovery, termination"
      },
      {
        "id": "FC-SEM-OOPJ-42",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Checked vs unchecked",
        "highYield": true,
        "front": "Distinguish checked and unchecked exceptions.",
        "back": "Checked exceptions are enforced by the compiler and must be caught or declared. Unchecked exceptions extend RuntimeException and are not enforced.\nKeywords: checked, unchecked, RuntimeException, compiler"
      },
      {
        "id": "FC-SEM-OOPJ-43",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "try-catch-finally",
        "highYield": true,
        "front": "Explain the order of try, catch and finally.",
        "back": "try runs the risky code. The first matching catch handles an exception. finally runs afterward for cleanup, whether or not an exception occurred.\nKeywords: try, catch, finally, cleanup"
      },
      {
        "id": "FC-SEM-OOPJ-44",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Custom exceptions",
        "highYield": true,
        "front": "How do you create a custom exception?",
        "back": "Extend Exception for a checked exception or RuntimeException for an unchecked one, provide constructors, then throw it where the error occurs.\nKeywords: custom exception, extend Exception, throw"
      },
      {
        "id": "FC-SEM-OOPJ-65",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Built-in exceptions",
        "highYield": false,
        "front": "Name four common built-in Java runtime exceptions.",
        "back": "1. ArithmeticException: integer division by zero.\n2. ArrayIndexOutOfBoundsException: index outside the array bounds.\n3. NullPointerException: using a null reference.\n4. NumberFormatException: invalid numeric string conversion.\nKeywords: ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException, NumberFormatException"
      }
    ],
    "DBMS": [
      {
        "id": "FC-M1-DBMS-01",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Three-Schema Architecture & Data Independence",
        "highYield": true,
        "front": "What are the three levels of database architecture and types of data independence?",
        "back": "ΓÇó Levels: External (Views) $\\to$ Conceptual (Logical schema) $\\to$ Internal (Physical storage).\nΓÇó Logical Independence: Conceptual schema changed without modifying user views.\nΓÇó Physical Independence: Internal storage changed without modifying conceptual schema."
      },
      {
        "id": "FC-M1-DBMS-02",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Primary Key vs Unique Key vs Super Key",
        "highYield": true,
        "front": "Differentiate between Super Key, Candidate Key, and Primary Key.",
        "back": "ΓÇó Super Key: Any set of attributes uniquely identifying a tuple.\nΓÇó Candidate Key: Minimal Super Key (no redundant attributes).\nΓÇó Primary Key: Candidate key chosen by DBA; MUST be unique and NOT NULL."
      },
      {
        "id": "FC-M1-DBMS-03",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "ER Model: Cardinality & Participation",
        "highYield": true,
        "front": "Explain Mapping Cardinality and Participation Constraints in ER diagrams.",
        "back": "ΓÇó Cardinality: 1:1, 1:N, N:1, M:N relationships.\nΓÇó Participation: Total (double line, every entity participates) vs Partial (single line, optional participation)."
      },
      {
        "id": "FC-SEM-DBMS-23",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "DBMS advantages",
        "highYield": true,
        "front": "List four advantages of a DBMS over file processing.",
        "back": "Controlled redundancy, enforced integrity, concurrent access with recovery, and data independence through a schema.\nKeywords: redundancy, integrity, concurrency, data independence"
      },
      {
        "id": "FC-SEM-DBMS-24",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Three-level architecture",
        "highYield": true,
        "front": "Describe the three levels of database abstraction.",
        "back": "External level: user views. Conceptual level: logical schema. Internal level: physical storage. Mappings between them give data independence.\nKeywords: external, conceptual, internal, schema, mapping"
      },
      {
        "id": "FC-SEM-DBMS-25",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Data independence",
        "highYield": true,
        "front": "Distinguish physical and logical data independence.",
        "back": "Physical independence lets storage change without changing the conceptual schema. Logical independence lets the conceptual schema change without changing user views.\nKeywords: physical, logical, independence, schema"
      },
      {
        "id": "FC-SEM-DBMS-26",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "DBA duties",
        "highYield": true,
        "front": "List four responsibilities of a DBA.",
        "back": "Schema definition, user authorisation, backup and recovery, and performance tuning. The DBA also monitors storage and integrity.\nKeywords: DBA, schema, authorisation, backup, tuning"
      },
      {
        "id": "FC-SEM-DBMS-27",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "ER model",
        "highYield": true,
        "front": "What is an entity, an attribute and an entity set?",
        "back": "An entity is a distinguishable object. An attribute describes it. An entity set is a collection of entities of the same type.\nKeywords: entity, attribute, entity set, ER"
      },
      {
        "id": "FC-SEM-DBMS-28",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Weak entity",
        "highYield": true,
        "front": "How is a weak entity represented and identified?",
        "back": "It has a double rectangle, a double diamond for its identifying relationship, and a dashed partial key. Its full key includes the owner's key.\nKeywords: weak entity, partial key, owner, identifying relationship"
      },
      {
        "id": "FC-SEM-DBMS-29",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Cardinality ratios",
        "highYield": true,
        "front": "Explain 1:1, 1:N and M:N relationships.",
        "back": "1:1 pairs one entity with one. 1:N lets one entity relate to many. M:N lets many relate to many and needs a separate relation.\nKeywords: cardinality, one-to-one, one-to-many, many-to-many"
      },
      {
        "id": "FC-SEM-DBMS-30",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "Specialization and generalization",
        "highYield": true,
        "front": "Compare specialization and generalization.",
        "back": "Specialization is top-down: split a superclass into subclasses. Generalization is bottom-up: combine common features of subclasses into a superclass.\nKeywords: specialization, generalization, superclass, subclass"
      },
      {
        "id": "FC-SEM-DBMS-31",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "ER-to-relational mapping",
        "highYield": true,
        "front": "How do you map a 1:N relationship to relations?",
        "back": "Put the primary key of the one side as a foreign key in the many side. Do not create a separate relation unless the relationship has its own attributes.\nKeywords: mapping, 1:N, foreign key, relation"
      },
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
        "id": "FC-M1-DBMS-04",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Relational Integrity Constraints",
        "highYield": true,
        "front": "What are the three core integrity constraints in relational databases?",
        "back": "1. Domain: values must belong to the attribute domain.\n2. Entity integrity: primary key cannot be NULL.\n3. Referential integrity: foreign key must match a key or be NULL.\nKeywords: domain, entity integrity, referential integrity"
      },
      {
        "id": "FC-M1-DBMS-05",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Fundamental Relational Algebra Operations",
        "highYield": true,
        "front": "List the 5 basic operations of Relational Algebra.",
        "back": "1. Selection ($\\sigma$): Filters rows meeting condition.\n2. Projection ($\\pi$): Filters columns.\n3. Union ($\\cup$): Combines tuples from two union-compatible relations.\n4. Set Difference ($-$).\n5. Cartesian Product ($\\times$)."
      },
      {
        "id": "FC-M1-DBMS-06",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Natural Join vs Theta Join",
        "highYield": true,
        "front": "What is the difference between Natural Join and Theta Join?",
        "back": "ΓÇó Natural Join ($R \\bowtie S$): Equi-join on all common attributes, eliminating duplicate attribute columns.\nΓÇó Theta Join ($R \\bowtie_\\theta S$): Join based on arbitrary comparison condition ($\\theta \\in \\{<, \\le, =, \\ne, >, \\ge\\}$); keeps both columns."
      },
      {
        "id": "FC-SEM-DBMS-32",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Relational terms",
        "highYield": true,
        "front": "Define relation, tuple, attribute and domain.",
        "back": "Relation: a table. Tuple: a row. Attribute: a column. Domain: the set of allowed values for an attribute.\nKeywords: relation, tuple, attribute, domain"
      },
      {
        "id": "FC-SEM-DBMS-33",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Keys",
        "highYield": true,
        "front": "Distinguish super key, candidate key and primary key.",
        "back": "Super key: any set that uniquely identifies a tuple. Candidate key: a minimal super key. Primary key: the chosen candidate key.\nKeywords: super key, candidate key, primary key, minimal"
      },
      {
        "id": "FC-SEM-DBMS-34",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Referential integrity",
        "highYield": true,
        "front": "What is referential integrity?",
        "back": "A foreign key must either match an existing primary key in the referenced relation or be NULL. It prevents dangling references.\nKeywords: referential integrity, foreign key, NULL, dangling"
      },
      {
        "id": "FC-SEM-DBMS-35",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Relational algebra operators",
        "highYield": true,
        "front": "Name the six basic relational algebra operators.",
        "back": "Selection, projection, union, set difference, Cartesian product and rename. Join is derived from product plus selection.\nKeywords: selection, projection, union, difference, product, rename"
      },
      {
        "id": "FC-SEM-DBMS-36",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Join types",
        "highYield": true,
        "front": "Compare theta join, equijoin and natural join.",
        "back": "Theta join uses any predicate. Equijoin uses equality. Natural join equates all common attributes and keeps one copy of each.\nKeywords: theta join, equijoin, natural join, predicate"
      },
      {
        "id": "FC-SEM-DBMS-37",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Views",
        "highYield": true,
        "front": "What is a view and why use one?",
        "back": "A view is a stored query that behaves like a table. It simplifies complex queries, restricts access to columns or rows and gives logical independence.\nKeywords: view, stored query, security, independence"
      },
      {
        "id": "FC-SEM-DBMS-38",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "ALTER and DROP",
        "highYield": false,
        "front": "Distinguish ALTER TABLE and DROP TABLE.",
        "back": "ALTER changes a table's definition, such as adding a column or constraint. DROP removes the table and its data.\nKeywords: ALTER, DROP, schema change, table"
      },
      {
        "id": "FC-SEM-DBMS-39",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Relational calculus",
        "highYield": false,
        "front": "Distinguish tuple and domain relational calculus.",
        "back": "Tuple calculus uses variables that range over tuples. Domain calculus uses variables that range over attribute values. Both are declarative.\nKeywords: tuple calculus, domain calculus, declarative, variable"
      },
      {
        "id": "FC-SEM-DBMS-40",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Integrity constraints",
        "highYield": true,
        "front": "Name four types of integrity constraints.",
        "back": "Domain constraints, key constraints, entity integrity (primary key not null) and referential integrity (foreign key).\nKeywords: domain, key, entity integrity, referential integrity"
      },
      {
        "id": "FC-SEM-DBMS-65",
        "subjectId": "DBMS",
        "unit": 2,
        "topic": "Domain relational calculus",
        "highYield": false,
        "front": "How does domain relational calculus express a query?",
        "back": "1. Variables range over attribute domains, not whole tuples.\n2. A query is {<x1,...,xn> | P(x1,...,xn)}.\n3. Predicates use comparisons and logical connectives.\n4. Safe expressions restrict results to values in the database.\nKeywords: domain relational calculus, DRC, domain variable, safe expression"
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
        "id": "FC-M1-DBMS-07",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "SQL Joins: Inner vs Outer (Left, Right, Full)",
        "highYield": true,
        "front": "Distinguish between Inner Join and Outer Joins in SQL.",
        "back": "ΓÇó Inner Join: Returns only rows with matching values in both tables.\nΓÇó Left Outer Join: Returns all rows from left table + matched rows from right (unmatched right filled with NULLs).\nΓÇó Right Outer Join: Returns all from right table.\nΓÇó Full Outer Join: Returns all rows from both tables."
      },
      {
        "id": "FC-M1-DBMS-08",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "WHERE vs HAVING Clause",
        "highYield": true,
        "front": "What is the difference between WHERE and HAVING in SQL?",
        "back": "ΓÇó WHERE: Filters individual rows BEFORE aggregation (`GROUP BY`); cannot use aggregate functions.\nΓÇó HAVING: Filters grouped sets AFTER aggregation; can use aggregate functions (`HAVING COUNT(*) > 5`)."
      },
      {
        "id": "FC-M1-DBMS-09",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "SQL Triggers (ECA Architecture)",
        "highYield": true,
        "front": "Explain the Event-Condition-Action (ECA) rule in SQL Triggers.",
        "back": "ΓÇó Event: Database operation (INSERT, UPDATE, DELETE).\nΓÇó Condition: Boolean check evaluated when event occurs.\nΓÇó Action: Procedural SQL block executed if condition holds (BEFORE or AFTER event, FOR EACH ROW)."
      },
      {
        "id": "FC-SEM-DBMS-41",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "SQL query form",
        "highYield": true,
        "front": "Write the logical order of a basic SQL query.",
        "back": "SELECT columns FROM tables WHERE rows GROUP BY groups HAVING group condition ORDER BY order. WHERE runs before grouping, HAVING after.\nKeywords: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY"
      },
      {
        "id": "FC-SEM-DBMS-42",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Set operators",
        "highYield": true,
        "front": "Compare UNION, UNION ALL, INTERSECT and EXCEPT.",
        "back": "UNION removes duplicates, UNION ALL keeps them. INTERSECT returns common rows. EXCEPT returns rows in the first query but not the second.\nKeywords: UNION, INTERSECT, EXCEPT, duplicates"
      },
      {
        "id": "FC-SEM-DBMS-43",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Nested queries",
        "highYield": true,
        "front": "When use IN, EXISTS and a scalar subquery?",
        "back": "IN for a set of values, EXISTS to test whether the subquery returns any row, scalar subquery when exactly one value is needed.\nKeywords: IN, EXISTS, scalar subquery, nested query"
      },
      {
        "id": "FC-SEM-DBMS-44",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Aggregation",
        "highYield": true,
        "front": "Name the five SQL aggregate functions.",
        "back": "COUNT, SUM, AVG, MIN and MAX. They ignore NULL except COUNT(*), which counts rows.\nKeywords: COUNT, SUM, AVG, MIN, MAX, NULL"
      },
      {
        "id": "FC-SEM-DBMS-45",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "NULL handling",
        "highYield": true,
        "front": "Why does NULL = NULL return UNKNOWN?",
        "back": "NULL means an unknown value, so equality cannot be established. Use IS NULL or IS NOT NULL; aggregates and outer joins also treat NULL specially.\nKeywords: NULL, UNKNOWN, IS NULL, three-valued logic"
      },
      {
        "id": "FC-SEM-DBMS-46",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "SQL constraints",
        "highYield": true,
        "front": "Name five SQL table constraints.",
        "back": "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY and CHECK. They enforce column and row-level integrity at the database.\nKeywords: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK"
      },
      {
        "id": "FC-SEM-DBMS-47",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Triggers",
        "highYield": true,
        "front": "What are the parts of a trigger?",
        "back": "An event (INSERT, UPDATE or DELETE), a timing (BEFORE or AFTER), a row or statement granularity, and the action body.\nKeywords: trigger, event, BEFORE, AFTER, row, action"
      }
    ],
    "SE": [
      {
        "id": "FC-M1-SE-01",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Waterfall vs Agile Scrum",
        "highYield": true,
        "front": "Compare the Waterfall model with Agile Scrum.",
        "back": "ΓÇó Waterfall: Linear, sequential phases; rigid; working software delivered late; high documentation.\nΓÇó Agile Scrum: Iterative, sprint-based (2ΓÇô4 weeks); welcomes changing requirements; working software delivered continuously."
      },
      {
        "id": "FC-M1-SE-02",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Spiral Model Risk Driven Engineering",
        "highYield": true,
        "front": "What are the four quadrants of Boehm's Spiral Model?",
        "back": "1. Determine objectives, alternatives, and constraints.\n2. Risk analysis and evaluation of alternatives.\n3. Engineering, development, and testing of current prototype.\n4. Planning the next phase with customer review."
      },
      {
        "id": "FC-M1-SE-03",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Functional vs Non-Functional Requirements",
        "highYield": true,
        "front": "Differentiate Functional and Non-Functional Requirements.",
        "back": "ΓÇó Functional: Specific services/behaviors system must perform (e.g., 'System shall process credit card payments').\nΓÇó Non-Functional: Quality attributes & constraints (Performance, Security, Reliability, Usability)."
      },
      {
        "id": "FC-SEM-SE-23",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Software characteristics",
        "highYield": true,
        "front": "List four characteristics that distinguish software from hardware.",
        "back": "Software is engineered, not manufactured; it is intangible; it does not wear out but deteriorates; and it is custom-built rather than assembled from standard parts.\nKeywords: engineered, intangible, wear out, custom"
      },
      {
        "id": "FC-SEM-SE-24",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Software myths",
        "highYield": true,
        "front": "Give one management myth and one practitioner myth about software.",
        "back": "Management myth: adding people to a late project fixes the schedule. Practitioner myth: the job is done once the program runs.\nKeywords: myth, Brooks law, done, schedule"
      },
      {
        "id": "FC-SEM-SE-25",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Layered technology",
        "highYield": true,
        "front": "Name the four layers of software engineering.",
        "back": "Quality focus at the base, then process, methods and tools. The process holds the layers together.\nKeywords: quality focus, process, methods, tools"
      },
      {
        "id": "FC-SEM-SE-26",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Umbrella activities",
        "highYield": true,
        "front": "Name five umbrella activities.",
        "back": "Project tracking, risk management, quality assurance, configuration management and technical reviews. They run across the process.\nKeywords: tracking, risk, quality, configuration, reviews"
      },
      {
        "id": "FC-SEM-SE-27",
        "subjectId": "SE",
        "unit": 1,
        "topic": "CMMI levels",
        "highYield": true,
        "front": "List the five CMMI maturity levels.",
        "back": "Initial, managed, defined, quantitatively managed and optimizing. Each level adds process discipline and measurement.\nKeywords: CMMI, initial, managed, defined, optimizing"
      },
      {
        "id": "FC-SEM-SE-28",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Waterfall model",
        "highYield": true,
        "front": "When is the waterfall model appropriate?",
        "back": "When requirements are stable and well understood, the technology is familiar, and late change is unlikely or inexpensive.\nKeywords: waterfall, stable requirements, sequential, change"
      },
      {
        "id": "FC-SEM-SE-29",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Spiral model",
        "highYield": true,
        "front": "What are the four quadrants of the spiral model?",
        "back": "Determine objectives, identify and resolve risks, develop and validate, then plan the next iteration. Risk analysis drives each loop.\nKeywords: spiral, objectives, risk, develop, plan"
      },
      {
        "id": "FC-SEM-SE-30",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Incremental vs iterative",
        "highYield": true,
        "front": "Distinguish incremental and iterative development.",
        "back": "Incremental adds features in usable slices. Iterative refines the same system through repeated passes. Most agile methods combine both.\nKeywords: incremental, iterative, slice, refinement"
      },
      {
        "id": "FC-SEM-SE-31",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Agile principles",
        "highYield": true,
        "front": "State three Agile principles.",
        "back": "Deliver working software frequently, welcome changing requirements, and build projects around motivated individuals. Customer collaboration matters more than contract negotiation.\nKeywords: agile, frequent delivery, change, collaboration"
      },
      {
        "id": "FC-SEM-SE-32",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Concurrent model",
        "highYield": false,
        "front": "What is the concurrent development model?",
        "back": "It represents software work as overlapping activities in different states (inactive, awaiting change, under development, under review, done) rather than a strict sequence.\nKeywords: concurrent, activity states, overlapping, event"
      },
      {
        "id": "FC-SEM-SE-U1",
        "subjectId": "SE",
        "unit": 1,
        "topic": "SDLC Models Comparison",
        "highYield": true,
        "front": "When should you choose Waterfall vs Spiral vs Agile?",
        "back": "ΓÇó Waterfall: Stable, well-understood requirements, zero ambiguity.\nΓÇó Spiral: High-risk, large-scale, mission-critical systems.\nΓÇó Agile/Scrum: Rapidly evolving requirements, fast time-to-market, customer collaboration."
      },
      {
        "id": "FC-M1-SE-04",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Characteristics of a Good SRS Document (IEEE 830)",
        "highYield": true,
        "front": "List five essential quality criteria of an IEEE 830 SRS document.",
        "back": "1. Correct: Accurately reflects stakeholder needs.\n2. Unambiguous: Exactly one interpretation per requirement.\n3. Complete: Covers all functional & quality specs.\n4. Consistent: No contradictory requirements.\n5. Verifiable / Testable: Quantifiable acceptance tests exist."
      },
      {
        "id": "FC-M1-SE-05",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Use Case Relationships: <<include>> vs <<extend>>",
        "highYield": true,
        "front": "Explain <<include>> and <<extend>> relationships in UML Use Case diagrams.",
        "back": "ΓÇó <<include>>: Mandatory sub-flow; base use case cannot complete without it (e.g., 'Make Payment' <<include>> 'Authenticate User').\nΓÇó <<extend>>: Optional or conditional behavior added at an extension point (e.g., 'Checkout' <<extend>> 'Apply Promo Coupon')."
      },
      {
        "id": "FC-SEM-SE-33",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Functional requirements",
        "highYield": true,
        "front": "Give two examples of functional requirements for a library system.",
        "back": "The system shall let a member borrow a book. The system shall calculate a fine for each overdue day. Both describe a service.\nKeywords: functional, service, borrow, fine"
      },
      {
        "id": "FC-SEM-SE-34",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Non-functional requirements",
        "highYield": true,
        "front": "Name four categories of non-functional requirements.",
        "back": "Performance, security, usability and reliability. Others include maintainability, portability and scalability.\nKeywords: performance, security, usability, reliability"
      },
      {
        "id": "FC-SEM-SE-35",
        "subjectId": "SE",
        "unit": 2,
        "topic": "SRS",
        "highYield": true,
        "front": "What should a software requirements specification contain?",
        "back": "Scope, functional and non-functional requirements, external interfaces, constraints and acceptance criteria, written unambiguously and traceably.\nKeywords: SRS, scope, interface, constraint, acceptance"
      },
      {
        "id": "FC-SEM-SE-36",
        "subjectId": "SE",
        "unit": 2,
        "topic": "SRS quality",
        "highYield": true,
        "front": "List four desirable properties of an SRS.",
        "back": "Correct, unambiguous, complete and consistent. It should also be verifiable, modifiable and traceable.\nKeywords: correct, unambiguous, complete, consistent, verifiable"
      },
      {
        "id": "FC-SEM-SE-37",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Elicitation techniques",
        "highYield": true,
        "front": "Name four requirements elicitation techniques.",
        "back": "Interviews, workshops or focus groups, observation (ethnography) and prototyping. Questionnaires and document analysis also help.\nKeywords: interview, workshop, observation, prototype"
      },
      {
        "id": "FC-SEM-SE-38",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Requirements validation",
        "highYield": true,
        "front": "Name three requirements validation techniques.",
        "back": "Requirements reviews, prototyping and test-case generation. Reviews check completeness; prototypes expose misunderstandings.\nKeywords: review, prototype, test case, validation"
      },
      {
        "id": "FC-SEM-SE-39",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Requirements management",
        "highYield": true,
        "front": "Why is requirements traceability important?",
        "back": "It links each requirement to its source, design, code and tests, so change impact can be assessed and completeness checked.\nKeywords: traceability, impact analysis, source, test"
      },
      {
        "id": "FC-SEM-SE-40",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Feasibility study",
        "highYield": true,
        "front": "Name four types of feasibility.",
        "back": "Technical, economic, legal and schedule feasibility. Operational feasibility is sometimes added.\nKeywords: technical, economic, legal, schedule, operational"
      },
      {
        "id": "FC-SEM-SE-41",
        "subjectId": "SE",
        "unit": 2,
        "topic": "User vs system requirements",
        "highYield": true,
        "front": "Distinguish user requirements from system requirements.",
        "back": "User requirements are high-level statements in natural language for customers. System requirements are detailed, precise specifications for developers.\nKeywords: user requirements, system requirements, high level, detailed"
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
        "id": "FC-M1-SE-06",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Cohesion vs Coupling",
        "highYield": true,
        "front": "Define Cohesion and Coupling. What is ideal in software design?",
        "back": "ΓÇó Cohesion: Degree of functional relatedness among elements within a module (High Cohesion is desired).\nΓÇó Coupling: Degree of interdependence between different modules (Low Coupling is desired).\nΓÇó Golden Rule: High Cohesion and Low Coupling."
      },
      {
        "id": "FC-M1-SE-07",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Architectural Styles (Layered vs Pipe-and-Filter)",
        "highYield": true,
        "front": "Compare Layered and Pipe-and-Filter architectural styles.",
        "back": "ΓÇó Layered: Modules organized hierarchically; each layer provides services only to the layer above it (e.g., Presentation, Business, Data layers).\nΓÇó Pipe-and-Filter: Data streams through successive transformation filters via pipes (e.g., Unix compilers, image processing pipelines)."
      },
      {
        "id": "FC-SEM-SE-42",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Design process",
        "highYield": true,
        "front": "List the stages of the software design process.",
        "back": "Architectural design, interface design, component-level design and data design, followed by design review and refinement.\nKeywords: architectural, interface, component, data, review"
      },
      {
        "id": "FC-SEM-SE-43",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Design concepts",
        "highYield": true,
        "front": "Define abstraction, refinement and modularity.",
        "back": "Abstraction hides detail behind a simpler model. Refinement adds detail step by step. Modularity splits a system into independently understandable parts.\nKeywords: abstraction, refinement, modularity, detail"
      },
      {
        "id": "FC-SEM-SE-44",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Cohesion",
        "highYield": true,
        "front": "Order the cohesion types from best to worst.",
        "back": "Functional, sequential, communicational, procedural, temporal, logical, coincidental. Functional is best; coincidental is worst.\nKeywords: cohesion, functional, sequential, coincidental"
      },
      {
        "id": "FC-SEM-SE-45",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Coupling",
        "highYield": true,
        "front": "Order the coupling types from best to worst.",
        "back": "Data, stamp, control, external, common, content. Data coupling is loosest; content coupling is tightest.\nKeywords: coupling, data, stamp, control, content"
      },
      {
        "id": "FC-SEM-SE-46",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Design model",
        "highYield": true,
        "front": "Name the four elements of the design model.",
        "back": "Data design, architectural design, interface design and component-level design. Each refines the analysis model toward code.\nKeywords: data design, architecture, interface, component"
      },
      {
        "id": "FC-SEM-SE-47",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Architectural styles",
        "highYield": true,
        "front": "Name four architectural styles.",
        "back": "Layered, client-server, pipe-and-filter and repository. Others include MVC and service-oriented architecture.\nKeywords: layered, client-server, pipe-and-filter, repository"
      },
      {
        "id": "FC-SEM-SE-67",
        "subjectId": "SE",
        "unit": 3,
        "topic": "Software architecture and data design",
        "highYield": false,
        "front": "What do software architecture and data design specify?",
        "back": "1. Architecture defines components, their interfaces, and interactions.\n2. It captures structural properties and major design decisions.\n3. Data design specifies data structures, files, and database schemas.\n4. Both refine the requirements model into an implementation blueprint.\nKeywords: software architecture, component, interface, data design, schema"
      }
    ],
    "ES": [
      {
        "id": "FC-M1-ES-01",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Structure of an Ecosystem",
        "highYield": true,
        "front": "What are the biotic and abiotic components of an ecosystem?",
        "back": "ΓÇó Biotic: Producers (Autotrophs), Consumers (Herbivores, Carnivores, Omnivores), Decomposers (Saprotrophs).\nΓÇó Abiotic: Climatic factors (light, temperature, moisture), Edaphic factors (soil, minerals), inorganic substances."
      },
      {
        "id": "FC-M1-ES-02",
        "subjectId": "ES",
        "unit": 1,
        "topic": "10% Law of Energy Transfer",
        "highYield": true,
        "front": "State Lindeman's 10% Law in ecological energy flow.",
        "back": "Only approximately 10% of energy transferred from one trophic level is stored as biomass in the next trophic level; the remaining 90% is dissipated as metabolic heat."
      },
      {
        "id": "FC-M1-ES-03",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Energy flow",
        "highYield": true,
        "front": "What is the universal energy flow model?",
        "back": "Energy enters an ecosystem as sunlight, passes through producers and consumers, and leaves as heat. Only about 10% moves to the next trophic level.\nKeywords: energy flow, sunlight, trophic level, 10 percent"
      },
      {
        "id": "FC-SEM-ES-23",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Ecosystem",
        "highYield": true,
        "front": "Define ecosystem and name its two components.",
        "back": "A functional unit of interacting organisms and their physical environment. Components: biotic (producers, consumers, decomposers) and abiotic (light, water, soil, air).\nKeywords: ecosystem, biotic, abiotic, interaction"
      },
      {
        "id": "FC-SEM-ES-24",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Ecosystem structure",
        "highYield": true,
        "front": "What are the structural components of an ecosystem?",
        "back": "Abiotic factors, producers, consumers and decomposers. Their arrangement determines the ecosystem's trophic structure.\nKeywords: structure, abiotic, producer, consumer, decomposer"
      },
      {
        "id": "FC-SEM-ES-25",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Food chain",
        "highYield": true,
        "front": "Distinguish a grazing food chain from a detritus food chain.",
        "back": "Grazing starts with living plants eaten by herbivores. Detritus starts with dead organic matter broken down by decomposers.\nKeywords: grazing, detritus, herbivore, decomposer"
      },
      {
        "id": "FC-SEM-ES-26",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Food web",
        "highYield": true,
        "front": "What is a food web?",
        "back": "A network of interconnected food chains showing all feeding relationships in a community. It is more realistic than a single chain.\nKeywords: food web, network, feeding, community"
      },
      {
        "id": "FC-SEM-ES-27",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Energy flow",
        "highYield": true,
        "front": "State the 10% law of energy transfer.",
        "back": "Only about 10% of the energy at one trophic level is transferred to the next; the rest is lost as heat and waste. This limits food chains to 4-5 levels.\nKeywords: 10 percent law, trophic level, heat, food chain"
      },
      {
        "id": "FC-SEM-ES-28",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Nitrogen cycle",
        "highYield": true,
        "front": "List the five steps of the nitrogen cycle.",
        "back": "Nitrogen fixation, nitrification, assimilation, ammonification and denitrification. Bacteria drive every step.\nKeywords: fixation, nitrification, assimilation, ammonification, denitrification"
      },
      {
        "id": "FC-SEM-ES-29",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Bioaccumulation",
        "highYield": true,
        "front": "Distinguish bioaccumulation and biomagnification.",
        "back": "Bioaccumulation: pollutant builds up inside one organism. Biomagnification: its concentration rises at each higher trophic level.\nKeywords: bioaccumulation, biomagnification, trophic level, concentration"
      },
      {
        "id": "FC-SEM-ES-30",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Ecological succession",
        "highYield": false,
        "front": "What is ecological succession?",
        "back": "The gradual replacement of one community by another until a stable climax community forms. Primary succession starts on bare rock; secondary follows a disturbance.\nKeywords: succession, primary, secondary, climax"
      },
      {
        "id": "FC-SEM-ES-31",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Trophic levels",
        "highYield": true,
        "front": "Name the trophic levels of a simple food chain.",
        "back": "Producers, primary consumers (herbivores), secondary consumers (carnivores) and tertiary consumers. Decomposers act at every level.\nKeywords: producer, primary consumer, secondary consumer, tertiary"
      },
      {
        "id": "FC-SEM-ES-32",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Nitrogen fixation",
        "highYield": false,
        "front": "Which organisms fix atmospheric nitrogen?",
        "back": "Free-living bacteria such as Azotobacter and symbiotic Rhizobium in legume root nodules, plus some cyanobacteria.\nKeywords: Azotobacter, Rhizobium, legume, cyanobacteria"
      },
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
        "id": "FC-M1-ES-04",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Renewable vs Non-Renewable Energy Resources",
        "highYield": true,
        "front": "Compare Renewable and Non-Renewable Energy Resources with examples.",
        "back": "ΓÇó Renewable: Replenished naturally in short cycles; eco-friendly (Solar, Wind, Hydroelectric, Geothermal, Biomass).\nΓÇó Non-Renewable: Finite geological reserves; emit greenhouse gases upon combustion (Coal, Petroleum, Natural Gas, Nuclear Uranium)."
      },
      {
        "id": "FC-SEM-ES-33",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Resource classification",
        "highYield": true,
        "front": "Classify natural resources by renewability.",
        "back": "Renewable: solar, wind, water, biomass, geothermal. Non-renewable: coal, petroleum, natural gas, minerals and nuclear fuels.\nKeywords: renewable, non-renewable, solar, coal, minerals"
      },
      {
        "id": "FC-SEM-ES-34",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Dams",
        "highYield": true,
        "front": "List three benefits and three problems of large dams.",
        "back": "Benefits: irrigation, hydropower, flood control. Problems: displacement, siltation, habitat loss and downstream flow changes.\nKeywords: dam, irrigation, hydropower, displacement, siltation"
      },
      {
        "id": "FC-SEM-ES-35",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Water scarcity",
        "highYield": true,
        "front": "What causes water scarcity in India?",
        "back": "Uneven rainfall, over-extraction of groundwater, pollution, inefficient irrigation and growing demand from agriculture and cities.\nKeywords: water scarcity, groundwater, pollution, irrigation, demand"
      },
      {
        "id": "FC-SEM-ES-36",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Mining impacts",
        "highYield": true,
        "front": "Name four environmental impacts of mining.",
        "back": "Land degradation, acid mine drainage, dust and air pollution, and contamination of nearby water bodies.\nKeywords: mining, land degradation, acid drainage, dust, water"
      },
      {
        "id": "FC-SEM-ES-37",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Deforestation",
        "highYield": true,
        "front": "List four consequences of deforestation.",
        "back": "Soil erosion, loss of biodiversity, reduced rainfall and carbon release. It also disrupts watersheds and local livelihoods.\nKeywords: deforestation, erosion, biodiversity, carbon, watershed"
      },
      {
        "id": "FC-SEM-ES-38",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Renewable energy",
        "highYield": true,
        "front": "Name four renewable energy sources and one limitation of each.",
        "back": "Solar: intermittent. Wind: variable. Hydro: needs dams. Biomass: emits particulates when burned.\nKeywords: solar, wind, hydro, biomass, intermittent"
      },
      {
        "id": "FC-SEM-ES-39",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Mineral resources",
        "highYield": false,
        "front": "Why are mineral resources considered non-renewable?",
        "back": "They form by geological processes over millions of years, far slower than human consumption, so reserves can be exhausted.\nKeywords: mineral, non-renewable, geological, exhaustion"
      },
      {
        "id": "FC-SEM-ES-40",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Forest resources",
        "highYield": true,
        "front": "What are the major forest products and services?",
        "back": "Products: timber, fuelwood, fodder and medicines. Services: carbon storage, watershed protection, soil conservation and biodiversity.\nKeywords: timber, fuelwood, carbon, watershed, biodiversity"
      },
      {
        "id": "FC-SEM-ES-41",
        "subjectId": "ES",
        "unit": 2,
        "topic": "Resource use",
        "highYield": false,
        "front": "What is sustainable resource use?",
        "back": "Using a resource at a rate that allows natural replenishment, so future availability and ecosystem function are not impaired.\nKeywords: sustainable, replenishment, future, ecosystem"
      },
      {
        "id": "FC-SEM-ES-U2",
        "subjectId": "ES",
        "unit": 2,
        "topic": "BOD vs COD",
        "highYield": true,
        "front": "Compare BOD with COD.",
        "back": "ΓÇó BOD: Measures biodegradable organic matter via 5-day aerobic microbial incubation at 20┬░C.\nΓÇó COD: Measures total (both biodegradable and non-biodegradable) organic content via rapid chemical oxidation with potassium dichromate ($K_2Cr_2O_7$). COD > BOD always."
      },
      {
        "id": "FC-M1-ES-05",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Three Levels of Biodiversity",
        "highYield": true,
        "front": "Define Genetic, Species, and Ecosystem diversity.",
        "back": "1. Genetic: gene variation within a species.\n2. Species: variety of species in a habitat.\n3. Ecosystem: variety of habitats and ecological niches.\nKeywords: genetic, species, ecosystem, biodiversity"
      },
      {
        "id": "FC-M1-ES-06",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Consumptive vs Productive Use Value of Biodiversity",
        "highYield": true,
        "front": "Distinguish between Consumptive and Productive use values of biodiversity.",
        "back": "ΓÇó Consumptive Use: Direct local consumption without commercial market sale (fuelwood, fodder, wild fruits).\nΓÇó Productive Use: Commercial exploitation for national/international markets (timber, pharmaceuticals, paper pulp, ivory, silk)."
      },
      {
        "id": "FC-SEM-ES-42",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Biodiversity levels",
        "highYield": true,
        "front": "Name and define the three levels of biodiversity.",
        "back": "Genetic: variation within a species. Species: variety of species. Ecosystem: variety of habitats and ecological processes.\nKeywords: genetic, species, ecosystem, variation"
      },
      {
        "id": "FC-SEM-ES-43",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Biodiversity values",
        "highYield": true,
        "front": "Name four values of biodiversity.",
        "back": "Consumptive, productive, social, aesthetic, ethical and option values. Each describes a different reason to preserve species.\nKeywords: consumptive, productive, aesthetic, ethical, option"
      },
      {
        "id": "FC-SEM-ES-48",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Hotspots",
        "highYield": false,
        "front": "What is a biodiversity hotspot?",
        "back": "A region with exceptional species richness and endemism that has lost a large share of its original habitat. India has four recognised hotspots.\nKeywords: hotspot, endemism, habitat loss, India"
      },
      {
        "id": "FC-SEM-ES-49",
        "subjectId": "ES",
        "unit": 3,
        "topic": "Species diversity",
        "highYield": false,
        "front": "What is the difference between species richness and evenness?",
        "back": "Richness counts the number of species. Evenness describes how similar their abundances are. Both contribute to diversity.\nKeywords: richness, evenness, abundance, diversity"
      }
    ],
    "IE": [
      {
        "id": "FC-M1-IE-01",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Types of Innovation",
        "highYield": true,
        "front": "Differentiate between Incremental and Disruptive Innovation.",
        "back": "ΓÇó Incremental: Small continuous improvements to existing products/technologies (e.g., iPhone camera upgrades).\nΓÇó Disruptive: Creates entirely new markets and value networks, eventually displacing established leaders (e.g., Netflix streaming displacing Blockbuster)."
      },
      {
        "id": "FC-SEM-IE-01",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Innovation versus invention",
        "highYield": true,
        "front": "Distinguish innovation from invention.",
        "back": "Invention is the first creation of a new idea, device or process. Innovation applies that idea to create value in the market through a product, service or process.\nKeywords: invention, innovation, value creation, commercialisation"
      },
      {
        "id": "FC-SEM-IE-02",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Types of innovation",
        "highYield": true,
        "front": "Name four common types of innovation.",
        "back": "1. Incremental innovation improves existing offerings.\n2. Radical innovation creates new-to-the-world solutions.\n3. Disruptive innovation starts in low-end or new markets.\n4. Architectural innovation reconfigures existing components.\nKeywords: incremental, radical, disruptive, architectural"
      },
      {
        "id": "FC-SEM-IE-03",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Incremental versus radical",
        "highYield": false,
        "front": "Compare incremental and radical innovation.",
        "back": "Incremental innovation makes small improvements to existing products and markets. Radical innovation introduces a fundamentally new product, process or business model that changes how value is created.\nKeywords: incremental, radical, improvement, new-to-world"
      },
      {
        "id": "FC-SEM-IE-04",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Disruptive innovation",
        "highYield": true,
        "front": "Why is disruptive innovation a threat to established firms?",
        "back": "It starts with a simpler, cheaper offer for overlooked or low-end customers. Established firms often ignore it because it seems unattractive, then the entrant improves and captures the mainstream market.\nKeywords: disruptive, low-end, overlooked, mainstream"
      },
      {
        "id": "FC-SEM-IE-05",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Manufacturing versus service innovation",
        "highYield": false,
        "front": "How does service innovation differ from manufacturing innovation?",
        "back": "Service innovation often changes the customer experience, delivery process or business model, with customers participating in production. Manufacturing innovation usually focuses on physical products, materials and production processes.\nKeywords: service, manufacturing, customer participation, process"
      },
      {
        "id": "FC-SEM-IE-06",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Culture of innovation",
        "highYield": true,
        "front": "What supports a culture of innovation?",
        "back": "Psychological safety, experimentation, tolerance of well-reasoned failure, cross-functional collaboration, time for exploration and rewards for new ideas.\nKeywords: culture, experimentation, safety, collaboration"
      },
      {
        "id": "FC-SEM-IE-07",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Entrepreneur versus intrapreneur",
        "highYield": true,
        "front": "Compare an entrepreneur and an intrapreneur.",
        "back": "An entrepreneur starts and owns a new venture, bearing its risk and reward. An intrapreneur develops a new venture inside an existing organisation using its resources, with the employer sharing risk and reward.\nKeywords: entrepreneur, intrapreneur, venture, risk"
      },
      {
        "id": "FC-SEM-IE-08",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Women and campus entrepreneurship",
        "highYield": false,
        "front": "Why are women and on-campus startups promoted?",
        "back": "They widen the pool of founders and bring diverse perspectives. Campus startups let students test ideas with low initial risk, access mentors and labs, and learn before committing to a full venture.\nKeywords: women entrepreneurship, campus startup, mentorship, inclusion"
      },
      {
        "id": "FC-M1-IE-02",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Design thinking stages",
        "highYield": true,
        "front": "List the five stages of design thinking.",
        "back": "1. Empathise.\n2. Define.\n3. Ideate.\n4. Prototype.\n5. Test.\nKeywords: design thinking, empathise, define, ideate, prototype, test"
      },
      {
        "id": "FC-SEM-IE-09",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Gap identification",
        "highYield": true,
        "front": "How do you identify a real problem gap?",
        "back": "Observe customers in their actual context, interview them about pain points, study workarounds and complaints, and check whether the problem is frequent, urgent and valuable enough to pay for.\nKeywords: gap, pain point, observation, interview"
      },
      {
        "id": "FC-SEM-IE-10",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Industry perspective",
        "highYield": false,
        "front": "Why analyse a problem from an industry perspective?",
        "back": "It shows whether the pain is widespread, how value chains work, who controls access to customers, and which constraints or regulations shape a viable solution.\nKeywords: industry, value chain, constraints, regulation"
      },
      {
        "id": "FC-SEM-IE-11",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Market segmentation",
        "highYield": true,
        "front": "Name the main bases for market segmentation.",
        "back": "1. Geographic: region, city, climate.\n2. Demographic: age, income, occupation.\n3. Psychographic: lifestyle, values, personality.\n4. Behavioural: usage, benefits sought, loyalty.\nKeywords: geographic, demographic, psychographic, behavioural"
      },
      {
        "id": "FC-SEM-IE-12",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Problem-customer fit",
        "highYield": true,
        "front": "How do you validate problem-customer fit?",
        "back": "Talk to target customers, confirm the problem is real and important, observe current alternatives, and check whether they would adopt or pay for a solution. Evidence matters more than founder opinion.\nKeywords: validation, customer interview, evidence, problem fit"
      },
      {
        "id": "FC-SEM-IE-13",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Iterating fit",
        "highYield": false,
        "front": "Why must problem-customer fit be iterated?",
        "back": "Early assumptions are often wrong. Each customer conversation or prototype test refines the problem definition, target segment and value proposition until the solution matches a real, prioritised need.\nKeywords: iterate, assumption, refine, feedback"
      },
      {
        "id": "FC-SEM-IE-14",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Competition and trends",
        "highYield": false,
        "front": "What should a competitor and trend map capture?",
        "back": "Direct and indirect competitors, their offerings and pricing, strengths and gaps, plus technological, regulatory, social and economic trends that could change the opportunity.\nKeywords: competitor, trend, gap, regulation"
      },
      {
        "id": "FC-SEM-IE-15",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Porter five forces",
        "highYield": true,
        "front": "Name Porter's five competitive forces.",
        "back": "1. Threat of new entrants.\n2. Bargaining power of suppliers.\n3. Bargaining power of buyers.\n4. Threat of substitutes.\n5. Rivalry among existing competitors.\nKeywords: Porter, entrants, suppliers, buyers, substitutes, rivalry"
      },
      {
        "id": "FC-SEM-IE-16",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Ideation techniques",
        "highYield": true,
        "front": "Describe brainstorming, brainwriting and SCAMPER.",
        "back": "Brainstorming generates many ideas orally with deferred judgement. Brainwriting lets participants write ideas before sharing. SCAMPER prompts substitution, combination, adaptation, modification, other uses, elimination and reversal.\nKeywords: brainstorming, brainwriting, SCAMPER, ideation"
      },
      {
        "id": "FC-SEM-IE-17",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Design thinking",
        "highYield": true,
        "front": "Name the five stages of design thinking.",
        "back": "1. Empathise with users.\n2. Define the problem.\n3. Ideate possible solutions.\n4. Prototype selected ideas.\n5. Test with users and iterate.\nKeywords: empathise, define, ideate, prototype, test"
      },
      {
        "id": "FC-SEM-IE-U1",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Design thinking stages",
        "highYield": true,
        "front": "List the five stages of design thinking in order.",
        "back": "1. Empathise with users.\n2. Define the problem.\n3. Ideate solutions.\n4. Prototype the best ideas.\n5. Test with users and iterate.\nKeywords: empathise, define, ideate, prototype, test"
      },
      {
        "id": "FC-SEM-IE-U2",
        "subjectId": "IE",
        "unit": 2,
        "topic": "Iterating problem-customer fit",
        "highYield": true,
        "front": "How do you iterate problem-customer fit?",
        "back": "Compare interview and prototype evidence with the current problem statement. Revise the segment, pain point or value proposition, then test again until customers consistently confirm the problem and show willingness to adopt a solution.\nKeywords: iterate, evidence, segment, value proposition"
      },
      {
        "id": "FC-IE-02",
        "subjectId": "IE",
        "unit": 3,
        "topic": "TAM SAM SOM",
        "highYield": true,
        "front": "Define TAM, SAM and SOM.",
        "back": "TAM is the total addressable market for the category. SAM is the serviceable available market the venture can reach. SOM is the serviceable obtainable market it can realistically win.\nKeywords: TAM, SAM, SOM, market sizing"
      },
      {
        "id": "FC-M1-IE-04",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Market Sizing: TAM vs SAM vs SOM",
        "highYield": true,
        "front": "Explain TAM, SAM, and SOM in startup market opportunity sizing.",
        "back": "ΓÇó TAM (Total Addressable Market): Total global market demand for the product/service category.\nΓÇó SAM (Serviceable Available Market): Portion of TAM targeted within reach of geographical & business model scope.\nΓÇó SOM (Serviceable Obtainable Market): Realistic market share captured in the near term (3ΓÇô5 years)."
      },
      {
        "id": "FC-SEM-IE-18",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Global competitor mapping",
        "highYield": false,
        "front": "What is global competitor mapping?",
        "back": "It identifies major competitors worldwide, compares their products, pricing and positioning, and reveals gaps or differentiation opportunities for a new venture.\nKeywords: global, competitor, positioning, differentiation"
      },
      {
        "id": "FC-SEM-IE-19",
        "subjectId": "IE",
        "unit": 3,
        "topic": "TAM SAM SOM",
        "highYield": true,
        "front": "How do TAM, SAM and SOM narrow a market estimate?",
        "back": "Start with total category demand (TAM), restrict it to the segment the venture can serve (SAM), then estimate the share it can realistically win (SOM).\nKeywords: TAM, SAM, SOM, funnel"
      },
      {
        "id": "FC-SEM-IE-20",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Opportunity scope and scale",
        "highYield": false,
        "front": "How do you assess an opportunity's scope and scale?",
        "back": "Estimate market size, growth rate, customer reach, unit economics, competition and operational constraints. Check whether the model can expand without proportional cost increases.\nKeywords: scope, scale, market size, unit economics"
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.MID1_PRACTICE = MID1_PRACTICE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MID1_PRACTICE;
}

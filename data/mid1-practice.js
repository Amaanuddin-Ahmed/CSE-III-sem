/**
 * MGIT PYQ HUB - Mid-1 Practice Question Bank & Flashcards
 * Auto-generated & verified for MR-25 CSE Semester III (Units 1–3 Part 1)
 */
const MID1_PRACTICE = {
  "version": "1.0.0",
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
          "Fallacy",
          "Contradiction",
          "Tautology",
          "Contingency"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-M1-2023",
        "explanation": "A tautology is a logical formula that is true in every possible interpretation."
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
        "source": "pyq:MR25-DM-M1-2022",
        "explanation": "De Morgan's law: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$."
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
          "If it does not rain, the grass is not wet",
          "If the grass is not wet, it does not rain ($\\neg q \\rightarrow \\neg p$)",
          "It rains and the grass is not wet"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-M1-2024",
        "explanation": "The contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$, which is logically equivalent to $p \\to q$."
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
        "source": "pyq:MR25-DM-M1-2023",
        "explanation": "Modus Tollens (denying the consequent) deduces the negation of the antecedent from the negation of the consequent."
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
        "source": "pyq:MR25-DM-M1-2024",
        "explanation": "Universal claims across a category use conditional implication: for all $x$, if $x$ is a student then $x$ loves mathematics."
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
        "source": "pyq:MR25-DM-M1-2022",
        "explanation": "An equivalence relation requires reflexivity, symmetry, and transitivity. Antisymmetry is required for a POSET, not an equivalence relation."
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
        "source": "pyq:MR25-DM-M1-2023",
        "explanation": "The Fundamental Theorem of Equivalence Relations states that an equivalence relation induces a partition of the set into disjoint equivalence classes."
      },
      {
        "id": "DM-M1-008",
        "type": "mcq",
        "unit": 2,
        "scope": "mid1",
        "topic": "POSET Definition",
        "question": "A relation that is reflexive, antisymmetric, and transitive is called a:",
        "options": [
          "Equivalence Relation",
          "Symmetric Closure",
          "Partial Order",
          "Total Disjunction"
        ],
        "answerIndex": 2,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-M1-2024",
        "explanation": "A partially ordered set (POSET) is defined by reflexivity, antisymmetry, and transitivity."
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
        "id": "DM-M1-010",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Semigroup Definition",
        "question": "An algebraic structure $(S, *)$ is called a Semigroup if the binary operation $*$ satisfies:",
        "options": [
          "Closure, Associativity, and Identity",
          "Closure only",
          "Closure and Commutativity only",
          "Closure and Associativity"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-DM-M1-2022",
        "explanation": "A semigroup satisfies closure and associativity. A monoid adds an identity element."
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
        "source": "pyq:MR25-DM-M1-2023",
        "explanation": "For any $n \\in \\mathbb{N}$, $n + 0 = 0 + n = n$, so 0 is the additive identity."
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
          "$f(a * b) = f(a) \\cdot f(b)$",
          "$f(a) = f(b)$",
          "$f(a * b) = a \\cdot b$"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DM-M1-2024",
        "explanation": "A homomorphism preserves algebraic operations: $f(a * b) = f(a) \\cdot f(b)$."
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
          "0101101",
          "1010100",
          "1010011",
          "1101100"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-COA-M1-2023",
        "explanation": "To find 2's complement: invert all bits (1010011) and add 1 $\\implies 1010100$."
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
        "source": "pyq:MR25-COA-M1-2022",
        "explanation": "Booth's multiplication treats 2's complement signed operands without needing separate sign handling."
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
          "Decoder",
          "Priority Encoder",
          "Multiplexer"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-COA-M1-2024",
        "explanation": "A multiplexer selects whether the next microinstruction address comes from the sequencer incrementer or an external branch address."
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
          "Compilation into bytecode executed on platform-specific JVMs",
          "Direct assembly generation",
          "Running purely in web browsers"
        ],
        "answerIndex": 1,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-M1-2023",
        "explanation": "Javac compiles source into standard bytecode (.class), which is executed on any system equipped with a compatible JVM."
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
        "source": "pyq:MR25-OOPJ-M1-2022",
        "explanation": "The 'implements' keyword binds a class to provide concrete implementations for methods declared in an interface."
      },
      {
        "id": "OOPJ-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Exception Handling",
        "question": "Which block in Java exception handling ALWAYS executes whether an exception is thrown or not?",
        "options": [
          "finally",
          "catch",
          "throw",
          "try"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-OOPJ-M1-2024",
        "explanation": "The finally block is guaranteed to execute after try/catch blocks (unless System.exit() is called), ideal for releasing resources."
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
        "source": "pyq:MR25-DBMS-M1-2023",
        "explanation": "Naive users interact with the database via dedicated application forms and interfaces without knowing SQL."
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
        "source": "pyq:MR25-DBMS-M1-2022",
        "explanation": "A candidate key uniquely identifies tuples and contains no proper subset that also uniquely identifies tuples."
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
          "The set of all attributes functionally determined by $X$ under $F$",
          "The primary key of $X$",
          "The foreign keys pointing to $X$"
        ],
        "answerIndex": 1,
        "difficulty": "medium",
        "source": "pyq:MR25-DBMS-M1-2024",
        "explanation": "$X^+$ is computed using Armstrong's axioms and includes every attribute $A$ such that $X \\rightarrow A$ can be derived from $F$."
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
          "Prototypes must be demonstrated immediately",
          "The team has never used the programming language",
          "Requirements are completely clear, stable, and well-understood upfront"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-M1-2023",
        "explanation": "Waterfall works well for stable projects where requirements are locked in stone and changes are minimal."
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
        "source": "pyq:MR25-SE-M1-2022",
        "explanation": "Actors represent humans, external software, or hardware systems initiating or receiving use case actions."
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
          "Event-Driven Architecture",
          "Layered (Multitier) Architecture"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-SE-M1-2024",
        "explanation": "In layered architecture (e.g. presentation, business logic, data access), dependencies flow strictly top-to-bottom."
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
          "Primary Producers (First Trophic Level)",
          "Secondary Consumers",
          "Decomposers",
          "Primary Consumers"
        ],
        "answerIndex": 0,
        "difficulty": "easy",
        "source": "pyq:MR25-ES-M1-2023",
        "explanation": "Autotrophic primary producers capture solar radiation via photosynthesis and form the base first trophic level."
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
        "source": "pyq:MR25-ES-M1-2022",
        "explanation": "Renewable resources regenerate naturally over human timescales without depleting."
      },
      {
        "id": "ES-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Air Pollution Smog",
        "question": "Photochemical smog is primarily formed by the reaction of sunlight with:",
        "options": [
          "Argon and Neon",
          "Carbon monoxide and Water vapor",
          "Nitrogen oxides ($NO_x$) and Volatile Organic Compounds (VOCs)",
          "Sulfur dioxide and Clay dust"
        ],
        "answerIndex": 2,
        "difficulty": "medium",
        "source": "pyq:MR25-ES-M1-2024",
        "explanation": "Solar ultraviolet rays trigger photochemical reactions between automobile $NO_x$ and VOCs, producing secondary pollutants like tropospheric ozone and PAN."
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
          "Desire for routine repetitive tasks",
          "High Need for Achievement (nAch) and Calculated Risk-Taking"
        ],
        "answerIndex": 3,
        "difficulty": "easy",
        "source": "pyq:MR25-IE-M1-2023",
        "explanation": "McClelland's empirical research identifies high Need for Achievement (nAch), internal locus of control, and calculated risk-taking as primary entrepreneurial traits."
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
        "source": "pyq:MR25-IE-M1-2022",
        "explanation": "Empathize immerses designers in the user's emotional and operational context to uncover latent needs."
      },
      {
        "id": "IE-M1-003",
        "type": "mcq",
        "unit": 3,
        "scope": "mid1",
        "topic": "Value Proposition Canvas",
        "question": "The Value Proposition Canvas maps which two key components against each other?",
        "options": [
          "Patent claims and Prior art",
          "Equity dilution and Cap table",
          "Balance Sheet and Profit & Loss Statement",
          "Customer Profile (Pains, Gains, Jobs) and Company Value Map (Pain Relievers, Gain Creators, Products)"
        ],
        "answerIndex": 3,
        "difficulty": "medium",
        "source": "pyq:MR25-IE-M1-2024",
        "explanation": "Strategyzer's Value Proposition Canvas achieves product-market fit by aligning customer Jobs, Pains, and Gains with company Products, Pain Relievers, and Gain Creators."
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
      "back": "• Tautology: Always TRUE under every truth assignment (e.g., $p \\lor \\neg p$).\n• Contradiction: Always FALSE under every truth assignment (e.g., $p \\land \\neg p$)."
    },
    {
      "id": "FC-M1-DM-02",
      "subjectId": "DM",
      "unit": 1,
      "topic": "Modus Ponens vs Modus Tollens",
      "highYield": true,
      "front": "State the inference rules for Modus Ponens and Modus Tollens.",
      "back": "• Modus Ponens: From $p$ and $p \\to q$, conclude $q$.\n• Modus Tollens: From $\\neg q$ and $p \\to q$, conclude $\\neg p$."
    },
    {
      "id": "FC-M1-DM-03",
      "subjectId": "DM",
      "unit": 1,
      "topic": "Principal Normal Forms (PCNF & PDNF)",
      "highYield": true,
      "front": "What are PDNF and PCNF in propositional logic?",
      "back": "• PDNF (Disjunctive): Sum of minterms where formula evaluates to TRUE.\n• PCNF (Conjunctive): Product of maxterms where formula evaluates to FALSE."
    },
    {
      "id": "FC-M1-DM-04",
      "subjectId": "DM",
      "unit": 1,
      "topic": "De Morgan's Laws",
      "highYield": true,
      "front": "State De Morgan's Laws for logic and sets.",
      "back": "• $\\neg (p \\land q) \\equiv \\neg p \\lor \\neg q$\n• $\\neg (p \\lor q) \\equiv \\neg p \\land \\neg q$\n• Sets: $(A \\cap B)' = A' \\cup B'$ and $(A \\cup B)' = A' \\cap B'$."
    },
    {
      "id": "FC-M1-DM-05",
      "subjectId": "DM",
      "unit": 1,
      "topic": "Universal vs Existential Quantifiers",
      "highYield": true,
      "front": "How do negations of quantifiers work?",
      "back": "• $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$\n• $\\neg(\\exists x P(x)) \\equiv \\forall x \\neg P(x)$"
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
      "back": "• Omit all self-loops (reflexivity implied).\n• Omit all transitive edges (transitivity implied).\n• Draw edges pointing upwards so direction is implicit."
    },
    {
      "id": "FC-M1-DM-09",
      "subjectId": "DM",
      "unit": 2,
      "topic": "Lattice Definition",
      "highYield": true,
      "front": "What is a Lattice in discrete mathematics?",
      "back": "A Poset $(L, \\le)$ where every pair of elements $a, b \\in L$ has:\n• Least Upper Bound: $a \\lor b$ (LUB / Join)\n• Greatest Lower Bound: $a \\land b$ (GLB / Meet)."
    },
    {
      "id": "FC-M1-DM-10",
      "subjectId": "DM",
      "unit": 2,
      "topic": "Principle of Inclusion-Exclusion",
      "highYield": true,
      "front": "State the Principle of Inclusion-Exclusion for 2 and 3 sets.",
      "back": "• $|A \\cup B| = |A| + |B| - |A \\cap B|$\n• $|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |A \\cap C|) + |A \\cap B \\cap C|$."
    },
    {
      "id": "FC-M1-DM-11",
      "subjectId": "DM",
      "unit": 3,
      "topic": "Semigroup vs Monoid",
      "highYield": true,
      "front": "What distinguishes a Semigroup from a Monoid?",
      "back": "• Semigroup $(S, *)$: Closed and Associative: $(a * b) * c = a * (b * c)$.\n• Monoid $(M, *)$: A Semigroup with an Identity element $e$ such that $a * e = e * a = a$."
    },
    {
      "id": "FC-M1-DM-12",
      "subjectId": "DM",
      "unit": 3,
      "topic": "Group Axioms",
      "highYield": true,
      "front": "What four axioms must an algebraic system $(G, *)$ satisfy to be a Group?",
      "back": "1. Closure: $a * b \\in G$.\n2. Associativity: $(a * b) * c = a * (b * c)$.\n3. Identity: $\\exists e \\in G$ such that $a * e = e * a = a$.\n4. Inverse: $\\forall a \\in G, \\exists a^{-1} \\in G$ such that $a * a^{-1} = e$."
    },
    {
      "id": "FC-M1-DM-13",
      "subjectId": "DM",
      "unit": 3,
      "topic": "Abelian Group",
      "highYield": true,
      "front": "What additional condition makes a Group an Abelian Group?",
      "back": "Commutativity: $a * b = b * a$ for all $a, b \\in G$."
    },
    {
      "id": "FC-M1-DM-14",
      "subjectId": "DM",
      "unit": 3,
      "topic": "Lagrange's Theorem",
      "highYield": true,
      "front": "State Lagrange's Theorem for finite groups.",
      "back": "The order of any subgroup $H$ of a finite group $G$ divides the order of $G$:\n$|G| = [G:H] \\times |H|$, where $[G:H]$ is the index of $H$ in $G$."
    },
    {
      "id": "FC-M1-DM-15",
      "subjectId": "DM",
      "unit": 3,
      "topic": "Cosets & Subgroups",
      "highYield": true,
      "front": "What is a Left Coset of subgroup $H$ in $G$?",
      "back": "For $a \\in G$, the left coset $aH = \\{a * h \\mid h \\in H\\}$. Any two cosets are either identical or disjoint."
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
      "back": "• Von Neumann: Single shared memory & bus for both data and instructions (Von Neumann bottleneck).\n• Harvard: Separate physical memories and buses for instructions and data (simultaneous fetch & access)."
    },
    {
      "id": "FC-M1-COA-02",
      "subjectId": "COA",
      "unit": 1,
      "topic": "Addressing Modes: Immediate vs Direct vs Indirect",
      "highYield": true,
      "front": "Compare Immediate, Direct, and Indirect addressing modes.",
      "back": "• Immediate: Operand is part of instruction (`ADD #5`).\n• Direct: Address field gives memory address of operand (`ADD 1000`).\n• Indirect: Address field points to memory containing effective address (`ADD @1000`)."
    },
    {
      "id": "FC-M1-COA-03",
      "subjectId": "COA",
      "unit": 1,
      "topic": "Relative & Indexed Addressing Modes",
      "highYield": true,
      "front": "How are Effective Addresses calculated in Relative and Indexed addressing?",
      "back": "• Relative: $EA = PC + \\text{Address Field}$ (used in branch instructions).\n• Indexed: $EA = XR + \\text{Address Field}$ (used for array indexing)."
    },
    {
      "id": "FC-M1-COA-04",
      "subjectId": "COA",
      "unit": 1,
      "topic": "Instruction Formats (3 vs 2 vs 1 vs 0 Address)",
      "highYield": true,
      "front": "How do 3, 2, 1, and 0-address machines execute arithmetic?",
      "back": "• 3-Address: `ADD R1, R2, R3` ($R1 \\leftarrow R2 + R3$)\n• 2-Address: `ADD R1, R2` ($R1 \\leftarrow R1 + R2$)\n• 1-Address: `ADD X` ($AC \\leftarrow AC + M[X]$)\n• 0-Address: `ADD` (Pops top two stack elements, pushes sum)."
    },
    {
      "id": "FC-M1-COA-05",
      "subjectId": "COA",
      "unit": 1,
      "topic": "Big-Endian vs Little-Endian",
      "highYield": true,
      "front": "What is the difference between Big-Endian and Little-Endian byte ordering?",
      "back": "• Big-Endian: Most Significant Byte (MSB) stored at lowest memory address.\n• Little-Endian: Least Significant Byte (LSB) stored at lowest memory address."
    },
    {
      "id": "FC-M1-COA-06",
      "subjectId": "COA",
      "unit": 2,
      "topic": "Hardwired vs Microprogrammed Control Unit",
      "highYield": true,
      "front": "Compare Hardwired and Microprogrammed Control Units.",
      "back": "• Hardwired: Combinational logic gates, faster speed, rigid and difficult to modify.\n• Microprogrammed: Microinstructions stored in Control ROM, slower due to memory access, flexible and easy to update."
    },
    {
      "id": "FC-M1-COA-07",
      "subjectId": "COA",
      "unit": 2,
      "topic": "Control Word in Register Organization",
      "highYield": true,
      "front": "What are the components of a CPU Control Word?",
      "back": "• SELA (3 bits): Selects Source Register A.\n• SELB (3 bits): Selects Source Register B.\n• SELD (3 bits): Selects Destination Register.\n• OPR (5 bits): Selects ALU operation."
    },
    {
      "id": "FC-M1-COA-08",
      "subjectId": "COA",
      "unit": 2,
      "topic": "Stack Organization (Push/Pop)",
      "highYield": true,
      "front": "How do Push and Pop operations update the Stack Pointer (SP)?",
      "back": "• Push: $SP \\leftarrow SP - 1$; $M[SP] \\leftarrow DR$ (for descending stack).\n• Pop: $DR \\leftarrow M[SP]$; $SP \\leftarrow SP + 1$."
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
      "back": "• Multiplexers needed: 8 (one per bit position).\n• MUX size: $4 \\times 1$ MUX.\n• Select lines: $\\log_2(4) = 2$ lines ($S_1, S_0$)."
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
      "back": "• Logical Shift: Transfers 0 into serial input (shl/shr).\n• Circular Shift (Rotate): Bit shifted out enters opposite end (cil/cir).\n• Arithmetic Shift: Shifts signed binary number; left shift checks overflow ($V$), right shift preserves sign bit."
    },
    {
      "id": "FC-M1-COA-13",
      "subjectId": "COA",
      "unit": 3,
      "topic": "Arithmetic Logic Shift Unit (ALSU)",
      "highYield": true,
      "front": "What operations are integrated into a single ALSU stage?",
      "back": "Arithmetic operations (Add, Sub, Inc, Dec), Logic operations (AND, OR, XOR, NOT), and Shift operations (shl, shr) selected via common function select lines ($S_3, S_2, S_1, S_0$)."
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
      "back": "• JVM: Abstract engine that interprets/JIT-compiles bytecode into native machine code.\n• JRE: JVM + core Java class libraries (runs Java programs).\n• JDK: JRE + development tools (`javac`, `javadoc`, debugger)."
    },
    {
      "id": "FC-M1-OOPJ-03",
      "subjectId": "OOPJ",
      "unit": 1,
      "topic": "Type Casting (Widening vs Narrowing)",
      "highYield": true,
      "front": "What is the difference between Widening and Narrowing conversion in Java?",
      "back": "• Widening (Implicit): Smaller type to larger type (`int` to `double`); safe, no data loss.\n• Narrowing (Explicit): Larger type to smaller type (`double` to `int`); requires explicit cast `(int)d`, potential precision loss."
    },
    {
      "id": "FC-M1-OOPJ-04",
      "subjectId": "OOPJ",
      "unit": 2,
      "topic": "Method Overloading vs Overriding",
      "highYield": true,
      "front": "Compare Method Overloading and Method Overriding in Java.",
      "back": "• Overloading: Same class, same name, different parameter signature; Compile-time polymorphism.\n• Overriding: Parent & Child classes, same name and identical signature; Runtime polymorphism (`@Override`)."
    },
    {
      "id": "FC-M1-OOPJ-05",
      "subjectId": "OOPJ",
      "unit": 2,
      "topic": "The `this` and `super` Keywords",
      "highYield": true,
      "front": "What are the primary uses of `this` and `super` in Java?",
      "back": "• `this`: Refers to current object instance; resolves variable shadowing (`this.x = x`) and constructor chaining (`this()`).\n• `super`: Refers to direct superclass; calls parent constructor (`super()`) and parent overridden methods (`super.show()`)."
    },
    {
      "id": "FC-M1-OOPJ-06",
      "subjectId": "OOPJ",
      "unit": 2,
      "topic": "Abstract Class vs Interface",
      "highYield": true,
      "front": "Key differences between Abstract Classes and Interfaces in Java (Java 8+).",
      "back": "• Abstract Class: Can have state (instance variables) and constructors; single inheritance (`extends`).\n• Interface: Variables are `public static final`; multiple inheritance (`implements`); can have `default` & `static` methods."
    },
    {
      "id": "FC-M1-OOPJ-07",
      "subjectId": "OOPJ",
      "unit": 2,
      "topic": "The `final` Keyword",
      "highYield": true,
      "front": "What happens when `final` is applied to a Variable, Method, or Class?",
      "back": "• `final` Variable: Constant value, cannot be reassigned.\n• `final` Method: Cannot be overridden in subclasses.\n• `final` Class: Cannot be inherited (e.g., `java.lang.String`)."
    },
    {
      "id": "FC-M1-OOPJ-08",
      "subjectId": "OOPJ",
      "unit": 3,
      "topic": "Checked vs Unchecked Exceptions",
      "highYield": true,
      "front": "Distinguish between Checked and Unchecked Exceptions in Java.",
      "back": "• Checked: Subclasses of `Exception` (excluding `RuntimeException`); verified at compile time (`IOException`, `SQLException`); must be handled or declared.\n• Unchecked: Subclasses of `RuntimeException` and `Error`; occur at runtime (`NullPointerException`, `ArrayIndexOutOfBoundsException`)."
    },
    {
      "id": "FC-M1-OOPJ-09",
      "subjectId": "OOPJ",
      "unit": 3,
      "topic": "`throw` vs `throws`",
      "highYield": true,
      "front": "Compare the `throw` and `throws` keywords in Java.",
      "back": "• `throw`: Explicitly triggers an exception instance inside a method body (`throw new ArithmeticException(\"Divide by zero\");`).\n• `throws`: Declared in method signature to indicate exceptions the method may pass to its caller (`void read() throws IOException`)."
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
      "back": "• Levels: External (Views) $\\to$ Conceptual (Logical schema) $\\to$ Internal (Physical storage).\n• Logical Independence: Conceptual schema changed without modifying user views.\n• Physical Independence: Internal storage changed without modifying conceptual schema."
    },
    {
      "id": "FC-M1-DBMS-02",
      "subjectId": "DBMS",
      "unit": 1,
      "topic": "Primary Key vs Unique Key vs Super Key",
      "highYield": true,
      "front": "Differentiate between Super Key, Candidate Key, and Primary Key.",
      "back": "• Super Key: Any set of attributes uniquely identifying a tuple.\n• Candidate Key: Minimal Super Key (no redundant attributes).\n• Primary Key: Candidate key chosen by DBA; MUST be unique and NOT NULL."
    },
    {
      "id": "FC-M1-DBMS-03",
      "subjectId": "DBMS",
      "unit": 1,
      "topic": "ER Model: Cardinality & Participation",
      "highYield": true,
      "front": "Explain Mapping Cardinality and Participation Constraints in ER diagrams.",
      "back": "• Cardinality: 1:1, 1:N, N:1, M:N relationships.\n• Participation: Total (double line, every entity participates) vs Partial (single line, optional participation)."
    },
    {
      "id": "FC-M1-DBMS-04",
      "subjectId": "DBMS",
      "unit": 2,
      "topic": "Relational Integrity Constraints",
      "highYield": true,
      "front": "What are the three core integrity constraints in relational databases?",
      "back": "1. Domain Constraint: Values must belong to the valid attribute domain.\n2. Entity Integrity: Primary key attributes cannot contain NULL values.\n3. Referential Integrity: Foreign key value must match an existing primary key value or be NULL."
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
      "back": "• Natural Join ($R \\bowtie S$): Equi-join on all common attributes, eliminating duplicate attribute columns.\n• Theta Join ($R \\bowtie_\\theta S$): Join based on arbitrary comparison condition ($\\theta \\in \\{<, \\le, =, \\ne, >, \\ge\\}$); keeps both columns."
    },
    {
      "id": "FC-M1-DBMS-07",
      "subjectId": "DBMS",
      "unit": 3,
      "topic": "SQL Joins: Inner vs Outer (Left, Right, Full)",
      "highYield": true,
      "front": "Distinguish between Inner Join and Outer Joins in SQL.",
      "back": "• Inner Join: Returns only rows with matching values in both tables.\n• Left Outer Join: Returns all rows from left table + matched rows from right (unmatched right filled with NULLs).\n• Right Outer Join: Returns all from right table.\n• Full Outer Join: Returns all rows from both tables."
    },
    {
      "id": "FC-M1-DBMS-08",
      "subjectId": "DBMS",
      "unit": 3,
      "topic": "WHERE vs HAVING Clause",
      "highYield": true,
      "front": "What is the difference between WHERE and HAVING in SQL?",
      "back": "• WHERE: Filters individual rows BEFORE aggregation (`GROUP BY`); cannot use aggregate functions.\n• HAVING: Filters grouped sets AFTER aggregation; can use aggregate functions (`HAVING COUNT(*) > 5`)."
    },
    {
      "id": "FC-M1-DBMS-09",
      "subjectId": "DBMS",
      "unit": 3,
      "topic": "SQL Triggers (ECA Architecture)",
      "highYield": true,
      "front": "Explain the Event-Condition-Action (ECA) rule in SQL Triggers.",
      "back": "• Event: Database operation (INSERT, UPDATE, DELETE).\n• Condition: Boolean check evaluated when event occurs.\n• Action: Procedural SQL block executed if condition holds (BEFORE or AFTER event, FOR EACH ROW)."
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
      "back": "• Waterfall: Linear, sequential phases; rigid; working software delivered late; high documentation.\n• Agile Scrum: Iterative, sprint-based (2–4 weeks); welcomes changing requirements; working software delivered continuously."
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
      "back": "• Functional: Specific services/behaviors system must perform (e.g., 'System shall process credit card payments').\n• Non-Functional: Quality attributes & constraints (Performance, Security, Reliability, Usability)."
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
      "back": "• <<include>>: Mandatory sub-flow; base use case cannot complete without it (e.g., 'Make Payment' <<include>> 'Authenticate User').\n• <<extend>>: Optional or conditional behavior added at an extension point (e.g., 'Checkout' <<extend>> 'Apply Promo Coupon')."
    },
    {
      "id": "FC-M1-SE-06",
      "subjectId": "SE",
      "unit": 3,
      "topic": "Cohesion vs Coupling",
      "highYield": true,
      "front": "Define Cohesion and Coupling. What is ideal in software design?",
      "back": "• Cohesion: Degree of functional relatedness among elements within a module (High Cohesion is desired).\n• Coupling: Degree of interdependence between different modules (Low Coupling is desired).\n• Golden Rule: High Cohesion and Low Coupling."
    },
    {
      "id": "FC-M1-SE-07",
      "subjectId": "SE",
      "unit": 3,
      "topic": "Architectural Styles (Layered vs Pipe-and-Filter)",
      "highYield": true,
      "front": "Compare Layered and Pipe-and-Filter architectural styles.",
      "back": "• Layered: Modules organized hierarchically; each layer provides services only to the layer above it (e.g., Presentation, Business, Data layers).\n• Pipe-and-Filter: Data streams through successive transformation filters via pipes (e.g., Unix compilers, image processing pipelines)."
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
      "back": "• Biotic: Producers (Autotrophs), Consumers (Herbivores, Carnivores, Omnivores), Decomposers (Saprotrophs).\n• Abiotic: Climatic factors (light, temperature, moisture), Edaphic factors (soil, minerals), inorganic substances."
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
      "topic": "Ecological Pyramids (Energy Pyramid Inversion?)",
      "highYield": true,
      "front": "Can a Pyramid of Energy ever be inverted? Explain.",
      "back": "NO. A Pyramid of Energy is ALWAYS upright, because energy is continuously lost as heat at each successive trophic level according to the Second Law of Thermodynamics."
    },
    {
      "id": "FC-M1-ES-04",
      "subjectId": "ES",
      "unit": 2,
      "topic": "Renewable vs Non-Renewable Energy Resources",
      "highYield": true,
      "front": "Compare Renewable and Non-Renewable Energy Resources with examples.",
      "back": "• Renewable: Replenished naturally in short cycles; eco-friendly (Solar, Wind, Hydroelectric, Geothermal, Biomass).\n• Non-Renewable: Finite geological reserves; emit greenhouse gases upon combustion (Coal, Petroleum, Natural Gas, Nuclear Uranium)."
    },
    {
      "id": "FC-M1-ES-05",
      "subjectId": "ES",
      "unit": 3,
      "topic": "Three Levels of Biodiversity",
      "highYield": true,
      "front": "Define Genetic, Species, and Ecosystem diversity.",
      "back": "1. Genetic: Variation of genes within a single species (e.g., 50,000+ strains of rice in India).\n2. Species: Variety of distinct species within a habitat (Species richness).\n3. Ecosystem: Variety of habitats, biotic communities, and ecological niches (e.g., forests, coral reefs, deserts)."
    },
    {
      "id": "FC-M1-ES-06",
      "subjectId": "ES",
      "unit": 3,
      "topic": "Consumptive vs Productive Use Value of Biodiversity",
      "highYield": true,
      "front": "Distinguish between Consumptive and Productive use values of biodiversity.",
      "back": "• Consumptive Use: Direct local consumption without commercial market sale (fuelwood, fodder, wild fruits).\n• Productive Use: Commercial exploitation for national/international markets (timber, pharmaceuticals, paper pulp, ivory, silk)."
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
      "back": "• Incremental: Small continuous improvements to existing products/technologies (e.g., iPhone camera upgrades).\n• Disruptive: Creates entirely new markets and value networks, eventually displacing established leaders (e.g., Netflix streaming displacing Blockbuster)."
    },
    {
      "id": "FC-M1-IE-02",
      "subjectId": "IE",
      "unit": 1,
      "topic": "Five Stages of Design Thinking",
      "highYield": true,
      "front": "List the 5 sequential phases of Stanford's Design Thinking methodology.",
      "back": "1. Empathize: Understand user needs through observation & interviews.\n2. Define: Synthesize insights into a user-centric problem statement.\n3. Ideate: Brainstorm creative solutions.\n4. Prototype: Build low-cost physical/digital representations.\n5. Test: Validate with real users."
    },
    {
      "id": "FC-M1-IE-03",
      "subjectId": "IE",
      "unit": 2,
      "topic": "Business Model Canvas (BMC) Core Blocks",
      "highYield": true,
      "front": "What are the 9 building blocks of Alexander Osterwalder's Business Model Canvas?",
      "back": "1. Customer Segments, 2. Value Propositions, 3. Channels, 4. Customer Relationships, 5. Revenue Streams, 6. Key Resources, 7. Key Activities, 8. Key Partnerships, 9. Cost Structure."
    },
    {
      "id": "FC-M1-IE-04",
      "subjectId": "IE",
      "unit": 3,
      "topic": "Market Sizing: TAM vs SAM vs SOM",
      "highYield": true,
      "front": "Explain TAM, SAM, and SOM in startup market opportunity sizing.",
      "back": "• TAM (Total Addressable Market): Total global market demand for the product/service category.\n• SAM (Serviceable Available Market): Portion of TAM targeted within reach of geographical & business model scope.\n• SOM (Serviceable Obtainable Market): Realistic market share captured in the near term (3–5 years)."
    },
    {
      "id": "FC-M1-IE-05",
      "subjectId": "IE",
      "unit": 3,
      "topic": "Minimum Viable Product (MVP)",
      "highYield": true,
      "front": "What is an MVP according to Eric Ries' Lean Startup?",
      "back": "The version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort and resource expenditure."
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

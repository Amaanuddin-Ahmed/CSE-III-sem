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
        "back": "• Tautology: Always TRUE under every truth assignment ($p \\lor \\neg p$).\n• Contradiction: Always FALSE under every truth assignment ($p \\land \\neg p$)."
      },
      {
        "id": "FC-M1-DM-02",
        "subjectId": "DM",
        "unit": 1,
        "topic": "Modus Ponens vs Modus Tollens",
        "highYield": true,
        "front": "State the premises and conclusions of Modus Ponens and Modus Tollens.",
        "back": "• Modus Ponens: $p$, $p \\to q \\vdash q$\n• Modus Tollens: $\\neg q$, $p \\to q \\vdash \\neg p$"
      },
      {
        "id": "FC-M1-DM-03",
        "subjectId": "DM",
        "unit": 2,
        "topic": "Equivalence vs POSET",
        "highYield": true,
        "front": "Compare Equivalence Relations and Partial Orders (POSETs).",
        "back": "• Equivalence: Reflexive + Symmetric + Transitive.\n• POSET: Reflexive + Antisymmetric + Transitive."
      },
      {
        "id": "FC-M1-DM-04",
        "subjectId": "DM",
        "unit": 3,
        "topic": "Semigroup and Monoid",
        "highYield": true,
        "front": "Define Semigroup and Monoid.",
        "back": "• Semigroup $(S, *)$: Closure + Associativity.\n• Monoid $(M, *, e)$: Semigroup + Identity element ($a * e = e * a = a$)."
      }
    ],
    "COA": [
      {
        "id": "FC-M1-COA-01",
        "subjectId": "COA",
        "unit": 1,
        "topic": "Booth's Bit-Pairs",
        "highYield": true,
        "front": "State Booth's Algorithm bit-pair operations for $(Q_0, Q_{-1})$.",
        "back": "• 00: Arithmetic Shift Right only.\n• 01: $A \\leftarrow A + M$, then Arithmetic Shift Right.\n• 10: $A \\leftarrow A - M$, then Arithmetic Shift Right.\n• 11: Arithmetic Shift Right only."
      },
      {
        "id": "FC-M1-COA-02",
        "subjectId": "COA",
        "unit": 2,
        "topic": "Hardwired vs Microprogrammed",
        "highYield": true,
        "front": "Compare Hardwired and Microprogrammed Control.",
        "back": "• Hardwired: Combinational logic gates, fastest speed, rigid.\n• Microprogrammed: Microcode in Control ROM, slower memory lookups, highly flexible/reprogrammable."
      }
    ],
    "OOPJ": [
      {
        "id": "FC-M1-OOPJ-01",
        "subjectId": "OOPJ",
        "unit": 1,
        "topic": "4 Pillars of OOP",
        "highYield": true,
        "front": "Name and define the 4 core pillars of OOP.",
        "back": "1. Encapsulation: Bundling data and methods with private access.\n2. Abstraction: Hiding internal complexity behind clean interfaces.\n3. Inheritance: Reusing code from superclasses.\n4. Polymorphism: Single interface, multiple implementations (overloading/overriding)."
      },
      {
        "id": "FC-M1-OOPJ-02",
        "subjectId": "OOPJ",
        "unit": 3,
        "topic": "Checked vs Unchecked Exceptions",
        "highYield": true,
        "front": "Compare Checked and Unchecked Exceptions in Java.",
        "back": "• Checked: Subclasses of Exception (excluding RuntimeException); checked at compile-time (e.g. IOException, SQLException).\n• Unchecked: Subclasses of RuntimeException and Error; happen at runtime (e.g. NullPointerException, ArrayIndexOutOfBoundsException)."
      }
    ],
    "DBMS": [
      {
        "id": "FC-M1-DBMS-01",
        "subjectId": "DBMS",
        "unit": 1,
        "topic": "DBA Responsibilities",
        "highYield": true,
        "front": "List 4 primary duties of a Database Administrator (DBA).",
        "back": "1. Schema definition and physical storage organization.\n2. Granting user authorizations and role privileges.\n3. Routine backup and disaster recovery management.\n4. Performance monitoring and index tuning."
      },
      {
        "id": "FC-M1-DBMS-02",
        "subjectId": "DBMS",
        "unit": 3,
        "topic": "Armstrong's Axioms",
        "highYield": true,
        "front": "State Armstrong's 3 primary Axioms for Functional Dependencies.",
        "back": "1. Reflexivity: If $Y \\subseteq X$, then $X \\to Y$.\n2. Augmentation: If $X \\to Y$, then $XZ \\to YZ$.\n3. Transitivity: If $X \\to Y$ and $Y \\to Z$, then $X \\to Z$."
      }
    ],
    "SE": [
      {
        "id": "FC-M1-SE-01",
        "subjectId": "SE",
        "unit": 1,
        "topic": "Agile Manifesto 4 Values",
        "highYield": true,
        "front": "State the 4 Core Values of the Agile Manifesto.",
        "back": "1. Individuals and interactions over processes and tools.\n2. Working software over comprehensive documentation.\n3. Customer collaboration over contract negotiation.\n4. Responding to change over following a plan."
      },
      {
        "id": "FC-M1-SE-02",
        "subjectId": "SE",
        "unit": 2,
        "topic": "Functional vs Non-Functional Requirements",
        "highYield": true,
        "front": "Contrast Functional and Non-Functional Requirements.",
        "back": "• Functional: What the system does (features, calculations, user workflows).\n• Non-Functional: How well the system performs (latency, throughput, security, availability, compliance)."
      }
    ],
    "ES": [
      {
        "id": "FC-M1-ES-01",
        "subjectId": "ES",
        "unit": 1,
        "topic": "Food Chain vs Food Web",
        "highYield": true,
        "front": "Compare Food Chain with Food Web.",
        "back": "• Food Chain: Linear single pathway of energy transfer (Grass $\\to$ Deer $\\to$ Tiger).\n• Food Web: Interconnected network of multiple overlapping food chains; provides ecological resilience and stability."
      },
      {
        "id": "FC-M1-ES-02",
        "subjectId": "ES",
        "unit": 2,
        "topic": "In-situ vs Ex-situ Conservation",
        "highYield": true,
        "front": "Distinguish between In-situ and Ex-situ Biodiversity Conservation.",
        "back": "• In-situ: Conserving species in their natural wild habitats (National Parks, Sanctuaries, Biosphere Reserves).\n• Ex-situ: Conserving outside natural habitat in artificial human-managed facilities (Zoos, Botanical Gardens, Seed Banks)."
      }
    ],
    "IE": [
      {
        "id": "FC-M1-IE-01",
        "subjectId": "IE",
        "unit": 1,
        "topic": "Intrapreneur vs Entrepreneur",
        "highYield": true,
        "front": "Differentiate Entrepreneur from Intrapreneur.",
        "back": "• Entrepreneur: Founds and finances an independent new venture, assumes full personal financial risk.\n• Intrapreneur: Innovates and champions new ventures inside an established corporation using corporate capital with mitigated personal financial risk."
      },
      {
        "id": "FC-M1-IE-02",
        "subjectId": "IE",
        "unit": 3,
        "topic": "Product-Market Fit (PMF)",
        "highYield": true,
        "front": "What is Product-Market Fit (Marc Andreessen)?",
        "back": "The stage where a startup has developed a product that satisfies a strong market demand, verified by organic customer pull, high retention, and accelerating referral loops."
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

/* Auto-generated verified academic structured summaries for MGIT PYQ Hub. */
const NOTE_SUMMARIES = {
 "NOTE-COA-01": {
  "noteId": "NOTE-COA-01",
  "subjectId": "COA",
  "chapter": 2,
  "title": "COA Unit 2: Combinational & Sequential Logic",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinational circuits produce outputs that depend strictly on present inputs, whereas sequential circuits utilize storage elements (flip-flops) where outputs depend on present inputs and past state history.",
  "topics": [
   {
    "title": "Karnaugh Maps (K-Maps) & Minimization",
    "summary": "K-maps provide a visual graphic method for minimizing Boolean expressions into minimal SOP or POS forms, preventing algebraic errors.",
    "points": [
     "Grouping Rules: Groups must be powers of 2 (1, 2, 4, 8, 16 cells); cells are arranged in Gray code order.",
     "Adjacent cells differ by exactly one variable.",
     "Don't Care conditions (X): Can be treated as 1 to enlarge groups for simpler terms, or 0 if not helpful.",
     "Minimal SOP: Sum of all Essential Prime Implicants."
    ],
    "formulas": [
     "Cell coordinates use Gray code: 00, 01, 11, 10"
    ],
    "example": "In a 4-variable K-map, grouping 4 adjacent corner cells eliminates 2 variables, yielding a 2-literal product term."
   },
   {
    "title": "Combinational Circuits: Adders & Subtractors",
    "summary": "Adders form the core of arithmetic logic units (ALUs).",
    "points": [
     "Half Adder: Adds two 1-bit inputs A and B; outputs Sum S = A ⊕ B and Carry C = AB.",
     "Full Adder: Adds three 1-bit inputs A, B, and Cin; implemented using two Half Adders and an OR gate.",
     "Full Subtractor: Computes Difference D = A ⊕ B ⊕ Bin and Borrow Bout = A'B + (A ⊕ B)'Bin.",
     "Carry Lookahead Adder (CLA): Eliminates ripple carry propagation delay by computing generate (Gi = AiBi) and propagate (Pi = Ai ⊕ Bi) signals in parallel."
    ],
    "formulas": [
     "Full Adder Sum: S = A ⊕ B ⊕ Cin",
     "Full Adder Carry: Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin",
     "Lookahead Carry: Ci+1 = Gi + Pi Ci"
    ],
    "example": "Half Adder adding A=1, B=1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (result is binary 10)."
   },
   {
    "title": "Multiplexers, Decoders & Encoders",
    "summary": "Standard MSI combinational logic building blocks for routing and addressing.",
    "points": [
     "Multiplexer (MUX): Data selector; routes one of 2^n data input lines to a single output line using n selection lines.",
     "Decoder: Converts an n-bit binary code into maximum 2^n unique output lines (e.g. 3-to-8 decoder).",
     "Priority Encoder: Produces binary code corresponding to the highest-priority active input line.",
     "Any Boolean function with n variables can be implemented directly using a 2^(n-1)-to-1 MUX."
    ],
    "formulas": [
     "MUX relation: 2^n data inputs require n select lines.",
     "Decoder relation: n inputs activate 1 of 2^n outputs."
    ],
    "example": "A 4-to-1 MUX has 4 data inputs (I0, I1, I2, I3), 2 select lines (S1, S0), and output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3."
   },
   {
    "title": "Latches, Flip-Flops & Sequential Circuits",
    "summary": "Flip-flops are bistable memory elements that store 1 bit of information and change state on clock signal edges.",
    "points": [
     "SR Flip-Flop: Set and Reset; condition S = R = 1 is invalid/indeterminate.",
     "JK Flip-Flop: Eliminates SR invalid condition; J=1, K=1 causes output to toggle.",
     "D Flip-Flop: Data flip-flop; output follows input D on active clock edge (Q_next = D).",
     "T Flip-Flop: Toggle flip-flop; output toggles when T=1, holds state when T=0.",
     "Race-around condition in JK: Occurs in level-triggered JK when clock pulse width tp > propagation delay; solved using Master-Slave or edge-triggering."
    ],
    "formulas": [
     "JK Characteristic Equation: Q_next = J Q' + K' Q",
     "D Characteristic Equation: Q_next = D",
     "T Characteristic Equation: Q_next = T ⊕ Q"
    ],
    "example": "In a T flip-flop, if present state Q=0 and T=1, on clock edge Q_next = 1 ⊕ 0 = 1."
   }
  ],
  "mustKnow": [
   "Full adder equations: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B)",
   "Carry Lookahead eliminates ripple delay using Gi = AiBi and Pi = Ai ⊕ Bi",
   "Race-around condition occurs when level-triggered JK flip-flop has tp > tpd",
   "Master-Slave flip-flop or edge-triggering solves race-around condition",
   "A 2^n to 1 MUX requires n select lines"
  ]
 },
 "NOTE-COA-02": {
  "noteId": "NOTE-COA-02",
  "subjectId": "COA",
  "chapter": 1,
  "title": "COA Unit 1: Boolean Algebra, Logic Gates & Data Representation",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Covers foundational digital computer logic, number systems, binary data representations, error codes, and Boolean logic gates essential for digital systems design.",
  "topics": [
   {
    "title": "Number Systems & Radix Conversions",
    "summary": "Positional number systems use a base (radix) r. Standard systems in computing are binary (r=2), octal (r=8), decimal (r=10), and hexadecimal (r=16).",
    "points": [
     "Base r to decimal: Multiply each digit by positional weight r^i.",
     "Decimal to base r: Successive division by r for integer part; successive multiplication by r for fraction.",
     "Binary to Hexadecimal: Group binary bits into sets of 4 from the binary point.",
     "Binary to Octal: Group binary bits into sets of 3 from the binary point."
    ],
    "formulas": [
     "Value = ∑ [i=-m to n-1] di × r^i",
     "(r's complement of N) = r^n - N",
     "((r-1)'s complement of N) = (r^n - 1) - N"
    ],
    "example": "Convert (110101.11)2 to hex: Group bits (0011 0101 . 1100)2 = (35.C)16."
   },
   {
    "title": "Signed Number Representations & 2's Complement",
    "summary": "Digital computers represent negative numbers using signed magnitude, 1's complement, or 2's complement. 2's complement is universally preferred because zero has a single representation and addition/subtraction hardware is unified.",
    "points": [
     "Signed Magnitude: MSB is sign bit (0 = positive, 1 = negative); remaining bits store magnitude.",
     "1's Complement: Invert every bit of positive binary number.",
     "2's Complement: Add 1 to the 1's complement (or invert all bits after the least significant 1).",
     "Overflow in 2's complement: Occurs when adding two numbers with the same sign yields a result with opposite sign."
    ],
    "formulas": [
     "Range of n-bit 2's complement integers: -2^(n-1) to +(2^(n-1) - 1)",
     "Overflow = C_in ⊕ C_out into the sign bit"
    ],
    "example": "Represent -5 in 8-bit 2's complement: +5 is 00000101. 1's complement is 11111010. Add 1 gives 11111011."
   },
   {
    "title": "Binary Codes & Error Detection",
    "summary": "Binary codes map alphanumeric characters and decimal digits into unique binary sequences.",
    "points": [
     "BCD (8421): Represents each decimal digit with 4 binary bits (invalid codes: 1010 to 1111).",
     "Excess-3 Code: BCD + 0011; self-complementing code used in arithmetic decimal units.",
     "Gray Code: Unit-distance code where successive values differ by strictly one bit; prevents transient glitches.",
     "Parity Bit: Appended bit making total number of 1s even (even parity) or odd (odd parity)."
    ],
    "formulas": [
     "Binary to Gray conversion: G_MSB = B_MSB;  G_i = B_i ⊕ B_(i+1)"
    ],
    "example": "Decimal 9 in BCD is 1001. In Excess-3 it is 1001 + 0011 = 1100."
   },
   {
    "title": "Boolean Algebra & Logic Gates",
    "summary": "Boolean algebra manipulates two-valued logic variables (0 and 1). Basic gates are AND, OR, NOT; universal gates are NAND and NOR.",
    "points": [
     "NAND and NOR are Universal Gates because any Boolean function can be implemented using only NAND or only NOR gates.",
     "XOR Gate (Exclusive OR): Output is 1 strictly when inputs differ (odd parity detector): Y = A ⊕ B = A'B + AB'.",
     "XNOR Gate (Equivalence): Output is 1 strictly when inputs are identical: Y = AB + A'B'."
    ],
    "formulas": [
     "Involution: (A')' = A",
     "De Morgan: (A + B)' = A'B'  and  (AB)' = A' + B'"
    ],
    "example": "Implement NOT gate using 2-input NAND: Tie both inputs together: (A · A)' = A'."
   }
  ],
  "mustKnow": [
   "2's complement range for n bits: -2^(n-1) to 2^(n-1) - 1",
   "NAND and NOR are universal gates",
   "Overflow occurs when carry into sign bit ≠ carry out of sign bit (C_in ⊕ C_out = 1)",
   "Gray code differs by only 1 bit between consecutive values",
   "BCD invalid codes: 1010 through 1111 (10 to 15 decimal)"
  ]
 },
 "NOTE-ES-01": {
  "noteId": "NOTE-ES-01",
  "subjectId": "ES",
  "chapter": 1,
  "title": "ES Unit 1: Ecosystems - Complete Guide",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive academic revision guide for Environmental Science (Unit 1). Covers ecological principles, sustainable development goals, environmental laws, and pollution mitigation frameworks.",
  "topics": [
   {
    "title": "Unit 1 Fundamentals & Ecological Principles",
    "summary": "Complete lecture guide covering the definition, scope, classification, structure and function of ecosystems, food chains and food webs, energy flow, and the nitrogen cycle.",
    "points": [
     "Biotic and abiotic ecosystem components and trophic levels.",
     "Energy flow follows Lindeman's 10% law: only 10% energy transfers to successive trophic levels.",
     "Biogeochemical cycles: Carbon cycle, Nitrogen cycle, and Hydrological cycle.",
     "Biodiversity values: Consumptive use, productive use, social, ethical, and aesthetic values."
    ],
    "formulas": [
     "Trophic Energy Efficiency: E_(n+1) ≈ 0.10 × E_n"
    ],
    "example": "Food chain sequence: Grass (Producer) → Grasshopper (Primary Consumer) → Frog (Secondary Consumer) → Snake (Tertiary Consumer) → Hawk (Apex Predator)."
   },
   {
    "title": "Environmental Management & Legislation",
    "summary": "Regulatory frameworks, conservation treaties, pollution control standards, and Environmental Impact Assessment (EIA).",
    "points": [
     "The Environment (Protection) Act, 1986: Umbrella legislation in India for environmental safety.",
     "Air (Prevention and Control of Pollution) Act, 1981.",
     "Water (Prevention and Control of Pollution) Act, 1974.",
     "EIA steps: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Mitigation."
    ],
    "formulas": [
     "Universal waste management hierarchy: Reduce > Reuse > Recycle > Recover > Dispose"
    ],
    "example": "Primary air pollutants (CO, SO2, NOx) react in atmosphere under sunlight to form secondary photochemical smog (O3, PAN)."
   }
  ],
  "mustKnow": [
   "Lindeman's 10% law governs energy transfer across trophic levels",
   "Environment (Protection) Act enacted in 1986 following Bhopal Gas tragedy",
   "EIA is mandatory for industrial infrastructure clearance in India",
   "Bioaccumulation increases chemical concentration in an organism; biomagnification increases up the food chain",
   "Renewable resources regenerate naturally within human timescales"
  ]
 },
 "NOTE-ES-02": {
  "noteId": "NOTE-ES-02",
  "subjectId": "ES",
  "chapter": 2,
  "title": "ES Unit 2: Natural Resources & Conservation Handbook",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive academic revision guide for Environmental Science (Unit 2). Covers ecological principles, sustainable development goals, environmental laws, and pollution mitigation frameworks.",
  "topics": [
   {
    "title": "Unit 2 Fundamentals & Ecological Principles",
    "summary": "Comprehensive notes on renewable and non-renewable resources, deforestation, water management, mineral exploitation, and energy crisis.",
    "points": [
     "Biotic and abiotic ecosystem components and trophic levels.",
     "Energy flow follows Lindeman's 10% law: only 10% energy transfers to successive trophic levels.",
     "Biogeochemical cycles: Carbon cycle, Nitrogen cycle, and Hydrological cycle.",
     "Biodiversity values: Consumptive use, productive use, social, ethical, and aesthetic values."
    ],
    "formulas": [
     "Trophic Energy Efficiency: E_(n+1) ≈ 0.10 × E_n"
    ],
    "example": "Food chain sequence: Grass (Producer) → Grasshopper (Primary Consumer) → Frog (Secondary Consumer) → Snake (Tertiary Consumer) → Hawk (Apex Predator)."
   },
   {
    "title": "Environmental Management & Legislation",
    "summary": "Regulatory frameworks, conservation treaties, pollution control standards, and Environmental Impact Assessment (EIA).",
    "points": [
     "The Environment (Protection) Act, 1986: Umbrella legislation in India for environmental safety.",
     "Air (Prevention and Control of Pollution) Act, 1981.",
     "Water (Prevention and Control of Pollution) Act, 1974.",
     "EIA steps: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Mitigation."
    ],
    "formulas": [
     "Universal waste management hierarchy: Reduce > Reuse > Recycle > Recover > Dispose"
    ],
    "example": "Primary air pollutants (CO, SO2, NOx) react in atmosphere under sunlight to form secondary photochemical smog (O3, PAN)."
   }
  ],
  "mustKnow": [
   "Lindeman's 10% law governs energy transfer across trophic levels",
   "Environment (Protection) Act enacted in 1986 following Bhopal Gas tragedy",
   "EIA is mandatory for industrial infrastructure clearance in India",
   "Bioaccumulation increases chemical concentration in an organism; biomagnification increases up the food chain",
   "Renewable resources regenerate naturally within human timescales"
  ]
 },
 "NOTE-ES-03": {
  "noteId": "NOTE-ES-03",
  "subjectId": "ES",
  "chapter": 3,
  "title": "ES Unit 3: Biodiversity & Biotic Resources",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive academic revision guide for Environmental Science (Unit 3). Covers ecological principles, sustainable development goals, environmental laws, and pollution mitigation frameworks.",
  "topics": [
   {
    "title": "Unit 3 Fundamentals & Ecological Principles",
    "summary": "Definition and levels of biodiversity (genetic, species, ecosystem), values of biodiversity, India as a mega-diversity nation, hotspots, threats (habitat loss, poaching, man-wildlife conflict), in-situ/ex-situ conservation and the National Biodiversity Act.",
    "points": [
     "Biotic and abiotic ecosystem components and trophic levels.",
     "Energy flow follows Lindeman's 10% law: only 10% energy transfers to successive trophic levels.",
     "Biogeochemical cycles: Carbon cycle, Nitrogen cycle, and Hydrological cycle.",
     "Biodiversity values: Consumptive use, productive use, social, ethical, and aesthetic values."
    ],
    "formulas": [
     "Trophic Energy Efficiency: E_(n+1) ≈ 0.10 × E_n"
    ],
    "example": "Food chain sequence: Grass (Producer) → Grasshopper (Primary Consumer) → Frog (Secondary Consumer) → Snake (Tertiary Consumer) → Hawk (Apex Predator)."
   },
   {
    "title": "Environmental Management & Legislation",
    "summary": "Regulatory frameworks, conservation treaties, pollution control standards, and Environmental Impact Assessment (EIA).",
    "points": [
     "The Environment (Protection) Act, 1986: Umbrella legislation in India for environmental safety.",
     "Air (Prevention and Control of Pollution) Act, 1981.",
     "Water (Prevention and Control of Pollution) Act, 1974.",
     "EIA steps: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Mitigation."
    ],
    "formulas": [
     "Universal waste management hierarchy: Reduce > Reuse > Recycle > Recover > Dispose"
    ],
    "example": "Primary air pollutants (CO, SO2, NOx) react in atmosphere under sunlight to form secondary photochemical smog (O3, PAN)."
   }
  ],
  "mustKnow": [
   "Lindeman's 10% law governs energy transfer across trophic levels",
   "Environment (Protection) Act enacted in 1986 following Bhopal Gas tragedy",
   "EIA is mandatory for industrial infrastructure clearance in India",
   "Bioaccumulation increases chemical concentration in an organism; biomagnification increases up the food chain",
   "Renewable resources regenerate naturally within human timescales"
  ]
 },
 "NOTE-ES-04": {
  "noteId": "NOTE-ES-04",
  "subjectId": "ES",
  "chapter": 4,
  "title": "ES Unit 4: Environmental Pollution & Control Technologies",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive academic revision guide for Environmental Science (Unit 4). Covers ecological principles, sustainable development goals, environmental laws, and pollution mitigation frameworks.",
  "topics": [
   {
    "title": "Unit 4 Fundamentals & Ecological Principles",
    "summary": "Classification of pollution and pollutants, soil pollution and impacts of modern agriculture, wastewater treatment (primary, secondary, tertiary), climate change, ozone depletion/ODS, and the Kyoto and Montreal Protocols.",
    "points": [
     "Biotic and abiotic ecosystem components and trophic levels.",
     "Energy flow follows Lindeman's 10% law: only 10% energy transfers to successive trophic levels.",
     "Biogeochemical cycles: Carbon cycle, Nitrogen cycle, and Hydrological cycle.",
     "Biodiversity values: Consumptive use, productive use, social, ethical, and aesthetic values."
    ],
    "formulas": [
     "Trophic Energy Efficiency: E_(n+1) ≈ 0.10 × E_n"
    ],
    "example": "Food chain sequence: Grass (Producer) → Grasshopper (Primary Consumer) → Frog (Secondary Consumer) → Snake (Tertiary Consumer) → Hawk (Apex Predator)."
   },
   {
    "title": "Environmental Management & Legislation",
    "summary": "Regulatory frameworks, conservation treaties, pollution control standards, and Environmental Impact Assessment (EIA).",
    "points": [
     "The Environment (Protection) Act, 1986: Umbrella legislation in India for environmental safety.",
     "Air (Prevention and Control of Pollution) Act, 1981.",
     "Water (Prevention and Control of Pollution) Act, 1974.",
     "EIA steps: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Mitigation."
    ],
    "formulas": [
     "Universal waste management hierarchy: Reduce > Reuse > Recycle > Recover > Dispose"
    ],
    "example": "Primary air pollutants (CO, SO2, NOx) react in atmosphere under sunlight to form secondary photochemical smog (O3, PAN)."
   }
  ],
  "mustKnow": [
   "Lindeman's 10% law governs energy transfer across trophic levels",
   "Environment (Protection) Act enacted in 1986 following Bhopal Gas tragedy",
   "EIA is mandatory for industrial infrastructure clearance in India",
   "Bioaccumulation increases chemical concentration in an organism; biomagnification increases up the food chain",
   "Renewable resources regenerate naturally within human timescales"
  ]
 },
 "NOTE-DBMS-01": {
  "noteId": "NOTE-DBMS-01",
  "subjectId": "DBMS",
  "subject": "Database Management Systems",
  "title": "DBMS Comprehensive Lecture Notes: Units 1, 2 & 3",
  "overview": "Comprehensive faculty lecture notes covering DBMS architecture, Three-Schema Architecture, Data Independence, Entity-Relationship (ER) Modeling, Relational Model, Relational Algebra, Relational Calculus, SQL DDL/DML, Constraints, Triggers, and Schema Refinement (Normalization from 1NF to BCNF).",
  "topics": [
   {
    "name": "1. Database System Architecture & ER Data Modeling (Unit 1)",
    "subtopics": [
     "File Processing Systems vs. DBMS: Data redundancy, data inconsistency, isolation, concurrent access anomalies, and security constraints",
     "Three-Schema ANSI/SPARC Architecture: External (View) Level, Conceptual (Logical) Level, and Internal (Physical) Level",
     "Data Independence: Logical Data Independence vs. Physical Data Independence",
     "Entity-Relationship (ER) Modeling: Entity sets, Attribute types (Simple/Composite, Single/Multi-valued, Stored/Derived, Key), Relationship sets, Mapping Cardinalities (1:1, 1:N, N:1, M:N), Existence Dependencies",
     "Strong Entity Sets vs. Weak Entity Sets: Identifying relationships, partial keys (discriminator), double-rectangle and double-diamond notation",
     "Extended ER (EER) Features: Specialization, Generalization, Attribute Inheritance, Aggregation, and Disjoint/Overlapping constraints"
    ],
    "keyTakeaway": "DBMS overcomes traditional file system deficiencies by centralizing data control, guaranteeing atomicity and integrity, and enforcing data independence across views. In ER modeling, strong entities have an intrinsic primary key, while weak entities depend on an identifying relationship and a discriminator (partial key). ER diagrams cleanly translate into relational schemas where multi-valued attributes map to separate tables and M:N relationships become junction tables.",
    "title": "1. Database System Architecture & ER Data Modeling (Unit 1)",
    "summary": "DBMS overcomes traditional file system deficiencies by centralizing data control, guaranteeing atomicity and integrity, and enforcing data independence across views. In ER modeling, strong entities have an intrinsic primary key, while weak entities depend on an identifying relationship and a discriminator (partial key). ER diagrams cleanly translate into relational schemas where multi-valued attributes map to separate tables and M:N relationships become junction tables.",
    "points": [
     "File Processing Systems vs. DBMS: Data redundancy, data inconsistency, isolation, concurrent access anomalies, and security constraints",
     "Three-Schema ANSI/SPARC Architecture: External (View) Level, Conceptual (Logical) Level, and Internal (Physical) Level",
     "Data Independence: Logical Data Independence vs. Physical Data Independence",
     "Entity-Relationship (ER) Modeling: Entity sets, Attribute types (Simple/Composite, Single/Multi-valued, Stored/Derived, Key), Relationship sets, Mapping Cardinalities (1:1, 1:N, N:1, M:N), Existence Dependencies",
     "Strong Entity Sets vs. Weak Entity Sets: Identifying relationships, partial keys (discriminator), double-rectangle and double-diamond notation",
     "Extended ER (EER) Features: Specialization, Generalization, Attribute Inheritance, Aggregation, and Disjoint/Overlapping constraints"
    ]
   },
   {
    "name": "2. Relational Model, Relational Algebra & Relational Calculus (Unit 2)",
    "subtopics": [
     "Relational Model Concepts: Relations (tables), Tuples (rows), Attributes (columns), Cardinality, Degree (Arity), Domain constraints",
     "Keys in Relational Model: Super Key, Candidate Key, Primary Key, Alternate Key, and Foreign Key (Referential Integrity)",
     "Fundamental Relational Algebra Operators: Selection (σ), Projection (π), Union (∪), Set Difference (-), Cartesian Product (×), and Rename (ρ)",
     "Additional / Derived Relational Operators: Natural Join (⨝), Theta Join (⨝_θ), Equi-Join, Outer Joins (Left ⟕, Right ⟖, Full ⟗), Division (÷)",
     "Tuple Relational Calculus (TRC): Non-procedural query language based on first-order logic; format { t | P(t) }, existential (∃) and universal (∀) quantifiers",
     "Domain Relational Calculus (DRC): Format { <x1, x2, ..., xn> | P(x1, x2, ..., xn) }; Domain Variables and Safety of Expressions"
    ],
    "keyTakeaway": "Relational Algebra is procedural (specifies how to retrieve data step-by-step), whereas Relational Calculus is declarative (specifies what data to retrieve without execution details). Codd's Theorem proves that basic Relational Algebra, safe TRC, and safe DRC are mathematically equivalent in expressive power (relational completeness).",
    "title": "2. Relational Model, Relational Algebra & Relational Calculus (Unit 2)",
    "summary": "Relational Algebra is procedural (specifies how to retrieve data step-by-step), whereas Relational Calculus is declarative (specifies what data to retrieve without execution details). Codd's Theorem proves that basic Relational Algebra, safe TRC, and safe DRC are mathematically equivalent in expressive power (relational completeness).",
    "points": [
     "Relational Model Concepts: Relations (tables), Tuples (rows), Attributes (columns), Cardinality, Degree (Arity), Domain constraints",
     "Keys in Relational Model: Super Key, Candidate Key, Primary Key, Alternate Key, and Foreign Key (Referential Integrity)",
     "Fundamental Relational Algebra Operators: Selection (σ), Projection (π), Union (∪), Set Difference (-), Cartesian Product (×), and Rename (ρ)",
     "Additional / Derived Relational Operators: Natural Join (⨝), Theta Join (⨝_θ), Equi-Join, Outer Joins (Left ⟕, Right ⟖, Full ⟗), Division (÷)",
     "Tuple Relational Calculus (TRC): Non-procedural query language based on first-order logic; format { t | P(t) }, existential (∃) and universal (∀) quantifiers",
     "Domain Relational Calculus (DRC): Format { <x1, x2, ..., xn> | P(x1, x2, ..., xn) }; Domain Variables and Safety of Expressions"
    ]
   },
   {
    "name": "3. Structured Query Language (SQL), Constraints & Triggers (Unit 3 - Part 1)",
    "subtopics": [
     "SQL Architecture: Data Definition Language (DDL - CREATE, ALTER, DROP, TRUNCATE), Data Manipulation Language (DML - SELECT, INSERT, UPDATE, DELETE), and DCL/TCL",
     "Integrity Constraints in SQL: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY (ON DELETE CASCADE / ON UPDATE SET NULL), CHECK, and DEFAULT",
     "Complex Queries & Set Operations: UNION, INTERSECT, EXCEPT (MINUS) and UNION ALL (preserving duplicate tuples)",
     "Nested Subqueries: Correlated subqueries, IN, NOT IN, EXISTS, NOT EXISTS, ALL, ANY / SOME",
     "Aggregate Functions & Grouping: COUNT(), SUM(), AVG(), MIN(), MAX(), with GROUP BY and HAVING clauses (difference between WHERE and HAVING)",
     "Views and Triggers: Virtual tables, view updatability criteria, Active Databases, Event-Condition-Action (ECA) rule paradigm, BEFORE vs. AFTER triggers"
    ],
    "keyTakeaway": "SQL provides a standard declarative language for relational databases. WHERE filters individual tuples before aggregation, while HAVING filters aggregated groups after GROUP BY. Triggers enforce complex business rules automatically upon INSERT, UPDATE, or DELETE events, serving as the foundation of active database management.",
    "title": "3. Structured Query Language (SQL), Constraints & Triggers (Unit 3 - Part 1)",
    "summary": "SQL provides a standard declarative language for relational databases. WHERE filters individual tuples before aggregation, while HAVING filters aggregated groups after GROUP BY. Triggers enforce complex business rules automatically upon INSERT, UPDATE, or DELETE events, serving as the foundation of active database management.",
    "points": [
     "SQL Architecture: Data Definition Language (DDL - CREATE, ALTER, DROP, TRUNCATE), Data Manipulation Language (DML - SELECT, INSERT, UPDATE, DELETE), and DCL/TCL",
     "Integrity Constraints in SQL: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY (ON DELETE CASCADE / ON UPDATE SET NULL), CHECK, and DEFAULT",
     "Complex Queries & Set Operations: UNION, INTERSECT, EXCEPT (MINUS) and UNION ALL (preserving duplicate tuples)",
     "Nested Subqueries: Correlated subqueries, IN, NOT IN, EXISTS, NOT EXISTS, ALL, ANY / SOME",
     "Aggregate Functions & Grouping: COUNT(), SUM(), AVG(), MIN(), MAX(), with GROUP BY and HAVING clauses (difference between WHERE and HAVING)",
     "Views and Triggers: Virtual tables, view updatability criteria, Active Databases, Event-Condition-Action (ECA) rule paradigm, BEFORE vs. AFTER triggers"
    ]
   },
   {
    "name": "4. Schema Refinement, Functional Dependencies & Normalization (Unit 3 - Part 2)",
    "subtopics": [
     "Pitfalls in Relational Database Design: Data Redundancy, Update Anomalies, Insertion Anomalies, and Deletion Anomalies",
     "Functional Dependencies (FDs): Formal definition α → β, Trivial vs. Non-trivial FDs, Full functional dependency vs. Partial dependency",
     "Armstrong's Axioms: Reflexivity, Augmentation, Transitivity, and Secondary Rules (Union, Decomposition, Pseudo-transitivity)",
     "Closure Algorithms: Attribute Closure (X+), Minimal / Canonical Cover of FDs, determining Candidate Keys algorithmically",
     "Normal Forms Hierarchy: 1NF (atomic attributes), 2NF (no partial dependency), 3NF (no transitive dependency: for α → β, α is superkey OR β is prime), BCNF (for every non-trivial α → β, α must be superkey)",
     "Decomposition Properties: Lossless-Join Decomposition (R1 ∩ R2 → R1 or R1 ∩ R2 → R2) and Dependency Preservation"
    ],
    "keyTakeaway": "Normalization systematically eliminates update anomalies by decomposing relations into higher normal forms. BCNF strictly eliminates all functional redundancy but does not always guarantee dependency preservation. 3NF guarantees both lossless join and dependency preservation, making it the most practical standard in enterprise application design.",
    "title": "4. Schema Refinement, Functional Dependencies & Normalization (Unit 3 - Part 2)",
    "summary": "Normalization systematically eliminates update anomalies by decomposing relations into higher normal forms. BCNF strictly eliminates all functional redundancy but does not always guarantee dependency preservation. 3NF guarantees both lossless join and dependency preservation, making it the most practical standard in enterprise application design.",
    "points": [
     "Pitfalls in Relational Database Design: Data Redundancy, Update Anomalies, Insertion Anomalies, and Deletion Anomalies",
     "Functional Dependencies (FDs): Formal definition α → β, Trivial vs. Non-trivial FDs, Full functional dependency vs. Partial dependency",
     "Armstrong's Axioms: Reflexivity, Augmentation, Transitivity, and Secondary Rules (Union, Decomposition, Pseudo-transitivity)",
     "Closure Algorithms: Attribute Closure (X+), Minimal / Canonical Cover of FDs, determining Candidate Keys algorithmically",
     "Normal Forms Hierarchy: 1NF (atomic attributes), 2NF (no partial dependency), 3NF (no transitive dependency: for α → β, α is superkey OR β is prime), BCNF (for every non-trivial α → β, α must be superkey)",
     "Decomposition Properties: Lossless-Join Decomposition (R1 ∩ R2 → R1 or R1 ∩ R2 → R2) and Dependency Preservation"
    ]
   }
  ],
  "formulas": [
   "Selection Operator: \\(\\sigma_{p}(R) = \\{ t \\in R \\mid p(t) = \\text{true} \\}\\)",
   "Projection Operator: \\(\\pi_{A_1, A_2, ..., A_k}(R)\\) (automatically eliminates duplicate tuples)",
   "Natural Join: \\(R \\bowtie S = \\pi_{\\text{schema}(R) \\cup \\text{schema}(S)}(\\sigma_{R.A_1 = S.A_1 \\land ...}(R \\times S))\\)",
   "Relational Division: \\(R \\div S = \\pi_{R - S}(R) - \\pi_{R - S}((\\pi_{R - S}(R) \\times S) - R)\\)",
   "Armstrong's Reflexivity: \\(\\text{If } \\beta \\subseteq \\alpha\\text{, then } \\alpha \\to \\beta\\)",
   "Armstrong's Augmentation: \\(\\text{If } \\alpha \\to \\beta\\text{, then } \\gamma\\alpha \\to \\gamma\\beta\\)",
   "Armstrong's Transitivity: \\(\\text{If } \\alpha \\to \\beta\\text{ and } \\beta \\to \\gamma\\text{, then } \\alpha \\to \\gamma\\)",
   "Lossless Join Condition: \\(R_1 \\bowtie R_2 = R \\iff (R_1 \\cap R_2 \\to R_1) \\in F^+\\text{ or }(R_1 \\cap R_2 \\to R_2) \\in F^+\\)",
   "BCNF Condition: \\(\\forall (\\alpha \\to \\beta) \\in F^+,\\text{ either } \\beta \\subseteq \\alpha\\text{ (trivial) or } \\alpha\\text{ is a superkey of } R\\)",
   "3NF Condition: \\(\\forall (\\alpha \\to \\beta) \\in F^+,\\text{ either } \\beta \\subseteq \\alpha\\text{, or } \\alpha\\text{ is superkey, or every } B \\in (\\beta - \\alpha)\\text{ is prime}\\)"
  ],
  "mustKnowQuestions": [
   "Compare and contrast traditional File Processing Systems with Database Management Systems across 6 standard criteria.",
   "Explain the Three-Schema ANSI/SPARC Architecture. Differentiate between Logical Data Independence and Physical Data Independence with diagrams.",
   "Differentiate between Strong Entity Sets and Weak Entity Sets. How are Weak Entity Sets represented in ER diagrams and converted to relational tables?",
   "Given the Sailors-Boats-Reserves schema, write queries in Relational Algebra and SQL using Joins, Subqueries, and Aggregate Functions.",
   "State Armstrong's Axioms. Given relation R(A, B, C, D, E) and functional dependencies, compute attribute closure (AB)+ and find all Candidate Keys.",
   "Compare 3NF and BCNF with concrete counterexamples. Why is BCNF strictly stronger than 3NF, and what is the trade-off regarding dependency preservation?"
  ],
  "examTips": [
   "When drawing ER diagrams, always mark primary keys with underlines, partial keys with dashed underlines, weak entities with double rectangles, and identifying relationships with double diamonds.",
   "For normalization proofs, always test the lossless-join condition: the intersection of the two decomposed schemas must functionally determine at least one of the schemas.",
   "Remember that BCNF requires the LHS of every functional dependency to be a superkey, whereas 3NF permits the RHS to be a prime attribute."
  ],
  "chapter": 1,
  "mustKnow": [
   "Compare and contrast traditional File Processing Systems with Database Management Systems across 6 standard criteria.",
   "Explain the Three-Schema ANSI/SPARC Architecture. Differentiate between Logical Data Independence and Physical Data Independence with diagrams.",
   "Differentiate between Strong Entity Sets and Weak Entity Sets. How are Weak Entity Sets represented in ER diagrams and converted to relational tables?",
   "Given the Sailors-Boats-Reserves schema, write queries in Relational Algebra and SQL using Joins, Subqueries, and Aggregate Functions.",
   "State Armstrong's Axioms. Given relation R(A, B, C, D, E) and functional dependencies, compute attribute closure (AB)+ and find all Candidate Keys.",
   "Compare 3NF and BCNF with concrete counterexamples. Why is BCNF strictly stronger than 3NF, and what is the trade-off regarding dependency preservation?"
  ]
 },
 "NOTE-OOPJ-01": {
  "noteId": "NOTE-OOPJ-01",
  "subjectId": "OOPJ",
  "chapter": 1,
  "title": "Java Unit 1: OOP Concepts, Java Evolution, JVM & Basics",
  "pageCount": 77,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Authentic faculty lecture notes authored by Vedavathi Kotagiri [Asst. Prof, MGIT CSE]. Covers foundational Object-Oriented Programming (OOP) thinking, the evolution of Java from Oak/Green Project, Java Virtual Machine (JVM) internals, Bytecode execution, lexical structures, primitive data types, type casting, arrays, and control flow statements.",
  "topics": [
   {
    "title": "Object-Oriented Thinking & Core Principles",
    "summary": "Contrasts procedural programming (data moving between functions without protection) with the object-oriented paradigm where data and operations are tightly bound into objects.",
    "points": [
     "Abstraction: Representing essential features of an entity without including background implementation details or complexities.",
     "Encapsulation: Binding data members and manipulating methods into a single protective unit (class), enforcing data hiding via access specifiers.",
     "Inheritance: The mechanism by which a subclass acquires properties and behaviors from a superclass, fostering modular reusability.",
     "Polymorphism: The ability of an entity (method or operator) to take multiple forms; manifested as compile-time overloading and runtime dynamic method dispatch."
    ],
    "formulas": [
     "class Encapsulated { private int data; public int getData() { return data; } }",
     "Procedural: Data + Functions separate | OOP: Class = Data + Methods bound together"
    ],
    "example": "A Banking Account class encapsulates private balance variable and exposes public deposit() and withdraw() methods to enforce business logic validation."
   },
   {
    "title": "Java Evolution, Buzzwords & Architecture Neutrality",
    "summary": "Details Java's creation by James Gosling at Sun Microsystems (1991) designed for consumer electronics, later transformed for web and internet computing.",
    "points": [
     "Simple & Familiar: Syntactically derived from C/C++ but eliminates error-prone pointers, explicit memory deallocation, and operator overloading.",
     "Platform Independent: 'Write Once, Run Anywhere' (WORA). Java compiler compiles source code (.java) into intermediate architectural-neutral Bytecode (.class).",
     "Robust: Employs strong compile-time and runtime type checking, explicit exception handling, and automatic garbage collection eliminating memory leaks.",
     "Secure: Executes inside the JVM sandbox with a security manager, bytecode verifier, and absence of raw memory pointers.",
     "Multithreaded & Dynamic: Built-in native support for concurrent thread execution and dynamic class loading at runtime."
    ],
    "formulas": [
     "Source Code (.java) --[javac]--> Bytecode (.class) --[JVM/JIT]--> Native Machine Code",
     "WORA: Platform Independent Bytecode executed by Platform Specific JVM"
    ],
    "example": "Compiling on Windows creates bytecode identical to bytecode generated on Linux; each OS runs its respective JVM binary."
   },
   {
    "title": "JVM Architecture & Memory Allocation Areas",
    "summary": "Deep architectural breakdown of the Java Virtual Machine subsystem components and runtime memory data areas.",
    "points": [
     "Class Loader Subsystem: Handles Loading (Bootstrap, Extension, Application), Linking (Verification, Preparation, Resolution), and Initialization.",
     "Method Area: Shared runtime pool storing class metadata, runtime constant pool, static variables, and method bytecode.",
     "Heap Area: Shared memory where all instantiated objects and their instance variables are allocated; actively managed by the Garbage Collector.",
     "JVM Stack & PC Register: Each thread maintains private JVM stack frames (local variables, operand stack, return value) and a Program Counter tracking next instruction.",
     "Execution Engine: Consists of Interpreter (reads bytecode instruction by instruction), JIT Compiler (compiles hot spots to native code), and Garbage Collector."
    ],
    "formulas": [
     "Runtime Memory = Method Area + Heap + JVM Stacks + PC Registers + Native Stacks",
     "JIT: Hot-Spot Detection -> Native Machine Code Cache -> Zero Interpreter Overhead"
    ],
    "example": "Creating `Student s = new Student();` allocates reference `s` in thread stack frame while the actual object state is allocated in Heap memory."
   },
   {
    "title": "Java Lexical Basics, Types & Control Statements",
    "summary": "Explores primitive types, explicit and implicit type conversions, array allocation, and structured branching and looping constructs.",
    "points": [
     "8 Primitive Types: byte (8-bit), short (16-bit), int (32-bit), long (64-bit), float (32-bit IEEE 754), double (64-bit), char (16-bit Unicode), boolean.",
     "Type Casting: Widening (Automatic: byte -> short -> int -> long -> float -> double) vs. Narrowing (Explicit: `(target-type) value`, risk of truncation).",
     "Arrays in Java: First-class objects allocated on heap using `new`. Bound checking prevents buffer overflows (`ArrayIndexOutOfBoundsException`).",
     "Control Statements: Conditional branching (`if-else`, `switch-case` supporting int, enum, and String), Iteration (`while`, `do-while`, indexed `for`, and enhanced `for-each`)."
    ],
    "formulas": [
     "Narrowing Cast: int x = (int) 3.14159; // Explicit cast truncates decimal",
     "Array: int[] arr = new int[5]; // Heap allocation with default 0s"
    ],
    "example": "Enhanced loop: `for(int num : arr) { sum += num; }` simplifies traversing collections without counter index variables."
   }
  ],
  "formulas": [
   "javac MyClass.java -> MyClass.class",
   "java MyClass -> JVM Execution Engine",
   "Type Casting: (int) doubleVal",
   "Array Instantiation: type[] varName = new type[size];",
   "Enhanced For Loop: for(type var : collection) { ... }"
  ],
  "mustKnow": [
   "Explain the four foundational principles of Object-Oriented Programming with diagrams.",
   "List and explain any six Java buzzwords with technical justifications.",
   "Draw and explain the internal architecture of the Java Virtual Machine (JVM).",
   "Differentiate between procedural programming and object-oriented programming in tabular form.",
   "Explain widening and narrowing type conversions in Java with code examples."
  ],
  "examTips": [
   "Always draw the JVM block diagram showing Class Loader, Runtime Data Areas, and Execution Engine for full marks in 5-mark questions.",
   "When explaining buzzwords, highlight that Java is platform-independent but the JVM itself is platform-dependent.",
   "In array questions, explicitly mention that arrays in Java are treated as objects allocated dynamically on the heap."
  ]
 },
 "NOTE-OOPJ-02": {
  "noteId": "NOTE-OOPJ-02",
  "subjectId": "OOPJ",
  "chapter": 1,
  "title": "Java Unit 1: Question Bank with Model Answers",
  "pageCount": 17,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT CSE Department examination question bank featuring worked solutions for Unit 1. Covers definitions of abstract classes, JDK vs. JRE vs. JVM distinctions, Bytecode verification, command-line arguments, garbage collection mechanics, and prime/Fibonacci algorithms.",
  "topics": [
   {
    "title": "Core Definitions & 1-Mark Model Solutions",
    "summary": "Concise, high-yield answers tailored for university evaluation rubrics.",
    "points": [
     "JDK vs JRE vs JVM: JDK (Java Development Kit = JRE + Compilers/Tools), JRE (Java Runtime Environment = JVM + Core Class Libraries), JVM (Virtual execution engine).",
     "Main Method Breakdown: `public` (accessible by JVM outside package), `static` (callable without class instance), `void` (no return), `main` (standard entry point), `String[] args` (command-line parameters).",
     "Default Values: Primitives initialize to `0` (numeric), `false` (boolean), `\\u0000` (char), and references initialize to `null`.",
     "Bytecode Verifier: Security mechanism inspecting class files prior to execution to confirm valid opcode sequences and stack balance."
    ],
    "formulas": [
     "JDK = JRE + Development Tools (javac, javadoc, jar)",
     "JRE = JVM + Core Class Libraries (rt.jar)"
    ],
    "example": "`java App arg1 arg2` passes array `[\"arg1\", \"arg2\"]` to `args` parameter of `main()`."
   },
   {
    "title": "Long-Answer Examination Problem Solutions",
    "summary": "Full academic solutions for core algorithmic and architectural questions.",
    "points": [
     "Fibonacci & Prime Checking: Step-by-step algorithms utilizing iterative loops and optimized square-root primality tests.",
     "Garbage Collection Mechanics: Mark-and-sweep algorithm, unreachable objects, calling `System.gc()`, and override of `finalize()` method.",
     "Command-Line Argument Parsing: Converting String arguments using wrapper class methods `Integer.parseInt(args[0])` with error handling."
    ],
    "formulas": [
     "Primality Condition: for(int i=2; i*i<=n; i++) if(n % i == 0) return false;",
     "Garbage Collection: obj = null; System.gc();"
    ],
    "example": "Converting args: `int val = Integer.parseInt(args[0]);` allows reading numeric CLI input from the terminal."
   }
  ],
  "formulas": [
   "Integer.parseInt(args[0])",
   "System.gc()",
   "JDK = JRE + javac",
   "JRE = JVM + runtime libraries"
  ],
  "mustKnow": [
   "Differentiate between JDK, JRE, and JVM with an architectural Venn diagram.",
   "Explain the importance of public, static, and void in the main method signature.",
   "Write a complete Java program to read command-line arguments and find their sum.",
   "Explain how automatic garbage collection works in Java."
  ],
  "examTips": [
   "When explaining `public static void main`, address each keyword independently in bullet points.",
   "Always write complete runnable Java code including class headers and import statements rather than fragments."
  ]
 },
 "NOTE-OOPJ-03": {
  "noteId": "NOTE-OOPJ-03",
  "subjectId": "OOPJ",
  "chapter": 2,
  "title": "Java Unit 2: Inheritance, Polymorphism, Packages & Interfaces",
  "pageCount": 40,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Complete faculty lecture notes authored by Vedavathi Kotagiri [Asst. Prof, MGIT CSE]. Covers Class fundamentals, constructors, `this` keyword, Inheritance types (Single, Multilevel, Hierarchical), `super` keyword, Method Overriding, Dynamic Method Dispatch, Abstract classes, `final` keyword, user-defined Packages, CLASSPATH, access protection levels, and Interfaces.",
  "topics": [
   {
    "title": "Inheritance Hierarchies & The `super` Keyword",
    "summary": "Examines class derivation in Java, constructor chaining across class hierarchies, and member disambiguation using `super`.",
    "points": [
     "Inheritance Types Supported: Single Inheritance (`A -> B`), Multilevel (`A -> B -> C`), Hierarchical (`A -> B`, `A -> C`). Multiple inheritance of classes is prohibited to prevent the Diamond Problem.",
     "Role of `super`: Used to invoke superclass constructors (`super(args)` must be first line in subclass constructor), call superclass overridden methods (`super.display()`), and access hidden superclass fields (`super.x`).",
     "Constructor Execution Order: Base class constructors execute first, progressing down the derivation chain to the most derived subclass."
    ],
    "formulas": [
     "class Sub extends Super { Sub() { super(); } }",
     "super.memberVariable | super.overriddenMethod()"
    ],
    "example": "A `BoxWeight` class extends `Box`, invoking `super(w, h, d)` to initialize inherited dimensions while initializing its own `weight` field."
   },
   {
    "title": "Dynamic Method Dispatch & Runtime Polymorphism",
    "summary": "Details how Java implements runtime polymorphism by resolving overridden method calls through superclass reference variables.",
    "points": [
     "Mechanism: When an overridden method is called through a superclass reference, Java determines which version to execute based upon the type of the object being referred to at runtime.",
     "Method Overriding Rules: Method name, return type, and parameter list must be identical to the superclass method. Access level cannot be more restrictive.",
     "Static vs Dynamic Binding: Static methods, private methods, and final methods use static binding (compile-time); instance methods use dynamic binding."
    ],
    "formulas": [
     "SuperRef obj = new SubClass(); obj.overriddenMethod(); // SubClass version executes",
     "Dynamic Binding: Determined by object instance, NOT reference type"
    ],
    "example": "`Figure f = new Rectangle(10, 20); f.area();` invokes `Rectangle.area()`, not `Figure.area()`."
   },
   {
    "title": "Abstract Classes & The `final` Specifier",
    "summary": "Explores incomplete class templates with abstract methods and unchangeable program elements using `final`.",
    "points": [
     "Abstract Classes: Declared with `abstract`. Can contain both abstract methods (declaration without body) and concrete methods. Cannot be instantiated directly.",
     "Subclass Obligation: Any concrete subclass extending an abstract class must provide implementations for all inherited abstract methods or be declared abstract itself.",
     "Three Uses of `final`: (1) `final` variable creates a constant; (2) `final` method prevents method overriding; (3) `final` class prevents inheritance (e.g., `java.lang.String`)."
    ],
    "formulas": [
     "abstract class Shape { abstract double area(); }",
     "final class Immutable { } // Cannot be extended"
    ],
    "example": "A generic `Shape` class defines `abstract double area();`; subclasses `Circle` and `Triangle` provide concrete mathematical formulas."
   },
   {
    "title": "Packages & Access Protection Matrix",
    "summary": "Architectural principles of organizing classes into modular namespaces, CLASSPATH configuration, and four-tier access visibility.",
    "points": [
     "Defining Packages: `package mypack;` at the top of the source file. Compiled with `javac -d . FileName.java` to generate folder directory hierarchy.",
     "CLASSPATH Environment: Instructs the JVM where to look on disk for user-defined and third-party `.class` package hierarchies.",
     "Access Protection: `public` (accessible everywhere), `protected` (same package + subclasses in other packages), default/package-private (same package only), `private` (same class only).",
     "Interfaces: Declared with `interface`. All fields are implicitly `public static final`; methods are implicitly `public abstract`. Implemented via `implements`."
    ],
    "formulas": [
     "Compilation: javac -d . SourceFile.java",
     "Access Matrix: public > protected > default > private",
     "class C implements InterfaceA, InterfaceB // Multiple interface inheritance"
    ],
    "example": "A class implements multiple interfaces (`implements Printable, Showable`), resolving multiple inheritance without diamond ambiguity."
   }
  ],
  "formulas": [
   "class Derived extends Base { ... }",
   "super(param1, param2);",
   "abstract class Template { abstract void compute(); }",
   "final double PI = 3.14159;",
   "interface Drawable { void draw(); }"
  ],
  "mustKnow": [
   "What is Dynamic Method Dispatch? Explain with a working code example and output.",
   "Differentiate between method overloading and method overriding in tabular format.",
   "Explain the three uses of the final keyword in Java with examples.",
   "Draw and explain the Java access protection matrix across same class, package, and subclasses.",
   "How do interfaces support multiple inheritance in Java? Provide an illustrative program."
  ],
  "examTips": [
   "When explaining Dynamic Method Dispatch, make sure to show a superclass reference variable pointing to a subclass object (`Super s = new Sub()`).",
   "Memorize the 4x4 access protection table; it appears frequently in university 5-mark and 2-mark questions.",
   "Explicitly state that `super()` must always be the very first statement inside a subclass constructor."
  ]
 },
 "NOTE-OOPJ-04": {
  "noteId": "NOTE-OOPJ-04",
  "subjectId": "OOPJ",
  "chapter": 2,
  "title": "Java Unit 2: Question Bank with Model Answers",
  "pageCount": 16,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT CSE Department examination solutions for Unit 2 question bank. Features model comparisons between overloading and overriding, abstract classes vs interfaces, package creation workflows, and interface inheritance examples.",
  "topics": [
   {
    "title": "Overloading vs. Overriding Model Solutions",
    "summary": "Definitive comparative answers contrasting compile-time and runtime polymorphism.",
    "points": [
     "Definition Comparison: Overloading provides multiple methods with same name but distinct signatures in the same class; Overriding provides a specific implementation in subclass for an inherited method.",
     "Resolution: Overloading is resolved at compile-time (static binding); Overriding is resolved at runtime (dynamic binding).",
     "Return Types: In overloading, return type can differ; in overriding, return type must be identical (or covariant).",
     "Private/Static Methods: Can be overloaded; cannot be overridden."
    ],
    "formulas": [
     "Overloading: MethodName(int a) vs MethodName(double a) [Compile-Time]",
     "Overriding: Super.Method() overridden by Sub.Method() [Run-Time]"
    ],
    "example": "Overloading: `add(int, int)` and `add(double, double)`; Overriding: `Animal.makeSound()` overridden by `Dog.makeSound()`."
   },
   {
    "title": "Abstract Class vs. Interface Model Solutions",
    "summary": "Detailed criteria-based comparison for software design and architecture.",
    "points": [
     "Instantiation: Neither can be instantiated directly using `new`.",
     "Methods: Abstract classes can have both abstract and concrete methods with state; standard interfaces contain only abstract methods (prior to Java 8).",
     "Fields: Abstract classes support instance fields with any access modifier; interface fields are strictly `public static final` constants.",
     "Inheritance: A class can extend only one abstract class (single inheritance), but can implement multiple interfaces (multiple inheritance)."
    ],
    "formulas": [
     "Abstract Class: class Dog extends Animal { ... }",
     "Interface: class Dog implements Pet, Mammal { ... }"
    ],
    "example": "An abstract class `Vehicle` maintains a `speed` variable, while `GPS` and `MusicPlayer` interfaces are implemented by `SmartCar`."
   }
  ],
  "formulas": [
   "public static final int CONSTANT = 100;",
   "interface A { void m1(); } interface B extends A { void m2(); }"
  ],
  "mustKnow": [
   "Differentiate between method overloading and method overriding (minimum 4 differences).",
   "Compare abstract classes and interfaces in tabular format.",
   "Explain the steps to create and compile a package with directory structure.",
   "Can a class implement two interfaces having methods with the same name and signature? Explain."
  ],
  "examTips": [
   "In comparisons, use standard 3-column tables: Parameter | Overloading | Overriding.",
   "Emphasize that multiple inheritance in Java is achieved exclusively through interfaces to avoid the Diamond Problem."
  ]
 },
 "NOTE-OOPJ-05": {
  "noteId": "NOTE-OOPJ-05",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Complete Exception Handling & Multithreading",
  "pageCount": 38,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes authored by Vedavathi Kotagiri [Asst. Prof, MGIT CSE]. Synthesizes the full scope of Unit 3: Exception Handling architecture (`Throwable`, checked vs. unchecked, `try-catch-finally`, `throw`, `throws`, custom exceptions) and Multithreaded Programming foundations (`Thread`, `Runnable`, lifecycle, scheduling, synchronization, inter-thread communication).",
  "topics": [
   {
    "title": "Exception Handling Architecture & Hierarchy",
    "summary": "Examines Java's structured error handling mechanism designed to maintain normal application execution flow during runtime failures.",
    "points": [
     "Throwable Hierarchy: `java.lang.Throwable` is the superclass of all errors and exceptions. Branches into `Error` (serious system issues like `OutOfMemoryError`) and `Exception` (catchable application conditions).",
     "Checked Exceptions: Checked by compiler during compilation; methods must declare via `throws` or handle via `try-catch` (e.g., `IOException`, `SQLException`, `ClassNotFoundException`).",
     "Unchecked Exceptions: Subclasses of `RuntimeException` occurring at runtime due to programming flaws; compiler does not force handling (e.g., `ArithmeticException`, `NullPointerException`, `ArrayIndexOutOfBoundsException`).",
     "Exception Propagation: If an exception is unhandled in a method, it is pushed down the call stack until an appropriate catch block is encountered or the default JVM handler terminates the thread."
    ],
    "formulas": [
     "Throwable -> (Error, Exception -> (RuntimeException [Unchecked], Other Exceptions [Checked]))",
     "Default Handler: Thread prints stack trace and terminates execution"
    ],
    "example": "Division by zero throws an `ArithmeticException`; reading a non-existent file on disk throws a checked `FileNotFoundException`."
   },
   {
    "title": "Exception Control: Try, Catch, Finally & Multi-Catch",
    "summary": "Syntax and execution semantics for trapping runtime errors, ensuring resource cleanup, and nesting try blocks.",
    "points": [
     "Try & Catch Blocks: Critical statements reside in `try`; errors instantiate exception objects matched against sequential `catch` blocks.",
     "Catch Order Rule: Subclass exceptions must always be caught before superclass exceptions (`ArithmeticException` before `Exception`); reversing this causes unreachable code compile errors.",
     "Finally Block Guarantee: Executes unconditionally whether an exception is thrown, caught, or completely absent. Executes even if a `return`, `break`, or `continue` statement is reached in `try`/`catch`.",
     "Nested Try Blocks: If an inner `try` does not match an exception, the exception falls back to the enclosing outer `try` block's catch handlers."
    ],
    "formulas": [
     "try { ... } catch (ChildException e) { ... } catch (ParentException e) { ... } finally { cleanup(); }",
     "Order Constraint: Specific Subclass First -> Generic Superclass Last"
    ],
    "example": "Opening a file in `try`, handling `IOException` in `catch`, and closing the file descriptor in `finally` prevents resource leaks."
   },
   {
    "title": "Throw, Throws & Custom User-Defined Exceptions",
    "summary": "Mechanisms for manually throwing exceptions, declaring method failure contracts, and building enterprise domain exceptions.",
    "points": [
     "Throw vs Throws: `throw` is used inside method body to throw a concrete exception instance (`throw new MyException();`); `throws` is used in method signature to declare exceptions thrown by the method (`void read() throws IOException`).",
     "Custom Exceptions: Created by extending `java.lang.Exception` (checked) or `java.lang.RuntimeException` (unchecked). Standard practice provides a default constructor and a message-passing constructor (`super(msg)`)."
    ],
    "formulas": [
     "class InsufficientFundsException extends Exception { public InsufficientFundsException(String msg) { super(msg); } }",
     "void withdraw(int amt) throws InsufficientFundsException { if(amt > bal) throw new InsufficientFundsException(\"Low Balance\"); }"
    ],
    "example": "A bank withdrawal method throws custom `InsufficientFundsException` when balance is less than withdrawal amount."
   },
   {
    "title": "Multithreading Foundations & Thread Lifecycle",
    "summary": "Introduction to concurrent execution units sharing memory space within a single process.",
    "points": [
     "Process vs Thread: A process is heavyweight with private memory address space; a thread is a lightweight dispatchable sub-process sharing the heap with peer threads.",
     "5 Lifecycle States: New (created), Runnable (ready/running in CPU pool), Blocked/Waiting (suspended for lock or signal), Timed Waiting (`sleep(ms)`), Terminated (execution complete).",
     "Two Ways to Create Threads: (1) Extending `Thread` class and overriding `run()`; (2) Implementing `Runnable` interface and passing instance to `new Thread(r)`. Implementing `Runnable` is superior as it allows extending other base classes."
    ],
    "formulas": [
     "Lifecycle: New -> start() -> Runnable <-> Blocked/Waiting -> Terminated",
     "Runnable: Thread t = new Thread(new MyRunnable()); t.start();"
    ],
    "example": "Extending `Thread`: `class Worker extends Thread { public void run() { ... } }` and calling `new Worker().start()` launches a concurrent thread."
   }
  ],
  "formulas": [
   "try { ... } catch(Exception e) { ... } finally { ... }",
   "throw new ArithmeticException(\"/ by zero\");",
   "void readFile() throws IOException { ... }",
   "Thread t = new Thread(runnableInstance);",
   "t.start(); // Invokes run() asynchronously"
  ],
  "mustKnow": [
   "Draw and explain the Java Exception hierarchy tree with checked and unchecked branches.",
   "Explain the purpose and execution guarantees of the finally block with illustrative code.",
   "Differentiate between throw and throws with syntactical examples.",
   "How do you design, throw, and catch a user-defined custom exception in Java?",
   "Compare creating threads by extending Thread class versus implementing Runnable interface."
  ],
  "examTips": [
   "In exception questions, emphasize that `finally` does NOT execute ONLY if `System.exit(0)` is explicitly called.",
   "In catch blocks, illustrate why catching `Exception` before `ArithmeticException` results in a compilation error.",
   "Always call `t.start()` and explain that calling `t.run()` executes sequentially on the main thread without creating a new thread."
  ]
 },
 "NOTE-OOPJ-06": {
  "noteId": "NOTE-OOPJ-06",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Multithreading Architecture & Concurrency",
  "pageCount": 40,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Specialized lecture presentation authored by Vedavathi K [MGIT CSE]. Focuses on Multithreaded Programming architecture, thread states, thread priorities, synchronization, object monitors, mutual exclusion, and thread communication.",
  "topics": [
   {
    "title": "Thread Lifecycle & State Transition Diagram",
    "summary": "Detailed exploration of thread transitions through operating system and JVM scheduler states.",
    "points": [
     "New State: Thread object instantiated (`Thread t = new Thread()`), memory allocated, but not yet started.",
     "Runnable State: `start()` invoked; thread enters the ready pool contending for CPU time slices. Transitions between Ready and Running.",
     "Blocked/Waiting State: Thread enters waiting pool when waiting for monitor lock (`synchronized`), waiting for notification (`wait()`), or sleeping (`sleep(ms)`).",
     "Dead/Terminated State: Thread completes execution of `run()` method or encounters an unhandled exception."
    ],
    "formulas": [
     "start() -> Runnable | sleep(t)/wait() -> Blocked/Waiting | notify() -> Runnable",
     "isAlive(): returns boolean indicating whether thread has started and not yet died"
    ],
    "example": "A thread executing `Thread.sleep(1000)` pauses execution for 1000ms without releasing object monitor locks."
   },
   {
    "title": "Thread Priorities & CPU Scheduling",
    "summary": "How the JVM prioritizes threads during CPU contention.",
    "points": [
     "Priority Scale: Integer values from 1 (`MIN_PRIORITY`) to 10 (`MAX_PRIORITY`); default is 5 (`NORM_PRIORITY`).",
     "Inheritance: Newly spawned threads inherit the priority of the creating thread.",
     "Preemptive Scheduling: Higher priority threads are generally scheduled ahead of lower priority threads, though actual behavior depends on the underlying OS thread scheduler."
    ],
    "formulas": [
     "Thread.MIN_PRIORITY = 1 | Thread.NORM_PRIORITY = 5 | Thread.MAX_PRIORITY = 10",
     "t.setPriority(Thread.MAX_PRIORITY);"
    ],
    "example": "Setting `t.setPriority(8)` requests the scheduler to allocate CPU cycles with higher preference."
   },
   {
    "title": "Thread Synchronization & Object Monitors",
    "summary": "Enforcing mutual exclusion across concurrent threads sharing common mutable state to prevent race conditions.",
    "points": [
     "Race Condition: Occurs when multiple threads read and write shared data simultaneously, producing indeterminate corrupted state.",
     "Object Monitor: Every object in Java has an associated monitor (mutex lock). A thread acquiring the monitor gains exclusive access.",
     "Synchronized Methods: `public synchronized void deposit(int amt)` locks the entire method on `this` object monitor.",
     "Synchronized Statements: `synchronized(accountObj) { ... }` locks only the critical code section on any designated monitor."
    ],
    "formulas": [
     "Mutual Exclusion: Only 1 thread can hold object monitor at any instant",
     "synchronized(sharedObject) { /* critical section */ }"
    ],
    "example": "A bank withdrawal method marked `synchronized` prevents two ATM cards from deducting from the same balance concurrently."
   }
  ],
  "formulas": [
   "t.setPriority(int priority);",
   "t.join(); // Caller waits for t to terminate",
   "public synchronized void safeMethod() { ... }",
   "synchronized(lockObj) { ... }"
  ],
  "mustKnow": [
   "Draw and explain the Thread Lifecycle state transition diagram with all method triggers.",
   "What is a race condition? How does thread synchronization resolve it in Java?",
   "Compare synchronized methods and synchronized blocks in terms of performance and lock scope.",
   "Explain the importance of thread priorities and the methods used to set and get them."
  ],
  "examTips": [
   "Always include a clean ASCII or hand-drawn state machine for the Thread Lifecycle question.",
   "Clarify that `sleep()` retains locks whereas `wait()` releases the monitor lock."
  ]
 },
 "NOTE-OOPJ-07": {
  "noteId": "NOTE-OOPJ-07",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Thread Lifecycle, Priorities & Synchronization",
  "pageCount": 13,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Classroom lecture handouts from MGIT CSE focusing on thread creation mechanics, `sleep()`, `join()`, `yield()`, daemon threads, and deadlock conditions.",
  "topics": [
   {
    "title": "Thread Control Methods: Sleep, Join & Yield",
    "summary": "Controlling thread execution flow and inter-thread coordination.",
    "points": [
     "Thread.sleep(ms): Temporarily halts execution for specified milliseconds without relinquishing monitor locks. Throws `InterruptedException`.",
     "join(): Causes current thread to pause execution until the thread on which `join()` was called finishes executing.",
     "Thread.yield(): Suggests to the scheduler that the current thread is willing to yield its current use of a processor."
    ],
    "formulas": [
     "Thread.sleep(milliseconds);",
     "t1.join(); // Current thread blocks until t1 dies"
    ],
    "example": "A main thread calls `worker.join()` to wait until background calculations complete before printing total."
   },
   {
    "title": "Daemon Threads & JVM Lifecycle",
    "summary": "Background utility threads providing services to user threads.",
    "points": [
     "Definition: Service provider threads running in background (e.g., Garbage Collector).",
     "Setting Daemon: Marked via `t.setDaemon(true)` before `t.start()` is called.",
     "JVM Termination: When all user threads terminate, the JVM shuts down abruptly, terminating all running daemon threads."
    ],
    "formulas": [
     "t.setDaemon(true); // Must be set before start()",
     "t.isDaemon() // Returns boolean"
    ],
    "example": "A background auto-save or spell-checker thread in a text editor configured as a daemon thread."
   },
   {
    "title": "Deadlock in Multithreading",
    "summary": "A situation where two or more threads are permanently blocked, each waiting for a lock held by the other.",
    "points": [
     "Deadlock Scenario: Thread 1 holds Lock A and waits for Lock B; Thread 2 holds Lock B and waits for Lock A.",
     "4 Necessary Conditions: Mutual exclusion, Hold and wait, No preemption, Circular wait.",
     "Prevention: Acquire locks in a globally consistent hierarchical order across all threads."
    ],
    "formulas": [
     "Deadlock: Thread1 -> holds(A), waits(B) | Thread2 -> holds(B), waits(A)",
     "Prevention Rule: Always acquire Lock A before Lock B"
    ],
    "example": "Two threads transferring money between two accounts deadlock if they lock source and destination in opposite order."
   }
  ],
  "formulas": [
   "t.setDaemon(true);",
   "t.join();",
   "Thread.yield();"
  ],
  "mustKnow": [
   "What is a deadlock? Write a complete Java program that demonstrates a deadlock situation.",
   "What are daemon threads in Java? Explain their lifecycle with respect to the JVM.",
   "Differentiate between sleep() and yield() methods."
  ],
  "examTips": [
   "When writing the deadlock program, use two string locks (`String lock1 = \"L1\"; String lock2 = \"L2\";`) with nested synchronized blocks."
  ]
 },
 "NOTE-OOPJ-08": {
  "noteId": "NOTE-OOPJ-08",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Inter-Thread Communication & Deadlock Prevention",
  "pageCount": 33,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Advanced lecture notes authored by Veda Kotagiri [Asst. Prof, MGIT CSE]. Covers inter-thread communication mechanisms, Producer-Consumer synchronization model, Object class wait/notify contracts, and deprecated thread methods.",
  "topics": [
   {
    "title": "Inter-Thread Communication & Object Class Methods",
    "summary": "How threads communicate state changes without wasteful CPU polling (busy waiting).",
    "points": [
     "Why in Object Class: `wait()`, `notify()`, and `notifyAll()` operate on the object's monitor lock, which belongs to any Java object rather than a specific thread.",
     "wait(): Relinquishes the monitor lock immediately and places calling thread into the object's wait set until another thread calls `notify()`.",
     "notify(): Wakes up a single arbitrary thread waiting on the object monitor.",
     "notifyAll(): Wakes up all threads waiting on the object monitor; they compete for the lock.",
     "Context: Must be called exclusively from within a `synchronized` context; otherwise throws `IllegalMonitorStateException`."
    ],
    "formulas": [
     "synchronized(obj) { while(!condition) obj.wait(); /* work */ obj.notify(); }",
     "wait() -> Releases Lock | notify() -> Does NOT immediately release lock"
    ],
    "example": "A consumer thread calls `wait()` on an empty buffer; producer adds data and calls `notify()` to wake consumer."
   },
   {
    "title": "The Producer-Consumer Implementation Model",
    "summary": "Classic concurrency synchronization problem demonstrating coordinated data production and consumption.",
    "points": [
     "Problem: Producer must not produce when buffer is full; Consumer must not consume when buffer is empty.",
     "Flag-based Coordination: A boolean `valueSet` flag tracks buffer state.",
     "Synchronized `put()` and `get()`: Methods check condition in a loop, invoke `wait()`, perform operation, toggle flag, and invoke `notify()`."
    ],
    "formulas": [
     "Producer: synchronized put(v) { while(valueSet) wait(); val=v; valueSet=true; notify(); }",
     "Consumer: synchronized get() { while(!valueSet) wait(); valueSet=false; notify(); return val; }"
    ],
    "example": "A shared `Queue` object with synchronized `produce()` and `consume()` methods preventing buffer overflow or underflow."
   }
  ],
  "formulas": [
   "wait(); // Releases lock, suspends thread",
   "notify(); // Wakes single waiting thread",
   "notifyAll(); // Wakes all waiting threads"
  ],
  "mustKnow": [
   "Explain Inter-Thread Communication in Java using wait(), notify(), and notifyAll().",
   "Why are wait() and notify() declared in Object class instead of Thread class?",
   "Write a complete Java program to implement the Producer-Consumer problem with synchronization.",
   "What is the cause of IllegalMonitorStateException?"
  ],
  "examTips": [
   "Always enclose `wait()` in a `while` loop, NOT an `if` statement, to guard against spurious wakeups.",
   "Explicitly mention that `wait()` releases the monitor, which is why it can only be called inside a synchronized block."
  ]
 },
 "NOTE-OOPJ-09": {
  "noteId": "NOTE-OOPJ-09",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Question Bank with Model Answers",
  "pageCount": 15,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT CSE Department examination solutions for Unit 3 question bank. Includes model answers for exception handling, multithreading, thread synchronization, custom exceptions, and producer-consumer implementations.",
  "topics": [
   {
    "title": "Exception Handling Question Bank Solutions",
    "summary": "Worked answers for 1-mark and 5-mark university questions on exceptions.",
    "points": [
     "Multiple Catch Blocks: Illustrating catch ordering from specific subclass to generic superclass.",
     "Custom Exception Example: `AgeNotValidException` checking voter eligibility with full try-catch code.",
     "Throws Declaration: Method declaring `throws IOException, ClassNotFoundException`."
    ],
    "formulas": [
     "if (age < 18) throw new InvalidAgeException(\"Not eligible\");"
    ],
    "example": "A voter registration check validating age and throwing a custom `InvalidAgeException`."
   },
   {
    "title": "Multithreading Question Bank Solutions",
    "summary": "Worked answers for multithreading code and theory questions.",
    "points": [
     "Runnable Implementation: Step-by-step code defining a class implementing `Runnable`, instantiating `Thread`, and calling `start()`.",
     "Bank Account Synchronization: Complete code demonstrating synchronized `withdraw()` preventing negative balance.",
     "Thread Priority Demo: Setting and displaying thread priorities for three concurrent threads."
    ],
    "formulas": [
     "Thread t = new Thread(new MyRunnable()); t.start();",
     "public synchronized void withdraw(int amt) { ... }"
    ],
    "example": "A bank account transaction program where two threads simulate simultaneous withdrawals on a shared account."
   }
  ],
  "formulas": [
   "class MyException extends Exception { ... }",
   "class MyThread implements Runnable { public void run() { ... } }"
  ],
  "mustKnow": [
   "Write a complete Java program demonstrating multiple catch blocks.",
   "Write a Java program to create a custom exception class and throw it.",
   "Write a Java program to demonstrate thread synchronization using a synchronized method.",
   "Explain thread life cycle with states and transitions."
  ],
  "examTips": [
   "Ensure custom exception extends `Exception` and calls `super(message)` in its constructor.",
   "Show both classes (the custom exception and the tester class with `main`) when answering custom exception questions."
  ]
 },
 "NOTE-OOPJ-10": {
  "noteId": "NOTE-OOPJ-10",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Files, Streams, Generics & Collections Master Notes",
  "pageCount": 35,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes from MGIT CSE covering Unit 4. Details Java I/O streams architecture (`java.io`), byte streams vs character streams, buffered I/O, file reading/writing, serialization, generics, and collections framework.",
  "topics": [
   {
    "title": "I/O Stream Hierarchies: Byte vs. Character Streams",
    "summary": "How Java abstracts input and output data transfer via stream pipelines.",
    "points": [
     "Stream Concept: An ordered sequence of data flowing from a source (InputStream/Reader) to a destination (OutputStream/Writer).",
     "Byte Streams: Handle raw 8-bit bytes (binary data, images, executables). Root classes: `java.io.InputStream` and `java.io.OutputStream`. Key classes: `FileInputStream`, `FileOutputStream`.",
     "Character Streams: Handle 16-bit Unicode characters (text files). Root classes: `java.io.Reader` and `java.io.Writer`. Key classes: `FileReader`, `FileWriter`.",
     "Standard I/O Streams: `System.in` (InputStream), `System.out` (PrintStream), `System.err` (PrintStream)."
    ],
    "formulas": [
     "Byte Stream: InputStream / OutputStream (8-bit bytes)",
     "Char Stream: Reader / Writer (16-bit Unicode)"
    ],
    "example": "Using `FileInputStream` to read binary audio data and `FileReader` to read English/Unicode text files."
   },
   {
    "title": "Buffered I/O & File Operations",
    "summary": "Optimizing disk I/O performance via in-memory buffering and file management.",
    "points": [
     "Buffering Concept: `BufferedReader` and `BufferedWriter` reduce expensive physical disk reads by loading memory blocks (default 8KB buffer).",
     "`readLine()` Method: Reads an entire line of text until newline character `\\n`.",
     "File Class: `java.io.File` represents file/directory pathnames; methods: `exists()`, `isFile()`, `isDirectory()`, `length()`, `delete()`, `mkdir()`."
    ],
    "formulas": [
     "BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"));",
     "String line; while((line = br.readLine()) != null) { ... }"
    ],
    "example": "Copying a text file line-by-line using `BufferedReader` and `BufferedWriter`."
   },
   {
    "title": "Object Serialization & Transient Keyword",
    "summary": "Converting object state into a byte stream for storage or network transmission.",
    "points": [
     "Serializable Interface: Marker interface (zero methods) in `java.io.Serializable` signaling JVM that class is eligible for serialization.",
     "Streams: `ObjectOutputStream.writeObject(obj)` serializes; `ObjectInputStream.readObject()` deserializes.",
     "Transient Keyword: Variables marked `transient` are skipped during serialization, restoring to default values upon deserialization (useful for passwords)."
    ],
    "formulas": [
     "oos.writeObject(studentObj); // Serialization",
     "Student s = (Student) ois.readObject(); // Deserialization"
    ],
    "example": "Serializing a `User` object while marking `private transient String password;` to protect sensitive credentials."
   }
  ],
  "formulas": [
   "FileInputStream fis = new FileInputStream(\"input.txt\");",
   "BufferedReader br = new BufferedReader(new FileReader(\"test.txt\"));",
   "class Student implements Serializable { transient int pin; }"
  ],
  "mustKnow": [
   "Differentiate between Byte Streams and Character Streams with class hierarchy diagrams.",
   "Explain the purpose of BufferedReader and BufferedWriter with a file copy program.",
   "What is Object Serialization? Explain the role of Serializable interface and transient keyword.",
   "Write a Java program to count characters, words, and lines in a text file."
  ],
  "examTips": [
   "In streams questions, draw the four root classes: `InputStream`, `OutputStream`, `Reader`, and `Writer`.",
   "Always close I/O streams inside a `finally` block or use Java 7 try-with-resources (`try(FileReader fr = ...)`)."
  ]
 },
 "NOTE-OOPJ-11": {
  "noteId": "NOTE-OOPJ-11",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: String Handling, Character Streams & Collections",
  "pageCount": 41,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Detailed lecture notes covering String classes (`String`, `StringBuffer`, `StringBuilder`), memory optimization in the String Constant Pool, Generics syntax, and Collections Framework data structures (`List`, `Set`, `Map`).",
  "topics": [
   {
    "title": "String Immutability & String Constant Pool",
    "summary": "Memory architecture and immutable design of Java String objects.",
    "points": [
     "String Immutability: Once created in memory, the contents of a `String` object cannot be altered. Modifications create a new String instance.",
     "String Constant Pool (SCP): Special memory area in heap caching unique string literals. `String s = \"hello\";` reuses pool object.",
     "Key Methods: `length()`, `charAt()`, `substring()`, `equals()` (content equality) vs `==` (reference equality), `compareTo()`."
    ],
    "formulas": [
     "String s1 = \"abc\"; String s2 = \"abc\"; // s1 == s2 is true (SCP)",
     "String s3 = new String(\"abc\"); // s1 == s3 is false (separate heap object)"
    ],
    "example": "`s.concat(\" world\")` does not modify `s`; `s = s.concat(\" world\")` reassigns `s` to the newly allocated object."
   },
   {
    "title": "StringBuffer vs. StringBuilder",
    "summary": "Mutable character sequences for high-frequency string concatenation.",
    "points": [
     "Mutability: Both `StringBuffer` and `StringBuilder` allow in-place character updates without reallocating objects.",
     "Thread Safety: `StringBuffer` methods are `synchronized` (thread-safe, slower); `StringBuilder` is unsynchronized (faster, single-threaded).",
     "Methods: `append()`, `insert()`, `delete()`, `reverse()`, `capacity()`."
    ],
    "formulas": [
     "StringBuffer: Thread-safe, synchronized, higher overhead",
     "StringBuilder: Fast, unsynchronized, preferred in single threads"
    ],
    "example": "Reversing a string: `new StringBuilder(str).reverse().toString()` in O(n) without manual loops."
   },
   {
    "title": "Java Collections Framework Architecture",
    "summary": "Unified architecture for representing and manipulating collections of objects.",
    "points": [
     "Hierarchy: Root interface `java.util.Collection` extended by `List`, `Set`, and `Queue`. `Map` is an independent key-value hierarchy.",
     "List Interface: Ordered sequence allowing duplicates. `ArrayList` (dynamic resizable array, fast random access O(1)) vs `LinkedList` (doubly-linked list, fast insertions/deletions O(1)).",
     "Set Interface: Unordered collection prohibiting duplicate elements. `HashSet` (hash table O(1), no order) vs `TreeSet` (Red-Black tree, sorted O(log n)).",
     "Map Interface: Key-value mapping. `HashMap` (unsorted O(1)) vs `TreeMap` (sorted by keys O(log n)).",
     "Iteration: Universal traversal via `Iterator` (`hasNext()`, `next()`, `remove()`)."
    ],
    "formulas": [
     "Collection -> List (ArrayList, LinkedList) | Set (HashSet, TreeSet)",
     "Map -> HashMap, TreeMap (Key -> Value, unique keys)"
    ],
    "example": "Using `HashMap<Integer, String> map = new HashMap<>(); map.put(101, \"Alice\");` for O(1) student record retrieval."
   }
  ],
  "formulas": [
   "String.valueOf(data)",
   "sb.append(\"text\").reverse();",
   "List<String> list = new ArrayList<>();",
   "Set<Integer> set = new HashSet<>();",
   "Map<K, V> map = new HashMap<>();"
  ],
  "mustKnow": [
   "Compare String, StringBuffer, and StringBuilder in detail with a comparison table.",
   "Explain the difference between == operator and equals() method for String comparison.",
   "Explain the Java Collections Framework hierarchy with a block diagram.",
   "Differentiate between ArrayList and LinkedList with internal data structure details.",
   "Differentiate between HashSet and TreeSet with time complexity."
  ],
  "examTips": [
   "In String questions, explicitly contrast the String Constant Pool vs Heap memory.",
   "In Collections questions, always mention time complexities: ArrayList get() is O(1) whereas LinkedList get() is O(n)."
  ]
 },
 "NOTE-OOPJ-12": {
  "noteId": "NOTE-OOPJ-12",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Generics, Wildcards & Event Handling Foundations",
  "pageCount": 57,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Faculty lecture handouts authored by Vedavathi Kotagiri [Asst. Prof, MGIT CSE]. Covers Generics type safety, bounded type parameters, wildcard arguments, and foundations of the Delegation Event Model, Event Classes, Event Listeners, and Adapter classes.",
  "topics": [
   {
    "title": "Generics & Bounded Type Parameters",
    "summary": "Compile-time type safety preventing `ClassCastException` and eliminating explicit casting.",
    "points": [
     "Motivation: Prior to Generics, collections held raw `Object` references requiring error-prone explicit typecasting at runtime.",
     "Generic Classes & Methods: Declared with type parameter `<T>`, enabling reuse with any reference type (`MyClass<T>`).",
     "Bounded Types: Restricting type parameters using `extends` (`<T extends Number>`), allowing only subclasses of specified boundary.",
     "Wildcards: `<?>` (unbounded), `<? extends Number>` (upper-bounded), `<? super Integer>` (lower-bounded)."
    ],
    "formulas": [
     "class Box<T> { private T val; public void set(T v) { val = v; } }",
     "void printList(List<? extends Number> list) // Accepts List<Integer>, List<Double>"
    ],
    "example": "A generic mathematical calculator restricting types using `<T extends Number>`."
   },
   {
    "title": "Delegation Event Model Architecture",
    "summary": "The standard modern event handling paradigm in Java GUI applications.",
    "points": [
     "Three Core Components: (1) Event Source (GUI component like `JButton`); (2) Event Object (encapsulating event information like `ActionEvent`); (3) Event Listener (interface defining callback methods like `ActionListener`).",
     "Registration: Event source maintains a listener list and registers listeners using `addXxxListener(this)`.",
     "Event Dispatching: User action creates event object; source invokes matching method on all registered listeners."
    ],
    "formulas": [
     "Source --(generates EventObject)--> Listener.eventCallback(e)",
     "button.addActionListener(listenerInstance);"
    ],
    "example": "Clicking a `JButton` generates `ActionEvent`, invoking `actionPerformed(ActionEvent e)` in registered listener."
   },
   {
    "title": "Event Classes, Listeners & Adapter Classes",
    "summary": "Mapping user input to event classes and simplifying listeners using adapter classes.",
    "points": [
     "Key Event/Listener Pairs: `ActionEvent` -> `ActionListener` (`actionPerformed`), `MouseEvent` -> `MouseListener` / `MouseMotionListener`, `KeyEvent` -> `KeyListener` (`keyPressed`, `keyReleased`, `keyTyped`), `WindowEvent` -> `WindowListener`.",
     "Adapter Classes: Abstract classes providing empty default implementations for listener interfaces with multiple methods (`MouseAdapter`, `KeyAdapter`, `WindowAdapter`).",
     "Subclassing: Programmers extend the adapter class and override only the specific methods needed, eliminating empty boilerplate methods."
    ],
    "formulas": [
     "class MyMouseHandler extends MouseAdapter { public void mouseClicked(MouseEvent e) { ... } }",
     "Adapter eliminates implementing 5 methods in MouseListener"
    ],
    "example": "Handling window close event by extending `WindowAdapter` and overriding only `windowClosing(WindowEvent e)`."
   }
  ],
  "formulas": [
   "class GenericClass<T> { ... }",
   "button.addActionListener(e -> { ... });",
   "class MyWinAdapter extends WindowAdapter { ... }"
  ],
  "mustKnow": [
   "What are Generics in Java? Explain bounded types and wildcards with examples.",
   "Draw and explain the Delegation Event Model architecture.",
   "What are adapter classes in Java? Explain their significance with WindowAdapter.",
   "Write a Java program to handle mouse events and display cursor coordinates."
  ],
  "examTips": [
   "When explaining Delegation Event Model, draw the three-box diagram: Event Source -> Event Object -> Event Listener.",
   "Emphasize that Adapter classes exist ONLY for listener interfaces that declare more than one method."
  ]
 },
 "NOTE-OOPJ-13": {
  "noteId": "NOTE-OOPJ-13",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Question Bank with Problem Solutions",
  "pageCount": 39,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT CSE Department examination solutions for Unit 4 question bank. Features complete worked solutions for 1-mark definitions and 5-mark programming problems covering file copying, character counts, keyboard/mouse event handling, and generic collections.",
  "topics": [
   {
    "title": "File I/O & Streams Question Bank Solutions",
    "summary": "Complete code models for stream processing and file manipulation.",
    "points": [
     "File Copy Program: Reading bytes from `FileInputStream` and writing to `FileOutputStream` using buffer byte arrays.",
     "Word & Line Counting: Using `BufferedReader.readLine()` and `String.split(\"\\\\s+\")` to count characters, words, and lines.",
     "Serialization Model: Student class implementing `Serializable`, demonstrating `ObjectOutputStream` and `ObjectInputStream`."
    ],
    "formulas": [
     "int b; while((b = fis.read()) != -1) fos.write(b);",
     "int words = line.trim().split(\"\\\\s+\").length;"
    ],
    "example": "A complete Java utility that reads a source file and writes an exact replica to a destination file path."
   },
   {
    "title": "GUI Event Handling Question Bank Solutions",
    "summary": "Model GUI programs implementing event listeners and adapter classes.",
    "points": [
     "Mouse Coordinates Tracker: Implementing `MouseMotionListener` and displaying X, Y coordinates in a label on `mouseMoved`.",
     "Button Click Action: Appending text to a text area when buttons are clicked using `ActionListener`.",
     "Key Event Demo: Detecting arrow keys and character keystrokes with `KeyListener`."
    ],
    "formulas": [
     "label.setText(\"X: \" + e.getX() + \", Y: \" + e.getY());",
     "public void actionPerformed(ActionEvent e) { ... }"
    ],
    "example": "A GUI window displaying 'Key Pressed: A' whenever the user types on the keyboard."
   }
  ],
  "formulas": [
   "fis.read(buffer)",
   "e.getX(), e.getY()",
   "e.getActionCommand()"
  ],
  "mustKnow": [
   "Write a Java program to copy one file to another file using FileInputStream and FileOutputStream.",
   "Write a Java program to count the number of characters, words, and lines in a text file.",
   "Write a Java program to handle mouse events using MouseListener and MouseMotionListener.",
   "Explain the Delegation Event Model with an illustrative GUI program."
  ],
  "examTips": [
   "In file handling programs, handle `FileNotFoundException` and `IOException` explicitly.",
   "For mouse coordinates, remember `e.getX()` and `e.getY()`."
  ]
 },
 "NOTE-OOPJ-14": {
  "noteId": "NOTE-OOPJ-14",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Complete Swing GUI, Event Model & JDBC",
  "pageCount": 23,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes authored by Vedavathi Kotagiri [Asst. Prof, MGIT CSE]. Covers Applet lifecycle (legacy university PYQ topic), Swing architecture, Model-View-Controller (MVC) pattern, lightweight vs. heavyweight components, Swing container hierarchies, Layout Managers, and JDBC 4-tier architecture.",
  "topics": [
   {
    "title": "Applets Architecture & Life Cycle",
    "summary": "Review of Java applet execution in browser sandboxes (historical university syllabus topic).",
    "points": [
     "Applet vs Application: Applications execute via `main()` locally; applets run within a browser/applet viewer without `main()`.",
     "5 Lifecycle Methods: `init()` (initializes resources), `start()` (starts/resumes execution), `paint(Graphics g)` (renders display), `stop()` (suspends execution), `destroy()` (cleans resources prior to unloading).",
     "Parameter Passing: Reading `<param name=\"title\" value=\"Java\">` tags via `getParameter(\"title\")`."
    ],
    "formulas": [
     "Applet Life Cycle: init() -> start() -> paint() <-> stop() -> destroy()",
     "String param = getParameter(\"paramName\");"
    ],
    "example": "A web banner applet initializing fonts in `init()`, starting animation thread in `start()`, and rendering in `paint()`."
   },
   {
    "title": "Swing Architecture, MVC Pattern & AWT Comparison",
    "summary": "Modern Java Foundation Classes GUI architecture and design patterns.",
    "points": [
     "AWT Limitations: Heavyweight components reliant on native OS GUI peers; platform-dependent appearance and higher resource consumption.",
     "Swing Advantages: Lightweight, 100% pure Java, pluggable look-and-feel (Metal, Windows, Motif), rich component set (tables, trees, tabbed panes).",
     "MVC Architecture: Model (stores state and data), View (renders visual display), Controller (handles user input and updates model). In Swing, View and Controller are combined into a Component UI delegate."
    ],
    "formulas": [
     "AWT = Heavyweight (Native Peers) | Swing = Lightweight (Pure Java)",
     "MVC: Model (Data) <-> View (Rendering) <-> Controller (Events)"
    ],
    "example": "A `JButton` uses a data model (`ButtonModel`) and a UI delegate (`ButtonUI`) to support switching look-and-feel on the fly."
   },
   {
    "title": "JDBC Architecture & 7-Step Database Connection",
    "summary": "Java Database Connectivity API for executing SQL statements across relational databases.",
    "points": [
     "4-Tier Architecture: Java Application -> JDBC API (`java.sql`) -> JDBC Driver Manager -> JDBC Drivers -> Relational Database.",
     "4 Driver Types: Type 1 (JDBC-ODBC Bridge, obsolete), Type 2 (Native-API partly Java), Type 3 (Network-Protocol middleware), Type 4 (Thin Driver, 100% pure Java directly to database socket). Type 4 is industry standard.",
     "7-Step Workflow: (1) Import `java.sql.*`; (2) Load driver (`Class.forName(\"com.mysql.cj.jdbc.Driver\")`); (3) Establish connection (`DriverManager.getConnection(url, user, pass)`); (4) Create statement (`conn.createStatement()`); (5) Execute query (`stmt.executeQuery(sql)`); (6) Process `ResultSet`; (7) Close connection."
    ],
    "formulas": [
     "Class.forName(\"com.mysql.cj.jdbc.Driver\");",
     "Connection con = DriverManager.getConnection(url, user, pass);",
     "ResultSet rs = stmt.executeQuery(\"SELECT * FROM students\");"
    ],
    "example": "Connecting to MySQL database, retrieving student records, and iterating with `while(rs.next())`."
   }
  ],
  "formulas": [
   "Class.forName(driverClassName);",
   "Connection con = DriverManager.getConnection(url, u, p);",
   "Statement stmt = con.createStatement();",
   "PreparedStatement pstmt = con.prepareStatement(sql);"
  ],
  "mustKnow": [
   "Differentiate between AWT and Swing components in tabular format.",
   "Explain the Applet lifecycle with all state transition methods and a diagram.",
   "Explain the 4 types of JDBC drivers with architectural block diagrams.",
   "List and explain the 7 steps to connect to a database using JDBC with code.",
   "Differentiate between Statement and PreparedStatement in JDBC."
  ],
  "examTips": [
   "In JDBC driver questions, always state that Type 4 (Thin Driver) is preferred because it is 100% pure Java and requires no client-side native libraries.",
   "In Applet lifecycle questions, explicitly list which methods execute once (`init`, `destroy`) versus multiple times (`start`, `stop`, `paint`)."
  ]
 },
 "NOTE-DM-01": {
  "noteId": "NOTE-DM-01",
  "subjectId": "DM",
  "chapter": 1,
  "title": "DM Unit 1: Handouts",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Mathematical logic forms the foundation of computer science reasoning, digital logic synthesis, and formal software verification. This unit covers propositional calculus, truth tables, logical equivalence laws, normal forms (CNF/DNF), and formal proof inference rules.",
  "topics": [
   {
    "title": "Propositional Logic & Logical Connectives",
    "summary": "A proposition is a declarative statement that is strictly either true (T) or false (F), but not both. Compound propositions are formed using logical connectives.",
    "points": [
     "Negation (¬p / ~p): Inverts truth value; true when p is false.",
     "Conjunction (p ∧ q): True strictly when both propositions are true.",
     "Disjunction (p ∨ q): Inclusive disjunction; true if at least one proposition is true.",
     "Conditional (p → q): \"If p then q\"; false only when antecedent p is true and consequent q is false.",
     "Biconditional (p ↔ q): True strictly when p and q share identical truth values."
    ],
    "formulas": [
     "p → q ≡ ¬p ∨ q",
     "Contrapositive: p → q ≡ ¬q → ¬p",
     "Converse: q → p (not logically equivalent to p → q)",
     "Inverse: ¬p → ¬q (equivalent to converse)"
    ],
    "example": "If p = \"It is raining\" and q = \"Ground is wet\", the conditional p → q is: \"If it is raining, then the ground is wet\". The contrapositive ¬q → ¬p is: \"If the ground is not wet, then it is not raining\"."
   },
   {
    "title": "Tautologies, Contradictions & Equivalence Laws",
    "summary": "A formula is a Tautology if it evaluates to True under all truth assignments, a Contradiction if False under all assignments, and a Contingency otherwise.",
    "points": [
     "Identity Laws: p ∧ T ≡ p;  p ∨ F ≡ p",
     "Domination Laws: p ∨ T ≡ T;  p ∧ F ≡ F",
     "Idempotent Laws: p ∨ p ≡ p;  p ∧ p ≡ p",
     "Double Negation: ¬(¬p) ≡ p",
     "Commutative & Associative Laws hold for both ∧ and ∨"
    ],
    "formulas": [
     "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q  and  ¬(p ∨ q) ≡ ¬p ∧ ¬q",
     "Distributive Laws: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)",
     "Absorption Laws: p ∨ (p ∧ q) ≡ p  and  p ∧ (p ∨ q) ≡ p"
    ],
    "example": "Verify that p ∨ ¬p is a tautology: if p=T, T ∨ F = T; if p=F, F ∨ T = T. Thus, truth value is always T."
   },
   {
    "title": "Normal Forms (CNF, DNF, PCNF & PDNF)",
    "summary": "Standard canonical representations of Boolean expressions. A minterm is a conjunction of literals; a maxterm is a disjunction of literals.",
    "points": [
     "Disjunctive Normal Form (DNF): A disjunction of conjunctions (Sum of Products).",
     "Conjunctive Normal Form (CNF): A conjunction of disjunctions (Product of Sums).",
     "Principal DNF (PDNF): Sum of minterms containing every variable exactly once.",
     "Principal CNF (PCNF): Product of maxterms containing every variable exactly once."
    ],
    "formulas": [
     "Procedure to CNF: Eliminate → and ↔, drive ¬ inside using De Morgan's, apply distributivity of ∨ over ∧.",
     "Duality: If PDNF has m minterms from 2^n possibilities, PCNF consists of the remaining (2^n - m) maxterms."
    ],
    "example": "For formula p → q: replace implication with ¬p ∨ q. Since it is a single disjunction of literals, it is already in CNF."
   },
   {
    "title": "Rules of Inference & Predicate Logic",
    "summary": "Inference rules govern valid logical deduction from premises to conclusions without computing full truth tables.",
    "points": [
     "Modus Ponens: From p and p → q, conclude q.",
     "Modus Tollens: From ¬q and p → q, conclude ¬p.",
     "Hypothetical Syllogism: From p → q and q → r, conclude p → r.",
     "Disjunctive Syllogism: From p ∨ q and ¬p, conclude q.",
     "Universal Quantifier (∀x P(x)): True if P(x) is true for all domain elements.",
     "Existential Quantifier (∃x P(x)): True if P(x) is true for at least one domain element."
    ],
    "formulas": [
     "¬(∀x P(x)) ≡ ∃x ¬P(x)",
     "¬(∃x P(x)) ≡ ∀x ¬P(x)"
    ],
    "example": "Premises: \"If x is divisible by 6, then x is divisible by 2\" (p → q) and \"x is divisible by 6\" (p). By Modus Ponens, conclusion: \"x is divisible by 2\" (q)."
   }
  ],
  "mustKnow": [
   "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q",
   "Conditional equivalence: p → q ≡ ¬p ∨ q",
   "Contrapositive equality: p → q ≡ ¬q → ¬p",
   "Modus Ponens inference: (p ∧ (p → q)) ⟹ q",
   "Quantifier negation: ¬∀x P(x) ≡ ∃x ¬P(x)"
  ]
 },
 "NOTE-DM-02": {
  "noteId": "NOTE-DM-02",
  "subjectId": "DM",
  "chapter": 2,
  "title": "DM Unit 2: Handouts",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Set theory and relations provide the formal mathematical foundation for database theory, data structures, and relational algebra. Covers sets, power sets, Cartesian products, equivalence relations, partial orders, and function classifications.",
  "topics": [
   {
    "title": "Set Operations & Laws",
    "summary": "A set is a well-defined collection of distinct objects. Fundamental operations include union, intersection, difference, and Cartesian product.",
    "points": [
     "Union (A ∪ B) = {x | x ∈ A or x ∈ B}",
     "Intersection (A ∩ B) = {x | x ∈ A and x ∈ B}",
     "Difference (A - B) = {x | x ∈ A and x ∉ B}",
     "Symmetric Difference (A ⊕ B) = (A - B) ∪ (B - A)",
     "Power Set P(A): Set of all subsets of A; if |A| = n, then |P(A)| = 2^n."
    ],
    "formulas": [
     "Principle of Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|",
     "Cartesian Product: |A × B| = |A| × |B|"
    ],
    "example": "If A = {1, 2}, then P(A) = {∅, {1}, {2}, {1, 2}}, having |P(A)| = 2^2 = 4 elements."
   },
   {
    "title": "Binary Relations & Their Properties",
    "summary": "A binary relation R from set A to set B is a subset of A × B. If A = B, R is a relation on A.",
    "points": [
     "Reflexive: (a, a) ∈ R for all a ∈ A.",
     "Symmetric: (a, b) ∈ R implies (b, a) ∈ R.",
     "Transitive: (a, b) ∈ R and (b, c) ∈ R implies (a, c) ∈ R.",
     "Antisymmetric: (a, b) ∈ R and (b, a) ∈ R implies a = b.",
     "Irreflexive: (a, a) ∉ R for any a ∈ A."
    ],
    "formulas": [
     "Total number of binary relations on set with n elements: 2^(n^2)",
     "Total number of reflexive relations: 2^(n^2 - n)",
     "Total number of symmetric relations: 2^(n(n+1)/2)"
    ],
    "example": "Relation \"≤\" on integers is reflexive (a ≤ a), antisymmetric (a ≤ b and b ≤ a ⇒ a = b), and transitive (a ≤ b and b ≤ c ⇒ a ≤ c)."
   },
   {
    "title": "Equivalence Relations & Partitions",
    "summary": "A relation that is simultaneously reflexive, symmetric, and transitive is an Equivalence Relation.",
    "points": [
     "Equivalence Class [a]: Set of all elements related to a, i.e., [a] = {x ∈ A | (a, x) ∈ R}.",
     "Partitions: The set of equivalence classes forms a partition of A into pairwise disjoint non-empty subsets.",
     "Congruence modulo m: a ≡ b (mod m) iff m divides (a - b) is an equivalence relation."
    ],
    "formulas": [
     "Union of all equivalence classes = A",
     "[a] ∩ [b] = ∅ if a and b are not related; [a] = [b] if (a, b) ∈ R"
    ],
    "example": "Congruence modulo 3 on integers partitions Z into three disjoint classes: [0], [1], and [2]."
   },
   {
    "title": "Functions & Mappings",
    "summary": "A function f: A → B assigns exactly one element of B to each element of A.",
    "points": [
     "Injective (One-to-One): f(x) = f(y) implies x = y.",
     "Surjective (Onto): For every y ∈ B, there exists x ∈ A such that f(x) = y (Range = Codomain).",
     "Bijective: Both one-to-one and onto. A bijection has a unique inverse function f^(-1): B → A.",
     "Composition: (g ∘ f)(x) = g(f(x)). Associative: h ∘ (g ∘ f) = (h ∘ g) ∘ f."
    ],
    "formulas": [
     "If |A| = m and |B| = n, number of functions A → B is n^m.",
     "If m = n, number of bijections is n!."
    ],
    "example": "f(x) = 2x from R to R is bijective because 2x1 = 2x2 implies x1 = x2 (injective) and for any y ∈ R, x = y/2 satisfies f(x) = y (surjective)."
   }
  ],
  "mustKnow": [
   "Equivalence relation requirements: Reflexive + Symmetric + Transitive",
   "Partial order requirements: Reflexive + Antisymmetric + Transitive",
   "Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|",
   "Inverse function exists if and only if the function is bijective",
   "Power set cardinality: |P(A)| = 2^|A|"
  ]
 },
 "NOTE-DM-03": {
  "noteId": "NOTE-DM-03",
  "subjectId": "DM",
  "chapter": 3,
  "title": "DM Unit 3: Algebraic Structures - Handouts",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Algebraic structures investigate sets equipped with one or more binary operations satisfying axiomatic properties. Essential for cryptography, coding theory, and formal grammars. Covers semigroups, monoids, groups, subgroups, cyclic groups, cosets, Lagrange's theorem, and lattices.",
  "topics": [
   {
    "title": "Binary Operations & Algebraic Systems",
    "summary": "An algebraic system (S, *) consists of a non-empty set S and a closed binary operation * : S × S → S.",
    "points": [
     "Closure: For all a, b ∈ S, a * b ∈ S.",
     "Associativity: (a * b) * c = a * (b * c) for all a, b, c ∈ S.",
     "Identity Element: An element e ∈ S such that a * e = e * a = a for all a ∈ S (unique if it exists).",
     "Inverse Element: For each a ∈ S, an element a^(-1) ∈ S such that a * a^(-1) = a^(-1) * a = e."
    ],
    "formulas": [
     "Semigroup: Closed + Associative (S, *)",
     "Monoid: Semigroup with Identity element (S, *, e)",
     "Group: Monoid where every element possesses a unique inverse (G, *, e, ^(-1))"
    ],
    "example": "(Z, +) is a group: closed under addition, associative, identity is 0, and inverse of a is -a."
   },
   {
    "title": "Groups, Abelian Groups & Subgroups",
    "summary": "A Group is an algebraic system satisfying closure, associativity, identity, and invertibility. If the operation is commutative, it is an Abelian Group.",
    "points": [
     "Abelian Group: a * b = b * a for all a, b ∈ G.",
     "Order of a Group |G|: Number of elements in group G.",
     "Order of an element O(a): Smallest positive integer m such that a^m = e.",
     "Subgroup (H ≤ G): A non-empty subset H of G that is itself a group under the restricted operation."
    ],
    "formulas": [
     "Subgroup Test: Non-empty H ≤ G iff for all a, b ∈ H, a * b^(-1) ∈ H.",
     "Lagrange's Theorem: If G is a finite group and H is a subgroup of G, then |H| divides |G|."
    ],
    "example": "Under multiplication modulo 5, G = {1, 2, 3, 4} forms an Abelian group with identity 1. H = {1, 4} is a subgroup of order 2, dividing |G| = 4."
   },
   {
    "title": "Cyclic Groups & Generators",
    "summary": "A group G is Cyclic if there exists an element a ∈ G such that every element of G can be expressed as a power of a (G = ⟨a⟩).",
    "points": [
     "Generator: An element a such that ⟨a⟩ = G.",
     "Every cyclic group is Abelian.",
     "Subgroups of a cyclic group are also cyclic.",
     "If G is a finite cyclic group of order n generated by a, then a^k is a generator iff gcd(k, n) = 1."
    ],
    "formulas": [
     "Number of generators of a finite cyclic group of order n is given by Euler's totient function φ(n)."
    ],
    "example": "In (Z6, +), 1 and 5 are generators because gcd(1, 6) = 1 and gcd(5, 6) = 1. φ(6) = 2."
   },
   {
    "title": "Lattices & Partial Orders (Posets)",
    "summary": "A Poset (P, ≤) is a set with a relation that is reflexive, antisymmetric, and transitive. A Lattice is a poset in which every pair of elements has a unique LUB (Join) and GLB (Meet).",
    "points": [
     "Least Upper Bound (LUB / Join): Denoted a ∨ b.",
     "Greatest Lower Bound (GLB / Meet): Denoted a ∧ b.",
     "Hasse Diagram: Graphical representation of a finite poset eliminating reflexive self-loops and transitive edges.",
     "Distributive Lattice: Meets and joins distribute over each other: a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c).",
     "Complemented Lattice: Every element a has a complement a' such that a ∨ a' = 1 and a ∧ a' = 0."
    ],
    "formulas": [
     "Absorption Laws in Lattices: a ∨ (a ∧ b) = a  and  a ∧ (a ∨ b) = a",
     "Boolean Algebra: A lattice that is both distributive and complemented."
    ],
    "example": "Power set (P(S), ⊆) is a Boolean algebra where join is union (∪), meet is intersection (∩), 0 is ∅, and 1 is S."
   }
  ],
  "mustKnow": [
   "Lagrange's Theorem: |H| divides |G| for any subgroup H of finite group G",
   "Group axioms: Closure, Associativity, Identity existence, Inverse existence",
   "Lattice definition: Poset where every pair {a, b} has unique LUB and GLB",
   "Subgroup 1-step test: a, b ∈ H ⟹ a · b^(-1) ∈ H",
   "Boolean algebra is a complemented distributive lattice"
  ]
 },
 "NOTE-DM-04": {
  "noteId": "NOTE-DM-04",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Handouts (MFCS - PC)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinatorics studies techniques of discrete counting, arrangements, selections, and solving recursive algorithms. Covers permutations, combinations, pigeonhole principle, binomial coefficients, recurrence relations, and generating functions.",
  "topics": [
   {
    "title": "Fundamental Counting Principles & Permutations",
    "summary": "Rule of sum applies to mutually exclusive choices; rule of product applies to sequential independent choices. Permutation measures ordered arrangements.",
    "points": [
     "Rule of Sum: If task 1 can be done in m ways and task 2 in n ways (disjoint), either can be done in m + n ways.",
     "Rule of Product: If task 1 can be done in m ways and task 2 in n ways, both can be done in m × n ways.",
     "Permutation P(n, r): Number of ways to arrange r elements chosen from n distinct elements.",
     "Permutations with Repetitions: Number of arrangements of n objects where n1 are alike, n2 are alike is n! / (n1! n2! ... nk!)."
    ],
    "formulas": [
     "P(n, r) = n! / (n - r)!",
     "Circular Permutation of n distinct objects: (n - 1)!"
    ],
    "example": "Arrangements of the word \"MISSISSIPPI\" (total 11 letters: 1 M, 4 I, 4 S, 2 P) = 11! / (1! 4! 4! 2!) = 34,650."
   },
   {
    "title": "Combinations & Binomial Coefficients",
    "summary": "Combination C(n, r) represents unordered selections of r items from a collection of n distinct items.",
    "points": [
     "Selection without replacement: C(n, r) = n! / (r!(n - r)!).",
     "Selection with replacement: Number of non-negative integer solutions to x1 + x2 + ... + xn = r is C(n + r - 1, r).",
     "Symmetry Property: C(n, r) = C(n, n - r).",
     "Pascal's Identity: C(n, r) = C(n - 1, r - 1) + C(n - 1, r)."
    ],
    "formulas": [
     "Binomial Theorem: (x + y)^n = ∑ [r=0 to n] C(n, r) x^(n-r) y^r",
     "Sum of binomial coefficients: ∑ [r=0 to n] C(n, r) = 2^n"
    ],
    "example": "Number of ways to distribute 10 identical candies among 4 children is C(4 + 10 - 1, 10) = C(13, 10) = 286."
   },
   {
    "title": "Pigeonhole Principle",
    "summary": "If k items are placed into n containers and k > n, then at least one container must contain two or more items.",
    "points": [
     "Basic Form: If n + 1 pigeons are placed in n holes, at least one hole has ≥ 2 pigeons.",
     "Generalized Form: If N objects are placed in k boxes, at least one box contains at least ⌈N / k⌉ objects.",
     "Applications: Guaranteeing duplicate birth months, hash collision analysis, subset sum existence."
    ],
    "formulas": [
     "Minimum objects per box = ⌈N / k⌉"
    ],
    "example": "In a group of 367 people, since there are at most 366 possible birthdays in a leap year, by the Pigeonhole Principle at least 2 people must share a birthday."
   },
   {
    "title": "Recurrence Relations & Generating Functions",
    "summary": "A recurrence relation defines a sequence an in terms of preceding terms. Used extensively to analyze algorithm time complexities.",
    "points": [
     "Linear Homogeneous Recurrence with Constant Coefficients: c0 an + c1 a(n-1) + ... + ck a(n-k) = 0.",
     "Characteristic Equation: Replace an with r^n to find characteristic roots r.",
     "Distinct Real Roots: General solution is an = A r1^n + B r2^n.",
     "Repeated Roots: If root r1 repeats with multiplicity 2, solution includes (A + B n) r1^n."
    ],
    "formulas": [
     "Fibonacci Recurrence: F(n) = F(n-1) + F(n-2) with F(0)=0, F(1)=1",
     "Characteristic equation of Fibonacci: r^2 - r - 1 = 0"
    ],
    "example": "Solve an - 5a(n-1) + 6a(n-2) = 0: Characteristic equation r^2 - 5r + 6 = (r - 2)(r - 3) = 0. Roots are r=2, 3. General solution: an = c1(2^n) + c2(3^n)."
   }
  ],
  "mustKnow": [
   "Permutation formula: P(n, r) = n! / (n - r)!",
   "Combination formula: C(n, r) = n! / (r! (n - r)!)",
   "Combinations with repetition: C(n + r - 1, r)",
   "Generalized Pigeonhole: at least ⌈N / k⌉ items in one box",
   "Binomial coefficient sum: ∑ C(n, r) = 2^n"
  ]
 },
 "NOTE-DM-05": {
  "noteId": "NOTE-DM-05",
  "subjectId": "DM",
  "chapter": 1,
  "title": "DM Complete Notes (M3)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Mathematical logic forms the foundation of computer science reasoning, digital logic synthesis, and formal software verification. This unit covers propositional calculus, truth tables, logical equivalence laws, normal forms (CNF/DNF), and formal proof inference rules.",
  "topics": [
   {
    "title": "Propositional Logic & Logical Connectives",
    "summary": "A proposition is a declarative statement that is strictly either true (T) or false (F), but not both. Compound propositions are formed using logical connectives.",
    "points": [
     "Negation (¬p / ~p): Inverts truth value; true when p is false.",
     "Conjunction (p ∧ q): True strictly when both propositions are true.",
     "Disjunction (p ∨ q): Inclusive disjunction; true if at least one proposition is true.",
     "Conditional (p → q): \"If p then q\"; false only when antecedent p is true and consequent q is false.",
     "Biconditional (p ↔ q): True strictly when p and q share identical truth values."
    ],
    "formulas": [
     "p → q ≡ ¬p ∨ q",
     "Contrapositive: p → q ≡ ¬q → ¬p",
     "Converse: q → p (not logically equivalent to p → q)",
     "Inverse: ¬p → ¬q (equivalent to converse)"
    ],
    "example": "If p = \"It is raining\" and q = \"Ground is wet\", the conditional p → q is: \"If it is raining, then the ground is wet\". The contrapositive ¬q → ¬p is: \"If the ground is not wet, then it is not raining\"."
   },
   {
    "title": "Tautologies, Contradictions & Equivalence Laws",
    "summary": "A formula is a Tautology if it evaluates to True under all truth assignments, a Contradiction if False under all assignments, and a Contingency otherwise.",
    "points": [
     "Identity Laws: p ∧ T ≡ p;  p ∨ F ≡ p",
     "Domination Laws: p ∨ T ≡ T;  p ∧ F ≡ F",
     "Idempotent Laws: p ∨ p ≡ p;  p ∧ p ≡ p",
     "Double Negation: ¬(¬p) ≡ p",
     "Commutative & Associative Laws hold for both ∧ and ∨"
    ],
    "formulas": [
     "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q  and  ¬(p ∨ q) ≡ ¬p ∧ ¬q",
     "Distributive Laws: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)",
     "Absorption Laws: p ∨ (p ∧ q) ≡ p  and  p ∧ (p ∨ q) ≡ p"
    ],
    "example": "Verify that p ∨ ¬p is a tautology: if p=T, T ∨ F = T; if p=F, F ∨ T = T. Thus, truth value is always T."
   },
   {
    "title": "Normal Forms (CNF, DNF, PCNF & PDNF)",
    "summary": "Standard canonical representations of Boolean expressions. A minterm is a conjunction of literals; a maxterm is a disjunction of literals.",
    "points": [
     "Disjunctive Normal Form (DNF): A disjunction of conjunctions (Sum of Products).",
     "Conjunctive Normal Form (CNF): A conjunction of disjunctions (Product of Sums).",
     "Principal DNF (PDNF): Sum of minterms containing every variable exactly once.",
     "Principal CNF (PCNF): Product of maxterms containing every variable exactly once."
    ],
    "formulas": [
     "Procedure to CNF: Eliminate → and ↔, drive ¬ inside using De Morgan's, apply distributivity of ∨ over ∧.",
     "Duality: If PDNF has m minterms from 2^n possibilities, PCNF consists of the remaining (2^n - m) maxterms."
    ],
    "example": "For formula p → q: replace implication with ¬p ∨ q. Since it is a single disjunction of literals, it is already in CNF."
   },
   {
    "title": "Rules of Inference & Predicate Logic",
    "summary": "Inference rules govern valid logical deduction from premises to conclusions without computing full truth tables.",
    "points": [
     "Modus Ponens: From p and p → q, conclude q.",
     "Modus Tollens: From ¬q and p → q, conclude ¬p.",
     "Hypothetical Syllogism: From p → q and q → r, conclude p → r.",
     "Disjunctive Syllogism: From p ∨ q and ¬p, conclude q.",
     "Universal Quantifier (∀x P(x)): True if P(x) is true for all domain elements.",
     "Existential Quantifier (∃x P(x)): True if P(x) is true for at least one domain element."
    ],
    "formulas": [
     "¬(∀x P(x)) ≡ ∃x ¬P(x)",
     "¬(∃x P(x)) ≡ ∀x ¬P(x)"
    ],
    "example": "Premises: \"If x is divisible by 6, then x is divisible by 2\" (p → q) and \"x is divisible by 6\" (p). By Modus Ponens, conclusion: \"x is divisible by 2\" (q)."
   }
  ],
  "mustKnow": [
   "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q",
   "Conditional equivalence: p → q ≡ ¬p ∨ q",
   "Contrapositive equality: p → q ≡ ¬q → ¬p",
   "Modus Ponens inference: (p ∧ (p → q)) ⟹ q",
   "Quantifier negation: ¬∀x P(x) ≡ ∃x ¬P(x)"
  ]
 },
 "NOTE-COA-03": {
  "noteId": "NOTE-COA-03",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Computer Arithmetic (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Focuses on Central Processing Unit (CPU) organization, control unit design (hardwired vs microprogrammed), arithmetic processing algorithms (Booth's algorithm, restoring/non-restoring division), and pipelining.",
  "topics": [
   {
    "title": "CPU General Register Organization & Stack Architecture",
    "summary": "CPUs organize registers using internal buses. Stack-organized processors evaluate expressions using Reverse Polish Notation (RPN).",
    "points": [
     "Control Word: Selects source registers A and B, ALU operation, and destination register D.",
     "Stack Architecture: LIFO memory managed by Stack Pointer (SP); operations pop operands and push result.",
     "Three-address format: ADD R1, R2, R3 (R1 ← R2 + R3).",
     "Two-address format: ADD R1, R2 (R1 ← R1 + R2).",
     "One-address format: ADD X (AC ← AC + M[X], uses accumulator).",
     "Zero-address format: ADD (TOS ← TOS + NOS, uses stack)."
    ],
    "formulas": [
     "Push operation: SP ← SP - 1, M[SP] ← DR",
     "Pop operation: DR ← M[SP], SP ← SP + 1"
    ],
    "example": "Expression (A + B) * (C + D) in zero-address stack: PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL."
   },
   {
    "title": "Addressing Modes",
    "summary": "Specifies the rule for interpreting or modifying the address field of an instruction to locate the operand.",
    "points": [
     "Immediate Mode: Operand is specified directly in instruction.",
     "Direct Mode: Address field points directly to operand memory address.",
     "Indirect Mode: Address field points to memory location that holds the effective address.",
     "Register Mode: Operand resides in a CPU register.",
     "Register Indirect Mode: Register contains memory address of operand.",
     "Relative Addressing: Effective Address = PC + Address field (used in branches).",
     "Indexed Addressing: Effective Address = Index Register (XR) + Address field."
    ],
    "formulas": [
     "Relative EA = PC + Relative Offset",
     "Indexed EA = XR + Base Address"
    ],
    "example": "If PC = 200 and relative branch instruction specifies offset +50, target effective address is 200 + 50 = 250."
   },
   {
    "title": "Booth's Multiplication Algorithm",
    "summary": "Efficient multiplication algorithm for signed 2's complement binary integers. Treats strings of 1s as a single addition and subtraction.",
    "points": [
     "Registers: Multiplicand in B, Multiplier in Q, Accumulator A initialized to 0, Q_(n+1) initialized to 0.",
     "Rule for Q0 and Q_(n+1):",
     "  - 10: A ← A - B (subtract multiplicand)",
     "  - 01: A ← A + B (add multiplicand)",
     "  - 00 or 11: No arithmetic operation (only shift)",
     "Arithmetic Shift Right (ashr) [A, Q, Q_(n+1)] after each cycle; repeat for n cycles."
    ],
    "formulas": [
     "Substrings of 1s: 2^m + 2^(m-1) + ... + 2^k = 2^(m+1) - 2^k"
    ],
    "example": "Multiply (+7) × (-3): Booth recodes multiplier -3 (1101) to perform fewer additions/subtractions."
   },
   {
    "title": "Control Unit: Hardwired vs Microprogrammed",
    "summary": "The control unit orchestrates all processor micro-operations.",
    "points": [
     "Hardwired Control: Implemented using combinational logic gates, decoders, and flip-flops. Very fast execution, but rigid and extremely difficult to modify.",
     "Microprogrammed Control: Control signals stored as microinstructions in Control Memory (ROM). Flexible, easy to update/expand, but slower due to memory access overhead.",
     "Control Address Register (CAR): Holds address of next microinstruction.",
     "Horizontal microcode: Unencoded bits; high speed, wide control words.",
     "Vertical microcode: Encoded control fields; compact words, requires decoders."
    ],
    "formulas": [
     "Address sequencing: Next CAR = CAR + 1, Branch Address, or Mapping from instruction opcode."
    ],
    "example": "RISC processors favor hardwired control for single-cycle execution, whereas CISC processors utilize microprogrammed control."
   }
  ],
  "mustKnow": [
   "Booth's algorithm inspection: 10 implies A ← A - B; 01 implies A ← A + B; 00 and 11 do shift only",
   "Arithmetic shift right preserves sign bit in Booth's multiplication",
   "Hardwired control is faster but rigid; microprogrammed control is flexible but slower",
   "Relative addressing mode calculates EA = PC + Address Offset",
   "Zero-address instructions use stack operations (PUSH/POP)"
  ]
 },
 "NOTE-COA-04": {
  "noteId": "NOTE-COA-04",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Memory Organization (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Explores the hierarchical memory structure (registers, cache, RAM, secondary storage) and Input/Output interfacing methodologies (programmed, interrupt-driven, DMA).",
  "topics": [
   {
    "title": "Memory Hierarchy & Cache Memory",
    "summary": "Memory hierarchy balances access latency, capacity, and cost per bit. Cache memory is high-speed SRAM exploiting locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed items are likely to be accessed again soon (e.g. loops).",
     "Spatial Locality: Items located close to recently accessed items are likely to be accessed soon (e.g. arrays).",
     "Hit Ratio: Fraction of memory accesses satisfied directly by cache: h = Hits / Total Accesses.",
     "Average Memory Access Time (AMAT): AMAT = Hit Time + (Miss Rate × Miss Penalty).",
     "Write Policies: Write-Through (updates cache and RAM simultaneously; safe but slower) vs Write-Back (updates RAM only when block is evicted; faster)."
    ],
    "formulas": [
     "Hit Ratio h = Nc / (Nc + Nm)",
     "Average Access Time: T_avg = h · Tc + (1 - h) · Tm"
    ],
    "example": "If cache access time is 2 ns, main memory access time is 50 ns, and hit ratio is 0.95: T_avg = 0.95(2) + 0.05(50) = 1.9 + 2.5 = 4.4 ns."
   },
   {
    "title": "Cache Mapping Techniques",
    "summary": "Translates CPU main memory addresses into cache block locations.",
    "points": [
     "Direct Mapping: Each main memory block maps to exactly one cache line: line = (block address) mod (number of cache lines). Simplest hardware, but prone to conflict misses.",
     "Associative Mapping: Any memory block can be stored in any cache line. Eliminates conflict misses, requires expensive parallel content-addressable memory (CAM).",
     "Set-Associative Mapping: Compromise; cache is divided into sets of k lines (k-way set associative). Block maps to a specific set: set = (block address) mod (number of sets)."
    ],
    "formulas": [
     "Direct mapped address bits: Tag | Line Index | Word Offset",
     "Set-associative address bits: Tag | Set Index | Word Offset"
    ],
    "example": "In direct mapping with 64 cache lines and 16-word blocks: 4 bits for word offset, 6 bits for line index, remaining bits for tag."
   },
   {
    "title": "Virtual Memory & Address Translation",
    "summary": "Gives programmers the illusion of a massive contiguous memory space larger than physical RAM by swapping pages between RAM and hard disk.",
    "points": [
     "Virtual Address (Logical): Generated by CPU, partitioned into Virtual Page Number (VPN) and Page Offset.",
     "Physical Address: Actual DRAM address, partitioned into Physical Frame Number (PFN) and Offset.",
     "Page Table: Maps VPN to PFN; holds valid/invalid bit to signify if page is currently in physical RAM.",
     "Page Fault: Hardware interrupt triggered when CPU references a page whose valid bit is 0; OS fetches missing page from disk.",
     "Translation Lookaside Buffer (TLB): High-speed cache for page table entries."
    ],
    "formulas": [
     "Page Offset remains invariant between virtual address and physical address."
    ],
    "example": "Virtual address with 4 KB page size has a 12-bit offset (2^12 = 4096 bytes)."
   },
   {
    "title": "I/O Organization & Modes of Transfer",
    "summary": "Mechanisms for transferring data between peripheral devices and CPU/memory.",
    "points": [
     "Programmed I/O: CPU enters a busy-wait polling loop checking I/O device status register; wastes CPU cycles.",
     "Interrupt-Driven I/O: CPU continues execution; I/O interface issues hardware interrupt when ready; CPU services interrupt via ISR.",
     "Direct Memory Access (DMA): Specialized DMA controller transfers entire blocks of data directly between I/O and RAM without CPU intervention.",
     "DMA Transfer Modes: Burst transfer (entire block transferred while CPU halted) vs Cycle Stealing (DMA steals 1 memory bus cycle at a time)."
    ],
    "formulas": [
     "Daisy-Chain Priority: Hardware priority resolution where device nearest CPU on the grant line has highest priority."
    ],
    "example": "High-speed disk drives use DMA to transfer multi-kilobyte sectors directly into RAM, interrupting the CPU only once when the transfer is complete."
   }
  ],
  "mustKnow": [
   "Average Memory Access Time: T_avg = h · Tc + (1 - h) · Tm",
   "Locality of reference principles: Temporal (time) and Spatial (space)",
   "Cache mappings: Direct (tag+line+word), Associative (tag+word), Set-Associative (tag+set+word)",
   "DMA bypasses the CPU for bulk high-speed data transfer",
   "Page fault triggers an OS interrupt to bring missing page from disk to RAM"
  ]
 },
 "NOTE-COA-05": {
  "noteId": "NOTE-COA-05",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA I/O Organization (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Explores the hierarchical memory structure (registers, cache, RAM, secondary storage) and Input/Output interfacing methodologies (programmed, interrupt-driven, DMA).",
  "topics": [
   {
    "title": "Memory Hierarchy & Cache Memory",
    "summary": "Memory hierarchy balances access latency, capacity, and cost per bit. Cache memory is high-speed SRAM exploiting locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed items are likely to be accessed again soon (e.g. loops).",
     "Spatial Locality: Items located close to recently accessed items are likely to be accessed soon (e.g. arrays).",
     "Hit Ratio: Fraction of memory accesses satisfied directly by cache: h = Hits / Total Accesses.",
     "Average Memory Access Time (AMAT): AMAT = Hit Time + (Miss Rate × Miss Penalty).",
     "Write Policies: Write-Through (updates cache and RAM simultaneously; safe but slower) vs Write-Back (updates RAM only when block is evicted; faster)."
    ],
    "formulas": [
     "Hit Ratio h = Nc / (Nc + Nm)",
     "Average Access Time: T_avg = h · Tc + (1 - h) · Tm"
    ],
    "example": "If cache access time is 2 ns, main memory access time is 50 ns, and hit ratio is 0.95: T_avg = 0.95(2) + 0.05(50) = 1.9 + 2.5 = 4.4 ns."
   },
   {
    "title": "Cache Mapping Techniques",
    "summary": "Translates CPU main memory addresses into cache block locations.",
    "points": [
     "Direct Mapping: Each main memory block maps to exactly one cache line: line = (block address) mod (number of cache lines). Simplest hardware, but prone to conflict misses.",
     "Associative Mapping: Any memory block can be stored in any cache line. Eliminates conflict misses, requires expensive parallel content-addressable memory (CAM).",
     "Set-Associative Mapping: Compromise; cache is divided into sets of k lines (k-way set associative). Block maps to a specific set: set = (block address) mod (number of sets)."
    ],
    "formulas": [
     "Direct mapped address bits: Tag | Line Index | Word Offset",
     "Set-associative address bits: Tag | Set Index | Word Offset"
    ],
    "example": "In direct mapping with 64 cache lines and 16-word blocks: 4 bits for word offset, 6 bits for line index, remaining bits for tag."
   },
   {
    "title": "Virtual Memory & Address Translation",
    "summary": "Gives programmers the illusion of a massive contiguous memory space larger than physical RAM by swapping pages between RAM and hard disk.",
    "points": [
     "Virtual Address (Logical): Generated by CPU, partitioned into Virtual Page Number (VPN) and Page Offset.",
     "Physical Address: Actual DRAM address, partitioned into Physical Frame Number (PFN) and Offset.",
     "Page Table: Maps VPN to PFN; holds valid/invalid bit to signify if page is currently in physical RAM.",
     "Page Fault: Hardware interrupt triggered when CPU references a page whose valid bit is 0; OS fetches missing page from disk.",
     "Translation Lookaside Buffer (TLB): High-speed cache for page table entries."
    ],
    "formulas": [
     "Page Offset remains invariant between virtual address and physical address."
    ],
    "example": "Virtual address with 4 KB page size has a 12-bit offset (2^12 = 4096 bytes)."
   },
   {
    "title": "I/O Organization & Modes of Transfer",
    "summary": "Mechanisms for transferring data between peripheral devices and CPU/memory.",
    "points": [
     "Programmed I/O: CPU enters a busy-wait polling loop checking I/O device status register; wastes CPU cycles.",
     "Interrupt-Driven I/O: CPU continues execution; I/O interface issues hardware interrupt when ready; CPU services interrupt via ISR.",
     "Direct Memory Access (DMA): Specialized DMA controller transfers entire blocks of data directly between I/O and RAM without CPU intervention.",
     "DMA Transfer Modes: Burst transfer (entire block transferred while CPU halted) vs Cycle Stealing (DMA steals 1 memory bus cycle at a time)."
    ],
    "formulas": [
     "Daisy-Chain Priority: Hardware priority resolution where device nearest CPU on the grant line has highest priority."
    ],
    "example": "High-speed disk drives use DMA to transfer multi-kilobyte sectors directly into RAM, interrupting the CPU only once when the transfer is complete."
   }
  ],
  "mustKnow": [
   "Average Memory Access Time: T_avg = h · Tc + (1 - h) · Tm",
   "Locality of reference principles: Temporal (time) and Spatial (space)",
   "Cache mappings: Direct (tag+line+word), Associative (tag+word), Set-Associative (tag+set+word)",
   "DMA bypasses the CPU for bulk high-speed data transfer",
   "Page fault triggers an OS interrupt to bring missing page from disk to RAM"
  ]
 },
 "NOTE-ES-05": {
  "noteId": "NOTE-ES-05",
  "subjectId": "ES",
  "chapter": 5,
  "title": "ES Unit 5: Environmental Policy, Legislation & EIA",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive academic revision guide for Environmental Science (Unit 5). Covers ecological principles, sustainable development goals, environmental laws, and pollution mitigation frameworks.",
  "topics": [
   {
    "title": "Unit 5 Fundamentals & Ecological Principles",
    "summary": "Environmental Protection Act, Air Act 1981, Water Act, EIA structure and baseline-data methods, sustainable development, green chemistry, green building and low-carbon lifestyle.",
    "points": [
     "Biotic and abiotic ecosystem components and trophic levels.",
     "Energy flow follows Lindeman's 10% law: only 10% energy transfers to successive trophic levels.",
     "Biogeochemical cycles: Carbon cycle, Nitrogen cycle, and Hydrological cycle.",
     "Biodiversity values: Consumptive use, productive use, social, ethical, and aesthetic values."
    ],
    "formulas": [
     "Trophic Energy Efficiency: E_(n+1) ≈ 0.10 × E_n"
    ],
    "example": "Food chain sequence: Grass (Producer) → Grasshopper (Primary Consumer) → Frog (Secondary Consumer) → Snake (Tertiary Consumer) → Hawk (Apex Predator)."
   },
   {
    "title": "Environmental Management & Legislation",
    "summary": "Regulatory frameworks, conservation treaties, pollution control standards, and Environmental Impact Assessment (EIA).",
    "points": [
     "The Environment (Protection) Act, 1986: Umbrella legislation in India for environmental safety.",
     "Air (Prevention and Control of Pollution) Act, 1981.",
     "Water (Prevention and Control of Pollution) Act, 1974.",
     "EIA steps: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Mitigation."
    ],
    "formulas": [
     "Universal waste management hierarchy: Reduce > Reuse > Recycle > Recover > Dispose"
    ],
    "example": "Primary air pollutants (CO, SO2, NOx) react in atmosphere under sunlight to form secondary photochemical smog (O3, PAN)."
   }
  ],
  "mustKnow": [
   "Lindeman's 10% law governs energy transfer across trophic levels",
   "Environment (Protection) Act enacted in 1986 following Bhopal Gas tragedy",
   "EIA is mandatory for industrial infrastructure clearance in India",
   "Bioaccumulation increases chemical concentration in an organism; biomagnification increases up the food chain",
   "Renewable resources regenerate naturally within human timescales"
  ]
 },
 "NOTE-IE-01": {
  "noteId": "NOTE-IE-01",
  "subjectId": "IE",
  "chapter": 5,
  "title": "I&E Unit 5: Startups & Intellectual Property Rights",
  "pageCount": 24,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Industry & Entrepreneurship examination revision guide. Covers startup lifecycle stages, business model canvas, venture capital funding rounds, and Intellectual Property Rights (IPR).",
  "topics": [
   {
    "title": "Entrepreneurship Lifecycle & Venture Funding",
    "summary": "Process of ideating, launching, scaling, and financing novel technology business ventures.",
    "points": [
     "Ideation & Validation: Identifying market pain points, Value Proposition, Minimum Viable Product (MVP).",
     "Business Model Canvas (BMC): 9 building blocks including Customer Segments, Revenue Streams, Cost Structure.",
     "Funding Stages: Bootstrapping / Seed capital → Angel Investors → Venture Capital (Series A, B, C) → IPO.",
     "Cash Burn Rate and Runway: Time until startup runs out of liquid capital."
    ],
    "formulas": [
     "Runway (months) = Current Cash Balance / Monthly Burn Rate"
    ],
    "example": "A startup with ₹30,00,000 cash spending ₹5,00,000 monthly has a runway of 6 months to reach profitability or raise funds."
   },
   {
    "title": "Intellectual Property Rights (IPR)",
    "summary": "Legal protections granted to creators over intangible assets and industrial innovations.",
    "points": [
     "Patents: Granted for novel, non-obvious, industrially applicable inventions (term: 20 years).",
     "Copyrights: Protects original literary, dramatic, musical, artistic works, and computer software code (term: author's life + 60 years).",
     "Trademarks: Protects distinctive logos, symbols, words, or slogans identifying commercial goods.",
     "Trade Secrets: Proprietary confidential commercial formulas or algorithms (e.g. Google Search algorithm)."
    ],
    "formulas": [
     "Patent requirements: Novelty + Inventive Step (Non-obviousness) + Industrial Application"
    ],
    "example": "Software source code is registered under Copyright law, while an innovative cryptographic hardware algorithm may be protected via a Patent."
   }
  ],
  "mustKnow": [
   "Patent term in India is 20 years from the filing date",
   "Copyright protects expression of an idea, not the idea itself (Life + 60 years)",
   "MVP (Minimum Viable Product) validates product-market fit with minimal resources",
   "Trademarks distinguish goods and services and can be renewed indefinitely every 10 years",
   "Venture Capitalists provide equity financing in exchange for company ownership stakes"
  ]
 },
 "NOTE-SE-01": {
  "noteId": "NOTE-SE-01",
  "subjectId": "SE",
  "chapter": 1,
  "title": "SE Unit 1: Software Process, Agile & Process Models",
  "pageCount": 22,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes covering the nature of software, software engineering layered technology, generic process framework activities, CMMI maturity levels, traditional process models (Waterfall, Incremental, RAD, Evolutionary/Spiral), and Agile development frameworks (Scrum, XP, Agile Manifesto).",
  "topics": [
   {
    "title": "Software Engineering Layered Technology & Process Framework",
    "summary": "Software engineering is a disciplined, layered technology based on Quality Focus, Processes, Methods, and Tools. Generic framework activities define the roadmap for software delivery.",
    "points": [
     "Layered Technology: Quality Focus (bedrock foundation) -> Process (glue binding all layers) -> Methods (technical 'how-to' for analysis, design, coding, testing) -> Tools (automated/semi-automated CASE support).",
     "Generic Framework Activities: 1) Communication (customer requirements), 2) Planning (estimation, scheduling, risk analysis), 3) Modeling (analysis and design models), 4) Construction (code generation and testing), 5) Deployment (delivery, feedback, support).",
     "Umbrella Activities: Software project tracking and control, risk management, software quality assurance (SQA), formal technical reviews (FTR), measurement, configuration management (SCM), and reusability management.",
     "CMMI (Capability Maturity Model Integration): Five maturity levels: Level 1 (Initial - ad-hoc/chaotic), Level 2 (Managed - basic project tracking), Level 3 (Defined - standardized institutional process), Level 4 (Quantitatively Managed - measured with statistical metrics), Level 5 (Optimizing - continuous process improvement via feedback)."
    ],
    "formulas": [
     "Layered Model: Quality Focus -> Process -> Methods -> Tools",
     "CMMI Hierarchy: Level 1 (Initial) -> 2 (Managed) -> 3 (Defined) -> 4 (Quantitatively Managed) -> 5 (Optimizing)"
    ],
    "example": "A banking core transaction system demands CMMI Level 4/5 with formal SQA umbrella tracking, whereas a startup mobile MVP can operate with an agile communication-construction loop."
   },
   {
    "title": "Traditional & Prescriptive Process Models",
    "summary": "Prescriptive models bring order and structure to software development, each tailored to specific project stability, complexity, and delivery constraints.",
    "points": [
     "Waterfall Model (Classic Life Cycle): Sequential, linear flow (Communication -> Planning -> Modeling -> Construction -> Deployment). Best for well-understood, stable requirements. Weakness: Working software appears late; high risk of blocking states.",
     "Incremental Model: Delivers operational software in successive increments (core product delivered first in Increment 1, then enhanced in Increments 2, 3, etc.). Combines linear waterfall elements with prototyping iterations.",
     "RAD (Rapid Application Development): High-speed adaptation of the linear sequential model using component-based construction. Target cycle: 60 to 90 days. Requires heavy resource commitment and modular system architecture.",
     "Prototyping Model: Customer defines general objectives without detailed requirements. A 'quick design' produces a prototype evaluated by stakeholders to refine requirements before full-scale development.",
     "Spiral Model (Boehm): Evolutionary process model combining iterative prototyping with systematic waterfall control. Distinctive feature: explicit, formal risk analysis at every spiral loop (Objective Setting, Risk Assessment, Development/Validation, Planning)."
    ],
    "formulas": [
     "Spiral Quadrants: Determine Objectives -> Identify & Resolve Risks -> Develop & Verify Next-Level Product -> Plan Next Phase",
     "RAD Delivery Constraint: 60 - 90 Days Development Horizon"
    ],
    "example": "For developing an air traffic control radar system with critical safety risks, Boehm's Spiral Model is selected to analyze hardware-software interface risks at each revolution."
   },
   {
    "title": "Agile Development, Principles & Scrum Framework",
    "summary": "Agile software engineering values working software and customer collaboration over comprehensive documentation and rigid contract negotiations.",
    "points": [
     "Agile Manifesto Core Values: 1) Individuals and interactions over processes and tools, 2) Working software over comprehensive documentation, 3) Customer collaboration over contract negotiation, 4) Responding to change over following a plan.",
     "Agility Principles: Highest priority is satisfying customer through early and continuous delivery; welcome changing requirements even late in development; deliver working software frequently (weeks rather than months).",
     "Scrum Framework: Iterative and incremental agile methodology based on time-boxed Sprints (typically 2 to 4 weeks).",
     "Scrum Roles & Artifacts: Roles: Product Owner (manages Product Backlog), Scrum Master (removes impediments), Development Team (self-organizing cross-functional developers). Artifacts: Product Backlog, Sprint Backlog, Burn-down Chart.",
     "Scrum Ceremonies: Sprint Planning, Daily Scrum (15-minute standup: What did you do yesterday? What will you do today? What blockers exist?), Sprint Review (demo to stakeholders), and Sprint Retrospective (team reflection for continuous improvement)."
    ],
    "formulas": [
     "Sprint Timebox: 2 to 4 Weeks",
     "Daily Standup: 15 Minutes (3 Questions: Yesterday, Today, Impediments)"
    ],
    "example": "In an e-commerce website redesign, user stories from the Product Backlog are prioritized by the Product Owner and broken down into 2-week Sprint Backlog tasks tracked via daily burn-down charts."
   },
   {
    "title": "Software Myths & Engineering Realities",
    "summary": "Beliefs held by managers, customers, and practitioners that lead to false expectations and project disasters.",
    "points": [
     "Management Myths: Myth: 'We have books full of standards and procedures, so our team knows everything needed.' Reality: Standards are often outdated, incomplete, and unenforced. Myth: 'If we fall behind schedule, we can add more programmers.' Reality: Brooks' Law states that 'adding manpower to a late software project makes it later.'",
     "Customer Myths: Myth: 'A general statement of objectives is enough to begin writing programs; we can detail specs later.' Reality: Unclear initial definitions cause continuous scope creep, architectural rework, and schedule blowouts.",
     "Practitioner Myths: Myth: 'Once the code is written and works, our job is done.' Reality: 60% to 80% of all software effort occurs post-delivery during maintenance. Myth: 'Software engineering generates unnecessary paperwork that slows coding.' Reality: Engineering produces quality models that drastically reduce defect-remediation costs."
    ],
    "formulas": [
     "Brooks' Law: Adding manpower to a late software project makes it later",
     "Maintenance Ratio: 60% - 80% of total lifecycle effort occurs post-delivery"
    ],
    "example": "Applying Brooks' Law: Adding 5 new developers to a delayed billing module requires existing senior engineers to spend weeks training them, temporarily reducing net team productivity and worsening the delay."
   }
  ],
  "mustKnow": [
   "Software Engineering Layered Technology: Quality Focus -> Process -> Methods -> Tools",
   "Brooks' Law: Adding manpower to a late software project makes it later due to increased communication overhead",
   "Spiral Model is distinguished from all other models by its explicit, cyclic Risk Analysis stage",
   "Scrum ceremonies: Sprint Planning, Daily Standup (15 min), Sprint Review, Sprint Retrospective",
   "Waterfall model suits stable, well-understood requirements; Spiral suits high-risk, complex enterprise software"
  ]
 },
 "NOTE-SE-02": {
  "noteId": "NOTE-SE-02",
  "subjectId": "SE",
  "chapter": 2,
  "title": "SE Unit 2: Requirements Engineering & Specification",
  "pageCount": 18,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes covering requirements engineering processes, feasibility studies, functional and non-functional requirements, requirement elicitation techniques, requirements modeling (context and behavioral models), Software Requirements Specification (SRS) IEEE 830 standards, and requirements validation and management.",
  "topics": [
   {
    "title": "Requirements Engineering Process & Feasibility Studies",
    "summary": "Requirements engineering provides the bridge between user operational needs and technical software design through a systematic 5-stage lifecycle.",
    "points": [
     "5 Core Phases: 1) Feasibility Study, 2) Requirements Elicitation & Analysis, 3) Requirements Specification, 4) Requirements Validation, 5) Requirements Management.",
     "Feasibility Studies: Evaluates whether the proposed system is worth building before funds are committed. Assesses: Technical Feasibility (available technology/skills), Economic Feasibility (cost-benefit analysis, ROI), Operational Feasibility (organizational culture, user acceptance), and Legal/Contractual Feasibility.",
     "Requirements Elicitation Techniques: Stakeholder interviews (structured & unstructured), questionnaires/surveys, observation (ethnography/work shadowing), brainstorming workshops, JAD (Joint Application Development) sessions, and rapid prototyping.",
     "Elicitation Challenges: Problems of Scope (boundary of system ill-defined), Problems of Understanding (customers unsure of actual needs, domain jargon barrier), and Problems of Volatility (requirements shift continuously over time)."
    ],
    "formulas": [
     "Lifecycle: Feasibility -> Elicitation -> Specification -> Validation -> Management",
     "Feasibility Quad: Technical + Economic + Operational + Legal"
    ],
    "example": "For a hospital management system, economic feasibility determines if cloud server costs offset administrative staffing savings, while technical feasibility evaluates biometric sensor compatibility."
   },
   {
    "title": "Functional vs. Non-Functional Requirements & SRS Standards",
    "summary": "Requirements specify what the system must perform (functional) and the constraints/quality attributes under which it must operate (non-functional).",
    "points": [
     "Functional Requirements: Statements of services the system should provide, how the system reacts to particular inputs, and how the system behaves in specific situations (e.g., 'The system shall calculate monthly interest on loan balances at 23:59 on the last day of each month').",
     "Non-Functional Requirements (NFRs): Constraints on the services or functions offered by the system. Categories: Product Requirements (performance, memory, usability, reliability), Organizational Requirements (environmental, operational standards), and External Requirements (regulatory, legislative, privacy/GDPR).",
     "Metrics for Quantifying NFRs: Speed (transactions/sec, response time), Size (MB/GB memory limit), Ease of Use (training time, help clicks), Reliability (MTBF, rate of failure occurrence), Robustness (time to restart, failure probability), Portability (percentage of target-dependent code).",
     "IEEE 830 SRS Document Structure: 1. Introduction (Purpose, Scope, Definitions), 2. Overall Description (Product perspective, user characteristics, constraints), 3. Specific Requirements (Functional, non-functional, interface specs: UI, Hardware, Software, Comm interfaces).",
     "Desirable Characteristics of Good SRS: Correct, Unambiguous (single interpretation), Complete, Consistent (no conflicting statements), Ranked for importance/stability, Verifiable (testable via demonstration or measurement), Modifiable, and Traceable."
    ],
    "formulas": [
     "Availability Metric: A = MTTF / (MTTF + MTTR)",
     "Performance Metric: Response Time <= 2 seconds for 95% of queries under peak load"
    ],
    "example": "Functional: 'User can transfer funds up to $5,000 via NEFT.' Non-functional: 'Funds transfer transaction must execute within 1.5 seconds and adhere to 256-bit AES encryption standards.'"
   },
   {
    "title": "Requirements Analysis Modeling: Context, Data & Behavioral Models",
    "summary": "Requirements analysis translates customer needs into operational models representing data flow, structural entities, and system behavioral states.",
    "points": [
     "Context Models: Illustrate the operational environment showing the boundary between the target system and surrounding external entities (systems, devices, users). Represented via Level-0 Data Flow Diagrams (Context Diagrams).",
     "Data Modeling (ER Diagrams): Defines data objects, attributes, and relationships. Data Flow Diagrams (DFDs) track information flow: External Entity (square), Process (circle/bubble), Data Store (parallel open lines), Data Flow (directed arrow).",
     "Behavioral Modeling (State Transition Diagrams): Represents how the system behaves in response to external events. Depicts States (system modes of operation) and Transitions triggered by events with optional guard conditions and actions.",
     "Use Case Modeling: Captures functional requirements from the perspective of an external actor interacting with system use cases enclosed in a system boundary."
    ],
    "formulas": [
     "DFD Level Hierarchy: Level 0 (Context Diagram) -> Level 1 (Subsystem Decomp) -> Level 2 (Detailed Process Flow)"
    ],
    "example": "In an ATM system Context Model, the ATM is the central system interacting with external entities: Cardholder, Banking Host Network, and Cash Dispenser Maintenance Technician."
   },
   {
    "title": "Requirements Validation & Requirements Management",
    "summary": "Validation ensures the specification represents customer intent, while management controls evolving changes throughout the system lifecycle.",
    "points": [
     "Requirements Validation Checks: Validity checks (does system provide functions matching customer needs?), Consistency checks (are there conflicting requirements?), Completeness checks (are all scenarios included?), Realism checks (can it be implemented within budget/technology?), Verifiability (can a test case be written to prove compliance?).",
     "Validation Techniques: Requirements Reviews (formal inspection by multidisciplinary team), Prototyping (demonstrating model to users), and Test-Case Generation (if a requirement cannot be tested, it is ambiguous).",
     "Requirements Management: The process of managing changing requirements during requirements engineering and system development.",
     "Traceability Matrix: Cross-references requirements with system architecture, components, source code modules, and test cases. Types: Source Traceability (links requirement to stakeholder origin), Requirement Traceability (links dependent requirements), Design/Component Traceability (links requirement to software modules)."
    ],
    "formulas": [
     "Traceability Chain: Stakeholder Need <-> SRS Requirement <-> Design Module <-> Code Function <-> Unit Test Case"
    ],
    "example": "A Requirements Traceability Matrix (RTM) maps Requirement 'REQ-042: Two-Factor Authentication' directly to Design Class 'AuthService', Code file 'auth_service.py', and Test Case 'TC-AUTH-004'."
   }
  ],
  "mustKnow": [
   "Requirements Engineering 5-stage lifecycle: Feasibility -> Elicitation -> Specification (SRS) -> Validation -> Management",
   "Functional requirements describe *what* the system does; Non-functional requirements describe constraints, quality, and performance",
   "IEEE 830 specifies essential SRS qualities: Correct, Unambiguous, Complete, Consistent, Verifiable, Modifiable, Traceable",
   "Non-functional requirements must be quantified using testable metrics (e.g., response time < 2s, 99.9% uptime) to avoid ambiguity",
   "Requirements Traceability Matrix (RTM) tracks requirements backwards to customer origins and forwards to code and test cases"
  ]
 },
 "NOTE-SE-03": {
  "noteId": "NOTE-SE-03",
  "subjectId": "SE",
  "chapter": 3,
  "title": "SE Unit 3: Design Engineering, Architecture & UML Modeling",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes covering software design concepts (abstraction, modularity, architecture, cohesion, coupling), architectural design styles and patterns (Data-centered, Data-flow/Pipe-and-Filter, Call-and-Return, Layered), User Interface Design, and complete Unified Modeling Language (UML) structural and behavioral diagrams (Class, Sequence, Collaboration, Use Case, Component diagrams).",
  "topics": [
   {
    "title": "Software Design Principles & Modularity: Cohesion & Coupling",
    "summary": "Software design translates the analysis model into a data, architectural, interface, and component-level blueprint governed by fundamental engineering principles.",
    "points": [
     "Core Design Principles: 1) Abstraction (data & procedural hiding of low-level details), 2) Modularity (decomposing system into independently named and addressable components), 3) Information Hiding (modules conceal internal algorithms/data structures behind public interfaces - David Parnas), 4) Functional Independence.",
     "Functional Independence is measured using two qualitative criteria: Cohesion and Coupling. High cohesion and low coupling represent the gold standard of modular design.",
     "Cohesion (Internal module strength): Degree to which tasks performed by a single module are functionally related. Ranking (Best to Worst): Functional Cohesion (module performs single well-defined task) -> Sequential -> Communicational -> Procedural -> Temporal -> Logical -> Coincidental Cohesion (random unrelated functions lumped together).",
     "Coupling (Inter-module dependency): Degree of interdependence between modules. Ranking (Best to Worst / Loosest to Tightest): Data Coupling (modules communicate via simple atomic data parameters) -> Stamp/Data-Structure Coupling -> Control Coupling (passing flags that dictate internal execution) -> Common Coupling (modules share global data variables) -> Content Coupling (one module directly modifies code or internal data of another)."
    ],
    "formulas": [
     "Golden Rule of Modular Design: High Cohesion + Loose Coupling",
     "Cohesion Hierarchy (Best to Worst): Functional > Sequential > Communicational > Procedural > Temporal > Logical > Coincidental",
     "Coupling Hierarchy (Best to Worst): Data < Stamp < Control < Common < Content"
    ],
    "example": "A module 'CalculateMonthlyTax(salary)' exhibits pure Functional Cohesion and Data Coupling, whereas a module sharing a global static array and setting control flags exhibits dangerous Common and Control Coupling."
   },
   {
    "title": "Architectural Design Styles & Patterns",
    "summary": "Architectural styles define a family of systems in terms of structural patterns, components, connectors, and semantic constraints.",
    "points": [
     "Data-Centered Architecture (Repository / Blackboard): Centralized data store (database or blackboard) accessed by multiple independent client components. Clients perform operations independently on shared data. Advantage: Data integrity and easy client addition. Disadvantage: Central store bottleneck and single point of failure.",
     "Data-Flow Architecture (Pipes and Filters): Transforms input data into output through a sequence of processing components (Filters) connected by transmission channels (Pipes). Advantage: High reusability, easy maintenance, concurrent filter execution (e.g., Unix pipelines: cat file | grep 'err' | sort).",
     "Call-and-Return Architecture: Traditional hierarchical control structure. Categories: Main program/subprogram architecture (hierarchical decomposition with single control thread) and Remote Procedure Call (RPC) architectures.",
     "Layered Architecture: Organizes software into concentric layers where Layer N provides services to Layer N+1 and requests services from Layer N-1. Layers typically comprise: Presentation/UI Layer -> Application/Business Logic Layer -> Domain/Service Layer -> Database/Persistence Layer. Advantage: Modifiability and clear separation of concerns."
    ],
    "formulas": [
     "Data-Flow Model: Input -> [Filter 1] ===Pipe===> [Filter 2] ===Pipe===> [Filter 3] -> Output",
     "Layered Chain: UI Layer -> Business Logic Layer -> Data Access Layer -> Database"
    ],
    "example": "A compiler architecture uses a Pipe-and-Filter style: Lexical Analyzer ===> Syntax Analyzer ===> Semantic Analyzer ===> Intermediate Code Generator ===> Code Optimizer."
   },
   {
    "title": "UML Conceptual Model & Structural Diagrams: Class & Component Diagrams",
    "summary": "Unified Modeling Language (UML) provides standard graphical notations for visualizing, specifying, constructing, and documenting software artifacts.",
    "points": [
     "UML Building Blocks: Things (Structural, Behavioral, Grouping, Annotational), Relationships (Association, Generalization/Inheritance, Dependency, Realization), and Diagrams.",
     "Class Diagrams: Static structural diagrams showing classes, attributes, operations, visibility (+ Public, - Private, # Protected, ~ Package), and relationships.",
     "Class Relationships: 1) Association (structural connection with multiplicity e.g. 1..*), 2) Aggregation (weak 'has-a' whole-part relationship denoted by hollow diamond; parts can exist independently), 3) Composition (strong whole-part relationship denoted by filled solid diamond; if whole is deleted, parts die), 4) Generalization ('is-a' inheritance denoted by hollow triangle pointing to superclass), 5) Dependency (dashed arrow showing one class uses another).",
     "Component Diagrams: Illustrate the organization and dependencies among software modules, libraries, executables, and deployable packages. Show wiring via provided interfaces (lollipops) and required interfaces (sockets)."
    ],
    "formulas": [
     "Visibility: + Public | - Private | # Protected | ~ Package",
     "Multiplicity Notations: 1 (exactly one), 0..1 (zero or one), * or 0..* (zero to many), 1..* (one to many)"
    ],
    "example": "In a Hotel Management System Class Diagram, 'Hotel' has a Composition relationship with 'Room' (filled diamond: if Hotel is demolished, Rooms cease to exist) and an Association with 'Customer' (1..*)."
   },
   {
    "title": "UML Behavioral & Interaction Diagrams: Use Case, Sequence & Collaboration",
    "summary": "Dynamic behavioral modeling captures system interactions, time-ordered message exchanges, and object collaboration flows.",
    "points": [
     "Use Case Diagrams: Describe functional requirements from the perspective of external Actors. Key elements: System boundary, Actors (stick figures), Use Cases (ellipses). Relationships: <<include>> (mandatory common behavior that is always executed) and <<extend>> (optional/conditional behavior executed under specific triggers).",
     "Interaction Diagrams: Model dynamic message flow between objects. Two isomorphic forms: Sequence Diagrams and Collaboration (Communication) Diagrams.",
     "Sequence Diagrams: Emphasize time ordering of messages along vertical lifelines. Elements: Object boxes, dashed vertical Lifelines, vertical Activation rectangles (execution focus), horizontal arrows for Synchronous calls (solid arrowhead), Asynchronous signals (open arrowhead), and Return messages (dashed arrow).",
     "Collaboration / Communication Diagrams: Emphasize structural object organization and links. Messages are numbered hierarchically (1, 1.1, 1.2, 2) along connecting links to indicate execution sequence without a dedicated time axis."
    ],
    "formulas": [
     "Use Case Stereotypes: <<include>> = Mandatory sub-routine | <<extend>> = Optional / Conditional hook",
     "Sequence vs Collaboration: Sequence highlights Time Ordering; Collaboration highlights Structural Layout"
    ],
    "example": "ATM Cash Withdrawal Sequence: Customer inserts card -> ATM reads data -> CardReader sends 'verifyPIN(pin)' to BankServer -> BankServer returns 'authOK' -> ATM displays account options."
   }
  ],
  "mustKnow": [
   "Golden rule of modular design: High Functional Cohesion + Loose Data Coupling",
   "David Parnas' Information Hiding principle conceals module implementation details behind stable public interfaces",
   "Architectural Styles: Data-Centered (Blackboard), Data-Flow (Pipes and Filters), Call-and-Return, Layered Architecture",
   "Aggregation (hollow diamond) represents weak part-whole relationship; Composition (solid diamond) represents life-dependent ownership",
   "Use Case <<include>> is mandatory execution; <<extend>> is conditional hook upon specific trigger conditions",
   "Sequence diagrams emphasize time sequencing; Collaboration diagrams emphasize structural object links with numbered message labels"
  ]
 },
 "NOTE-SE-04": {
  "noteId": "NOTE-SE-04",
  "subjectId": "SE",
  "chapter": 4,
  "title": "SE Unit 4: Testing Strategies, Test Techniques & Metrics",
  "pageCount": 23,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes covering the software testing lifecycle, testing strategies (Unit Testing, Integration Testing, Validation Testing, System Testing), test case design methodologies (White-Box Testing, Basis Path, Cyclomatic Complexity vs Black-Box Testing, Boundary Value Analysis, Equivalence Partitioning), debugging tactics, and software product and quality metrics.",
  "topics": [
   {
    "title": "Strategic Approach to Software Testing & Testing Levels",
    "summary": "Testing begins 'in the small' at module level and progresses outward 'in the large' to complete integrated system validation.",
    "points": [
     "Testing Hierarchy (V-Model Alignment): Unit Testing (module level) -> Integration Testing (subsystem interfaces) -> Validation Testing (customer requirements) -> System Testing (entire environment).",
     "Unit Testing: Verifies the smallest testable units (functions/classes). Tests: Component interface, local data structures, boundary conditions, independent paths, and error handling paths. Requires Driver (calling harness) and Stubs (mock dependencies).",
     "Integration Testing: Assembles components to uncover interface defects. Strategies: Big Bang (integrate everything at once - disaster prone), Incremental: Top-Down (uses stubs, verifies high-level control early), Bottom-Up (uses drivers, verifies low-level utility clusters first), and Sandwich/Hybrid Testing.",
     "Validation Testing (Alpha & Beta): Validates compliance with SRS. Alpha Testing: Conducted at developer's site by customer in a controlled environment. Beta Testing: Conducted at end-user sites in live operational environments without developer intervention.",
     "System Testing: Verifies system integration in target environment. Types: Recovery Testing (tests auto-recovery from crashes), Security Testing (verifies resistance to unauthorized penetration), Stress Testing (executes system under peak/abnormal loads e.g. 10x traffic), Performance Testing (measures response time and throughput)."
    ],
    "formulas": [
     "Testing Hierarchy: Unit -> Integration -> Validation (Alpha/Beta) -> System (Security, Stress, Performance, Recovery)",
     "Verification ('Are we building the product right?') vs. Validation ('Are we building the right product?')"
    ],
    "example": "In a flight booking system, Unit testing tests 'calculateFare()', Integration testing tests payment gateway API handshakes, Alpha testing lets airline staff test reservations, and Stress testing bombards the system with 50,000 concurrent ticket requests."
   },
   {
    "title": "White-Box Testing: Basis Path & Cyclomatic Complexity",
    "summary": "Glass-box testing derives test cases by examining internal control logic and guaranteeing code execution coverage.",
    "points": [
     "White-Box Testing (Structural Testing): Analyzes internal logic, conditions, loops, and data flow of source code.",
     "Basis Path Testing (Tom McCabe): Derives test cases guaranteeing that every independent execution path through the program is traversed at least once, executing every statement at least once.",
     "Control Flow Graph (CFG): Represents control flow using Nodes (procedural statements/decisions) and Edges (transfer of control). Predicate Nodes are decision points with multiple outgoing edges.",
     "Cyclomatic Complexity (V(G)): Quantitative metric measuring the logical complexity of a program and defining the upper bound on the number of independent test paths.",
     "Methods to Compute V(G): 1) V(G) = E - N + 2P, where E = edges, N = nodes, P = connected components (usually 1). 2) V(G) = Pred + 1, where Pred is the count of predicate decision nodes. 3) V(G) = R, where R is the number of closed regions plus the unbounded outer region."
    ],
    "formulas": [
     "V(G) = E - N + 2P",
     "V(G) = Predicate Nodes + 1",
     "V(G) = Number of Regions (including outer region)"
    ],
    "example": "For a CFG with 14 edges and 10 nodes (P=1): V(G) = 14 - 10 + 2(1) = 6. The tester must formulate exactly 6 independent test cases to achieve 100% basis path coverage."
   },
   {
    "title": "Black-Box Testing: Boundary Value Analysis & Equivalence Partitioning",
    "summary": "Behavioral testing derives test cases directly from input/output specifications without reference to internal source code structure.",
    "points": [
     "Black-Box Testing (Functional Testing): Examines functional behavior against specifications, discovering interface errors, data structure access errors, behavior/performance errors, and initialization/termination errors.",
     "Equivalence Partitioning: Divides input domain into equivalence classes of valid and invalid data where all values in a partition are presumed to be processed identically by the program. Test cases are selected from each partition.",
     "Boundary Value Analysis (BVA): Testing technique focusing on the extremes of input domains, as defects congregate disproportionately at boundary edges rather than in the interior. For range [min, max], tests: min - 1, min, min + 1, nominal, max - 1, max, max + 1.",
     "Comparison Testing: For critical redundant systems (e.g. avionics fly-by-wire), multiple independent teams develop software from the same spec; test inputs are executed across all versions to detect discrepancies."
    ],
    "formulas": [
     "BVA Test Suite for [a, b]: {a - 1, a, a + 1, nominal, b - 1, b, b + 1}",
     "Equivalence Classes: Valid Class (inside specification) vs. Invalid Classes (below min, above max, invalid format)"
    ],
    "example": "For an employee age input field valid between 18 and 60: Valid equivalence class: [18, 60]. Invalid classes: (< 18) and (> 60). BVA test inputs: 17, 18, 19, 35, 59, 60, 61."
   },
   {
    "title": "Software Metrics & Measurement Framework",
    "summary": "Measurement provides quantitative indicators of process effectiveness, project progress, and product architectural quality.",
    "points": [
     "Metric vs Measurement vs Indicator: Measurement is direct act of assigning a number to an attribute. Metric is a quantitative measure of the degree to which a system/process possesses a given attribute. Indicator provides insight to guide project decisions.",
     "McCall's Quality Factors: Categorized into 3 dimensions: Product Operation (Correctness, Reliability, Efficiency, Integrity, Usability), Product Revision (Maintainability, Flexibility, Testability), and Product Transition (Portability, Reusability, Interoperability).",
     "Metrics for Design Model: High-level architectural metrics assessing structural complexity, module size, cohesion, coupling, and fan-in / fan-out (Fan-in: number of modules calling a module; Fan-out: number of modules called by a module).",
     "Metrics for Source Code: Halstead Software Science metrics (n1 distinct operators, n2 distinct operands, length N, volume V), Cyclomatic complexity V(G), defect density per KLOC."
    ],
    "formulas": [
     "Defect Density = Total Defects / KLOC",
     "McCall's Quality Triangle: Operation (Correctness, Usability) + Revision (Maintainability) + Transition (Portability)"
    ],
    "example": "A module with Fan-in = 8 (high reuse) and Fan-out = 2 (low calling complexity) indicates good architectural balance, whereas Fan-out = 15 indicates an overly complex coordinating module."
   }
  ],
  "mustKnow": [
   "Verification asks 'Are we building the product right?' (process check); Validation asks 'Are we building the right product?' (customer needs check)",
   "Three formulas for Cyclomatic Complexity: V(G) = E - N + 2P = Predicate Nodes + 1 = Enclosed Regions",
   "Boundary Value Analysis (BVA) tests extremes (min-1, min, min+1, max-1, max, max+1) because defects congregate disproportionately at boundary edges",
   "Alpha testing is conducted at developer's site in controlled settings; Beta testing is conducted at client sites in uncontrolled live operational environments",
   "Bottom-up integration uses Drivers; Top-down integration uses Stubs"
  ]
 },
 "NOTE-SE-05": {
  "noteId": "NOTE-SE-05",
  "subjectId": "SE",
  "chapter": 5,
  "title": "SE Unit 5: Risk Management, Quality Assurance & Maintenance",
  "pageCount": 9,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive faculty lecture notes covering risk management strategies (Reactive vs Proactive), risk analysis (identification, projection, refinement), Risk Exposure formula, Risk Mitigation, Monitoring, and Management (RMMM Plan), Software Quality Assurance (SQA) activities, Formal Technical Reviews (FTR), Software Reliability (MTBF, MTTF, MTTR), and ISO 9000 quality standards.",
  "topics": [
   {
    "title": "Risk Strategies: Reactive vs. Proactive & Risk Identification",
    "summary": "Risk management identifies potential problems before they occur, allowing software teams to avoid crises rather than continually firefighting disasters.",
    "points": [
     "Reactive Risk Strategy ('Firefighting'): Team does nothing about risks until they manifest as active disasters. Resources are scrambled in crisis mode to patch failures after schedule or budget is destroyed.",
     "Proactive Risk Strategy: Begins formal risk identification before technical work starts. Potential risks are identified, probability and impact are assessed, and rank-ordered contingency plans are pre-established.",
     "Software Risk Categories: 1) Project Risks (threaten project schedule and resources e.g. budget cuts, staff turnover), 2) Technical Risks (threaten quality and timeliness e.g. unproven technology, specification ambiguity), 3) Business Risks (threaten market viability e.g. building product nobody wants, competitor release).",
     "Risk Item Checklist: Product size risks, business impact risks, customer characteristics risks, process definition risks, development environment risks, staff experience/talent risks."
    ],
    "formulas": [
     "Risk = Likelihood (Probability P) * Consequence (Impact C)",
     "Strategy Contrast: Reactive (Crisis Management) vs. Proactive (Formal Risk Planning & Early Avoidance)"
    ],
    "example": "Reactive: Senior developer quits, project stops for 3 weeks while scrambling to find a replacement. Proactive: Cross-training and pair programming are instituted from Day 1 so no single person holds a monopoly on knowledge."
   },
   {
    "title": "Risk Projection, Risk Table & Risk Exposure (RE)",
    "summary": "Risk projection assesses the likelihood and severity of each risk, ranking them into an actionable project risk table.",
    "points": [
     "Risk Projection (Estimation): 1) Establish Risk Likelihood/Probability (P between 0 and 1.0 or percentage), 2) Estimate consequences and impact (C on scale of 1 to 5: Catastrophic, Critical, Marginal, Negligible).",
     "Risk Table: Formulated with columns: Risk Description, Category (PR/TR/BR), Probability (P), Impact (C), and RMMM pointer. Sorted descending by risk priority.",
     "Risk Exposure (RE / Risk Impact Value): Quantitative metric calculated as: RE = P * C, where P is probability and C is cost/impact if the risk occurs.",
     "Risk Refinement: Decomposing a broad risk into detailed constituent sub-risks using Condition-Transition-Consequence (CTC) format."
    ],
    "formulas": [
     "RE = P * C",
     "where RE = Risk Exposure ($ or cost impact), P = Probability of occurrence (0.0 to 1.0), C = Cost / Impact severity to project"
    ],
    "example": "If database corruption probability is P = 0.20 and recovery cost is C = $100,000, then Risk Exposure RE = 0.20 * $100,000 = $20,000. Spending $5,000 on redundant hot-backups is economically justified."
   },
   {
    "title": "RMMM Plan (Risk Mitigation, Monitoring & Management)",
    "summary": "The RMMM plan documents detailed operational procedures to avoid risks, track warning signs, and manage crises if mitigation fails.",
    "points": [
     "Risk Mitigation (Avoidance): Proactive steps taken to prevent the risk from occurring (e.g., to mitigate high staff turnover: provide competitive incentives, conduct cross-training, maintain comprehensive modular documentation).",
     "Risk Monitoring: Systematic surveillance tracking leading indicator metrics that suggest whether a risk is becoming more or less probable (e.g., monitor developer morale, overtime hours, defect injection rates).",
     "Risk Management (Contingency Planning): Operational actions executed if mitigation steps fail and the risk becomes a live problem (e.g., if key developer quits: immediately activate external pre-contracted technical consultants).",
     "RMMM Document: Formal section of the Project Plan outlining mitigation strategies, responsible personnel, monitoring intervals, and trigger points for contingency execution."
    ],
    "formulas": [
     "RMMM Triad: Mitigation (Prevent before) -> Monitoring (Track leading indicators) -> Management (Execute contingency when triggered)"
    ],
    "example": "For staff turnover risk: Mitigation = competitive compensation and documented knowledge transfer. Monitoring = quarterly satisfaction surveys. Management = contractual agreement with a specialist staffing firm for emergency coverage."
   },
   {
    "title": "Software Quality Assurance (SQA), FTR & Software Reliability",
    "summary": "SQA provides management with visibility into process compliance and product conformance to specified standards.",
    "points": [
     "Software Quality: Conformance to explicitly stated functional and performance requirements, documented development standards, and implicit characteristics expected of professional software.",
     "SQA Activities: Applying effective technical methods, conducting formal technical reviews (FTR), implementing a multi-tiered testing strategy, enforcing process standards, managing changes via SCM, tracking software measurement, and maintaining audit records.",
     "Formal Technical Review (FTR): Peer review meeting conducted by software engineers. Objectives: Uncover defects in function, logic, or implementation; verify software meets requirements; ensure standards compliance; achieve manageable development. Rules: Review the product, not the producer; set an agenda and maintain it; limit debate (max 2 hours); limit participants (3 to 5 people); record defects in Review Summary Report.",
     "Software Reliability: Probability of failure-free operation for a specified time in a specified environment. Primary metrics: Mean Time To Failure (MTTF), Mean Time To Repair (MTTR), and Mean Time Between Failures (MTBF = MTTF + MTTR). Software Availability: A = [MTTF / (MTTF + MTTR)] * 100%.",
     "ISO 9000 Quality Standards: International quality assurance framework. ISO 9001 applies to software engineering (design, development, production, installation, and servicing)."
    ],
    "formulas": [
     "MTBF = MTTF + MTTR",
     "Availability A = [MTTF / (MTTF + MTTR)] * 100%",
     "FTR Constraints: Max 2 hours duration, 3 to 5 reviewers, review product not producer"
    ],
    "example": "A medical ventilator system has MTTF = 5,000 hours and MTTR = 2 hours. MTBF = 5,002 hours. Availability A = (5000 / 5002) * 100% = 99.96%, satisfying critical safety reliability standards."
   }
  ],
  "mustKnow": [
   "Risk Exposure formula: RE = P * C (Probability * Cost/Impact). Used to prioritize which risks justify mitigation investments",
   "RMMM stands for Risk Mitigation (avoidance), Monitoring (tracking indicators), and Management (contingency execution)",
   "FTR Golden Rule: Review the product, not the producer; limit meeting to max 2 hours and 3 to 5 participants",
   "Software Reliability formula: MTBF = MTTF + MTTR; Availability A = MTTF / (MTTF + MTTR) * 100%",
   "Reactive risk management ('firefighting') responds only when crises hit; Proactive risk management plans avoidance before project kickoff"
  ]
 },
 "NOTE-DM-06": {
  "noteId": "NOTE-DM-06",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: BFS & DFS Graph Traversals",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Graph theory models pairwise relationships between discrete objects in computer networks, compiler dataflow, routing algorithms, and scheduling. Covers representations, connectivity, Eulerian and Hamiltonian paths, planar graphs, graph colorings, and tree traversal algorithms.",
  "topics": [
   {
    "title": "Graph Terminology & Handshaking Theorem",
    "summary": "A graph G = (V, E) consists of a set of vertices V and edges E. Edges may be directed or undirected.",
    "points": [
     "Degree of a vertex deg(v): Number of edges incident with v (loops count twice).",
     "Isolated vertex: deg(v) = 0; Pendant / leaf vertex: deg(v) = 1.",
     "Complete Graph Kn: Simple undirected graph where every pair of distinct vertices is connected by an edge; has n(n-1)/2 edges.",
     "Bipartite Graph: Vertices can be partitioned into two disjoint sets V1, V2 such that every edge connects V1 to V2 (contains no odd-length cycles)."
    ],
    "formulas": [
     "Handshaking Theorem: ∑ [v ∈ V] deg(v) = 2 |E|",
     "Corollary: In any undirected graph, the number of vertices with odd degree is always even."
    ],
    "example": "If a graph has 5 vertices of degree 4, sum of degrees = 20. By the Handshaking Theorem, 2|E| = 20 ⇒ |E| = 10 edges."
   },
   {
    "title": "Eulerian & Hamiltonian Graphs",
    "summary": "Eulerian paths traverse every edge exactly once; Hamiltonian paths visit every vertex exactly once.",
    "points": [
     "Eulerian Trail: Walks through every edge in E exactly once.",
     "Eulerian Circuit: Closed Eulerian trail starting and ending at the same vertex.",
     "Euler Graph Condition: A connected graph is Eulerian if and only if every vertex has an even degree.",
     "Hamiltonian Cycle: A simple cycle that visits every vertex in V exactly once and returns to the start.",
     "Dirac's Theorem: If a simple graph has n ≥ 3 vertices and deg(v) ≥ n/2 for every vertex, then G is Hamiltonian."
    ],
    "formulas": [
     "Eulerian circuit exists iff graph is connected and all vertices have even degree.",
     "Eulerian trail exists iff graph is connected and exactly two vertices have odd degree (start and end)."
    ],
    "example": "Konigsberg bridge problem: The multigraph had 4 vertices with degrees 3, 3, 3, and 5 (all odd). Since not all degrees were even, no Eulerian tour existed."
   },
   {
    "title": "Planar Graphs & Graph Coloring",
    "summary": "A graph is Planar if it can be drawn in a plane without any edges intersecting. Graph coloring assigns colors to vertices such that adjacent vertices have distinct colors.",
    "points": [
     "Regions (Faces): A planar drawing divides the plane into bounded faces and one unbounded face.",
     "Kuratowski's Theorem: A graph is planar iff it does not contain a subgraph homeomorphic to K5 or K3,3.",
     "Chromatic Number χ(G): Minimum colors required to properly color vertices.",
     "Four Color Theorem: Every planar graph can be colored using at most 4 colors (χ(G) ≤ 4)."
    ],
    "formulas": [
     "Euler's Formula for Planar Graphs: V - E + R = 2",
     "For connected simple planar graphs with V ≥ 3: E ≤ 3V - 6",
     "If triangle-free planar graph: E ≤ 2V - 4"
    ],
    "example": "A connected planar graph has 6 vertices and 7 edges: by Euler's formula, R = 2 - V + E = 2 - 6 + 7 = 3 regions."
   },
   {
    "title": "Trees & Graph Traversal (BFS & DFS)",
    "summary": "A Tree is a connected undirected graph with no cycles. Spanning trees connect all vertices with minimal edges.",
    "points": [
     "Tree Properties: A tree with n vertices has exactly n - 1 edges; unique path between any two vertices.",
     "Spanning Tree: A subgraph of G that is a tree containing every vertex of G.",
     "Breadth-First Search (BFS): Explores neighbors level by level using a FIFO Queue; finds shortest path in unweighted graphs.",
     "Depth-First Search (DFS): Explores deep along each branch before backtracking using a LIFO Stack or recursion."
    ],
    "formulas": [
     "Edges in any tree with n vertices: |E| = n - 1",
     "Time complexity of BFS and DFS: O(V + E) with adjacency lists"
    ],
    "example": "A tree with 15 vertices must have exactly 15 - 1 = 14 edges."
   }
  ],
  "mustKnow": [
   "Handshaking theorem: ∑ deg(v) = 2 |E|",
   "Eulerian graph criterion: connected and all vertices have even degree",
   "Euler's planar formula: V - E + R = 2",
   "Planar graph edge bound: E ≤ 3V - 6",
   "Tree edge property: exactly n - 1 edges for n vertices"
  ]
 },
 "NOTE-DM-07": {
  "noteId": "NOTE-DM-07",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: Graphs - Complete Notes",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Graph theory models pairwise relationships between discrete objects in computer networks, compiler dataflow, routing algorithms, and scheduling. Covers representations, connectivity, Eulerian and Hamiltonian paths, planar graphs, graph colorings, and tree traversal algorithms.",
  "topics": [
   {
    "title": "Graph Terminology & Handshaking Theorem",
    "summary": "A graph G = (V, E) consists of a set of vertices V and edges E. Edges may be directed or undirected.",
    "points": [
     "Degree of a vertex deg(v): Number of edges incident with v (loops count twice).",
     "Isolated vertex: deg(v) = 0; Pendant / leaf vertex: deg(v) = 1.",
     "Complete Graph Kn: Simple undirected graph where every pair of distinct vertices is connected by an edge; has n(n-1)/2 edges.",
     "Bipartite Graph: Vertices can be partitioned into two disjoint sets V1, V2 such that every edge connects V1 to V2 (contains no odd-length cycles)."
    ],
    "formulas": [
     "Handshaking Theorem: ∑ [v ∈ V] deg(v) = 2 |E|",
     "Corollary: In any undirected graph, the number of vertices with odd degree is always even."
    ],
    "example": "If a graph has 5 vertices of degree 4, sum of degrees = 20. By the Handshaking Theorem, 2|E| = 20 ⇒ |E| = 10 edges."
   },
   {
    "title": "Eulerian & Hamiltonian Graphs",
    "summary": "Eulerian paths traverse every edge exactly once; Hamiltonian paths visit every vertex exactly once.",
    "points": [
     "Eulerian Trail: Walks through every edge in E exactly once.",
     "Eulerian Circuit: Closed Eulerian trail starting and ending at the same vertex.",
     "Euler Graph Condition: A connected graph is Eulerian if and only if every vertex has an even degree.",
     "Hamiltonian Cycle: A simple cycle that visits every vertex in V exactly once and returns to the start.",
     "Dirac's Theorem: If a simple graph has n ≥ 3 vertices and deg(v) ≥ n/2 for every vertex, then G is Hamiltonian."
    ],
    "formulas": [
     "Eulerian circuit exists iff graph is connected and all vertices have even degree.",
     "Eulerian trail exists iff graph is connected and exactly two vertices have odd degree (start and end)."
    ],
    "example": "Konigsberg bridge problem: The multigraph had 4 vertices with degrees 3, 3, 3, and 5 (all odd). Since not all degrees were even, no Eulerian tour existed."
   },
   {
    "title": "Planar Graphs & Graph Coloring",
    "summary": "A graph is Planar if it can be drawn in a plane without any edges intersecting. Graph coloring assigns colors to vertices such that adjacent vertices have distinct colors.",
    "points": [
     "Regions (Faces): A planar drawing divides the plane into bounded faces and one unbounded face.",
     "Kuratowski's Theorem: A graph is planar iff it does not contain a subgraph homeomorphic to K5 or K3,3.",
     "Chromatic Number χ(G): Minimum colors required to properly color vertices.",
     "Four Color Theorem: Every planar graph can be colored using at most 4 colors (χ(G) ≤ 4)."
    ],
    "formulas": [
     "Euler's Formula for Planar Graphs: V - E + R = 2",
     "For connected simple planar graphs with V ≥ 3: E ≤ 3V - 6",
     "If triangle-free planar graph: E ≤ 2V - 4"
    ],
    "example": "A connected planar graph has 6 vertices and 7 edges: by Euler's formula, R = 2 - V + E = 2 - 6 + 7 = 3 regions."
   },
   {
    "title": "Trees & Graph Traversal (BFS & DFS)",
    "summary": "A Tree is a connected undirected graph with no cycles. Spanning trees connect all vertices with minimal edges.",
    "points": [
     "Tree Properties: A tree with n vertices has exactly n - 1 edges; unique path between any two vertices.",
     "Spanning Tree: A subgraph of G that is a tree containing every vertex of G.",
     "Breadth-First Search (BFS): Explores neighbors level by level using a FIFO Queue; finds shortest path in unweighted graphs.",
     "Depth-First Search (DFS): Explores deep along each branch before backtracking using a LIFO Stack or recursion."
    ],
    "formulas": [
     "Edges in any tree with n vertices: |E| = n - 1",
     "Time complexity of BFS and DFS: O(V + E) with adjacency lists"
    ],
    "example": "A tree with 15 vertices must have exactly 15 - 1 = 14 edges."
   }
  ],
  "mustKnow": [
   "Handshaking theorem: ∑ deg(v) = 2 |E|",
   "Eulerian graph criterion: connected and all vertices have even degree",
   "Euler's planar formula: V - E + R = 2",
   "Planar graph edge bound: E ≤ 3V - 6",
   "Tree edge property: exactly n - 1 edges for n vertices"
  ]
 },
 "NOTE-DM-08": {
  "noteId": "NOTE-DM-08",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: Graph Theory Notes",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Graph theory models pairwise relationships between discrete objects in computer networks, compiler dataflow, routing algorithms, and scheduling. Covers representations, connectivity, Eulerian and Hamiltonian paths, planar graphs, graph colorings, and tree traversal algorithms.",
  "topics": [
   {
    "title": "Graph Terminology & Handshaking Theorem",
    "summary": "A graph G = (V, E) consists of a set of vertices V and edges E. Edges may be directed or undirected.",
    "points": [
     "Degree of a vertex deg(v): Number of edges incident with v (loops count twice).",
     "Isolated vertex: deg(v) = 0; Pendant / leaf vertex: deg(v) = 1.",
     "Complete Graph Kn: Simple undirected graph where every pair of distinct vertices is connected by an edge; has n(n-1)/2 edges.",
     "Bipartite Graph: Vertices can be partitioned into two disjoint sets V1, V2 such that every edge connects V1 to V2 (contains no odd-length cycles)."
    ],
    "formulas": [
     "Handshaking Theorem: ∑ [v ∈ V] deg(v) = 2 |E|",
     "Corollary: In any undirected graph, the number of vertices with odd degree is always even."
    ],
    "example": "If a graph has 5 vertices of degree 4, sum of degrees = 20. By the Handshaking Theorem, 2|E| = 20 ⇒ |E| = 10 edges."
   },
   {
    "title": "Eulerian & Hamiltonian Graphs",
    "summary": "Eulerian paths traverse every edge exactly once; Hamiltonian paths visit every vertex exactly once.",
    "points": [
     "Eulerian Trail: Walks through every edge in E exactly once.",
     "Eulerian Circuit: Closed Eulerian trail starting and ending at the same vertex.",
     "Euler Graph Condition: A connected graph is Eulerian if and only if every vertex has an even degree.",
     "Hamiltonian Cycle: A simple cycle that visits every vertex in V exactly once and returns to the start.",
     "Dirac's Theorem: If a simple graph has n ≥ 3 vertices and deg(v) ≥ n/2 for every vertex, then G is Hamiltonian."
    ],
    "formulas": [
     "Eulerian circuit exists iff graph is connected and all vertices have even degree.",
     "Eulerian trail exists iff graph is connected and exactly two vertices have odd degree (start and end)."
    ],
    "example": "Konigsberg bridge problem: The multigraph had 4 vertices with degrees 3, 3, 3, and 5 (all odd). Since not all degrees were even, no Eulerian tour existed."
   },
   {
    "title": "Planar Graphs & Graph Coloring",
    "summary": "A graph is Planar if it can be drawn in a plane without any edges intersecting. Graph coloring assigns colors to vertices such that adjacent vertices have distinct colors.",
    "points": [
     "Regions (Faces): A planar drawing divides the plane into bounded faces and one unbounded face.",
     "Kuratowski's Theorem: A graph is planar iff it does not contain a subgraph homeomorphic to K5 or K3,3.",
     "Chromatic Number χ(G): Minimum colors required to properly color vertices.",
     "Four Color Theorem: Every planar graph can be colored using at most 4 colors (χ(G) ≤ 4)."
    ],
    "formulas": [
     "Euler's Formula for Planar Graphs: V - E + R = 2",
     "For connected simple planar graphs with V ≥ 3: E ≤ 3V - 6",
     "If triangle-free planar graph: E ≤ 2V - 4"
    ],
    "example": "A connected planar graph has 6 vertices and 7 edges: by Euler's formula, R = 2 - V + E = 2 - 6 + 7 = 3 regions."
   },
   {
    "title": "Trees & Graph Traversal (BFS & DFS)",
    "summary": "A Tree is a connected undirected graph with no cycles. Spanning trees connect all vertices with minimal edges.",
    "points": [
     "Tree Properties: A tree with n vertices has exactly n - 1 edges; unique path between any two vertices.",
     "Spanning Tree: A subgraph of G that is a tree containing every vertex of G.",
     "Breadth-First Search (BFS): Explores neighbors level by level using a FIFO Queue; finds shortest path in unweighted graphs.",
     "Depth-First Search (DFS): Explores deep along each branch before backtracking using a LIFO Stack or recursion."
    ],
    "formulas": [
     "Edges in any tree with n vertices: |E| = n - 1",
     "Time complexity of BFS and DFS: O(V + E) with adjacency lists"
    ],
    "example": "A tree with 15 vertices must have exactly 15 - 1 = 14 edges."
   }
  ],
  "mustKnow": [
   "Handshaking theorem: ∑ deg(v) = 2 |E|",
   "Eulerian graph criterion: connected and all vertices have even degree",
   "Euler's planar formula: V - E + R = 2",
   "Planar graph edge bound: E ≤ 3V - 6",
   "Tree edge property: exactly n - 1 edges for n vertices"
  ]
 },
 "NOTE-DM-09": {
  "noteId": "NOTE-DM-09",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Elementary Combinatorics (Part A)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinatorics studies techniques of discrete counting, arrangements, selections, and solving recursive algorithms. Covers permutations, combinations, pigeonhole principle, binomial coefficients, recurrence relations, and generating functions.",
  "topics": [
   {
    "title": "Fundamental Counting Principles & Permutations",
    "summary": "Rule of sum applies to mutually exclusive choices; rule of product applies to sequential independent choices. Permutation measures ordered arrangements.",
    "points": [
     "Rule of Sum: If task 1 can be done in m ways and task 2 in n ways (disjoint), either can be done in m + n ways.",
     "Rule of Product: If task 1 can be done in m ways and task 2 in n ways, both can be done in m × n ways.",
     "Permutation P(n, r): Number of ways to arrange r elements chosen from n distinct elements.",
     "Permutations with Repetitions: Number of arrangements of n objects where n1 are alike, n2 are alike is n! / (n1! n2! ... nk!)."
    ],
    "formulas": [
     "P(n, r) = n! / (n - r)!",
     "Circular Permutation of n distinct objects: (n - 1)!"
    ],
    "example": "Arrangements of the word \"MISSISSIPPI\" (total 11 letters: 1 M, 4 I, 4 S, 2 P) = 11! / (1! 4! 4! 2!) = 34,650."
   },
   {
    "title": "Combinations & Binomial Coefficients",
    "summary": "Combination C(n, r) represents unordered selections of r items from a collection of n distinct items.",
    "points": [
     "Selection without replacement: C(n, r) = n! / (r!(n - r)!).",
     "Selection with replacement: Number of non-negative integer solutions to x1 + x2 + ... + xn = r is C(n + r - 1, r).",
     "Symmetry Property: C(n, r) = C(n, n - r).",
     "Pascal's Identity: C(n, r) = C(n - 1, r - 1) + C(n - 1, r)."
    ],
    "formulas": [
     "Binomial Theorem: (x + y)^n = ∑ [r=0 to n] C(n, r) x^(n-r) y^r",
     "Sum of binomial coefficients: ∑ [r=0 to n] C(n, r) = 2^n"
    ],
    "example": "Number of ways to distribute 10 identical candies among 4 children is C(4 + 10 - 1, 10) = C(13, 10) = 286."
   },
   {
    "title": "Pigeonhole Principle",
    "summary": "If k items are placed into n containers and k > n, then at least one container must contain two or more items.",
    "points": [
     "Basic Form: If n + 1 pigeons are placed in n holes, at least one hole has ≥ 2 pigeons.",
     "Generalized Form: If N objects are placed in k boxes, at least one box contains at least ⌈N / k⌉ objects.",
     "Applications: Guaranteeing duplicate birth months, hash collision analysis, subset sum existence."
    ],
    "formulas": [
     "Minimum objects per box = ⌈N / k⌉"
    ],
    "example": "In a group of 367 people, since there are at most 366 possible birthdays in a leap year, by the Pigeonhole Principle at least 2 people must share a birthday."
   },
   {
    "title": "Recurrence Relations & Generating Functions",
    "summary": "A recurrence relation defines a sequence an in terms of preceding terms. Used extensively to analyze algorithm time complexities.",
    "points": [
     "Linear Homogeneous Recurrence with Constant Coefficients: c0 an + c1 a(n-1) + ... + ck a(n-k) = 0.",
     "Characteristic Equation: Replace an with r^n to find characteristic roots r.",
     "Distinct Real Roots: General solution is an = A r1^n + B r2^n.",
     "Repeated Roots: If root r1 repeats with multiplicity 2, solution includes (A + B n) r1^n."
    ],
    "formulas": [
     "Fibonacci Recurrence: F(n) = F(n-1) + F(n-2) with F(0)=0, F(1)=1",
     "Characteristic equation of Fibonacci: r^2 - r - 1 = 0"
    ],
    "example": "Solve an - 5a(n-1) + 6a(n-2) = 0: Characteristic equation r^2 - 5r + 6 = (r - 2)(r - 3) = 0. Roots are r=2, 3. General solution: an = c1(2^n) + c2(3^n)."
   }
  ],
  "mustKnow": [
   "Permutation formula: P(n, r) = n! / (n - r)!",
   "Combination formula: C(n, r) = n! / (r! (n - r)!)",
   "Combinations with repetition: C(n + r - 1, r)",
   "Generalized Pigeonhole: at least ⌈N / k⌉ items in one box",
   "Binomial coefficient sum: ∑ C(n, r) = 2^n"
  ]
 },
 "NOTE-DM-10": {
  "noteId": "NOTE-DM-10",
  "subjectId": "DM",
  "chapter": 3,
  "title": "DM Unit 3: Lattices & Partial Orders",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Algebraic structures investigate sets equipped with one or more binary operations satisfying axiomatic properties. Essential for cryptography, coding theory, and formal grammars. Covers semigroups, monoids, groups, subgroups, cyclic groups, cosets, Lagrange's theorem, and lattices.",
  "topics": [
   {
    "title": "Binary Operations & Algebraic Systems",
    "summary": "An algebraic system (S, *) consists of a non-empty set S and a closed binary operation * : S × S → S.",
    "points": [
     "Closure: For all a, b ∈ S, a * b ∈ S.",
     "Associativity: (a * b) * c = a * (b * c) for all a, b, c ∈ S.",
     "Identity Element: An element e ∈ S such that a * e = e * a = a for all a ∈ S (unique if it exists).",
     "Inverse Element: For each a ∈ S, an element a^(-1) ∈ S such that a * a^(-1) = a^(-1) * a = e."
    ],
    "formulas": [
     "Semigroup: Closed + Associative (S, *)",
     "Monoid: Semigroup with Identity element (S, *, e)",
     "Group: Monoid where every element possesses a unique inverse (G, *, e, ^(-1))"
    ],
    "example": "(Z, +) is a group: closed under addition, associative, identity is 0, and inverse of a is -a."
   },
   {
    "title": "Groups, Abelian Groups & Subgroups",
    "summary": "A Group is an algebraic system satisfying closure, associativity, identity, and invertibility. If the operation is commutative, it is an Abelian Group.",
    "points": [
     "Abelian Group: a * b = b * a for all a, b ∈ G.",
     "Order of a Group |G|: Number of elements in group G.",
     "Order of an element O(a): Smallest positive integer m such that a^m = e.",
     "Subgroup (H ≤ G): A non-empty subset H of G that is itself a group under the restricted operation."
    ],
    "formulas": [
     "Subgroup Test: Non-empty H ≤ G iff for all a, b ∈ H, a * b^(-1) ∈ H.",
     "Lagrange's Theorem: If G is a finite group and H is a subgroup of G, then |H| divides |G|."
    ],
    "example": "Under multiplication modulo 5, G = {1, 2, 3, 4} forms an Abelian group with identity 1. H = {1, 4} is a subgroup of order 2, dividing |G| = 4."
   },
   {
    "title": "Cyclic Groups & Generators",
    "summary": "A group G is Cyclic if there exists an element a ∈ G such that every element of G can be expressed as a power of a (G = ⟨a⟩).",
    "points": [
     "Generator: An element a such that ⟨a⟩ = G.",
     "Every cyclic group is Abelian.",
     "Subgroups of a cyclic group are also cyclic.",
     "If G is a finite cyclic group of order n generated by a, then a^k is a generator iff gcd(k, n) = 1."
    ],
    "formulas": [
     "Number of generators of a finite cyclic group of order n is given by Euler's totient function φ(n)."
    ],
    "example": "In (Z6, +), 1 and 5 are generators because gcd(1, 6) = 1 and gcd(5, 6) = 1. φ(6) = 2."
   },
   {
    "title": "Lattices & Partial Orders (Posets)",
    "summary": "A Poset (P, ≤) is a set with a relation that is reflexive, antisymmetric, and transitive. A Lattice is a poset in which every pair of elements has a unique LUB (Join) and GLB (Meet).",
    "points": [
     "Least Upper Bound (LUB / Join): Denoted a ∨ b.",
     "Greatest Lower Bound (GLB / Meet): Denoted a ∧ b.",
     "Hasse Diagram: Graphical representation of a finite poset eliminating reflexive self-loops and transitive edges.",
     "Distributive Lattice: Meets and joins distribute over each other: a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c).",
     "Complemented Lattice: Every element a has a complement a' such that a ∨ a' = 1 and a ∧ a' = 0."
    ],
    "formulas": [
     "Absorption Laws in Lattices: a ∨ (a ∧ b) = a  and  a ∧ (a ∨ b) = a",
     "Boolean Algebra: A lattice that is both distributive and complemented."
    ],
    "example": "Power set (P(S), ⊆) is a Boolean algebra where join is union (∪), meet is intersection (∩), 0 is ∅, and 1 is S."
   }
  ],
  "mustKnow": [
   "Lagrange's Theorem: |H| divides |G| for any subgroup H of finite group G",
   "Group axioms: Closure, Associativity, Identity existence, Inverse existence",
   "Lattice definition: Poset where every pair {a, b} has unique LUB and GLB",
   "Subgroup 1-step test: a, b ∈ H ⟹ a · b^(-1) ∈ H",
   "Boolean algebra is a complemented distributive lattice"
  ]
 },
 "NOTE-DM-11": {
  "noteId": "NOTE-DM-11",
  "subjectId": "DM",
  "chapter": 1,
  "title": "DM Unit 1: Mathematical Logic (MFCS)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Mathematical logic forms the foundation of computer science reasoning, digital logic synthesis, and formal software verification. This unit covers propositional calculus, truth tables, logical equivalence laws, normal forms (CNF/DNF), and formal proof inference rules.",
  "topics": [
   {
    "title": "Propositional Logic & Logical Connectives",
    "summary": "A proposition is a declarative statement that is strictly either true (T) or false (F), but not both. Compound propositions are formed using logical connectives.",
    "points": [
     "Negation (¬p / ~p): Inverts truth value; true when p is false.",
     "Conjunction (p ∧ q): True strictly when both propositions are true.",
     "Disjunction (p ∨ q): Inclusive disjunction; true if at least one proposition is true.",
     "Conditional (p → q): \"If p then q\"; false only when antecedent p is true and consequent q is false.",
     "Biconditional (p ↔ q): True strictly when p and q share identical truth values."
    ],
    "formulas": [
     "p → q ≡ ¬p ∨ q",
     "Contrapositive: p → q ≡ ¬q → ¬p",
     "Converse: q → p (not logically equivalent to p → q)",
     "Inverse: ¬p → ¬q (equivalent to converse)"
    ],
    "example": "If p = \"It is raining\" and q = \"Ground is wet\", the conditional p → q is: \"If it is raining, then the ground is wet\". The contrapositive ¬q → ¬p is: \"If the ground is not wet, then it is not raining\"."
   },
   {
    "title": "Tautologies, Contradictions & Equivalence Laws",
    "summary": "A formula is a Tautology if it evaluates to True under all truth assignments, a Contradiction if False under all assignments, and a Contingency otherwise.",
    "points": [
     "Identity Laws: p ∧ T ≡ p;  p ∨ F ≡ p",
     "Domination Laws: p ∨ T ≡ T;  p ∧ F ≡ F",
     "Idempotent Laws: p ∨ p ≡ p;  p ∧ p ≡ p",
     "Double Negation: ¬(¬p) ≡ p",
     "Commutative & Associative Laws hold for both ∧ and ∨"
    ],
    "formulas": [
     "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q  and  ¬(p ∨ q) ≡ ¬p ∧ ¬q",
     "Distributive Laws: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)",
     "Absorption Laws: p ∨ (p ∧ q) ≡ p  and  p ∧ (p ∨ q) ≡ p"
    ],
    "example": "Verify that p ∨ ¬p is a tautology: if p=T, T ∨ F = T; if p=F, F ∨ T = T. Thus, truth value is always T."
   },
   {
    "title": "Normal Forms (CNF, DNF, PCNF & PDNF)",
    "summary": "Standard canonical representations of Boolean expressions. A minterm is a conjunction of literals; a maxterm is a disjunction of literals.",
    "points": [
     "Disjunctive Normal Form (DNF): A disjunction of conjunctions (Sum of Products).",
     "Conjunctive Normal Form (CNF): A conjunction of disjunctions (Product of Sums).",
     "Principal DNF (PDNF): Sum of minterms containing every variable exactly once.",
     "Principal CNF (PCNF): Product of maxterms containing every variable exactly once."
    ],
    "formulas": [
     "Procedure to CNF: Eliminate → and ↔, drive ¬ inside using De Morgan's, apply distributivity of ∨ over ∧.",
     "Duality: If PDNF has m minterms from 2^n possibilities, PCNF consists of the remaining (2^n - m) maxterms."
    ],
    "example": "For formula p → q: replace implication with ¬p ∨ q. Since it is a single disjunction of literals, it is already in CNF."
   },
   {
    "title": "Rules of Inference & Predicate Logic",
    "summary": "Inference rules govern valid logical deduction from premises to conclusions without computing full truth tables.",
    "points": [
     "Modus Ponens: From p and p → q, conclude q.",
     "Modus Tollens: From ¬q and p → q, conclude ¬p.",
     "Hypothetical Syllogism: From p → q and q → r, conclude p → r.",
     "Disjunctive Syllogism: From p ∨ q and ¬p, conclude q.",
     "Universal Quantifier (∀x P(x)): True if P(x) is true for all domain elements.",
     "Existential Quantifier (∃x P(x)): True if P(x) is true for at least one domain element."
    ],
    "formulas": [
     "¬(∀x P(x)) ≡ ∃x ¬P(x)",
     "¬(∃x P(x)) ≡ ∀x ¬P(x)"
    ],
    "example": "Premises: \"If x is divisible by 6, then x is divisible by 2\" (p → q) and \"x is divisible by 6\" (p). By Modus Ponens, conclusion: \"x is divisible by 2\" (q)."
   }
  ],
  "mustKnow": [
   "De Morgan's Laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q",
   "Conditional equivalence: p → q ≡ ¬p ∨ q",
   "Contrapositive equality: p → q ≡ ¬q → ¬p",
   "Modus Ponens inference: (p ∧ (p → q)) ⟹ q",
   "Quantifier negation: ¬∀x P(x) ≡ ∃x ¬P(x)"
  ]
 },
 "NOTE-DM-12": {
  "noteId": "NOTE-DM-12",
  "subjectId": "DM",
  "chapter": 2,
  "title": "DM Unit 2: Set Theory (MFCS)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Set theory and relations provide the formal mathematical foundation for database theory, data structures, and relational algebra. Covers sets, power sets, Cartesian products, equivalence relations, partial orders, and function classifications.",
  "topics": [
   {
    "title": "Set Operations & Laws",
    "summary": "A set is a well-defined collection of distinct objects. Fundamental operations include union, intersection, difference, and Cartesian product.",
    "points": [
     "Union (A ∪ B) = {x | x ∈ A or x ∈ B}",
     "Intersection (A ∩ B) = {x | x ∈ A and x ∈ B}",
     "Difference (A - B) = {x | x ∈ A and x ∉ B}",
     "Symmetric Difference (A ⊕ B) = (A - B) ∪ (B - A)",
     "Power Set P(A): Set of all subsets of A; if |A| = n, then |P(A)| = 2^n."
    ],
    "formulas": [
     "Principle of Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|",
     "Cartesian Product: |A × B| = |A| × |B|"
    ],
    "example": "If A = {1, 2}, then P(A) = {∅, {1}, {2}, {1, 2}}, having |P(A)| = 2^2 = 4 elements."
   },
   {
    "title": "Binary Relations & Their Properties",
    "summary": "A binary relation R from set A to set B is a subset of A × B. If A = B, R is a relation on A.",
    "points": [
     "Reflexive: (a, a) ∈ R for all a ∈ A.",
     "Symmetric: (a, b) ∈ R implies (b, a) ∈ R.",
     "Transitive: (a, b) ∈ R and (b, c) ∈ R implies (a, c) ∈ R.",
     "Antisymmetric: (a, b) ∈ R and (b, a) ∈ R implies a = b.",
     "Irreflexive: (a, a) ∉ R for any a ∈ A."
    ],
    "formulas": [
     "Total number of binary relations on set with n elements: 2^(n^2)",
     "Total number of reflexive relations: 2^(n^2 - n)",
     "Total number of symmetric relations: 2^(n(n+1)/2)"
    ],
    "example": "Relation \"≤\" on integers is reflexive (a ≤ a), antisymmetric (a ≤ b and b ≤ a ⇒ a = b), and transitive (a ≤ b and b ≤ c ⇒ a ≤ c)."
   },
   {
    "title": "Equivalence Relations & Partitions",
    "summary": "A relation that is simultaneously reflexive, symmetric, and transitive is an Equivalence Relation.",
    "points": [
     "Equivalence Class [a]: Set of all elements related to a, i.e., [a] = {x ∈ A | (a, x) ∈ R}.",
     "Partitions: The set of equivalence classes forms a partition of A into pairwise disjoint non-empty subsets.",
     "Congruence modulo m: a ≡ b (mod m) iff m divides (a - b) is an equivalence relation."
    ],
    "formulas": [
     "Union of all equivalence classes = A",
     "[a] ∩ [b] = ∅ if a and b are not related; [a] = [b] if (a, b) ∈ R"
    ],
    "example": "Congruence modulo 3 on integers partitions Z into three disjoint classes: [0], [1], and [2]."
   },
   {
    "title": "Functions & Mappings",
    "summary": "A function f: A → B assigns exactly one element of B to each element of A.",
    "points": [
     "Injective (One-to-One): f(x) = f(y) implies x = y.",
     "Surjective (Onto): For every y ∈ B, there exists x ∈ A such that f(x) = y (Range = Codomain).",
     "Bijective: Both one-to-one and onto. A bijection has a unique inverse function f^(-1): B → A.",
     "Composition: (g ∘ f)(x) = g(f(x)). Associative: h ∘ (g ∘ f) = (h ∘ g) ∘ f."
    ],
    "formulas": [
     "If |A| = m and |B| = n, number of functions A → B is n^m.",
     "If m = n, number of bijections is n!."
    ],
    "example": "f(x) = 2x from R to R is bijective because 2x1 = 2x2 implies x1 = x2 (injective) and for any y ∈ R, x = y/2 satisfies f(x) = y (surjective)."
   }
  ],
  "mustKnow": [
   "Equivalence relation requirements: Reflexive + Symmetric + Transitive",
   "Partial order requirements: Reflexive + Antisymmetric + Transitive",
   "Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|",
   "Inverse function exists if and only if the function is bijective",
   "Power set cardinality: |P(A)| = 2^|A|"
  ]
 },
 "NOTE-DM-13": {
  "noteId": "NOTE-DM-13",
  "subjectId": "DM",
  "chapter": 3,
  "title": "DM Unit 3: Algebraic Structures (MFCS)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Algebraic structures investigate sets equipped with one or more binary operations satisfying axiomatic properties. Essential for cryptography, coding theory, and formal grammars. Covers semigroups, monoids, groups, subgroups, cyclic groups, cosets, Lagrange's theorem, and lattices.",
  "topics": [
   {
    "title": "Binary Operations & Algebraic Systems",
    "summary": "An algebraic system (S, *) consists of a non-empty set S and a closed binary operation * : S × S → S.",
    "points": [
     "Closure: For all a, b ∈ S, a * b ∈ S.",
     "Associativity: (a * b) * c = a * (b * c) for all a, b, c ∈ S.",
     "Identity Element: An element e ∈ S such that a * e = e * a = a for all a ∈ S (unique if it exists).",
     "Inverse Element: For each a ∈ S, an element a^(-1) ∈ S such that a * a^(-1) = a^(-1) * a = e."
    ],
    "formulas": [
     "Semigroup: Closed + Associative (S, *)",
     "Monoid: Semigroup with Identity element (S, *, e)",
     "Group: Monoid where every element possesses a unique inverse (G, *, e, ^(-1))"
    ],
    "example": "(Z, +) is a group: closed under addition, associative, identity is 0, and inverse of a is -a."
   },
   {
    "title": "Groups, Abelian Groups & Subgroups",
    "summary": "A Group is an algebraic system satisfying closure, associativity, identity, and invertibility. If the operation is commutative, it is an Abelian Group.",
    "points": [
     "Abelian Group: a * b = b * a for all a, b ∈ G.",
     "Order of a Group |G|: Number of elements in group G.",
     "Order of an element O(a): Smallest positive integer m such that a^m = e.",
     "Subgroup (H ≤ G): A non-empty subset H of G that is itself a group under the restricted operation."
    ],
    "formulas": [
     "Subgroup Test: Non-empty H ≤ G iff for all a, b ∈ H, a * b^(-1) ∈ H.",
     "Lagrange's Theorem: If G is a finite group and H is a subgroup of G, then |H| divides |G|."
    ],
    "example": "Under multiplication modulo 5, G = {1, 2, 3, 4} forms an Abelian group with identity 1. H = {1, 4} is a subgroup of order 2, dividing |G| = 4."
   },
   {
    "title": "Cyclic Groups & Generators",
    "summary": "A group G is Cyclic if there exists an element a ∈ G such that every element of G can be expressed as a power of a (G = ⟨a⟩).",
    "points": [
     "Generator: An element a such that ⟨a⟩ = G.",
     "Every cyclic group is Abelian.",
     "Subgroups of a cyclic group are also cyclic.",
     "If G is a finite cyclic group of order n generated by a, then a^k is a generator iff gcd(k, n) = 1."
    ],
    "formulas": [
     "Number of generators of a finite cyclic group of order n is given by Euler's totient function φ(n)."
    ],
    "example": "In (Z6, +), 1 and 5 are generators because gcd(1, 6) = 1 and gcd(5, 6) = 1. φ(6) = 2."
   },
   {
    "title": "Lattices & Partial Orders (Posets)",
    "summary": "A Poset (P, ≤) is a set with a relation that is reflexive, antisymmetric, and transitive. A Lattice is a poset in which every pair of elements has a unique LUB (Join) and GLB (Meet).",
    "points": [
     "Least Upper Bound (LUB / Join): Denoted a ∨ b.",
     "Greatest Lower Bound (GLB / Meet): Denoted a ∧ b.",
     "Hasse Diagram: Graphical representation of a finite poset eliminating reflexive self-loops and transitive edges.",
     "Distributive Lattice: Meets and joins distribute over each other: a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c).",
     "Complemented Lattice: Every element a has a complement a' such that a ∨ a' = 1 and a ∧ a' = 0."
    ],
    "formulas": [
     "Absorption Laws in Lattices: a ∨ (a ∧ b) = a  and  a ∧ (a ∨ b) = a",
     "Boolean Algebra: A lattice that is both distributive and complemented."
    ],
    "example": "Power set (P(S), ⊆) is a Boolean algebra where join is union (∪), meet is intersection (∩), 0 is ∅, and 1 is S."
   }
  ],
  "mustKnow": [
   "Lagrange's Theorem: |H| divides |G| for any subgroup H of finite group G",
   "Group axioms: Closure, Associativity, Identity existence, Inverse existence",
   "Lattice definition: Poset where every pair {a, b} has unique LUB and GLB",
   "Subgroup 1-step test: a, b ∈ H ⟹ a · b^(-1) ∈ H",
   "Boolean algebra is a complemented distributive lattice"
  ]
 },
 "NOTE-DM-14": {
  "noteId": "NOTE-DM-14",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: Graph Theory (MFCS)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Graph theory models pairwise relationships between discrete objects in computer networks, compiler dataflow, routing algorithms, and scheduling. Covers representations, connectivity, Eulerian and Hamiltonian paths, planar graphs, graph colorings, and tree traversal algorithms.",
  "topics": [
   {
    "title": "Graph Terminology & Handshaking Theorem",
    "summary": "A graph G = (V, E) consists of a set of vertices V and edges E. Edges may be directed or undirected.",
    "points": [
     "Degree of a vertex deg(v): Number of edges incident with v (loops count twice).",
     "Isolated vertex: deg(v) = 0; Pendant / leaf vertex: deg(v) = 1.",
     "Complete Graph Kn: Simple undirected graph where every pair of distinct vertices is connected by an edge; has n(n-1)/2 edges.",
     "Bipartite Graph: Vertices can be partitioned into two disjoint sets V1, V2 such that every edge connects V1 to V2 (contains no odd-length cycles)."
    ],
    "formulas": [
     "Handshaking Theorem: ∑ [v ∈ V] deg(v) = 2 |E|",
     "Corollary: In any undirected graph, the number of vertices with odd degree is always even."
    ],
    "example": "If a graph has 5 vertices of degree 4, sum of degrees = 20. By the Handshaking Theorem, 2|E| = 20 ⇒ |E| = 10 edges."
   },
   {
    "title": "Eulerian & Hamiltonian Graphs",
    "summary": "Eulerian paths traverse every edge exactly once; Hamiltonian paths visit every vertex exactly once.",
    "points": [
     "Eulerian Trail: Walks through every edge in E exactly once.",
     "Eulerian Circuit: Closed Eulerian trail starting and ending at the same vertex.",
     "Euler Graph Condition: A connected graph is Eulerian if and only if every vertex has an even degree.",
     "Hamiltonian Cycle: A simple cycle that visits every vertex in V exactly once and returns to the start.",
     "Dirac's Theorem: If a simple graph has n ≥ 3 vertices and deg(v) ≥ n/2 for every vertex, then G is Hamiltonian."
    ],
    "formulas": [
     "Eulerian circuit exists iff graph is connected and all vertices have even degree.",
     "Eulerian trail exists iff graph is connected and exactly two vertices have odd degree (start and end)."
    ],
    "example": "Konigsberg bridge problem: The multigraph had 4 vertices with degrees 3, 3, 3, and 5 (all odd). Since not all degrees were even, no Eulerian tour existed."
   },
   {
    "title": "Planar Graphs & Graph Coloring",
    "summary": "A graph is Planar if it can be drawn in a plane without any edges intersecting. Graph coloring assigns colors to vertices such that adjacent vertices have distinct colors.",
    "points": [
     "Regions (Faces): A planar drawing divides the plane into bounded faces and one unbounded face.",
     "Kuratowski's Theorem: A graph is planar iff it does not contain a subgraph homeomorphic to K5 or K3,3.",
     "Chromatic Number χ(G): Minimum colors required to properly color vertices.",
     "Four Color Theorem: Every planar graph can be colored using at most 4 colors (χ(G) ≤ 4)."
    ],
    "formulas": [
     "Euler's Formula for Planar Graphs: V - E + R = 2",
     "For connected simple planar graphs with V ≥ 3: E ≤ 3V - 6",
     "If triangle-free planar graph: E ≤ 2V - 4"
    ],
    "example": "A connected planar graph has 6 vertices and 7 edges: by Euler's formula, R = 2 - V + E = 2 - 6 + 7 = 3 regions."
   },
   {
    "title": "Trees & Graph Traversal (BFS & DFS)",
    "summary": "A Tree is a connected undirected graph with no cycles. Spanning trees connect all vertices with minimal edges.",
    "points": [
     "Tree Properties: A tree with n vertices has exactly n - 1 edges; unique path between any two vertices.",
     "Spanning Tree: A subgraph of G that is a tree containing every vertex of G.",
     "Breadth-First Search (BFS): Explores neighbors level by level using a FIFO Queue; finds shortest path in unweighted graphs.",
     "Depth-First Search (DFS): Explores deep along each branch before backtracking using a LIFO Stack or recursion."
    ],
    "formulas": [
     "Edges in any tree with n vertices: |E| = n - 1",
     "Time complexity of BFS and DFS: O(V + E) with adjacency lists"
    ],
    "example": "A tree with 15 vertices must have exactly 15 - 1 = 14 edges."
   }
  ],
  "mustKnow": [
   "Handshaking theorem: ∑ deg(v) = 2 |E|",
   "Eulerian graph criterion: connected and all vertices have even degree",
   "Euler's planar formula: V - E + R = 2",
   "Planar graph edge bound: E ≤ 3V - 6",
   "Tree edge property: exactly n - 1 edges for n vertices"
  ]
 },
 "NOTE-DM-15": {
  "noteId": "NOTE-DM-15",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: MFCS Graphs",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Graph theory models pairwise relationships between discrete objects in computer networks, compiler dataflow, routing algorithms, and scheduling. Covers representations, connectivity, Eulerian and Hamiltonian paths, planar graphs, graph colorings, and tree traversal algorithms.",
  "topics": [
   {
    "title": "Graph Terminology & Handshaking Theorem",
    "summary": "A graph G = (V, E) consists of a set of vertices V and edges E. Edges may be directed or undirected.",
    "points": [
     "Degree of a vertex deg(v): Number of edges incident with v (loops count twice).",
     "Isolated vertex: deg(v) = 0; Pendant / leaf vertex: deg(v) = 1.",
     "Complete Graph Kn: Simple undirected graph where every pair of distinct vertices is connected by an edge; has n(n-1)/2 edges.",
     "Bipartite Graph: Vertices can be partitioned into two disjoint sets V1, V2 such that every edge connects V1 to V2 (contains no odd-length cycles)."
    ],
    "formulas": [
     "Handshaking Theorem: ∑ [v ∈ V] deg(v) = 2 |E|",
     "Corollary: In any undirected graph, the number of vertices with odd degree is always even."
    ],
    "example": "If a graph has 5 vertices of degree 4, sum of degrees = 20. By the Handshaking Theorem, 2|E| = 20 ⇒ |E| = 10 edges."
   },
   {
    "title": "Eulerian & Hamiltonian Graphs",
    "summary": "Eulerian paths traverse every edge exactly once; Hamiltonian paths visit every vertex exactly once.",
    "points": [
     "Eulerian Trail: Walks through every edge in E exactly once.",
     "Eulerian Circuit: Closed Eulerian trail starting and ending at the same vertex.",
     "Euler Graph Condition: A connected graph is Eulerian if and only if every vertex has an even degree.",
     "Hamiltonian Cycle: A simple cycle that visits every vertex in V exactly once and returns to the start.",
     "Dirac's Theorem: If a simple graph has n ≥ 3 vertices and deg(v) ≥ n/2 for every vertex, then G is Hamiltonian."
    ],
    "formulas": [
     "Eulerian circuit exists iff graph is connected and all vertices have even degree.",
     "Eulerian trail exists iff graph is connected and exactly two vertices have odd degree (start and end)."
    ],
    "example": "Konigsberg bridge problem: The multigraph had 4 vertices with degrees 3, 3, 3, and 5 (all odd). Since not all degrees were even, no Eulerian tour existed."
   },
   {
    "title": "Planar Graphs & Graph Coloring",
    "summary": "A graph is Planar if it can be drawn in a plane without any edges intersecting. Graph coloring assigns colors to vertices such that adjacent vertices have distinct colors.",
    "points": [
     "Regions (Faces): A planar drawing divides the plane into bounded faces and one unbounded face.",
     "Kuratowski's Theorem: A graph is planar iff it does not contain a subgraph homeomorphic to K5 or K3,3.",
     "Chromatic Number χ(G): Minimum colors required to properly color vertices.",
     "Four Color Theorem: Every planar graph can be colored using at most 4 colors (χ(G) ≤ 4)."
    ],
    "formulas": [
     "Euler's Formula for Planar Graphs: V - E + R = 2",
     "For connected simple planar graphs with V ≥ 3: E ≤ 3V - 6",
     "If triangle-free planar graph: E ≤ 2V - 4"
    ],
    "example": "A connected planar graph has 6 vertices and 7 edges: by Euler's formula, R = 2 - V + E = 2 - 6 + 7 = 3 regions."
   },
   {
    "title": "Trees & Graph Traversal (BFS & DFS)",
    "summary": "A Tree is a connected undirected graph with no cycles. Spanning trees connect all vertices with minimal edges.",
    "points": [
     "Tree Properties: A tree with n vertices has exactly n - 1 edges; unique path between any two vertices.",
     "Spanning Tree: A subgraph of G that is a tree containing every vertex of G.",
     "Breadth-First Search (BFS): Explores neighbors level by level using a FIFO Queue; finds shortest path in unweighted graphs.",
     "Depth-First Search (DFS): Explores deep along each branch before backtracking using a LIFO Stack or recursion."
    ],
    "formulas": [
     "Edges in any tree with n vertices: |E| = n - 1",
     "Time complexity of BFS and DFS: O(V + E) with adjacency lists"
    ],
    "example": "A tree with 15 vertices must have exactly 15 - 1 = 14 edges."
   }
  ],
  "mustKnow": [
   "Handshaking theorem: ∑ deg(v) = 2 |E|",
   "Eulerian graph criterion: connected and all vertices have even degree",
   "Euler's planar formula: V - E + R = 2",
   "Planar graph edge bound: E ≤ 3V - 6",
   "Tree edge property: exactly n - 1 edges for n vertices"
  ]
 },
 "NOTE-DM-16": {
  "noteId": "NOTE-DM-16",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Combinations & Counting",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinatorics studies techniques of discrete counting, arrangements, selections, and solving recursive algorithms. Covers permutations, combinations, pigeonhole principle, binomial coefficients, recurrence relations, and generating functions.",
  "topics": [
   {
    "title": "Fundamental Counting Principles & Permutations",
    "summary": "Rule of sum applies to mutually exclusive choices; rule of product applies to sequential independent choices. Permutation measures ordered arrangements.",
    "points": [
     "Rule of Sum: If task 1 can be done in m ways and task 2 in n ways (disjoint), either can be done in m + n ways.",
     "Rule of Product: If task 1 can be done in m ways and task 2 in n ways, both can be done in m × n ways.",
     "Permutation P(n, r): Number of ways to arrange r elements chosen from n distinct elements.",
     "Permutations with Repetitions: Number of arrangements of n objects where n1 are alike, n2 are alike is n! / (n1! n2! ... nk!)."
    ],
    "formulas": [
     "P(n, r) = n! / (n - r)!",
     "Circular Permutation of n distinct objects: (n - 1)!"
    ],
    "example": "Arrangements of the word \"MISSISSIPPI\" (total 11 letters: 1 M, 4 I, 4 S, 2 P) = 11! / (1! 4! 4! 2!) = 34,650."
   },
   {
    "title": "Combinations & Binomial Coefficients",
    "summary": "Combination C(n, r) represents unordered selections of r items from a collection of n distinct items.",
    "points": [
     "Selection without replacement: C(n, r) = n! / (r!(n - r)!).",
     "Selection with replacement: Number of non-negative integer solutions to x1 + x2 + ... + xn = r is C(n + r - 1, r).",
     "Symmetry Property: C(n, r) = C(n, n - r).",
     "Pascal's Identity: C(n, r) = C(n - 1, r - 1) + C(n - 1, r)."
    ],
    "formulas": [
     "Binomial Theorem: (x + y)^n = ∑ [r=0 to n] C(n, r) x^(n-r) y^r",
     "Sum of binomial coefficients: ∑ [r=0 to n] C(n, r) = 2^n"
    ],
    "example": "Number of ways to distribute 10 identical candies among 4 children is C(4 + 10 - 1, 10) = C(13, 10) = 286."
   },
   {
    "title": "Pigeonhole Principle",
    "summary": "If k items are placed into n containers and k > n, then at least one container must contain two or more items.",
    "points": [
     "Basic Form: If n + 1 pigeons are placed in n holes, at least one hole has ≥ 2 pigeons.",
     "Generalized Form: If N objects are placed in k boxes, at least one box contains at least ⌈N / k⌉ objects.",
     "Applications: Guaranteeing duplicate birth months, hash collision analysis, subset sum existence."
    ],
    "formulas": [
     "Minimum objects per box = ⌈N / k⌉"
    ],
    "example": "In a group of 367 people, since there are at most 366 possible birthdays in a leap year, by the Pigeonhole Principle at least 2 people must share a birthday."
   },
   {
    "title": "Recurrence Relations & Generating Functions",
    "summary": "A recurrence relation defines a sequence an in terms of preceding terms. Used extensively to analyze algorithm time complexities.",
    "points": [
     "Linear Homogeneous Recurrence with Constant Coefficients: c0 an + c1 a(n-1) + ... + ck a(n-k) = 0.",
     "Characteristic Equation: Replace an with r^n to find characteristic roots r.",
     "Distinct Real Roots: General solution is an = A r1^n + B r2^n.",
     "Repeated Roots: If root r1 repeats with multiplicity 2, solution includes (A + B n) r1^n."
    ],
    "formulas": [
     "Fibonacci Recurrence: F(n) = F(n-1) + F(n-2) with F(0)=0, F(1)=1",
     "Characteristic equation of Fibonacci: r^2 - r - 1 = 0"
    ],
    "example": "Solve an - 5a(n-1) + 6a(n-2) = 0: Characteristic equation r^2 - 5r + 6 = (r - 2)(r - 3) = 0. Roots are r=2, 3. General solution: an = c1(2^n) + c2(3^n)."
   }
  ],
  "mustKnow": [
   "Permutation formula: P(n, r) = n! / (n - r)!",
   "Combination formula: C(n, r) = n! / (r! (n - r)!)",
   "Combinations with repetition: C(n + r - 1, r)",
   "Generalized Pigeonhole: at least ⌈N / k⌉ items in one box",
   "Binomial coefficient sum: ∑ C(n, r) = 2^n"
  ]
 },
 "NOTE-COA-06": {
  "noteId": "NOTE-COA-06",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Unit 4: Computer Arithmetic (PDF)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Focuses on Central Processing Unit (CPU) organization, control unit design (hardwired vs microprogrammed), arithmetic processing algorithms (Booth's algorithm, restoring/non-restoring division), and pipelining.",
  "topics": [
   {
    "title": "CPU General Register Organization & Stack Architecture",
    "summary": "CPUs organize registers using internal buses. Stack-organized processors evaluate expressions using Reverse Polish Notation (RPN).",
    "points": [
     "Control Word: Selects source registers A and B, ALU operation, and destination register D.",
     "Stack Architecture: LIFO memory managed by Stack Pointer (SP); operations pop operands and push result.",
     "Three-address format: ADD R1, R2, R3 (R1 ← R2 + R3).",
     "Two-address format: ADD R1, R2 (R1 ← R1 + R2).",
     "One-address format: ADD X (AC ← AC + M[X], uses accumulator).",
     "Zero-address format: ADD (TOS ← TOS + NOS, uses stack)."
    ],
    "formulas": [
     "Push operation: SP ← SP - 1, M[SP] ← DR",
     "Pop operation: DR ← M[SP], SP ← SP + 1"
    ],
    "example": "Expression (A + B) * (C + D) in zero-address stack: PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL."
   },
   {
    "title": "Addressing Modes",
    "summary": "Specifies the rule for interpreting or modifying the address field of an instruction to locate the operand.",
    "points": [
     "Immediate Mode: Operand is specified directly in instruction.",
     "Direct Mode: Address field points directly to operand memory address.",
     "Indirect Mode: Address field points to memory location that holds the effective address.",
     "Register Mode: Operand resides in a CPU register.",
     "Register Indirect Mode: Register contains memory address of operand.",
     "Relative Addressing: Effective Address = PC + Address field (used in branches).",
     "Indexed Addressing: Effective Address = Index Register (XR) + Address field."
    ],
    "formulas": [
     "Relative EA = PC + Relative Offset",
     "Indexed EA = XR + Base Address"
    ],
    "example": "If PC = 200 and relative branch instruction specifies offset +50, target effective address is 200 + 50 = 250."
   },
   {
    "title": "Booth's Multiplication Algorithm",
    "summary": "Efficient multiplication algorithm for signed 2's complement binary integers. Treats strings of 1s as a single addition and subtraction.",
    "points": [
     "Registers: Multiplicand in B, Multiplier in Q, Accumulator A initialized to 0, Q_(n+1) initialized to 0.",
     "Rule for Q0 and Q_(n+1):",
     "  - 10: A ← A - B (subtract multiplicand)",
     "  - 01: A ← A + B (add multiplicand)",
     "  - 00 or 11: No arithmetic operation (only shift)",
     "Arithmetic Shift Right (ashr) [A, Q, Q_(n+1)] after each cycle; repeat for n cycles."
    ],
    "formulas": [
     "Substrings of 1s: 2^m + 2^(m-1) + ... + 2^k = 2^(m+1) - 2^k"
    ],
    "example": "Multiply (+7) × (-3): Booth recodes multiplier -3 (1101) to perform fewer additions/subtractions."
   },
   {
    "title": "Control Unit: Hardwired vs Microprogrammed",
    "summary": "The control unit orchestrates all processor micro-operations.",
    "points": [
     "Hardwired Control: Implemented using combinational logic gates, decoders, and flip-flops. Very fast execution, but rigid and extremely difficult to modify.",
     "Microprogrammed Control: Control signals stored as microinstructions in Control Memory (ROM). Flexible, easy to update/expand, but slower due to memory access overhead.",
     "Control Address Register (CAR): Holds address of next microinstruction.",
     "Horizontal microcode: Unencoded bits; high speed, wide control words.",
     "Vertical microcode: Encoded control fields; compact words, requires decoders."
    ],
    "formulas": [
     "Address sequencing: Next CAR = CAR + 1, Branch Address, or Mapping from instruction opcode."
    ],
    "example": "RISC processors favor hardwired control for single-cycle execution, whereas CISC processors utilize microprogrammed control."
   }
  ],
  "mustKnow": [
   "Booth's algorithm inspection: 10 implies A ← A - B; 01 implies A ← A + B; 00 and 11 do shift only",
   "Arithmetic shift right preserves sign bit in Booth's multiplication",
   "Hardwired control is faster but rigid; microprogrammed control is flexible but slower",
   "Relative addressing mode calculates EA = PC + Address Offset",
   "Zero-address instructions use stack operations (PUSH/POP)"
  ]
 },
 "NOTE-COA-07": {
  "noteId": "NOTE-COA-07",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Unit 4: Microprogrammed Control (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Focuses on Central Processing Unit (CPU) organization, control unit design (hardwired vs microprogrammed), arithmetic processing algorithms (Booth's algorithm, restoring/non-restoring division), and pipelining.",
  "topics": [
   {
    "title": "CPU General Register Organization & Stack Architecture",
    "summary": "CPUs organize registers using internal buses. Stack-organized processors evaluate expressions using Reverse Polish Notation (RPN).",
    "points": [
     "Control Word: Selects source registers A and B, ALU operation, and destination register D.",
     "Stack Architecture: LIFO memory managed by Stack Pointer (SP); operations pop operands and push result.",
     "Three-address format: ADD R1, R2, R3 (R1 ← R2 + R3).",
     "Two-address format: ADD R1, R2 (R1 ← R1 + R2).",
     "One-address format: ADD X (AC ← AC + M[X], uses accumulator).",
     "Zero-address format: ADD (TOS ← TOS + NOS, uses stack)."
    ],
    "formulas": [
     "Push operation: SP ← SP - 1, M[SP] ← DR",
     "Pop operation: DR ← M[SP], SP ← SP + 1"
    ],
    "example": "Expression (A + B) * (C + D) in zero-address stack: PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL."
   },
   {
    "title": "Addressing Modes",
    "summary": "Specifies the rule for interpreting or modifying the address field of an instruction to locate the operand.",
    "points": [
     "Immediate Mode: Operand is specified directly in instruction.",
     "Direct Mode: Address field points directly to operand memory address.",
     "Indirect Mode: Address field points to memory location that holds the effective address.",
     "Register Mode: Operand resides in a CPU register.",
     "Register Indirect Mode: Register contains memory address of operand.",
     "Relative Addressing: Effective Address = PC + Address field (used in branches).",
     "Indexed Addressing: Effective Address = Index Register (XR) + Address field."
    ],
    "formulas": [
     "Relative EA = PC + Relative Offset",
     "Indexed EA = XR + Base Address"
    ],
    "example": "If PC = 200 and relative branch instruction specifies offset +50, target effective address is 200 + 50 = 250."
   },
   {
    "title": "Booth's Multiplication Algorithm",
    "summary": "Efficient multiplication algorithm for signed 2's complement binary integers. Treats strings of 1s as a single addition and subtraction.",
    "points": [
     "Registers: Multiplicand in B, Multiplier in Q, Accumulator A initialized to 0, Q_(n+1) initialized to 0.",
     "Rule for Q0 and Q_(n+1):",
     "  - 10: A ← A - B (subtract multiplicand)",
     "  - 01: A ← A + B (add multiplicand)",
     "  - 00 or 11: No arithmetic operation (only shift)",
     "Arithmetic Shift Right (ashr) [A, Q, Q_(n+1)] after each cycle; repeat for n cycles."
    ],
    "formulas": [
     "Substrings of 1s: 2^m + 2^(m-1) + ... + 2^k = 2^(m+1) - 2^k"
    ],
    "example": "Multiply (+7) × (-3): Booth recodes multiplier -3 (1101) to perform fewer additions/subtractions."
   },
   {
    "title": "Control Unit: Hardwired vs Microprogrammed",
    "summary": "The control unit orchestrates all processor micro-operations.",
    "points": [
     "Hardwired Control: Implemented using combinational logic gates, decoders, and flip-flops. Very fast execution, but rigid and extremely difficult to modify.",
     "Microprogrammed Control: Control signals stored as microinstructions in Control Memory (ROM). Flexible, easy to update/expand, but slower due to memory access overhead.",
     "Control Address Register (CAR): Holds address of next microinstruction.",
     "Horizontal microcode: Unencoded bits; high speed, wide control words.",
     "Vertical microcode: Encoded control fields; compact words, requires decoders."
    ],
    "formulas": [
     "Address sequencing: Next CAR = CAR + 1, Branch Address, or Mapping from instruction opcode."
    ],
    "example": "RISC processors favor hardwired control for single-cycle execution, whereas CISC processors utilize microprogrammed control."
   }
  ],
  "mustKnow": [
   "Booth's algorithm inspection: 10 implies A ← A - B; 01 implies A ← A + B; 00 and 11 do shift only",
   "Arithmetic shift right preserves sign bit in Booth's multiplication",
   "Hardwired control is faster but rigid; microprogrammed control is flexible but slower",
   "Relative addressing mode calculates EA = PC + Address Offset",
   "Zero-address instructions use stack operations (PUSH/POP)"
  ]
 },
 "NOTE-COA-08": {
  "noteId": "NOTE-COA-08",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: Memory Organization (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Explores the hierarchical memory structure (registers, cache, RAM, secondary storage) and Input/Output interfacing methodologies (programmed, interrupt-driven, DMA).",
  "topics": [
   {
    "title": "Memory Hierarchy & Cache Memory",
    "summary": "Memory hierarchy balances access latency, capacity, and cost per bit. Cache memory is high-speed SRAM exploiting locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed items are likely to be accessed again soon (e.g. loops).",
     "Spatial Locality: Items located close to recently accessed items are likely to be accessed soon (e.g. arrays).",
     "Hit Ratio: Fraction of memory accesses satisfied directly by cache: h = Hits / Total Accesses.",
     "Average Memory Access Time (AMAT): AMAT = Hit Time + (Miss Rate × Miss Penalty).",
     "Write Policies: Write-Through (updates cache and RAM simultaneously; safe but slower) vs Write-Back (updates RAM only when block is evicted; faster)."
    ],
    "formulas": [
     "Hit Ratio h = Nc / (Nc + Nm)",
     "Average Access Time: T_avg = h · Tc + (1 - h) · Tm"
    ],
    "example": "If cache access time is 2 ns, main memory access time is 50 ns, and hit ratio is 0.95: T_avg = 0.95(2) + 0.05(50) = 1.9 + 2.5 = 4.4 ns."
   },
   {
    "title": "Cache Mapping Techniques",
    "summary": "Translates CPU main memory addresses into cache block locations.",
    "points": [
     "Direct Mapping: Each main memory block maps to exactly one cache line: line = (block address) mod (number of cache lines). Simplest hardware, but prone to conflict misses.",
     "Associative Mapping: Any memory block can be stored in any cache line. Eliminates conflict misses, requires expensive parallel content-addressable memory (CAM).",
     "Set-Associative Mapping: Compromise; cache is divided into sets of k lines (k-way set associative). Block maps to a specific set: set = (block address) mod (number of sets)."
    ],
    "formulas": [
     "Direct mapped address bits: Tag | Line Index | Word Offset",
     "Set-associative address bits: Tag | Set Index | Word Offset"
    ],
    "example": "In direct mapping with 64 cache lines and 16-word blocks: 4 bits for word offset, 6 bits for line index, remaining bits for tag."
   },
   {
    "title": "Virtual Memory & Address Translation",
    "summary": "Gives programmers the illusion of a massive contiguous memory space larger than physical RAM by swapping pages between RAM and hard disk.",
    "points": [
     "Virtual Address (Logical): Generated by CPU, partitioned into Virtual Page Number (VPN) and Page Offset.",
     "Physical Address: Actual DRAM address, partitioned into Physical Frame Number (PFN) and Offset.",
     "Page Table: Maps VPN to PFN; holds valid/invalid bit to signify if page is currently in physical RAM.",
     "Page Fault: Hardware interrupt triggered when CPU references a page whose valid bit is 0; OS fetches missing page from disk.",
     "Translation Lookaside Buffer (TLB): High-speed cache for page table entries."
    ],
    "formulas": [
     "Page Offset remains invariant between virtual address and physical address."
    ],
    "example": "Virtual address with 4 KB page size has a 12-bit offset (2^12 = 4096 bytes)."
   },
   {
    "title": "I/O Organization & Modes of Transfer",
    "summary": "Mechanisms for transferring data between peripheral devices and CPU/memory.",
    "points": [
     "Programmed I/O: CPU enters a busy-wait polling loop checking I/O device status register; wastes CPU cycles.",
     "Interrupt-Driven I/O: CPU continues execution; I/O interface issues hardware interrupt when ready; CPU services interrupt via ISR.",
     "Direct Memory Access (DMA): Specialized DMA controller transfers entire blocks of data directly between I/O and RAM without CPU intervention.",
     "DMA Transfer Modes: Burst transfer (entire block transferred while CPU halted) vs Cycle Stealing (DMA steals 1 memory bus cycle at a time)."
    ],
    "formulas": [
     "Daisy-Chain Priority: Hardware priority resolution where device nearest CPU on the grant line has highest priority."
    ],
    "example": "High-speed disk drives use DMA to transfer multi-kilobyte sectors directly into RAM, interrupting the CPU only once when the transfer is complete."
   }
  ],
  "mustKnow": [
   "Average Memory Access Time: T_avg = h · Tc + (1 - h) · Tm",
   "Locality of reference principles: Temporal (time) and Spatial (space)",
   "Cache mappings: Direct (tag+line+word), Associative (tag+word), Set-Associative (tag+set+word)",
   "DMA bypasses the CPU for bulk high-speed data transfer",
   "Page fault triggers an OS interrupt to bring missing page from disk to RAM"
  ]
 },
 "NOTE-COA-09": {
  "noteId": "NOTE-COA-09",
  "subjectId": "COA",
  "chapter": 2,
  "title": "COA Unit 2: Combinational Circuits",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinational circuits produce outputs that depend strictly on present inputs, whereas sequential circuits utilize storage elements (flip-flops) where outputs depend on present inputs and past state history.",
  "topics": [
   {
    "title": "Karnaugh Maps (K-Maps) & Minimization",
    "summary": "K-maps provide a visual graphic method for minimizing Boolean expressions into minimal SOP or POS forms, preventing algebraic errors.",
    "points": [
     "Grouping Rules: Groups must be powers of 2 (1, 2, 4, 8, 16 cells); cells are arranged in Gray code order.",
     "Adjacent cells differ by exactly one variable.",
     "Don't Care conditions (X): Can be treated as 1 to enlarge groups for simpler terms, or 0 if not helpful.",
     "Minimal SOP: Sum of all Essential Prime Implicants."
    ],
    "formulas": [
     "Cell coordinates use Gray code: 00, 01, 11, 10"
    ],
    "example": "In a 4-variable K-map, grouping 4 adjacent corner cells eliminates 2 variables, yielding a 2-literal product term."
   },
   {
    "title": "Combinational Circuits: Adders & Subtractors",
    "summary": "Adders form the core of arithmetic logic units (ALUs).",
    "points": [
     "Half Adder: Adds two 1-bit inputs A and B; outputs Sum S = A ⊕ B and Carry C = AB.",
     "Full Adder: Adds three 1-bit inputs A, B, and Cin; implemented using two Half Adders and an OR gate.",
     "Full Subtractor: Computes Difference D = A ⊕ B ⊕ Bin and Borrow Bout = A'B + (A ⊕ B)'Bin.",
     "Carry Lookahead Adder (CLA): Eliminates ripple carry propagation delay by computing generate (Gi = AiBi) and propagate (Pi = Ai ⊕ Bi) signals in parallel."
    ],
    "formulas": [
     "Full Adder Sum: S = A ⊕ B ⊕ Cin",
     "Full Adder Carry: Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin",
     "Lookahead Carry: Ci+1 = Gi + Pi Ci"
    ],
    "example": "Half Adder adding A=1, B=1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (result is binary 10)."
   },
   {
    "title": "Multiplexers, Decoders & Encoders",
    "summary": "Standard MSI combinational logic building blocks for routing and addressing.",
    "points": [
     "Multiplexer (MUX): Data selector; routes one of 2^n data input lines to a single output line using n selection lines.",
     "Decoder: Converts an n-bit binary code into maximum 2^n unique output lines (e.g. 3-to-8 decoder).",
     "Priority Encoder: Produces binary code corresponding to the highest-priority active input line.",
     "Any Boolean function with n variables can be implemented directly using a 2^(n-1)-to-1 MUX."
    ],
    "formulas": [
     "MUX relation: 2^n data inputs require n select lines.",
     "Decoder relation: n inputs activate 1 of 2^n outputs."
    ],
    "example": "A 4-to-1 MUX has 4 data inputs (I0, I1, I2, I3), 2 select lines (S1, S0), and output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3."
   },
   {
    "title": "Latches, Flip-Flops & Sequential Circuits",
    "summary": "Flip-flops are bistable memory elements that store 1 bit of information and change state on clock signal edges.",
    "points": [
     "SR Flip-Flop: Set and Reset; condition S = R = 1 is invalid/indeterminate.",
     "JK Flip-Flop: Eliminates SR invalid condition; J=1, K=1 causes output to toggle.",
     "D Flip-Flop: Data flip-flop; output follows input D on active clock edge (Q_next = D).",
     "T Flip-Flop: Toggle flip-flop; output toggles when T=1, holds state when T=0.",
     "Race-around condition in JK: Occurs in level-triggered JK when clock pulse width tp > propagation delay; solved using Master-Slave or edge-triggering."
    ],
    "formulas": [
     "JK Characteristic Equation: Q_next = J Q' + K' Q",
     "D Characteristic Equation: Q_next = D",
     "T Characteristic Equation: Q_next = T ⊕ Q"
    ],
    "example": "In a T flip-flop, if present state Q=0 and T=1, on clock edge Q_next = 1 ⊕ 0 = 1."
   }
  ],
  "mustKnow": [
   "Full adder equations: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B)",
   "Carry Lookahead eliminates ripple delay using Gi = AiBi and Pi = Ai ⊕ Bi",
   "Race-around condition occurs when level-triggered JK flip-flop has tp > tpd",
   "Master-Slave flip-flop or edge-triggering solves race-around condition",
   "A 2^n to 1 MUX requires n select lines"
  ]
 },
 "NOTE-COA-10": {
  "noteId": "NOTE-COA-10",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: I/O Organization (PPT)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Explores the hierarchical memory structure (registers, cache, RAM, secondary storage) and Input/Output interfacing methodologies (programmed, interrupt-driven, DMA).",
  "topics": [
   {
    "title": "Memory Hierarchy & Cache Memory",
    "summary": "Memory hierarchy balances access latency, capacity, and cost per bit. Cache memory is high-speed SRAM exploiting locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed items are likely to be accessed again soon (e.g. loops).",
     "Spatial Locality: Items located close to recently accessed items are likely to be accessed soon (e.g. arrays).",
     "Hit Ratio: Fraction of memory accesses satisfied directly by cache: h = Hits / Total Accesses.",
     "Average Memory Access Time (AMAT): AMAT = Hit Time + (Miss Rate × Miss Penalty).",
     "Write Policies: Write-Through (updates cache and RAM simultaneously; safe but slower) vs Write-Back (updates RAM only when block is evicted; faster)."
    ],
    "formulas": [
     "Hit Ratio h = Nc / (Nc + Nm)",
     "Average Access Time: T_avg = h · Tc + (1 - h) · Tm"
    ],
    "example": "If cache access time is 2 ns, main memory access time is 50 ns, and hit ratio is 0.95: T_avg = 0.95(2) + 0.05(50) = 1.9 + 2.5 = 4.4 ns."
   },
   {
    "title": "Cache Mapping Techniques",
    "summary": "Translates CPU main memory addresses into cache block locations.",
    "points": [
     "Direct Mapping: Each main memory block maps to exactly one cache line: line = (block address) mod (number of cache lines). Simplest hardware, but prone to conflict misses.",
     "Associative Mapping: Any memory block can be stored in any cache line. Eliminates conflict misses, requires expensive parallel content-addressable memory (CAM).",
     "Set-Associative Mapping: Compromise; cache is divided into sets of k lines (k-way set associative). Block maps to a specific set: set = (block address) mod (number of sets)."
    ],
    "formulas": [
     "Direct mapped address bits: Tag | Line Index | Word Offset",
     "Set-associative address bits: Tag | Set Index | Word Offset"
    ],
    "example": "In direct mapping with 64 cache lines and 16-word blocks: 4 bits for word offset, 6 bits for line index, remaining bits for tag."
   },
   {
    "title": "Virtual Memory & Address Translation",
    "summary": "Gives programmers the illusion of a massive contiguous memory space larger than physical RAM by swapping pages between RAM and hard disk.",
    "points": [
     "Virtual Address (Logical): Generated by CPU, partitioned into Virtual Page Number (VPN) and Page Offset.",
     "Physical Address: Actual DRAM address, partitioned into Physical Frame Number (PFN) and Offset.",
     "Page Table: Maps VPN to PFN; holds valid/invalid bit to signify if page is currently in physical RAM.",
     "Page Fault: Hardware interrupt triggered when CPU references a page whose valid bit is 0; OS fetches missing page from disk.",
     "Translation Lookaside Buffer (TLB): High-speed cache for page table entries."
    ],
    "formulas": [
     "Page Offset remains invariant between virtual address and physical address."
    ],
    "example": "Virtual address with 4 KB page size has a 12-bit offset (2^12 = 4096 bytes)."
   },
   {
    "title": "I/O Organization & Modes of Transfer",
    "summary": "Mechanisms for transferring data between peripheral devices and CPU/memory.",
    "points": [
     "Programmed I/O: CPU enters a busy-wait polling loop checking I/O device status register; wastes CPU cycles.",
     "Interrupt-Driven I/O: CPU continues execution; I/O interface issues hardware interrupt when ready; CPU services interrupt via ISR.",
     "Direct Memory Access (DMA): Specialized DMA controller transfers entire blocks of data directly between I/O and RAM without CPU intervention.",
     "DMA Transfer Modes: Burst transfer (entire block transferred while CPU halted) vs Cycle Stealing (DMA steals 1 memory bus cycle at a time)."
    ],
    "formulas": [
     "Daisy-Chain Priority: Hardware priority resolution where device nearest CPU on the grant line has highest priority."
    ],
    "example": "High-speed disk drives use DMA to transfer multi-kilobyte sectors directly into RAM, interrupting the CPU only once when the transfer is complete."
   }
  ],
  "mustKnow": [
   "Average Memory Access Time: T_avg = h · Tc + (1 - h) · Tm",
   "Locality of reference principles: Temporal (time) and Spatial (space)",
   "Cache mappings: Direct (tag+line+word), Associative (tag+word), Set-Associative (tag+set+word)",
   "DMA bypasses the CPU for bulk high-speed data transfer",
   "Page fault triggers an OS interrupt to bring missing page from disk to RAM"
  ]
 },
 "NOTE-COA-11": {
  "noteId": "NOTE-COA-11",
  "subjectId": "COA",
  "chapter": 2,
  "title": "COA Unit 2: K-Maps, SOP & POS",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinational circuits produce outputs that depend strictly on present inputs, whereas sequential circuits utilize storage elements (flip-flops) where outputs depend on present inputs and past state history.",
  "topics": [
   {
    "title": "Karnaugh Maps (K-Maps) & Minimization",
    "summary": "K-maps provide a visual graphic method for minimizing Boolean expressions into minimal SOP or POS forms, preventing algebraic errors.",
    "points": [
     "Grouping Rules: Groups must be powers of 2 (1, 2, 4, 8, 16 cells); cells are arranged in Gray code order.",
     "Adjacent cells differ by exactly one variable.",
     "Don't Care conditions (X): Can be treated as 1 to enlarge groups for simpler terms, or 0 if not helpful.",
     "Minimal SOP: Sum of all Essential Prime Implicants."
    ],
    "formulas": [
     "Cell coordinates use Gray code: 00, 01, 11, 10"
    ],
    "example": "In a 4-variable K-map, grouping 4 adjacent corner cells eliminates 2 variables, yielding a 2-literal product term."
   },
   {
    "title": "Combinational Circuits: Adders & Subtractors",
    "summary": "Adders form the core of arithmetic logic units (ALUs).",
    "points": [
     "Half Adder: Adds two 1-bit inputs A and B; outputs Sum S = A ⊕ B and Carry C = AB.",
     "Full Adder: Adds three 1-bit inputs A, B, and Cin; implemented using two Half Adders and an OR gate.",
     "Full Subtractor: Computes Difference D = A ⊕ B ⊕ Bin and Borrow Bout = A'B + (A ⊕ B)'Bin.",
     "Carry Lookahead Adder (CLA): Eliminates ripple carry propagation delay by computing generate (Gi = AiBi) and propagate (Pi = Ai ⊕ Bi) signals in parallel."
    ],
    "formulas": [
     "Full Adder Sum: S = A ⊕ B ⊕ Cin",
     "Full Adder Carry: Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin",
     "Lookahead Carry: Ci+1 = Gi + Pi Ci"
    ],
    "example": "Half Adder adding A=1, B=1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (result is binary 10)."
   },
   {
    "title": "Multiplexers, Decoders & Encoders",
    "summary": "Standard MSI combinational logic building blocks for routing and addressing.",
    "points": [
     "Multiplexer (MUX): Data selector; routes one of 2^n data input lines to a single output line using n selection lines.",
     "Decoder: Converts an n-bit binary code into maximum 2^n unique output lines (e.g. 3-to-8 decoder).",
     "Priority Encoder: Produces binary code corresponding to the highest-priority active input line.",
     "Any Boolean function with n variables can be implemented directly using a 2^(n-1)-to-1 MUX."
    ],
    "formulas": [
     "MUX relation: 2^n data inputs require n select lines.",
     "Decoder relation: n inputs activate 1 of 2^n outputs."
    ],
    "example": "A 4-to-1 MUX has 4 data inputs (I0, I1, I2, I3), 2 select lines (S1, S0), and output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3."
   },
   {
    "title": "Latches, Flip-Flops & Sequential Circuits",
    "summary": "Flip-flops are bistable memory elements that store 1 bit of information and change state on clock signal edges.",
    "points": [
     "SR Flip-Flop: Set and Reset; condition S = R = 1 is invalid/indeterminate.",
     "JK Flip-Flop: Eliminates SR invalid condition; J=1, K=1 causes output to toggle.",
     "D Flip-Flop: Data flip-flop; output follows input D on active clock edge (Q_next = D).",
     "T Flip-Flop: Toggle flip-flop; output toggles when T=1, holds state when T=0.",
     "Race-around condition in JK: Occurs in level-triggered JK when clock pulse width tp > propagation delay; solved using Master-Slave or edge-triggering."
    ],
    "formulas": [
     "JK Characteristic Equation: Q_next = J Q' + K' Q",
     "D Characteristic Equation: Q_next = D",
     "T Characteristic Equation: Q_next = T ⊕ Q"
    ],
    "example": "In a T flip-flop, if present state Q=0 and T=1, on clock edge Q_next = 1 ⊕ 0 = 1."
   }
  ],
  "mustKnow": [
   "Full adder equations: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B)",
   "Carry Lookahead eliminates ripple delay using Gi = AiBi and Pi = Ai ⊕ Bi",
   "Race-around condition occurs when level-triggered JK flip-flop has tp > tpd",
   "Master-Slave flip-flop or edge-triggering solves race-around condition",
   "A 2^n to 1 MUX requires n select lines"
  ]
 },
 "NOTE-COA-12": {
  "noteId": "NOTE-COA-12",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: Memory Organization Notes",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Explores the hierarchical memory structure (registers, cache, RAM, secondary storage) and Input/Output interfacing methodologies (programmed, interrupt-driven, DMA).",
  "topics": [
   {
    "title": "Memory Hierarchy & Cache Memory",
    "summary": "Memory hierarchy balances access latency, capacity, and cost per bit. Cache memory is high-speed SRAM exploiting locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed items are likely to be accessed again soon (e.g. loops).",
     "Spatial Locality: Items located close to recently accessed items are likely to be accessed soon (e.g. arrays).",
     "Hit Ratio: Fraction of memory accesses satisfied directly by cache: h = Hits / Total Accesses.",
     "Average Memory Access Time (AMAT): AMAT = Hit Time + (Miss Rate × Miss Penalty).",
     "Write Policies: Write-Through (updates cache and RAM simultaneously; safe but slower) vs Write-Back (updates RAM only when block is evicted; faster)."
    ],
    "formulas": [
     "Hit Ratio h = Nc / (Nc + Nm)",
     "Average Access Time: T_avg = h · Tc + (1 - h) · Tm"
    ],
    "example": "If cache access time is 2 ns, main memory access time is 50 ns, and hit ratio is 0.95: T_avg = 0.95(2) + 0.05(50) = 1.9 + 2.5 = 4.4 ns."
   },
   {
    "title": "Cache Mapping Techniques",
    "summary": "Translates CPU main memory addresses into cache block locations.",
    "points": [
     "Direct Mapping: Each main memory block maps to exactly one cache line: line = (block address) mod (number of cache lines). Simplest hardware, but prone to conflict misses.",
     "Associative Mapping: Any memory block can be stored in any cache line. Eliminates conflict misses, requires expensive parallel content-addressable memory (CAM).",
     "Set-Associative Mapping: Compromise; cache is divided into sets of k lines (k-way set associative). Block maps to a specific set: set = (block address) mod (number of sets)."
    ],
    "formulas": [
     "Direct mapped address bits: Tag | Line Index | Word Offset",
     "Set-associative address bits: Tag | Set Index | Word Offset"
    ],
    "example": "In direct mapping with 64 cache lines and 16-word blocks: 4 bits for word offset, 6 bits for line index, remaining bits for tag."
   },
   {
    "title": "Virtual Memory & Address Translation",
    "summary": "Gives programmers the illusion of a massive contiguous memory space larger than physical RAM by swapping pages between RAM and hard disk.",
    "points": [
     "Virtual Address (Logical): Generated by CPU, partitioned into Virtual Page Number (VPN) and Page Offset.",
     "Physical Address: Actual DRAM address, partitioned into Physical Frame Number (PFN) and Offset.",
     "Page Table: Maps VPN to PFN; holds valid/invalid bit to signify if page is currently in physical RAM.",
     "Page Fault: Hardware interrupt triggered when CPU references a page whose valid bit is 0; OS fetches missing page from disk.",
     "Translation Lookaside Buffer (TLB): High-speed cache for page table entries."
    ],
    "formulas": [
     "Page Offset remains invariant between virtual address and physical address."
    ],
    "example": "Virtual address with 4 KB page size has a 12-bit offset (2^12 = 4096 bytes)."
   },
   {
    "title": "I/O Organization & Modes of Transfer",
    "summary": "Mechanisms for transferring data between peripheral devices and CPU/memory.",
    "points": [
     "Programmed I/O: CPU enters a busy-wait polling loop checking I/O device status register; wastes CPU cycles.",
     "Interrupt-Driven I/O: CPU continues execution; I/O interface issues hardware interrupt when ready; CPU services interrupt via ISR.",
     "Direct Memory Access (DMA): Specialized DMA controller transfers entire blocks of data directly between I/O and RAM without CPU intervention.",
     "DMA Transfer Modes: Burst transfer (entire block transferred while CPU halted) vs Cycle Stealing (DMA steals 1 memory bus cycle at a time)."
    ],
    "formulas": [
     "Daisy-Chain Priority: Hardware priority resolution where device nearest CPU on the grant line has highest priority."
    ],
    "example": "High-speed disk drives use DMA to transfer multi-kilobyte sectors directly into RAM, interrupting the CPU only once when the transfer is complete."
   }
  ],
  "mustKnow": [
   "Average Memory Access Time: T_avg = h · Tc + (1 - h) · Tm",
   "Locality of reference principles: Temporal (time) and Spatial (space)",
   "Cache mappings: Direct (tag+line+word), Associative (tag+word), Set-Associative (tag+set+word)",
   "DMA bypasses the CPU for bulk high-speed data transfer",
   "Page fault triggers an OS interrupt to bring missing page from disk to RAM"
  ]
 },
 "NOTE-COA-13": {
  "noteId": "NOTE-COA-13",
  "subjectId": "COA",
  "chapter": 2,
  "title": "COA Unit 2: Sequential Circuits",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinational circuits produce outputs that depend strictly on present inputs, whereas sequential circuits utilize storage elements (flip-flops) where outputs depend on present inputs and past state history.",
  "topics": [
   {
    "title": "Karnaugh Maps (K-Maps) & Minimization",
    "summary": "K-maps provide a visual graphic method for minimizing Boolean expressions into minimal SOP or POS forms, preventing algebraic errors.",
    "points": [
     "Grouping Rules: Groups must be powers of 2 (1, 2, 4, 8, 16 cells); cells are arranged in Gray code order.",
     "Adjacent cells differ by exactly one variable.",
     "Don't Care conditions (X): Can be treated as 1 to enlarge groups for simpler terms, or 0 if not helpful.",
     "Minimal SOP: Sum of all Essential Prime Implicants."
    ],
    "formulas": [
     "Cell coordinates use Gray code: 00, 01, 11, 10"
    ],
    "example": "In a 4-variable K-map, grouping 4 adjacent corner cells eliminates 2 variables, yielding a 2-literal product term."
   },
   {
    "title": "Combinational Circuits: Adders & Subtractors",
    "summary": "Adders form the core of arithmetic logic units (ALUs).",
    "points": [
     "Half Adder: Adds two 1-bit inputs A and B; outputs Sum S = A ⊕ B and Carry C = AB.",
     "Full Adder: Adds three 1-bit inputs A, B, and Cin; implemented using two Half Adders and an OR gate.",
     "Full Subtractor: Computes Difference D = A ⊕ B ⊕ Bin and Borrow Bout = A'B + (A ⊕ B)'Bin.",
     "Carry Lookahead Adder (CLA): Eliminates ripple carry propagation delay by computing generate (Gi = AiBi) and propagate (Pi = Ai ⊕ Bi) signals in parallel."
    ],
    "formulas": [
     "Full Adder Sum: S = A ⊕ B ⊕ Cin",
     "Full Adder Carry: Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin",
     "Lookahead Carry: Ci+1 = Gi + Pi Ci"
    ],
    "example": "Half Adder adding A=1, B=1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (result is binary 10)."
   },
   {
    "title": "Multiplexers, Decoders & Encoders",
    "summary": "Standard MSI combinational logic building blocks for routing and addressing.",
    "points": [
     "Multiplexer (MUX): Data selector; routes one of 2^n data input lines to a single output line using n selection lines.",
     "Decoder: Converts an n-bit binary code into maximum 2^n unique output lines (e.g. 3-to-8 decoder).",
     "Priority Encoder: Produces binary code corresponding to the highest-priority active input line.",
     "Any Boolean function with n variables can be implemented directly using a 2^(n-1)-to-1 MUX."
    ],
    "formulas": [
     "MUX relation: 2^n data inputs require n select lines.",
     "Decoder relation: n inputs activate 1 of 2^n outputs."
    ],
    "example": "A 4-to-1 MUX has 4 data inputs (I0, I1, I2, I3), 2 select lines (S1, S0), and output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3."
   },
   {
    "title": "Latches, Flip-Flops & Sequential Circuits",
    "summary": "Flip-flops are bistable memory elements that store 1 bit of information and change state on clock signal edges.",
    "points": [
     "SR Flip-Flop: Set and Reset; condition S = R = 1 is invalid/indeterminate.",
     "JK Flip-Flop: Eliminates SR invalid condition; J=1, K=1 causes output to toggle.",
     "D Flip-Flop: Data flip-flop; output follows input D on active clock edge (Q_next = D).",
     "T Flip-Flop: Toggle flip-flop; output toggles when T=1, holds state when T=0.",
     "Race-around condition in JK: Occurs in level-triggered JK when clock pulse width tp > propagation delay; solved using Master-Slave or edge-triggering."
    ],
    "formulas": [
     "JK Characteristic Equation: Q_next = J Q' + K' Q",
     "D Characteristic Equation: Q_next = D",
     "T Characteristic Equation: Q_next = T ⊕ Q"
    ],
    "example": "In a T flip-flop, if present state Q=0 and T=1, on clock edge Q_next = 1 ⊕ 0 = 1."
   }
  ],
  "mustKnow": [
   "Full adder equations: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B)",
   "Carry Lookahead eliminates ripple delay using Gi = AiBi and Pi = Ai ⊕ Bi",
   "Race-around condition occurs when level-triggered JK flip-flop has tp > tpd",
   "Master-Slave flip-flop or edge-triggering solves race-around condition",
   "A 2^n to 1 MUX requires n select lines"
  ]
 },
 "NOTE-COA-14": {
  "noteId": "NOTE-COA-14",
  "subjectId": "COA",
  "chapter": 2,
  "title": "COA Unit 2: Combinational Circuits (U3)",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combinational circuits produce outputs that depend strictly on present inputs, whereas sequential circuits utilize storage elements (flip-flops) where outputs depend on present inputs and past state history.",
  "topics": [
   {
    "title": "Karnaugh Maps (K-Maps) & Minimization",
    "summary": "K-maps provide a visual graphic method for minimizing Boolean expressions into minimal SOP or POS forms, preventing algebraic errors.",
    "points": [
     "Grouping Rules: Groups must be powers of 2 (1, 2, 4, 8, 16 cells); cells are arranged in Gray code order.",
     "Adjacent cells differ by exactly one variable.",
     "Don't Care conditions (X): Can be treated as 1 to enlarge groups for simpler terms, or 0 if not helpful.",
     "Minimal SOP: Sum of all Essential Prime Implicants."
    ],
    "formulas": [
     "Cell coordinates use Gray code: 00, 01, 11, 10"
    ],
    "example": "In a 4-variable K-map, grouping 4 adjacent corner cells eliminates 2 variables, yielding a 2-literal product term."
   },
   {
    "title": "Combinational Circuits: Adders & Subtractors",
    "summary": "Adders form the core of arithmetic logic units (ALUs).",
    "points": [
     "Half Adder: Adds two 1-bit inputs A and B; outputs Sum S = A ⊕ B and Carry C = AB.",
     "Full Adder: Adds three 1-bit inputs A, B, and Cin; implemented using two Half Adders and an OR gate.",
     "Full Subtractor: Computes Difference D = A ⊕ B ⊕ Bin and Borrow Bout = A'B + (A ⊕ B)'Bin.",
     "Carry Lookahead Adder (CLA): Eliminates ripple carry propagation delay by computing generate (Gi = AiBi) and propagate (Pi = Ai ⊕ Bi) signals in parallel."
    ],
    "formulas": [
     "Full Adder Sum: S = A ⊕ B ⊕ Cin",
     "Full Adder Carry: Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin",
     "Lookahead Carry: Ci+1 = Gi + Pi Ci"
    ],
    "example": "Half Adder adding A=1, B=1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (result is binary 10)."
   },
   {
    "title": "Multiplexers, Decoders & Encoders",
    "summary": "Standard MSI combinational logic building blocks for routing and addressing.",
    "points": [
     "Multiplexer (MUX): Data selector; routes one of 2^n data input lines to a single output line using n selection lines.",
     "Decoder: Converts an n-bit binary code into maximum 2^n unique output lines (e.g. 3-to-8 decoder).",
     "Priority Encoder: Produces binary code corresponding to the highest-priority active input line.",
     "Any Boolean function with n variables can be implemented directly using a 2^(n-1)-to-1 MUX."
    ],
    "formulas": [
     "MUX relation: 2^n data inputs require n select lines.",
     "Decoder relation: n inputs activate 1 of 2^n outputs."
    ],
    "example": "A 4-to-1 MUX has 4 data inputs (I0, I1, I2, I3), 2 select lines (S1, S0), and output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3."
   },
   {
    "title": "Latches, Flip-Flops & Sequential Circuits",
    "summary": "Flip-flops are bistable memory elements that store 1 bit of information and change state on clock signal edges.",
    "points": [
     "SR Flip-Flop: Set and Reset; condition S = R = 1 is invalid/indeterminate.",
     "JK Flip-Flop: Eliminates SR invalid condition; J=1, K=1 causes output to toggle.",
     "D Flip-Flop: Data flip-flop; output follows input D on active clock edge (Q_next = D).",
     "T Flip-Flop: Toggle flip-flop; output toggles when T=1, holds state when T=0.",
     "Race-around condition in JK: Occurs in level-triggered JK when clock pulse width tp > propagation delay; solved using Master-Slave or edge-triggering."
    ],
    "formulas": [
     "JK Characteristic Equation: Q_next = J Q' + K' Q",
     "D Characteristic Equation: Q_next = D",
     "T Characteristic Equation: Q_next = T ⊕ Q"
    ],
    "example": "In a T flip-flop, if present state Q=0 and T=1, on clock edge Q_next = 1 ⊕ 0 = 1."
   }
  ],
  "mustKnow": [
   "Full adder equations: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B)",
   "Carry Lookahead eliminates ripple delay using Gi = AiBi and Pi = Ai ⊕ Bi",
   "Race-around condition occurs when level-triggered JK flip-flop has tp > tpd",
   "Master-Slave flip-flop or edge-triggering solves race-around condition",
   "A 2^n to 1 MUX requires n select lines"
  ]
 },
 "NOTE-COA-15": {
  "noteId": "NOTE-COA-15",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Unit 3: Register Transfer & Micro-operations",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Deals with register transfer language (RTL), bus structures, micro-operations, and the basic computer architecture designed by M. Morris Mano.",
  "topics": [
   {
    "title": "Register Transfer Language & Bus System",
    "summary": "Register Transfer Language (RTL) is a symbolic notation describing micro-operations among registers. Common bus architecture connects multiple registers efficiently.",
    "points": [
     "Register notation: R2 ← R1 denotes simultaneous copying of R1 contents into R2.",
     "Conditional transfer: P: R2 ← R1 implies transfer occurs only if control condition P = 1.",
     "Common Bus: Uses multiplexers or three-state bus buffers to share a single data highway among registers.",
     "Tri-state Buffers: Three states: Logic 0, Logic 1, and High-Impedance (open circuit)."
    ],
    "formulas": [
     "Bus selection lines: S2 S1 S0 select which register drives the common bus."
    ],
    "example": "Transfer x' y: R1 ← R2 indicates R2 is transferred to R1 when condition x=0 and y=1."
   },
   {
    "title": "Micro-operations Classification",
    "summary": "Micro-operations are elementary operations executed on data stored in registers within one clock cycle.",
    "points": [
     "Register Transfer: Moves binary data without changing content.",
     "Arithmetic Micro-operations: Add (R3 ← R1 + R2), Subtract (R3 ← R1 + R2' + 1), Increment (R1 ← R1 + 1), Decrement.",
     "Logic Micro-operations: Bitwise operations (AND, OR, XOR, NOT, Clear).",
     "Shift Micro-operations: Logical shift (inserts 0), Circular/Rotate shift (recirculates bits), Arithmetic shift (preserves sign bit)."
    ],
    "formulas": [
     "Subtraction using 2's complement: R1 - R2 is executed as R1 + R2' + 1"
    ],
    "example": "Arithmetic shift right (ashr) on 8-bit signed value 11001000 produces 11100100 (sign bit 1 is duplicated)."
   },
   {
    "title": "Basic Computer Registers & Common Bus Architecture",
    "summary": "The basic Mano computer consists of 8 registers, an ALU, a 4096 × 16 memory unit, and a control unit.",
    "points": [
     "Program Counter (PC, 12 bits): Holds address of next instruction.",
     "Address Register (AR, 12 bits): Holds memory address for read/write.",
     "Instruction Register (IR, 16 bits): Holds currently executing instruction.",
     "Data Register (DR, 16 bits): Holds operand read from memory.",
     "Accumulator (AC, 16 bits): General-purpose processor register.",
     "Temporary Register (TR, 16 bits): Holds temporary scratch data.",
     "INPR (8 bits) & OUTR (8 bits): Input/Output character registers."
    ],
    "formulas": [
     "Instruction Format (16 bits): Bit 15 = I (Addressing Mode: 0=Direct, 1=Indirect), Bits 14-12 = Opcode, Bits 11-0 = Address."
    ],
    "example": "Instruction 0011 0000 0010 0100 (hex 3024): Bit 15=0 (Direct addressing), Opcode=011 (LDA), Address=024."
   },
   {
    "title": "Instruction Cycle & Execution Phases",
    "summary": "The instruction cycle is the sequence of steps executed by the CPU to process an instruction.",
    "points": [
     "Phase 1: Fetch: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1.",
     "Phase 2: Decode: T2: Decodes Opcode (bits 14-12) via 3x8 decoder, AR ← IR(11-0), I ← IR(15).",
     "Phase 3: Read Effective Address: If indirect (I=1 and not memory-reference), T3: AR ← M[AR].",
     "Phase 4: Execute: Executes the instruction in time states T4, T5, T6 and resets sequence counter (SC ← 0)."
    ],
    "formulas": [
     "Direct addressing: Effective Address = Address part of instruction (AR = IR(11-0))",
     "Indirect addressing: Effective Address = M[Address part of instruction] (AR = M[AR])"
    ],
    "example": "Fetch cycle at T0 places PC on common bus, enables LD of AR, copying memory pointer into AR."
   }
  ],
  "mustKnow": [
   "Basic Mano computer registers: PC (12), AR (12), IR (16), DR (16), AC (16), TR (16)",
   "Instruction word: bit 15 is mode I (0=direct, 1=indirect), bits 14-12 opcode, bits 11-0 address",
   "Fetch micro-operations: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1",
   "Arithmetic subtraction micro-operation: R1 + R2' + 1",
   "Arithmetic shift right preserves the sign bit (MSB)"
  ]
 },
 "NOTE-COA-16": {
  "noteId": "NOTE-COA-16",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Unit 3: Basic Computer Organization & Design",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Deals with register transfer language (RTL), bus structures, micro-operations, and the basic computer architecture designed by M. Morris Mano.",
  "topics": [
   {
    "title": "Register Transfer Language & Bus System",
    "summary": "Register Transfer Language (RTL) is a symbolic notation describing micro-operations among registers. Common bus architecture connects multiple registers efficiently.",
    "points": [
     "Register notation: R2 ← R1 denotes simultaneous copying of R1 contents into R2.",
     "Conditional transfer: P: R2 ← R1 implies transfer occurs only if control condition P = 1.",
     "Common Bus: Uses multiplexers or three-state bus buffers to share a single data highway among registers.",
     "Tri-state Buffers: Three states: Logic 0, Logic 1, and High-Impedance (open circuit)."
    ],
    "formulas": [
     "Bus selection lines: S2 S1 S0 select which register drives the common bus."
    ],
    "example": "Transfer x' y: R1 ← R2 indicates R2 is transferred to R1 when condition x=0 and y=1."
   },
   {
    "title": "Micro-operations Classification",
    "summary": "Micro-operations are elementary operations executed on data stored in registers within one clock cycle.",
    "points": [
     "Register Transfer: Moves binary data without changing content.",
     "Arithmetic Micro-operations: Add (R3 ← R1 + R2), Subtract (R3 ← R1 + R2' + 1), Increment (R1 ← R1 + 1), Decrement.",
     "Logic Micro-operations: Bitwise operations (AND, OR, XOR, NOT, Clear).",
     "Shift Micro-operations: Logical shift (inserts 0), Circular/Rotate shift (recirculates bits), Arithmetic shift (preserves sign bit)."
    ],
    "formulas": [
     "Subtraction using 2's complement: R1 - R2 is executed as R1 + R2' + 1"
    ],
    "example": "Arithmetic shift right (ashr) on 8-bit signed value 11001000 produces 11100100 (sign bit 1 is duplicated)."
   },
   {
    "title": "Basic Computer Registers & Common Bus Architecture",
    "summary": "The basic Mano computer consists of 8 registers, an ALU, a 4096 × 16 memory unit, and a control unit.",
    "points": [
     "Program Counter (PC, 12 bits): Holds address of next instruction.",
     "Address Register (AR, 12 bits): Holds memory address for read/write.",
     "Instruction Register (IR, 16 bits): Holds currently executing instruction.",
     "Data Register (DR, 16 bits): Holds operand read from memory.",
     "Accumulator (AC, 16 bits): General-purpose processor register.",
     "Temporary Register (TR, 16 bits): Holds temporary scratch data.",
     "INPR (8 bits) & OUTR (8 bits): Input/Output character registers."
    ],
    "formulas": [
     "Instruction Format (16 bits): Bit 15 = I (Addressing Mode: 0=Direct, 1=Indirect), Bits 14-12 = Opcode, Bits 11-0 = Address."
    ],
    "example": "Instruction 0011 0000 0010 0100 (hex 3024): Bit 15=0 (Direct addressing), Opcode=011 (LDA), Address=024."
   },
   {
    "title": "Instruction Cycle & Execution Phases",
    "summary": "The instruction cycle is the sequence of steps executed by the CPU to process an instruction.",
    "points": [
     "Phase 1: Fetch: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1.",
     "Phase 2: Decode: T2: Decodes Opcode (bits 14-12) via 3x8 decoder, AR ← IR(11-0), I ← IR(15).",
     "Phase 3: Read Effective Address: If indirect (I=1 and not memory-reference), T3: AR ← M[AR].",
     "Phase 4: Execute: Executes the instruction in time states T4, T5, T6 and resets sequence counter (SC ← 0)."
    ],
    "formulas": [
     "Direct addressing: Effective Address = Address part of instruction (AR = IR(11-0))",
     "Indirect addressing: Effective Address = M[Address part of instruction] (AR = M[AR])"
    ],
    "example": "Fetch cycle at T0 places PC on common bus, enables LD of AR, copying memory pointer into AR."
   }
  ],
  "mustKnow": [
   "Basic Mano computer registers: PC (12), AR (12), IR (16), DR (16), AC (16), TR (16)",
   "Instruction word: bit 15 is mode I (0=direct, 1=indirect), bits 14-12 opcode, bits 11-0 address",
   "Fetch micro-operations: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1",
   "Arithmetic subtraction micro-operation: R1 + R2' + 1",
   "Arithmetic shift right preserves the sign bit (MSB)"
  ]
 },
 "NOTE-COA-17": {
  "noteId": "NOTE-COA-17",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Unit 4: CPU Organization",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Focuses on Central Processing Unit (CPU) organization, control unit design (hardwired vs microprogrammed), arithmetic processing algorithms (Booth's algorithm, restoring/non-restoring division), and pipelining.",
  "topics": [
   {
    "title": "CPU General Register Organization & Stack Architecture",
    "summary": "CPUs organize registers using internal buses. Stack-organized processors evaluate expressions using Reverse Polish Notation (RPN).",
    "points": [
     "Control Word: Selects source registers A and B, ALU operation, and destination register D.",
     "Stack Architecture: LIFO memory managed by Stack Pointer (SP); operations pop operands and push result.",
     "Three-address format: ADD R1, R2, R3 (R1 ← R2 + R3).",
     "Two-address format: ADD R1, R2 (R1 ← R1 + R2).",
     "One-address format: ADD X (AC ← AC + M[X], uses accumulator).",
     "Zero-address format: ADD (TOS ← TOS + NOS, uses stack)."
    ],
    "formulas": [
     "Push operation: SP ← SP - 1, M[SP] ← DR",
     "Pop operation: DR ← M[SP], SP ← SP + 1"
    ],
    "example": "Expression (A + B) * (C + D) in zero-address stack: PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL."
   },
   {
    "title": "Addressing Modes",
    "summary": "Specifies the rule for interpreting or modifying the address field of an instruction to locate the operand.",
    "points": [
     "Immediate Mode: Operand is specified directly in instruction.",
     "Direct Mode: Address field points directly to operand memory address.",
     "Indirect Mode: Address field points to memory location that holds the effective address.",
     "Register Mode: Operand resides in a CPU register.",
     "Register Indirect Mode: Register contains memory address of operand.",
     "Relative Addressing: Effective Address = PC + Address field (used in branches).",
     "Indexed Addressing: Effective Address = Index Register (XR) + Address field."
    ],
    "formulas": [
     "Relative EA = PC + Relative Offset",
     "Indexed EA = XR + Base Address"
    ],
    "example": "If PC = 200 and relative branch instruction specifies offset +50, target effective address is 200 + 50 = 250."
   },
   {
    "title": "Booth's Multiplication Algorithm",
    "summary": "Efficient multiplication algorithm for signed 2's complement binary integers. Treats strings of 1s as a single addition and subtraction.",
    "points": [
     "Registers: Multiplicand in B, Multiplier in Q, Accumulator A initialized to 0, Q_(n+1) initialized to 0.",
     "Rule for Q0 and Q_(n+1):",
     "  - 10: A ← A - B (subtract multiplicand)",
     "  - 01: A ← A + B (add multiplicand)",
     "  - 00 or 11: No arithmetic operation (only shift)",
     "Arithmetic Shift Right (ashr) [A, Q, Q_(n+1)] after each cycle; repeat for n cycles."
    ],
    "formulas": [
     "Substrings of 1s: 2^m + 2^(m-1) + ... + 2^k = 2^(m+1) - 2^k"
    ],
    "example": "Multiply (+7) × (-3): Booth recodes multiplier -3 (1101) to perform fewer additions/subtractions."
   },
   {
    "title": "Control Unit: Hardwired vs Microprogrammed",
    "summary": "The control unit orchestrates all processor micro-operations.",
    "points": [
     "Hardwired Control: Implemented using combinational logic gates, decoders, and flip-flops. Very fast execution, but rigid and extremely difficult to modify.",
     "Microprogrammed Control: Control signals stored as microinstructions in Control Memory (ROM). Flexible, easy to update/expand, but slower due to memory access overhead.",
     "Control Address Register (CAR): Holds address of next microinstruction.",
     "Horizontal microcode: Unencoded bits; high speed, wide control words.",
     "Vertical microcode: Encoded control fields; compact words, requires decoders."
    ],
    "formulas": [
     "Address sequencing: Next CAR = CAR + 1, Branch Address, or Mapping from instruction opcode."
    ],
    "example": "RISC processors favor hardwired control for single-cycle execution, whereas CISC processors utilize microprogrammed control."
   }
  ],
  "mustKnow": [
   "Booth's algorithm inspection: 10 implies A ← A - B; 01 implies A ← A + B; 00 and 11 do shift only",
   "Arithmetic shift right preserves sign bit in Booth's multiplication",
   "Hardwired control is faster but rigid; microprogrammed control is flexible but slower",
   "Relative addressing mode calculates EA = PC + Address Offset",
   "Zero-address instructions use stack operations (PUSH/POP)"
  ]
 },
 "NOTE-COA-18": {
  "noteId": "NOTE-COA-18",
  "subjectId": "COA",
  "chapter": 1,
  "title": "COA Unit 1: Number Systems Introduction",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Covers foundational digital computer logic, number systems, binary data representations, error codes, and Boolean logic gates essential for digital systems design.",
  "topics": [
   {
    "title": "Number Systems & Radix Conversions",
    "summary": "Positional number systems use a base (radix) r. Standard systems in computing are binary (r=2), octal (r=8), decimal (r=10), and hexadecimal (r=16).",
    "points": [
     "Base r to decimal: Multiply each digit by positional weight r^i.",
     "Decimal to base r: Successive division by r for integer part; successive multiplication by r for fraction.",
     "Binary to Hexadecimal: Group binary bits into sets of 4 from the binary point.",
     "Binary to Octal: Group binary bits into sets of 3 from the binary point."
    ],
    "formulas": [
     "Value = ∑ [i=-m to n-1] di × r^i",
     "(r's complement of N) = r^n - N",
     "((r-1)'s complement of N) = (r^n - 1) - N"
    ],
    "example": "Convert (110101.11)2 to hex: Group bits (0011 0101 . 1100)2 = (35.C)16."
   },
   {
    "title": "Signed Number Representations & 2's Complement",
    "summary": "Digital computers represent negative numbers using signed magnitude, 1's complement, or 2's complement. 2's complement is universally preferred because zero has a single representation and addition/subtraction hardware is unified.",
    "points": [
     "Signed Magnitude: MSB is sign bit (0 = positive, 1 = negative); remaining bits store magnitude.",
     "1's Complement: Invert every bit of positive binary number.",
     "2's Complement: Add 1 to the 1's complement (or invert all bits after the least significant 1).",
     "Overflow in 2's complement: Occurs when adding two numbers with the same sign yields a result with opposite sign."
    ],
    "formulas": [
     "Range of n-bit 2's complement integers: -2^(n-1) to +(2^(n-1) - 1)",
     "Overflow = C_in ⊕ C_out into the sign bit"
    ],
    "example": "Represent -5 in 8-bit 2's complement: +5 is 00000101. 1's complement is 11111010. Add 1 gives 11111011."
   },
   {
    "title": "Binary Codes & Error Detection",
    "summary": "Binary codes map alphanumeric characters and decimal digits into unique binary sequences.",
    "points": [
     "BCD (8421): Represents each decimal digit with 4 binary bits (invalid codes: 1010 to 1111).",
     "Excess-3 Code: BCD + 0011; self-complementing code used in arithmetic decimal units.",
     "Gray Code: Unit-distance code where successive values differ by strictly one bit; prevents transient glitches.",
     "Parity Bit: Appended bit making total number of 1s even (even parity) or odd (odd parity)."
    ],
    "formulas": [
     "Binary to Gray conversion: G_MSB = B_MSB;  G_i = B_i ⊕ B_(i+1)"
    ],
    "example": "Decimal 9 in BCD is 1001. In Excess-3 it is 1001 + 0011 = 1100."
   },
   {
    "title": "Boolean Algebra & Logic Gates",
    "summary": "Boolean algebra manipulates two-valued logic variables (0 and 1). Basic gates are AND, OR, NOT; universal gates are NAND and NOR.",
    "points": [
     "NAND and NOR are Universal Gates because any Boolean function can be implemented using only NAND or only NOR gates.",
     "XOR Gate (Exclusive OR): Output is 1 strictly when inputs differ (odd parity detector): Y = A ⊕ B = A'B + AB'.",
     "XNOR Gate (Equivalence): Output is 1 strictly when inputs are identical: Y = AB + A'B'."
    ],
    "formulas": [
     "Involution: (A')' = A",
     "De Morgan: (A + B)' = A'B'  and  (AB)' = A' + B'"
    ],
    "example": "Implement NOT gate using 2-input NAND: Tie both inputs together: (A · A)' = A'."
   }
  ],
  "mustKnow": [
   "2's complement range for n bits: -2^(n-1) to 2^(n-1) - 1",
   "NAND and NOR are universal gates",
   "Overflow occurs when carry into sign bit ≠ carry out of sign bit (C_in ⊕ C_out = 1)",
   "Gray code differs by only 1 bit between consecutive values",
   "BCD invalid codes: 1010 through 1111 (10 to 15 decimal)"
  ]
 },
 "NOTE-COA-19": {
  "noteId": "NOTE-COA-19",
  "subjectId": "COA",
  "chapter": 1,
  "title": "COA Unit 1: Introduction & Digital Computers",
  "pageCount": 25,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Covers foundational digital computer logic, number systems, binary data representations, error codes, and Boolean logic gates essential for digital systems design.",
  "topics": [
   {
    "title": "Number Systems & Radix Conversions",
    "summary": "Positional number systems use a base (radix) r. Standard systems in computing are binary (r=2), octal (r=8), decimal (r=10), and hexadecimal (r=16).",
    "points": [
     "Base r to decimal: Multiply each digit by positional weight r^i.",
     "Decimal to base r: Successive division by r for integer part; successive multiplication by r for fraction.",
     "Binary to Hexadecimal: Group binary bits into sets of 4 from the binary point.",
     "Binary to Octal: Group binary bits into sets of 3 from the binary point."
    ],
    "formulas": [
     "Value = ∑ [i=-m to n-1] di × r^i",
     "(r's complement of N) = r^n - N",
     "((r-1)'s complement of N) = (r^n - 1) - N"
    ],
    "example": "Convert (110101.11)2 to hex: Group bits (0011 0101 . 1100)2 = (35.C)16."
   },
   {
    "title": "Signed Number Representations & 2's Complement",
    "summary": "Digital computers represent negative numbers using signed magnitude, 1's complement, or 2's complement. 2's complement is universally preferred because zero has a single representation and addition/subtraction hardware is unified.",
    "points": [
     "Signed Magnitude: MSB is sign bit (0 = positive, 1 = negative); remaining bits store magnitude.",
     "1's Complement: Invert every bit of positive binary number.",
     "2's Complement: Add 1 to the 1's complement (or invert all bits after the least significant 1).",
     "Overflow in 2's complement: Occurs when adding two numbers with the same sign yields a result with opposite sign."
    ],
    "formulas": [
     "Range of n-bit 2's complement integers: -2^(n-1) to +(2^(n-1) - 1)",
     "Overflow = C_in ⊕ C_out into the sign bit"
    ],
    "example": "Represent -5 in 8-bit 2's complement: +5 is 00000101. 1's complement is 11111010. Add 1 gives 11111011."
   },
   {
    "title": "Binary Codes & Error Detection",
    "summary": "Binary codes map alphanumeric characters and decimal digits into unique binary sequences.",
    "points": [
     "BCD (8421): Represents each decimal digit with 4 binary bits (invalid codes: 1010 to 1111).",
     "Excess-3 Code: BCD + 0011; self-complementing code used in arithmetic decimal units.",
     "Gray Code: Unit-distance code where successive values differ by strictly one bit; prevents transient glitches.",
     "Parity Bit: Appended bit making total number of 1s even (even parity) or odd (odd parity)."
    ],
    "formulas": [
     "Binary to Gray conversion: G_MSB = B_MSB;  G_i = B_i ⊕ B_(i+1)"
    ],
    "example": "Decimal 9 in BCD is 1001. In Excess-3 it is 1001 + 0011 = 1100."
   },
   {
    "title": "Boolean Algebra & Logic Gates",
    "summary": "Boolean algebra manipulates two-valued logic variables (0 and 1). Basic gates are AND, OR, NOT; universal gates are NAND and NOR.",
    "points": [
     "NAND and NOR are Universal Gates because any Boolean function can be implemented using only NAND or only NOR gates.",
     "XOR Gate (Exclusive OR): Output is 1 strictly when inputs differ (odd parity detector): Y = A ⊕ B = A'B + AB'.",
     "XNOR Gate (Equivalence): Output is 1 strictly when inputs are identical: Y = AB + A'B'."
    ],
    "formulas": [
     "Involution: (A')' = A",
     "De Morgan: (A + B)' = A'B'  and  (AB)' = A' + B'"
    ],
    "example": "Implement NOT gate using 2-input NAND: Tie both inputs together: (A · A)' = A'."
   }
  ],
  "mustKnow": [
   "2's complement range for n bits: -2^(n-1) to 2^(n-1) - 1",
   "NAND and NOR are universal gates",
   "Overflow occurs when carry into sign bit ≠ carry out of sign bit (C_in ⊕ C_out = 1)",
   "Gray code differs by only 1 bit between consecutive values",
   "BCD invalid codes: 1010 through 1111 (10 to 15 decimal)"
  ]
 },
 "NOTE-COA-20": {
  "noteId": "NOTE-COA-20",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Unit 3: Basic Computer Organization & RTL",
  "pageCount": 48,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Exhaustive coverage of Morris Mano Basic Computer Architecture, Register Transfer Language (RTL), common bus architecture, register set, complete instruction cycle execution, memory-reference instructions, and input-output interrupt handling.",
  "topics": [
   {
    "title": "Register Transfer Language (RTL) & Common Bus System",
    "summary": "RTL is a symbolic notation used to describe micro-operations among registers. A common bus connects multiple registers using multiplexers or tri-state bus buffers.",
    "points": [
     "Transfer notation: P: R2 <- R1 means if control condition P = 1, then data in register R1 is transferred into R2 at the active clock edge.",
     "Common Bus System: Eliminates individual point-to-point connections by using a set of 16-bit multiplexers.",
     "Bus Selection Logic: 3 selection lines (S2, S1, S0) select which register places its output onto the 16-bit bus (e.g. 001 for AR, 010 for PC, 011 for DR, 100 for AC, 101 for IR, 110 for TR, 111 for Memory).",
     "Memory Transfer: Read: DR <- M[AR]; Write: M[AR] <- DR."
    ],
    "formulas": [
     "Control Function: P · T2: R2 ← R1",
     "Tri-State Buffer Bus: Normal state (0 or 1) when Enable E = 1, High-Impedance (Hi-Z) open circuit when E = 0",
     "Memory Read Cycle: Read: DR ← M[AR], Address on Bus selected by AR"
    ],
    "example": "If S2 S1 S0 = 010 and LD of AR is active, the content of PC (Program Counter) is transferred into AR (Address Register) in one clock cycle."
   },
   {
    "title": "Basic Computer Registers & Hardware Configuration",
    "summary": "The Mano Basic Computer features 8 designated registers interfacing with a 4096 × 16 memory unit.",
    "points": [
     "DR (Data Register, 16-bit): Holds memory operands read from memory.",
     "AR (Address Register, 12-bit): Holds the 12-bit physical memory address.",
     "AC (Accumulator, 16-bit): General-purpose processor register and ALU operand/result destination.",
     "IR (Instruction Register, 16-bit): Holds the current instruction code being executed.",
     "PC (Program Counter, 12-bit): Holds the address of the next sequential instruction to be fetched.",
     "TR (Temporary Register, 16-bit): Holds temporary data during processing.",
     "INPR (Input Register, 8-bit) & OUTR (Output Register, 8-bit): Hold 8-bit alphanumeric character data from/to I/O devices."
    ],
    "formulas": [
     "Memory Addressing: 12 bits address space → 2^12 = 4096 words",
     "Word Length: 16 bits per word (2 bytes)"
    ],
    "example": "To fetch an operand from memory address 7AF, AR is loaded with 7AF (12 bits), and memory read places the 16-bit word into DR."
   },
   {
    "title": "Instruction Formats & Direct/Indirect Addressing",
    "summary": "A 16-bit instruction word is divided into Mode (Bit 15), Opcode (Bits 14-12), and Address (Bits 11-0).",
    "points": [
     "Bit 15 (I bit): Addressing mode bit (0 = Direct Addressing, 1 = Indirect Addressing).",
     "Bits 14-12: 3-bit Opcode specifying one of 8 basic operations (000 to 110 are memory-reference; 111 specifies register-reference if I=0 or I/O if I=1).",
     "Bits 11-0: 12-bit Address field specifying operand address or 12-bit operation code.",
     "Direct Addressing: The address field contains the actual effective address of the operand.",
     "Indirect Addressing: The address field points to a memory location containing the effective address of the operand."
    ],
    "formulas": [
     "Direct Effective Address: EA = IR(0–11)",
     "Indirect Effective Address: EA = M[IR(0–11)]"
    ],
    "example": "If IR = 1001 0010 0100 0101 (Hex 9245): I = 1 (Indirect), Opcode = 001 (ADD), Address = 245. Memory at 245 holds 300. Effective address = 300; operand is fetched from M[300]."
   },
   {
    "title": "Timing, Control Unit & The 4-Phase Instruction Cycle",
    "summary": "Hardwired control uses a 3×8 decoder for opcodes, a 4-bit Sequence Counter (SC), and a 4×16 decoder producing timing signals T0 to T15.",
    "points": [
     "T0: AR <- PC (Fetch: Transfer PC address to AR)",
     "T1: IR <- M[AR], PC <- PC + 1 (Fetch: Read instruction word into IR, increment PC)",
     "T2: Decode opcode in IR(12-14), AR <- IR(0-11), I <- IR(15) (Decode)",
     "T3: If I = 1 and Opcode != 111, AR <- M[AR] (Determine effective address if indirect)",
     "Execution: Executed during timing signals T4, T5, T6 depending on decoded operation D0-D6."
    ],
    "formulas": [
     "Fetch RTL: T0: AR ← PC",
     "Fetch RTL: T1: IR ← M[AR], PC ← PC + 1",
     "Decode RTL: T2: D0...D7 ← Decode IR(12–14), AR ← IR(0–11), I ← IR(15)"
    ],
    "example": "During T1, as IR is loaded from M[AR], the PC is simultaneously incremented so it automatically points to the next sequential instruction."
   },
   {
    "title": "Memory-Reference Instructions & Execution Micro-operations",
    "summary": "Seven memory-reference instructions implemented using control outputs D0 through D6.",
    "points": [
     "AND (D0): AC <- AC ∧ M[AR] (Logical AND operand with AC).",
     "ADD (D1): AC <- AC + M[AR], E <- Cout (Add operand to AC with carry out to E).",
     "LDA (D2): AC <- M[AR] (Load operand from memory into AC via DR).",
     "STA (D3): M[AR] <- AC (Store accumulator contents into memory location).",
     "BUN (D4): PC <- AR (Branch Unconditionally to specified address).",
     "BSA (D5): M[AR] <- PC, AR <- AR + 1, PC <- AR (Branch and Save Return Address in subroutine call).",
     "ISZ (D6): Increment memory word M[AR] <- M[AR] + 1; if (M[AR] + 1 == 0) then PC <- PC + 1 (Loop control)."
    ],
    "formulas": [
     "BSA Micro-ops: D5T4: M[AR] ← PC, AR ← AR + 1; D5T5: PC ← AR, SC ← 0",
     "ISZ Micro-ops: D6T4: DR ← M[AR]; D6T5: DR ← DR + 1; D6T6: M[AR] ← DR, if (DR = 0) then (PC ← PC + 1), SC ← 0"
    ],
    "example": "In BSA subroutine call: if PC = 21 and AR = 135, M[135] receives 21, and PC becomes 136, starting subroutine execution at location 136."
   },
   {
    "title": "Input-Output Configuration & Interrupt Cycle",
    "summary": "Input and output devices communicate via 8-bit registers (INPR, OUTR) and 1-bit flags (FGI, FGO) controlled by Interrupt Enable (IEN).",
    "points": [
     "FGI (Input Flag): Set to 1 when a key is struck on keyboard; cleared to 0 when AC reads INPR.",
     "FGO (Output Flag): Set to 1 when printer/display is ready for character; cleared to 0 when OUTR is written.",
     "IEN (Interrupt Enable Flip-Flop): Set by ION instruction and cleared by IOF instruction.",
     "Interrupt Trigger Condition: T0'T1'T2' (IEN)(FGI + FGO): R <- 1 (Sets interrupt flip-flop R at end of instruction cycle).",
     "Interrupt Cycle Micro-operations: R T0: AR <- 0, TR <- PC; R T1: M[AR] <- TR, PC <- 0; R T2: PC <- PC + 1, IEN <- 0, R <- 0, SC <- 0."
    ],
    "formulas": [
     "Interrupt Condition: R ← 1 when (IEN) · (FGI + FGO) · T0'T1'T2'",
     "Save Return: M[0] ← PC, PC ← 1"
    ],
    "example": "When an interrupt occurs, current PC is saved in memory word 0 (M[0]), and PC is set to 1 to begin the Interrupt Service Routine (ISR)."
   }
  ],
  "mustKnow": [
   "Basic Mano computer registers: PC (12), AR (12), IR (16), DR (16), AC (16), TR (16)",
   "Instruction word: bit 15 is mode I (0=direct, 1=indirect), bits 14–12 opcode, bits 11–0 address",
   "Fetch micro-operations: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1",
   "Effective address for indirect addressing: AR ← M[AR] executed at timing signal T3 when I=1",
   "BSA saves return address in memory at effective address M[AR] ← PC, AR ← AR + 1, and PC ← AR",
   "Interrupt cycle saves return address in M[0], clears IEN ← 0, and branches to address 1 (PC ← 1)"
  ]
 },
 "NOTE-COA-21": {
  "noteId": "NOTE-COA-21",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Unit 4: Microprogrammed Control, CPU & Arithmetic",
  "pageCount": 56,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Complete architectural guide to Microprogrammed Control Units, Control Memory, Address Sequencing, CPU General Register and Stack Organization, Instruction Formats, Addressing Modes, and Computer Arithmetic algorithms (Booth's multiplication and restoring/non-restoring division).",
  "topics": [
   {
    "title": "Microprogrammed Control Organization & Control Memory",
    "summary": "A control unit whose binary control variables are stored in a memory (ROM) is called a microprogrammed control unit.",
    "points": [
     "Control Memory: Read-Only Memory (ROM) storing microprograms; each word is a microinstruction containing control word bits.",
     "Microinstruction: Contains bits that initiate micro-operations in CPU datapath and determine the next address.",
     "Hardwired vs Microprogrammed: Hardwired uses combinational logic gates and flip-flops (faster, optimized, rigid, difficult to modify); Microprogrammed uses control ROM (slower, modular, flexible, easily reprogrammable).",
     "Sequencer / Next-Address Generator: Circuitry that determines the next control memory address to be loaded into Control Address Register (CAR)."
    ],
    "formulas": [
     "Control Word Partition: [F1 | F2 | F3 | CD | BR | AD]",
     "CAR Size: If control memory has 128 words, CAR requires 7 bits (2^7 = 128)"
    ],
    "example": "If a new machine instruction is added to a processor, a microprogrammed control unit only requires burning a new microprogram in ROM, with zero hardware wire modifications."
   },
   {
    "title": "Address Sequencing & Microinstruction Branching",
    "summary": "Address sequencing logic determines how the control address register (CAR) transitions from one microinstruction to the next.",
    "points": [
     "Four address sequencing capabilities: 1. Incrementing CAR (CAR <- CAR + 1); 2. Conditional branch based on status flags; 3. Mapping from machine instruction opcode to CAR address; 4. Subroutine call and return using Subroutine Register (SBR).",
     "Opcode Mapping: A 4-bit opcode (e.g. 0101) is mapped into a 7-bit CAR address by prefixing 0 and appending 00 (e.g. 0 0101 00), allocating 4 consecutive microinstructions per routine.",
     "Subroutine Register (SBR): Stores return address upon microprogram call (SBR <- CAR + 1) and restores it upon return (CAR <- SBR)."
    ],
    "formulas": [
     "Opcode Mapping: CAR(6) = 0, CAR(5..2) = Opcode, CAR(1..0) = 00",
     "Subroutine Call: SBR ← CAR + 1, CAR ← Branch Address",
     "Subroutine Return: CAR ← SBR"
    ],
    "example": "Opcode 1011 (Decimal 11) maps to binary address 0 1011 00 = 44 in control memory; the micro-routine for instruction 11 starts at address 44."
   },
   {
    "title": "CPU General Register Organization & Stack Architecture",
    "summary": "The CPU datapath includes general-purpose register files, bus multiplexers, arithmetic logic unit (ALU), and stack pointer registers.",
    "points": [
     "Register File Organization: 7 general-purpose registers (R1 to R7) connected through two multiplexer buses (A-bus and B-bus) to 16 ALU operations.",
     "Destination Decoder: Selects which destination register receives the ALU result on clock pulse.",
     "Stack Organization: LIFO (Last-In-First-Out) storage structure maintained by a Stack Pointer (SP) register.",
     "PUSH Micro-operations: SP <- SP - 1, M[SP] <- DR (Decrements SP, stores word); check for STACK_FULL.",
     "POP Micro-operations: DR <- M[SP], SP <- SP + 1 (Reads word, increments SP); check for STACK_EMPTY.",
     "Reverse Polish Notation (RPN): Postfix evaluation eliminates parentheses and operator precedence ambiguity."
    ],
    "formulas": [
     "PUSH: SP ← SP - 1, M[SP] ← DR, if (SP = 0) then FULL ← 1, EMTY ← 0",
     "POP: DR ← M[SP], SP ← SP + 1, if (SP = Limit) then EMTY ← 1, FULL ← 0",
     "Infix to Postfix: A * B + C * D → AB * CD * +"
    ],
    "example": "Evaluating postfix expression 5 3 + 2 *: Push 5, Push 3, + pops 3 and 5, pushes 8; Push 2; * pops 2 and 8, pushes 16 (Result = 16)."
   },
   {
    "title": "Instruction Formats & 10 Addressing Modes",
    "summary": "Instruction formats dictate number of explicit memory/register addresses. Addressing modes determine how the effective address is computed.",
    "points": [
     "Three-Address: ADD R1, A, B (R1 <- M[A] + M[B]).",
     "Two-Address: ADD R1, A (R1 <- R1 + M[A]).",
     "One-Address: ADD A (AC <- AC + M[A], uses Accumulator).",
     "Zero-Address: ADD (Pops top two stack elements, adds, pushes result).",
     "Immediate Mode: Operand is specified directly in instruction (Operand = Address field).",
     "Direct Mode: Effective address = Address field (EA = A).",
     "Indirect Mode: Effective address = Memory at Address field (EA = M[A]).",
     "Register Mode: Operand is stored in specified CPU register (Operand = R).",
     "Register Indirect Mode: Effective address is stored in specified CPU register (EA = [R]).",
     "Relative Addressing Mode: EA = PC + Address field (Used in branch instructions for position-independent code).",
     "Indexed Addressing Mode: EA = Index Register (XR) + Address field (Used for array traversal).",
     "Base Register Addressing Mode: EA = Base Register (BAR) + Address field (Used in OS memory relocation)."
    ],
    "formulas": [
     "Relative Mode: EA = PC + Address",
     "Indexed Mode: EA = XR + Address",
     "Auto-increment: EA = [R], R ← R + 1; Auto-decrement: R ← R - 1, EA = [R]"
    ],
    "example": "If PC = 825 and relative branch offset is +35, Effective Address = 825 + 35 = 860."
   },
   {
    "title": "Computer Arithmetic: Booth's Multiplication Algorithm",
    "summary": "Booth's algorithm multiplies signed binary numbers in 2's complement representation by inspecting pairs of bits (Q0 and Q-1).",
    "points": [
     "Hardware Registers: Multiplicand register B, Accumulator AC (initialized to 0), Multiplier register Q, 1-bit register Q-1 (initialized to 0), Sequence Counter SC (set to n).",
     "Decision Rule 10: Subtract multiplicand from AC (AC <- AC - B = AC + B' + 1), then Arithmetic Shift Right (ashr AC & Q).",
     "Decision Rule 01: Add multiplicand to AC (AC <- AC + B), then Arithmetic Shift Right (ashr AC & Q).",
     "Decision Rule 00 or 11: Shift only (ashr AC & Q).",
     "Arithmetic Shift Right (ashr): Preserves sign bit (MSB remains unchanged, bit 15 shifts to 14, Q0 shifts into Q-1)."
    ],
    "formulas": [
     "Condition 10: AC ← AC - B, then ashr(AC, Q, Q-1)",
     "Condition 01: AC ← AC + B, then ashr(AC, Q, Q-1)",
     "Condition 00 or 11: ashr(AC, Q, Q-1)",
     "Loop: SC ← SC - 1 until SC = 0"
    ],
    "example": "Multiplying 7 (0111) by -3 (1101): Multiplicand B = 0111, Multiplier Q = 1101, Q-1 = 0. Step 1 (Q0 Q-1 = 10): AC = AC - B = 1001, ashr gives AC=1100, Q=1110, Q-1=1. Final 8-bit result is 1110 1011 (-21 in decimal)."
   },
   {
    "title": "Division Algorithms: Restoring & Non-Restoring",
    "summary": "Binary division algorithms for unsigned and signed numbers using iterative shift and subtract operations.",
    "points": [
     "Restoring Division: 1. Shift left A and Q; 2. Subtract divisor B from A (A <- A - B); 3. If sign bit of A is 1 (A < 0), set Q0 = 0 and restore A (A <- A + B); 4. If sign bit of A is 0 (A >= 0), set Q0 = 1 (no restoration needed); 5. Decrement SC; repeat until SC = 0.",
     "Non-Restoring Division: Eliminates restoration step! 1. If A >= 0, shift left A and Q, subtract B (A <- 2A - B); 2. If A < 0, shift left A and Q, add B (A <- 2A + B); 3. If resulting A >= 0, set Q0 = 1; else set Q0 = 0; 4. At the end, if A < 0, restore A by adding B (A <- A + B)."
    ],
    "formulas": [
     "Restoring: Shift left AQ, A ← A - B; If A < 0: Q0 = 0, A ← A + B; If A ≥ 0: Q0 = 1",
     "Non-Restoring: If A ≥ 0: Shift left AQ, A ← 2A - B; If A < 0: Shift left AQ, A ← 2A + B; Set Q0 = (sign(A) == 0 ? 1 : 0)"
    ],
    "example": "Dividing 11 (1011) by 3 (0011): Restoring algorithm executes 4 cycles of shift-subtract-restore, yielding Quotient Q = 0011 (3) and Remainder A = 0010 (2)."
   }
  ],
  "mustKnow": [
   "Control memory stores microprograms; hardwired control uses combinational circuits (faster, less flexible), microprogrammed uses ROM (flexible, easier to modify)",
   "Mapping from 4-bit opcode to 7-bit CAR: 0xxxx00 placing routines at 4-word intervals",
   "Effective address in Relative Addressing: EA = PC + Address; Indexed Addressing: EA = XR + Address",
   "Booth's multiplier rule: 10 -> Subtract B, 01 -> Add B, 00 or 11 -> Shift only (ashr)",
   "Arithmetic Shift Right (ashr) preserves the MSB (sign bit) while shifting bits right into Q-1",
   "Non-restoring division: if A < 0, shift left and ADD divisor; if A >= 0, shift left and SUBTRACT divisor"
  ]
 },
 "NOTE-COA-22": {
  "noteId": "NOTE-COA-22",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: I/O Organization & Memory Hierarchy",
  "pageCount": 52,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Exhaustive syllabus reference for Unit 5 covering Input-Output Interfaces, Asynchronous Handshaking Protocols, DMA Controllers, Priority Interrupt Systems, Memory Hierarchy, Main Memory Design, Cache Mapping Techniques, Virtual Memory, and Cache Coherence.",
  "topics": [
   {
    "title": "Input-Output Interface & Isolated vs Memory-Mapped I/O",
    "summary": "I/O interfaces resolve speed, data format, and operating mode mismatches between CPU and external peripheral devices.",
    "points": [
     "Interface Functions: Data conversion, status monitoring, synchronization, address decoding, and electrical signal adaptation.",
     "Isolated I/O: Separate address spaces for memory and I/O devices; uses dedicated CPU instructions (IN, OUT) and separate control lines (IOR, IOW). Maximum memory space is preserved.",
     "Memory-Mapped I/O: Shared address space; I/O ports are treated as memory addresses; accessed using standard memory instructions (MOV, LD, ST) and control lines (MEMR, MEMW). Consumes part of memory address space."
    ],
    "formulas": [
     "Isolated I/O: Distinct control lines: IOR, IOW vs MEMR, MEMW",
     "Memory-Mapped I/O: Unified control lines: MEMR, MEMW with shared 2^n address space"
    ],
    "example": "In 8086 architecture, IN AL, 60H uses isolated I/O with IOR control line, while MOV AL, [0FF00H] can access an I/O device in memory-mapped I/O."
   },
   {
    "title": "Asynchronous Data Transfer: Strobe vs Handshaking",
    "summary": "Data transfer between two independent units without a common clock requires asynchronous coordination.",
    "points": [
     "Strobe Method: Source sends data and pulses a strobe line for a fixed duration. Disadvantage: No acknowledgment; sender does not know if receiver received data, leading to data loss if receiver is busy.",
     "Source-Initiated Handshaking: 1. Source places data on bus and asserts 'Data Valid'; 2. Destination accepts data and asserts 'Data Accepted'; 3. Source drops 'Data Valid'; 4. Destination drops 'Data Accepted'.",
     "Destination-Initiated Handshaking: 1. Destination asserts 'Ready for Data'; 2. Source places data and asserts 'Data Valid'; 3. Destination accepts data and drops 'Ready for Data'; 4. Source drops 'Data Valid'."
    ],
    "formulas": [
     "Handshake Sequence: Data on Bus → Data Valid (high) → Data Accepted (high) → Data Valid (low) → Data Accepted (low)"
    ],
    "example": "In a printer interface, handshaking ensures the CPU does not send a second character until the printer has acknowledged printing the first character."
   },
   {
    "title": "Modes of Transfer & Direct Memory Access (DMA)",
    "summary": "Modes of data transfer include Programmed I/O, Interrupt-Initiated I/O, and Direct Memory Access (DMA).",
    "points": [
     "Programmed I/O: CPU continuously polls device status register in a busy-wait loop; completely wastes CPU processing cycles.",
     "Interrupt-Initiated I/O: CPU issues read/write command and continues other work; I/O interface raises an interrupt when ready, triggering ISR.",
     "DMA (Direct Memory Access): Dedicated DMA Controller (DMAC) takes control of system bus to transfer data directly between memory and high-speed I/O device without CPU intervention.",
     "Bus Arbitration Handshake: DMAC asserts Bus Request (BR); CPU completes current bus cycle, puts buses into Hi-Z, and asserts Bus Grant (BG).",
     "Transfer Modes: Burst Mode (DMAC transfers entire block before returning bus) vs Cycle Stealing (DMAC transfers 1 word per CPU bus cycle, interleaving with CPU execution)."
    ],
    "formulas": [
     "DMA Controller Registers: Address Register (AR), Word Count Register (WC), Control/Status Register",
     "DMA Termination: When WC decrements to 0, DMAC de-asserts BR and raises an interrupt to CPU"
    ],
    "example": "Transferring a 4KB sector from SSD to RAM: With DMA, CPU executes only 2 setup instructions and receives 1 completion interrupt; without DMA, CPU must execute 4096 individual load/store instructions."
   },
   {
    "title": "Priority Interrupt Systems: Daisy Chain & Parallel Priority",
    "summary": "Hardware priority resolvers establish which device gets serviced first when simultaneous interrupts occur.",
    "points": [
     "Daisy-Chain Serial Priority: Physical serial connection where Interrupt Acknowledge (INTA) signal ripples through devices in series. Device closest to CPU has highest priority; if it requested interrupt, it intercepts INTA and places its Vector Address (VAD) on the data bus.",
     "Parallel Priority: Uses an Interrupt Register, an Interrupt Mask Register, and a Priority Encoder (e.g. 4×2 or 8×3 encoder) to identify the highest active interrupt in a single clock cycle.",
     "Interrupt Service Routine (ISR): CPU pushes PC and processor flags onto stack, loads VAD into PC, executes handler, and executes IRET to resume original program."
    ],
    "formulas": [
     "Parallel Priority Encoder: Highest bit position with 1 determines output code",
     "VAD (Vector Address): Pointer to memory location storing the starting address of the ISR"
    ],
    "example": "If Device 1 (keyboard, priority 1) and Device 3 (disk, priority 3) interrupt simultaneously in a daisy-chain: Device 1 intercepts INTA first; Device 3 must wait until Device 1 finishes."
   },
   {
    "title": "Memory Hierarchy & Performance Metrics",
    "summary": "Memory systems organize storage into a hierarchy to achieve high speed, large capacity, and low cost per bit.",
    "points": [
     "Hierarchy levels: CPU Registers (< 1ns) < Cache SRAM (1-10ns) < Main Memory DRAM (50-100ns) < Secondary Storage SSD/HDD (0.1-10ms) < Magnetic Tape.",
     "Locality of Reference: Temporal Locality (recently accessed instructions/data will be accessed again soon) and Spatial Locality (instructions/data adjacent to current address will be accessed soon).",
     "Hit Ratio (H): Fraction of memory accesses satisfied by the cache: H = Hits / (Hits + Misses). Miss Ratio = 1 - H.",
     "Average Access Time (Ta): Ta = H * Tc + (1 - H) * Tm, where Tc is cache access time and Tm is main memory access time."
    ],
    "formulas": [
     "Hit Ratio: H = N_hit / (N_hit + N_miss)",
     "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
     "Speedup: S = Tm / Ta"
    ],
    "example": "If Tc = 10ns, Tm = 100ns, and Hit Ratio H = 0.95: Ta = 0.95(10) + 0.05(100) = 9.5 + 5 = 14.5ns. Speedup S = 100 / 14.5 = 6.9x."
   },
   {
    "title": "Cache Memory Mapping Techniques & Write Policies",
    "summary": "Three mapping methods determine how main memory blocks are placed into cache lines.",
    "points": [
     "Direct Mapping: Each memory block maps to exactly one cache line given by Line = Block mod (Cache Lines). Address is partitioned into [Tag | Index | Word Offset]. Fast and simple, but suffers from conflict misses (thrashing).",
     "Associative Mapping: Any memory block can be placed in any cache line. Address is partitioned into [Tag | Word Offset]. Eliminates conflict misses, but requires expensive parallel comparators.",
     "Set-Associative Mapping: Cache is divided into sets of k lines (k-way set associative). Block maps to Set = Block mod (Number of Sets). Address is partitioned into [Tag | Set | Word Offset].",
     "Write-Through: Updates cache and main memory simultaneously on every write. Eliminates inconsistency, but slows down writes.",
     "Write-Back: Writes only to cache and sets a Dirty Bit (Modified Bit). Written to main memory only when line is evicted/replaced."
    ],
    "formulas": [
     "Direct Mapping Index: Index bits = log2(Number of Cache Lines)",
     "Word Offset: Offset bits = log2(Block Size in bytes)",
     "Tag Bits: Tag = Total Physical Address Bits - Index - Word Offset",
     "Set-Associative: Set bits = log2(Number of Sets), where Number of Sets = (Cache Lines) / k"
    ],
    "example": "32-bit address, 64KB cache, 64-byte block: Word offset = log2(64) = 6 bits. Total blocks = 64KB / 64B = 1024. For Direct Mapping: Index = log2(1024) = 10 bits; Tag = 32 - 10 - 6 = 16 bits. For 4-Way Set Associative: Sets = 1024 / 4 = 256; Set index = log2(256) = 8 bits; Tag = 32 - 8 - 6 = 18 bits."
   },
   {
    "title": "Virtual Memory & Cache Coherence",
    "summary": "Virtual memory provides an illusion of a large main memory. Cache coherence ensures multi-processor cache consistency.",
    "points": [
     "Virtual Memory Concept: Translates CPU logical (virtual) addresses into physical memory addresses via a Page Table.",
     "Paging: Logical address space is divided into fixed-size Pages; physical memory into Frames of identical size.",
     "Address Translation: Logical Address = [Page Number (p) | Offset (d)]. Frame number (f) is retrieved from Page Table at entry p: Physical Address = [f | d].",
     "Page Fault: Occurs when valid/invalid bit in page table is 0 (page not in RAM); OS handles page fault by fetching page from disk.",
     "TLB (Translation Lookaside Buffer): High-speed hardware associative cache holding recently used page table entries, accelerating address translation.",
     "Cache Coherence Problem: In multiprocessor systems, multiple caches hold copies of the same memory block; writes by one CPU create stale copies in others.",
     "Coherence Protocols: Snoopy Bus Protocol (caches monitor bus for write transactions; Write-Invalidate marks peer copies invalid, Write-Update broadcasts new data) and Directory-Based Protocol."
    ],
    "formulas": [
     "Virtual Address Split: [Page Number p | Offset d]",
     "Effective Memory Access Time with TLB: EMAT = Hit_TLB · (T_TLB + T_m) + (1 - Hit_TLB) · (T_TLB + 2 · T_m)",
     "MESI Protocol States: Modified (M), Exclusive (E), Shared (S), Invalid (I)"
    ],
    "example": "Virtual page size 4KB (12 bits offset). Virtual address 0x0003_1ABC has page number 0x0003 and offset 0x1ABC. If Page Table entry 3 holds frame 0x0015, Physical Address = 0x0015_1ABC."
   }
  ],
  "mustKnow": [
   "Average memory access time: Ta = H · Tc + (1 - H) · Tm",
   "Isolated I/O uses distinct control signals (IOR, IOW) and dedicated IN/OUT instructions; Memory-Mapped I/O uses MEMR/MEMW and shared memory space",
   "In Daisy-Chain priority, the device closest to the CPU has the highest priority and passes VAD (Vector Address)",
   "Direct mapping cache index: Line = Block mod (Cache Lines); Tag = Address - Index - Offset",
   "Set-Associative cache index: Set = Block mod (Number of Sets); achieves low miss rate with k comparators per set",
   "Dirty bit (Modified bit) is set to 1 when a cache line is modified, indicating it must be written back to RAM upon eviction",
   "Cache coherence is solved via Snoopy Bus Protocols (Write-Invalidate / Write-Update) or Directory-based schemes"
  ]
 },
 "NOTE-COA-23": {
  "noteId": "NOTE-COA-23",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: Input-Output Organization (Detailed Class Notes)",
  "pageCount": 38,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Specialized lecture notes focusing on peripheral device interfaces, asynchronous data communication handshakes, priority interrupt hardware, DMA controller block diagram, and cycle stealing mechanisms.",
  "topics": [
   {
    "title": "Peripheral Devices & I/O Interface Hardware",
    "summary": "Hardware modules that interface external electromechanical devices with the internal CPU and system bus.",
    "points": [
     "Interface registers: Port A/B Data Registers, Status Register (flags for busy, error, parity), Control Register (mode settings).",
     "Address decoding: Selects the specific interface module and internal register via CS (Chip Select) and Register Select (RS1, RS0) lines."
    ],
    "formulas": [
     "Register Selection: RS1 RS0 = 00 (Port A), 01 (Port B), 10 (Control Reg), 11 (Status Reg)"
    ],
    "example": "CPU writing control word 0x82 to control register configures Port A for input and Port B for output."
   },
   {
    "title": "Asynchronous Data Communication & Handshaking",
    "summary": "Detailed analysis of source-initiated and destination-initiated two-wire handshaking timing diagrams.",
    "points": [
     "Eliminates timing skew: Transfer occurs at the rate of the slower device.",
     "Timeout detection: If acknowledgment is not received within a timeout window, an error flag is set."
    ],
    "formulas": [
     "Full Handshake: Data Valid -> Data Accepted -> Data Valid Low -> Data Accepted Low"
    ],
    "example": "Centronics parallel printer port uses STROBE# and BUSY/ACK# signals to implement hardware handshaking."
   },
   {
    "title": "DMA Architecture & Bus Mastership",
    "summary": "Internal block diagram of DMA Controller (8237/8257) and transfer cycle phases.",
    "points": [
     "Address Register: Initialized with starting memory address, auto-increments after each word transfer.",
     "Word Count Register: Initialized with number of words to transfer, auto-decrements; triggers TC (Terminal Count) interrupt when 0.",
     "Cycle Stealing: CPU gives up system bus for exactly one bus cycle while fetching from instruction cache without stalling execution."
    ],
    "formulas": [
     "Bus Overhead: Overhead (%) = (Transfer Rate in bytes/sec) / (Bus Bandwidth in bytes/sec) * 100"
    ],
    "example": "A disk transferring 2MB/sec over a 100MB/sec system bus consumes only 2% of the bus bandwidth using cycle stealing."
   }
  ],
  "mustKnow": [
   "Handshaking eliminates timing skew and rate mismatches because each transfer step requires explicit acknowledgment",
   "In DMA cycle stealing, the DMA controller transfers 1 word and relinquishes the bus for 1 CPU cycle",
   "DMA controller registers: Address Register (increments), Word Count Register (decrements to 0, generates interrupt)",
   "Interrupt Vector Address (VAD) is sent by the interrupting device directly onto the data bus to locate the ISR in memory"
  ]
 },
 "NOTE-COA-24": {
  "noteId": "NOTE-COA-24",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Unit 5: Memory Organization (Classroom PPT)",
  "pageCount": 42,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Classroom slide deck covering memory hierarchy, RAM/ROM chip interconnects, CAM match logic, cache mapping architectures, replacement algorithms, and virtual address translation.",
  "topics": [
   {
    "title": "Memory Hierarchy & Locality Principles",
    "summary": "Engineering rationale behind the multi-level memory hierarchy based on cost, access time, and locality of reference.",
    "points": [
     "Temporal Locality: Recently accessed memory words are likely to be accessed again soon (loop constructs, subroutines).",
     "Spatial Locality: Words near recently accessed memory words are likely to be accessed soon (sequential instructions, array processing)."
    ],
    "formulas": [
     "Average Access Time: Ta = H · Tc + (1 - H) · Tm"
    ],
    "example": "A tight while loop illustrates temporal locality (same instructions repeated) and spatial locality (instructions stored contiguously)."
   },
   {
    "title": "Content Addressable Memory (CAM) Architecture",
    "summary": "Hardware implementation of associative memory where words are accessed simultaneously based on bit patterns rather than numeric addresses.",
    "points": [
     "Hardware components: Argument Register A, Key Register (Mask) K, Associative Memory Array of m words × n bits, Match Register M.",
     "Match Logic: Compares masked bits of A with every word simultaneously. Bit match logic: x_ij = A_j F_ij + A_j' F_ij'. Word match: M_i = product of (x_ij + K_j')."
    ],
    "formulas": [
     "Match Condition: M_i = ∏ (x_ij + K_j') from j=1 to n",
     "Masking: If K_j = 0, the j-th bit is ignored in the comparison across all words"
    ],
    "example": "If Argument A = 10110, Key K = 11100, only the first 3 bits (101) are compared against all stored words; words matching 101xx set their match bit to 1."
   },
   {
    "title": "Cache Mapping Architectures & Replacement Policies",
    "summary": "Comparison of Direct, Fully Associative, and Set-Associative mapping with replacement policies.",
    "points": [
     "Direct Mapping: Simplest hardware, but vulnerable to collision thrashing.",
     "Set-Associative: 2-way, 4-way, or 8-way sets balance hardware cost and low miss rate.",
     "Replacement Policies: LRU (Least Recently Used), FIFO (First-In-First-Out), LFU (Least Frequently Used), Random."
    ],
    "formulas": [
     "Set Index Bits: log2(Number of Sets)",
     "Word Offset Bits: log2(Block Size in bytes)"
    ],
    "example": "In LRU replacement for a 4-way set, a 2-bit counter tracks which line was accessed longest ago and replaces it upon a cache miss."
   }
  ],
  "mustKnow": [
   "Temporal Locality: recently accessed memory is likely to be accessed again soon (loops)",
   "Spatial Locality: memory addresses near recently accessed items are likely to be accessed soon (arrays)",
   "Direct mapping: fast and simple, but suffers from conflict misses (thrashing)",
   "Fully associative: zero conflict misses, but requires expensive parallel comparator hardware",
   "Set-associative: compromises between direct and associative, achieving low miss rate with k comparators per set",
   "Dirty bit (Modified bit) is set to 1 when a cache line is modified, indicating it must be written back to RAM upon eviction"
  ]
 },
 "NOTE-COA-25": {
  "noteId": "NOTE-COA-25",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Mid-2 Assignment 2 & Model Questions",
  "pageCount": 16,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT Mid-2 Assignment problem set covering high-yield numerical and theoretical questions across Units 3, 4, and 5 with worked step-by-step model solutions.",
  "topics": [
   {
    "title": "Mano Basic Computer Execution Problems",
    "summary": "Worked problems on instruction decoding, effective address calculation, and BSA subroutine execution.",
    "points": [
     "Traces of memory-reference instructions with direct and indirect modes.",
     "Step-by-step register updates during fetch, decode, and execute phases."
    ],
    "formulas": [
     "BSA: M[AR] ← PC, AR ← AR + 1, PC ← AR",
     "ISZ: M[AR] ← M[AR] + 1; If M[AR] = 0, PC ← PC + 1"
    ],
    "example": "Given PC = 100, AR = 250, BSA 250 saves return address 101 at memory location 250, and execution continues at location 251."
   },
   {
    "title": "Booth's Multiplication Worked Numericals",
    "summary": "Complete step-by-step register tables for signed 2's complement multiplication.",
    "points": [
     "Columns: Operation, AC (Accumulator), Q (Multiplier), Q-1 (Previous bit), SC (Sequence Counter).",
     "Worked example for (-9) × (+6) and (+13) × (-11)."
    ],
    "formulas": [
     "Rule 10: AC ← AC - B, ashr",
     "Rule 01: AC ← AC + B, ashr",
     "Rule 00/11: ashr only"
    ],
    "example": "Multiplying -9 (10111) by +6 (00110) in 5-bit registers yields 10-bit result 1111001010 (-54 in decimal)."
   },
   {
    "title": "Cache Memory Address Partition Worked Numericals",
    "summary": "Detailed computations for Tag, Index/Set, and Word offset bits across mapping schemes.",
    "points": [
     "Calculations for main memory size, cache capacity, and block size combinations.",
     "Tag directory overhead and total memory bit budget."
    ],
    "formulas": [
     "Tag = Total Address Bits - Index Bits - Word Offset Bits",
     "Average Access Time: Ta = H · Tc + (1 - H) · Tm"
    ],
    "example": "With 16MB RAM (24 bits), 32KB cache, 16-byte block: Word offset = 4 bits. Direct mapping index = log2(32KB/16B) = 11 bits; Tag = 24 - 11 - 4 = 9 bits. 2-way set associative: Sets = 2048 / 2 = 1024; Set bits = 10; Tag = 24 - 10 - 4 = 10 bits."
   }
  ],
  "mustKnow": [
   "Booth multiplication register table requires columns: Operation, AC, Q, Q-1, SC",
   "In Booth's algorithm, initial AC = 0, Q-1 = 0, and SC = number of bits n",
   "Cache address field formula: Total = log2(RAM); Offset = log2(Block); Index = log2(Lines/Sets); Tag = Total - Index - Offset",
   "In BSA, PC of next instruction is saved at M[effective address], and execution resumes at effective address + 1",
   "Speedup factor S = Tm / (H · Tc + (1 - H) · Tm)"
  ]
 },
 "NOTE-COA-26": {
  "noteId": "NOTE-COA-26",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Unit-wise Question Bank with Answers (Units 1–5)",
  "pageCount": 78,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive university question bank providing verified answers, structural diagrams, and standard university solutions across all five syllabus units (Units 1 to 5).",
  "topics": [
   {
    "title": "Units 1 & 2: Fundamentals, Complements & Digital Logic",
    "summary": "Number representations, complement arithmetic, IEEE 754 floating point, K-Map simplification, Adders, Multiplexers, and Counters.",
    "points": [
     "2's complement subtraction: A - B = A + (2's comp of B); end carry indicates positive result, lack of carry indicates negative result.",
     "CLA (Carry Lookahead Adder) reduces addition time from O(n) to O(1) delay."
    ],
    "formulas": [
     "CLA Generate: Gi = Ai · Bi; Propagate: Pi = Ai ⊕ Bi",
     "Carry: Ci+1 = Gi + Pi · Ci"
    ],
    "example": "Full Adder implementation using two 4-to-1 Multiplexers."
   },
   {
    "title": "Unit 3: RTL, Mano Computer Architecture & Instruction Cycle",
    "summary": "Bus system, register transfers, 4-phase instruction cycle, complete timing decoder, and memory-reference instructions.",
    "points": [
     "T0 to T2 are common to all instructions (fetch and decode).",
     "Interrupt cycle is initiated at the end of execution if IEN and I/O flag are active."
    ],
    "formulas": [
     "T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1; T2: AR ← IR(0–11), I ← IR(15)"
    ],
    "example": "Execution of ISZ 150 increments word at 150; if it becomes 0, PC is incremented to skip the next instruction."
   },
   {
    "title": "Units 4 & 5: Microprogrammed Control, CPU, Arithmetic & Memory/IO",
    "summary": "Control unit design, CPU registers, stack operations, addressing modes, Booth's multiplication, DMA, priority interrupts, cache mapping, and paging.",
    "points": [
     "Booth's multiplication handles positive and negative multipliers without special sign correction.",
     "DMA Controller frees CPU from byte-by-byte data transfer."
    ],
    "formulas": [
     "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
     "Direct Mapping: Line = Block mod (Cache Lines)"
    ],
    "example": "Daisy chain priority resolver hardware circuit and vector address passing."
   }
  ],
  "mustKnow": [
   "Unit 1: IEEE 754 Single Precision: 1 sign bit, 8 exponent bits (bias 127), 23 mantissa bits",
   "Unit 2: J-K Flip Flop excitation table: 0->0 (J=0, K=X), 0->1 (J=1, K=X), 1->0 (J=X, K=1), 1->1 (J=X, K=0)",
   "Unit 3: Memory reference instructions: AND (0), ADD (1), LDA (2), STA (3), BUN (4), BSA (5), ISZ (6)",
   "Unit 4: Zero-address stack instructions pop operands automatically and push result",
   "Unit 5: Cache line size must balance spatial locality benefits against longer miss penalty transfer delays"
  ]
 },
 "NOTE-COA-27": {
  "noteId": "NOTE-COA-27",
  "subjectId": "COA",
  "chapter": 4,
  "title": "COA Complete Questions Bank (Units 1–5)",
  "pageCount": 36,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Master compilation of university semester exam and internal mid-term questions across all five syllabus units for comprehensive practice.",
  "topics": [
   {
    "title": "Short Answer Questions (2 Marks) Review",
    "summary": "Core definitions, register sizes, micro-operation notations, difference tables, and cache hit ratio concepts.",
    "points": [
     "What is the difference between Computer Organization and Computer Architecture?",
     "What are the elements of a machine instruction?",
     "Define micro-operation and register transfer language.",
     "What is meant by normalization in floating point numbers?",
     "Differentiate between write-through and write-back cache policies."
    ],
    "formulas": [
     "Hit Ratio: H = Hits / Total Accesses",
     "Speedup: S = Tm / Ta"
    ],
    "example": "2-mark answer: Write-Through updates cache and RAM simultaneously; Write-Back updates only cache and sets a dirty bit."
   },
   {
    "title": "Long Answer Questions (5 & 10 Marks) Review",
    "summary": "In-depth design questions, circuit diagrams, algorithm flowcharts, and worked numericals.",
    "points": [
     "Explain the Instruction Cycle of Mano Basic Computer with neat flowchart.",
     "Describe Booth's multiplication algorithm with flowchart and multiply (-9) by (+6).",
     "Explain Direct, Associative, and Set-Associative cache mapping techniques with diagrams.",
     "Explain the working of DMA Controller with block diagram and transfer modes.",
     "Explain Daisy Chain priority interrupt hardware with neat sketch."
    ],
    "formulas": [
     "Direct Mapping: Index = log2(Lines), Word = log2(Block), Tag = Total - Index - Word",
     "Booth: Q0 Q-1 = 10 (Subtract B), 01 (Add B), 00/11 (ashr only)"
    ],
    "example": "10-mark solution structure: Definition, Architecture Block Diagram, Step-by-step Operation, Illustrative Example, Conclusion."
   }
  ],
  "mustKnow": [
   "Repeated exam question: Differentiate between Hardwired Control and Microprogrammed Control",
   "Repeated exam question: Explain Booth's algorithm with flowchart and solve a signed numerical",
   "Repeated exam question: Explain Direct, Associative, and Set-Associative cache mapping",
   "Repeated exam question: Explain DMA transfer modes (burst vs cycle stealing)",
   "Repeated exam question: Explain Daisy Chain priority interrupt hardware with diagram"
  ]
 },
 "NOTE-COA-28": {
  "noteId": "NOTE-COA-28",
  "subjectId": "COA",
  "chapter": 5,
  "title": "COA Comprehensive Question Bank (Short & Long)",
  "pageCount": 44,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "University question repository covering Part A conceptual 2-mark definitions and Part B comprehensive 5-mark design questions with point-by-point scoring guidelines.",
  "topics": [
   {
    "title": "High-Yield Part A Conceptual Definitions",
    "summary": "Key architectural terms and concise technical explanations required for full 2-mark scores.",
    "points": [
     "Bus Arbitration: Mechanism determining which bus master gains control of the shared bus.",
     "Cache Coherence: Ensuring multiple processor caches hold consistent data for the same physical memory block.",
     "Spatial vs Temporal Locality: Nearby addresses vs recently accessed addresses.",
     "Cycle Stealing: DMA transferring one memory word per CPU cycle without stalling processor.",
     "Vector Address (VAD): Address sent by interrupting device identifying starting address of ISR."
    ],
    "formulas": [
     "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
     "TLB Hit Time: EMAT = H_tlb · (T_tlb + Tm) + (1 - H_tlb) · (T_tlb + 2Tm)"
    ],
    "example": "VAD is placed directly on data bus by interrupting device during the Interrupt Acknowledge (INTA) cycle."
   },
   {
    "title": "High-Yield Part B Comprehensive Design & Numericals",
    "summary": "Step-by-step university exam solutions with diagrams, register tables, and formulas.",
    "points": [
     "Evaluating arithmetic expressions using 3-address, 2-address, 1-address, and 0-address instructions.",
     "Memory hierarchy design and cache address bit partitioning.",
     "Paging address translation using page table and TLB.",
     "Booth multiplication and restoring division step-by-step traces."
    ],
    "formulas": [
     "Evaluating X = (A + B) * (C + D): 0-address uses PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X",
     "Page Address: Physical Address = [Frame f | Offset d]"
    ],
    "example": "For expression X = (A + B) * (C + D), zero-address stack architecture requires 8 stack instructions without explicit memory address operands."
   }
  ],
  "mustKnow": [
   "Evaluating X = (A+B)*(C+D): 3-address: ADD R1,A,B; ADD R2,C,D; MUL X,R1,R2. 0-address (Stack): PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X",
   "Bus Arbitration determines which bus master controls the shared system bus",
   "Virtual Memory translates logical addresses to physical frames using a Page Table",
   "TLB is a fast hardware cache for page table entries, avoiding extra main memory references",
   "Strobe control lacks acknowledgment; Handshaking guarantees reliable reception with mutual signals"
  ]
 },
 "NOTE-OOPJ-15": {
  "noteId": "NOTE-OOPJ-15",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Swing Programming & Component Hierarchies",
  "pageCount": 34,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Faculty lecture notes from MGIT CSE on building desktop GUI applications using Java Swing. Details `JFrame`, `JPanel`, atomic components (`JButton`, `JLabel`, `JTextField`, `JCheckBox`, `JRadioButton`, `JComboBox`), Layout Managers (`FlowLayout`, `BorderLayout`, `GridLayout`), and Dialogs.",
  "topics": [
   {
    "title": "Swing Container Hierarchy: JFrame, JPanel & ContentPane",
    "summary": "Structural scaffolding of Swing window frames and component containment.",
    "points": [
     "Top-Level Containers: `JFrame`, `JDialog`, `JApplet`. Cannot be contained inside other containers; host heavy window peers.",
     "ContentPane: In Swing, components are added to the frame's content pane (`frame.getContentPane().add(comp)` or `frame.add(comp)` in Java 5+).",
     "Intermediate Containers: `JPanel` (lightweight grouping container), `JScrollPane` (scrollable viewport), `JTabbedPane`."
    ],
    "formulas": [
     "JFrame frame = new JFrame(\"Title\");",
     "frame.setSize(400, 300); frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); frame.setVisible(true);"
    ],
    "example": "Creating a standard window with close operation set to `JFrame.EXIT_ON_CLOSE` to ensure JVM terminates when window closes."
   },
   {
    "title": "Layout Managers: Flow, Border & Grid",
    "summary": "Automatic positioning and sizing of GUI components across dynamic window resizing.",
    "points": [
     "FlowLayout: Default for `JPanel`. Arranges components in a directional flow (left-to-right), wrapping to next row when space exhausts.",
     "BorderLayout: Default for `JFrame`. Divides container into 5 regions: `North`, `South`, `East`, `West`, and `Center`. Center expands to take all remaining space.",
     "GridLayout: Arranges components in an equal-sized two-dimensional grid of rows and columns (`new GridLayout(rows, cols)`).",
     "CardLayout & GridBagLayout: Tabbed card deck positioning and complex constraint-based table alignment."
    ],
    "formulas": [
     "frame.setLayout(new BorderLayout());",
     "frame.add(button, BorderLayout.SOUTH);",
     "panel.setLayout(new GridLayout(4, 4)); // 4x4 calculator grid"
    ],
    "example": "Calculator GUI using `BorderLayout` (display screen in `NORTH`, button pad in `CENTER` using a 4x4 `GridLayout`)."
   },
   {
    "title": "Atomic Components & JOptionPane Dialogs",
    "summary": "Interactive user input components and standard dialog boxes.",
    "points": [
     "Input Components: `JTextField` (single-line input), `JPasswordField` (masked text), `JTextArea` (multi-line text), `JComboBox` (dropdown list), `JCheckBox` (independent toggles), `JRadioButton` with `ButtonGroup` (mutually exclusive options).",
     "JOptionPane Utility: Static methods for modal popups: `showMessageDialog()` (alerts), `showConfirmDialog()` (Yes/No confirmations), `showInputDialog()` (reading user prompt input)."
    ],
    "formulas": [
     "JOptionPane.showMessageDialog(frame, \"Record Saved!\");",
     "ButtonGroup bg = new ButtonGroup(); bg.add(rbMale); bg.add(rbFemale);"
    ],
    "example": "A student registration form with text fields, radio buttons grouped in `ButtonGroup`, and a submit button showing confirmation dialog."
   }
  ],
  "formulas": [
   "frame.setLayout(new FlowLayout());",
   "frame.add(new JButton(\"OK\"), BorderLayout.CENTER);",
   "JOptionPane.showConfirmDialog(null, \"Are you sure?\");"
  ],
  "mustKnow": [
   "Compare FlowLayout, BorderLayout, and GridLayout with region diagrams.",
   "Write a complete Java Swing program to design a user login window with Username, Password, and Login Button.",
   "Explain the purpose of ButtonGroup when working with JRadioButton components.",
   "Explain standard JOptionPane dialog types with code snippets."
  ],
  "examTips": [
   "Always set `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);` in Swing programs so the application exits cleanly.",
   "Draw diagrams for `BorderLayout` (showing NORTH, SOUTH, EAST, WEST, CENTER) and `GridLayout` (showing rows and columns)."
  ]
 },
 "NOTE-OOPJ-16": {
  "noteId": "NOTE-OOPJ-16",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Java Swing Menu Basics & Dialog Controls",
  "pageCount": 13,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Focused lecture study handouts from MGIT CSE detailing menu system implementation in Java Swing desktop applications. Covers `JMenuBar`, `JMenu`, `JMenuItem`, checkbox/radio menu items, separators, popup menus, mnemonics, and keyboard accelerators.",
  "topics": [
   {
    "title": "Menu Component Hierarchy in Swing",
    "summary": "How desktop window menus are constructed through container hierarchy.",
    "points": [
     "JMenuBar: Top-level horizontal container docked to the `JFrame` using `frame.setJMenuBar(mb)`.",
     "JMenu: Dropdown menu element added to `JMenuBar` (e.g., 'File', 'Edit', 'View').",
     "JMenuItem: Selectable leaf item within a `JMenu` (e.g., 'Open', 'Save', 'Exit'). Generates `ActionEvent` when selected.",
     "Advanced Items: `JCheckBoxMenuItem` (toggleable state item with checkmark), `JRadioButtonMenuItem` (mutually exclusive menu options grouped in `ButtonGroup`), `JSeparator` (horizontal divider line)."
    ],
    "formulas": [
     "JMenuBar mb = new JMenuBar(); JMenu menu = new JMenu(\"File\"); JMenuItem item = new JMenuItem(\"New\");",
     "menu.add(item); mb.add(menu); frame.setJMenuBar(mb);"
    ],
    "example": "Building a 'File' menu with 'New', 'Open', a separator, and 'Exit' that closes the window."
   },
   {
    "title": "Mnemonics, Accelerators & Popup Menus",
    "summary": "Keyboard shortcuts and context-sensitive right-click menus.",
    "points": [
     "Mnemonics: Visual underline shortcut triggered via Alt + Key (`menu.setMnemonic(KeyEvent.VK_F)` triggers File menu via Alt+F).",
     "Accelerators: Global keyboard shortcut triggered without opening menu via Ctrl + Key (`item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_S, ActionEvent.CTRL_MASK))` for Ctrl+S Save).",
     "JPopupMenu: Standalone context menu popped up at mouse coordinates using `popup.show(e.getComponent(), e.getX(), e.getY())` on mouse right-click."
    ],
    "formulas": [
     "item.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O, ActionEvent.CTRL_MASK));",
     "popup.show(panel, e.getX(), e.getY());"
    ],
    "example": "A right-click context popup menu providing 'Copy', 'Cut', and 'Paste' options in a text editing area."
   }
  ],
  "formulas": [
   "frame.setJMenuBar(menuBar);",
   "menu.addSeparator();",
   "item.addActionListener(e -> System.exit(0));"
  ],
  "mustKnow": [
   "Explain the hierarchy of menu components in Java Swing.",
   "Write a complete Swing program to implement a menu bar with File and Edit menus and items.",
   "Differentiate between Mnemonics and Accelerators in Java Swing with code.",
   "How do you implement a context popup menu using JPopupMenu?"
  ],
  "examTips": [
   "Remember that a menu bar is added using `frame.setJMenuBar(mb)`, NOT `frame.add(mb)`."
  ]
 },
 "NOTE-OOPJ-17": {
  "noteId": "NOTE-OOPJ-17",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Question Bank with Model Answers",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Official MGIT CSE Department examination solutions for Unit 5 question bank. Covers 1-mark definitions and 5-mark programming questions for Swing GUI forms, calculator layouts, Applet lifecycle, and JDBC database operations.",
  "topics": [
   {
    "title": "Swing GUI Programming Question Bank Models",
    "summary": "Complete code models for interactive Swing applications.",
    "points": [
     "Calculator Layout: 16-button calculator grid using `BorderLayout` and `GridLayout` with event handling for arithmetic operations.",
     "User Registration Form: Window containing Name, Password, Gender (RadioButtons), Branch (JComboBox), and Submit button validating input.",
     "Color Chooser & Sliders: Code models dynamically updating background color using event listeners."
    ],
    "formulas": [
     "JButton b = new JButton(\"+\"); b.addActionListener(this);",
     "JComboBox<String> cb = new JComboBox<>(new String[]{\"CSE\", \"IT\", \"ECE\"});"
    ],
    "example": "A complete Java Swing program implementing a login authentication form with status feedback."
   },
   {
    "title": "JDBC Database Programming Question Bank Models",
    "summary": "Complete database access code models using JDBC API.",
    "points": [
     "PreparedStatement CRUD: Inserting student records (`INSERT INTO students VALUES(?, ?, ?)`) using parameterized SQL queries to prevent SQL Injection.",
     "ResultSet Navigation: Iterating across rows using `rs.next()`, extracting columns via `rs.getInt(1)`, `rs.getString(2)`.",
     "Transaction Management: Disabling auto-commit (`con.setAutoCommit(false)`), executing multi-table updates, and calling `con.commit()` or `con.rollback()` on failure."
    ],
    "formulas": [
     "PreparedStatement ps = con.prepareStatement(\"INSERT INTO emp VALUES(?, ?)\");",
     "ps.setInt(1, id); ps.setString(2, name); ps.executeUpdate();",
     "con.setAutoCommit(false); con.commit();"
    ],
    "example": "An employee payroll update program using `PreparedStatement` with transaction rollback upon exception."
   }
  ],
  "formulas": [
   "PreparedStatement pstmt = con.prepareStatement(sql);",
   "pstmt.executeUpdate();",
   "while(rs.next()) { System.out.println(rs.getString(\"name\")); }"
  ],
  "mustKnow": [
   "Explain the differences between Statement and PreparedStatement with code examples.",
   "Write a complete Java program to insert employee records into a database using JDBC.",
   "Write a Java Swing program to create a functional 4-function calculator GUI.",
   "Explain transaction management in JDBC using commit() and rollback()."
  ],
  "examTips": [
   "When writing JDBC code in exams, always include `Class.forName()`, `DriverManager.getConnection()`, try-catch block handling `SQLException`, and closing resources.",
   "Highlight that `PreparedStatement` pre-compiles queries and prevents SQL Injection attacks."
  ]
 },
 "NOTE-OOPJ-18": {
  "noteId": "NOTE-OOPJ-18",
  "subjectId": "OOPJ",
  "chapter": 4,
  "chapters": [
   4,
   5
  ],
  "title": "Units 4 & 5: AWT, Swings, Event Handling & Layout Managers",
  "pageCount": 44,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Combined master review notes authored by MGIT CSE Faculty synthesizing Units 4 and 5. Provides comprehensive comparative studies of AWT vs. Swing, end-to-end Delegation Event Model architectures, Layout Managers, and advanced Swing component programming.",
  "topics": [
   {
    "title": "Comprehensive AWT vs. Swing Comparative Analysis",
    "summary": "Detailed structural comparison across 10 architectural parameters.",
    "points": [
     "Architecture: AWT components wrap native operating system peers (heavyweight); Swing components are rendered directly in Java (lightweight).",
     "Look and Feel: AWT enforces native platform look; Swing provides Pluggable Look and Feel (PLAF) supporting consistent cross-platform themes.",
     "Performance & Components: AWT uses more system resources and offers basic controls; Swing provides rich components (tables, trees, tabbed panes, tooltips).",
     "Package: AWT resides in `java.awt`; Swing resides in `javax.swing`."
    ],
    "formulas": [
     "AWT: java.awt.Button (Heavyweight, Native OS Peer)",
     "Swing: javax.swing.JButton (Lightweight, 100% Pure Java)"
    ],
    "example": "An AWT button looks like a Windows button on Windows and a Mac button on macOS; a Swing button renders identically across all operating systems."
   },
   {
    "title": "Complete Layout Management Reference",
    "summary": "Comparative synthesis and code templates for all 5 standard layout managers.",
    "points": [
     "FlowLayout: Default for `JPanel`, wraps components naturally like words in a paragraph.",
     "BorderLayout: Default for `JFrame`, allocates space to 5 geographic zones (North, South, East, West, Center).",
     "GridLayout: Rigid matrix of M rows by N columns where all cells possess identical dimensions.",
     "CardLayout: Manages multiple panels stacked like a deck of cards, displaying one panel at a time."
    ],
    "formulas": [
     "BorderLayout: 5 Regions (NORTH, SOUTH, EAST, WEST, CENTER)",
     "GridLayout: equal width = ContainerWidth / cols, equal height = ContainerHeight / rows"
    ],
    "example": "Nesting layout managers: A `JFrame` with `BorderLayout` holds a `JPanel` in `SOUTH` configured with `FlowLayout` to center OK and Cancel buttons."
   }
  ],
  "formulas": [
   "frame.setLayout(new BorderLayout(hgap, vgap));",
   "cardLayout.show(cardPanel, \"CardName\");"
  ],
  "mustKnow": [
   "Provide an exhaustive 10-point comparison between AWT and Swing in tabular format.",
   "Explain how layout managers simplify GUI development across different screen resolutions.",
   "Explain how nesting panels with different layout managers enables complex desktop application layouts."
  ],
  "examTips": [
   "Draw clean comparative diagrams showing native peer interaction in AWT vs direct rendering in Swing."
  ]
 },
 "NOTE-OOPJ-19": {
  "noteId": "NOTE-OOPJ-19",
  "subjectId": "OOPJ",
  "chapter": 1,
  "chapters": [
   1,
   2,
   3,
   4,
   5
  ],
  "title": "Complete Java Architecture & Concepts Master Presentation",
  "pageCount": 36,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Master lecture presentation slides authored by MGIT CSE Faculty covering the complete conceptual architecture of Java, OOP foundations, JVM execution engine, multithreading synchronization, and GUI programming frameworks.",
  "topics": [
   {
    "title": "Java Architectural Paradigm & Platform Independence",
    "summary": "Executive summary of Java's architecture, bytecode compilation, and security sandbox.",
    "points": [
     "Oak Genesis: Designed for embedded systems, adapted for the World Wide Web.",
     "Compilation & Execution Pipeline: Javac compiler translates high-level Java to intermediate bytecode; JVM interprets or JIT-compiles bytecode into native machine instructions.",
     "Security Architecture: Bytecode verifier prevents illegal memory access, Class Loader isolates namespaces, Security Manager restricts system resources."
    ],
    "formulas": [
     "Security Sandbox: ClassLoader -> Bytecode Verifier -> SecurityManager -> OS"
    ],
    "example": "Applets and web applications executing in restricted sandboxes without read/write access to client disk files."
   },
   {
    "title": "Summary of Core Semester Exam Topics",
    "summary": "Quick revision guide summarizing high-yield topics across Units 1 to 5.",
    "points": [
     "Unit 1: JVM Architecture, OOP Principles, Bytecode, Primitives, Arrays.",
     "Unit 2: Inheritance, Dynamic Method Dispatch, Abstract Classes, Packages, Interfaces.",
     "Unit 3: Exception Hierarchy, Checked vs Unchecked, Finally, Multithreading, Synchronization, Deadlock.",
     "Unit 4: Streams Hierarchy, Character vs Byte, BufferedReader, Serialization, Strings, Collections.",
     "Unit 5: Swing vs AWT, MVC Pattern, Layout Managers, Delegation Event Model, JDBC Architecture."
    ],
    "formulas": [
     "Semester Formula: OOP Basics -> Concurrency & Robustness -> I/O & Collections -> GUI & JDBC"
    ],
    "example": "Synthesizing full semester preparation by mastering the core pillars of Java."
   }
  ],
  "formulas": [
   "Java = Language + JVM + API Libraries"
  ],
  "mustKnow": [
   "Provide an architectural overview of Java and explain why it remains the premier enterprise language.",
   "Summarize the key differences between compile-time and runtime polymorphism with examples."
  ],
  "examTips": [
   "Use this master summary slide deck for final 1-hour rapid revision before entering the exam hall."
  ]
 },
 "NOTE-DBMS-02": {
  "noteId": "NOTE-DBMS-02",
  "subjectId": "DBMS",
  "subject": "Database Management Systems",
  "title": "DBMS Unit 4 Lecture Notes: Transactions, Concurrency & Recovery",
  "overview": "Comprehensive faculty lecture notes covering Transaction Management, ACID properties, Transaction States, Schedules, Conflict and View Serializability, Concurrency Control Protocols (2PL, Strict 2PL, Timestamp Ordering), Deadlock Management, and Database Recovery Systems (WAL, Checkpointing, Shadow Paging, ARIES).",
  "topics": [
   {
    "name": "1. Transaction Concept, States & ACID Properties",
    "subtopics": [
     "Transaction Definition: A logical unit of database processing that includes one or more database access operations (read, write)",
     "ACID Properties: Atomicity (all-or-nothing), Consistency (preserves database invariants), Isolation (transactions execute independently), Durability (committed changes persist)",
     "Transaction State Diagram: Active, Partially Committed, Failed, Aborted (Rollback), and Committed",
     "Concurrent Executions & Anomalies: Lost Update problem, Temporary Update (Dirty Read) problem, Unrepeatable Read problem, and Phantom Read problem",
     "Transaction Schedules: Serial Schedules vs. Concurrent (Non-serial) Schedules"
    ],
    "keyTakeaway": "A transaction must maintain all ACID properties. Concurrency anomalies occur when multiple transactions interleave execution without proper isolation. Serial schedules execute transactions sequentially without interleaving, ensuring consistency but suffering from very low CPU throughput and long response times.",
    "title": "1. Transaction Concept, States & ACID Properties",
    "summary": "A transaction must maintain all ACID properties. Concurrency anomalies occur when multiple transactions interleave execution without proper isolation. Serial schedules execute transactions sequentially without interleaving, ensuring consistency but suffering from very low CPU throughput and long response times.",
    "points": [
     "Transaction Definition: A logical unit of database processing that includes one or more database access operations (read, write)",
     "ACID Properties: Atomicity (all-or-nothing), Consistency (preserves database invariants), Isolation (transactions execute independently), Durability (committed changes persist)",
     "Transaction State Diagram: Active, Partially Committed, Failed, Aborted (Rollback), and Committed",
     "Concurrent Executions & Anomalies: Lost Update problem, Temporary Update (Dirty Read) problem, Unrepeatable Read problem, and Phantom Read problem",
     "Transaction Schedules: Serial Schedules vs. Concurrent (Non-serial) Schedules"
    ]
   },
   {
    "name": "2. Serializability: Conflict Serializability & View Serializability",
    "subtopics": [
     "Conflicting Operations: Two operations conflict if they belong to different transactions, access the exact same data item, and at least one operation is a WRITE",
     "Conflict Serializability: A schedule S is conflict serializable if it can be transformed into a serial schedule via non-conflicting operation swaps",
     "Precedence Graph (Serialization Graph): Directed graph G = (V, E) where transactions are vertices; directed edge Ti → Tj exists if Ti performs an operation conflicting with a subsequent operation in Tj",
     "Testing Conflict Serializability: A schedule is conflict serializable if and only if its Precedence Graph is acyclic (contains no cycles); topological sort provides equivalent serial order",
     "View Serializability: Weaker condition based on initial read, updated read, and final write equivalence; View serializable without conflict serializability requires blind writes",
     "Recoverable Schedules and Cascadeless Schedules: Schedules that avoid cascading rollbacks by ensuring Ti commits before Tj reads data written by Ti"
    ],
    "keyTakeaway": "Conflict serializability is the standard correctness criterion enforced by concurrency control managers. Testing acyclicity via Precedence Graphs is computationally efficient (O(V + E)), whereas testing view serializability is NP-complete in the general case.",
    "title": "2. Serializability: Conflict Serializability & View Serializability",
    "summary": "Conflict serializability is the standard correctness criterion enforced by concurrency control managers. Testing acyclicity via Precedence Graphs is computationally efficient (O(V + E)), whereas testing view serializability is NP-complete in the general case.",
    "points": [
     "Conflicting Operations: Two operations conflict if they belong to different transactions, access the exact same data item, and at least one operation is a WRITE",
     "Conflict Serializability: A schedule S is conflict serializable if it can be transformed into a serial schedule via non-conflicting operation swaps",
     "Precedence Graph (Serialization Graph): Directed graph G = (V, E) where transactions are vertices; directed edge Ti → Tj exists if Ti performs an operation conflicting with a subsequent operation in Tj",
     "Testing Conflict Serializability: A schedule is conflict serializable if and only if its Precedence Graph is acyclic (contains no cycles); topological sort provides equivalent serial order",
     "View Serializability: Weaker condition based on initial read, updated read, and final write equivalence; View serializable without conflict serializability requires blind writes",
     "Recoverable Schedules and Cascadeless Schedules: Schedules that avoid cascading rollbacks by ensuring Ti commits before Tj reads data written by Ti"
    ]
   },
   {
    "name": "3. Concurrency Control Protocols: Two-Phase Locking & Timestamps",
    "subtopics": [
     "Lock-Based Protocols: Shared locks (S-lock / Read lock) and Exclusive locks (X-lock / Write lock); Lock compatibility matrix",
     "Two-Phase Locking (2PL): Growing Phase (acquiring locks, no locks released) and Shrinking Phase (releasing locks, no new locks acquired); guarantees conflict serializability",
     "Variations of 2PL: Strict 2PL (holds all exclusive locks until commit/abort to ensure cascadelessness) and Rigorous 2PL (holds all S and X locks until commit to ensure strict serializability)",
     "Deadlocks in Locking Protocols: Conditions for deadlock; Prevention schemes (Wait-Die non-preemptive vs. Wound-Wait preemptive using timestamps); Detection via Wait-For Graphs (WFG) and victim selection",
     "Timestamp-Based Concurrency Control: Read-Timestamp R-TS(Q) and Write-Timestamp W-TS(Q); Thomas' Write Rule for obsolete write suppression"
    ],
    "keyTakeaway": "Basic 2PL guarantees conflict serializability but is vulnerable to cascading aborts and deadlocks. Strict 2PL eliminates cascading rollbacks by holding exclusive locks until transaction completion, making it the de facto protocol in commercial relational database engines.",
    "title": "3. Concurrency Control Protocols: Two-Phase Locking & Timestamps",
    "summary": "Basic 2PL guarantees conflict serializability but is vulnerable to cascading aborts and deadlocks. Strict 2PL eliminates cascading rollbacks by holding exclusive locks until transaction completion, making it the de facto protocol in commercial relational database engines.",
    "points": [
     "Lock-Based Protocols: Shared locks (S-lock / Read lock) and Exclusive locks (X-lock / Write lock); Lock compatibility matrix",
     "Two-Phase Locking (2PL): Growing Phase (acquiring locks, no locks released) and Shrinking Phase (releasing locks, no new locks acquired); guarantees conflict serializability",
     "Variations of 2PL: Strict 2PL (holds all exclusive locks until commit/abort to ensure cascadelessness) and Rigorous 2PL (holds all S and X locks until commit to ensure strict serializability)",
     "Deadlocks in Locking Protocols: Conditions for deadlock; Prevention schemes (Wait-Die non-preemptive vs. Wound-Wait preemptive using timestamps); Detection via Wait-For Graphs (WFG) and victim selection",
     "Timestamp-Based Concurrency Control: Read-Timestamp R-TS(Q) and Write-Timestamp W-TS(Q); Thomas' Write Rule for obsolete write suppression"
    ]
   },
   {
    "name": "4. Database Recovery Systems & Fault Tolerance",
    "subtopics": [
     "Failure Classification: Transaction failure (logical error, internal abort), System crash (power failure, OS panic), and Disk failure (head crash, bad blocks)",
     "Write-Ahead Logging (WAL) Protocol: Log records must be flushed to persistent non-volatile disk before corresponding dirty data blocks are written to disk",
     "Log-Based Recovery Schemes: Deferred Database Modification (NO-UNDO/REDO) vs. Immediate Database Modification (UNDO/REDO)",
     "Checkpointing: Periodically flushing dirty memory buffers and recording checkpoint logs to limit log traversal time during crash restart",
     "Shadow Paging: Alternative recovery technique maintaining two page tables (Current and Shadow) eliminating the need for REDO/UNDO logs",
     "ARIES Recovery Algorithm: Advanced industrial recovery protocol executing three passes: Analysis Pass, Redo Pass (Repeating History), and Undo Pass"
    ],
    "keyTakeaway": "Database recovery ensures the Atomicity and Durability of transactions despite hardware crashes. The WAL protocol prevents unrecoverable disk states. Checkpoints bound the recovery duration so the system only needs to process log records since the most recent checkpoint rather than scanning the entire log from the beginning of time.",
    "title": "4. Database Recovery Systems & Fault Tolerance",
    "summary": "Database recovery ensures the Atomicity and Durability of transactions despite hardware crashes. The WAL protocol prevents unrecoverable disk states. Checkpoints bound the recovery duration so the system only needs to process log records since the most recent checkpoint rather than scanning the entire log from the beginning of time.",
    "points": [
     "Failure Classification: Transaction failure (logical error, internal abort), System crash (power failure, OS panic), and Disk failure (head crash, bad blocks)",
     "Write-Ahead Logging (WAL) Protocol: Log records must be flushed to persistent non-volatile disk before corresponding dirty data blocks are written to disk",
     "Log-Based Recovery Schemes: Deferred Database Modification (NO-UNDO/REDO) vs. Immediate Database Modification (UNDO/REDO)",
     "Checkpointing: Periodically flushing dirty memory buffers and recording checkpoint logs to limit log traversal time during crash restart",
     "Shadow Paging: Alternative recovery technique maintaining two page tables (Current and Shadow) eliminating the need for REDO/UNDO logs",
     "ARIES Recovery Algorithm: Advanced industrial recovery protocol executing three passes: Analysis Pass, Redo Pass (Repeating History), and Undo Pass"
    ]
   }
  ],
  "formulas": [
   "Conflict Serializability: \\(\\text{Schedule } S \\text{ is conflict serializable} \\iff \\text{Precedence Graph } G(S) \\text{ is acyclic}\\)",
   "Lock Compatibility: \\(\\text{Compatible}(S, S) = \\text{True},\\text{ Compatible}(S, X) = \\text{False},\\text{ Compatible}(X, X) = \\text{False}\\)",
   "Wait-Die Scheme (Non-preemptive): \\(\\text{If } T_i \\text{ requests lock held by } T_j\\text{: if } TS(T_i) < TS(T_j) \\text{ then Wait, else Die (rollback)}\\)",
   "Wound-Wait Scheme (Preemptive): \\(\\text{If } T_i \\text{ requests lock held by } T_j\\text{: if } TS(T_i) < TS(T_j) \\text{ then Wound (abort } T_j\\text{), else Wait}\\)",
   "Timestamp Ordering Read Rule: \\(\\text{If } TS(T) < W\\text{-}TS(Q)\\text{, reject and rollback } T\\text{; else allow read and set } R\\text{-}TS(Q) = \\max(R\\text{-}TS(Q), TS(T))\\)",
   "Timestamp Ordering Write Rule: \\(\\text{If } TS(T) < R\\text{-}TS(Q) \\text{ or } TS(T) < W\\text{-}TS(Q)\\text{, reject and rollback } T\\text{; else allow write and set } W\\text{-}TS(Q) = TS(T)\\)",
   "Thomas' Write Rule: \\(\\text{If } TS(T) < W\\text{-}TS(Q)\\text{, ignore the obsolete write and continue without aborting}\\)"
  ],
  "mustKnowQuestions": [
   "Explain the ACID properties of transactions. How does the DBMS enforce each individual property?",
   "What is Conflict Serializability? Construct the Precedence Graph for a given concurrent schedule and determine whether it is serializable.",
   "Explain the Two-Phase Locking (2PL) protocol. Differentiate between Basic 2PL, Strict 2PL, and Rigorous 2PL with lock conversion diagrams.",
   "Compare Wait-Die and Wound-Wait deadlock prevention algorithms with concrete timestamp scenarios.",
   "Explain Log-Based Recovery with Immediate and Deferred Database Modification schemes. How do Checkpoints accelerate crash recovery?",
   "Describe the ARIES recovery algorithm detailing the Analysis, Redo, and Undo passes."
  ],
  "examTips": [
   "In precedence graphs, always draw edges between different transactions accessing the same item where at least one operation is a Write: Read-Write, Write-Read, or Write-Write.",
   "Remember that Strict 2PL holds exclusive locks until commit/abort, while Rigorous 2PL holds BOTH shared and exclusive locks until commit.",
   "In log-based recovery with immediate modification: if a transaction has a START but no COMMIT log before the crash, it must be UNDONE; if it has both START and COMMIT, it must be REDONE."
  ],
  "chapter": 4,
  "mustKnow": [
   "Explain the ACID properties of transactions. How does the DBMS enforce each individual property?",
   "What is Conflict Serializability? Construct the Precedence Graph for a given concurrent schedule and determine whether it is serializable.",
   "Explain the Two-Phase Locking (2PL) protocol. Differentiate between Basic 2PL, Strict 2PL, and Rigorous 2PL with lock conversion diagrams.",
   "Compare Wait-Die and Wound-Wait deadlock prevention algorithms with concrete timestamp scenarios.",
   "Explain Log-Based Recovery with Immediate and Deferred Database Modification schemes. How do Checkpoints accelerate crash recovery?",
   "Describe the ARIES recovery algorithm detailing the Analysis, Redo, and Undo passes."
  ]
 },
 "NOTE-DBMS-03": {
  "noteId": "NOTE-DBMS-03",
  "subjectId": "DBMS",
  "subject": "Database Management Systems",
  "title": "DBMS Unit 5 Lecture Notes: File Organization, Indexing & B+ Trees",
  "overview": "Comprehensive faculty lecture notes covering Physical Storage Media hierarchy, Record and Page formats, File Organization (Heap, Sorted, Hash), Indexing fundamentals, Primary vs. Secondary indices, Dense vs. Sparse indices, Multi-level Indexing, B-Trees and B+ Trees (Structure, Search, Insertion, Deletion, Fan-out, Height), and Static vs. Dynamic Hashing (Extendible and Linear Hashing).",
  "topics": [
   {
    "name": "1. Storage Media, Record Formats & File Organization",
    "subtopics": [
     "Storage Device Hierarchy: Primary storage (Cache, Main Memory), Secondary storage (Flash, Magnetic Disks), Tertiary storage (Optical, Tape)",
     "Disk Architecture: Platters, Tracks, Sectors, Cylinders, Read/Write heads, Seek time, Rotational latency, and Transfer rate",
     "Buffer Management: Buffer Pool, Frame Table, Replacement Policies (LRU, Clock, Pinning dirty pages)",
     "Record Organization: Fixed-Length Records vs. Variable-Length Records (Null Bitmaps, Offset arrays, Slotted-Page Architecture)",
     "File Organization Methods: Heap Files (unordered), Sorted / Sequential Files, and Hashed Files; Comparison of I/O cost for Scan, Equality Search, Range Search, Insert, and Delete"
    ],
    "keyTakeaway": "Databases minimize costly mechanical disk I/O through disciplined page formatting and buffer management. Slotted-page architecture enables variable-length records with pointer arrays. Heap files are optimal for fast bulk inserts (O(1)), while sorted files excel at range queries and binary search at the expense of high insertion overhead.",
    "title": "1. Storage Media, Record Formats & File Organization",
    "summary": "Databases minimize costly mechanical disk I/O through disciplined page formatting and buffer management. Slotted-page architecture enables variable-length records with pointer arrays. Heap files are optimal for fast bulk inserts (O(1)), while sorted files excel at range queries and binary search at the expense of high insertion overhead.",
    "points": [
     "Storage Device Hierarchy: Primary storage (Cache, Main Memory), Secondary storage (Flash, Magnetic Disks), Tertiary storage (Optical, Tape)",
     "Disk Architecture: Platters, Tracks, Sectors, Cylinders, Read/Write heads, Seek time, Rotational latency, and Transfer rate",
     "Buffer Management: Buffer Pool, Frame Table, Replacement Policies (LRU, Clock, Pinning dirty pages)",
     "Record Organization: Fixed-Length Records vs. Variable-Length Records (Null Bitmaps, Offset arrays, Slotted-Page Architecture)",
     "File Organization Methods: Heap Files (unordered), Sorted / Sequential Files, and Hashed Files; Comparison of I/O cost for Scan, Equality Search, Range Search, Insert, and Delete"
    ]
   },
   {
    "name": "2. Indexing Fundamentals: Primary, Secondary, Dense & Sparse Indices",
    "subtopics": [
     "Index Concept: An auxiliary data file containing ordered (Search-Key, Pointer) pairs to speed up records retrieval without full table scan",
     "Ordered Index Taxonomy: Primary Index (built on primary key of a sequentially ordered data file), Clustered Index (built on non-key ordering attribute), and Secondary Index (built on non-ordering attributes)",
     "Dense Index: Contains an index entry for every single search-key value in the data file (mandatory for secondary indices)",
     "Sparse Index: Contains index entries for only some search-key values (typically one entry per physical disk block of ordered data)",
     "Comparison: Dense indices consume more disk storage but locate records faster; Sparse indices have smaller memory footprint but require searching within the block",
     "Multilevel Indexing: Creating a sparse outer index over an inner index when the primary index itself exceeds main memory capacity"
    ],
    "keyTakeaway": "An index drastically reduces the number of block accesses required to satisfy queries. A primary index can be sparse because the underlying data file is sorted on the search key, whereas a secondary index MUST be dense because data records are scattered across unordered disk blocks.",
    "title": "2. Indexing Fundamentals: Primary, Secondary, Dense & Sparse Indices",
    "summary": "An index drastically reduces the number of block accesses required to satisfy queries. A primary index can be sparse because the underlying data file is sorted on the search key, whereas a secondary index MUST be dense because data records are scattered across unordered disk blocks.",
    "points": [
     "Index Concept: An auxiliary data file containing ordered (Search-Key, Pointer) pairs to speed up records retrieval without full table scan",
     "Ordered Index Taxonomy: Primary Index (built on primary key of a sequentially ordered data file), Clustered Index (built on non-key ordering attribute), and Secondary Index (built on non-ordering attributes)",
     "Dense Index: Contains an index entry for every single search-key value in the data file (mandatory for secondary indices)",
     "Sparse Index: Contains index entries for only some search-key values (typically one entry per physical disk block of ordered data)",
     "Comparison: Dense indices consume more disk storage but locate records faster; Sparse indices have smaller memory footprint but require searching within the block",
     "Multilevel Indexing: Creating a sparse outer index over an inner index when the primary index itself exceeds main memory capacity"
    ]
   },
   {
    "name": "3. Tree-Structured Indexing: B-Trees and B+ Trees",
    "subtopics": [
     "Limitations of Binary Search Trees on Disk: Low fan-out leads to deep trees requiring excessive disk seeks",
     "B-Tree Structure: Balanced multi-way search tree where internal nodes store both search keys and data record pointers",
     "B+ Tree Architecture: Standard balanced tree where all data record pointers reside strictly in the leaf nodes, connected horizontally via bidirectional pointers as a doubly linked list",
     "B+ Tree Node Properties: Parameter p (order / fan-out); Internal nodes contain at most p child pointers and p - 1 search keys; Leaf nodes contain at least ⌈(p - 1)/2⌉ search keys",
     "B+ Tree Operations: Search (O(log_B N)), Insertion with node splitting and key promotion, and Deletion with underflow merging / redistribution",
     "Why B+ Trees are Superior to B-Trees for Databases: Higher fan-out reduces tree height; leaf-level linked list enables blazing-fast sequential range scans"
    ],
    "keyTakeaway": "The B+ Tree is the most widely implemented index structure in relational databases. Because internal nodes only store navigation keys and no data pointers, the fan-out is very large (typically 100 to 200), keeping tree height at 3 or 4 levels even for millions of records, guaranteeing data retrieval in at most 3 to 4 disk reads.",
    "title": "3. Tree-Structured Indexing: B-Trees and B+ Trees",
    "summary": "The B+ Tree is the most widely implemented index structure in relational databases. Because internal nodes only store navigation keys and no data pointers, the fan-out is very large (typically 100 to 200), keeping tree height at 3 or 4 levels even for millions of records, guaranteeing data retrieval in at most 3 to 4 disk reads.",
    "points": [
     "Limitations of Binary Search Trees on Disk: Low fan-out leads to deep trees requiring excessive disk seeks",
     "B-Tree Structure: Balanced multi-way search tree where internal nodes store both search keys and data record pointers",
     "B+ Tree Architecture: Standard balanced tree where all data record pointers reside strictly in the leaf nodes, connected horizontally via bidirectional pointers as a doubly linked list",
     "B+ Tree Node Properties: Parameter p (order / fan-out); Internal nodes contain at most p child pointers and p - 1 search keys; Leaf nodes contain at least ⌈(p - 1)/2⌉ search keys",
     "B+ Tree Operations: Search (O(log_B N)), Insertion with node splitting and key promotion, and Deletion with underflow merging / redistribution",
     "Why B+ Trees are Superior to B-Trees for Databases: Higher fan-out reduces tree height; leaf-level linked list enables blazing-fast sequential range scans"
    ]
   },
   {
    "name": "4. Hash-Based Indexing: Static Hashing vs. Dynamic Hashing",
    "subtopics": [
     "Hash Function: Mapping search keys uniformly and randomly across a fixed range of bucket addresses h(K) → Bucket Address",
     "Static Hashing: Fixed number of buckets; bucket overflow handled via Overflow Chaining (linked lists of overflow buckets) or Open Addressing; suffers when database size fluctuates dramatically",
     "Dynamic Hashing: Adapts dynamically to database growth and shrinkage without rehashing the entire file",
     "Extendible Hashing: Uses a directory of bucket pointers with Global Depth (d) and Local Depth (d_local) for each bucket; bucket splits double directory size only when local depth equals global depth",
     "Linear Hashing: Systematically splits buckets in round-robin order using a split pointer without requiring a global directory structure",
     "Comparison of Hash-Based vs. Tree-Based Indexing: Hash indexes provide O(1) equality searches but cannot support range queries; B+ Trees support both equality and range queries in O(log N)"
    ],
    "keyTakeaway": "Hash indexing provides instantaneous O(1) point lookups based on exact key matching. Static hashing degrades severely with overflow chains under heavy data growth. Extendible hashing gracefully doubles directory pointers while maintaining O(1) lookups. However, for general relational database workloads with range scans, B+ Trees remain superior.",
    "title": "4. Hash-Based Indexing: Static Hashing vs. Dynamic Hashing",
    "summary": "Hash indexing provides instantaneous O(1) point lookups based on exact key matching. Static hashing degrades severely with overflow chains under heavy data growth. Extendible hashing gracefully doubles directory pointers while maintaining O(1) lookups. However, for general relational database workloads with range scans, B+ Trees remain superior.",
    "points": [
     "Hash Function: Mapping search keys uniformly and randomly across a fixed range of bucket addresses h(K) → Bucket Address",
     "Static Hashing: Fixed number of buckets; bucket overflow handled via Overflow Chaining (linked lists of overflow buckets) or Open Addressing; suffers when database size fluctuates dramatically",
     "Dynamic Hashing: Adapts dynamically to database growth and shrinkage without rehashing the entire file",
     "Extendible Hashing: Uses a directory of bucket pointers with Global Depth (d) and Local Depth (d_local) for each bucket; bucket splits double directory size only when local depth equals global depth",
     "Linear Hashing: Systematically splits buckets in round-robin order using a split pointer without requiring a global directory structure",
     "Comparison of Hash-Based vs. Tree-Based Indexing: Hash indexes provide O(1) equality searches but cannot support range queries; B+ Trees support both equality and range queries in O(log N)"
    ]
   }
  ],
  "formulas": [
   "Disk Access Time: \\(\\text{Access Time} = \\text{Seek Time} + \\text{Rotational Latency} + \\text{Transfer Time}\\)",
   "Rotational Latency: \\(\\text{Average Latency} = \\frac{1}{2 \\times \\text{RPM}} \\times 60\\text{ seconds}\\)",
   "B+ Tree Order (Fan-out) Calculation: \\(p \\times P_{\\text{ptr}} + (p - 1) \\times K_{\\text{size}} \\le B_{\\text{size}}\\) (where \\(B\\) is block size, \\(P\\) is pointer size, \\(K\\) is key size)",
   "B+ Tree Height Bound: \\(\\text{Height} \\le \\lceil \\log_{\\lceil p/2 \\rceil} (N) \\rceil\\) (where \\(N\\) is total leaf records)",
   "Extendible Hashing Directory Size: \\(\\text{Directory Size} = 2^{d}\\) (where \\(d\\) is Global Depth)",
   "Extendible Hashing Bucket Splitting Condition: \\(\\text{Directory doubles when a bucket overflows and } d_{\\text{local}} = d\\)"
  ],
  "mustKnowQuestions": [
   "Compare and contrast Primary Index, Secondary Index, and Clustered Index with clear diagrams.",
   "Differentiate between Dense Index and Sparse Index. Why can a primary index be sparse while a secondary index must be dense?",
   "Explain the structure of a B+ Tree. Given block size, key size, and pointer size, calculate the maximum fan-out and maximum height of a B+ tree.",
   "Show step-by-step insertion of keys into a B+ Tree of order 4, illustrating node splits, key promotions, and leaf chaining.",
   "Explain Extendible Hashing. Illustrate bucket splits and directory doubling when inserting records into an extendible hash table.",
   "Compare B+ Tree Indexing with Hash Indexing. Under what conditions is a B+ Tree preferred over a Hash Index?"
  ],
  "examTips": [
   "When calculating B+ tree fan-out: remember that a node with p pointers holds p - 1 search keys. Solve p * PointerSize + (p - 1) * KeySize <= BlockSize for integer p.",
   "In B+ tree node splits: when a leaf splits, the middle key is copied up into the parent AND retained in the right leaf; when an internal node splits, the middle key is promoted to the parent and NOT retained in the child.",
   "Remember that Hash indices CANNOT handle range queries (`BETWEEN`, `>`, `<`); whenever an exam question asks about range performance, B+ tree is always the answer."
  ],
  "chapter": 5,
  "mustKnow": [
   "Compare and contrast Primary Index, Secondary Index, and Clustered Index with clear diagrams.",
   "Differentiate between Dense Index and Sparse Index. Why can a primary index be sparse while a secondary index must be dense?",
   "Explain the structure of a B+ Tree. Given block size, key size, and pointer size, calculate the maximum fan-out and maximum height of a B+ tree.",
   "Show step-by-step insertion of keys into a B+ Tree of order 4, illustrating node splits, key promotions, and leaf chaining.",
   "Explain Extendible Hashing. Illustrate bucket splits and directory doubling when inserting records into an extendible hash table.",
   "Compare B+ Tree Indexing with Hash Indexing. Under what conditions is a B+ Tree preferred over a Hash Index?"
  ]
 },
 "NOTE-DBMS-04": {
  "noteId": "NOTE-DBMS-04",
  "subjectId": "DBMS",
  "subject": "Database Management Systems",
  "title": "DBMS Concurrency Control & Two-Phase Locking Architecture Slides",
  "overview": "Official university lecture slides explaining Lock-Based Protocols, Shared/Exclusive Locks, Two-Phase Locking (2PL), Strict 2PL, Rigorous 2PL, Lock Conversions, Deadlock prevention (Wait-Die, Wound-Wait) and detection via Wait-For Graphs.",
  "topics": [
   {
    "name": "1. Lock-Based Protocols & Lock Conversions",
    "subtopics": [
     "Lock Modes: Shared (S) lock for reading; Exclusive (X) lock for reading and writing",
     "Lock Compatibility Matrix: Only (S, S) requests are compatible concurrently; all other combinations block",
     "Lock Conversion Mechanism: Upgrading a Shared lock to Exclusive lock during growing phase; Downgrading an Exclusive lock to Shared lock during shrinking phase",
     "Pitfalls of Locking: Starvation (transactions indefinitely delayed waiting for locks) and Deadlock (circular blocking)"
    ],
    "keyTakeaway": "Locks prevent concurrent transactions from corrupting data items. Upgrading locks allows transactions to read without blocking other readers until a write is strictly necessary, optimizing concurrency.",
    "title": "1. Lock-Based Protocols & Lock Conversions",
    "summary": "Locks prevent concurrent transactions from corrupting data items. Upgrading locks allows transactions to read without blocking other readers until a write is strictly necessary, optimizing concurrency.",
    "points": [
     "Lock Modes: Shared (S) lock for reading; Exclusive (X) lock for reading and writing",
     "Lock Compatibility Matrix: Only (S, S) requests are compatible concurrently; all other combinations block",
     "Lock Conversion Mechanism: Upgrading a Shared lock to Exclusive lock during growing phase; Downgrading an Exclusive lock to Shared lock during shrinking phase",
     "Pitfalls of Locking: Starvation (transactions indefinitely delayed waiting for locks) and Deadlock (circular blocking)"
    ]
   },
   {
    "name": "2. Two-Phase Locking (2PL) Protocol Taxonomy",
    "subtopics": [
     "Basic 2PL: Guarantees conflict serializability; transactions acquire all locks during Growing phase and release during Shrinking phase",
     "Strict 2PL: Holds all Exclusive locks until commit/abort; eliminates cascading aborts and ensures cascadeless schedules",
     "Rigorous 2PL: Holds both Shared and Exclusive locks until transaction completion; ensures strict serializability and identical serialization order to commit order",
     "Conservative 2PL (Static 2PL): Pre-declares and locks all required data items before transaction starts; prevents deadlocks but reduces concurrency"
    ],
    "keyTakeaway": "Basic 2PL ensures serializability but can suffer from cascading aborts. Strict 2PL is the industry standard because holding write locks until commit ensures that uncommitted data is never read by other transactions.",
    "title": "2. Two-Phase Locking (2PL) Protocol Taxonomy",
    "summary": "Basic 2PL ensures serializability but can suffer from cascading aborts. Strict 2PL is the industry standard because holding write locks until commit ensures that uncommitted data is never read by other transactions.",
    "points": [
     "Basic 2PL: Guarantees conflict serializability; transactions acquire all locks during Growing phase and release during Shrinking phase",
     "Strict 2PL: Holds all Exclusive locks until commit/abort; eliminates cascading aborts and ensures cascadeless schedules",
     "Rigorous 2PL: Holds both Shared and Exclusive locks until transaction completion; ensures strict serializability and identical serialization order to commit order",
     "Conservative 2PL (Static 2PL): Pre-declares and locks all required data items before transaction starts; prevents deadlocks but reduces concurrency"
    ]
   },
   {
    "name": "3. Deadlock Handling Strategies in DBMS",
    "subtopics": [
     "Deadlock Conditions: Mutual exclusion, Hold-and-wait, No preemption, and Circular wait",
     "Deadlock Prevention: Eliminates conditions before deadlocks can form; uses transaction timestamps (Wait-Die vs. Wound-Wait)",
     "Wait-Die Protocol (Non-preemptive): Older transaction waits for younger; younger transaction requesting lock held by older dies and rolls back",
     "Wound-Wait Protocol (Preemptive): Older transaction wounds (preempts and aborts) younger transaction; younger transaction waits for older",
     "Deadlock Detection: Constructing dynamic Wait-For Graphs (WFG); cycle detection using depth-first search; victim selection based on rollback cost"
    ],
    "keyTakeaway": "Wait-Die and Wound-Wait prevent deadlocks using timestamps. Wound-Wait minimizes rollbacks because older transactions preempt younger ones without unnecessary aborts.",
    "title": "3. Deadlock Handling Strategies in DBMS",
    "summary": "Wait-Die and Wound-Wait prevent deadlocks using timestamps. Wound-Wait minimizes rollbacks because older transactions preempt younger ones without unnecessary aborts.",
    "points": [
     "Deadlock Conditions: Mutual exclusion, Hold-and-wait, No preemption, and Circular wait",
     "Deadlock Prevention: Eliminates conditions before deadlocks can form; uses transaction timestamps (Wait-Die vs. Wound-Wait)",
     "Wait-Die Protocol (Non-preemptive): Older transaction waits for younger; younger transaction requesting lock held by older dies and rolls back",
     "Wound-Wait Protocol (Preemptive): Older transaction wounds (preempts and aborts) younger transaction; younger transaction waits for older",
     "Deadlock Detection: Constructing dynamic Wait-For Graphs (WFG); cycle detection using depth-first search; victim selection based on rollback cost"
    ]
   },
   {
    "name": "4. Multiple Granularity Locking & Intent Locks",
    "subtopics": [
     "Granularity Hierarchy: Database → Area → File → Page → Record",
     "Intent Locks: Intention-Shared (IS), Intention-Exclusive (IX), and Shared-Intention-Exclusive (SIX)",
     "Locking Protocol Rules: To lock a child node in S or X mode, the parent must be locked in IS or IX mode respectively",
     "Advantages: Allows coarse-grained transactions (table scans) to lock tables without setting millions of record locks"
    ],
    "keyTakeaway": "Multiple granularity locking allows transactions operating on large sets of records to acquire high-level locks efficiently while allowing fine-grained record locks for point queries, maximizing throughput.",
    "title": "4. Multiple Granularity Locking & Intent Locks",
    "summary": "Multiple granularity locking allows transactions operating on large sets of records to acquire high-level locks efficiently while allowing fine-grained record locks for point queries, maximizing throughput.",
    "points": [
     "Granularity Hierarchy: Database → Area → File → Page → Record",
     "Intent Locks: Intention-Shared (IS), Intention-Exclusive (IX), and Shared-Intention-Exclusive (SIX)",
     "Locking Protocol Rules: To lock a child node in S or X mode, the parent must be locked in IS or IX mode respectively",
     "Advantages: Allows coarse-grained transactions (table scans) to lock tables without setting millions of record locks"
    ]
   }
  ],
  "formulas": [
   "Lock Compatibility Matrix: \\(\\text{Compatible}(S, S) = \\text{True}\\text{; all others False}\\)",
   "Wait-Die Condition: \\(\\text{If } TS(T_i) < TS(T_j) \\implies \\text{Wait; else Die}\\)",
   "Wound-Wait Condition: \\(\\text{If } TS(T_i) < TS(T_j) \\implies \\text{Wound; else Wait}\\)",
   "Deadlock Cycle Criterion: \\(\\text{Deadlock exists} \\iff \\text{Wait-For Graph contains a directed cycle}\\)"
  ],
  "mustKnowQuestions": [
   "Explain the Two-Phase Locking (2PL) protocol. How does it guarantee conflict serializability?",
   "Compare Strict 2PL and Rigorous 2PL. Why does Strict 2PL avoid cascading rollbacks?",
   "Explain Wait-Die and Wound-Wait deadlock prevention algorithms with example transaction scenarios.",
   "Describe Multiple Granularity Locking and explain the purpose of Intent Locks (IS, IX, SIX)."
  ],
  "examTips": [
   "Remember the mnemonic for deadlock prevention: In Wait-Die, Old waits and Young dies. In Wound-Wait, Old wounds and Young waits.",
   "Strict 2PL is the most asked topic in Unit 4; always emphasize that holding exclusive locks until commit prevents cascading aborts."
  ],
  "chapter": 4,
  "mustKnow": [
   "Explain the Two-Phase Locking (2PL) protocol. How does it guarantee conflict serializability?",
   "Compare Strict 2PL and Rigorous 2PL. Why does Strict 2PL avoid cascading rollbacks?",
   "Explain Wait-Die and Wound-Wait deadlock prevention algorithms with example transaction scenarios.",
   "Describe Multiple Granularity Locking and explain the purpose of Intent Locks (IS, IX, SIX)."
  ]
 },
 "NOTE-DBMS-05": {
  "noteId": "NOTE-DBMS-05",
  "subjectId": "DBMS",
  "subject": "Database Management Systems",
  "title": "DBMS Recovery Systems & Log-Based Checkpointing Architecture Slides",
  "overview": "Official university lecture slides covering WAL (Write-Ahead Logging), Deferred vs. Immediate Database Modification, Checkpoints, Shadow Paging, and the industrial ARIES Recovery Algorithm.",
  "topics": [
   {
    "name": "1. Write-Ahead Logging (WAL) & Log Records",
    "subtopics": [
     "Log File Structure: Append-only sequential file on persistent disk storage recording every state-changing database event",
     "Log Record Anatomy: <T_id, Variable, Old_Value, New_Value>, <T_id, START>, <T_id, COMMIT>, <T_id, ABORT>",
     "WAL Rules: 1. Before an updated data page is written to disk, the corresponding log record must be flushed. 2. A transaction is committed only when its <COMMIT> log record is persistently written to disk."
    ],
    "keyTakeaway": "Write-Ahead Logging ensures Atomicity and Durability by ensuring that sufficient historical state is preserved on non-volatile disk before dirty memory blocks overwrite persistent database files.",
    "title": "1. Write-Ahead Logging (WAL) & Log Records",
    "summary": "Write-Ahead Logging ensures Atomicity and Durability by ensuring that sufficient historical state is preserved on non-volatile disk before dirty memory blocks overwrite persistent database files.",
    "points": [
     "Log File Structure: Append-only sequential file on persistent disk storage recording every state-changing database event",
     "Log Record Anatomy: <T_id, Variable, Old_Value, New_Value>, <T_id, START>, <T_id, COMMIT>, <T_id, ABORT>",
     "WAL Rules: 1. Before an updated data page is written to disk, the corresponding log record must be flushed. 2. A transaction is committed only when its <COMMIT> log record is persistently written to disk."
    ]
   },
   {
    "name": "2. Deferred vs. Immediate Database Modification",
    "subtopics": [
     "Deferred Database Modification: All writes are buffered in memory and log files; database disk files are updated ONLY after transaction commits (NO-UNDO / REDO scheme)",
     "Immediate Database Modification: Updates to disk can happen while transaction is still active before commit; requires both UNDO (using old values) and REDO (using new values)",
     "Crash Recovery Rules: Immediate modification requires UNDO for uncommitted transactions and REDO for committed transactions"
    ],
    "keyTakeaway": "Deferred modification eliminates the need for UNDO operations because uncommitted writes never reach the database disk. Immediate modification allows higher buffer utilization but mandates robust UNDO logging.",
    "title": "2. Deferred vs. Immediate Database Modification",
    "summary": "Deferred modification eliminates the need for UNDO operations because uncommitted writes never reach the database disk. Immediate modification allows higher buffer utilization but mandates robust UNDO logging.",
    "points": [
     "Deferred Database Modification: All writes are buffered in memory and log files; database disk files are updated ONLY after transaction commits (NO-UNDO / REDO scheme)",
     "Immediate Database Modification: Updates to disk can happen while transaction is still active before commit; requires both UNDO (using old values) and REDO (using new values)",
     "Crash Recovery Rules: Immediate modification requires UNDO for uncommitted transactions and REDO for committed transactions"
    ]
   },
   {
    "name": "3. Checkpointing Architectures",
    "subtopics": [
     "Checkpoint Mechanism: Periodic flushing of all dirty buffer blocks and active log records to persistent disk",
     "Checkpoint Log Format: <CHECKPOINT (T1, T2, ..., Tn)> listing all active transactions at the time of the checkpoint",
     "Recovery Optimization: During system crash, recovery only needs to scan backwards to the most recent checkpoint rather than the beginning of the log"
    ],
    "keyTakeaway": "Checkpoints bound the recovery time of enterprise databases, guaranteeing that crash recovery finishes in seconds rather than hours.",
    "title": "3. Checkpointing Architectures",
    "summary": "Checkpoints bound the recovery time of enterprise databases, guaranteeing that crash recovery finishes in seconds rather than hours.",
    "points": [
     "Checkpoint Mechanism: Periodic flushing of all dirty buffer blocks and active log records to persistent disk",
     "Checkpoint Log Format: <CHECKPOINT (T1, T2, ..., Tn)> listing all active transactions at the time of the checkpoint",
     "Recovery Optimization: During system crash, recovery only needs to scan backwards to the most recent checkpoint rather than the beginning of the log"
    ]
   },
   {
    "name": "4. Industrial ARIES Recovery Algorithm",
    "subtopics": [
     "ARIES Core Concepts: Log Sequence Numbers (LSNs), PageLSN, FlushedLSN, Transaction Table, and Dirty Page Table (DPT)",
     "Three Recovery Passes: 1. Analysis Pass (determines state of buffer and transactions at crash). 2. Redo Pass (repeats history starting from oldest unwritten page). 3. Undo Pass (rolls back uncommitted transactions using Compensation Log Records - CLRs)",
     "Compensation Log Records (CLRs): Ensure that undo actions are never repeated even if the system crashes repeatedly during the recovery process itself"
    ],
    "keyTakeaway": "ARIES is the gold standard recovery algorithm in IBM DB2, Microsoft SQL Server, and PostgreSQL. By repeating history during the Redo pass and logging CLRs during Undo, ARIES guarantees fast, non-repeating fault recovery.",
    "title": "4. Industrial ARIES Recovery Algorithm",
    "summary": "ARIES is the gold standard recovery algorithm in IBM DB2, Microsoft SQL Server, and PostgreSQL. By repeating history during the Redo pass and logging CLRs during Undo, ARIES guarantees fast, non-repeating fault recovery.",
    "points": [
     "ARIES Core Concepts: Log Sequence Numbers (LSNs), PageLSN, FlushedLSN, Transaction Table, and Dirty Page Table (DPT)",
     "Three Recovery Passes: 1. Analysis Pass (determines state of buffer and transactions at crash). 2. Redo Pass (repeats history starting from oldest unwritten page). 3. Undo Pass (rolls back uncommitted transactions using Compensation Log Records - CLRs)",
     "Compensation Log Records (CLRs): Ensure that undo actions are never repeated even if the system crashes repeatedly during the recovery process itself"
    ]
   }
  ],
  "formulas": [
   "Write-Ahead Logging Rule: \\(\\text{PageLSN} \\le \\text{FlushedLSN}\\)",
   "Immediate Modification Undo/Redo: \\(\\text{If } \\langle T, \\text{COMMIT} \\rangle \\in \\text{Log} \\implies \\text{REDO}(T);\\text{ else } \\text{UNDO}(T)\\)",
   "Deferred Modification Redo Only: \\(\\text{If } \\langle T, \\text{COMMIT} \\rangle \\in \\text{Log} \\implies \\text{REDO}(T);\\text{ else Ignore}\\)"
  ],
  "mustKnowQuestions": [
   "Explain Log-Based Recovery with Immediate and Deferred Database Modification schemes.",
   "What are Checkpoints? How do checkpoints minimize recovery overhead after a system crash?",
   "Describe the ARIES Recovery Algorithm detailing the Analysis, Redo, and Undo passes."
  ],
  "examTips": [
   "In crash recovery questions, look at the log: if a transaction has a START but no COMMIT, it is an active loser that must be UNDONE; if it has a COMMIT, it is a winner that must be REDONE.",
   "Checkpoints always define the oldest log record needed for recovery."
  ],
  "chapter": 4,
  "mustKnow": [
   "Explain Log-Based Recovery with Immediate and Deferred Database Modification schemes.",
   "What are Checkpoints? How do checkpoints minimize recovery overhead after a system crash?",
   "Describe the ARIES Recovery Algorithm detailing the Analysis, Redo, and Undo passes."
  ]
 },
 "NOTE-DM-17": {
  "noteId": "NOTE-DM-17",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: Trees, Traversals & Applications (Part 2)",
  "pageCount": 70,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Unit 5 tree notes covering the definition and properties of trees, rooted and m-ary trees, tree-based models, and the three standard traversal orders with expression-tree notation.",
  "topics": [
   {
    "title": "Trees, Forests & Core Properties",
    "summary": "A tree is a connected undirected graph with no simple circuits; a forest is a disconnected acyclic graph whose connected components are trees.",
    "points": [
     "A tree has a unique simple path between every pair of vertices.",
     "A tree with n vertices has exactly n - 1 edges.",
     "Adding any edge to a tree creates exactly one simple circuit; removing any edge disconnects it.",
     "A rooted tree designates one vertex as the root and directs every edge away from it."
    ],
    "formulas": [
     "Tree with n vertices: |E| = n - 1",
     "Sum of degrees in a tree: 2(n - 1)"
    ],
    "example": "A tree with 10 vertices has 9 edges; deleting any one edge splits it into two components."
   },
   {
    "title": "Rooted Trees, m-ary Trees & Counting",
    "summary": "Rooted-tree terminology (parent, child, sibling, ancestor, descendant, leaf, internal vertex, subtree) plus the counting relations for full m-ary trees.",
    "points": [
     "A rooted tree is m-ary if every internal vertex has at most m children; it is full m-ary if every internal vertex has exactly m children.",
     "A binary tree is an m-ary tree with m = 2.",
     "An ordered rooted tree fixes a left-to-right order for the children of each vertex.",
     "A rooted m-ary tree of height h is balanced when every leaf is at level h or h - 1."
    ],
    "formulas": [
     "Full m-ary tree: n = m*i + 1",
     "Full m-ary tree leaves: l = (m - 1)*i + 1",
     "Full m-ary tree: i = (n - 1)/m",
     "Maximum leaves at height h: l <= m^h",
     "Minimum height: h >= ceil(log_m l)"
    ],
    "example": "A full binary tree with i = 5 internal vertices has n = 2(5) + 1 = 11 vertices and l = (2 - 1)(5) + 1 = 6 leaves."
   },
   {
    "title": "Trees as Models: BSTs, Decision Trees & Codes",
    "summary": "Trees model hierarchical and decision processes, including binary search trees, decision trees, prefix codes and Huffman coding.",
    "points": [
     "Binary search tree: for every vertex, labels in the left subtree are smaller and labels in the right subtree are larger.",
     "Decision trees model a sequence of comparisons or yes/no choices; the height bounds the number of decisions.",
     "Prefix codes encode symbols so that no codeword is a prefix of another, making decoding unambiguous.",
     "Huffman coding builds an optimal prefix code by repeatedly merging the two lowest-frequency symbols."
    ],
    "formulas": [],
    "example": "Inserting 45, 13, 55, 50, 20, 60, 10, 15, 40, 32 into a BST gives a tree of height 4."
   },
   {
    "title": "Tree Traversals & Expression Trees",
    "summary": "Preorder, inorder and postorder traversals visit every vertex systematically and produce prefix, infix and postfix expression notation.",
    "points": [
     "Preorder: visit the root, then traverse subtrees left to right (root-left-right).",
     "Inorder: traverse the left subtree, visit the root, then the remaining subtrees (left-root-right for binary trees).",
     "Postorder: traverse subtrees left to right, then visit the root (left-right-root).",
     "In an expression tree, preorder gives prefix (Polish), inorder gives infix, and postorder gives postfix (reverse Polish) notation.",
     "Universal address systems label the root 0 and the k-th child of a vertex by appending .k to the parent label."
    ],
    "formulas": [],
    "example": "For ((x + y)^2) + ((x - 4)/3), preorder is + ^ + x y 2 / - x 4 3 and postorder is x y + 2 ^ x 4 - 3 / +."
   }
  ],
  "mustKnow": [
   "A tree with n vertices has exactly n - 1 edges.",
   "Full m-ary tree: n = mi + 1 and l = (m - 1)i + 1.",
   "A tree has a unique simple path between any two vertices.",
   "Preorder = root-left-right; inorder = left-root-right; postorder = left-right-root.",
   "Huffman coding produces an optimal prefix code."
  ]
 },
 "NOTE-DM-18": {
  "noteId": "NOTE-DM-18",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Permutations (Part B)",
  "pageCount": 44,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Unit 4 permutations deck covering ordered selections, repetition rules, constrained arrangements, and how to distinguish permutation from combination questions.",
  "topics": [
   {
    "title": "Permutations vs Combinations",
    "summary": "An r-permutation is ordered; an r-combination is unordered. The wording of the question decides which formula applies.",
    "points": [
     "An r-permutation is an ordered arrangement of r objects chosen from n.",
     "An r-combination is an unordered selection of r objects from n.",
     "Order matters: use permutations. Order does not matter: use combinations.",
     "Every r-permutation can be formed by choosing an r-subset and then ordering it, so P(n,r) = C(n,r) * r!."
    ],
    "formulas": [
     "P(n, r) = n!/(n - r)!",
     "C(n, r) = n!/(r!(n - r)!)",
     "P(n, r) = C(n, r) * r!"
    ],
    "example": "Choosing 3 students for a committee is a combination; arranging 3 students in three seats is a permutation."
   },
   {
    "title": "r-Permutations with Unlimited Repetition",
    "summary": "When each of the r positions may use any of n symbols, the count is n^r because the choices are independent.",
    "points": [
     "U(n,r) denotes the number of r-permutations of n objects with unlimited repetitions.",
     "Each of the r positions has n choices, so multiply n by itself r times.",
     "Leaving an answer blank counts as an extra choice in examination-style questions."
    ],
    "formulas": [
     "U(n, r) = n^r"
    ],
    "example": "A 25-question true/false test with a blank option has 3^25 possible answer sheets; 3-letter words from MONDAY with repetition total 6^3 = 216."
   },
   {
    "title": "Constrained Repetitions",
    "summary": "When objects repeat a fixed number of times, divide the total arrangements by the factorial of each repetition count.",
    "points": [
     "If object i occurs q_i times, the number of distinct arrangements is n!/(q_1! q_2! ... q_t!).",
     "This counts distinct permutations of a multiset.",
     "The denominator removes over-counting caused by identical copies."
    ],
    "formulas": [
     "P(n; q_1, ..., q_t) = n!/(q_1! q_2! ... q_t!)"
    ],
    "example": "MISSISSIPPI has 11 letters: M x1, I x4, S x4, P x2, so the arrangements number 11!/(1!4!4!2!) = 34,650."
   }
  ],
  "mustKnow": [
   "Order matters: permutation. Order does not matter: combination.",
   "P(n,r) = n!/(n-r)! and C(n,r) = n!/(r!(n-r)!).",
   "Unlimited repetition: U(n,r) = n^r.",
   "Constrained repetition: divide by the factorial of each repeated count.",
   "MISSISSIPPI arrangements = 11!/(4!4!2!) = 34,650."
  ]
 },
 "NOTE-DM-19": {
  "noteId": "NOTE-DM-19",
  "subjectId": "DM",
  "chapter": 5,
  "title": "DM Unit 5: Graph Fundamentals (Part 1)",
  "pageCount": 62,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Unit 5 Part 1 graph notes: graph types, degree and the Handshaking Theorem, standard graph families, representations, and isomorphism.",
  "topics": [
   {
    "title": "Graphs & Terminology",
    "summary": "A graph G = (V, E) is a nonempty vertex set together with an edge set; variants differ in whether loops, parallel edges and direction are allowed.",
    "points": [
     "Simple graph: no loops and no parallel edges.",
     "Multigraph: parallel edges allowed; pseudograph: loops and parallel edges allowed.",
     "Directed graph (digraph): every edge is an ordered pair (u, v); a mixed graph contains both directed and undirected edges.",
     "The order of G is |V| and the size of G is |E|."
    ],
    "formulas": [],
    "example": "With V = {a,b,c,d} and E = {{a,b},{b,c},{c,d},{a,c},{b,d}}, the order is 4 and the size is 5."
   },
   {
    "title": "Degree & Handshaking Theorem",
    "summary": "Vertex degree counts incident edges (a loop counts twice). The Handshaking Theorem links degrees to the edge count.",
    "points": [
     "In a digraph, in-degree counts edges entering v and out-degree counts edges leaving v.",
     "Handshaking Theorem: the sum of all undirected degrees equals twice the number of edges.",
     "An undirected graph has an even number of odd-degree vertices.",
     "An isolated vertex has degree 0; a pendant vertex has degree 1."
    ],
    "formulas": [
     "Sum of deg(v) = 2|E|",
     "Sum of deg-(v) = Sum of deg+(v) = |E|"
    ],
    "example": "Ten vertices each of degree six give a degree sum of 60, so the graph has 30 edges."
   },
   {
    "title": "Special Graphs",
    "summary": "Complete, cycle, wheel, n-cube and bipartite graphs are the standard families used in counting and network models.",
    "points": [
     "Complete graph Kn has exactly one edge between every pair of distinct vertices.",
     "Cycle Cn has n vertices and n edges; wheel Wn adds a hub connected to every cycle vertex.",
     "n-cube Qn has 2^n vertices labelled by n-bit strings, with edges joining strings that differ in one bit.",
     "A graph is bipartite when V can be split into two sets with every edge crossing between them; Km,n is the complete bipartite graph."
    ],
    "formulas": [
     "|E(Kn)| = n(n - 1)/2",
     "Wn: |V| = n + 1 and |E| = 2n",
     "Qn: |V| = 2^n and |E| = n*2^(n-1)"
    ],
    "example": "K5 has 5(4)/2 = 10 edges; Q3 has 8 vertices and 12 edges."
   },
   {
    "title": "Representations & Isomorphism",
    "summary": "Adjacency lists, adjacency matrices and incidence matrices store the same graph in different ways; isomorphism captures structural equality.",
    "points": [
     "An adjacency list stores the neighbours of each vertex and is compact for sparse graphs.",
     "An adjacency matrix A is an n x n 0-1 matrix and is symmetric for an undirected simple graph.",
     "An incidence matrix has rows for vertices and columns for edges, marking endpoints.",
     "Graphs G1 and G2 are isomorphic when a one-to-one, onto mapping preserves adjacency in both directions."
    ],
    "formulas": [],
    "example": "Two graphs with the same degree sequence can still be non-isomorphic; compare neighbourhood structure or cycle lengths."
   }
  ],
  "mustKnow": [
   "Handshaking Theorem: sum of degrees = 2|E|.",
   "An undirected graph has an even number of odd-degree vertices.",
   "Kn has n(n-1)/2 edges; Qn has 2^n vertices and n*2^(n-1) edges.",
   "A loop contributes 2 to the degree of its vertex.",
   "Isomorphic graphs preserve adjacency, degree sequence and cycle structure."
  ]
 },
 "NOTE-DM-20": {
  "noteId": "NOTE-DM-20",
  "subjectId": "DM",
  "chapter": 3,
  "title": "DM Unit 3: Lattice & Boolean Algebra Slides",
  "pageCount": 45,
  "quality": "limited",
  "limited": false,
  "limitedReason": "The slide deck is mostly diagrams (Hasse diagrams and lattice examples) with only a small text layer; open the original slides for the full visual proofs.",
  "overview": "Unit 3 slide deck introducing lattices as partially ordered sets with least upper and greatest lower bounds, then extending to distributive, complemented lattices and Boolean algebra.",
  "topics": [
   {
    "title": "Lattices & Partial Orders",
    "summary": "A lattice is a partially ordered set in which every pair of elements has both a greatest lower bound and a least upper bound.",
    "points": [
     "A lattice is a poset (L, ≤) in which every pair a, b has a greatest lower bound (GLB, meet) and a least upper bound (LUB, join).",
     "Meet is written a ∧ b and join is written a ∨ b.",
     "Lattice operations are commutative, associative, idempotent and satisfy absorption.",
     "A sublattice is a nonempty subset closed under meet and join."
    ],
    "formulas": [
     "a ∧ b = GLB(a, b)",
     "a ∨ b = LUB(a, b)",
     "Absorption: a ∨ (a ∧ b) = a and a ∧ (a ∨ b) = a"
    ],
    "example": "The power set P(S) ordered by subset inclusion is a lattice: meet is intersection and join is union."
   },
   {
    "title": "Distributive, Complemented Lattices & Boolean Algebra",
    "summary": "A Boolean algebra is a complemented distributive lattice, giving the algebraic foundation for logic circuits and switching networks.",
    "points": [
     "A lattice is distributive when meet distributes over join and join distributes over meet.",
     "A bounded lattice has a least element 0 and a greatest element 1.",
     "A complemented lattice gives every element a complement a' with a ∧ a' = 0 and a ∨ a' = 1.",
     "A Boolean algebra is a complemented distributive lattice, denoted (B, ∧, ∨, ', 0, 1)."
    ],
    "formulas": [
     "a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)",
     "a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c)",
     "a ∧ a' = 0 and a ∨ a' = 1"
    ],
    "example": "The two-element set {0,1} with AND as meet, OR as join and NOT as complement is the simplest Boolean algebra."
   }
  ],
  "mustKnow": [
   "A lattice has a GLB and LUB for every pair of elements.",
   "Absorption laws: a ∨ (a ∧ b) = a and a ∧ (a ∨ b) = a.",
   "A Boolean algebra is a complemented distributive lattice.",
   "In a bounded lattice, 0 is the least element and 1 is the greatest.",
   "Complement rules: a ∧ a' = 0 and a ∨ a' = 1."
  ]
 },
 "NOTE-DM-21": {
  "noteId": "NOTE-DM-21",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Combinations (Part C)",
  "pageCount": 49,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Unit 4 combinations deck covering unordered selections, repetition and non-repetition, stars-and-bars, integer solutions, distributions, and ordered partitions.",
  "topics": [
   {
    "title": "r-Combinations without Repetition",
    "summary": "C(n,r) counts r-element subsets of an n-element set and is symmetric in r and n - r.",
    "points": [
     "C(n,r) is the number of ways to choose r objects from n when order is irrelevant.",
     "C(n,r) = C(n, n - r).",
     "P(n,r) = C(n,r) * r! links permutations and combinations.",
     "Committee, jury and hand-selection problems use combinations."
    ],
    "formulas": [
     "C(n, r) = n!/(r!(n - r)!)",
     "C(n, r) = C(n, n - r)"
    ],
    "example": "The number of five-card poker hands from 52 cards is C(52,5) = 2,598,960."
   },
   {
    "title": "Combinations with Unlimited Repetition",
    "summary": "Choosing r objects from n types with unlimited repetition is equivalent to placing r identical balls into n distinct boxes.",
    "points": [
     "The number of r-combinations of n types with unlimited repetition is C(n - 1 + r, r).",
     "This equals the number of non-negative integer solutions of x1 + x2 + ... + xn = r.",
     "It also counts distributions of r identical balls into n distinct boxes.",
     "For nonempty boxes, place one ball in each box first, then distribute the remainder."
    ],
    "formulas": [
     "V(n, r) = C(n - 1 + r, r)"
    ],
    "example": "Ten identical coins chosen from four coin types: C(4 - 1 + 10, 10) = C(13,10) = 286."
   },
   {
    "title": "Constrained Counting & Ordered Partitions",
    "summary": "Lower bounds are handled by subtracting the minimum total before applying stars and bars; ordered partitions use multinomial coefficients.",
    "points": [
     "For xi >= mi, subtract the sum of the minimums first, then count solutions of the reduced equation.",
     "The number of ordered partitions of a set of size n into parts q1, ..., qt is n!/(q1! ... qt!).",
     "Choosing which groups receive which sizes adds a combination factor when the group sizes are not fixed."
    ],
    "formulas": [
     "Ordered partitions: P(n; q1, ..., qt) = n!/(q1! ... qt!)"
    ],
    "example": "23 books to 5 students with two students receiving 4 and three receiving 5: choose the two students in C(5,2) ways, then deal in 23!/(4!4!5!5!5!) ways."
   }
  ],
  "mustKnow": [
   "C(n,r) = n!/(r!(n-r)!) and C(n,r) = C(n,n-r).",
   "Unlimited repetition: V(n,r) = C(n-1+r, r).",
   "Stars and bars counts non-negative integer solutions and identical-ball distributions.",
   "For lower bounds, subtract the minimum total first.",
   "Ordered partitions use n!/(q1! q2! ... qt!)."
  ]
 },
 "NOTE-COA-29": {
  "noteId": "NOTE-COA-29",
  "subjectId": "COA",
  "chapter": 3,
  "title": "COA Units 3-5: Complete Exam Preparation Guide",
  "pageCount": 21,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "A student-compiled COA revision guide for Units 3-5 that condenses RTL and basic computer organization, microprogrammed control, CPU arithmetic, I/O organization, and the memory hierarchy into definitions, tables and practice questions.",
  "topics": [
   {
    "title": "RTL, Micro-operations & Basic Computer Organization",
    "summary": "Register Transfer Language describes data movement between registers, while the basic computer executes instructions through a fetch-decode-execute cycle.",
    "points": [
     "RTL statements such as R2 <- R1 describe register transfers and operations.",
     "Bus and memory transfers move data over a shared bus; memory read/write uses AR, DR, Read and Write.",
     "Micro-operations are elementary register operations: register transfer, arithmetic, logic and shift.",
     "The basic computer registers include PC, IR, AR, DR, AC, TR, INPR, OUTR and a sequence counter.",
     "Addressing modes include direct, indirect, immediate, register, register-indirect, indexed and relative."
    ],
    "formulas": [
     "Direct EA = A",
     "Indirect EA = M[A]",
     "Indexed EA = A + XR",
     "Relative EA = PC + A"
    ],
    "example": "Memory read sequence: AR <- address; Read = 1; DR <- M[AR]."
   },
   {
    "title": "Microprogrammed Control",
    "summary": "A microprogrammed control unit generates control signals from microinstructions stored in control memory, trading speed for flexibility.",
    "points": [
     "Control memory holds microinstructions; the control address register selects the next microinstruction.",
     "A microinstruction specifies register transfers and the next-address or condition logic.",
     "Sequencing may be direct, through a mapping ROM, or through a microprogram sequencer.",
     "Hardwired control is faster but rigid; microprogrammed control is easier to modify and extend."
    ],
    "formulas": [],
    "example": "A single microinstruction can assert PCout, MARin and Read together to begin an instruction fetch."
   },
   {
    "title": "CPU Arithmetic & Instruction Execution",
    "summary": "The CPU performs data-transfer and data-manipulation instructions, with dedicated algorithms for signed multiplication, division and floating-point arithmetic.",
    "points": [
     "Data-transfer instructions include LOAD, STORE, MOVE, PUSH, POP and XCHG.",
     "Booth's algorithm multiplies signed binary numbers using recoding and arithmetic right shifts.",
     "Restoring and non-restoring division generate quotient bits through repeated subtract/shift steps.",
     "Floating-point arithmetic aligns exponents, operates on mantissas, normalizes and rounds.",
     "BCD addition applies a 0110 correction when a nibble exceeds 1001 or a carry occurs."
    ],
    "formulas": [
     "Signed overflow = carry into sign bit XOR carry out of sign bit",
     "BCD correction: add 0110 when the 4-bit sum > 1001 or a carry is produced"
    ],
    "example": "Two's-complement overflow is flagged when the carry into the sign bit differs from the carry out."
   },
   {
    "title": "Input-Output Organization",
    "summary": "I/O interfaces bridge speed and format differences between the CPU bus and peripherals; DMA removes the CPU from block transfers.",
    "points": [
     "An I/O interface handles speed mismatch, data-format conversion, timing and device selection.",
     "Modes of transfer are programmed I/O, interrupt-initiated I/O and DMA.",
     "DMA transfers a block between device and memory after the CPU supplies address, count and direction.",
     "Priority interrupts use daisy chaining or a parallel priority encoder; vectored interrupts supply the ISR address."
    ],
    "formulas": [],
    "example": "A DMA controller raises a bus request, transfers a block directly to memory, then interrupts the CPU on completion."
   },
   {
    "title": "Memory Hierarchy, Cache & Virtual Memory",
    "summary": "The memory hierarchy trades speed for capacity and cost; cache and virtual memory exploit locality to bridge the processor-memory gap.",
    "points": [
     "Hierarchy: CPU registers -> cache -> main memory -> secondary storage.",
     "Cache mapping schemes are direct, fully associative and set-associative.",
     "Associative memory searches contents in parallel using a key and match logic.",
     "Virtual memory maps logical addresses to physical frames using page tables and a TLB.",
     "Replacement policies include LRU, FIFO and random."
    ],
    "formulas": [
     "Average access time = hit ratio * cache time + miss ratio * memory time",
     "Miss ratio = 1 - hit ratio"
    ],
    "example": "With 95% hits, 10 ns cache and 100 ns memory, average access is about 0.95(10) + 0.05(100) = 14.5 ns."
   }
  ],
  "mustKnow": [
   "RTL describes register transfers; EA formulas differ by addressing mode.",
   "Hardwired control is faster; microprogrammed control is more flexible.",
   "Booth's algorithm handles signed multiplication; restoring/non-restoring handles division.",
   "DMA moves blocks between I/O and memory without CPU data movement.",
   "Average access time uses hit ratio and miss ratio; miss ratio = 1 - hit ratio."
  ]
 },
 "NOTE-DBMS-06": {
  "noteId": "NOTE-DBMS-06",
  "subjectId": "DBMS",
  "chapter": 4,
  "title": "DBMS Unit 4: One-Page Transaction Management Revision Map",
  "pageCount": 1,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "A single-page revision map for DBMS Unit 4 that compresses transactions, ACID, concurrency anomalies, serializability, locking and recovery into a final-day checklist.",
  "topics": [
   {
    "title": "Transactions, States & ACID",
    "summary": "A transaction is one logical unit of database work; ACID properties protect consistency across concurrent execution and failures.",
    "points": [
     "A transaction is one execution of a user program with a finite sequence of read/write operations.",
     "States: active -> partially committed -> committed, or active -> failed -> aborted.",
     "Atomicity: all-or-nothing. Consistency: preserves database invariants. Isolation: concurrent transactions do not interfere. Durability: committed changes survive failures.",
     "COMMIT makes changes permanent; ROLLBACK undoes uncommitted work.",
     "A read-only transaction retrieves data without modifying it."
    ],
    "formulas": [],
    "example": "A transfer of 50 reads A, writes A - 50, reads B, writes B + 50, then commits; both writes must succeed together."
   },
   {
    "title": "Concurrency Anomalies & Serializability",
    "summary": "Concurrent schedules can produce dirty reads, lost updates, unrepeatable reads and phantoms; serializability is the correctness criterion.",
    "points": [
     "Dirty read: reading uncommitted data. Lost update: two writes overwrite each other. Unrepeatable read: the same row changes between reads. Phantom: new rows appear in a repeated range query.",
     "A schedule is serializable if it is equivalent to some serial schedule.",
     "Conflict serializability is tested with a precedence graph; a cycle means the schedule is not conflict-serializable.",
     "View serializability also permits blind writes and is less restrictive than conflict serializability."
    ],
    "formulas": [],
    "example": "A precedence graph containing both T1 -> T2 and T2 -> T1 has a cycle and is not conflict-serializable."
   },
   {
    "title": "Locking, Deadlocks & Recovery",
    "summary": "Lock-based protocols serialize conflicting operations; strict two-phase locking prevents cascading rollback, while logging restores atomicity and durability.",
    "points": [
     "Shared locks allow reads; exclusive locks allow writes; upgrading moves from shared to exclusive.",
     "Two-phase locking (2PL) has a growing phase and a shrinking phase.",
     "Strict 2PL holds exclusive locks until commit, preventing cascading rollback.",
     "Deadlock handling: prevention (wait-die, wound-wait), avoidance, detection via a wait-for graph, and recovery by rollback.",
     "Log-based recovery uses undo/redo records; checkpoints limit how far back recovery must scan."
    ],
    "formulas": [],
    "example": "Under strict 2PL, no transaction can read uncommitted data, so a failure never forces other transactions to roll back."
   }
  ],
  "mustKnow": [
   "ACID = Atomicity, Consistency, Isolation, Durability.",
   "Transaction states: active, partially committed, committed, failed, aborted.",
   "Conflict serializability is checked with a precedence graph; a cycle means not serializable.",
   "2PL has growing and shrinking phases; strict 2PL holds exclusive locks until commit.",
   "Checkpoints reduce the amount of log that recovery must scan."
  ]
 },
 "NOTE-DBMS-07": {
  "noteId": "NOTE-DBMS-07",
  "subjectId": "DBMS",
  "chapter": 4,
  "title": "DBMS Unit 4: Detailed Transaction Management Notes",
  "pageCount": 61,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Detailed Unit 4 transaction-management notes covering ACID implementation, schedules and serializability, recoverability, concurrency-control protocols and log-based recovery.",
  "topics": [
   {
    "title": "Transactions, States & ACID Implementation",
    "summary": "Transactions are atomic units of work; atomicity and durability are implemented with logs, shadow paging and commit protocols.",
    "points": [
     "Basic operations are R(X), W(X) and COMMIT; a transaction has a finite number of steps.",
     "States: active, partially committed, committed, failed and aborted.",
     "Atomicity and durability can be implemented with shadow paging or a write-ahead log.",
     "In shadow paging, updates go to a new copy and a db-pointer switch makes the new copy current.",
     "Two-phase commit coordinates atomic commit across distributed nodes."
    ],
    "formulas": [],
    "example": "If the system fails before the db-pointer update, recovery reads the old pointer and the transaction has no visible effect."
   },
   {
    "title": "Schedules, Serializability & Recoverability",
    "summary": "A schedule interleaves transaction operations; serializability guarantees equivalence to a serial order, and recoverability protects against reading uncommitted data.",
    "points": [
     "Serial schedules run one transaction completely before another and are always serializable.",
     "Conflicting operations are from different transactions on the same data item, with at least one write.",
     "Conflict serializability is tested with a precedence graph; a cycle means not conflict-serializable.",
     "View serializability requires the same reads-from relation and the same final writes as a serial schedule.",
     "Recoverable schedules commit the writer before readers commit; cascadeless schedules avoid reading uncommitted data; strict schedules also avoid overwriting uncommitted data."
    ],
    "formulas": [],
    "example": "A schedule where T2 reads A from T1 and commits before T1 is non-recoverable; if T1 aborts, T2's value is invalid."
   },
   {
    "title": "Lock-Based Concurrency Control",
    "summary": "Locking controls conflicting accesses; two-phase locking guarantees conflict serializability, with strict variants preventing cascading aborts.",
    "points": [
     "Shared locks permit concurrent reads; exclusive locks permit writes.",
     "2PL has a growing phase (locks acquired) and a shrinking phase (locks released); the lock point ends the growing phase.",
     "Strict 2PL releases exclusive locks only at commit; rigorous 2PL releases all locks at commit.",
     "Lock conversion can upgrade shared to exclusive or downgrade exclusive to shared.",
     "Deadlocks can be prevented with wait-die/wound-wait, avoided by ordering, or detected with a wait-for graph."
    ],
    "formulas": [],
    "example": "Two transactions each hold a shared lock and request an exclusive upgrade; neither can proceed, producing a deadlock."
   },
   {
    "title": "Timestamp, Validation & Multiple Granularity",
    "summary": "Timestamp ordering and validation protocols provide serializability without long lock waits; multiple granularity reduces lock overhead.",
    "points": [
     "Timestamp ordering assigns each transaction a timestamp and checks read/write timestamps of each item.",
     "Thomas' write rule ignores an obsolete write instead of aborting the transaction.",
     "Validation-based protocols execute in three phases: read, validation and write.",
     "Multiple-granularity locking uses intention-shared (IS), intention-exclusive (IX) and shared-intention-exclusive (SIX) modes on a database-area-file-record hierarchy.",
     "Fine-grained locks increase concurrency but add overhead; coarse locks do the reverse."
    ],
    "formulas": [],
    "example": "A transaction reading a record locks the database, area and file in intention mode and the record itself in shared mode."
   },
   {
    "title": "Recovery & Atomicity",
    "summary": "Log-based recovery restores a consistent state after failure by undoing uncommitted transactions and redoing committed ones.",
    "points": [
     "Deferred-modification recovery applies writes only after commit; immediate-modification recovery requires undo for uncommitted transactions.",
     "A log records <Ti start>, <Ti write>, <Ti commit> and <Ti abort> entries.",
     "Undo restores old values; redo reapplies committed values.",
     "Checkpoints flush the log and buffer to disk, limiting the backward scan during recovery.",
     "ARIES recovery uses analysis, redo and undo passes with a transaction table and dirty-page table."
    ],
    "formulas": [],
    "example": "After a crash, recovery scans backward to the last checkpoint, builds undo/redo lists, then restores committed work and rolls back active transactions."
   }
  ],
  "mustKnow": [
   "Transaction states: active, partially committed, committed, failed, aborted.",
   "Conflict serializability is tested with a precedence graph; a cycle means no serial order.",
   "Strict 2PL holds exclusive locks until commit and prevents cascading rollback.",
   "Thomas' write rule avoids unnecessary aborts in timestamp ordering.",
   "Log-based recovery uses undo for uncommitted and redo for committed transactions; checkpoints bound the scan."
  ]
 },
 "NOTE-DBMS-08": {
  "noteId": "NOTE-DBMS-08",
  "subjectId": "DBMS",
  "chapter": 4,
  "title": "DBMS Unit 4: Concise Revision Notes",
  "pageCount": 12,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Concise Unit 4 revision notes covering transaction states, ACID, isolation levels, lock granularity and 2PL variants, timestamp ordering and Thomas' write rule, deadlock handling, and undo/redo recovery with checkpoints.",
  "topics": [
   {
    "title": "Transactions, ACID & Isolation Levels",
    "summary": "Transactions move through well-defined states and must satisfy ACID; SQL isolation levels trade consistency against concurrency.",
    "points": [
     "States: active, partially committed, committed, failed and aborted.",
     "ACID: atomicity, consistency, isolation and durability.",
     "Read Uncommitted permits dirty reads; Read Committed prevents dirty reads; Repeatable Read prevents unrepeatable reads; Serializable prevents phantoms.",
     "Higher isolation reduces anomalies but lowers concurrency."
    ],
    "formulas": [],
    "example": "Read Committed is enough to stop dirty reads but still allows a row to change between two reads in the same transaction."
   },
   {
    "title": "Concurrency Control: Locks & 2PL",
    "summary": "Lock granularity controls what is protected, and two-phase locking guarantees serializability.",
    "points": [
     "Lock granularity can be database, table, page, row or field level.",
     "Shared locks allow reads; exclusive locks allow writes.",
     "2PL has a growing phase and a shrinking phase.",
     "Strict 2PL holds locks until commit and avoids cascading rollback.",
     "Deadlock can be prevented by wait-die/wound-wait or detected with a wait-for graph."
    ],
    "formulas": [],
    "example": "A transaction that acquires all its locks before releasing any satisfies the 2PL rule."
   },
   {
    "title": "Timestamp Ordering & Validation",
    "summary": "Timestamp protocols order transactions by time, while validation protocols check conflicts at commit time.",
    "points": [
     "Each transaction receives a timestamp TS(T).",
     "Read rule: reject if TS(T) < W-timestamp(X).",
     "Write rule: reject if TS(T) < R-timestamp(X) or TS(T) < W-timestamp(X).",
     "Thomas' write rule skips an obsolete write instead of aborting.",
     "Validation runs in read, validation and write phases."
    ],
    "formulas": [
     "Read allowed when TS(T) >= W-timestamp(X)",
     "Write allowed when TS(T) >= R-timestamp(X) and TS(T) >= W-timestamp(X)"
    ],
    "example": "If TS(T) is older than the item's read timestamp, T is rolled back to preserve the serial order."
   },
   {
    "title": "Recovery: Logs, Undo/Redo & Checkpoints",
    "summary": "The recovery manager uses the log to undo uncommitted work and redo committed work after a crash.",
    "points": [
     "Log records include <Ti start>, <Ti commit>, <Ti abort> and update records.",
     "Undo restores old values; redo reapplies new values.",
     "Deferred modification avoids undo because writes happen only after commit.",
     "Immediate modification requires both undo and redo.",
     "Checkpoints flush dirty pages and bound the log scan."
    ],
    "formulas": [],
    "example": "On restart, the system finds the last checkpoint, redoes committed transactions after it and undoes active transactions."
   }
  ],
  "mustKnow": [
   "ACID properties and the five transaction states.",
   "The four SQL isolation levels and the anomalies they prevent.",
   "2PL and strict 2PL guarantees.",
   "Timestamp read/write rules and Thomas' write rule.",
   "Undo uncommitted, redo committed, and start recovery from the last checkpoint."
  ]
 },
 "NOTE-DM-22": {
  "noteId": "NOTE-DM-22",
  "subjectId": "DM",
  "chapter": 4,
  "title": "DM Unit 4: Basics of Counting (Part A Alternate Lecture Notes)",
  "pageCount": 35,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Foundational lecture slides for Unit 4 Combinatorics covering the Sum Rule, Product Rule, Subtraction Rule (Principle of Inclusion-Exclusion), Division Rule, Pigeonhole Principle (standard and generalized), and introductory r-permutations and r-combinations.",
  "topics": [
   {
    "title": "1. Fundamental Rules of Counting (Sum, Product, Subtraction & Division)",
    "summary": "The sum rule applies to disjoint choices (A or B), while the product rule applies to sequential independent choices (A and then B). The subtraction rule eliminates double-counted items in overlapping sets.",
    "points": [
     "Sum Rule: If A and B are disjoint tasks with m and n ways respectively, then task (A or B) can be performed in m + n ways.",
     "Product Rule: If a procedure breaks down into stages 1 and 2, with n1 ways for stage 1 and n2 ways for stage 2, there are n1 * n2 total ways.",
     "Subtraction Rule (PIE for 2 sets): |A ∪ B| = |A| + |B| - |A ∩ B|.",
     "Division Rule: There are n/d ways to do a task if it can be done in n ways, but each way corresponds to exactly d indistinguishable outcomes."
    ]
   },
   {
    "title": "2. The Pigeonhole Principle & Generalized Form",
    "summary": "A powerful non-constructive proof technique establishing existence of duplicate assignments when sample size exceeds pigeonhole capacity.",
    "points": [
     "Standard Pigeonhole Principle: If k + 1 or more objects are placed into k boxes, then at least one box contains two or more objects.",
     "Generalized Pigeonhole Principle: If N objects are placed into k boxes, then there is at least one box containing at least ⌈N/k⌉ objects.",
     "Classic exam problem: Minimum number of students in a class to ensure at least 6 receive the same grade (grades A through F: k = 6, ⌈N/6⌉ = 6 => N = 6*5 + 1 = 31)."
    ]
   },
   {
    "title": "3. Introduction to Permutations and Combinations",
    "summary": "Distinguishing ordered arrangements from unordered selections with concise factorial formulations.",
    "points": [
     "Permutation P(n, r) = n! / (n - r)!: Ordered sequence of r distinct elements from a set of n elements.",
     "Combination C(n, r) = n! / (r! * (n - r)!): Unordered subset of r elements from a set of n elements.",
     "Symmetry Property: C(n, r) = C(n, n - r)."
    ]
   }
  ],
  "mustKnow": [
   "State the Generalized Pigeonhole Principle and solve minimum-size threshold word problems.",
   "Formulate the Principle of Inclusion-Exclusion for 2 and 3 finite sets.",
   "Apply the Product Rule and Subtraction Rule to count bit strings of length n that begin or end with specific patterns."
  ]
 },
 "NOTE-DBMS-09": {
  "noteId": "NOTE-DBMS-09",
  "subjectId": "DBMS",
  "chapter": 5,
  "title": "DBMS Unit 5: Hashing, Indexing & B+ Trees (Lecture Slides)",
  "pageCount": 42,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "University presentation slides on physical database storage: primary and secondary indexes, dense vs. sparse indexing, multilevel indexing, B+ tree operations (search, insert, delete, node splitting and merging), and static vs. extendible hashing.",
  "topics": [
   {
    "title": "1. Indexing Architectures (Dense, Sparse, Primary & Secondary)",
    "summary": "Indexes accelerate query lookup without full table scans by maintaining ordered search-key to record pointer mappings.",
    "points": [
     "Dense Index: Contains an index record for every search-key value in the data file.",
     "Sparse Index: Contains index records for only some search-key values (typically one per data block in ordered files).",
     "Primary (Clustering) Index: Defined on an ordered data file; specifies the sequential storage order of records.",
     "Secondary Index: Defined on non-ordering fields; must always be dense because records are scattered across blocks."
    ]
   },
   {
    "title": "2. B+ Tree Indexing Structures & Algorithms",
    "summary": "The self-balancing tree data structure universally used in modern database engines to provide O(log N) search, range scans, insertion, and deletion.",
    "points": [
     "Node Structure: Internal nodes contain up to n pointers and n - 1 search-key values; leaf nodes contain pointers directly to records/buckets and a sibling pointer for efficient range queries.",
     "Balancing Property: All leaf nodes are at identical depth (perfect balance). Non-leaf nodes (except root) have at least ⌈n/2⌉ children.",
     "Insertion & Splitting: When an insertion overflows a leaf with n values, split into two leaves of ⌈n/2⌉ and ⌊n/2⌋ values, and propagate the median key upward.",
     "Deletion & Merging: When deletion causes underflow (< ⌈n/2⌉ pointers), borrow from a neighbor or merge adjacent siblings."
    ]
   },
   {
    "title": "3. Static and Extendible Hashing Techniques",
    "summary": "Direct key-to-address mapping mechanisms eliminating tree traversal for exact-match equality lookups.",
    "points": [
     "Static Hashing: Fixed number of buckets determined by hash function h(K) mod B; suffers from bucket overflow chains when data grows.",
     "Extendible Dynamic Hashing: Directory of 2^d pointers where d is global depth; individual buckets have local depth d_local ≤ d.",
     "Directory Doubling: When a bucket with d_local = d overflows, double global depth d -> d + 1; when d_local < d overflows, only split the bucket and increment its local depth without doubling directory."
    ]
   }
  ],
  "mustKnow": [
   "Draw and explain the structure of a B+ Tree node with fanout n. Why is B+ Tree preferred over binary search trees for disk storage?",
   "Trace step-by-step insertions into an empty B+ Tree of order 3 or 4, showing node splits and parent key elevations.",
   "Differentiate between Dense and Sparse indexes, and Primary and Secondary indexes with block diagrams.",
   "Explain Extendible Hashing with a numerical example demonstrating local depth, global depth, and bucket splitting."
  ]
 },
 "NOTE-DBMS-10": {
  "noteId": "NOTE-DBMS-10",
  "subjectId": "DBMS",
  "chapter": 4,
  "chapters": [
   1,
   2,
   3,
   4,
   5
  ],
  "title": "DBMS Comprehensive Unit-wise Question Bank (Units 1–5)",
  "pageCount": 18,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Curated university question bank spanning Units 1 through 5 of Database Management Systems, featuring short-answer theory questions, long essay derivation problems, relational calculus/algebra queries, and transaction concurrency schedules.",
  "topics": [
   {
    "title": "1. Units 1 & 2 High-Yield Questions (Architecture, ER & Relational Algebra)",
    "summary": "Key conceptual questions on Three-Schema Architecture, Data Independence, Entity-Relationship diagrams, and Relational Algebra vs Calculus.",
    "points": [
     "Contrast File Processing Systems vs DBMS with 6 distinct operational criteria.",
     "Draw and explain ER diagram components: weak entity sets, identifying relationships, specialization/generalization hierarchies.",
     "Relational Algebra core queries using Selection, Projection, Natural Join, Outer Join, and Division."
    ]
   },
   {
    "title": "2. Unit 3 High-Yield Questions (SQL & Schema Refinement / Normalization)",
    "summary": "Schema normalization proofs, Armstrong axioms, candidate key computation, and complex SQL joins/subqueries.",
    "points": [
     "Compute candidate keys and attribute closures given a set of functional dependencies.",
     "Decompose relation R into 3NF and BCNF, checking Lossless Join and Dependency Preservation conditions.",
     "Write complex SQL queries involving GROUP BY, HAVING, correlated subqueries, and triggers."
    ]
   },
   {
    "title": "3. Units 4 & 5 High-Yield Questions (Transactions, Recovery & Indexing)",
    "summary": "ACID guarantees, conflict serializability testing, Two-Phase Locking (2PL), deadlock handling, log recovery, and B+ Trees.",
    "points": [
     "Test serializability of concurrent schedules using Precedence Graphs (conflict serializability).",
     "Compare Strict 2PL and Rigorous 2PL with respect to cascading abort avoidance.",
     "Explain ARIES recovery passes (Analysis, Redo, Undo) and log record processing.",
     "B+ Tree search and insertion procedures with node split tracing."
    ]
   }
  ],
  "mustKnow": [
   "Precedence graph cycle detection for conflict serializability.",
   "Attribute closure algorithm for finding Candidate Keys.",
   "Lossless Join test: R1 ∩ R2 -> R1 or R1 ∩ R2 -> R2.",
   "Strict 2PL protocol guarantees serializability and freedom from cascading rollbacks."
  ]
 },
 "NOTE-DBMS-11": {
  "noteId": "NOTE-DBMS-11",
  "subjectId": "DBMS",
  "chapter": 4,
  "chapters": [
   1,
   2,
   3,
   4,
   5
  ],
  "title": "DBMS Objective Question Bank: MCQs & Fill-in-the-Blanks",
  "pageCount": 14,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive bank of multiple-choice questions, fill-in-the-blanks, and rapid-recall definitions covering all 5 syllabus units for mid-term objective tests and competitive exam preparation.",
  "topics": [
   {
    "title": "1. Objective Questions: Architecture, Relational Model & SQL",
    "summary": "Quick-check MCQs and definitions covering core database concepts.",
    "points": [
     "Physical data independence protects internal schema changes from affecting conceptual schema.",
     "Relational completeness: A query language is relationally complete if it can express any query expressible in basic Relational Algebra.",
     "SQL NULL values: Three-valued logic (TRUE, FALSE, UNKNOWN); IS NULL must be used instead of = NULL."
    ]
   },
   {
    "title": "2. Objective Questions: Normalization, Dependencies & Keys",
    "summary": "Key facts and condition checks for normal forms.",
    "points": [
     "Superkey vs Candidate Key: A candidate key is a minimal superkey.",
     "BCNF condition: Every non-trivial functional dependency X -> Y has X as a superkey.",
     "3NF allows prime attributes on the right-hand side even if the left-hand side is not a superkey."
    ]
   },
   {
    "title": "3. Objective Questions: Transactions, Concurrency & Storage",
    "summary": "Rapid facts for transaction states, lock types, and indexing parameters.",
    "points": [
     "ACID properties: Atomicity (Transaction Manager/Recovery), Consistency (User/Integrity Constraints), Isolation (Concurrency Manager), Durability (Recovery Manager).",
     "Shared lock allows concurrent reads; Exclusive lock allows solitary write.",
     "B+ Tree leaf nodes store all data keys; internal nodes only store routing keys."
    ]
   }
  ],
  "mustKnow": [
   "A schedule is conflict serializable iff its precedence graph has no cycles.",
   "Two-Phase Locking (2PL) ensures conflict serializability but does NOT prevent deadlocks.",
   "Primary index is created on ordered key attribute; secondary index on non-ordered attribute."
  ]
 }
};

if (typeof window !== 'undefined') {
  window.NOTE_SUMMARIES = NOTE_SUMMARIES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NOTE_SUMMARIES };
}

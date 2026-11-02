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
  "chapter": 1,
  "title": "DBMS Comprehensive Lecture Notes: Units 1, 2 & 3",
  "pageCount": 45,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Comprehensive lecture summary for Database Management Systems covering relational modeling, ER diagrams, SQL queries, relational algebra, and normalization up to BCNF.",
  "topics": [
   {
    "title": "ER Modeling & Relational Concepts",
    "summary": "Entity-Relationship modeling designs conceptual schemas using entities, attributes, and relationships.",
    "points": [
     "Entity Types: Strong entity (has primary key) vs Weak entity (identifying relationship, discriminator).",
     "Attributes: Simple vs Composite, Single-valued vs Multi-valued (double oval), Derived (dashed oval).",
     "Integrity Constraints: Entity integrity (Primary key cannot be NULL), Referential integrity (Foreign key must match valid primary key or be NULL).",
     "Relational Algebra Operators: Select (σ), Project (π), Union (∪), Cartesian Product (×), Natural Join (⨝)."
    ],
    "formulas": [
     "Selection: σ_condition(R)",
     "Projection: π_attribute_list(R)",
     "Natural Join: R ⨝ S = π_attributes(σ_R.A=S.A(R × S))"
    ],
    "example": "Find names of students in CSE: π_name(σ_dept=\"CSE\"(STUDENT))."
   },
   {
    "title": "Functional Dependencies & Normalization (1NF to BCNF)",
    "summary": "Normalization systematically eliminates data redundancy, insertion anomalies, deletion anomalies, and update anomalies.",
    "points": [
     "1NF: Every attribute column must contain atomic (indivisible) values; no repeating groups.",
     "2NF: In 1NF and contains no partial functional dependency (no non-prime attribute depends on a proper subset of candidate key).",
     "3NF: In 2NF and contains no transitive functional dependency (for every X → Y, either X is a superkey or Y is a prime attribute).",
     "BCNF: Boyce-Codd Normal Form; for every non-trivial functional dependency X → Y, X must strictly be a Super Key."
    ],
    "formulas": [
     "Armstrong's Axioms: Reflexivity (Y ⊆ X ⟹ X → Y), Augmentation (X → Y ⟹ XZ → YZ), Transitivity (X → Y and Y → Z ⟹ X → Z)."
    ],
    "example": "Relation R(A, B, C) with FD A → B and B → C: A is candidate key. B → C is a transitive dependency (B is not superkey, C is not prime). Violates 3NF. Decomposed into R1(A, B) and R2(B, C)."
   }
  ],
  "mustKnow": [
   "Entity integrity: Primary key cannot accept NULL values",
   "Referential integrity enforced via foreign keys",
   "2NF eliminates partial dependency; 3NF eliminates transitive dependency",
   "In BCNF, every determinant X in X → Y must strictly be a super key",
   "ACID properties: Atomicity, Consistency, Isolation, Durability"
  ]
 },
 "NOTE-OOPJ-01": {
  "noteId": "NOTE-OOPJ-01",
  "subjectId": "OOPJ",
  "chapter": 1,
  "title": "Java Unit 1: OOP Concepts & Language Basics",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 1). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 1 Core Concepts & Architecture",
    "summary": "JVM architecture, bytecode execution, primitive types, operators, and control flow fundamentals.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 1)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-02": {
  "noteId": "NOTE-OOPJ-02",
  "subjectId": "OOPJ",
  "chapter": 1,
  "title": "Java Unit 1: Question Bank with Model Answers",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 1). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 1 Core Concepts & Architecture",
    "summary": "Solved Unit 1 2-mark and 5-mark university exam questions with step-by-step solutions.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 1)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-03": {
  "noteId": "NOTE-OOPJ-03",
  "subjectId": "OOPJ",
  "chapter": 2,
  "title": "Java Unit 2: Classes, Inheritance & Polymorphism",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 2). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 2 Core Concepts & Architecture",
    "summary": "Method overloading, dynamic method dispatch, abstract classes, super keyword, and interface inheritance.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 2)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-04": {
  "noteId": "NOTE-OOPJ-04",
  "subjectId": "OOPJ",
  "chapter": 2,
  "title": "Java Unit 2: Question Bank with Model Answers",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 2). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 2 Core Concepts & Architecture",
    "summary": "Solved Unit 2 questions on packages, access protection, interfaces, and inheritance hierarchy.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 2)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-05": {
  "noteId": "NOTE-OOPJ-05",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Exception Handling & Custom Exceptions",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 3). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 3 Core Concepts & Architecture",
    "summary": "Checked vs unchecked exceptions, try-catch-finally mechanisms, and user-defined exception handling.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 3)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-06": {
  "noteId": "NOTE-OOPJ-06",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Multithreading Architecture & Lifecycle",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 3). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 3 Core Concepts & Architecture",
    "summary": "Thread lifecycle states, Thread class vs Runnable, synchronization, locks, and inter-thread communication.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 3)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-07": {
  "noteId": "NOTE-OOPJ-07",
  "subjectId": "OOPJ",
  "chapter": 3,
  "title": "Java Unit 3: Question Bank with Model Answers",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 3). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 3 Core Concepts & Architecture",
    "summary": "Unit 3 solved university question bank on synchronization, wait/notify, and exception handling blocks.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 3)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-08": {
  "noteId": "NOTE-OOPJ-08",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Files, Streams & Serialization",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 4). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 4 Core Concepts & Architecture",
    "summary": "Byte and character streams, File I/O, RandomAccessFile, serialization/deserialization, and transient keyword.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 4)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-09": {
  "noteId": "NOTE-OOPJ-09",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Collections Framework Guide",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 4). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 4 Core Concepts & Architecture",
    "summary": "Collection framework hierarchy: List, ArrayList, LinkedList, Set, HashSet, TreeSet, Map, and Iterators.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 4)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-10": {
  "noteId": "NOTE-OOPJ-10",
  "subjectId": "OOPJ",
  "chapter": 4,
  "title": "Java Unit 4: Question Bank with Problem Solutions",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 4). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 4 Core Concepts & Architecture",
    "summary": "Comprehensive question bank with code solutions for file streams, serialization, and collections.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 4)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-11": {
  "noteId": "NOTE-OOPJ-11",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Complete Lecture Notes",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 5). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 5 Core Concepts & Architecture",
    "summary": "Full Unit 5 study notes covering AWT, Swing components, layout managers, and delegation event models.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 5)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-12": {
  "noteId": "NOTE-OOPJ-12",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Swing GUI & Event Handling Basics",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 5). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 5 Core Concepts & Architecture",
    "summary": "Practical guide to JFrame, JPanel, JMenu, ActionListeners, and event adapters.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 5)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-13": {
  "noteId": "NOTE-OOPJ-13",
  "subjectId": "OOPJ",
  "chapter": 5,
  "title": "Java Unit 5: Question Bank with Model Answers",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 5). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 5 Core Concepts & Architecture",
    "summary": "Solved questions on event-driven programming, mouse events, and GUI components.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 5)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
  ]
 },
 "NOTE-OOPJ-14": {
  "noteId": "NOTE-OOPJ-14",
  "subjectId": "OOPJ",
  "chapter": 1,
  "title": "Java OOP Concept Overview & Presentation Slides",
  "pageCount": 30,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "High-yield examination summary for Java Object-Oriented Programming (Unit 1). Covers key language specifications, JVM execution principles, memory model, and standard academic exam questions.",
  "topics": [
   {
    "title": "Unit 1 Core Concepts & Architecture",
    "summary": "Visual classroom presentation slides summarizing fundamental OOP principles, classes, and object models.",
    "points": [
     "Class & Object encapsulation and access specifiers (public, protected, default, private).",
     "Memory management: Stack stores primitive values and object references; Heap stores objects.",
     "Garbage Collection: Automated reclamation of unreferenced heap objects via System.gc().",
     "Type safety and compile-time versus runtime binding."
    ],
    "formulas": [
     "Dynamic Method Dispatch: Superclass reference resolves overridden method at runtime: SuperClass ref = new SubClass(); ref.method();"
    ],
    "example": "Class definition with encapsulation:\npublic class Student {\n  private int id;\n  public int getId() { return id; }\n}"
   },
   {
    "title": "Key Implementations & Best Practices (Unit 1)",
    "summary": "Critical coding patterns, class hierarchies, and error-handling structures evaluated in MGIT university examinations.",
    "points": [
     "Follow standard Java naming conventions and clean class design.",
     "Proper exception propagation using try-catch-finally and throws.",
     "Correct initialization sequences and constructor chaining via super() and this().",
     "Thread safety and concurrency synchronization where applicable."
    ],
    "formulas": [
     "Constructor chaining rule: super() must be the very first statement inside a subclass constructor."
    ],
    "example": "Handling custom exception:\nif (age < 18) throw new InvalidAgeException(\"Not eligible\");"
   }
  ],
  "mustKnow": [
   "Dynamic method dispatch enables runtime polymorphism in Java",
   "super() must be the first statement inside a subclass constructor",
   "Checked exceptions are verified at compile time; unchecked exceptions extend RuntimeException",
   "Abstract classes can have constructors; interfaces cannot have instance constructors",
   "String objects are immutable; StringBuilder and StringBuffer are mutable"
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
  "title": "SE Unit 1: Software Process & Agile Engineering",
  "pageCount": 28,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Software Engineering lecture guide (Unit 1). Covers SDLC processes, agile engineering, requirements elicitation, architectural design, software metrics, and verification testing.",
  "topics": [
   {
    "title": "Unit 1 Process & Architecture",
    "summary": "Comprehensive lecture notes on Software Process Models, Waterfall, Agile Scrum, Sprint lifecycles, and Requirements Engineering.",
    "points": [
     "SDLC phases: Inception, Requirements Analysis, System Design, Coding, Testing, Deployment, Maintenance.",
     "Waterfall Model: Sequential linear progression; suitable only when requirements are rigid and stable.",
     "Spiral Model: Risk-driven iterative model consisting of 4 quadrants (Objectives, Risk Analysis, Development, Review).",
     "Agile & Scrum: Iterative delivery, sprints (2-4 weeks), daily standup, sprint backlog, product owner role."
    ],
    "formulas": [
     "COCOMO Basic Effort Equation: Effort = a × (KLOC)^b person-months"
    ],
    "example": "Requirements traceability matrix maps each business requirement to its corresponding design component and test cases."
   },
   {
    "title": "Design Principles, Metrics & Testing",
    "summary": "Software quality assurance, modular coupling and cohesion, and testing methodologies.",
    "points": [
     "Cohesion: Strength of functional relationship among elements within a module (Aim for High Functional Cohesion).",
     "Coupling: Degree of interdependence between different modules (Aim for Low / Loose Coupling).",
     "White-Box Testing: Evaluates internal code logic; basis path testing, branch coverage, cyclomatic complexity.",
     "Black-Box Testing: Evaluates functional inputs and outputs; Equivalence Partitioning and Boundary Value Analysis (BVA)."
    ],
    "formulas": [
     "McCabe's Cyclomatic Complexity: V(G) = E - N + 2P  (or Predicate Nodes + 1)"
    ],
    "example": "For a control flow graph with 8 edges and 6 nodes: V(G) = 8 - 6 + 2 = 4 independent execution paths."
   }
  ],
  "mustKnow": [
   "High Cohesion and Low Coupling is the golden principle of modular software design",
   "Cyclomatic Complexity V(G) = E - N + 2P equals the number of independent test paths",
   "Boundary Value Analysis tests inputs at extremes: min, min+, nom, max-, max",
   "Waterfall model is linear; Spiral model is risk-driven iterative",
   "Verification answers \"Are we building the product right?\"; Validation answers \"Are we building the right product?\""
  ]
 },
 "NOTE-SE-02": {
  "noteId": "NOTE-SE-02",
  "subjectId": "SE",
  "chapter": 2,
  "title": "SE Unit 2: Requirements Analysis & Specification",
  "pageCount": 28,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Software Engineering lecture guide (Unit 2). Covers SDLC processes, agile engineering, requirements elicitation, architectural design, software metrics, and verification testing.",
  "topics": [
   {
    "title": "Unit 2 Process & Architecture",
    "summary": "Requirements engineering lifecycle, elicitation, functional & non-functional requirements, use-case models, and SRS documentation standards.",
    "points": [
     "SDLC phases: Inception, Requirements Analysis, System Design, Coding, Testing, Deployment, Maintenance.",
     "Waterfall Model: Sequential linear progression; suitable only when requirements are rigid and stable.",
     "Spiral Model: Risk-driven iterative model consisting of 4 quadrants (Objectives, Risk Analysis, Development, Review).",
     "Agile & Scrum: Iterative delivery, sprints (2-4 weeks), daily standup, sprint backlog, product owner role."
    ],
    "formulas": [
     "COCOMO Basic Effort Equation: Effort = a × (KLOC)^b person-months"
    ],
    "example": "Requirements traceability matrix maps each business requirement to its corresponding design component and test cases."
   },
   {
    "title": "Design Principles, Metrics & Testing",
    "summary": "Software quality assurance, modular coupling and cohesion, and testing methodologies.",
    "points": [
     "Cohesion: Strength of functional relationship among elements within a module (Aim for High Functional Cohesion).",
     "Coupling: Degree of interdependence between different modules (Aim for Low / Loose Coupling).",
     "White-Box Testing: Evaluates internal code logic; basis path testing, branch coverage, cyclomatic complexity.",
     "Black-Box Testing: Evaluates functional inputs and outputs; Equivalence Partitioning and Boundary Value Analysis (BVA)."
    ],
    "formulas": [
     "McCabe's Cyclomatic Complexity: V(G) = E - N + 2P  (or Predicate Nodes + 1)"
    ],
    "example": "For a control flow graph with 8 edges and 6 nodes: V(G) = 8 - 6 + 2 = 4 independent execution paths."
   }
  ],
  "mustKnow": [
   "High Cohesion and Low Coupling is the golden principle of modular software design",
   "Cyclomatic Complexity V(G) = E - N + 2P equals the number of independent test paths",
   "Boundary Value Analysis tests inputs at extremes: min, min+, nom, max-, max",
   "Waterfall model is linear; Spiral model is risk-driven iterative",
   "Verification answers \"Are we building the product right?\"; Validation answers \"Are we building the right product?\""
  ]
 },
 "NOTE-SE-03": {
  "noteId": "NOTE-SE-03",
  "subjectId": "SE",
  "chapter": 3,
  "title": "SE Unit 3: Software Design Engineering & Architecture",
  "pageCount": 28,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Software Engineering lecture guide (Unit 3). Covers SDLC processes, agile engineering, requirements elicitation, architectural design, software metrics, and verification testing.",
  "topics": [
   {
    "title": "Unit 3 Process & Architecture",
    "summary": "Design concepts, modular decomposition, coupling & cohesion analysis, architectural patterns, and structural UML modeling.",
    "points": [
     "SDLC phases: Inception, Requirements Analysis, System Design, Coding, Testing, Deployment, Maintenance.",
     "Waterfall Model: Sequential linear progression; suitable only when requirements are rigid and stable.",
     "Spiral Model: Risk-driven iterative model consisting of 4 quadrants (Objectives, Risk Analysis, Development, Review).",
     "Agile & Scrum: Iterative delivery, sprints (2-4 weeks), daily standup, sprint backlog, product owner role."
    ],
    "formulas": [
     "COCOMO Basic Effort Equation: Effort = a × (KLOC)^b person-months"
    ],
    "example": "Requirements traceability matrix maps each business requirement to its corresponding design component and test cases."
   },
   {
    "title": "Design Principles, Metrics & Testing",
    "summary": "Software quality assurance, modular coupling and cohesion, and testing methodologies.",
    "points": [
     "Cohesion: Strength of functional relationship among elements within a module (Aim for High Functional Cohesion).",
     "Coupling: Degree of interdependence between different modules (Aim for Low / Loose Coupling).",
     "White-Box Testing: Evaluates internal code logic; basis path testing, branch coverage, cyclomatic complexity.",
     "Black-Box Testing: Evaluates functional inputs and outputs; Equivalence Partitioning and Boundary Value Analysis (BVA)."
    ],
    "formulas": [
     "McCabe's Cyclomatic Complexity: V(G) = E - N + 2P  (or Predicate Nodes + 1)"
    ],
    "example": "For a control flow graph with 8 edges and 6 nodes: V(G) = 8 - 6 + 2 = 4 independent execution paths."
   }
  ],
  "mustKnow": [
   "High Cohesion and Low Coupling is the golden principle of modular software design",
   "Cyclomatic Complexity V(G) = E - N + 2P equals the number of independent test paths",
   "Boundary Value Analysis tests inputs at extremes: min, min+, nom, max-, max",
   "Waterfall model is linear; Spiral model is risk-driven iterative",
   "Verification answers \"Are we building the product right?\"; Validation answers \"Are we building the right product?\""
  ]
 },
 "NOTE-SE-04": {
  "noteId": "NOTE-SE-04",
  "subjectId": "SE",
  "chapter": 4,
  "title": "SE Unit 4: Software Testing Strategies & Metrics",
  "pageCount": 28,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Software Engineering lecture guide (Unit 4). Covers SDLC processes, agile engineering, requirements elicitation, architectural design, software metrics, and verification testing.",
  "topics": [
   {
    "title": "Unit 4 Process & Architecture",
    "summary": "Software testing techniques, White-box basis path testing, cyclomatic complexity calculations, Black-box equivalence partitioning, and boundary value analysis.",
    "points": [
     "SDLC phases: Inception, Requirements Analysis, System Design, Coding, Testing, Deployment, Maintenance.",
     "Waterfall Model: Sequential linear progression; suitable only when requirements are rigid and stable.",
     "Spiral Model: Risk-driven iterative model consisting of 4 quadrants (Objectives, Risk Analysis, Development, Review).",
     "Agile & Scrum: Iterative delivery, sprints (2-4 weeks), daily standup, sprint backlog, product owner role."
    ],
    "formulas": [
     "COCOMO Basic Effort Equation: Effort = a × (KLOC)^b person-months"
    ],
    "example": "Requirements traceability matrix maps each business requirement to its corresponding design component and test cases."
   },
   {
    "title": "Design Principles, Metrics & Testing",
    "summary": "Software quality assurance, modular coupling and cohesion, and testing methodologies.",
    "points": [
     "Cohesion: Strength of functional relationship among elements within a module (Aim for High Functional Cohesion).",
     "Coupling: Degree of interdependence between different modules (Aim for Low / Loose Coupling).",
     "White-Box Testing: Evaluates internal code logic; basis path testing, branch coverage, cyclomatic complexity.",
     "Black-Box Testing: Evaluates functional inputs and outputs; Equivalence Partitioning and Boundary Value Analysis (BVA)."
    ],
    "formulas": [
     "McCabe's Cyclomatic Complexity: V(G) = E - N + 2P  (or Predicate Nodes + 1)"
    ],
    "example": "For a control flow graph with 8 edges and 6 nodes: V(G) = 8 - 6 + 2 = 4 independent execution paths."
   }
  ],
  "mustKnow": [
   "High Cohesion and Low Coupling is the golden principle of modular software design",
   "Cyclomatic Complexity V(G) = E - N + 2P equals the number of independent test paths",
   "Boundary Value Analysis tests inputs at extremes: min, min+, nom, max-, max",
   "Waterfall model is linear; Spiral model is risk-driven iterative",
   "Verification answers \"Are we building the product right?\"; Validation answers \"Are we building the right product?\""
  ]
 },
 "NOTE-SE-05": {
  "noteId": "NOTE-SE-05",
  "subjectId": "SE",
  "chapter": 5,
  "title": "SE Unit 5: Quality Assurance, COCOMO & Maintenance",
  "pageCount": 28,
  "quality": "good",
  "limited": false,
  "limitedReason": "",
  "overview": "Software Engineering lecture guide (Unit 5). Covers SDLC processes, agile engineering, requirements elicitation, architectural design, software metrics, and verification testing.",
  "topics": [
   {
    "title": "Unit 5 Process & Architecture",
    "summary": "Software quality assurance (SQA), ISO 9000 & CMMI frameworks, COCOMO effort estimation formulas, risk management, and software maintenance.",
    "points": [
     "SDLC phases: Inception, Requirements Analysis, System Design, Coding, Testing, Deployment, Maintenance.",
     "Waterfall Model: Sequential linear progression; suitable only when requirements are rigid and stable.",
     "Spiral Model: Risk-driven iterative model consisting of 4 quadrants (Objectives, Risk Analysis, Development, Review).",
     "Agile & Scrum: Iterative delivery, sprints (2-4 weeks), daily standup, sprint backlog, product owner role."
    ],
    "formulas": [
     "COCOMO Basic Effort Equation: Effort = a × (KLOC)^b person-months"
    ],
    "example": "Requirements traceability matrix maps each business requirement to its corresponding design component and test cases."
   },
   {
    "title": "Design Principles, Metrics & Testing",
    "summary": "Software quality assurance, modular coupling and cohesion, and testing methodologies.",
    "points": [
     "Cohesion: Strength of functional relationship among elements within a module (Aim for High Functional Cohesion).",
     "Coupling: Degree of interdependence between different modules (Aim for Low / Loose Coupling).",
     "White-Box Testing: Evaluates internal code logic; basis path testing, branch coverage, cyclomatic complexity.",
     "Black-Box Testing: Evaluates functional inputs and outputs; Equivalence Partitioning and Boundary Value Analysis (BVA)."
    ],
    "formulas": [
     "McCabe's Cyclomatic Complexity: V(G) = E - N + 2P  (or Predicate Nodes + 1)"
    ],
    "example": "For a control flow graph with 8 edges and 6 nodes: V(G) = 8 - 6 + 2 = 4 independent execution paths."
   }
  ],
  "mustKnow": [
   "High Cohesion and Low Coupling is the golden principle of modular software design",
   "Cyclomatic Complexity V(G) = E - N + 2P equals the number of independent test paths",
   "Boundary Value Analysis tests inputs at extremes: min, min+, nom, max-, max",
   "Waterfall model is linear; Spiral model is risk-driven iterative",
   "Verification answers \"Are we building the product right?\"; Validation answers \"Are we building the right product?\""
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
 }
,
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
    "Control Function: P \u00b7 T2: R2 \u2190 R1",
    "Tri-State Buffer Bus: Normal state (0 or 1) when Enable E = 1, High-Impedance (Hi-Z) open circuit when E = 0",
    "Memory Read Cycle: Read: DR \u2190 M[AR], Address on Bus selected by AR"
   ],
   "example": "If S2 S1 S0 = 010 and LD of AR is active, the content of PC (Program Counter) is transferred into AR (Address Register) in one clock cycle."
  },
  {
   "title": "Basic Computer Registers & Hardware Configuration",
   "summary": "The Mano Basic Computer features 8 designated registers interfacing with a 4096 \u00d7 16 memory unit.",
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
    "Memory Addressing: 12 bits address space \u2192 2^12 = 4096 words",
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
    "Direct Effective Address: EA = IR(0\u201311)",
    "Indirect Effective Address: EA = M[IR(0\u201311)]"
   ],
   "example": "If IR = 1001 0010 0100 0101 (Hex 9245): I = 1 (Indirect), Opcode = 001 (ADD), Address = 245. Memory at 245 holds 300. Effective address = 300; operand is fetched from M[300]."
  },
  {
   "title": "Timing, Control Unit & The 4-Phase Instruction Cycle",
   "summary": "Hardwired control uses a 3\u00d78 decoder for opcodes, a 4-bit Sequence Counter (SC), and a 4\u00d716 decoder producing timing signals T0 to T15.",
   "points": [
    "T0: AR <- PC (Fetch: Transfer PC address to AR)",
    "T1: IR <- M[AR], PC <- PC + 1 (Fetch: Read instruction word into IR, increment PC)",
    "T2: Decode opcode in IR(12-14), AR <- IR(0-11), I <- IR(15) (Decode)",
    "T3: If I = 1 and Opcode != 111, AR <- M[AR] (Determine effective address if indirect)",
    "Execution: Executed during timing signals T4, T5, T6 depending on decoded operation D0-D6."
   ],
   "formulas": [
    "Fetch RTL: T0: AR \u2190 PC",
    "Fetch RTL: T1: IR \u2190 M[AR], PC \u2190 PC + 1",
    "Decode RTL: T2: D0...D7 \u2190 Decode IR(12\u201314), AR \u2190 IR(0\u201311), I \u2190 IR(15)"
   ],
   "example": "During T1, as IR is loaded from M[AR], the PC is simultaneously incremented so it automatically points to the next sequential instruction."
  },
  {
   "title": "Memory-Reference Instructions & Execution Micro-operations",
   "summary": "Seven memory-reference instructions implemented using control outputs D0 through D6.",
   "points": [
    "AND (D0): AC <- AC \u2227 M[AR] (Logical AND operand with AC).",
    "ADD (D1): AC <- AC + M[AR], E <- Cout (Add operand to AC with carry out to E).",
    "LDA (D2): AC <- M[AR] (Load operand from memory into AC via DR).",
    "STA (D3): M[AR] <- AC (Store accumulator contents into memory location).",
    "BUN (D4): PC <- AR (Branch Unconditionally to specified address).",
    "BSA (D5): M[AR] <- PC, AR <- AR + 1, PC <- AR (Branch and Save Return Address in subroutine call).",
    "ISZ (D6): Increment memory word M[AR] <- M[AR] + 1; if (M[AR] + 1 == 0) then PC <- PC + 1 (Loop control)."
   ],
   "formulas": [
    "BSA Micro-ops: D5T4: M[AR] \u2190 PC, AR \u2190 AR + 1; D5T5: PC \u2190 AR, SC \u2190 0",
    "ISZ Micro-ops: D6T4: DR \u2190 M[AR]; D6T5: DR \u2190 DR + 1; D6T6: M[AR] \u2190 DR, if (DR = 0) then (PC \u2190 PC + 1), SC \u2190 0"
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
    "Interrupt Condition: R \u2190 1 when (IEN) \u00b7 (FGI + FGO) \u00b7 T0'T1'T2'",
    "Save Return: M[0] \u2190 PC, PC \u2190 1"
   ],
   "example": "When an interrupt occurs, current PC is saved in memory word 0 (M[0]), and PC is set to 1 to begin the Interrupt Service Routine (ISR)."
  }
 ],
 "mustKnow": [
  "Basic Mano computer registers: PC (12), AR (12), IR (16), DR (16), AC (16), TR (16)",
  "Instruction word: bit 15 is mode I (0=direct, 1=indirect), bits 14\u201312 opcode, bits 11\u20130 address",
  "Fetch micro-operations: T0: AR \u2190 PC; T1: IR \u2190 M[AR], PC \u2190 PC + 1",
  "Effective address for indirect addressing: AR \u2190 M[AR] executed at timing signal T3 when I=1",
  "BSA saves return address in memory at effective address M[AR] \u2190 PC, AR \u2190 AR + 1, and PC \u2190 AR",
  "Interrupt cycle saves return address in M[0], clears IEN \u2190 0, and branches to address 1 (PC \u2190 1)"
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
    "Subroutine Call: SBR \u2190 CAR + 1, CAR \u2190 Branch Address",
    "Subroutine Return: CAR \u2190 SBR"
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
    "PUSH: SP \u2190 SP - 1, M[SP] \u2190 DR, if (SP = 0) then FULL \u2190 1, EMTY \u2190 0",
    "POP: DR \u2190 M[SP], SP \u2190 SP + 1, if (SP = Limit) then EMTY \u2190 1, FULL \u2190 0",
    "Infix to Postfix: A * B + C * D \u2192 AB * CD * +"
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
    "Auto-increment: EA = [R], R \u2190 R + 1; Auto-decrement: R \u2190 R - 1, EA = [R]"
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
    "Condition 10: AC \u2190 AC - B, then ashr(AC, Q, Q-1)",
    "Condition 01: AC \u2190 AC + B, then ashr(AC, Q, Q-1)",
    "Condition 00 or 11: ashr(AC, Q, Q-1)",
    "Loop: SC \u2190 SC - 1 until SC = 0"
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
    "Restoring: Shift left AQ, A \u2190 A - B; If A < 0: Q0 = 0, A \u2190 A + B; If A \u2265 0: Q0 = 1",
    "Non-Restoring: If A \u2265 0: Shift left AQ, A \u2190 2A - B; If A < 0: Shift left AQ, A \u2190 2A + B; Set Q0 = (sign(A) == 0 ? 1 : 0)"
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
    "Handshake Sequence: Data on Bus \u2192 Data Valid (high) \u2192 Data Accepted (high) \u2192 Data Valid (low) \u2192 Data Accepted (low)"
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
    "Parallel Priority: Uses an Interrupt Register, an Interrupt Mask Register, and a Priority Encoder (e.g. 4\u00d72 or 8\u00d73 encoder) to identify the highest active interrupt in a single clock cycle.",
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
    "Average Access Time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm",
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
    "Effective Memory Access Time with TLB: EMAT = Hit_TLB \u00b7 (T_TLB + T_m) + (1 - Hit_TLB) \u00b7 (T_TLB + 2 \u00b7 T_m)",
    "MESI Protocol States: Modified (M), Exclusive (E), Shared (S), Invalid (I)"
   ],
   "example": "Virtual page size 4KB (12 bits offset). Virtual address 0x0003_1ABC has page number 0x0003 and offset 0x1ABC. If Page Table entry 3 holds frame 0x0015, Physical Address = 0x0015_1ABC."
  }
 ],
 "mustKnow": [
  "Average memory access time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm",
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
    "Average Access Time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm"
   ],
   "example": "A tight while loop illustrates temporal locality (same instructions repeated) and spatial locality (instructions stored contiguously)."
  },
  {
   "title": "Content Addressable Memory (CAM) Architecture",
   "summary": "Hardware implementation of associative memory where words are accessed simultaneously based on bit patterns rather than numeric addresses.",
   "points": [
    "Hardware components: Argument Register A, Key Register (Mask) K, Associative Memory Array of m words \u00d7 n bits, Match Register M.",
    "Match Logic: Compares masked bits of A with every word simultaneously. Bit match logic: x_ij = A_j F_ij + A_j' F_ij'. Word match: M_i = product of (x_ij + K_j')."
   ],
   "formulas": [
    "Match Condition: M_i = \u220f (x_ij + K_j') from j=1 to n",
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
    "BSA: M[AR] \u2190 PC, AR \u2190 AR + 1, PC \u2190 AR",
    "ISZ: M[AR] \u2190 M[AR] + 1; If M[AR] = 0, PC \u2190 PC + 1"
   ],
   "example": "Given PC = 100, AR = 250, BSA 250 saves return address 101 at memory location 250, and execution continues at location 251."
  },
  {
   "title": "Booth's Multiplication Worked Numericals",
   "summary": "Complete step-by-step register tables for signed 2's complement multiplication.",
   "points": [
    "Columns: Operation, AC (Accumulator), Q (Multiplier), Q-1 (Previous bit), SC (Sequence Counter).",
    "Worked example for (-9) \u00d7 (+6) and (+13) \u00d7 (-11)."
   ],
   "formulas": [
    "Rule 10: AC \u2190 AC - B, ashr",
    "Rule 01: AC \u2190 AC + B, ashr",
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
    "Average Access Time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm"
   ],
   "example": "With 16MB RAM (24 bits), 32KB cache, 16-byte block: Word offset = 4 bits. Direct mapping index = log2(32KB/16B) = 11 bits; Tag = 24 - 11 - 4 = 9 bits. 2-way set associative: Sets = 2048 / 2 = 1024; Set bits = 10; Tag = 24 - 10 - 4 = 10 bits."
  }
 ],
 "mustKnow": [
  "Booth multiplication register table requires columns: Operation, AC, Q, Q-1, SC",
  "In Booth's algorithm, initial AC = 0, Q-1 = 0, and SC = number of bits n",
  "Cache address field formula: Total = log2(RAM); Offset = log2(Block); Index = log2(Lines/Sets); Tag = Total - Index - Offset",
  "In BSA, PC of next instruction is saved at M[effective address], and execution resumes at effective address + 1",
  "Speedup factor S = Tm / (H \u00b7 Tc + (1 - H) \u00b7 Tm)"
 ]
},
 "NOTE-COA-26": {
 "noteId": "NOTE-COA-26",
 "subjectId": "COA",
 "chapter": 3,
 "title": "COA Unit-wise Question Bank with Answers (Units 1\u20135)",
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
    "CLA Generate: Gi = Ai \u00b7 Bi; Propagate: Pi = Ai \u2295 Bi",
    "Carry: Ci+1 = Gi + Pi \u00b7 Ci"
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
    "T0: AR \u2190 PC; T1: IR \u2190 M[AR], PC \u2190 PC + 1; T2: AR \u2190 IR(0\u201311), I \u2190 IR(15)"
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
    "Average Access Time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm",
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
 "title": "COA Complete Questions Bank (Units 1\u20135)",
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
    "Average Access Time: Ta = H \u00b7 Tc + (1 - H) \u00b7 Tm",
    "TLB Hit Time: EMAT = H_tlb \u00b7 (T_tlb + Tm) + (1 - H_tlb) \u00b7 (T_tlb + 2Tm)"
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
}
};
if (typeof window !== 'undefined') window.NOTE_SUMMARIES = NOTE_SUMMARIES;
if (typeof module !== 'undefined') module.exports = { NOTE_SUMMARIES };

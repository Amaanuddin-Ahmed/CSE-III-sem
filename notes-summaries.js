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
};
if (typeof window !== 'undefined') window.NOTE_SUMMARIES = NOTE_SUMMARIES;
if (typeof module !== 'undefined') module.exports = { NOTE_SUMMARIES };

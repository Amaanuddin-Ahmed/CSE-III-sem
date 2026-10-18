/**
 * MGIT PYQ Hub - Question Bank & Subject Metadata
 * Strictly CSE Semester III Core Subjects:
 * 1. DM (Discrete Mathematics)
 * 2. COA (Computer Organization & Architecture)
 * 3. OOPJ (Object-Oriented Programming through Java)
 * 4. DBMS (Database Management Systems)
 * 5. SE (Software Engineering)
 * 6. ES (Environmental Studies / Science)
 * 7. I&E (Innovation and Entrepreneurship)
 */

const SUBJECTS_DATA = {
  "DM": {
    id: "DM",
    shortName: "DM",
    title: "Discrete Mathematics",
    code: "CS303PC",
    icon: "fa-solid fa-calculator",
    accentColor: "#2563eb",
    bgColor: "#eff6ff",
    driveFolderId: "1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    driveUrl: "https://drive.google.com/drive/folders/1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    paperCount: 24,
    notesCount: 0,
    chapters: {
      1: "Mathematical Logic, Truth Tables, Normal Forms (PCNF, PDNF) & Predicates",
      2: "Set Theory, Relations, Equivalence, Hasse Diagrams & Lattices",
      3: "Algebraic Structures, Semigroups, Monoids, Groups & Subgroups",
      4: "Combinatorics, Permutations, Combinations & Recurrence Relations",
      5: "Graph Theory, Paths, Euler & Hamiltonian Circuits, Isomorphism"
    }
  },
  "COA": {
    id: "COA",
    shortName: "COA",
    title: "Computer Organization & Architecture",
    code: "CS302PC",
    icon: "fa-solid fa-microchip",
    accentColor: "#059669",
    bgColor: "#ecfdf5",
    driveFolderId: "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    driveUrl: "https://drive.google.com/drive/folders/1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    paperCount: 23,
    notesCount: 2,
    chapters: {
      1: "Basic Structure of Computers, Machine Instructions & Addressing Modes",
      2: "Central Processing Unit, ALU Design & Microprogrammed Control Unit",
      3: "Computer Arithmetic, Fixed & Floating Point, Booth's Algorithm",
      4: "Memory Organization, Memory Hierarchy, Cache Mapping & Virtual Memory",
      5: "Input-Output Organization, DMA, Interrupts & Instruction Pipelining"
    }
  },
  "OOPJ": {
    id: "OOPJ",
    shortName: "OOPJ",
    title: "Object-Oriented Programming through Java",
    code: "CS305PC",
    icon: "fa-solid fa-code",
    accentColor: "#d97706",
    bgColor: "#fffbeb",
    driveFolderId: "1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    driveUrl: "https://drive.google.com/drive/folders/1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    paperCount: 20,
    notesCount: 0,
    chapters: {
      1: "OOP Concepts, Java Fundamentals, JVM Architecture, Classes & Objects",
      2: "Inheritance, Polymorphism, Method Overriding, Interfaces & Packages",
      3: "Exception Handling, Custom Exceptions & Multithreading",
      4: "Java Collections Framework (List, Set, Map) & Generics",
      5: "Files, Streams, Serialization, GUI (Swing/AWT) & Event Handling"
    }
  },
  "DBMS": {
    id: "DBMS",
    shortName: "DBMS",
    title: "Database Management Systems",
    code: "CS304PC",
    icon: "fa-solid fa-database",
    accentColor: "#0891b2",
    bgColor: "#ecfeff",
    driveFolderId: "1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    driveUrl: "https://drive.google.com/drive/folders/1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    paperCount: 12,
    notesCount: 0,
    chapters: {
      1: "Database System Concepts, Architecture & Entity-Relationship (ER) Modeling",
      2: "Relational Data Model, Relational Algebra & Integrity Constraints",
      3: "SQL Queries, Nested Subqueries, Triggers, Views & Schema Normalization",
      4: "Transaction Processing, ACID Properties, Concurrency Control & Serializability",
      5: "Storage, Indexing Techniques (B+ Trees) & Query Evaluation"
    }
  },
  "SE": {
    id: "SE",
    shortName: "SE",
    title: "Software Engineering",
    code: "CS306PC",
    icon: "fa-solid fa-laptop-code",
    accentColor: "#4f46e5",
    bgColor: "#eef2ff",
    driveFolderId: "16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    driveUrl: "https://drive.google.com/drive/folders/16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    paperCount: 17,
    notesCount: 0,
    chapters: {
      1: "Software Process Models, Agile Development, Scrum & Waterfall",
      2: "Requirements Engineering, SRS Specification & Use-Case Modeling",
      3: "System Architectural Design, Component Design & UI Design",
      4: "Software Testing Techniques (Black-box, White-box, Integration)",
      5: "Software Maintenance, Risk Management, Metrics & SCM"
    }
  },
  "ES": {
    id: "ES",
    shortName: "ES",
    title: "Environmental Studies",
    code: "MC301ES",
    icon: "fa-solid fa-leaf",
    accentColor: "#15803d",
    bgColor: "#f0fdf4",
    driveFolderId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    driveUrl: "https://drive.google.com/drive/folders/1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    paperCount: 5,
    notesCount: 2,
    chapters: {
      1: "Ecosystems, Ecological Pyramids, Food Chains & Biodiversity",
      2: "Natural Resources: Water, Mineral, Forest & Energy Resources",
      3: "Environmental Pollution (Air, Water, Soil, Noise) & Solid Waste",
      4: "Global Environmental Challenges, Climate Change & Ozone Depletion",
      5: "Environmental Protection Legislation, Fieldwork & Sustainable Goals"
    }
  },
  "IE": {
    id: "IE",
    shortName: "I&E",
    title: "Innovation and Entrepreneurship",
    code: "MC302IE",
    icon: "fa-solid fa-lightbulb",
    accentColor: "#be185d",
    bgColor: "#fdf2f8",
    driveFolderId: null,
    driveUrl: "https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing",
    paperCount: 0,
    notesCount: 0,
    chapters: {
      1: "Introduction to Innovation, Design Thinking & Creative Problem Solving",
      2: "Entrepreneurial Opportunity Recognition & Market Feasibility",
      3: "Business Model Generation, Lean Canvas & Value Proposition",
      4: "Venture Financing, Seed Capital, Angels, Venture Capital & Pitching",
      5: "Intellectual Property Rights (IPR), Patenting, Trademarks & Scaling"
    }
  }
};

const NOTES_DATA = [
  {
    id: "NOTE-COA-01",
    subjectId: "COA",
    chapter: 1,
    title: "COA Unit 1: Basic Structure & Machine Instructions",
    fileName: "Unit 1.pdf",
    fileSize: "3.1 MB",
    driveFileId: "1qQQpGKrjNC30plE7BIG-8gNmPg5U9dgn",
    folderUrl: "https://drive.google.com/drive/folders/1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    description: "Detailed handwritten and typed lecture notes on Machine Instructions, Addressing Modes and CPU register formats."
  },
  {
    id: "NOTE-COA-02",
    subjectId: "COA",
    chapter: 1,
    title: "COA Unit 1: Addressing Modes & Execution Architecture",
    fileName: "Unit 1 Actual.pdf",
    fileSize: "727 KB",
    driveFileId: "1Ccju2Q81WPLiycZF58lCyvh7qN4tlufQ",
    folderUrl: "https://drive.google.com/drive/folders/1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    description: "Formulas for Effective Address (EA) calculation with step-by-step memory pointer diagrams."
  },
  {
    id: "NOTE-ES-01",
    subjectId: "ES",
    chapter: 1,
    title: "ES Unit 1: Ecosystems, Food Chains & Biodiversity",
    fileName: "Unit 1.pdf",
    fileSize: "1.8 MB",
    driveFileId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    folderUrl: "https://drive.google.com/drive/folders/1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    description: "Comprehensive notes covering biotic components, food webs, ecological pyramids, and biodiversity in India."
  },
  {
    id: "NOTE-ES-02",
    subjectId: "ES",
    chapter: 2,
    title: "ES Unit 2: Natural Resources & Environmental Conservation",
    fileName: "Unit 2.pdf",
    fileSize: "2.2 MB",
    driveFileId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    folderUrl: "https://drive.google.com/drive/folders/1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    description: "Renewable vs non-renewable energy, mineral resources, water conservation and sustainable management."
  }
];

const QUESTIONS_DATABASE = [
  // -------------------------------------------------------------
  // COA (Computer Organization & Architecture)
  // -------------------------------------------------------------
  {
    id: "COA-Q1",
    subjectId: "COA",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2022, 2020],
    frequency: 3,
    questionNumber: "Q1(a)",
    question: "Define Effective Address (EA). Differentiate between Direct and Indirect Addressing modes with a quick example.",
    paperName: "Jan 2024 reg.pdf",
    pageNumber: 1,
    tip: "Provide the memory lookup equation EA = A vs EA = [A] for full 2 marks."
  },
  {
    id: "COA-Q2",
    subjectId: "COA",
    chapter: 1,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q2",
    question: "Explain the various Addressing Modes (Immediate, Direct, Indirect, Register, Indexed, Relative) with suitable examples and EA computation formulas.",
    paperName: "Aug 2024.pdf",
    pageNumber: 1,
    tip: "Draw neat memory address pointer diagrams for each mode."
  },
  {
    id: "COA-Q3",
    subjectId: "COA",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2022, 2021],
    frequency: 3,
    questionNumber: "Q3",
    question: "Differentiate between Hardwired Control Unit and Microprogrammed Control Unit. Draw the block diagram of Microprogrammed Control Unit.",
    paperName: "Aug 2023 reg.pdf",
    pageNumber: 2,
    tip: "Present differences in a clean comparison table (Speed, Flexibility, Control Store, CISC/RISC)."
  },
  {
    id: "COA-Q4",
    subjectId: "COA",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021, 2020],
    frequency: 5,
    questionNumber: "Q5",
    question: "Explain Booth's Multiplication Algorithm for signed 2's complement numbers with a flowchart. Multiply (-9) by (+6) step-by-step.",
    paperName: "dec 2024.pdf",
    pageNumber: 2,
    tip: "Tabulate values of A, Q, Q-1, and Count for each step. Highly repeated in university papers."
  },
  {
    id: "COA-Q5",
    subjectId: "COA",
    chapter: 4,
    part: "A",
    marks: 2,
    years: [2023, 2021],
    frequency: 2,
    questionNumber: "Q1(d)",
    question: "What is Cache Hit and Cache Miss? Define Hit Ratio with its mathematical formula.",
    paperName: "mr 22 reg,supple.pdf",
    pageNumber: 1,
    tip: "State Hit Ratio = Total Hits / (Total Hits + Total Misses)."
  },
  {
    id: "COA-Q6",
    subjectId: "COA",
    chapter: 4,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021],
    frequency: 4,
    questionNumber: "Q7",
    question: "Explain the three Cache Memory Mapping Techniques: Direct Mapping, Fully Associative Mapping, and Set-Associative Mapping with address format divisions.",
    paperName: "Aug 2024 supp.pdf",
    pageNumber: 2,
    tip: "Draw the memory address bit-split boxes (Tag, Index/Set, Word Offset) clearly."
  },
  {
    id: "COA-Q7",
    subjectId: "COA",
    chapter: 5,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q9",
    question: "What is Direct Memory Access (DMA)? Describe DMA Controller registers, bus signals (HRQ, HLDA), and transfer modes (Burst vs Cycle Stealing).",
    paperName: "Jan 2024 reg.pdf",
    pageNumber: 2,
    tip: "Draw the interconnection bus diagram showing CPU, DMA Controller, and Main Memory."
  },

  // -------------------------------------------------------------
  // DM (Discrete Mathematics)
  // -------------------------------------------------------------
  {
    id: "DM-Q1",
    subjectId: "DM",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2023, 2021],
    frequency: 3,
    questionNumber: "Q1(a)",
    question: "Define Tautology and Contradiction. Verify whether (P -> Q) <-> (~P v Q) is a Tautology using a truth table.",
    paperName: "Aug 2023 regular.pdf",
    pageNumber: 1,
    tip: "Construct the 4-row truth table showing the final column containing all True values."
  },
  {
    id: "DM-Q2",
    subjectId: "DM",
    chapter: 1,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021, 2020],
    frequency: 5,
    questionNumber: "Q2",
    question: "Obtain the Principal Disjunctive Normal Form (PDNF) and Principal Conjunctive Normal Form (PCNF) for statement formula: (P -> (Q ^ R)) ^ (~P -> (~Q ^ ~R)).",
    paperName: "25 supple.pdf",
    pageNumber: 1,
    tip: "Use the truth table row method: Minterms for True rows give PDNF, Maxterms for False rows give PCNF."
  },
  {
    id: "DM-Q3",
    subjectId: "DM",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q3",
    question: "Define Poset and Lattice. Draw the Hasse diagram for D30 = {1, 2, 3, 5, 6, 10, 15, 30} under divisibility relation and verify if it forms a Lattice.",
    paperName: "Aug 2023.pdf",
    pageNumber: 1,
    tip: "Draw the 3D cube Hasse diagram with 1 at bottom and 30 at top. State GLB = gcd(a,b), LUB = lcm(a,b)."
  },
  {
    id: "DM-Q4",
    subjectId: "DM",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2021, 2020],
    frequency: 4,
    questionNumber: "Q5",
    question: "Define Subgroup. State and prove Lagrange's Theorem for finite groups. Provide a counterexample to show that the converse does not hold.",
    paperName: "Aug 2023 regular.pdf",
    pageNumber: 2,
    tip: "For the converse counterexample, cite the Alternating Group A4 (order 12 has no subgroup of order 6)."
  },
  {
    id: "DM-Q5",
    subjectId: "DM",
    chapter: 4,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021, 2020],
    frequency: 5,
    questionNumber: "Q7",
    question: "Solve the recurrence relation a_n - 7a_{n-1} + 10a_{n-2} = 0 for n >= 2 with initial conditions a_0 = 1, a_1 = 8.",
    paperName: "25 supple.pdf",
    pageNumber: 2,
    tip: "Form characteristic equation r^2 - 7r + 10 = 0 to get roots r = 2, 5. Apply initial conditions to find C1, C2."
  },
  {
    id: "DM-Q6",
    subjectId: "DM",
    chapter: 5,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022],
    frequency: 3,
    questionNumber: "Q9",
    question: "Define Euler Path, Euler Circuit, Hamiltonian Path, and Hamiltonian Circuit. State Euler's theorem on degree of vertices and test if the Petersen graph is Hamiltonian.",
    paperName: "Aug 2023 regular.pdf",
    pageNumber: 2,
    tip: "A connected graph has an Euler circuit iff every vertex has an even degree."
  },

  // -------------------------------------------------------------
  // DBMS (Database Management Systems)
  // -------------------------------------------------------------
  {
    id: "DBMS-Q1",
    subjectId: "DBMS",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2023],
    frequency: 2,
    questionNumber: "Q1(a)",
    question: "What is Data Independence? Differentiate between Physical and Logical Data Independence.",
    paperName: "DBMS Paper 1.pdf",
    pageNumber: 1,
    tip: "Explain with respect to the Three-Schema ANSI/SPARC Architecture."
  },
  {
    id: "DBMS-Q2",
    subjectId: "DBMS",
    chapter: 1,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022],
    frequency: 3,
    questionNumber: "Q2",
    question: "Construct an Entity-Relationship (ER) diagram for a Hospital Management System. Explain primary keys, foreign keys, weak entities, and cardinality ratios.",
    paperName: "DBMS Paper 2.pdf",
    pageNumber: 1,
    tip: "Clearly label double rectangles for weak entities and diamond shapes for relationships."
  },
  {
    id: "DBMS-Q3",
    subjectId: "DBMS",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2022, 2021],
    frequency: 3,
    questionNumber: "Q3",
    question: "Explain the fundamental operations of Relational Algebra: Selection, Projection, Union, Set Difference, and Cartesian Product with query examples.",
    paperName: "DBMS Paper 3.pdf",
    pageNumber: 1,
    tip: "Use formal notation sigma (selection) and pi (projection) alongside concrete relation tables."
  },
  {
    id: "DBMS-Q4",
    subjectId: "DBMS",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q5",
    question: "What is Normalization? Explain 1NF, 2NF, 3NF, and BCNF with functional dependency examples and decomposition rules.",
    paperName: "DBMS Paper 4.pdf",
    pageNumber: 2,
    tip: "For 3NF: Every non-prime attribute is non-transitively dependent on candidate key."
  },
  {
    id: "DBMS-Q5",
    subjectId: "DBMS",
    chapter: 4,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2021],
    frequency: 3,
    questionNumber: "Q7",
    question: "Explain ACID properties of a transaction. What is Conflict Serializability? How is Precedence Graph used to test serializability?",
    paperName: "DBMS Paper 5.pdf",
    pageNumber: 2,
    tip: "Draw a precedence graph; a schedule is conflict serializable iff its precedence graph has no cycles."
  },
  {
    id: "DBMS-Q6",
    subjectId: "DBMS",
    chapter: 5,
    part: "B",
    marks: 5,
    years: [2023, 2022],
    frequency: 2,
    questionNumber: "Q9",
    question: "Explain B+ Tree index structure. How does insertion and search work in a B+ Tree? Compare B+ Tree with B-Tree.",
    paperName: "DBMS Paper 6.pdf",
    pageNumber: 2,
    tip: "Highlight that all data records/pointers reside exclusively in leaf nodes in a B+ Tree."
  },

  // -------------------------------------------------------------
  // OOPJ (Object-Oriented Programming through Java)
  // -------------------------------------------------------------
  {
    id: "OOPJ-Q1",
    subjectId: "OOPJ",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2023, 2021],
    frequency: 3,
    questionNumber: "Q1(a)",
    question: "Why is Java platform independent? What is the role of JVM, JRE, and Bytecode?",
    paperName: "Java 2024.pdf",
    pageNumber: 1,
    tip: "Mention WORA (Write Once, Run Anywhere) and intermediate .class bytecode execution."
  },
  {
    id: "OOPJ-Q2",
    subjectId: "OOPJ",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021, 2020],
    frequency: 5,
    questionNumber: "Q3",
    question: "What is an Interface in Java? How does Java achieve multiple inheritance through interfaces? Write a Java code demonstrating the Diamond Problem solution.",
    paperName: "Java 2023 reg.pdf",
    pageNumber: 1,
    tip: "Show class Document implementing Printable and Showable interfaces."
  },
  {
    id: "OOPJ-Q3",
    subjectId: "OOPJ",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021, 2020],
    frequency: 5,
    questionNumber: "Q5",
    question: "Explain Java Exception Handling mechanism with try, catch, finally, throw, and throws. Write a program to create and handle a user-defined custom exception.",
    paperName: "Java 2024 supple.pdf",
    pageNumber: 2,
    tip: "Write a complete compilable class extending Exception with super(message)."
  },
  {
    id: "OOPJ-Q4",
    subjectId: "OOPJ",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2022, 2021],
    frequency: 3,
    questionNumber: "Q6",
    question: "Explain the Thread Life Cycle in Java with a state transition diagram. What is synchronized keyword and why is it used?",
    paperName: "Java 2023.pdf",
    pageNumber: 2,
    tip: "Illustrate New, Runnable, Blocked/Waiting, and Terminated states with method transitions."
  },
  {
    id: "OOPJ-Q5",
    subjectId: "OOPJ",
    chapter: 4,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022],
    frequency: 3,
    questionNumber: "Q7",
    question: "Describe Java Collections Framework hierarchy. Compare ArrayList vs LinkedList and HashMap vs TreeMap with time complexity.",
    paperName: "Java 2022 reg.pdf",
    pageNumber: 2,
    tip: "Highlight random access O(1) in ArrayList vs O(1) insert/delete at known pointer in LinkedList."
  },

  // -------------------------------------------------------------
  // SE (Software Engineering)
  // -------------------------------------------------------------
  {
    id: "SE-Q1",
    subjectId: "SE",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2023],
    frequency: 2,
    questionNumber: "Q1(a)",
    question: "Define Software Engineering. What are the key attributes of good software?",
    paperName: "SE 2024 reg.pdf",
    pageNumber: 1,
    tip: "Mention Maintainability, Dependability/Security, Efficiency, and Acceptability."
  },
  {
    id: "SE-Q2",
    subjectId: "SE",
    chapter: 1,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2021],
    frequency: 4,
    questionNumber: "Q2",
    question: "Compare Waterfall Model, Spiral Model, and Agile Scrum methodology. When should each process model be selected?",
    paperName: "SE 2023.pdf",
    pageNumber: 1,
    tip: "Use Spiral model for high-risk projects; Agile for rapidly changing client requirements."
  },
  {
    id: "SE-Q3",
    subjectId: "SE",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2022, 2021],
    frequency: 3,
    questionNumber: "Q3",
    question: "What is Requirements Engineering? Differentiate between Functional and Non-Functional Requirements with examples. What makes a good SRS document?",
    paperName: "SE 2024.pdf",
    pageNumber: 1,
    tip: "IEEE 830 standard properties: Correct, Unambiguous, Complete, Consistent, Verifiable, Modifiable, Traceable."
  },
  {
    id: "SE-Q4",
    subjectId: "SE",
    chapter: 4,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q7",
    question: "Explain Black-box and White-box testing techniques. Describe Basis Path Testing, Cyclomatic Complexity calculation, and Equivalence Partitioning.",
    paperName: "SE 2022 reg.pdf",
    pageNumber: 2,
    tip: "Cyclomatic Complexity V(G) = E - N + 2P where E is edges, N is nodes, P is connected components."
  },

  // -------------------------------------------------------------
  // ES (Environmental Studies / Science)
  // -------------------------------------------------------------
  {
    id: "ES-Q1",
    subjectId: "ES",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2022],
    frequency: 2,
    questionNumber: "Q1(a)",
    question: "Define Ecosystem. Differentiate between Food Chain and Food Web with an example.",
    paperName: "ES Mid Paper 1.pdf",
    pageNumber: 1,
    tip: "A food chain is a linear feeding pathway; a food web is an interconnected network of multiple food chains."
  },
  {
    id: "ES-Q2",
    subjectId: "ES",
    chapter: 1,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2021],
    frequency: 3,
    questionNumber: "Q2",
    question: "Describe the structure and function of an Ecosystem. Explain Ecological Pyramids of Number, Biomass, and Energy with diagrams.",
    paperName: "ES Sem 2023.pdf",
    pageNumber: 1,
    tip: "Emphasize that the Pyramid of Energy is always upright because energy is lost at each trophic level (10% law)."
  },
  {
    id: "ES-Q3",
    subjectId: "ES",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2023, 2022],
    frequency: 2,
    questionNumber: "Q4",
    question: "Discuss the environmental impacts of modern agriculture and deforestation. Explain methods for soil and water conservation.",
    paperName: "ES Sem 2022.pdf",
    pageNumber: 1,
    tip: "Mention watershed management, rainwater harvesting, and contour farming."
  },
  {
    id: "ES-Q4",
    subjectId: "ES",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022],
    frequency: 3,
    questionNumber: "Q6",
    question: "Discuss the causes, effects, and control measures for Air Pollution and Municipal Solid Waste Management.",
    paperName: "ES Sem 2023.pdf",
    pageNumber: 2,
    tip: "Explain the 3R principle (Reduce, Reuse, Recycle) and sanitary landfills."
  },

  // -------------------------------------------------------------
  // I&E (Innovation & Entrepreneurship)
  // -------------------------------------------------------------
  {
    id: "IE-Q1",
    subjectId: "IE",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024],
    frequency: 1,
    questionNumber: "Q1(a)",
    question: "Define Innovation. Differentiate between Incremental Innovation and Disruptive Innovation.",
    paperName: "IE Sample Paper.pdf",
    pageNumber: 1,
    tip: "Incremental improves existing products; disruptive creates a new market and value network."
  },
  {
    id: "IE-Q2",
    subjectId: "IE",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024],
    frequency: 1,
    questionNumber: "Q2",
    question: "What is Design Thinking? Explain the 5 stages of the Design Thinking process: Empathize, Define, Ideate, Prototype, and Test.",
    paperName: "IE Sample Paper.pdf",
    pageNumber: 1,
    tip: "Draw the iterative cyclical diagram showing feedback from Test stage back to Ideate/Define."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUBJECTS_DATA, NOTES_DATA, QUESTIONS_DATABASE };
}

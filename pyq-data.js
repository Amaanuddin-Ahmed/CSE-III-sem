/**
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

const SUBJECTS_DATA = {
  "DM": {
    id: "DM",
    shortName: "DM",
    title: "Discrete Mathematics",
    code: "",
    icon: "fa-solid fa-calculator",
    accentColor: "#2563eb",
    bgColor: "#eff6ff",
    driveFolderId: "1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    notesFolderId: "1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM",
    pyqsFolderId: "1R2m69P_aU-IM6wEwIsbwGjKisdk5_xwY",
    driveUrl: "https://drive.google.com/drive/folders/1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    notesUrl: "https://drive.google.com/drive/folders/1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM",
    pyqsUrl: "https://drive.google.com/drive/folders/1R2m69P_aU-IM6wEwIsbwGjKisdk5_xwY",
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
    code: "",
    icon: "fa-solid fa-microchip",
    accentColor: "#059669",
    bgColor: "#ecfdf5",
    driveFolderId: "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    notesFolderId: "1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    pyqsFolderId: "1r6_ozXzyg84zHCji99-cAujgoie1S7IS",
    driveUrl: "https://drive.google.com/drive/folders/1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    notesUrl: "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    pyqsUrl: "https://drive.google.com/drive/folders/1r6_ozXzyg84zHCji99-cAujgoie1S7IS",
    paperCount: 21,
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
    code: "",
    icon: "fa-solid fa-code",
    accentColor: "#d97706",
    bgColor: "#fffbeb",
    driveFolderId: "1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    notesFolderId: "1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    pyqsFolderId: "16QBJQtBuAzWcczlPRReXgeAPXzd0E3Ab",
    driveUrl: "https://drive.google.com/drive/folders/1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    notesUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    pyqsUrl: "https://drive.google.com/drive/folders/16QBJQtBuAzWcczlPRReXgeAPXzd0E3Ab",
    paperCount: 20,
    notesCount: 14,
    chapters: {
      1: "OOP Concepts, Java Virtual Machine (JVM), Bytecode & Primitive Types",
      2: "Classes, Objects, Inheritance, Polymorphism & Interfaces",
      3: "Exception Handling, Custom Exceptions & Multithreading",
      4: "Java Collections Framework, Lists, Sets, Maps & Generics",
      5: "File I/O Streams, Byte Streams, Character Streams & GUI Swing"
    }
  },
  "DBMS": {
    id: "DBMS",
    shortName: "DBMS",
    title: "Database Management Systems",
    code: "",
    icon: "fa-solid fa-database",
    accentColor: "#0284c7",
    bgColor: "#f0f9ff",
    driveFolderId: "1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    notesFolderId: "1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    pyqsFolderId: "1z13uEkpnbrP3vcKzdHp1VXzekcYx1oCk",
    driveUrl: "https://drive.google.com/drive/folders/1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    notesUrl: "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    pyqsUrl: "https://drive.google.com/drive/folders/1z13uEkpnbrP3vcKzdHp1VXzekcYx1oCk",
    paperCount: 12,
    notesCount: 1,
    chapters: {
      1: "Database System Concepts, 3-Schema Architecture & ER Modeling",
      2: "Relational Data Model, Relational Algebra & SQL Operations",
      3: "Schema Refinement, Functional Dependencies & Normalization (1NF to BCNF)",
      4: "Transaction Management, ACID Properties & Concurrency Control (2PL)",
      5: "Indexing, B+ Trees, Hashing Techniques & Crash Recovery"
    }
  },
  "SE": {
    id: "SE",
    shortName: "SE",
    title: "Software Engineering",
    code: "",
    icon: "fa-solid fa-laptop-code",
    accentColor: "#7c3aed",
    bgColor: "#f5f3ff",
    driveFolderId: "16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    notesFolderId: "1kovfVmnjEm5_lF_OzAJXGB04netXHIMT",
    pyqsFolderId: "1Z10FnEOqw_lIvkt3XtAyhurcP0aWerKv",
    driveUrl: "https://drive.google.com/drive/folders/16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    notesUrl: "https://drive.google.com/drive/folders/1kovfVmnjEm5_lF_OzAJXGB04netXHIMT",
    pyqsUrl: "https://drive.google.com/drive/folders/1Z10FnEOqw_lIvkt3XtAyhurcP0aWerKv",
    paperCount: 17,
    notesCount: 0,
    chapters: {
      1: "Software Process Models, Waterfall, Agile Scrum & Requirements Engineering",
      2: "System Analysis, Use Case Modeling & SRS Documentation",
      3: "Software Architectural Design, Modular Decomposition & Coupling/Cohesion",
      4: "Software Testing, Black Box, White Box & Basis Path Testing",
      5: "Software Quality Assurance, Metrics, COCOMO Model & Maintenance"
    }
  },
  "ES": {
    id: "ES",
    shortName: "ES",
    title: "Environmental Studies",
    code: "",
    icon: "fa-solid fa-leaf",
    accentColor: "#15803d",
    bgColor: "#f0fdf4",
    driveFolderId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    notesFolderId: "12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    pyqsFolderId: "1FCUxrLxzXfxVwUAoVCZyERUemeR46S15",
    driveUrl: "https://drive.google.com/drive/folders/1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    notesUrl: "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    pyqsUrl: "https://drive.google.com/drive/folders/1FCUxrLxzXfxVwUAoVCZyERUemeR46S15",
    paperCount: 3,
    notesCount: 4,
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
    code: "",
    icon: "fa-solid fa-lightbulb",
    accentColor: "#be185d",
    bgColor: "#fdf2f8",
    driveFolderId: "1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi",
    notesFolderId: "1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx",
    pyqsFolderId: "1hP_hR8JKoRgJDOuDXcZne5PAzME5QDji",
    driveUrl: "https://drive.google.com/drive/folders/1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi",
    notesUrl: "https://drive.google.com/drive/folders/1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx",
    pyqsUrl: "https://drive.google.com/drive/folders/1hP_hR8JKoRgJDOuDXcZne5PAzME5QDji",
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
  // -------------------------------------------------------------
  // COA (Computer Organization & Architecture) - 2 Notes
  // -------------------------------------------------------------
  {
    id: "NOTE-COA-01",
    subjectId: "COA",
    chapter: 1,
    title: "COA Unit 1: Basic Structure & Machine Instructions",
    fileName: "Unit 1.pdf",
    fileSize: "3.1 MB",
    driveFileId: "1qQQpGKrjNC30plE7BIG-8gNmPg5U9dgn",
    folderUrl: "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    description: "Detailed handwritten and typed lecture notes on Machine Instructions, Addressing Modes and CPU register formats."
  },
  {
    id: "NOTE-COA-02",
    subjectId: "COA",
    chapter: 1,
    title: "COA Unit 1: Addressing Modes & Architecture",
    fileName: "Unit 1 Actual.pdf",
    fileSize: "727 KB",
    driveFileId: "1Ccju2Q81WPLiycZF58lCyvh7qN4tlufQ",
    folderUrl: "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    description: "Formulas for Effective Address (EA) calculation with step-by-step memory pointer diagrams."
  },

  // -------------------------------------------------------------
  // ES (Environmental Studies) - 4 Notes
  // -------------------------------------------------------------
  {
    id: "NOTE-ES-01",
    subjectId: "ES",
    chapter: 1,
    title: "ES Unit 1: Ecosystems & Biodiversity Comprehensive Guide",
    fileName: "Unit 1.pdf",
    fileSize: "22.9 MB",
    driveFileId: "1Fy6lmAAa5frGzeL30Fgg9gjcl009aV6K",
    folderUrl: "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    description: "Complete lecture guide covering structure and function of ecosystems, ecological pyramids, food chains, energy flow, and biodiversity hotspots."
  },
  {
    id: "NOTE-ES-02",
    subjectId: "ES",
    chapter: 2,
    title: "ES Unit 2: Natural Resources & Conservation Handbook",
    fileName: "Unit 2.pdf",
    fileSize: "9.4 MB",
    driveFileId: "1LTntxlX3QbGQetwnaBPVA9KExbNMEqEV",
    folderUrl: "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    description: "Comprehensive notes on renewable and non-renewable resources, deforestation, water management, mineral exploitation, and energy crisis."
  },
  {
    id: "NOTE-ES-03",
    subjectId: "ES",
    chapter: 3,
    title: "ES Unit 3: Environmental Pollution & Waste Management",
    fileName: "Unit-3.pdf",
    fileSize: "3.3 MB",
    driveFileId: "1SZfLggJ2rLVaRG6poB80BszbfpypBZna",
    folderUrl: "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    description: "Air, water, soil and noise pollution control mechanisms, sewage treatment, solid waste management and 3R principles."
  },
  {
    id: "NOTE-ES-04",
    subjectId: "ES",
    chapter: 4,
    title: "ES Unit 4: Global Environmental Challenges & Treaties",
    fileName: "Unit-4.pdf",
    fileSize: "3.9 MB",
    driveFileId: "1Og6W5C_YuUGklPjeNZRq_yNwFDaYAHkG",
    folderUrl: "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    description: "Climate change, global warming, acid rain, ozone layer depletion, and international protocols/agreements."
  },

  // -------------------------------------------------------------
  // DBMS (Database Management Systems) - 1 Note
  // -------------------------------------------------------------
  {
    id: "NOTE-DBMS-01",
    subjectId: "DBMS",
    chapter: 1,
    title: "DBMS Comprehensive Lecture Notes: Units 1, 2 & 3",
    fileName: "DBMS NOTES-Unit1,2,3.pdf",
    fileSize: "27.4 MB",
    driveFileId: "1OjP6sXe5pJpGL7I_C0MSt20M7bsJeqdS",
    folderUrl: "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    description: "In-depth handwritten notes covering ER Modeling, Relational Algebra, SQL DDL/DML, and Normalization up to BCNF."
  },

  // -------------------------------------------------------------
  // OOPJ (Object-Oriented Programming through Java) - 14 Notes
  // -------------------------------------------------------------
  {
    id: "NOTE-OOPJ-01",
    subjectId: "OOPJ",
    chapter: 1,
    title: "Java Unit 1: OOP Concepts & Language Basics",
    fileName: "unit-1.pdf",
    fileSize: "1.1 MB",
    driveFileId: "1lQqinMb9mD3KM_7UONhkY8MR1RoUvFsk",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "JVM architecture, bytecode execution, primitive types, operators, and control flow fundamentals."
  },
  {
    id: "NOTE-OOPJ-02",
    subjectId: "OOPJ",
    chapter: 1,
    title: "Java Unit 1: Question Bank with Model Answers",
    fileName: "Microsoft Word - unit 1 qb answers.pdf",
    fileSize: "1.2 MB",
    driveFileId: "1HOofkYifE4QlLHAtM98HxCGO1Z2HqyCX",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Solved Unit 1 2-mark and 5-mark university exam questions with step-by-step solutions."
  },
  {
    id: "NOTE-OOPJ-03",
    subjectId: "OOPJ",
    chapter: 2,
    title: "Java Unit 2: Classes, Inheritance & Polymorphism",
    fileName: "JUNIT-II.pdf",
    fileSize: "496 KB",
    driveFileId: "1WdcR1SZr9tZyC2bbapk5fofi9v0vQWkt",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Method overloading, dynamic method dispatch, abstract classes, super keyword, and interface inheritance."
  },
  {
    id: "NOTE-OOPJ-04",
    subjectId: "OOPJ",
    chapter: 2,
    title: "Java Unit 2: Question Bank with Model Answers",
    fileName: "Microsoft Word - unit2 qb answers.pdf",
    fileSize: "902 KB",
    driveFileId: "1zW8RU7veJTGC9tC5GpAtbHYKgcdXfom-",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Solved Unit 2 questions on packages, access protection, interfaces, and inheritance hierarchy."
  },
  {
    id: "NOTE-OOPJ-05",
    subjectId: "OOPJ",
    chapter: 3,
    title: "Java Unit 3: Exception Handling & Custom Exceptions",
    fileName: "junit3.2.pdf",
    fileSize: "696 KB",
    driveFileId: "13r6nNSR6-sE9KrZVmuTr8dMatkWXq9D9",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Checked vs unchecked exceptions, try-catch-finally mechanisms, and user-defined exception handling."
  },
  {
    id: "NOTE-OOPJ-06",
    subjectId: "OOPJ",
    chapter: 3,
    title: "Java Unit 3: Multithreading Architecture & Lifecycle",
    fileName: "Multithreading unit-3.pdf",
    fileSize: "841 KB",
    driveFileId: "1v43TRVNMXfoyM28W_T1Ojtc-v4g5dBBG",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Thread lifecycle states, Thread class vs Runnable, synchronization, locks, and inter-thread communication."
  },
  {
    id: "NOTE-OOPJ-07",
    subjectId: "OOPJ",
    chapter: 3,
    title: "Java Unit 3: Question Bank with Model Answers",
    fileName: "Microsoft Word - unit-iii qb answers.pdf",
    fileSize: "1 MB",
    driveFileId: "185UDapyqz1IK2HH7qzwrlHpCVsJ7RSpv",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Unit 3 solved university question bank on synchronization, wait/notify, and exception handling blocks."
  },
  {
    id: "NOTE-OOPJ-08",
    subjectId: "OOPJ",
    chapter: 4,
    title: "Java Unit 4: Files, Streams & Serialization",
    fileName: "JAVA UNIT-IV Notes.pdf",
    fileSize: "2.5 MB",
    driveFileId: "1ygw7iLgKfoUpytp81LSmP9A-pVhU6pXJ",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Byte and character streams, File I/O, RandomAccessFile, serialization/deserialization, and transient keyword."
  },
  {
    id: "NOTE-OOPJ-09",
    subjectId: "OOPJ",
    chapter: 4,
    title: "Java Unit 4: Collections & Generics Guide",
    fileName: "junit_4.pdf",
    fileSize: "831 KB",
    driveFileId: "1PaxcAA8nVJY8hHXulsHRZsgEpldV7tYu",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Collection framework hierarchy: List, ArrayList, LinkedList, Set, HashSet, TreeSet, Map, and Iterators."
  },
  {
    id: "NOTE-OOPJ-10",
    subjectId: "OOPJ",
    chapter: 4,
    title: "Java Unit 4: Question Bank with Problem Solutions",
    fileName: "Microsoft Word - UNIT-IV QB.pdf",
    fileSize: "5.1 MB",
    driveFileId: "1ZAR8Nw-EpAK1mbyelmUm1C7TWcEnlF4A",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Comprehensive question bank with code solutions for file streams, serialization, and collections."
  },
  {
    id: "NOTE-OOPJ-11",
    subjectId: "OOPJ",
    chapter: 5,
    title: "Java Unit 5: Complete Lecture Notes",
    fileName: "JAVA UNIT-V Notes.pdf",
    fileSize: "1.8 MB",
    driveFileId: "1H1n2DKjNepRp_I9NyAYZy6F7GmnUJQ1a",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Full Unit 5 study notes covering AWT, Swing components, layout managers, and delegation event models."
  },
  {
    id: "NOTE-OOPJ-12",
    subjectId: "OOPJ",
    chapter: 5,
    title: "Java Unit 5: Swing GUI & Event Handling Basics",
    fileName: "Java_Swing_Menu_Basics.pdf",
    fileSize: "281 KB",
    driveFileId: "1MtaafVRuV8H7ag6HvWQG9nES1IIa73Z9",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Practical guide to JFrame, JPanel, JMenu, ActionListeners, and event adapters."
  },
  {
    id: "NOTE-OOPJ-13",
    subjectId: "OOPJ",
    chapter: 5,
    title: "Java Unit 5: Question Bank with Model Answers",
    fileName: "Microsoft Word - unit5 Qb.pdf",
    fileSize: "1.5 MB",
    driveFileId: "1fRcScbikC82GF_R73bsQ-K6a5x43scc2",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Solved questions on event-driven programming, mouse events, and GUI components."
  },
  {
    id: "NOTE-OOPJ-14",
    subjectId: "OOPJ",
    chapter: 1,
    title: "Java OOP Concept Overview & Presentation Slides",
    fileName: "PowerPoint Presentation.pdf",
    fileSize: "1.1 MB",
    driveFileId: "1EgqCprgpm3I7MvxB8v_77VjIJspxKuWJ",
    folderUrl: "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    description: "Visual classroom presentation slides summarizing fundamental OOP principles, classes, and object models."
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
    driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
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
    driveFileId: "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
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
    driveFileId: "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
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
    driveFileId: "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
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
    driveFileId: "13-497eaoWN6b7Z7ncqq3lUoZ83N2XUHj",
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
    driveFileId: "16uAkxDmx-0XWxidp81tM9pWUPKTh7uje",
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
    driveFileId: "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
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
    driveFileId: "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
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
    driveFileId: "1ROR5RAO8xfXaLhvjVP1aMdlWE1YZ99M8",
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
    driveFileId: "1asz9j6VtgxNBG7i94T3JPHCzOnEqLdtA",
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
    driveFileId: "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
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
    driveFileId: "1ROR5RAO8xfXaLhvjVP1aMdlWE1YZ99M8",
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
    driveFileId: "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
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
    paperName: "Aug 2024.pdf",
    driveFileId: "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
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
    paperName: "Dec 2024.pdf",
    driveFileId: "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
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
    paperName: "Aug 2023.pdf",
    driveFileId: "1dNxi88ENzGvvyrscc7OmuSDkDvz9MFLd",
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
    paperName: "25 supple.pdf",
    driveFileId: "1DB24tvmpPD_EzS8XVRGt2659gvH1DHZm",
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
    paperName: "Jan 2025.pdf",
    driveFileId: "10nEhmH9e8t7t1deQ5aFxAbsRUr7NM4W_",
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
    paperName: "Jan 2024 supp.pdf",
    driveFileId: "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
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
    paperName: "jan 2024 reg.pdf",
    driveFileId: "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
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
    paperName: "Aug 2024 reg.pdf",
    driveFileId: "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
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
    paperName: "feb 2024 supple.pdf",
    driveFileId: "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
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
    paperName: "Aug 2023.pdf",
    driveFileId: "1knszvrx0f7-CLjid3oP4A-qfYiq1peHz",
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
    paperName: "25 supple java paper.pdf",
    driveFileId: "17dyHw7vugEdM69ZfDdRXd3MJOWt708Pc",
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
    paperName: "Jan 2024 reg.pdf",
    driveFileId: "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
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
    paperName: "Aug 2023.pdf",
    driveFileId: "1zVaScPFgh6pZVACqsqFJhF-l_ts78MdE",
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
    paperName: "Aug 2024.pdf",
    driveFileId: "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
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
    paperName: "Dec 2024.pdf",
    driveFileId: "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    pageNumber: 2,
    tip: "Cyclomatic Complexity V(G) = E - N + 2P where E is edges, N is nodes, P is connected components."
  },

  // -------------------------------------------------------------
  // ES (Environmental Studies)
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
    paperName: "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    driveFileId: "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
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
    question: "Explain the structure and functional attributes of an Ecosystem. Discuss Energy Flow through different trophic levels and draw ecological pyramids.",
    paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    pageNumber: 1,
    tip: "Draw neat pyramids of number, biomass, and energy. Note that the pyramid of energy is always upright."
  },
  {
    id: "ES-Q3",
    subjectId: "ES",
    chapter: 2,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022],
    frequency: 3,
    questionNumber: "Q4",
    question: "Discuss the over-exploitation of water resources. Explain the causes and effects of modern floods, droughts, and conflicts over water sharing.",
    paperName: "ES-model question paper-MID-1.pdf",
    driveFileId: "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
    pageNumber: 1,
    tip: "Mention surface vs groundwater depletion and inter-state river basin disputes."
  },
  {
    id: "ES-Q4",
    subjectId: "ES",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023, 2022, 2020],
    frequency: 4,
    questionNumber: "Q6",
    question: "Explain the sources, primary air pollutants, and adverse health effects of Air Pollution. Describe methods and equipment used for air pollution control.",
    paperName: "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    driveFileId: "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    pageNumber: 2,
    tip: "Explain particulate matter control using Cyclone Separators and Electrostatic Precipitators (ESP)."
  },

  // -------------------------------------------------------------
  // I&E (Innovation and Entrepreneurship)
  // -------------------------------------------------------------
  {
    id: "IE-Q1",
    subjectId: "IE",
    chapter: 1,
    part: "A",
    marks: 2,
    years: [2024, 2023],
    frequency: 2,
    questionNumber: "Q1",
    question: "What is Design Thinking? List the five key stages of the Design Thinking process.",
    paperName: "I&E Model Reference.pdf",
    driveFileId: null,
    pageNumber: 1,
    tip: "The 5 stages: Empathize, Define, Ideate, Prototype, and Test."
  },
  {
    id: "IE-Q2",
    subjectId: "IE",
    chapter: 3,
    part: "B",
    marks: 5,
    years: [2024, 2023],
    frequency: 2,
    questionNumber: "Q3",
    question: "Describe the components of the Business Model Canvas (BMC). How does Lean Canvas differ from standard Business Model Canvas?",
    paperName: "I&E Model Reference.pdf",
    driveFileId: null,
    pageNumber: 1,
    tip: "Detail the 9 building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure."
  }
];

// Attach unconditionally to global scope & Node.js exports
if (typeof window !== 'undefined') {
  window.SUBJECTS_DATA = SUBJECTS_DATA;
  window.NOTES_DATA = NOTES_DATA;
  window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUBJECTS_DATA, NOTES_DATA, QUESTIONS_DATABASE };
}

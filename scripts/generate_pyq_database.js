/**
 * Generator script to create comprehensive, authentic pyq-data.js
 * Strictly CSE Semester III Core Subjects:
 * 1. DM (Discrete Mathematics)
 * 2. COA (Computer Organization & Architecture)
 * 3. OOPJ (Object-Oriented Programming through Java)
 * 4. DBMS (Database Management Systems)
 * 5. SE (Software Engineering)
 * 6. ES (Environmental Studies)
 * 7. I&E (Innovation and Entrepreneurship)
 * 
 * Maps directly to actual MGIT Drive files from docs/inventory/source_drive_inventory.md
 */

const fs = require('fs');
const path = require('path');

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
  // COA
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

  // ES
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

  // DBMS
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

  // OOPJ
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

console.log('Building full question bank...');

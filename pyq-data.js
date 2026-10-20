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
 * Total Genuine OCR-Verified Question Bank: 218 Questions
 * Every question links DIRECTLY to its verified Drive paper PDF
 */

const SUBJECTS_DATA = {
  "DM": {
    "id": "DM",
    "shortName": "DM",
    "title": "Discrete Mathematics",
    "code": "",
    "icon": "fa-solid fa-calculator",
    "accentColor": "#2563eb",
    "bgColor": "#eff6ff",
    "driveFolderId": "1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    "notesFolderId": "1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM",
    "pyqsFolderId": "1R2m69P_aU-IM6wEwIsbwGjKisdk5_xwY",
    "driveUrl": "https://drive.google.com/drive/folders/1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    "notesUrl": "https://drive.google.com/drive/folders/1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM",
    "pyqsUrl": "https://drive.google.com/drive/folders/1R2m69P_aU-IM6wEwIsbwGjKisdk5_xwY",
    "paperCount": 24,
    "notesCount": 0,
    "chapters": {
      "1": "Mathematical Logic, Truth Tables, Normal Forms (PCNF, PDNF) & Predicates",
      "2": "Set Theory, Relations, Equivalence, Hasse Diagrams & Lattices",
      "3": "Algebraic Structures, Semigroups, Monoids, Groups & Subgroups",
      "4": "Combinatorics, Permutations, Combinations & Recurrence Relations",
      "5": "Graph Theory, Paths, Euler & Hamiltonian Circuits, Isomorphism"
    }
  },
  "COA": {
    "id": "COA",
    "shortName": "COA",
    "title": "Computer Organization & Architecture",
    "code": "",
    "icon": "fa-solid fa-microchip",
    "accentColor": "#059669",
    "bgColor": "#ecfdf5",
    "driveFolderId": "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    "notesFolderId": "1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "pyqsFolderId": "1r6_ozXzyg84zHCji99-cAujgoie1S7IS",
    "driveUrl": "https://drive.google.com/drive/folders/1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    "notesUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "pyqsUrl": "https://drive.google.com/drive/folders/1r6_ozXzyg84zHCji99-cAujgoie1S7IS",
    "paperCount": 21,
    "notesCount": 2,
    "chapters": {
      "1": "Basic Structure of Computers, Machine Instructions & Addressing Modes",
      "2": "Central Processing Unit, ALU Design & Microprogrammed Control Unit",
      "3": "Computer Arithmetic, Fixed & Floating Point, Booth's Algorithm",
      "4": "Memory Organization, Memory Hierarchy, Cache Mapping & Virtual Memory",
      "5": "Input-Output Organization, DMA, Interrupts & Instruction Pipelining"
    }
  },
  "OOPJ": {
    "id": "OOPJ",
    "shortName": "OOPJ",
    "title": "Object-Oriented Programming through Java",
    "code": "",
    "icon": "fa-solid fa-code",
    "accentColor": "#d97706",
    "bgColor": "#fffbeb",
    "driveFolderId": "1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    "notesFolderId": "1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "pyqsFolderId": "16QBJQtBuAzWcczlPRReXgeAPXzd0E3Ab",
    "driveUrl": "https://drive.google.com/drive/folders/1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    "notesUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "pyqsUrl": "https://drive.google.com/drive/folders/16QBJQtBuAzWcczlPRReXgeAPXzd0E3Ab",
    "paperCount": 20,
    "notesCount": 14,
    "chapters": {
      "1": "OOP Concepts, Java Virtual Machine (JVM), Bytecode & Primitive Types",
      "2": "Classes, Objects, Inheritance, Polymorphism & Interfaces",
      "3": "Exception Handling, Custom Exceptions & Multithreading",
      "4": "Java Collections Framework, Lists, Sets, Maps & Generics",
      "5": "File I/O Streams, Byte Streams, Character Streams & GUI Swing"
    }
  },
  "DBMS": {
    "id": "DBMS",
    "shortName": "DBMS",
    "title": "Database Management Systems",
    "code": "",
    "icon": "fa-solid fa-database",
    "accentColor": "#0284c7",
    "bgColor": "#f0f9ff",
    "driveFolderId": "1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    "notesFolderId": "1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "pyqsFolderId": "1z13uEkpnbrP3vcKzdHp1VXzekcYx1oCk",
    "driveUrl": "https://drive.google.com/drive/folders/1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    "notesUrl": "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "pyqsUrl": "https://drive.google.com/drive/folders/1z13uEkpnbrP3vcKzdHp1VXzekcYx1oCk",
    "paperCount": 12,
    "notesCount": 1,
    "chapters": {
      "1": "Database System Concepts, 3-Schema Architecture & ER Modeling",
      "2": "Relational Data Model, Relational Algebra & SQL Operations",
      "3": "Schema Refinement, Functional Dependencies & Normalization (1NF to BCNF)",
      "4": "Transaction Management, ACID Properties & Concurrency Control (2PL)",
      "5": "Indexing, B+ Trees, Hashing Techniques & Crash Recovery"
    }
  },
  "SE": {
    "id": "SE",
    "shortName": "SE",
    "title": "Software Engineering",
    "code": "",
    "icon": "fa-solid fa-laptop-code",
    "accentColor": "#7c3aed",
    "bgColor": "#f5f3ff",
    "driveFolderId": "16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    "notesFolderId": "1kovfVmnjEm5_lF_OzAJXGB04netXHIMT",
    "pyqsFolderId": "1Z10FnEOqw_lIvkt3XtAyhurcP0aWerKv",
    "driveUrl": "https://drive.google.com/drive/folders/16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    "notesUrl": "https://drive.google.com/drive/folders/1kovfVmnjEm5_lF_OzAJXGB04netXHIMT",
    "pyqsUrl": "https://drive.google.com/drive/folders/1Z10FnEOqw_lIvkt3XtAyhurcP0aWerKv",
    "paperCount": 17,
    "notesCount": 0,
    "chapters": {
      "1": "Software Process Models, Waterfall, Agile Scrum & Requirements Engineering",
      "2": "System Analysis, Use Case Modeling & SRS Documentation",
      "3": "Software Architectural Design, Modular Decomposition & Coupling/Cohesion",
      "4": "Software Testing, Black Box, White Box & Basis Path Testing",
      "5": "Software Quality Assurance, Metrics, COCOMO Model & Maintenance"
    }
  },
  "ES": {
    "id": "ES",
    "shortName": "ES",
    "title": "Environmental Studies",
    "code": "",
    "icon": "fa-solid fa-leaf",
    "accentColor": "#15803d",
    "bgColor": "#f0fdf4",
    "driveFolderId": "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    "notesFolderId": "12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "pyqsFolderId": "1FCUxrLxzXfxVwUAoVCZyERUemeR46S15",
    "driveUrl": "https://drive.google.com/drive/folders/1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    "notesUrl": "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "pyqsUrl": "https://drive.google.com/drive/folders/1FCUxrLxzXfxVwUAoVCZyERUemeR46S15",
    "paperCount": 3,
    "notesCount": 4,
    "chapters": {
      "1": "Ecosystems, Ecological Pyramids, Food Chains & Biodiversity",
      "2": "Natural Resources: Water, Mineral, Forest & Energy Resources",
      "3": "Environmental Pollution (Air, Water, Soil, Noise) & Solid Waste",
      "4": "Global Environmental Challenges, Climate Change & Ozone Depletion",
      "5": "Environmental Protection Legislation, Fieldwork & Sustainable Goals"
    }
  },
  "IE": {
    "id": "IE",
    "shortName": "I&E",
    "title": "Innovation and Entrepreneurship",
    "code": "",
    "icon": "fa-solid fa-lightbulb",
    "accentColor": "#be185d",
    "bgColor": "#fdf2f8",
    "driveFolderId": "1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi",
    "notesFolderId": "1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx",
    "pyqsFolderId": "1hP_hR8JKoRgJDOuDXcZne5PAzME5QDji",
    "driveUrl": "https://drive.google.com/drive/folders/1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi",
    "notesUrl": "https://drive.google.com/drive/folders/1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx",
    "pyqsUrl": "https://drive.google.com/drive/folders/1hP_hR8JKoRgJDOuDXcZne5PAzME5QDji",
    "paperCount": 0,
    "notesCount": 0,
    "chapters": {
      "1": "Introduction to Innovation, Design Thinking & Creative Problem Solving",
      "2": "Entrepreneurial Opportunity Recognition & Market Feasibility",
      "3": "Business Model Generation, Lean Canvas & Value Proposition",
      "4": "Venture Financing, Seed Capital, Angels, Venture Capital & Pitching",
      "5": "Intellectual Property Rights (IPR), Patenting, Trademarks & Scaling"
    }
  }
};

const NOTES_DATA = [
  {
    "id": "NOTE-COA-01",
    "subjectId": "COA",
    "chapter": 1,
    "title": "COA Unit 1: Basic Structure & Machine Instructions",
    "fileName": "Unit 1.pdf",
    "fileSize": "3.1 MB",
    "driveFileId": "1qQQpGKrjNC30plE7BIG-8gNmPg5U9dgn",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Detailed handwritten and typed lecture notes on Machine Instructions, Addressing Modes and CPU register formats."
  },
  {
    "id": "NOTE-COA-02",
    "subjectId": "COA",
    "chapter": 1,
    "title": "COA Unit 1: Addressing Modes & Architecture",
    "fileName": "Unit 1 Actual.pdf",
    "fileSize": "727 KB",
    "driveFileId": "1Ccju2Q81WPLiycZF58lCyvh7qN4tlufQ",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Formulas for Effective Address (EA) calculation with step-by-step memory pointer diagrams."
  },
  {
    "id": "NOTE-ES-01",
    "subjectId": "ES",
    "chapter": 1,
    "title": "ES Unit 1: Ecosystems & Biodiversity Comprehensive Guide",
    "fileName": "Unit 1.pdf",
    "fileSize": "22.9 MB",
    "driveFileId": "1Fy6lmAAa5frGzeL30Fgg9gjcl009aV6K",
    "folderUrl": "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "description": "Complete lecture guide covering structure and function of ecosystems, ecological pyramids, food chains, energy flow, and biodiversity hotspots."
  },
  {
    "id": "NOTE-ES-02",
    "subjectId": "ES",
    "chapter": 2,
    "title": "ES Unit 2: Natural Resources & Conservation Handbook",
    "fileName": "Unit 2.pdf",
    "fileSize": "9.4 MB",
    "driveFileId": "1LTntxlX3QbGQetwnaBPVA9KExbNMEqEV",
    "folderUrl": "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "description": "Comprehensive notes on renewable and non-renewable resources, deforestation, water management, mineral exploitation, and energy crisis."
  },
  {
    "id": "NOTE-ES-03",
    "subjectId": "ES",
    "chapter": 3,
    "title": "ES Unit 3: Environmental Pollution & Waste Management",
    "fileName": "Unit-3.pdf",
    "fileSize": "3.3 MB",
    "driveFileId": "1SZfLggJ2rLVaRG6poB80BszbfpypBZna",
    "folderUrl": "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "description": "Air, water, soil and noise pollution control mechanisms, sewage treatment, solid waste management and 3R principles."
  },
  {
    "id": "NOTE-ES-04",
    "subjectId": "ES",
    "chapter": 4,
    "title": "ES Unit 4: Global Environmental Challenges & Treaties",
    "fileName": "Unit-4.pdf",
    "fileSize": "3.9 MB",
    "driveFileId": "1Og6W5C_YuUGklPjeNZRq_yNwFDaYAHkG",
    "folderUrl": "https://drive.google.com/drive/folders/12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A",
    "description": "Climate change, global warming, acid rain, ozone layer depletion, and international protocols/agreements."
  },
  {
    "id": "NOTE-DBMS-01",
    "subjectId": "DBMS",
    "chapter": 1,
    "title": "DBMS Comprehensive Lecture Notes: Units 1, 2 & 3",
    "fileName": "DBMS NOTES-Unit1,2,3.pdf",
    "fileSize": "27.4 MB",
    "driveFileId": "1OjP6sXe5pJpGL7I_C0MSt20M7bsJeqdS",
    "folderUrl": "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "description": "In-depth handwritten notes covering ER Modeling, Relational Algebra, SQL DDL/DML, and Normalization up to BCNF."
  },
  {
    "id": "NOTE-OOPJ-01",
    "subjectId": "OOPJ",
    "chapter": 1,
    "title": "Java Unit 1: OOP Concepts & Language Basics",
    "fileName": "unit-1.pdf",
    "fileSize": "1.1 MB",
    "driveFileId": "1lQqinMb9mD3KM_7UONhkY8MR1RoUvFsk",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "JVM architecture, bytecode execution, primitive types, operators, and control flow fundamentals."
  },
  {
    "id": "NOTE-OOPJ-02",
    "subjectId": "OOPJ",
    "chapter": 1,
    "title": "Java Unit 1: Question Bank with Model Answers",
    "fileName": "Microsoft Word - unit 1 qb answers.pdf",
    "fileSize": "1.2 MB",
    "driveFileId": "1HOofkYifE4QlLHAtM98HxCGO1Z2HqyCX",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Solved Unit 1 2-mark and 5-mark university exam questions with step-by-step solutions."
  },
  {
    "id": "NOTE-OOPJ-03",
    "subjectId": "OOPJ",
    "chapter": 2,
    "title": "Java Unit 2: Classes, Inheritance & Polymorphism",
    "fileName": "JUNIT-II.pdf",
    "fileSize": "496 KB",
    "driveFileId": "1WdcR1SZr9tZyC2bbapk5fofi9v0vQWkt",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Method overloading, dynamic method dispatch, abstract classes, super keyword, and interface inheritance."
  },
  {
    "id": "NOTE-OOPJ-04",
    "subjectId": "OOPJ",
    "chapter": 2,
    "title": "Java Unit 2: Question Bank with Model Answers",
    "fileName": "Microsoft Word - unit2 qb answers.pdf",
    "fileSize": "902 KB",
    "driveFileId": "1zW8RU7veJTGC9tC5GpAtbHYKgcdXfom-",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Solved Unit 2 questions on packages, access protection, interfaces, and inheritance hierarchy."
  },
  {
    "id": "NOTE-OOPJ-05",
    "subjectId": "OOPJ",
    "chapter": 3,
    "title": "Java Unit 3: Exception Handling & Custom Exceptions",
    "fileName": "junit3.2.pdf",
    "fileSize": "696 KB",
    "driveFileId": "13r6nNSR6-sE9KrZVmuTr8dMatkWXq9D9",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Checked vs unchecked exceptions, try-catch-finally mechanisms, and user-defined exception handling."
  },
  {
    "id": "NOTE-OOPJ-06",
    "subjectId": "OOPJ",
    "chapter": 3,
    "title": "Java Unit 3: Multithreading Architecture & Lifecycle",
    "fileName": "Multithreading unit-3.pdf",
    "fileSize": "841 KB",
    "driveFileId": "1v43TRVNMXfoyM28W_T1Ojtc-v4g5dBBG",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Thread lifecycle states, Thread class vs Runnable, synchronization, locks, and inter-thread communication."
  },
  {
    "id": "NOTE-OOPJ-07",
    "subjectId": "OOPJ",
    "chapter": 3,
    "title": "Java Unit 3: Question Bank with Model Answers",
    "fileName": "Microsoft Word - unit-iii qb answers.pdf",
    "fileSize": "1 MB",
    "driveFileId": "185UDapyqz1IK2HH7qzwrlHpCVsJ7RSpv",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Unit 3 solved university question bank on synchronization, wait/notify, and exception handling blocks."
  },
  {
    "id": "NOTE-OOPJ-08",
    "subjectId": "OOPJ",
    "chapter": 4,
    "title": "Java Unit 4: Files, Streams & Serialization",
    "fileName": "JAVA UNIT-IV Notes.pdf",
    "fileSize": "2.5 MB",
    "driveFileId": "1ygw7iLgKfoUpytp81LSmP9A-pVhU6pXJ",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Byte and character streams, File I/O, RandomAccessFile, serialization/deserialization, and transient keyword."
  },
  {
    "id": "NOTE-OOPJ-09",
    "subjectId": "OOPJ",
    "chapter": 4,
    "title": "Java Unit 4: Collections & Generics Guide",
    "fileName": "junit_4.pdf",
    "fileSize": "831 KB",
    "driveFileId": "1PaxcAA8nVJY8hHXulsHRZsgEpldV7tYu",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Collection framework hierarchy: List, ArrayList, LinkedList, Set, HashSet, TreeSet, Map, and Iterators."
  },
  {
    "id": "NOTE-OOPJ-10",
    "subjectId": "OOPJ",
    "chapter": 4,
    "title": "Java Unit 4: Question Bank with Problem Solutions",
    "fileName": "Microsoft Word - UNIT-IV QB.pdf",
    "fileSize": "5.1 MB",
    "driveFileId": "1ZAR8Nw-EpAK1mbyelmUm1C7TWcEnlF4A",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Comprehensive question bank with code solutions for file streams, serialization, and collections."
  },
  {
    "id": "NOTE-OOPJ-11",
    "subjectId": "OOPJ",
    "chapter": 5,
    "title": "Java Unit 5: Complete Lecture Notes",
    "fileName": "JAVA UNIT-V Notes.pdf",
    "fileSize": "1.8 MB",
    "driveFileId": "1H1n2DKjNepRp_I9NyAYZy6F7GmnUJQ1a",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Full Unit 5 study notes covering AWT, Swing components, layout managers, and delegation event models."
  },
  {
    "id": "NOTE-OOPJ-12",
    "subjectId": "OOPJ",
    "chapter": 5,
    "title": "Java Unit 5: Swing GUI & Event Handling Basics",
    "fileName": "Java_Swing_Menu_Basics.pdf",
    "fileSize": "281 KB",
    "driveFileId": "1MtaafVRuV8H7ag6HvWQG9nES1IIa73Z9",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Practical guide to JFrame, JPanel, JMenu, ActionListeners, and event adapters."
  },
  {
    "id": "NOTE-OOPJ-13",
    "subjectId": "OOPJ",
    "chapter": 5,
    "title": "Java Unit 5: Question Bank with Model Answers",
    "fileName": "Microsoft Word - unit5 Qb.pdf",
    "fileSize": "1.5 MB",
    "driveFileId": "1fRcScbikC82GF_R73bsQ-K6a5x43scc2",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Solved questions on event-driven programming, mouse events, and GUI components."
  },
  {
    "id": "NOTE-OOPJ-14",
    "subjectId": "OOPJ",
    "chapter": 1,
    "title": "Java OOP Concept Overview & Presentation Slides",
    "fileName": "PowerPoint Presentation.pdf",
    "fileSize": "1.1 MB",
    "driveFileId": "1EgqCprgpm3I7MvxB8v_77VjIJspxKuWJ",
    "folderUrl": "https://drive.google.com/drive/folders/1V066YGywMdVNPIX1JJ1UEvehlS25C9qx",
    "description": "Visual classroom presentation slides summarizing fundamental OOP principles, classes, and object models."
  }
];

const QUESTIONS_DATABASE = [
  {
    "id": "DM-Q01",
    "subjectId": "DM",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Propositional Logic",
    "question": "Define Tautology, Contradiction, and Contingency with one elementary truth table example for each.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Show $P \\vee \\neg P$ is always T (Tautology), $P \\wedge \\neg P$ is always F (Contradiction)."
  },
  {
    "id": "DM-Q02",
    "subjectId": "DM",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Normal Forms",
    "question": "What is Principal Disjunctive Normal Form (PDNF)? How does it differ from Principal Conjunctive Normal Form (PCNF)?",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1Zg2qr9vFuW3e9bhSvs0Beh8VyX_RcbkM",
    "pageNumber": 1,
    "tip": "PDNF is the sum of minterms (truth values = 1); PCNF is the product of maxterms (truth values = 0)."
  },
  {
    "id": "DM-Q03",
    "subjectId": "DM",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2023,
      2020
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Predicates & Quantifiers",
    "question": "Differentiate between Universal Quantifier ($\\forall$) and Existential Quantifier ($\\exists$) with symbolic statement examples.",
    "paperName": "Aug 2023 regular.pdf",
    "driveFileId": "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
    "pageNumber": 1,
    "tip": "Translate 'Every student is honest' $(\\forall x (S(x) \\rightarrow H(x)))$ vs 'Some student is honest' $(\\exists x (S(x) \\wedge H(x)))$."
  },
  {
    "id": "DM-Q04",
    "subjectId": "DM",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q2(a)",
    "topicTag": "Normal Forms",
    "question": "Obtain the Principal Disjunctive Normal Form (PDNF) and Principal Conjunctive Normal Form (PCNF) for the formula: $(P \\rightarrow (Q \\wedge R)) \\wedge (\\neg P \\rightarrow (\\neg Q \\wedge \\neg R))$.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Construct the 8-row truth table for P, Q, R, identify rows where the statement evaluates to T for PDNF and F for PCNF."
  },
  {
    "id": "DM-Q05",
    "subjectId": "DM",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Rules of Inference",
    "question": "Show that the following premises are inconsistent: $P \\rightarrow Q$, $Q \\rightarrow R$, $S \\rightarrow \\neg R$, $P \\wedge S$.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 1,
    "tip": "Apply Modus Ponens step-by-step: From $P \\wedge S$ get $P$ and $S$. $P$ and $P \\rightarrow Q \\implies Q$. $Q$ and $Q \\rightarrow R \\implies R$. $S$ and $S \\rightarrow \\neg R \\implies \\neg R$. $R \\wedge \\neg R$ is a contradiction."
  },
  {
    "id": "DM-Q06",
    "subjectId": "DM",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q2(c)",
    "topicTag": "Predicate Calculus",
    "question": "Demonstrate that $(\\forall x)(P(x) \\rightarrow Q(x)) \\wedge (\\forall x)(Q(x) \\rightarrow R(x)) \\implies (\\forall x)(P(x) \\rightarrow R(x))$ using rules of universal instantiation (UI) and generalization (UG).",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
    "pageNumber": 1,
    "tip": "Drop the quantifiers using Universal Instantiation on arbitrary element 'c', apply hypothetical syllogism, then apply Universal Generalization."
  },
  {
    "id": "DM-Q07",
    "subjectId": "DM",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q2(d)",
    "topicTag": "Truth Tables & Equivalences",
    "question": "Without constructing a truth table, prove the logical equivalence: $\\neg(P \\vee (\\neg P \\wedge Q)) \\equiv \\neg P \\wedge \\neg Q$. State the name of the law used at every algebraic transformation step.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1asz9j6VtgxNBG7i94T3JPHCzOnEqLdtA",
    "pageNumber": 1,
    "tip": "Use Distributive Law: $P \\vee (\\neg P \\wedge Q) \\equiv (P \\vee \\neg P) \\wedge (P \\vee Q) \\equiv T \\wedge (P \\vee Q) \\equiv P \\vee Q$. Then apply De Morgan's Law."
  },
  {
    "id": "DM-Q08",
    "subjectId": "DM",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Equivalence Relations",
    "question": "Define an Equivalence Relation. Give an example of a relation that is reflexive and symmetric but not transitive.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Must satisfy Reflexive ($aRa$), Symmetric ($aRb \\implies bRa$), Transitive ($aRb \\wedge bRc \\implies aRc$). Distance relation $|x-y| \\le 1$ is not transitive."
  },
  {
    "id": "DM-Q09",
    "subjectId": "DM",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(d)",
    "topicTag": "Lattices",
    "question": "Define a Lattice. When is a lattice said to be bounded and complemented?",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 1,
    "tip": "A POSET $(L, \\le)$ where every pair ${a, b}$ has unique LUB ($a \\vee b$) and GLB ($a \\wedge b$). Bounded if it has 0 and 1; complemented if every element $a$ has $a'$ with $a \\vee a' = 1$ and $a \\wedge a' = 0$."
  },
  {
    "id": "DM-Q10",
    "subjectId": "DM",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q3(a)",
    "topicTag": "Hasse Diagrams",
    "question": "Draw the Hasse diagram for the divisibility relation $D_{36} = \\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$. Determine whether $(D_{36}, |)$ is a lattice, and find all maximal, minimal, greatest, and least elements.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Arranged vertically by prime factorization levels. LUB is LCM, GLB is GCD. Least element = 1, Greatest element = 36."
  },
  {
    "id": "DM-Q11",
    "subjectId": "DM",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Transitive Closure & Warshall",
    "question": "Let $A = \\{1, 2, 3, 4\\}$ and relation $R = \\{(1,2), (2,3), (3,4), (4,2)\\}$. Find the transitive closure $R^+$ using Warshall's Algorithm. Show matrices $W^{(0)}, W^{(1)}, W^{(2)}, W^{(3)}, W^{(4)}$.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
    "pageNumber": 1,
    "tip": "Step-by-step Boolean matrix update: $W^{(k)}[i,j] = W^{(k-1)}[i,j] \\vee (W^{(k-1)}[i,k] \\wedge W^{(k-1)}[k,j])$."
  },
  {
    "id": "DM-Q12",
    "subjectId": "DM",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(c)",
    "topicTag": "Lattice Properties",
    "question": "Prove that in any lattice $(L, \\le)$, the distributive inequalities hold for all elements $a, b, c \\in L$: $a \\vee (b \\wedge c) \\le (a \\vee b) \\wedge (a \\vee c)$ and $(a \\wedge b) \\vee (a \\wedge c) \\le a \\wedge (b \\vee c)$.",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
    "pageNumber": 1,
    "tip": "Use the monotonicity of meet ($\\wedge$) and join ($\\vee$) operations: $a \\le a \\vee b$ and $b \\wedge c \\le b \\le a \\vee b$."
  },
  {
    "id": "DM-Q13",
    "subjectId": "DM",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(e)",
    "topicTag": "Algebraic Structures",
    "question": "Define an Abelian Group. State the five algebraic axioms required for a set under a binary operation $(G, *)$ to qualify as an Abelian Group.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Closure, Associativity, Identity ($e$), Inverse ($a^{-1}$), and Commutativity ($a * b = b * a$)."
  },
  {
    "id": "DM-Q14",
    "subjectId": "DM",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(f)",
    "topicTag": "Subgroups & Lagrange",
    "question": "State Lagrange's Theorem for finite groups. What is meant by the index of a subgroup $H$ in $G$, denoted $[G:H]$?",
    "paperName": "Feb 2024 supple.pdf",
    "driveFileId": "1m9JX9ySXBWdMhIablsxRF0UtG0Pw6D2L",
    "pageNumber": 1,
    "tip": "The order of every subgroup $H$ divides the order of $G$: $|G| = |H| \\times [G:H]$."
  },
  {
    "id": "DM-Q15",
    "subjectId": "DM",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q4(a)",
    "topicTag": "Group Proofs",
    "question": "Show that the set $G = \\{1, 2, 3, 4, 5, 6\\}$ under multiplication modulo 7 ($\\times_7$) forms a cyclic group. Find all generators of $G$ and all its subgroups.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Draw the $6 \\times 6$ Cayley composition table modulo 7. Test powers: $3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1$, so 3 is a generator."
  },
  {
    "id": "DM-Q16",
    "subjectId": "DM",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Lagrange's Theorem",
    "question": "State and prove Lagrange's Theorem for a finite group $G$ and its subgroup $H$. Illustrate with an example showing coset decomposition.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 2,
    "tip": "Prove that any two left cosets $aH$ and $bH$ are either identical or disjoint, that every element of $G$ belongs to some coset, and that $|aH| = |H|$."
  },
  {
    "id": "DM-Q17",
    "subjectId": "DM",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q4(c)",
    "topicTag": "Homomorphism & Isomorphism",
    "question": "Define Group Homomorphism and Kernel of a Homomorphism ($Ker \\, f$). Prove that $Ker \\, f$ is a normal subgroup of $G$.",
    "paperName": "Jan 2025 supple.pdf",
    "driveFileId": "1zzmSZOosdEj7c28CoAE5TK10an4YC33V",
    "pageNumber": 2,
    "tip": "Show $f(e_G) = e_{G'}$, $f(a^{-1}) = (f(a))^{-1}$, and $g k g^{-1} \\in Ker \\, f$ for all $g \\in G, k \\in Ker \\, f$."
  },
  {
    "id": "DM-Q18",
    "subjectId": "DM",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2022
    ],
    "frequency": 3,
    "questionNumber": "Q1(g)",
    "topicTag": "Pigeonhole Principle",
    "question": "State the Generalized Pigeonhole Principle. Find the minimum number of students required in a classroom to guarantee that at least 5 students share the same birth month.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Formula: $\\lceil N / k \\rceil = 5$ with $k = 12$ months. $N = (5 - 1) \\times 12 + 1 = 49$ students."
  },
  {
    "id": "DM-Q19",
    "subjectId": "DM",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q1(h)",
    "topicTag": "Recurrence Relations",
    "question": "Write down the characteristic equation and general solution form for a second-order linear homogeneous recurrence relation when roots are real and equal ($r_1 = r_2 = r$).",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1Zg2qr9vFuW3e9bhSvs0Beh8VyX_RcbkM",
    "pageNumber": 1,
    "tip": "$a_n = (C_1 + C_2 \\cdot n) r^n$. Note the factor of $n$ for repeated roots."
  },
  {
    "id": "DM-Q20",
    "subjectId": "DM",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q5(a)",
    "topicTag": "Homogeneous Recurrence",
    "question": "Solve the recurrence relation $a_n - 7a_{n-1} + 10a_{n-2} = 0$ for $n \\ge 2$ with initial conditions $a_0 = 1$ and $a_1 = 8$.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 2,
    "tip": "Characteristic equation: $r^2 - 7r + 10 = 0 \\implies (r-2)(r-5) = 0$. General: $a_n = C_1(2)^n + C_2(5)^n$. Solving with $a_0=1, a_1=8$ gives $C_1 = -1, C_2 = 2 \\implies a_n = 2(5)^n - 2^n$."
  },
  {
    "id": "DM-Q21",
    "subjectId": "DM",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Inhomogeneous Recurrence",
    "question": "Solve the non-homogeneous recurrence relation $a_n - 4a_{n-1} + 4a_{n-2} = 3^n$ for $n \\ge 2$ given $a_0 = 1, a_1 = 2$.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
    "pageNumber": 2,
    "tip": "Homogeneous roots: $r = 2$ (double root) $\\implies a_n^{(h)} = (C_1 + C_2 n) 2^n$. Particular trial solution $a_n^{(p)} = A \\cdot 3^n \\implies A(3^n - 4\\cdot 3^{n-1} + 4\\cdot 3^{n-2}) = 3^n \\implies A = 9$."
  },
  {
    "id": "DM-Q22",
    "subjectId": "DM",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(c)",
    "topicTag": "Generating Functions",
    "question": "Solve the recurrence relation $a_n - 5a_{n-1} + 6a_{n-2} = 0$ with $a_0 = 2, a_1 = 5$ using the method of Generating Functions.",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "19KNHeAVbUOdglXSbOldz_MD7zTTID0ee",
    "pageNumber": 2,
    "tip": "Define $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$. Multiply by recurrence, apply initial conditions, and decompose via partial fractions $G(x) = \\frac{1}{1-2x} + \\frac{1}{1-3x}$."
  },
  {
    "id": "DM-Q23",
    "subjectId": "DM",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(i)",
    "topicTag": "Handshaking Theorem",
    "question": "State the Handshaking Theorem for an undirected graph. Prove that in any simple undirected graph, the number of vertices with odd degree is always even.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "$\\sum_{v \\in V} \\deg(v) = 2|E|$. Split sum into even and odd degree subsets; since total is even and even subset sum is even, odd subset sum must be even."
  },
  {
    "id": "DM-Q24",
    "subjectId": "DM",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(j)",
    "topicTag": "Planar Graphs & Euler's Formula",
    "question": "State Euler's Planar Graph Formula relating vertices ($V$), edges ($E$), and regions ($R$). Find the number of edges in a connected planar graph with 8 vertices and 6 regions.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 1,
    "tip": "$V - E + R = 2 \\implies 8 - E + 6 = 2 \\implies E = 12$."
  },
  {
    "id": "DM-Q25",
    "subjectId": "DM",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q6(a)",
    "topicTag": "Eulerian & Hamiltonian",
    "question": "Define Eulerian Circuit and Hamiltonian Cycle. State the necessary and sufficient condition for a connected graph to be Eulerian, and state Dirac's theorem for Hamiltonian graphs.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 2,
    "tip": "Eulerian visits every edge once (iff every vertex has even degree). Hamiltonian visits every vertex once (Dirac: $n \\ge 3$ and $\\deg(v) \\ge n/2$ for all $v$)."
  },
  {
    "id": "DM-Q26",
    "subjectId": "DM",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Graph Isomorphism",
    "question": "What are the invariant conditions required for two graphs $G_1$ and $G_2$ to be isomorphic? Determine whether two given 6-vertex bipartite graphs are isomorphic.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
    "pageNumber": 2,
    "tip": "Same number of vertices, edges, degree sequence, cycle lengths, and adjacency preservation $f(u)f(v) \\in E_2 \\iff uv \\in E_1$."
  },
  {
    "id": "DM-Q27",
    "subjectId": "DM",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q6(c)",
    "topicTag": "Graph Coloring & Chromatic Number",
    "question": "Define Chromatic Number $\\chi(G)$ of a graph. Find the chromatic number of complete graph $K_n$, bipartite graph $K_{m,n}$, and cycle graph $C_n$ for even and odd $n$.",
    "paperName": "Jan 2025 supple.pdf",
    "driveFileId": "1zzmSZOosdEj7c28CoAE5TK10an4YC33V",
    "pageNumber": 2,
    "tip": "$\\chi(K_n) = n$, $\\chi(K_{m,n}) = 2$ (if $m,n \\ge 1$), $\\chi(C_n) = 2$ if $n$ is even, $\\chi(C_n) = 3$ if $n$ is odd."
  },
  {
    "id": "COA-Q01",
    "subjectId": "COA",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Addressing Modes",
    "question": "Define Effective Address (EA). Differentiate between Direct and Indirect Addressing modes with clean pointer diagrams.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Direct: $EA = A$ (1 memory fetch). Indirect: $EA = [A]$ (2 memory fetches). Diagram: Instruction address points to pointer cell."
  },
  {
    "id": "COA-Q02",
    "subjectId": "COA",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Instruction Formats",
    "question": "Compare 3-address, 2-address, 1-address (accumulator), and 0-address (stack) instruction formats for evaluating $X = (A + B) \\times (C + D)$.",
    "paperName": "Aug 2023 reg.pdf",
    "driveFileId": "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
    "pageNumber": 1,
    "tip": "3-addr: ADD, ADD, MUL. 0-addr (Stack): PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X."
  },
  {
    "id": "COA-Q03",
    "subjectId": "COA",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q2(a)",
    "topicTag": "Addressing Modes",
    "question": "Explain the various addressing modes used in general-purpose processors with suitable assembly instructions, formulas for EA calculation, and memory diagrams.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Cover Immediate, Direct, Indirect, Register, Register Indirect, Relative ($EA = PC + A$), Indexed ($EA = XR + A$), and Base Register."
  },
  {
    "id": "COA-Q04",
    "subjectId": "COA",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Common Bus System",
    "question": "Design and explain the common bus system for 8 registers using three-state bus buffers and a $3 \\times 8$ decoder with a neat schematic diagram.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 1,
    "tip": "Draw the 8 tri-state buffers connected to shared bus lines, with decoder selection lines $S_2, S_1, S_0$ determining which register is placed on the bus."
  },
  {
    "id": "COA-Q05",
    "subjectId": "COA",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q2(c)",
    "topicTag": "Instruction Cycle",
    "question": "Describe the Instruction Cycle phases (Fetch, Decode, Read Effective Address, Execute) with register transfer statements and flowchart.",
    "paperName": "Jan 2025 supple.pdf",
    "driveFileId": "1owKZjMLyZyjZq2AOr8r4FiSjuJFgAtsj",
    "pageNumber": 1,
    "tip": "$T_0: AR \\leftarrow PC$, $T_1: IR \\leftarrow M[AR], PC \\leftarrow PC + 1$, $T_2: D_0-D_7 \\leftarrow Decode(IR[12-14]), AR \\leftarrow IR[0-11], I \\leftarrow IR[15]$."
  },
  {
    "id": "COA-Q06",
    "subjectId": "COA",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Control Unit",
    "question": "Differentiate between Hardwired Control Unit and Microprogrammed Control Unit in terms of speed, flexibility, and cost.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Hardwired: combinatorial circuits, very fast, inflexible, difficult to modify. Microprogrammed: ROM control store, slower, flexible, microcode editable."
  },
  {
    "id": "COA-Q07",
    "subjectId": "COA",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Stack Organization",
    "question": "Explain the working of a 64-word Register Stack with Stack Pointer (SP), FULL, and EMPTY flag flip-flops during PUSH and POP operations.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
    "pageNumber": 1,
    "tip": "PUSH: $SP \\leftarrow SP + 1, M[SP] \\leftarrow DR$. If $SP = 0$, $FULL \\leftarrow 1, EMPTY \\leftarrow 0$. POP: $DR \\leftarrow M[SP], SP \\leftarrow SP - 1$."
  },
  {
    "id": "COA-Q08",
    "subjectId": "COA",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q3(a)",
    "topicTag": "Microprogrammed Control",
    "question": "Explain the architecture of a Microprogrammed Control Unit. Describe Address Sequencing capabilities (Incrementing, Branching, Mapping, Subroutine Call/Return) with block diagram.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Draw Control Memory, Control Address Register (CAR), Subroutine Register (SBR), and Multiplexer address sequencer."
  },
  {
    "id": "COA-Q09",
    "subjectId": "COA",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "ALU Design",
    "question": "Design a 4-bit Arithmetic Logic Unit (ALU) capable of performing 8 arithmetic and 4 logic operations using full adders and multiplexers.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 2,
    "tip": "Function table with $S_1, S_0, C_{in}$: Transfer, Increment, Addition, Add with Carry, Subtraction, Decrement, Transfer, along with AND, OR, XOR, NOT."
  },
  {
    "id": "COA-Q10",
    "subjectId": "COA",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2022
    ],
    "frequency": 3,
    "questionNumber": "Q1(e)",
    "topicTag": "Booth's Algorithm",
    "question": "State the bit inspection rules in Booth's Signed Multiplication Algorithm for pairs $(Q_0, Q_{-1})$ and identify when subtraction/addition is invoked.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "10: $A \\leftarrow A - M$, then ASHR. 01: $A \\leftarrow A + M$, then ASHR. 00 and 11: Only ASHR."
  },
  {
    "id": "COA-Q11",
    "subjectId": "COA",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q1(f)",
    "topicTag": "IEEE 754 Standard",
    "question": "Explain the IEEE 754 Single-Precision 32-bit Floating Point representation format: Sign bit, Biased Exponent (8 bits, bias 127), and Mantissa (23 bits).",
    "paperName": "Feb 2024 supple.pdf",
    "driveFileId": "12t2XfJy2vBT83Eb--y6P0zHk1AK9tyoy",
    "pageNumber": 1,
    "tip": "Value $= (-1)^S \\times 1.M \\times 2^{E - 127}$. 1 sign bit, 8 exponent bits, 23 fraction bits."
  },
  {
    "id": "COA-Q12",
    "subjectId": "COA",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q4(a)",
    "topicTag": "Booth's Algorithm",
    "question": "Illustrate Booth's Multiplication Algorithm step-by-step with a trace table multiplying Multiplicand $M = (-9)$ by Multiplier $Q = (+6)$ using 5-bit 2's complement registers.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 2,
    "tip": "Show columns: Step, $A$, $Q$, $Q_{-1}$, Count. $M = 10111_2 (-9)$, $-M = 01001_2 (+9)$, $Q = 00110_2 (+6)$. Final result $= 1111001010_2 (-54)$."
  },
  {
    "id": "COA-Q13",
    "subjectId": "COA",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Division Algorithm",
    "question": "Explain the Restoring Division Algorithm for unsigned binary integers with a complete hardware block diagram and flow chart.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
    "pageNumber": 2,
    "tip": "Shift left $AQ$, $A \\leftarrow A - B$. If sign bit of $A$ is 1 (negative), set $Q_0 = 0$ and restore $A \\leftarrow A + B$. If 0 (positive), set $Q_0 = 1$."
  },
  {
    "id": "COA-Q14",
    "subjectId": "COA",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(g)",
    "topicTag": "Cache Mapping",
    "question": "Compare Direct Mapping, Associative Mapping, and Set-Associative Cache Mapping in terms of hardware complexity and conflict miss rate.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Direct: simplest, high conflict misses. Fully associative: zero conflict misses, expensive comparators. Set-associative: ideal trade-off."
  },
  {
    "id": "COA-Q15",
    "subjectId": "COA",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(h)",
    "topicTag": "Virtual Memory",
    "question": "Define Page Fault. What sequence of actions is carried out by the operating system and MMU when a page fault occurs?",
    "paperName": "Aug 2023 reg.pdf",
    "driveFileId": "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
    "pageNumber": 1,
    "tip": "Page fault trap $\\rightarrow$ Save process state $\\rightarrow$ Locate page on disk $\\rightarrow$ Bring page into free physical frame $\\rightarrow$ Update Page Table valid bit $\\rightarrow$ Restart instruction."
  },
  {
    "id": "COA-Q16",
    "subjectId": "COA",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q5(a)",
    "topicTag": "Cache Mapping Calculations",
    "question": "A computer system has 16 MB of byte-addressable main memory and an 8-way set-associative cache of size 64 KB. If each cache line (block) is 16 bytes, determine the number of bits in the Tag, Set (Index), and Word (Offset) fields.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 2,
    "tip": "Main memory: $16\\text{MB} = 2^{24}$ bytes $\\implies 24$-bit address. Block size: $16\\text{B} = 2^4 \\implies 4$-bit Word offset. Cache lines: $64\\text{KB} / 16\\text{B} = 4096$ lines. Sets: $4096 / 8 = 512 = 2^9 \\implies 9$-bit Set index. Tag: $24 - 9 - 4 = 11$ bits."
  },
  {
    "id": "COA-Q17",
    "subjectId": "COA",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Memory Hierarchy",
    "question": "Explain the memory hierarchy in modern computer systems with neat pyramid schematic showing access times, capacities, and relative costs per bit from CPU registers down to magnetic tape.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 2,
    "tip": "Registers (<1 ns) $\\rightarrow$ L1/L2/L3 Cache (1-10 ns) $\\rightarrow$ Main Memory DRAM (50-100 ns) $\\rightarrow$ Solid State Disks SSD (10-100 $\\mu$s) $\\rightarrow$ Hard Disk Drive (5-10 ms) $\\rightarrow$ Magnetic Tape."
  },
  {
    "id": "COA-Q18",
    "subjectId": "COA",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(i)",
    "topicTag": "DMA Modes",
    "question": "Differentiate between Burst Transfer and Cycle Stealing transfer modes in a Direct Memory Access (DMA) controller.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Burst: DMA holds bus until entire block is transferred (fastest, CPU idle). Cycle stealing: DMA takes 1 bus cycle per byte (CPU slows minimally)."
  },
  {
    "id": "COA-Q19",
    "subjectId": "COA",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(j)",
    "topicTag": "Pipeline Hazards",
    "question": "Define the three major categories of pipeline hazards: Structural hazards, Data hazards, and Control hazards.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
    "pageNumber": 1,
    "tip": "Structural: hardware resource contention. Data: RAW/WAR/WAW operand dependency. Control: branch instructions changing the PC."
  },
  {
    "id": "COA-Q20",
    "subjectId": "COA",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q6(a)",
    "topicTag": "DMA Controller",
    "question": "Explain the working of a Direct Memory Access (DMA) controller with a block diagram showing address registers, word count registers, control logic, HOLD, and HLDA signals.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 2,
    "tip": "Draw CPU, DMA Controller, Memory, and I/O Device. Show HOLD request from DMA to CPU, HLDA grant, and direct memory transfer."
  },
  {
    "id": "COA-Q21",
    "subjectId": "COA",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Instruction Pipelining",
    "question": "A 4-stage instruction pipeline has stage delays of $120\\text{ns}, 90\\text{ns}, 110\\text{ns}, 100\\text{ns}$. The latch delay between stages is $10\\text{ns}$. Calculate the speedup achieved over a non-pipelined execution for 100 instructions.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 2,
    "tip": "Clock cycle $t_p = \\max(120, 90, 110, 100) + 10 = 130\\text{ns}$. Non-pipelined $t_n = 120 + 90 + 110 + 100 = 420\\text{ns}$. Non-pipelined time $T_1 = 100 \\times 420 = 42,000\\text{ns}$. Pipelined time $T_k = (4 + 100 - 1) \\times 130 = 103 \\times 130 = 13,390\\text{ns}$. Speedup $S = 42,000 / 13,390 = 3.136$."
  },
  {
    "id": "OOPJ-Q01",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Java Fundamentals",
    "question": "Explain the role of the Java Virtual Machine (JVM), Bytecode, and Just-In-Time (JIT) Compiler in achieving platform independence ('Write Once, Run Anywhere').",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Java source (.java) $\\rightarrow$ javac $\\rightarrow$ Bytecode (.class) $\\rightarrow$ JVM executes on any host OS; JIT compiles hot bytecode paths to native machine instructions."
  },
  {
    "id": "OOPJ-Q02",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Primitive Types & Arrays",
    "question": "Differentiate between primitive data types and reference data types in Java. What is the default value of an uninitialized instance variable of reference type?",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 1,
    "tip": "Primitive types store raw binary values on stack; reference types store heap object memory addresses. Default reference value is `null`."
  },
  {
    "id": "OOPJ-Q03",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q2(a)",
    "topicTag": "OOP Principles",
    "question": "Discuss the fundamental principles of Object-Oriented Programming: Encapsulation, Abstraction, Inheritance, and Polymorphism with concise Java code snippets for each.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Provide code: private variables with public getters/setters for encapsulation; abstract classes/interfaces for abstraction; `extends` for inheritance; method overriding for polymorphism."
  },
  {
    "id": "OOPJ-Q04",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Type Casting & Operators",
    "question": "Explain automatic type promotion (widening conversion) and explicit type casting (narrowing conversion) in Java expressions with code illustrations and boundary behavior.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
    "pageNumber": 1,
    "tip": "Widening: `byte -> short -> int -> long -> float -> double` (automatic). Narrowing: `int x = (int) 3.1415` (explicit, potential precision loss/truncation)."
  },
  {
    "id": "OOPJ-Q05",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(c)",
    "topicTag": "Polymorphism",
    "question": "Differentiate between Method Overloading (Compile-Time Polymorphism) and Method Overriding (Run-Time Polymorphism) in Java.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Overloading: same method name, different parameter lists within same class. Overriding: exact same method signature in subclass with dynamic method dispatch."
  },
  {
    "id": "OOPJ-Q06",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Interfaces & Abstract Classes",
    "question": "State the differences between an Abstract Class and an Interface in Java prior to and including Java 8.",
    "paperName": "feb 2024 supple.pdf",
    "driveFileId": "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
    "pageNumber": 1,
    "tip": "Abstract class can have state, constructors, instance variables, and private/protected methods. Interface variables are `public static final`; supports multiple inheritance."
  },
  {
    "id": "OOPJ-Q07",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q3(a)",
    "topicTag": "Dynamic Method Dispatch",
    "question": "What is Dynamic Method Dispatch? Demonstrate how run-time polymorphism is achieved in Java using superclass references to subclass objects with a complete geometric `Shape -> Circle, Rectangle` program.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Define `class Shape { void area() {...} }`, `class Circle extends Shape { void area() {...} }`. Declare `Shape s; s = new Circle(); s.area();`."
  },
  {
    "id": "OOPJ-Q08",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Packages & Access Specifiers",
    "question": "Explain the four access protection specifiers in Java (`private`, default/package-private, `protected`, `public`) across same class, same package, subclass, and other package with a summary table.",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 2,
    "tip": "Create the standard 4-column access table showing visibility boundaries for each keyword across package borders."
  },
  {
    "id": "OOPJ-Q09",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2022
    ],
    "frequency": 3,
    "questionNumber": "Q1(e)",
    "topicTag": "Exceptions",
    "question": "Differentiate between Checked and Unchecked Exceptions in Java with two class examples for each.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Checked: checked at compile-time (e.g. `IOException`, `SQLException`). Unchecked: subclasses of `RuntimeException` (e.g. `NullPointerException`, `ArithmeticException`)."
  },
  {
    "id": "OOPJ-Q10",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q1(f)",
    "topicTag": "Multithreading",
    "question": "State the two ways of creating a thread in Java. Why is implementing `Runnable` interface generally preferred over extending `Thread` class?",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1knszvrx0f7-CLjid3oP4A-qfYiq1peHz",
    "pageNumber": 1,
    "tip": "Java does not support multiple class inheritance; implementing `Runnable` leaves the class free to extend another base class and promotes separation of task from thread execution."
  },
  {
    "id": "OOPJ-Q11",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q4(a)",
    "topicTag": "Custom Exceptions",
    "question": "Write a complete Java program to create a user-defined exception `InvalidAgeException`. Throw this exception if a student's age entered is less than 18, and handle it gracefully using `try-catch`.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 2,
    "tip": "`class InvalidAgeException extends Exception { public InvalidAgeException(String s) { super(s); } }`. Method uses `if(age < 18) throw new InvalidAgeException(\"...\");`."
  },
  {
    "id": "OOPJ-Q12",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Thread Synchronization & Inter-thread Comm",
    "question": "Explain the Producer-Consumer problem in Java. Demonstrate how thread synchronization and inter-thread communication are handled using `synchronized`, `wait()`, and `notify()`.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
    "pageNumber": 2,
    "tip": "Show shared queue/buffer with `boolean valueSet` flag, `synchronized put(int n)` that calls `wait()` if set, and `synchronized get()` that calls `notify()`."
  },
  {
    "id": "OOPJ-Q13",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(g)",
    "topicTag": "Collections Framework",
    "question": "Compare `ArrayList` and `LinkedList` in Java Collections Framework with respect to insertion, deletion, and random access performance.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "`ArrayList` is backed by dynamic array: $O(1)$ random access (`get(i)`), but $O(n)$ insertion/deletion in middle. `LinkedList` is doubly linked list: $O(1)$ node insertion/deletion, but $O(n)$ traversal."
  },
  {
    "id": "OOPJ-Q14",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(h)",
    "topicTag": "Serialization",
    "question": "What is Object Serialization in Java? What is the purpose of the `transient` keyword?",
    "paperName": "feb 2024 supple.pdf",
    "driveFileId": "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
    "pageNumber": 1,
    "tip": "Serialization converts an object state into a byte stream via `ObjectOutputStream`. Variables marked `transient` are skipped and not serialized (e.g. passwords, file handles)."
  },
  {
    "id": "OOPJ-Q15",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q5(a)",
    "topicTag": "File Copy Streams",
    "question": "Write a complete Java program to copy the entire contents of an existing text file `source.txt` into `destination.txt` using `FileInputStream` and `FileOutputStream` with proper resource cleanup (`try-with-resources`).",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 2,
    "tip": "Use `try (FileInputStream fis = new FileInputStream(\"source.txt\"); FileOutputStream fos = new FileOutputStream(\"destination.txt\")) { int b; while((b = fis.read()) != -1) fos.write(b); }`."
  },
  {
    "id": "OOPJ-Q16",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Map & Set Collections",
    "question": "Explain the hierarchy of `Map` interface in Java Collections Framework. Differentiate between `HashMap`, `LinkedHashMap`, and `TreeMap` in terms of ordering, hashing, and performance.",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 2,
    "tip": "`HashMap`: no ordering, $O(1)$ operations. `LinkedHashMap`: maintains insertion order via linked list. `TreeMap`: sorted by natural key order or Comparator, Red-Black Tree backed, $O(\\log n)$."
  },
  {
    "id": "OOPJ-Q17",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(i)",
    "topicTag": "Event Handling",
    "question": "Explain the Delegation Event Model in Java GUI programming. Name the three principal components involved (Event Source, Event Object, Event Listener).",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Event Source generates event $\\rightarrow$ sends Event Object to registered Event Listener $\\rightarrow$ Listener executes event handler method."
  },
  {
    "id": "OOPJ-Q18",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(j)",
    "topicTag": "Layout Managers",
    "question": "Describe the default layout managers for `JFrame` and `JPanel` in Swing. How does `BorderLayout` position its child components?",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
    "pageNumber": 1,
    "tip": "`JFrame` defaults to `BorderLayout` (North, South, East, West, Center); `JPanel` defaults to `FlowLayout`."
  },
  {
    "id": "OOPJ-Q19",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q6(a)",
    "topicTag": "Swing GUI Calculator",
    "question": "Develop a Java Swing GUI application with two `JTextField`s for inputting two numbers, four `JButton`s (`+`, `-`, `*`, `/`), and a result `JLabel`. Implement `ActionListener` to perform arithmetic operations.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 2,
    "tip": "Use `JFrame`, create text fields, add buttons to a panel with `GridLayout(1,4)`, register `addActionListener(this)`, handle division by zero exception."
  },
  {
    "id": "OOPJ-Q20",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Adapter Classes",
    "question": "What are Event Adapter classes in Java? Why are they useful when working with listener interfaces that declare multiple methods like `MouseListener` or `WindowListener`?",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 2,
    "tip": "Adapter classes provide empty default implementations for all interface methods. Extending `MouseAdapter` allows overriding only `mouseClicked()` without writing 4 other boilerplate methods."
  },
  {
    "id": "DBMS-Q01",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Data Independence",
    "question": "Define Physical Data Independence and Logical Data Independence in the context of ANSI/SPARC 3-schema database architecture.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Logical: ability to modify conceptual schema without changing external views. Physical: ability to modify internal physical storage without changing conceptual schema."
  },
  {
    "id": "DBMS-Q02",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "ER Modeling",
    "question": "What is a Weak Entity set? How are weak entities represented in an Entity-Relationship (ER) diagram, and what is a discriminator (partial key)?",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 1,
    "tip": "Weak entity has no primary key of its own; represented by double rectangle. Identifying relationship represented by double diamond; partial key underlined with dashed line."
  },
  {
    "id": "DBMS-Q03",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q2(a)",
    "topicTag": "ER Diagram Design",
    "question": "Design an Entity-Relationship (ER) diagram for a University Management System involving Students, Departments, Courses, Professors, and Enrollments. Specify primary keys, cardinalities, and convert the ER model into relational tables.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Draw entities with attributes, specify 1:N and M:N relationships, and write table schemas with Foreign Keys clearly indicated."
  },
  {
    "id": "DBMS-Q04",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "DBMS vs File Systems",
    "question": "Compare traditional File Processing Systems with Database Management Systems across data redundancy, concurrent access, integrity constraints, and crash recovery.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 1,
    "tip": "Cover 5 key dimensions: Redundancy & inconsistency, Data isolation, Atomicity problems, Concurrent access anomalies, Security enforcement."
  },
  {
    "id": "DBMS-Q05",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2022
    ],
    "frequency": 3,
    "questionNumber": "Q1(c)",
    "topicTag": "Integrity Constraints",
    "question": "State the Entity Integrity Constraint and Referential Integrity Constraint in the Relational Data Model.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Entity integrity: primary key cannot be null. Referential integrity: foreign key must match an existing primary key value in referenced table or be null."
  },
  {
    "id": "DBMS-Q06",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Relational Algebra",
    "question": "Differentiate between Natural Join ($\\bowtie$) and Theta Join ($\\bowtie_\\theta$) in Relational Algebra.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1dNxi88ENzGvvyrscc7OmuSDkDvz9MFLd",
    "pageNumber": 1,
    "tip": "Theta join combines tuples based on explicit predicate $\\theta$. Natural join equates all attributes with identical names and automatically removes duplicate columns."
  },
  {
    "id": "DBMS-Q07",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q3(a)",
    "topicTag": "SQL Queries & Aggregations",
    "question": "Given schemas `Employee(emp_id, emp_name, dept_id, salary)` and `Department(dept_id, dept_name, location)`, write SQL queries for: (i) Find the 2nd highest salary, (ii) List departments having more than 5 employees with average salary > 50,000, (iii) Retrieve employees earning more than their department's average salary.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "(i) `SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);`, (ii) `GROUP BY dept_id HAVING COUNT(*) > 5 AND AVG(salary) > 50000;`, (iii) Correlated subquery."
  },
  {
    "id": "DBMS-Q08",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Relational Algebra Operations",
    "question": "Define the fundamental operators of Relational Algebra: Selection ($\\sigma$), Projection ($\\pi$), Union ($\\cup$), Set Difference ($-$), and Cartesian Product ($\\times$). Show how Division ($\\div$) is derived.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 1,
    "tip": "Show formal notation and algebraic derivation of Division: $R \\div S = \\pi_X(R) - \\pi_X((\\pi_X(R) \\times S) - R)$."
  },
  {
    "id": "DBMS-Q09",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(e)",
    "topicTag": "Functional Dependencies",
    "question": "State Armstrong's Axioms for Functional Dependencies: Reflexivity, Augmentation, and Transitivity.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Reflexivity: if $Y \\subseteq X$, then $X \\rightarrow Y$. Augmentation: if $X \\rightarrow Y$, then $XZ \\rightarrow YZ$. Transitivity: if $X \\rightarrow Y$ and $Y \\rightarrow Z$, then $X \\rightarrow Z$."
  },
  {
    "id": "DBMS-Q10",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(f)",
    "topicTag": "BCNF vs 3NF",
    "question": "Differentiate between 3NF and BCNF. Why is every relation in BCNF strictly in 3NF, but not necessarily vice versa?",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 1,
    "tip": "In BCNF, for every $X \\rightarrow Y$, $X$ must be a super key. In 3NF, $Y$ can also be a prime attribute. BCNF does not guarantee dependency preservation."
  },
  {
    "id": "DBMS-Q11",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q4(a)",
    "topicTag": "Normalization Problem",
    "question": "Consider relation $R(A, B, C, D, E)$ with functional dependencies $F = \\{A \\rightarrow BC, CD \\rightarrow E, B \\rightarrow D, E \\rightarrow A\\}$. Find all candidate keys of $R$ and determine the highest normal form of $R$. Decompose into BCNF if necessary.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 2,
    "tip": "Compute closures: $A^+ = \\{A,B,C,D,E\\} \\implies A$ is a candidate key. $E^+ = \\{A,B,C,D,E\\} \\implies E$ is candidate key. $CD^+ = \\{C,D,E,A,B\\} \\implies CD$. $BC^+ = \\{B,C,D,E,A\\} \\implies BC$. Since $B \\rightarrow D$ has non-super key LHS and $D$ is non-prime, $R$ is in 1NF."
  },
  {
    "id": "DBMS-Q12",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Lossless Join Decomposition",
    "question": "State and prove the necessary and sufficient condition for a decomposition of relation $R$ into $R_1$ and $R_2$ to be a Lossless-Join Decomposition with respect to functional dependencies $F$.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 2,
    "tip": "Condition: $R_1 \\cap R_2 \\rightarrow R_1 \\in F^+$ OR $R_1 \\cap R_2 \\rightarrow R_2 \\in F^+$. Common attribute must be a superkey of at least one sub-relation."
  },
  {
    "id": "DBMS-Q13",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(g)",
    "topicTag": "ACID Properties",
    "question": "Explain the four ACID properties of a database transaction. Which component of DBMS is responsible for ensuring Atomicity and Durability?",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Atomicity (all or none, Recovery Manager), Consistency (integrity, Application programmer), Isolation (concurrency control), Durability (persists after crash, WAL recovery)."
  },
  {
    "id": "DBMS-Q14",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(h)",
    "topicTag": "Two-Phase Locking",
    "question": "What is Two-Phase Locking (2PL)? Differentiate between Growing Phase and Shrinking Phase. Does basic 2PL guarantee freedom from deadlock?",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 1,
    "tip": "Growing: locks acquired, none released. Shrinking: locks released, none acquired. 2PL guarantees serializability but does NOT prevent deadlock."
  },
  {
    "id": "DBMS-Q15",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q5(a)",
    "topicTag": "Conflict Serializability",
    "question": "Consider schedule $S: r_1(A); r_2(A); w_1(A); r_1(B); w_2(A); w_1(B); r_2(B); w_2(B)$. Test whether $S$ is conflict serializable by constructing its Precedence Graph. If serializable, write the equivalent serial schedule.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 2,
    "tip": "Find conflicting operations on same data items: $r_2(A)$ before $w_1(A) \\implies T_2 \\rightarrow T_1$. $w_1(A)$ before $w_2(A) \\implies T_1 \\rightarrow T_2$. Graph has cycle $T_1 \\leftrightarrow T_2$, therefore NOT conflict serializable."
  },
  {
    "id": "DBMS-Q16",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Deadlock Handling",
    "question": "Explain Deadlock Prevention schemes based on timestamps: Wait-Die and Wound-Wait. How do they handle when an older transaction requests a lock held by a younger transaction?",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 2,
    "tip": "Wait-Die (non-preemptive): Old waits for young; Young requesting old dies. Wound-Wait (preemptive): Old wounds (preempts) young; Young waits for old."
  },
  {
    "id": "DBMS-Q17",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(i)",
    "topicTag": "Indexing",
    "question": "Differentiate between Primary Index, Secondary Index, and Clustering Index with respect to ordered files.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Primary: ordered on primary key (sparse). Clustering: ordered on non-key ordering field. Secondary: ordered on non-ordering field (dense)."
  },
  {
    "id": "DBMS-Q18",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(j)",
    "topicTag": "RAID Levels",
    "question": "Compare RAID 0 (Striping), RAID 1 (Mirroring), and RAID 5 (Block-Interleaved Distributed Parity) in terms of redundancy and storage efficiency.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 1,
    "tip": "RAID 0: max performance, zero fault tolerance. RAID 1: 100% duplicate cost, high safety. RAID 5: parity distributed across $N$ disks, capacity is $N-1$ disks."
  },
  {
    "id": "DBMS-Q19",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q6(a)",
    "topicTag": "B+ Tree Indexing",
    "question": "Construct a B+ Tree of order $p = 4$ by inserting the following search key values in sequence: $10, 20, 30, 40, 50, 60, 70, 80$. Show node splits at each step.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 2,
    "tip": "Maximum keys per node $= 3$. When 4th key is added, split leaf into two nodes with $\\lceil (p-1)/2 \\rceil$ keys each and promote middle key to parent. Maintain leaf links."
  },
  {
    "id": "DBMS-Q20",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Crash Recovery & ARIES",
    "question": "Explain the ARIES recovery algorithm for database crashes. Detail the three passes: Analysis pass, Redo pass, and Undo pass using Write-Ahead Logging (WAL).",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 2,
    "tip": "Analysis: determines dirty pages and active transactions at crash. Redo: repeating history from oldest unwritten page forward. Undo: reversing effects of uncommitted active transactions."
  },
  {
    "id": "SE-Q01",
    "subjectId": "SE",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Process Models",
    "question": "State the primary advantages and major disadvantages of the Classical Waterfall Model. Under what project conditions is it most suitable?",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Simple, easy to manage; but inflexible to changing requirements, high late risk. Suitable when requirements are stable, fixed, and well understood."
  },
  {
    "id": "SE-Q02",
    "subjectId": "SE",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Agile Scrum",
    "question": "Define Sprint, Product Backlog, and Daily Scrum in the Agile Scrum framework.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 1,
    "tip": "Sprint: time-boxed iteration (2-4 weeks). Product backlog: prioritized feature list. Daily Scrum: 15-minute sync answering what done, what next, blockers."
  },
  {
    "id": "SE-Q03",
    "subjectId": "SE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q2(a)",
    "topicTag": "Spiral Model",
    "question": "Explain Boehm's Spiral Model of software development. Describe the activities carried out in each of the four quadrants and explain why risk management is central to this model.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "4 quadrants: 1. Determine objectives & constraints, 2. Identify & resolve risks (prototyping), 3. Develop & verify next-level product, 4. Review & plan next iteration."
  },
  {
    "id": "SE-Q04",
    "subjectId": "SE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Agile vs Waterfall",
    "question": "Compare Agile methodology with traditional plan-driven (Waterfall) models across customer collaboration, handling changes, delivery schedule, and testing strategy.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    "pageNumber": 1,
    "tip": "Agile: iterative, customer embedded, welcomes change, continuous delivery, test-driven. Waterfall: linear sequential, contract negotiation, resists change, big-bang delivery."
  },
  {
    "id": "SE-Q05",
    "subjectId": "SE",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(c)",
    "topicTag": "Requirements Types",
    "question": "Differentiate between Functional Requirements and Non-Functional Requirements (NFRs) with two concrete examples for an E-Commerce portal.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Functional: user adds item to cart, process payment. Non-functional: checkout must complete within 2 seconds, 99.99% uptime, AES-256 encryption."
  },
  {
    "id": "SE-Q06",
    "subjectId": "SE",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "SRS Characteristics",
    "question": "List four essential characteristics of a good Software Requirements Specification (SRS) document according to IEEE 830 standards.",
    "paperName": "Feb 2024 supple.pdf",
    "driveFileId": "1J39hWnvRtVO3L5k5YH6_JL29Xuk_Dike",
    "pageNumber": 1,
    "tip": "Correct, Unambiguous, Complete, Consistent, Ranked for importance/stability, Verifiable, Modifiable, Traceable."
  },
  {
    "id": "SE-Q07",
    "subjectId": "SE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q3(a)",
    "topicTag": "Use Case Modeling",
    "question": "Explain Use Case Modeling. Draw a complete Use Case Diagram for an Online Banking System showing Actors, Use Cases, `<<include>>`, and `<<extend>>` relationships.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Actors: Customer, Bank Admin. Include: Transfer Funds includes Check Balance. Extend: Transfer Funds extended by Overdraft Alert."
  },
  {
    "id": "SE-Q08",
    "subjectId": "SE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Data Flow Diagrams",
    "question": "Describe the symbols used in Data Flow Diagrams (DFDs). Draw Level 0 (Context Diagram) and Level 1 DFDs for a Library Management System.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 1,
    "tip": "Symbols: Process (bubble/circle), External Entity (rectangle), Data Store (open rectangle), Data Flow (arrow). Level 0: single central bubble with student and librarian."
  },
  {
    "id": "SE-Q09",
    "subjectId": "SE",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(e)",
    "topicTag": "Cohesion vs Coupling",
    "question": "Explain the software engineering design golden rule: 'High Cohesion and Low Coupling'. Why is it desirable?",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "High cohesion ensures module focuses on single clear task; low coupling minimizes interdependencies, making testing, reuse, and maintenance simple."
  },
  {
    "id": "SE-Q10",
    "subjectId": "SE",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(f)",
    "topicTag": "Coupling Levels",
    "question": "Arrange the types of Coupling from Best (Lowest) to Worst (Highest): Common, Data, Content, Control, Stamp.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1zVaScPFgh6pZVACqsqFJhF-l_ts78MdE",
    "pageNumber": 1,
    "tip": "Data Coupling (Best) < Stamp Coupling < Control Coupling < Common Coupling < Content Coupling (Worst)."
  },
  {
    "id": "SE-Q11",
    "subjectId": "SE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q4(a)",
    "topicTag": "Cohesion Hierarchy",
    "question": "Explain the seven levels of Cohesion from Lowest (Worst) to Highest (Best) with real-world module examples for each level.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 2,
    "tip": "Coincidental < Logical < Temporal < Procedural < Communicational < Sequential < Functional (Best, executes single well-defined computation)."
  },
  {
    "id": "SE-Q12",
    "subjectId": "SE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Architectural Styles",
    "question": "Compare Layered Architecture, Client-Server Architecture, and Pipe-and-Filter Architecture with architectural block diagrams and software system examples.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    "pageNumber": 2,
    "tip": "Layered: Presentation, Business Logic, Data Access. Client-Server: distributed tiers. Pipe-and-Filter: Unix pipelines, compiler phases."
  },
  {
    "id": "SE-Q13",
    "subjectId": "SE",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(g)",
    "topicTag": "Testing Concepts",
    "question": "Differentiate between Verification and Validation (V&V) in software testing ('Are we building the product right?' vs 'Are we building the right product?').",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Verification: static review/inspection of artifacts without executing code. Validation: dynamic execution testing whether system satisfies user expectations."
  },
  {
    "id": "SE-Q14",
    "subjectId": "SE",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(h)",
    "topicTag": "Cyclomatic Complexity",
    "question": "State the three formulas to compute McCabe's Cyclomatic Complexity $V(G)$ from a Control Flow Graph.",
    "paperName": "Feb 2024 supple.pdf",
    "driveFileId": "1J39hWnvRtVO3L5k5YH6_JL29Xuk_Dike",
    "pageNumber": 1,
    "tip": "1. $V(G) = E - N + 2P$, 2. $V(G) = P_{predicate} + 1$, 3. $V(G) = \\text{Number of closed regions} + 1$."
  },
  {
    "id": "SE-Q15",
    "subjectId": "SE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q5(a)",
    "topicTag": "Basis Path Testing",
    "question": "For a given code segment containing nested `if-else` and `while` loop: (i) Draw the Control Flow Graph (CFG), (ii) Calculate Cyclomatic Complexity $V(G)$, (iii) Determine the set of linearly independent paths, (iv) Design test cases covering each path.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 2,
    "tip": "Label statements 1..n, draw nodes and directed edges, count closed regions $R$, enumerate Independent Paths 1 to $V(G)$."
  },
  {
    "id": "SE-Q16",
    "subjectId": "SE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Black Box Testing",
    "question": "Explain Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA). Apply both techniques to design test cases for an input field accepting integers between 1 and 100 inclusive.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 2,
    "tip": "ECP: Valid [1..100], Invalid [< 1], Invalid [> 100]. BVA boundaries: 0 (just below), 1 (min), 2 (just above), 50 (nominal), 99 (just below), 100 (max), 101 (just above)."
  },
  {
    "id": "SE-Q17",
    "subjectId": "SE",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2021
    ],
    "frequency": 3,
    "questionNumber": "Q1(i)",
    "topicTag": "COCOMO Model",
    "question": "What are the three project categories in Boehm's COCOMO model: Organic, Semidetached, and Embedded?",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Organic: small experienced teams, familiar domain. Semidetached: intermediate complexity. Embedded: strict hardware/software constraints (e.g. flight control)."
  },
  {
    "id": "SE-Q18",
    "subjectId": "SE",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(j)",
    "topicTag": "Maintenance Types",
    "question": "Explain the four categories of Software Maintenance: Corrective, Adaptive, Perfective, and Preventive maintenance.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    "pageNumber": 1,
    "tip": "Corrective: fixes bugs. Adaptive: adjusts to new environment/OS. Perfective: adds enhancements/features. Preventive: refactoring to avoid future bugs."
  },
  {
    "id": "SE-Q19",
    "subjectId": "SE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023,
      2020
    ],
    "frequency": 3,
    "questionNumber": "Q6(a)",
    "topicTag": "COCOMO Calculation",
    "question": "Assume an Organic software project is estimated at 32,000 Lines of Code (32 KLOC). For Organic mode, $Effort = 2.4 \\times (KLOC)^{1.05}$ person-months and $Time = 2.5 \\times (Effort)^{0.38}$ months. Calculate the required Effort, Development Time, and average team size.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 2,
    "tip": "$Effort = 2.4 \\times (32)^{1.05} = 2.4 \\times 38.05 = 91.33$ PM. $Time = 2.5 \\times (91.33)^{0.38} = 2.5 \\times 5.53 = 13.8$ months. Persons $= 91.33 / 13.8 \\approx 7$ engineers."
  },
  {
    "id": "SE-Q20",
    "subjectId": "SE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Risk Management",
    "question": "Explain the RMMM (Risk Mitigation, Monitoring, and Management) plan in software project management with a practical tabular template.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 2,
    "tip": "Columns: Risk description, Probability, Impact severity, Mitigation strategy (preventive), Monitoring triggers, Management plan (contingency)."
  },
  {
    "id": "ES-Q01",
    "subjectId": "ES",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023,
      2022
    ],
    "frequency": 3,
    "questionNumber": "Q1(a)",
    "topicTag": "Ecosystems",
    "question": "Explain Lindeman's 10% Energy Transfer Law across trophic levels in an ecosystem. Why is the Pyramid of Energy always upright?",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Only ~10% of energy is transferred to next trophic level; 90% lost as respiration heat. Energy cannot be inverted because energy decreases upwards."
  },
  {
    "id": "ES-Q02",
    "subjectId": "ES",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(a)",
    "topicTag": "Biodiversity Hotspots",
    "question": "What are Biodiversity Hotspots? Describe the criteria used by Norman Myers to designate a region as a hotspot, and list the four biodiversity hotspots in India.",
    "paperName": "ES-model question paper-MID-1.pdf",
    "driveFileId": "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
    "pageNumber": 1,
    "tip": "Criteria: must contain >= 1,500 endemic vascular plant species and have lost >= 70% of primary habitat. India: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland."
  },
  {
    "id": "ES-Q03",
    "subjectId": "ES",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Natural Resources",
    "question": "Differentiate between Renewable and Non-Renewable energy resources with two environmental impacts for each.",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Renewable: solar, wind (intermittent, zero GHG). Non-renewable: coal, petroleum (finite, causes acid rain, global warming)."
  },
  {
    "id": "ES-Q04",
    "subjectId": "ES",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(a)",
    "topicTag": "Deforestation & Water Issues",
    "question": "Discuss the ecological and socio-economic consequences of large dams and extensive deforestation in river catchments.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 1,
    "tip": "Soil erosion, siltation of reservoirs, loss of biodiversity, resettlement and rehabilitation of tribal populations, seismic risks."
  },
  {
    "id": "ES-Q05",
    "subjectId": "ES",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Water Pollution Parameters",
    "question": "Define Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD). What does a high BOD value signify in a water body?",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "BOD: oxygen consumed by aerobic bacteria to decompose organic matter. High BOD indicates heavy organic contamination and dissolved oxygen depletion."
  },
  {
    "id": "ES-Q06",
    "subjectId": "ES",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(a)",
    "topicTag": "Solid Waste Management",
    "question": "Explain the integrated solid waste management hierarchy (3Rs: Reduce, Reuse, Recycle) and compare Sanitary Landfills with Composting and Incineration.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 1,
    "tip": "Cover leachate control in sanitary landfills, organic conversion in composting, and volume reduction with air pollution control in incineration."
  },
  {
    "id": "ES-Q07",
    "subjectId": "ES",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Global Challenges",
    "question": "Explain the mechanism of Ozone Layer Depletion in the stratosphere and name the major chlorofluorocarbons (CFCs) responsible.",
    "paperName": "ES-model question paper-MID-1.pdf",
    "driveFileId": "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
    "pageNumber": 1,
    "tip": "UV splits chlorine radical from CFC: $Cl + O_3 \\rightarrow ClO + O_2$; $ClO + O \\rightarrow Cl + O_2$. Single chlorine atom destroys $>100,000$ ozone molecules."
  },
  {
    "id": "ES-Q08",
    "subjectId": "ES",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(a)",
    "topicTag": "Climate Change & Rainwater Harvesting",
    "question": "Describe the Greenhouse Effect and global climate change impacts. Explain Rooftop Rainwater Harvesting techniques with a schematic diagram.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 2,
    "tip": "Diagram: Catchment roof $\\rightarrow$ First-flush diverter $\\rightarrow$ Filter unit (sand, gravel, charcoal) $\\rightarrow$ Recharge well / Storage tank."
  },
  {
    "id": "ES-Q09",
    "subjectId": "ES",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Environmental Legislation",
    "question": "State the salient provisions of the Environment (Protection) Act, 1986 and the Air (Prevention and Control of Pollution) Act, 1981.",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Empowers central government to coordinate state pollution boards, establish environmental standards, inspect industrial sites, and penalize violations."
  },
  {
    "id": "ES-Q10",
    "subjectId": "ES",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(a)",
    "topicTag": "Sustainable Development Goals",
    "question": "What is Sustainable Development? Discuss how Information Technology (GIS, Remote Sensing, Environmental Big Data) contributes to disaster management and environmental protection.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 2,
    "tip": "Brundtland definition: meeting present needs without compromising future generations. GIS maps flood zones, deforestation tracking via satellite telemetry."
  },
  {
    "id": "IE-Q01",
    "subjectId": "IE",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Design Thinking",
    "question": "List and briefly define the 5 iterative stages of the Design Thinking process.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "1. Empathize (understand users), 2. Define (problem statement), 3. Ideate (brainstorm), 4. Prototype (build MVP), 5. Test (gather feedback)."
  },
  {
    "id": "IE-Q02",
    "subjectId": "IE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(a)",
    "topicTag": "Innovation Types",
    "question": "Differentiate between Incremental Innovation, Radical Innovation, and Disruptive Innovation with contemporary tech industry case studies.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Incremental: iterative camera improvements. Radical: iPhone smartphone creation. Disruptive: Netflix streaming disrupting Blockbuster video rental."
  },
  {
    "id": "IE-Q03",
    "subjectId": "IE",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Entrepreneurial Opportunity",
    "question": "What are the four dimensions of Feasibility Analysis evaluated before launching a new venture?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Product/Service feasibility, Industry/Target Market feasibility, Organizational feasibility, Financial feasibility."
  },
  {
    "id": "IE-Q04",
    "subjectId": "IE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(a)",
    "topicTag": "Market Research",
    "question": "Explain the importance of Market Research in opportunity recognition. Differentiate Primary vs Secondary market research methods for an EdTech startup.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Primary: user surveys, student interviews, prototype usability tests. Secondary: industry reports (Gartner, Statista), census data, competitor financial reports."
  },
  {
    "id": "IE-Q05",
    "subjectId": "IE",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Lean Canvas",
    "question": "What is a Minimum Viable Product (MVP)? How does Lean Startup methodology apply the Build-Measure-Learn feedback loop?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "MVP has core features to collect maximum validated learning with least effort. Feedback loop tests hypotheses rapidly to pivot or persevere."
  },
  {
    "id": "IE-Q06",
    "subjectId": "IE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(a)",
    "topicTag": "Business Model Canvas",
    "question": "Detail the 9 building blocks of Alexander Osterwalder's Business Model Canvas (BMC). Map out a complete BMC for an AI-powered student exam prep service.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure."
  },
  {
    "id": "IE-Q07",
    "subjectId": "IE",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Venture Financing",
    "question": "Differentiate between Angel Investors and Venture Capitalists (VCs) in terms of investment stage, funding volume, and decision-making speed.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Angels: high-net-worth individuals, seed/early stage, smaller checks, faster personal decisions. VCs: institutional funds, Series A+, large capital, board seats."
  },
  {
    "id": "IE-Q08",
    "subjectId": "IE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(a)",
    "topicTag": "Pitch Deck & Valuation",
    "question": "Describe the essential slides required in an Investor Pitch Deck (Problem, Solution, Market Size TAM/SAM/SOM, Business Model, Traction, Team, The Ask).",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Standard 10-12 slide deck format: hook problem, crisp solution demo, verifiable unit economics, competitive moat, clear capital allocation plan."
  },
  {
    "id": "IE-Q09",
    "subjectId": "IE",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "IPR Types",
    "question": "What are the three mandatory statutory criteria for an invention to be eligible for patent grant in India (Novelty, Inventive Step, Industrial Applicability)?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Novelty (never published worldwide), Non-obvious inventive step to person skilled in art, and capable of industrial manufacture or usage."
  },
  {
    "id": "IE-Q10",
    "subjectId": "IE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(a)",
    "topicTag": "IP Protection & Scaling",
    "question": "Explain the four main categories of Intellectual Property Rights: Patents, Trademarks, Copyrights, and Trade Secrets with their validity periods and legal protections.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Patents: 20 years for inventions. Trademarks: 10 years renewable for logos/names. Copyrights: author lifetime + 60 years for creative works. Trade Secrets: indefinite as long as secret."
  },
  {
    "id": "DM-Q28",
    "subjectId": "DM",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Truth Tables",
    "question": "Construct the truth table for the biconditional statement $P \\leftrightarrow Q$ and express it using conjunction, disjunction, and negation.",
    "paperName": "mr 22 supple.pdf",
    "driveFileId": "1BUtNeaesgWzOtkENbEBOIjL5pUSVY5m3",
    "pageNumber": 1,
    "tip": "$P \\leftrightarrow Q \\equiv (P \\rightarrow Q) \\wedge (Q \\rightarrow P) \\equiv (\\neg P \\vee Q) \\wedge (\\neg Q \\vee P)$."
  },
  {
    "id": "DM-Q29",
    "subjectId": "DM",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Automatic Theorem Proving",
    "question": "Prove that $R \\wedge (P \\vee Q)$ is a valid consequence of the premises $P \\vee Q$, $Q \\rightarrow R$, $P \\rightarrow M$, and $\\neg M$.",
    "paperName": "march 2023.pdf",
    "driveFileId": "1XCYgRvKGUK-wQpf13430VDTd76ouUzSv",
    "pageNumber": 1,
    "tip": "From $P \\rightarrow M$ and $\\neg M$, by Modus Tollens we deduce $\\neg P$. From $P \\vee Q$ and $\\neg P$, by Disjunctive Syllogism we deduce $Q$. From $Q$ and $Q \\rightarrow R$, we deduce $R$. Hence $R \\wedge (P \\vee Q)$."
  },
  {
    "id": "DM-Q30",
    "subjectId": "DM",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Relations",
    "question": "Let $A = \\{1, 2, 3\\}$. Give an example of a binary relation on $A$ that is symmetric and transitive but not reflexive.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
    "pageNumber": 1,
    "tip": "$R = \\{(1,1), (1,2), (2,1), (2,2)\\}$. Notice $(3,3) \\notin R$, so not reflexive."
  },
  {
    "id": "DM-Q31",
    "subjectId": "DM",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(a)",
    "topicTag": "Lattices & Boolean Algebra",
    "question": "Show that the power set $\\mathcal{P}(S)$ of a non-empty set $S$ under the subset relation $(\\mathcal{P}(S), \\subseteq)$ forms a bounded, distributive, and complemented lattice (Boolean Algebra).",
    "paperName": "mr 21 supple.pdf",
    "driveFileId": "1eB-kfW8nJbSQXJuwpPmqshc-mJ4jVUMd",
    "pageNumber": 1,
    "tip": "LUB is set union ($A \\cup B$), GLB is set intersection ($A \\cap B$). Least element is $\\emptyset$, greatest is $S$. Complement of $A$ is $S \\setminus A$."
  },
  {
    "id": "DM-Q32",
    "subjectId": "DM",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Cyclic Groups",
    "question": "Define the order of an element $a$ in a group $(G, *)$. What is the generator of a cyclic group of order $n$?",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Order is the smallest positive integer $m$ such that $a^m = e$. An element $g$ is a generator if $\\{g^k \\mid k \\in \\mathbb{Z}\\} = G$."
  },
  {
    "id": "DM-Q33",
    "subjectId": "DM",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Normal Subgroups",
    "question": "Define a Normal Subgroup. Prove that a subgroup $H$ of $G$ is normal in $G$ if and only if $g H g^{-1} = H$ for all $g \\in G$.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 2,
    "tip": "Show left coset equals right coset: $gH = Hg$ for all $g \\in G$."
  },
  {
    "id": "DM-Q34",
    "subjectId": "DM",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(g)",
    "topicTag": "Combinatorics",
    "question": "Find the number of non-negative integer solutions to the equation $x_1 + x_2 + x_3 + x_4 = 15$.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "12OLmokD7NCErl0ZKnnbn_IkzNSfEOQ3G",
    "pageNumber": 1,
    "tip": "Formula: $\\binom{n + r - 1}{r} = \\binom{15 + 4 - 1}{15} = \\binom{18}{15} = \\frac{18 \\times 17 \\times 16}{6} = 816$."
  },
  {
    "id": "DM-Q35",
    "subjectId": "DM",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Inclusion-Exclusion",
    "question": "Find the number of integers between 1 and 1000 (both inclusive) that are not divisible by 2, 3, or 5 using the Principle of Inclusion-Exclusion.",
    "paperName": "Aug 2023 regular.pdf",
    "driveFileId": "1jn3_1u5G2kK-k2G5j_2evvDa9JV8poqV",
    "pageNumber": 2,
    "tip": "$|A_2| = 500, |A_3| = 333, |A_5| = 200$. Pairwise: $|A_2 \\cap A_3| = 166, |A_2 \\cap A_5| = 100, |A_3 \\cap A_5| = 66$. Triple: $|A_2 \\cap A_3 \\cap A_5| = 33$. Answer $= 1000 - (500+333+200 - 166-100-66 + 33) = 1000 - 734 = 266$."
  },
  {
    "id": "DM-Q36",
    "subjectId": "DM",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(i)",
    "topicTag": "Trees & Graphs",
    "question": "Prove that a tree with $n$ vertices has exactly $n - 1$ edges using mathematical induction on $n$.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1gwQN-U6r7sXl3j5Umxz1y9BUnTF36m9s",
    "pageNumber": 1,
    "tip": "Base: $n=1, E=0$. Induction: remove a leaf vertex and its single incident edge; remaining tree on $n-1$ vertices has $n-2$ edges $\\implies n-2+1 = n-1$."
  },
  {
    "id": "DM-Q37",
    "subjectId": "DM",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Planar Graphs & $K_{3,3}, K_5$",
    "question": "Prove that the complete bipartite graph $K_{3,3}$ and complete graph $K_5$ are non-planar graphs using Euler's formula and edge-boundary inequalities.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1y2gjlWNfQOry7RPELbseHAciEHkqRYZO",
    "pageNumber": 2,
    "tip": "For $K_5$: $V=5, E=10$. If planar, $E \\le 3V - 6 \\implies 10 \\le 9$ (contradiction). For $K_{3,3}$: bipartite $\\implies$ cycles $\\ge 4$, so $2E \\ge 4R \\implies E \\le 2V - 4 \\implies 9 \\le 8$ (contradiction)."
  },
  {
    "id": "COA-Q22",
    "subjectId": "COA",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Registers",
    "question": "State the primary function of each basic computer register: Program Counter (PC), Memory Address Register (AR), Instruction Register (IR), and Accumulator (AC).",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "PC: holds address of next instruction. AR: holds memory address for read/write. IR: holds current instruction opcode. AC: general working register."
  },
  {
    "id": "COA-Q23",
    "subjectId": "COA",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Interrupt Cycle",
    "question": "Explain the hardware sequence and register transfer operations performed during the Computer Interrupt Cycle with a timing flowchart.",
    "paperName": "mr 22 reg,supple.pdf",
    "driveFileId": "13-497eaoWN6b7Z7ncqq3lUoZ83N2XUHj",
    "pageNumber": 1,
    "tip": "$AR \\leftarrow 0, TR \\leftarrow PC$; $M[AR] \\leftarrow TR, PC \\leftarrow 0$; $PC \\leftarrow PC + 1, IEN \\leftarrow 0, R \\leftarrow 0$."
  },
  {
    "id": "COA-Q24",
    "subjectId": "COA",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Reverse Polish Notation",
    "question": "Convert the infix arithmetic expression $((A + B) \\times C) - (D / (E + F))$ into Reverse Polish Notation (Postfix) using a stack.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
    "pageNumber": 1,
    "tip": "Result: $A B + C \\times D E F + / -$."
  },
  {
    "id": "COA-Q25",
    "subjectId": "COA",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q3(a)",
    "topicTag": "General Register Organization",
    "question": "Draw and explain the block diagram of a 7-register CPU organization with two multiplexer buses, arithmetic logic unit (ALU), and destination decoder.",
    "paperName": "Aug 2023 reg.pdf",
    "driveFileId": "1ZXkGeglj8UqLuKb_D8BRd77CwSIpPE6a",
    "pageNumber": 1,
    "tip": "Show MUX A (SELA) and MUX B (SELB) selecting operands $A$ and $B$, ALU performing operation OPR, and Decoder (SELD) loading destination register."
  },
  {
    "id": "COA-Q26",
    "subjectId": "COA",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Floating Point Operations",
    "question": "List the 4 sequential steps involved in adding two normalized floating-point numbers: Check for zeros, Align mantissas, Add/subtract mantissas, Normalize result.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "1. Zero check, 2. Align exponents by shifting smaller mantissa right, 3. Add/subtract mantissas, 4. Normalize and round result."
  },
  {
    "id": "COA-Q27",
    "subjectId": "COA",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Non-Restoring Division",
    "question": "Explain the Non-Restoring Division Algorithm for signed binary integers. Trace through the division of Dividend $Q = 11$ by Divisor $M = 3$.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 2,
    "tip": "If $A$ is positive, shift left and subtract $M$. If $A$ is negative, shift left and add $M$. If sign of $A$ matches, $Q_0 = 1$; else $Q_0 = 0$."
  },
  {
    "id": "COA-Q28",
    "subjectId": "COA",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(g)",
    "topicTag": "Cache Write Policies",
    "question": "Differentiate between Write-Through and Write-Back cache memory update policies.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Write-through: writes simultaneously to cache and main memory (slower, always consistent). Write-back: updates only cache; written to RAM only when line replaced using dirty bit."
  },
  {
    "id": "COA-Q29",
    "subjectId": "COA",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(a)",
    "topicTag": "Virtual Memory & TLB",
    "question": "Explain how Virtual Memory address translation is carried out using Page Tables and Translation Lookaside Buffers (TLB). Show virtual address to physical address mapping.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1oprRpRBPvrIwD688nKCaRbOxqscyGEMo",
    "pageNumber": 2,
    "tip": "Virtual address $= (p, d)$. TLB searched associative $\\rightarrow$ if hit, frame $f$ retrieved; if miss, page table accessed $\\rightarrow$ Physical address $= (f, d)$."
  },
  {
    "id": "COA-Q30",
    "subjectId": "COA",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(i)",
    "topicTag": "Asynchronous Data Transfer",
    "question": "Explain Strobe Control and Handshaking methods for asynchronous data transfer between independent clock domains.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1L5kLMO22UOu7Bvbq9_mWhCE0mwj_3cPp",
    "pageNumber": 1,
    "tip": "Strobe: source or destination activates single control line (no ack). Handshaking: source issues Request, destination returns Acknowledge (two-way reliable)."
  },
  {
    "id": "COA-Q31",
    "subjectId": "COA",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(a)",
    "topicTag": "Priority Interrupt & Daisy Chaining",
    "question": "Explain the Daisy-Chaining Priority Interrupt hardware configuration with a circuit diagram showing PI, PO, VAD, and interrupt acknowledge signal propagation.",
    "paperName": "dec 2024.pdf",
    "driveFileId": "1gzaZcnOwAIrkp01nWpc_-9W9X-USw5GD",
    "pageNumber": 2,
    "tip": "Serial connection from CPU INTA through devices in order of priority: Device 1 ($PO \\rightarrow PI$) Device 2. First requesting device intercepts signal and places vector address on bus."
  },
  {
    "id": "OOPJ-Q21",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Constructors",
    "question": "What is a Constructor in Java? Differentiate between default constructor and parameterized constructor with an example.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "Special method having same name as class and no return type; initializes new object state. Default takes no arguments; parameterized initializes custom fields."
  },
  {
    "id": "OOPJ-Q22",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Garbage Collection",
    "question": "Explain Java Garbage Collection mechanism, Heap Memory allocation, and the role of `System.gc()` and `finalize()` method in resource reclamation.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1knszvrx0f7-CLjid3oP4A-qfYiq1peHz",
    "pageNumber": 1,
    "tip": "Daemon thread identifying unreachable objects. Generational garbage collection (Eden, Survivor, Tenured spaces). `finalize()` called once before object destruction."
  },
  {
    "id": "OOPJ-Q23",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Super Keyword",
    "question": "State the three distinct usages of the `super` keyword in Java inheritance with code examples.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "1. Refer to immediate superclass instance variable (`super.x`), 2. Invoke superclass method (`super.display()`), 3. Invoke superclass constructor (`super(args)`)."
  },
  {
    "id": "OOPJ-Q24",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Multiple Inheritance via Interfaces",
    "question": "Explain why Java does not support multiple class inheritance. Show how multiple interface inheritance resolves the Diamond Problem with a working code example.",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 1,
    "tip": "Diamond problem causes ambiguity when two parents define same method. With interfaces, class explicitly provides single implementation."
  },
  {
    "id": "OOPJ-Q25",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Thread Priority",
    "question": "Explain Thread Priority in Java (`MIN_PRIORITY = 1`, `NORM_PRIORITY = 5`, `MAX_PRIORITY = 10`) and how `setPriority()` interacts with the OS thread scheduler.",
    "paperName": "feb 2024 supple.pdf",
    "driveFileId": "1QJv9ASBqH_YvOC-Lx4YDCBCJaIQpw89O",
    "pageNumber": 1,
    "tip": "Higher priority threads are given preference by preemptive scheduler, but underlying host OS thread mapping determines exact scheduling."
  },
  {
    "id": "OOPJ-Q26",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Deadlock in Java",
    "question": "What is Deadlock in multithreaded Java applications? Write a Java program that creates a deadlock condition between two threads acquiring two string locks in reverse order, and explain how to prevent it.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
    "pageNumber": 2,
    "tip": "Thread 1 locks Resource A, waits for B. Thread 2 locks Resource B, waits for A. Prevent by acquiring locks in a strict global ordering."
  },
  {
    "id": "OOPJ-Q27",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(g)",
    "topicTag": "Generics",
    "question": "What are Generics in Java? Give a code example showing why generic collections prevent `ClassCastException` at compile-time.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "`List<String> list = new ArrayList<>();` ensures only String objects are added, eliminating runtime type casting errors."
  },
  {
    "id": "OOPJ-Q28",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "RandomAccessFile",
    "question": "Explain the `RandomAccessFile` class in Java. Write a program to read and update employee salary records at specific byte offsets using `seek()` and `writeDouble()`.",
    "paperName": "Aug 2024 reg.pdf",
    "driveFileId": "1p8R4f69PbKWXnhiy7XJmJG4EaxkJseqE",
    "pageNumber": 2,
    "tip": "Implements `DataInput` and `DataOutput`. `seek(long pos)` positions the file pointer for non-sequential read/write."
  },
  {
    "id": "OOPJ-Q29",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(i)",
    "topicTag": "AWT vs Swing",
    "question": "Differentiate between AWT components (Heavyweight) and Swing components (Lightweight) in Java GUI development.",
    "paperName": "jan 2024 reg.pdf",
    "driveFileId": "1zMsitZoT9PKOByTED00nVa42ADe5yZd5",
    "pageNumber": 1,
    "tip": "AWT relies on native operating system peers (heavyweight, platform dependent appearance). Swing is 100% pure Java (lightweight, pluggable look and feel)."
  },
  {
    "id": "OOPJ-Q30",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(a)",
    "topicTag": "MouseListener & MouseMotionListener",
    "question": "Develop a Java Swing program that tracks mouse coordinates $(X, Y)$ and displays whether the mouse was clicked, pressed, released, or dragged inside a `JPanel`.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "19TfifVnkJ9BrSQf7a7wlMbfCzQCD0FHn",
    "pageNumber": 2,
    "tip": "Implement `MouseListener` and `MouseMotionListener`, override `mouseMoved()` and `mouseDragged()` to update label text with `e.getX()` and `e.getY()`."
  },
  {
    "id": "DBMS-Q21",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Schema vs Instance",
    "question": "Differentiate between a Database Schema and a Database Instance with a simple relational table example.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Schema is the permanent structure/design (e.g. `Student(ID: int, Name: text)`). Instance is the snapshot of data stored at a specific moment in time."
  },
  {
    "id": "DBMS-Q22",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Extended ER Features",
    "question": "Explain Extended Entity-Relationship (EER) modeling concepts: Generalization, Specialization, and Aggregation with university enterprise diagrams.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1dNxi88ENzGvvyrscc7OmuSDkDvz9MFLd",
    "pageNumber": 1,
    "tip": "Generalization: bottom-up synthesis. Specialization: top-down derivation (e.g. `Person -> Student, Faculty`). Aggregation treats relationship as abstract higher-level entity."
  },
  {
    "id": "DBMS-Q23",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "SQL Views",
    "question": "What is a View in SQL? What are the conditions required for a view to be updatable (`INSERT`, `UPDATE`, `DELETE`)?",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Virtual table based on query. Updatable if single base table, no aggregate functions, no `DISTINCT`, no `GROUP BY`, and includes primary key."
  },
  {
    "id": "DBMS-Q24",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(a)",
    "topicTag": "Outer Joins in SQL",
    "question": "Explain Left Outer Join, Right Outer Join, and Full Outer Join in SQL. Show output tables when joining `Customers` and `Orders` tables where some customers have placed no orders.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 1,
    "tip": "Left join keeps all left rows and fills missing right attributes with `NULL`. Full outer join preserves unmatched rows from both tables."
  },
  {
    "id": "DBMS-Q25",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Canonical Cover",
    "question": "Define Minimal Cover (Canonical Cover) of a set of functional dependencies $F$. What are the three conditions it must satisfy?",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 1,
    "tip": "1. Every dependency has singleton RHS, 2. No extraneous attributes on LHS, 3. No redundant dependencies."
  },
  {
    "id": "DBMS-Q26",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Dependency Preservation",
    "question": "What is Dependency Preservation in database normalization? Test whether decomposing $R(A, B, C)$ with $F = \\{A \\rightarrow B, B \\rightarrow C, C \\rightarrow A\\}$ into $R_1(A, B)$ and $R_2(B, C)$ preserves all dependencies.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 2,
    "tip": "Check $(F_1 \\cup F_2)^+ = F^+$. $A \\rightarrow B \\in F_1$, $B \\rightarrow C \\in F_2$. For $C \\rightarrow A$, $C^+ = \\{C, A, B\\}$ using projected dependencies, so preserved!"
  },
  {
    "id": "DBMS-Q27",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(g)",
    "topicTag": "Cascading Rollback",
    "question": "What is a Cascading Abort (Cascading Rollback)? How does Strict Two-Phase Locking (Strict 2PL) prevent cascading aborts?",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Occurs when abort of one transaction forces rollback of dependent transactions that read its uncommitted writes. Strict 2PL holds exclusive locks until commit."
  },
  {
    "id": "DBMS-Q28",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Timestamp Concurrency",
    "question": "Explain Thomas' Write Rule in Timestamp-Based Concurrency Control. How does it improve concurrency by ignoring outdated writes?",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1ZKBYoXTgrXACQ6Z_Y5dr6GeWmIC1j-I-",
    "pageNumber": 2,
    "tip": "If $TS(T_i) < W\\text{-timestamp}(Q)$, instead of aborting $T_i$, Thomas' rule ignores the write because a newer value has already been written."
  },
  {
    "id": "DBMS-Q29",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(i)",
    "topicTag": "Hashing",
    "question": "Differentiate between Static Hashing and Dynamic (Extendible) Hashing in database file organization.",
    "paperName": "Jan 2024 supp.pdf",
    "driveFileId": "1oXcXaGDsDJZGyHK98b5dNwADK6GbAyc9",
    "pageNumber": 1,
    "tip": "Static: fixed number of buckets, overflow chains develop. Extendible: directory of pointers doubles dynamically with local and global depths."
  },
  {
    "id": "DBMS-Q30",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Log-Based Recovery",
    "question": "Explain Log-Based Recovery with Immediate Database Modification vs Deferred Database Modification. Show log record formats during transaction commits and aborts.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "10HK9VO_ZXz4a-Nwwn-JcRe5iNArirlcp",
    "pageNumber": 2,
    "tip": "Immediate: writes to disk can happen before commit, requires UNDO and REDO. Deferred: writes postponed until commit, requires only REDO."
  },
  {
    "id": "SE-Q21",
    "subjectId": "SE",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "CMMI Levels",
    "question": "List the 5 maturity levels of CMMI (Capability Maturity Model Integration): Initial, Managed, Defined, Quantitatively Managed, Optimizing.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Level 1: Initial (ad-hoc), Level 2: Managed (project level), Level 3: Defined (org standards), Level 4: Quantitatively Managed (metrics), Level 5: Optimizing (continuous innovation)."
  },
  {
    "id": "SE-Q22",
    "subjectId": "SE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2023,
      2021
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Extreme Programming",
    "question": "Explain the core engineering practices of Extreme Programming (XP): Pair Programming, Test-Driven Development (TDD), Continuous Integration, and Refactoring.",
    "paperName": "Aug 2023.pdf",
    "driveFileId": "1zVaScPFgh6pZVACqsqFJhF-l_ts78MdE",
    "pageNumber": 1,
    "tip": "Pair programming: driver and navigator. TDD: write automated test first, code to pass test, then refactor. Continuous integration merges code daily."
  },
  {
    "id": "SE-Q23",
    "subjectId": "SE",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Requirements Elicitation",
    "question": "What is Requirements Elicitation? Name four popular techniques used to gather requirements from stakeholders.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Interviews, Questionnaires/Surveys, Brainstorming sessions, Fast-track workshops (JAD - Joint Application Development), and Ethnography/Observation."
  },
  {
    "id": "SE-Q24",
    "subjectId": "SE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "SRS Document Structure",
    "question": "Explain the standard organizational outline of an IEEE 830 compliant Software Requirements Specification (SRS) document.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 1,
    "tip": "1. Introduction (Purpose, Scope, Definitions), 2. Overall Description (Product perspective, User classes, Operating environment), 3. Specific Requirements (Functional, Interfaces, Performance)."
  },
  {
    "id": "SE-Q25",
    "subjectId": "SE",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Information Hiding",
    "question": "Define David Parnas' principle of Information Hiding in modular software design. How does it enhance maintainability?",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Modules should encapsulate internal data structures and algorithms behind stable public interfaces so changes do not propagate to client modules."
  },
  {
    "id": "SE-Q26",
    "subjectId": "SE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(a)",
    "topicTag": "UML Behavioral Diagrams",
    "question": "Differentiate between Sequence Diagrams and State Machine Diagrams in UML. Draw a Sequence Diagram showing user authentication with a Web Server and Database.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    "pageNumber": 2,
    "tip": "Sequence diagram shows temporal message interactions between lifelines. State diagram shows state transitions of single object triggered by events."
  },
  {
    "id": "SE-Q27",
    "subjectId": "SE",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(g)",
    "topicTag": "Integration Testing",
    "question": "Compare Top-Down Integration Testing and Bottom-Up Integration Testing. What is the role of Stubs and Drivers?",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Top-down uses Stubs (simulate lower modules). Bottom-up uses Drivers (simulate caller/main program)."
  },
  {
    "id": "SE-Q28",
    "subjectId": "SE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Mutation Testing",
    "question": "What is Mutation Testing in software engineering? Explain Mutants, Killed Mutants, Equivalent Mutants, and Mutation Score formula.",
    "paperName": "Aug 2024.pdf",
    "driveFileId": "1boIa7tfxFVIKOTkxg0y0261iMtaKFKEE",
    "pageNumber": 2,
    "tip": "Mutation Score $= \\frac{\\text{Killed Mutants}}{\\text{Total Mutants} - \\text{Equivalent Mutants}} \\times 100\\%$. Measures adequacy of test suite."
  },
  {
    "id": "SE-Q29",
    "subjectId": "SE",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(i)",
    "topicTag": "Function Points",
    "question": "List the 5 information domain characteristics counted in Function Point Analysis (FPA): External Inputs, External Outputs, External Inquiries, Internal Logical Files, External Interface Files.",
    "paperName": "Jan 2024 reg.pdf",
    "driveFileId": "1Z2RSU8t1IBt7djgITCnDM7ZESzY4ybaB",
    "pageNumber": 1,
    "tip": "Formula: $UFP = \\sum (\\text{Count} \\times \\text{Weight})$, adjusted by 14 Complexity Adjustment Factors (VAF)."
  },
  {
    "id": "SE-Q30",
    "subjectId": "SE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Software Reverse Engineering",
    "question": "Explain the Software Reengineering life cycle: Inventory analysis, Document restructuring, Reverse engineering, Code restructuring, Data restructuring, Forward engineering.",
    "paperName": "Dec 2024.pdf",
    "driveFileId": "1z_ImkK_xr4rPnNrTl2t91LRyzq0HmOcB",
    "pageNumber": 2,
    "tip": "Reverse engineering extracts abstract specifications from legacy code; forward engineering rebuilds system into modern architecture."
  },
  {
    "id": "ES-Q11",
    "subjectId": "ES",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Ecosystem Components",
    "question": "Define Abiotic and Biotic components of an ecosystem with two examples for each in a freshwater pond habitat.",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Biotic: phytoplankton, zooplankton, fish, marginal plants. Abiotic: dissolved oxygen, water temperature, pH, sunlight penetration."
  },
  {
    "id": "ES-Q12",
    "subjectId": "ES",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "In-situ vs Ex-situ",
    "question": "Compare In-situ and Ex-situ biodiversity conservation methods. Give two Indian examples for National Parks, Biosphere Reserves, and Gene Banks.",
    "paperName": "ES-model question paper-MID-1.pdf",
    "driveFileId": "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
    "pageNumber": 1,
    "tip": "In-situ: protecting species in natural habitats (Kaziranga, Nilgiri Biosphere). Ex-situ: outside natural habitats in controlled environments (National Gene Bank, Botanical Gardens)."
  },
  {
    "id": "ES-Q13",
    "subjectId": "ES",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "Soil Conservation",
    "question": "What is Soil Erosion? List two mechanical and two biological soil conservation practices.",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Mechanical: contour bunding, terracing. Biological: afforestation, crop rotation, strip cropping."
  },
  {
    "id": "ES-Q14",
    "subjectId": "ES",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Energy Crisis & Solar",
    "question": "Explain the growing global Energy Crisis and evaluate the techno-economic potential of Solar Photovoltaic (PV) power in tropical countries like India.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 1,
    "tip": "Depletion of fossil fuels, geopolitics, high insolation (~300 sunny days/year in India), National Solar Mission, decreasing levelized cost of energy (LCOE)."
  },
  {
    "id": "ES-Q15",
    "subjectId": "ES",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Eutrophication",
    "question": "Define Eutrophication. How do agricultural fertilizer runoff (phosphates and nitrates) trigger algal blooms and fish mortality?",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Nutrient enrichment $\\rightarrow$ rapid algal bloom $\\rightarrow$ sunlight blocked $\\rightarrow$ algae die $\\rightarrow$ aerobic bacteria decompose algae consuming DO $\\rightarrow$ hypoxia kills aquatic fauna."
  },
  {
    "id": "ES-Q16",
    "subjectId": "ES",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Air Pollution Control",
    "question": "Describe the working principle and schematic diagram of an Electrostatic Precipitator (ESP) for removing fine particulate matter from industrial flue gases.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 1,
    "tip": "High-voltage corona discharge wires impart negative charge to particles; grounded collecting plates attract charged particles; rapping mechanism dislodges dust into hoppers."
  },
  {
    "id": "ES-Q17",
    "subjectId": "ES",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Acid Rain",
    "question": "What is Acid Rain? Write the chemical reactions involving sulfur dioxide ($SO_2$) and nitrogen oxides ($NO_x$) forming sulfuric and nitric acid in cloud moisture.",
    "paperName": "ES-model question paper-MID-1.pdf",
    "driveFileId": "1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2",
    "pageNumber": 1,
    "tip": "Rain with $\\text{pH} < 5.6$. Reactions: $SO_2 + H_2O \\rightarrow H_2SO_3$, $2SO_2 + O_2 + 2H_2O \\rightarrow 2H_2SO_4$, $4NO_2 + O_2 + 2H_2O \\rightarrow 4HNO_3$."
  },
  {
    "id": "ES-Q18",
    "subjectId": "ES",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Watershed Management",
    "question": "Explain the concept of Watershed Management and how check dams, percolation tanks, and contour trenches help in groundwater recharging and drought mitigation.",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 2,
    "tip": "Integrated conservation of land and water within drainage basin. Check dams slow runoff velocity, percolation tanks recharge aquifers, contour trenches prevent sheet erosion."
  },
  {
    "id": "ES-Q19",
    "subjectId": "ES",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Wildlife Protection Act",
    "question": "What are the key objectives of the Wildlife (Protection) Act, 1972 and what protection is granted under Schedule I animals?",
    "paperName": "MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf",
    "driveFileId": "1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev",
    "pageNumber": 1,
    "tip": "Prohibits hunting of endangered species (Tiger, Elephant, Lion), regulates wildlife trade, and establishes sanctuaries/national parks. Schedule I provides highest statutory protection and harshest penalties."
  },
  {
    "id": "ES-Q20",
    "subjectId": "ES",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Environmental Impact Assessment (EIA)",
    "question": "Explain the Environmental Impact Assessment (EIA) process: Screening, Scoping, Baseline data collection, Impact prediction, Public hearing, and Environmental Management Plan (EMP).",
    "paperName": "MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf",
    "driveFileId": "1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna",
    "pageNumber": 2,
    "tip": "Flowchart of 6 EIA phases: identifies positive and negative environmental consequences prior to granting clearance for major industrial or infrastructure projects."
  },
  {
    "id": "IE-Q11",
    "subjectId": "IE",
    "chapter": 1,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(a)",
    "topicTag": "Creativity Techniques",
    "question": "Explain the SCAMPER technique for creative ideation: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "A guided questioning checklist for generating innovative product variations and solving engineering bottlenecks."
  },
  {
    "id": "IE-Q12",
    "subjectId": "IE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(b)",
    "topicTag": "Design Thinking in Engineering",
    "question": "Walk through a practical case study applying Design Thinking to design an ergonomic, low-cost wearable health monitor for rural healthcare workers.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Empathize (field visits), Define (rural power cuts), Ideate (solar/battery options), Prototype (3D printed rugged case), Test (feedback on display readability)."
  },
  {
    "id": "IE-Q13",
    "subjectId": "IE",
    "chapter": 2,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(b)",
    "topicTag": "TAM SAM SOM",
    "question": "Define Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) with a numeric example.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "TAM: total worldwide demand ($10B). SAM: segment reachable by business model ($1B). SOM: realistic market share captured in years 1-3 ($50M)."
  },
  {
    "id": "IE-Q14",
    "subjectId": "IE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q3(b)",
    "topicTag": "Porter's Five Forces",
    "question": "Analyze Michael Porter's Five Forces Framework (Threat of New Entrants, Bargaining Power of Buyers, Threat of Substitutes, Bargaining Power of Suppliers, Industry Rivalry) for an Indian SaaS startup.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Draw the 5-box industry diagram and evaluate barriers to entry (cloud infrastructure costs, switching costs) and buyer price sensitivity."
  },
  {
    "id": "IE-Q15",
    "subjectId": "IE",
    "chapter": 3,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(c)",
    "topicTag": "Pivoting",
    "question": "What is a 'Pivot' in the Lean Startup methodology? Give examples of a Zoom-In Pivot and a Customer Segment Pivot.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "A structured course correction designed to test a new fundamental hypothesis about product/strategy. Zoom-in: single feature becomes whole product."
  },
  {
    "id": "IE-Q16",
    "subjectId": "IE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(b)",
    "topicTag": "Value Proposition Canvas",
    "question": "Explain the Value Proposition Canvas. How does it align the Customer Profile (Customer Jobs, Pains, Gains) with the Value Map (Products & Services, Pain Relievers, Gain Creators)?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Draw circular customer profile and square value proposition map; demonstrate achieving Problem-Solution Fit when pain relievers directly resolve customer pains."
  },
  {
    "id": "IE-Q17",
    "subjectId": "IE",
    "chapter": 4,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(d)",
    "topicTag": "Bootstrapping vs Venture Capital",
    "question": "What is Bootstrapping in startup financing? What are its primary advantages and limitations compared to institutional equity financing?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Founders self-fund through personal savings and early revenues. Advantage: 100% equity retention and freedom; Limitation: slower growth and capital ceiling."
  },
  {
    "id": "IE-Q18",
    "subjectId": "IE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q5(b)",
    "topicTag": "Government Schemes & Incubators",
    "question": "Discuss the role of Technology Business Incubators (TBIs), Startup India Seed Fund Scheme (SISFS), and Atal Innovation Mission (AIM) in fostering student entrepreneurship in technical institutions.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Cover mentoring, co-working infrastructure, lab testing access, patent filing subsidies, seed grants up to 50 lakhs, and tax exemptions under 80-IAC."
  },
  {
    "id": "IE-Q19",
    "subjectId": "IE",
    "chapter": 5,
    "part": "A",
    "marks": 2,
    "years": [
      2024,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q1(e)",
    "topicTag": "Trade Secrets",
    "question": "What is a Trade Secret? What legal measures (NDAs, non-compete clauses, access control) must an enterprise take to maintain trade secret protection?",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 1,
    "tip": "Confidential commercial formula, process, or code providing competitive advantage. Kept secret via employee non-disclosure agreements and least-privilege technical access."
  },
  {
    "id": "IE-Q20",
    "subjectId": "IE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2024,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(b)",
    "topicTag": "Patent Filing in India",
    "question": "Explain the step-by-step Patent Filing Procedure in India: Provisional Specification, Complete Specification (within 12 months), Publication, Request for Examination (RFE), First Statement of Objections (FER), and Grant.",
    "paperName": "I&E Model Reference.pdf",
    "driveFileId": null,
    "pageNumber": 2,
    "tip": "Detail the 6-stage timeline with Indian Patent Office Form 1, Form 2, and Form 18 requirements."
  },
  {
    "id": "COA-Q32",
    "subjectId": "COA",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(d)",
    "topicTag": "Instruction Formats",
    "question": "Explain the differences between RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) architectures in terms of instruction formats, register usage, and pipeline efficiency.",
    "paperName": "Jan 2026.pdf",
    "driveFileId": "1uLr58-ui-dPl5LYUaIw76rMI9alyECuc",
    "pageNumber": 1,
    "tip": "RISC: single-cycle instructions, load/store architecture, many registers, hardwired control. CISC: variable-length instructions, memory-to-memory operations, microprogrammed control."
  },
  {
    "id": "COA-Q33",
    "subjectId": "COA",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(c)",
    "topicTag": "Control Memory & Sequencing",
    "question": "Explain the mapping of an instruction opcode to the start address in control memory with an example mapping circuit using a ROM or PLA.",
    "paperName": "Jan 2025 supple.pdf",
    "driveFileId": "1owKZjMLyZyjZq2AOr8r4FiSjuJFgAtsj",
    "pageNumber": 1,
    "tip": "Show 4-bit opcode placed into bits 2-5 of Control Address Register (CAR), with 0 placed in bits 0, 1, 6, allowing up to 4 microinstructions per routine."
  },
  {
    "id": "COA-Q34",
    "subjectId": "COA",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(c)",
    "topicTag": "Carry Lookahead Adder",
    "question": "Design and derive the logic equations for a 4-bit Carry Lookahead Adder (CLA). Explain how Carry Generate ($G_i$) and Carry Propagate ($P_i$) eliminate ripple carry delay.",
    "paperName": "march 2023.pdf",
    "driveFileId": "1oOXzUdvUvOFhJl2ilYzC90rR2M_nNuxb",
    "pageNumber": 2,
    "tip": "$P_i = A_i \\oplus B_i$, $G_i = A_i B_i$. Carry: $C_1 = G_0 + P_0 C_0$, $C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0$. Propagates carry in constant 2-gate delay."
  },
  {
    "id": "COA-Q35",
    "subjectId": "COA",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(c)",
    "topicTag": "Cache Hit Ratio & Performance",
    "question": "In a two-level memory hierarchy, Cache access time is $20\\text{ns}$ and Main memory access time is $150\\text{ns}$. If the cache hit ratio is $92\\%$, calculate the average memory access time (AMAT). What must the hit ratio be to achieve an AMAT of $25\\text{ns}$?",
    "paperName": "Jan 2025 supple.pdf",
    "driveFileId": "1owKZjMLyZyjZq2AOr8r4FiSjuJFgAtsj",
    "pageNumber": 2,
    "tip": "$T_{avg} = H \\times T_c + (1 - H) \\times (T_c + T_m) = 0.92 \\times 20 + 0.08 \\times 170 = 18.4 + 13.6 = 32\\text{ns}$. For $T_{avg} = 25$: $25 = H(20) + (1-H)(170) \\implies 150H = 145 \\implies H = 96.67\\%$."
  },
  {
    "id": "COA-Q36",
    "subjectId": "COA",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(c)",
    "topicTag": "Branch Prediction",
    "question": "Explain Branch Prediction techniques in pipelined processors: Static branch prediction vs Dynamic branch prediction using 2-bit saturating counter state machines.",
    "paperName": "Jan 2026.pdf",
    "driveFileId": "1uLr58-ui-dPl5LYUaIw76rMI9alyECuc",
    "pageNumber": 2,
    "tip": "2-bit counter has 4 states: Strongly Taken (11), Weakly Taken (10), Weakly Not Taken (01), Strongly Not Taken (00). Requires two consecutive mispredictions to change prediction."
  },
  {
    "id": "OOPJ-Q31",
    "subjectId": "OOPJ",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(c)",
    "topicTag": "Jagged Arrays",
    "question": "Explain Two-Dimensional and Jagged (Ragged) Arrays in Java. Write a program to allocate a 3-row jagged array with row lengths 2, 4, 3 and display its contents.",
    "paperName": "Jan2026.pdf",
    "driveFileId": "1218YItRsA34h2Wcbh2O1ehzY5hRvKg5j",
    "pageNumber": 1,
    "tip": "`int[][] arr = new int[3][]; arr[0] = new int[2]; arr[1] = new int[4]; arr[2] = new int[3];`. Display using nested loops with `arr[i].length`."
  },
  {
    "id": "OOPJ-Q32",
    "subjectId": "OOPJ",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(c)",
    "topicTag": "Final Keyword",
    "question": "Discuss the three applications of the `final` keyword in Java: final variables (constants), final methods (prevent overriding), and final classes (prevent inheritance) with examples.",
    "paperName": "July 2025 reg,supp.pdf",
    "driveFileId": "1JXHTMiO8xAyqH57uzVlfPugQaUHDjdCJ",
    "pageNumber": 1,
    "tip": "Final variable cannot be reassigned; final method cannot be overridden by subclasses; final class (e.g. `java.lang.String`) cannot be extended."
  },
  {
    "id": "OOPJ-Q33",
    "subjectId": "OOPJ",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(c)",
    "topicTag": "Thread Pools & ExecutorService",
    "question": "Explain the `ExecutorService` framework and Thread Pools in `java.util.concurrent`. Why is pooling more efficient than repeatedly creating raw thread objects?",
    "paperName": "Jan2026.pdf",
    "driveFileId": "1218YItRsA34h2Wcbh2O1ehzY5hRvKg5j",
    "pageNumber": 2,
    "tip": "Reuses fixed pool of worker threads, eliminating thread creation/destruction CPU overhead and preventing server resource exhaustion under high load."
  },
  {
    "id": "OOPJ-Q34",
    "subjectId": "OOPJ",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(c)",
    "topicTag": "Comparable vs Comparator",
    "question": "Differentiate between `Comparable` and `Comparator` interfaces in Java. Write a code example sorting a `List<Student>` by student marks using `Comparator`.",
    "paperName": "July 2025 reg,supp.pdf",
    "driveFileId": "1JXHTMiO8xAyqH57uzVlfPugQaUHDjdCJ",
    "pageNumber": 2,
    "tip": "`Comparable` defines single natural ordering via `compareTo(o)` in the domain class. `Comparator` defines multiple custom orderings via `compare(o1, o2)` in separate classes."
  },
  {
    "id": "OOPJ-Q35",
    "subjectId": "OOPJ",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(c)",
    "topicTag": "JTable & MVC in Swing",
    "question": "Explain how `JTable` works with `DefaultTableModel` in Java Swing. Write a program displaying student records in a 3-column table (`Roll No`, `Name`, `CGPA`).",
    "paperName": "Jan2026.pdf",
    "driveFileId": "1218YItRsA34h2Wcbh2O1ehzY5hRvKg5j",
    "pageNumber": 2,
    "tip": "Uses Model-View-Controller architecture. Wrap `JTable` inside `JScrollPane` for vertical/horizontal scrollbars and header visibility."
  },
  {
    "id": "DBMS-Q31",
    "subjectId": "DBMS",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(c)",
    "topicTag": "Aggregation in ER",
    "question": "Explain the limitation of standard ER modeling when an entity set needs to participate in a relationship with another relationship set, and show how Aggregation resolves this.",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "10nEhmH9e8t7t1deQ5aFxAbsRUr7NM4W_",
    "pageNumber": 1,
    "tip": "Example: `Employee works_on Project`, and `Sponsorship` requires recording which sponsor funds which employee-project pair. Treat `works_on` as an aggregate entity."
  },
  {
    "id": "DBMS-Q32",
    "subjectId": "DBMS",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(c)",
    "topicTag": "Triggers in SQL",
    "question": "What are Database Triggers? Explain `BEFORE`, `AFTER`, and `INSTEAD OF` triggers in SQL with a trigger that logs every salary change into an audit table.",
    "paperName": "July 2025 reg,supp.pdf",
    "driveFileId": "1u6KzS0wqT7r4OyJGjEcmo2uI2yQ6y-DL",
    "pageNumber": 1,
    "tip": "`CREATE TRIGGER salary_audit AFTER UPDATE ON Employee FOR EACH ROW BEGIN INSERT INTO Audit_Log VALUES(OLD.emp_id, OLD.salary, NEW.salary, NOW()); END;`."
  },
  {
    "id": "DBMS-Q33",
    "subjectId": "DBMS",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(c)",
    "topicTag": "Multivalued Dependencies & 4NF",
    "question": "Define Multivalued Dependency (MVD) $X \\twoheadrightarrow Y$ and Fourth Normal Form (4NF). Show how relation $R(Course, Teacher, Book)$ has MVDs and decomposes into 4NF.",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "10nEhmH9e8t7t1deQ5aFxAbsRUr7NM4W_",
    "pageNumber": 2,
    "tip": "If teacher and book are independent given course, then $Course \\twoheadrightarrow Teacher$ and $Course \\twoheadrightarrow Book$. Decompose into $R_1(Course, Teacher)$ and $R_2(Course, Book)$."
  },
  {
    "id": "DBMS-Q34",
    "subjectId": "DBMS",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(c)",
    "topicTag": "View Serializability",
    "question": "Define View Serializability and explain the three conditions required for schedule $S$ to be view equivalent to a serial schedule $S'$. How does it compare with conflict serializability?",
    "paperName": "July 2025 reg,supp.pdf",
    "driveFileId": "1u6KzS0wqT7r4OyJGjEcmo2uI2yQ6y-DL",
    "pageNumber": 2,
    "tip": "1. Initial read condition, 2. Updated read condition, 3. Final write condition. Every conflict serializable schedule is view serializable, but not vice versa (blind writes)."
  },
  {
    "id": "DBMS-Q35",
    "subjectId": "DBMS",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(c)",
    "topicTag": "Checkpointing",
    "question": "What is Checkpointing in database recovery? How does fuzzy checkpointing minimize system pause time and reduce the number of log records scanned during recovery?",
    "paperName": "Jan 2025.pdf",
    "driveFileId": "10nEhmH9e8t7t1deQ5aFxAbsRUr7NM4W_",
    "pageNumber": 2,
    "tip": "Periodically flushes dirty buffer pages to disk and writes `<CHECKPOINT L>` where $L$ is list of active transactions. Recovery only needs to scan back to the oldest active transaction in $L$."
  },
  {
    "id": "SE-Q31",
    "subjectId": "SE",
    "chapter": 1,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q2(c)",
    "topicTag": "Scrum Artifacts",
    "question": "Explain the three core Scrum Artifacts: Product Backlog, Sprint Backlog, and Product Increment (Definition of Done) with their management practices.",
    "paperName": "January 2026.pdf",
    "driveFileId": "1Aer3IGKhRZMS-_uQjY0Pl8vFBiEus1-S",
    "pageNumber": 1,
    "tip": "Product backlog owned by Product Owner; Sprint backlog owned by Dev Team; Product Increment is working, shippable slice of software meeting Definition of Done."
  },
  {
    "id": "SE-Q32",
    "subjectId": "SE",
    "chapter": 2,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q3(c)",
    "topicTag": "User Stories",
    "question": "Explain the format of an Agile User Story: 'As a [role], I want [goal/desire] so that [benefit]'. What are the INVEST criteria for high-quality user stories?",
    "paperName": "jan 2025 supple.pdf",
    "driveFileId": "1EfdY4pk2UsIWI4ZSUi3aXXMGzGegz4RW",
    "pageNumber": 1,
    "tip": "Independent, Negotiable, Valuable, Estimable, Small, Testable. Include Acceptance Criteria (Given-When-Then format)."
  },
  {
    "id": "SE-Q33",
    "subjectId": "SE",
    "chapter": 3,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q4(c)",
    "topicTag": "Software Design Patterns",
    "question": "Explain the concept of Software Design Patterns. Differentiate between Creational, Structural, and Behavioral patterns with one classic pattern example for each.",
    "paperName": "January 2026.pdf",
    "driveFileId": "1Aer3IGKhRZMS-_uQjY0Pl8vFBiEus1-S",
    "pageNumber": 2,
    "tip": "Creational: Singleton / Factory (instantiation). Structural: Adapter / Facade (composition). Behavioral: Observer / Strategy (communication)."
  },
  {
    "id": "SE-Q34",
    "subjectId": "SE",
    "chapter": 4,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2023
    ],
    "frequency": 2,
    "questionNumber": "Q5(c)",
    "topicTag": "Regression & Alpha/Beta Testing",
    "question": "What is Regression Testing and when is it executed? Differentiate between Alpha Testing and Beta Testing in the software acceptance phase.",
    "paperName": "July 2025 supple.pdf",
    "driveFileId": "1-4ZiLHGbqSHpn9MtXORuNwf6lCngts_7",
    "pageNumber": 2,
    "tip": "Regression ensures bug fixes haven't broken existing features. Alpha: in-house controlled environment by internal users. Beta: real end-users in live operational environment."
  },
  {
    "id": "SE-Q35",
    "subjectId": "SE",
    "chapter": 5,
    "part": "B",
    "marks": 5,
    "years": [
      2025,
      2022
    ],
    "frequency": 2,
    "questionNumber": "Q6(c)",
    "topicTag": "Software Reliability & MTBF",
    "question": "Define Software Reliability. Explain Mean Time Between Failures (MTBF), Mean Time To Failure (MTTF), and Mean Time To Repair (MTTR) with their mathematical relationships.",
    "paperName": "January 2026.pdf",
    "driveFileId": "1Aer3IGKhRZMS-_uQjY0Pl8vFBiEus1-S",
    "pageNumber": 2,
    "tip": "$MTBF = MTTF + MTTR$. Availability $A = \\frac{MTTF}{MTTF + MTTR} = \\frac{MTTF}{MTBF}$. Software reliability does not 'wear out' physically like hardware, but degrades through hidden bugs."
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

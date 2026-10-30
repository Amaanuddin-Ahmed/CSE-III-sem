# PYQ_PATTERNS — what the papers actually ask (Phase 2)

Source: `pyq-data.js` (2,288 parsed questions from 78 paper files, 2023–2026),
mapped by `tools/verify/mine_pyqs.js` against `syllabus_map.json`. This file is a
reading aid, not a prediction. Counts describe the parsed corpus only.

## 1. How to read the numbers

- **Priority score** (from the brief): `S = 3 × distinct years + 2 × semester-end
  appearances + 1 × mid-term appearances`. Tier A ≥ 9, B = 5–8, C = 1–4, D = 0.
- A question can map to two topics in the same unit when it has two parts.
- Duplicate paper uploads are collapsed by session label, so a question repeated in
  a regular and a supplementary paper is counted once per session, not per PDF.
- `outOfScope` marks questions whose wording belongs to the **pre-MR25** unit map
  (COA pipelining/multiprocessors, DM probability/Bayes, OOPJ JDBC/generics/
  serialization/annotations/applets). They are kept in the corpus but excluded from
  topic scores; see `REVIEW_QUEUE.md`.
- `unmapped` means the keyword pass and the alias table both missed it. It is a
  classifier gap, not proof that the topic is outside the syllabus.

## 2. Corpus composition

| Subject | Questions | Mapped | Out of MR25 scope | Unclassified | Part A | Part B | 1 mk | 2 mk | 5 mk | 10 mk | Mid papers |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| DM | 471 | 394 | 22 | 55 | 159 | 312 | 50 | 109 | 311 | 1 | 0 |
| COA | 477 | 377 | 74 | 26 | 163 | 314 | 39 | 124 | 307 | 7 | 0 |
| OOPJ | 574 | 504 | 48 | 22 | 191 | 383 | 96 | 95 | 381 | 2 | 0 |
| DBMS | 363 | 332 | 0 | 31 | 125 | 238 | 39 | 86 | 230 | 8 | 0 |
| SE | 379 | 351 | 0 | 28 | 124 | 255 | 68 | 56 | 252 | 3 | 0 |
| ES | 24 | 22 | 0 | 2 | 0 | 24 | 0 | 12 | 0 | 0 | 24 |
| IE | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **2,288** | **1,980** | **144** | **164** | **762** | **1,526** | **292** | **482** | **1,481** | **21** | **24** |

What the shape says:

- Part A is 1–2 marks and asks for a definition, a labelled diagram, a list or a
  one-line distinction. Part B is 5 marks (occasionally 10) and asks for an
  explanation with diagram/example, a comparison table, a program, or a worked
  numerical answer. The deck mirrors that split.
- 5-mark questions dominate every subject. A card that cannot be answered in the
  time a 5-mark answer allows is too long for the deck.
- ES has only the 24-question Mid-1 model paper; IE has none. Their decks are
  textbook/blueprint-derived, and that is stated in `coverage_matrix.csv`.

## 3. Highest-scoring topics per subject

Only Tier A topics are listed. `n` is the number of mapped questions, `S` the
priority score, `yrs` the distinct academic years seen.

### DM (43 topics, 35 Tier A)

| Topic | n | S | yrs |
|---|---:|---:|---|
| DM.U2.T03 Relations and their properties | 51 | 114 | 2023–2026 |
| DM.U5.T01 Basic concepts, degree and handshaking | 29 | 70 | 2023–2026 |
| DM.U4.T02 Permutations | 25 | 62 | 2023–2026 |
| DM.U1.T02 Truth tables, tautology, contradiction, contingency | 24 | 60 | 2023–2026 |
| DM.U1.T05 Theory of inference for statement calculus | 22 | 56 | 2023–2026 |
| DM.U2.T05 Partial ordering, Hasse diagrams and POSets | 20 | 52 | 2023–2026 |
| DM.U2.T01 Basic concepts of set theory | 20 | 49 | 2024–2026 |
| DM.U4.T06 Binomial coefficient and binomial theorem | 17 | 46 | 2023–2026 |
| DM.U1.T01 Statements, notation and connectives | 15 | 42 | 2023–2026 |
| DM.U1.T03 Logical equivalence and laws | 15 | 42 | 2023–2026 |
| DM.U2.T06 Functions: injective, surjective, bijective | 14 | 40 | 2023–2026 |
| DM.U4.T10 Recurrence relations and generating functions | 14 | 40 | 2023–2026 |

Pattern: relations (properties, closure, Warshall) and graph basics are the two
largest blocks. Logic is asked every year in both parts: truth tables and PDNF/PCNF
in Part A, validity of arguments in Part B. Counting questions are almost always
word problems (letters, seating, distributions), not formula recitals. Recurrence
relations are a PYQ-driven extension: the unit text does not name them, but they
appear in all four years and in the course objectives.

### COA (51 topics, 37 Tier A)

| Topic | n | S | yrs |
|---|---:|---:|---|
| COA.U1.T07 Block diagram; organization, architecture and design | 34 | 80 | 2023–2026 |
| COA.U4.T01 Control memory, control word and microinstruction | 28 | 68 | 2023–2026 |
| COA.U4.T06 Addressing modes | 24 | 60 | 2023–2026 |
| COA.U4.T07 Data transfer, manipulation and program control | 24 | 60 | 2023–2026 |
| COA.U3.T02 Bus and memory transfers | 19 | 50 | 2023–2026 |
| COA.U1.T06 Floating-point representation (IEEE 754) | 18 | 48 | 2023–2026 |
| COA.U5.T06 Memory hierarchy | 17 | 46 | 2023–2026 |
| COA.U3.T11 Input-output and interrupt | 16 | 44 | 2023–2026 |
| COA.U1.T05 Fixed-point representation and range | 15 | 42 | 2023–2026 |
| COA.U3.T09 Instruction cycle | 13 | 38 | 2023–2026 |
| COA.U4.T05 Instruction formats | 13 | 38 | 2023–2026 |
| COA.U4.T02 Address sequencing | 13 | 35 | 2024–2026 |

Pattern: the hardwired-vs-microprogrammed comparison is the single most repeated
question in the corpus (14 near-duplicate stems across 2024–2026), followed by
floating-point addition/subtraction steps and cache mapping. Addressing modes,
instruction formats and the instruction cycle are asked as both Part A definitions
and Part B explanations. Numeric work is predictable: fixed/floating conversion,
Booth multiplication, restoring division, effective-address calculation.

### OOPJ (41 topics, 33 Tier A)

| Topic | n | S | yrs |
|---|---:|---:|---|
| OOPJ.U1.T05 Classes, objects, constructors, methods, access control, this | 73 | 158 | 2023–2026 |
| OOPJ.U1.T04 Operators, expressions, control statements, casting | 38 | 88 | 2023–2026 |
| OOPJ.U4.T03 Exploring java.util | 38 | 88 | 2023–2026 |
| OOPJ.U1.T01 Need for OOP, OOP concepts and abstraction | 37 | 86 | 2023–2026 |
| OOPJ.U3.T06 Multithreading vs multitasking | 31 | 74 | 2023–2026 |
| OOPJ.U5.T01 Swing introduction, AWT limitations and MVC | 30 | 72 | 2023–2026 |
| OOPJ.U2.T06 Packages, CLASSPATH and importing | 28 | 68 | 2023–2026 |
| OOPJ.U4.T05 Events, sources, classes, listeners and delegation model | 25 | 62 | 2023–2026 |
| OOPJ.U3.T01 Exception concepts, benefits, termination/resumptive models | 23 | 58 | 2023–2026 |
| OOPJ.U2.T07 Classes vs interfaces, defining and extending interfaces | 22 | 56 | 2023–2026 |
| OOPJ.U4.T08 Layout managers | 22 | 53 | 2024–2026 |
| OOPJ.U3.T03 try, catch, throw, throws and finally | 19 | 47 | 2024–2026 |

Pattern: OOPJ is the most program-heavy paper. Part B repeatedly asks for a small
Java program (calculator, matrix transpose, file copy, two threads, event handling,
menu bar). Theory repeats are stable: OOP buzzwords, overloading vs overriding,
abstract class vs interface, thread vs process, applet vs application (pre-MR25
wording), exception models, delegation event model. Generics, JDBC, serialization
and annotations appear in papers but are not named in the MR25 unit text; they are
counted as out of scope.

### DBMS (48 topics, 38 Tier A)

| Topic | n | S | yrs |
|---|---:|---:|---|
| DBMS.U3.T03 Nested queries | 32 | 76 | 2023–2026 |
| DBMS.U1.T01 Applications, historical perspective, file systems vs DBMS | 27 | 66 | 2023–2026 |
| DBMS.U2.T01 Relational model terms | 24 | 60 | 2023–2026 |
| DBMS.U1.T04 ER model: entities, attributes and entity sets | 23 | 58 | 2023–2026 |
| DBMS.U5.T03 Clustered, primary and secondary indexes | 23 | 58 | 2023–2026 |
| DBMS.U4.T09 Multiple granularity | 21 | 54 | 2023–2026 |
| DBMS.U5.T06 Tree-based indexing and ISAM | 19 | 50 | 2023–2026 |
| DBMS.U2.T05 Relational algebra | 16 | 44 | 2023–2026 |
| DBMS.U4.T01 Transaction concept and state | 15 | 42 | 2023–2026 |
| DBMS.U1.T02 Data model, levels of abstraction and data independence | 14 | 40 | 2023–2026 |
| DBMS.U2.T02 Integrity constraints and enforcement | 11 | 34 | 2023–2026 |
| DBMS.U5.T05 Hash-based indexing | 11 | 34 | 2023–2026 |

Pattern: SQL is the largest block and is almost always a **given schema** — write
queries, create a view, add a constraint, or write a trigger. Relational algebra,
ER design and normalization are the recurring theory. Concurrency (2PL, timestamp,
multiple granularity) and recovery (log-based) are asked as 5-mark explanations.
Numerical work is decomposition checking (lossless join, dependency preservation)
and index/B+ tree arithmetic.

### SE (39 topics, 35 Tier A)

| Topic | n | S | yrs |
|---|---:|---:|---|
| SE.U1.T01 Evolving role and changing nature of software; software myths | 29 | 70 | 2023–2026 |
| SE.U1.T04 Waterfall, spiral, incremental, concurrent, component-based | 26 | 64 | 2023–2026 |
| SE.U5.T04 Quality concepts and software quality assurance | 21 | 54 | 2023–2026 |
| SE.U2.T01 Functional and non-functional requirements | 18 | 48 | 2023–2026 |
| SE.U3.T03 The design model | 16 | 44 | 2023–2026 |
| SE.U4.T06 Software measurement and metrics | 15 | 42 | 2023–2026 |
| SE.U3.T06 UML conceptual model and basic structural modeling | 14 | 40 | 2023–2026 |
| SE.U4.T01 Strategic approach and testing for conventional software | 15 | 39 | 2024–2026 |
| SE.U5.T01 Reactive vs proactive risk strategies; software risks | 15 | 39 | 2024–2026 |
| SE.U4.T02 Black-box testing | 13 | 38 | 2023–2026 |
| SE.U2.T02 User and system requirements; interface specification | 14 | 37 | 2024–2026 |
| SE.U2.T05 Requirements elicitation and analysis | 12 | 36 | 2023–2026 |

Pattern: black-box testing / boundary value analysis is the most repeated SE stem
(15 near-duplicates). Process models are usually “choose a model for this scenario
and justify it”, not “list the phases”. Requirements and risk are asked as
scenario questions. UML is diagram-based: identify the diagram, draw it, or explain
what it models. Metrics questions expect a formula (FP, DRE) or a metric category.

### ES (24 topics, 0 Tier A, 11 Tier B)

No ES topic reaches Tier A because the only ES source is one 24-question Mid-1
model paper. The best-supported topics are biodiversity levels, dam benefits and
problems, food chains/webs, energy flow, and resource classification. There are no
semester-end ES papers in the repository, so the ES deck is deliberately
blueprint-led and every card carries a textbook source rather than a fake PYQ tag.

### IE (33 topics, 0 Tier A/B)

There are no I&E PYQs. The IE deck is entirely syllabus/textbook-derived. This is
recorded in `coverage_matrix.csv` and `REVIEW_QUEUE.md`; no year or frequency is
attached to any IE card.

## 4. Near-duplicate clusters (approximate)

Clustering uses content-token Jaccard ≥ 0.6 after removing exam boilerplate; it is
a reading aid, not a claim that the papers are identical. Full output:
`content-audit/pattern_clusters.json`.

| Subject | Repeat | Years | Representative stem |
|---|---:|---|---|
| COA | 14 | 2024–2026 | Compare hardwired control with microprogrammed control; can a hardwired unit be associated with a control memory? |
| COA | 7 | 2023–2026 | Steps in floating-point addition/subtraction, with flowchart |
| COA | 5 | 2024–2026 | Cache mapping techniques and their relative merits |
| COA | 4 | 2023–2025 | Direct vs indirect addressing; explain addressing modes |
| COA | 4 | 2023, 2024, 2026 | Compare RISC and CISC |
| DM | 7 | 2024–2026 | Kruskal and Prim on a weighted graph |
| DM | 3 | 2023, 2025, 2026 | Prove logical equivalence without a truth table |
| DM | 3 | 2023, 2024, 2026 | Eulerian vs Hamiltonian graph with examples |
| DM | 3 | 2023, 2024 | Obtain PDNF without a truth table |
| DM | 3 | 2025, 2026 | Predicate, free and bound variables |
| OOPJ | 7 | 2023–2026 | Termination vs resumptive exception models; write a program |
| OOPJ | 7 | 2023, 2024, 2026 | Java UI with labels, buttons and text components |
| OOPJ | 6 | 2024, 2025 | Thread vs process multitasking |
| OOPJ | 6 | 2025, 2026 | Mouse and keyboard handling with adapter classes |
| OOPJ | 5 | 2024–2026 | Abstract class vs interface |
| DBMS | 4 | 2023–2025 | Fundamental relational algebra operations with examples |
| DBMS | 3 | 2023 | Query set on Employee/Works/Project relations |
| SE | 15 | 2023–2026 | Black-box testing and boundary value analysis |
| SE | 6 | 2023–2026 | Metrics for design quality |
| SE | 6 | 2024–2026 | Umbrella activities |
| SE | 5 | 2024–2026 | Reactive vs proactive risk management |
| ES | 2 | 2023 | Benefits and problems of big dams |
| ES | 2 | 2023 | Genetic, species and ecosystem biodiversity |

## 5. Answer skeletons by mark band

These are the shapes the papers reward, inferred from the parsed stems and the
mark allocation. They drive the `Answer-skeleton` and `Procedure` cards.

**1–2 marks (Part A)** — one idea, one line, no preamble.
- Definition: term → genus → differentia → one example.
- List: exactly the number asked for; no explanation unless asked.
- Diagram: labelled block diagram, 4–8 labels, one-line caption.
- Distinction: two rows of a table, one axis of contrast.

**5 marks (Part B)** — one concept, one diagram/example, one limitation.
- Explanation: definition → working/mechanism (3–5 steps) → diagram → one example
  → one advantage/limitation.
- Comparison: 4–6 rows, both directions, one concluding sentence.
- Program: problem statement → class/method outline → key lines → expected output;
  no full boilerplate unless the question asks for a complete program.
- Numerical: formula → substitution → intermediate values → result with unit →
  one sanity check.

**10 marks (rare)** — two 5-mark halves or one design question.
- Design: requirements → assumptions → block/ER/class diagram → walkthrough →
  trade-off. Split the answer into labelled parts; examiners award per part.

## 6. Out-of-scope and unclassified questions

The `outOfScope` flag is applied by regex in `tools/verify/mine_pyqs.js` and is
reviewed in `REVIEW_QUEUE.md`. Current counts:

| Subject | Out of scope | Why |
|---|---:|---|
| COA | 74 | Pipelining, vector/array processors, multiprocessors, interconnection networks, arbitration — named in the Course Objectives, not in the Unit V text |
| DM | 22 | Probability, Bayes theorem, random variables, dice/cards — not in the DM unit text (probability belongs to MA401BS) |
| OOPJ | 48 | JDBC, servlets, generics, serialization, annotations, autoboxing, applets — not named in the MR25 unit text |

Remaining unclassified questions (164) are mostly:
- DM: mathematical induction, recursive algorithms, BFS/DFS, graph traversals;
- COA: basic operational concepts and micro-operation wording;
- DBMS: DBA roles, database architecture, ER notation;
- OOPJ: Java features, access modifiers, applet/application contrast;
- SE: software engineering definitions, layers, umbrella activities, testing
  strategy;
- ES: the two dam questions that duplicate each other.

None of these is treated as syllabus authority. Where a topic is a genuine
course-objective extension (DM induction/recurrence, COA pipelining), it is marked
as an extension in `syllabus_map.json` and `REVIEW_QUEUE.md`; the deck keeps at
most a small number of such cards and never counts them toward a coverage floor.

## 7. OCR and parsing caveats

- The parsed corpus contains OCR noise (`Lxplain`, `expain`, `Soa)`, split words
  such as `h appe ns`). Topic mapping uses the cleaned token stream, but a few
  stems remain unclassifiable; they are listed above rather than guessed.
- Tables and circuits are the main OCR loss. Questions that depend on a figure
  (K-maps, timing diagrams, ER diagrams, SQL schemas) were checked against the
  cached OCR in `.cache/pyq_ocr_psm4_all/` before a card was written. Cards that
  need a figure state the figure in words; no card claims a figure the source does
  not show.
- Numeric questions were re-computed independently in `tools/verify/` before an
  answer was shipped. No numeric, code, SQL or logic answer in the deck is
  unverified.
- Duplicate uploads inflate raw file counts but not session counts. The corpus
  table reports parsed questions, not unique papers.

# SYLLABUS_DELTA — Section 8 (R25 summary) vs the MGIT MR-25 document

Ground truth used: `docs/_work/syllabus-test.pdf`, the MGIT (Autonomous) B.Tech CSE
Scheme of Instruction and Examination, applicable from AY 2025-26, plus the III-semester
course-content pages (CS301PC–CS305PC, MS301HS, VA301BS). The PDF is text-based; the
extracted Markdown is at `docs/_work/syllabus-text/syllabus-test/syllabus-test.md`.
MGIT wins in every disagreement below.

## Global

| Item | Section 8 (R25 summary) | MGIT MR-25 | Effect |
|---|---|---|---|
| Course codes | 25CS301PC … 25MS306HS, 25VA300ES | CS301PC, CS302PC, CS303PC, CS304PC, CS305PC, MS301HS, VA301BS | Use MGIT codes in metadata only; card content unaffected. |
| ES credits | 1 | 1 (L=1, C=1) | Same. |
| I&E code | 25MS306HS | MS301HS | Metadata only. |
| Unit-3 split | Mid-1 = first half, Mid-2 = second half | Not stated in the syllabus; the site's `scope-map.js` split is used | Kept the site split, because the app's category labels depend on it. Recorded per subject below. |

## DM (CS301PC)

- **Unit III**: MGIT names only *Algebraic Systems, Semi groups and Monoids, Lattices as
  Partially Ordered Sets, Boolean Algebra*. It does **not** name groups, subgroups,
  cyclic groups, cosets or Lagrange. PYQs ask “Define a group”, “prove … forms a group”,
  and the site's Mid-1 keyword list already includes group theory. **Decision:** keep a
  small group extension (`DM.U3.T05`) and flag it in `REVIEW_QUEUE.md`; it is PYQ-driven,
  not syllabus-named.
- **Unit IV**: MGIT says *“The Principle of Exclusion”*, not “inclusion–exclusion”.
  Recurrence relations and generating functions appear in the **Course Objectives** but
  not in the Unit-IV text. Pigeonhole is not named. **Decision:** keep inclusion–exclusion
  as the unit topic; keep recurrence/generating-function and pigeonhole as clearly
  labelled PYQ extensions (they are asked in papers).
- **Unit V**: matches Section 8. No change.

## COA (CS302PC)

- **Unit I**: MGIT explicitly adds *Binary codes, Binary Storage and Registers, Binary
  logic* and *Data types*. Section 8 had these, so no removal. K-map/SOP-POS is not named
  in Unit I; it sits under Unit II “Design procedure”. **Decision:** K-map cards belong to
  `COA.U2.T01`, not Unit I.
- **Unit V**: MGIT names I/O interface, asynchronous transfer, modes of transfer, priority
  interrupt, DMA; memory hierarchy, main, auxiliary, associative, cache. It does **not**
  name pipelining, vector processing, multiprocessors, Flynn, virtual memory/paging, RAID
  or cache coherence. The Course Objectives mention pipelining and multiprocessors.
  **Decision:** do not add pipelining/Flynn/RAID cards to Unit V; keep one CISC/RISC
  compare card because it is part of “program control” in Unit IV and is asked in PYQs.
- **Unit III split**: Mid-1 = RTL, bus/memory transfer, arithmetic/logic/shift micro-ops,
  ALSU. Mid-2 = instruction codes, registers, timing/control, instruction cycle,
  memory-reference instructions, I/O and interrupt. This matches `scope-map.js`.

## OOPJ (CS303PC)

- **Unit I**: MGIT adds *History of Java*, *scope and lifetime of variables*, *simple Java
  program*, *recursion*, *nested and inner classes*. Section 8 had these; no removal.
- **Unit IV**: MGIT combines *String class, Object class, java.util, java.io* with
  *event handling, graphics and the five layout managers*. Section 8 matches. Note that
  Unit IV is therefore broader than “java.util + java.io” alone.
- **Unit V**: MGIT names exactly the Swing components and menu classes listed in Section 8.
  No JDBC/servlets/lambdas/streams/generics in the unit text; the Course Objectives mention
  JDBC, but no unit lists it. **Decision:** no JDBC cards; keep the scope watch-list item
  in `REVIEW_QUEUE.md`.
- **Unit III split**: Mid-1 = exception handling; Mid-2 = multithreading. Matches
  `scope-map.js`.

## SE (CS304PC)

- **Unit I**: MGIT names Waterfall, Spiral, Incremental, Concurrent, Component-based and
  Agile. It does **not** name RAD or Prototyping as separate models (Section 8 did).
  **Decision:** keep one RAD/prototyping card only as a contrast inside the process-model
  card, not as a separate syllabus topic; mark it as a Section-8 addition.
- **Unit IV**: MGIT explicitly includes *software measurement, metrics for software
  quality*; Section 8's FP/DRE/McCall/ISO 9126 content is consistent, but ISO 9126 is not
  named in the MGIT text. Keep it as a supporting metric card, flagged.
- **Unit III split**: Mid-1 = design process/quality/concepts/model, architecture, data
  design, styles/patterns. Mid-2 = UML conceptual model and the six diagram types.
  Matches `scope-map.js`.

## DBMS (CS305PC)

- **Unit I**: MGIT adds *A Historical Perspective* and *Structure of a DBMS*; Section 8
  had both. ER topics match.
- **Unit II**: MGIT explicitly includes *destroying/altering tables and views*; Section 8
  mentioned ALTER/DROP. No conflict.
- **Unit III split**: Mid-1 = SQL, constraints, triggers; Mid-2 = schema refinement
  (redundancy through 5NF). Matches `scope-map.js`.
- **Unit V**: MGIT names ISAM and B+ trees; it does not name plain B-trees, query
  optimisation, join algorithms or NoSQL. **Decision:** no query-optimisation/NoSQL cards;
  keep B+ tree only.
- Cost-model numbers in Section 8 are edition-dependent. The rebuild uses the standard
  Ramakrishnan–Gehrke formulas and marks the edition convention on the card.

## I&E (MS301HS)

- MGIT Unit I–V wording matches Section 8 closely. Section 8 adds *business model canvas
  comparison*, *break-even*, *CAC/LTV* and detailed IPR terms. These are legitimate
  elaborations of “types of business models”, “unit economics” and “Patents, Designs,
  Copyright, trademark, GI”, but they are not named line-by-line. Keep them, flagged as
  elaborations.
- MGIT Unit III split: Mid-1 = global competitors, industry trends, TAM/SAM/SOM, scope and
  scale; Mid-2 = prototyping, MVP, testing and validation. Matches `scope-map.js`.
- No I&E PYQs exist in the repository. Every I&E card is textbook/blueprint-derived, not
  PYQ-derived; this is stated in the coverage report.

## ES (VA301BS)

MGIT's ES syllabus is **much narrower** than Section 8. This is the largest delta.

- **Unit I**: only *ecosystem definition/scope/importance, classification, structure and
  function, food chains and food web, energy flow universal model, nitrogen cycle,
  bioaccumulation and biomagnification*. Section 8 added carbon/phosphorus/water cycles,
  ecological pyramids, ecosystem services and carrying capacity. **Decision:** keep only
  nitrogen cycle; a single compare card may mention pyramids as part of energy flow, but
  no separate carbon/phosphorus/water-cycle cards.
- **Unit II**: only *classification, water resources/over-use/dams, mineral resources/
  mining, forest resources/deforestation, renewable and non-renewable energy*. Section 8
  added floods/droughts as separate topics (they remain inside the dams/water card) and a
  long renewable-source list (kept as examples, not separate topics).
- **Unit III**: matches Section 8. Split: Mid-1 = definition/levels/values; Mid-2 =
  threats/conservation (site split).
- **Unit IV**: only *classification of pollution/pollutants, soil pollution/modern
  agriculture, wastewater treatment primary/secondary/tertiary, climate change, ozone
  depletion/ODS, Kyoto and Montreal*. Section 8 added air pollution, noise, municipal
  solid waste, e-waste, bioremediation and air-control devices. **Decision:** delete or
  hold those as out of scope; the unit text does not name them. This is the main reason
  the ES deck shrinks relative to Section 8.
- **Unit V**: only *Environmental Protection Act, Air Act 1981, Water Act, EIA structure
  and baseline-data methods, sustainable development, green chemistry, green building,
  low-carbon lifestyle*. Section 8 added Forest Act, Wildlife Act, waste rules, SDGs and
  the full EIA step list. **Decision:** keep the EIA process as the method inside
  `ES.U5.T03`; do not add Forest/Wildlife/waste-rule cards.

## What this means for the rebuild

The MGIT text removes a significant amount of Section-8 “ES breadth” and some DM/COA
watch-list items. The deck follows MGIT, keeps PYQ-driven extensions only where papers
justify them, and records every extension in `REVIEW_QUEUE.md`.

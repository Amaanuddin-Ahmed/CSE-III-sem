# CONTENT REVIEW — scope, gaps and data flags

**Status:** updated after the correction pass. No question, paper or practice row was
changed; the verified Drive notes for DM, COA, ES, DBMS and I&E were added or re-scoped.
This file records what the app can and cannot claim honestly for **MR-25, CSE Semester III**.

Scope rules used by the app:

- **Mid-1** — Units 1–2 plus the first half of Unit 3.
- **Mid-2** — the second half of Unit 3 plus Units 4–5.
- **Semester End** — all five units.
- Notes are whole-unit resources, so a Unit 3 note is shown for both Mid-1 and Mid-2.
- A Unit 3 question is only put in a mid-term when its text matches a keyword for that
  half. When the text is ambiguous it stays in **Semester End only**. No id-parity or
  arbitrary fallback is used.

---

## 1. PYQ and note coverage

Counts below are from the shipped data, filtered with `isItemInScope` and
`isNoteInScope`. They are the counts the UI shows.

| Subject | Mid-1 PYQs | Mid-2 PYQs | Semester End PYQs | Mid-1 notes | Mid-2 notes | Sem notes |
|---|---:|---:|---:|---:|---:|---:|
| DM | 209 | 198 | 471 | 4 | 3 | 5 |
| COA | 193 | 195 | 477 | 2 | 3 | 5 |
| OOPJ | 250 | 274 | 574 | 8 | 9 | 14 |
| DBMS | 159 | 197 | 363 | 1 | 1 | 1 |
| SE | 191 | 181 | 379 | 0 | 0 | 0 |
| ES | 24 | 0 | 24 | 3 | 3 | 5 |
| IE | 0 | 0 | 0 | 0 | 1 | 1 |
| **Total** | **1,026** | **1,045** | **2,288** | **18** | **20** | **31** |

Known gaps:

- **IE** has no PYQ rows. It now has one verified note, `Unit 5.docx`, scoped to Mid-2 and
  Semester End. Its subject screen must keep showing the honest empty states for Units
  1–4 and for PYQs; practice content is still the main IE material.
- **ES** has 24 PYQs, all in Units 1–2. Mid-2 and Semester End now have notes, but there
  are no additional genuine ES PYQs to add.
- **DM** now has five notes (Units 1–4 plus a complete-notes file); **COA** has five
  (Units 1, 4 and 5); **DBMS** has one note covering Units 1–3; **SE** still has no notes.
- **ES notes** are tagged Units 1–5, but the older data labels describe ecosystems,
  natural resources, pollution and global challenges. The MR-25 Unit 3 is biodiversity
  and biotic resources. The notes are not relabelled because their content has not been
  re-verified against MR-25.
- **COA note mapping** uses the actual MR-25 homes for the three uploaded PPTs:
  Computer Arithmetic → Unit 4, Memory Organization → Unit 5, I/O Organization → Unit 5.
  The PYQ chapter tags still follow the older order described in Section 3.

---

## 2. Unit 3 split

`classifyUnit3()` uses the scope tags first and then subject-specific syllabus keywords.
The table shows how the 455 Unit 3-tagged questions split.

| Subject | Unit 3 questions | Mid-1 half | Mid-2 half | Unclassified (Semester End only) |
|---|---:|---:|---:|---:|
| DM | 97 | 21 | 12 | 64 |
| COA | 92 | 2 | 1 | 89 |
| OOPJ | 117 | 19 | 48 | 50 |
| DBMS | 74 | 13 | 54 | 7 |
| SE | 75 | 41 | 27 | 7 |
| ES | 0 | 0 | 0 | 0 |
| IE | 0 | 0 | 0 | 0 |
| **Total** | **455** | **96** | **142** | **217** |

The 217 unclassified items are deliberately visible only in Semester End. They are
listed below by subject so the owner can re-tag them.

---

## 3. Out-of-syllabus or mis-tagged items

These are examples, not an exhaustive re-tagging. They are the reason some questions in
the bank do not appear in the mid-term they appear to belong to.

### DM

- `DM-A3-1032` — “In how many ways can the letters of the word MATHEMATICS be
  arranged?” is permutations (MR-25 Unit 4), not Unit 3.
- `DM-B3-1068` — committee selection is combinations (Unit 4).
- `DM-A3-1029` — mathematical induction belongs to Unit 1.
- `DM-A3-1038` — pigeonhole principle is Unit 4.
- Group questions such as `DM-B3-1090` (“even integers forms a group”) are kept in the
  Mid-1 half because algebraic structures includes groups in the class notes and data,
  although MR-25 Unit 3 lists algebraic systems, semigroups, monoids, lattices and
  Boolean algebra only. Confirm whether groups are examinable.

### COA — the largest mapping problem

The COA chapter tags in the bank follow an older unit order. They do **not** match MR-25:

| Data chapter | Data title | Actual MR-25 home |
|---|---|---|
| Unit 1 | Basic Structure, Machine Instructions, Addressing Modes | Mostly Unit 3, with Unit 4 addressing modes |
| Unit 2 | CPU, ALU Design, Microprogrammed Control | Unit 4 |
| Unit 3 | Computer Arithmetic, Floating Point, Booth | Unit 4 |
| Unit 4 | Memory Organization, Cache, Virtual Memory | Unit 5 |
| Unit 5 | I/O, DMA, Interrupts, Pipelining | Unit 5 |

Consequences:

- `COA-A3-0192` (floating-point normalization) and `COA-A3-0197` (floating-point
  representation) are Unit 4 content tagged Unit 3. They are correctly unclassified and
  appear only in Semester End.
- 86 further arithmetic/control questions are in the same position.
- The mid-term **unit labels for COA Units 1–2 are not trustworthy** until the bank is
  re-tagged. The example above shows why a full subject re-tag is needed; changing only
  Unit 3 cannot repair Units 1–2.

### OOPJ

- `OOPJ-A3-1547` — string handling classes; `OOPJ-A3-1650` — string streams. These are
  Unit 4/5 content tagged Unit 3.
- `OOPJ-A3-1543` — autoboxing; `OOPJ-A3-1565` — generics; these are Unit 4 material.
- `OOPJ-B3-1594` — termination/resumptive exception models is valid Unit 3 Mid-1; the OCR
  text is noisy, so it may need manual confirmation.

### DBMS

- `DBMS-A3-0626` — “trivial l'unctional dependency” is a functional-dependency question
  (Unit 3 Mid-2) with OCR damage.
- `DBMS-A3-0636` — a Sailors/Boats SQL query is Unit 3 Mid-1.
- Several normal-form questions use “First/Second normal form” wording; they are Unit 3
  Mid-2.

### SE

- `SE-A3-2038` — requirement review is Unit 2, not Unit 3.
- `SE-A3-2042` and `SE-B3-2084` — cohesion/coupling are design concepts; they stay in
  Semester End until the exact MR-25 placement is confirmed.
- `SE-A3-2037` — behavioural/object models and `SE-A3-2049` — static diagrams are UML
  modelling (Mid-2) but the OCR wording is ambiguous.

### ES and IE

- No Unit 3 questions exist in the bank for either subject, so there is nothing to split.
- ES PYQs stop at Unit 2 and IE has no PYQs. Do not add rows to make the counters look
  complete.

---

## 4. Flashcards and practice questions

Practice banks are separate from PYQs and are already exam-specific.

### Flashcards

| Exam | Total cards | Distribution |
|---|---:|---|
| Mid-1 | 16 | 2 per subject, DM has 4 |
| Mid-2 | 140 | 20 per subject |
| Semester End | 154 | 22 per subject; Units 1–2 get 1 card each per subject |

There are **not** 20 cards per unit (which would be 700 for 35 subject-units). The
Semester End decks are thinnest in Units 1–2: one card per subject per unit. Adding cards
without a verified source would be fabrication, so the current numbers are shown.

### Quiz questions

| Exam | Total quiz items |
|---|---:|
| Mid-1 | 31 |
| Mid-2 | 252 |
| Semester End | 254 |

Mid-1 has 3–12 items per subject; the other exams have 36 per subject except DM, which
has 38 in the Semester End bank.

---

## 5. Owner actions

1. **Re-tag COA** against MR-25 before quoting its Unit 1–2 counts. This is the only
   content issue that changes what a student sees in a mid-term for reasons unrelated to
   the Unit 3 split.
2. Manually review the 217 Unit 3 items listed by `classifyUnit3() === null` and add
   `scope: 'mid1'` or `scope: 'mid2'` where known.
3. Upload the remaining missing notes (SE Units 1–5, COA Units 2–3, DBMS Units 4–5,
   IE Units 1–4) and verify the existing ES/DBMS note labels.
4. Add verified ES Unit 3–5 and IE questions only from real papers.
5. Expand flashcard decks to 20 per unit only with sourced content.
6. Confirm whether the DM “groups/subgroups” material is examinable in MR-25 Unit 3.

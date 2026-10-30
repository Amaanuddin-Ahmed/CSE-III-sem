# Notes chapter audit — MGIT PYQ Hub

Date: 2026-10-31 · Branch: `content/mr25-rebuild`

This audit answers one question for every note in `NOTES_DATA`: **which MR-25 unit
does this file actually belong to?** It also records the chapter-label corrections
that were required before the answer could be trusted.

Ground truth: `content-audit/syllabus_map.json`, which was extracted from
`docs/_work/syllabus-test.pdf` (MGIT MR-25 scheme and III-semester course content).

---

## 1. Why the chapter labels had to be fixed first

The rebuilt quiz/flashcard banks already use the official MR-25 units, but the
`SUBJECTS_DATA.chapters` labels shown in the UI were stale. For example the site
said **COA Unit 3 = Computer Arithmetic**, while the official syllabus places
computer arithmetic in **Unit 4**. Notes that were mapped correctly (COA-03 →
Unit 4) therefore *looked* wrong in the UI.

All seven subjects were re-labelled to the official unit titles:

| Subject | Old label drift | Corrected unit scheme |
|---|---|---|
| DM | Lattices were listed under Unit 2; groups under Unit 3 | Unit 3 = Algebraic Structures incl. Lattices & Boolean Algebra |
| COA | Every unit was offset (machine instructions, CPU, arithmetic, memory, I/O) | Unit 1 Boolean algebra/data representation · Unit 2 combinational/sequential logic · Unit 3 RTL/micro-ops/basic computer · Unit 4 microprogrammed control/CPU/arithmetic · Unit 5 I/O & memory |
| OOPJ | Unit 4 was "collections & generics"; Unit 5 was "file I/O + Swing" | Unit 4 = String/Object/java.util/java.io/events/graphics/layouts · Unit 5 = Swing |
| DBMS | SQL was under Unit 2; recovery under Unit 5 | Unit 3 = SQL/constraints/triggers/normalization · Unit 4 = transactions/concurrency/recovery · Unit 5 = storage/indexing |
| SE | Requirements under Unit 1; UML missing; risk missing | Unit 2 = requirements · Unit 3 = design/architecture/UML · Unit 5 = risk & quality |
| ES | Unit 3 was pollution; Unit 4 was global challenges | Unit 3 = biodiversity · Unit 4 = pollution & control technologies · Unit 5 = policy/legislation/EIA |
| IE | Unit 3 was business models | Unit 3 = opportunity assessment & prototyping · Unit 4 = business/financial models |

No question, flashcard, ID, or bank scope was changed by this relabelling; only the
displayed chapter titles moved onto the syllabus the banks already followed.

---

## 2. Existing notes that were misassigned or misdescribed

| Note | Problem found | Fix |
|---|---|---|
| `NOTE-COA-01` | Drive file `Unit 1.pdf` actually contains **UNIT-II** lecture notes (combinational & sequential logic). It was listed under Unit 1. | Moved to **Unit 2**; title and description corrected; the filename mismatch is disclosed in the description. |
| `NOTE-COA-02` | `Unit 1 Actual.pdf` is the real Unit-I material (Boolean algebra, logic gates, data representation), but was titled "Addressing Modes & Architecture". | Kept in **Unit 1**; title and description corrected. |
| `NOTE-ES-03` | `Unit-3.pdf` was described as pollution. The PDF is **Biodiversity and Biotic Resources**. | Title/description corrected; stays in **Unit 3**. |
| `NOTE-ES-04` | `Unit-4.pdf` was described as global challenges. The PDF is **Environmental Pollution and Control Technologies**. | Title/description corrected; stays in **Unit 4**. |
| `NOTE-ES-01` | Title/description mixed Unit-1 ecosystems with Unit-3 biodiversity. | Narrowed to the Unit-1 syllabus. |
| `NOTE-ES-05`, `NOTE-IE-01` | Generic "Unit 5: Notes" titles. | Replaced with syllabus-aligned titles and descriptions. |
| `NOTE-OOPJ-09` | Title mentioned generics, which are not in the MR-25 unit text. | Retitled "Collections Framework Guide". |

`NOTE-COA-03` (Computer Arithmetic) and `NOTE-COA-04`/`05` (Memory, I/O) were
already mapped to the correct official units (4, 5, 5) and needed no move.

---

## 3. Notes added from the public Drive folders

Only files present in the verified subject notes folders were added; every Drive
file ID and size was read from the folder listing.

### DM — 11 new notes (5 → 16)

| ID | Unit | File | Size | Drive ID |
|---|---:|---|---:|---|
| NOTE-DM-06 | 5 | BFS-DFS-Unit-V.pdf | 1.4 MB | `1c79Wm22hBN1QxXMozrBB0BnKwtMkpr27` |
| NOTE-DM-07 | 5 | DM - Graphs - Notes.pdf | 5.5 MB | `1U0a7cT61WMGBasHd2-Pb9kr4BiScT9cK` |
| NOTE-DM-08 | 5 | DM-Unit-V.pdf | 4.4 MB | `1tMLNR3ZlRGKE_Su_-ICTiwD2ED2oXx7E` |
| NOTE-DM-09 | 4 | Elementary combinatorics-Unit-IV-Part-A.pdf | 2.2 MB | `1xky503KnkvSlbMaP9OmBtQsS2aEbPGBX` |
| NOTE-DM-10 | 3 | Lattices - Notes.pdf | 1.7 MB | `1pRLaNeaeltoGeIvAZBVV1gAgFzrxhXDa` |
| NOTE-DM-11 | 1 | MFCS Unit 1.pdf | 12.8 MB | `1JZuYgVZu0-tkS5WMNrGSqT2P-W3TKWtB` |
| NOTE-DM-12 | 2 | MFCS UNIT-2.pdf | 15.3 MB | `1GLR0V8Kw5t94QO0axRMFg9RBV_hWuFwY` |
| NOTE-DM-13 | 3 | MFCS UNIT-3.pdf | 6.3 MB | `1unCQ6q4mkbjBwNSa8Sjx-TxI3RTdRyVV` |
| NOTE-DM-14 | 5 | MFCS Unit-5.pdf | 16.9 MB | `1HaZmwbt15u843g5wq_2xfLGIRj9xVCby` |
| NOTE-DM-15 | 5 | MFCS-Graphs.pdf | 642 KB | `1mt_TIgSOhDDKSj0RoRA2ocx3CX8mVAsU` |
| NOTE-DM-16 | 4 | Unit-IV-Combinations1.pdf | 1.1 MB | `1WJspYaa-zAHayTiV-HghaQt-E_Fz8jgi` |

### COA — 14 new notes (5 → 19)

| ID | Unit | File | Size | Drive ID |
|---|---:|---|---:|---|
| NOTE-COA-06 | 4 | CH-10ComputerArithmetic.pdf | 1.1 MB | `1i4qNdUY4CEpT0U5gIbroSOSQl6JJYub1` |
| NOTE-COA-07 | 4 | Ch7-Micro Programmed Controle.ppt | 396 KB | `1OGP6NyCTBFk8s1zHE5XEiOV0UTKdyh85` |
| NOTE-COA-08 | 5 | CO-unit-5-Memory org.ppt | 734 KB | `1exeqpmoyMdH-6QB-QPDvQFEu9MpTa8Qu` |
| NOTE-COA-09 | 2 | Combinatorial Ckts.pdf | 2.7 MB | `1WDaCJF3MGIllqECzfhltH6v9YpflwNAK` |
| NOTE-COA-10 | 5 | IV-IO-Organization.ppt | 1.4 MB | `18yY0ONuxuCTNSynjeKwtsr1vbNlj8jLx` |
| NOTE-COA-11 | 2 | K Maps-SOP and POS.pdf | 1.8 MB | `1QlRI1TxsqtKdnqDf03yqIkZHteAdegje` |
| NOTE-COA-12 | 5 | Memory Organization.ppt | 258 KB | `1Ihbz9KTH1_YtGYte0Cg8FQ2c639pxZcH` |
| NOTE-COA-13 | 2 | Sequential Ckts.pdf | 2.6 MB | `1esS3jhbLDZDJoJRRm_G_mF5TGpKJVwjT` |
| NOTE-COA-14 | 2 | U3-Combi Ckts.pdf | 2.7 MB | `1-FOIBo-u021t6-3UeY7gek_0W6iOYqYt` |
| NOTE-COA-15 | 3 | UNIT I -II Reg Transfer&Micro Ops.ppt | 526 KB | `10aX_0aPVBBj5UCzIUo7nH3GLr4G5nPzB` |
| NOTE-COA-16 | 3 | UNIT I -III Basic CO&Design.ppt | 572 KB | `1GMi3yf0E6Lrs5-gP_dQLmAMfvwchCUJh` |
| NOTE-COA-17 | 4 | UNIT I -IV CPU.ppt | 764 KB | `1rWOT24VLqFz3Mr0lC09eDralZurmRfnA` |
| NOTE-COA-18 | 1 | UNIT-1-Introduction Numbar System.pdf | 6.7 MB | `1LrwjYr48QE3fsHR9q0EHCaQmLKRon2ZM` |
| NOTE-COA-19 | 1 | UNIT-1.COA.pdf | 15.6 MB | `1aFMHrPxZTOrc8grHjqA53NlPBYo2zAZH` |

OOPJ, DBMS, SE, ES and IE folders already had every file represented on the site,
so no notes were added for those subjects.

Two COA filenames are misspelt in the source folder (`Combinatorial Ckts.pdf`,
`Numbar System`). They are kept verbatim so the link and file identity remain
traceable.

---

## 4. Verification

- `node -e "require('./pyq-data.js')"` — module loads; 61 notes; no duplicate note
  IDs or Drive IDs; every `notesCount` matches the real count.
- `node tools/verify/validate_banks.js` — 0 errors, 3 soft difficulty warnings.
- `node tools/verify/audit_content.js` — 0 errors, 0 warnings.
- Playwright at 1440×900, 390×844 and 844×390: every COA unit filter returns the
  expected files; DM shows 16 notes (6 in Unit 5); no console errors.

---

## 5. In-site OCR / extracted text (cache v7)

Every COA and DM file in the verified Drive notes folders was downloaded and
processed so the notes can be read inside the hub, not only opened on Drive.

- **PDFs:** text layer extracted with PyMuPDF. Pages with no usable text layer
  were rendered at 200 DPI and OCR'd with Tesseract 5.4 (`eng`).
- **Legacy `.ppt` files (10):** converted to PDF with PowerPoint COM, then
  processed with the same PDF pipeline.
- **Output:** `notes-content.js` contains all 35 notes (~853k characters of
  readable text). `notes-content-index.js` contains the lightweight page counts
  and quality flags used to render the **Read** buttons.
- **Loading:** the index is loaded eagerly; the full text is lazy-loaded the
  first time a reader is opened, so the home page stays fast.
- **Quality flags:** 26 notes are marked `good`; 9 are marked `limited` because
  they are handwritten/scanned and Tesseract cannot transcribe them reliably:
  `NOTE-COA-03`, `NOTE-COA-14`, `NOTE-COA-18`, `NOTE-DM-05`, `NOTE-DM-06`,
  `NOTE-DM-11`, `NOTE-DM-12`, `NOTE-DM-13`, `NOTE-DM-14`.
  The reader shows a visible warning and an **Open original** link for these.
- **Scope:** notes are reference material and are no longer filtered by the
  Mid-1/Mid-2 exam selector. All units remain visible; PYQs stay exam-scoped.

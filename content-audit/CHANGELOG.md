# CHANGELOG — MR-25 content rebuild

Branch: `content/mr25-rebuild` · Base: `main` · Date: 2026-10-30

This change rebuilds the Quiz Mode (MCQ/FIB/True-False) and "Revise with Flash Cards"
content for all seven MR-25 CSE Semester III subjects. It changes **content only**. No UI,
route, style, PWA, AI Help behaviour or progress logic was modified, and the bank schema is
unchanged.

## What changed

| Area | Change |
|---|---|
| `data/sem-practice.js` | Rebuilt complete deck: 580 quiz items (431 MCQ, 28 TF, 121 FIB) and 539 flashcards |
| `data/mid1-practice.js` | Rebuilt Mid-1 scope: 216 quiz items and 244 flashcards |
| `data/mid2-practice.js` | Rebuilt Mid-2 scope: 364 quiz items and 295 flashcards |
| `content-audit/` | New audit trail: recon, syllabus delta/map, PYQ matrix, reports, coverage, this changelog |
| `tools/verify/` | New repeatable build, validation, audit and migration scripts |
| `content-audit/canonical/` | Authored MR-25 content and per-ID fixes used as the build input |
| `content-audit/.legacy/` | Snapshot of the pre-rebuild banks, used for ID comparison and idempotent builds |

## Final Semester-End counts

| Subject | MCQ | TF | FIB | Flashcards |
|---|---:|---:|---:|---:|
| DM | 62 | 4 | 21 | 78 |
| COA | 62 | 4 | 18 | 82 |
| OOPJ | 63 | 4 | 16 | 77 |
| DBMS | 62 | 4 | 16 | 79 |
| SE | 62 | 4 | 16 | 78 |
| ES | 60 | 4 | 17 | 72 |
| IE | 60 | 4 | 17 | 73 |
| **Total** | **431** | **28** | **121** | **539** |

Floors: 430 MCQ and 510 flashcards. Every subject meets or exceeds its derived target.

## ID policy

- **0 legacy IDs dropped.** Every ID present before the rebuild is still present.
- **586 new IDs added** for new content. New IDs continue each subject's existing range.
- Kept and fixed cards keep their original IDs, including the 28 True/False items converted
  from `type: "mcq"` with two options to `type: "tf"` (`*-M2-TF-*`).
- No card was renumbered to make room for new content.

## Content work by subject

### DM (CS301PC)
- Rebuilt Units 1–5 around logic, sets/relations/functions, algebraic systems and lattices,
  counting, graphs and trees.
- Kept group theory (`DM.U3.T05`) and recurrence/generating functions plus pigeonhole
  (`DM.U4.T09`, `DM.U4.T10`) as labelled PYQ extensions.
- Removed probability/Bayes/random-variable cards (not in MR-25 units).
- Added coverage cards for lattices, multinomial theorem, directed trees, binary-tree
  traversals and Hamiltonian graphs.

### COA (CS302PC)
- Rebuilt around number systems, combinational design, register transfer/micro-operations,
  CPU organisation and memory/I/O.
- Rewrote pipelining, vector/multiprocessor, Flynn, RAID and virtual-memory cards to
  in-scope Unit-V material.
- Added coverage cards for the binary multiplier, HDL, timing/control, instruction cycle,
  general-register organisation, addition/subtraction, floating-point arithmetic, decimal
  arithmetic and auxiliary memory.

### OOPJ (CS303PC)
- Rebuilt around Java basics, inheritance/interfaces/packages, exceptions, multithreading,
  `String`/`Object`/`java.util`/`java.io`, event handling and Swing.
- Rewrote JDBC, servlet, generics, serialization, annotation, applet and autoboxing cards to
  in-scope material.
- Moved `FC-SEM-OOPJ-40` (Object class) from Unit 2 to Unit 4 (`OOPJ.U4.T02`) and expanded
  it, keeping the ID.
- Added coverage cards for nested/inner classes, `String` basics, built-in exceptions and
  AWT graphics.

### DBMS (CS305PC)
- Rebuilt around ER modelling, relational algebra/calculus, SQL, normalisation,
  transactions and storage/indexing.
- Rewrote NoSQL, query-optimisation, join-algorithm and shadow-paging cards to in-scope
  material.
- Added coverage cards for domain relational calculus, redundancy anomalies, BCNF,
  lossless-join decomposition, recoverability and serializability testing.

### SE (CS304PC)
- Rebuilt around process models, requirements, design, UML and quality/metrics.
- Kept RAD/prototyping and ISO 9126 only as supporting contrasts, flagged in
  `REVIEW_QUEUE.md`.
- Added coverage cards for architecture/data design, collaboration diagrams, activity
  diagrams, quality metrics and statistical SQA.

### ES (VA301BS)
- Rebuilt to the narrower MGIT scope: ecosystems, natural resources, biodiversity,
  pollution/wastewater/climate, and environmental law/EIA.
- Removed or rewrote air/noise/solid-waste/e-waste/bioremediation/Forest Act/Wildlife Act
  and carbon/phosphorus/water-cycle cards that are not named by MGIT.
- Reworded `ES-SEM-046` to keep the biomass fact without the out-of-scope air-pollution
  phrasing.

### IE (MS301HS)
- Rebuilt around entrepreneurship, opportunity/feasibility, business models, unit economics,
  funding and IPR.
- Replaced Business Model Canvas with Lean Canvas, and rewrote funding/valuation/cap-table/
  term-sheet/IPO/network-effect/CSR cards to the MR-25 unit text.
- IE has no PYQs in the repository; every IE card is textbook/blueprint-derived.

## Verification

Run from `CSE-III-sem/`:

```bash
node tools/verify/build_banks.js
node tools/verify/validate_banks.js
node tools/verify/audit_content.js
```

Latest results:

- `validate_banks.js`: **0 errors**, 3 soft warnings (difficulty mix only).
- `audit_content.js`: **0 errors**, **0 warnings**, 1,119 clean cards.
- Answer positions: A/B/C/D = 108/108/108/107 (25.1/25.1/25.1/24.8%).
- Topic coverage: 279/279 mapped topics (100%), from canonical `topicId` plus keyword
  matching.
- Difficulty (MCQ only): easy 238 (55.2%), medium 166 (38.5%), hard 27 (6.3%). This is
  below the 30/45/25 target; the gap and the options are in `REVIEW_QUEUE.md`.

## Known deviations

- Difficulty mix (see above and `REVIEW_QUEUE.md` section 1).
- PYQ-driven DM extensions and IE/SE elaborations are kept but flagged.
- `source` is `"syllabus"` on every card because no per-card PYQ mapping could be verified.
- The progress tracker's stale-ID behaviour is outside this content change; see
  `REVIEW_QUEUE.md` section 7.

## Not changed

`index.html`, `practice-runner.js`, `scope-map.js`, `rich-text.js`, `activity-tracker.js`,
`sw.js`, styles, routes, PWA files and the AI Help request/response logic. The only UI
surface considered was the DM recurrence AI Help tile, which was left in place because the
deck keeps recurrence as a PYQ extension (see `REVIEW_QUEUE.md` section 8).

## Follow-up pass — 2026-10-31

This pass keeps the rebuilt banks intact and fixes the surfaces around them.

| Area | Change |
|---|---|
| `pyq-data.js` | Re-aligned all seven `SUBJECTS_DATA.chapters` labels to the official MR-25 unit titles, so the UI now matches the rebuilt banks and the notes. |
| `pyq-data.js` | Added 25 verified Drive notes (DM 5 → 16, COA 5 → 19) and corrected misassigned/misdescribed notes (COA-01, COA-02, ES-01, ES-03, ES-04, ES-05, IE-01, OOPJ-09). Details in `NOTES_CHAPTER_AUDIT.md`. |
| `data/*-practice.js` | Enriched the five terse flashcard backs (Abelian group, repeated roots, generating function, planar edge bound) with full explanations and keywords. No IDs changed. |
| `style.css` | AI assistant modal is now true full screen (`100vw × 100dvh`, no radius/border/shadow) on desktop, mobile and landscape; wide answers can scroll sideways. |
| `api/gemini.js` | Prompt now asks for comprehensive, exam-length answers; `maxOutputTokens` 2048 → 4096; history 12 turns/16k chars → 20 turns/24k chars; per-model timeout budget added. |
| `sw.js` | Cache bumped `mgit-hub-v5` → `mgit-hub-v6`. |

Verification after this pass: `validate_banks.js` 0 errors / 3 soft warnings;
`audit_content.js` 0 errors / 0 warnings; Playwright full-screen and notes checks
pass at 1440×900, 390×844 and 844×390 with no console errors.

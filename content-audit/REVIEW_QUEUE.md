# REVIEW_QUEUE — items that need an owner decision

Date: 2026-10-30 · Branch: `content/mr25-rebuild` · Deck: MR-25 CSE Semester III

This file lists everything the rebuild could not settle from the MGIT syllabus and the
available papers. Nothing here is a hidden error: the shipped banks pass the content
audit with **0 errors and 0 warnings**. These are judgement calls, provenance limits and
one residual distribution gap that a human should sign off.

## Status at a glance

| Check | Result |
|---|---|
| `validate_banks.js` | 0 errors, 3 soft warnings (difficulty mix only) |
| `audit_content.js` | 0 errors, 0 warnings, 1,119 clean cards |
| Topic coverage | 279/279 mapped topics have at least one card (100%) |
| ID preservation | 0 legacy IDs dropped; 586 new IDs added |
| Answer positions (MCQ) | A/B/C/D = 108 / 108 / 108 / 107 |

---

## 1. Difficulty mix is below the 30/45/25 target (open)

| Band | Actual (MCQ only) | Target |
|---|---:|---:|
| Easy | 238 (55.2%) | ~30% |
| Medium | 166 (38.5%) | ~45% |
| Hard | 27 (6.3%) | ~25% |

**Why it was not mass-relabelled.** The legacy labels were preserved wherever a card was
kept. Re-labelling ~200 cards to hit a quota would be arbitrary: difficulty is not a field
the syllabus defines, and there is no answer-key or timing data to calibrate against.
Inventing a "hard" label for a recall card would make the deck look better while making it
less honest.

**Options for the owner.**

1. **Accept and document** (current state). The labels describe authored cognitive demand;
   the gap is disclosed here and in `audit_summary.md`.
2. **Human calibration pass.** Read a stratified sample per subject, write a short rubric
   (recall / apply / multi-step), and relabel. This is the recommended route if the mix is
   a hard requirement.
3. **Add hard items.** Roughly 80 new multi-step MCQs would close the gap without touching
   existing labels, but that is a content-authoring project of its own.

No numeric answer, code output or SQL result was invented to fill the gap.

## 2. PYQ provenance labels were normalised (resolved, disclosed)

Legacy cards carried labels such as `source: "pyq:MR25-..."` that could not be tied to a
specific paper, year or page. Shipping those labels would have implied a verified PYQ link
that does not exist. Every emitted card now uses `source: "syllabus"`.

- `pyq_patterns.md` and `pyq_topic_matrix.csv` describe the parsed corpus only. They are
  **not** predictions, and no card claims a year, repetition count or probability.
- The corpus has **no I&E questions** and only **24 ES questions** (a Mid-1 model paper).
  Those two decks are textbook/blueprint-derived; this is stated in the coverage report.
- 164 parsed questions remain unclassified and 144 are out of the MR-25 scope. They stay
  in `pyq_records.json` for traceability but contribute no topic score.

## 3. PYQ-driven extensions kept in the deck (owner sign-off requested)

These topics are asked in papers but are **not named in the MGIT unit text**. They are kept
because removing them would leave students unprepared for questions that actually appear.
Each is tagged `(PYQ extension)` in `syllabus_map.json` and is a normal card in the banks.

| Subject | Topic ID | What is kept | Basis |
|---|---|---|---|
| DM | `DM.U3.T05` | Groups, subgroups, cyclic groups, Lagrange | Asked every year; site Mid-1 keyword list already includes it |
| DM | `DM.U4.T09` | Pigeonhole principle | Appears in papers; not in Unit-IV text |
| DM | `DM.U4.T10` | Recurrence relations and generating functions | Course Objectives and all four paper years |
| SE | — | RAD/prototyping as a contrast inside the process-model card | Section-8 wording; MGIT names the other models only |
| SE | — | ISO 9126 as a supporting quality metric | Section-8 wording; MGIT names "metrics for software quality" |
| IE | — | Business Model Canvas/Lean Canvas, unit economics, IPR detail | Elaborations of MGIT's business-model and IPR lines |

If the owner wants a strict "MGIT unit text only" deck, remove these cards and accept the
resulting coverage loss. The current choice favours exam usefulness and says so openly.

## 4. Out-of-scope content removed or rewritten (resolved)

The following pre-MR25 topics were removed, rewritten under the same ID, or reduced to a
contrast clause. No card now presents them as MR-25 syllabus content.

| Subject | Removed / rewritten | Reason |
|---|---|---|
| ES | Air/noise/municipal-solid-waste/e-waste, bioremediation, Forest Act, Wildlife Act, carbon/phosphorus/water cycles, ecological pyramid, carrying capacity | Not named in the MGIT ES units; Section-8 breadth only |
| COA | Pipelining, vector/array processors, multiprocessors, interconnection networks, Flynn, RAID, virtual memory/paging, cache coherence | Course-Objective wording, not MR-25 Unit-V text |
| DM | Probability, Bayes, random variables | Not in the MR-25 DM units |
| OOPJ | JDBC, servlets, generics, serialization, annotations, applets, autoboxing | Not named in the MR-25 OOPJ units (Swing is) |
| DBMS | NoSQL, query optimisation, join algorithms, shadow paging | Not named in MR-25 Unit V |

One ES card (`ES-SEM-046`) was reworded from "produces air pollution" to "releases soot and
carbon dioxide" so the biomass fact stays while the wording no longer reads like an
out-of-scope air-pollution card. The answer (Biomass) is unchanged.

## 5. Numeric and formula content (verified, residual risk noted)

- Arithmetic, truth-table, graph, scheduling and complexity answers were computed or
  cross-checked before authoring; no answer was copied from an unverified source.
- DBMS cost-model numbers are edition-dependent. The cards use the standard
  Ramakrishnan–Gehrke convention and say so on the card; a different textbook edition may
  quote different constants.
- COA timing/control and floating-point cards describe the standard Mano organisation.
  They do not claim a specific hardware timing.
- SQL cards use standard SQL. Where a result depends on dialect, the card asks for the
  standard behaviour rather than a vendor-specific one.

## 6. OOPJ Object-class card was in the wrong unit (resolved)

`FC-SEM-OOPJ-40` ("Which methods does every Java class inherit from Object?") sat in Unit 2
but MGIT places "Exploring the Object class" in Unit 4 (`OOPJ.U4.T02`). The card was moved
to Unit 4, its back was expanded with `wait/notify/notifyAll`, and its **ID was preserved**.
It now appears in the Mid-2 and Semester-End banks, not Mid-1.

## 7. Progress tracker counts stored IDs without validation (open, outside content scope)

`activity-tracker.js` counts every ID in `mgit_study_progress_v1` without checking it
against the active bank. A stale ID from older content therefore inflates "viewed" or
"mastered" totals.

- **This rebuild dropped no IDs**, so it introduces no new stale IDs.
- Legacy progress saved before this rebuild may still contain IDs that no longer exist.
- A minimal fix is to filter stored IDs to the active bank before counting. That touches
  progress logic, which the brief puts out of bounds, so it is **not implemented**. Owner
  decision required.

## 8. AI Help suggestion tile still points at DM recurrence (open)

`index.html` (~line 875) still has the "DM Recurrence Relations" suggestion tile. Recurrence
is kept in the deck as a PYQ extension (section 3), so the tile is consistent with the
content. If the owner prefers a strict MGIT-unit-only AI surface, replace it with an
in-syllabus DM tile such as "DM Lattices" or "DM Inclusion–Exclusion". No other AI Help
behaviour was changed.

## 9. Unit-3 split relies on separate banks (disclosed)

`initQuiz()` and `initFlashcards()` filter by `unit` only; they do not call
`isItemInScope()`. The rebuild therefore puts each half of Unit 3 in the matching bank and
keeps both halves in the Semester-End bank. If the app later starts filtering by `scope`,
the banks are already consistent with `scope-map.js`.

## 10. Coverage method (disclosed)

The emitted schema has no `topicId`, so coverage is computed from the canonical `topicId`
sidecar (`build_manifest.json`) plus a keyword fallback for legacy cards. The result is
279/279 topics covered. A keyword-only count would under-report; it is not used alone.

Thirty coverage flashcards were added for topics that had no card (IDs `FC-SEM-<SUBJ>-NN`
above the previous maximum). They are new IDs only; no existing ID was reused or removed.

## 11. Sign-off checklist

- [ ] Accept the difficulty mix, or schedule a calibration pass (section 1).
- [ ] Confirm the PYQ-driven extensions stay (section 3).
- [ ] Confirm the out-of-scope removals match the department's reading (section 4).
- [ ] Decide whether to filter stale progress IDs (section 7).
- [ ] Decide whether to keep the DM recurrence AI tile (section 8).
- [ ] Spot-check the 30 new coverage cards on a phone at 390 px.

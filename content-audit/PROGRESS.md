# PROGRESS — MR-25 content rebuild

Branch: `content/mr25-rebuild` · Updated: 2026-10-30

## Phase status

| Phase | Status | Evidence |
|---|---|---|
| 0. Recon | Done | `RECON.md` |
| 1. Syllabus ground truth | Done | `SYLLABUS_DELTA.md`, `syllabus_map.json` (279 topics) |
| 2. PYQ mining | Done | `pyq_records.json`, `pyq_topic_matrix.csv`, `pyq_patterns.md` |
| 3. Content audit | Done | `audit_report.csv`, `audit_summary.md` |
| 4. Rebuild | Done | `data/*.js`, `build_manifest.json`, `canonical/` |
| 5. QA + report | Done | `validation_report.json`, `coverage_matrix.csv`, `CHANGELOG.md`, `REVIEW_QUEUE.md` |
| 6. Commit | In progress | Per-subject commits on `content/mr25-rebuild` |

## Verified totals

| Bank | Quiz | MCQ | TF | FIB | Flashcards |
|---|---:|---:|---:|---:|---:|
| Semester End | 580 | 431 | 28 | 121 | 539 |
| Mid-1 | 216 | 189 | 0 | 27 | 244 |
| Mid-2 | 364 | 242 | 28 | 94 | 295 |

Unique IDs across the three banks: **1,119**. Legacy IDs dropped: **0**. New IDs: **586**.

## Quality gates

| Gate | Result |
|---|---|
| `build_banks.js` | Runs clean and is idempotent (reads `.legacy/`, not its own output) |
| `validate_banks.js` | 0 errors; 3 warnings, all difficulty-mix |
| `audit_content.js` | 0 errors; 0 warnings; 1,119 clean cards |
| MCQ options | Every MCQ has exactly 4 options and one correct index |
| True/False | 28 items use `type: "tf"`; no True/False stored as MCQ |
| Answer positions | 108 / 108 / 108 / 107 |
| Flashcard limits | 0 fronts over 20 words; 0 backs over their kind limit |
| Explanations | 0 over 45 words |
| NOT/EXCEPT | 4 MCQs (under the 10% cap) |
| Out-of-scope wording | 0 flagged |
| Topic coverage | 279/279 (100%) |

## Open items

1. Difficulty mix is 55.2 / 38.5 / 6.3 against a ~30/45/25 target. Labels were not
   mass-relabelled; see `REVIEW_QUEUE.md` section 1 for options.
2. PYQ-driven extensions (DM group theory, recurrence, pigeonhole) and IE/SE elaborations
   are kept and flagged; owner sign-off requested.
3. Progress tracker may count stale IDs from older content. No IDs were dropped in this
   rebuild, but a read-time filter would be a separate, out-of-scope change.
4. The DM recurrence AI Help tile remains, consistent with the kept extension.

## Reproduction

```bash
node tools/verify/build_banks.js
node tools/verify/validate_banks.js
node tools/verify/audit_content.js
```

`add_coverage_cards.js` is a one-time, idempotent migration that added the 30 coverage
flashcards to `canonical/`; it is not needed for a normal rebuild.

# PROGRESS

Format: `DONE / PARTIAL / BLOCKED — task — one line`

## Implementation

- DONE — Phase 0 — baseline audit at 390 px, screenshots, `PLAN.md`, `docs/AUDIT.md` and this tracker.
- DONE — Admin removal — deleted `admin.html`, root `gemini.js`, the lock button, admin modal/JS and `docs/ADMIN_GUIDE.md`; cleaned README/AGENTS references.
- DONE — Header / navigation — deep-blue header, 44 px actions, A2HS button, History API, breadcrumb, scroll restoration.
- DONE — Home / exam flow — no auto-scroll on category pick, revision toast, Quiz Time below Subjects, notes/papers-only subject cards.
- DONE — Scoping — MR-25 Unit 3 splits for all seven subjects, conservative `classifyUnit3`, whole-unit `isNoteInScope`, exam-scoped counts, notes and unit pickers.
- DONE — Subject screens — mark badges, question Info panel, “What to write”, per-chapter collapse, live filter count, sticky filter actions, honest empty states.
- DONE — Practice — 3-step Quiz Time flow, scoped unit picker, scoped question/flashcard queues, swipe, first-try accuracy, session exit cleanup, progress empty state.
- DONE — Tour — five cards, Drive/scope/subjects/Quiz Time/AI, static spotlight, gesture-blocking overlay, step-5 tooltip clears the floating AI button.
- DONE — Popups — single-popup coordinator with a 3.5 s gap; suppressed during tour/modal/practice/AI; generic rating copy.
- DONE — AI — server-only env key, valid model ids, retry/429/auth handling, prefill-only “Solve with AI”, own-AI fallback with prompt.
- DONE — Polish — curly quotes, “Tap” on touch, actual marks, paper formatting, share card, viewport-fit, conditional analytics, reduced-motion coverage.
- PARTIAL — Content — 217 Unit 3 questions remain unclassified and are Semester-End-only; COA chapter tags predate MR-25; ES/IE/notes/flashcard gaps remain. See `docs/CONTENT_REVIEW.md`.
- BLOCKED — Live AI — `GEMINI_API_KEY` is not set in Vercel; the old committed key must be rotated before the live assistant can answer.

## Verification

- DONE — `node docs/_qa/qa.js` — eight viewports (320, 360, 390, 412, 430, 768 portrait; 568×320 and 844×390 landscape): no horizontal overflow, 0 console errors, 0 page errors, toast and unit-picker checks pass.
- DONE — `node docs/_qa/scope-check.js` — DM 209/198/471 and COA 193/195/477 PYQs for Mid-1/Mid-2/Semester End; Mid-2 picker shows Units 3–5.
- DONE — `node docs/_qa/check-polish.js` — breadcrumbs at 320/390, tour step 5 at 320/390/768, flashcard back face, touch-only keyboard hint.
- DONE — `node docs/_qa/copy-audit.js` — 0 straight quotes and 0 “Click” in UI chrome (source question text excluded).
- DONE — `node --check` — all edited JavaScript files parse.
- DONE — `docs/CONTENT_REVIEW.md` — PYQ/note/flashcard tables, Unit 3 split, out-of-syllabus examples, owner actions.

## Commits

- `17a1ee0` — chore: remove admin surface and secure AI proxy
- `94eb296` — feat(ui): mobile-first shell, navigation and study screens
- `8d90ea6` — feat(scope): exam-aware navigation, practice, tour and AI flow
- `5fcd2d4` — docs: audit results, scope review and verification notes

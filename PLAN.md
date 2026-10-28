# PLAN — Mobile UX overhaul (MGIT PYQ Hub)

## How I understood the task

The live site is a mobile-first study hub. I must walk it like a student at 320–430 px,
reproduce the issues that still exist (some of the prompt describes an older build),
fix them without changing the existing identity, data, routes, Drive/WhatsApp/Tally
links, then re-test at six widths and push a branch for a Vercel preview.

**Admin decision (owner override in the brief):** remove the admin entry point, admin
modal, editor view and public lock icon entirely. The standalone admin page is removed
from the public app. Anyone who needs the data can open it locally.

## Phases, tasks, files, risks

| Phase | Tasks | Files | Risks |
|---|---|---|---|
| 0 | Branch `fix/mobile-ux-overhaul`, PLAN/PROGRESS/AUDIT, baseline screenshots | `PLAN.md`, `PROGRESS.md`, `docs/AUDIT.md`, `docs/_qa/*`, `.gitignore` | None |
| 1 | Recon, play every flow at 390/320, log reproduced issues | `docs/AUDIT.md` | Prompt describes an older build; only fix what reproduces |
| 2 | Download + OCR MR-25 syllabus, write scope config, audit notes/PYQ gaps | `data/syllabus.mr25.sem3.json`, `data/scope.config.json`, `scope-map.js`, `docs/CONTENT_REVIEW.md` | Drive file may change; content gaps must stay honest |
| 3 | One scope helper drives every list/count/dropdown/quiz | `scope-map.js`, `app.js`, `practice-runner.js` | Unit 3 half logic must match existing tagged data |
| 4 | Top-of-page on exam pick, toast, scroll memory, History API, popup manager | `app.js`, `index.html`, `style.css` (+ new `popup-manager.js`) | Android back must not leave the site |
| 5 | Deep-blue header, bigger filled arrows, subject accents, Quiz Time card move, footer, A2HS | `index.html`, `style.css`, `app.js`, `pwa-install.js` | Keep Drive/WhatsApp/Tally URLs byte-identical |
| 6 | 5-card tour, transform-only animation, scroll lock, bottom sheet, reduced motion | `app.js`, `index.html`, `style.css` | Spotlight must never cover the explained control |
| 7 | Subject page, tabs, mark badges, bold questions, Info panel, collapse, filters | `app.js`, `index.html`, `style.css` | Do not lose existing filters/search |
| 8 | Diagnose AI, server-only key, model config + fallback, full-screen chat, own-AI fallback | `api/gemini.js`, `app.js`, `index.html`, `style.css`, `ai-link-test.html` | Owner must set `GEMINI_API_KEY`; old key must be rotated |
| 9 | Quiz Time 3-step flow, unit buttons, scoped engine, progress, flashcards | `practice-runner.js`, `index.html`, `style.css`, `data/*` | Existing progress keys must keep working |
| 10 | Modal hardening, copy, a11y, meta, security, admin removal | All | Regression risk — test after each group |
| 11 | Six widths, Lighthouse, D1–D8 evidence, push branch | `docs/_qa/*` | None |

## Assumptions (logged, not blocking)

1. The GitHub repo is the submodule `CSE-III-sem` inside the outer folder. All work and
   commits happen there; the outer repo only stores the submodule pointer.
2. "Semester End" is the canonical label; `sem` stays the storage key so saved progress
   and existing routes keep working.
3. Question data is the source of truth for marks. The bank really contains 1, 2, 3, 5
   and 10-mark questions (1-mark Part A and 10-mark Part B are printed sub-parts), so
   the badge shows the actual value, with singular "Mark" where needed.
4. PYQ scope for Unit 3 comes from the existing `scope` tags and keyword map; questions
   with no confident half stay visible only in Semester End and are listed for review.
5. Notes are unit-complete (D1), so Mid-1 shows Units 1–3 and Mid-2 shows Units 3–5.
6. The live Gemini key that was committed is treated as compromised. The new code reads
   only `process.env.GEMINI_API_KEY`; the owner must set it in Vercel and rotate the key.
7. "No app-install detection" means no device sniffing in the own-AI section. The
   Add-to-Home-Screen button still uses the standard `beforeinstallprompt` event and the
   iOS Share-sheet instructions, because that is the only correct way to offer A2HS.
8. Content gaps (missing notes, IE questions, flashcard depth) are reported honestly
   rather than invented. Flashcard generation is limited to content that can be traced
   to the syllabus/PYQ bank.
9. `MGIT_PYQ_HUB_MASTER_SPEC.md` is reference only; the owner's latest brief wins where
   they conflict (notably the admin removal).
10. Playwright and Marker are dev-only tools and are not added to the production bundle.

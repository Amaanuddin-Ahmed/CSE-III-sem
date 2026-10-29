# AUDIT — reproduced against the current build

Method: Chromium mobile emulation (390×844, Android Pixel UA, touch), local static server,
every flow clicked through. Screenshots in `docs/_qa/` (gitignored). The final runs also
cover 320, 360, 412, 430, 768, 568×320 and 844×390. Analytics scripts now load only on
non-localhost hosts, so the final console log is clean (0 errors, 0 page errors).

## Reproduced (current build)

| # | Screen / viewport | Issue |
|---|---|---|
| A1 | Home, 390 | Header is still white; deep-blue identity only in the logo tile. |
| A2 | Home, 390 | Mobile header is two rows (~150 px) and its back/forward arrows are 34 px, under the 44 px target. |
| A3 | Home → Mid-2, 390 | Tapping a category auto-scrolls to the Subjects list instead of going to the top, and no "Scroll down for Revision" toast exists. |
| A4 | Home, 390 | Quiz card is still "Practice with Fun", sits above the subjects, and uses the old single button. No Quiz Mode / Flash Cards boxes. |
| A5 | Subject, 390 | Quiz card and "My Progress & Streaks" remain on the subject page; the "Change Category" button is still there. |
| A6 | Subject, 390 | Floating "AI Help" button covers the "What would you like to study?" heading and card content at 390. |
| A7 | Subject cards | Metadata is "N Notes / N Questions / N Papers"; the brief wants scoped "N Notes / N Papers". DM honestly shows 0 notes, but the empty state says "Click" (mobile copy should say "Tap"). |
| A8 | Notes tab, 390 | Unit dropdown says "All In-Scope Units"; no per-exam labels ("All (Mid-2)"). |
| A9 | Question modal, 390 | Badge reads "Part A • 1 Marks"; heading is "Exam Tip"; field is "Exam Outcome"; paper is "Jul 25.pdf (Page 1)" instead of "Jul 2025 · Supplementary · Page 1". |
| A10 | Question cards | Badge shows "Part A • 1 Marks" / "Part B • 5 Marks"; button says "Exam Tips"; question text is not visibly larger/bolder. |
| A11 | Question cards | No collapse control after the last question of a chapter; "Expand All" works but no per-chapter jump-back. |
| A12 | Filters | Apply has static text, no "Show N questions"; panel actions are not sticky; no live count. |
| A13 | AI, 390 | Modal is 88vh and leaves the page visible below the input; model label "Gemini 2.5 Flash" wraps onto two lines; header is cramped. |
| A14 | AI, 390 | Sending fails with "Unable to generate an answer". Server calls non-existent model ids (`gemini-3.8-flash`, `gemini-3.5-flash`, …) and carries a committed base64 fallback key. No retry button; fallback links open bare chatgpt.com/gemini.google.com without the question. |
| A15 | AI | "Solve with AI" auto-sends the prompt; the brief requires prefill-only plus the "Where do you want to solve this?" card. |
| A16 | Footer, 390 | "Got an Idea to Improve ? Let me know" typo/casing; Rate now is ~30 px tall and stacked under "Made by"; the floating AI button overlaps the footer. LinkedIn URL still carries three `utm_*` parameters. |
| A17 | Quiz session, 390 | Header reads "0 / 36" with no "Question 1 of 36" label; no unit-selection step; no unit scoping; no auto-advance between units. |
| A18 | Flashcard, 390 | "Tap card or press Space" remains visible after flip; keyboard hint always shown; two flip-back affordances; no swipe. |
| A19 | Progress modal, 390 | Mastery rows render as invisible 0 % bars with no empty-state line; "of 140" mixes Mid-2 deck with total counters. |
| A20 | Tour, 390 | Only 3 cards, still says "Click", has no A2HS or arrows card, animates top/left/width/height and updates on every scroll (stutter), and does not lock the page. |
| A21 | Header, all | Admin lock button and client-side password check are visible to every student; Editor View is linked publicly. |
| A22 | Header | Install entry is labelled "Install app" and hidden until `beforeinstallprompt`; no "Add to Home Screen" sheet fallback on iOS. |
| A23 | Navigation | History tracks only home / exam / subject, so Android back from Notes/PYQs jumps past the subject; scroll position is reset to top on back. No breadcrumb. |
| A24 | Popups | No review prompt, no popup queue, and the old 20-second rating popup has a personal name in its headline. |
| A25 | Meta | Title is 60+ chars, twitter:card is `summary`, apple title is "MGIT Hub", no viewport-fit=cover, no 1200×630 share image. |
| A26 | Session placeholders | Templates still contain "Question text appears here…", "Answer explanation appears here…", "32", "94%"; they do not flash on a normal start, but they appear for an empty deck (IE, or a unit with no cards). |
| A27 | Data | IE has 0 PYQs; ES has 24 (Units 1–2 only); notes exist only for 4 subjects. Counts and empty states must be honest. |
| A28 | Data | Flashcard decks are 16 (Mid-1), 140 (Mid-2), 154 (Sem) — not 20 cards per unit (700). Unit 1/2 have 1 card per subject in the semester deck. |

## Checked and already fine (not reproduced)

- Category choice is remembered in `localStorage` and the "Continue with …" chip restores it.
- Drive links, WhatsApp number `916303191696`, Tally link and all subject folder URLs are correct and open in a new tab.
- "Open Original Paper in Google Drive" and "View Papers in Drive" get real URLs after the PYQ view renders (the static `href="#"` never remains interactive).
- Placeholder text does not flash during a normal quiz/flashcard start, because the session screen is hidden until data is bound.
- Part A/B filter, year filter, repeated-only filter and search all filter correctly.
- "Printed: Sem IV paper" is no longer rendered on cards (`semesterBadgeHtml` returns empty).
- Progress/streak storage survives reload; quiz scoring and retry queue work.
- Onboarding completion is persisted (`mgit_tour_seen_v2`).
- No horizontal page scroll at 390 in the tested flows; long questions wrap.
- The AI key is not present in the client bundle today, only as a server-side base64 fallback (still a committed secret — see A14).

## Fix status

| # | Status | What changed / evidence |
|---|---|---|
| A1 | Fixed | Soft pastel header matching the centre background; the deep-blue band was removed in the correction pass. |
| A2 | Fixed | Page-navigation arrows are now visible at every width and remain 44×44 px. |
| A3 | Fixed | Category pick stays at `scrollY = 0`; “Scroll down for Revision” toast with “↓ See now” and 5 s drain. |
| A4 | Fixed | Quiz Time card moved below Subjects and split into Quiz / Flashcards choices. |
| A5 | Fixed | Quiz card and progress block removed from the subject screen; “Change Category” replaced by breadcrumb/back. |
| A6 | Fixed | Floating AI button sits at the bottom edge and no longer covers headings or cards. |
| A7 | Fixed | Subject cards show only Notes + Papers; mobile copy uses “Tap”. |
| A8 | Fixed | Notes dropdown reads “All Units (Mid-1 / Mid-2 / Semester End)”. |
| A9 | Fixed | Badge uses real marks (“1 Mark”, “2 Marks”, …), “What to write”, and “Jul 2025 · Supplementary · Page 1”. |
| A10 | Fixed | Mark badges, larger/bolder question text, “What to write” label. |
| A11 | Fixed | Every chapter has its own collapse control and jump-back target. |
| A12 | Fixed | Filter panel has a live “Show N questions”, sticky actions and a working clear/apply flow. |
| A13 | Fixed | Full-height AI sheet on mobile; compact model/status pill; page cannot show below the chat. |
| A14 | Code fixed; owner action | Server proxy uses `process.env.GEMINI_API_KEY`, valid model ids, retry/429/auth handling. Live replies remain blocked until the key is set in Vercel and the old committed key is rotated. Own-AI fallback includes the question/prompt and a copy button. |
| A15 | Fixed | “Solve with AI” prefills the prompt only; the “Where do you want to solve this?” card opens ChatGPT/Gemini/own AI. |
| A16 | Fixed | Footer copy/typography fixed; Rate now is a 44 px target; LinkedIn `utm_*` removed; rating headline no longer names a person. |
| A17 | Fixed | Session bar shows “Question 1 of N” and a counter; practice starts with subject → unit; auto-advance and exit cleanup work. |
| A18 | Fixed | Keyboard hint hidden on touch; swipe works; the flipped face gives one clear next action. |
| A19 | Fixed | Percentage text is visible on every row, the card total follows the active exam deck, and an empty-state line appears until something is mastered. |
| A20 | Fixed | Six-card tour (Drive, exam scope, subjects, Quiz Time, AI, page arrows), no “Click”, static spotlight, gesture-blocking overlay. Programmatic scrolling stays enabled so each step can reveal its target. |
| A21 | Fixed | `admin.html`, the lock button, admin modal/JS, `gemini.js`, `docs/ADMIN_GUIDE.md` and README/admin references removed. |
| A22 | Fixed | “Add to Home Screen” button/sheet with the native prompt when available and iOS Share instructions otherwise. |
| A23 | Fixed | Breadcrumb (`Home › Exam › Subject › Mode`), History API integration and scroll restoration on Back. |
| A24 | Fixed | Single-popup coordinator (3.5 s gap, suppressed during tour/modal/practice/AI) and a generic rating prompt. |
| A25 | Fixed | 54-character title, `summary_large_image`, 1200×630 `assets/og-image.png`, `viewport-fit=cover`, updated Apple title. |
| A26 | Fixed | Empty quiz/deck states replace the template placeholders before any session is shown. |
| A27 | **Content gap** | IE has 0 PYQs but one verified Unit 5 note; ES has 24 PYQs (Units 1–2 only) and notes for Units 1–5; DM and COA now have five notes each. SE still has no notes. Reported in `docs/CONTENT_REVIEW.md`; no question rows invented. |
| A28 | **Content gap** | Decks are 16 / 140 / 154 cards, not 20 per unit. Reported with the per-exam distribution; no cards invented. |

## Final verification

- `docs/_qa/qa.js` — 8 viewports (320×568, 360×640, 390×844, 412×915, 430×932,
  768×1024, 568×320 landscape, 844×390 landscape): no horizontal page overflow, no
  console errors, no page errors, no interactive target below 40 px in the audited
  home/subject/session controls, and the toast/unit-picker assertions pass.
- `docs/_qa/scope-check.js` — Mid-1 DM 209 PYQs / COA 193; Mid-2 DM 198 / COA 195;
  Semester End DM 471 / COA 477. Note counts now resolve to DM 4 / 3 / 5 and COA 2 / 3 / 5;
  Mid-2’s unit picker shows Units 3–5. Mid-1 and Mid-2 Unit 3 cards show the split titles
  and empty states.
- `docs/_qa/check-polish.js` — breadcrumb fit at 320/390/768, tour step 5 geometry above
  the fixed AI button at 320, flashcard back face and touch-only hint.
- `docs/_qa/copy-audit.js` — no straight quotes and no “Click” in UI chrome (question-bank
  text is excluded because it is source content, not interface copy).
- `node --check` passes for every edited JavaScript file.
- Not verified here: a real iOS/Android device, Lighthouse scores, and live Gemini
  replies (owner key required).

## Correction pass (current build)

- Header returned to a soft pastel gradient; the browser-style back/forward arrows are
  now in a page-navigation row at every width, with disabled states and 44 px targets.
- Exam-card unit pills and the Unit 3 split alert were removed. Subject cards no longer
  repeat the exam's unit range, and chapter headings are compact `Unit N` labels.
- Footer rules: **Made by Amaan** is visible on the home screen only; every inner page
  keeps feedback and Rate now, with the rating target still 44 px.
- Verified Drive notes added: DM Units 1–4 + complete notes, COA Units 1/4/5, ES Unit 5,
  I&E Unit 5. DBMS notes now cover Units 1–3. Note counts are 18 / 20 / 31 for
  Mid-1 / Mid-2 / Semester End.
- Flashcards now ask whether to continue to the next unit with cards or exit when a
  unit deck finishes. The prompt was verified for Unit 3 → 4 → 5.
- Final custom Chromium run: 35/35 correction checks passed with 0 console errors;
  the eight-viewport QA run passed with 0 page errors and no horizontal overflow.

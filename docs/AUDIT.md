# AUDIT — reproduced against the current build

Method: Chromium mobile emulation (390×844, Android Pixel UA, touch), local static server,
every flow clicked through. Screenshots in `docs/_qa/` (gitignored). Console was clean
apart from the expected local 404s for Vercel Analytics scripts.

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

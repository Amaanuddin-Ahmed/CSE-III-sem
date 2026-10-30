# RECON — MGIT PYQ Hub content surfaces (Phase 0)

Date: 2026-10-30 · Repo: `CSE-III-sem` (submodule) · Branch: `content/mr25-rebuild`

## 1. Where the practice content lives

| Surface | File | Loaded by |
|---|---|---|
| Mid-1 quiz + flashcards | `data/mid1-practice.js` (`const MID1_PRACTICE`) | `index.html` line 1260 |
| Mid-2 quiz + flashcards | `data/mid2-practice.js` (`const MID2_PRACTICE`) | `index.html` line 1258 |
| Semester-End quiz + flashcards | `data/sem-practice.js` (`const SEM_PRACTICE`) | `index.html` line 1259 |
| PYQ questions / notes | `pyq-data.js` (`QUESTIONS_DATABASE`, `NOTES_DATA`, `SUBJECTS_DATA`) | `index.html` |
| Exam scope engine | `scope-map.js` (`EXAM_CONFIG`, `SCOPE_MAP`) | `index.html` |

The three practice files are plain static JS, not a database or API. `practice-runner.js`
picks exactly one file at runtime:

```js
getActiveDataSource() {
  const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
  if (activeExam === 'sem'  && window.SEM_PRACTICE)  return window.SEM_PRACTICE;
  if (activeExam === 'mid1' && window.MID1_PRACTICE) return window.MID1_PRACTICE;
  return window.MID2_PRACTICE || {};
}
```

There is no lazy fetch: all three banks are downloaded on every page load. The
"Loading questions…" string is a UI state, not a network request.

## 2. Schema (unchanged by this work)

Quiz item:

```
id, type ("mcq" | "fib" | "tf"), unit (1–5), scope ("mid1" | "mid2" | "sem"),
topic, question, options[4] (mcq), answerIndex (mcq), accepted[] (fib),
difficulty ("easy" | "medium" | "hard"), source, explanation
```

Flashcard item:

```
id, subjectId, unit (1–5), topic, highYield (bool), front, back
```

Bank wrapper: `version, exam, regulation, targetAudience, subjects[], quiz{}, flashcards{}`.

Gaps versus the brief's logical record: there is **no** `topicId`, `pyq[]`, or `scope`
field on flashcards; MCQs have `scope` but no `topicId`/`pyq[]`. Per the brief, this
information is carried in a sidecar (`coverage_matrix.csv`) and in a final
`Keywords:` line on flashcard backs. The schema was not extended.

## 3. How unit, difficulty, High-Yield, topic tag and scope are represented

- **Unit**: numeric `unit` field on every item; drives the unit cards and the
  `Unit N` tag above a flashcard.
- **Difficulty**: `difficulty` on quiz items only (`easy|medium|hard`). Flashcards have
  no difficulty field.
- **High-Yield**: `highYield` boolean on flashcards; rendered as the flame pill.
- **Topic tag above a flashcard**: `topic` string, rendered by
  `renderFlashcard()` into `#fcTopicLabel`.
- **Exam scope**: the *bank* decides the category. `EXAM_CONFIG` declares
  Mid-1 = units 1–2 + first half of unit 3, Mid-2 = second half of unit 3 + units 4–5,
  Semester End = all units. `scope-map.js` can classify a Unit-3 item by
  `scope` first, then by subject keyword lists.
- **Important finding**: `initQuiz()` and `initFlashcards()` filter only by
  `unit`; they do **not** call `isItemInScope()` or `classifyUnit3()`. So a Unit-3
  card in a bank is shown in both mid-terms regardless of its `scope` field. The
  only safe way to keep the split without changing app logic is to put each half
  of Unit 3 in the matching bank only. This rebuild does that; the Semester-End
  bank carries both halves.
- The unit picker is limited by `EXAM_CONFIG[exam].units`, so Mid-1 never offers
  Units 4–5 and Mid-2 never offers Units 1–2.

## 4. Progress storage and unknown IDs

- Key: `mgit_study_progress_v1` (`activity-tracker.js`).
- Shape: `{ streakDays, lastStreakCheckDate, exams: { mid1|mid2|sem: { sessionsCount,
  questionsMastered, totalAttempted, correctCount, subjects: { DM: { viewedQuestionIds[],
  masteredQuestionIds[], gotItCardIds[], viewedCardIds[], revisedCardIds[] } } } } }`.
- Flashcard actions: `recordCardViewed`, `recordCardResult` (Got it / Revise again),
  `getFlashcardProgress`, `getLearnedFlashcards`.
- **Unknown IDs are not ignored.** `getFlashcardProgress()` and
  `getTotalQuestionsMastered()` count every stored ID without checking it against the
  current bank. A deleted card therefore keeps inflating "viewed / mastered" totals.
  This is a real defect. The rebuild preserves every kept/fixed ID; any deleted ID
  will be listed in the changelog. A minimal cleanup at read time is proposed in
  `REVIEW_QUEUE.md` / `CHANGELOG.md` (filter stored IDs to the active bank before
  counting) unless the owner prefers to leave historical counts untouched.

## 5. Maths and symbol rendering

`rich-text.js` already bundles **KaTeX** and renders `$...$`, `$$...$$`, `\(...\)`,
`\[...\]`; it has a Unicode fallback for when KaTeX is unavailable. No new library was
added. Cards may use LaTeX, but plain Unicode is preferred for short formulas so a
390 px phone never overflows. Inline code uses backticks; fenced code is supported.

## 6. Existing content counts (before rebuild)

Unique items across the three banks (same ID in mid2 and sem counted once):

| Subject | MCQ | FIB/TF | Flashcards | Total unique |
|---|---:|---:|---:|---:|
| DM | 33 | 21 | 37 | 91 |
| COA | 26 | 18 | 35 | 79 |
| OOPJ | 27 | 16 | 33 | 76 |
| DBMS | 27 | 16 | 31 | 74 |
| SE | 27 | 16 | 29 | 72 |
| ES | 26 | 17 | 28 | 71 |
| IE | 26 | 17 | 27 | 70 |
| **Total** | **192** | **121** | **220** | **533** |

Per bank: Mid-1 = 31 quiz + 66 flashcards; Mid-2 = 252 quiz + 140 flashcards;
Semester End = 254 quiz + 154 flashcards. Mid-2 and Semester End share 364 IDs;
Mid-1 shares none. There are no duplicate question texts across unique IDs.

Coverage floors in the brief are 430 MCQ and 510 flashcards. The Semester-End bank is
the canonical complete deck; the mid-term banks are populated from the same content for
their scopes, with bank-specific IDs.

## 7. PYQ surface

`pyq-data.js` holds 2,288 parsed questions from 78 paper files (87 files exist in the
Drive inventory; some are duplicate uploads). Fields include `subjectId`, `chapter`
(old unit tag), `part`, `marks`, `years[]`, `frequency`, `question`, `paperName`,
`pageNumber`, `examType`, and an `appearances[]` array with year/month/session.
There are **no Innovation & Entrepreneurship PYQs** and only 24 ES questions (a Mid-1
model paper). Topic tags are unit-level only (`Unit 1`…`Unit 5`), so topic mapping must
be done from question text.

The cached OCR (` .cache/pyq_ocr_psm4_all/`, `.cache/pyq_ocr_tess/`) exists for most
papers and is used to spot-check the parsed text, especially for tables, circuits and
formulas.

## 8. What is out of bounds for this work

No UI, routing, styling, PWA, AI Help behaviour or progress-tracking changes, with the
single exception of AI Help suggestion tiles if a tile points outside the MR25 syllabus.
No schema changes. No ID changes for kept/fixed cards. No force-push to main.

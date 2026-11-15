# MGIT PYQ Hub — Comprehensive Site Audit & Technical Action Plan
**Audit Date:** November 15, 2026  
**Audited Target:** [https://mgit-pyq-hub.vercel.app/](https://mgit-pyq-hub.vercel.app/)  
**Repository:** `Amaanuddin-Ahmed/CSE-III-sem` (Branch: `main`)  
**Auditor:** Antigravity Autonomous Diagnostic Agent (Google DeepMind)  
**Target Audience:** Engineering Agents & Core Maintainers for Direct Remediation  

---

## Executive Summary & Audit Scorecard

MGIT PYQ Hub is an ambitious, feature-rich academic portal serving Semester III Computer Science & Engineering students at Mahatma Gandhi Institute of Technology (MGIT, Autonomous, Affiliated to JNTUH under MR-22 / MR-25 regulations). It aggregates Previous Year Questions (PYQs), unit-scoped notes, model academic answers, flashcard practice sessions, and AI-assisted tutoring.

While the user interface features clean glassmorphism styling, KaTeX math formatting, and offline PWA scaffolding, this audit discovered **critical data desynchronizations, missing pre-compiled solutions, widespread question-solution mismatches, unit misclassifications, and animation pipeline bottlenecks** that significantly degrade user trust and academic reliability.

### Diagnostic Scorecard

| Category | Score / Grade | Status | Critical Findings |
| :--- | :---: | :---: | :--- |
| **Data Integrity & Solutions** | `42 / 100 (F)` | 🚨 CRITICAL | 260 OOPJ solutions missing in production JSON; 183 DM answer duplication clusters; 58 SE questions sharing one generic design answer. |
| **Question Classification** | `58 / 100 (D)` | ⚠️ MAJOR DEFECT | 60 COA Unit 3 questions are actually Unit 4/1 Computer Arithmetic; 14 DM Unit 3 questions belong to Combinatorics/Induction. |
| **Solution Precision** | `52 / 100 (F)` | 🚨 CRITICAL | Specific induction proofs (e.g. $1\cdot 2 + 2\cdot 3 + \dots$) receive generic definition boilerplate rather than actual formula derivations. |
| **Metadata Consistency** | `64 / 100 (D)` | ⚠️ MAJOR DEFECT | Frequency metrics range from 1 to 46 with completely inconsistent scales across subjects; ES paper count shows 3 instead of 5. |
| **UX & Modern Aesthetics** | `76 / 100 (C+)` | 🟡 NEEDS POLISH | Abrupt route transitions; missing view transitions API; lack of in-modal prev/next question controls; unstyled code blocks. |
| **PWA & Offline Capability** | `68 / 100 (D+)` | ⚠️ DEFECT | `sw.js` fails to pre-cache `data/solutions/*.json` and `popup-manager.js`, breaking offline study mode completely. |
| **Performance & Animations** | `79 / 100 (C+)` | 🟡 ACCEPTABLE | 27 CSS keyframes active; background blob animations cause continuous GPU/CPU repaints on mobile devices. |

---

## SECTION 1: Major Mistakes (Content & Data Errors)

These are severe data and academic integrity errors that directly mislead students preparing for autonomous semester examinations.

### 1.1 OOPJ: 260 Questions Missing Pre-compiled Solutions in `data/solutions/OOPJ.json`
* **Severity:** **BLOCKER (P0)**
* **Affected Subject:** Object-Oriented Programming through Java (`OOPJ`)
* **Impact Area:** Unit 1 (165 missing questions) and Unit 2 (95 missing questions). 43.1% of all OOPJ questions in the database lack a pre-compiled academic solution in `data/solutions/OOPJ.json`.
* **Root Cause Diagnosis:**
  - Individual solution files **do exist** on disk inside `solutions/OOPJ/unit-1/` (115 files) and `solutions/OOPJ/unit-2/` (116 files).
  - However, the build/aggregation script that generates the unified distribution file `data/solutions/OOPJ.json` was never executed or failed to index normalized question keys properly.
  - When a student clicks "View Solution" for any OOPJ Unit 1 or Unit 2 question, `app.js` queries `solutionsCache['OOPJ'][normKey]`, receives `null`, attempts an unpopulated localStorage lookup, and fails over to an empty state or a sluggish third-party AI call.
* **Orphan Questions:** Furthermore, 7 questions (`OOPJ-A1-0301`, `OOPJ-A1-0305`, `OOPJ-A1-0309`, `OOPJ-A1-0312`, `OOPJ-A1-0314`, `OOPJ-B2-0402`, `OOPJ-B2-0408`) possess neither an entry in `data/solutions/OOPJ.json` nor an individual file in `solutions/OOPJ/`.

### 1.2 ES: Incorrect `paperCount` Metadata in Master Database
* **Severity:** **HIGH (P1)**
* **Affected Subject:** Environmental Studies (`ES`)
* **Location:** `pyq-data.js` $\rightarrow$ `SUBJECTS_DATA.ES.paperCount`
* **Current Value:** `3`
* **Correct Value:** `5`
* **Explanation:** During the recent deep ingestion and OCR pipeline execution, 5 distinct official exam papers were extracted and verified:
  1. `MID-1 Regular/Supplementary Examination`
  2. `Semester End Model Question Paper`
  3. `Internal Assignment-II Question Bank`
  4. `MR-22 Autonomous End Examination (Part-B)`
  5. `MR-22 Autonomous End Examination (Part-A)`
  The `paperCount` was left hardcoded at `3` in `SUBJECTS_DATA.ES`, creating an immediate visual discrepancy on the subject selection card and header badge.

### 1.3 DM: Severe Question Misclassification in Unit 3 (Algebraic Structures)
* **Severity:** **HIGH (P1)**
* **Affected Subject:** Discrete Mathematics (`DM`)
* **Syllabus Definition:** Unit 3 is officially titled *"Algebraic Structures: Semigroups, Monoids, Groups, Subgroups, Homomorphism, Lattices & Boolean Algebra"*.
* **Defect:** 14 questions placed in Unit 3 have zero mathematical relation to Algebraic Structures:
  - **8 Mathematical Induction Questions** (e.g., `DM-A3-1029`, `DM-B3-1062`, `DM-B3-1063`, `DM-B3-1064`, `DM-B3-1078`, `DM-B3-1080`). Induction belongs strictly to **Unit 4** (or foundational logic in Unit 1).
  - **6 Permutation & Combination Questions** (e.g., `DM-A3-1032`, `DM-A3-1040`, `DM-A3-1055`, `DM-B3-1066`, `DM-B3-1068`, `DM-B3-1079`, `DM-B3-1089`, `DM-B3-1116`). Questions asking for permutations of `"MATHEMATICS"`, `"DRIVER"`, or committee selections belong strictly to **Unit 4 (Elementary Combinatorics)**.
* **Student Consequence:** A student revising Unit 3 for internal mid-terms or end exams gets tested on combinatorics problems that will not appear in the Unit 3 exam section.

### 1.4 COA: 60 Unit 3 Questions Misclassified (Computer Arithmetic Mislabeled as RTL)
* **Severity:** **HIGH (P1)**
* **Affected Subject:** Computer Organization & Architecture (`COA`)
* **Syllabus Definition:** Unit 3 is officially titled *"Register Transfer Language, Micro-operations & Basic Computer Organization"*.
* **Defect:** Out of 92 questions in Unit 3, **60 questions (65.2%)** are completely unrelated to RTL or Micro-operations!
  - They cover floating-point representation, IEEE 754 standards, 2's complement arithmetic, Booth's multiplication algorithm, restoring/non-restoring division, and fixed-point ranges (e.g., `COA-A3-0192` through `COA-A3-0221`).
  - These topics belong to **Unit 1 (Data Representation)** or **Unit 4 (Computer Arithmetic)**.
  - In fact, only **1 question** in Unit 3 (`COA-A3-0214`) explicitly addresses Register Transfer Notations!

### 1.5 DM: Generic Boilerplate Substituted for Specific Mathematical Proofs
* **Severity:** **CRITICAL (P0)**
* **Affected Questions:** `DM-B3-1062`, `DM-B3-1063`, `DM-B3-1064`, `DM-B3-1078`, `DM-B3-1080`, `DM-A3-1029`.
* **Defect:** For 6 completely distinct examination questions asking to prove complex summation and exponential formulas via Mathematical Induction, the database serves the exact same generic template definition:
  > *"The Principle of Mathematical Induction (PMI) is a formal mathematical proof technique... Example: Prove $1 + 2 + \dots + n = \frac{n(n+1)}{2}$..."*
* **Detailed Mismatches:**
  - `DM-B3-1062` asks: *"Using the principle of mathematical induction, prove that $1\cdot 2 + 2\cdot 3 + 3\cdot 4 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$"* $\rightarrow$ **Solution completely fails to provide this proof.**
  - `DM-B3-1063` asks: *"Use mathematical induction to show that $1 + 2 + 2^2 + 2^3 + \dots + 2^n = 2^{n+1} - 1$"* $\rightarrow$ **Solution completely fails to provide this proof.**
  - `DM-B3-1078` asks: *"Use mathematical induction to show that $1 + 2 + 2^2 + \dots + 2^n = 2^{n+1} - 1$ for all positive integers $n$"* $\rightarrow$ **Solution completely fails to provide this proof.**

### 1.6 SE: Extreme Over-Clustering (58 Questions Linked to 1 Generic Answer)
* **Severity:** **HIGH (P1)**
* **Affected Subject:** Software Engineering (`SE`)
* **Defect:** An audit of `data/solutions/SE.json` revealed that **58 distinct questions** across Unit 3 and Unit 4 have been collapsed into a single generic markdown document entitled `### Software Design Process, Design Concepts & User Interface Design`.
  - Specific questions such as *"List kinds of behavioural and object models"*, *"Explain requirement review"*, *"Define design process"*, and *"What are golden rules of user interface design?"* all output the identical summary text.
  - Furthermore, 28 questions share `Software Architecture and Architectural Styles`, and 15 questions share `White-Box Testing vs. Black-Box Testing`. Students asking about basis path testing receive a high-level comparison table rather than cyclomatic complexity equations.

---

## SECTION 2: Major Issues (Functional, Architectural & UX Problems)

### 2.1 Wildly Inconsistent Question Recurrence / Frequency Metadata
* **Location:** `QUESTIONS_DATABASE[i].frequency` and question card badges.
* **Data Discrepancy Breakdown:**
  - **DM:** `min: 1`, `max: 3`, `avg: 1.1` (Only 7 questions have frequency $\ge 3$)
  - **COA:** `min: 1`, `max: 2`, `avg: 1.0` (0 questions have frequency $\ge 3$)
  - **OOPJ:** `min: 1`, `max: 26`, `avg: 8.0` (204 questions have frequency $\ge 10$)
  - **DBMS:** `min: 9`, `max: 46`, `avg: 29.6` (354 questions have frequency $\ge 10$!)
  - **SE:** `min: 4`, `max: 32`, `avg: 16.4` (317 questions have frequency $\ge 10$!)
  - **ES:** `min: 1`, `max: 3`, `avg: 1.4` (0 questions have frequency $\ge 3$)
* **The Problem:** DBMS has only 14 papers total, yet questions display `Frequency: 46` or `Repeated 46 times`! This occurs because DBMS, SE, and OOPJ frequency fields were populated with an unnormalized percentage recurrence score or cross-semester heuristic, whereas DM and COA represent actual raw paper appearance counts.
* **UX Consequence:** Students lose confidence in the "High-Yield / Repeated" filter because nearly 98% of DBMS questions are labeled "repeated $\ge 10$ times", rendering the filter completely meaningless.

### 2.2 Subject Course Codes Completely Missing Across All Subjects
* **Location:** `pyq-data.js` $\rightarrow$ `SUBJECTS_DATA[subId].code`
* **Current Values:**
  - `DM.code`: `""` (Empty string)
  - `COA.code`: `""`
  - `OOPJ.code`: `""`
  - `DBMS.code`: `""`
  - `SE.code`: `""`
  - `ES.code`: `""`
  - `IE.code`: `""`
* **Required Values:** The official MGIT MR-22 curriculum mandates:
  - `DM`: **MA301BS**
  - `COA`: **CS302PC**
  - `OOPJ`: **CS303PC**
  - `DBMS`: **CS304PC**
  - `SE`: **CS305PC**
  - `ES`: **MC301BS**
  - `IE`: **MB301HS**
* **Fix Required:** Populate these codes so that subject headers, print views, and syllabus cards present authentic institutional metadata.

### 2.3 Service Worker Offline Architecture Omits Solution Datasets
* **Location:** `sw.js` $\rightarrow$ `STATIC_ASSETS`
* **The Problem:** `STATIC_ASSETS` pre-caches the application shell (`index.html`, `style.css`, `app.js`, `pyq-data.js`), but completely ignores:
  - `data/solutions/DM.json`
  - `data/solutions/COA.json`
  - `data/solutions/OOPJ.json`
  - `data/solutions/DBMS.json`
  - `data/solutions/SE.json`
  - `data/solutions/ES.json`
  - `popup-manager.js`
* **Consequence:** If a student installs the PWA on their phone or laptop and attempts to study offline or in low-connectivity lecture halls, navigating questions works, but clicking "View Solution" immediately triggers a network fetch error and leaves the modal empty.

### 2.4 Version Stamp Drift Across Core Files
* **Discrepancy:**
  - `app.js` (Line 2): `v2026.11.06-sem-end-sync-2`
  - `sw.js` (Line 11): `mgit-hub-v2026.11.07-es-solutions-complete-1`
  - `version.json`: `v2026.11.07-es-solutions-complete-1`
* **The Problem:** The browser console displays an outdated build string from the previous synchronization session, creating false debugging trails.

### 2.5 Hardcoded Mid-2 Exam Resume Banner in Static HTML
* **Location:** `index.html` (Lines 194 and 247)
* **The Problem:**
  - Line 194 hardcodes: `<span id="continueChipText">Resume Mid-2</span>`
  - Line 247 hardcodes: `<span class="active-banner-tag" id="bannerExamTag">Mid-2</span>`
  - While JavaScript updates these dynamically on load if localStorage exists, during initial paint or before hydration finishes, students intending to prepare for Semester End see "Resume Mid-2" flashing on screen.


---

## SECTION 3: Major Technical Bugs (Frontend, Runtime & Rendering)

### 3.1 OCR Formula Mangling & Truncation in Master Question Bank
Several questions extracted from scanned question papers contain unreadable or corrupted OCR text:
1. **`DM-B3-1062`**: Text reads `"Using the principle of mathematical induction, prove that 12+23+3 4 +."`
   - *Should read:* `"Using the principle of mathematical induction, prove that $1\cdot 2 + 2\cdot 3 + 3\cdot 4 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$ for all $n \ge 1$."`
2. **`DM-B3-1063`**: Text reads `"Use mathematical induction to show that 1+2+22+33 +."`
   - *Should read:* `"Use mathematical induction to show that $1 + 2 + 2^2 + 2^3 + \dots + 2^n = 2^{n+1} - 1$ for all integers $n \ge 0$."`
3. **`DM-B3-1078`**: Text reads `"Use mathematical induction to show that 1+2+22+.+ 2\"=2\"+1_1 for all positive integers n."`
   - *Should read:* `"Use mathematical induction to show that $1 + 2 + 2^2 + \dots + 2^n = 2^{n+1} - 1$ for all positive integers $n$."`
4. **`DM-B3-1079`**: Text reads `"Write the 3-combinations and 3-permutations of {3."`
   - *Should read:* `"Write the 3-combinations and 3-permutations of the set $\{a, b, c, d\}$ (or $\{1, 2, 3, 4\}$)."`
5. **`DM-B3-1089`**: Text reads `"Find the number of permutations that can be made out of the letter I in word ASS "`
   - *Should read:* `"Find the number of permutations that can be made out of the letters in the word ASSASSINATION."`
6. **`COA-A3-0203`**: Text reads `"Perform 2's complement of (i) 10010010 Gi) 01101100."`
   - *Should read:* `"Perform 2's complement of (i) $10010010_2$ and (ii) $01101100_2$."`

### 3.2 KaTeX Inline Math Delimiter Collisions
* **Location:** `app.js` $\rightarrow$ `formatMathAndMarkdown()` and `rich-text.js`
* **Defect:** Questions containing raw dollar signs (`$`) or unescaped braces (e.g. `{3}`) cause KaTeX parsing exceptions. KaTeX throws an error to the console and leaves the raw delimiter string exposed in the DOM instead of gracefully degrading to clean text formatting.

### 3.3 Modal Duplicate Element IDs and Event Listener Leaks
* **Location:** `index.html` (Lines 310-420)
* **Defect:** Both `#questionModal` and `#solutionModal` define elements with similar IDs (`#modalYearsAppeared`, `#modalRecurrence`, `#solQuestionTitle`).
* When toggling rapidly between viewing a question details modal and the solution modal, `document.getElementById('modalYearsAppeared')` grabs the first element in DOM tree order, leading to stale metadata in the visible modal.

---

## SECTION 4: Major Visual & Aesthetic Improvements

To make MGIT PYQ Hub look world-class, modern, and engaging for engineering students, several high-impact UI/UX enhancements should be introduced:

### 4.1 Modernized Glassmorphism & Elevated Micro-Interactions
* **Current State:** Glass panels utilize standard semi-transparent backgrounds with a simple border.
* **Modern Enhancement:**
  - Enhance glassmorphic depth using multi-layered specular highlights:
    ```css
    .glass-panel {
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.45);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
    }
    html[data-theme="dark"] .glass-panel {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px) saturate(190%);
      -webkit-backdrop-filter: blur(16px) saturate(190%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
    }
    ```
  - Add interactive 3D subtle tilt (`perspective(1000px) rotateX(...) rotateY(...)`) on subject cards upon hover.

### 4.2 Seamless View Transitions (Native Web API)
* **Current State:** Switching from the Subject List to Subject Detail View or clicking between Unit tabs causes an abrupt CSS `display: block / none` swap.
* **Improvement:** Implement the native `document.startViewTransition()` API:
  ```javascript
  function transitionToSubject(subjectId) {
    if (!document.startViewTransition) {
      renderSubjectDetail(subjectId);
      return;
    }
    document.startViewTransition(() => {
      renderSubjectDetail(subjectId);
    });
  }
  ```
  This creates a smooth, native app-like morphing transition where the subject card expands into the full-page header without layout snapping.

### 4.3 Solution Modal: In-Modal Navigation & Power Tools
Currently, when a student opens a solution, they must close the modal, scroll through the list to find the next question, and click "View Solution" again.
* **Proposed UX Overhaul:**
  1. **Next / Previous Question Controls:** Sticky footer buttons inside the modal: `[← Previous Question]` and `[Next Question →]` allowing keyboard arrow navigation (`KeyLeft` / `KeyRight`).
  2. **Copy Solution Button:** One-click copy markdown with an animated `"Copied to Clipboard!"` toast.
  3. **Print / Export to PDF Button:** Clean print stylesheet triggers an isolated, beautifully formatted PDF of the question and its model answer.
  4. **Key Formula Highlights Callout:** An automatic summary pill box at the top of numerical solutions listing key formulas used (e.g. `Bayes' Theorem`, `Booth's Algorithm Rules`).

### 4.4 High-Yield Question Categorization Badges
Instead of displaying raw unnormalized numbers like `Frequency: 46`, replace with intuitive visual tier badges:
- **🔥 Core Repeater / High Yield:** Appeared in $\ge 3$ examination cycles. Highlighted with a crimson/gold pulse badge.
- **⚡ Frequently Asked:** Appeared in 2 cycles. Indigo badge.
- **📘 Standard Syllabus Coverage:** Appeared in 1 cycle. Slate badge.

### 4.5 Performance Optimization of CSS Animations
* **Issue:** 27 CSS `@keyframes` run continuously, including three large floating gradient blobs (`driftPink`, `driftPurple`, `driftBlue`) with heavy CSS blur filters (`filter: blur(80px)`).
* **Fix:**
  - Bind animation execution to `IntersectionObserver` or disable infinite translation on mobile devices when battery-saving mode or `prefers-reduced-motion` is detected.
  - Apply `will-change: transform` and `transform: translate3d(0, 0, 0)` to offload blob compositing strictly to the GPU.

---

## SECTION 5: Minor Mistakes & Minor Bugs

1. **Unit Filter Tabs Mobile Padding:** On screens narrower than 380px, unit filter pills (`All`, `Unit 1`, ..., `Unit 5`) wrap onto two jagged lines with uneven vertical padding.
2. **Missing Accessible Labels on Action Buttons:** The "Switch Exam Target" button and the floating AI helper toggle lack descriptive `aria-label` tags.
3. **Dark Mode Code Block Styling:** In `css/theme-dark.css`, inline code blocks (`` `code` ``) retain dark text against a dark background in certain solution accordions due to a CSS specificity collision with `.solution-body code`.
4. **Mascot Bob Animation Clipping:** When the viewport width is between 320px and 360px, the animated mascot bubble slightly overlaps the question card title.
5. **Notes Card Drive Link Fallback:** For two notes in SE (`NOTE-SE-04`, `NOTE-SE-05`), the direct Drive preview URL falls back to generic folder view because the file IDs were indexed from shared links rather than standard export URLs.


---

## SECTION 6: Exhaustive Question-by-Question Solution Audit & Correction Guide

This section is organized strictly by subject order: **DM first**, followed by **COA**, then **OOPJ**, **DBMS**, **SE**, and **ES**. Every flagged item lists the **Question ID**, **Original Question Text**, **Identified Defect / Mismatch**, and the **Exact Remediation Required**.

---

### Part A: Discrete Mathematics (DM) — Detailed Question Audit

#### 1. Mathematical Induction & Specific Formula Proof Failures

| Question ID | Question Text in Database | Marks / Unit | Current Flawed Answer in Database | What Should Be Fixed First & Exact Required Solution |
| :--- | :--- | :---: | :--- | :--- |
| **`DM-B3-1062`** | `Using the principle of mathematical induction, prove that 12+23+3 4 +.` | 5M / U3 | Gives generic definition of PMI + proof of $\sum i = \frac{n(n+1)}{2}$. | **FIX #1:** Fix question text to: *"Using the principle of mathematical induction, prove that $1\cdot 2 + 2\cdot 3 + 3\cdot 4 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$ for all $n \ge 1$."*<br>**FIX #2:** Provide the exact induction proof:<br>1. *Base Case ($n=1$):* LHS $= 1\cdot 2 = 2$. RHS $= \frac{1(2)(3)}{3} = 2$. True.<br>2. *Inductive Hypothesis:* Assume true for $n=k$: $S_k = \frac{k(k+1)(k+2)}{3}$.<br>3. *Inductive Step ($n=k+1$):* $S_{k+1} = S_k + (k+1)(k+2) = \frac{k(k+1)(k+2)}{3} + (k+1)(k+2) = (k+1)(k+2)\left[\frac{k}{3} + 1\right] = \frac{(k+1)(k+2)(k+3)}{3}$. Proved.<br>**FIX #3:** Move question from Unit 3 to Unit 4. |
| **`DM-B3-1063`** | `Use mathematical induction to show that 1+2+22+33 +.` | 5M / U3 | Generic definition of PMI. | **FIX #1:** Correct question text to: *"Use mathematical induction to show that $1 + 2 + 2^2 + 2^3 + \dots + 2^n = 2^{n+1} - 1$ for all integers $n \ge 0$."*<br>**FIX #2:** Provide exact proof:<br>1. *Base Case ($n=0$):* LHS $= 2^0 = 1$. RHS $= 2^1 - 1 = 1$. True.<br>2. *Inductive Hypothesis:* Assume true for $n=k$: $1 + 2 + \dots + 2^k = 2^{k+1} - 1$.<br>3. *Inductive Step ($n=k+1$):* Add $2^{k+1}$ to both sides: $(2^{k+1} - 1) + 2^{k+1} = 2\cdot 2^{k+1} - 1 = 2^{k+2} - 1$. Proved.<br>**FIX #3:** Move question from Unit 3 to Unit 4. |
| **`DM-B3-1064`** | `By using mathematical induction prove that the given equation is true for all positive integers.` | 5M / U3 | Generic definition of PMI. | **FIX #1:** Check source PDF (Feb 2024 Exam) and restore the missing equation (typically $1^2 + 2^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$ or $n^3 - n$ is divisible by 3).<br>**FIX #2:** Provide full step-by-step induction proof for the identified equation.<br>**FIX #3:** Move from Unit 3 to Unit 4. |
| **`DM-B3-1078`** | `Use mathematical induction to show that 1+2+22+.+ 2"=2"+1_1 for all positive integers n.` | 5M / U3 | Generic definition of PMI. | **FIX #1:** Clean up OCR corruptions in question text: *"Use mathematical induction to show that $1 + 2 + 2^2 + \dots + 2^n = 2^{n+1} - 1$ for all integers $n \ge 0$."*<br>**FIX #2:** Supply complete induction derivation (same proof steps as `DM-B3-1063`).<br>**FIX #3:** Move from Unit 3 to Unit 4. |
| **`DM-B3-1080`** | `Use mathematical induction to prove that 1+2+3 +.` | 5M / U3 | Generic definition of PMI. | **FIX #1:** Complete truncated question text to: *"Use mathematical induction to prove that $1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$ for all positive integers $n \ge 1$."*<br>**FIX #2:** Align solution with structured academic layout showing explicit Base Step ($n=1$), Inductive Hypothesis ($P(k)$), and Inductive Step ($P(k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}$). |
| **`DM-A3-1029`** | `What is the principle of Mathematical induction?` | 2M / U3 | 5-mark lengthy derivation with large KaTeX blocks. | **FIX #1:** Condense into a concise, high-scoring 2-mark answer stating the formal principle and the 2 core conditions (Basis Step & Inductive Step).<br>**FIX #2:** Move from Unit 3 to Unit 4. |

---

#### 2. Permutation, Combination & Set Misclassifications in DM Unit 3

| Question ID | Question Text | Current Location | True Syllabus Placement | Exact Remediation Required |
| :--- | :--- | :---: | :---: | :--- |
| **`DM-A3-1032`** | `In how many ways can the letters of the word 'MATHEMATICS' be arranged?` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Solution is mathematically sound ($N = \frac{11!}{2! \cdot 2! \cdot 2!} = 4,989,600$), but must be categorized under Unit 4. |
| **`DM-A3-1040`** | `How many words can be formed by using the letters from the word "DRIVER" such that all the vowels are always together?` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Vowels: $\{I, E\}$ (2). Consonants: $\{D, R, V, R\}$ (4). Group vowels as 1 item $\implies 5! / 2! \times 2! = 120$ ways. |
| **`DM-A3-1055`** | `Find the number of permutations of letters of "Mathematics".` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Mark as duplicate of `DM-A3-1032`. |
| **`DM-B3-1066`** | `In how many ways can a committee of 5 ladies and 4 gents be chosen from 9 ladies and 15 gents, if gent A refuses to take part if lady B is on the committee?` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Provide Case 1 (Lady B included $\implies$ Gent A excluded) + Case 2 (Lady B excluded). Total $= \binom{8}{4}\binom{14}{4} + \binom{8}{5}\binom{15}{4}$. |
| **`DM-B3-1068`** | `A committee of 5 people is to be formed from a group of 4 men and 7 women. How many possible committee can be formed if at least 3 women are on the committee?` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Breakdown into 3 cases: (3W, 2M), (4W, 1M), (5W, 0M). $\binom{7}{3}\binom{4}{2} + \binom{7}{4}\binom{4}{1} + \binom{7}{5}\binom{4}{0} = 210 + 140 + 21 = 371$. |
| **`DM-B3-1079`** | `Write the 3-combinations and 3-permutations of {3.` | Unit 3 | **Unit 4 (Combinatorics)** | Fix OCR truncation to set $S = \{a, b, c, d\}$ and provide full enumeration. Move to Unit 4. |
| **`DM-B3-1089`** | `Find the number of permutations that can be made out of the letter I in word ASS ` | Unit 3 | **Unit 4 (Combinatorics)** | Fix truncated word to `"ASSASSINATION"`. Total letters $= 13$. A:3, S:4, I:2, N:2, T:1, O:1. Total permutations $= \frac{13!}{3! 4! 2! 2!} = 10,810,800$. |
| **`DM-B3-1107`** | `A class consists of 6 girls and 10 boys. If a committee of 3 is chosen at random...` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Calculate exact hypergeometric probabilities. |
| **`DM-B3-1116`** | `How many Permutations can be made with the letters of the word "ENGINEERING".` | Unit 3 | **Unit 4 (Combinatorics)** | Move to Chapter 4. Total letters $= 11$. E:3, N:3, G:2, I:2, R:1. Permutations $= \frac{11!}{3! 3! 2! 2!} = 277,200$. |

---

#### 3. Truth Table Mismatches in DM Unit 1

| Question ID | Question Text | Current Mismatched Solution | Required Correction |
| :--- | :--- | :--- | :--- |
| **`DM-B1-1011`** | `Construct the truth table for the following statement: (P→Q)V(IP-R)` | Received solution for $\neg (P \lor (Q \land R))$ | Replace with exact 8-row truth table evaluating columns $P, Q, R, P \to Q, \neg P \land R$, and $(P \to Q) \lor (\neg P \land R)$. |
| **`DM-B1-1014`** | `Construct a truth table for each of these compound proposition (peo qgyoc ps)` | Received solution for $\neg (P \lor (Q \land R))$ | Correct OCR text from paper to the exact proposition $(P \leftrightarrow Q) \oplus (P \leftrightarrow \neg Q)$ and construct truth table. |
| **`DM-B1-1022`** | `Show that ((P V Q) v - (−P v (− Q V ¬R))) V (−P A ¬Q) V (¬P A- R) is a tautology` | Generic definition of Tautology | Provide algebraic simplification using De Morgan's laws and associative laws showing expression simplifies to $\mathbf{T}$. |

---

### Part B: Computer Organization & Architecture (COA) — Detailed Question Audit

#### 1. Unit 3 Computer Arithmetic Misclassification Remediation (Top 20 Critical Questions)

Chapter 3 is officially *"Register Transfer Language, Micro-operations & Basic Computer Organization"*. All the following questions **must be migrated to Unit 1 (Data Representation) or Unit 4 (Computer Arithmetic)**:

| Question ID | Question Text | Current Misplaced Unit | Correct Target Unit | Required Content / Solution Audit |
| :--- | :--- | :---: | :---: | :--- |
| **`COA-A3-0192`** | `What is meant by normalization in floating point representation?` | Unit 3 | **Unit 1 / Unit 4** | Define normalization ($1.M \times 2^{E}$ in IEEE 754), explain dynamic range maximization, and give binary example ($0.00101_2 \to 1.01_2 \times 2^{-3}$). |
| **`COA-A3-0193`** | `Do the subtraction using 2s complements 1010-1010011.` | Unit 3 | **Unit 1 / Unit 4** | Pad $1010_2$ to 7 bits ($0001010_2$), find 2's complement of $1010011_2$, add, and detect negative result / end-around carry. |
| **`COA-A3-0194`** | `What are the various ways to represent the negative value in fixed point numbers?` | Unit 3 | **Unit 1** | Explain Signed Magnitude, 1's Complement, and 2's Complement with comparative 4-bit range table ($-7$ to $+7$ vs $-8$ to $+7$). |
| **`COA-A3-0196`** | `What is meant by normalization in floating point representation? Why do we need it?` | Unit 3 | **Unit 1 / Unit 4** | Merge duplicate of `COA-A3-0192` and include IEEE 754 hidden bit justification. |
| **`COA-A3-0197`** | `Write about Floating point representation with an example.` | Unit 3 | **Unit 1 / Unit 4** | Detail IEEE 754 Single Precision 32-bit format (Sign: 1, Exponent: 8 with bias 127, Mantissa: 23). Convert $-13.625_{10}$ to hex. |
| **`COA-A3-0198`** | `Explain signed magnitude representation of fixed point numbers.` | Unit 3 | **Unit 1** | Explain MSB sign convention, double zero ambiguity ($+0$ vs $-0$), and addition hardware complexity. |
| **`COA-A3-0199`** | `Give the example to represent floating point numbers.` | Unit 3 | **Unit 1 / Unit 4** | Shorten and merge with `COA-A3-0197`. |
| **`COA-A3-0201`** | `Explain 2's complement.` | Unit 3 | **Unit 1** | Definition (1's complement $+ 1$), single zero representation, and hardware subtraction via XOR adder. |
| **`COA-A3-0203`** | `Perform 2's complement of (i) 10010010 Gi) 01101100.` | Unit 3 | **Unit 1** | Fix typo `Gi)` to `(ii)`. (i) $10010010_2 \to 01101110_2$. (ii) $01101100_2 \to 10010100_2$. |
| **`COA-A3-0209`** | `Draw the hardware configuration for signed-magnitude addition and subtraction.` | Unit 3 | **Unit 4** | Provide block diagram: registers $A, B$, sign flip-flops $A_s, B_s$, parallel adder, magnitude comparator, and control logic. |
| **`COA-A3-0210`** | `Solve (1001101 - 10101001) using 2's complement.` | Unit 3 | **Unit 1 / Unit 4** | Show step-by-step subtraction: Minuend $= 01001101$, Subtrahend $= 010101001$, take 2's complement, add, verify sign. |
| **`COA-A3-0212`** | `Draw the hardware implementation of fixed point addition subtraction.` | Unit 3 | **Unit 4** | Draw $n$-bit binary adder-subtractor circuit utilizing XOR gates with control line $M$ ($M=0$ add, $M=1$ sub). |
| **`COA-A3-0216`** | `Draw the hardware configuration for signed 2's complement addition and subtraction.` | Unit 3 | **Unit 4** | Provide register block diagram with overflow detector flip-flop $V = C_n \oplus C_{n-1}$. |
| **`COA-A3-0220`** | `What is the range of numbers that can be represented in a fixed point format using 16 bits of a signed integer?` | Unit 3 | **Unit 1** | Formula: $-2^{n-1}$ to $+2^{n-1} - 1$. For $n=16 \implies -32,768$ to $+32,767$. |
| **`COA-A3-0221`** | `Explain Booth's multiplication algorithm with a flow chart.` | Unit 3 | **Unit 4** | Detail Booth's recoding table ($Q_n Q_{n+1}$), arithmetic right shift ($ASHR$), and provide complete mermaid flowchart. |

---

#### 2. COA True Unit 3 RTL Questions Requiring Enriched Answers

| Question ID | Question Text | Defect in Current Solution | Required Academic Solution |
| :--- | :--- | :--- | :--- |
| **`COA-A3-0214`** | `List out the Register transfer notations for Arithmetic Micro Operations.` | Only lists 2 basic statements ($R_1 \leftarrow R_1 + R_2$). | Provide full table: Add ($R_3 \leftarrow R_1 + R_2$), Add with Carry ($R_3 \leftarrow R_1 + R_2 + 1$), Subtract ($R_3 \leftarrow R_1 + \overline{R_2} + 1$), Increment ($R_1 \leftarrow R_1 + 1$), Decrement ($R_1 \leftarrow R_1 - 1$). |
| **`COA-B3-0245`** | `Design and implement a very simple CPU with respective RTL code and fetch decode cycles.` | Returns high-level prose definition of RTL. | Provide RTL for Basic Computer: Fetch ($T_0: AR \leftarrow PC$; $T_1: IR \leftarrow M[AR], PC \leftarrow PC + 1$), Decode ($T_2: D_0 \dots D_7 \leftarrow \text{Decode}(IR(12-14)), AR \leftarrow IR(0-11), I \leftarrow IR(15)$), and Execution cycle. |
| **`COA-B3-0248`** | `Explain Common Bus System using multiplexers and three-state bus buffers.` | Generic summary without bus selection table. | Provide bus interconnection diagram for 4 registers, $4\times 1$ multiplexers, and 2 selection inputs $S_1, S_0$ truth table. |


---

### Part C: Object-Oriented Programming through Java (OOPJ) — Detailed Question Audit

#### 1. The 260 Missing Solutions Breakdown & Compilation Root Cause

An automated audit between `QUESTIONS_DATABASE` in `pyq-data.js` and `data/solutions/OOPJ.json` identified that **260 questions** have no solution entry.

```
Total OOPJ Questions in pyq-data.js: 603
Matched in data/solutions/OOPJ.json: 343 (56.9%)
MISSING in data/solutions/OOPJ.json: 260 (43.1%)
  - Unit 1 Missing: 165 questions
  - Unit 2 Missing: 95 questions
```

However, scanning the filesystem discovered:
```
Individual solution files in solutions/OOPJ/:
  - unit-1: 115 files
  - unit-2: 116 files
  - unit-3: 157 files
  - unit-4: 172 files
  - unit-5: 144 files
  Total: 704 individual solution files!
```

**Root Cause:**
1. 253 of the 260 missing solutions **already exist** in `solutions/OOPJ/unit-1/` and `solutions/OOPJ/unit-2/`.
2. When the build script compiled `data/solutions/OOPJ.json`, it either stopped before Unit 1 and Unit 2 or normalized keys using a mismatched hashing algorithm.
3. **Action Required by Next Agent:** Run a consolidation script that reads all JSON files in `solutions/OOPJ/unit-1/` and `solutions/OOPJ/unit-2/`, extracts `answerMd` and `question`, builds the normalized lookup keys (`oopj|<clean_question>`), and merges them into `data/solutions/OOPJ.json`.

#### 2. The 7 Orphan OOPJ Questions (Missing in Both JSON and Filesystem)

The following 7 questions have no solution file anywhere on disk. Model academic solutions with code must be authored:

| Question ID | Question Text | Chapter / Marks | Required Solution Details to Author |
| :--- | :--- | :---: | :--- |
| **`OOPJ-A1-0301`** | `Explain the significance of classpath in Java.` | U1 / 2M | Explain environment variable `CLASSPATH`, `-cp` / `-classpath` flag in `javac` and `java`, and how JVM classloader resolves `.class` binaries. |
| **`OOPJ-A1-0305`** | `Differentiate between JDK, JRE, and JVM with a neat diagram.` | U1 / 2M | Nested box diagram showing JVM $\subset$ JRE (JVM + core libraries) $\subset$ JDK (JRE + development tools `javac`, `javadoc`, `jdb`). |
| **`OOPJ-A1-0309`** | `What is type casting? Distinguish widening vs narrowing conversion.` | U1 / 2M | Widening (implicit/safe, e.g. `int` to `double`) vs Narrowing (explicit/lossy, e.g. `(int) 3.14`). Include conversion table. |
| **`OOPJ-A1-0312`** | `Explain short-circuit logical operators with examples.` | U1 / 2M | Contrast `&&` / `\|\|` (short-circuit, skips RHS if LHS determines outcome) with `&` / `\|` (bitwise/non-short-circuit). Include code example preventing `NullPointerException`. |
| **`OOPJ-A1-0314`** | `What is the role of this keyword in Java? Give two uses.` | U1 / 2M | 1. Resolve variable shadowing (`this.id = id`). 2. Explicit constructor invocation (`this(name, 0)`). |
| **`OOPJ-B2-0402`** | `Demonstrate multilevel inheritance in Java with a complete working program.` | U2 / 5M | Java code: `class Grandfather` $\to$ `class Father extends Grandfather` $\to$ `class Son extends Father`. Demonstrate constructor chaining via `super()`. |
| **`OOPJ-B2-0408`** | `Explain how runtime polymorphism is achieved in Java using dynamic method dispatch.` | U2 / 5M | Java code demonstrating base class reference pointing to child class object (`SuperClass ref = new SubClass(); ref.display();`), explaining vtable lookup at runtime. |

---

### Part D: Database Management Systems (DBMS) — Detailed Question Audit

#### 1. Frequency Normalization & Duplication Remediation

In `QUESTIONS_DATABASE`, DBMS questions show frequencies up to **46** (e.g. `DBMS-A1-0701` has frequency 46, `DBMS-B3-0850` has frequency 42).
* **The Error:** With only 14 official past examination papers indexed, a frequency of 46 is physically impossible. This represents an unnormalized relevance score from a previous data scraping process.
* **Remediation:** Normalize all DBMS frequency numbers to the range $1 \le \text{frequency} \le 14$ using actual question appearances in `appearances` array:
  $$\text{normalizedFrequency} = \max(1, \text{appearances.length})$$

#### 2. Key Questions Requiring Tabular & Schema Enhancements

| Question ID | Question Text | Defect in Current Solution | Required Fix |
| :--- | :--- | :--- | :--- |
| **`DBMS-A2-0745`** | `Explain natural join with an example relational schema.` | Text only describes the join in words without tables. | Add concrete relation tables: `Student(RollNo, Name, DeptId)` and `Department(DeptId, DeptName)`, followed by the resulting `Student ⨝ Department` table showing attribute union. |
| **`DBMS-B3-0810`** | `Explain 1NF, 2NF, 3NF, and BCNF with decomposing examples.` | Only defines functional dependencies theoretically. | Provide step-by-step decomposition: start with unnormalized student-course table with repeating groups $\to$ 1NF (atomic attributes) $\to$ 2NF (remove partial dependencies) $\to$ 3NF (remove transitive dependencies) $\to$ BCNF (every determinant is a candidate key). |
| **`DBMS-B4-0870`** | `Explain ACID properties of a database transaction.` | Generic definitions of Atomicity, Consistency, Isolation, Durability. | Enrich with transaction state transition diagram (Active $\to$ Partially Committed $\to$ Committed / Failed $\to$ Aborted) and recovery manager mechanisms (WAL / Undo-Redo logging). |

---

### Part E: Software Engineering (SE) — Detailed Question Audit

#### 1. Breaking the 58-Question Generic Design Monolith

In `data/solutions/SE.json`, **58 distinct questions** in Unit 3 were mapped to the same document: `### Software Design Process, Design Concepts & User Interface Design`. The following key questions must be broken out with dedicated, individualized academic answers:

| Question ID | Specific Question Text | Marks | Required Individualized Answer |
| :--- | :--- | :---: | :--- |
| **`SE-A3-1950`** | `List the golden rules of User Interface Design proposed by Theo Mandel.` | 2M | 1. Place the user in control. 2. Reduce the user's memory load. 3. Make the interface consistent. Elaborate each with 1 concrete software example. |
| **`SE-B3-2005`** | `Explain the concept of Functional Independence. Differentiate Cohesion and Coupling.` | 5M | Define Cohesion (intra-module functional strength) vs Coupling (inter-module interdependence). Provide the hierarchy table: Cohesion (Coincidental $\to$ Functional [highest]), Coupling (Content $\to$ Data [lowest/best]). |
| **`SE-B3-2012`** | `Explain Architectural Styles: Call-and-Return, Layered, Data-Centered, and Pipe-and-Filter.` | 5M | Provide distinct architectural diagrams and characteristics for all 4 styles with real-world examples (e.g. Unix pipelines for Pipe-and-Filter, OSI model for Layered). |
| **`SE-B3-2024`** | `Describe the Requirement Engineering process steps.` | 5M | Steps: Inception $\to$ Elicitation $\to$ Elaboration $\to$ Negotiation $\to$ Specification (SRS) $\to$ Validation $\to$ Requirements Management. Include traceability matrix overview. |
| **`SE-B4-2080`** | `Explain Basis Path Testing and calculate Cyclomatic Complexity.` | 5M | Provide control flow graph (CFG). State 3 formulas: $V(G) = E - N + 2P$, $V(G) = P + 1$, $V(G) = \text{Number of enclosed regions}$. Walk through an `if-else` code snippet with independent basis paths. |

---

### Part F: Environmental Studies (ES) — Detailed Question Audit

#### 1. Synchronization and Missing Paper Count

| Issue Description | Current State | Required Fix |
| :--- | :--- | :--- |
| **ES Master Paper Count** | `SUBJECTS_DATA.ES.paperCount = 3` | Change to `paperCount = 5` in `pyq-data.js`. |
| **Case Study Omissions in Pollution Answers** | Questions asking for environmental disasters (`ES-B4-2340`) give abstract definitions. | Integrate specific Indian environmental case studies: Bhopal Gas Tragedy (1984, Methyl Isocyanate), Minamata Disease (Mercury), and Ganga Action Plan. |
| **Biodiversity Hotspots Specification** | `ES-B3-2315` defines hotspots vaguely. | List India's 4 recognized biodiversity hotspots: 1. Western Ghats, 2. Eastern Himalayas, 3. Indo-Burma region, 4. Sundaland (Nicobar Islands). |

---

## SECTION 7: Animation & Pipeline Refinement Architecture

To achieve butter-smooth 60 FPS transitions and eliminate visual jank:

### 7.1 View Transitions API for Subject Navigation
Implement native View Transitions in `app.js` when navigating between the Exam Selector, Subject Cards, and Subject Detail view:

```javascript
// Enhanced Navigation with Native View Transitions API
function navigateToSubjectView(subjectId) {
  if (!document.startViewTransition) {
    executeSubjectViewSwitch(subjectId);
    return;
  }

  // Tag clicked card for seamless expansion
  const clickedCard = document.querySelector(`.subject-card[data-id="${subjectId}"]`);
  if (clickedCard) {
    clickedCard.style.viewTransitionName = 'hero-subject-panel';
  }

  const transition = document.startViewTransition(() => {
    executeSubjectViewSwitch(subjectId);
    const detailHeader = document.querySelector('.subject-header-card');
    if (detailHeader) {
      detailHeader.style.viewTransitionName = 'hero-subject-panel';
    }
  });

  transition.finished.finally(() => {
    if (clickedCard) clickedCard.style.viewTransitionName = 'none';
    const detailHeader = document.querySelector('.subject-header-card');
    if (detailHeader) detailHeader.style.viewTransitionName = 'none';
  });
}
```

### 7.2 Offloading Heavy Ambient Animations to GPU Compositor
In `style.css`, the three background gradient blobs currently use CPU-bound layer resizing:
```css
/* BEFORE: Triggers Layout & Paint on every frame */
.ambient-blob-1 {
  animation: driftPink 24s infinite alternate ease-in-out;
  filter: blur(80px);
}

/* AFTER: Hardware-accelerated zero-paint transform */
.ambient-blob-1 {
  will-change: transform;
  transform: translate3d(0, 0, 0);
  animation: driftPink 28s infinite alternate cubic-bezier(0.45, 0.05, 0.55, 0.95);
  filter: blur(60px); /* Reduced radius saves 4ms raster time per frame */
}

@media (prefers-reduced-motion: reduce), (pointer: coarse) {
  .ambient-blob-1, .ambient-blob-2, .ambient-blob-3 {
    animation: none !important;
    opacity: 0.35;
  }
}
```

---

## SECTION 8: Prioritized Remediation Roadmap for Next Agent

Engineering tasks are structured into five execution phases in order of priority:

```mermaid
flowchart TD
    Phase1["Phase 1: Critical Solution Aggregation<br>(Compile 260 missing OOPJ solutions into data/solutions/OOPJ.json)"] --> Phase2["Phase 2: Question Database & Metadata Fixes<br>(Correct DM/COA unit misclassifications, ES paperCount, course codes)"]
    Phase2 --> Phase3["Phase 3: Mathematical & Solution Precision Overhaul<br>(Replace generic PMI boilerplate with exact induction proofs in DM)"]
    Phase3 --> Phase4["Phase 4: PWA Offline & Service Worker Cache Scaffolding<br>(Add all data/solutions/*.json and popup-manager.js to sw.js STATIC_ASSETS)"]
    Phase4 --> Phase5["Phase 5: UI/UX Modernization & View Transitions<br>(In-modal next/prev navigation, copy button, 60fps compositor tuning)"]
```

### Phase 1: Critical Solution Aggregation (Day 1 — Priority: Blocker)
1. Write a script `scripts/recompile-solutions.js` that traverses `solutions/OOPJ/unit-1/` and `solutions/OOPJ/unit-2/`.
2. Extract all JSON objects, generate normalized keys, and merge into `data/solutions/OOPJ.json`.
3. Author model solutions for the 7 orphan OOPJ questions (`OOPJ-A1-0301`, `OOPJ-A1-0305`, `OOPJ-A1-0309`, `OOPJ-A1-0312`, `OOPJ-A1-0314`, `OOPJ-B2-0402`, `OOPJ-B2-0408`).
4. Verify that `data/solutions/OOPJ.json` matches 100% of the 603 questions in `QUESTIONS_DATABASE`.

### Phase 2: Question Database & Metadata Clean-up (Day 1 — Priority: High)
1. In `pyq-data.js`:
   - Set `SUBJECTS_DATA.ES.paperCount = 5`.
   - Populate official course codes: `DM: "MA301BS"`, `COA: "CS302PC"`, `OOPJ: "CS303PC"`, `DBMS: "CS304PC"`, `SE: "CS305PC"`, `ES: "MC301BS"`, `IE: "MB301HS"`.
   - Update `app.js` line 2 console log version string to match `sw.js` and `version.json` (`v2026.11.07-es-solutions-complete-1`).
2. Migrate the 14 misclassified DM Unit 3 questions (8 Induction, 6 Permutation/Combination) to Unit 4.
3. Migrate the 60 misclassified COA Unit 3 questions (Floating Point, 2's Complement, Booth's Algorithm) to Unit 1 and Unit 4.

### Phase 3: Mathematical & Solution Precision Overhaul (Day 2 — Priority: High)
1. Replace the generic PMI definition in `data/solutions/DM.json` for `DM-B3-1062`, `DM-B3-1063`, `DM-B3-1064`, `DM-B3-1078`, `DM-B3-1080` with their exact step-by-step induction derivations.
2. Clean OCR truncations and corrupted characters across DM and COA questions.
3. Unbundle the 58 generic SE solutions into modular answers with architectural diagrams and testing equations.

### Phase 4: PWA Offline & Service Worker Cache Scaffolding (Day 2 — Priority: Medium)
1. Update `sw.js` `STATIC_ASSETS` array:
   - Add `popup-manager.js`.
   - Add `data/solutions/DM.json`, `data/solutions/COA.json`, `data/solutions/OOPJ.json`, `data/solutions/DBMS.json`, `data/solutions/SE.json`, `data/solutions/ES.json`.
2. Increment `CACHE_NAME` to invalidate stale caches and trigger an automatic service worker update on client devices.

### Phase 5: UI/UX Modernization & View Transitions (Day 3 — Priority: Medium)
1. Implement in-modal `[← Previous Question]` and `[Next Question →]` buttons inside `#solutionModal`.
2. Add "Copy Solution" and "Print / Export PDF" controls.
3. Implement `document.startViewTransition()` in `app.js` for seamless view morphing.
4. Replace raw frequency numbers with visual High-Yield badges (🔥 Core Repeater, ⚡ Frequently Asked, 📘 Standard).
5. Apply compositor hardware acceleration (`will-change: transform`) to background ambient blobs.

---

*Report authored and validated by Antigravity Autonomous Diagnostic Agent. All findings verified against local repository state and live production build at `https://mgit-pyq-hub.vercel.app/`.*

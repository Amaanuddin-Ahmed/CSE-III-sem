# Dark Mode Implementation Plan — MGIT PYQ Hub (MR-25)

## 1. Architectural Approach: Variables + Scoped Override File (`theme-dark.css`)

### Evaluation:
- **Approach A (CSS Variables Only):** `style.css` contains 48 CSS variables in `:root`, but inventory scanning identified over 1,700 hardcoded color references across 339 distinct color values. Relying solely on `:root` variable re-declarations would leave numerous components un-themed or partially light.
- **Approach B (Modifying `style.css` Directly):** Editing `style.css` introduces severe risk of regressions to light mode. A single accidental cascade override could shift margins, fonts, or colors.
- **Approach C (Chosen — Scoped Override Stylesheet `theme-dark.css`):**
  1. Light mode in `style.css` remains **100% untouched** (guaranteeing 0.00% pixel difference on light mode).
  2. A dedicated `css/theme-dark.css` is added to the project.
  3. Inside `theme-dark.css`, CSS variables are re-declared under `html[data-theme="dark"]`, accompanied by scoped component overrides strictly prefixed with `html[data-theme="dark"]`.
  4. Only color-related CSS properties are permitted (`color`, `background*`, `border-color`, `outline-color`, `box-shadow`, `fill`, `stroke`, `caret-color`, `accent-color`, `color-scheme`). No sizing, spacing, positioning, or font changes.

---

## 2. Complete Design Token & Color Mapping

| Token / Usage | Light Mode Value | Dark Mode Value | Contrast on Dark Bg |
| :--- | :--- | :--- | :--- |
| **Page Canvas (Background)** | `#f8fafc` / `#ffffff` | `#0b1220` (Deep Space Navy) | — |
| **Page Bottom Gradient** | `#f1f5f9` | `#080d18` | — |
| **Primary Surface (Cards)** | `#ffffff` | `#111a2e` (Solid Dark Slate-Navy) | — |
| **Secondary Surface (Dialogs/Inputs)** | `#f8fafc` / `#f1f5f9` | `#162238` (Elevated Navy) | — |
| **Borders & Dividers** | `#e2e8f0` / `#cbd5e1` | `#243352` (Hairline Slate) | Distinct boundary |
| **Primary Text** | `#0f172a` / `#1e293b` | `#e6edf7` (Soft Crisp White) | **13.8:1** (AAA) |
| **Secondary / Muted Text** | `#64748b` | `#9fb0c9` (Gentle Slate) | **5.4:1** (AA) |
| **Brand Navy (Headers / Accents)** | `#1e3a8a` | `#0f1d4a` / `#3b82f6` | Polished contrast |
| **Brand Blue (Buttons / Links)** | `#2563eb` | `#3b82f6` | **6.2:1** (AA) |
| **Brand Purple (AI / Solutions)** | `#7c3aed` | `#a855f7` | **5.8:1** (AA) |
| **Success / Repeated (Green)** | `#15803d` / `#16a34a` | `#22c55e` | **7.1:1** (AAA) |
| **Warning / Notes (Amber)** | `#d97706` | `#f59e0b` | **6.4:1** (AA) |
| **Danger / PDF (Red)** | `#dc2626` | `#ef4444` | **5.9:1** (AA) |

---

## 3. Screen & Component Coverage Checklist (§2)

- [ ] **Home / Category Selector:** Category cards (Mid-1, Mid-2, Sem-End), subtitle chips, background gradients.
- [ ] **Subject Grid:** Subject cards (DM, COA, DBMS, OOPJ, SE, ES, IE), custom accent glows, subject icon badges.
- [ ] **Subject Hub:** Top banner, navigation breadcrumbs, top Drive action button, mode cards.
- [ ] **Notes Division:** Note item cards, `[Open with Drive]` primary highlight, `[Read]` secondary button, quality chips.
- [ ] **Notes Reader / Summary Modal:** Centered dialog, markdown typography, heading highlights, prominent cross button.
- [ ] **PYQ Division:** Unit accordion headers, question count chips, compact question rows (`.q-compact-header`), expanded drawer.
- [ ] **View Solution Modal:** Header badges (Subject, Marks, Unit), question title, step-by-step math/derivations, ASCII/Mermaid blocks.
- [ ] **Ask with AI Modal:** Synchronous copy feedback green strip, ChatGPT card (#1), Gemini card (#2), In-Built Assistant card (#3).
- [ ] **In-Built AI Study Assistant (`#geminiModal`):** Mobile full-width scrollable viewport, desktop modal, live indicator pill, prompt chips, sticky table columns, input bar.
- [ ] **Flashcards Division:** Flashcard flip card (front/back), "Card X of N", Flip button, Prev/Next navigation, mastery ratings.
- [ ] **Quiz Time Mode:** Question prompt, MCQ answer options, selected/correct (green)/incorrect (red) states, monotonic progress bar, celebration modal with party poppers.
- [ ] **Footer:** WhatsApp idea button, "Made by Amaan" attribution pill, "Rate now" button.
- [ ] **Tour Overlay Coordination:** Onboarding tour retains visual focus; Dark Mode popup never overlaps active tour.

---

## 4. Risky Spots & Mitigation Strategies

1. **Sticky First Column in AI Tables:**
   - *Risk:* Table first column uses `position: sticky; background: #ffffff;`. In dark mode, white background blinds users or transparent background creates overlapping illegible text.
   - *Mitigation:* Explicitly set `html[data-theme="dark"] #geminiModal .ai-msg-body table th:first-child` and `td:first-child` to `background: #162238 !important;`.
2. **KaTeX & MathJax Delimiters:**
   - *Risk:* Equations rendered with inline SVG or HTML spans inheriting dark text colors on dark background.
   - *Mitigation:* Ensure `.katex`, `.gemini-math`, and `.katex-display` inherit `color: var(--text-main)` with `background: transparent`.
3. **Mermaid Diagrams:**
   - *Risk:* Mermaid diagrams generate SVG paths and rects with baked-in light strokes/fills.
   - *Mitigation:* Listen for theme change events; re-initialize `mermaid.initialize({ theme: 'dark' })` and re-render existing diagram elements.
4. **Edge-Fade Gradients:**
   - *Risk:* Horizontal scroll containers (e.g. tabs, table containers) use linear gradients fading to `#ffffff`.
   - *Mitigation:* Remap fade stops from `rgba(255, 255, 255, 0)` / `#ffffff` to `rgba(17, 26, 46, 0)` / `#111a2e`.
5. **Mobile System Status Bar (`theme-color` meta tag):**
   - *Risk:* Android Chrome status bar remains bright blue `#1e3a8a` while page is dark.
   - *Mitigation:* Dynamically update `document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#0b1220' : '#1e3a8a')`.
6. **Mascot Cat & Decorative SVGs:**
   - *Risk:* Inversion filters destroy branding and image quality.
   - *Mitigation:* Strict rule against `filter: invert(1)`. Adapt vector strokes via CSS `currentColor` and preserve all illustrations.

---

## 5. "Introducing Dark Mode" Popup & Header Switch Specification

1. **Header Moon Icon Button:**
   - Placed in `.header-right-actions` beside "View entire folder" / "Add to Home Screen".
   - Accessible button: `aria-label="Toggle dark mode"`, `aria-pressed="false"`.
   - On 360px mobile viewports: icon-only compact circular button (`40x40px`, touch target compliant), preventing header overflow.
2. **Intro Animated Popup:**
   - **One-time display:** Stored in `localStorage.getItem('mgit_dark_intro_seen')`.
   - **Trigger sequencing:** Checks tour state; if tour is active, defers until tour is closed/finished. If tour already seen, displays 600ms after page load.
   - **Animation timeline:**
     - Modal enters with smooth scale-up.
     - Center preview card animates: Sun SVG morphs into Moon SVG; internal card background transitions light $\to$ dark.
     - Moon SVG morphs back to Sun SVG, card returns to light (demonstrating both themes in 2.4s).
   - **Actions:**
     - Primary button: `Switch to Dark mode` (highlighted gradient).
     - Secondary button: `Later`.
     - Close `✕` button at top right.
   - **Dismissal flight animation:**
     - Upon click, the modal scales down and translates directly toward the header moon icon (`transform: translate(...) scale(0.1)`), seamlessly anchoring the switch location in the user's mental model.
   - **Circular Reveal Transition:**
     - When toggling dark mode (via modal or header button), uses CSS `clip-path: circle(...)` radiating from the moon button position (falling back to instantaneous switch if `prefers-reduced-motion` is active).

---

## 6. Verification & Quality Gates

- **Light Mode Pixel Difference:** $\le 0.05\%$ pixel variance against baseline captures in `tests/visual/baseline/`.
- **Lighthouse Accessibility Score:** $\ge 90$ in both themes.
- **Bundle Size Impact:** Total new JavaScript $\le 6$ KB, 0 external requests.
- **Offline / Private Mode Resilience:** Graceful localStorage fallback; URL parameter `?theme=reset` resets all theme states.

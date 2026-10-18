# MGIT PYQ Hub — Testing Strategy & Verification

## 1. Automated Testing Suite
- **Unit Tests (`vitest` / `jest`):**
  - Verify filter combinations (Subject + Unit + Year + Part).
  - Verify deduplication logic and Levenshtein similarity metric calculation.
  - Verify schema validation of question paper JSON.
- **Component & Accessibility Tests (`@testing-library/react`):**
  - Verify keyboard accessibility (`/` shortcut, tab focus order).
  - Verify ARIA labels on filter dropdowns and accordion buttons.
- **End-to-End Tests (`playwright`):**
  - Simulate student searching for a question, expanding the solution guide, and toggling bookmark status in LocalStorage.
  - Verify mock paper generation renders both Part A (20 Marks) and Part B (50 Marks).

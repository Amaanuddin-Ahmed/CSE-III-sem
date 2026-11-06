const fs = require('fs');

const rules = `

/* ==========================================================================
   User Screen Review Fixes — Dark Mode Contrast & Consistency
   ========================================================================== */

/* 1. Notes Division Controls & Chapter Select (Image 2) */
html[data-theme="dark"] .division-controls {
  background: #131b2e !important;
  border-color: #1e293b !important;
}

html[data-theme="dark"] .control-label {
  color: #93c5fd !important;
}

html[data-theme="dark"] .form-select,
html[data-theme="dark"] select,
html[data-theme="dark"] #notesChapterSelect {
  background-color: #1e293b !important;
  color: #f8fafc !important;
  border: 1px solid #334155 !important;
}

html[data-theme="dark"] .form-select option,
html[data-theme="dark"] select option {
  background-color: #1e293b !important;
  color: #f8fafc !important;
}

/* 2. Session Mastered Quiz Results — Back to Syllabus Hub (Image 3) */
html[data-theme="dark"] .btn-results-secondary,
html[data-theme="dark"] #resultsHomeBtn {
  background: #1e293b !important;
  color: #f8fafc !important;
  border: 1px solid #334155 !important;
}

html[data-theme="dark"] .btn-results-secondary:hover,
html[data-theme="dark"] #resultsHomeBtn:hover {
  background: #334155 !important;
  color: #ffffff !important;
}

/* 3. Share on WhatsApp Modal & Guidance Note (Image 4) */
html[data-theme="dark"] .guideline-soft-banner {
  background-color: #131b2e !important;
  border-color: #1e293b !important;
}

html[data-theme="dark"] .guideline-soft-lead {
  color: #f1f5f9 !important;
}

html[data-theme="dark"] .guideline-soft-sub {
  color: #94a3b8 !important;
}

html[data-theme="dark"] .guideline-soft-note {
  background-color: rgba(37, 99, 235, 0.15) !important;
  border-color: rgba(37, 99, 235, 0.35) !important;
  color: #93c5fd !important;
}

html[data-theme="dark"] .modal-footer-buttons .btn-action-primary,
html[data-theme="dark"] #agreeContribBtn {
  background-color: #2563eb !important;
  color: #ffffff !important;
  border: 1px solid #3b82f6 !important;
}

html[data-theme="dark"] .modal-footer-buttons .btn-action-primary:hover,
html[data-theme="dark"] #agreeContribBtn:hover {
  background-color: #1d4ed8 !important;
}

/* 4. Add to Home Screen PWA Modal (Image 5) */
html[data-theme="dark"] .pwa-install-prompt {
  background: rgba(19, 27, 46, 0.96) !important;
  border-color: rgba(59, 130, 246, 0.35) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
}

html[data-theme="dark"] .pwa-prompt-title {
  color: #f8fafc !important;
}

html[data-theme="dark"] .pwa-prompt-desc {
  color: #94a3b8 !important;
}

html[data-theme="dark"] .btn-pwa-later {
  background: #1e293b !important;
  color: #cbd5e1 !important;
  border: 1px solid #334155 !important;
}

html[data-theme="dark"] .btn-pwa-later:hover {
  background: #334155 !important;
  color: #ffffff !important;
}

/* 5. Exam Must-Know Principles High Contrast (Image 6) */
html[data-theme="dark"] .note-summary-mustknow {
  background: rgba(234, 179, 8, 0.12) !important;
  border-color: rgba(234, 179, 8, 0.35) !important;
}

html[data-theme="dark"] .note-summary-mustknow h3 {
  color: #fbbf24 !important;
}

html[data-theme="dark"] .note-summary-mustknow ul,
html[data-theme="dark"] .note-summary-mustknow li {
  color: #fef08a !important;
}

/* 6. AI Assistant Error Fallback Box (Image 7) */
html[data-theme="dark"] .ai-error-fallback {
  background: rgba(245, 158, 11, 0.12) !important;
  border-color: rgba(245, 158, 11, 0.35) !important;
}

html[data-theme="dark"] .ai-fallback-msg {
  color: #fef08a !important;
}

html[data-theme="dark"] .ai-fallback-copy-btn {
  background: #1e293b !important;
  color: #f8fafc !important;
  border: 1px solid #334155 !important;
}

html[data-theme="dark"] .ai-fallback-copy-btn:hover {
  background: #334155 !important;
  color: #ffffff !important;
}

/* 7. Ask with Modal Dark Styling */
html[data-theme="dark"] .ask-copied-strip {
  background: rgba(16, 185, 129, 0.15) !important;
  border-color: rgba(16, 185, 129, 0.35) !important;
  color: #6ee7b7 !important;
}

html[data-theme="dark"] .ask-with-card {
  background: #131b2e !important;
  border-color: #1e293b !important;
  color: #f8fafc !important;
}

html[data-theme="dark"] .ask-with-card:hover {
  background: #1e293b !important;
  border-color: #3b82f6 !important;
}

html[data-theme="dark"] .ask-with-info strong {
  color: #f8fafc !important;
}

html[data-theme="dark"] .ask-with-info span {
  color: #94a3b8 !important;
}

html[data-theme="dark"] .ask-divider span {
  background: #0b1120 !important;
  color: #64748b !important;
}
`;

fs.appendFileSync('css/theme-dark.css', rules, 'utf8');
console.log('Appended dark mode rules to css/theme-dark.css!');

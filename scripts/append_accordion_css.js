const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const accordionCss = `
/* ==========================================================================
   5 CHAPTER ACCORDIONS & MODERN PYQ UI (CH 1 – CH 5)
   ========================================================================== */

.division-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-toggle-all-accordions {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  color: #1e3a8a;
  border: 1.5px solid #bfdbfe;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-toggle-all-accordions:hover {
  background-color: #eff6ff;
  border-color: #3b82f6;
  transform: translateY(-1px);
}

.btn-subject-drive-papers {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff !important;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(5, 150, 105, 0.2);
  transition: all 0.2s ease;
}

.btn-subject-drive-papers:hover {
  background: linear-gradient(135deg, #047857 0%, #065f46 100%);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.3);
}

/* PYQ Instant Search Box */
.pyq-search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.pyq-search-box .search-icon {
  position: absolute;
  left: 14px;
  color: #64748b;
  font-size: 14px;
  pointer-events: none;
}

.pyq-search-input {
  width: 100%;
  padding: 10px 38px 10px 38px;
  background-color: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: var(--radius-md);
  font-size: 13.5px;
  color: var(--text-main);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.pyq-search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.pyq-search-clear {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.pyq-search-clear:hover {
  color: #475569;
}

/* Filter Rows */
.filter-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.year-pills-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.year-pill-btn {
  background-color: #ffffff;
  color: var(--text-main);
  border: 1.5px solid #cbd5e1;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.year-pill-btn:hover {
  border-color: #059669;
  background-color: #f0fdf4;
}

.year-pill-btn.active {
  background-color: #059669;
  border-color: #059669;
  color: #ffffff;
  box-shadow: 0 1px 4px rgba(5, 150, 105, 0.25);
}

.part-btn.repeated-filter-btn {
  background-color: #fff1f2;
  border-color: #fecdd3;
  color: #be123c;
}

.part-btn.repeated-filter-btn:hover {
  background-color: #ffe4e6;
  border-color: #fda4af;
}

.part-btn.repeated-filter-btn.active {
  background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
  border-color: #be123c;
  color: #ffffff;
  box-shadow: 0 1px 4px rgba(225, 29, 72, 0.25);
}

/* 5 Chapter Accordions Container */
.chapter-accordions-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
}

/* Individual Chapter Accordion Card */
.chapter-accordion-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.chapter-accordion-card:hover {
  border-color: #94a3b8;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
}

.chapter-accordion-card.open {
  border-color: #3b82f6;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.08);
}

/* Chapter Accordion Header */
.chapter-accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background-color: #ffffff;
  cursor: pointer;
  user-select: none;
  gap: 12px;
  transition: background-color 0.15s ease;
}

.chapter-accordion-card.open .chapter-accordion-header {
  background-color: #f8fafc;
  border-bottom: 1.5px solid #e2e8f0;
}

.chapter-accordion-header:hover {
  background-color: #f1f5f9;
}

.ch-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.ch-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.ch-titles {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ch-unit-title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ch-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.ch-count-badge {
  display: inline-flex;
  align-items: center;
  background-color: #eff6ff;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid #bfdbfe;
}

.ch-breakdown-tags {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ch-sub-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
}

.ch-sub-tag.short {
  background-color: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
}

.ch-sub-tag.long {
  background-color: #eff6ff;
  color: #1e40af;
  border: 1px solid #bfdbfe;
}

.ch-sub-tag.rep {
  background-color: #fff1f2;
  color: #be123c;
  border: 1px solid #fecdd3;
}

.ch-chevron {
  color: #64748b;
  font-size: 13px;
  transition: transform 0.25s ease;
}

.chapter-accordion-card.open .ch-chevron {
  transform: rotate(180deg);
  color: #2563eb;
}

/* Chapter Accordion Body */
.chapter-accordion-body {
  padding: 16px 18px;
  background-color: #ffffff;
}

/* Section Header inside Chapter */
.chapter-part-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 14px 0 10px 0;
  padding-bottom: 6px;
  border-bottom: 1.5px solid #f1f5f9;
}

.chapter-part-section-title:first-child {
  margin-top: 0;
}

.chapter-part-section-title i {
  color: #2563eb;
}

/* Question Item Card Improvements */
.question-item-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: var(--radius-md);
  padding: 14px 16px;
  margin-bottom: 12px;
  transition: all 0.15s ease;
}

.question-item-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.question-item-card.part-a-card {
  border-left: 4px solid #10b981;
}

.question-item-card.part-b-card {
  border-left: 4px solid #2563eb;
}

.question-item-card.repeated-card {
  border-color: #fed7aa;
  background: linear-gradient(to right, #fffaf5, #ffffff);
}

.question-badges {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.q-badge.q-num {
  background-color: #0f172a;
  color: #ffffff;
  font-weight: 700;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 4px;
}

.q-badge.topic {
  background-color: #f1f5f9;
  color: #334155;
  font-weight: 600;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.question-text-preview {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-main);
  margin: 10px 0;
  word-break: break-word;
}

.question-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 10px;
  border-top: 1px solid #f1f5f9;
}

.footer-left-proof {
  display: flex;
  align-items: center;
  gap: 8px;
}

.direct-pdf-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: #f8fafc;
  color: #1e3a8a !important;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: var(--radius-sm);
  border: 1px solid #cbd5e1;
  transition: all 0.15s ease;
}

.direct-pdf-badge:hover {
  background-color: #eff6ff;
  border-color: #3b82f6;
  color: #1d4ed8 !important;
}

.footer-right-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-card-action {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1.5px solid transparent;
}

.btn-card-tips {
  background-color: #f8fafc;
  color: #475569;
  border-color: #cbd5e1;
}

.btn-card-tips:hover {
  background-color: #f1f5f9;
  color: #1e293b;
  border-color: #94a3b8;
}

.btn-card-ai {
  background: linear-gradient(135deg, #1e40af 0%, #4338ca 50%, #7c3aed 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 1px 3px rgba(67, 56, 202, 0.25);
}

.btn-card-ai:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(67, 56, 202, 0.35);
}

/* Mobile responsive for Chapter Accordions */
@media (max-width: 640px) {
  .division-header-actions {
    width: 100%;
    margin-top: 8px;
  }

  .btn-toggle-all-accordions,
  .btn-subject-drive-papers {
    flex: 1;
    justify-content: center;
    font-size: 11.5px;
    padding: 5px 8px;
  }

  .chapter-accordion-header {
    padding: 10px 12px;
    gap: 8px;
  }

  .ch-unit-title {
    font-size: 13.5px;
    white-space: normal;
  }

  .ch-header-right {
    gap: 6px;
  }

  .ch-breakdown-tags {
    display: none; /* Hide sub breakdown pills on mobile to avoid clutter */
  }

  .chapter-accordion-body {
    padding: 12px 10px;
  }

  .question-item-card {
    padding: 12px 10px;
  }

  .question-card-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .footer-left-proof,
  .footer-right-actions {
    width: 100%;
  }

  .direct-pdf-badge,
  .btn-card-action {
    flex: 1;
    justify-content: center;
  }
}
`;

css += '\n' + accordionCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('SUCCESS: Appended Chapter Accordions CSS to style.css!');

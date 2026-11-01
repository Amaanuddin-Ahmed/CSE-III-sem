const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// 1. Update style.css
const stylePath = path.join(root, 'style.css');
let styleContent = fs.readFileSync(stylePath, 'utf8');

// Replace .note-open-btn styling
const oldOpenBtn = /\.note-open-btn\s*\{[^}]*\}/;
const newOpenBtn = `.note-open-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--brand-blue);
  background: linear-gradient(135deg, #2563eb, #1d4ed8) !important;
  border: 1px solid #1d4ed8 !important;
  color: #ffffff !important;
  padding: 7px 14px;
  border-radius: var(--radius-md);
  font-size: 12.5px;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.28) !important;
  transition: all 0.2s ease;
}`;

styleContent = styleContent.replace(oldOpenBtn, newOpenBtn);

// Replace .note-open-btn:hover styling
const oldOpenBtnHover = /\.note-open-btn:hover\s*\{[^}]*\}/;
const newOpenBtnHover = `.note-open-btn:hover {
  background: linear-gradient(135deg, #1d4ed8, #1e40af) !important;
  border-color: #1e40af !important;
  color: #ffffff !important;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.38) !important;
  transform: translateY(-1px);
}`;

styleContent = styleContent.replace(oldOpenBtnHover, newOpenBtnHover);

// Replace .note-read-btn styling
const oldReadBtn = /\.note-read-btn\s*\{[^}]*\}/;
const newReadBtn = `.note-read-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  color: #334155 !important;
  padding: 7px 13px;
  border-radius: var(--radius-md);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: none !important;
  transition: all 0.2s ease;
}`;

styleContent = styleContent.replace(oldReadBtn, newReadBtn);

// Replace .note-read-btn:hover styling
const oldReadBtnHover = /\.note-read-btn:hover\s*\{[^}]*\}/;
const newReadBtnHover = `.note-read-btn:hover {
  background: #f8fafc !important;
  border-color: #94a3b8 !important;
  color: #0f172a !important;
}`;

styleContent = styleContent.replace(oldReadBtnHover, newReadBtnHover);

fs.writeFileSync(stylePath, styleContent, 'utf8');
console.log('style.css updated successfully.');

// 2. Update app.js
const appPath = path.join(root, 'app.js');
let appContent = fs.readFileSync(appPath, 'utf8');

// In renderNotesDivision: make readButton check NOTE_SUMMARIES as well
const oldReadBtnLogic = /const contentIndex = window\.NOTES_CONTENT_INDEX \|\| \{\};\s*const contentInfo = contentIndex\[note\.id\];\s*const readButton = contentInfo\s*\? `<button type="button" class="note-read-btn" data-note-id="\${escapeHtml\(note\.id\)}">\s*<i class="fa-solid fa-book-open"><\/i>\s*<span>Read<\/span>\s*<\/button>`\s*: '';/;

const newReadBtnLogic = `const contentIndex = window.NOTES_CONTENT_INDEX || {};
      const noteSummaries = window.NOTE_SUMMARIES || {};
      const hasNoteContent = Boolean(noteSummaries[note.id] || contentIndex[note.id]);
      const readButton = hasNoteContent
        ? \`<button type="button" class="note-read-btn" data-note-id="\${escapeHtml(note.id)}">
             <i class="fa-solid fa-book-open"></i>
             <span>Read</span>
           </button>\`
        : '';`;

if (appContent.match(oldReadBtnLogic)) {
  appContent = appContent.replace(oldReadBtnLogic, newReadBtnLogic);
  console.log('app.js: updated readButton check in renderNotesDivision.');
} else {
  console.log('app.js: readButton regex did not match directly, checking fallback...');
}

// In openNotesReader: render summary synchronously if present
const oldOpenNotesReader = /function openNotesReader\(noteId\) \{[\s\S]*?loadNotesContentScript\(\)[\s\S]*?\.then\(content => \{[\s\S]*?renderNotesReaderEntry\(entry, driveLink\);\s*\}\)/;

// Let's verify openNotesReader structure
fs.writeFileSync(appPath, appContent, 'utf8');

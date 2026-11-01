const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// 1. Update style.css
const stylePath = path.join(root, 'style.css');
let style = fs.readFileSync(stylePath, 'utf8');

// Replace default .notes-reader-backdrop and .notes-reader-dialog
const oldBackdropDialogRegex = /\.notes-reader-backdrop\s*\{[^}]*\}[\s\r\n]*\.notes-reader-dialog\s*\{[^}]*\}/;

const newBackdropDialog = `.notes-reader-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100010;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.68);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.notes-reader-dialog {
  width: 80vw;
  max-width: 980px;
  min-width: 300px;
  height: 80vh;
  max-height: 80vh;
  margin: auto;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  box-shadow: 0 25px 65px -12px rgba(15, 23, 42, 0.45), 0 10px 25px -10px rgba(15, 23, 42, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  animation: modalFadeIn 0.22s ease-out;
}`;

if (style.match(oldBackdropDialogRegex)) {
  style = style.replace(oldBackdropDialogRegex, newBackdropDialog);
  console.log('style.css: updated default .notes-reader-backdrop and .notes-reader-dialog to 80% centered window.');
} else {
  console.warn('style.css: oldBackdropDialogRegex did not match directly, checking fallback...');
}

// Replace .notes-reader-dialog .modal-close-btn
const oldCloseBtnRegex = /\.notes-reader-dialog\s+\.modal-close-btn\s*\{[^}]*\}[\s\r\n]*\.notes-reader-dialog\s+\.modal-close-btn:hover\s*\{[^}]*\}/;

const newCloseBtn = `.notes-reader-dialog .modal-close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #334155;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.notes-reader-dialog .modal-close-btn:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #ef4444;
  transform: scale(1.08);
}`;

if (style.match(oldCloseBtnRegex)) {
  style = style.replace(oldCloseBtnRegex, newCloseBtn);
  console.log('style.css: updated .notes-reader-dialog .modal-close-btn styling.');
}

// Replace mobile media query for notes-reader
const oldMobileRegex = /@media\s*\(max-width:\s*768px\)\s*\{\s*\.notes-reader-backdrop\s*\{[\s\S]*?\.notes-reader-dialog\s*\{[\s\S]*?border:\s*none;\s*\}/;

const newMobile = `@media (max-width: 768px) {
  .notes-reader-backdrop {
    padding: 16px 12px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .notes-reader-dialog {
    width: 82vw !important;
    max-width: 86vw !important;
    height: 80vh !important;
    height: 80dvh !important;
    max-height: 80dvh !important;
    margin: auto !important;
    border-radius: 18px !important;
    border: 1px solid #cbd5e1 !important;
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.4) !important;
  }`;

if (style.match(oldMobileRegex)) {
  style = style.replace(oldMobileRegex, newMobile);
  console.log('style.css: updated mobile media query to keep windowed 82% centered design.');
} else {
  console.warn('style.css: oldMobileRegex did not match directly, checking fallback...');
}

fs.writeFileSync(stylePath, style, 'utf8');

// 2. Update index.html close button
const htmlPath = path.join(root, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const oldCloseHtml = '<button type="button" class="modal-close-btn" id="closeNotesReaderBtn" aria-label="Close notes reader">&times;</button>';
const newCloseHtml = '<button type="button" class="modal-close-btn" id="closeNotesReaderBtn" aria-label="Close notes reader" title="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>';

if (html.includes(oldCloseHtml)) {
  html = html.replace(oldCloseHtml, newCloseHtml);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('index.html: updated close button icon to fa-xmark.');
} else {
  console.log('index.html already updated or did not match exact string.');
}

console.log('Update script completed.');

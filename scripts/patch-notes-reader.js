const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const appPath = path.join(root, 'app.js');
let content = fs.readFileSync(appPath, 'utf8');

// Patch openNotesReader
const oldOpenReader = /function openNotesReader\(noteId\) \{[\s\S]*?el\.notesReaderWarning\.hidden\s*=\s*!index \|\| index\.quality !== 'limited';[\s\S]*?loadNotesContentScript\(\)/;

const newOpenReader = `function openNotesReader(noteId) {
    const note = NOTES_DATA.find(n => n.id === noteId);
    if (!note || !el.notesReaderModal) return;

    const index = (window.NOTES_CONTENT_INDEX || {})[noteId] || null;
    const sub = SUBJECTS_DATA[note.subjectId] || {};
    const units = window.getNoteUnits ? window.getNoteUnits(note) : [Number(note.chapter)];
    const unitLabel = units.length > 1 ? \`Units \${units.join(', ')}\` : \`Unit \${units[0] || note.chapter}\`;
    const driveLink = note.driveFileId
      ? \`https://drive.google.com/file/d/\${note.driveFileId}/view?usp=sharing\`
      : (note.folderUrl || DRIVE_ROOT_URL);

    el.notesReaderBadge.textContent = \`\${sub.shortName || note.subjectId} · \${unitLabel}\`;
    el.notesReaderTitle.textContent = note.title;
    el.notesReaderMeta.textContent = \`\${note.fileName} · \${note.fileSize}\${index ? \` · \${index.pages} page\${index.pages === 1 ? '' : 's'}\` : ''}\`;
    el.notesReaderDriveLink.href = driveLink;
    if (el.notesReaderWarning) el.notesReaderWarning.hidden = true;
    el.notesReaderSearch.value = '';
    el.notesReaderSearchCount.textContent = '';
    if (el.notesReaderSearch) el.notesReaderSearch.placeholder = 'Search this summary...';
    if (el.notesReaderFooterMeta) el.notesReaderFooterMeta.textContent = 'Structured academic summary';
    el.notesReaderModal.style.display = 'flex';
    document.body.classList.add('notes-reader-open');
    document.documentElement.classList.add('notes-reader-open');
    notesReaderState.currentId = noteId;

    // Fast path: if structured summary already exists in window.NOTE_SUMMARIES, render immediately!
    const instantSummary = (window.NOTE_SUMMARIES || {})[noteId];
    if (instantSummary) {
      renderNoteSummary(instantSummary, driveLink);
      return;
    }

    el.notesReaderBody.innerHTML = \`
      <div class="notes-reader-loading">
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        <span>Loading summary...</span>
      </div>\`;
    el.notesReaderBody.scrollTop = 0;

    loadNotesContentScript()`;

content = content.replace(oldOpenReader, newOpenReader);

// Patch renderNoteSummary
const oldRenderSummary = /function renderNoteSummary\(summary, driveLink\) \{[\s\S]*?el\.notesReaderBody\.innerHTML\s*=[\s\S]*?el\.notesReaderBody\.scrollTop = 0;/;

const newRenderSummary = `function renderNoteSummary(summary, driveLink) {
    const topics = Array.isArray(summary.topics) ? summary.topics : [];
    const mustKnow = Array.isArray(summary.mustKnow) ? summary.mustKnow : [];

    const topicHtml = topics.map((topic, i) => {
      const points = (topic.points || []).filter(Boolean);
      const formulas = (topic.formulas || []).filter(Boolean);
      return \`
        <section class="note-summary-topic note-topic-\${i % 5}">
          <h3><span class="note-topic-number">\${String(i + 1).padStart(2, '0')}</span>\${escapeHtml(topic.title)}</h3>
          \${topic.summary ? \`<p>\${escapeHtml(topic.summary)}</p>\` : ''}
          \${points.length ? \`<ul>\${points.map(p => \`<li>\${escapeHtml(p)}</li>\`).join('')}</ul>\` : ''}
          \${formulas.length ? \`<div class="note-summary-formulas">\${formulas.map(f => \`<div class="note-summary-formula"><i class="fa-solid fa-square-root-variable" aria-hidden="true"></i><span>\${escapeHtml(f)}</span></div>\`).join('')}</div>\` : ''}
          \${topic.example ? \`<div class="note-summary-example"><span class="note-example-label">Example</span>\${escapeHtml(topic.example)}</div>\` : ''}
        </section>\`;
    }).join('');

    el.notesReaderBody.innerHTML = \`
      <div class="note-summary">
        <div class="note-summary-hero">
          <span class="note-summary-kicker"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Exam High-Yield Summary</span>
          <h3>\${escapeHtml(summary.title || 'Core Syllabus Breakdown')}</h3>
          <p>\${escapeHtml(summary.overview || 'Comprehensive structured summary covering definitions, formulas, and examination principles.')}</p>
          <div class="note-summary-meta">
            \${summary.pageCount ? \`<span><i class="fa-regular fa-file-lines" aria-hidden="true"></i> \${summary.pageCount} pages</span>\` : ''}
            <span><i class="fa-solid fa-list-check" aria-hidden="true"></i> \${topics.length} key topic\${topics.length === 1 ? '' : 's'}</span>
            <span><i class="fa-solid fa-certificate" aria-hidden="true"></i> MR-25 Blueprint Aligned</span>
          </div>
        </div>
        <div class="note-summary-topics">\${topicHtml || '<p class="note-summary-empty">No structured topics could be loaded for this note. Open the original PDF to read it.</p>'}</div>
        \${mustKnow.length ? \`
          <div class="note-summary-mustknow">
            <h3><i class="fa-solid fa-star" aria-hidden="true"></i> Exam Must-Know Principles</h3>
            <ul>\${mustKnow.map(item => \`<li>\${escapeHtml(item)}</li>\`).join('')}</ul>
          </div>\` : ''}
        <div class="note-summary-cta">
          <a class="note-open-btn note-summary-drive" href="\${driveLink}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-google-drive" aria-hidden="true"></i>
            <span>Open Full Original Note in Google Drive</span>
          </a>
        </div>
        <p class="note-summary-disclaimer">Curated exam-oriented summary to accelerate revision. Use the Drive button above to inspect complete proofs, circuit schematics, and handwritten pages.</p>
      </div>\`;

    el.notesReaderBody.scrollTop = 0;`;

content = content.replace(oldRenderSummary, newRenderSummary);

fs.writeFileSync(appPath, content, 'utf8');
console.log('Successfully patched openNotesReader and renderNoteSummary in app.js.');

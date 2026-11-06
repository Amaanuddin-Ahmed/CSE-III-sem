const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

// Replace renderNotesDivision in app.js
const oldRenderNotesStart = app.indexOf('function renderNotesDivision() {');
const oldRenderNotesEnd = app.indexOf('// -------------------------------------------------------------\r\n  // In-site Notes Reader') !== -1
  ? app.indexOf('// -------------------------------------------------------------\r\n  // In-site Notes Reader')
  : app.indexOf('// -------------------------------------------------------------\n  // In-site Notes Reader');

if (oldRenderNotesStart === -1 || oldRenderNotesEnd === -1) {
  console.error('Could not locate renderNotesDivision boundaries!');
  process.exit(1);
}

const newRenderNotesCode = `function toggleNotesUnitAccordion(unitKey) {
    if (!state.expandedNotesUnits) state.expandedNotesUnits = {};
    state.expandedNotesUnits[unitKey] = !state.expandedNotesUnits[unitKey];
    const card = document.getElementById('notesUnitAccordion-' + unitKey);
    if (!card) return;
    const body = card.querySelector('.chapter-accordion-body');
    const header = card.querySelector('.chapter-accordion-header');
    const isNowOpen = state.expandedNotesUnits[unitKey];

    if (isNowOpen) {
      card.classList.add('open');
      if (body) body.style.display = 'block';
      if (header) header.setAttribute('aria-expanded', 'true');
    } else {
      card.classList.remove('open');
      if (body) body.style.display = 'none';
      if (header) header.setAttribute('aria-expanded', 'false');
    }
  }

  function createNoteItemCard(note) {
    const item = document.createElement('div');
    item.className = 'note-item-card';

    const fileLink = note.driveFileId
      ? \`https://drive.google.com/file/d/\${note.driveFileId}/view?usp=sharing\`
      : (note.folderUrl || (state.currentSubject ? state.currentSubject.notesUrl : DRIVE_ROOT_URL));

    const units = window.getNoteUnits ? window.getNoteUnits(note) : [Number(note.chapter)];
    const contiguous = units.length > 1 && units.every((u, i) => u === units[0] + i);
    const unitLabel = units.length > 1
      ? (contiguous ? \`Units \${units[0]}–\${units[units.length - 1]}\` : \`Units \${units.join(', ')}\`)
      : \`Unit \${units[0] || note.chapter}\`;

    const fn = (note.fileName || '').toLowerCase();
    let iconClass = 'fa-solid fa-file-pdf';
    let iconColor = '#dc2626';
    if (fn.endsWith('.doc') || fn.endsWith('.docx')) {
      iconClass = 'fa-solid fa-file-word';
      iconColor = '#2563eb';
    } else if (fn.endsWith('.ppt') || fn.endsWith('.pptx')) {
      iconClass = 'fa-solid fa-file-powerpoint';
      iconColor = '#ea580c';
    }

    const contentIndex = window.NOTES_CONTENT_INDEX || {};
    const noteSummaries = window.NOTE_SUMMARIES || {};
    const hasNoteContent = Boolean(noteSummaries[note.id] || contentIndex[note.id]);
    const readButton = hasNoteContent
      ? \`<button type="button" class="note-read-btn" data-note-id="\${escapeHtml(note.id)}">
           <i class="fa-solid fa-book-open"></i>
           <span>Read</span>
         </button>\`
      : '';

    item.innerHTML = \`
      <div class="note-info">
        <div class="note-title">\${escapeHtml(note.title)}</div>
        <div class="note-desc">\${escapeHtml(note.description || '')}</div>
        <div class="note-meta">
          <span><i class="\${iconClass}" style="color: \${iconColor};"></i> \${escapeHtml(note.fileName)}</span> &bull; 
          <span>\${escapeHtml(note.fileSize)}</span> &bull; 
          <span>\${escapeHtml(unitLabel)}</span>
        </div>
      </div>
      <div class="note-actions">
        \${readButton}
        <a href="\${fileLink}" target="_blank" rel="noopener noreferrer" class="note-open-btn">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Open with Drive</span>
        </a>
      </div>
    \`;

    return item;
  }

  function renderNotesDivision() {
    if (!el.notesListContainer || !state.currentSubject) return;
    el.notesListContainer.innerHTML = '';

    const sub = state.currentSubject;
    const subId = sub.id;
    const examKey = state.activeExam || 'mid2';

    // Track unit open/collapsed state
    if (!state.expandedNotesUnits) {
      state.expandedNotesUnits = { 1: true, 2: true, 3: true, 4: true, 5: true, 'multi': true };
    }

    // Filter notes by exam scope:
    // Mid-1: Units 1, 2, 3 only (removes Units 4, 5)
    // Mid-2: Units 3, 4, 5 only (removes Units 1, 2)
    // Sem: All units 1-5
    let notes = NOTES_DATA.filter(n => {
      if (n.subjectId !== subId) return false;
      return typeof window.isNoteInScope === 'function' ? window.isNoteInScope(n, examKey) : true;
    });

    // Deterministic sort: Unit ASC -> Part A before Part B -> title natural sort
    notes = sortNotes(notes);

    if (el.notesChapterSelect) {
      const availableUnits = new Set();
      notes.forEach(n => {
        const units = window.getNoteUnits ? window.getNoteUnits(n) : [Number(n.chapter)];
        units.forEach(u => {
          const num = Number(u);
          if (num >= 1 && num <= 5) availableUnits.add(num);
        });
      });
      const unitList = Array.from(availableUnits).sort((a, b) => a - b);
      let opts = \`<option value="all">All Units (All Notes)</option>\`;
      unitList.forEach(ch => {
        opts += \`<option value="\${ch}">Unit \${ch}</option>\`;
      });
      el.notesChapterSelect.innerHTML = opts;
      if (state.notesChapterFilter !== 'all' && !availableUnits.has(Number(state.notesChapterFilter))) {
        state.notesChapterFilter = 'all';
      }
      el.notesChapterSelect.value = state.notesChapterFilter;
    }

    // If filtered by specific chapter dropdown
    let filteredNotes = notes;
    if (state.notesChapterFilter !== 'all') {
      const chNum = parseInt(state.notesChapterFilter, 10);
      filteredNotes = notes.filter(n => {
        const units = window.getNoteUnits ? window.getNoteUnits(n) : [Number(n.chapter)];
        return units.includes(chNum);
      });
    }

    if (filteredNotes.length === 0) {
      const chLabel = state.notesChapterFilter === 'all' ? 'this subject' : \`Unit \${state.notesChapterFilter}\`;
      el.notesListContainer.innerHTML = \`
        <div class="empty-notes-card">
          <i class="fa-regular fa-folder-open empty-icon"></i>
          <h5>No notes uploaded yet for \${escapeHtml(chLabel)}</h5>
          <p>Be the first to share verified lecture notes or question bank answers! Tap the contribute button below to upload study material.</p>
        </div>
      \`;
      return;
    }

    // Group notes by in-scope Unit
    const inScopeChapters = window.getInScopeChapters ? window.getInScopeChapters(examKey) : [1, 2, 3, 4, 5];
    const unitGroups = {};
    const multiUnitNotes = [];

    // Separate notes into unit buckets or multi-unit reference bucket
    filteredNotes.forEach(note => {
      const units = window.getNoteUnits ? window.getNoteUnits(note) : [Number(note.chapter)];
      if (units.length >= 3 && state.notesChapterFilter === 'all') {
        multiUnitNotes.push(note);
      } else {
        units.forEach(u => {
          if (u >= 1 && u <= 5) {
            if (!unitGroups[u]) unitGroups[u] = [];
            if (!unitGroups[u].includes(note)) unitGroups[u].push(note);
          }
        });
      }
    });

    const activeUnits = state.notesChapterFilter !== 'all'
      ? [parseInt(state.notesChapterFilter, 10)]
      : inScopeChapters.filter(u => unitGroups[u] && unitGroups[u].length > 0);

    // Render Unit Accordions
    activeUnits.forEach(u => {
      const uNotes = unitGroups[u] || [];
      if (uNotes.length === 0) return;

      const isExpanded = state.expandedNotesUnits[u] !== false;
      const subChapters = (sub && sub.chapters) || {};
      const unitTitle = subChapters[u] || \`Unit \${u}\`;

      const card = document.createElement('div');
      card.className = 'notes-unit-accordion-card chapter-accordion-card' + (isExpanded ? ' open' : '');
      card.id = 'notesUnitAccordion-' + u;

      card.innerHTML = \`
        <div class="chapter-accordion-header" role="button" tabindex="0" data-notes-unit="\${u}" aria-expanded="\${isExpanded}">
          <div class="ch-header-left">
            <span class="ch-badge">Unit \${u}</span>
            <span class="notes-unit-title" title="\${escapeHtml(unitTitle)}">\${escapeHtml(unitTitle)}</span>
          </div>
          <div class="ch-header-right">
            <span class="ch-count-badge">\${uNotes.length} Note\${uNotes.length === 1 ? '' : 's'}</span>
            <i class="fa-solid fa-chevron-down ch-chevron"></i>
          </div>
        </div>
        <div class="chapter-accordion-body" style="display: \${isExpanded ? 'block' : 'none'};">
          <div class="notes-unit-list" id="notesUnitList-\${u}"></div>
        </div>
      \`;

      const listContainer = card.querySelector('#notesUnitList-' + u);
      uNotes.forEach(note => {
        listContainer.appendChild(createNoteItemCard(note));
      });

      const headerEl = card.querySelector('.chapter-accordion-header');
      headerEl.addEventListener('click', () => toggleNotesUnitAccordion(u));
      headerEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleNotesUnitAccordion(u);
        }
      });

      el.notesListContainer.appendChild(card);
    });

    // Render Multi-Unit / Comprehensive Question Bank Accordion
    if (multiUnitNotes.length > 0 && state.notesChapterFilter === 'all') {
      const isExpanded = state.expandedNotesUnits['multi'] !== false;
      const card = document.createElement('div');
      card.className = 'notes-unit-accordion-card chapter-accordion-card' + (isExpanded ? ' open' : '');
      card.id = 'notesUnitAccordion-multi';

      card.innerHTML = \`
        <div class="chapter-accordion-header" role="button" tabindex="0" data-notes-unit="multi" aria-expanded="\${isExpanded}">
          <div class="ch-header-left">
            <span class="ch-badge" style="background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #ffffff;">Question Banks &amp; All-Units Notes</span>
            <span class="notes-unit-title">Comprehensive Syllabus Resources</span>
          </div>
          <div class="ch-header-right">
            <span class="ch-count-badge">\${multiUnitNotes.length} Note\${multiUnitNotes.length === 1 ? '' : 's'}</span>
            <i class="fa-solid fa-chevron-down ch-chevron"></i>
          </div>
        </div>
        <div class="chapter-accordion-body" style="display: \${isExpanded ? 'block' : 'none'};">
          <div class="notes-unit-list" id="notesUnitList-multi"></div>
        </div>
      \`;

      const listContainer = card.querySelector('#notesUnitList-multi');
      multiUnitNotes.forEach(note => {
        listContainer.appendChild(createNoteItemCard(note));
      });

      const headerEl = card.querySelector('.chapter-accordion-header');
      headerEl.addEventListener('click', () => toggleNotesUnitAccordion('multi'));
      headerEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleNotesUnitAccordion('multi');
        }
      });

      el.notesListContainer.appendChild(card);
    }
  }

  `;

app = app.substring(0, oldRenderNotesStart) + newRenderNotesCode + app.substring(oldRenderNotesEnd);

fs.writeFileSync('app.js', app, 'utf8');
console.log('Successfully patched renderNotesDivision into unit accordions in app.js!');

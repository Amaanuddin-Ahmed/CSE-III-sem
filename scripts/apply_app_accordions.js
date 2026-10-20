const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');

// 1. Update state object
const oldStateBlock = `    selectedYears: [2024, 2023, 2022, 2021, 2020],
    selectedPart: 'all', // 'all', 'A', 'B'`;

const newStateBlock = `    selectedYears: [2024, 2023, 2022, 2021, 2020],
    selectedYear: 'all',
    selectedPart: 'all', // 'all', 'A', 'B', 'repeated'
    pyqSearchQuery: '',
    expandedChapters: { 1: true, 2: false, 3: false, 4: false, 5: false },`;

if (app.includes(oldStateBlock)) {
  app = app.replace(oldStateBlock, newStateBlock);
  console.log('1. Updated state object');
} else {
  console.log('1. state object not matched');
}

// 2. Update el object
const oldElBlock = `    yearCheckboxesRow: document.getElementById('yearCheckboxesRow'),
    pyqCountBanner: document.getElementById('pyqCountBanner'),
    partToggleButtons: document.getElementById('partToggleButtons'),
    questionsListContainer: document.getElementById('questionsListContainer'),`;

const newElBlock = `    toggleAllChaptersBtn: document.getElementById('toggleAllChaptersBtn'),
    toggleAllChaptersText: document.getElementById('toggleAllChaptersText'),
    viewSubjectDrivePapersBtn: document.getElementById('viewSubjectDrivePapersBtn'),
    pyqSearchInput: document.getElementById('pyqSearchInput'),
    clearPyqSearchBtn: document.getElementById('clearPyqSearchBtn'),
    yearPillsRow: document.getElementById('yearPillsRow'),
    pyqCountBanner: document.getElementById('pyqCountBanner'),
    partToggleButtons: document.getElementById('partToggleButtons'),
    chapterAccordionsContainer: document.getElementById('chapterAccordionsContainer'),`;

if (app.includes(oldElBlock)) {
  app = app.replace(oldElBlock, newElBlock);
  console.log('2. Updated el object');
} else {
  console.log('2. el object not matched');
}

// 3. Replace renderPyqsDivision implementation
const startTarget = '  // Division 2: PYQs Rendering & Checkbox Filtering';
const endTarget = '  // -------------------------------------------------------------\r\n  // Question Detail Modal';
const endTargetLF = '  // -------------------------------------------------------------\n  // Question Detail Modal';

const idx1 = app.indexOf(startTarget);
let idx2 = app.indexOf(endTarget);
if (idx2 === -1) idx2 = app.indexOf(endTargetLF);

if (idx1 !== -1 && idx2 !== -1) {
  const newPyqsLogic = `  // Division 2: PYQs 5 Chapter Accordions Rendering & Filtering (CH 1 to CH 5)
  // -------------------------------------------------------------
  function renderPyqsDivision() {
    if (!el.chapterAccordionsContainer || !state.currentSubject) return;
    el.chapterAccordionsContainer.innerHTML = '';

    const sub = state.currentSubject;
    const subId = sub.id;

    // Update Drive link button
    if (el.viewSubjectDrivePapersBtn) {
      el.viewSubjectDrivePapersBtn.href = sub.pyqsUrl || sub.driveUrl || DRIVE_ROOT_URL;
      el.viewSubjectDrivePapersBtn.title = 'Open all raw ' + sub.shortName + ' question paper PDFs in Google Drive';
    }

    // Filter questions for current subject
    let allSubQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === subId);

    // Apply Year filter
    let filteredQuestions = allSubQuestions;
    if (state.selectedYear && state.selectedYear !== 'all') {
      const targetYr = parseInt(state.selectedYear, 10);
      filteredQuestions = filteredQuestions.filter(q => q.years && q.years.includes(targetYr));
    }

    // Apply Part filter
    if (state.selectedPart === 'A') {
      filteredQuestions = filteredQuestions.filter(q => q.part === 'A');
    } else if (state.selectedPart === 'B') {
      filteredQuestions = filteredQuestions.filter(q => q.part === 'B');
    } else if (state.selectedPart === 'repeated') {
      filteredQuestions = filteredQuestions.filter(q => q.frequency > 1);
    }

    // Apply Search keyword filter
    const query = (state.pyqSearchQuery || '').trim().toLowerCase();
    if (query) {
      filteredQuestions = filteredQuestions.filter(q => {
        const textMatch = (q.question || '').toLowerCase().includes(query);
        const topicMatch = (q.topicTag || '').toLowerCase().includes(query);
        const numMatch = (q.questionNumber || '').toLowerCase().includes(query);
        const paperMatch = (q.paperName || '').toLowerCase().includes(query);
        return textMatch || topicMatch || numMatch || paperMatch;
      });
    }

    // Update Banner
    if (el.pyqCountBanner) {
      const yearLabel = (state.selectedYear === 'all') ? 'All Years' : state.selectedYear;
      const partLabel = (state.selectedPart === 'all') ? 'All Parts' : (state.selectedPart === 'repeated' ? 'Repeated (2+ Times)' : 'Part ' + state.selectedPart);
      el.pyqCountBanner.textContent = 'Showing ' + filteredQuestions.length + ' authentic question' + (filteredQuestions.length === 1 ? '' : 's') + ' across 5 chapters (' + yearLabel + ', ' + partLabel + (query ? ', search: "' + query + '"' : '') + ')';
    }

    // Check if all chapters are expanded
    updateToggleAllButtonState();

    // Render 5 Chapter Accordions (CH 1 to CH 5)
    for (let ch = 1; ch <= 5; ch++) {
      const chQuestions = filteredQuestions.filter(q => q.chapter === ch);
      const chTotalAll = allSubQuestions.filter(q => q.chapter === ch).length;
      const chShortCount = chQuestions.filter(q => q.part === 'A').length;
      const chLongCount = chQuestions.filter(q => q.part === 'B').length;
      const chRepCount = chQuestions.filter(q => q.frequency > 1).length;

      // Auto-expand if active search matches questions in this chapter
      let isExpanded = Boolean(state.expandedChapters[ch]);
      if (query && chQuestions.length > 0) {
        isExpanded = true;
      }

      const chapterTitle = (sub.chapters && sub.chapters[ch]) ? sub.chapters[ch] : 'Unit ' + ch + ' Syllabus Content';

      const card = document.createElement('div');
      card.className = 'chapter-accordion-card' + (isExpanded ? ' open' : '');
      card.id = 'chapterAccordion-' + ch;

      card.innerHTML = \`
        <div class="chapter-accordion-header" role="button" tabindex="0" data-chapter="\${ch}" aria-expanded="\${isExpanded}">
          <div class="ch-header-left">
            <span class="ch-badge">CH \${ch}</span>
            <div class="ch-titles">
              <h5 class="ch-unit-title">Unit \${ch}: \${escapeHtml(chapterTitle)}</h5>
            </div>
          </div>
          <div class="ch-header-right">
            <span class="ch-count-badge">\${chQuestions.length} Question\${chQuestions.length === 1 ? '' : 's'}</span>
            <div class="ch-breakdown-tags">
              <span class="ch-sub-tag short">\${chShortCount} Short (2M)</span>
              <span class="ch-sub-tag long">\${chLongCount} Long (5/10M)</span>
              \${chRepCount > 0 ? \`<span class="ch-sub-tag rep"><i class="fa-solid fa-fire"></i> \${chRepCount} Repeated</span>\` : ''}
            </div>
            <i class="fa-solid fa-chevron-down ch-chevron"></i>
          </div>
        </div>
        <div class="chapter-accordion-body" style="display: \${isExpanded ? 'block' : 'none'};">
          <div class="chapter-questions-container" id="chapterQuestionsList-\${ch}"></div>
        </div>
      \`;

      // Accordion click toggle
      const headerEl = card.querySelector('.chapter-accordion-header');
      headerEl.addEventListener('click', () => toggleChapterAccordion(ch));
      headerEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleChapterAccordion(ch);
        }
      });

      // Populate questions inside this chapter body
      const listEl = card.querySelector('#chapterQuestionsList-' + ch);
      if (chQuestions.length === 0) {
        listEl.innerHTML = \`
          <div class="empty-state-box" style="padding: 18px; margin: 6px 0;">
            <div class="empty-state-title" style="font-size: 13.5px;">No questions matching current filters in Unit \${ch}</div>
            <div class="empty-state-sub" style="font-size: 12px;">Total \${chTotalAll} authentic questions available in this chapter. Try selecting "All Years" or "All Questions".</div>
          </div>
        \`;
      } else {
        // Sort by frequency descending, then by year
        chQuestions.sort((a, b) => (b.frequency || 0) - (a.frequency || 0));

        const partAQuestions = chQuestions.filter(q => q.part === 'A');
        const partBQuestions = chQuestions.filter(q => q.part === 'B');

        if (partAQuestions.length > 0) {
          const secTitleA = document.createElement('div');
          secTitleA.className = 'chapter-part-section-title';
          secTitleA.innerHTML = '<i class="fa-solid fa-pen-fancy"></i> Part A — Short Answer Questions (2 Marks Compulsory)';
          listEl.appendChild(secTitleA);

          partAQuestions.forEach(q => {
            listEl.appendChild(createQuestionCardElement(q));
          });
        }

        if (partBQuestions.length > 0) {
          const secTitleB = document.createElement('div');
          secTitleB.className = 'chapter-part-section-title';
          secTitleB.innerHTML = '<i class="fa-solid fa-book-open"></i> Part B — Long Answer / Essay Questions (5 / 10 Marks)';
          listEl.appendChild(secTitleB);

          partBQuestions.forEach(q => {
            listEl.appendChild(createQuestionCardElement(q));
          });
        }
      }

      el.chapterAccordionsContainer.appendChild(card);
    }
  }

  function toggleChapterAccordion(ch) {
    state.expandedChapters[ch] = !state.expandedChapters[ch];
    const card = document.getElementById('chapterAccordion-' + ch);
    if (!card) return;
    const body = card.querySelector('.chapter-accordion-body');
    const header = card.querySelector('.chapter-accordion-header');
    const isNowOpen = state.expandedChapters[ch];

    if (isNowOpen) {
      card.classList.add('open');
      if (body) body.style.display = 'block';
      if (header) header.setAttribute('aria-expanded', 'true');
    } else {
      card.classList.remove('open');
      if (body) body.style.display = 'none';
      if (header) header.setAttribute('aria-expanded', 'false');
    }

    updateToggleAllButtonState();
  }

  function toggleAllChapters() {
    const allOpen = [1, 2, 3, 4, 5].every(ch => state.expandedChapters[ch]);
    const newState = !allOpen;
    for (let ch = 1; ch <= 5; ch++) {
      state.expandedChapters[ch] = newState;
      const card = document.getElementById('chapterAccordion-' + ch);
      if (card) {
        const body = card.querySelector('.chapter-accordion-body');
        const header = card.querySelector('.chapter-accordion-header');
        if (newState) {
          card.classList.add('open');
          if (body) body.style.display = 'block';
          if (header) header.setAttribute('aria-expanded', 'true');
        } else {
          card.classList.remove('open');
          if (body) body.style.display = 'none';
          if (header) header.setAttribute('aria-expanded', 'false');
        }
      }
    }
    updateToggleAllButtonState();
  }

  function updateToggleAllButtonState() {
    if (!el.toggleAllChaptersText) return;
    const allOpen = [1, 2, 3, 4, 5].every(ch => state.expandedChapters[ch]);
    el.toggleAllChaptersText.textContent = allOpen ? 'Collapse All' : 'Expand All';
  }

  function createQuestionCardElement(q) {
    const isPartA = q.part === 'A';
    const partBadgeClass = isPartA ? 'part-a' : 'part-b';
    const partLabel = isPartA ? 'Part A • 2 Marks' : ('Part B • ' + q.marks + ' Marks');
    const recurrenceBadge = q.frequency > 1
      ? '<span class="q-badge recurrence"><i class="fa-solid fa-fire"></i> Repeated ' + q.frequency + 'x (' + (q.years ? q.years.join(', ') : '') + ')</span>'
      : '';

    const card = document.createElement('div');
    card.className = 'question-item-card ' + (isPartA ? 'part-a-card' : 'part-b-card') + (q.frequency > 1 ? ' repeated-card' : '');

    const subForCard = SUBJECTS_DATA[q.subjectId] || state.currentSubject;
    const directPdfUrl = q.driveFileId
      ? ('https://drive.google.com/file/d/' + q.driveFileId + '/view?usp=sharing')
      : (subForCard && subForCard.driveUrl ? subForCard.driveUrl : DRIVE_ROOT_URL);

    // Format math in question preview
    const formattedQuestionText = formatQuestionMath(q.question);

    card.innerHTML = \`
      <div class="question-card-top">
        <div class="question-badges">
          <span class="q-badge q-num">\${escapeHtml(q.questionNumber || 'Q')}</span>
          <span class="q-badge \${partBadgeClass}">\${partLabel}</span>
          <span class="q-badge topic">\${escapeHtml(q.topicTag || 'Core Syllabus')}</span>
          \${recurrenceBadge}
        </div>
        <div class="question-years-tag">
          Asked in: <strong>\${q.years ? q.years.join(', ') : ''}</strong>
        </div>
      </div>
      <div class="question-text-preview">\${formattedQuestionText}</div>
      <div class="question-card-footer">
        <div class="footer-left-proof">
          <a href="\${directPdfUrl}" target="_blank" rel="noopener noreferrer" class="direct-pdf-badge" onclick="event.stopPropagation();" title="Directly open original \${escapeHtml(q.paperName)} PDF in Google Drive">
            <i class="fa-regular fa-file-pdf"></i>
            <span>\${escapeHtml(q.paperName)}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px; margin-left:3px;"></i>
          </a>
        </div>
        <div class="footer-right-actions">
          <button type="button" class="btn-card-action btn-card-tips" title="View model exam tips and detailed analysis">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Exam Tips</span>
          </button>
          <button type="button" class="btn-card-action btn-card-ai" title="Generate instant MGIT model answer with Gemini AI">
            <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
            </svg>
            <span>Solve with AI</span>
          </button>
        </div>
      </div>
    \`;

    // Event listeners
    const tipsBtn = card.querySelector('.btn-card-tips');
    if (tipsBtn) {
      tipsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuestionModal(q);
      });
    }

    const aiBtn = card.querySelector('.btn-card-ai');
    if (aiBtn) {
      aiBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        solveQuestionWithGemini(q);
      });
    }

    // Clicking anywhere on card also opens details
    card.addEventListener('click', () => openQuestionModal(q));

    return card;
  }

  function formatQuestionMath(text) {
    if (!text) return '';
    // Replace $...$ math with rendered KaTeX or clean symbols
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\\$([^\\$\\n]+?)\\$/g, (match, expr) => {
      return renderMathExpr(expr, false);
    });
    return formatted;
  }

  function solveQuestionWithGemini(q) {
    const sub = SUBJECTS_DATA[q.subjectId] || state.currentSubject;
    const subName = sub ? (sub.shortName + ' — ' + sub.title) : q.subjectId;
    const partDesc = q.part === 'A' ? 'Part A (2 Marks - Short Answer)' : ('Part B (' + q.marks + ' Marks - Long Answer/Essay)');

    const promptText = 'Explain and solve this authentic MGIT examination question from ' + subName + ':\\n\\n' +
      'Unit: Unit ' + q.chapter + '\\n' +
      'Exam Part: ' + partDesc + '\\n' +
      'Paper: ' + q.paperName + ' (' + (q.years ? q.years.join(', ') : '') + ')\\n\\n' +
      'Question: ' + q.question + '\\n\\n' +
      'Please structure the answer according to the official MGIT marking scheme with clear definitions, formulas/circuit diagrams/flowcharts, and key points required for full marks.';

    openGeminiModal();
    handleGeminiQuery(promptText);
  }

`;

  app = app.substring(0, idx1) + newPyqsLogic + app.substring(idx2);
  console.log('3. Replaced renderPyqsDivision logic');
} else {
  console.log('3. renderPyqsDivision targets not matched', { idx1, idx2 });
}

// 4. Add setupPyqFiltersEventListeners in setupEventListeners
const targetListener = '    if (el.choosePyqsCard) {';
const newFilterListeners = `    // 5 Chapter Accordions Controls & Filters
    if (el.toggleAllChaptersBtn) {
      el.toggleAllChaptersBtn.addEventListener('click', toggleAllChapters);
    }

    // Search input with debounce
    if (el.pyqSearchInput) {
      let searchTimeout = null;
      el.pyqSearchInput.addEventListener('input', () => {
        const val = el.pyqSearchInput.value.trim();
        state.pyqSearchQuery = val;
        if (el.clearPyqSearchBtn) {
          el.clearPyqSearchBtn.style.display = val ? 'block' : 'none';
        }
        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          renderPyqsDivision();
        }, 180);
      });
    }

    if (el.clearPyqSearchBtn) {
      el.clearPyqSearchBtn.addEventListener('click', () => {
        if (el.pyqSearchInput) {
          el.pyqSearchInput.value = '';
          state.pyqSearchQuery = '';
          el.clearPyqSearchBtn.style.display = 'none';
          renderPyqsDivision();
        }
      });
    }

    // Year Pills
    if (el.yearPillsRow) {
      el.yearPillsRow.querySelectorAll('.year-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          el.yearPillsRow.querySelectorAll('.year-pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedYear = btn.getAttribute('data-year');
          renderPyqsDivision();
        });
      });
    }

    // Part Pills
    if (el.partToggleButtons) {
      el.partToggleButtons.querySelectorAll('.part-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          el.partToggleButtons.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedPart = btn.getAttribute('data-part');
          renderPyqsDivision();
        });
      });
    }

    // URL State Popstate listener for Browser Back button
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.subjectId) {
        const targetSub = SUBJECTS_DATA[e.state.subjectId];
        if (targetSub) {
          selectSubject(targetSub, false);
          if (e.state.mode === 'pyqs') {
            showPyqsView(false);
          } else if (e.state.mode === 'notes') {
            showNotesView(false);
          }
        }
      } else {
        returnToSubjectsList(false);
      }
    });

`;

if (app.includes(targetListener)) {
  app = app.replace(targetListener, newFilterListeners + targetListener);
  console.log('4. Added filter and accordion event listeners');
} else {
  console.log('4. targetListener not matched');
}

fs.writeFileSync(appPath, app, 'utf8');
console.log('SUCCESS: Written updated app.js!');

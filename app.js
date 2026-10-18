/**
 * MGIT CSE Semester III - PYQ Practice & Analytics Platform Logic
 * Handles interactive filtering, search, local storage bookmarks/solved states,
 * dynamic mock paper generation, and visual trend charts.
 */

// State Management
const state = {
  activeTab: 'explorer',
  activeSubject: 'ALL',
  activeUnit: 'ALL',
  activeYear: 'ALL',
  activeExamType: 'ALL',
  activePart: 'ALL',
  searchQuery: '',
  sortBy: 'frequency',
  bookmarkedIds: new Set(JSON.parse(localStorage.getItem('mgit_pyq_bookmarks') || '[]')),
  solvedIds: new Set(JSON.parse(localStorage.getItem('mgit_pyq_solved') || '[]')),
  allExpanded: false
};

// DOM Elements
const elements = {
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  mainNavTabs: document.getElementById('mainNavTabs'),
  subjectChipsContainer: document.getElementById('subjectChipsContainer'),
  searchInput: document.getElementById('searchInput'),
  filterSubject: document.getElementById('filterSubject'),
  filterUnit: document.getElementById('filterUnit'),
  filterYear: document.getElementById('filterYear'),
  filterExamType: document.getElementById('filterExamType'),
  filterPart: document.getElementById('filterPart'),
  sortBy: document.getElementById('sortBy'),
  resultsCount: document.getElementById('resultsCount'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  expandAllSolutionsBtn: document.getElementById('expandAllSolutionsBtn'),
  questionsList: document.getElementById('questionsList'),
  notesListContainer: document.getElementById('notesListContainer'),
  analyticsGrid: document.getElementById('analyticsGrid'),
  highYieldContainer: document.getElementById('highYieldContainer'),
  savedQuestionsContainer: document.getElementById('savedQuestionsContainer'),
  syllabusContainer: document.getElementById('syllabusContainer'),
  savedCount: document.getElementById('savedCount'),
  statTotalQues: document.getElementById('statTotalQues'),
  statSolvedProgress: document.getElementById('statSolvedProgress'),
  mockSubjectSelect: document.getElementById('mockSubjectSelect'),
  generatePaperBtn: document.getElementById('generatePaperBtn'),
  printPaperBtn: document.getElementById('printPaperBtn'),
  mockPaperDisplay: document.getElementById('mockPaperDisplay')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  updateStats();
  renderExplorer();
  renderNotes();
  renderAnalytics();
  renderHighYield();
  renderSyllabus();
  generateMockPaper('COA');
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('mgit_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const icon = elements.themeToggleBtn.querySelector('i');
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mgit_theme', next);
  updateThemeIcon(next);
}

// Event Listeners
function initEventListeners() {
  // Theme Toggle
  elements.themeToggleBtn.addEventListener('click', toggleTheme);

  // Tab Navigation
  elements.mainNavTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-tab-btn');
    if (!btn) return;
    const tabName = btn.dataset.tab;
    switchTab(tabName);
  });

  // Subject Chips
  elements.subjectChipsContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.subject-chip');
    if (!chip) return;
    const subject = chip.dataset.subject;
    
    // Update active state in chip row
    document.querySelectorAll('.subject-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    // Sync select dropdown and state
    state.activeSubject = subject;
    elements.filterSubject.value = subject;
    renderExplorer();
  });

  // Filter Dropdowns
  elements.filterSubject.addEventListener('change', (e) => {
    state.activeSubject = e.target.value;
    updateActiveSubjectChip(state.activeSubject);
    renderExplorer();
  });

  elements.filterUnit.addEventListener('change', (e) => {
    state.activeUnit = e.target.value;
    renderExplorer();
  });

  elements.filterYear.addEventListener('change', (e) => {
    state.activeYear = e.target.value;
    renderExplorer();
  });

  elements.filterExamType.addEventListener('change', (e) => {
    state.activeExamType = e.target.value;
    renderExplorer();
  });

  elements.filterPart.addEventListener('change', (e) => {
    state.activePart = e.target.value;
    renderExplorer();
  });

  elements.sortBy.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderExplorer();
  });

  // Search Input with Debounce
  let searchTimeout;
  elements.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderExplorer();
    }, 200);
  });

  // Keyboard shortcut '/' to search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== elements.searchInput) {
      e.preventDefault();
      elements.searchInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === elements.searchInput) {
      elements.searchInput.blur();
    }
  });

  // Reset Filters
  elements.resetFiltersBtn.addEventListener('click', resetFilters);

  // Expand / Collapse All Solutions
  elements.expandAllSolutionsBtn.addEventListener('click', toggleAllSolutions);

  // Mock Exam Controls
  elements.generatePaperBtn.addEventListener('click', () => {
    generateMockPaper(elements.mockSubjectSelect.value);
  });

  elements.printPaperBtn.addEventListener('click', () => {
    window.print();
  });
}

function updateActiveSubjectChip(subject) {
  document.querySelectorAll('.subject-chip').forEach(c => {
    if (c.dataset.subject === subject) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
}

function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.remove('active');
  });

  const activeView = document.getElementById(`view-${tabName}`);
  if (activeView) activeView.classList.add('active');

  if (tabName === 'saved') {
    renderSavedQuestions();
  } else if (tabName === 'analytics') {
    renderAnalytics();
  } else if (tabName === 'notes') {
    renderNotes();
  }
}

// Render Verified Chapter Notes from Drive
function renderNotes() {
  if (!elements.notesListContainer) return;

  const VERIFIED_NOTES = [
    {
      subject: "COA",
      subjectTitle: "Computer Organization & Architecture",
      unit: 1,
      title: "COA Unit 1: Basic Computer Structure & Machine Instructions",
      fileName: "Unit 1.pdf",
      fileSize: "3.1 MB",
      driveFileId: "1qQQpGKrjNC30plE7BIG-8gNmPg5U9dgn",
      folderId: "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
      description: "Comprehensive handwritten and typed lecture notes covering Machine Instructions, Instruction Formats, and Addressing Modes."
    },
    {
      subject: "COA",
      subjectTitle: "Computer Organization & Architecture",
      unit: 1,
      title: "COA Unit 1: Addressing Modes & Execution Architecture",
      fileName: "Unit 1 Actual.pdf",
      fileSize: "727 KB",
      driveFileId: "1Ccju2Q81WPLiycZF58lCyvh7qN4tlufQ",
      folderId: "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
      description: "Quick revision notes with effective address (EA) calculation formulas and memory diagram models."
    },
    {
      subject: "ES",
      subjectTitle: "Environmental Science",
      unit: 1,
      title: "ES Unit 1: Ecosystems, Food Chains & Ecological Pyramids",
      fileName: "Unit 1.pdf",
      fileSize: "1.8 MB",
      driveFileId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
      folderId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
      description: "Ecosystem structure, abiotic/biotic components, energy flow, food webs, and ecological succession."
    },
    {
      subject: "ES",
      subjectTitle: "Environmental Science",
      unit: 2,
      title: "ES Unit 2: Natural Resources, Conservation & Mineral Energy",
      fileName: "Unit 2.pdf",
      fileSize: "2.2 MB",
      driveFileId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
      folderId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
      description: "Water resources, dams, mineral resources, energy resources (renewable vs non-renewable) and sustainable practices."
    }
  ];

  elements.notesListContainer.innerHTML = VERIFIED_NOTES.map(note => {
    const sub = SUBJECTS_METADATA[note.subject] || {};
    return `
      <div class="analytics-card" style="border-left: 4px solid ${sub.color || '#3b82f6'};">
        <div class="analytics-card-title">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid ${sub.icon || 'fa-file-lines'}" style="color: ${sub.color};"></i>
            <span>${note.subjectTitle}</span>
          </div>
          <span class="badge badge-unit">Unit ${note.unit}</span>
        </div>

        <h4 style="font-size: 1.05rem; font-weight: 700; margin: 0.4rem 0 0.25rem;">
          ${note.title}
        </h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.5;">
          ${note.description}
        </p>

        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.65rem; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div><i class="fa-regular fa-file-pdf" style="color: #ef4444;"></i> ${note.fileName} (${note.fileSize})</div>
          <div style="display: flex; gap: 0.4rem;">
            <a href="https://drive.google.com/file/d/${note.driveFileId}/view" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration: none; padding: 0.35rem 0.65rem; font-size: 0.78rem;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in Drive
            </a>
            <a href="https://drive.google.com/drive/folders/${note.folderId}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="text-decoration: none; padding: 0.35rem 0.65rem; font-size: 0.78rem;">
              <i class="fa-brands fa-google-drive"></i> Subject Folder
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('') + `
    <div class="analytics-card" style="border: 2px dashed var(--border-color); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 1.25rem;">
      <i class="fa-solid fa-cloud-arrow-up" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 0.75rem;"></i>
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Contribute Missing Notes</h4>
      <p style="font-size: 0.82rem; color: var(--text-secondary); max-width: 320px; margin-bottom: 1rem;">
        Have lecture notes for DM, DBMS, Java, or SE? Share them with fellow MGIT CSE-III students!
      </p>
      <a href="https://wa.me/916303191696?text=Hi%20Amaan,%20I%20have%20notes%20to%20contribute%20for%20MGIT%20CSE-III" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="text-decoration: none; font-size: 0.82rem;">
        <i class="fa-brands fa-whatsapp" style="color: #16a34a;"></i> Send Notes via WhatsApp
      </a>
    </div>
  `;
}

function resetFilters() {
  state.activeSubject = 'ALL';
  state.activeUnit = 'ALL';
  state.activeYear = 'ALL';
  state.activeExamType = 'ALL';
  state.activePart = 'ALL';
  state.searchQuery = '';
  state.sortBy = 'frequency';

  elements.searchInput.value = '';
  elements.filterSubject.value = 'ALL';
  elements.filterUnit.value = 'ALL';
  elements.filterYear.value = 'ALL';
  elements.filterExamType.value = 'ALL';
  elements.filterPart.value = 'ALL';
  elements.sortBy.value = 'frequency';

  updateActiveSubjectChip('ALL');
  renderExplorer();
}

function toggleAllSolutions() {
  state.allExpanded = !state.allExpanded;
  const solutions = document.querySelectorAll('#questionsList .solution-content');
  solutions.forEach(s => {
    s.classList.toggle('open', state.allExpanded);
  });
  elements.expandAllSolutionsBtn.innerHTML = state.allExpanded 
    ? '<i class="fa-solid fa-angles-up"></i> Collapse Solutions'
    : '<i class="fa-solid fa-angles-down"></i> Expand Solutions';
}

// Filter and Sort Engine
function getFilteredQuestions() {
  return PYQ_DATABASE.filter(item => {
    // Subject filter
    if (state.activeSubject !== 'ALL' && item.subjectId !== state.activeSubject) {
      return false;
    }
    // Unit filter
    if (state.activeUnit !== 'ALL' && item.unit !== parseInt(state.activeUnit, 10)) {
      return false;
    }
    // Year filter
    if (state.activeYear !== 'ALL' && !item.years.includes(parseInt(state.activeYear, 10))) {
      return false;
    }
    // Exam Type filter
    if (state.activeExamType !== 'ALL' && item.examType !== state.activeExamType) {
      return false;
    }
    // Part / Marks filter
    if (state.activePart !== 'ALL' && item.part !== state.activePart) {
      return false;
    }
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchText = (item.question || '').toLowerCase();
      const matchTags = (item.tags || []).join(' ').toLowerCase();
      const matchHint = (item.solutionHint || '').toLowerCase();
      const subInfo = (SUBJECTS_METADATA[item.subjectId]?.title || '').toLowerCase();
      if (!matchText.includes(q) && !matchTags.includes(q) && !matchHint.includes(q) && !subInfo.includes(q)) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'frequency') {
      return b.frequency - a.frequency;
    }
    if (state.sortBy === 'year-desc') {
      return Math.max(...b.years) - Math.max(...a.years);
    }
    if (state.sortBy === 'unit') {
      return a.unit - b.unit;
    }
    if (state.sortBy === 'marks') {
      return b.marks - a.marks;
    }
    return 0;
  });
}

// Render Explorer View
function renderExplorer() {
  const filtered = getFilteredQuestions();
  elements.resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PYQ_DATABASE.length} questions`;

  if (filtered.length === 0) {
    elements.questionsList.innerHTML = `
      <div class="search-filter-card" style="text-align: center; padding: 3rem 1.5rem;">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No matching PYQs found</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 450px; margin: 0 auto 1.25rem;">
          Try adjusting your search terms, changing the unit, or clicking 'Reset Filters' to see all questions.
        </p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  elements.questionsList.innerHTML = filtered.map(q => createQuestionCardHTML(q)).join('');
}

// Question Card HTML Generator
function createQuestionCardHTML(q) {
  const sub = SUBJECTS_METADATA[q.subjectId] || {};
  const isBookmarked = state.bookmarkedIds.has(q.id);
  const isSolved = state.solvedIds.has(q.id);
  const yearsText = q.years.join(', ');

  return `
    <article class="question-card" style="--card-accent: ${sub.color || '#3b82f6'};" id="card-${q.id}">
      <div class="card-header-top">
        <div class="badge-cluster">
          <span class="badge badge-subject" style="border-color: ${sub.color}; color: ${sub.color};">
            <i class="fa-solid ${sub.icon || 'fa-book'}"></i> ${sub.id} - ${sub.title}
          </span>
          <span class="badge badge-unit">
            Unit ${q.unit}
          </span>
          <span class="badge badge-marks">
            Part ${q.part} • ${q.marks} Marks
          </span>
          ${q.frequency >= 4 ? `<span class="badge badge-high-yield"><i class="fa-solid fa-fire"></i> Repeated ${q.frequency}x (${q.repeatProbability})</span>` : ''}
        </div>

        <div class="card-actions-top">
          <button class="action-btn-sm ${isSolved ? 'solved' : ''}" onclick="toggleSolved('${q.id}')" title="${isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}">
            <i class="fa-${isSolved ? 'solid' : 'regular'} fa-circle-check"></i>
          </button>
          <button class="action-btn-sm ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${q.id}')" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}">
            <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
        </div>
      </div>

      <div class="question-text">${formatMarkdownText(q.question)}</div>

      <div class="question-meta-row">
        <div class="meta-item">
          <i class="fa-regular fa-calendar-check"></i>
          <span>Appeared in: <strong>${yearsText}</strong> (${q.examType})</span>
        </div>
        <div class="tags-list">
          ${(q.tags || []).map(t => `<span class="tag-pill">#${t}</span>`).join('')}
        </div>
      </div>

      <div class="solution-drawer">
        <button class="solution-toggle-btn" onclick="toggleSolution('${q.id}')">
          <span><i class="fa-solid fa-lightbulb"></i> View Model Answer & Exam Solution Guide</span>
          <i class="fa-solid fa-chevron-down" id="chevron-${q.id}"></i>
        </button>
        <div class="solution-content ${state.allExpanded ? 'open' : ''}" id="solution-${q.id}">
          ${formatMarkdownContent(q.solutionHint)}
          ${q.examTip ? `
            <div class="exam-tip-box">
              <i class="fa-solid fa-bullhorn" style="margin-top: 2px;"></i>
              <div><strong>MGIT Examiner Tip:</strong> ${q.examTip}</div>
            </div>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

// Markdown Formatter Helper
function formatMarkdownText(text) {
  if (!text) return '';
  return text
    .replace(/\\n/g, '<br>')
    .replace(/\n/g, '<br>');
}

function formatMarkdownContent(content) {
  if (!content) return '';
  let formatted = content
    .replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre style="background: rgba(0,0,0,0.5); padding: 0.75rem; border-radius: 6px; overflow-x: auto; margin: 0.5rem 0; font-family: monospace;"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 0.15rem 0.35rem; border-radius: 4px; font-family: monospace;">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\\n/g, '<br>')
    .replace(/\n/g, '<br>');
  return formatted;
}

// Interactive Solution Drawer Toggle
function toggleSolution(id) {
  const sol = document.getElementById(`solution-${id}`);
  const chev = document.getElementById(`chevron-${id}`);
  if (!sol) return;
  const isOpen = sol.classList.toggle('open');
  if (chev) {
    chev.className = isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  }
}

// Bookmark & Solved Logic
function toggleBookmark(id) {
  if (state.bookmarkedIds.has(id)) {
    state.bookmarkedIds.delete(id);
  } else {
    state.bookmarkedIds.add(id);
  }
  localStorage.setItem('mgit_pyq_bookmarks', JSON.stringify([...state.bookmarkedIds]));
  updateStats();
  renderExplorer();
  if (state.activeTab === 'saved') renderSavedQuestions();
}

function toggleSolved(id) {
  if (state.solvedIds.has(id)) {
    state.solvedIds.delete(id);
  } else {
    state.solvedIds.add(id);
  }
  localStorage.setItem('mgit_pyq_solved', JSON.stringify([...state.solvedIds]));
  updateStats();
  renderExplorer();
  if (state.activeTab === 'saved') renderSavedQuestions();
}

function updateStats() {
  const total = PYQ_DATABASE.length;
  const solved = state.solvedIds.size;
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

  if (elements.statTotalQues) elements.statTotalQues.textContent = total;
  if (elements.statSolvedProgress) elements.statSolvedProgress.textContent = `${pct}%`;
  if (elements.savedCount) elements.savedCount.textContent = state.bookmarkedIds.size;
}

// Saved Bookmarks View
function renderSavedQuestions() {
  const savedList = PYQ_DATABASE.filter(q => state.bookmarkedIds.has(q.id));
  if (savedList.length === 0) {
    elements.savedQuestionsContainer.innerHTML = `
      <div class="search-filter-card" style="text-align: center; padding: 3rem 1.5rem;">
        <i class="fa-regular fa-bookmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No Bookmarks Saved Yet</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 450px; margin: 0 auto;">
          Click the bookmark icon on any question in the Explorer to save it here for targeted revision before exams.
        </p>
      </div>
    `;
    return;
  }
  elements.savedQuestionsContainer.innerHTML = savedList.map(q => createQuestionCardHTML(q)).join('');
}

// High Yield View
function renderHighYield() {
  elements.highYieldContainer.innerHTML = HIGH_YIELD_TOPICS.map((item, index) => {
    const sub = SUBJECTS_METADATA[item.subjectId] || {};
    return `
      <div class="question-card" style="--card-accent: #ef4444;">
        <div class="card-header-top">
          <div class="badge-cluster">
            <span class="badge badge-high-yield">
              <i class="fa-solid fa-fire"></i> Priority #${index + 1}
            </span>
            <span class="badge badge-subject" style="color: ${sub.color};">
              ${item.subject}
            </span>
            <span class="badge badge-unit">
              Unit ${item.unit}
            </span>
            <span class="badge badge-marks">
              Expected: ${item.scoreWeight}
            </span>
          </div>
          <span style="font-size: 0.8rem; font-weight: 700; color: #fca5a5;">
            Recurrence: ${item.recurrence}
          </span>
        </div>
        <h4 style="font-size: 1.05rem; font-weight: 700; margin: 0.5rem 0;">
          ${item.topic}
        </h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">
          Direct match with past university exam series. Guaranteed long answer (Part B) or comprehensive 10-mark problem.
        </p>
      </div>
    `;
  }).join('');
}

// Analytics Dashboard
function renderAnalytics() {
  const subjects = Object.values(SUBJECTS_METADATA);

  elements.analyticsGrid.innerHTML = subjects.map(sub => {
    const subQuestions = PYQ_DATABASE.filter(q => q.subjectId === sub.id);
    const unitCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    subQuestions.forEach(q => {
      if (unitCounts[q.unit] !== undefined) unitCounts[q.unit]++;
    });

    const maxCount = Math.max(...Object.values(unitCounts), 1);

    return `
      <div class="analytics-card">
        <div class="analytics-card-title">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid ${sub.icon}" style="color: ${sub.color};"></i>
            <span>${sub.title}</span>
          </div>
          <span class="badge badge-subject" style="color: ${sub.color};">${sub.code}</span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
          Total PYQs Analyzed: <strong>${subQuestions.length}</strong> • Regulation: ${sub.regulation}
        </p>

        <div class="freq-bar-group">
          ${[1, 2, 3, 4, 5].map(unitNum => {
            const count = unitCounts[unitNum] || 0;
            const pct = Math.round((count / maxCount) * 100);
            return `
              <div class="freq-bar-item">
                <div class="freq-bar-labels">
                  <span>Unit ${unitNum}: ${sub.units[unitNum].substring(0, 32)}...</span>
                  <strong>${count} Qs (${pct}%)</strong>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${pct}%; background: ${sub.color};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Syllabus & Blueprint
function renderSyllabus() {
  const subjects = Object.values(SUBJECTS_METADATA);
  elements.syllabusContainer.innerHTML = subjects.map(sub => `
    <div class="analytics-card">
      <div class="analytics-card-title">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid ${sub.icon}" style="color: ${sub.color};"></i>
          <span>${sub.title} (${sub.code})</span>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem;">
        ${[1, 2, 3, 4, 5].map(u => `
          <div style="padding: 0.6rem 0.75rem; background: rgba(255,255,255,0.03); border-radius: 6px; border-left: 3px solid ${sub.color};">
            <strong style="font-size: 0.85rem; color: var(--text-primary);">Unit ${u}</strong>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">${sub.units[u]}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Autonomous MGIT Mock Paper Generator
function generateMockPaper(subjectId) {
  const sub = SUBJECTS_METADATA[subjectId] || SUBJECTS_METADATA['DS'];
  const subQuestions = PYQ_DATABASE.filter(q => q.subjectId === subjectId);

  // Group by units
  const questionsByUnit = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  subQuestions.forEach(q => {
    if (questionsByUnit[q.unit]) questionsByUnit[q.unit].push(q);
  });

  // Pick Part A (5 short / conceptual questions)
  const partA = [1, 2, 3, 4, 5].map(u => {
    const list = questionsByUnit[u];
    return list.length > 0 ? list[0] : null;
  }).filter(Boolean);

  // Pick Part B (5 questions with internal choice from units 1 to 5)
  const partB = [1, 2, 3, 4, 5].map(u => {
    const list = questionsByUnit[u];
    const q1 = list.length > 0 ? list[0] : null;
    const q2 = list.length > 1 ? list[1] : (list.length > 0 ? list[0] : null);
    return { unit: u, q1, q2 };
  });

  const now = new Date();
  const examDateStr = now.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

  elements.mockPaperDisplay.innerHTML = `
    <div class="paper-institute-header">
      <h2>MAHATMA GANDHI INSTITUTE OF TECHNOLOGY (AUTONOMOUS)</h2>
      <h3>B.Tech. II Year I Semester (CSE) End Examinations</h3>
      <h4>Subject: ${sub.title} (${sub.code})</h4>
      <table class="paper-meta-table">
        <tr>
          <td style="text-align: left;"><strong>Time: 3 Hours</strong></td>
          <td style="text-align: center;"><strong>Regulation: ${sub.regulation}</strong></td>
          <td style="text-align: right;"><strong>Max. Marks: 70</strong></td>
        </tr>
      </table>
    </div>

    <div class="paper-instructions">
      Note: This question paper contains two parts A and B.<br>
      Part A is compulsory which carries 20 marks. Answer all questions in Part A.<br>
      Part B consists of 5 Units. Answer any one full question from each unit. Each question carries 10 marks.
    </div>

    <div class="paper-section-title">PART - A (20 Marks)</div>
    <div style="margin-bottom: 1.5rem;">
      ${partA.map((q, idx) => `
        <div class="paper-question-item">
          <div><strong>${idx + 1}.</strong> (Unit ${q.unit}) ${q.question.substring(0, 120)}...</div>
          <div style="font-weight: 700; white-space: nowrap;">[4M]</div>
        </div>
      `).join('')}
    </div>

    <div class="paper-section-title">PART - B (50 Marks)</div>
    <div class="paper-instructions">Answer one question from each unit (5 × 10 = 50 Marks)</div>

    ${partB.map((item, idx) => {
      const qNum1 = idx * 2 + 1;
      const qNum2 = idx * 2 + 2;
      return `
        <div style="margin-bottom: 1.25rem;">
          <div style="font-weight: 700; text-decoration: underline; margin-bottom: 0.35rem;">UNIT - ${item.unit}</div>
          <div class="paper-question-item">
            <div><strong>${qNum1}.</strong> ${item.q1 ? item.q1.question : 'Explain fundamental concepts of Unit ' + item.unit + '.'}</div>
            <div style="font-weight: 700;">[10M]</div>
          </div>
          <div style="text-align: center; font-weight: bold; margin: 0.35rem 0;">-- OR --</div>
          <div class="paper-question-item">
            <div><strong>${qNum2}.</strong> ${item.q2 ? item.q2.question : 'Discuss design and applications in Unit ' + item.unit + '.'}</div>
            <div style="font-weight: 700;">[10M]</div>
          </div>
        </div>
      `;
    }).join('')}
  `;
}

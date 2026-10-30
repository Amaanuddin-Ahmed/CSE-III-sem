/**
 * MGIT PYQ Hub - Client Application Logic
 * Adheres strictly to Master Specification & User Requirements:
 * - 7 Subjects (DM, COA, OOPJ, DBMS, SE, ES, IE)
 * - 2-Column Responsive Grid with Large Icons
 * - Dynamic Top Drive Link based on selected Subject
 * - Two Division Boxes: Notes (Chapter Dropdown) & PYQs (Year Checkbox Filter & Part A/B)
 * - Question Detail Modal with Repetition, Drive Paper Reference & Tip
 * - Contribution warning + WhatsApp hand-off dialog
 * - AI Study Assistant (server-side only)
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // Application State
  // -------------------------------------------------------------
  const state = {
    currentSubject: null,
    currentMode: null, // 'notes' or 'pyqs'
    notesChapterFilter: 'all',
    selectedYears: null,
    selectedSemesters: null,
    selectedPart: 'all', // 'all', 'A', 'B'
    repeatedOnly: false,
    pyqSearchQuery: '',
    expandedChapters: { 1: false, 2: false, 3: false, 4: false, 5: false },
    activeExam: (function() {
      try {
        const saved = localStorage.getItem('mgit_active_exam');
        return ['mid1', 'mid2', 'sem'].includes(saved) ? saved : 'mid2';
      } catch (e) {
        return 'mid2';
      }
    })(),
    currentView: 'home',
    appHistoryIndex: 0,
    maxAppHistoryIndex: 0,
    selectedFiles: [],
    homeScrollY: 0,
    scrollMemory: {},

    // Onboarding Walkthrough Tour State
    currentTourStep: 0,
    tourActive: false,
    tourTimers: [],

    // AI Chat & Sessions State
    activeChatId: null,
    geminiChats: JSON.parse(localStorage.getItem('mgit_gemini_chats') || '[]'),
    pendingGeminiImage: null,
    aiBusy: false,
    isSpeechListening: false,
    speechRecognition: null
  };

  const DRIVE_ROOT_URL = "https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing";

  // -------------------------------------------------------------
  // DOM Elements
  // -------------------------------------------------------------
  const el = {
    brandHomeLink: document.getElementById('brandHomeLink'),
    topDriveBtn: document.getElementById('topDriveBtn'),
    topDriveBtnText: document.getElementById('topDriveBtnText'),
    appBreadcrumb: document.getElementById('appBreadcrumb'),

    subjectsSection: document.getElementById('subjectsSection'),
    subjectsGrid: document.getElementById('subjectsGrid'),
    mobileHeaderHistory: document.getElementById('mobileHeaderHistory'),
    attributionDivision: document.getElementById('attributionDivision'),

    // Exam Selector & Scoping Elements
    examSelectorSection: document.getElementById('examSelectorSection'),
    examCardsGrid: document.getElementById('examCardsGrid'),
    examActiveBanner: document.getElementById('examActiveBanner'),
    bannerExamTag: document.getElementById('bannerExamTag'),
    bannerExamSubtitle: document.getElementById('bannerExamSubtitle'),
    bannerChangeExamBtn: document.getElementById('bannerChangeExamBtn'),
    continueExamChipWrap: document.getElementById('continueExamChipWrap'),
    continueExamChip: document.getElementById('continueExamChip'),
    continueChipText: document.getElementById('continueChipText'),
    practiceFunDivision: document.getElementById('practiceFunDivision'),
    practiceFunCard: document.getElementById('practiceFunCard'),
    practiceSelectorModal: document.getElementById('practiceSelectorModal'),
    closePracticeModalBtn: document.getElementById('closePracticeModalBtn'),

    subjectDetailSection: document.getElementById('subjectDetailSection'),
    backToSubjectsBtn: document.getElementById('backToSubjectsBtn'),
    detailSubjectTitle: document.getElementById('detailSubjectTitle'),

    // Two-step Mode Selection Elements
    modeSelectorWrapper: document.getElementById('modeSelectorWrapper'),
    chooseNotesCard: document.getElementById('chooseNotesCard'),
    choosePyqsCard: document.getElementById('choosePyqsCard'),
    modeNotesCountText: document.getElementById('modeNotesCountText'),
    modePyqsCountText: document.getElementById('modePyqsCountText'),
    modeSwitcherBar: document.getElementById('modeSwitcherBar'),
    switchModeToSelectorBtn: document.getElementById('switchModeToSelectorBtn'),
    tabSwitchToNotes: document.getElementById('tabSwitchToNotes'),
    tabSwitchToPyqs: document.getElementById('tabSwitchToPyqs'),

    // Division Containers
    notesDivisionBox: document.getElementById('notesDivisionBox'),
    pyqsDivisionBox: document.getElementById('pyqsDivisionBox'),

    notesChapterSelect: document.getElementById('notesChapterSelect'),
    notesListContainer: document.getElementById('notesListContainer'),

    // In-site Notes Reader
    notesReaderModal: document.getElementById('notesReaderModal'),
    notesReaderBadge: document.getElementById('notesReaderBadge'),
    notesReaderTitle: document.getElementById('notesReaderTitle'),
    notesReaderMeta: document.getElementById('notesReaderMeta'),
    notesReaderDriveLink: document.getElementById('notesReaderDriveLink'),
    notesReaderSearch: document.getElementById('notesReaderSearch'),
    notesReaderSearchCount: document.getElementById('notesReaderSearchCount'),
    notesReaderWarning: document.getElementById('notesReaderWarning'),
    notesReaderBody: document.getElementById('notesReaderBody'),
    notesReaderFooterMeta: document.getElementById('notesReaderFooterMeta'),
    notesReaderTopBtn: document.getElementById('notesReaderTopBtn'),
    closeNotesReaderBtn: document.getElementById('closeNotesReaderBtn'),

    toggleAllChaptersBtn: document.getElementById('toggleAllChaptersBtn'),
    toggleAllChaptersText: document.getElementById('toggleAllChaptersText'),
    viewSubjectDrivePapersBtn: document.getElementById('viewSubjectDrivePapersBtn'),
    pyqSearchInput: document.getElementById('pyqSearchInput'),
    clearPyqSearchBtn: document.getElementById('clearPyqSearchBtn'),
    pyqFilterToggle: document.getElementById('pyqFilterToggle'),
    pyqFilterPanel: document.getElementById('pyqFilterPanel'),
    yearFilterOptions: document.getElementById('yearFilterOptions'),
    semesterFilterOptions: document.getElementById('semesterFilterOptions'),
    activeFilterCount: document.getElementById('activeFilterCount'),
    repeatedOnlyFilter: document.getElementById('repeatedOnlyFilter'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    applyFiltersBtn: document.getElementById('applyFiltersBtn'),
    pyqCountBanner: document.getElementById('pyqCountBanner'),
    chapterAccordionsContainer: document.getElementById('chapterAccordionsContainer'),

    // Question Modal
    questionModal: document.getElementById('questionModal'),
    closeQuestionModalBtn: document.getElementById('closeQuestionModalBtn'),
    modalSubjectBadge: document.getElementById('modalSubjectBadge'),
    modalPartBadge: document.getElementById('modalPartBadge'),
    modalUnitBadge: document.getElementById('modalUnitBadge'),
    modalSemesterBadge: document.getElementById('modalSemesterBadge'),
    modalQuestionTitle: document.getElementById('modalQuestionTitle'),
    modalYearsAppeared: document.getElementById('modalYearsAppeared'),
    modalRecurrence: document.getElementById('modalRecurrence'),
    modalPaperName: document.getElementById('modalPaperName'),
    modalPaperInlineLink: document.getElementById('modalPaperInlineLink'),
    modalOutcome: document.getElementById('modalOutcome'),
    modalTipText: document.getElementById('modalTipText'),
    modalOpenDrivePaperBtn: document.getElementById('modalOpenDrivePaperBtn'),
    modalSolveAiBtn: document.getElementById('modalSolveAiBtn'),

    // Contribute Warning Modal
    contribWarningModal: document.getElementById('contribWarningModal'),
    closeWarningModalBtn: document.getElementById('closeWarningModalBtn'),
    cancelContribBtn: document.getElementById('cancelContribBtn'),
    agreeContribBtn: document.getElementById('agreeContribBtn'),

    // Contribute Upload Modal
    contribUploadModal: document.getElementById('contribUploadModal'),
    closeUploadModalBtn: document.getElementById('closeUploadModalBtn'),
    cancelUploadBtn: document.getElementById('cancelUploadBtn'),
    contribUploadForm: document.getElementById('contribUploadForm'),
    uploadSubjectSelect: document.getElementById('uploadSubjectSelect'),
    uploadResourceType: document.getElementById('uploadResourceType'),
    uploadChapterSelect: document.getElementById('uploadChapterSelect'),
    uploadExamYear: document.getElementById('uploadExamYear'),
    uploadContributorName: document.getElementById('uploadContributorName'),
    filePickerBox: document.getElementById('filePickerBox'),
    contribFilesInput: document.getElementById('contribFilesInput'),
    selectedFilesList: document.getElementById('selectedFilesList'),
    contribHandoffPanel: document.getElementById('contribHandoffPanel'),
    contribHandoffNote: document.getElementById('contribHandoffNote'),
    copyContribMessageBtn: document.getElementById('copyContribMessageBtn'),
    contribDoneBtn: document.getElementById('contribDoneBtn'),

    // AI Assistant Modal Elements
    floatingGeminiBtn: document.getElementById('floatingGeminiBtn'),
    geminiModal: document.getElementById('geminiModal'),
    closeGeminiModalBtn: document.getElementById('closeGeminiModalBtn'),
    geminiSidebar: document.getElementById('geminiSidebar'),
    closeGeminiSidebarBtn: document.getElementById('closeGeminiSidebarBtn'),
    toggleGeminiSidebarBtn: document.getElementById('toggleGeminiSidebarBtn'),
    newChatBtn: document.getElementById('newChatBtn'),
    clearAllHistoryBtn: document.getElementById('clearAllHistoryBtn'),
    geminiHistoryList: document.getElementById('geminiHistoryList'),
    geminiCurrentChatTitle: document.getElementById('geminiCurrentChatTitle'),
    geminiWelcomeScreen: document.getElementById('geminiWelcomeScreen'),
    toggleSuggestionsBtn: document.getElementById('toggleSuggestionsBtn'),
    geminiSuggestionsScrollBox: document.getElementById('geminiSuggestionsScrollBox'),
    suggestionsChevron: document.getElementById('suggestionsChevron'),
    geminiChatOutput: document.getElementById('geminiChatOutput'),
    geminiQueryForm: document.getElementById('geminiQueryForm'),
    geminiQueryInput: document.getElementById('geminiQueryInput'),
    animatedPlaceholderTrack: document.getElementById('animatedPlaceholderTrack'),
    animatedPlaceholderText: document.getElementById('animatedPlaceholderText'),
    geminiSendBtn: document.getElementById('geminiSendBtn'),
    geminiCameraBtn: document.getElementById('geminiCameraBtn'),
    geminiCameraInput: document.getElementById('geminiCameraInput'),
    geminiMicBtn: document.getElementById('geminiMicBtn'),
    geminiImagePreviewStrip: document.getElementById('geminiImagePreviewStrip'),
    geminiPreviewImg: document.getElementById('geminiPreviewImg'),
    removeGeminiImgBtn: document.getElementById('removeGeminiImgBtn'),
    geminiModeIndicator: document.getElementById('geminiModeIndicator'),
    geminiLivePill: document.getElementById('geminiLivePill'),
    geminiModelLabel: document.getElementById('geminiModelLabel'),

    // Walkthrough Tour Elements
    tourOverlay: document.getElementById('tourOverlay'),
    tourSpotlight: document.getElementById('tourSpotlight'),
    tourTooltip: document.getElementById('tourTooltip'),
    tourStepBadge: document.getElementById('tourStepBadge'),
    tourTitle: document.getElementById('tourTitle'),
    tourDesc: document.getElementById('tourDesc'),
    tourPrevBtn: document.getElementById('tourPrevBtn'),
    tourNextBtn: document.getElementById('tourNextBtn'),
    tourSkipBtn: document.getElementById('tourSkipBtn'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  // Temp holder for contribute context
  let pendingContribContext = {
    subjectId: 'DM',
    resourceType: 'PYQ'
  };
  let lastContributionMessage = '';

  // -------------------------------------------------------------
  // Initialization
  // -------------------------------------------------------------
  function init() {
    localStorage.removeItem('mgit_user_gemini_key');
    initExamSelector();
    renderSubjectsGrid();
    setupEventListeners();
    loadGeminiChats();
    setupImageAndCameraAttachment();
    setupSpeechRecognition();
    initAnimatedPlaceholder();
    initRatingPopup();
    setupRevisionHintObserver();
  }

  // -------------------------------------------------------------
  // Render Subjects in 2-Column Grid
  // -------------------------------------------------------------
  function renderSubjectsGrid() {
    if (!el.subjectsGrid) return;
    el.subjectsGrid.innerHTML = '';

    const examKey = state.activeExam || 'mid2';
    const examConfig = getExamConfig(examKey);

    const subjectKeys = Object.keys(SUBJECTS_DATA);
    subjectKeys.forEach(key => {
      const sub = SUBJECTS_DATA[key];
      const card = document.createElement('div');
      card.className = `subject-card subject-${sub.id.toLowerCase()}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${sub.shortName} - ${sub.title}`);
      card.setAttribute('data-subject', sub.id);
      card.style.setProperty('--sub-accent', sub.accentColor);
      card.style.setProperty('--sub-bg', sub.bgColor);

      // Notes are reference material, so every uploaded note is counted here
      // regardless of the active exam. PYQs stay exam-scoped in the subject view.
      const nTotal = NOTES_DATA.filter(n => n.subjectId === sub.id).length;

      card.innerHTML = `
        <div class="subject-card-header-bar">
          <span class="subject-exam-tag">${escapeHtml(examConfig.name)}</span>
        </div>
        <div class="subject-icon-box" style="background-color: ${sub.bgColor}; color: ${sub.accentColor};">
          <i class="${sub.icon}"></i>
        </div>
        <div class="subject-info">
          <div class="subject-short-name">${escapeHtml(sub.shortName)}</div>
          <div class="subject-full-title">${escapeHtml(sub.title)}</div>
          <div class="subject-meta-tags">
            <span class="subject-meta-item"><i class="fa-regular fa-file-lines"></i> ${nTotal} Notes</span>
            <span class="subject-meta-item"><i class="fa-brands fa-google-drive"></i> ${sub.paperCount} Papers</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => selectSubject(sub));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectSubject(sub);
        }
      });

      el.subjectsGrid.appendChild(card);
    });
  }

  // -------------------------------------------------------------
  // Subject Selection & Detail View
  // -------------------------------------------------------------
  function selectSubject(sub, options) {
    const opts = options || {};
    // Leaving the subject list pauses the revision hint instead of letting its
    // countdown continue behind the subject page.
    pauseRevisionHint();
    if (!opts.fromHistory && (!state.currentSubject || state.currentSubject.id !== sub.id)) {
      state.homeScrollY = window.scrollY || 0;
      pushAppState('subject', { exam: state.activeExam, subject: sub.id });
    }
    state.currentSubject = sub;
    state.currentView = 'subject';
    state.currentMode = null;
    state.notesChapterFilter = 'all';

    // Reset PYQ filters when moving to a different subject
    state.selectedYears = null;
    state.selectedSemesters = null;
    state.selectedPart = 'all';
    state.repeatedOnly = false;
    state.pyqSearchQuery = '';
    state.expandedChapters = { 1: false, 2: false, 3: false, 4: false, 5: false };
    state._yearOptionsSignature = null;
    state._semesterOptionsSignature = null;
    if (el.pyqSearchInput) el.pyqSearchInput.value = '';
    if (el.clearPyqSearchBtn) el.clearPyqSearchBtn.style.display = 'none';
    if (el.repeatedOnlyFilter) el.repeatedOnlyFilter.checked = false;
    const allPartInput = document.querySelector('input[name="partFilter"][value="all"]');
    if (allPartInput) allPartInput.checked = true;
    closeFilterPanel();
    updateActiveFilterCount();

    // Update Top Drive Button dynamically to this Subject's folder
    if (sub.driveUrl) {
      el.topDriveBtn.href = sub.driveUrl;
      el.topDriveBtn.title = `Open ${sub.shortName} Google Drive Folder`;
    } else {
      el.topDriveBtn.href = DRIVE_ROOT_URL;
    }
    updateTopDriveBtnLabel();

    // Update Header in Detail Section (Zero Course Codes!)
    el.detailSubjectTitle.textContent = `${sub.shortName} — ${sub.title}`;

    // Update counts on the Mode Choice Cards. Notes are reference material and
    // are always shown in full; only PYQs are scoped to the active exam.
    const examKey = state.activeExam || 'mid2';
    const allNotes = NOTES_DATA.filter(n => n.subjectId === sub.id);
    const scopedQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === sub.id && (!window.isItemInScope || window.isItemInScope(q, examKey)));
    if (el.modeNotesCountText) {
      el.modeNotesCountText.textContent = `${allNotes.length} Note${allNotes.length === 1 ? '' : 's'}`;
    }
    if (el.modePyqsCountText) {
      el.modePyqsCountText.textContent = `${scopedQuestions.length} PYQ${scopedQuestions.length === 1 ? '' : 's'}`;
    }

    // Show Mode Selector first — do not show notes or questions immediately
    showModeSelector();

    // Reset notes chapter dropdown
    if (el.notesChapterSelect) {
      el.notesChapterSelect.value = 'all';
    }

    // Toggle main sections
    if (el.examSelectorSection) el.examSelectorSection.style.display = 'none';
    el.subjectsSection.style.display = 'none';
    el.subjectDetailSection.style.display = 'block';
    if (el.practiceFunDivision) el.practiceFunDivision.style.display = 'none';
    updateFooterAttribution();

    updateBreadcrumb();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  function updateTopDriveBtnLabel() {
    if (!el.topDriveBtnText) return;
    const isMobile = window.innerWidth <= 640;
    if (state.currentSubject) {
      if (state.currentMode === 'notes') {
        el.topDriveBtnText.textContent = isMobile ? `${state.currentSubject.shortName} Notes` : `View ${state.currentSubject.shortName} Notes Folder`;
      } else if (state.currentMode === 'pyqs') {
        el.topDriveBtnText.textContent = isMobile ? `${state.currentSubject.shortName} PYQs` : `View ${state.currentSubject.shortName} PYQs Folder`;
      } else {
        el.topDriveBtnText.textContent = isMobile ? `${state.currentSubject.shortName} Drive` : `View ${state.currentSubject.shortName} Drive Folder`;
      }
    } else {
      el.topDriveBtnText.textContent = 'View entire folder';
    }
  }

  function showModeSelector() {
    state.currentMode = null;
    if (el.modeSelectorWrapper) el.modeSelectorWrapper.style.display = 'block';
    if (el.modeSwitcherBar) el.modeSwitcherBar.style.display = 'none';
    if (el.notesDivisionBox) el.notesDivisionBox.style.display = 'none';
    if (el.pyqsDivisionBox) el.pyqsDivisionBox.style.display = 'none';

    if (state.currentSubject && state.currentSubject.driveUrl) {
      el.topDriveBtn.href = state.currentSubject.driveUrl;
    }
    updateTopDriveBtnLabel();
    updateBreadcrumb();
  }

  function showNotesView() {
    state.currentMode = 'notes';
    if (el.modeSelectorWrapper) el.modeSelectorWrapper.style.display = 'none';
    if (el.modeSwitcherBar) el.modeSwitcherBar.style.display = 'flex';
    if (el.tabSwitchToNotes) el.tabSwitchToNotes.classList.add('active');
    if (el.tabSwitchToPyqs) el.tabSwitchToPyqs.classList.remove('active');
    if (el.notesDivisionBox) el.notesDivisionBox.style.display = 'block';
    if (el.pyqsDivisionBox) el.pyqsDivisionBox.style.display = 'none';

    if (state.currentSubject) {
      if (state.currentSubject.notesUrl) {
        el.topDriveBtn.href = state.currentSubject.notesUrl;
      }
      updateTopDriveBtnLabel();
      renderNotesDivision();
    }
    updateBreadcrumb();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  function showPyqsView() {
    state.currentMode = 'pyqs';
    state.expandedChapters = { 1: false, 2: false, 3: false, 4: false, 5: false };
    if (el.modeSelectorWrapper) el.modeSelectorWrapper.style.display = 'none';
    if (el.modeSwitcherBar) el.modeSwitcherBar.style.display = 'flex';
    if (el.tabSwitchToNotes) el.tabSwitchToNotes.classList.remove('active');
    if (el.tabSwitchToPyqs) el.tabSwitchToPyqs.classList.add('active');
    if (el.notesDivisionBox) el.notesDivisionBox.style.display = 'none';
    if (el.pyqsDivisionBox) el.pyqsDivisionBox.style.display = 'block';

    if (state.currentSubject) {
      if (state.currentSubject.pyqsUrl) {
        el.topDriveBtn.href = state.currentSubject.pyqsUrl;
      }
      updateTopDriveBtnLabel();
      renderPyqsDivision();
    }
    updateBreadcrumb();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }


  // -------------------------------------------------------------
  // Exam Selector & Syllabus Scoping Engine (Feature 2)
  // -------------------------------------------------------------

  // The app owns its own history. The address bar always stays clean ("/")
  // and the current view is stored in history.state.
  function appBasePath() {
    return window.location.pathname || '/';
  }

  function updateFooterAttribution() {
    if (!el.attributionDivision) return;
    el.attributionDivision.style.display = 'block';
    el.attributionDivision.classList.toggle('attribution-compact', state.currentView !== 'home');
  }

  function pushAppState(view, extra) {
    if (typeof history.pushState !== 'function') return;
    const nextIndex = (state.appHistoryIndex || 0) + 1;
    const nextState = Object.assign({ app: 'mgit-pyq-hub', view, appIndex: nextIndex }, extra || {});
    history.pushState(nextState, '', appBasePath());
    state.appHistoryIndex = nextIndex;
    state.maxAppHistoryIndex = Math.max(state.maxAppHistoryIndex || 0, nextIndex);
    syncHistoryUi();
  }

  function replaceAppState(view, extra) {
    if (typeof history.replaceState !== 'function') return;
    const nextState = Object.assign({
      app: 'mgit-pyq-hub',
      view,
      appIndex: state.appHistoryIndex || 0
    }, extra || {});
    history.replaceState(nextState, '', appBasePath());
  }

  function syncHistoryUi() {
    const atStart = (state.appHistoryIndex || 0) <= 0;
    const atEnd = (state.appHistoryIndex || 0) >= (state.maxAppHistoryIndex || 0);
    ['headerNavBackBtn', 'mobileNavBackBtn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.disabled = atStart;
    });
    ['headerNavForwardBtn', 'mobileNavForwardBtn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.disabled = atEnd;
    });
  }

  function getExamConfig(examId) {
    const map = (typeof window !== 'undefined' && window.EXAM_CONFIG) ? window.EXAM_CONFIG : null;
    if (map && map[examId]) return map[examId];
    const fallbackLabels = {
      mid1: { name: 'Mid-1', bannerSubtitle: "Only what’s in your Mid-1 syllabus", unitsLabel: 'Units 1–2 + Unit 3 (1st half)' },
      mid2: { name: 'Mid-2', bannerSubtitle: "Only what’s in your Mid-2 syllabus", unitsLabel: 'Unit 3 (2nd half) + Units 4–5' },
      sem: { name: 'Semester End', bannerSubtitle: "Complete semester-end syllabus", unitsLabel: 'All 5 Units' }
    };
    return Object.assign({ id: examId, bannerSubtitle: "Only what’s in your syllabus" }, fallbackLabels[examId] || fallbackLabels.mid2);
  }

  function updateBreadcrumb() {
    if (!el.appBreadcrumb) return;
    const items = [];
    items.push({ label: 'Home', action: () => showExamSelector() });

    if (state.currentView === 'home') {
      items.push({ label: 'Choose category' });
    } else {
      const cfg = getExamConfig(state.activeExam);
      items.push({ label: cfg.name, action: () => showExamSelector(), crumbClass: 'crumb-exam' });
      if (state.currentSubject) {
        items.push({
          label: state.currentSubject.shortName,
          action: state.currentMode ? () => showModeSelector() : null
        });
        if (state.currentMode === 'notes') items.push({ label: 'Notes' });
        if (state.currentMode === 'pyqs') items.push({ label: 'PYQs' });
      } else {
        items.push({ label: 'Subjects' });
      }
    }

    el.appBreadcrumb.innerHTML = '';
    el.appBreadcrumb.classList.toggle('has-current-crumb', items.some(item => !item.action));
    el.appBreadcrumb.classList.toggle('has-mode-crumb', !!state.currentMode);
    items.forEach((item, index) => {
      if (index > 0) {
        const sep = document.createElement('span');
        sep.className = 'crumb-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '›';
        el.appBreadcrumb.appendChild(sep);
      }
      if (item.action) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'crumb-link' + (item.crumbClass ? ' ' + item.crumbClass : '');
        btn.textContent = item.label;
        btn.addEventListener('click', item.action);
        el.appBreadcrumb.appendChild(btn);
      } else {
        const span = document.createElement('span');
        span.className = 'crumb-current';
        span.setAttribute('aria-current', 'page');
        span.textContent = item.label;
        el.appBreadcrumb.appendChild(span);
      }
    });
  }

  function rememberScroll(key) {
    if (!key) return;
    state.scrollMemory[key] = window.scrollY || 0;
  }

  function restoreScroll(key) {
    if (!key) return;
    const y = Number(state.scrollMemory[key]) || 0;
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: 'auto' });
    });
  }

  function applyExamSelection(examId, navigateToSubjects, options) {
    const opts = options || {};
    const cfg = getExamConfig(examId);

    // Update Active Banner (the header badge has been removed deliberately)
    if (el.examActiveBanner) {
      el.examActiveBanner.style.display = 'flex';
      if (el.bannerExamTag) el.bannerExamTag.textContent = cfg.name;
      if (el.bannerExamSubtitle) {
        el.bannerExamSubtitle.textContent = cfg.bannerSubtitle || cfg.subtitle || "Only what’s in your syllabus";
      }
    }

    // Update Continue Chip
    if (el.continueExamChipWrap && el.continueChipText) {
      el.continueChipText.textContent = 'Continue with ' + cfg.name;
      el.continueExamChipWrap.style.display = 'inline-block';
    }

    // Highlight selected card in hero section
    document.querySelectorAll('.exam-card').forEach(c => {
      if (c.getAttribute('data-exam-id') === examId) {
        c.classList.add('selected');
      } else {
        c.classList.remove('selected');
      }
    });

    // Show Practice Fun Card
    if (el.practiceFunDivision) {
      el.practiceFunDivision.style.display = 'block';
    }

    // Show subjects section
    if (el.subjectsSection) {
      el.subjectsSection.style.display = 'block';
    }

    // If instructed or coming from card click, hide the hero selector but
    // deliberately stay at the top of the page. The revision hint toast tells
    // students that Quiz Time is further down.
    if (navigateToSubjects) {
      if (el.examSelectorSection) el.examSelectorSection.style.display = 'none';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if (!opts.fromHistory) {
        if (!localStorage.getItem(TOUR_STORAGE_KEY)) {
          // First visit: the tour itself introduces Quiz Time, so skip the
          // "scroll down" toast and let the tour guide the screen.
          window.setTimeout(() => maybeStartTourAfterCategoryPick(), 900);
        } else {
          window.setTimeout(() => showRevisionHintToast(), 450);
        }
      }
    }

    // Re-render subjects grid to reflect new exam unit scope tags and counts
    renderSubjectsGrid();
    updateBreadcrumb();

    // If inside subject detail, re-render divisions
    if (state.currentSubject) {
      if (state.currentMode === 'notes') renderNotesDivision();
      if (state.currentMode === 'pyqs') renderPyqsDivision();
    }

    // Hiding the hero changes document height; scroll anchoring can otherwise
    // leave a small offset (seen at 360 px). Snap back after the re-render.
    if (navigateToSubjects) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }

  function setExam(examId, navigateToSubjects, options) {
    if (!['mid1', 'mid2', 'sem'].includes(examId)) examId = 'mid2';
    const opts = options || {};
    const changed = state.activeExam !== examId || state.currentView !== 'exam';

    state.activeExam = examId;
    state.currentView = 'exam';
    try { localStorage.setItem('mgit_active_exam', examId); } catch (e) {}

    if (!opts.fromHistory && navigateToSubjects && changed) {
      pushAppState('exam', { exam: examId });
    }

    applyExamSelection(examId, navigateToSubjects, opts);
    updateFooterAttribution();
    syncHistoryUi();
  }

  function showExamSelector(options) {
    const opts = options || {};
    state.currentSubject = null;
    state.currentMode = null;

    if (!opts.fromHistory && state.currentView !== 'home') {
      pushAppState('home');
    }
    state.currentView = 'home';
    pauseRevisionHint();

    if (el.examSelectorSection) {
      el.examSelectorSection.style.display = 'block';
      if (!opts.noScroll) el.examSelectorSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (el.examActiveBanner) {
      el.examActiveBanner.style.display = 'none';
    }
    if (el.practiceFunDivision) {
      el.practiceFunDivision.style.display = 'none';
    }
    if (el.subjectsSection) {
      el.subjectsSection.style.display = 'none';
    }
    if (el.subjectDetailSection) {
      el.subjectDetailSection.style.display = 'none';
    }
    if (el.welcomeSection) {
      el.welcomeSection.style.display = 'none';
    }
    // Reset top drive button to root folder
    if (el.topDriveBtn) {
      el.topDriveBtn.href = DRIVE_ROOT_URL;
      el.topDriveBtn.title = 'Open entire SEM 3 Google Drive folder';
      updateTopDriveBtnLabel();
    }
    updateFooterAttribution();
    updateBreadcrumb();
    syncHistoryUi();
  }

  function initExamSelector() {
    // Start on the clean three-card home screen. A refresh intentionally
    // returns here; "Continue with …" restores the last active exam.
    replaceAppState('home');
    showExamSelector({ fromHistory: true, noScroll: true });

    // Event listeners on exam cards
    document.querySelectorAll('.exam-card').forEach(card => {
      const examId = card.getAttribute('data-exam-id');
      card.addEventListener('click', () => {
        setExam(examId, true);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExam(examId, true);
        }
      });
    });

    // Continue Chip button
    if (el.continueExamChip) {
      el.continueExamChip.addEventListener('click', () => {
        setExam(state.activeExam, true);
      });
    }

    // Change Exam button in the active-exam banner (header badge removed)
    if (el.bannerChangeExamBtn) {
      el.bannerChangeExamBtn.addEventListener('click', () => showExamSelector());
    }

    // History API routing for browser back/forward buttons.
    window.addEventListener('popstate', (event) => {
      const navState = event.state;
      state.appHistoryIndex = (navState && Number(navState.appIndex)) || 0;

      if (!navState || navState.view === 'home') {
        showExamSelector({ fromHistory: true, noScroll: true });
      } else if (navState.view === 'exam') {
        setExam(navState.exam, true, { fromHistory: true });
        returnToSubjectsList({ fromHistory: true });
      } else if (navState.view === 'subject' && navState.subject && typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[navState.subject]) {
        setExam(navState.exam, true, { fromHistory: true });
        selectSubject(SUBJECTS_DATA[navState.subject], { fromHistory: true });
      }
      syncHistoryUi();
    });
  }

  function returnToSubjectsList(options) {
    const opts = options || {};
    if (!opts.fromHistory && state.currentSubject) {
      pushAppState('exam', { exam: state.activeExam });
    }
    state.currentSubject = null;
    state.currentView = 'exam';
    state.currentMode = null;
    state.expandedChapters = { 1: false, 2: false, 3: false, 4: false, 5: false };

    // Reset Top Drive Button to Entire Folder
    el.topDriveBtn.href = DRIVE_ROOT_URL;
    el.topDriveBtn.title = 'Open Entire SEM 3 Google Drive Folder';
    updateTopDriveBtnLabel();

    el.subjectDetailSection.style.display = 'none';
    el.subjectsSection.style.display = 'block';
    if (el.practiceFunDivision) el.practiceFunDivision.style.display = 'block';
    if (el.examActiveBanner) el.examActiveBanner.style.display = 'flex';
    resumeRevisionHint();
    updateFooterAttribution();

    updateBreadcrumb();
    requestAnimationFrame(() => {
      window.scrollTo({ top: state.homeScrollY || 0, left: 0, behavior: 'auto' });
    });
    syncHistoryUi();
  }

  // -------------------------------------------------------------
  // Division 1: Notes Rendering
  // -------------------------------------------------------------
  function renderNotesDivision() {
    if (!el.notesListContainer || !state.currentSubject) return;
    el.notesListContainer.innerHTML = '';

    const subId = state.currentSubject.id;

    // Notes are reference material: every uploaded unit is always listed, even
    // when the active exam only covers some units. This prevents notes for
    // Units 1-2 from disappearing while Mid-2 is selected.
    let notes = NOTES_DATA.filter(n => n.subjectId === subId);

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
      let opts = `<option value="all">All Units (All Notes)</option>`;
      unitList.forEach(ch => {
        opts += `<option value="${ch}">Unit ${ch}</option>`;
      });
      el.notesChapterSelect.innerHTML = opts;
      if (state.notesChapterFilter !== 'all' && !availableUnits.has(Number(state.notesChapterFilter))) {
        state.notesChapterFilter = 'all';
      }
      el.notesChapterSelect.value = state.notesChapterFilter;
    }

    if (state.notesChapterFilter !== 'all') {
      const chNum = parseInt(state.notesChapterFilter, 10);
      notes = notes.filter(n => {
        const units = window.getNoteUnits ? window.getNoteUnits(n) : [Number(n.chapter)];
        return units.includes(chNum);
      });
    }

    if (notes.length === 0) {
      const chLabel = state.notesChapterFilter === 'all' ? 'this subject' : `Unit ${state.notesChapterFilter}`;
      el.notesListContainer.innerHTML = `
        <div class="empty-notes-card">
          <i class="fa-regular fa-folder-open empty-icon"></i>
          <h5>No notes uploaded yet for ${escapeHtml(chLabel)}</h5>
          <p>Be the first to share verified lecture notes or question bank answers! Tap the contribute button below to upload study material.</p>
        </div>
      `;
      return;
    }

    notes.forEach(note => {
      const item = document.createElement('div');
      item.className = 'note-item-card';

      const fileLink = note.driveFileId
        ? `https://drive.google.com/file/d/${note.driveFileId}/view?usp=sharing`
        : (note.folderUrl || (state.currentSubject ? state.currentSubject.notesUrl : DRIVE_ROOT_URL));

      const units = window.getNoteUnits ? window.getNoteUnits(note) : [Number(note.chapter)];
      const contiguous = units.length > 1 && units.every((u, i) => u === units[0] + i);
      const unitLabel = units.length > 1
        ? (contiguous ? `Units ${units[0]}–${units[units.length - 1]}` : `Units ${units.join(', ')}`)
        : `Unit ${units[0] || note.chapter}`;

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
      const contentInfo = contentIndex[note.id];
      const qualityTag = contentInfo && contentInfo.quality === 'limited'
        ? `<span class="note-quality-tag" title="Handwritten/scanned pages may have incomplete OCR text"><i class="fa-solid fa-triangle-exclamation"></i> OCR limited</span>`
        : '';
      const readButton = contentInfo
        ? `<button type="button" class="note-read-btn" data-note-id="${escapeHtml(note.id)}">
             <i class="fa-solid fa-book-open"></i>
             <span>Read</span>
           </button>`
        : '';

      item.innerHTML = `
        <div class="note-info">
          <div class="note-title">${escapeHtml(note.title)}</div>
          <div class="note-desc">${escapeHtml(note.description || '')}</div>
          <div class="note-meta">
            <span><i class="${iconClass}" style="color: ${iconColor};"></i> ${escapeHtml(note.fileName)}</span> &bull; 
            <span>${escapeHtml(note.fileSize)}</span> &bull; 
            <span>${escapeHtml(unitLabel)}</span>
            ${qualityTag}
          </div>
        </div>
        <div class="note-actions">
          ${readButton}
          <a href="${fileLink}" target="_blank" rel="noopener noreferrer" class="note-open-btn">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Open Drive</span>
          </a>
        </div>
      `;

      el.notesListContainer.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // In-site Notes Reader (extracted text + OCR)
  // -------------------------------------------------------------
  const notesReaderState = {
    promise: null,
    currentId: null,
    searchTimer: null
  };

  function loadNotesContentScript() {
    if (window.NOTES_CONTENT) return Promise.resolve(window.NOTES_CONTENT);
    if (notesReaderState.promise) return notesReaderState.promise;

    notesReaderState.promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'notes-content.js';
      script.async = true;
      script.onload = () => {
        if (window.NOTES_CONTENT) {
          resolve(window.NOTES_CONTENT);
        } else {
          notesReaderState.promise = null;
          reject(new Error('Notes content did not initialise'));
        }
      };
      script.onerror = () => {
        notesReaderState.promise = null;
        reject(new Error('Could not load notes content'));
      };
      document.head.appendChild(script);
    });

    return notesReaderState.promise;
  }

  function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function openNotesReader(noteId) {
    const note = NOTES_DATA.find(n => n.id === noteId);
    if (!note || !el.notesReaderModal) return;

    const index = (window.NOTES_CONTENT_INDEX || {})[noteId] || null;
    const sub = SUBJECTS_DATA[note.subjectId] || {};
    const units = window.getNoteUnits ? window.getNoteUnits(note) : [Number(note.chapter)];
    const unitLabel = units.length > 1 ? `Units ${units.join(', ')}` : `Unit ${units[0] || note.chapter}`;
    const driveLink = note.driveFileId
      ? `https://drive.google.com/file/d/${note.driveFileId}/view?usp=sharing`
      : (note.folderUrl || DRIVE_ROOT_URL);

    el.notesReaderBadge.textContent = `${sub.shortName || note.subjectId} · ${unitLabel}`;
    el.notesReaderTitle.textContent = note.title;
    el.notesReaderMeta.textContent = `${note.fileName} · ${note.fileSize}${index ? ` · ${index.pages} page${index.pages === 1 ? '' : 's'}` : ''}`;
    el.notesReaderDriveLink.href = driveLink;
    el.notesReaderWarning.hidden = !index || index.quality !== 'limited';
    el.notesReaderSearch.value = '';
    el.notesReaderSearchCount.textContent = '';
    el.notesReaderFooterMeta.textContent = index
      ? `${index.pages} page${index.pages === 1 ? '' : 's'} · ${index.quality === 'limited' ? 'OCR text may be incomplete' : 'Extracted text'}`
      : '';
    el.notesReaderBody.innerHTML = `
      <div class="notes-reader-loading">
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        <span>Loading extracted notes...</span>
      </div>`;
    el.notesReaderBody.scrollTop = 0;
    el.notesReaderModal.style.display = 'flex';
    document.body.classList.add('notes-reader-open');
    document.documentElement.classList.add('notes-reader-open');
    notesReaderState.currentId = noteId;

    loadNotesContentScript()
      .then(content => {
        if (notesReaderState.currentId !== noteId) return;
        const entry = content && content[noteId];
        if (!entry || !Array.isArray(entry.pages) || entry.pages.length === 0) {
          el.notesReaderBody.innerHTML = `
            <div class="notes-reader-loading">
              <i class="fa-regular fa-file-lines"></i>
              <span>No extracted text is available for this note yet.</span>
              <a href="${driveLink}" target="_blank" rel="noopener noreferrer" class="notes-reader-drive">Open original</a>
            </div>`;
          return;
        }
        renderNotesReaderEntry(entry);
      })
      .catch(() => {
        if (notesReaderState.currentId !== noteId) return;
        el.notesReaderBody.innerHTML = `
          <div class="notes-reader-loading">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Could not load the extracted notes. Check your connection and try again.</span>
            <a href="${driveLink}" target="_blank" rel="noopener noreferrer" class="notes-reader-drive">Open original</a>
          </div>`;
      });
  }

  function renderNotesReaderEntry(entry) {
    const frag = document.createDocumentFragment();

    entry.pages.forEach(page => {
      const section = document.createElement('section');
      section.className = 'notes-page';
      section.dataset.page = page.p;

      const label = document.createElement('div');
      label.className = 'notes-page-label';
      label.innerHTML = `<span>Page ${page.p}</span>${page.ocr ? '<span class="notes-page-ocr">OCR</span>' : ''}`;
      section.appendChild(label);

      const text = (page.t || '').trim();
      if (text) {
        const pre = document.createElement('pre');
        pre.className = 'notes-page-text';
        pre.textContent = text;
        section.appendChild(pre);
      } else {
        const empty = document.createElement('p');
        empty.className = 'notes-page-empty';
        empty.textContent = 'No readable text was extracted from this page. Use "Open original" to view it.';
        section.appendChild(empty);
      }

      frag.appendChild(section);
    });

    el.notesReaderBody.innerHTML = '';
    el.notesReaderBody.appendChild(frag);
    el.notesReaderBody.scrollTop = 0;
    if (el.notesReaderSearch) el.notesReaderSearch.value = '';
    if (el.notesReaderSearchCount) el.notesReaderSearchCount.textContent = '';
  }

  function clearNotesHighlights() {
    if (!el.notesReaderBody) return;
    el.notesReaderBody.querySelectorAll('mark.notes-hit').forEach(mark => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function runNotesSearch(query) {
    if (!el.notesReaderBody) return 0;
    clearNotesHighlights();

    const term = query.trim();
    if (term.length < 2) {
      if (el.notesReaderSearchCount) el.notesReaderSearchCount.textContent = '';
      return 0;
    }

    const regex = new RegExp(escapeRegExp(term), 'gi');
    let total = 0;

    el.notesReaderBody.querySelectorAll('.notes-page-text').forEach(pre => {
      const walker = document.createTreeWalker(pre, NodeFilter.SHOW_TEXT, null);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);

      nodes.forEach(node => {
        const value = node.nodeValue || '';
        if (!value) return;

        regex.lastIndex = 0;
        let match;
        let lastIndex = 0;
        let frag = null;

        while ((match = regex.exec(value)) !== null) {
          if (!frag) frag = document.createDocumentFragment();
          if (match.index > lastIndex) {
            frag.appendChild(document.createTextNode(value.slice(lastIndex, match.index)));
          }
          const mark = document.createElement('mark');
          mark.className = 'notes-hit';
          mark.textContent = match[0];
          frag.appendChild(mark);
          lastIndex = match.index + match[0].length;
          total++;
          if (match[0].length === 0) regex.lastIndex++;
        }

        if (frag) {
          if (lastIndex < value.length) {
            frag.appendChild(document.createTextNode(value.slice(lastIndex)));
          }
          node.parentNode.replaceChild(frag, node);
        }
      });
    });

    if (el.notesReaderSearchCount) {
      el.notesReaderSearchCount.textContent = total === 0
        ? 'No matches'
        : `${total} match${total === 1 ? '' : 'es'}`;
    }

    const first = el.notesReaderBody.querySelector('mark.notes-hit');
    if (first) {
      first.classList.add('notes-hit-active');
      if (typeof first.scrollIntoView === 'function') {
        first.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }

    return total;
  }

  function closeNotesReader() {
    if (!el.notesReaderModal) return;
    notesReaderState.currentId = null;
    el.notesReaderModal.style.display = 'none';
    document.body.classList.remove('notes-reader-open');
    document.documentElement.classList.remove('notes-reader-open');
    if (el.notesReaderSearch) el.notesReaderSearch.value = '';
    if (el.notesReaderSearchCount) el.notesReaderSearchCount.textContent = '';
  }

  // -------------------------------------------------------------
  // Division 2: PYQs 5 Chapter Accordions Rendering & Filtering (CH 1 to CH 5)
  // -------------------------------------------------------------
  function getSubjectYears(questions) {
    const years = new Set();
    questions.forEach(q => {
      if (Array.isArray(q.years)) q.years.forEach(y => { if (Number.isFinite(y)) years.add(y); });
    });
    return Array.from(years).sort((a, b) => b - a);
  }

  function renderYearFilterOptions(questions) {
    if (!el.yearFilterOptions) return;
    const years = getSubjectYears(questions);
    const signature = state.currentSubject ? state.currentSubject.id + ':' + years.join(',') : years.join(',');
    if (state._yearOptionsSignature === signature) return;
    state._yearOptionsSignature = signature;

    // Drop any selected years that no longer exist for this subject
    if (Array.isArray(state.selectedYears)) {
      state.selectedYears = state.selectedYears.filter(y => years.includes(y));
      if (state.selectedYears.length === 0) state.selectedYears = null;
    }

    if (years.length === 0) {
      el.yearFilterOptions.innerHTML = '<span class="filter-empty">No dated papers for this subject.</span>';
      return;
    }

    const selected = new Set(state.selectedYears || []);
    el.yearFilterOptions.innerHTML = years.map(year => `
      <label class="filter-option">
        <input type="checkbox" name="yearFilter" value="${year}" ${selected.has(year) ? 'checked' : ''}>
        <span>${year}</span>
      </label>
    `).join('');

    // Keep the active count in sync with programmatic changes
    updateActiveFilterCount();
  }

  function getSubjectSemesters(questions) {
    const set = new Set();
    questions.forEach(q => printedSemesters(q).forEach(s => set.add(s)));
    const order = ['III', 'IV', 'V', 'II', 'VI', 'VII', 'VIII'];
    return Array.from(set).sort((a, b) => {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }

  function renderSemesterFilterOptions(questions) {
    if (!el.semesterFilterOptions) return;
    const semesters = getSubjectSemesters(questions);
    const signature = (state.currentSubject ? state.currentSubject.id : '') + ':' + semesters.join(',');
    if (state._semesterOptionsSignature === signature) return;
    state._semesterOptionsSignature = signature;

    // Drop selections that no longer exist for this subject
    if (Array.isArray(state.selectedSemesters)) {
      state.selectedSemesters = state.selectedSemesters.filter(s => semesters.includes(s));
      if (state.selectedSemesters.length === 0) state.selectedSemesters = null;
    }

    if (semesters.length === 0) {
      el.semesterFilterOptions.innerHTML = '<span class="filter-empty">No semester metadata for this subject.</span>';
      return;
    }

    const selected = new Set(state.selectedSemesters || []);
    el.semesterFilterOptions.innerHTML = semesters.map(sem => `
      <label class="filter-option">
        <input type="checkbox" name="semesterFilter" value="${escapeHtml(sem)}" ${selected.has(sem) ? 'checked' : ''}>
        <span>Semester ${escapeHtml(sem)}</span>
      </label>
    `).join('');

    updateActiveFilterCount();
  }

  function updateActiveFilterCount() {
    if (!el.activeFilterCount) return;
    const yearCount = Array.isArray(state.selectedYears) ? state.selectedYears.length : 0;
    const semesterCount = Array.isArray(state.selectedSemesters) ? state.selectedSemesters.length : 0;
    const count = yearCount + semesterCount + (state.selectedPart !== 'all' ? 1 : 0) + (state.repeatedOnly ? 1 : 0);
    el.activeFilterCount.textContent = String(count);
    el.activeFilterCount.hidden = count === 0;
  }

  function getPanelFilterOptions() {
    const years = el.yearFilterOptions
      ? Array.from(el.yearFilterOptions.querySelectorAll('input[name="yearFilter"]:checked'))
          .map(input => parseInt(input.value, 10))
          .filter(Number.isFinite)
      : [];
    const partInput = document.querySelector('input[name="partFilter"]:checked');
    return {
      years: years.length ? years : null,
      part: partInput ? partInput.value : 'all',
      repeatedOnly: Boolean(el.repeatedOnlyFilter && el.repeatedOnlyFilter.checked),
      query: state.pyqSearchQuery || ''
    };
  }

  function filterQuestionList(list, options) {
    const opts = options || {};
    let filtered = list;

    if (Array.isArray(opts.years) && opts.years.length > 0) {
      const yearSet = new Set(opts.years);
      filtered = filtered.filter(q => q.years && q.years.some(y => yearSet.has(y)));
    }

    if (opts.part === 'A' || opts.part === 'B') {
      filtered = filtered.filter(q => q.part === opts.part);
    }

    if (opts.repeatedOnly) {
      filtered = filtered.filter(q => q.frequency > 1);
    }

    const query = (opts.query || '').trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(q => {
        const textMatch = (q.question || '').toLowerCase().includes(query);
        const topicMatch = (q.topicTag || '').toLowerCase().includes(query);
        const numMatch = (q.questionNumber || '').toLowerCase().includes(query);
        const paperMatch = (q.paperName || '').toLowerCase().includes(query);
        return textMatch || topicMatch || numMatch || paperMatch;
      });
    }

    return filtered;
  }

  function updateApplyFilterCount() {
    if (!el.applyFilterCountText || !state.currentSubject) return;
    const examKey = state.activeExam || 'mid2';
    const allSubQuestions = QUESTIONS_DATABASE.filter(q =>
      q.subjectId === state.currentSubject.id && (!window.isItemInScope || window.isItemInScope(q, examKey))
    );
    const count = filterQuestionList(allSubQuestions, getPanelFilterOptions()).length;
    el.applyFilterCountText.textContent = count === 0
      ? 'No matches'
      : `Show ${count} question${count === 1 ? '' : 's'}`;
  }

  function applyFiltersFromPanel() {
    const opts = getPanelFilterOptions();
    state.selectedYears = opts.years;
    state.selectedPart = opts.part;
    state.repeatedOnly = opts.repeatedOnly;

    closeFilterPanel();
    updateActiveFilterCount();
    renderPyqsDivision();
  }

  function resetFilters() {
    state.selectedYears = null;
    state.selectedSemesters = null;
    state.selectedPart = 'all';
    state.repeatedOnly = false;

    if (el.yearFilterOptions) {
      el.yearFilterOptions.querySelectorAll('input[name="yearFilter"]').forEach(input => { input.checked = false; });
    }
    if (el.semesterFilterOptions) {
      el.semesterFilterOptions.querySelectorAll('input[name="semesterFilter"]').forEach(input => { input.checked = false; });
    }
    const allPartInput = document.querySelector('input[name="partFilter"][value="all"]');
    if (allPartInput) allPartInput.checked = true;
    if (el.repeatedOnlyFilter) el.repeatedOnlyFilter.checked = false;

    updateActiveFilterCount();
    updateApplyFilterCount();
    renderPyqsDivision();
  }

  function openFilterPanel() {
    if (!el.pyqFilterPanel || !el.pyqFilterToggle) return;
    el.pyqFilterPanel.hidden = false;
    el.pyqFilterToggle.setAttribute('aria-expanded', 'true');
    el.pyqFilterToggle.classList.add('active');
    updateApplyFilterCount();
  }

  function closeFilterPanel() {
    if (!el.pyqFilterPanel || !el.pyqFilterToggle) return;
    el.pyqFilterPanel.hidden = true;
    el.pyqFilterToggle.setAttribute('aria-expanded', 'false');
    el.pyqFilterToggle.classList.remove('active');
  }

  function toggleFilterPanel() {
    if (!el.pyqFilterPanel) return;
    if (el.pyqFilterPanel.hidden) openFilterPanel();
    else closeFilterPanel();
  }

  function marksLabel(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return 'Marks not listed';
    return n === 1 ? '1 Mark' : `${n} Marks`;
  }

  function marksSummary(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return 'Marks not listed';
    return n === 1 ? '1 Mark' : `${n} Marks`;
  }

  function getPartMarksSummary(partAQuestions) {
    const marks = new Set(partAQuestions.map(q => Number(q.marks)).filter(Number.isFinite));
    if (marks.size === 0) return 'Short Answer Questions';
    const sorted = Array.from(marks).sort((a, b) => a - b);
    return 'Short Answer Questions (' + sorted.map(marksSummary).join(' / ') + ')';
  }

  function getLongMarksSummary(partBQuestions) {
    const marks = new Set(partBQuestions.map(q => Number(q.marks)).filter(Number.isFinite));
    if (marks.size === 0) return 'Long Answer Questions';
    const sorted = Array.from(marks).sort((a, b) => a - b);
    return 'Long Answer Questions (' + sorted.map(marksSummary).join(' / ') + ')';
  }

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

    // Filter questions for current subject & active exam scope
    const examKey = state.activeExam || 'mid2';
    const allSubQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === subId && (!window.isItemInScope || window.isItemInScope(q, examKey)));

    // Build the year filter checkboxes from the years actually present in this subject
    renderYearFilterOptions(allSubQuestions);
    // renderSemesterFilterOptions(allSubQuestions);

    const query = (state.pyqSearchQuery || '').trim();
    const filterOptions = {
      years: state.selectedYears,
      part: state.selectedPart,
      repeatedOnly: state.repeatedOnly,
      query
    };
    const filteredQuestions = filterQuestionList(allSubQuestions, filterOptions);

    // Reflect active filters on the Filters button and the Apply button count
    updateActiveFilterCount();
    updateApplyFilterCount();

    const inScopeChapters = window.getInScopeChapters ? window.getInScopeChapters(examKey) : [1, 2, 3, 4, 5];
    const examConfig = getExamConfig(examKey);

    // Single, accurate count banner
    if (el.pyqCountBanner) {
      const activeLabels = [];
      if (Array.isArray(state.selectedYears) && state.selectedYears.length > 0) {
        activeLabels.push(state.selectedYears.slice().sort((a, b) => b - a).join(', '));
      }
      if (state.selectedPart !== 'all') activeLabels.push('Part ' + state.selectedPart);
      if (state.repeatedOnly) activeLabels.push('Repeated only');
      if (query) activeLabels.push('search: "' + query + '"');
      const filterLabel = activeLabels.length ? ' · ' + activeLabels.join(' · ') : '';
      el.pyqCountBanner.textContent = `Showing ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} · ${examConfig.unitsLabel || 'Units 1–5'}${filterLabel}`;
    }

    // Check if all chapters are expanded
    updateToggleAllButtonState();

    // Render in-scope Chapter Accordions
    for (let i = 0; i < inScopeChapters.length; i++) {
      const ch = inScopeChapters[i];
      const chQuestions = filteredQuestions.filter(q => q.chapter === ch);
      const chTotalAll = allSubQuestions.filter(q => q.chapter === ch).length;
      const chShortCount = chQuestions.filter(q => q.part === 'A').length;
      const chLongCount = chQuestions.filter(q => q.part === 'B').length;
      const chRepCount = chQuestions.filter(q => q.frequency > 1).length;
      const chShortMarks = Array.from(new Set(chQuestions.filter(q => q.part === 'A').map(q => Number(q.marks)).filter(Number.isFinite))).sort((a, b) => a - b);
      const chLongMarks = Array.from(new Set(chQuestions.filter(q => q.part === 'B').map(q => Number(q.marks)).filter(Number.isFinite))).sort((a, b) => a - b);

      // Auto-expand if active search matches questions in this chapter
      let isExpanded = Boolean(state.expandedChapters[ch]);
      if (query && chQuestions.length > 0) {
        isExpanded = true;
      }

      const card = document.createElement('div');
      card.className = 'chapter-accordion-card' + (isExpanded ? ' open' : '');
      card.id = 'chapterAccordion-' + ch;

      card.innerHTML = `
        <div class="chapter-accordion-header" role="button" tabindex="0" data-chapter="${ch}" aria-expanded="${isExpanded}">
          <div class="ch-header-left">
            <span class="ch-badge">Unit ${ch}</span>
          </div>
          <div class="ch-header-right">
            <span class="ch-count-badge">${chQuestions.length} Question${chQuestions.length === 1 ? '' : 's'}</span>
            <div class="ch-breakdown-tags">
              <span class="ch-sub-tag short">${chShortCount} Short${chShortMarks.length ? ' (' + chShortMarks.join('/') + 'M)' : ''}</span>
              <span class="ch-sub-tag long">${chLongCount} Long${chLongMarks.length ? ' (' + chLongMarks.join('/') + 'M)' : ''}</span>
              ${chRepCount > 0 ? `<span class="ch-sub-tag rep"><i class="fa-solid fa-fire"></i> ${chRepCount} Repeated</span>` : ''}
            </div>
            <i class="fa-solid fa-chevron-down ch-chevron"></i>
          </div>
        </div>
        <div class="chapter-accordion-body" style="display: ${isExpanded ? 'block' : 'none'};">
          <div class="chapter-questions-container" id="chapterQuestionsList-${ch}"></div>
        </div>
      `;

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
        const emptyTitle = chTotalAll === 0
          ? `No in-scope questions in Unit ${ch} for ${examConfig.name}`
          : `No questions matching current filters in Unit ${ch}`;
        const emptyCopy = chTotalAll === 0
          ? 'The bank has no question confidently mapped to this unit for the selected exam. Switch to Semester End to see every tagged question, or report a missing mapping.'
          : `Total ${chTotalAll} authentic questions available in this chapter. Try selecting "All Years" or "All Questions".`;
        listEl.innerHTML = `
          <div class="empty-state-box" style="padding: 18px; margin: 6px 0;">
            <div class="empty-state-title" style="font-size: 13.5px;">${escapeHtml(emptyTitle)}</div>
            <div class="empty-state-sub" style="font-size: 12px;">${escapeHtml(emptyCopy)}</div>
          </div>
        `;
      } else {
        // Sort by frequency descending, then by year
        chQuestions.sort((a, b) => (b.frequency || 0) - (a.frequency || 0));

        const partAQuestions = chQuestions.filter(q => q.part === 'A');
        const partBQuestions = chQuestions.filter(q => q.part === 'B');

        if (partAQuestions.length > 0) {
          const secTitleA = document.createElement('div');
          secTitleA.className = 'chapter-part-section-title';
          secTitleA.innerHTML = '<i class="fa-solid fa-pen-fancy"></i> Part A — ' + escapeHtml(getPartMarksSummary(partAQuestions));
          listEl.appendChild(secTitleA);

          partAQuestions.forEach(q => {
            listEl.appendChild(createQuestionCardElement(q));
          });
        }

        if (partBQuestions.length > 0) {
          const secTitleB = document.createElement('div');
          secTitleB.className = 'chapter-part-section-title';
          secTitleB.innerHTML = '<i class="fa-solid fa-book-open"></i> Part B — ' + escapeHtml(getLongMarksSummary(partBQuestions));
          listEl.appendChild(secTitleB);

          partBQuestions.forEach(q => {
            listEl.appendChild(createQuestionCardElement(q));
          });
        }

        const collapseBtn = document.createElement('button');
        collapseBtn.type = 'button';
        collapseBtn.className = 'chapter-collapse-btn';
        collapseBtn.innerHTML = `<i class="fa-solid fa-chevron-up" aria-hidden="true"></i> Collapse Unit ${ch}`;
        collapseBtn.addEventListener('click', () => {
          if (state.expandedChapters[ch]) toggleChapterAccordion(ch);
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        listEl.appendChild(collapseBtn);
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

  function printedSemesters(q) {
    const list = (q.appearances && q.appearances.length) ? q.appearances : [{ semester: q.semester }];
    return Array.from(new Set(list.map(a => a && a.semester).filter(Boolean)));
  }

  // The Drive folders mix in papers that are printed for other semesters (mostly
  // IV-sem Java/DBMS/SE papers from MR-21/22). Label them honestly instead of
  // pretending every paper is a III-semester paper.
  function semesterBadgeHtml(q) {
    return '';
  }

  function createQuestionCardElement(q) {
    const isPartA = q.part === 'A';
    const partBadgeClass = isPartA ? 'part-a' : 'part-b';
    const partLabel = 'Part ' + q.part + ' • ' + marksLabel(q.marks);
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

    card.innerHTML = `
      <div class="question-card-top">
        <div class="question-badges">
          <span class="q-badge q-num">${escapeHtml(q.questionNumber || 'Q')}</span>
          <span class="q-badge ${partBadgeClass}">${partLabel}</span>
          <span class="q-badge topic">${escapeHtml(q.topicTag || 'Core Syllabus')}</span>
          ${semesterBadgeHtml(q)}
          ${recurrenceBadge}
        </div>
        <div class="question-years-tag">
          Asked in: <strong>${q.years ? q.years.join(', ') : ''}</strong>
        </div>
      </div>
      <div class="question-text-preview">${formattedQuestionText}</div>
      <div class="question-card-footer">
        <div class="footer-left-proof">
          <a href="${directPdfUrl}" target="_blank" rel="noopener noreferrer" class="direct-pdf-badge" onclick="event.stopPropagation();" title="Directly open original ${escapeHtml(q.paperName)} PDF in Google Drive">
            <i class="fa-regular fa-file-pdf"></i>
            <span>${escapeHtml(q.paperName)}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px; margin-left:3px;"></i>
          </a>
        </div>
        <div class="footer-right-actions">
          <button type="button" class="btn-card-action btn-card-tips" title="View model exam tips and detailed analysis">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Exam Tips</span>
          </button>
          <button type="button" class="btn-card-action btn-card-ai" title="Generate an instant MGIT-style model answer with AI">
            <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
            </svg>
            <span>Solve with AI</span>
          </button>
        </div>
      </div>
    `;

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
    if (window.RichText && typeof window.RichText.render === 'function') {
      return window.RichText.render(text);
    }
    return escapeHtml(text);
  }

  function solveQuestionWithGemini(q) {
    const sub = SUBJECTS_DATA[q.subjectId] || state.currentSubject;
    const subName = sub ? (sub.shortName + ' — ' + sub.title) : q.subjectId;
    const partDesc = 'Part ' + q.part + ' (' + marksLabel(q.marks) + ', ' + (q.part === 'A' ? 'short answer' : 'long answer') + ')';

    const promptText = 'Explain and solve this MGIT examination question from ' + subName + '. ' +
      'Unit ' + q.chapter + ', ' + partDesc + ', paper: ' + q.paperName + '. ' +
      'Question: ' + q.question + ' ' +
      'Structure the answer with definitions, steps, a diagram description or formula where useful, and the key points needed for full marks.';

    openGeminiModal();
    if (el.geminiQueryInput) {
      el.geminiQueryInput.value = promptText;
      el.geminiQueryInput.focus();
      const end = el.geminiQueryInput.value.length;
      try { el.geminiQueryInput.setSelectionRange(end, end); } catch (e) {}
    }
    showToast('Question added. Tap send when you are ready.');
  }

  // -------------------------------------------------------------
  // Question Detail Modal
  // -------------------------------------------------------------
  function formatPaperName(paperName) {
    if (!paperName) return 'Original paper';
    const raw = String(paperName).replace(/\.pdf$/i, '').trim();
    const lower = raw.toLowerCase();

    const months = {
      jan: 'Jan', january: 'Jan',
      feb: 'Feb', february: 'Feb',
      mar: 'Mar', march: 'Mar',
      apr: 'Apr', april: 'Apr',
      may: 'May',
      jun: 'Jun', june: 'Jun',
      jul: 'Jul', july: 'Jul',
      aug: 'Aug', august: 'Aug',
      sep: 'Sep', sept: 'Sep', september: 'Sep',
      oct: 'Oct', october: 'Oct',
      nov: 'Nov', november: 'Nov',
      dec: 'Dec', december: 'Dec'
    };

    let month = '';
    const monthMatch = lower.match(/\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/);
    if (monthMatch) month = months[monthMatch[1]] || '';

    let year = '';
    const yearMatch = lower.match(/\b(20\d{2})\b/);
    if (yearMatch) {
      year = yearMatch[1];
    } else {
      const shortYear = lower.match(/\b(\d{2})\b/);
      if (shortYear) {
        const n = parseInt(shortYear[1], 10);
        if (n >= 10) year = '20' + shortYear[1];
      }
    }

    let kind = '';
    const hasSupp = /\bsupp(?:le|lement(?:ary)?)?\b/.test(lower);
    const hasReg = /\breg(?:ular)?\b/.test(lower);
    if (hasSupp && hasReg) kind = 'Regular & Supplementary';
    else if (hasSupp) kind = 'Supplementary';
    else if (hasReg) kind = 'Regular';

    const parts = [];
    if (month && year) parts.push(`${month} ${year}`);
    else if (month) parts.push(month);
    else if (year) parts.push(year);
    if (kind) parts.push(kind);

    return parts.length ? parts.join(' · ') : raw;
  }

  function openQuestionModal(q) {
    state.currentQuestion = q;
    const sub = SUBJECTS_DATA[q.subjectId] || state.currentSubject;

    el.modalSubjectBadge.textContent = sub ? sub.shortName : q.subjectId;
    el.modalPartBadge.textContent = `Part ${q.part} • ${marksLabel(q.marks)}`;
    el.modalUnitBadge.textContent = `Unit ${q.chapter}`;

    if (el.modalSemesterBadge) {
      el.modalSemesterBadge.style.display = 'none';
      el.modalSemesterBadge.textContent = '';
    }

    el.modalQuestionTitle.innerHTML = formatQuestionMath(q.question);
    el.modalYearsAppeared.textContent = q.years ? q.years.join(', ') : 'Not specified';
    el.modalRecurrence.textContent = q.frequency > 1
      ? `Repeated across ${q.frequency} exam papers (${q.years.join(', ')})`
      : 'Appeared in 1 exam paper';
    const pageLabel = Number.isFinite(Number(q.pageNumber)) && Number(q.pageNumber) > 0
      ? ` · Page ${q.pageNumber}`
      : '';
    el.modalPaperName.textContent = `${formatPaperName(q.paperName)}${pageLabel}`;
    el.modalOutcome.textContent = q.courseOutcome || q.outcome || 'Not mapped in this dataset';

    // What to write: use the verified tip when one exists; otherwise explain
    // how the marks are usually earned without inventing content.
    el.modalTipText.innerHTML = formatQuestionMath(
      q.tip || `This is a ${marksLabel(q.marks)} ${q.part === 'A' ? 'short-answer' : 'long-answer'} question from Unit ${q.chapter}. Write the definition, the required steps or diagram, and a short concluding line.`
    );

    // Direct PDF Drive paper button (never a general folder when a file ID exists)
    const paperLink = q.driveFileId
      ? `https://drive.google.com/file/d/${q.driveFileId}/view?usp=sharing`
      : (sub && sub.driveUrl ? sub.driveUrl : DRIVE_ROOT_URL);
    el.modalOpenDrivePaperBtn.href = paperLink;
    el.modalOpenDrivePaperBtn.querySelector('span').textContent = q.driveFileId
      ? `Open “${q.paperName}” PDF in Google Drive`
      : 'Open the subject Drive folder';
    el.modalOpenDrivePaperBtn.title = q.driveFileId
      ? `Direct link to the original ${q.paperName} file in Google Drive`
      : 'Open the Google Drive folder for this subject';

    if (el.modalPaperInlineLink) {
      el.modalPaperInlineLink.href = paperLink;
      el.modalPaperInlineLink.innerHTML = q.driveFileId
        ? 'Open paper in Drive <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>'
        : 'Open subject folder <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>';
    }

    el.questionModal.style.display = 'flex';
  }

  function closeQuestionModal() {
    el.questionModal.style.display = 'none';
  }

  // -------------------------------------------------------------
  // Contribution Workflow (Warning -> Multi-file Upload Form)
  // -------------------------------------------------------------
  function promptContribute(type) {
    pendingContribContext.resourceType = type || 'Notes';
    pendingContribContext.subjectId = state.currentSubject ? state.currentSubject.id : 'DM';

    // Show Warning Pop-up first
    el.contribWarningModal.style.display = 'flex';
  }

  function proceedToUploadForm() {
    el.contribWarningModal.style.display = 'none';

    // Populate default selects
    if (el.uploadSubjectSelect) el.uploadSubjectSelect.value = pendingContribContext.subjectId || 'DM';
    if (el.uploadResourceType) el.uploadResourceType.value = pendingContribContext.resourceType === 'PYQ' ? 'PYQ' : 'Notes';
    if (el.uploadChapterSelect) el.uploadChapterSelect.value = '1';

    // Always start from the form, not the WhatsApp hand-off panel
    const form = el.contribUploadForm;
    if (form) form.hidden = false;
    if (el.contribHandoffPanel) el.contribHandoffPanel.hidden = true;

    el.contribUploadModal.style.display = 'flex';
  }

  function handleFilesChosen(filesList) {
    // Direct WhatsApp send flow - files attached directly in WhatsApp
  }

  function renderSelectedFiles() {
    if (el.selectedFilesList) el.selectedFilesList.innerHTML = '';
  }

  function submitContribution(e) {
    e.preventDefault();

    const subCode = el.uploadSubjectSelect ? el.uploadSubjectSelect.value : '';
    const resType = el.uploadResourceType ? el.uploadResourceType.value : 'Notes';
    const chapterVal = el.uploadChapterSelect ? el.uploadChapterSelect.value : '1';

    const subMeta = SUBJECTS_DATA[subCode];
    const subLabel = subMeta ? `${subMeta.shortName} - ${subMeta.title}` : subCode;
    const unitLabel = chapterVal === 'All' ? 'All Units' : `Unit ${chapterVal}`;

    const message = [
      'Hi Amaan, I want to contribute study material to MGIT PYQ Hub.',
      '',
      `Subject: ${subLabel}`,
      `Category: ${resType}`,
      `Chapter: ${unitLabel}`
    ].join('\n');

    lastContributionMessage = message;
    const waUrl = 'https://wa.me/916303191696?text=' + encodeURIComponent(message);
    window.open(waUrl, '_blank', 'noopener');

    // Swap the form for the honest thank-you message
    if (el.contribUploadForm) el.contribUploadForm.hidden = true;
    if (el.contribHandoffPanel) el.contribHandoffPanel.hidden = false;

    if (el.contribUploadForm) el.contribUploadForm.reset();
  }

  async function copyContributionMessage() {
    if (!lastContributionMessage) return;
    try {
      await navigator.clipboard.writeText(lastContributionMessage);
      showToast('Message copied to clipboard.');
    } catch (err) {
      showToast('Could not copy automatically.');
    }
  }

  // -------------------------------------------------------------
  // Gemini AI App State & Chat Session Management
  // -------------------------------------------------------------
  function loadGeminiChats() {
    try {
      const stored = localStorage.getItem('mgit_gemini_chats');
      state.geminiChats = stored ? JSON.parse(stored) : [];
    } catch (e) {
      state.geminiChats = [];
    }

    if (!Array.isArray(state.geminiChats) || state.geminiChats.length === 0) {
      createNewGeminiChat();
    } else {
      state.activeChatId = state.geminiChats[0].id;
      renderGeminiHistoryList();
      renderActiveChat();
    }
  }

  function saveGeminiChats() {
    try {
      localStorage.setItem('mgit_gemini_chats', JSON.stringify(state.geminiChats));
    } catch (e) {
      console.warn('Failed to save chats to localStorage:', e);
    }
  }

  function createNewGeminiChat() {
    const newChat = {
      id: 'chat_' + Date.now(),
      title: 'New Conversation',
      createdAt: Date.now(),
      messages: []
    };
    if (!Array.isArray(state.geminiChats)) {
      state.geminiChats = [];
    }
    state.geminiChats.unshift(newChat);
    state.activeChatId = newChat.id;
    saveGeminiChats();
    renderGeminiHistoryList();
    renderActiveChat();
    if (el.geminiSidebar && window.innerWidth <= 820) {
      el.geminiSidebar.classList.remove('open');
    }
  }

  function switchGeminiChat(chatId) {
    state.activeChatId = chatId;
    renderGeminiHistoryList();
    renderActiveChat();
    if (el.geminiSidebar && window.innerWidth <= 820) {
      el.geminiSidebar.classList.remove('open');
    }
  }

  function deleteGeminiChat(chatId, e) {
    if (e) e.stopPropagation();
    state.geminiChats = state.geminiChats.filter(c => c.id !== chatId);
    saveGeminiChats();
    if (state.activeChatId === chatId) {
      if (state.geminiChats.length > 0) {
        state.activeChatId = state.geminiChats[0].id;
        renderGeminiHistoryList();
        renderActiveChat();
      } else {
        createNewGeminiChat();
      }
    } else {
      renderGeminiHistoryList();
    }
  }

  function clearAllGeminiChats() {
    state.geminiChats = [];
    saveGeminiChats();
    createNewGeminiChat();
    showToast('All chat history cleared.');
  }

  function renderGeminiHistoryList() {
    if (!el.geminiHistoryList) return;
    el.geminiHistoryList.innerHTML = '';
    if (!state.geminiChats || state.geminiChats.length === 0) {
      el.geminiHistoryList.innerHTML = '<div class="empty-history-text" style="padding:14px; color:#94a3b8; font-size:12px; text-align:center;">No previous chats</div>';
      return;
    }
    state.geminiChats.forEach(chat => {
      const item = document.createElement('div');
      item.className = 'history-item-btn' + (chat.id === state.activeChatId ? ' active' : '');
      item.innerHTML = `
        <i class="fa-regular fa-message"></i>
        <span class="chat-title">${escapeHtml(chat.title || 'Conversation')}</span>
        <button type="button" class="btn-del-chat" title="Delete conversation">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      item.addEventListener('click', () => switchGeminiChat(chat.id));
      const delBtn = item.querySelector('.btn-del-chat');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => deleteGeminiChat(chat.id, e));
      }
      el.geminiHistoryList.appendChild(item);
    });
  }

  function renderActiveChat() {
    const chat = state.geminiChats.find(c => c.id === state.activeChatId);
    if (!chat) return;

    if (el.geminiCurrentChatTitle) {
      el.geminiCurrentChatTitle.textContent = chat.title || 'AI Study Assistant';
    }

    if (!chat.messages || chat.messages.length === 0) {
      if (el.geminiWelcomeScreen) el.geminiWelcomeScreen.style.display = 'flex';
      if (el.geminiChatOutput) {
        el.geminiChatOutput.style.display = 'none';
        el.geminiChatOutput.innerHTML = '';
      }
    } else {
      if (el.geminiWelcomeScreen) el.geminiWelcomeScreen.style.display = 'none';
      if (el.geminiChatOutput) {
        el.geminiChatOutput.style.display = 'flex';
        el.geminiChatOutput.innerHTML = '';
        chat.messages.forEach(msg => {
          if (msg.role === 'user') {
            const userMsg = document.createElement('div');
            userMsg.className = 'user-msg';
            let imgHtml = '';
            if (msg.image) {
              imgHtml = `<img src="${msg.image}" class="msg-attached-img" alt="Attached study image">`;
            }
            userMsg.innerHTML = `${imgHtml}<span>${escapeHtml(msg.text)}</span>`;
            el.geminiChatOutput.appendChild(userMsg);
          } else {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'ai-msg';
            updateAiMessageContent(aiMsg, msg.text);
            el.geminiChatOutput.appendChild(aiMsg);
          }
        });
        el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
      }
    }
  }

  function toggleGeminiSidebar() {
    if (el.geminiSidebar) {
      el.geminiSidebar.classList.toggle('open');
    }
  }

  function closeGeminiSidebar() {
    if (el.geminiSidebar) {
      el.geminiSidebar.classList.remove('open');
    }
  }

  function toggleSuggestions() {
    if (!el.geminiSuggestionsScrollBox) return;
    const isCollapsed = el.geminiSuggestionsScrollBox.classList.toggle('collapsed');
    if (el.toggleSuggestionsBtn) {
      el.toggleSuggestionsBtn.classList.toggle('collapsed', isCollapsed);
      el.toggleSuggestionsBtn.setAttribute('aria-expanded', !isCollapsed);
    }
  }

  // -------------------------------------------------------------
  // Camera & Image Attachment
  // -------------------------------------------------------------
  function setupImageAndCameraAttachment() {
    if (el.geminiCameraBtn && el.geminiCameraInput) {
      el.geminiCameraBtn.addEventListener('click', () => {
        el.geminiCameraInput.click();
      });
      el.geminiCameraInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        if (file.type.startsWith('image/')) {
          if (file.size > 10 * 1024 * 1024) {
            showToast('Image size exceeds 10MB limit. Please upload a smaller image.');
            return;
          }
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            const dataUrl = loadEvt.target.result;
            const base64Data = dataUrl.split(',')[1];
            state.pendingGeminiImage = {
              dataUrl,
              base64Data,
              mimeType: file.type
            };
            if (el.geminiPreviewImg) el.geminiPreviewImg.src = dataUrl;
            if (el.geminiImagePreviewStrip) el.geminiImagePreviewStrip.style.display = 'flex';
            showToast('File attached. Ready to send to the AI assistant.');
          };
          reader.readAsDataURL(file);
        } else {
          showToast(`Attached ${file.name}. Ask the AI assistant about this file.`);
          if (el.geminiQueryInput && !el.geminiQueryInput.value) {
            el.geminiQueryInput.value = `Questions on ${file.name.replace(/\.[^/.]+$/, '')}: `;
            el.geminiQueryInput.focus();
          }
        }
      });
    }
    if (el.removeGeminiImgBtn) {
      el.removeGeminiImgBtn.addEventListener('click', clearImagePreview);
    }
  }

  function clearImagePreview() {
    state.pendingGeminiImage = null;
    if (el.geminiCameraInput) el.geminiCameraInput.value = '';
    if (el.geminiImagePreviewStrip) el.geminiImagePreviewStrip.style.display = 'none';
    if (el.geminiPreviewImg) el.geminiPreviewImg.src = '';
  }

  // -------------------------------------------------------------
  // Live Voice Speech Recognition
  // -------------------------------------------------------------
  function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        state.speechRecognition = new SpeechRecognition();
        state.speechRecognition.continuous = false;
        state.speechRecognition.interimResults = true;
        state.speechRecognition.lang = 'en-IN';

        state.speechRecognition.onstart = () => {
          state.isSpeechListening = true;
          if (el.geminiMicBtn) el.geminiMicBtn.classList.add('listening');
          showToast('Listening... Speak your academic question.');
        };

        state.speechRecognition.onresult = (evt) => {
          let transcript = '';
          for (let i = evt.resultIndex; i < evt.results.length; i++) {
            transcript += evt.results[i][0].transcript;
          }
          if (el.geminiQueryInput) {
            el.geminiQueryInput.value = transcript;
          }
        };

        state.speechRecognition.onerror = (evt) => {
          console.warn('Speech recognition error:', evt.error);
          state.isSpeechListening = false;
          if (el.geminiMicBtn) el.geminiMicBtn.classList.remove('listening');
        };

        state.speechRecognition.onend = () => {
          state.isSpeechListening = false;
          if (el.geminiMicBtn) el.geminiMicBtn.classList.remove('listening');
        };
      } catch (err) {
        console.warn('Speech recognition init error:', err);
      }
    }

    if (el.geminiMicBtn) {
      el.geminiMicBtn.addEventListener('click', toggleSpeechRecognition);
    }
  }

  function toggleSpeechRecognition() {
    if (!state.speechRecognition) {
      showToast('Voice input is not supported in this browser. Please type your query.');
      return;
    }
    if (state.isSpeechListening) {
      state.speechRecognition.stop();
    } else {
      try {
        state.speechRecognition.start();
      } catch (err) {
        console.warn('Could not start speech recognition:', err);
      }
    }
  }

  // -------------------------------------------------------------
  // Animated Rotating Search Input Placeholder
  // -------------------------------------------------------------
  const PLACEHOLDER_PHRASES = [
    "Ask anything about Discrete Mathematics...",
    "Solve 2-mark questions in DM Unit 1...",
    "Explain Booth's Algorithm in COA...",
    "Normalize R(A,B,C,D) to BCNF in DBMS...",
    "Difference between Overloading & Overriding...",
    "Software Testing: Black box vs White box...",
    "Ecosystem & 10% energy law in ES...",
    "Attach question paper photo with +..."
  ];

  let placeholderIndex = 0;
  let placeholderTimer = null;

  function initAnimatedPlaceholder() {
    if (!el.animatedPlaceholderText || !el.geminiQueryInput) return;

    el.animatedPlaceholderText.textContent = PLACEHOLDER_PHRASES[0];

    // Hide placeholder track on input or focus
    el.geminiQueryInput.addEventListener('focus', () => {
      if (el.animatedPlaceholderTrack) el.animatedPlaceholderTrack.style.opacity = '0';
    });

    el.geminiQueryInput.addEventListener('input', () => {
      if (el.animatedPlaceholderTrack) {
        el.animatedPlaceholderTrack.style.opacity = el.geminiQueryInput.value ? '0' : '1';
      }
    });

    el.geminiQueryInput.addEventListener('blur', () => {
      if (!el.geminiQueryInput.value && el.animatedPlaceholderTrack) {
        el.animatedPlaceholderTrack.style.opacity = '1';
      }
    });

    if (placeholderTimer) clearInterval(placeholderTimer);

    placeholderTimer = setInterval(() => {
      // If user is currently typing or input has value, skip rotation
      if (el.geminiQueryInput && (el.geminiQueryInput.value || document.activeElement === el.geminiQueryInput)) {
        return;
      }

      placeholderIndex = (placeholderIndex + 1) % PLACEHOLDER_PHRASES.length;
      const nextPhrase = PLACEHOLDER_PHRASES[placeholderIndex];

      // 1. Text slides up and fades out
      el.animatedPlaceholderText.style.transition = 'transform 0.35s ease, opacity 0.35s ease';
      el.animatedPlaceholderText.style.transform = 'translateY(-14px)';
      el.animatedPlaceholderText.style.opacity = '0';

      setTimeout(() => {
        // 2. Set new text below with zero transition
        el.animatedPlaceholderText.textContent = nextPhrase;
        el.animatedPlaceholderText.style.transition = 'none';
        el.animatedPlaceholderText.style.transform = 'translateY(14px)';
        el.animatedPlaceholderText.style.opacity = '0';

        // 3. Force reflow, then smoothly animate up to center
        void el.animatedPlaceholderText.offsetWidth;
        el.animatedPlaceholderText.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease';
        el.animatedPlaceholderText.style.transform = 'translateY(0)';
        el.animatedPlaceholderText.style.opacity = '1';
      }, 350);
    }, 3200);
  }

  // -------------------------------------------------------------
  // Interactive Onboarding Spotlight Tour
  // -------------------------------------------------------------
  const TOUR_STORAGE_KEY = 'mgit_tour_seen_v2';

  function maybeStartTourAfterCategoryPick() {
    if (localStorage.getItem(TOUR_STORAGE_KEY)) return;
    if (state.currentView !== 'exam' || state.currentSubject) return;
    if (document.body.classList.contains('tour-active')) return;
    if (el.geminiModal && el.geminiModal.style.display !== 'none') return;
    if (el.questionModal && el.questionModal.style.display !== 'none') return;
    const sessionScreen = document.getElementById('practiceSessionScreen');
    if (sessionScreen && sessionScreen.style.display === 'block') return;
    startOnboardingTour();
  }

  const TOUR_STEPS = [
    {
      targetKey: 'topDriveBtn',
      badge: 'Step 1 of 6',
      title: 'Your full Drive folder',
      desc: 'Tap here to open the complete Google Drive repository with the original past-paper PDFs and unit-wise notes.',
      isLast: false,
      scrollAction: () => window.scrollTo({ top: 0, behavior: 'auto' })
    },
    {
      targetKey: 'examActiveBanner',
      badge: 'Step 2 of 6',
      title: 'Your exam scope is set',
      desc: 'Everything below is filtered to this scope. Tap Change Exam whenever you want to switch to Mid-1, Mid-2 or Semester End.',
      isLast: false,
      scrollAction: () => window.scrollTo({ top: 0, behavior: 'auto' })
    },
    {
      targetKey: 'subjectsSection',
      badge: 'Step 3 of 6',
      title: 'Seven subjects, one hub',
      desc: 'Tap any subject to see its unit-wise notes and past questions. Counts always match what is inside.',
      isLast: false,
      scrollAction: () => {
        const target = el.subjectsSection;
        if (!target) return;
        const top = target.getBoundingClientRect().top + (window.scrollY || 0) - 150;
        window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
      }
    },
    {
      targetKey: 'practiceFunCard',
      badge: 'Step 4 of 6',
      title: 'Quiz Time and Revision',
      desc: 'Practise with MCQs or revise with flash cards. Both are scoped to the units in your selected exam.',
      isLast: false,
      scrollAction: () => scrollTourTargetIntoView('practiceFunCard')
    },
    {
      targetKey: 'floatingGeminiBtn',
      badge: 'Step 5 of 6',
      title: 'AI Study Assistant',
      desc: 'Ask a doubt, attach a question-paper photo, or solve a PYQ. The key stays on the server, never in your browser.',
      isLast: false,
      scrollAction: null // Never scroll for the fixed floating button.
    },
    {
      targetKey: 'mobileHeaderHistory',
      badge: 'Step 6 of 6',
      title: 'Back and forward, anytime',
      desc: 'Use the left and right arrows to move between pages without losing where you were. They work just like the browser buttons.',
      isLast: true,
      scrollAction: () => window.scrollTo({ top: 0, behavior: 'auto' })
    }
  ];

  function scrollTourTargetIntoView(key) {
    const target = el[key];
    if (!target) return;
    target.scrollIntoView({ behavior: 'auto', block: 'center' });
  }

  function startOnboardingTour() {
    state.currentTourStep = 0;
    state.tourActive = true;
    state.tourTimers.forEach(clearTimeout);
    state.tourTimers = [];
    document.body.classList.add('tour-active');
    if (el.tourOverlay) el.tourOverlay.style.display = 'block';
    if (el.tourSpotlight) el.tourSpotlight.style.display = 'block';
    if (el.tourTooltip) el.tourTooltip.style.display = 'block';
    window.addEventListener('scroll', handleTourScroll, { passive: true });
    renderTourStep(0);
  }

  function renderTourStep(stepIdx) {
    if (stepIdx < 0 || stepIdx >= TOUR_STEPS.length) {
      endTour();
      return;
    }

    state.currentTourStep = stepIdx;
    const step = TOUR_STEPS[stepIdx];
    const targetEl = el[step.targetKey];

    if (step.scrollAction) {
      step.scrollAction();
    }

    if (el.tourStepBadge) el.tourStepBadge.textContent = step.badge;
    if (el.tourTitle) el.tourTitle.textContent = step.title;
    if (el.tourDesc) el.tourDesc.textContent = step.desc;
    if (el.tourTooltip) {
      el.tourTooltip.classList.toggle('tour-step-ai', step.targetKey === 'floatingGeminiBtn');
    }

    if (el.tourPrevBtn) {
      el.tourPrevBtn.disabled = (stepIdx === 0);
    }

    if (el.tourNextBtn) {
      if (step.isLast) {
        el.tourNextBtn.innerHTML = '<span>Finish</span> <i class="fa-solid fa-check"></i>';
      } else {
        el.tourNextBtn.innerHTML = '<span>Next</span> <i class="fa-solid fa-chevron-right"></i>';
      }
    }

    // Update spotlight & tooltip immediately and after smooth scroll settles.
    // Track the timers so skipping the tour cannot re-show the spotlight later.
    updateTourSpotlightAndTooltip(targetEl);
    state.tourTimers.forEach(clearTimeout);
    state.tourTimers = [
      setTimeout(() => { updateTourSpotlightAndTooltip(targetEl); }, 120),
      setTimeout(() => { updateTourSpotlightAndTooltip(targetEl); }, 380)
    ];
  }

  function updateTourSpotlightAndTooltip(targetEl) {
    if (!state.tourActive) return;
    if (!targetEl || !el.tourSpotlight || !el.tourTooltip) return;

    const rect = targetEl.getBoundingClientRect();
    const isCategoryStep = targetEl === el.examCardsGrid;
    const isWideSectionStep = targetEl === el.subjectsSection || targetEl === el.practiceFunCard;
    const pad = isCategoryStep ? 12 : ((targetEl === el.subjectsSection) ? 10 : 6);
    const r = isCategoryStep ? 20 : ((targetEl === el.floatingGeminiBtn) ? 26 : (targetEl === el.topDriveBtn ? 22 : 16));

    // 1. Position Spotlight framing (Crystal-clear cutout, ZERO blur)
    el.tourSpotlight.style.display = 'block';
    el.tourSpotlight.style.top = `${Math.round(rect.top - pad)}px`;
    el.tourSpotlight.style.left = `${Math.round(rect.left - pad)}px`;
    el.tourSpotlight.style.width = `${Math.round(rect.width + pad * 2)}px`;
    el.tourSpotlight.style.height = `${Math.round(rect.height + pad * 2)}px`;
    el.tourSpotlight.style.borderRadius = `${r}px`;

    // 2. Position Tooltip
    const tooltipWidth = Math.min(340, window.innerWidth - 32);
    const actualTooltipHeight = el.tourTooltip.offsetHeight || 260;
    const margin = 16;

    let top, left;

    if (targetEl === el.floatingGeminiBtn) {
      if (window.innerWidth > 640) {
        // Desktop / Laptop: Place cleanly to the LEFT of the floating Gemini button
        left = rect.left - tooltipWidth - 20;
        top = Math.max(16, Math.min(window.innerHeight - actualTooltipHeight - 16, rect.bottom - actualTooltipHeight));
      } else {
        // Mobile / Small screen: Place safely ABOVE with generous 24px clearance
        top = rect.top - actualTooltipHeight - 24;
        left = Math.max(16, (window.innerWidth - tooltipWidth) / 2);
      }
    } else if (targetEl === el.topDriveBtn) {
      // Step 1: Place directly BELOW top drive button
      top = rect.bottom + margin;
      left = rect.right - tooltipWidth;
    } else if (targetEl === el.mobileHeaderHistory) {
      // Step 6: Keep the page-navigation row visible above the explanation.
      top = rect.bottom + margin;
      left = (window.innerWidth - tooltipWidth) / 2;
    } else if (isCategoryStep) {
      // Step 2: Keep the three category cards unobstructed. Prefer the space
      // above the grid, then below it, and only fall back to the viewport
      // bottom on very short screens.
      const aboveTop = rect.top - actualTooltipHeight - 18;
      const belowTop = rect.bottom + 18;
      if (aboveTop >= 16) {
        top = aboveTop;
      } else if (belowTop + actualTooltipHeight <= window.innerHeight - 16) {
        top = belowTop;
      } else {
        top = window.innerHeight - actualTooltipHeight - 16;
      }
      left = (window.innerWidth - tooltipWidth) / 2;
    } else if (isWideSectionStep) {
      // Tall sections (subject grid, Quiz Time): keep the card near the
      // bottom of the viewport so the spotlight stays readable.
      top = window.innerHeight - actualTooltipHeight - 24;
      left = (window.innerWidth - tooltipWidth) / 2;
    } else {
      // Fallback: top center of the target.
      top = Math.max(80, rect.top + 20);
      left = (window.innerWidth - tooltipWidth) / 2;
    }

    // Viewport boundaries clamping
    const maxLeft = window.innerWidth - tooltipWidth - 16;
    if (left > maxLeft) left = maxLeft;
    if (left < 16) left = 16;

    const maxTop = window.innerHeight - actualTooltipHeight - 16;
    if (top > maxTop) top = maxTop;
    if (top < 16) top = 16;

    el.tourTooltip.style.top = `${Math.round(top)}px`;
    el.tourTooltip.style.left = `${Math.round(left)}px`;
  }

  function handleTourScroll() {
    if (el.tourTooltip && el.tourTooltip.style.display !== 'none') {
      const step = TOUR_STEPS[state.currentTourStep];
      if (step && el[step.targetKey]) {
        updateTourSpotlightAndTooltip(el[step.targetKey]);
      }
    }
  }

  function nextTourStep() {
    if (state.currentTourStep >= TOUR_STEPS.length - 1) {
      endTour();
    } else {
      renderTourStep(state.currentTourStep + 1);
    }
  }

  function prevTourStep() {
    if (state.currentTourStep > 0) {
      renderTourStep(state.currentTourStep - 1);
    }
  }

  function endTour() {
    state.tourActive = false;
    state.tourTimers.forEach(clearTimeout);
    state.tourTimers = [];
    document.body.classList.remove('tour-active');
    if (el.tourOverlay) el.tourOverlay.style.display = 'none';
    if (el.tourSpotlight) el.tourSpotlight.style.display = 'none';
    if (el.tourTooltip) el.tourTooltip.style.display = 'none';
    window.removeEventListener('scroll', handleTourScroll);
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  }

  // -------------------------------------------------------------
  // Floating Gemini AI Study Assistant
  // -------------------------------------------------------------
  function openGeminiModal() {
    if (!el.geminiModal) return;
    state.preAiScrollY = window.scrollY || 0;
    el.geminiModal.style.display = 'flex';
    document.body.classList.add('ai-modal-open');
    document.documentElement.classList.add('ai-modal-open');
    if (!state.activeChatId || !state.geminiChats.find(c => c.id === state.activeChatId)) {
      loadGeminiChats();
    } else {
      renderActiveChat();
    }
    updateAiModelLabel();
    if (el.geminiQueryInput && window.innerWidth > 768) {
      el.geminiQueryInput.focus();
    }
  }

  function closeGeminiModal() {
    if (!el.geminiModal) return;
    el.geminiModal.style.display = 'none';
    document.body.classList.remove('ai-modal-open');
    document.documentElement.classList.remove('ai-modal-open');
    closeGeminiSidebar();
    if (typeof state.preAiScrollY === 'number') {
      window.scrollTo({ top: state.preAiScrollY, left: 0, behavior: 'auto' });
    }
  }

  function updateAiModelLabel() {
    if (!el.geminiModelLabel) return;
    el.geminiModelLabel.textContent = 'AI Assistant';
    if (el.geminiLivePill) {
      el.geminiLivePill.title = 'Answers are generated by a secure server-side AI assistant.';
    }
  }

  function setAiBusy(busy) {
    state.aiBusy = Boolean(busy);
    document.body.classList.toggle('ai-running', state.aiBusy);
    document.documentElement.classList.toggle('ai-running', state.aiBusy);
    if (el.geminiSendBtn) {
      el.geminiSendBtn.disabled = state.aiBusy;
      el.geminiSendBtn.setAttribute('aria-busy', state.aiBusy ? 'true' : 'false');
      el.geminiSendBtn.classList.toggle('is-busy', state.aiBusy);
    }
    if (el.geminiQueryInput) {
      el.geminiQueryInput.disabled = state.aiBusy;
    }
    if (el.geminiQueryForm) el.geminiQueryForm.classList.toggle('ai-busy', state.aiBusy);
  }

  async function handleGeminiQuery(queryText) {
    if (state.aiBusy) return;
    const q = (queryText || (el.geminiQueryInput ? el.geminiQueryInput.value : '')).trim();
    const attachedImg = state.pendingGeminiImage;
    if (!q && !attachedImg) return;

    // Ensure active chat exists
    let chat = state.geminiChats.find(c => c.id === state.activeChatId);
    if (!chat) {
      createNewGeminiChat();
      chat = state.geminiChats.find(c => c.id === state.activeChatId);
    }

    // Switch view to chat output
    if (el.geminiWelcomeScreen) el.geminiWelcomeScreen.style.display = 'none';
    if (el.geminiChatOutput) el.geminiChatOutput.style.display = 'flex';

    // If first message in this chat, update title
    if (!chat.messages || chat.messages.length === 0) {
      const titlePrompt = q || (attachedImg ? 'Analyzed Image' : 'Study Question');
      chat.title = titlePrompt.length > 28 ? titlePrompt.substring(0, 28) + '...' : titlePrompt;
      if (el.geminiCurrentChatTitle) el.geminiCurrentChatTitle.textContent = chat.title;
    }

    // Append user message in UI
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    let imgHtml = '';
    if (attachedImg) {
      imgHtml = `<img src="${attachedImg.dataUrl}" class="msg-attached-img" alt="Attached study image">`;
    }
    userMsg.innerHTML = `${imgHtml}<span>${escapeHtml(q || 'Please analyze this study material photo.')}</span>`;
    el.geminiChatOutput.appendChild(userMsg);

    // Record user turn in chat messages
    chat.messages.push({
      role: 'user',
      text: q || 'Please analyze this study material photo.',
      image: attachedImg ? attachedImg.dataUrl : null,
      timestamp: Date.now()
    });

    // Clear input & image preview
    if (el.geminiQueryInput) el.geminiQueryInput.value = '';
    clearImagePreview();
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;

    // Thinking state
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'ai-msg';
    thinkingMsg.innerHTML = `
      <div class="ai-msg-header">
        <div class="ai-avatar-badge">
          <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="16" height="16" fill="#2563eb">
            <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
          </svg>
          <span class="ai-sender-name">AI Study Assistant</span>
        </div>
        <span class="ai-model-tag">Thinking…</span>
      </div>
      <div class="ai-msg-body" style="color: var(--text-muted); font-style: italic; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-circle-notch fa-spin"></i> Generating a structured academic answer…
      </div>
    `;
    el.geminiChatOutput.appendChild(thinkingMsg);
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
    setAiBusy(true);

    // Server-side AI proxy only. The API key never reaches the browser.
    try {
      const serverRes = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          subject: state.currentSubject ? state.currentSubject.title : '',
          history: chat.messages.map(m => ({ role: m.role, text: m.text })),
          image: attachedImg && attachedImg.base64Data
            ? { mimeType: attachedImg.mimeType, base64Data: attachedImg.base64Data }
            : null
        })
      });

      const data = await serverRes.json().catch(() => ({}));
      if (serverRes.ok && data.success && data.text) {
        updateAiMessageContent(thinkingMsg, data.text);
        chat.messages.push({ role: 'model', text: data.text, timestamp: Date.now() });
        saveGeminiChats();
        renderGeminiHistoryList();
        if (data.model && el.geminiModelLabel) {
          el.geminiModelLabel.textContent = 'AI Assistant';
        }
        el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
        return;
      }

      const reason = data.message || (serverRes.status === 429
        ? 'The AI assistant has reached its request limit for now. Please try again in a minute.'
        : 'The AI assistant could not answer right now. Please try again.');
      updateAiMessageContent(thinkingMsg, `**Unable to generate an answer**\n\n${reason}\n\nYou can still use the original paper link on the question card, or ask again in a moment.`, true, q);
    } catch (e) {
      console.warn('AI request failed:', e);
      updateAiMessageContent(thinkingMsg, '**Unable to reach the AI assistant**\n\nPlease check your connection and try again. The question bank and Drive links still work normally.', true, q);
    } finally {
      setAiBusy(false);
      if (el.geminiChatOutput) el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
    }
  }

  function updateAiMessageContent(element, rawMarkdown, isError, userQuery) {
    const formattedHtml = formatGeminiResponse(rawMarkdown);
    let fallbackHtml = '';
    if (isError) {
      const escapedQuestionAttr = userQuery ? escapeHtml(userQuery).replace(/"/g, '&quot;') : '';
      fallbackHtml = `
        <div class="ai-error-fallback">
          <p class="ai-fallback-msg">We couldn’t generate a response this time. How would you like to continue?</p>
          ${userQuery ? `<button type="button" class="ai-fallback-copy-btn" data-query="${escapedQuestionAttr}" onclick="copyOriginalUserQuestion(this)" title="Copy your question to clipboard">
            <i class="fa-regular fa-copy"></i> Copy my question
          </button>` : ''}
          <div class="ai-fallback-btns">
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" class="ai-fallback-btn chatgpt-btn">
              <i class="fa-solid fa-comment-dots"></i>
              <span>Continue with ChatGPT</span>
            </a>
            <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="ai-fallback-btn gemini-btn">
              <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
              </svg>
              <span>Continue with Gemini</span>
            </a>
          </div>
        </div>
      `;
    }

    element.innerHTML = `
      <div class="ai-msg-header">
        <div class="ai-avatar-badge">
          <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="16" height="16" fill="#2563eb">
            <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
          </svg>
          <span class="ai-sender-name">AI Study Assistant</span>
        </div>
        <span class="ai-model-tag">${isError ? 'Not available' : 'AI'}</span>
      </div>
      <div class="ai-msg-body">
        ${formattedHtml}
        ${fallbackHtml}
      </div>
      <div class="ai-msg-footer">
        <button type="button" class="btn-copy-response" onclick="copyGeminiAiAnswer(this)">
          <i class="fa-regular fa-copy"></i> <span>Copy Answer</span>
        </button>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // Markdown & KaTeX Math Parser (Gemini App Experience)
  // -------------------------------------------------------------
  function renderMathExpr(expr, isBlock) {
    if (!expr) return '';

    // 1. Try KaTeX if loaded
    if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(expr, {
          displayMode: isBlock,
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render error, falling back to clean text math:', err);
      }
    }

    // 2. High-Fidelity Academic Math Fallback (Converts LaTeX tags to clean human-readable math)
    let clean = expr
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\div/g, ' ÷ ')
      .replace(/\\pm/g, ' ± ')
      .replace(/\\mp/g, ' ∓ ')
      .replace(/\\le(q)?\b/g, ' ≤ ')
      .replace(/\\ge(q)?\b/g, ' ≥ ')
      .replace(/\\ne(q)?\b/g, ' ≠ ')
      .replace(/\\approx/g, ' ≈ ')
      .replace(/\\equiv/g, ' ≡ ')
      .replace(/\\in\b/g, ' ∈ ')
      .replace(/\\notin\b/g, ' ∉ ')
      .replace(/\\subset\b/g, ' ⊂ ')
      .replace(/\\subseteq\b/g, ' ⊆ ')
      .replace(/\\cup\b/g, ' ∪ ')
      .replace(/\\cap\b/g, ' ∩ ')
      .replace(/\\forall\b/g, ' ∀ ')
      .replace(/\\exists\b/g, ' ∃ ')
      .replace(/\\rightarrow|\\to\b/g, ' → ')
      .replace(/\\Rightarrow|\\implies\b/g, ' ⇒ ')
      .replace(/\\leftarrow\b/g, ' ← ')
      .replace(/\\Leftrightarrow|\\iff\b/g, ' ⇔ ')
      .replace(/\\infty\b/g, ' ∞ ')
      .replace(/\\sum\b/g, ' ∑ ')
      .replace(/\\prod\b/g, ' ∏ ')
      .replace(/\\int\b/g, ' ∫ ')
      .replace(/\\alpha\b/g, 'α')
      .replace(/\\beta\b/g, 'β')
      .replace(/\\gamma\b/g, 'γ')
      .replace(/\\delta\b/g, 'δ')
      .replace(/\\Delta\b/g, 'Δ')
      .replace(/\\theta\b/g, 'θ')
      .replace(/\\lambda\b/g, 'λ')
      .replace(/\\mu\b/g, 'μ')
      .replace(/\\pi\b/g, 'π')
      .replace(/\\sigma\b/g, 'σ')
      .replace(/\\omega\b/g, 'ω')
      .replace(/\\Omega\b/g, 'Ω')
      .replace(/\\text\{([^}]+)\}/g, ' $1 ')
      .replace(/\\mathrm\{([^}]+)\}/g, ' $1 ')
      .replace(/\\mathbf\{([^}]+)\}/g, '<strong>$1</strong>')
      .replace(/\\mathit\{([^}]+)\}/g, '<em>$1</em>')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\^([0-9a-zA-Z])/g, '<sup>$1</sup>')
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/_([0-9a-zA-Z])/g, '<sub>$1</sub>')
      .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
      .replace(/\\([a-zA-Z]+)/g, '$1') // remove remaining unescaped backslashes
      .replace(/\s+/g, ' ')
      .trim();

    if (isBlock) {
      return `<div class="gemini-math-block">${clean}</div>`;
    }
    return `<span class="gemini-math">${clean}</span>`;
  }

  function formatGeminiResponse(rawText) {
    if (!rawText) return '';
    let text = rawText.trim();

    // 1. Math extraction & protection
    const mathTokens = [];

    // Block Math: $$ ... $$ or \[ ... \]
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, expr) => {
      const idx = mathTokens.length;
      mathTokens.push({ type: 'block', expr: expr.trim() });
      return `@@GEMINI_MATH_${idx}@@`;
    });
    text = text.replace(/\\\[([\s\S]+?)\\\]/g, (match, expr) => {
      const idx = mathTokens.length;
      mathTokens.push({ type: 'block', expr: expr.trim() });
      return `@@GEMINI_MATH_${idx}@@`;
    });

    // Inline Math: $ ... $ or \( ... \)
    text = text.replace(/(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g, (match, expr) => {
      const idx = mathTokens.length;
      mathTokens.push({ type: 'inline', expr: expr.trim() });
      return `@@GEMINI_MATH_${idx}@@`;
    });
    text = text.replace(/\\\((.+?)\\\)/g, (match, expr) => {
      const idx = mathTokens.length;
      mathTokens.push({ type: 'inline', expr: expr.trim() });
      return `@@GEMINI_MATH_${idx}@@`;
    });

    // 2. Render Markdown
    let html = '';
    if (typeof window !== 'undefined' && window.marked && typeof window.marked.parse === 'function') {
      try {
        html = window.marked.parse(text, { gfm: true, breaks: true });
      } catch (e) {
        html = customMarkdownFallback(text);
      }
    } else {
      html = customMarkdownFallback(text);
    }

    // 3. Restore & Render Math Tokens
    html = html.replace(/@@GEMINI_MATH_(\d+)@@/g, (match, idxStr) => {
      const token = mathTokens[parseInt(idxStr, 10)];
      if (!token) return '';
      return renderMathExpr(token.expr, token.type === 'block');
    });

    // 4. Enhance DOM (Wrap code blocks with language badge and copy button, style tables, etc.)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Wrap <pre><code> blocks
    tempDiv.querySelectorAll('pre').forEach(pre => {
      if (pre.parentElement && pre.parentElement.classList.contains('gemini-code-block')) return;

      const code = pre.querySelector('code');
      const langClass = code ? Array.from(code.classList).find(c => c.startsWith('language-')) : null;
      const lang = langClass ? langClass.replace('language-', '') : 'CODE';

      const wrapper = document.createElement('div');
      wrapper.className = 'gemini-code-block';
      wrapper.innerHTML = `
        <div class="gemini-code-header">
          <span class="code-lang"><i class="fa-solid fa-code"></i> ${lang}</span>
          <button type="button" class="gemini-copy-btn" onclick="copyGeminiCodeSnippet(this)">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
        </div>
      `;
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    });

    // Wrap tables
    tempDiv.querySelectorAll('table').forEach(tbl => {
      if (!tbl.classList.contains('gemini-table')) {
        tbl.classList.add('gemini-table');
        const wrap = document.createElement('div');
        wrap.className = 'gemini-table-wrapper';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      }
    });

    // Add CSS classes for clean styling
    tempDiv.querySelectorAll('h1').forEach(h => h.classList.add('gemini-h1'));
    tempDiv.querySelectorAll('h2').forEach(h => h.classList.add('gemini-h1'));
    tempDiv.querySelectorAll('h3').forEach(h => h.classList.add('gemini-h2'));
    tempDiv.querySelectorAll('h4').forEach(h => h.classList.add('gemini-h3'));
    tempDiv.querySelectorAll('h5, h6').forEach(h => h.classList.add('gemini-h4'));
    tempDiv.querySelectorAll('hr').forEach(hr => hr.classList.add('gemini-divider'));
    tempDiv.querySelectorAll('ul').forEach(ul => ul.classList.add('gemini-list'));
    tempDiv.querySelectorAll('ol').forEach(ol => ol.classList.add('gemini-ordered-list'));
    tempDiv.querySelectorAll('li').forEach(li => li.classList.add('gemini-li'));
    tempDiv.querySelectorAll('blockquote').forEach(bq => bq.classList.add('gemini-blockquote'));
    tempDiv.querySelectorAll('code:not(pre code)').forEach(c => c.classList.add('gemini-inline-code'));

    return tempDiv.innerHTML;
  }

  function customMarkdownFallback(raw) {
    let text = raw;

    // Code blocks
    text = text.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<div class="gemini-code-block"><div class="gemini-code-header"><span class="code-lang"><i class="fa-solid fa-code"></i> ${lang || 'CODE'}</span><button type="button" class="gemini-copy-btn" onclick="copyGeminiCodeSnippet(this)"><i class="fa-regular fa-copy"></i> Copy</button></div><pre><code>${escapeHtml(code)}</code></pre></div>`;
    });

    // Inline code
    text = text.replace(/`([^`\n]+)`/g, '<code class="gemini-inline-code">$1</code>');

    // Horizontal rule
    text = text.replace(/^---(\s*)$/gm, '<hr class="gemini-divider">');
    text = text.replace(/^\*\*\*(\s*)$/gm, '<hr class="gemini-divider">');

    // Headings
    text = text.replace(/^####\s+(.+)$/gm, '<h5 class="gemini-h4">$1</h5>');
    text = text.replace(/^###\s+(.+)$/gm, '<h4 class="gemini-h3">$1</h4>');
    text = text.replace(/^##\s+(.+)$/gm, '<h3 class="gemini-h2">$1</h3>');
    text = text.replace(/^#\s+(.+)$/gm, '<h2 class="gemini-h1">$1</h2>');

    // Bold & italic
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');

    // Lists
    text = text.replace(/^\s*[-*]\s+(.+)$/gm, '<li class="gemini-li">$1</li>');
    text = text.replace(/^\s*\d+\.\s+(.+)$/gm, '<li class="gemini-oli">$1</li>');

    // Line breaks
    text = text.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

    return text;
  }

  // Global helpers for copy buttons
  window.copyGeminiCodeSnippet = function(btn) {
    const codeBlock = btn.closest('.gemini-code-block');
    if (!codeBlock) return;
    const pre = codeBlock.querySelector('pre code') || codeBlock.querySelector('pre');
    if (!pre) return;
    const text = pre.innerText || pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }).catch(() => {
      showToast('Code copied to clipboard');
    });
  };

  window.copyOriginalUserQuestion = function(btn) {
    const query = btn.getAttribute('data-query');
    if (!query) return;
    navigator.clipboard.writeText(query).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Question copied!';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }).catch(() => {
      showToast('Question copied to clipboard');
    });
  };

  window.copyGeminiAiAnswer = function(btn) {
    const card = btn.closest('.ai-msg');
    if (!card) return;
    const body = card.querySelector('.ai-msg-body');
    if (!body) return;
    const text = body.innerText || body.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }).catch(() => {
      showToast('Answer copied to clipboard');
    });
  };

  function setupEventListeners() {
    // Header and mobile page navigation (use the app's own history)
    const handleAppBack = (e) => {
      e.stopPropagation();
      const exitModal = document.getElementById('practiceExitModal');
      const progressModal = document.getElementById('progressModal');
      const practiceModal = document.getElementById('practiceSelectorModal');
      const geminiModal = document.getElementById('geminiModal');
      const sessionScreen = document.getElementById('practiceSessionScreen');
      if (exitModal && exitModal.style.display !== 'none') { exitModal.style.display = 'none'; return; }
      if (progressModal && progressModal.style.display !== 'none') { progressModal.style.display = 'none'; return; }
      if (practiceModal && practiceModal.style.display !== 'none') { practiceModal.style.display = 'none'; return; }
      if (geminiModal && geminiModal.style.display !== 'none') { closeGeminiModal(); return; }
      if (sessionScreen && sessionScreen.style.display !== 'none') {
        if (window.PracticeRunner) window.PracticeRunner.requestExit();
        return;
      }
      // Never leave the site from the first app screen.
      if ((state.appHistoryIndex || 0) > 0) {
        window.history.back();
      }
    };
    const handleAppForward = (e) => {
      e.stopPropagation();
      window.history.forward();
    };
    ['headerNavBackBtn', 'mobileNavBackBtn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', handleAppBack);
    });
    ['headerNavForwardBtn', 'mobileNavForwardBtn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', handleAppForward);
    });
    syncHistoryUi();

    // Brand Link returns home
    if (el.brandHomeLink) {
      el.brandHomeLink.addEventListener('click', showExamSelector);
      el.brandHomeLink.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') showExamSelector();
      });
    }

    // Back to subjects (browser-style back when possible)
    if (el.backToSubjectsBtn) {
      el.backToSubjectsBtn.addEventListener('click', () => {
        if ((state.appHistoryIndex || 0) > 0) {
          window.history.back();
        } else {
          returnToSubjectsList({ fromHistory: true });
        }
      });
    }

    // Two-Step Mode Choice Cards
    if (el.chooseNotesCard) {
      el.chooseNotesCard.addEventListener('click', showNotesView);
      el.chooseNotesCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showNotesView();
        }
      });
    }

    // 5 Chapter Accordions Controls & Filters
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

    // Filters dropdown (year checkboxes, Part radio, repeated-only)
    if (el.pyqFilterToggle) {
      el.pyqFilterToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFilterPanel();
      });
    }

    if (el.pyqFilterPanel) {
      el.pyqFilterPanel.addEventListener('change', updateApplyFilterCount);
      el.pyqFilterPanel.addEventListener('input', updateApplyFilterCount);
    }

    if (el.applyFiltersBtn) {
      el.applyFiltersBtn.addEventListener('click', applyFiltersFromPanel);
    }

    if (el.resetFiltersBtn) {
      el.resetFiltersBtn.addEventListener('click', resetFilters);
    }

    // Close the panel on outside click / Escape
    document.addEventListener('click', (e) => {
      if (!el.pyqFilterPanel || el.pyqFilterPanel.hidden) return;
      if (el.pyqFilterPanel.contains(e.target) || (el.pyqFilterToggle && el.pyqFilterToggle.contains(e.target))) return;
      closeFilterPanel();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.pyqFilterPanel && !el.pyqFilterPanel.hidden) {
        closeFilterPanel();
        if (el.pyqFilterToggle) el.pyqFilterToggle.focus();
      }
    });

    if (el.choosePyqsCard) {
      el.choosePyqsCard.addEventListener('click', showPyqsView);
      el.choosePyqsCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showPyqsView();
        }
      });
    }

    // Mode Switcher Bar Tabs
    if (el.tabSwitchToNotes) {
      el.tabSwitchToNotes.addEventListener('click', showNotesView);
    }
    if (el.tabSwitchToPyqs) {
      el.tabSwitchToPyqs.addEventListener('click', showPyqsView);
    }
    if (el.switchModeToSelectorBtn) {
      el.switchModeToSelectorBtn.addEventListener('click', showModeSelector);
    }

    // Notes Chapter Dropdown
    if (el.notesChapterSelect) {
      el.notesChapterSelect.addEventListener('change', (e) => {
        state.notesChapterFilter = e.target.value;
        renderNotesDivision();
      });
    }

    // Notes Reader: delegate "Read" clicks from the notes list
    if (el.notesListContainer) {
      el.notesListContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.note-read-btn');
        if (!btn) return;
        const noteId = btn.getAttribute('data-note-id');
        if (noteId) openNotesReader(noteId);
      });
    }
    if (el.closeNotesReaderBtn) {
      el.closeNotesReaderBtn.addEventListener('click', closeNotesReader);
    }
    if (el.notesReaderModal) {
      el.notesReaderModal.addEventListener('click', (e) => {
        if (e.target === el.notesReaderModal) closeNotesReader();
      });
    }
    if (el.notesReaderSearch) {
      el.notesReaderSearch.addEventListener('input', (e) => {
        const value = e.target.value;
        clearTimeout(notesReaderState.searchTimer);
        notesReaderState.searchTimer = setTimeout(() => runNotesSearch(value), 160);
      });
    }
    if (el.notesReaderTopBtn) {
      el.notesReaderTopBtn.addEventListener('click', () => {
        if (el.notesReaderBody) {
          el.notesReaderBody.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.notesReaderModal && el.notesReaderModal.style.display !== 'none') {
        closeNotesReader();
      }
    });



    // Question Modal Close
    if (el.closeQuestionModalBtn) {
      el.closeQuestionModalBtn.addEventListener('click', closeQuestionModal);
    }
    if (el.questionModal) {
      el.questionModal.addEventListener('click', (e) => {
        if (e.target === el.questionModal) closeQuestionModal();
      });
    }
    if (el.modalSolveAiBtn) {
      el.modalSolveAiBtn.addEventListener('click', () => {
        if (state.currentQuestion) {
          closeQuestionModal();
          solveQuestionWithGemini(state.currentQuestion);
        }
      });
    }

    // Contribute Buttons (in both Notes and subtle PYQ divisions)
    document.querySelectorAll('.btn-contribute, .btn-contribute-subtle').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-contrib-type') || 'Notes';
        promptContribute(type);
      });
    });

    // Warning Modal buttons
    if (el.closeWarningModalBtn) {
      el.closeWarningModalBtn.addEventListener('click', () => {
        el.contribWarningModal.style.display = 'none';
      });
    }
    if (el.cancelContribBtn) {
      el.cancelContribBtn.addEventListener('click', () => {
        el.contribWarningModal.style.display = 'none';
      });
    }
    if (el.agreeContribBtn) {
      el.agreeContribBtn.addEventListener('click', proceedToUploadForm);
    }

    // Upload Modal buttons
    if (el.closeUploadModalBtn) {
      el.closeUploadModalBtn.addEventListener('click', () => {
        el.contribUploadModal.style.display = 'none';
      });
    }
    if (el.cancelUploadBtn) {
      el.cancelUploadBtn.addEventListener('click', () => {
        el.contribUploadModal.style.display = 'none';
      });
    }

    // File Dropzone / Picker
    if (el.filePickerBox && el.contribFilesInput) {
      el.filePickerBox.addEventListener('click', () => {
        el.contribFilesInput.click();
      });
      el.contribFilesInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleFilesChosen(e.target.files);
        }
      });
    }

    // Upload Form Submit
    if (el.contribUploadForm) {
      el.contribUploadForm.addEventListener('submit', submitContribution);
    }

    if (el.copyContribMessageBtn) {
      el.copyContribMessageBtn.addEventListener('click', copyContributionMessage);
    }
    if (el.contribDoneBtn) {
      el.contribDoneBtn.addEventListener('click', () => {
        el.contribUploadModal.style.display = 'none';
        if (el.contribUploadForm) el.contribUploadForm.hidden = false;
        if (el.contribHandoffPanel) el.contribHandoffPanel.hidden = true;
      });
    }

    // Floating AI Assistant Button & Modal
    if (el.floatingGeminiBtn) {
      el.floatingGeminiBtn.addEventListener('click', openGeminiModal);
    }
    if (el.closeGeminiModalBtn) {
      el.closeGeminiModalBtn.addEventListener('click', closeGeminiModal);
    }
    if (el.geminiModal) {
      el.geminiModal.addEventListener('click', (e) => {
        if (e.target === el.geminiModal) closeGeminiModal();
      });
    }

    // Gemini Chat Sidebar Controls
    if (el.newChatBtn) {
      el.newChatBtn.addEventListener('click', createNewGeminiChat);
    }
    if (el.clearAllHistoryBtn) {
      el.clearAllHistoryBtn.addEventListener('click', clearAllGeminiChats);
    }
    if (el.toggleGeminiSidebarBtn) {
      el.toggleGeminiSidebarBtn.addEventListener('click', toggleGeminiSidebar);
    }
    if (el.closeGeminiSidebarBtn) {
      el.closeGeminiSidebarBtn.addEventListener('click', closeGeminiSidebar);
    }
    if (el.toggleSuggestionsBtn) {
      el.toggleSuggestionsBtn.addEventListener('click', toggleSuggestions);
    }

    // Dismiss sidebar when tapping outside on mobile
    document.addEventListener('click', (e) => {
      if (el.geminiSidebar && el.geminiSidebar.classList.contains('open')) {
        if (!el.geminiSidebar.contains(e.target) && el.toggleGeminiSidebarBtn && !el.toggleGeminiSidebarBtn.contains(e.target)) {
          closeGeminiSidebar();
        }
      }
    });

    if (el.geminiQueryForm) {
      el.geminiQueryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleGeminiQuery(el.geminiQueryInput.value);
      });
    }

    // Gemini Prompt Cards (Landing screen quick queries)
    document.querySelectorAll('.gemini-prompt-card, .prompt-chip').forEach(card => {
      card.addEventListener('click', () => {
        const query = card.getAttribute('data-query');
        if (query) {
          if (el.geminiQueryInput) el.geminiQueryInput.value = query;
          handleGeminiQuery(query);
        }
      });
    });

    // Walkthrough Tour Buttons
    if (el.tourNextBtn) {
      el.tourNextBtn.addEventListener('click', nextTourStep);
    }
    if (el.tourPrevBtn) {
      el.tourPrevBtn.addEventListener('click', prevTourStep);
    }
    if (el.tourSkipBtn) {
      el.tourSkipBtn.addEventListener('click', endTour);
    }
    if (el.restartTourBtn) {
      el.restartTourBtn.addEventListener('click', startOnboardingTour);
    }
    if (el.tourOverlay) {
      // Stop wheel scrolling over the dimmed page, but let the sheet itself scroll.
      el.tourOverlay.addEventListener('wheel', (e) => {
        if (e.target.closest && e.target.closest('.tour-tooltip')) return;
        e.preventDefault();
      }, { passive: false });
    }

    // Reposition tour spotlight, tooltip & update responsive labels on window resize
    window.addEventListener('resize', () => {
      updateTopDriveBtnLabel();
      handleTourScroll();
    });

    // Global ESC key to close open modals & active tour
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (el.geminiSidebar && el.geminiSidebar.classList.contains('open')) {
          closeGeminiSidebar();
          return;
        }
        if (el.tourTooltip && el.tourTooltip.style.display !== 'none') endTour();
        if (el.questionModal && el.questionModal.style.display === 'flex') closeQuestionModal();
        if (el.contribWarningModal && el.contribWarningModal.style.display === 'flex') el.contribWarningModal.style.display = 'none';
        if (el.contribUploadModal && el.contribUploadModal.style.display === 'flex') el.contribUploadModal.style.display = 'none';
        if (el.geminiModal && el.geminiModal.style.display === 'flex') closeGeminiModal();
      }
    });
  }

  // -------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------
  function showToast(message, options) {
    if (!el.toastContainer) return null;
    const opts = options || {};
    const duration = Number(opts.duration) > 0 ? Number(opts.duration) : 3500;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const toast = document.createElement('div');
    toast.className = 'toast-msg' + (opts.actionLabel ? ' toast-has-action' : '');
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.setProperty('--toast-duration', duration + 'ms');
    toast.innerHTML = `<i class="fa-solid fa-circle-info" aria-hidden="true"></i> <span class="toast-text">${escapeHtml(message)}</span>`;
    if (!reducedMotion) {
      const drain = document.createElement('span');
      drain.className = 'toast-progress';
      drain.setAttribute('aria-hidden', 'true');
      if (Number(opts.drainOffset) > 0) {
        drain.style.animationDelay = `-${Number(opts.drainOffset)}ms`;
      }
      toast.appendChild(drain);
    }

    let closed = false;
    let timerId = null;
    function closeToast(immediate) {
      if (closed) return;
      closed = true;
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      toast.classList.add('toast-leaving');
      setTimeout(() => toast.remove(), immediate || reducedMotion ? 0 : 250);
    }

    if (opts.actionLabel) {
      const action = document.createElement('button');
      action.type = 'button';
      action.className = 'toast-action';
      action.textContent = opts.actionLabel;
      action.addEventListener('click', () => {
        if (typeof opts.onAction === 'function') opts.onAction();
        closeToast();
      });
      toast.appendChild(action);
    }

    el.toastContainer.appendChild(toast);
    if (!opts.managed) {
      timerId = setTimeout(() => closeToast(), duration);
    }
    return { close: closeToast, element: toast };
  }

  // The revision hint is deliberately rate-limited: it may appear at most
  // twice per browser session. Leaving the subject list pauses its remaining
  // time; returning to the list resumes it. Reaching Quiz Time ends it.
  const REVISION_HINT_MS = 5000;
  const REVISION_HINT_LIMIT = 2;
  const REVISION_HINT_COUNT_KEY = 'mgit_revision_hint_count';
  const revisionHintState = {
    active: false,
    remaining: 0,
    deadline: 0,
    handle: null,
    timerId: null
  };

  function getRevisionHintCount() {
    try {
      return Number(sessionStorage.getItem(REVISION_HINT_COUNT_KEY)) || 0;
    } catch (e) {
      return 0;
    }
  }

  function setRevisionHintCount(count) {
    try {
      sessionStorage.setItem(REVISION_HINT_COUNT_KEY, String(count));
    } catch (e) {}
  }

  function canShowRevisionHint() {
    return state.currentView === 'exam'
      && !state.currentSubject
      && el.practiceFunDivision
      && el.practiceFunDivision.style.display !== 'none';
  }

  function clearRevisionHintTimer() {
    if (revisionHintState.timerId) {
      clearTimeout(revisionHintState.timerId);
      revisionHintState.timerId = null;
    }
  }

  function closeRevisionHintToast(immediate) {
    if (revisionHintState.handle) {
      revisionHintState.handle.close(immediate);
      revisionHintState.handle = null;
    }
  }

  function pauseRevisionHint() {
    if (!revisionHintState.active) return;
    revisionHintState.remaining = Math.max(0, revisionHintState.deadline - Date.now());
    clearRevisionHintTimer();
    revisionHintState.active = false;
    closeRevisionHintToast(true);
  }

  function dismissRevisionHint() {
    clearRevisionHintTimer();
    revisionHintState.active = false;
    revisionHintState.remaining = 0;
    closeRevisionHintToast(true);
  }

  function renderRevisionHint() {
    if (!canShowRevisionHint()) return;
    const remaining = Math.max(250, revisionHintState.remaining);
    revisionHintState.active = true;
    revisionHintState.deadline = Date.now() + remaining;
    revisionHintState.handle = showToast('Scroll down for Revision', {
      duration: REVISION_HINT_MS,
      managed: true,
      drainOffset: Math.max(0, REVISION_HINT_MS - remaining),
      actionLabel: '↓ See now',
      onAction: () => {
        dismissRevisionHint();
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = reduce ? 'auto' : 'smooth';
        const revision = document.getElementById('practiceFunDivision');
        if (revision && revision.style.display !== 'none') {
          revision.scrollIntoView({ behavior, block: 'center' });
        } else {
          const subjects = document.getElementById('subjectsSection');
          if (subjects) subjects.scrollIntoView({ behavior, block: 'start' });
        }
      }
    });

    if (!revisionHintState.handle) {
      revisionHintState.active = false;
      return;
    }

    revisionHintState.timerId = setTimeout(() => {
      revisionHintState.active = false;
      revisionHintState.remaining = 0;
      revisionHintState.timerId = null;
      closeRevisionHintToast(true);
    }, remaining);
  }

  function showRevisionHintToast() {
    if (!canShowRevisionHint() || revisionHintState.active) return;
    if (revisionHintState.remaining > 0) {
      renderRevisionHint();
      return;
    }
    const count = getRevisionHintCount();
    if (count >= REVISION_HINT_LIMIT) return;
    setRevisionHintCount(count + 1);
    revisionHintState.remaining = REVISION_HINT_MS;
    renderRevisionHint();
  }

  function resumeRevisionHint() {
    if (!canShowRevisionHint() || revisionHintState.active) return;
    if (revisionHintState.remaining > 0) renderRevisionHint();
  }

  function setupRevisionHintObserver() {
    const target = el.practiceFunDivision;
    if (!target) return;

    // The observer catches normal scrolling; the scroll listener is a cheap
    // fallback for browsers that deliver observer callbacks late.
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!revisionHintState.active) return;
        if (entries.some(entry => entry.isIntersecting)) dismissRevisionHint();
      }, { threshold: 0.18 });
      observer.observe(target);
    }

    window.addEventListener('scroll', () => {
      if (!revisionHintState.active) return;
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.78 && rect.bottom > 0) {
        dismissRevisionHint();
      }
    }, { passive: true });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // -------------------------------------------------------------
  // Website Rating Popup (20 Seconds of Active Activity & 5 Stars)
  // -------------------------------------------------------------
  function initRatingPopup() {
    const RATING_THRESHOLD_MS = 20000; // 20 seconds of active usage
    const DISMISS_KEY = 'mgit_rating_dismissed';
    const RATED_KEY = 'mgit_site_rated';

    // Hook up the footer "Rate now" button permanently
    const footerRateBtn = document.getElementById('footerRateBtn');
    if (footerRateBtn) {
      footerRateBtn.addEventListener('click', () => {
        localStorage.setItem(RATED_KEY, '1');
        sessionStorage.setItem(DISMISS_KEY, '1');
        dismissPopup();
      });
    }

    // If user already rated or dismissed during session, do not show popup
    if (localStorage.getItem(RATED_KEY) === '1' || sessionStorage.getItem(DISMISS_KEY) === '1') {
      return;
    }

    let activeTimeMs = 0;
    let lastActiveTime = null;
    let timerInterval = null;
    let hasStarted = false;
    let isShowing = false;

    function dismissPopup() {
      sessionStorage.setItem(DISMISS_KEY, '1');
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      const popup = document.getElementById('ratingPopup');
      if (popup) {
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(12px) scale(0.95)';
        setTimeout(() => popup.remove(), 350);
      }
      if (window.MGITPopups) window.MGITPopups.closed('rating');
    }

    function recordRated() {
      localStorage.setItem(RATED_KEY, '1');
      sessionStorage.setItem(DISMISS_KEY, '1');
      dismissPopup();
    }

    function showPopup() {
      if (isShowing || localStorage.getItem(RATED_KEY) === '1' || sessionStorage.getItem(DISMISS_KEY) === '1') return;
      if (document.getElementById('ratingPopup')) return;

      // Never interrupt the tour, a modal, the AI chat or practice.
      const opened = window.MGITPopups
        ? window.MGITPopups.request('rating', renderRatingPopup)
        : (renderRatingPopup(), true);
      if (!opened) return; // The 1-second timer will retry when the screen is free.

      isShowing = true;
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }

    function renderRatingPopup() {
      const popup = document.createElement('div');
      popup.id = 'ratingPopup';
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-label', "Rate MGIT PYQ Hub");
      popup.innerHTML = `
        <div class="rating-popup-card">
          <div class="rating-popup-stars" aria-label="5 stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h4 class="rating-popup-headline">Help make this hub better for everyone ⭐</h4>
          <p class="rating-popup-msg">Taking just <strong>10 seconds</strong> to drop a quick rating helps improve paper coverage and the study experience for every student.</p>
          <div class="rating-popup-actions">
            <a href="https://tally.so/r/8N1QaP" target="_blank" rel="noopener noreferrer" class="rating-btn-primary" id="rateNowBtn">
              <i class="fa-solid fa-star" style="font-size:11px; margin-right:4px;"></i> Rate now
            </a>
            <button type="button" class="rating-btn-secondary" id="rateLaterBtn">Later</button>
          </div>
        </div>
      `;
      document.body.appendChild(popup);

      requestAnimationFrame(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0) scale(1)';
      });

      const rateNowBtn = popup.querySelector('#rateNowBtn');
      const rateLaterBtn = popup.querySelector('#rateLaterBtn');

      if (rateNowBtn) {
        rateNowBtn.addEventListener('click', () => {
          recordRated();
        });
      }

      if (rateLaterBtn) {
        rateLaterBtn.addEventListener('click', () => {
          dismissPopup();
        });
      }
    }

    function updateActiveTime() {
      if (document.hidden || !lastActiveTime) return;
      const now = Date.now();
      const delta = now - lastActiveTime;
      lastActiveTime = now;
      if (delta > 0 && delta <= 2000) {
        activeTimeMs += delta;
      }
      if (activeTimeMs >= RATING_THRESHOLD_MS) {
        showPopup();
      }
    }

    function startTimer() {
      if (hasStarted || localStorage.getItem(RATED_KEY) === '1' || sessionStorage.getItem(DISMISS_KEY) === '1') return;
      hasStarted = true;
      lastActiveTime = Date.now();

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          lastActiveTime = null;
        } else {
          lastActiveTime = Date.now();
        }
      });

      timerInterval = setInterval(updateActiveTime, 1000);
    }

    // Start on first user interaction
    const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
    const handleFirstInteraction = () => {
      startTimer();
      interactionEvents.forEach(evt => window.removeEventListener(evt, handleFirstInteraction));
    };
    interactionEvents.forEach(evt => window.addEventListener(evt, handleFirstInteraction, { passive: true, once: true }));
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

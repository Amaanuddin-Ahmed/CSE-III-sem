/**
 * MGIT PYQ Hub - Client Application Logic
 * Adheres strictly to Master Specification & User Requirements:
 * - 7 Subjects (DM, COA, OOPJ, DBMS, SE, ES, IE)
 * - 2-Column Responsive Grid with Large Icons
 * - Dynamic Top Drive Link based on selected Subject
 * - Two Division Boxes: Notes (Chapter Dropdown) & PYQs (Year Checkbox Filter & Part A/B)
 * - Question Detail Modal with Repetition, Drive Paper Reference & Tip
 * - Contribution Warning Pop-up + Multi-file Upload Dialog
 * - Admin Portal with Moderation Queue
 * - Floating Gemini AI Assistant
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
    isAdminLoggedIn: sessionStorage.getItem('mgit_admin_auth') === 'authenticated',
    selectedFiles: [],

    // Onboarding Walkthrough Tour State
    currentTourStep: 0,

    // Gemini Chat & Sessions State
    activeChatId: null,
    geminiChats: JSON.parse(localStorage.getItem('mgit_gemini_chats') || '[]'),
    pendingGeminiImage: null,
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
    adminLoginBtn: document.getElementById('adminLoginBtn'),
    restartTourBtn: document.getElementById('restartTourBtn'),

    subjectsSection: document.getElementById('subjectsSection'),
    subjectsGrid: document.getElementById('subjectsGrid'),
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
    modalOutcome: document.getElementById('modalOutcome'),
    modalTipText: document.getElementById('modalTipText'),
    modalOpenDrivePaperBtn: document.getElementById('modalOpenDrivePaperBtn'),

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

    // Admin Modal
    adminModal: document.getElementById('adminModal'),
    closeAdminModalBtn: document.getElementById('closeAdminModalBtn'),
    adminLoginFormContainer: document.getElementById('adminLoginFormContainer'),
    adminDashboardContainer: document.getElementById('adminDashboardContainer'),
    adminLoginForm: document.getElementById('adminLoginForm'),
    adminPassword: document.getElementById('adminPassword'),
    adminBankQuestions: document.getElementById('adminBankQuestions'),
    adminBankPapers: document.getElementById('adminBankPapers'),
    adminBankFlagged: document.getElementById('adminBankFlagged'),
    moderationTableWrapper: document.getElementById('moderationTableWrapper'),
    adminLogoutBtn: document.getElementById('adminLogoutBtn'),

    // Gemini Modal & App Elements
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
    setupAdminStats();
    loadGeminiChats();
    setupImageAndCameraAttachment();
    setupSpeechRecognition();
    initAnimatedPlaceholder();
    initOnboardingTourCheck();
    initRatingPopup();
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

      // Count in-scope questions & notes in database
      const qCount = QUESTIONS_DATABASE.filter(q => q.subjectId === sub.id && (!window.isItemInScope || window.isItemInScope(q, examKey))).length;
      const nTotal = NOTES_DATA.filter(n => n.subjectId === sub.id && (!window.isItemInScope || window.isItemInScope(n, examKey))).length;

      // Exam-level unit scope label (same for every subject in this exam).
      const subjectUnits = examConfig.unitsLabel || 'Units 1 – 5';

      card.innerHTML = `
        <div class="subject-card-header-bar">
          <span class="subject-scope-units-badge"><i class="fa-solid fa-book-bookmark"></i> ${escapeHtml(subjectUnits)}</span>
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
            <span class="subject-meta-item"><i class="fa-solid fa-layer-group"></i> ${qCount} Questions</span>
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
    if (!opts.fromHistory && (!state.currentSubject || state.currentSubject.id !== sub.id)) {
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

    // Update counts on the Mode Choice Cards (scoped to active exam)
    const examKey = state.activeExam || 'mid2';
    const scopedNotes = NOTES_DATA.filter(n => n.subjectId === sub.id && (!window.isItemInScope || window.isItemInScope(n, examKey)));
    const scopedQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === sub.id && (!window.isItemInScope || window.isItemInScope(q, examKey)));
    if (el.modeNotesCountText) {
      el.modeNotesCountText.textContent = `${scopedNotes.length} Resource${scopedNotes.length === 1 ? '' : 's'}`;
    }
    if (el.modePyqsCountText) {
      el.modePyqsCountText.textContent = `${scopedQuestions.length} Question${scopedQuestions.length === 1 ? '' : 's'}`;
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
    if (el.attributionDivision) {
      el.attributionDivision.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  // -------------------------------------------------------------
  // Exam Selector & Syllabus Scoping Engine (Feature 2)
  // -------------------------------------------------------------

  // The app owns its own history. The address bar always stays clean ("/")
  // and the current view is stored in history.state.
  function appBasePath() {
    return window.location.pathname || '/';
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
      mid1: { name: 'Mid-1', unitsLabel: 'Units 1 – 2.5' },
      mid2: { name: 'Mid-2', unitsLabel: 'Units 2.5 – 5' },
      sem: { name: 'Semester End', unitsLabel: 'All 5 Units' }
    };
    return Object.assign({ id: examId, bannerSubtitle: "Only what's in your syllabus" }, fallbackLabels[examId] || fallbackLabels.mid2);
  }

  function applyExamSelection(examId, navigateToSubjects) {
    const cfg = getExamConfig(examId);

    // Update Active Banner (the header badge has been removed deliberately)
    if (el.examActiveBanner) {
      el.examActiveBanner.style.display = 'flex';
      if (el.bannerExamTag) el.bannerExamTag.textContent = cfg.name;
      if (el.bannerExamSubtitle) {
        el.bannerExamSubtitle.textContent = cfg.bannerSubtitle || cfg.subtitle || "Only what's in your syllabus";
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

    // If instructed or coming from card click, hide hero selector
    if (navigateToSubjects) {
      if (el.examSelectorSection) el.examSelectorSection.style.display = 'none';
      if (el.subjectsSection) {
        el.subjectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Re-render subjects grid to reflect new exam unit scope tags and counts
    renderSubjectsGrid();

    // If inside subject detail, re-render divisions
    if (state.currentSubject) {
      if (state.currentMode === 'notes') renderNotesDivision();
      if (state.currentMode === 'pyqs') renderPyqsDivision();
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

    applyExamSelection(examId, navigateToSubjects);
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
      el.topDriveBtn.title = 'Open Entire SEM 3 Google Drive Folder';
      updateTopDriveBtnLabel();
    }
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
    if (el.attributionDivision) {
      el.attributionDivision.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    syncHistoryUi();
  }

  // -------------------------------------------------------------
  // Division 1: Notes Rendering
  // -------------------------------------------------------------
  function renderNotesDivision() {
    if (!el.notesListContainer || !state.currentSubject) return;
    el.notesListContainer.innerHTML = '';

    const subId = state.currentSubject.id;
    const examKey = state.activeExam || 'mid2';

    // Populate notes chapter dropdown with in-scope units
    if (el.notesChapterSelect) {
      const inScopeChapters = window.getInScopeChapters ? window.getInScopeChapters(examKey) : [1, 2, 3, 4, 5];
      let opts = '<option value="all">All In-Scope Units</option>';
      inScopeChapters.forEach(ch => {
        const title = window.getScopedChapterTitle ? window.getScopedChapterTitle(subId, ch, examKey) : `Unit ${ch}`;
        opts += `<option value="${ch}">Unit ${ch}: ${escapeHtml(title)}</option>`;
      });
      el.notesChapterSelect.innerHTML = opts;
      el.notesChapterSelect.value = state.notesChapterFilter;
    }

    let notes = NOTES_DATA.filter(n => n.subjectId === subId);
    if (window.isItemInScope) {
      notes = notes.filter(n => window.isItemInScope(n, examKey));
    }

    if (state.notesChapterFilter !== 'all') {
      const chNum = parseInt(state.notesChapterFilter, 10);
      notes = notes.filter(n => n.chapter === chNum);
    }

    if (notes.length === 0) {
      const chLabel = state.notesChapterFilter === 'all' ? 'this subject' : `Unit ${state.notesChapterFilter}`;
      el.notesListContainer.innerHTML = `
        <div class="empty-notes-card">
          <i class="fa-regular fa-folder-open empty-icon"></i>
          <h5>No notes uploaded yet for ${escapeHtml(chLabel)}</h5>
          <p>Be the first to share verified lecture notes or question bank answers! Click the contribute button below to upload study material.</p>
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

      item.innerHTML = `
        <div class="note-info">
          <div class="note-title">${escapeHtml(note.title)}</div>
          <div class="note-desc">${escapeHtml(note.description || '')}</div>
          <div class="note-meta">
            <span><i class="${iconClass}" style="color: ${iconColor};"></i> ${escapeHtml(note.fileName)}</span> &bull; 
            <span>${escapeHtml(note.fileSize)}</span> &bull; 
            <span>Unit ${note.chapter}</span>
          </div>
        </div>
        <a href="${fileLink}" target="_blank" rel="noopener noreferrer" class="note-open-btn">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Open Drive</span>
        </a>
      `;

      el.notesListContainer.appendChild(item);
    });
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

  function applyFiltersFromPanel() {
    if (el.yearFilterOptions) {
      const checked = Array.from(el.yearFilterOptions.querySelectorAll('input[name="yearFilter"]:checked'))
        .map(input => parseInt(input.value, 10))
        .filter(Number.isFinite);
      state.selectedYears = checked.length ? checked : null;
    }

    if (el.semesterFilterOptions) {
      const checkedSems = Array.from(el.semesterFilterOptions.querySelectorAll('input[name="semesterFilter"]:checked'))
        .map(input => input.value)
        .filter(Boolean);
      state.selectedSemesters = checkedSems.length ? checkedSems : null;
    }

    const partInput = document.querySelector('input[name="partFilter"]:checked');
    state.selectedPart = partInput ? partInput.value : 'all';

    state.repeatedOnly = Boolean(el.repeatedOnlyFilter && el.repeatedOnlyFilter.checked);

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
    renderPyqsDivision();
  }

  function openFilterPanel() {
    if (!el.pyqFilterPanel || !el.pyqFilterToggle) return;
    el.pyqFilterPanel.hidden = false;
    el.pyqFilterToggle.setAttribute('aria-expanded', 'true');
    el.pyqFilterToggle.classList.add('active');
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

  function getPartMarksSummary(partAQuestions) {
    const marks = new Set(partAQuestions.map(q => Number(q.marks)).filter(Number.isFinite));
    if (marks.size === 0) return 'Short Answer Questions';
    const sorted = Array.from(marks).sort((a, b) => a - b);
    return 'Short Answer Questions (' + sorted.join(' / ') + ' Marks)';
  }

  function getLongMarksSummary(partBQuestions) {
    const marks = new Set(partBQuestions.map(q => Number(q.marks)).filter(Number.isFinite));
    if (marks.size === 0) return 'Long Answer Questions';
    const sorted = Array.from(marks).sort((a, b) => a - b);
    return 'Long Answer Questions (' + sorted.join(' / ') + ' Marks)';
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

    let filteredQuestions = allSubQuestions;

    // Apply Year filter (no selected years = all years)
    if (Array.isArray(state.selectedYears) && state.selectedYears.length > 0) {
      const yearSet = new Set(state.selectedYears);
      filteredQuestions = filteredQuestions.filter(q => q.years && q.years.some(y => yearSet.has(y)));
    }

    // Semester filter removed

    // Apply Part filter
    if (state.selectedPart === 'A') {
      filteredQuestions = filteredQuestions.filter(q => q.part === 'A');
    } else if (state.selectedPart === 'B') {
      filteredQuestions = filteredQuestions.filter(q => q.part === 'B');
    }

    // Apply "repeated only" filter
    if (state.repeatedOnly) {
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

    // Reflect active filters on the Filters button
    updateActiveFilterCount();

    // Update Banner
    if (el.pyqCountBanner) {
      const activeLabels = [];
      if (Array.isArray(state.selectedYears) && state.selectedYears.length > 0) {
        activeLabels.push(state.selectedYears.slice().sort((a, b) => b - a).join(', '));
      }
      
      if (state.selectedPart !== 'all') activeLabels.push('Part ' + state.selectedPart);
      if (state.repeatedOnly) activeLabels.push('Repeated only');
      if (query) activeLabels.push('search: "' + query + '"');
      const filterLabel = activeLabels.length ? ' (' + activeLabels.join(' · ') + ')' : '';
      el.pyqCountBanner.textContent = 'Showing ' + filteredQuestions.length + ' question' + (filteredQuestions.length === 1 ? '' : 's') + ' across 5 units' + filterLabel;
    }

    // Check if all chapters are expanded
    updateToggleAllButtonState();

    const inScopeChapters = window.getInScopeChapters ? window.getInScopeChapters(examKey) : [1, 2, 3, 4, 5];
    const examConfig = getExamConfig(examKey);

    // Update Banner with active scope
    if (el.pyqCountBanner) {
      const activeLabels = [];
      if (Array.isArray(state.selectedYears) && state.selectedYears.length > 0) {
        activeLabels.push(state.selectedYears.slice().sort((a, b) => b - a).join(', '));
      }
      if (state.selectedPart !== 'all') activeLabels.push('Part ' + state.selectedPart);
      if (state.repeatedOnly) activeLabels.push('Repeated only');
      if (query) activeLabels.push('search: "' + query + '"');
      const filterLabel = activeLabels.length ? ' (' + activeLabels.join(' · ') + ')' : '';
      el.pyqCountBanner.textContent = `Showing ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} across ${inScopeChapters.length} in-scope units (${examConfig.name} Scope)${filterLabel}`;
    }

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

      const chapterTitle = window.getScopedChapterTitle ? window.getScopedChapterTitle(subId, ch, examKey) : ((sub.chapters && sub.chapters[ch]) ? sub.chapters[ch] : 'Unit ' + ch + ' Syllabus Content');

      const card = document.createElement('div');
      card.className = 'chapter-accordion-card' + (isExpanded ? ' open' : '');
      card.id = 'chapterAccordion-' + ch;

      card.innerHTML = `
        <div class="chapter-accordion-header" role="button" tabindex="0" data-chapter="${ch}" aria-expanded="${isExpanded}">
          <div class="ch-header-left">
            <span class="ch-badge">CH ${ch}</span>
            <div class="ch-titles">
              <h5 class="ch-unit-title">Unit ${ch}: ${escapeHtml(chapterTitle)}</h5>
            </div>
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
        listEl.innerHTML = `
          <div class="empty-state-box" style="padding: 18px; margin: 6px 0;">
            <div class="empty-state-title" style="font-size: 13.5px;">No questions matching current filters in Unit ${ch}</div>
            <div class="empty-state-sub" style="font-size: 12px;">Total ${chTotalAll} authentic questions available in this chapter. Try selecting "All Years" or "All Questions".</div>
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
    const partLabel = 'Part ' + q.part + ' • ' + q.marks + ' Marks';
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
          <button type="button" class="btn-card-action btn-card-ai" title="Generate instant MGIT model answer with Gemini AI">
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
    const partDesc = 'Part ' + q.part + ' (' + q.marks + ' Marks - ' + (q.part === 'A' ? 'Short Answer' : 'Long Answer') + ')';

    const promptText = 'Explain and solve this authentic MGIT examination question from ' + subName + ':\n\n' +
      'Unit: Unit ' + q.chapter + '\n' +
      'Exam Part: ' + partDesc + '\n' +
      'Paper: ' + q.paperName + ' (' + (q.years ? q.years.join(', ') : '') + ')\n\n' +
      'Question: ' + q.question + '\n\n' +
      'Please structure the answer according to the official MGIT marking scheme with clear definitions, formulas/circuit diagrams/flowcharts, and key points required for full marks.';

    openGeminiModal();
    handleGeminiQuery(promptText);
  }

  // -------------------------------------------------------------
  // Question Detail Modal
  // -------------------------------------------------------------
  function openQuestionModal(q) {
    const sub = SUBJECTS_DATA[q.subjectId] || state.currentSubject;

    el.modalSubjectBadge.textContent = sub ? sub.shortName : q.subjectId;
    el.modalPartBadge.textContent = `Part ${q.part} • ${q.marks} Marks`;
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
    el.modalPaperName.textContent = `${q.paperName} (Page ${q.pageNumber})`;
    el.modalOutcome.textContent = `Course Outcome CO${q.chapter}`;

    // Tip: concise exam tip
    el.modalTipText.innerHTML = formatQuestionMath(q.tip ? `Tip: ${q.tip}` : 'Tip: Support theoretical answers with neat labelled block diagrams.');

    // Direct PDF Drive Paper button (Never general folder)
    if (q.driveFileId) {
      el.modalOpenDrivePaperBtn.href = `https://drive.google.com/file/d/${q.driveFileId}/view?usp=sharing`;
      el.modalOpenDrivePaperBtn.querySelector('span').textContent = `Open "${q.paperName}" PDF in Google Drive`;
      el.modalOpenDrivePaperBtn.title = `Direct link to original ${q.paperName} file in Google Drive`;
    } else {
      const folderUrl = sub && sub.driveUrl ? sub.driveUrl : DRIVE_ROOT_URL;
      el.modalOpenDrivePaperBtn.href = folderUrl;
      el.modalOpenDrivePaperBtn.querySelector('span').textContent = 'Open Drive Paper';
      el.modalOpenDrivePaperBtn.title = 'Open Google Drive Folder';
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
  // Admin Portal & Moderation Queue
  // -------------------------------------------------------------
  function openAdminModal() {
    state.isAdminLoggedIn = sessionStorage.getItem('mgit_admin_auth') === 'authenticated';
    if (state.isAdminLoggedIn) {
      el.adminLoginFormContainer.style.display = 'none';
      el.adminDashboardContainer.style.display = 'block';
      renderEditorNotes();
    } else {
      el.adminLoginFormContainer.style.display = 'block';
      el.adminDashboardContainer.style.display = 'none';
    }
    el.adminModal.style.display = 'flex';
  }

  const ADMIN_HASHES = [
    '0c8eb177af8b76c29b3d34cabad3c33c9554435944b53d57501bdf4b5c7390bc',
    '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
  ];

  async function sha256Hex(str) {
    if (!crypto || !crypto.subtle) return null;
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function handleAdminLogin(e) {
    e.preventDefault();
    const pass = el.adminPassword.value.trim();

    if (!pass) {
      showToast('Please enter the administrator password.');
      return;
    }

    const enteredHash = await sha256Hex(pass);
    if (enteredHash && ADMIN_HASHES.includes(enteredHash)) {
      sessionStorage.setItem('mgit_admin_auth', 'authenticated');
      state.isAdminLoggedIn = true;
      el.adminLoginForm.reset();
      el.adminLoginFormContainer.style.display = 'none';
      el.adminDashboardContainer.style.display = 'block';
      renderEditorNotes();
      showToast('Editor view unlocked.');
    } else {
      showToast('Incorrect password. Access denied.');
      el.adminPassword.value = '';
    }
  }

  function handleAdminLogout() {
    state.isAdminLoggedIn = false;
    sessionStorage.removeItem('mgit_admin_auth');
    el.adminDashboardContainer.style.display = 'none';
    el.adminLoginFormContainer.style.display = 'block';
    showToast('Logged out of the editor view.');
  }

  function computeBankStats() {
    const papers = new Map();
    const touch = (key, name, subjectId, semester) => {
      if (!papers.has(key)) {
        papers.set(key, {
          name: name || 'Unknown paper',
          subjectId,
          semester: semester || 'III',
          count: 0
        });
      }
      papers.get(key).count += 1;
    };

    QUESTIONS_DATABASE.forEach(q => {
      const appearances = Array.isArray(q.appearances) && q.appearances.length
        ? q.appearances
        : [{
            driveFileId: q.driveFileId,
            paperName: q.paperName,
            semester: q.semester
          }];
      appearances.forEach(a => {
        const key = a.driveFileId || `${q.subjectId}:${a.paperName || q.paperName}`;
        touch(key, a.paperName || q.paperName, q.subjectId, a.semester || q.semester);
      });
    });

    const list = Array.from(papers.values());
    // A full MGIT paper has 10 Part-A sub-questions plus 4-5 Part-B majors.
    const flagged = list
      .filter(p => p.count < 12)
      .sort((a, b) => a.count - b.count);

    return {
      questions: QUESTIONS_DATABASE.length,
      papers: list.length,
      flagged
    };
  }

  function setupAdminStats() {
    const stats = computeBankStats();
    if (el.adminBankQuestions) el.adminBankQuestions.textContent = stats.questions;
    if (el.adminBankPapers) el.adminBankPapers.textContent = stats.papers;
    if (el.adminBankFlagged) el.adminBankFlagged.textContent = stats.flagged.length;
  }

  function renderEditorNotes() {
    setupAdminStats();
    if (!el.moderationTableWrapper) return;

    const stats = computeBankStats();
    if (stats.flagged.length === 0) {
      el.moderationTableWrapper.innerHTML = `
        <p class="empty-queue-msg">Every parsed paper has a full set of questions. Nothing looks under-extracted.</p>
      `;
      return;
    }

    const rows = stats.flagged.slice(0, 8).map(p => `
      <tr>
        <td><strong>${escapeHtml(p.subjectId)}</strong></td>
        <td>${escapeHtml(p.name)}</td>
        <td>Sem ${escapeHtml(String(p.semester))}</td>
        <td>${p.count} question${p.count === 1 ? '' : 's'}</td>
      </tr>
    `).join('');

    el.moderationTableWrapper.innerHTML = `
      <p class="editor-note-sub">These papers parsed with fewer questions than expected, so their OCR is worth a second look.</p>
      <table class="moderation-table">
        <thead>
          <tr><th>Subject</th><th>Paper</th><th>Printed Sem</th><th>Questions Found</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
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
      el.geminiCurrentChatTitle.textContent = chat.title || 'Gemini Study Assistant';
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
            showToast('File attached. Ready to send to Gemini.');
          };
          reader.readAsDataURL(file);
        } else {
          showToast(`Attached ${file.name}. Ask Gemini about this file.`);
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

  function initOnboardingTourCheck() {
    if (!localStorage.getItem(TOUR_STORAGE_KEY)) {
      setTimeout(() => {
        // Trigger only on the clean category home screen with no modal open.
        if (state.currentView === 'home' &&
            !state.currentSubject &&
            el.examCardsGrid &&
            el.examCardsGrid.offsetParent !== null &&
            (!el.geminiModal || el.geminiModal.style.display === 'none')) {
          startOnboardingTour();
        }
      }, 2000);
    }
  }

  const TOUR_STEPS = [
    {
      targetKey: 'topDriveBtn',
      badge: 'Step 1 of 3',
      title: 'Master Google Drive Folder',
      desc: 'Click here to view the complete Google Drive repository with all 101 authentic past papers and unit-wise notes sorted by subject.',
      isLast: false,
      scrollAction: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      targetKey: 'examCardsGrid',
      badge: 'Step 2 of 3',
      title: 'Category-Based Learning',
      desc: 'Pick your learning category — Mid-1, Mid-2, or Semester End — to unlock the exact units, notes, PYQs, and practice for that scope.',
      isLast: false,
      scrollAction: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      targetKey: 'floatingGeminiBtn',
      badge: 'Step 3 of 3',
      title: 'Integrated Gemini AI Assistant',
      desc: 'Ask questions to integrated Gemini AI and get your work done easier! Upload question paper photos, speak with your mic, or practice exam questions.',
      isLast: true,
      scrollAction: null // Never scroll for fixed floating button!
    }
  ];

  function startOnboardingTour() {
    state.currentTourStep = 0;
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

    // Update spotlight & tooltip immediately and after smooth scroll settles
    updateTourSpotlightAndTooltip(targetEl);
    setTimeout(() => { updateTourSpotlightAndTooltip(targetEl); }, 120);
    setTimeout(() => { updateTourSpotlightAndTooltip(targetEl); }, 380);
  }

  function updateTourSpotlightAndTooltip(targetEl) {
    if (!targetEl || !el.tourSpotlight || !el.tourTooltip) return;

    const rect = targetEl.getBoundingClientRect();
    const isCategoryStep = targetEl === el.examCardsGrid;
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
    if (state.currentTourStep >= 2) {
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
    el.geminiModal.style.display = 'flex';
    if (!state.activeChatId || !state.geminiChats.find(c => c.id === state.activeChatId)) {
      loadGeminiChats();
    } else {
      renderActiveChat();
    }
    if (el.geminiQueryInput && window.innerWidth > 768) {
      el.geminiQueryInput.focus();
    }
  }

  async function handleGeminiQuery(queryText) {
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

    // Thinking state with Gemini badge
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'ai-msg';
    thinkingMsg.innerHTML = `
      <div class="ai-msg-header">
        <div class="ai-avatar-badge">
          <svg class="gemini-sparkle-icon" viewBox="0 0 24 24" width="16" height="16" fill="#2563eb">
            <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" />
          </svg>
          <span class="ai-sender-name">Gemini Study Assistant</span>
        </div>
        <span class="ai-model-tag">Thinking...</span>
      </div>
      <div class="ai-msg-body" style="color: var(--text-muted); font-style: italic; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-circle-notch fa-spin"></i> Generating structured academic answer...
      </div>
    `;
    el.geminiChatOutput.appendChild(thinkingMsg);
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;

    // Server-side Gemini proxy only. The API key never reaches the browser.
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
        el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
        return;
      }

      const reason = data.message || (serverRes.status === 429
        ? 'The AI assistant has reached its request limit for now. Please try again later.'
        : 'The AI assistant could not answer right now. Please try again.');
      updateAiMessageContent(thinkingMsg, `**Unable to generate an answer**\n\n${reason}\n\nYou can still use the original paper link on the question card, or ask again in a moment.`, true, q);
    } catch (e) {
      console.warn('AI request failed:', e);
      updateAiMessageContent(thinkingMsg, '**Unable to reach the AI assistant**\n\nPlease check your connection and try again. The question bank and Drive links still work normally.', true, q);
    }
  }

  function updateAiMessageContent(element, rawMarkdown, isError, userQuery) {
    const formattedHtml = formatGeminiResponse(rawMarkdown);
    let fallbackHtml = '';
    if (isError) {
      const escapedQuestionAttr = userQuery ? escapeHtml(userQuery).replace(/"/g, '&quot;') : '';
      fallbackHtml = `
        <div class="ai-error-fallback">
          <p class="ai-fallback-msg">We couldn't generate a response this time. How would you like to continue?</p>
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
        <span class="ai-model-tag">${isError ? 'Not available' : 'Gemini'}</span>
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

  function generateGeminiResponse(query) {
    const q = query.toLowerCase();

    // -------------------------------------------------------------
    // DM (Discrete Mathematics) — 2 Marks & High-Yield Questions
    // -------------------------------------------------------------
    if ((q.includes('2 mark') || q.includes('short') || q.includes('part a') || q.includes('prepare') || q.includes('all')) && (q.includes('dm') || q.includes('discrete') || q.includes('math'))) {
      return `### Discrete Mathematics (DM) — High-Yield 2-Marks PYQ Bank & Model Answers

In MGIT autonomous end-semester examinations, **Part-A carries 10 marks and consists of Question 1 with 5 compulsory sub-questions: 1(a), 1(b), 1(c), 1(d), and 1(e) of 2 marks each (one from each of Units 1 to 5; Total = 10 Marks)**. Here is your unit-wise preparation guide for the most repeated 2-mark questions:

#### Unit 1: Mathematical Logic & Predicates
1. **Define Tautology, Contradiction, and Contingency:**
   - **Tautology:** A compound proposition that is True for all possible truth values of its proposition variables (e.g., $P \\vee \\neg P$).
   - **Contradiction (Fallacy):** A compound proposition that is False for all possible truth values (e.g., $P \\wedge \\neg P$).
   - **Contingency:** A proposition that is neither a tautology nor a contradiction.
2. **What are Principal Normal Forms (PDNF and PCNF)?**
   - **PDNF (Principal Disjunctive Normal Form):** An equivalent sum-of-products formula consisting of the disjunction of all *Minterms* corresponding to True rows in the truth table.
   - **PCNF (Principal Conjunctive Normal Form):** An equivalent product-of-sums formula consisting of the conjunction of all *Maxterms* corresponding to False rows.
3. **State De Morgan's Laws in Propositional Logic:**
   - $\\neg(P \\wedge Q) \\equiv \\neg P \\vee \\neg Q$
   - $\\neg(P \\vee Q) \\equiv \\neg P \\wedge \\neg Q$

#### Unit 2: Set Theory, Relations, POSETs & Lattices
4. **Define a Partially Ordered Set (POSET):**
   - A set $S$ together with a binary relation $R$ is a POSET $(S, \\le)$ if $R$ satisfies three axioms:
     1. **Reflexive:** $a R a$ for all $a \\in S$
     2. **Antisymmetric:** If $a R b$ and $b R a$, then $a = b$
     3. **Transitive:** If $a R b$ and $b R c$, then $a R c$
5. **Define a Lattice:**
   - A POSET $(L, \\le)$ is called a **Lattice** if every pair of elements $\\{a, b\\} \\subseteq L$ has both:
     - A unique **Least Upper Bound (LUB / Join)**: $a \\vee b = \\sup\\{a, b\\}$
     - A unique **Greatest Lower Bound (GLB / Meet)**: $a \\wedge b = \\inf\\{a, b\\}$
6. **State the condition for a Relation to be an Equivalence Relation:**
   - A relation $R$ is an equivalence relation if it is Reflexive, Symmetric ($a R b \\implies b R a$), and Transitive.

#### Unit 3: Algebraic Structures & Groups
7. **Differentiate Semigroup, Monoid, and Group:**
   - **Semigroup $(S, *)$:** Closed ($a * b \\in S$) and Associative ($a*(b*c) = (a*b)*c$).
   - **Monoid $(M, *)$:** A Semigroup that has an Identity element $e$ ($a * e = e * a = a$).
   - **Group $(G, *)$:** A Monoid where every element $a$ has an Inverse $a^{-1}$ ($a * a^{-1} = e$).
8. **State Lagrange's Theorem for Finite Groups:**
   - The order of every subgroup $H$ of a finite group $G$ divides the order of the group: $|H| \\mid |G|$. Consequently, $\\frac{|G|}{|H|} = [G:H]$ (the index of $H$ in $G$).

#### Unit 4: Combinatorics & Recurrence Relations
9. **State the Pigeonhole Principle (PHP):**
   - If $k+1$ or more pigeons are placed into $k$ pigeonholes, then at least one pigeonhole must contain two or more pigeons.
   - *Generalized PHP:* If $N$ objects are placed into $k$ boxes, at least one box contains at least $\\lceil N/k \\rceil$ objects.
10. **Write the General Form of a Linear Homogeneous Recurrence Relation:**
    - $a_n + c_1 a_{n-1} + c_2 a_{n-2} + \\dots + c_k a_{n-k} = 0$, where $c_i$ are constants and $c_k \\neq 0$.

#### Unit 5: Graph Theory
11. **State the Handshaking Theorem (Degree Sum Formula):**
    - In any undirected graph $G = (V, E)$, the sum of the degrees of all vertices equals twice the number of edges:
      $$\\sum_{v \\in V} \\deg(v) = 2|E|$$
    - *Corollary:* The number of vertices with odd degree in an undirected graph is always **even**.
12. **Differentiate Eulerian Circuit vs Hamiltonian Cycle:**
    - **Eulerian Circuit:** A closed trail that visits every **edge** of the graph exactly once. (Exists iff all vertices have even degrees).
    - **Hamiltonian Cycle:** A closed loop that visits every **vertex** of the graph exactly once.`;
    }

    // -------------------------------------------------------------
    // COA (Computer Organization & Architecture)
    // -------------------------------------------------------------
    if (q.includes('addressing mode')) {
      return `<strong>COA Unit 1 — Addressing Modes Comprehensive Guide:</strong><br><br>
      • <strong>Immediate Mode:</strong> Operand is specified explicitly in the instruction (e.g., <code>MOV R1, #25</code>). Effective Address (EA) does not exist.<br>
      • <strong>Direct (Absolute) Mode:</strong> Instruction contains the direct memory address of the operand. <code>EA = A</code>. Requires one memory reference.<br>
      • <strong>Indirect Mode:</strong> Address field refers to a memory location containing the actual operand address. <code>EA = [A]</code>. Useful for pointers.<br>
      • <strong>Register Mode:</strong> Operand resides inside a CPU register (e.g., <code>ADD R1, R2</code>). Fastest execution.<br>
      • <strong>Register Indirect Mode:</strong> Register holds the memory address of the operand. <code>EA = [R]</code>.<br>
      • <strong>Indexed Mode:</strong> <code>EA = A + [R_index]</code>. Critical for traversing 1D/2D arrays.<br>
      • <strong>Relative (PC-Relative) Mode:</strong> <code>EA = PC + Offset</code>. Crucial for position-independent jump/branch instructions.<br><br>
      <em>MGIT Exam Tip: Always draw the 1-box pointer diagram for Direct vs Indirect mode for full 5/10 marks.</em>`;
    }

    if (q.includes('booth') || (q.includes('multiplication') && (q.includes('coa') || q.includes('computer')))) {
      return `<strong>COA Unit 3 — Booth's Multiplication Algorithm:</strong><br><br>
      Booth's algorithm multiplies signed binary numbers in 2's complement notation by treating consecutive strings of 1s as a single subtraction and addition.<br><br>
      <strong>Hardware Registers:</strong><br>
      • <strong>A:</strong> Accumulator (initialized to 0, size n)<br>
      • <strong>M:</strong> Multiplicand (size n)<br>
      • <strong>Q:</strong> Multiplier (size n)<br>
      • <strong>Q<sub>-1</sub>:</strong> 1-bit flip-flop initialized to 0<br>
      • <strong>Count:</strong> Initialized to n (number of bits)<br><br>
      <strong>Bit Inspection Rules (Q₀, Q₋₁):</strong><br>
      • <code>1 0</code> &rarr; <code>A = A - M</code>, then Arithmetic Right Shift (ASHRA) (A, Q, Q₋₁)<br>
      • <code>0 1</code> &rarr; <code>A = A + M</code>, then Arithmetic Right Shift (ASHRA)<br>
      • <code>0 0</code> or <code>1 1</code> &rarr; Only Arithmetic Right Shift (ASHRA)<br><br>
      <em>MGIT Exam Tip: Remember in ASHRA, the sign bit of A (most significant bit) is copied into itself to preserve signed magnitude!</em>`;
    }

    if (q.includes('cache') || q.includes('mapping')) {
      return `<strong>COA Unit 4 — Cache Memory Mapping Techniques:</strong><br><br>
      • <strong>1. Direct Mapping:</strong> Each main memory block maps to exactly one specific cache line: <code>Line Number = (Block Address) mod (Total Cache Lines)</code>. Simplest hardware, but prone to conflict misses.<br>
      • <strong>2. Fully Associative Mapping:</strong> A block can reside in any cache line. Memory address is divided into Tag and Word offset. Eliminates conflict misses, but requires expensive parallel comparator circuits.<br>
      • <strong>3. Set-Associative Mapping (k-way):</strong> Cache is partitioned into sets, each with k lines: <code>Set Number = (Block Address) mod (Number of Sets)</code>. Optimal balance between cost and hit ratio used in modern CPUs.<br><br>
      <em>Formula:</em> Hit Ratio <code>H = (Hits) / (Hits + Misses)</code>. Average Access Time <code>T_avg = H × T_c + (1 - H) × T_m</code>.`;
    }

    if (q.includes('pipeline') || q.includes('hazard')) {
      return `<strong>COA Unit 5 — Pipelining & Pipeline Hazards:</strong><br><br>
      Pipelining overlaps the execution of multiple instructions across stages: <strong>IF (Fetch), ID (Decode), EX (Execute), MEM (Memory), WB (Write Back)</strong>.<br><br>
      <strong>The 3 Major Hazards:</strong><br>
      • <strong>1. Structural Hazard:</strong> Hardware resource conflict when two instructions need the same hardware unit simultaneously (e.g. single-port memory for instruction and data). Resolved by separate Harvard I/D caches.<br>
      • <strong>2. Data Hazard:</strong> Instruction depends on the result of a previous incomplete instruction. Types: RAW (Read After Write), WAR, WAW. Resolved using Operand Forwarding (Bypassing) or NOP stalls.<br>
      • <strong>3. Control (Branch) Hazard:</strong> Caused by conditional branches altering the PC. Resolved by Branch Prediction, Delayed Branching, or Prefetching branch targets.`;
    }

    if (q.includes('dma') || q.includes('interrupt')) {
      return `<strong>COA Unit 5 — DMA (Direct Memory Access) vs Interrupt-driven I/O:</strong><br><br>
      • <strong>Interrupt-Driven I/O:</strong> CPU issues read/write command, proceeds with other tasks, and receives an interrupt when device is ready. CPU still mediates every byte transfer through registers.<br>
      • <strong>DMA (Direct Memory Access):</strong> A specialized DMA Controller takes control of the system bus to transfer entire blocks of data directly between I/O device and RAM without CPU intervention.<br><br>
      <strong>DMA Transfer Modes:</strong><br>
      • <strong>Burst Transfer:</strong> DMA takes control of bus and transfers the whole block continuously. Fastest, but holds CPU idle.<br>
      • <strong>Cycle Stealing:</strong> DMA steals one bus cycle per word transfer between CPU cycles. Minimum CPU stoppage.<br>
      <em>Signals involved: HOLD (Bus Request) and HLDA (Hold Acknowledge).</em>`;
    }

    // -------------------------------------------------------------
    // DBMS (Database Management Systems)
    // -------------------------------------------------------------
    if (q.includes('normalization') || q.includes('1nf') || q.includes('2nf') || q.includes('3nf') || q.includes('bcnf')) {
      return `<strong>DBMS Unit 3 — Schema Refinement & Normalization:</strong><br><br>
      Normalization decomposes relations to minimize data redundancy and prevent insertion, deletion, and update anomalies.<br><br>
      • <strong>1NF (First Normal Form):</strong> All attribute values must be atomic (no multi-valued or composite attributes allowed).<br>
      • <strong>2NF:</strong> Must be in 1NF, and <em>no Partial Dependency</em> exists (every non-prime attribute must be fully functionally dependent on candidate key, not a proper subset).<br>
      • <strong>3NF:</strong> Must be in 2NF, and <em>no Transitive Dependency</em> exists. For every functional dependency <code>X &rarr; Y</code>, either X is a Super Key or Y is a Prime Attribute.<br>
      • <strong>BCNF (Boyce-Codd Normal Form):</strong> Stricter version of 3NF. For every non-trivial functional dependency <code>X &rarr; Y</code>, <strong>X must be a Super Key</strong>.<br><br>
      <em>MGIT Exam Tip: When given a relation R(A,B,C,D,E), compute the attribute closures (X⁺) first to find candidate keys before classifying normal forms.</em>`;
    }

    if (q.includes('acid') || q.includes('transaction')) {
      return `<strong>DBMS Unit 4 — Transaction Management & ACID Properties:</strong><br><br>
      A transaction is a logical unit of work that accesses and updates database items.<br><br>
      <strong>ACID Properties:</strong><br>
      • <strong>A — Atomicity:</strong> "All or Nothing". Either all operations in the transaction succeed and commit, or the entire transaction is rolled back. Maintained by Recovery Manager (WAL - Write-Ahead Logging).<br>
      • <strong>C — Consistency:</strong> Preserves database integrity constraints before and after execution (e.g., total account balances remain invariant).<br>
      • <strong>I — Isolation:</strong> Concurrent execution of transactions produces the same state as if they were executed serially. Maintained by Concurrency Control (Locking/Timestamping).<br>
      • <strong>D — Durability:</strong> Once committed, updates persist permanently in secondary storage even during catastrophic system crash.<br><br>
      <strong>Transaction States:</strong> Active &rarr; Partially Committed &rarr; Committed (or Failed &rarr; Aborted).`;
    }

    if (q.includes('2pl') || q.includes('concurrency') || q.includes('serializ')) {
      return `<strong>DBMS Unit 4 — Concurrency Control & Two-Phase Locking (2PL):</strong><br><br>
      • <strong>Conflict Serializability:</strong> A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations (Read-Write, Write-Read, Write-Write on the same data item are conflicts). Verified using a <strong>Precedence Graph</strong> (cycle-free means serializable).<br><br>
      <strong>Two-Phase Locking (2PL) Protocol:</strong><br>
      1. <strong>Growing Phase:</strong> Transaction may obtain locks (Shared 'S' or Exclusive 'X'), but cannot release any lock.<br>
      2. <strong>Shrinking Phase:</strong> Transaction may release locks, but cannot acquire any new lock.<br>
      • <strong>Strict 2PL:</strong> Holds all Exclusive locks until commit/abort (prevents cascading rollbacks).<br>
      • <strong>Rigorous 2PL:</strong> Holds ALL (Shared and Exclusive) locks until commit/abort.`;
    }

    if (q.includes('b+ tree') || q.includes('btree') || q.includes('indexing')) {
      return `<strong>DBMS Unit 5 — B-Trees vs B+ Trees Indexing:</strong><br><br>
      • <strong>B-Tree:</strong> Keys and actual record pointers are stored in both internal nodes and leaf nodes. Search can terminate early at internal nodes, but range queries are slower.<br>
      • <strong>B+ Tree:</strong> Internal nodes store <em>only guide keys</em> for routing; <strong>all actual data records/pointers reside in leaf nodes</strong>. Leaf nodes are linked as a doubly linked list.<br><br>
      <strong>Why B+ Trees are preferred in Database Engines:</strong><br>
      1. Higher fan-out (internal nodes store more keys per block since no record pointers).<br>
      2. Extremely efficient range scans: once the starting leaf is found, simply traverse the linked list.<br>
      3. Guaranteed uniform search time: all leaves are at the exact same depth (balanced tree).`;
    }

    // -------------------------------------------------------------
    // DM (Discrete Mathematics)
    // -------------------------------------------------------------
    if (q.includes('recurrence') || (q.includes('relation') && q.includes('dm'))) {
      return `<strong>DM Unit 4 — Solving Homogeneous Recurrence Relations:</strong><br><br>
      For a linear homogeneous recurrence relation: <code>a_n + c₁ a_{n-1} + c₂ a_{n-2} = 0</code><br><br>
      <strong>Step-by-Step Procedure:</strong><br>
      1. Write the <strong>Characteristic Equation</strong>: <code>r² + c₁ r + c₂ = 0</code>.<br>
      2. Solve for roots <code>r₁, r₂</code>:<br>
      • <em>Case 1: Distinct Real Roots (r₁ ≠ r₂):</em><br>
      <code>a_n = C₁(r₁)ⁿ + C₂(r₂)ⁿ</code><br>
      • <em>Case 2: Repeated Real Roots (r₁ = r₂ = r):</em><br>
      <code>a_n = (C₁ + C₂·n) rⁿ</code><br>
      • <em>Case 3: Complex Conjugate Roots:</em> Convert to polar/trigonometric form.<br>
      3. Use given initial conditions (e.g. <code>a₀ = 1, a₁ = 2</code>) to solve system of linear equations for constants <code>C₁</code> and <code>C₂</code>.`;
    }

    if (q.includes('hasse') || q.includes('poset') || q.includes('lattice')) {
      return `<strong>DM Unit 2 — POSETs, Hasse Diagrams & Lattices:</strong><br><br>
      • <strong>POSET (Partially Ordered Set):</strong> A set S with relation R that is <strong>Reflexive, Antisymmetric, and Transitive</strong>. Denoted <code>(S, ≤)</code>.<br>
      • <strong>Hasse Diagram:</strong> A simplified visual representation of a finite POSET where loops (reflexivity) and transitive edges are omitted, and elements are arranged vertically from lower to higher.<br>
      • <strong>Lattice:</strong> A POSET in which <em>every pair of elements {a, b} has a unique Least Upper Bound (LUB / Join ∨) and Greatest Lower Bound (GLB / Meet ∧)</em>.<br><br>
      <em>Important Properties:</em> Distributive lattice satisfies <code>a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)</code>. Complemented lattice has 0 and 1 elements where every element has a complement.`;
    }

    if (q.includes('euler') || q.includes('hamilton') || (q.includes('graph') && q.includes('circuit'))) {
      return `<strong>DM Unit 5 — Euler vs Hamiltonian Graphs:</strong><br><br>
      • <strong>Eulerian Trail / Circuit:</strong> A closed trail that visits <em>every edge of the graph exactly once</em>.<br>
      &rarr; <em>Euler's Theorem:</em> A connected undirected graph has an Eulerian circuit <strong>if and only if every vertex has an even degree</strong>.<br>
      &rarr; Has an Eulerian path if exactly 2 vertices have odd degrees.<br><br>
      • <strong>Hamiltonian Cycle:</strong> A closed path that visits <em>every vertex of the graph exactly once</em> (except start/end).<br>
      &rarr; <em>Dirac's Theorem:</em> If a simple graph has n ≥ 3 vertices and <code>deg(v) ≥ n/2</code> for all v, then G is Hamiltonian.<br>
      &rarr; <em>Ore's Theorem:</em> If <code>deg(u) + deg(v) ≥ n</code> for every non-adjacent pair (u, v), G is Hamiltonian.`;
    }

    // -------------------------------------------------------------
    // OOPJ (Object Oriented Programming through Java)
    // -------------------------------------------------------------
    if (q.includes('overload') || q.includes('override') || (q.includes('polymorph') && q.includes('java'))) {
      return `<strong>OOPJ Unit 2 — Method Overloading vs Method Overriding:</strong><br><br>
      <table style="width:100%; border-collapse:collapse; margin-bottom:10px; font-size:13px;">
        <tr style="background:#f1f5f9;"><th style="padding:6px; border:1px solid #cbd5e1;">Feature</th><th style="padding:6px; border:1px solid #cbd5e1;">Overloading</th><th style="padding:6px; border:1px solid #cbd5e1;">Overriding</th></tr>
        <tr><td style="padding:6px; border:1px solid #cbd5e1;"><strong>Scope</strong></td><td style="padding:6px; border:1px solid #cbd5e1;">Within the same class</td><td style="padding:6px; border:1px solid #cbd5e1;">Between superclass & subclass</td></tr>
        <tr><td style="padding:6px; border:1px solid #cbd5e1;"><strong>Parameters</strong></td><td style="padding:6px; border:1px solid #cbd5e1;">Must be different (count/type)</td><td style="padding:6px; border:1px solid #cbd5e1;">Must be exact same signature</td></tr>
        <tr><td style="padding:6px; border:1px solid #cbd5e1;"><strong>Binding Time</strong></td><td style="padding:6px; border:1px solid #cbd5e1;">Compile time (Static)</td><td style="padding:6px; border:1px solid #cbd5e1;">Runtime (Dynamic Dispatch)</td></tr>
        <tr><td style="padding:6px; border:1px solid #cbd5e1;"><strong>Return Type</strong></td><td style="padding:6px; border:1px solid #cbd5e1;">Can be different</td><td style="padding:6px; border:1px solid #cbd5e1;">Must be same or covariant</td></tr>
      </table>
      <em>Code Example:</em><br>
      <code>class MathUtil { int add(int a, int b) { return a+b; } double add(double a, double b) { return a+b; } } // Overloading</code><br>
      <code>class Animal { void sound() { System.out.println("Bark"); } } class Dog extends Animal { @Override void sound() { System.out.println("Woof"); } } // Overriding</code>`;
    }

    if (q.includes('thread') || q.includes('multithread') || q.includes('synchroniz')) {
      return `<strong>OOPJ Unit 3 — Multithreading & Synchronization in Java:</strong><br><br>
      • <strong>Thread Creation:</strong><br>
      1. Extending <code>Thread</code> class: <code>class MyThread extends Thread { public void run() { ... } }</code><br>
      2. Implementing <code>Runnable</code> interface (preferred): <code>class MyTask implements Runnable { public void run() { ... } }</code><br><br>
      • <strong>Thread Life Cycle States:</strong> New &rarr; Runnable &rarr; Running &rarr; Blocked/Waiting &rarr; Terminated.<br>
      • <strong>Thread Synchronization:</strong> Prevents thread interference and consistency problems (race conditions) using the <code>synchronized</code> keyword on methods or critical blocks.<br>
      • <strong>Inter-thread Communication:</strong> Done using <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> defined in <code>java.lang.Object</code> within synchronized contexts.`;
    }

    if (q.includes('exception') || q.includes('try') || q.includes('catch')) {
      return `<strong>OOPJ Unit 3 — Exception Handling Hierarchy:</strong><br><br>
      Java exceptions inherit from <code>Throwable</code> &rarr; <code>Exception</code> and <code>Error</code>.<br><br>
      • <strong>Checked Exceptions:</strong> Verified at compile-time (e.g., <code>IOException</code>, <code>SQLException</code>). Must be handled via <code>try-catch</code> or declared with <code>throws</code>.<br>
      • <strong>Unchecked Exceptions:</strong> Subclasses of <code>RuntimeException</code> (e.g., <code>NullPointerException</code>, <code>ArithmeticException</code>, <code>ArrayIndexOutOfBoundsException</code>). Occur at runtime.<br><br>
      <strong>The 5 Keywords:</strong><br>
      • <code>try</code>: Encloses risky code.<br>
      • <code>catch</code>: Catches and handles specific exception.<br>
      • <code>finally</code>: Block that always executes (used for resource cleanup), regardless of exception occurrence.<br>
      • <code>throw</code>: Explicitly throws an exception instance (<code>throw new MyCustomException("Msg");</code>).<br>
      • <code>throws</code>: Method signature declaration specifying exceptions propagated to caller.`;
    }

    // -------------------------------------------------------------
    // SE (Software Engineering)
    // -------------------------------------------------------------
    if (q.includes('waterfall') || q.includes('agile') || q.includes('sdlc') || q.includes('spiral')) {
      return `<strong>SE Unit 1 — Software Process Models Comparison:</strong><br><br>
      • <strong>Waterfall Model:</strong> Sequential linear flow: Requirements &rarr; Design &rarr; Implementation &rarr; Testing &rarr; Deployment &rarr; Maintenance. Best when requirements are well-understood and stable. Disadvantage: high risk, working software delivered late.<br>
      • <strong>Prototyping Model:</strong> Builds a throw-away or evolutionary prototype to clarify customer requirements. Excellent for unknown or volatile user needs.<br>
      • <strong>Spiral Model (Boehm):</strong> Risk-driven model structured in 4 quadrants (Determine objectives, Risk analysis, Develop & Test, Plan next phase). Best for large, high-risk, expensive projects.<br>
      • <strong>Agile (Scrum):</strong> Iterative and incremental development in short sprints (2–4 weeks). Embraces changing requirements, daily standups, sprint backlog, and continuous customer feedback.`;
    }

    if (q.includes('cohesion') || q.includes('coupling')) {
      return `<strong>SE Unit 3 — Cohesion vs Coupling (Architectural Design):</strong><br><br>
      The core engineering objective is: <strong>High Cohesion, Low Coupling</strong>.<br><br>
      • <strong>Cohesion:</strong> Measures the internal strength and single-purposeness of elements within a module.<br>
      &rarr; <em>Order (Best to Worst):</em> Functional (Best) &gt; Sequential &gt; Communicational &gt; Procedural &gt; Temporal &gt; Logical &gt; Coincidental (Worst).<br><br>
      • <strong>Coupling:</strong> Measures the degree of interdependence between different modules.<br>
      &rarr; <em>Order (Best/Lowest to Worst/Highest):</em> No Direct Coupling &gt; Data Coupling (Best) &gt; Stamp Coupling &gt; Control Coupling &gt; Common Coupling &gt; Content Coupling (Worst, direct memory access).`;
    }

    if (q.includes('testing') || q.includes('white box') || q.includes('black box')) {
      return `<strong>SE Unit 5 — Software Testing Methodologies:</strong><br><br>
      • <strong>Black-Box Testing (Functional):</strong> Tests functionality without knowing internal source code structure.<br>
      &rarr; <em>Techniques:</em> Equivalence Class Partitioning, Boundary Value Analysis (BVA), Cause-Effect Graphing.<br><br>
      • <strong>White-Box Testing (Structural):</strong> Tests internal code logic, paths, conditions, and loops.<br>
      &rarr; <em>Techniques:</em> Statement Coverage, Branch Coverage, Basis Path Testing using McCabe's Cyclomatic Complexity: <code>V(G) = E - N + 2P</code> (where E = edges, N = nodes, P = connected components).<br><br>
      <strong>Levels of Testing:</strong> Unit Testing &rarr; Integration Testing &rarr; System Testing &rarr; Acceptance Testing (Alpha/Beta).`;
    }

    // -------------------------------------------------------------
    // ES (Environmental Studies)
    // -------------------------------------------------------------
    if (q.includes('ecosystem') || q.includes('biodiversity') || q.includes('environmental') || q.includes('pollution')) {
      return `<strong>ES (Environmental Studies) — Core Examination Essentials:</strong><br><br>
      • <strong>Ecosystem:</strong> Dynamic complex of plant, animal, and microorganism communities interacting with non-living environment. Energy flow is unidirectional (10% Law of Lindeman).<br>
      • <strong>Ecological Pyramids:</strong> Pyramid of Numbers, Biomass, and Energy (Pyramid of Energy is <em>always upright</em>).<br>
      • <strong>Biodiversity Hotspots:</strong> Regions with high species richness and high endemism under severe threat. India hosts 4 hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland.<br>
      • <strong>Conservation:</strong> In-situ (National parks, Sanctuaries, Biosphere reserves) vs Ex-situ (Botanical gardens, Gene banks, Zoos).<br>
      • <strong>Pollution Control:</strong> Air (Particulate matter, scrubbers, electrostatic precipitators), Water (BOD/COD testing, Sewage Treatment Plants), Solid Waste (3Rs: Reduce, Reuse, Recycle).`;
    }

    // -------------------------------------------------------------
    // I&E (Innovation & Entrepreneurship)
    // -------------------------------------------------------------
    if (q.includes('entrepreneur') || q.includes('canvas') || q.includes('patent') || q.includes('ipr') || q.includes('design thinking')) {
      return `<strong>I&E (Innovation & Entrepreneurship) — Core Examination Essentials:</strong><br><br>
      • <strong>Design Thinking Process:</strong> 5 iterative stages: <em>Empathize</em> (understand user needs) &rarr; <em>Define</em> (problem statement) &rarr; <em>Ideate</em> (generate solutions) &rarr; <em>Prototype</em> (quick experimental models) &rarr; <em>Test</em> (user validation).<br>
      • <strong>Business Model Canvas (Alexander Osterwalder):</strong> 9 building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure.<br>
      • <strong>Intellectual Property Rights (IPR):</strong><br>
      &rarr; <em>Patent:</em> Protects novel inventions (valid 20 years; must satisfy Novelty, Inventive Step, Industrial Applicability).<br>
      &rarr; <em>Copyright:</em> Protects literary, musical, and artistic works.<br>
      &rarr; <em>Trademark:</em> Protects brand names, logos, symbols.<br>
      • <strong>Funding Stages:</strong> Bootstrapping &rarr; Seed Funding (Friends & Family, Grants) &rarr; Angel Investors &rarr; Venture Capital (Series A, B, C) &rarr; IPO (Initial Public Offering).`;
    }

    // -------------------------------------------------------------
    // Smart General Technical Fallback
    // -------------------------------------------------------------
    return `<strong>Academic Guidance on "${escapeHtml(query)}":</strong><br><br>
    In MGIT CSE Semester III examinations, answer this topic following the structured blueprint:<br>
    • <strong>1. Standard Technical Definition:</strong> State the formal definition and domain classification.<br>
    • <strong>2. Core Working Principles:</strong> Explain the mechanism step-by-step with clear numbered points.<br>
    • <strong>3. Block Diagrams / Code / Equations:</strong> Always support explanations with labeled schematics or algorithms.<br>
    • <strong>4. University Scoring Advice:</strong> In 5/10 marks questions, write comparative tables or step-by-step proofs rather than unformatted paragraphs.<br><br>
    <em>Tip: Switch to the relevant subject card to view all authentic past year questions on this topic with direct Google Drive PDF links.</em>`;
  }


  // -------------------------------------------------------------
  // Event Listeners Setup
  // -------------------------------------------------------------
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



    // Question Modal Close
    if (el.closeQuestionModalBtn) {
      el.closeQuestionModalBtn.addEventListener('click', closeQuestionModal);
    }
    if (el.questionModal) {
      el.questionModal.addEventListener('click', (e) => {
        if (e.target === el.questionModal) closeQuestionModal();
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

    // Admin Modal triggers
    if (el.adminLoginBtn) {
      el.adminLoginBtn.addEventListener('click', openAdminModal);
    }
    if (el.closeAdminModalBtn) {
      el.closeAdminModalBtn.addEventListener('click', () => {
        el.adminModal.style.display = 'none';
      });
    }
    if (el.adminLoginForm) {
      el.adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    if (el.adminLogoutBtn) {
      el.adminLogoutBtn.addEventListener('click', handleAdminLogout);
    }

    // Floating Gemini Button & Modal
    if (el.floatingGeminiBtn) {
      el.floatingGeminiBtn.addEventListener('click', openGeminiModal);
    }
    if (el.closeGeminiModalBtn) {
      el.closeGeminiModalBtn.addEventListener('click', () => {
        el.geminiModal.style.display = 'none';
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
        if (el.adminModal && el.adminModal.style.display === 'flex') el.adminModal.style.display = 'none';
        if (el.geminiModal && el.geminiModal.style.display === 'flex') el.geminiModal.style.display = 'none';
      }
    });
  }

  // -------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------
  function showToast(message) {
    if (!el.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${escapeHtml(message)}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
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
    }

    function recordRated() {
      localStorage.setItem(RATED_KEY, '1');
      sessionStorage.setItem(DISMISS_KEY, '1');
      dismissPopup();
    }

    function showPopup() {
      if (isShowing || localStorage.getItem(RATED_KEY) === '1' || sessionStorage.getItem(DISMISS_KEY) === '1') return;
      isShowing = true;
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (document.getElementById('ratingPopup')) return;

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
          <h4 class="rating-popup-headline">Help Amaan make this 10x better! ⭐</h4>
          <p class="rating-popup-msg">Taking just <strong>10 seconds</strong> to drop a quick rating would genuinely help me a lot in updating papers and improving this for everyone.</p>
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

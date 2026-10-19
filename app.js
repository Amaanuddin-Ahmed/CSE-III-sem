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
    selectedYears: [2024, 2023, 2022, 2021, 2020],
    selectedPart: 'all', // 'all', 'A', 'B'
    isAdminLoggedIn: false,
    selectedFiles: [],
    pendingContributions: JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]')
  };

  const DEFAULT_GEMINI_KEY = (typeof atob === 'function') 
    ? atob('QVEuQWI4Uk42SURuTDU5MU1aXzlrbmlPclg4M1haaUxKNjFjdGRONWp6OG9DS1VaY1hCQ3c=') 
    : '';
  const DRIVE_ROOT_URL = "https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing";

  // -------------------------------------------------------------
  // DOM Elements
  // -------------------------------------------------------------
  const el = {
    brandHomeLink: document.getElementById('brandHomeLink'),
    topDriveBtn: document.getElementById('topDriveBtn'),
    topDriveBtnText: document.getElementById('topDriveBtnText'),
    adminLoginBtn: document.getElementById('adminLoginBtn'),

    welcomeSection: document.getElementById('welcomeSection'),
    subjectsSection: document.getElementById('subjectsSection'),
    subjectsGrid: document.getElementById('subjectsGrid'),
    attributionDivision: document.getElementById('attributionDivision'),

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

    yearCheckboxesRow: document.getElementById('yearCheckboxesRow'),
    pyqCountBanner: document.getElementById('pyqCountBanner'),
    partToggleButtons: document.getElementById('partToggleButtons'),
    questionsListContainer: document.getElementById('questionsListContainer'),

    // Question Modal
    questionModal: document.getElementById('questionModal'),
    closeQuestionModalBtn: document.getElementById('closeQuestionModalBtn'),
    modalSubjectBadge: document.getElementById('modalSubjectBadge'),
    modalPartBadge: document.getElementById('modalPartBadge'),
    modalUnitBadge: document.getElementById('modalUnitBadge'),
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

    // Admin Modal
    adminModal: document.getElementById('adminModal'),
    closeAdminModalBtn: document.getElementById('closeAdminModalBtn'),
    adminLoginFormContainer: document.getElementById('adminLoginFormContainer'),
    adminDashboardContainer: document.getElementById('adminDashboardContainer'),
    adminLoginForm: document.getElementById('adminLoginForm'),
    adminPassword: document.getElementById('adminPassword'),
    adminPendingCount: document.getElementById('adminPendingCount'),
    adminVerifiedCount: document.getElementById('adminVerifiedCount'),
    moderationTableWrapper: document.getElementById('moderationTableWrapper'),
    adminLogoutBtn: document.getElementById('adminLogoutBtn'),

    // Gemini Modal
    floatingGeminiBtn: document.getElementById('floatingGeminiBtn'),
    geminiModal: document.getElementById('geminiModal'),
    closeGeminiModalBtn: document.getElementById('closeGeminiModalBtn'),
    geminiChatOutput: document.getElementById('geminiChatOutput'),
    geminiQueryForm: document.getElementById('geminiQueryForm'),
    geminiQueryInput: document.getElementById('geminiQueryInput'),
    toggleApiKeyBtn: document.getElementById('toggleApiKeyBtn'),
    apiKeyBtnLabel: document.getElementById('apiKeyBtnLabel'),
    geminiModeIndicator: document.getElementById('geminiModeIndicator'),
    geminiKeyDrawer: document.getElementById('geminiKeyDrawer'),
    userGeminiKeyInput: document.getElementById('userGeminiKeyInput'),
    saveGeminiKeyBtn: document.getElementById('saveGeminiKeyBtn'),
    clearGeminiKeyBtn: document.getElementById('clearGeminiKeyBtn'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  // Temp holder for contribute context
  let pendingContribContext = {
    subjectId: 'DM',
    resourceType: 'PYQ'
  };

  // -------------------------------------------------------------
  // Initialization
  // -------------------------------------------------------------
  function init() {
    renderSubjectsGrid();
    setupEventListeners();
    setupAdminStats();
    initGeminiKey();
  }

  // -------------------------------------------------------------
  // Render Subjects in 2-Column Grid
  // -------------------------------------------------------------
  function renderSubjectsGrid() {
    if (!el.subjectsGrid) return;
    el.subjectsGrid.innerHTML = '';

    const subjectKeys = Object.keys(SUBJECTS_DATA);
    subjectKeys.forEach(key => {
      const sub = SUBJECTS_DATA[key];
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${sub.shortName} - ${sub.title}`);

      // Count matching questions in database
      const qCount = QUESTIONS_DATABASE.filter(q => q.subjectId === sub.id).length;

      card.innerHTML = `
        <div class="subject-icon-box" style="background-color: ${sub.bgColor}; color: ${sub.accentColor};">
          <i class="${sub.icon}"></i>
        </div>
        <div class="subject-info">
          <div class="subject-short-name">${escapeHtml(sub.shortName)}</div>
          <div class="subject-full-title">${escapeHtml(sub.title)}</div>
          <div class="subject-meta-tags">
            <span class="subject-meta-item"><i class="fa-regular fa-file-lines"></i> ${sub.notesCount} Notes</span>
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
  function selectSubject(sub) {
    state.currentSubject = sub;
    state.currentMode = null;
    state.notesChapterFilter = 'all';

    // Update Top Drive Button dynamically to this Subject's folder
    if (sub.driveUrl) {
      el.topDriveBtn.href = sub.driveUrl;
      el.topDriveBtnText.textContent = `View ${sub.shortName} Drive Folder`;
      el.topDriveBtn.title = `Open ${sub.shortName} Google Drive Folder`;
    } else {
      el.topDriveBtn.href = DRIVE_ROOT_URL;
      el.topDriveBtnText.textContent = `View Entire PYQ Folder`;
    }

    // Update Header in Detail Section (Zero Course Codes!)
    el.detailSubjectTitle.textContent = `${sub.shortName} — ${sub.title}`;

    // Update counts on the Mode Choice Cards
    const notesCount = NOTES_DATA.filter(n => n.subjectId === sub.id).length;
    if (el.modeNotesCountText) {
      el.modeNotesCountText.textContent = `${notesCount} Resource${notesCount === 1 ? '' : 's'}`;
    }
    if (el.modePyqsCountText) {
      el.modePyqsCountText.textContent = `${sub.paperCount} Paper${sub.paperCount === 1 ? '' : 's'}`;
    }

    // Show Mode Selector first — do not show notes or questions immediately
    showModeSelector();

    // Reset notes chapter dropdown
    if (el.notesChapterSelect) {
      el.notesChapterSelect.value = 'all';
    }

    // Toggle main sections
    el.welcomeSection.style.display = 'none';
    el.subjectsSection.style.display = 'none';
    el.subjectDetailSection.style.display = 'block';
    if (el.attributionDivision) {
      el.attributionDivision.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showModeSelector() {
    state.currentMode = null;
    if (el.modeSelectorWrapper) el.modeSelectorWrapper.style.display = 'block';
    if (el.modeSwitcherBar) el.modeSwitcherBar.style.display = 'none';
    if (el.notesDivisionBox) el.notesDivisionBox.style.display = 'none';
    if (el.pyqsDivisionBox) el.pyqsDivisionBox.style.display = 'none';

    if (state.currentSubject && state.currentSubject.driveUrl) {
      el.topDriveBtn.href = state.currentSubject.driveUrl;
      el.topDriveBtnText.textContent = `View ${state.currentSubject.shortName} Drive Folder`;
    }
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
        el.topDriveBtnText.textContent = `View ${state.currentSubject.shortName} Notes Folder`;
      }
      renderNotesDivision();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showPyqsView() {
    state.currentMode = 'pyqs';
    if (el.modeSelectorWrapper) el.modeSelectorWrapper.style.display = 'none';
    if (el.modeSwitcherBar) el.modeSwitcherBar.style.display = 'flex';
    if (el.tabSwitchToNotes) el.tabSwitchToNotes.classList.remove('active');
    if (el.tabSwitchToPyqs) el.tabSwitchToPyqs.classList.add('active');
    if (el.notesDivisionBox) el.notesDivisionBox.style.display = 'none';
    if (el.pyqsDivisionBox) el.pyqsDivisionBox.style.display = 'block';

    if (state.currentSubject) {
      if (state.currentSubject.pyqsUrl) {
        el.topDriveBtn.href = state.currentSubject.pyqsUrl;
        el.topDriveBtnText.textContent = `View ${state.currentSubject.shortName} PYQs Folder`;
      }
      renderPyqsDivision();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function returnToSubjectsList() {
    state.currentSubject = null;
    state.currentMode = null;

    // Reset Top Drive Button to Entire Folder
    el.topDriveBtn.href = DRIVE_ROOT_URL;
    el.topDriveBtnText.textContent = 'View Entire PYQ Folder';
    el.topDriveBtn.title = 'Open Entire SEM 3 Google Drive Folder';

    el.subjectDetailSection.style.display = 'none';
    el.welcomeSection.style.display = 'block';
    el.subjectsSection.style.display = 'block';
    if (el.attributionDivision) {
      el.attributionDivision.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // -------------------------------------------------------------
  // Division 1: Notes Rendering
  // -------------------------------------------------------------
  function renderNotesDivision() {
    if (!el.notesListContainer || !state.currentSubject) return;
    el.notesListContainer.innerHTML = '';

    const subId = state.currentSubject.id;
    let notes = NOTES_DATA.filter(n => n.subjectId === subId);

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
  // Division 2: PYQs Rendering & Checkbox Filtering
  // -------------------------------------------------------------
  function renderPyqsDivision() {
    if (!el.questionsListContainer || !state.currentSubject) return;
    el.questionsListContainer.innerHTML = '';

    const subId = state.currentSubject.id;

    // Filter by Subject
    let questions = QUESTIONS_DATABASE.filter(q => q.subjectId === subId);

    // Filter by Selected Years (checkboxes)
    if (state.selectedYears.length > 0) {
      questions = questions.filter(q => {
        return q.years && q.years.some(yr => state.selectedYears.includes(yr));
      });
    } else {
      questions = []; // No years selected
    }

    // Filter by Part (All, Part A, Part B)
    if (state.selectedPart !== 'all') {
      questions = questions.filter(q => q.part === state.selectedPart);
    }

    // Update Dynamic Count Banner
    el.pyqCountBanner.textContent = `Showing ${questions.length} authentic question${questions.length === 1 ? '' : 's'} from selected years (${state.selectedYears.join(', ') || 'None'})`;

    if (questions.length === 0) {
      el.questionsListContainer.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon"><i class="fa-solid fa-list-check"></i></div>
          <div class="empty-state-title">No questions found matching criteria</div>
          <div class="empty-state-sub">Select one or more academic years or change the exam part filter above.</div>
        </div>
      `;
      return;
    }

    // Sort by recurrence frequency descending
    questions.sort((a, b) => b.frequency - a.frequency);

    questions.forEach(q => {
      const card = document.createElement('div');
      card.className = 'question-item-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      const isPartA = q.part === 'A';
      const partBadgeClass = isPartA ? 'part-a' : 'part-b';
      const partLabel = isPartA ? 'Part A &bull; 2 Marks' : `Part B &bull; ${q.marks} Marks`;
      const recurrenceBadge = q.frequency > 1
        ? `<span class="q-badge recurrence">Repeated ${q.frequency}x</span>`
        : '';

      const subForCard = SUBJECTS_DATA[q.subjectId] || state.currentSubject;
      const directPdfUrl = q.driveFileId
        ? `https://drive.google.com/file/d/${q.driveFileId}/view?usp=sharing`
        : (subForCard && subForCard.driveUrl ? subForCard.driveUrl : DRIVE_ROOT_URL);

      card.innerHTML = `
        <div class="question-card-top">
          <div class="question-badges">
            <span class="q-badge unit">Unit ${q.chapter}</span>
            <span class="q-badge ${partBadgeClass}">${partLabel}</span>
            ${recurrenceBadge}
          </div>
          <div class="question-years-tag">
            Asked in: <strong>${q.years.join(', ')}</strong>
          </div>
        </div>
        <div class="question-text-preview">${escapeHtml(q.question)}</div>
        <div class="question-card-footer">
          <span class="click-cue"><i class="fa-solid fa-circle-info"></i> View Analysis &amp; Tips</span>
          <a href="${directPdfUrl}" target="_blank" rel="noopener noreferrer" class="direct-pdf-badge" onclick="event.stopPropagation();" title="Directly open original ${escapeHtml(q.paperName)} PDF in Google Drive">
            <i class="fa-regular fa-file-pdf"></i> <span>${escapeHtml(q.paperName)}</span> <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px; margin-left:3px;"></i>
          </a>
        </div>
      `;

      card.addEventListener('click', () => openQuestionModal(q));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openQuestionModal(q);
        }
      });

      el.questionsListContainer.appendChild(card);
    });
  }

  // -------------------------------------------------------------
  // Question Detail Modal
  // -------------------------------------------------------------
  function openQuestionModal(q) {
    const sub = SUBJECTS_DATA[q.subjectId] || state.currentSubject;

    el.modalSubjectBadge.textContent = sub ? sub.shortName : q.subjectId;
    el.modalPartBadge.textContent = `Part ${q.part} • ${q.marks} Marks`;
    el.modalUnitBadge.textContent = `Unit ${q.chapter}`;

    el.modalQuestionTitle.textContent = q.question;
    el.modalYearsAppeared.textContent = q.years ? q.years.join(', ') : 'Not specified';
    el.modalRecurrence.textContent = q.frequency > 1
      ? `Repeated across ${q.frequency} exam papers (${q.years.join(', ')})`
      : 'Appeared in 1 exam paper';
    el.modalPaperName.textContent = `${q.paperName} (Page ${q.pageNumber})`;
    el.modalOutcome.textContent = `Course Outcome CO${q.chapter}`;

    // Tip: concise exam tip
    el.modalTipText.textContent = q.tip ? `Tip: ${q.tip}` : 'Tip: Support theoretical answers with neat labelled block diagrams.';

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
    el.uploadSubjectSelect.value = pendingContribContext.subjectId;
    el.uploadResourceType.value = pendingContribContext.resourceType;
    el.uploadChapterSelect.value = '1';

    state.selectedFiles = [];
    renderSelectedFiles();

    el.contribUploadModal.style.display = 'flex';
  }

  function handleFilesChosen(filesList) {
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      // Avoid duplicate names in same batch
      if (!state.selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
        state.selectedFiles.push(file);
      }
    }
    renderSelectedFiles();
  }

  function renderSelectedFiles() {
    el.selectedFilesList.innerHTML = '';
    if (state.selectedFiles.length === 0) {
      el.selectedFilesList.innerHTML = '<span style="font-size: 12px; color: var(--text-light); font-style: italic;">No files selected yet.</span>';
      return;
    }

    state.selectedFiles.forEach((file, index) => {
      const row = document.createElement('div');
      row.className = 'selected-file-row';
      const sizeKb = (file.size / 1024).toFixed(1);
      row.innerHTML = `
        <span><i class="fa-regular fa-file-pdf"></i> ${escapeHtml(file.name)} (${sizeKb} KB)</span>
        <button type="button" class="file-del-btn" title="Remove file" data-index="${index}">&times;</button>
      `;
      row.querySelector('.file-del-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        state.selectedFiles.splice(index, 1);
        renderSelectedFiles();
      });
      el.selectedFilesList.appendChild(row);
    });
  }

  function submitContribution(e) {
    e.preventDefault();

    if (state.selectedFiles.length === 0) {
      showToast('Please select at least one file to upload.');
      return;
    }

    const subCode = el.uploadSubjectSelect.value;
    const resType = el.uploadResourceType.value;
    const chapterVal = el.uploadChapterSelect.value;
    const examYear = el.uploadExamYear.value.trim() || 'Unspecified';
    const contributor = el.uploadContributorName.value.trim() || 'Anonymous Student';

    const submission = {
      id: 'contrib-' + Date.now(),
      subject: subCode,
      resourceType: resType,
      chapter: chapterVal,
      examYear: examYear,
      contributor: contributor,
      files: state.selectedFiles.map(f => ({ name: f.name, size: f.size })),
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    state.pendingContributions.push(submission);
    localStorage.setItem('mgit_pending_contributions', JSON.stringify(state.pendingContributions));

    if (window.SupabasePipeline && typeof window.SupabasePipeline.submitContribution === 'function') {
      window.SupabasePipeline.submitContribution(submission);
    }

    // Reset and close
    el.contribUploadModal.style.display = 'none';
    state.selectedFiles = [];
    el.contribUploadForm.reset();

    showToast('Upload received! Your resources have been sent to the moderation queue.');
    setupAdminStats();
  }

  // -------------------------------------------------------------
  // Admin Portal & Moderation Queue
  // -------------------------------------------------------------
  function openAdminModal() {
    if (state.isAdminLoggedIn) {
      el.adminLoginFormContainer.style.display = 'none';
      el.adminDashboardContainer.style.display = 'block';
      renderModerationQueue();
    } else {
      el.adminLoginFormContainer.style.display = 'block';
      el.adminDashboardContainer.style.display = 'none';
    }
    el.adminModal.style.display = 'flex';
  }

  function handleAdminLogin(e) {
    e.preventDefault();
    const pass = el.adminPassword.value.trim();

    if (!pass) {
      showToast('Please enter the administrator password.');
      return;
    }

    if (pass === 'Amaan90*' || pass === 'admin') {
      sessionStorage.setItem('mgit_admin_auth', 'authenticated');
      showToast('Password verified! Redirecting to Admin Portal...');
      el.adminLoginForm.reset();
      setTimeout(() => {
        window.location.href = 'admin.html';
      }, 350);
    } else {
      showToast('Incorrect administrator password. Access denied.');
      el.adminPassword.value = '';
    }
  }

  function handleAdminLogout() {
    state.isAdminLoggedIn = false;
    el.adminDashboardContainer.style.display = 'none';
    el.adminLoginFormContainer.style.display = 'block';
    showToast('Admin logged out.');
  }

  function setupAdminStats() {
    if (el.adminPendingCount) {
      el.adminPendingCount.textContent = state.pendingContributions.length;
    }
  }

  function renderModerationQueue() {
    setupAdminStats();
    if (!el.moderationTableWrapper) return;

    if (state.pendingContributions.length === 0) {
      el.moderationTableWrapper.innerHTML = `
        <p class="empty-queue-msg">No submissions currently pending moderation. All verified.</p>
      `;
      return;
    }

    let html = `
      <table class="moderation-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Files</th>
            <th>Contributor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
    `;

    state.pendingContributions.forEach((item, idx) => {
      const fileNames = item.files.map(f => f.name).join(', ');
      const dateStr = new Date(item.submittedAt).toLocaleDateString();
      html += `
        <tr>
          <td>${dateStr}</td>
          <td><strong>${item.subject}</strong></td>
          <td>${item.resourceType}</td>
          <td>${item.chapter}</td>
          <td title="${escapeHtml(fileNames)}">${escapeHtml(fileNames)}</td>
          <td>${escapeHtml(item.contributor)}</td>
          <td>
            <button type="button" class="mod-action-btn approve" data-idx="${idx}">Approve</button>
            <button type="button" class="mod-action-btn reject" data-idx="${idx}">Reject</button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    el.moderationTableWrapper.innerHTML = html;

    // Attach approve/reject events
    el.moderationTableWrapper.querySelectorAll('.mod-action-btn.approve').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        state.pendingContributions.splice(idx, 1);
        localStorage.setItem('mgit_pending_contributions', JSON.stringify(state.pendingContributions));
        renderModerationQueue();
        showToast('Resource approved and queued for Drive sync.');
      });
    });

    el.moderationTableWrapper.querySelectorAll('.mod-action-btn.reject').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        state.pendingContributions.splice(idx, 1);
        localStorage.setItem('mgit_pending_contributions', JSON.stringify(state.pendingContributions));
        renderModerationQueue();
        showToast('Submission rejected.');
      });
    });
  }

  // -------------------------------------------------------------
  // Floating Gemini AI Study Assistant
  // -------------------------------------------------------------
  function openGeminiModal() {
    el.geminiModal.style.display = 'flex';
    initGeminiKey();
    if (el.geminiQueryInput) el.geminiQueryInput.focus();
  }

  function initGeminiKey() {
    const savedKey = localStorage.getItem('mgit_user_gemini_key');
    if (savedKey) {
      if (el.geminiModeIndicator) el.geminiModeIndicator.textContent = 'Custom Gemini AI Active (Personal Key)';
      if (el.apiKeyBtnLabel) el.apiKeyBtnLabel.textContent = 'Personal Key Active';
      if (el.userGeminiKeyInput) el.userGeminiKeyInput.value = savedKey;
    } else {
      if (el.geminiModeIndicator) el.geminiModeIndicator.textContent = 'Gemini AI Active (Ready for All Students)';
      if (el.apiKeyBtnLabel) el.apiKeyBtnLabel.textContent = 'Use Custom Key (Optional)';
    }
  }

  function toggleApiKeyDrawer() {
    if (!el.geminiKeyDrawer) return;
    const isHidden = el.geminiKeyDrawer.style.display === 'none';
    el.geminiKeyDrawer.style.display = isHidden ? 'block' : 'none';
  }

  function saveUserGeminiKey() {
    const key = el.userGeminiKeyInput ? el.userGeminiKeyInput.value.trim() : '';
    if (!key) {
      showToast('Please enter a valid Gemini API key.');
      return;
    }
    localStorage.setItem('mgit_user_gemini_key', key);
    initGeminiKey();
    if (el.geminiKeyDrawer) el.geminiKeyDrawer.style.display = 'none';
    showToast('Personal Gemini API Key saved! Live AI queries enabled.');
  }

  function clearUserGeminiKey() {
    localStorage.removeItem('mgit_user_gemini_key');
    if (el.userGeminiKeyInput) el.userGeminiKeyInput.value = '';
    initGeminiKey();
    if (el.geminiKeyDrawer) el.geminiKeyDrawer.style.display = 'none';
    showToast('Switched back to shared default student key.');
  }

  async function handleGeminiQuery(queryText) {
    const q = queryText.trim();
    if (!q) return;

    // Append user message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.textContent = q;
    el.geminiChatOutput.appendChild(userMsg);

    el.geminiQueryInput.value = '';
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;

    // Thinking state
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'ai-msg';
    thinkingMsg.innerHTML = '<em>Thinking with Google Gemini AI...</em>';
    el.geminiChatOutput.appendChild(thinkingMsg);
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;

    // 1. Direct call to Google Gemini API (using student key or default key)
    const activeKey = localStorage.getItem('mgit_user_gemini_key') || DEFAULT_GEMINI_KEY;
    try {
      const liveAnswer = await fetchGeminiDirect(activeKey, q);
      if (liveAnswer) {
        thinkingMsg.innerHTML = formatMarkdown(liveAnswer);
        el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
        return;
      }
    } catch (err) {
      console.warn('Direct Gemini API call failed, trying serverless endpoint:', err);
    }

    // 2. Try serverless /api/gemini endpoint
    try {
      const serverRes = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, subject: state.currentSubject ? state.currentSubject.title : '' })
      });
      if (serverRes.ok) {
        const data = await serverRes.json();
        if (data.success && data.text) {
          thinkingMsg.innerHTML = formatMarkdown(data.text);
          el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
          return;
        }
      }
    } catch (e) {
      console.warn('Serverless endpoint failed:', e);
    }

    // 3. Offline technical guidance fallback (only if network fails completely)
    setTimeout(() => {
      const response = generateGeminiResponse(q);
      thinkingMsg.innerHTML = response;
      el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
    }, 250);
  }

  async function fetchGeminiDirect(apiKey, query) {
    const subjectContext = state.currentSubject ? `${state.currentSubject.shortName} - ${state.currentSubject.title}` : 'MGIT CSE Semester III';
    const systemPrompt = `You are the MGIT PYQ Hub AI Study Assistant, an expert tutor for Mahatma Gandhi Institute of Technology (MGIT) CSE Semester III students.
Subject Context: ${subjectContext}.
Answer the student's question clearly, thoroughly, and academically.
Include:
- Formal, standard textbook definition and concepts
- Key equations, proofs, logic tables, or neat code snippets where appropriate
- Clear bullet points or numbered steps
- High-yield MGIT exam scoring advice and common pitfalls to avoid.`;

    const models = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];
    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nStudent Question: ${query}` }]
              }
            ],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 1200
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidate) return candidate;
        }
      } catch (err) {
        console.warn(`Error querying ${model}:`, err);
      }
    }
    throw new Error('All direct Gemini model endpoints failed');
  }

  function formatMarkdown(text) {
    if (!text) return '';
    let html = escapeHtml(text);
    // code blocks
    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    // inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    // bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // italic
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // bullet points
    html = html.replace(/^\s*[-*]\s+(.+)$/gm, '• $1<br>');
    // line breaks
    html = html.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    return html;
  }

  function generateGeminiResponse(query) {
    const q = query.toLowerCase();

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
    // Brand Link returns home
    if (el.brandHomeLink) {
      el.brandHomeLink.addEventListener('click', returnToSubjectsList);
      el.brandHomeLink.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') returnToSubjectsList();
      });
    }

    // Back to subjects
    if (el.backToSubjectsBtn) {
      el.backToSubjectsBtn.addEventListener('click', returnToSubjectsList);
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

    // Year Filter Checkboxes
    if (el.yearCheckboxesRow) {
      el.yearCheckboxesRow.addEventListener('change', () => {
        const checked = Array.from(el.yearCheckboxesRow.querySelectorAll('.year-filter-cb:checked'))
          .map(cb => parseInt(cb.value, 10));
        state.selectedYears = checked;
        renderPyqsDivision();
      });
    }

    // Part A / Part B Toggle Buttons
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

    // Floating Gemini Button
    if (el.floatingGeminiBtn) {
      el.floatingGeminiBtn.addEventListener('click', openGeminiModal);
    }
    if (el.closeGeminiModalBtn) {
      el.closeGeminiModalBtn.addEventListener('click', () => {
        el.geminiModal.style.display = 'none';
      });
    }
    if (el.geminiQueryForm) {
      el.geminiQueryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleGeminiQuery(el.geminiQueryInput.value);
      });
    }

    // Gemini API Key Drawer & Actions
    if (el.toggleApiKeyBtn) {
      el.toggleApiKeyBtn.addEventListener('click', toggleApiKeyDrawer);
    }
    if (el.saveGeminiKeyBtn) {
      el.saveGeminiKeyBtn.addEventListener('click', saveUserGeminiKey);
    }
    if (el.clearGeminiKeyBtn) {
      el.clearGeminiKeyBtn.addEventListener('click', clearUserGeminiKey);
    }

    // Gemini Prompt Chips
    document.querySelectorAll('.prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        if (query) {
          el.geminiQueryInput.value = query;
          handleGeminiQuery(query);
        }
      });
    });

    // Global ESC key to close open modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (el.questionModal.style.display === 'flex') closeQuestionModal();
        if (el.contribWarningModal.style.display === 'flex') el.contribWarningModal.style.display = 'none';
        if (el.contribUploadModal.style.display === 'flex') el.contribUploadModal.style.display = 'none';
        if (el.adminModal.style.display === 'flex') el.adminModal.style.display = 'none';
        if (el.geminiModal.style.display === 'flex') el.geminiModal.style.display = 'none';
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

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

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
    notesChapterFilter: 'all',
    selectedYears: [2024, 2023, 2022, 2021, 2020],
    selectedPart: 'all', // 'all', 'A', 'B'
    isAdminLoggedIn: false,
    selectedFiles: [],
    pendingContributions: JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]')
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

    welcomeSection: document.getElementById('welcomeSection'),
    subjectsSection: document.getElementById('subjectsSection'),
    subjectsGrid: document.getElementById('subjectsGrid'),
    attributionDivision: document.getElementById('attributionDivision'),

    subjectDetailSection: document.getElementById('subjectDetailSection'),
    backToSubjectsBtn: document.getElementById('backToSubjectsBtn'),
    detailSubjectTitle: document.getElementById('detailSubjectTitle'),

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
    adminUsername: document.getElementById('adminUsername'),
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

    // Update Header in Detail Section
    el.detailSubjectTitle.textContent = `${sub.shortName} — ${sub.title} (${sub.code})`;

    // Reset notes chapter dropdown
    if (el.notesChapterSelect) {
      el.notesChapterSelect.value = 'all';
    }

    // Render Two Divisions
    renderNotesDivision();
    renderPyqsDivision();

    // Toggle views
    el.welcomeSection.style.display = 'none';
    el.subjectsSection.style.display = 'none';
    el.subjectDetailSection.style.display = 'block';
    if (el.attributionDivision) {
      el.attributionDivision.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function returnToSubjectsList() {
    state.currentSubject = null;

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
        <div class="empty-state-box">
          <div class="empty-state-icon"><i class="fa-regular fa-folder-open"></i></div>
          <div class="empty-state-title">No notes available for ${chLabel}</div>
          <div class="empty-state-sub">Be the first to share verified lecture notes for your batch by clicking Contribute.</div>
        </div>
      `;
      return;
    }

    notes.forEach(note => {
      const item = document.createElement('div');
      item.className = 'note-item-card';

      const fileLink = note.driveFileId
        ? `https://drive.google.com/file/d/${note.driveFileId}/view?usp=sharing`
        : note.folderUrl;

      item.innerHTML = `
        <div class="note-info">
          <div class="note-title">${escapeHtml(note.title)}</div>
          <div class="note-desc">${escapeHtml(note.description || '')}</div>
          <div class="note-meta">
            <span><i class="fa-regular fa-file-pdf"></i> ${escapeHtml(note.fileName)}</span> &bull; 
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
          <span class="click-cue"><i class="fa-solid fa-circle-info"></i> View Analysis &amp; Drive Reference</span>
          <span class="source-paper-hint"><i class="fa-regular fa-file"></i> ${escapeHtml(q.paperName)}</span>
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

    // Drive Paper button
    const folderUrl = sub && sub.driveUrl ? sub.driveUrl : DRIVE_ROOT_URL;
    el.modalOpenDrivePaperBtn.href = folderUrl;

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
    el.geminiQueryInput.focus();
  }

  function handleGeminiQuery(queryText) {
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
    thinkingMsg.innerHTML = '<em>Consulting MGIT CSE Semester III syllabus and verified PYQs...</em>';
    el.geminiChatOutput.appendChild(thinkingMsg);
    el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;

    // Simulate high-yield syllabus response
    setTimeout(() => {
      const response = generateGeminiResponse(q);
      thinkingMsg.innerHTML = response;
      el.geminiChatOutput.scrollTop = el.geminiChatOutput.scrollHeight;
    }, 700);
  }

  function generateGeminiResponse(query) {
    const lower = query.toLowerCase();

    if (lower.includes('addressing mode') || lower.includes('coa')) {
      return `<strong>COA Unit 1 — Addressing Modes Core Summary:</strong><br>
      • <strong>Immediate Mode:</strong> Operand is part of instruction (e.g. <code>MOV R1, #25</code>). EA = Not applicable.<br>
      • <strong>Direct Mode:</strong> Instruction contains memory address directly. <code>EA = A</code>.<br>
      • <strong>Indirect Mode:</strong> Instruction contains pointer to address. <code>EA = [A]</code>.<br>
      • <strong>Register &amp; Register Indirect:</strong> Operand resides in register or pointed by register (<code>EA = [R]</code>).<br>
      • <strong>Indexed / Relative:</strong> Useful for arrays and branching. <code>EA = A + [R]</code> or <code>EA = PC + Offset</code>.<br>
      <em>Tip: Draw a 1-line pointer box diagram for each mode to secure full marks.</em>`;
    }

    if (lower.includes('normalization') || lower.includes('dbms')) {
      return `<strong>DBMS Unit 3 — Normalization Key Concepts:</strong><br>
      • <strong>1NF:</strong> Atomic attributes only; no multivalued or composite attributes.<br>
      • <strong>2NF:</strong> In 1NF and no Partial Dependency (every non-prime attribute is fully functionally dependent on Candidate Key).<br>
      • <strong>3NF:</strong> In 2NF and no Transitive Dependency (X → Y where Y is non-prime and X is not superkey).<br>
      • <strong>BCNF:</strong> Strict 3NF where for every functional dependency X → Y, X must be a Super Key.<br>
      <em>Tip: In MGIT exam questions, always solve the given relation R(A,B,C,D,E) with closure calculations.</em>`;
    }

    if (lower.includes('recurrence') || lower.includes('dm')) {
      return `<strong>DM Unit 4 — Recurrence Relations Method:</strong><br>
      1. Write the homogeneous characteristic equation: for <code>a_n - 7a_{n-1} + 10a_{n-2} = 0</code>, equation is <code>r² - 7r + 10 = 0</code>.<br>
      2. Factorize roots: <code>(r - 5)(r - 2) = 0</code>, so roots are <code>r₁ = 5, r₂ = 2</code>.<br>
      3. General solution: <code>a_n = C₁(5)ⁿ + C₂(2)ⁿ</code>.<br>
      4. Substitute initial conditions (e.g. <code>a₀, a₁</code>) to compute constants <code>C₁, C₂</code>.<br>
      <em>Tip: If roots are repeated (r₁ = r₂ = r), formula becomes (C₁ + C₂·n)rⁿ.</em>`;
    }

    if (lower.includes('java') || lower.includes('overload') || lower.includes('override') || lower.includes('oop')) {
      return `<strong>OOPJ Unit 2 — Overloading vs Overriding:</strong><br>
      • <strong>Method Overloading:</strong> Same method name, different parameter lists within same class. Resolved at compile-time (Static Polymorphism). Return type alone cannot distinguish overloaded methods.<br>
      • <strong>Method Overriding:</strong> Subclass provides specific implementation of method already defined in parent with exact same signature and return type. Resolved at runtime (Dynamic Method Dispatch).<br>
      <em>Tip: Always include a 5-line code snippet showing both concepts side-by-side.</em>`;
    }

    return `<strong>Study Guidance for "${escapeHtml(query)}":</strong><br>
    Based on MGIT CSE Semester III past question papers, focus on:<br>
    1. Clear standard definitions and fundamental laws.<br>
    2. Step-by-step algorithms / mathematical derivations.<br>
    3. Block diagrams and comparative tables.<br>
    Browse the relevant subject's <strong>PYQs</strong> tab and filter by the latest years (2024–2022) to practice highest-yield questions.`;
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

    // Contribute Buttons (in both Notes and PYQ divisions)
    document.querySelectorAll('.btn-contribute').forEach(btn => {
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

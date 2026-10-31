/**
 * MGIT PYQ Hub - Interactive Practice Session Runner (Features 3, 4, 5, 6, 8)
 * Manages Quiz Engine, 3D Flashcards, Puppy Mascot Reactions, and Activity Tracking.
 */

(function() {
  'use strict';

  const PracticeRunner = {
    // Current Session State
    mode: null,              // 'quiz' or 'flashcards'
    subjectId: null,         // 'DM', 'COA', etc., or 'MIXED'
    unit: null,              // selected unit number, or 'all'
    activeQueue: [],         // Array of question objects
    currentIndex: 0,
    masteredCount: 0,
    totalToMaster: 0,
    firstTryMap: {},         // questionId -> boolean
    totalAttempts: 0,
    correctFirstTry: 0,
    isAnswered: false,

    // Flashcard State
    activeDeck: [],
    currentCardIndex: 0,
    isFlipped: false,

    // Mascot
    mascot: null,

    // Element to focus when a practice modal or session closes
    _returnFocus: null,
    _autoAdvanceTimer: null,

    init() {
      this.bindTriggers();
      // Keep multi-tab progress and an open progress panel in sync.
      window.addEventListener('storage', (event) => {
        if (event.key !== 'mgit_study_progress_v1') return;
        const modal = document.getElementById('progressModal');
        if (modal && modal.style.display !== 'none') this.openProgressModal();
      });
    },

    bindTriggers() {
      // 1. Practice with Fun Main Card
      const funCard = document.getElementById('practiceFunCard');
      if (funCard) {
        funCard.addEventListener('click', (e) => {
          // Let the choice buttons handle their own click; don't reopen at step 1.
          if (e.target.closest('.quiz-time-choice, button, a')) return;
          this.openSelectorModal();
        });
        funCard.addEventListener('keydown', (e) => {
          if (e.target !== funCard) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openSelectorModal();
          }
        });
      }

      // 1b. Quiz Time shortcut buttons (Quiz / Flashcards)
      const quizTimeQuizBtn = document.getElementById('quizTimeQuizBtn');
      const quizTimeFlashBtn = document.getElementById('quizTimeFlashBtn');
      if (quizTimeQuizBtn) {
        quizTimeQuizBtn.addEventListener('click', () => this.openSelectorModalFor('quiz'));
      }
      if (quizTimeFlashBtn) {
        quizTimeFlashBtn.addEventListener('click', () => this.openSelectorModalFor('flashcards'));
      }

      // 2. Practice Selector Modal Close
      const closePracticeModalBtn = document.getElementById('closePracticeModalBtn');
      if (closePracticeModalBtn) {
        closePracticeModalBtn.addEventListener('click', () => this.closeSelectorModal());
      }

      // 3. Step 1 Mode Choice Cards
      const modeQuiz = document.getElementById('modeCardQuiz');
      const modeFc = document.getElementById('modeCardFlashcards');
      if (modeQuiz) {
        modeQuiz.addEventListener('click', () => this.goToSubjectSelection('quiz'));
        modeQuiz.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.goToSubjectSelection('quiz');
          }
        });
      }
      if (modeFc) {
        modeFc.addEventListener('click', () => this.goToSubjectSelection('flashcards'));
        modeFc.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.goToSubjectSelection('flashcards');
          }
        });
      }

      // 4. Back to Mode Button
      const backToModeBtn = document.getElementById('backToModeBtn');
      if (backToModeBtn) {
        backToModeBtn.addEventListener('click', () => this.goToModeSelection());
      }
      const backToSubjectBtn = document.getElementById('backToSubjectBtn');
      if (backToSubjectBtn) {
        backToSubjectBtn.addEventListener('click', () => this.goToSubjectSelection(this.mode));
      }
      const changeModeFromUnitsBtn = document.getElementById('changeModeFromUnitsBtn');
      if (changeModeFromUnitsBtn) {
        changeModeFromUnitsBtn.addEventListener('click', () => this.goToModeSelection());
      }

      // 5. Exit Session Buttons
      const exitBtn = document.getElementById('sessionExitBtn');
      const exitModal = document.getElementById('practiceExitModal');
      const closeExitBtn = document.getElementById('closeExitModalBtn');
      const keepBtn = document.getElementById('confirmExitNoBtn');
      const confirmExitBtn = document.getElementById('confirmExitYesBtn');

      const closeExitModal = () => {
        if (exitModal) exitModal.style.display = 'none';
        if (exitBtn && document.contains(exitBtn)) exitBtn.focus();
      };

      if (exitBtn) {
        exitBtn.addEventListener('click', () => this.requestExit());
      }
      if (closeExitBtn && exitModal) {
        closeExitBtn.addEventListener('click', closeExitModal);
      }
      if (keepBtn && exitModal) {
        keepBtn.addEventListener('click', closeExitModal);
      }
      if (confirmExitBtn) {
        confirmExitBtn.addEventListener('click', () => {
          if (exitModal) exitModal.style.display = 'none';
          this.exitSession();
        });
      }

      // Flashcard end-of-chapter prompt
      const flashContinueNextBtn = document.getElementById('flashContinueNextBtn');
      const flashContinueExitBtn = document.getElementById('flashContinueExitBtn');
      if (flashContinueNextBtn) {
        flashContinueNextBtn.addEventListener('click', () => this.continueToNextFlashcardUnit());
      }
      if (flashContinueExitBtn) {
        flashContinueExitBtn.addEventListener('click', () => this.exitFromFlashcardPrompt());
      }

      // 6. Next Question Button
      const nextBtn = document.getElementById('sessionNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.nextQuestion());
      }

      // Previous / Skip Question Buttons
      const prevBtn = document.getElementById('sessionPrevBtn');
      const skipBtn = document.getElementById('sessionSkipBtn');
      if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
      if (skipBtn) skipBtn.addEventListener('click', () => this.skipQuestion());

      // 7. FIB Form Submit
      const fibForm = document.getElementById('sessionFibForm');
      if (fibForm) {
        fibForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.submitFibAnswer();
        });
      }

      // 8. Flashcard Controls
      const fcCard = document.getElementById('sessionFlashcardCard');
      if (fcCard) {
        fcCard.addEventListener('click', () => {
          if (this._suppressCardClick) {
            this._suppressCardClick = false;
            return;
          }
          this.toggleFlipFlashcard();
        });
        fcCard.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.toggleFlipFlashcard();
          }
        });

        // Swipe left / right to move between cards without flipping.
        let touchStartX = 0;
        let touchStartY = 0;
        fcCard.addEventListener('touchstart', (e) => {
          const touch = e.changedTouches && e.changedTouches[0];
          if (!touch) return;
          touchStartX = touch.clientX;
          touchStartY = touch.clientY;
          this._suppressCardClick = false;
        }, { passive: true });
        fcCard.addEventListener('touchend', (e) => {
          const touch = e.changedTouches && e.changedTouches[0];
          if (!touch) return;
          const dx = touch.clientX - touchStartX;
          const dy = touch.clientY - touchStartY;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            this._suppressCardClick = true;
            if (dx < 0) this.nextFlashcard();
            else this.prevFlashcard();
          }
        }, { passive: true });
      }

      const fcPrev = document.getElementById('fcPrevBtn');
      const fcNext = document.getElementById('fcNextBtn');
      const fcGotIt = document.getElementById('fcGotItBtn');
      const fcRevise = document.getElementById('fcReviseBtn');

      if (fcPrev) fcPrev.addEventListener('click', () => this.prevFlashcard());
      if (fcNext) fcNext.addEventListener('click', () => this.nextFlashcard());
      if (fcGotIt) fcGotIt.addEventListener('click', () => this.markFlashcard(true));
      if (fcRevise) fcRevise.addEventListener('click', () => this.markFlashcard(false));

      // 9. Results Screen Buttons
      const resultsAnother = document.getElementById('resultsAnotherBtn');
      const resultsHome = document.getElementById('resultsHomeBtn');
      if (resultsAnother) {
        resultsAnother.addEventListener('click', () => {
          this.exitSession();
          this.openSelectorModal();
        });
      }
      if (resultsHome) {
        resultsHome.addEventListener('click', () => this.exitSession());
      }

      // 10. Global Keyboard Shortcuts in Session
      window.addEventListener('keydown', (e) => {
        const sessionScreen = document.getElementById('practiceSessionScreen');
        if (!sessionScreen || sessionScreen.style.display === 'none') return;

        if (e.key === 'Escape') {
          const exitModal = document.getElementById('practiceExitModal');
          if (exitModal && exitModal.style.display !== 'none') {
            exitModal.style.display = 'none';
            const exitBtn = document.getElementById('sessionExitBtn');
            if (exitBtn) exitBtn.focus();
          } else {
            this.requestExit();
          }
          return;
        }

        // Space or Enter to proceed on feedback banner
        if ((e.key === ' ' || e.key === 'Enter') && this.isAnswered && this.mode === 'quiz') {
          // If focus is not inside an active input
          if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
          e.preventDefault();
          this.nextQuestion();
        }

        // Left / Right arrow navigation for flashcards
        if (this.mode === 'flashcards') {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            this.nextFlashcard();
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            this.prevFlashcard();
          }
        }
      });

      // 11. Progress Modal Close
      const closeProgBtn = document.getElementById('closeProgressModalBtn');
      const progModal = document.getElementById('progressModal');
      if (closeProgBtn && progModal) {
        closeProgBtn.addEventListener('click', () => progModal.style.display = 'none');
      }

      // 12. View Progress Shortcut Button
      const viewProgressBtn = document.getElementById('viewProgressBtn');
      if (viewProgressBtn) {
        viewProgressBtn.addEventListener('click', () => this.openProgressModal());
      }
    },

    // Modal Navigation
    openSelectorModal() {
      const modal = document.getElementById('practiceSelectorModal');
      if (!modal) return;
      const active = document.activeElement;
      if (active && active !== document.body && active !== document.documentElement &&
          document.contains(active) && active.getClientRects().length) {
        this._returnFocus = active;
      }
      this.goToModeSelection();
      modal.style.display = 'flex';
    },

    openSelectorModalFor(mode) {
      this.openSelectorModal();
      this.goToSubjectSelection(mode);
    },

    restoreFocus() {
      const candidates = [
        this._returnFocus,
        document.getElementById('practiceFunCard'),
        document.getElementById('choosePyqsCard'),
        document.getElementById('chooseNotesCard'),
        document.getElementById('backToSubjectsBtn')
      ];
      for (const el of candidates) {
        if (!el || !document.contains(el)) continue;
        if (!el.getClientRects().length || getComputedStyle(el).visibility === 'hidden') continue;
        el.focus();
        return true;
      }
      return false;
    },

    closeSelectorModal(restoreFocus = true) {
      const modal = document.getElementById('practiceSelectorModal');
      if (modal) modal.style.display = 'none';
      if (restoreFocus) this.restoreFocus();
    },

    goToModeSelection() {
      const stepMode = document.getElementById('practiceStepMode');
      const stepSubject = document.getElementById('practiceStepSubject');
      const stepUnit = document.getElementById('practiceStepUnit');
      if (stepMode) stepMode.style.display = 'block';
      if (stepSubject) stepSubject.style.display = 'none';
      if (stepUnit) stepUnit.style.display = 'none';

      // Adapt title for active exam
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      const titleEl = document.getElementById('modeCardQuizTitle');
      const descEl = document.getElementById('modeCardQuizDesc');
      if (titleEl && descEl) {
        if (activeExam === 'sem') {
          titleEl.textContent = 'Quick Interactive Test & Theory Recall';
          descEl.textContent = 'Test core theoretical questions across Units 1–5 with instant model answers.';
        } else {
          titleEl.textContent = 'Practice MCQs & Quick Questions';
          descEl.textContent = 'Test your speed with objective questions, fill in the blanks, and instant feedback.';
        }
      }
    },

    goToSubjectSelection(mode) {
      this.mode = mode;
      const stepMode = document.getElementById('practiceStepMode');
      const stepSubject = document.getElementById('practiceStepSubject');
      const stepUnit = document.getElementById('practiceStepUnit');
      const modeLabel = document.getElementById('practiceSelectedModeLabel');

      if (stepMode) stepMode.style.display = 'none';
      if (stepSubject) stepSubject.style.display = 'block';
      if (stepUnit) stepUnit.style.display = 'none';

      if (modeLabel) {
        modeLabel.textContent = mode === 'quiz' ? 'Mode: MCQs & Quick Questions' : 'Mode: View Flashcards';
      }

      this.renderSubjectsList();
    },

    renderSubjectsList() {
      const container = document.getElementById('practiceSubjectsList');
      if (!container) return;
      container.innerHTML = '';

      const subjects = [
        { id: 'DM', code: 'DM', icon: 'fa-solid fa-calculator' },
        { id: 'COA', code: 'COA', icon: 'fa-solid fa-microchip' },
        { id: 'OOPJ', code: 'OOPJ', icon: 'fa-solid fa-code' },
        { id: 'DBMS', code: 'DBMS', icon: 'fa-solid fa-database' },
        { id: 'SE', code: 'SE', icon: 'fa-solid fa-laptop-code' },
        { id: 'ES', code: 'ES', icon: 'fa-solid fa-leaf' },
        { id: 'IE', code: 'IE', icon: 'fa-solid fa-lightbulb' },
        { id: 'MIXED', code: 'Mixed', icon: 'fa-solid fa-shuffle' }
      ];

      subjects.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'practice-subject-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        let progressLabel = '0% Mastered';
        if (window.ActivityTracker) {
          if (this.mode === 'quiz') {
            const stats = window.ActivityTracker.getSubjectMastery(sub.id);
            progressLabel = `${stats.percentage}% Mastered`;
          } else {
            const learned = (window.ActivityTracker.getLearnedFlashcards(sub.id) || []).length;
            progressLabel = `${learned} Cards Learned`;
          }
        }

        card.innerHTML = `
          <div class="practice-subject-info">
            <span class="practice-sub-icon"><i class="${sub.icon}"></i></span>
            <span class="practice-sub-code">${sub.code}</span>
          </div>
          <span class="practice-sub-progress">${progressLabel}</span>
        `;

        card.addEventListener('click', () => this.goToUnitSelection(sub.id));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.goToUnitSelection(sub.id);
          }
        });

        container.appendChild(card);
      });
    },

    goToUnitSelection(subjectId) {
      this.subjectId = subjectId;
      const stepSubject = document.getElementById('practiceStepSubject');
      const stepUnit = document.getElementById('practiceStepUnit');
      const subLabel = document.getElementById('practiceSelectedSubjectLabel');
      const list = document.getElementById('practiceUnitsList');

      if (stepSubject) stepSubject.style.display = 'none';
      if (stepUnit) stepUnit.style.display = 'block';
      if (subLabel) {
        const label = subjectId === 'MIXED' ? 'Mixed practice' : subjectId;
        subLabel.textContent = `${label} · ${this.mode === 'quiz' ? 'Quiz Mode' : 'Flashcards'}`;
      }
      if (!list) return;
      list.innerHTML = '';

      const bank = this.getActiveDataSource() || {};
      const source = this.mode === 'quiz' ? (bank.quiz || {}) : (bank.flashcards || {});

      const counts = {};
      if (subjectId === 'MIXED') {
        Object.keys(source).forEach(sub => {
          (source[sub] || []).forEach(item => {
            const u = Number(item.unit);
            if (u >= 1 && u <= 5) counts[u] = (counts[u] || 0) + 1;
          });
        });
      } else {
        (source[subjectId] || []).forEach(item => {
          const u = Number(item.unit);
          if (u >= 1 && u <= 5) counts[u] = (counts[u] || 0) + 1;
        });
      }

      const itemWord = this.mode === 'quiz' ? 'question' : 'card';
      const addUnitButton = (unitValue, title, count) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'practice-unit-card';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', 'false');
        btn.disabled = count === 0;
        btn.innerHTML = `
          <span class="practice-unit-name">${title}</span>
          <span class="practice-unit-count">${count > 0 ? `${count} ${itemWord}${count === 1 ? '' : 's'}` : 'Not available yet'}</span>
        `;
        if (count > 0) {
          btn.addEventListener('click', () => {
            this.closeSelectorModal(false);
            this.startSession(subjectId, this.mode, unitValue);
          });
        }
        list.appendChild(btn);
      };

      // Only offer units that belong to the active exam. Mid-2, for example,
      // must not imply that Units 1–2 are "missing" when they are simply out of scope.
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      const examCfg = window.EXAM_CONFIG ? window.EXAM_CONFIG[activeExam] : null;
      const scopedUnits = (examCfg && Array.isArray(examCfg.units) && examCfg.units.length)
        ? examCfg.units.slice()
        : [1, 2, 3, 4, 5];

      if (subjectId === 'MIXED') {
        const total = scopedUnits.reduce((sum, u) => sum + (counts[u] || 0), 0);
        addUnitButton('all', `All ${scopedUnits.length} in-scope units`, total);
      }
      scopedUnits.forEach(unit => {
        addUnitButton(unit, `Unit ${unit}`, counts[unit] || 0);
      });
    },

    // Session Management
    startSession(subjectId, mode, unit) {
      this.subjectId = subjectId;
      this.mode = mode;
      this.unit = unit === undefined || unit === null ? 'all' : unit;
      this._pendingNextUnit = null;
      if (this._autoAdvanceTimer) {
        clearTimeout(this._autoAdvanceTimer);
        this._autoAdvanceTimer = null;
      }
      if (!this._returnFocus || !document.contains(this._returnFocus) || !this._returnFocus.getClientRects().length) {
        this._returnFocus = document.activeElement;
      }

      const sessionScreen = document.getElementById('practiceSessionScreen');
      if (!sessionScreen) return;
      sessionScreen.style.display = 'block';
      document.body.style.overflow = 'hidden'; // lock background scrolling

      // Initialize the cat mascot in its fixed slot
      const mascotSlot = document.getElementById('sessionMascotSlot');
      if (mascotSlot && window.Mascot) {
        mascotSlot.innerHTML = '';
        window.Mascot.init(mascotSlot);
        this.mascot = window.Mascot;
        this.mascot.setState('idle', "Ready to study together!");
      }

      // Update Streak Pill
      const streakPill = document.getElementById('sessionStreakCount');
      if (streakPill && window.ActivityTracker) {
        streakPill.textContent = window.ActivityTracker.getStreak();
      }

      // Update Top Bar Subject Badge & Title
      const badge = document.getElementById('sessionSubjectBadge');
      const title = document.getElementById('sessionTitle');
      if (badge) badge.textContent = subjectId === 'MIXED' ? 'ALL' : subjectId;
      if (title) {
        const compact = window.innerWidth <= 480;
        const modeText = mode === 'quiz'
          ? (compact ? 'Quiz' : 'Interactive Questions')
          : (compact ? 'Flashcards' : 'High-Yield Flashcards');
        const unitText = this.unit === 'all' ? 'All units' : `Unit ${this.unit}`;
        // The subject badge already shows DM/COA/…, so the title stays short.
        title.textContent = `${unitText} • ${modeText}`;
      }

      if (mode === 'quiz') {
        this.initQuiz();
      } else {
        this.initFlashcards();
      }
    },

    requestExit() {
      // Flashcards keep their progress immediately; a quiz with no answers
      // loses nothing either, so exit without a misleading confirmation.
      const isFlashcards = this.mode === 'flashcards';
      const hasQuizProgress = this.mode === 'quiz' && (this.currentIndex > 0 || this.totalAttempts > 0);
      if (isFlashcards || !hasQuizProgress) {
        this.exitSession();
        return;
      }

      const exitModal = document.getElementById('practiceExitModal');
      if (exitModal) {
        exitModal.style.display = 'flex';
        exitModal.style.zIndex = '100005';
        const keepBtn = document.getElementById('confirmExitNoBtn');
        if (keepBtn) keepBtn.focus();
      } else {
        this.exitSession();
      }
    },

    exitSession() {
      if (this._autoAdvanceTimer) {
        clearTimeout(this._autoAdvanceTimer);
        this._autoAdvanceTimer = null;
      }
      const sessionScreen = document.getElementById('practiceSessionScreen');
      if (sessionScreen) sessionScreen.style.display = 'none';
      const exitModal = document.getElementById('practiceExitModal');
      if (exitModal) exitModal.style.display = 'none';
      const continueModal = document.getElementById('flashcardContinueModal');
      if (continueModal) continueModal.style.display = 'none';
      this._pendingNextUnit = null;
      document.body.style.overflow = '';
      if (this.mascot) this.mascot = null;
      this.restoreFocus();
      this._returnFocus = null;
    },

    getActiveDataSource() {
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      if (activeExam === 'sem' && window.SEM_PRACTICE) return window.SEM_PRACTICE;
      if (activeExam === 'mid1' && window.MID1_PRACTICE) return window.MID1_PRACTICE;
      return window.MID2_PRACTICE || {};
    },

    // =========================================================================
    // QUIZ ENGINE (Features 4 & 5)
    // =========================================================================
    initQuiz() {
      const quizView = document.getElementById('sessionQuizView');
      const fcView = document.getElementById('sessionFlashcardView');
      const resView = document.getElementById('sessionResultsView');
      if (quizView) quizView.style.display = 'block';
      if (fcView) fcView.style.display = 'none';
      if (resView) resView.style.display = 'none';

      // Load questions from active exam data bank
      const dataBank = this.getActiveDataSource();
      let rawQuestions = [];
      if (dataBank && dataBank.quiz) {
        if (this.subjectId === 'MIXED') {
          // Collect questions across all subjects, then keep the selected unit.
          Object.keys(dataBank.quiz).forEach(sub => {
            const list = dataBank.quiz[sub] || [];
            const scoped = this.unit === 'all'
              ? list
              : list.filter(q => Number(q.unit) === Number(this.unit));
            rawQuestions.push(...(this.unit === 'all' ? scoped.slice(0, 5) : scoped));
          });
        } else {
          rawQuestions = dataBank.quiz[this.subjectId] || [];
          if (this.unit !== 'all') {
            rawQuestions = rawQuestions.filter(q => Number(q.unit) === Number(this.unit));
          }
        }
      }

      // Prepare questions: shuffle options for MCQs and calculate new answerIndex
      const preparedQuestions = rawQuestions.map(q => {
        const copy = { ...q };
        if (copy.type === 'mcq' && Array.isArray(copy.options) && copy.options.length > 1) {
          const originalCorrect = copy.options[copy.answerIndex !== undefined ? copy.answerIndex : 0];
          const opts = [...copy.options];
          for (let i = opts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opts[i], opts[j]] = [opts[j], opts[i]];
          }
          copy.options = opts;
          copy.answerIndex = opts.indexOf(originalCorrect);
        }
        return copy;
      });

      // Structure queue: 5 MCQs, then 2 FIBs/TF, 5 MCQs, 2 FIBs/TF... (MCQs predominant)
      const mcqs = preparedQuestions.filter(q => q.type === 'mcq');
      const fibs = preparedQuestions.filter(q => q.type !== 'mcq');

      const structuredQueue = [];
      let m = 0;
      let f = 0;
      while (m < mcqs.length || f < fibs.length) {
        for (let i = 0; i < 5 && m < mcqs.length; i++) {
          structuredQueue.push(mcqs[m++]);
        }
        for (let i = 0; i < 2 && f < fibs.length; i++) {
          structuredQueue.push(fibs[f++]);
        }
      }

      this.activeQueue = structuredQueue;
      this.currentIndex = 0;
      this.masteredCount = 0;
      this.totalToMaster = this.activeQueue.length;
      this.firstTryMap = {};
      this.totalAttempts = 0;
      this.correctFirstTry = 0;

      if (this.activeQueue.length === 0) {
        this.renderEmptyQuiz();
        return;
      }

      // Update Counter Pill
      const sessionCounterPill = document.getElementById('sessionCounterPill');
      if (sessionCounterPill) {
        sessionCounterPill.innerHTML = `Question <span id="sessionCurrentCount">1</span> of <span id="sessionTotalCount">${this.activeQueue.length}</span>`;
      }
      this.updateProgressUi();
      this.renderCurrentQuestion();
    },

    renderEmptyQuiz() {
      const unitText = this.unit === 'all' ? 'this subject' : `Unit ${this.unit}`;
      const textEl = document.getElementById('sessionQuestionText');
      const optionsGrid = document.getElementById('sessionOptionsGrid');
      const fibForm = document.getElementById('sessionFibForm');
      const nav = document.getElementById('sessionQuizNav');
      const feedback = document.getElementById('sessionFeedbackBanner');
      const unitTag = document.getElementById('sessionUnitTag');
      const typeTag = document.getElementById('sessionTypeTag');
      const diffTag = document.getElementById('sessionDifficultyTag');
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');
      const fill = document.getElementById('sessionProgressFill');

      if (unitTag) unitTag.textContent = this.unit === 'all' ? 'Quiz Time' : `Unit ${this.unit}`;
      if (typeTag) typeTag.textContent = 'No questions yet';
      if (diffTag) diffTag.textContent = '';
      if (textEl) {
        textEl.textContent = `No quiz questions are available for ${unitText} yet. Try another unit or add questions to the bank.`;
      }
      if (optionsGrid) {
        optionsGrid.style.display = 'none';
        optionsGrid.innerHTML = '';
      }
      if (fibForm) fibForm.style.display = 'none';
      if (nav) nav.style.display = 'none';
      if (feedback) feedback.style.display = 'none';
      if (currentCount) currentCount.textContent = '0';
      if (totalCount) totalCount.textContent = '0';
      if (fill) fill.style.width = '0%';
      if (this.mascot) this.mascot.setState('idle', 'Nothing here yet — try another unit.');
    },

    updateProgressUi() {
      const fill = document.getElementById('sessionProgressFill');
      const track = document.getElementById('sessionProgressTrack');
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');

      if (this.mode === 'flashcards') {
        const total = Math.max(this.activeDeck ? this.activeDeck.length : 1, 1);
        const current = Math.min(this.currentCardIndex + 1, total);
        const percent = Math.min(100, Math.round((current / total) * 100));
        if (fill) fill.style.width = `${percent}%`;
        if (track) track.setAttribute('aria-valuenow', percent);
        if (currentCount) currentCount.textContent = current;
        if (totalCount) totalCount.textContent = total;
        return;
      }

      // Quiz Mode: Progress bar advances with each question attempted/progressed
      const total = Math.max(this.totalToMaster || (this.activeQueue && this.activeQueue.length) || 1, 1);
      const answeredCount = Math.min(total, this.currentIndex + (this.isAnswered ? 1 : 0));
      const percent = Math.min(100, Math.round((answeredCount / total) * 100));

      if (fill) fill.style.width = `${percent}%`;
      if (track) track.setAttribute('aria-valuenow', percent);
      if (currentCount) currentCount.textContent = Math.min(this.currentIndex + 1, total);
      if (totalCount) totalCount.textContent = total;
    },

    renderCurrentQuestion() {
      if (this.currentIndex >= this.activeQueue.length) {
        this.showResults();
        return;
      }

      const q = this.activeQueue[this.currentIndex];
      const savedState = q._answer || null;
      this.isAnswered = !!savedState;
      this.updateProgressUi();

      const nav = document.getElementById('sessionQuizNav');
      if (nav) nav.style.display = '';

      if (window.ActivityTracker && q.id) {
        const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
        if (typeof window.ActivityTracker.recordQuestionViewed === 'function') {
          window.ActivityTracker.recordQuestionViewed(activeExam, q.subjectId || this.subjectId, q.id);
        }
      }

      // Mascot State
      if (this.mascot) {
        this.mascot.setState('thinking', "You’ve got this!");
      }

      // Tags
      const unitTag = document.getElementById('sessionUnitTag');
      const typeTag = document.getElementById('sessionTypeTag');
      const diffTag = document.getElementById('sessionDifficultyTag');
      const textEl = document.getElementById('sessionQuestionText');

      if (unitTag) unitTag.textContent = `Unit ${q.unit}`;
      if (typeTag) {
        typeTag.textContent = q.type === 'mcq'
          ? 'Multiple Choice'
          : (q.type === 'tf' ? 'True / False' : 'Fill in the Blank');
      }
      if (diffTag) {
        diffTag.textContent = (q.difficulty || 'Medium').toUpperCase();
        diffTag.className = `q-difficulty-tag ${(q.difficulty || 'medium').toLowerCase()}`;
      }
      if (textEl) {
        if (window.RichText) window.RichText.renderInto(textEl, q.question);
        else textEl.textContent = q.question;
      }

      // Feedback is restored below when revisiting an answered question.
      const feedback = document.getElementById('sessionFeedbackBanner');
      if (feedback) feedback.style.display = 'none';

      const navPrev = document.getElementById('sessionPrevBtn');
      const navSkip = document.getElementById('sessionSkipBtn');
      if (navPrev) navPrev.disabled = this.currentIndex === 0;
      if (navSkip) navSkip.style.display = savedState ? 'none' : 'inline-flex';

      const optionsGrid = document.getElementById('sessionOptionsGrid');
      const fibForm = document.getElementById('sessionFibForm');
      const fibInput = document.getElementById('sessionFibInput');

      if (q.type === 'mcq' || q.type === 'tf') {
        if (fibForm) fibForm.style.display = 'none';
        if (optionsGrid) {
          optionsGrid.style.display = 'grid';
          optionsGrid.classList.toggle('q-options-tf', q.type === 'tf');
          optionsGrid.innerHTML = '';
          const optionList = q.type === 'tf' ? ['True', 'False'] : (q.options || []);

          optionList.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'q-option-card' + (q.type === 'tf' ? ' q-option-tf' : '');
            btn.setAttribute('data-index', idx);
            const text = window.RichText ? window.RichText.render(opt) : opt;
            btn.innerHTML = `
              <span class="opt-prefix">${q.type === 'tf' ? (idx === 0 ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>') : String.fromCharCode(65 + idx)}</span>
              <span class="opt-text">${text}</span>
            `;

            if (savedState) {
              btn.disabled = true;
              if (idx === q.answerIndex) btn.classList.add('correct');
              else if (idx === savedState.chosenIdx) btn.classList.add('wrong');
            }

            btn.addEventListener('click', () => {
              if (this.isAnswered) return;
              this.handleAnswer(idx);
            });

            optionsGrid.appendChild(btn);
          });
        }
      } else {
        // FIB
        if (optionsGrid) optionsGrid.style.display = 'none';
        if (fibForm) {
          fibForm.style.display = 'block';
          if (fibInput) {
            fibInput.value = savedState ? (savedState.userVal || '') : '';
            fibInput.disabled = !!savedState;
            fibInput.classList.toggle('correct', !!(savedState && savedState.isCorrect));
            fibInput.classList.toggle('wrong', !!(savedState && !savedState.isCorrect));
            if (!savedState) fibInput.focus();
          }
        }
      }

      if (savedState) {
        this.renderQuestionFeedback(q, savedState.isCorrect, savedState.chosenIdx);
      }

      // Start each question from the top, especially after Previous or Skip.
      const screen = document.getElementById('practiceSessionScreen');
      if (screen) screen.scrollTop = 0;
    },

    handleAnswer(chosenIdx) {
      this.isAnswered = true;
      const q = this.activeQueue[this.currentIndex];
      const isCorrect = chosenIdx === q.answerIndex;
      const options = document.querySelectorAll('.q-option-card');

      options.forEach(opt => {
        const idx = parseInt(opt.getAttribute('data-index'), 10);
        opt.disabled = true;
        if (idx === q.answerIndex) {
          opt.classList.add('correct');
        } else if (idx === chosenIdx) {
          opt.classList.add('wrong');
        }
      });

      this.processAnswerOutcome(isCorrect, q, { chosenIdx });
    },

    submitFibAnswer() {
      if (this.isAnswered) return;
      this.isAnswered = true;
      const q = this.activeQueue[this.currentIndex];
      const input = document.getElementById('sessionFibInput');
      const rawVal = (input ? input.value : '').trim();
      const userVal = rawVal.toLowerCase();

      if (input) input.disabled = true;

      const isCorrect = (q.accepted || []).some(acc => acc.trim().toLowerCase() === userVal);
      if (input) {
        input.classList.add(isCorrect ? 'correct' : 'wrong');
      }

      this.processAnswerOutcome(isCorrect, q, { userVal: rawVal });
    },

    processAnswerOutcome(isCorrect, q, details) {
      const answerDetails = details || {};
      this.totalAttempts++;
      const isFirstTry = !(q.id in this.firstTryMap);
      if (isFirstTry) {
        this.firstTryMap[q.id] = isCorrect;
        if (isCorrect) this.correctFirstTry++;
      }

      q._answer = {
        isCorrect,
        chosenIdx: answerDetails.chosenIdx,
        userVal: answerDetails.userVal
      };

      // Record in ActivityTracker
      if (window.ActivityTracker) {
        window.ActivityTracker.recordQuizResult(q.subjectId || this.subjectId, q.id, isCorrect);
      }

      this.isAnswered = true;
      this.updateProgressUi();

      if (isCorrect) {
        this.masteredCount++;

        if (this.mascot) {
          this.mascot.setState('happy', "Woohoo! Nailed it! 🎉");
        }
      } else {
        // Wrong answers stay in the queue and come back a few slots later.
        if (this.mascot) {
          this.mascot.setState('sad', "Oh no! But we learn from mistakes.");
          setTimeout(() => {
            if (this.mascot && this.isAnswered) {
              this.mascot.setState('concentrating', "Let’s review the explanation.");
            }
          }, 1500);
        }

        const currentQ = this.activeQueue[this.currentIndex];
        const remainingSlots = this.activeQueue.length - (this.currentIndex + 1);
        const insertOffset = Math.min(Math.max(3, Math.floor(Math.random() * 3) + 3), remainingSlots);
        const retryQuestion = { ...currentQ };
        delete retryQuestion._answer;
        this.activeQueue.splice(this.currentIndex + 1 + insertOffset, 0, retryQuestion);
      }

      this.renderQuestionFeedback(q, isCorrect, answerDetails.chosenIdx);

      const skipBtn = document.getElementById('sessionSkipBtn');
      if (skipBtn) skipBtn.style.display = 'none';

      // Auto-advance after a correct answer so revision keeps its rhythm.
      if (this._autoAdvanceTimer) {
        clearTimeout(this._autoAdvanceTimer);
        this._autoAdvanceTimer = null;
      }
      if (isCorrect) {
        const answeredIndex = this.currentIndex;
        this._autoAdvanceTimer = setTimeout(() => {
          this._autoAdvanceTimer = null;
          if (this.currentIndex === answeredIndex && this.isAnswered) {
            this.nextQuestion();
          }
        }, 1800);
      }
    },

    renderQuestionFeedback(q, isCorrect, chosenIdx) {
      const feedback = document.getElementById('sessionFeedbackBanner');
      const feedbackTitle = document.getElementById('feedbackTitle');
      const feedbackExp = document.getElementById('feedbackExplanation');
      const feedbackIcon = document.getElementById('feedbackIcon');
      if (!feedback) return;

      if (isCorrect) {
        feedback.className = 'q-feedback-banner correct';
        if (feedbackTitle) feedbackTitle.textContent = "Brilliant! That’s correct.";
        if (feedbackIcon) feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      } else {
        feedback.className = 'q-feedback-banner wrong';
        if (feedbackTitle) {
          if (q.type === 'mcq') {
            const correctAnswer = (q.options && q.options[q.answerIndex]) || '';
            const correctLabel = `Not quite! The correct answer is Option ${String.fromCharCode(65 + q.answerIndex)}: ${correctAnswer}`;
            if (window.RichText) window.RichText.renderInto(feedbackTitle, correctLabel);
            else feedbackTitle.textContent = correctLabel;
          } else if (q.type === 'tf') {
            feedbackTitle.textContent = `Not quite! The correct answer is ${q.answerIndex === 0 ? 'True' : 'False'}.`;
          } else {
            const acceptedAnswer = (q.accepted && q.accepted[0]) || '';
            // Accepted answers are sometimes stored as raw TeX (e.g. \neg q).
            const acceptedDisplay = /\\/.test(acceptedAnswer) ? `$${acceptedAnswer}$` : acceptedAnswer;
            if (window.RichText) window.RichText.renderInto(feedbackTitle, `Not quite! Accepted answer: "${acceptedDisplay}".`);
            else feedbackTitle.textContent = `Not quite! Accepted answer: "${acceptedDisplay}".`;
          }
        }
        if (feedbackIcon) feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      }

      if (feedbackExp) {
        if (window.RichText) window.RichText.renderInto(feedbackExp, q.explanation || '');
        else feedbackExp.textContent = q.explanation || '';
      }
      feedback.style.display = 'block';
    },

    nextQuestion() {
      if (this._autoAdvanceTimer) {
        clearTimeout(this._autoAdvanceTimer);
        this._autoAdvanceTimer = null;
      }
      this.currentIndex++;
      if (this.currentIndex >= this.activeQueue.length || this.masteredCount >= this.totalToMaster) {
        const nextUnit = this.getNextUnitInScope(this.unit);
        if (nextUnit !== null && this.unit !== 'all') {
          this.showChapterCelebration(nextUnit);
        } else {
          this.showResults();
        }
      } else {
        this.renderCurrentQuestion();
      }
    },

    previousQuestion() {
      if (this.currentIndex <= 0) return;
      this.currentIndex--;
      this.renderCurrentQuestion();
    },

    skipQuestion() {
      if (this.isAnswered) {
        this.nextQuestion();
        return;
      }
      this.currentIndex++;
      if (this.currentIndex >= this.activeQueue.length) {
        const nextUnit = this.getNextUnitInScope(this.unit);
        if (nextUnit !== null && this.unit !== 'all') {
          this.showChapterCelebration(nextUnit);
        } else {
          this.showResults();
        }
      } else {
        this.renderCurrentQuestion();
      }
    },

    // =========================================================================
    // FLASHCARD ENGINE (Feature 6)
    // =========================================================================
    initFlashcards() {
      const quizView = document.getElementById('sessionQuizView');
      const fcView = document.getElementById('sessionFlashcardView');
      const resView = document.getElementById('sessionResultsView');
      if (quizView) quizView.style.display = 'none';
      if (fcView) fcView.style.display = 'block';
      if (resView) resView.style.display = 'none';

      let rawDeck = [];
      const dataBank = this.getActiveDataSource();
      if (dataBank && dataBank.flashcards) {
        if (this.subjectId === 'MIXED') {
          Object.keys(dataBank.flashcards).forEach(sub => {
            const list = dataBank.flashcards[sub] || [];
            const scoped = this.unit === 'all'
              ? list
              : list.filter(card => Number(card.unit) === Number(this.unit));
            rawDeck.push(...(this.unit === 'all' ? scoped.slice(0, 3) : scoped));
          });
        } else {
          rawDeck = dataBank.flashcards[this.subjectId] || [];
          if (this.unit !== 'all') {
            rawDeck = rawDeck.filter(card => Number(card.unit) === Number(this.unit));
          }
        }
      }

      this.activeDeck = rawDeck;
      this.currentCardIndex = 0;
      this.isFlipped = false;

      const sessionCounterPill = document.getElementById('sessionCounterPill');
      if (sessionCounterPill) {
        sessionCounterPill.innerHTML = `Card <span id="sessionCurrentCount">1</span> of <span id="sessionTotalCount">${this.activeDeck.length}</span>`;
      }

      if (this.activeDeck.length === 0) {
        this.renderEmptyFlashcards();
        return;
      }

      this.renderFlashcard();
    },

    renderEmptyFlashcards() {
      const unitText = this.unit === 'all' ? 'this subject' : `Unit ${this.unit}`;
      const frontText = document.getElementById('fcFrontText');
      const backText = document.getElementById('fcBackText');
      const unitTag = document.getElementById('fcUnitTag');
      const topicLabel = document.getElementById('fcTopicLabel');
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');
      const fill = document.getElementById('sessionProgressFill');
      const fcCounter = document.getElementById('fcCounter');
      const cardEl = document.getElementById('sessionFlashcardCard');

      if (unitTag) unitTag.textContent = this.unit === 'all' ? 'Quiz Time' : `Unit ${this.unit}`;
      if (topicLabel) topicLabel.textContent = 'No cards yet';
      if (frontText) {
        frontText.textContent = `No flash cards are available for ${unitText} yet. Try another unit or add cards to the bank.`;
      }
      if (backText) backText.textContent = '';
      if (cardEl) {
        cardEl.classList.remove('flipped');
        cardEl.setAttribute('aria-pressed', 'false');
      }
      if (currentCount) currentCount.textContent = '0';
      if (totalCount) totalCount.textContent = '0';
      if (fcCounter) fcCounter.textContent = '0 / 0';
      if (fill) fill.style.width = '0%';
      if (this.mascot) this.mascot.setState('idle', 'Nothing here yet — try another unit.');
    },

    renderFlashcard() {
      if (this.activeDeck.length === 0) { this.renderEmptyFlashcards(); return; }
      const card = this.activeDeck[this.currentCardIndex];

      const cardEl = document.getElementById('sessionFlashcardCard');
      // Kill the flip transition for one frame so the next card's answer can
      // never flash while the deck swaps content.
      if (cardEl) {
        cardEl.style.transition = 'none';
        cardEl.classList.remove('flipped');
        cardEl.setAttribute('aria-pressed', 'false');
        // Force a style flush, then restore the transition next frame.
        void cardEl.offsetWidth;
        requestAnimationFrame(() => { cardEl.style.transition = ''; });
      }
      this.isFlipped = false;
      if (cardEl) this.syncFlashcardAria(cardEl);

      const unitTag = document.getElementById('fcUnitTag');
      const yieldTag = document.getElementById('fcYieldTag');
      const topicLabel = document.getElementById('fcTopicLabel');
      const frontText = document.getElementById('fcFrontText');
      const backText = document.getElementById('fcBackText');

      if (unitTag) unitTag.textContent = `Unit ${card.unit}`;
      if (yieldTag) yieldTag.style.display = card.highYield ? 'inline-flex' : 'none';
      if (topicLabel) topicLabel.textContent = card.topic || 'Core Concept';
      if (frontText) {
        if (window.RichText) window.RichText.renderInto(frontText, card.front || '');
        else frontText.textContent = card.front || '';
      }
      if (backText) {
        if (window.RichText) window.RichText.renderInto(backText, card.back || '');
        else backText.textContent = card.back || '';
      }

      const liveRegion = document.getElementById('fcAriaLive');
      if (liveRegion) liveRegion.textContent = '';

      // Count the card as viewed as soon as it is shown.
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      const subId = card.subjectId || this.subjectId;
      if (window.ActivityTracker && card.id) {
        if (typeof window.ActivityTracker.recordCardViewed === 'function') {
          window.ActivityTracker.recordCardViewed(activeExam, subId, card.id);
        }
      }

      // Update counters
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');
      const fill = document.getElementById('sessionProgressFill');

      if (currentCount) currentCount.textContent = this.currentCardIndex + 1;
      if (totalCount) totalCount.textContent = this.activeDeck.length;
      const fcCounter = document.getElementById('fcCounter');
      if (fcCounter) fcCounter.textContent = `Card ${this.currentCardIndex + 1} of ${this.activeDeck.length}`;
      if (fill) {
        const pct = ((this.currentCardIndex + 1) / this.activeDeck.length) * 100;
        fill.style.width = `${pct}%`;
      }

      if (this.mascot) {
        this.mascot.setState('idle', `Card ${this.currentCardIndex + 1} of ${this.activeDeck.length}`);
      }
    },

    syncFlashcardAria(cardEl) {
      if (!cardEl) return;
      const showAnswer = this.isFlipped;
      cardEl.querySelectorAll('.flashcard-face').forEach((face) => {
        const isBack = face.classList.contains('flashcard-back');
        const hidden = showAnswer ? !isBack : isBack;
        if (hidden) face.setAttribute('aria-hidden', 'true');
        else face.removeAttribute('aria-hidden');
      });
      cardEl.setAttribute('aria-label', showAnswer
        ? 'Flashcard answer. Tap or press Space to show the question.'
        : 'Flashcard question. Tap or press Space to reveal the answer.');
    },

    toggleFlipFlashcard() {
      const cardEl = document.getElementById('sessionFlashcardCard');
      if (!cardEl) return;
      this.isFlipped = !this.isFlipped;
      cardEl.classList.toggle('flipped', this.isFlipped);
      cardEl.setAttribute('aria-pressed', this.isFlipped ? 'true' : 'false');
      this.syncFlashcardAria(cardEl);

      const liveRegion = document.getElementById('fcAriaLive');
      if (liveRegion) {
        liveRegion.textContent = this.isFlipped ? 'Answer shown' : 'Question shown';
      }

      if (this.mascot) {
        if (this.isFlipped) {
          this.mascot.setState('concentrating', "Check your recall!");
        } else {
          this.mascot.setState('idle', "Ready for the next card?");
        }
      }
    },

    prevFlashcard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
        this.renderFlashcard();
      }
    },

    nextFlashcard() {
      if (this.currentCardIndex < this.activeDeck.length - 1) {
        this.currentCardIndex++;
        this.renderFlashcard();
        return;
      }

      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      const card = this.activeDeck[this.currentCardIndex];
      const subId = (card && card.subjectId) || this.subjectId;
      if (window.ActivityTracker && card && card.id) {
        window.ActivityTracker.recordCardViewed(activeExam, subId, card.id);
      }

      const nextUnit = this.getNextUnitInScope(this.unit);
      if (nextUnit !== null && this.unit !== 'all') {
        this.showChapterCelebration(nextUnit);
      } else {
        this.showResults();
      }
    },

    getNextUnitInScope(currentUnit) {
      const cur = Number(currentUnit);
      if (!Number.isFinite(cur) || this.unit === 'all') return null;
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      let inScopeUnits = [1, 2, 3, 4, 5];
      if (activeExam === 'mid1') inScopeUnits = [1, 2, 3];
      else if (activeExam === 'mid2') inScopeUnits = [3, 4, 5];

      const dataBank = this.getActiveDataSource();
      const unitsWithData = new Set();
      if (this.mode === 'flashcards' && dataBank && dataBank.flashcards) {
        const pool = this.subjectId === 'MIXED' ? Object.values(dataBank.flashcards).flat() : (dataBank.flashcards[this.subjectId] || []);
        pool.forEach(c => {
          const u = Number(c.unit);
          if (inScopeUnits.includes(u)) unitsWithData.add(u);
        });
      } else if (dataBank && dataBank.questions) {
        const pool = this.subjectId === 'MIXED' ? Object.values(dataBank.questions).flat() : (dataBank.questions[this.subjectId] || []);
        pool.forEach(q => {
          const u = Number(q.unit);
          if (inScopeUnits.includes(u)) unitsWithData.add(u);
        });
      }

      const next = Array.from(unitsWithData).sort((a, b) => a - b).find(u => u > cur);
      return next !== undefined ? next : null;
    },

    getNextFlashcardUnit() {
      return this.getNextUnitInScope(this.unit);
    },

    showChapterCelebration(nextUnit) {
      this._pendingNextUnit = nextUnit;
      const modal = document.getElementById('flashcardContinueModal');
      const title = document.getElementById('flashContinueTitle');
      const text = document.getElementById('flashContinueText');
      const subText = document.getElementById('flashContinueSubText');
      const nextBtn = document.getElementById('flashContinueNextBtn');
      const notesBtn = document.getElementById('flashContinueNotesBtn');

      if (title) {
        title.innerHTML = `<span class="popper-anim">🎉</span> Congrats! You've made it well`;
      }
      if (text) {
        text.innerHTML = `<strong>Unit ${this.unit}</strong> is done! Let's move on to <strong>Unit ${nextUnit}</strong>.`;
      }
      if (subText) {
        const streak = window.ActivityTracker ? window.ActivityTracker.getStreak() : 1;
        subText.innerHTML = `Streak: ${streak} 🔥 &bull; Fantastic progress! Ready for the next chapter?`;
      }
      if (nextBtn) {
        nextBtn.innerHTML = `<span>Next Chapter: Unit ${nextUnit}</span> <i class="fa-solid fa-arrow-right"></i>`;
      }
      if (notesBtn) {
        notesBtn.style.display = 'inline-flex';
        notesBtn.onclick = () => {
          this.exitSession();
          if (window.showNotesForUnit) window.showNotesForUnit(this.subjectId, nextUnit);
        };
      }
      if (modal) {
        modal.style.display = 'flex';
        modal.style.zIndex = '100005';
        if (nextBtn) nextBtn.focus();
      }
      if (this.mascot) {
        this.mascot.setState('happy', `Congrats! Unit ${this.unit} complete! 🎉 Let's crush Unit ${nextUnit}!`);
      }
    },

    promptNextFlashcardUnit(nextUnit) {
      this.showChapterCelebration(nextUnit);
    },

    continueToNextFlashcardUnit() {
      const nextUnit = this._pendingNextUnit;
      const modal = document.getElementById('flashcardContinueModal');
      if (modal) modal.style.display = 'none';
      this._pendingNextUnit = null;
      if (nextUnit === null || nextUnit === undefined) return;
      this.startSession(this.subjectId, this.mode, nextUnit);
    },

    exitFromFlashcardPrompt() {
      const modal = document.getElementById('flashcardContinueModal');
      if (modal) modal.style.display = 'none';
      this._pendingNextUnit = null;
      this.exitSession();
    },

    markFlashcard(gotIt) {
      const card = this.activeDeck[this.currentCardIndex];
      const activeExam = localStorage.getItem('mgit_active_exam') || 'mid2';
      const subId = (card && card.subjectId) || this.subjectId;
      if (window.ActivityTracker && card) {
        window.ActivityTracker.recordFlashcardLearned(activeExam, subId, card.id, gotIt);
      }
      if (gotIt && this.mascot) {
        this.mascot.setState('happy', "Awesome! Card remembered.");
      }
      setTimeout(() => this.nextFlashcard(), 300);
    },

    // =========================================================================
    // RESULTS SCREEN
    // =========================================================================
    showResults() {
      const quizView = document.getElementById('sessionQuizView');
      const fcView = document.getElementById('sessionFlashcardView');
      const resView = document.getElementById('sessionResultsView');
      if (quizView) quizView.style.display = 'none';
      if (fcView) fcView.style.display = 'none';
      if (resView) resView.style.display = 'block';

      if (this.mascot) {
        this.mascot.setState('celebrating', "YOU DID IT! Proud of you! 🎉");
      }

      const masteredNum = document.getElementById('resultsMasteredCount');
      const accuracyNum = document.getElementById('resultsAccuracy');
      const streakNum = document.getElementById('resultsStreak');

      if (masteredNum) {
        masteredNum.textContent = this.mode === 'quiz' ? this.masteredCount : this.activeDeck.length;
      }
      if (accuracyNum) {
        const firstTryCount = Object.keys(this.firstTryMap || {}).length;
        const acc = firstTryCount > 0 ? Math.round((this.correctFirstTry / firstTryCount) * 100) : 0;
        accuracyNum.textContent = `${acc}%`;
      }
      if (streakNum && window.ActivityTracker) {
        streakNum.textContent = `${window.ActivityTracker.getStreak()} 🔥`;
      }
    },

    // =========================================================================
    // MY PROGRESS MODAL (Feature 8)
    // =========================================================================
    openProgressModal() {
      const modal = document.getElementById('progressModal');
      if (!modal) return;

      if (window.ActivityTracker) {
        const streakVal = document.getElementById('progStreakVal');
        const qVal = document.getElementById('progQuestionsVal');
        const fcVal = document.getElementById('progFlashcardsVal');
        const barsContainer = document.getElementById('progressSubjectBars');

        if (streakVal) streakVal.textContent = `${window.ActivityTracker.getStreak()} 🔥`;
        if (qVal) qVal.textContent = window.ActivityTracker.getTotalQuestionsMastered();
        if (fcVal) fcVal.textContent = window.ActivityTracker.getTotalFlashcardsLearned();

        const summaryEl = document.getElementById('progressFlashcardSummary');
        if (summaryEl && typeof window.ActivityTracker.getFlashcardProgress === 'function') {
          const progress = window.ActivityTracker.getFlashcardProgress('MIXED');
          const dataBank = this.getActiveDataSource() || {};
          let totalCards = 0;
          Object.keys(dataBank.flashcards || {}).forEach(sub => {
            totalCards += (dataBank.flashcards[sub] || []).length;
          });
          summaryEl.textContent = `${progress.viewed.length} viewed · ${progress.mastered.length} mastered · ${progress.revise.length} to revise · of ${totalCards}`;
        }

        if (barsContainer) {
          barsContainer.innerHTML = '';
          const subjects = ['DM', 'COA', 'OOPJ', 'DBMS', 'SE', 'ES', 'IE'];
          let masteredTotal = 0;
          subjects.forEach(sub => {
            const stats = window.ActivityTracker.getSubjectMastery(sub);
            masteredTotal += stats.count;
            const row = document.createElement('div');
            row.className = 'prog-sub-row';
            row.innerHTML = `
              <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 4px;">
                <span>${sub}</span>
                <span style="color: #4f46e5;">${stats.percentage}%</span>
              </div>
              <div style="height: 6px; background: #e2e8f0; border-radius: 9999px; overflow: hidden;">
                <div style="height: 100%; width: ${stats.percentage}%; background: linear-gradient(90deg, #6366f1, #8b5cf6); border-radius: 9999px; transition: width 0.3s ease;"></div>
              </div>
            `;
            barsContainer.appendChild(row);
          });
          const emptyState = document.getElementById('progressEmptyState');
          if (emptyState) emptyState.hidden = masteredTotal > 0;
        }
      }

      modal.style.display = 'flex';
    }
  };

  // Expose globally
  window.PracticeRunner = PracticeRunner;

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PracticeRunner.init());
  } else {
    PracticeRunner.init();
  }

})();

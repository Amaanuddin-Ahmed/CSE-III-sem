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

    init() {
      this.bindTriggers();
    },

    bindTriggers() {
      // 1. Practice with Fun Main Card
      const funCard = document.getElementById('practiceFunCard');
      if (funCard) {
        funCard.addEventListener('click', () => this.openSelectorModal());
        funCard.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openSelectorModal();
          }
        });
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

      // 5. Exit Session Buttons
      const exitBtn = document.getElementById('sessionExitBtn');
      const exitModal = document.getElementById('practiceExitModal');
      const closeExitBtn = document.getElementById('closeExitModalBtn');
      const keepBtn = document.getElementById('confirmExitNoBtn');
      const confirmExitBtn = document.getElementById('confirmExitYesBtn');

      if (exitBtn) {
        exitBtn.addEventListener('click', () => {
          if (exitModal) exitModal.style.display = 'flex';
        });
      }
      if (closeExitBtn && exitModal) {
        closeExitBtn.addEventListener('click', () => exitModal.style.display = 'none');
      }
      if (keepBtn && exitModal) {
        keepBtn.addEventListener('click', () => exitModal.style.display = 'none');
      }
      if (confirmExitBtn) {
        confirmExitBtn.addEventListener('click', () => {
          if (exitModal) exitModal.style.display = 'none';
          this.exitSession();
        });
      }

      // 6. Next Question Button
      const nextBtn = document.getElementById('sessionNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.nextQuestion());
      }

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
        fcCard.addEventListener('click', () => this.toggleFlipFlashcard());
        fcCard.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.toggleFlipFlashcard();
          }
        });
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
      this.goToModeSelection();
      modal.style.display = 'flex';
    },

    closeSelectorModal() {
      const modal = document.getElementById('practiceSelectorModal');
      if (modal) modal.style.display = 'none';
    },

    goToModeSelection() {
      const stepMode = document.getElementById('practiceStepMode');
      const stepSubject = document.getElementById('practiceStepSubject');
      if (stepMode) stepMode.style.display = 'block';
      if (stepSubject) stepSubject.style.display = 'none';

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
      const modeLabel = document.getElementById('practiceSelectedModeLabel');

      if (stepMode) stepMode.style.display = 'none';
      if (stepSubject) stepSubject.style.display = 'block';

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
        { id: 'DM', code: 'DM', name: 'Discrete Mathematics' },
        { id: 'COA', code: 'COA', name: 'Computer Org. & Architecture' },
        { id: 'OOPJ', code: 'OOPJ', name: 'OOP through Java' },
        { id: 'DBMS', code: 'DBMS', name: 'Database Management Systems' },
        { id: 'SE', code: 'SE', name: 'Software Engineering' },
        { id: 'ES', code: 'ES', name: 'Environmental Science' },
        { id: 'IE', code: 'IE', name: 'Innovation & Entrepreneurship' },
        { id: 'MIXED', code: 'ALL', name: 'Mixed Practice (All Subjects)' }
      ];

      subjects.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'practice-subject-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        let progressLabel = '0% Mastered';
        if (window.ActivityTracker) {
          const stats = window.ActivityTracker.getSubjectMastery(sub.id);
          if (this.mode === 'quiz') {
            progressLabel = `${stats.percentage}% Mastered`;
          } else {
            const learned = window.ActivityTracker.getLearnedFlashcards(sub.id).length;
            progressLabel = `${learned} Cards Learned`;
          }
        }

        card.innerHTML = `
          <div class="practice-subject-info">
            <span class="practice-sub-code">${sub.code}</span>
            <span class="practice-sub-title">${sub.name}</span>
          </div>
          <span class="practice-sub-progress">${progressLabel}</span>
        `;

        card.addEventListener('click', () => {
          this.closeSelectorModal();
          this.startSession(sub.id, this.mode);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.closeSelectorModal();
            this.startSession(sub.id, this.mode);
          }
        });

        container.appendChild(card);
      });
    },

    // Session Management
    startSession(subjectId, mode) {
      this.subjectId = subjectId;
      this.mode = mode;

      const sessionScreen = document.getElementById('practiceSessionScreen');
      if (!sessionScreen) return;
      sessionScreen.style.display = 'block';
      document.body.style.overflow = 'hidden'; // lock background scrolling

      // Initialize Puppy Mascot in Slot
      const mascotSlot = document.getElementById('sessionMascotSlot');
      if (mascotSlot && window.PuppyMascot) {
        mascotSlot.innerHTML = '';
        this.mascot = window.PuppyMascot.createInstance('session-mascot');
        mascotSlot.appendChild(this.mascot.element);
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
        const modeText = mode === 'quiz' ? 'Interactive Questions' : 'High-Yield Flashcards';
        title.textContent = `${subjectId === 'MIXED' ? 'Mixed Practice' : subjectId} • ${modeText}`;
      }

      if (mode === 'quiz') {
        this.initQuiz();
      } else {
        this.initFlashcards();
      }
    },

    exitSession() {
      const sessionScreen = document.getElementById('practiceSessionScreen');
      if (sessionScreen) sessionScreen.style.display = 'none';
      document.body.style.overflow = '';
      if (this.mascot) this.mascot = null;
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
          // Collect questions across all subjects
          Object.keys(dataBank.quiz).forEach(sub => {
            const list = dataBank.quiz[sub] || [];
            rawQuestions.push(...list.slice(0, 5));
          });
        } else {
          rawQuestions = dataBank.quiz[this.subjectId] || [];
        }
      }

      // Clone queue
      this.activeQueue = rawQuestions.map(q => ({ ...q }));
      this.currentIndex = 0;
      this.masteredCount = 0;
      this.totalToMaster = this.activeQueue.length;
      this.firstTryMap = {};
      this.totalAttempts = 0;
      this.correctFirstTry = 0;

      // Update Counter Pill
      this.updateProgressUi();
      this.renderCurrentQuestion();
    },

    updateProgressUi() {
      // Progress bar advances ONLY on correct answers!
      const percent = this.totalToMaster > 0 ? (this.masteredCount / this.totalToMaster) * 100 : 0;
      const fill = document.getElementById('sessionProgressFill');
      const track = document.getElementById('sessionProgressTrack');
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');

      if (fill) fill.style.width = `${percent}%`;
      if (track) track.setAttribute('aria-valuenow', Math.round(percent));
      if (currentCount) currentCount.textContent = this.masteredCount;
      if (totalCount) totalCount.textContent = this.totalToMaster;
    },

    renderCurrentQuestion() {
      if (this.currentIndex >= this.activeQueue.length) {
        this.showResults();
        return;
      }

      const q = this.activeQueue[this.currentIndex];
      this.isAnswered = false;

      // Mascot State
      if (this.mascot) {
        this.mascot.setState('thinking', "You've got this!");
      }

      // Tags
      const unitTag = document.getElementById('sessionUnitTag');
      const typeTag = document.getElementById('sessionTypeTag');
      const diffTag = document.getElementById('sessionDifficultyTag');
      const textEl = document.getElementById('sessionQuestionText');

      if (unitTag) unitTag.textContent = `Unit ${q.unit}`;
      if (typeTag) typeTag.textContent = q.type === 'mcq' ? 'Multiple Choice' : 'Fill in the Blank';
      if (diffTag) {
        diffTag.textContent = (q.difficulty || 'Medium').toUpperCase();
        diffTag.className = `q-difficulty-tag ${(q.difficulty || 'medium').toLowerCase()}`;
      }
      if (textEl) textEl.textContent = q.question;

      // Hide Feedback Banner
      const feedback = document.getElementById('sessionFeedbackBanner');
      if (feedback) feedback.style.display = 'none';

      const optionsGrid = document.getElementById('sessionOptionsGrid');
      const fibForm = document.getElementById('sessionFibForm');
      const fibInput = document.getElementById('sessionFibInput');

      if (q.type === 'mcq') {
        if (fibForm) fibForm.style.display = 'none';
        if (optionsGrid) {
          optionsGrid.style.display = 'grid';
          optionsGrid.innerHTML = '';

          (q.options || []).forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'q-option-card';
            btn.setAttribute('data-index', idx);
            btn.innerHTML = `
              <span class="opt-prefix">${String.fromCharCode(65 + idx)}</span>
              <span class="opt-text">${opt}</span>
            `;

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
            fibInput.value = '';
            fibInput.disabled = false;
            fibInput.focus();
          }
        }
      }
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

      this.processAnswerOutcome(isCorrect, q);
    },

    submitFibAnswer() {
      if (this.isAnswered) return;
      this.isAnswered = true;
      const q = this.activeQueue[this.currentIndex];
      const input = document.getElementById('sessionFibInput');
      const userVal = (input ? input.value : '').trim().toLowerCase();

      if (input) input.disabled = true;

      const isCorrect = (q.accepted || []).some(acc => acc.trim().toLowerCase() === userVal);
      if (input) {
        input.classList.add(isCorrect ? 'correct' : 'wrong');
      }

      this.processAnswerOutcome(isCorrect, q);
    },

    processAnswerOutcome(isCorrect, q) {
      this.totalAttempts++;
      const isFirstTry = !(q.id in this.firstTryMap);
      if (isFirstTry) {
        this.firstTryMap[q.id] = isCorrect;
        if (isCorrect) this.correctFirstTry++;
      }

      // Record in ActivityTracker
      if (window.ActivityTracker) {
        window.ActivityTracker.recordQuizResult(q.subjectId || this.subjectId, q.id, isCorrect);
      }

      const feedback = document.getElementById('sessionFeedbackBanner');
      const feedbackTitle = document.getElementById('feedbackTitle');
      const feedbackExp = document.getElementById('feedbackExplanation');
      const feedbackIcon = document.getElementById('feedbackIcon');

      if (isCorrect) {
        // Correct answer flow
        this.masteredCount++;
        this.updateProgressUi();

        if (this.mascot) {
          this.mascot.setState('happy', "Woohoo! Nailed it! 🎉");
        }

        if (feedback) {
          feedback.className = 'q-feedback-banner correct';
          if (feedbackTitle) feedbackTitle.textContent = "Brilliant! That's correct.";
          if (feedbackIcon) feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
          if (feedbackExp) feedbackExp.textContent = q.explanation;
          feedback.style.display = 'block';
        }
      } else {
        // Wrong answer flow
        // Progress bar does NOT move!
        // Mascot sad for 1.5s then concentrating
        if (this.mascot) {
          this.mascot.setState('sad', "Oh no! But we learn from mistakes.");
          setTimeout(() => {
            if (this.mascot && this.isAnswered) {
              this.mascot.setState('concentrating', "Let's review the explanation.");
            }
          }, 1500);
        }

        // Re-queue question 3–5 slots later
        const currentQ = this.activeQueue[this.currentIndex];
        const remainingSlots = this.activeQueue.length - (this.currentIndex + 1);
        const insertOffset = Math.min(Math.max(3, Math.floor(Math.random() * 3) + 3), remainingSlots);
        this.activeQueue.splice(this.currentIndex + 1 + insertOffset, 0, { ...currentQ });

        if (feedback) {
          feedback.className = 'q-feedback-banner wrong';
          if (feedbackTitle) {
            if (q.type === 'mcq') {
              feedbackTitle.textContent = `Not quite! The correct answer is Option ${String.fromCharCode(65 + q.answerIndex)}.`;
            } else {
              feedbackTitle.textContent = `Not quite! Accepted answer: "${q.accepted[0]}".`;
            }
          }
          if (feedbackIcon) feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
          if (feedbackExp) feedbackExp.textContent = q.explanation;
          feedback.style.display = 'block';
        }
      }
    },

    nextQuestion() {
      this.currentIndex++;
      if (this.masteredCount >= this.totalToMaster) {
        this.showResults();
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
            rawDeck.push(...list.slice(0, 3));
          });
        } else {
          rawDeck = dataBank.flashcards[this.subjectId] || [];
        }
      }

      this.activeDeck = rawDeck;
      this.currentCardIndex = 0;
      this.isFlipped = false;

      this.renderFlashcard();
    },

    renderFlashcard() {
      if (this.activeDeck.length === 0) return;
      const card = this.activeDeck[this.currentCardIndex];
      this.isFlipped = false;

      const cardEl = document.getElementById('sessionFlashcardCard');
      if (cardEl) cardEl.classList.remove('flipped');

      const unitTag = document.getElementById('fcUnitTag');
      const yieldTag = document.getElementById('fcYieldTag');
      const topicLabel = document.getElementById('fcTopicLabel');
      const frontText = document.getElementById('fcFrontText');
      const backText = document.getElementById('fcBackText');

      if (unitTag) unitTag.textContent = `Unit ${card.unit}`;
      if (yieldTag) yieldTag.style.display = card.highYield ? 'inline-flex' : 'none';
      if (topicLabel) topicLabel.textContent = card.topic || 'Core Concept';
      if (frontText) frontText.textContent = card.front;
      if (backText) backText.textContent = card.back;

      // Update counters
      const currentCount = document.getElementById('sessionCurrentCount');
      const totalCount = document.getElementById('sessionTotalCount');
      const fill = document.getElementById('sessionProgressFill');

      if (currentCount) currentCount.textContent = this.currentCardIndex + 1;
      if (totalCount) totalCount.textContent = this.activeDeck.length;
      if (fill) {
        const pct = ((this.currentCardIndex + 1) / this.activeDeck.length) * 100;
        fill.style.width = `${pct}%`;
      }

      if (this.mascot) {
        this.mascot.setState('idle', `Card ${this.currentCardIndex + 1} of ${this.activeDeck.length}`);
      }
    },

    toggleFlipFlashcard() {
      const cardEl = document.getElementById('sessionFlashcardCard');
      if (!cardEl) return;
      this.isFlipped = !this.isFlipped;
      cardEl.classList.toggle('flipped', this.isFlipped);

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
      } else {
        this.showResults();
      }
    },

    markFlashcard(gotIt) {
      const card = this.activeDeck[this.currentCardIndex];
      if (window.ActivityTracker && card) {
        window.ActivityTracker.recordFlashcardLearned(card.subjectId || this.subjectId, card.id);
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
        masteredNum.textContent = this.mode === 'quiz' ? this.totalToMaster : this.activeDeck.length;
      }
      if (accuracyNum) {
        const acc = this.totalAttempts > 0 ? Math.round((this.correctFirstTry / this.totalAttempts) * 100) : 100;
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

        if (barsContainer) {
          barsContainer.innerHTML = '';
          const subjects = ['DM', 'COA', 'OOPJ', 'DBMS', 'SE', 'ES', 'IE'];
          subjects.forEach(sub => {
            const stats = window.ActivityTracker.getSubjectMastery(sub);
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

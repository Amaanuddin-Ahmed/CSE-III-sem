/**
 * MGIT PYQ Hub — Activity Tracking & Revision History (Feature 8)
 * 
 * Local-only, private, versioned persistence in localStorage ('mgit_study_progress_v1').
 * Zero external calls, zero telemetry, full offline functionality.
 */

const ActivityTracker = (function () {
  'use strict';

  const STORAGE_KEY = 'mgit_study_progress_v1';

  function getActiveExam() {
    try {
      return (typeof localStorage !== 'undefined' && localStorage.getItem('mgit_active_exam')) || 'mid2';
    } catch (e) {
      return 'mid2';
    }
  }

  function getDefaultData() {
    return {
      version: 1,
      createdAt: Date.now(),
      lastActive: Date.now(),
      streakDays: 1,
      lastStreakCheckDate: new Date().toDateString(),
      exams: {
        mid1: { sessionsCount: 0, questionsMastered: 0, totalAttempted: 0, correctCount: 0, subjects: {} },
        mid2: { sessionsCount: 0, questionsMastered: 0, totalAttempted: 0, correctCount: 0, subjects: {} },
        sem: { sessionsCount: 0, questionsMastered: 0, totalAttempted: 0, correctCount: 0, subjects: {} }
      }
    };
  }

  function load() {
    try {
      if (typeof localStorage === 'undefined') return getDefaultData();
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultData();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1) return getDefaultData();
      checkStreak(parsed);
      return parsed;
    } catch (e) {
      console.warn('Could not read activity progress from localStorage:', e);
      return getDefaultData();
    }
  }

  function save(data) {
    try {
      if (typeof localStorage === 'undefined') return;
      data.lastActive = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save activity progress to localStorage:', e);
    }
  }

  function checkStreak(data) {
    const today = new Date().toDateString();
    if (data.lastStreakCheckDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (data.lastStreakCheckDate === yesterday) {
      data.streakDays = (data.streakDays || 1) + 1;
    } else {
      // Missed more than a day
      data.streakDays = 1;
    }
    data.lastStreakCheckDate = today;
  }

  function getSubjectStats(examId, subjectId) {
    if (!subjectId && examId) {
      subjectId = examId;
      examId = getActiveExam();
    }
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    const sub = (exam.subjects && exam.subjects[subjectId]) || {
      sessionsCount: 0,
      bestScore: 0,
      masteredQuestionIds: [],
      gotItCardIds: [],
      weakTopics: {}
    };

    return {
      sessionsCount: sub.sessionsCount || 0,
      bestScore: sub.bestScore || 0,
      masteredCount: (sub.masteredQuestionIds || []).length,
      flashcardsCount: (sub.gotItCardIds || []).length,
      weakTopics: Object.keys(sub.weakTopics || {})
    };
  }

  function getSubjectMastery(subjectId) {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};

    if (subjectId === 'MIXED') {
      let totalMastered = 0;
      Object.keys(exam.subjects || {}).forEach(k => {
        totalMastered += ((exam.subjects[k] && exam.subjects[k].masteredQuestionIds) || []).length;
      });
      const target = 140;
      const pct = Math.min(100, Math.round((totalMastered / target) * 100));
      return { percentage: pct, count: totalMastered };
    }

    const sub = (exam.subjects && exam.subjects[subjectId]) || {};
    const mastered = (sub.masteredQuestionIds || []).length;
    const target = 25; // standard target per subject
    const pct = Math.min(100, Math.round((mastered / target) * 100));
    return { percentage: pct, count: mastered };
  }

  function getLearnedFlashcards(subjectId) {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};

    if (subjectId === 'MIXED') {
      const allCards = [];
      Object.keys(exam.subjects || {}).forEach(k => {
        allCards.push(...((exam.subjects[k] && exam.subjects[k].gotItCardIds) || []));
      });
      return allCards;
    }

    const sub = (exam.subjects && exam.subjects[subjectId]) || {};
    return sub.gotItCardIds || [];
  }

  function recordQuizResult(arg1, arg2, arg3) {
    // Overloaded:
    // 1. recordQuizResult(examId, subjectId, { total, correct, score, masteredIds, missedTopics })
    // 2. recordQuizResult(subjectId, questionId, isCorrect)
    let examId, subjectId, result;

    if (typeof arg3 === 'boolean') {
      // Called as: recordQuizResult(subjectId, questionId, isCorrect)
      examId = getActiveExam();
      subjectId = arg1;
      const qId = arg2;
      const isCorrect = arg3;

      const data = load();
      const exam = data.exams[examId] = data.exams[examId] || {
        sessionsCount: 0,
        questionsMastered: 0,
        totalAttempted: 0,
        correctCount: 0,
        subjects: {}
      };
      exam.totalAttempted += 1;
      if (isCorrect) exam.correctCount += 1;

      const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
        sessionsCount: 0,
        bestScore: 0,
        masteredQuestionIds: [],
        gotItCardIds: [],
        weakTopics: {}
      };

      if (isCorrect && qId) {
        sub.masteredQuestionIds = sub.masteredQuestionIds || [];
        if (!sub.masteredQuestionIds.includes(qId)) {
          sub.masteredQuestionIds.push(qId);
        }
      }
      save(data);
      return;
    }

    examId = arg1 || getActiveExam();
    subjectId = arg2;
    result = arg3 || {};

    const data = load();
    const exam = data.exams[examId] = data.exams[examId] || {
      sessionsCount: 0,
      questionsMastered: 0,
      totalAttempted: 0,
      correctCount: 0,
      subjects: {}
    };

    exam.sessionsCount += 1;
    exam.totalAttempted += (result.total || 0);
    exam.correctCount += (result.correct || 0);

    const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
      sessionsCount: 0,
      bestScore: 0,
      masteredQuestionIds: [],
      gotItCardIds: [],
      weakTopics: {}
    };

    sub.sessionsCount += 1;
    if (result.score > (sub.bestScore || 0)) {
      sub.bestScore = result.score;
    }

    // Merge mastered question IDs
    if (Array.isArray(result.masteredIds)) {
      const set = new Set(sub.masteredQuestionIds || []);
      result.masteredIds.forEach(id => set.add(id));
      sub.masteredQuestionIds = Array.from(set);
    }

    // Record weak topics
    if (Array.isArray(result.missedTopics)) {
      sub.weakTopics = sub.weakTopics || {};
      result.missedTopics.forEach(topic => {
        if (topic) sub.weakTopics[topic] = (sub.weakTopics[topic] || 0) + 1;
      });
    }

    save(data);
  }

  function recordCardViewed(examId, subjectId, cardId) {
    if (arguments.length === 2 || (arguments.length === 3 && cardId === undefined)) {
      // Called as (subjectId, cardId) for convenience.
      cardId = subjectId;
      subjectId = examId;
      examId = getActiveExam();
    }
    if (!subjectId || !cardId) return;

    const data = load();
    const exam = data.exams[examId] = data.exams[examId] || { subjects: {} };
    const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
      gotItCardIds: [],
      revisedCardIds: [],
      viewedCardIds: [],
      masteredQuestionIds: []
    };
    sub.viewedCardIds = sub.viewedCardIds || [];
    if (!sub.viewedCardIds.includes(cardId)) {
      sub.viewedCardIds.push(cardId);
      save(data);
    }
  }

  function recordQuestionViewed(examId, subjectId, questionId) {
    if (arguments.length === 2) {
      questionId = subjectId;
      subjectId = examId;
      examId = getActiveExam();
    }
    if (!subjectId || !questionId) return;

    const data = load();
    const exam = data.exams[examId] = data.exams[examId] || { subjects: {} };
    const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
      gotItCardIds: [],
      revisedCardIds: [],
      viewedCardIds: [],
      viewedQuestionIds: [],
      masteredQuestionIds: []
    };
    sub.viewedQuestionIds = sub.viewedQuestionIds || [];
    if (!sub.viewedQuestionIds.includes(questionId)) {
      sub.viewedQuestionIds.push(questionId);
      save(data);
    }
  }

  function getFlashcardProgress(subjectId) {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    const subjects = exam.subjects || {};

    const collect = (key) => {
      if (subjectId && subjectId !== 'MIXED') {
        return ((subjects[subjectId] && subjects[subjectId][key]) || []).slice();
      }
      const all = [];
      Object.keys(subjects).forEach(k => {
        all.push(...((subjects[k] && subjects[k][key]) || []));
      });
      return Array.from(new Set(all));
    };

    return {
      viewed: collect('viewedCardIds'),
      mastered: collect('gotItCardIds'),
      revise: collect('revisedCardIds')
    };
  }

  function getQuestionProgress(subjectId) {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    const subjects = exam.subjects || {};
    const collect = (key) => {
      if (subjectId && subjectId !== 'MIXED') {
        return ((subjects[subjectId] && subjects[subjectId][key]) || []).slice();
      }
      const all = [];
      Object.keys(subjects).forEach(k => {
        all.push(...((subjects[k] && subjects[k][key]) || []));
      });
      return Array.from(new Set(all));
    };
    return { viewed: collect('viewedQuestionIds'), mastered: collect('masteredQuestionIds') };
  }

  function recordFlashcardLearned(arg1, arg2, arg3, arg4) {
    // Overloaded:
    // 1. recordFlashcardLearned(examId, subjectId, cardId, isGotIt)
    // 2. recordFlashcardLearned(subjectId, cardId, isGotIt)
    let examId, subjectId, cardId, isGotIt;

    if (arg4 !== undefined) {
      examId = arg1 || getActiveExam();
      subjectId = arg2;
      cardId = arg3;
      isGotIt = !!arg4;
    } else {
      examId = getActiveExam();
      subjectId = arg1;
      cardId = arg2;
      isGotIt = (arg3 !== undefined) ? !!arg3 : true;
    }

    if (!subjectId || !cardId) return;

    const data = load();
    const exam = data.exams[examId] = data.exams[examId] || { subjects: {} };
    const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
      gotItCardIds: [],
      masteredQuestionIds: []
    };

    sub.gotItCardIds = sub.gotItCardIds || [];
    sub.revisedCardIds = sub.revisedCardIds || [];
    sub.viewedCardIds = sub.viewedCardIds || [];
    if (!sub.viewedCardIds.includes(cardId)) sub.viewedCardIds.push(cardId);

    const gotItIdx = sub.gotItCardIds.indexOf(cardId);
    const reviseIdx = sub.revisedCardIds.indexOf(cardId);

    if (isGotIt) {
      if (gotItIdx === -1) sub.gotItCardIds.push(cardId);
      if (reviseIdx !== -1) sub.revisedCardIds.splice(reviseIdx, 1);
    } else {
      if (reviseIdx === -1) sub.revisedCardIds.push(cardId);
      if (gotItIdx !== -1) sub.gotItCardIds.splice(gotItIdx, 1);
    }

    save(data);
  }

  function getStreak() {
    const data = load();
    return data.streakDays || 1;
  }

  function getTotalQuestionsMastered() {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    let total = 0;
    Object.values(exam.subjects || {}).forEach(s => {
      total += (s.masteredQuestionIds || []).length;
    });
    return total;
  }

  function getTotalFlashcardsLearned() {
    const examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    let total = 0;
    Object.values(exam.subjects || {}).forEach(s => {
      const cards = new Set([...(s.gotItCardIds || []), ...(s.viewedCardIds || [])]);
      total += cards.size;
    });
    return total;
  }

  function resetAll() {
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function getGlobalSummary(examId) {
    if (!examId) examId = getActiveExam();
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2 || {};
    let totalMastered = 0;
    let totalFlashcards = 0;

    Object.values(exam.subjects || {}).forEach(s => {
      totalMastered += (s.masteredQuestionIds || []).length;
      totalFlashcards += (s.gotItCardIds || []).length;
    });

    const accuracy = exam.totalAttempted > 0
      ? Math.round((exam.correctCount / exam.totalAttempted) * 100)
      : 0;

    return {
      streakDays: data.streakDays || 1,
      sessionsCount: exam.sessionsCount || 0,
      totalMastered,
      totalFlashcards,
      accuracy
    };
  }

  return {
    getStreak,
    getTotalQuestionsMastered,
    getTotalFlashcardsLearned,
    getSubjectStats,
    getSubjectMastery,
    getLearnedFlashcards,
    getFlashcardProgress,
    getQuestionProgress,
    recordQuizResult,
    recordCardViewed,
    recordQuestionViewed,
    recordFlashcardLearned,
    getGlobalSummary,
    resetAll
  };
})();

// Top-level `const` does not become a property of `window`. The practice
// runner intentionally reads `window.ActivityTracker`, so publish it here.
if (typeof window !== 'undefined') {
  window.ActivityTracker = ActivityTracker;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ActivityTracker;
}

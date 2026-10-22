/**
 * MGIT PYQ Hub — Activity Tracking & Revision History (Feature 8)
 * 
 * Local-only, private, versioned persistence in localStorage ('mgit_study_progress_v1').
 * Zero external calls, zero telemetry, full offline functionality.
 */

const ActivityTracker = (function () {
  'use strict';

  const STORAGE_KEY = 'mgit_study_progress_v1';

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
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2;
    const sub = exam.subjects[subjectId] || {
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

  function recordQuizResult(examId, subjectId, result) {
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

  function recordFlashcardLearned(examId, subjectId, cardId, isGotIt) {
    const data = load();
    const exam = data.exams[examId] = data.exams[examId] || { subjects: {} };
    const sub = exam.subjects[subjectId] = exam.subjects[subjectId] || {
      gotItCardIds: [],
      masteredQuestionIds: []
    };

    sub.gotItCardIds = sub.gotItCardIds || [];
    const idx = sub.gotItCardIds.indexOf(cardId);

    if (isGotIt && idx === -1) {
      sub.gotItCardIds.push(cardId);
    } else if (!isGotIt && idx !== -1) {
      sub.gotItCardIds.splice(idx, 1);
    }

    save(data);
  }

  function resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function getGlobalSummary(examId) {
    const data = load();
    const exam = data.exams[examId] || data.exams.mid2;
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
    getSubjectStats,
    recordQuizResult,
    recordFlashcardLearned,
    getGlobalSummary,
    resetAll
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ActivityTracker;
}

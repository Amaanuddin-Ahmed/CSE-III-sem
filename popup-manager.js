/**
 * MGIT PYQ Hub - Single-popup coordinator.
 *
 * Rules:
 *  - Only one promotional popup at a time (rating prompt, Add to Home Screen).
 *  - No popup while the onboarding tour, a modal, the AI chat, or a practice
 *    session is on screen.
 *  - After a popup closes, wait a short gap before allowing another one.
 *
 * Loaded before pwa-install.js and app.js so both can coordinate through
 * window.MGITPopups.
 */
(function () {
  'use strict';

  const GAP_MS = 3500;
  let activeKind = null;
  let lastClosedAt = 0;

  function isVisible(node) {
    if (!node) return false;
    if (node.hidden) return false;
    const style = window.getComputedStyle(node);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    return node.getClientRects().length > 0;
  }

  function isTourActive() {
    const tooltip = document.getElementById('tourTooltip');
    if (isVisible(tooltip)) return true;
    const backdrop = document.getElementById('tourBackdrop');
    return isVisible(backdrop);
  }

  function isPracticeActive() {
    if (isVisible(document.getElementById('practiceSessionScreen'))) return true;
    if (isVisible(document.getElementById('practiceSelectorModal'))) return true;
    if (isVisible(document.getElementById('practiceExitModal'))) return true;
    return false;
  }

  function isChatActive() {
    if (isVisible(document.getElementById('geminiModal'))) return true;
    const sidebar = document.getElementById('geminiSidebar');
    return Boolean(sidebar && sidebar.classList.contains('open'));
  }

  function isModalActive() {
    const modalIds = [
      'questionModal',
      'contribWarningModal',
      'contribUploadModal',
      'progressModal'
    ];
    return modalIds.some(function (id) {
      return isVisible(document.getElementById(id));
    });
  }

  function isBlocked() {
    return isTourActive() || isPracticeActive() || isChatActive() || isModalActive();
  }

  function canShow(kind) {
    if (isBlocked()) return false;
    if (activeKind && activeKind !== kind) return false;
    if (Date.now() - lastClosedAt < GAP_MS) return false;
    return true;
  }

  /**
   * Ask permission to open a popup. Calls showFn only when it is safe.
   * @param {string} kind - unique popup id, e.g. 'rating' or 'a2hs'
   * @param {Function} showFn - builds and shows the popup
   * @returns {boolean} whether the popup was opened
   */
  function request(kind, showFn) {
    if (typeof showFn !== 'function') return false;
    if (!canShow(kind)) return false;
    activeKind = kind;
    try {
      showFn();
    } catch (err) {
      activeKind = null;
      throw err;
    }
    return true;
  }

  /** Report that a popup closed; starts the cooldown gap. */
  function closed(kind) {
    if (!kind || kind === activeKind) activeKind = null;
    lastClosedAt = Date.now();
  }

  function isActive(kind) {
    return activeKind === kind;
  }

  window.MGITPopups = {
    request: request,
    canShow: canShow,
    isBlocked: isBlocked,
    closed: closed,
    isActive: isActive,
    GAP_MS: GAP_MS
  };
})();

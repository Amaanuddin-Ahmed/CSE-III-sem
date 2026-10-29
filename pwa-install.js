/**
 * MGIT PYQ Hub - PWA Registration & 15-Second Install Prompt (Feature 1)
 */

(function() {
  'use strict';

  // 1. Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });
    });
  }

  // 2. 15-Second Active Usage Install Prompt
  const PWA_DELAY_MS = 15000;
  let activeTimeAccumulated = 0;
  let lastActiveTimestamp = null;
  let installPromptShown = false;
  let timerInterval = null;

  const DISMISSED_KEY = 'mgit_pwa_dismiss_until';
  const DISMISS_COUNT_KEY = 'mgit_pwa_dismiss_count';

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true ||
           document.referrer.includes('android-app://');
  }

  function isDismissed() {
    const until = parseInt(localStorage.getItem(DISMISSED_KEY) || '0', 10);
    return Date.now() < until;
  }

  function isInstalled() {
    if (window.__pwaInstalled) return true;
    try {
      return localStorage.getItem('mgit_pwa_installed') === '1' ||
             localStorage.getItem('mgit_pwa_added') === '1';
    } catch (e) {
      return false;
    }
  }

  function updateInstallEntry() {
    const btn = document.getElementById('headerInstallBtn');
    if (!btn) return;
    const canOffer = !isStandalone() && !isInstalled();
    btn.hidden = !canOffer;
  }

  function dismissPrompt() {
    const currentCount = parseInt(localStorage.getItem(DISMISS_COUNT_KEY) || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem(DISMISS_COUNT_KEY, newCount);

    // First dismissal: 3 days, Second+: 30 days
    const delayDays = newCount === 1 ? 3 : 30;
    const suppressUntil = Date.now() + (delayDays * 24 * 60 * 60 * 1000);
    localStorage.setItem(DISMISSED_KEY, suppressUntil);

    const banner = document.getElementById('pwaInstallPrompt');
    if (banner) {
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 350);
    }

    installPromptShown = true;
    if (timerInterval) clearInterval(timerInterval);
    if (window.MGITPopups) window.MGITPopups.closed('a2hs');
  }

  function showInstallPrompt(force) {
    if (document.getElementById('pwaInstallPrompt')) return;
    if (isInstalled() || isStandalone()) return;
    if (!force && (installPromptShown || isDismissed())) return;

    // Do NOT interrupt the tour, modals, AI chat or an active practice session.
    if (window.MGITPopups && !window.MGITPopups.canShow('a2hs')) {
      return; // The 1-second tracker will retry once the screen is free.
    }

    const opened = window.MGITPopups
      ? window.MGITPopups.request('a2hs', renderInstallPrompt)
      : (renderInstallPrompt(), true);
    if (!opened) return;

    installPromptShown = true;
    if (timerInterval) clearInterval(timerInterval);
  }

  function renderInstallPrompt() {
    const promptCard = document.createElement('div');
    promptCard.id = 'pwaInstallPrompt';
    promptCard.className = 'pwa-install-prompt glass-panel';
    promptCard.setAttribute('role', 'dialog');
    promptCard.setAttribute('aria-label', 'Add MGIT PYQ Hub to your Home Screen');
    promptCard.innerHTML = `
      <div class="pwa-prompt-icon-wrap">
        <svg viewBox="0 0 100 100" width="46" height="46" class="pwa-prompt-svg">
          <rect width="100" height="100" rx="22" fill="#1e3a8a" />
          <polygon points="50,22 80,38 50,54 20,38" fill="#ffffff" />
          <path d="M35,46 C35,64 65,64 65,46" fill="#f1f5f9" />
          <path d="M50,38 L82,46 L82,62" stroke="#f59e0b" stroke-width="3" fill="none" />
          <circle cx="82" cy="64" r="3.5" fill="#f59e0b" />
          <rect x="25" y="72" width="50" height="14" rx="4" fill="#ffffff" />
          <text x="50" y="82.5" font-family="sans-serif" font-size="8" font-weight="900" fill="#1e3a8a" text-anchor="middle">MGIT</text>
        </svg>
      </div>
      <div class="pwa-prompt-content">
        <h4 class="pwa-prompt-title">Add MGIT PYQ Hub to your Home Screen</h4>
        <p class="pwa-prompt-desc">Open it in one tap and keep revision, papers and practice games close by.</p>
        <div class="pwa-prompt-actions">
          <button type="button" class="btn-pwa-install" id="pwaInstallNowBtn">
            <i class="fa-solid fa-mobile-screen-button"></i> <span>Add to Home Screen</span>
          </button>
          <button type="button" class="btn-pwa-later" id="pwaInstallLaterBtn">
            Later
          </button>
        </div>
      </div>
      <button type="button" class="btn-pwa-close" id="pwaCloseIconBtn" aria-label="Dismiss">&times;</button>
    `;

    document.body.appendChild(promptCard);
    requestAnimationFrame(() => {
      promptCard.classList.add('visible');
    });

    const installNowBtn = document.getElementById('pwaInstallNowBtn');
    if (installNowBtn) {
      installNowBtn.addEventListener('click', (event) => {
        // Keep the click away from any outside-click / swipe dismiss handler.
        event.preventDefault();
        event.stopPropagation();

        const deferred = window.__deferredInstall;
        if (!deferred) {
          showFallbackInstructions(promptCard);
          return;
        }

        // prompt() must be called synchronously inside the user gesture.
        // It is single-use, so discard it immediately.
        window.__deferredInstall = null;
        try {
          deferred.prompt();
        } catch (err) {
          showFallbackInstructions(promptCard);
          return;
        }

        deferred.userChoice.then((choice) => {
          if (choice && choice.outcome === 'accepted') {
            window.__pwaInstalled = true;
            try { localStorage.setItem('mgit_pwa_installed', '1'); } catch (e) {}
            installPromptShown = true;
            if (timerInterval) clearInterval(timerInterval);
            promptCard.classList.remove('visible');
            setTimeout(() => promptCard.remove(), 300);
            updateInstallEntry();
            if (window.MGITPopups) window.MGITPopups.closed('a2hs');
            return;
          }
          // Dismissed in the browser: treat it as "Later" (3-day rule).
          dismissPrompt();
        }).catch(() => {
          showFallbackInstructions(promptCard);
        });
      });
    }

    const laterBtn = document.getElementById('pwaInstallLaterBtn');
    if (laterBtn) laterBtn.addEventListener('click', dismissPrompt);
    const closeBtn = document.getElementById('pwaCloseIconBtn');
    if (closeBtn) closeBtn.addEventListener('click', dismissPrompt);
  }

  function showFallbackInstructions(promptCard) {
    const contentEl = promptCard.querySelector('.pwa-prompt-content');
    if (!contentEl) return;
    const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    contentEl.innerHTML = `
      <h4 class="pwa-prompt-title" style="color: #4338ca;">Add MGIT PYQ Hub to your device</h4>
      <p class="pwa-prompt-desc" style="font-size: 13px; line-height: 1.55; color: #1e293b; margin: 8px 0 12px;">
        ${isIos
          ? '1. Tap the <strong>Share</strong> button <i class="fa-solid fa-arrow-up-from-bracket"></i> at the bottom of Safari.<br>2. Scroll and tap <strong>Add to Home Screen</strong>.<br>3. Tap <strong>Add</strong> to finish.'
          : '1. Open the browser menu (<strong>⋮</strong>).<br>2. Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.<br>3. Confirm to install.'}
      </p>
      <div class="pwa-prompt-actions">
        <button type="button" class="btn-pwa-install" id="pwaDoneBtn" style="padding: 7px 18px; font-size: 12.5px;">
          <i class="fa-solid fa-check"></i> <span>Got it</span>
        </button>
      </div>
    `;
    const doneBtn = document.getElementById('pwaDoneBtn');
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        window.__pwaInstalled = true;
        try {
          localStorage.setItem('mgit_pwa_installed', '1');
          localStorage.setItem('mgit_pwa_added', '1');
        } catch (e) {}
        dismissPrompt();
        updateInstallEntry();
      });
    }
  }

  // The inline head script captures the event; this listener keeps the UI in sync.
  window.addEventListener('mgit-installable', () => {
    updateInstallEntry();
    if (!isDismissed()) {
      // The scheduled 15-second timer will show the friendly prompt.
    }
  });

  window.addEventListener('mgit-installed', () => {
    const banner = document.getElementById('pwaInstallPrompt');
    if (banner) banner.remove();
    updateInstallEntry();
  });

  const installEntry = document.getElementById('headerInstallBtn');
  if (installEntry) {
    installEntry.addEventListener('click', (event) => {
      event.stopPropagation();
      showInstallPrompt(true);
    });
  }

  updateInstallEntry();

  // Track active time
  function startActiveTracking() {
    if (isStandalone() || isDismissed()) return;

    lastActiveTimestamp = Date.now();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (lastActiveTimestamp) {
          activeTimeAccumulated += Date.now() - lastActiveTimestamp;
          lastActiveTimestamp = null;
        }
      } else {
        lastActiveTimestamp = Date.now();
      }
    });

    timerInterval = setInterval(() => {
      if (isStandalone() || isDismissed() || installPromptShown) {
        clearInterval(timerInterval);
        return;
      }

      let total = activeTimeAccumulated;
      if (!document.hidden && lastActiveTimestamp) {
        total += Date.now() - lastActiveTimestamp;
      }

      if (total >= PWA_DELAY_MS) {
        showInstallPrompt();
      }
    }, 1000);
  }

  // Trigger tracking on first user interaction
  const startEvents = ['click', 'keydown', 'scroll', 'touchstart'];
  let started = false;
  function onFirstInteraction() {
    if (started) return;
    started = true;
    startEvents.forEach(evt => document.removeEventListener(evt, onFirstInteraction));
    startActiveTracking();
  }
  startEvents.forEach(evt => document.addEventListener(evt, onFirstInteraction, { passive: true }));

})();

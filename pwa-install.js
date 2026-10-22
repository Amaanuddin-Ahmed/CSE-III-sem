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
  let deferredPrompt = null;
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
  }

  function showInstallPrompt() {
    if (installPromptShown || isStandalone() || isDismissed()) return;

    // Do NOT interrupt active practice session / quiz
    const sessionScreen = document.getElementById('practiceSessionScreen');
    if (sessionScreen && sessionScreen.style.display !== 'none') {
      return; // Postpone
    }

    installPromptShown = true;
    if (timerInterval) clearInterval(timerInterval);

    const promptCard = document.createElement('div');
    promptCard.id = 'pwaInstallPrompt';
    promptCard.className = 'pwa-install-prompt glass-panel';
    promptCard.setAttribute('role', 'dialog');
    promptCard.setAttribute('aria-label', 'Install MGIT PYQ Hub');
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
        <h4 class="pwa-prompt-title">Install MGIT PYQ Hub</h4>
        <p class="pwa-prompt-desc">Add to home screen for instant 1-tap offline access, practice games &amp; revision!</p>
        <div class="pwa-prompt-actions">
          <button type="button" class="btn-pwa-install" id="pwaInstallNowBtn">
            <i class="fa-solid fa-download"></i> <span>Install Now</span>
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

    document.getElementById('pwaInstallNowBtn').addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          console.log('[PWA] User accepted installation');
        }
        deferredPrompt = null;
      }
      dismissPrompt();
    });

    document.getElementById('pwaInstallLaterBtn').addEventListener('click', dismissPrompt);
    document.getElementById('pwaCloseIconBtn').addEventListener('click', dismissPrompt);
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

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

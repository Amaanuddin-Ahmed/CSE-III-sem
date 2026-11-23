/**
 * MGIT PYQ Hub - PWA Registration & Universal Add to Home Screen Controller
 */

(function() {
  'use strict';

  // 1. Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(r => { r.update(); return r; })
        .then((reg) => {
          console.log('[PWA] Service Worker registered:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });
    });
  }

  // 2. State & Detection
  const PWA_DELAY_MS = 15000;
  let activeTimeAccumulated = 0;
  let lastActiveTimestamp = null;
  let installPromptShown = false;
  let timerInterval = null;

  const DISMISSED_KEY = 'mgit_pwa_dismiss_until';
  const DISMISS_COUNT_KEY = 'mgit_pwa_dismiss_count';

  function isStandalone() {
    return Boolean(
      (window.matchMedia && (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches
      )) ||
      window.navigator.standalone === true ||
      (document.referrer && document.referrer.includes('android-app://'))
    );
  }

  function isDismissed() {
    try {
      const until = parseInt(localStorage.getItem(DISMISSED_KEY) || '0', 10);
      return Date.now() < until;
    } catch (e) {
      return false;
    }
  }

  function safeToast(msg) {
    if (typeof window.showToast === 'function') {
      window.showToast(msg);
    } else {
      console.log('[PWA]', msg);
    }
  }

  function updateInstallEntry() {
    const standalone = isStandalone();
    const headerBtn = document.getElementById('headerInstallBtn');
    if (headerBtn) {
      headerBtn.hidden = standalone;
    }
    const footerBtn = document.getElementById('footerInstallBtn');
    if (footerBtn) {
      footerBtn.hidden = standalone;
    }
  }

  // 3. User Gesture Direct Install & Instruction Modal
  function handleInstallClick() {
    if (isStandalone()) {
      safeToast('MGIT PYQ Hub is already installed and running on your device.');
      return;
    }

    const deferred = window.__deferredInstall;
    if (deferred) {
      try {
        deferred.prompt();
        deferred.userChoice.then((choice) => {
          if (choice && choice.outcome === 'accepted') {
            window.__pwaInstalled = true;
            try { localStorage.setItem('mgit_pwa_installed', '1'); } catch (e) {}
            window.__deferredInstall = null;
            updateInstallEntry();
            safeToast('MGIT PYQ Hub added to your Home Screen!');
            const banner = document.getElementById('pwaInstallPrompt');
            if (banner) banner.remove();
          }
        }).catch(() => {
          openA2hsModal();
        });
      } catch (err) {
        openA2hsModal();
      }
    } else {
      openA2hsModal();
    }
  }

  function openA2hsModal() {
    const modal = document.getElementById('a2hsModal');
    const body = document.getElementById('a2hsModalBody');
    if (!modal || !body) return;

    const ua = (navigator.userAgent || '').toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /android/.test(ua);

    let instructionsHtml = '';

    if (isIos) {
      instructionsHtml = `
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-subtle, #f1f5f9);">
          <img src="assets/icons/icon-192.png" alt="MGIT PYQ Hub" style="width: 48px; height: 48px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div>
            <div style="font-weight: 700; font-size: 15px; color: var(--text-primary, #0f172a);">MGIT PYQ Hub</div>
            <div style="font-size: 12.5px; color: var(--text-secondary, #64748b);">Install shortcut on your iPhone or iPad</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">1</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Tap the <strong>Share</strong> button <i class="fa-solid fa-arrow-up-from-bracket" style="color: #2563eb; margin: 0 4px;"></i> in Safari's toolbar at the bottom of the screen.</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">2</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Scroll down in the menu and tap <strong>Add to Home Screen</strong> <i class="fa-regular fa-square-plus" style="color: #2563eb; margin: 0 4px;"></i>.</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">3</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Tap <strong>Add</strong> in the top-right corner to place the app on your home screen.</span>
          </div>
        </div>
      `;
    } else if (isAndroid) {
      instructionsHtml = `
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-subtle, #f1f5f9);">
          <img src="assets/icons/icon-192.png" alt="MGIT PYQ Hub" style="width: 48px; height: 48px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div>
            <div style="font-weight: 700; font-size: 15px; color: var(--text-primary, #0f172a);">MGIT PYQ Hub</div>
            <div style="font-size: 12.5px; color: var(--text-secondary, #64748b);">Install shortcut on your Android device</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">1</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Tap the browser menu (<strong style="font-size: 16px;">⋮</strong> three dots in the top-right corner).</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">2</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">3</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Confirm by tapping <strong>Install</strong> or <strong>Add</strong>.</span>
          </div>
        </div>
      `;
    } else {
      instructionsHtml = `
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-subtle, #f1f5f9);">
          <img src="assets/icons/icon-192.png" alt="MGIT PYQ Hub" style="width: 48px; height: 48px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div>
            <div style="font-weight: 700; font-size: 15px; color: var(--text-primary, #0f172a);">MGIT PYQ Hub</div>
            <div style="font-size: 12.5px; color: var(--text-secondary, #64748b);">Install shortcut on your Desktop</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">1</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Click the <strong>Install</strong> icon <i class="fa-solid fa-desktop" style="color: #4f46e5; margin: 0 4px;"></i> on the right side of the address bar.</span>
          </div>
          <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 10px; background: var(--bg-hover, #f8fafc); border: 1px solid var(--border-subtle, #e2e8f0);">
            <span style="background: #e0e7ff; color: #4338ca; font-weight: 700; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">2</span>
            <span style="font-size: 13.5px; line-height: 1.5; color: var(--text-primary, #1e293b);">Or click browser menu (<strong>⋮</strong>) &rarr; <strong>Save and share</strong> &rarr; <strong>Install MGIT PYQ Hub</strong>.</span>
          </div>
        </div>
      `;
    }

    body.innerHTML = instructionsHtml;
    modal.style.display = 'flex';
  }

  function closeA2hsModal() {
    const modal = document.getElementById('a2hsModal');
    if (modal) modal.style.display = 'none';
  }

  // Hook modal buttons
  const closeBtn = document.getElementById('closeA2hsModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeA2hsModal);
  const gotItBtn = document.getElementById('a2hsGotItBtn');
  if (gotItBtn) gotItBtn.addEventListener('click', closeA2hsModal);

  const modalBackdrop = document.getElementById('a2hsModal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeA2hsModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeA2hsModal();
  });

  // Attach click handlers to buttons
  const headerBtn = document.getElementById('headerInstallBtn');
  if (headerBtn) {
    headerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleInstallClick();
    });
  }

  const footerBtn = document.getElementById('footerInstallBtn');
  if (footerBtn) {
    footerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleInstallClick();
    });
  }

  // 4. Background 15-second promo banner
  function dismissPrompt() {
    try {
      const currentCount = parseInt(localStorage.getItem(DISMISS_COUNT_KEY) || '0', 10);
      const newCount = currentCount + 1;
      localStorage.setItem(DISMISS_COUNT_KEY, newCount);

      const delayDays = newCount === 1 ? 3 : 30;
      const suppressUntil = Date.now() + (delayDays * 24 * 60 * 60 * 1000);
      localStorage.setItem(DISMISSED_KEY, suppressUntil);
    } catch (e) {}

    const banner = document.getElementById('pwaInstallPrompt');
    if (banner) {
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 350);
    }

    installPromptShown = true;
    if (timerInterval) clearInterval(timerInterval);
    if (window.MGITPopups) window.MGITPopups.closed('a2hs');
  }

  function showPassivePrompt() {
    if (document.getElementById('pwaInstallPrompt')) return;
    if (isStandalone() || installPromptShown || isDismissed()) return;

    if (window.MGITPopups && !window.MGITPopups.canShow('a2hs')) {
      return;
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
        event.preventDefault();
        event.stopPropagation();
        handleInstallClick();
      });
    }

    const laterBtn = document.getElementById('pwaInstallLaterBtn');
    if (laterBtn) laterBtn.addEventListener('click', dismissPrompt);
    const pwaCloseBtn = document.getElementById('pwaCloseIconBtn');
    if (pwaCloseBtn) pwaCloseBtn.addEventListener('click', dismissPrompt);
  }

  // Keep in sync with install events
  window.addEventListener('mgit-installable', () => {
    updateInstallEntry();
  });

  window.addEventListener('mgit-installed', () => {
    const banner = document.getElementById('pwaInstallPrompt');
    if (banner) banner.remove();
    updateInstallEntry();
  });

  updateInstallEntry();

  // Active time tracking for passive prompt
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
        showPassivePrompt();
      }
    }, 1000);
  }

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

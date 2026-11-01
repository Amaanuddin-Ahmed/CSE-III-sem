/**
 * MGIT PYQ Hub — Theme Manager (Light / Dark Mode)
 * Lightweight, zero-dependency theme engine with circular reveal transition,
 * anti-FOUC early initialization, and multi-tab synchronization.
 */
(function() {
  'use strict';

  var THEME_KEY = 'mgit_theme';
  var DARK_THEME = 'dark';
  var LIGHT_THEME = 'light';
  var META_DARK = '#0b1220';
  var META_LIGHT = '#1e3a8a';

  function getStoredTheme() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('theme') === 'reset') {
        localStorage.removeItem(THEME_KEY);
        localStorage.removeItem('mgit_dark_intro_seen');
        return LIGHT_THEME;
      }
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === DARK_THEME || saved === LIGHT_THEME) return saved;
    } catch (e) {}
    return LIGHT_THEME;
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === DARK_THEME ? DARK_THEME : LIGHT_THEME;
  }

  function updateMetaAndControls(theme) {
    var isDark = theme === DARK_THEME;

    // 1. Meta theme-color
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', isDark ? META_DARK : META_LIGHT);
    }

    // 2. Header toggle button
    var btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // 3. Dispatch themechange event for third-party libraries (Mermaid / KaTeX)
    try {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
    } catch (e) {}
  }

  function applyThemeDirect(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateMetaAndControls(theme);
  }

  function setTheme(theme, options) {
    var opts = options || {};
    var validTheme = (theme === DARK_THEME) ? DARK_THEME : LIGHT_THEME;
    var current = getCurrentTheme();

    // Persist in localStorage
    try {
      localStorage.setItem(THEME_KEY, validTheme);
    } catch (e) {}

    if (validTheme === current) {
      updateMetaAndControls(validTheme);
      return;
    }

    // Circular reveal view transition if supported and not reduced-motion
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !opts.skipAnimation && !prefersReduced) {
      var x = typeof opts.originX === 'number' ? opts.originX : (window.innerWidth - 40);
      var y = typeof opts.originY === 'number' ? opts.originY : 30;

      var endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      var transition = document.startViewTransition(function() {
        applyThemeDirect(validTheme);
      });

      transition.ready.then(function() {
        var clipPath = [
          'circle(0px at ' + x + 'px ' + y + 'px)',
          'circle(' + endRadius + 'px at ' + x + 'px ' + y + 'px)'
        ];

        document.documentElement.animate(
          {
            clipPath: validTheme === DARK_THEME ? clipPath : [clipPath[1], clipPath[0]]
          },
          {
            duration: 380,
            easing: 'ease-in-out',
            pseudoElement: validTheme === DARK_THEME ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      }).catch(function() {
        applyThemeDirect(validTheme);
      });
    } else {
      applyThemeDirect(validTheme);
    }
  }

  function toggleTheme(event) {
    var current = getCurrentTheme();
    var next = (current === DARK_THEME) ? LIGHT_THEME : DARK_THEME;
    var originX, originY;

    if (event && event.clientX) {
      originX = event.clientX;
      originY = event.clientY;
    } else {
      var btn = document.getElementById('themeToggleBtn');
      if (btn) {
        var rect = btn.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
      }
    }

    setTheme(next, { originX: originX, originY: originY });
  }

  // Cross-tab sync
  window.addEventListener('storage', function(e) {
    if (e.key === THEME_KEY && e.newValue) {
      applyThemeDirect(e.newValue);
    }
  });

  // Attach button listener on DOM ready
  function initControls() {
    var btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
      updateMetaAndControls(getCurrentTheme());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initControls);
  } else {
    initControls();
  }

  // Expose global ThemeManager
  window.ThemeManager = {
    getTheme: getCurrentTheme,
    setTheme: setTheme,
    toggleTheme: toggleTheme
  };
})();

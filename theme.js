(function() {
  'use strict';
  var TK = 'mgit_theme', IK = 'mgit_dark_intro_seen', DARK = 'dark', LIGHT = 'light';
  var MD = '#0b1220', ML = '#1e3a8a';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') === DARK ? DARK : LIGHT;
  }

  function updateUI(t) {
    var isD = t === DARK;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isD ? MD : ML);
    var btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.setAttribute('aria-pressed', isD ? 'true' : 'false');
      btn.setAttribute('title', isD ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('aria-label', isD ? 'Switch to light mode' : 'Switch to dark mode');
    }
    try { window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t } })); } catch (e) {}
  }

  function applyDirect(t) {
    document.documentElement.setAttribute('data-theme', t);
    updateUI(t);
  }

  function setTheme(t, opts) {
    opts = opts || {};
    var val = t === DARK ? DARK : LIGHT;
    try { localStorage.setItem(TK, val); } catch (e) {}
    if (val === getTheme()) { updateUI(val); return; }

    var red = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !opts.skipAnimation && !red) {
      var x = typeof opts.originX === 'number' ? opts.originX : (window.innerWidth - 40);
      var y = typeof opts.originY === 'number' ? opts.originY : 30;
      var r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      var tr = document.startViewTransition(function() { applyDirect(val); });
      tr.ready.then(function() {
        var cp = ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + r + 'px at ' + x + 'px ' + y + 'px)'];
        document.documentElement.animate(
          { clipPath: val === DARK ? cp : [cp[1], cp[0]] },
          { duration: 380, easing: 'ease-in-out', pseudoElement: val === DARK ? '::view-transition-new(root)' : '::view-transition-old(root)' }
        );
      }).catch(function() { applyDirect(val); });
    } else {
      applyDirect(val);
    }
  }

  function toggle(e) {
    var next = getTheme() === DARK ? LIGHT : DARK;
    var x, y, b = document.getElementById('themeToggleBtn');
    if (e && e.clientX) { x = e.clientX; y = e.clientY; }
    else if (b) { var r = b.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
    setTheme(next, { originX: x, originY: y });
  }

  window.addEventListener('storage', function(e) {
    if (e.key === TK && e.newValue) applyDirect(e.newValue);
  });

  function dismissIntro(toDark) {
    var m = document.getElementById('darkIntroModal');
    var dlg = document.getElementById('darkIntroDialog');
    var btn = document.getElementById('themeToggleBtn');
    try { localStorage.setItem(IK, 'true'); } catch (e) {}
    if (!m) return;

    var red = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (dlg && btn && !red) {
      var tr = btn.getBoundingClientRect(), dr = dlg.getBoundingClientRect();
      var tx = tr.left + tr.width / 2, ty = tr.top + tr.height / 2;
      var dx = tx - (dr.left + dr.width / 2), dy = ty - (dr.top + dr.height / 2);
      dlg.style.transition = 'transform 0.38s cubic-bezier(0.2,0.8,0.2,1), opacity 0.35s ease';
      dlg.style.transform = 'translate(' + Math.round(dx) + 'px,' + Math.round(dy) + 'px) scale(0.08)';
      dlg.style.opacity = '0';
      m.style.transition = 'background-color 0.32s ease';
      m.style.backgroundColor = 'transparent';
      setTimeout(function() {
        m.style.display = 'none';
        dlg.style.transform = ''; dlg.style.opacity = '';
        btn.classList.add('theme-btn-pulse');
        setTimeout(function() { btn.classList.remove('theme-btn-pulse'); }, 500);
        if (toDark) setTheme(DARK, { originX: tx, originY: ty });
      }, 380);
    } else {
      m.style.display = 'none';
      if (toDark) setTheme(DARK, { skipAnimation: true });
    }
  }

  function showIntro() {
    try { if (localStorage.getItem(IK) === 'true') return; } catch (e) { return; }
    var m = document.getElementById('darkIntroModal');
    if (m) m.style.display = 'flex';
  }

  function maybeShowIntro() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get('theme') === 'reset') localStorage.removeItem(IK);
      if (localStorage.getItem(IK) === 'true') return;
    } catch (e) { return; }

    var ov = document.getElementById('tourOverlay');
    var seen = false;
    try { seen = localStorage.getItem('mgit_tour_seen_v2') === 'true'; } catch (e) {}
    if (!seen && ov) {
      var obs = new MutationObserver(function() {
        if (ov.style.display === 'none') { obs.disconnect(); setTimeout(showIntro, 700); }
      });
      obs.observe(ov, { attributes: true, attributeFilter: ['style', 'class'] });
      return;
    }
    if (ov && ov.style.display !== 'none') return;
    setTimeout(showIntro, 600);
  }

  function onId(id, ev, fn) {
    var el = document.getElementById(id);
    if (el) el.addEventListener(ev, fn);
  }

  function init() {
    onId('themeToggleBtn', 'click', toggle);
    onId('darkIntroSwitchBtn', 'click', function() { dismissIntro(true); });
    onId('darkIntroLaterBtn', 'click', function() { dismissIntro(false); });
    onId('darkIntroCloseBtn', 'click', function() { dismissIntro(false); });
    updateUI(getTheme());
    maybeShowIntro();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.ThemeManager = { getTheme: getTheme, setTheme: setTheme, toggleTheme: toggle, showIntro: showIntro, dismissIntro: dismissIntro };
})();

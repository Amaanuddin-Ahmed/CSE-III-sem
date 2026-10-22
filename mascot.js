/**
 * MGIT PYQ Hub — Cute Animated Cat Learning Companion (Feature 5)
 * 
 * High-performance, lightweight inline SVG cat with 6 distinct expressive states:
 * - idle: slow blink, gentle tail swish
 * - thinking: tilted head, eyes glancing up, floating '...' thought bubble
 * - happy: joyful bounce, wagging tail, closed-eye smile (on correct answer)
 * - sad: drooped ears, small tear, lowered head (1-2s on wrong answer)
 * - concentrating: focused squint, cute spectacles, studying the explanation
 * - celebrating: party hat, triumphant jump, joyful celebration (end of session)
 * 
 * Hover Effect: Flies/levitates gently in the air with soft floating sparkles!
 * Zero external dependencies. Fully responsive with prefers-reduced-motion support.
 */

const Mascot = (function () {
  'use strict';

  let currentState = 'idle';
  let targetContainer = null;
  let sadTimeout = null;

  function init(containerElement) {
    targetContainer = containerElement;
    setState('idle');
  }

  function getSvg(state) {
    // Shared cute kitten base geometry: warm honey/golden-caramel cat with cream face & whiskers
    return `
      <div class="cat-mascot cat-state-${state}" role="img" aria-label="Learning companion cat is ${state}">
        <div class="cat-wings-glow" aria-hidden="true">
          <svg class="cat-floating-stars" viewBox="0 0 140 120" width="130" height="110">
            <polygon points="20,24 23,30 30,30 25,35 27,42 20,38 13,42 15,35 10,30 17,30" fill="#fde047" opacity="0.9" class="sparkle-star s1" />
            <polygon points="120,30 122,34 127,34 123,38 125,43 120,40 115,43 117,38 113,34 118,34" fill="#a78bfa" opacity="0.85" class="sparkle-star s2" />
            <polygon points="70,10 72,14 77,14 73,17 75,22 70,19 65,22 67,17 63,14 68,14" fill="#f43f5e" opacity="0.85" class="sparkle-star s3" />
          </svg>
        </div>
        <svg class="cat-svg" viewBox="0 0 140 120" width="130" height="110" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Warm Kitty Gradients -->
            <linearGradient id="catFur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="50%" stop-color="#ea580c" />
              <stop offset="100%" stop-color="#c2410c" />
            </linearGradient>
            <linearGradient id="catInnerEar" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fbcfe8" />
              <stop offset="100%" stop-color="#f472b6" />
            </linearGradient>
            <linearGradient id="catSnout" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#fef3c7" />
            </linearGradient>
            <filter id="softCatShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.14" flood-color="#451a03" />
            </filter>
          </defs>

          <!-- Ground shadow (shrinks when hovering/flying in air) -->
          <ellipse class="cat-ground-shadow" cx="70" cy="112" rx="38" ry="6" fill="rgba(15, 23, 42, 0.12)" />

          <!-- Tail (curled cat tail that sways or wags) -->
          <path class="cat-tail" d="M32 86 C12 80 10 52 26 44 C30 42 34 48 30 52 C18 58 20 76 34 82 Z" fill="#c2410c" />

          <!-- Body -->
          <ellipse cx="70" cy="86" rx="28" ry="23" fill="url(#catFur)" filter="url(#softCatShadow)" />
          <!-- Chest cream bib -->
          <ellipse cx="70" cy="89" rx="15" ry="15" fill="url(#catSnout)" />

          <!-- Collar with cute bell -->
          <path d="M48 76 Q70 85 92 76" stroke="#4f46e5" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <circle cx="70" cy="83" r="5" fill="#facc15" stroke="#ca8a04" stroke-width="1.2" />
          <circle cx="70" cy="84" r="1.5" fill="#713f12" />

          <!-- Cute Front Paws -->
          <ellipse cx="55" cy="104" rx="7.5" ry="6" fill="#fef3c7" stroke="#ea580c" stroke-width="1" />
          <ellipse cx="85" cy="104" rx="7.5" ry="6" fill="#fef3c7" stroke="#ea580c" stroke-width="1" />

          <!-- HEAD GROUP -->
          <g class="cat-head-group">
            <!-- Pointed Cat Ears -->
            <g class="cat-ears">
              <!-- Left Ear -->
              <polygon class="cat-ear-left" points="40,48 30,16 56,36" fill="url(#catFur)" filter="url(#softCatShadow)" />
              <polygon points="41,45 34,22 53,36" fill="url(#catInnerEar)" />
              <!-- Right Ear -->
              <polygon class="cat-ear-right" points="100,48 110,16 84,36" fill="url(#catFur)" filter="url(#softCatShadow)" />
              <polygon points="99,45 106,22 87,36" fill="url(#catInnerEar)" />
            </g>

            <!-- Head Round -->
            <ellipse cx="70" cy="50" rx="34" ry="28" fill="url(#catFur)" filter="url(#softCatShadow)" />

            <!-- Cream Cheeks / Muzzle -->
            <ellipse cx="70" cy="58" rx="22" ry="16" fill="url(#catSnout)" />

            <!-- Cheek Whiskers (3 left, 3 right) -->
            <g class="cat-whiskers" stroke="#78350f" stroke-width="1.3" stroke-linecap="round" opacity="0.75">
              <line x1="38" y1="54" x2="16" y2="50" />
              <line x1="37" y1="58" x2="14" y2="58" />
              <line x1="38" y1="62" x2="16" y2="66" />
              <line x1="102" y1="54" x2="124" y2="50" />
              <line x1="103" y1="58" x2="126" y2="58" />
              <line x1="102" y1="62" x2="124" y2="66" />
            </g>

            <!-- Rosy Cheek Blushes -->
            <circle cx="46" cy="58" r="5" fill="#f43f5e" opacity="0.35" />
            <circle cx="94" cy="58" r="5" fill="#f43f5e" opacity="0.35" />

            <!-- Pink Button Nose & Cute :3 Mouth -->
            <polygon points="70,57 66,53 74,53" fill="#f43f5e" rx="1" />
            <path d="M64 59 Q67 63 70 60 Q73 63 76 59" stroke="#78350f" stroke-width="1.8" stroke-linecap="round" fill="none" />

            <!-- STATE-SPECIFIC EXPRESSIONS -->
            ${getStateExpression(state)}
          </g>
        </svg>
      </div>
    `;
  }

  function getStateExpression(state) {
    switch (state) {
      case 'happy':
        // Joyful squinting smile ^ ^, tongue out, bouncing
        return `
          <!-- Happy closed-crescent eyes -->
          <path d="M50 46 Q56 40 62 46" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <path d="M78 46 Q84 40 90 46" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <!-- Cute Pink Kitty Tongue -->
          <path d="M68 60 Q70 68 72 60 Z" fill="#f43f5e" />
          <!-- Star sparkle -->
          <polygon points="106,28 108,34 114,34 109,38 111,44 106,40 101,44 103,38 98,34 104,34" fill="#fbbf24" class="sparkle-star" />
        `;

      case 'sad':
        // Drooped sad eyes, tear on left cheek
        return `
          <ellipse cx="56" cy="46" rx="4.5" ry="5.5" fill="#1e293b" />
          <ellipse cx="84" cy="46" rx="4.5" ry="5.5" fill="#1e293b" />
          <!-- Drooping sad brows -->
          <path d="M50 38 Q56 42 62 41" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M78 41 Q84 42 90 38" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
          <!-- Blue Teardrop -->
          <path d="M48 54 C48 51 51 47 51 47 C51 47 54 51 54 54 C54 56 52 57 51 57 C50 57 48 56 48 54 Z" fill="#38bdf8" />
        `;

      case 'concentrating':
        // Round Golden Spectacles on nose studying explanation
        return `
          <!-- Golden glasses -->
          <circle cx="56" cy="46" r="8.5" stroke="#d97706" stroke-width="2" fill="rgba(255, 255, 255, 0.4)" />
          <circle cx="84" cy="46" r="8.5" stroke="#d97706" stroke-width="2" fill="rgba(255, 255, 255, 0.4)" />
          <line x1="64.5" y1="46" x2="75.5" y2="46" stroke="#d97706" stroke-width="2" />
          <!-- Focused squint eyes -->
          <ellipse cx="56" cy="46" rx="3.5" ry="4" fill="#1e293b" />
          <ellipse cx="84" cy="46" rx="3.5" ry="4" fill="#1e293b" />
          <circle cx="55" cy="44" r="1.2" fill="#ffffff" />
          <circle cx="83" cy="44" r="1.2" fill="#ffffff" />
        `;

      case 'thinking':
        // Head tilted, looking upward with thought bubble
        return `
          <ellipse cx="57" cy="44" rx="4.5" ry="5.5" fill="#1e293b" />
          <ellipse cx="85" cy="44" rx="4.5" ry="5.5" fill="#1e293b" />
          <!-- Gaze looking up and right -->
          <circle cx="59" cy="42" r="2" fill="#ffffff" />
          <circle cx="87" cy="42" r="2" fill="#ffffff" />
          <!-- Thought bubbles -->
          <circle cx="106" cy="22" r="3" fill="#cbd5e1" />
          <circle cx="114" cy="14" r="5" fill="#cbd5e1" />
          <ellipse cx="124" cy="8" rx="8" ry="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1" />
          <text x="124" y="11" font-size="7" font-weight="bold" fill="#64748b" text-anchor="middle">?</text>
        `;

      case 'celebrating':
        // Party Hat + Confetti Stars
        return `
          <!-- Party Cone Hat -->
          <polygon points="70,6 58,34 82,34" fill="#ec4899" />
          <polygon points="70,6 64,34 76,34" fill="#facc15" />
          <circle cx="70" cy="6" r="3.5" fill="#38bdf8" />
          <!-- Cheerful joyful eyes -->
          <path d="M50 46 Q56 40 62 46" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <path d="M78 46 Q84 40 90 46" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <!-- Party Confetti -->
          <rect x="36" y="22" width="4" height="4" fill="#38bdf8" transform="rotate(25 38 24)" />
          <rect x="96" y="24" width="4" height="4" fill="#a855f7" transform="rotate(-30 98 26)" />
          <circle cx="106" cy="42" r="2.5" fill="#22c55e" />
          <circle cx="34" cy="40" r="2.5" fill="#f59e0b" />
        `;

      case 'idle':
      default:
        // Kawaii round eyes with bright double shine sparkles
        return `
          <g class="cat-eyes-idle">
            <!-- Left Eye -->
            <ellipse cx="56" cy="46" rx="5" ry="6.5" fill="#1e293b" />
            <circle cx="54.5" cy="43.5" r="2" fill="#ffffff" />
            <circle cx="58" cy="48" r="1" fill="#ffffff" />
            <!-- Right Eye -->
            <ellipse cx="84" cy="46" rx="5" ry="6.5" fill="#1e293b" />
            <circle cx="82.5" cy="43.5" r="2" fill="#ffffff" />
            <circle cx="86" cy="48" r="1" fill="#ffffff" />
          </g>
        `;
    }
  }

  function setState(newState, message) {
    currentState = newState;
    if (!targetContainer) return;

    if (sadTimeout) {
      clearTimeout(sadTimeout);
      sadTimeout = null;
    }

    targetContainer.innerHTML = getSvg(newState);

    const speechEl = document.getElementById('mascotSpeechBubble');
    if (speechEl && message) {
      speechEl.textContent = message;
      speechEl.style.display = 'block';
    }

    // Auto transition: wrong answer sad state reverts to concentrating after 1.5s
    if (newState === 'sad') {
      sadTimeout = setTimeout(() => {
        setState('concentrating', "Let's review the explanation together!");
      }, 1500);
    }
  }

  function getState() {
    return currentState;
  }

  return {
    init,
    setState,
    getState,
    getSvg
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Mascot;
}

/**
 * MGIT PYQ Hub — Cute Animated Puppy Learning Companion (Feature 5)
 * 
 * High-performance, lightweight inline SVG puppy with 6 distinct expressive states:
 * - idle: slow blink, happy tail sway
 * - thinking: tilted head, eyes glancing up, floating '...' thought bubble
 * - happy: joyful bounce, wagging tail, closed-eye smile (on correct answer)
 * - sad: drooped ears, small tear, lowered head (1-2s on wrong answer)
 * - concentrating: focused squint, slight head tilt, studying the explanation
 * - celebrating: party hat, triumphant jump, joyful celebration (end of session)
 * 
 * Zero external dependencies. Fully responsive with prefers-reduced-motion support.
 */

const Mascot = (function () {
  let currentState = 'idle';
  let targetContainer = null;
  let sadTimeout = null;

  function init(containerElement) {
    targetContainer = containerElement;
    setState('idle');
  }

  function getSvg(state) {
    // Shared puppy base geometry: golden-amber/caramel puppy with soft cream face
    return `
      <div class="puppy-mascot puppy-state-${state}" role="img" aria-label="Learning companion puppy is ${state}">
        <svg class="puppy-svg" viewBox="0 0 140 120" width="130" height="110" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Soft gradients -->
            <linearGradient id="pupFur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fbbf24" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
            <linearGradient id="pupEar" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#b45309" />
            </linearGradient>
            <linearGradient id="pupSnout" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="100%" stop-color="#fef3c7" />
            </linearGradient>
            <filter id="softPupShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.12" flood-color="#78350f" />
            </filter>
          </defs>

          <!-- Ground shadow -->
          <ellipse cx="70" cy="112" rx="38" ry="6" fill="rgba(15, 23, 42, 0.08)" />

          <!-- Tail (sways or wags) -->
          <path class="pup-tail" d="M30 84 Q14 74 22 58 Q28 68 34 80 Z" fill="#d97706" />

          <!-- Body -->
          <ellipse cx="70" cy="85" rx="30" ry="24" fill="url(#pupFur)" filter="url(#softPupShadow)" />
          <!-- Chest cream patch -->
          <ellipse cx="70" cy="88" rx="16" ry="16" fill="url(#pupSnout)" />

          <!-- Collar with golden bell -->
          <path d="M52 74 Q70 82 88 74" stroke="#e11d48" stroke-width="4.5" stroke-linecap="round" fill="none" />
          <circle cx="70" cy="80" r="4" fill="#fbbf24" stroke="#b45309" stroke-width="1" />

          <!-- Paws resting forward -->
          <ellipse cx="54" cy="106" rx="9" ry="6" fill="url(#pupSnout)" stroke="#d97706" stroke-width="1.2" />
          <ellipse cx="86" cy="106" rx="9" ry="6" fill="url(#pupSnout)" stroke="#d97706" stroke-width="1.2" />

          <!-- HEAD GROUP (Rotates & Tilts per state) -->
          <g class="pup-head-group">
            <!-- Left Ear -->
            <ellipse class="pup-ear pup-ear-left" cx="38" cy="46" rx="13" ry="24" fill="url(#pupEar)" transform="rotate(-18 38 46)" />
            <!-- Right Ear -->
            <ellipse class="pup-ear pup-ear-right" cx="102" cy="46" rx="13" ry="24" fill="url(#pupEar)" transform="rotate(18 102 46)" />

            <!-- Main Head Circle -->
            <ellipse cx="70" cy="52" rx="34" ry="30" fill="url(#pupFur)" filter="url(#softPupShadow)" />

            <!-- Eyebrows -->
            <path class="pup-brow pup-brow-left" d="M50 36 Q57 33 63 36" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
            <path class="pup-brow pup-brow-right" d="M77 36 Q83 33 90 36" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />

            <!-- Eyes (changes per state: normal, glancing up, closed happy smile, sad droop, concentrated squint) -->
            <g class="pup-eyes-group">
              ${getEyesSvg(state)}
            </g>

            <!-- Snout (Cream Patch) -->
            <ellipse cx="70" cy="62" rx="18" ry="14" fill="url(#pupSnout)" />

            <!-- Nose -->
            <ellipse cx="70" cy="56" rx="6" ry="4" fill="#3e1d08" />
            <ellipse cx="68.5" cy="54.5" rx="1.8" ry="1.2" fill="#ffffff" opacity="0.8" />

            <!-- Mouth & Tongue -->
            <g class="pup-mouth-group">
              ${getMouthSvg(state)}
            </g>

            <!-- Rosy Cheeks -->
            <circle cx="46" cy="59" r="6" fill="#fb7185" opacity="${state === 'happy' || state === 'celebrating' ? '0.65' : '0.4'}" />
            <circle cx="94" cy="59" r="6" fill="#fb7185" opacity="${state === 'happy' || state === 'celebrating' ? '0.65' : '0.4'}" />

            <!-- Optional State Accessories -->
            ${getStateAccessories(state)}
          </g>

          <!-- Floating Thought Bubble for Thinking State -->
          ${state === 'thinking' ? `
            <g class="pup-thought-bubble">
              <circle cx="102" cy="24" r="3.5" fill="#e0e7ff" stroke="#818cf8" stroke-width="1" />
              <circle cx="110" cy="15" r="5" fill="#e0e7ff" stroke="#818cf8" stroke-width="1.2" />
              <rect x="112" y="2" width="24" height="15" rx="7" fill="#ffffff" stroke="#6366f1" stroke-width="1.5" />
              <text x="124" y="13" font-family="monospace" font-size="12" font-weight="bold" fill="#4f46e5" text-anchor="middle">...</text>
            </g>
          ` : ''}

          <!-- Floating Party Hat for Celebrating -->
          ${state === 'celebrating' ? `
            <polygon points="70,10 58,34 82,34" fill="#f43f5e" stroke="#ffe4e6" stroke-width="1" />
            <circle cx="70" cy="8" r="3.5" fill="#fbbf24" />
            <circle cx="64" cy="22" r="2" fill="#60a5fa" />
            <circle cx="74" cy="26" r="2" fill="#34d399" />
          ` : ''}
        </svg>
      </div>
    `;
  }

  function getEyesSvg(state) {
    if (state === 'happy' || state === 'celebrating') {
      // Joyful closed eye arcs (^ ^)
      return `
        <path d="M52 46 Q58 40 64 46" stroke="#451a03" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M76 46 Q82 40 88 46" stroke="#451a03" stroke-width="3" stroke-linecap="round" fill="none" />
      `;
    }
    if (state === 'sad') {
      // Drooped sad eyes with small tear
      return `
        <ellipse cx="58" cy="47" rx="5" ry="6" fill="#451a03" />
        <ellipse cx="82" cy="47" rx="5" ry="6" fill="#451a03" />
        <circle cx="56.5" cy="45" r="1.8" fill="#ffffff" />
        <circle cx="80.5" cy="45" r="1.8" fill="#ffffff" />
        <!-- Small glistening tear on right cheek -->
        <path class="pup-tear" d="M88 52 C88 52 86 56 86 58 C86 59.5 87 61 88.5 61 C90 61 91 59.5 91 58 C91 56 88 52 88 52 Z" fill="#38bdf8" />
      `;
    }
    if (state === 'thinking') {
      // Eyes glancing upwards to the right
      return `
        <ellipse cx="58" cy="44" rx="5.5" ry="6" fill="#451a03" />
        <ellipse cx="82" cy="44" rx="5.5" ry="6" fill="#451a03" />
        <circle cx="60" cy="41" r="2.2" fill="#ffffff" />
        <circle cx="84" cy="41" r="2.2" fill="#ffffff" />
      `;
    }
    if (state === 'concentrating') {
      // Focused squint looking down at explanation
      return `
        <path d="M52 46 Q58 49 64 46" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M76 46 Q82 49 88 46" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <circle cx="58" cy="47.5" r="1.5" fill="#451a03" />
        <circle cx="82" cy="47.5" r="1.5" fill="#451a03" />
      `;
    }
    // Default idle eyes
    return `
      <ellipse cx="58" cy="45" rx="5.5" ry="6.5" fill="#451a03" />
      <ellipse cx="82" cy="45" rx="5.5" ry="6.5" fill="#451a03" />
      <circle cx="56.5" cy="43" r="2.2" fill="#ffffff" />
      <circle cx="80.5" cy="43" r="2.2" fill="#ffffff" />
    `;
  }

  function getMouthSvg(state) {
    if (state === 'happy' || state === 'celebrating') {
      // Open joyful smile with pink tongue
      return `
        <path d="M64 61 Q70 67 76 61" stroke="#78350f" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M66 63 Q70 73 74 63 Z" fill="#f43f5e" stroke="#be123c" stroke-width="0.8" />
      `;
    }
    if (state === 'sad') {
      // Downward curved frown
      return `
        <path d="M64 65 Q70 60 76 65" stroke="#78350f" stroke-width="2.2" stroke-linecap="round" fill="none" />
      `;
    }
    if (state === 'concentrating') {
      // Small studious line/pout
      return `
        <path d="M66 63 L74 63" stroke="#78350f" stroke-width="2" stroke-linecap="round" />
      `;
    }
    if (state === 'thinking') {
      // Slight wry side-curve
      return `
        <path d="M66 63 Q72 65 75 61" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
      `;
    }
    // Default gentle smile
    return `
      <path d="M64 61 Q70 66 76 61" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
    `;
  }

  function getStateAccessories(state) {
    if (state === 'concentrating') {
      // Small study glasses or miniature notebook peeking
      return `
        <g class="pup-glasses">
          <circle cx="58" cy="46" r="8" stroke="#1e293b" stroke-width="1.8" fill="rgba(255,255,255,0.2)" />
          <circle cx="82" cy="46" r="8" stroke="#1e293b" stroke-width="1.8" fill="rgba(255,255,255,0.2)" />
          <line x1="66" y1="46" x2="74" y2="46" stroke="#1e293b" stroke-width="1.8" />
        </g>
      `;
    }
    return '';
  }

  function setState(newState) {
    if (sadTimeout) {
      clearTimeout(sadTimeout);
      sadTimeout = null;
    }

    currentState = newState;
    if (targetContainer) {
      targetContainer.innerHTML = getSvg(newState);
    }
  }

  /**
   * On incorrect answer: show sad for 1.5 seconds, then smoothly transition into concentrating
   */
  function handleIncorrectAnswer() {
    setState('sad');
    sadTimeout = setTimeout(() => {
      setState('concentrating');
    }, 1500);
  }

  function handleCorrectAnswer() {
    setState('happy');
  }

  function handleNewQuestion() {
    setState('thinking');
  }

  function handleCelebrating() {
    setState('celebrating');
  }

  return {
    init,
    setState,
    handleCorrectAnswer,
    handleIncorrectAnswer,
    handleNewQuestion,
    handleCelebrating,
    getState: () => currentState
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Mascot;
}

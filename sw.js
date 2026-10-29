/**
 * MGIT PYQ Hub - Service Worker (Feature 1)
 * Strategy:
 * - Network-first for documents, scripts and styles so a deploy is picked up
 *   on the next load instead of being one refresh behind.
 * - Cache-first with a background refresh for images, fonts and the manifest.
 * - Cached shell fallback when the network is unavailable.
 * - External Drive, Gemini and Tally requests always go straight to the network.
 */

const CACHE_NAME = 'mgit-hub-v4';

const STATIC_ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'scope-map.js',
  'rich-text.js',
  'mascot.js',
  'activity-tracker.js',
  'practice-runner.js',
  'pwa-install.js',
  'pyq-data.js',
  'data/mid2-practice.js',
  'data/sem-practice.js',
  'data/mid1-practice.js',
  'manifest.webmanifest',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-maskable-192.png',
  'assets/icons/icon-maskable-512.png'
];

const NETWORK_FIRST_DESTINATIONS = new Set(['document', 'script', 'style']);

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : undefined))
      ))
      .then(() => self.clients.claim())
  );
});

function cachePut(request, response) {
  if (!response || response.status !== 200 || response.type !== 'basic') {
    return response;
  }
  const copy = response.clone();
  caches.open(CACHE_NAME)
    .then((cache) => cache.put(request, copy))
    .catch(() => { /* Cache quota or opaque response - ignore. */ });
  return response;
}

function networkFirst(event) {
  return fetch(event.request)
    .then((response) => cachePut(event.request, response))
    .catch(() => caches.match(event.request).then((cached) => {
      if (cached) return cached;
      if (event.request.mode === 'navigate') return caches.match('index.html');
      return Response.error();
    }));
}

function cacheFirst(event) {
  return caches.match(event.request).then((cached) => {
    if (cached) {
      // Refresh in the background for the next visit.
      fetch(event.request)
        .then((response) => cachePut(event.request, response))
        .catch(() => { /* Offline - keep the cached copy. */ });
      return cached;
    }
    return fetch(event.request).then((response) => cachePut(event.request, response));
  });
}

// Fetch Event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Bypass the SW for external APIs, Google Drive, Gemini and Tally.
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('drive.google.com') ||
    url.hostname.includes('generativelanguage.googleapis.com') ||
    url.hostname.includes('tally.so')
  ) {
    return;
  }

  // 2. Navigation and code/assets that ship with a deploy: network first.
  if (event.request.mode === 'navigate' || NETWORK_FIRST_DESTINATIONS.has(event.request.destination)) {
    event.respondWith(networkFirst(event));
    return;
  }

  // 3. Everything else (icons, fonts, manifest): cache first + refresh.
  event.respondWith(cacheFirst(event));
});

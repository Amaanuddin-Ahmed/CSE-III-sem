/**
 * MGIT PYQ Hub - Service Worker (Feature 1)
 * Strategy: Cache-first for static assets, Network-first for dynamic content, bypass for external Drive & Gemini APIs.
 */

const CACHE_NAME = 'mgit-hub-v1';

const STATIC_ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'scope-map.js',
  'mascot.js',
  'activity-tracker.js',
  'practice-runner.js',
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

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Bypass Service Worker completely for external API calls, Google Drive, or Gemini endpoints
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('drive.google.com') ||
    url.hostname.includes('generativelanguage.googleapis.com') ||
    url.hostname.includes('tally.so')
  ) {
    return; // Pass through to network
  }

  // 2. Cache-first strategy with network fallback for local assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache for next time
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {/* Offline */});
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // If navigation request fails, return cached index.html
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
    })
  );
});

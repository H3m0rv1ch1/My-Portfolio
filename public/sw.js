// Service Worker for Portfolio Performance Optimization
// Network-first strategy: always shows the latest version,
// cache is only a fallback for offline.
const CACHE_NAME = 'portfolio-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/herobg.webp',
  '/herobg-mobile.webp',
  '/bgwhitehero.webp',
  '/bgwhitehero-mobile.webp',
  '/img.png',
  '/favicon.ico',
  '/manifest.json',
  '/fonts/inter-var.woff2',
  '/fonts/syne-var.woff2'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - network-first so updates are always visible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (!url.origin.includes(self.location.origin)) return;

  // Always try the network first; fall back to cache only when offline
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses for offline use
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          if (request.mode === 'navigate') {
            return caches.match('/');
          }
          return new Response('', { status: 504, statusText: 'Offline' });
        });
      })
  );
});

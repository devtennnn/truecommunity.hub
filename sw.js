// Minimal service worker so browsers treat TRUE Club as an installable app.
// It deliberately caches NOTHING: players always get the newest page and live data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

const CACHE_NAME = 'sla-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/login.html',
  '/splash.html',
  '/css/themes.css',
  '/css/styles.css',
  '/css/splash.css',
  '/css/login.css',
  '/js/app.js',
  '/shared/db.js',
  '/shared/auth.js',
  '/shared/app.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE_NAME).map(x => caches.delete(x)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(c => c || fetch(e.request).then(r => {
      if (r && r.status === 200) {
        const clone = r.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      }
      return r;
    }).catch(() => caches.match('/index.html')))
  );
});

// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/sw.js',
      ]);

    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Service Worker installed');
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

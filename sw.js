self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rp-elite-v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/gymn.mp3',
      // Добавьте все изображения и ресурсы здесь
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
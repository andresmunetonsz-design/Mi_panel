// Service worker: cache-first para el HTML y los recursos locales.
// Sube CACHE (v5 -> v6...) cuando publiques una nueva versión del panel.
const CACHE = 'panel-v7';
const ASSETS = [
  './', './index.html', './alimentos.js', './manifest.json', './icon-192.png', './icon-512.png',
  './img/accesorio-auriculares.webp',
  './img/accesorio-banda.webp',
  './img/accesorio-birrete.webp',
  './img/accesorio-bufanda.webp',
  './img/accesorio-casco.webp',
  './img/accesorio-corona.webp',
  './img/accesorio-cuerda.webp',
  './img/accesorio-gafas.webp',
  './img/accesorio-gorra.webp',
  './img/accesorio-raqueta.webp',
  './img/mascota-ajolote-1.webp',
  './img/mascota-ajolote-2.webp',
  './img/mascota-ajolote-3.webp',
  './img/mascota-ballena-1.webp',
  './img/mascota-ballena-2.webp',
  './img/mascota-ballena-3.webp',
  './img/mascota-conejita-1.webp',
  './img/mascota-conejita-2.webp',
  './img/mascota-conejita-3.webp',
  './img/mascota-dino-1.webp',
  './img/mascota-dino-2.webp',
  './img/mascota-dino-3.webp',
  './img/mascota-gato-atigrado-1.webp',
  './img/mascota-gato-atigrado-2.webp',
  './img/mascota-gato-atigrado-3.webp',
  './img/mascota-gato-naranja-1.webp',
  './img/mascota-gato-naranja-2.webp',
  './img/mascota-gato-naranja-3.webp',
  './img/mascota-gato-tuxedo-1.webp',
  './img/mascota-gato-tuxedo-2.webp',
  './img/mascota-gato-tuxedo-3.webp',
  './img/mascota-perrito-1.webp',
  './img/mascota-perrito-2.webp',
  './img/mascota-perrito-3.webp',
  './img/mascota-zorro-1.webp',
  './img/mascota-zorro-2.webp',
  './img/mascota-zorro-3.webp',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const u = new URL(req.url);
  // Nunca cachear Google (login, API de Drive): van directo a la red
  if (/(^|\.)google(apis)?\.com$|gstatic\.com$|googleusercontent\.com$/.test(u.hostname)) return;
  if (req.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) {
        // Actualiza en segundo plano para la próxima apertura
        fetch(req).then(r => { if (r && r.ok) caches.open(CACHE).then(c => c.put(req, r)); }).catch(() => {});
        return hit;
      }
      return fetch(req).then(r => {
        if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return r;
      }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    })
  );
});

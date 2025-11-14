const CACHE_NAME = 'pm1-cache-v1';
const urlsToCache = [
  '/', // Directorio raíz
  'pm1_razones_prop_porcent_OFFLINE.html',
  'pm1_mcm_mcd_OFFLINE.html',
  'pm1_regla_de_tres_OFFLINE.html',
  'manifest.json',
  // Si agregaste los íconos, puedes incluirlos aquí:
  // 'icon_192.png', 
  // 'icon_512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
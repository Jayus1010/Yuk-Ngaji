const CACHE_NAME = 'apps-script-pwa-v1'; // Boleh dibiarkan, boleh diganti bebas

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Biarkan kosong agar request diteruskan langsung ke iFrame GAS
});

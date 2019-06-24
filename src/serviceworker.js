self.addEventListener('install', event => console.log('ServiceWorker installed successfully!'));
self.addEventListener('activate', event => console.log('ServiceWorker activated successfully!'));

workbox.precaching.precacheAndRoute([
  ...self.__precacheManifest,
  'images/logo_128x128.png',
  'images/logo_192x192.png',
  'images/logo_512x512.png'
]);

workbox.routing.registerRoute('/', new workbox.strategies.NetworkFirst());
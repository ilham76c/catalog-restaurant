import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

window.self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

window.self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

window.self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

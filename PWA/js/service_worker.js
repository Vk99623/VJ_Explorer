const cache_name = 'v1';
const cache_assets = ["../js/app.js", "../views/main.html"];
// Call Install Event
self.addEventListener('install', (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(caches.open(cache_name).then(cache => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cache_assets);
    }).then(() => {
        self.skipWaiting();
    }));
});
// Call Activate Event
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

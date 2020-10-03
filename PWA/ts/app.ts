// make sure service worker are supported
if('serviceWorker' in navigator){
    console.log('Service Worker Supported');
    window.addEventListener('load',() => {
        navigator.serviceWorker.register("../js/service_worker.js")
        .then(reg => console.log('Service Worker: Registered')).catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}
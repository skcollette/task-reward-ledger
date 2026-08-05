const CACHE_NAME = "task-reward-ledger-v1";

const ASSETS = [
  "/task-reward-ledger/",
  "/task-reward-ledger/index.html",
  "/task-reward-ledger/manifest.webmanifest",
  "/task-reward-ledger/icons/icon-192.png",
  "/task-reward-ledger/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

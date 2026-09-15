// Kill switch: the app that used to live on this domain registered a
// service worker for offline support. Browsers auto-check an installed
// worker's script for updates, so this file -- being different from the
// old one -- gets picked up as an "update", installs, and immediately
// unregisters itself and clears its caches, handing control back to a
// normal (non-intercepted) page load. Safe to delete once traffic from
// devices that still have the old worker has died down.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});

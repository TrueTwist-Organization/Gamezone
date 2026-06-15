// Ad-blocking Service Worker
const AD_DOMAINS = [
  'gamemonetize.com',
  'gamemonetize.co',
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'adinplay.com',
  'adsense.com',
  'adnxs.com',
  'openx.net',
  'rubiconproject.com',
  'pubmatic.com',
  'imasdk.googleapis.com',
  'ads.google.com',
  'pagead2.googlesyndication.com',
  'securepubads.g.doubleclick.net',
  'tpc.googlesyndication.com',
  'static.doubleclick.net',
  'cdn.gamemonetize.com',
  'sdk.gamemonetize.co'
];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const isAd = AD_DOMAINS.some(domain => url.includes(domain));
  
  if (isAd) {
    console.log('[SW] Blocked ad request:', url);
    event.respondWith(new Response('', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    }));
    return;
  }
});

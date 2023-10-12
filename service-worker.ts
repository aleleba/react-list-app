// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching'; //createHandlerBoundToURL
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';

clientsClaim();

// This allows the web app to trigger skipWaiting via
// @ts-ignore:next-line
self.skipWaiting();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
// @ts-ignore:next-line
precacheAndRoute(self.__WB_MANIFEST);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
	// Add in any other file extensions or routing criteria as needed.
	({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
	new StaleWhileRevalidate({
		cacheName: 'images',
		plugins: [
			// Ensure that once this runtime cache reaches a maximum size the
			// least-recently used images are removed.
			new ExpirationPlugin({ maxEntries: 50 }),
		],
	})
);

// Any other custom service worker logic can go here.

//Estrategy for Default. It should be at the end.
registerRoute(/^https?.*/, new NetworkFirst(), 'GET');

//Wait for Notification.
self.addEventListener('push', function (e) {

	// @ts-ignore:next-line
	const data = e.data.json();

	// @ts-ignore:next-line
	registration.showNotification(data.title, {
		body: data.message,
		icon: 'favicon.ico'
	});

});

console.log('hello from service-worker.js the new one.');

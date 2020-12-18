/* eslint-env serviceworker */
import { setCacheNameDetails } from 'workbox-core'
import * as googleAnalytics from 'workbox-google-analytics'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'

// event handlers
self.addEventListener('install', () => self.skipWaiting())

// config
setCacheNameDetails({
  prefix: 'hive'
})
googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline'
  }
})

// precache and routing
precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

registerRoute(
  /.*google-analytics\.com/,
  new CacheFirst({
    cacheName: 'hive-analytics',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new CacheFirst({
    cacheName: 'hive-images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)
registerRoute(
  /^https:\/\/fnalabs\.github\.io\/fnalabs-assets\/assets\//,
  new CacheFirst({
    cacheName: 'hive-images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)

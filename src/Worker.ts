/* eslint-env serviceworker */
import { setCacheNameDetails } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import * as pkg from '../package.json'

// event handlers
// @ts-expect-error skipping this check
self.addEventListener('install', () => self.skipWaiting())

// config
setCacheNameDetails({
  prefix: pkg.name,
})

// precache and routing
// @ts-expect-error skipping this check
precacheAndRoute(self.__WB_MANIFEST)

/** @format */

/// <reference lib="webworker" />
import {manifest, version} from '@parcel/service-worker'

async function install() {
  const cache = await caches.open(version)
  await cache.addAll(manifest)
}

async function activate() {
  const keys = await caches.keys()
  for (const key of keys) {
    if (key !== version) {
      await caches.delete(key)
    }
  }
}

self.addEventListener('install', (event: ExtendableEvent) => event.waitUntil(install()))

self.addEventListener('activate', (event: ExtendableEvent) => event.waitUntil(activate()))

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    (async function () {
      try {
        const response = await fetch(event.request)
        const cache = await caches.open(version)
        cache.put(event.request.url, response.clone())
        return response
      } catch (error) {
        return caches.match(event.request)
      }
    })(),
  )
})

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "607cc5de3476992eac28fece210ce142",
"assets/AssetManifest.bin.json": "8697d885ec92aae77364cb01dac6c79e",
"assets/AssetManifest.json": "e2a2fb2fcfcd83ed5091453ee0feedd7",
"assets/assets/animations/intro_animation.riv": "a61dfb298b1099ae5160671ef3cf7249",
"assets/assets/animations/moon.riv": "e68f4957f1fc8cf722983007eb066eed",
"assets/assets/fonts/Open_Sans,Tinos/Tinos/Tinos-Regular.ttf": "5d50b7efd868452d058b828cf13dd1ac",
"assets/assets/icons/css.png": "802dc115da0f14fc421a81b894fcf6a7",
"assets/assets/icons/dart.png": "a4696a099f212fbc7fa0948511d2ec03",
"assets/assets/icons/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/icons/figma.png": "d846ff034647e2e7813fea2d0a26d7bf",
"assets/assets/icons/firebase.png": "db8218d9bc49a02a7ba356e463509385",
"assets/assets/icons/flutter.png": "0ca1fbfcea7b579b91429cf252375d46",
"assets/assets/icons/git.png": "5dad01124c25d19c78aa763d94c6c3ee",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/icons/html.png": "cb761e91bb38d7193d5a9ea6cab87c6c",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/js.png": "2a019a491dbdd61a60071885ce46180f",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/Mapping-Form-2.JPG": "360d0d78756576cbfe29eb4fa50d32c3",
"assets/assets/icons/Mapping-Form.JPG": "3cc633240a196d69a80663b2fb9f195c",
"assets/assets/icons/php.png": "bb85db1691c504c5710249ad6fb648d1",
"assets/assets/icons/python.png": "c5e3c2f5e09713ea7bc42a4231401a16",
"assets/assets/icons/twitter.png": "1ac19cc180bd5411c8c31919998ab681",
"assets/assets/icons/website.png": "cdf95b427f17016536cb57f5b727ddde",
"assets/assets/icons/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/icons/youtube.png": "8f8bc2286e823d24d028e4c2b7ce754d",
"assets/assets/images/1.png": "f74becf2da233916249e9ab9072e8bb0",
"assets/assets/images/2.png": "44c439f4356c472b3cd6868c11122dee",
"assets/assets/images/3.png": "8c6942cf08bb4b9997c6da93c1eff499",
"assets/assets/images/4.png": "f5b7ea320083862248b8ab9c2d5e7d80",
"assets/assets/images/5.png": "1f3af849af0c02dcdbf384c46ffb5d81",
"assets/assets/images/6.png": "9e5df9c7f55a2b22d1fae49022c40b39",
"assets/assets/images/7.png": "3e68a0cda2789d8764ae8b874a6a401e",
"assets/assets/images/image1.png": "11c30efc0e0b3488b3eabfefb1bb1b86",
"assets/assets/images/image2.jpeg": "73516cfabad75b324b3b4eafa171dfb8",
"assets/assets/images/image3.jpeg": "c7e5ab1d038e5f2c02f69136039264e7",
"assets/assets/images/image4.jpeg": "ab2d30fca10be344365ac909665509ca",
"assets/assets/images/image5.jpeg": "a92182bf1e7a6519771fba1213396148",
"assets/assets/images/logo.png": "4d8d07ad1df06c5099a90b03affb8e6e",
"assets/assets/images/money%2520manager.png": "63889d0cbaa4db879adbef7e282c34da",
"assets/assets/images/myprofile.png": "f97e78bee74297c4f1ce08ce59b4ba1c",
"assets/assets/images/news%2520hub.png": "2ee199ca4e9a483aae089f755be14188",
"assets/FontManifest.json": "9eb36e89b5b4b1aab47deb9cdb8a4526",
"assets/fonts/MaterialIcons-Regular.otf": "8465bad63e82e20d00dab2428715db2d",
"assets/NOTICES": "65b7c5f1966de9fec695cf666d153cca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d325347f2c631118cdc499d5ecb93459",
"/": "d325347f2c631118cdc499d5ecb93459",
"main.dart.js": "33048b847dd268414bd1ee84a7e59b72",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

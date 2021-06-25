'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "24ca568af0d8db06b39f2cc0b35795fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4dc083955f3b07ae91fd0ddab1662f40",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a51979c68c88749a96af2e5cf84e7533",
".git/logs/refs/heads/master": "a51979c68c88749a96af2e5cf84e7533",
".git/logs/refs/remotes/origin/master": "0d13febaed63d41622aa4c83a21dac70",
".git/objects/03/d24e3b53f8b253d764695699d96aaa9de5b6cd": "7e99f6e6e79191355f3aea7b36cac988",
".git/objects/0b/fa5899698efef4affe874985857a5f7f8df721": "e5a2871f61531868b6ca03aefdc808e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/0073316bf5b6678726bc5180a1dce6dc36cd7f": "24520b4f671e285f3b3888bdbaa660e6",
".git/objects/28/3e18fc253d2f96eb9dd3848b8972ba55013638": "0f06d444e1da5f191ca1d50f74f04bed",
".git/objects/41/3c503f439e8a44e5c873c368921322d87a0491": "e7455656fd98726a017fca6a0e8931af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/8f7b96e9227972b54ee928c399d9ee16d31af9": "4382c1e00864252ebce708758a0f2a3c",
".git/objects/54/a5e71afe2a704a9772fc47fed41e4c5e84ae2c": "d5f1cb592b9dc58b60846ec3ac79265a",
".git/objects/63/0832e2160b2281020007df6f06f6868454bcee": "3cc4d59da4b9db33c7eec19fcc66a3bb",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6b/393ccac1859a3b5282f5fac0c112bb023755e1": "97068f53b2568a9147b1627ca575c8e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/468b1c48cb9e3f1a77ba2e55f53758c2c0f00d": "f42d58c49b1dd3b9c99d86cf0f7f52b0",
".git/objects/92/a1d90050e2ddf6b10b800cd965444f547d167a": "263117190281dcac8eefbd5ce2bc5dd7",
".git/objects/a0/e8f9eea57cbcaa537ceac633f7cfbe9d42e8dc": "4de3e2f90b50737c7e617e73e963272e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/909e15a57b3fdc1e626d867071b0ab1017d95a": "2f7f1009c3be58d452dae8d597437ece",
".git/objects/a3/8bcca70baea576cf1b4542dea45633b955daaf": "fb9cefef7c3d1bccf57be81de43c049b",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/7e814b93a9f7ff459b35e5f2e726465f70d00d": "5866ee3d189fdaf17d49cde8c40e36a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/912d7a1274d1ca15df8bd0ef8e46d36e09c917": "eea321ae32350c678a45eb22d10c1a11",
".git/objects/c0/f540112aa558df2c426c75d804a3ae4db4abe9": "8b0757ead1b14c12a4b5a995e2c4ca8d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/8fb920e958b806cf4d5e2d03f8660c6a62d979": "3d9f37cdbc1ab7a0be6778abaf743473",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/ec6d3e6de804c1040d8ffd649c1bc71f755627": "00c06d7908f43a99cce47b3014ad600a",
".git/refs/heads/master": "cbc6f5ad6748a8851e05662a6604f2f7",
".git/refs/remotes/origin/master": "cbc6f5ad6748a8851e05662a6604f2f7",
"assets/AssetManifest.json": "b20dfdf6889d0231e90cb6e7aac81764",
"assets/assets/images/avatar.jpg": "367be3b29f6a0ebaa30cf31e6e990ee8",
"assets/assets/images/avengerEndGame.jpg": "d43df16d0e4af4d29a9201867083eea6",
"assets/assets/images/batman.jpg": "e9041a2aa5c7d2e83c1ec6dddc7401cc",
"assets/assets/images/inception.jpg": "cb3c51fd3b9cbfa7abda1750f99d99dd",
"assets/assets/images/interstellar.jpg": "cc12651db2ed6626b29a55dbc250755f",
"assets/assets/images/split.jpg": "ae2f891dde183c7c64bab54115ff2f8e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d0db3f3de084f98df02cdb2ab8f103ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "08667d1fa9379c6d5b845a2560048bd0",
"/": "08667d1fa9379c6d5b845a2560048bd0",
"main.dart.js": "7e8986c34537f52587bde8883f08c0eb",
"manifest.json": "37d84112351297cf5ba6a8af645b9478",
"version.json": "a5530b2e8afca5abbc1b438a60e7184e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

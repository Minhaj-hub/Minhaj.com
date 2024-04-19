'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f58e68d20dbe096a24aeb7af47b593de",
".git/config": "288bb1f36a4674ce8d7b1f365d001a02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0c686f00b78cd68d8942b64fd831d6a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fc07e36b035788406e33e28640ed358",
".git/logs/refs/heads/main": "db96c69066afa58b24c620a5ac587a80",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/e2a3810df4f7321bd5514903029f321ed64ead": "fbc1849ab8f9881bd65410255c09318b",
".git/objects/09/53878f690943c3267667f0f40492ff1c2132af": "12c173fc7f3ae8fd9fd85273a7aab46a",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0c/aec3e6dfde804b331c9dbbe5558508540b112c": "9b1b53056796850d68ce5f175136788d",
".git/objects/0d/d7e1b62e63a25e020cf0a69ef499552a6fedd3": "03ff12d385d12466e011cb5489ae9f1a",
".git/objects/0e/1144402cd2194c6abd9ead0769c30d92165af3": "80bcdfed00f7d58810565dbe0aaf00bf",
".git/objects/15/9fdc754a692b0314f229ce54a88f6af0c2018b": "6724719657d45e60b42da29a3ffb70e5",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/ae422a1146ac83562cfc44b0a0bdc64ebbf3a0": "3bec3f5678269644206bbba737df8788",
".git/objects/1b/0e6b36ea418dfb432ecb120a2991dd076cb55d": "b885fe1a2f0a40cfaa56c81f155cdd11",
".git/objects/1d/09210d78d113ea88ff7829a651e888015d33d6": "ba290c1c3956b410fe22fa7f177eb4d0",
".git/objects/1d/418c9fd3e27e2e2052832d5dac46ec41332835": "a85028af05a34104cbe10ec4f766ad91",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/60848f476e973355bc54b23bd954d31230d624": "851bdb6c978c028d8a7ad31b3cc2e322",
".git/objects/26/ad8c96f14cdd73d78920100b0c6e46386bfa67": "7616d6cff285b193a31599bb46dedc13",
".git/objects/27/c89e93ade653d3aa43a36301d7aed476008eb9": "0ccfc5d53c9c899dc3e31d0e79bc06ea",
".git/objects/2b/09116f8227311c44f68665a6e1703e324c8126": "1e86c072093a1946aeeea945b6b74af3",
".git/objects/2c/7f99087d5b821ef0daf7194881e608e28860f7": "8add33c6025e310a31c56e3c21feebd1",
".git/objects/38/9bb27293bbbabb0ccf8f71d979800c63a9ed4c": "3350c0216dc6903dc30896c1812b6927",
".git/objects/3a/d8de5d81b930eb6398469852f213c24fbf7428": "4231736ed093b7955bac8822fddad98d",
".git/objects/3a/e1f83369ed2e4cb469569b45cf0b88430bcb3e": "6c5710b4ea4cad2334497d72769bfbb8",
".git/objects/3a/fea48869710c9d28161269db998ae1cbd3f24c": "4b17ab5f4d27e4f2595c85fb97122bfa",
".git/objects/40/53de34bf2992c3cffa0c75eaca1ba921a311b1": "ecb17a3e72513152e3b946412f585001",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/c59393f8b5b949c4b4e5dfe0af790b008235b8": "a99bb73715374a0b738b3c73579e839a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/85f6528dd91e9b3d11192cf190f9954e69bfef": "72f5edec46e3b288384052281b9a8e99",
".git/objects/54/ee4d96eb0f4d9150184af57089c146531e24d8": "70276d9ff8ec8974dc147d8111e2f927",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/b3716495c7e177b35467bbf54b25dda0fdcc7f": "024c10ae534756fc5ca87b4eb89355b5",
".git/objects/5e/f214e754171b7b0b79ae31ce21011bc036aa66": "c9aa9585f3a04b4260efab4c97b8edb2",
".git/objects/61/2f0eddcc1ef029e06c059b947319613544f574": "3fde73e27a97c9c86d7fad495088e327",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/61/8285eb808ce8a9a7c47989aa5ec368cc674ec6": "12873248d1bb71be823e6ebcefca0a07",
".git/objects/64/a9cdab5f04da1ece08d70d2a1e2a6a8dd1d87c": "c4844ab3db1d56bf82329c4e6c1bc45b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/6421bc5405f85b77ee9a30f394be678b5567a9": "4490c08d2fe871c08c1aea7b9c3d8720",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/8a07f6c5f8c9e0cfae204743d1756f2096c708": "1029350c706cf3a5c74b1f46993d2f35",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/78/f88bc0c6f32fbddade8ccd0ab5e47ce75bfa00": "10b07f9fce98717d5f03d63208136607",
".git/objects/7a/998d94c6f450168f07eb5cda867503413a6343": "714e5de0c361aaa68846e5e95d209b6f",
".git/objects/7b/3eea790df0edc3f739f663e86f0231c2a8d6ac": "51d415a91c1b600c2c34e45b0c70b682",
".git/objects/7c/fad0fce4fc077811d0451ff2a3b83c47a1ea5d": "37b53dbbb3ec1051b0a91143b49aa920",
".git/objects/80/43b9d7957089e8e123337501004bebbfe26761": "6e25f3ab6c82faabfedd3966014eb2ea",
".git/objects/87/e8d9db8faa2ff77b8f89852dd796801148f650": "5c74c95b480810e3354673039864f92b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ef6848b5fdd027aac7f61d3fa475faea254c47": "7ed5ff2f9db008a287d91a6aed1a72ca",
".git/objects/8f/cc68f69d2ae5f9db812ca36925e40aecdc90f8": "bfacc43e926e718878886573bfc63dc8",
".git/objects/91/4899b3cf5c8de427255f5807962f3984e9d300": "9664defe51450990ec0731b0e2864b1f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/2916101c4363272c8c8937167cc782987ab0c3": "8f7da425354502ee79315cf8770677f2",
".git/objects/9c/33e028d76e53ea958a05fb6152ea187da9bf60": "782eb84791a7dcb094dd51c05eefcdac",
".git/objects/a2/dfb3c877001fba3b7df94931bde53075e79049": "c8159c0ca72a37299a9e6fbf8c8d39c2",
".git/objects/a7/a35010e8c7b9fa6b5c462c581a2679dcb368f7": "b4d6d9ba0b6dd9c58367b6c7f63d072e",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/ab/b1a817f8b3fb51b149fce6b53ae1c7f1350464": "d41cf3a1e00e03b6349fd09dd700ad41",
".git/objects/ac/28a190652ddbfcff811ffe6b2446b71e2e47d4": "6201ced6cc0b79bee8ab57e7ce62da02",
".git/objects/af/5d5b1413aec3206fcceb1743c5f36a07d35ef8": "c0af975321ec26f9aa12760a444fbd35",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/a29547bb3e7b11c83779867f2f5736e1199ae0": "1531538a49f4f5c3f732f9fd6b5524d6",
".git/objects/b4/52223cd3792d7a3e9fd4c6556b5ada93f0247d": "a84f6165a463ff67d2bc3dea3dc9b296",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/95d32649171a0a80c627e29ace1f2e5f702b70": "b52f0ec13f9f3f9153adc2dad4a23fdd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/420627e8a68090f662e3c3a77171c6283ddde2": "179c6941551fe70ea38484da1efe68ad",
".git/objects/c0/b4ab466829319699b8d3eb7f84cf303e3b33a2": "39dd7fb529c79c8632147c8f9169cf8d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/a309b13c2543452c813ddd269ba4bc752bcb32": "83b7ae78f33146144773a7cafe815844",
".git/objects/c8/d48aa6db175bbe31b54785b323ee27ed5996eb": "2d7eaa7b63fbe3236f38513afae1f525",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ee8fab578d724084991d37ea79e4a7ba88b98e": "ab8a00b47c569c9dd88b8ab64349996b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/ab359ea7c7cea8049c117f0bcc47a5664959cf": "1eabc6cbe5cb2502e31fd26fd5ca3f85",
".git/objects/d8/b1a4b1e6cccc70c41695f4f65a11ce1a961ed4": "c080df204b4a386bb465f89994c81e1d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1333f8e48db63a0dc9d27db0f7a40522b8dbea": "3eaa04f399bf1d54bd37ec88f077c34e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3caa95daf5a4dff64186b9299169a7df535da8": "2d9954cd4fc8503f4cba2b8d8bd1ebb7",
".git/objects/f0/6f0780b04d1e6b03953ff39685db929795a17a": "7b9bd1ac786c2f9744b4525530a954fa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/6ac23a3a1afb38ccdd4272ba21aa0bbee54ce1": "99779a98658885c27539b8f1af5f05df",
".git/objects/f4/8df887dce3d993d3eb29563e6417d5096fa79d": "90bc0fd6864ed7d0c07ade1bbca1b2fb",
".git/objects/f4/af62045da99e471f9358b754e1b54a96e000c2": "a075828099fc2f4b17f9eaf83c5e1b9f",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/aa39b152696216a43e61eda401e1afe2d351fd": "da0055ea0c7b80f62978a99922c6feb6",
".git/refs/heads/main": "060d6c5f910555458eb71b1319c56efb",
"assets/AssetManifest.bin": "607cc5de3476992eac28fece210ce142",
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
"index.html": "635420ed4ed50198f8c6922c7211db54",
"/": "635420ed4ed50198f8c6922c7211db54",
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

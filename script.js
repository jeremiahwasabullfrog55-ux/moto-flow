const albums = [
  {
    artist: "Honda Touring Project",
    title: "Honda Goldwing",
    codename: "The Flatliner",
    assetFolder: "assets/1970 gl000 goldwing",
    mainPanel: { type: "image", src: "assets/1970 gl000 goldwing/mainpanel.jpg" },
    blueprint: { type: "image", src: "assets/1970 gl000 goldwing/blueprint.png" },
    detail: "A vintage Goldwing touring platform with big-road character, built around smooth presence and classic Honda heft.",
    year: "1979",
    mood: "Vintage Touring",
    report: {
      work: [
        "After priming the fuel pump, it started right up on old fuel. This bike is a tank.",
        "Cleaned the carburetors and got the fuel system back in shape.",
        "Tracked down the bizarre headlight/horn behavior where the headlight only wanted to wake up after the horn got involved.",
        "Sorted the turn signals, brake lights, fuses, and other small electrical headaches.",
        "Adapted and fitted a CB450 fender in place of the missing original fender, and it worked surprisingly well.",
        "Went through the brakes and general safety checks before trusting a 60,000-mile touring machine.",
        "Cleaned, polished, paint corrected, and detailed it until the old Honda presence came back.",
        "It is basically a car engine on a bike, and it does not mess around.",
      ],
      history: "This Goldwing represents the early era of Honda's long-distance touring machines: substantial, smooth, and built to carry miles with a relaxed confidence. The gallery presents it as a vintage platform with room for restoration notes and ride history.",
      specs: [["Engine", "Flat-four Goldwing platform"], ["Finish", "Vintage Honda touring style"], ["Use", "Restoration/touring project"]],
      features: [["Only one of its era", "Honda described the GL1000 as using the only four-stroke horizontally opposed four-cylinder motorcycle engine of its time."], ["Flagship before dresser", "It began as Honda's high-speed flagship, then riders turned it into the grand touring icon."], ["Under-seat fuel tank", "Moving fuel mass under the seat lowered the center of gravity and freed the top shelter for electrics."], ["Shaft-drive tourer", "The enclosed final drive matched the long-distance mission before the Gold Wing became fully dressed."], ["Flat-four blueprint", "The low, wide engine layout became the mechanical identity every later Wing evolved from."]],
    },
    media: [
      { type: "image", src: "assets/1970 gl000 goldwing/mainpanel.jpg" },
      { type: "image", src: "assets/1970 gl000 goldwing/DSC_0125.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/DSC_0144.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/DSC_0156.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/DSC_0165.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/DSC_0176.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/7.JPG" },
      { type: "image", src: "assets/1970 gl000 goldwing/9.JPG" },
      { type: "video", src: "assets/1970 gl000 goldwing/signal-2026-03-30-17-02-46-909~2.mp4" },
    ],
    placeholder: ["#27484d", "#76a68f", "#e0c66b", "radial-gradient(circle at 50% 50%, #f6f0c7 0 18%, transparent 19%)", "repeating-linear-gradient(90deg, rgba(255,255,255,.12) 0 2px, transparent 2px 14px)"],
  },
  {
    artist: "Honda Standard Build",
    title: "Honda CB900",
    codename: "Ten-Speed Undertaker",
    assetFolder: "assets/1980 cb900",
    mainPanel: { type: "image", src: "assets/1980 cb900/DSC_0042.JPG" },
    blueprint: { type: "image", src: "assets/1980 cb900/blueprint.png" },
    detail: "A muscular early-eighties Honda with a clean standard silhouette, inline-four attitude, and strong restoration/custom potential.",
    year: "1980",
    mood: "Classic Standard",
    report: {
      work: [
        "Cleaned and synchronized the four-carb setup.",
        "Fixed the previous owner's fully separated carb rack after the linkages were put back together wrong. Big pain, big payoff.",
        "Compression tested the engine and confirmed the foundation was worth the fight.",
        "Retrofitted modern front and rear brake master cylinders and worked through the hydraulic system.",
        "Designed and installed custom 3D printed airbox boots.",
        "Brought the lighting, horn, and turn signals back online.",
        "Serviced the front and rear air suspension.",
        "Restored the high/low range transmission functionality, one of the strange things that makes this bike great.",
        "Cleaned the bike up enough for the weird, excellent CB900 personality to show through.",
        "Ended up being one of those bikes that makes the annoying work feel worth it.",
      ],
      history: "The CB900 sits in that sweet spot where Honda's big-displacement standards still feel mechanical and honest. This bike reads as a solid candidate for either sympathetic restoration or a restrained custom build.",
      specs: [["Engine", "900cc-class Honda inline-four"], ["Finish", "Classic Honda street style"], ["Use", "Standard/restoration project"]],
      features: [["Dual-range 10 speed", "The CB900C's five-speed gearbox used a high/low sub-transmission, giving it ten usable ratios."], ["CB900F bones", "Honda blended sport-standard DOHC hardware with cruiser/touring manners for the American market."], ["Shaft-drive conversion", "Its final drive borrowed Gold Wing/CX thinking, making it stranger than the chain-drive CB900F family."], ["Air-assisted chassis", "Front and rear air support gave the heavy custom a period-correct touring adjustment trick."], ["Parts-bin cult bike", "Its mix of chrome custom style, sport engine, shaft drive, and extra gearbox made it uniquely Honda."]],
    },
    media: [
      { type: "image", src: "assets/1980 cb900/DSC_0042.JPG" },
      { type: "image", src: "assets/1980 cb900/DSC_0045.JPG" },
      { type: "image", src: "assets/1980 cb900/DSC_0050.JPG" },
      { type: "image", src: "assets/1980 cb900/DSC_0052.JPG" },
      { type: "image", src: "assets/1980 cb900/DSC_0063.JPG" },
      { type: "image", src: "assets/1980 cb900/DSC_0064.JPG" },
    ],
    placeholder: ["#111624", "#27466f", "#a33c50", "radial-gradient(circle at 68% 30%, #dfe7ff 0 7%, transparent 8%)", "repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 18px)"],
  },
  {
    artist: "Kawasaki Cruiser Project",
    title: "Kawasaki LTD 750",
    codename: "Chrome Chupacabra",
    assetFolder: "assets/1981 kawasaki ltd 750",
    mainPanel: { type: "image", src: "assets/1981 kawasaki ltd 750/mainpanel.jpg" },
    blueprint: { type: "image", src: "assets/1981 kawasaki ltd 750/blueprint.png" },
    detail: "A period Kawasaki cruiser with relaxed proportions, chrome-era attitude, and a strong eighties street presence.",
    year: "1981",
    mood: "Cruiser",
    report: {
      work: [
        "Started right up when it arrived, which immediately made it one of the easier bikes to like.",
        "Cleaned the carburetors anyway because it was running, but not quite as cleanly as it should.",
        "Worked through the brake hydraulics and the usual old-line restrictions.",
        "Handled the general tuning and maintenance without much drama.",
        "Brought back the chrome-era cruiser shine because this bike already had the look.",
      ],
      history: "The LTD line gave Kawasaki a softer cruiser personality while keeping plenty of classic Japanese engineering underneath. This bike's gallery is set up to show both its patina and its project direction.",
      specs: [["Engine", "750cc-class Kawasaki platform"], ["Finish", "Eighties cruiser trim"], ["Use", "Cruiser restoration/custom"]],
      features: [["LTD lineage", "Kawasaki's LTD idea helped define the Japanese factory-custom cruiser look before every brand chased it."], ["Middleweight cruiser", "The 750 brought LTD styling into a more manageable size than the original big-bore KZ900 LTD formula."], ["Z-era attitude", "It carried Kawasaki's standard-bike bones under a lower, chrome-heavy cruiser personality."], ["Simple service layout", "Air cooling, visible hardware, and conventional suspension keep the mechanical story easy to document."], ["Style as engineering", "Pullback bars, stepped seating, mag-style wheels, and trim are the point: factory custom, not pure standard."]],
    },
    media: [
      { type: "image", src: "assets/1981 kawasaki ltd 750/mainpanel.jpg" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/DSC_0005.JPG" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/DSC_0006.JPG" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/DSC_0019.JPG" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/DSC_0027.JPG" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/32232.jpg" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/Screenshot_20260203-092153.png" },
      { type: "image", src: "assets/1981 kawasaki ltd 750/signal-2026-03-01-15-37-43-911-2.jpg" },
      { type: "video", src: "assets/1981 kawasaki ltd 750/signal-2026-03-01-15-37-43-911.mp4" },
    ],
    placeholder: ["#203a32", "#79a25a", "#ece3af", "repeating-radial-gradient(circle at 25% 34%, #dcefc0 0 7px, transparent 8px 28px)", "linear-gradient(45deg, rgba(255,255,255,.42), transparent 18%)"],
  },
  {
    artist: "Yamaha Triple Project",
    title: "Yamaha XS850",
    codename: "Triple Trouble",
    assetFolder: "assets/1981 yamaha xs850",
    mainPanel: { type: "image", src: "assets/1981 yamaha xs850/mainpanel.jpg" },
    blueprint: { type: "image", src: "assets/1981 yamaha xs850/blueprint.png" },
    detail: "A shaft-drive Yamaha triple with sturdy vintage proportions, touring capability, and a distinctive mechanical personality.",
    year: "1981",
    mood: "Triple",
    report: {
      work: [
        "Cleaned and tuned the triple-carb setup.",
        "Chased down a clogged brake line and refreshed the related components.",
        "Tracked down and installed the correct airbox assembly.",
        "Inspected the electrical system, which was mostly intact compared with some of the others.",
        "Cleaned and detailed the bike without burying its Midnight Special character.",
        "Kept the triple-cylinder character front and center: this one has its own rhythm.",
      ],
      history: "The XS850 is one of Yamaha's characterful triples, known for a different feel than the common inline-fours of its era. This one presents as a practical vintage platform with plenty of personality.",
      specs: [["Engine", "850cc Yamaha triple"], ["Drive", "Shaft-drive layout"], ["Use", "Vintage standard/touring project"]],
      features: [["Yamaha triple identity", "The XS850 grew from Yamaha's XS750 triple line, giving it a sound and feel apart from the inline-four crowd."], ["Shaft-drive standard", "Its enclosed final drive pushed it toward practical sport-touring rather than chain-drive superbike duty."], ["Hitachi carb setup", "Three carburetors make tuning simpler than a four, while keeping the engine's odd-cylinder character."], ["Triple-disc hardware", "Dual front discs and a rear disc gave the XS850 serious braking hardware for a roadgoing standard."], ["Bigger than XS750", "The 850 update added displacement and touring polish while keeping the narrow triple architecture."]],
    },
    media: [
      { type: "image", src: "assets/1981 yamaha xs850/IMG_20260301_154038455.jpg" },
      { type: "image", src: "assets/1981 yamaha xs850/Screenshot_20260116-224241.png" },
      { type: "video", src: "assets/1981 yamaha xs850/signal-2026-03-01-15-37-43-911-1~2.mp4" },
      { type: "video", src: "assets/1981 yamaha xs850/Video.mov" },
      { type: "video", src: "assets/1981 yamaha xs850/Video_1.mov" },
    ],
    placeholder: ["#f0c064", "#aa4c52", "#263746", "radial-gradient(circle at 50% 28%, #fff4bd 0 18%, transparent 19%)", "repeating-linear-gradient(0deg, transparent 0 17px, rgba(255,255,255,.16) 18px 19px)"],
  },
  {
    artist: "Honda V4 Project",
    title: "Honda Magna",
    codename: "V4 Valkyrie",
    assetFolder: "assets/1983 magna",
    mainPanel: { type: "image", src: "assets/1983 magna/789773988.jpg" },
    detail: "A V4 muscle-cruiser with low-slung styling, strong eighties energy, and a more aggressive personality than a typical cruiser.",
    year: "1983",
    mood: "V4 Cruiser",
    report: {
      work: [
        "Removed and serviced the V4 carburetors, which was every bit as annoying as a V4 carb job sounds.",
        "Bled and re-bled the hydraulic clutch until it finally behaved.",
        "Drained fluids, checked the brakes, and worked through the basics after the carb fight.",
        "Handled the electrical cleanup that came with getting the bike sorted.",
        "Brought the cosmetics back around after the mechanical work stopped fighting back.",
        "This one took serious time, but the Magna has enough attitude to make the fight memorable.",
      ],
      history: "The Magna brought Honda's V4 performance into cruiser clothing, making it a standout from the early eighties. This gallery treats it as a muscle-cruiser project with both presence and mechanical intrigue.",
      specs: [["Engine", "Honda V4 platform"], ["Finish", "Eighties muscle-cruiser style"], ["Use", "Performance cruiser project"]],
      features: [["V4 cruiser shock", "The Magna put Honda's new V4 performance idea into cruiser clothes before that mix felt normal."], ["Interceptor bloodline", "The same V4 family fed Honda's early sport-bike push, so the Magna hides serious engine ambition."], ["Shaft-drive muscle", "It paired cruiser-friendly final drive packaging with a motor that did not behave like a lazy twin."], ["Four-carb V layout", "The induction system is part of the show: compact, complex, and very eighties Honda."], ["Muscle before retro", "Its low stance and V4 power made it a performance cruiser rather than a nostalgic cruiser."]],
    },
    media: [
      { type: "image", src: "assets/1983 magna/789773988.jpg" },
      { type: "image", src: "assets/1983 magna/797973129.jpg" },
      { type: "image", src: "assets/1983 magna/IMG_0973.jpg" },
      { type: "video", src: "assets/1983 magna/screen-20260507-222647~2.mp4" },
    ],
    placeholder: ["#102939", "#23758a", "#9ad0bb", "radial-gradient(circle at 35% 28%, #eff6ff 0 7%, transparent 8%)", "repeating-linear-gradient(150deg, rgba(255,255,255,.16) 0 8px, transparent 8px 22px)"],
  },
  {
    artist: "Honda Touring Project",
    title: "Honda Goldwing 1500",
    codename: "Highway Leviathan",
    assetFolder: "assets/1989 goldwing 1500",
    mainPanel: { type: "image", src: "assets/1989 goldwing 1500/mainpanel.jpg" },
    blueprint: { type: "image", src: "assets/1989 goldwing 1500/blueprint.png" },
    detail: "A later-generation Goldwing touring machine, meant for comfort, long distance, and big-road presence once media is added.",
    year: "1989",
    mood: "Touring",
    report: {
      work: [
        "Replaced the water pump and brought the cooling system back into line.",
        "Checked the brakes, electrical, and fuel systems as part of the big-tourer shakedown.",
        "Handled general restoration work without overcomplicating the bike.",
        "Cleaned and polished the GL1500 back toward its proper road-trip presence.",
      ],
      history: "The Goldwing 1500 generation pushed Honda's touring platform deeper into full-dress comfort. Once photos are added, this report can track condition, maintenance, accessories, and ride history.",
      specs: [["Engine", "1500cc-class Goldwing platform"], ["Finish", "Touring trim"], ["Use", "Long-distance touring project"]],
      features: [["Flat-six milestone", "The GL1500 moved the Gold Wing from flat-four to a newly developed, quiet, powerful opposed six."], ["Luxury tourer era", "Honda aimed this generation at the top of full-dress touring, not just big-engine road speed."], ["American-built Wing", "This generation came from Honda's U.S. production base and was imported back into Japan."], ["Integrated bodywork", "The fairing and luggage became part of the machine's architecture, not bolt-on touring accessories."], ["Reverse-ready scale", "Its size pushed Honda toward low-speed convenience features and passenger-first long-distance comfort."]],
    },
    media: [
      { type: "image", src: "assets/1989 goldwing 1500/signal-2026-04-18-21-12-58-270-2.jpg" },
      { type: "video", src: "assets/1989 goldwing 1500/Snapchat-1468544630.mp4" },
      { type: "video", src: "assets/1989 goldwing 1500/VID_20260418_200711869~2.mp4" },
    ],
    placeholder: ["#2a3440", "#bc614f", "#f2c86b", "linear-gradient(90deg, transparent 0 22%, rgba(255,255,255,.68) 23% 30%, transparent 31%)", "linear-gradient(180deg, transparent, rgba(0,0,0,.28))"],
  },
  {
    artist: "Small Displacement Project",
    title: "Roketa JL250P",
    codename: "Mini Mothman",
    assetFolder: "assets/2010 roketa jl250p",
    mainPanel: { type: "image", src: "assets/2010 roketa jl250p/mainpanel.jpeg" },
    blueprint: { type: "image", src: "assets/2010 roketa jl250p/blueprint.png" },
    detail: "A lightweight 250-class project bike with practical small-displacement appeal, ready for photos and build documentation.",
    year: "2010",
    mood: "Lightweight",
    report: {
      work: [
        "Went through the carburetor system and got the small bike breathing properly.",
        "Worked through the brakes and basic roadworthiness checks.",
        "Handled electrical cleanup where needed.",
        "Cleaned up the cosmetics and sorted the rough edges.",
        "A smaller machine than the others, but it still got a full sorting instead of being treated like an afterthought.",
      ],
      history: "The Roketa JL250P gives the gallery a smaller, more utilitarian project alongside the vintage Japanese bikes. Add photos or video and this report can track what it needed and how it came together.",
      specs: [["Engine", "250cc-class single/twin platform"], ["Finish", "To be documented"], ["Use", "Lightweight project bike"]],
      features: [["Small-bike contrast", "The JL250P is interesting here because it sits against heavy vintage tourers and cruisers, not beside similar bikes."], ["Approachable platform", "Its 250-class hardware makes the project about usability, sorting, and reliability instead of era-defining horsepower."], ["Simple systems story", "The mechanical appeal is the repair path: straightforward drivetrain, easy access, and visible service wins."], ["Modern budget build", "Unlike the vintage Japanese bikes, its history is less factory legend and more owner-documented improvement."], ["Lightweight reference", "It gives the gallery a useful baseline for weight, packaging, and everyday practicality."]],
    },
    media: [
      { type: "image", src: "assets/2010 roketa jl250p/mainpanel.jpeg" },
      { type: "image", src: "assets/2010 roketa jl250p/oldmain.jpeg" },
      { type: "video", src: "assets/2010 roketa jl250p/Snapchat-1107529940.mp4" },
    ],
    placeholder: ["#1c5060", "#82bcb2", "#eef4dc", "radial-gradient(circle at 72% 28%, rgba(255,255,255,.8) 0 8%, transparent 9%)", "linear-gradient(180deg, rgba(255,255,255,.18), transparent)"],
  },
];

const carousel = document.querySelector("#carousel");
const scrubber = document.querySelector(".scrubber");
const mediaScrubber = document.querySelector("#mediaScrubber");
const mobileMediaScrubber = document.querySelector("#mobileMediaScrubber");
let cards = [];
let dots = [];
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const meta = document.querySelector("#albumMeta");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menuToggle");
const musicToggle = document.querySelector("#musicToggle");
const homeMusic = document.querySelector("#homeMusic");
const homeContact = document.querySelector("#homeContact");
const homePage = document.querySelector(".home-page");
const bikeTitle = document.querySelector(".bike-title");
const enterMuseum = document.querySelector("#enterMuseum");
const expandedClose = document.querySelector("#expandedClose");
const siteNav = document.querySelector("#siteNav");
const contactLink = document.querySelector("#contactLink");
const contactPanel = document.querySelector("#contactPanel");
const closeContactPanel = contactPanel.querySelector(".close-panel");
const reportButton = document.querySelector("#reportButton");
const reportPanel = document.querySelector("#reportPanel");
const closeReportPanel = reportPanel.querySelector(".close-panel");
const interestButton = document.querySelector("#interestButton");
const interestPanel = document.querySelector("#interestPanel");
const closeInterestPanel = interestPanel.querySelector(".close-panel");
const galleryPage = document.querySelector(".gallery-page");
const desktopCopy = document.querySelector("#desktopCopy");
const codenamePanel = document.querySelector("#codenamePanel");
const desktopFeature = document.querySelector(".feature-picture");
const desktopPictures = document.querySelector("#desktopPictures");
const mobileDrawer = document.querySelector("#mobileDrawer");
const mobilePictures = document.querySelector("#mobilePictures");

let activeIndex = 0;
let activePhotoIndexes = albums.map(() => 0);
let isExpanded = false;
let pointerStartX = 0;
let pointerStartY = 0;
let flipIndex = 0;
let settleTimer;
let wheelTimer;
let mediaMotionTimer;
let audioContext;
let musicGain;
let musicDelay;
let musicFeedback;
let noiseSource;
let noiseGain;
let musicTimer;
let musicStep = 0;
let expandedMusicTimer;
let expandedMusicStep = 0;
let isMusicPlaying = false;
let isUsingCustomTrack = false;
let reportCloseTimer;
let codenameClickCount = 0;
let codenameClickTimer;
let codenameAnimationTimer;
const doorDurationMs = 1450;
const doorSoundOffsetSeconds = 2;
const doorSoundTailMs = 140;
const whooshSoundOffsetSeconds = 0;
const beatDurationMs = 60000 / 72;
let backgroundTrackName = "main";
let activeBackgroundTrack = null;
const backgroundFadeTimers = new Map();
let backgroundSwitchTimer;
let beatTransitionTimer;
let secretDiscoTimer;
let bikeTitleSoundTimer;
let bikeTitleTapTimer;
let isSfxUnlocked = false;
let activeDoorSfx = null;
let doorSoundTimer = null;

const audioLibrary = {
  background: {
    main: new Audio("music/main.wav"),
    expanded: new Audio("music/expanded.wav"),
    report: new Audio("music/report.wav"),
    secret: new Audio("music/secretname.mp3"),
  },
  sfx: {
    whoosh: new Audio("music/whoosh.mp3"),
    slap: new Audio("music/slap.mp3"),
    boom: new Audio("music/boom.mp3"),
    garage: new Audio("music/garage door.mp3"),
    open: new Audio("music/open.ogg"),
    close: new Audio("music/close.ogg"),
    toggleMusic: new Audio("music/togglemusic.ogg"),
  },
};

const flipClasses = ["flip-left-right", "flip-right-left", "flip-up-down", "flip-down-up"];
const verticalFlipClasses = ["flip-up-down", "flip-down-up"];
const flipDuration = 680;
const flipMidpoint = flipDuration / 2;
const expandSettleDelay = 980;
const collapseDuration = 980;
const carouselMediaWindow = 2;
const reflectionMediaWindow = 1;
const expandedMediaWindow = 3;
const imageExtensions = ["jpg", "jpeg", "png", "webp"];
const videoExtensions = ["mp4", "mov", "m4v", "webm"];
const ambientProgression = [
  [174.61, 220.0, 261.63, 329.63],
  [146.83, 196.0, 246.94, 293.66],
  [164.81, 207.65, 246.94, 311.13],
  [130.81, 174.61, 220.0, 261.63],
];

Object.values(audioLibrary.background).forEach((track) => {
  track.loop = true;
  track.preload = "auto";
  track.volume = 0.62;
});

audioLibrary.background.main.volume = 0.2;

Object.values(audioLibrary.sfx).forEach((track) => {
  track.preload = "auto";
  track.volume = 0.82;
});

audioLibrary.sfx.boom.volume = 0.95;
audioLibrary.sfx.garage.volume = 0.72;
audioLibrary.sfx.whoosh.volume = 1;
audioLibrary.sfx.open.volume = 0.78;
audioLibrary.sfx.close.volume = 0.78;
audioLibrary.sfx.toggleMusic.volume = 0.74;

const backgroundBaseVolumes = new Map(Object.entries({
  main: 0.2,
  expanded: 0.62,
  report: 0.62,
  secret: 0.62,
}).map(([name, volume]) => [audioLibrary.background[name], volume]));

const expandedProgression = [
  [220.0, 329.63, 440.0, 659.25],
  [246.94, 369.99, 493.88, 739.99],
  [196.0, 293.66, 392.0, 587.33],
  [207.65, 311.13, 415.3, 622.25],
];

const codenameWarnings = [
  "please don't click",
  "ok for real this time",
  "oh now you've done it",
];

const codenameStyles = [
  { font: "'Chiller', 'Creepster', 'Papyrus', fantasy", color: "#d8dde8", glow: "rgba(216, 221, 232, 0.72)", angle: "-8deg", stretch: "1.18" },
  { font: "'Showcard Gothic', 'Cooper Black', 'Arial Black', fantasy", color: "#7cffb2", glow: "rgba(124, 255, 178, 0.68)", angle: "5deg", stretch: "1.08" },
  { font: "'Jokerman', 'Curlz MT', 'Cooper Black', fantasy", color: "#ffcf5a", glow: "rgba(255, 207, 90, 0.72)", angle: "-11deg", stretch: "1.2" },
  { font: "'Ravie', 'Wide Latin', 'Arial Black', fantasy", color: "#ff5f7a", glow: "rgba(255, 95, 122, 0.72)", angle: "8deg", stretch: "0.96" },
  { font: "'Old English Text MT', 'Blackadder ITC', 'Georgia', serif", color: "#9fc7ff", glow: "rgba(159, 199, 255, 0.72)", angle: "-5deg", stretch: "1.12" },
  { font: "'Algerian', 'Copperplate Gothic Bold', 'Impact', fantasy", color: "#5fe7ff", glow: "rgba(95, 231, 255, 0.7)", angle: "7deg", stretch: "1.14" },
  { font: "'Freestyle Script', 'Brush Script MT', 'Comic Sans MS', cursive", color: "#d684ff", glow: "rgba(214, 132, 255, 0.76)", angle: "-12deg", stretch: "1.26" },
];

function buildGalleryShell() {
  carousel.replaceChildren(...albums.map((album, index) => {
    const card = document.createElement("article");
    const cover = document.createElement("div");
    const caption = document.createElement("div");
    const title = document.createElement("strong");
    const year = document.createElement("span");
    const reflection = document.createElement("div");

    card.className = `album-card${index === activeIndex ? " active" : ""}`;
    card.dataset.index = String(index);
    cover.className = "cover";
    cover.addEventListener("click", (event) => {
      event.stopPropagation();
      if (index === activeIndex) {
        if (isExpanded) {
          if (window.matchMedia("(max-width: 980px)").matches) return;
          cycleActivePhoto();
          return;
        }

        setExpanded(true);
        return;
      }

      showAlbum(index);
    });
    caption.className = "card-caption";
    title.textContent = album.title;
    year.textContent = album.year;
    reflection.className = "reflection";
    caption.append(title, year);
    card.append(cover, reflection, caption);
    return card;
  }));

  scrubber.replaceChildren(...albums.map((album, index) => {
    const dot = document.createElement("button");

    dot.className = `scrub-dot${index === activeIndex ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", album.title);
    return dot;
  }));

  cards = Array.from(document.querySelectorAll(".album-card"));
  dots = Array.from(document.querySelectorAll(".scrub-dot"));
}

function wrappedDistance(index, active) {
  const total = albums.length;
  let distance = index - active;

  if (distance > total / 2) distance -= total;
  if (distance < -total / 2) distance += total;

  return distance;
}

function renderCarousel() {
  const viewport = window.innerWidth;
  const spacing = isExpanded ? Math.max(118, Math.min(230, viewport * 0.16)) : Math.max(82, Math.min(188, viewport * 0.145));

  cards.forEach((card, index) => {
    const distance = wrappedDistance(index, activeIndex);
    const abs = Math.abs(distance);
    const direction = Math.sign(distance);
    const x = distance * spacing;
    const y = !isExpanded && abs > 0 ? Math.min(34, 10 + abs * 7) : 0;
    const z = isExpanded && abs === 0 ? 110 : isExpanded ? -260 - abs * 54 : abs === 0 ? 90 : -120 - abs * 90;
    const rotation = abs === 0 ? 0 : direction * (isExpanded ? -46 : -54);
    const opacity = isExpanded && abs > 2 ? 0 : isExpanded && abs > 0 ? 0.3 : abs === 3 ? 0.22 : abs === 2 ? 0.46 : abs === 1 ? 0.78 : 1;
    const scale = isExpanded && abs === 0 ? 1 : isExpanded ? 0.46 : abs === 0 ? 1.16 : abs === 1 ? 0.84 : abs === 2 ? 0.7 : 0.58;
    const cover = card.querySelector(".cover");
    const caption = card.querySelector(".card-caption");
    const reflection = card.querySelector(".reflection");
    const album = albums[index];
    const mediaItems = getMediaItems(album);
    const mediaIndex = activePhotoIndexes[index] % mediaItems.length;

    card.classList.toggle("active", index === activeIndex);
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}%`);
    card.style.setProperty("--z", `${z}px`);
    card.style.setProperty("--rot", `${rotation}deg`);
    card.style.setProperty("--scale", scale);
    card.style.setProperty("--opacity", opacity);
    card.style.zIndex = String(10 - abs);

    caption.querySelector("strong").textContent = album.title;
    caption.querySelector("span").textContent = album.year;
    activePhotoIndexes[index] = mediaIndex;
    const shouldLoadCardMedia = index === activeIndex || (!isExpanded && abs <= carouselMediaWindow) || (isExpanded && abs <= 1);
    const shouldLoadReflection = shouldLoadCardMedia && !isExpanded && abs <= reflectionMediaWindow;

    if (isExpanded && index === activeIndex) {
      renderCoverMediaCarousel(cover, album, index);
    } else {
      cover.dataset.mediaCarouselAlbum = "";
      cover.dataset.mediaCarouselCount = "";
      cover.classList.remove("has-media-carousel", "has-video");
      applyDeferredVisual(cover, mediaItems[mediaIndex], album.placeholder, shouldLoadCardMedia);
    }
    if (shouldLoadReflection) {
      renderReflection(reflection, mediaItems[mediaIndex], album.placeholder);
    } else {
      applyDeferredVisual(reflection, mediaItems[mediaIndex], album.placeholder, false);
    }
    cover.classList.add("is-selected-photo");
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });

  const album = albums[activeIndex];
  meta.querySelector(".artist").textContent = album.artist;
  meta.querySelector("h1").textContent = album.title;
  meta.querySelector(".detail").textContent = album.year;
  renderAlbumPanels(album);
  galleryPage.classList.toggle("is-expanded", isExpanded);
  syncVideoPlayback();
}

function showAlbum(index) {
  if (isExpanded) return;
  playSfx(audioLibrary.sfx.whoosh, { offset: whooshSoundOffsetSeconds, playbackRate: 2 });
  activeIndex = (index + albums.length) % albums.length;
  galleryPage.classList.add("is-changing");
  renderCarousel();
  window.setTimeout(() => galleryPage.classList.remove("is-changing"), 280);
}

function applyPictureStyle(element, photo) {
  element.style.setProperty("--tone-a", photo[0]);
  element.style.setProperty("--tone-b", photo[1]);
  element.style.setProperty("--tone-c", photo[2]);
  element.style.setProperty("--mark", photo[3]);
  element.style.setProperty("--pattern", photo[4]);
}

function getNamedAsset(album, fileName, fallbackItem) {
  if (!album.assetFolder) return fallbackItem;

  const candidates = imageExtensions.map((extension) => ({
    isBlueprint: fileName === "blueprint",
    type: "image",
    src: `${album.assetFolder}/${fileName}.${extension}`,
  }));

  return {
    ...candidates[0],
    fallbacks: [...candidates.slice(1), fallbackItem],
  };
}

function getMediaItems(album) {
  const media = album.media.length ? album.media : [{ type: "placeholder", style: album.placeholder }];
  const mainPanel = album.mainPanel || getNamedAsset(album, "mainpanel", media[0]);

  if (!mainPanel) return media;
  return [mainPanel, ...media.filter((item) => item.src !== mainPanel.src)];
}

function shouldPlayVisual(element) {
  if (element.classList.contains("cover-slide")) {
    return element.classList.contains("active") && element.closest(".album-card.active");
  }

  return element.classList.contains("cover") && element.closest(".album-card.active");
}

function syncVideoPlayback() {
  document.querySelectorAll(".cover video, .cover-slide video, .feature-picture video, .mini-picture video, .blueprint-visual video").forEach((video) => {
    const holder = video.closest(".cover-slide, .cover, .feature-picture, .mini-picture, .blueprint-visual");
    const isMainVisual = holder && shouldPlayVisual(holder);

    video.controls = Boolean(isMainVisual);
    video.loop = true;
    video.playsInline = true;

    if (isMainVisual) return;

    video.pause();
    video.currentTime = 0;
  });
}

function renderCoverMediaCarousel(cover, album, albumIndex) {
  const items = getMediaItems(album);
  const activePhotoIndex = activePhotoIndexes[albumIndex] % items.length;
  const shouldRebuild = cover.dataset.mediaCarouselAlbum !== String(albumIndex) || cover.dataset.mediaCarouselCount !== String(items.length);

  cover.dataset.visualKey = "";
  cover.classList.add("has-media", "has-media-carousel");
  cover.classList.toggle("has-video", items[activePhotoIndex]?.type === "video");
  applyPictureStyle(cover, items[activePhotoIndex]?.style || album.placeholder);
  cover.style.setProperty("--media-count", items.length);

  if (shouldRebuild) {
    const track = document.createElement("div");

    track.className = "cover-media-track";
    cover.dataset.mediaCarouselAlbum = String(albumIndex);
    cover.dataset.mediaCarouselCount = String(items.length);
    cover.replaceChildren(track);
    items.forEach((item, index) => {
      const slide = document.createElement("div");

      slide.className = "cover-slide";
      slide.setAttribute("role", "button");
      slide.setAttribute("aria-label", `Select picture ${index + 1} for ${album.title}`);
      slide.addEventListener("click", (event) => {
        event.stopPropagation();
        if (window.matchMedia("(max-width: 980px)").matches) return;
        const slot = Number(slide.dataset.slot) || 0;

        if (slot === 0) {
          updateActivePhoto(activePhotoIndexes[activeIndex] + 1, true, 1);
          return;
        }

        updateActivePhoto(index, true, slot);
      });
      track.append(slide);
    });
  }

  updateIntegratedMediaState(cover, album, items, activePhotoIndex);
  renderMediaScrubber(album, activePhotoIndex, items.length);
}

function renderMediaScrubber(album, activePhotoIndex, total) {
  renderMediaScrubberInto(mediaScrubber, album, activePhotoIndex, total);
  renderMediaScrubberInto(mobileMediaScrubber, album, activePhotoIndex, total);
}

function renderMediaScrubberInto(container, album, activePhotoIndex, total) {
  if (!container) return;

  const shouldRebuild = container.dataset.albumIndex !== String(activeIndex) || container.children.length !== total;

  container.dataset.albumIndex = String(activeIndex);
  if (shouldRebuild) {
    container.replaceChildren(...Array.from({ length: total }, (_, index) => {
      const button = document.createElement("button");

      button.className = "media-scrub-dot";
      button.type = "button";
      button.setAttribute("aria-label", `Show picture ${index + 1} for ${album.title}`);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        updateActivePhoto(index, true, index - activePhotoIndexes[activeIndex]);
      });
      return button;
    }));
  }

  Array.from(container.children).forEach((button, index) => {
    button.classList.toggle("active", index === activePhotoIndex);
    button.setAttribute("aria-selected", String(index === activePhotoIndex));
  });
}

function updateIntegratedMediaState(cover, album, items, activePhotoIndex) {
  const total = items.length;
  const previousPhotoIndex = Number(cover.dataset.previousPhotoIndex);
  const hasPreviousPhoto = Number.isFinite(previousPhotoIndex) && previousPhotoIndex !== activePhotoIndex;

  Array.from(cover.querySelectorAll(".cover-slide")).forEach((element, index) => {
    const slot = getPictureSlot(index, activePhotoIndex, total);
    const shouldLoad = Math.abs(slot) <= expandedMediaWindow || index === previousPhotoIndex;

    element.style.setProperty("--slot", slot);
    element.style.setProperty("--depth", Math.max(0, 3 - Math.abs(slot)));
    element.dataset.slot = String(slot);
    element.classList.toggle("active", index === activePhotoIndex);
    element.classList.toggle("leaving", hasPreviousPhoto && index === previousPhotoIndex);
    element.setAttribute("aria-hidden", String(index !== activePhotoIndex && Math.abs(slot) > 3));
    applyDeferredVisual(element, items[index], album.placeholder, shouldLoad);
  });

  cover.dataset.activePhotoIndex = String(activePhotoIndex);
}

function applyDeferredVisual(element, item, fallbackStyle, shouldLoad) {
  if (shouldLoad) {
    applyVisual(element, item, fallbackStyle);
    return;
  }

  const visualKey = `deferred:${item.type}:${item.src || (item.style || fallbackStyle).join("|")}`;

  element.classList.toggle("has-media", item.type !== "placeholder");
  element.classList.toggle("has-video", false);
  applyPictureStyle(element, item.style || fallbackStyle);

  if (element.dataset.visualKey === visualKey) return;

  element.replaceChildren();
  element.dataset.visualKey = visualKey;
}

function getOptimizedMediaItem(item) {
  if (!item.src || item.useOriginal) return item;

  const normalizedSrc = item.src.replace(/\\/g, "/");

  if (!normalizedSrc.startsWith("assets/")) return item;

  const extension = normalizedSrc.split(".").pop()?.toLowerCase();
  const isOptimizableImage = item.type === "image" && imageExtensions.includes(extension);
  const isOptimizableVideo = item.type === "video" && videoExtensions.includes(extension);

  if (!isOptimizableImage && !isOptimizableVideo) return item;

  const optimizedSrc = `assets/optimized/${normalizedSrc.slice("assets/".length).replace(/\.[^/.]+$/, isOptimizableImage ? ".webp" : ".mp4")}`;

  return {
    ...item,
    src: optimizedSrc,
    fallbacks: [
      { ...item, useOriginal: true, fallbacks: [] },
      ...(item.fallbacks || []),
    ],
  };
}

function applyVisual(element, item, fallbackStyle) {
  const mediaItem = getOptimizedMediaItem(item);
  const fallbacks = [...(mediaItem.fallbacks || [])];
  const visualKey = `${mediaItem.type}:${mediaItem.src || (mediaItem.style || fallbackStyle).join("|")}`;

  element.classList.toggle("has-media", mediaItem.type !== "placeholder");
  element.classList.toggle("has-video", mediaItem.type === "video");
  applyPictureStyle(element, mediaItem.style || fallbackStyle);

  if (element.dataset.visualKey === visualKey) {
    return;
  }

  element.replaceChildren();
  element.dataset.visualKey = visualKey;

  if (mediaItem.type === "image") {
    const image = document.createElement("img");

    image.src = encodeURI(mediaItem.src);
    image.alt = "";
    image.loading = "lazy";
    image.addEventListener("error", () => {
      const fallback = fallbacks.shift();

      if (fallback) {
        applyVisual(element, { ...fallback, fallbacks }, fallbackStyle);
        return;
      }

      applyVisual(element, { type: "placeholder", style: fallbackStyle }, fallbackStyle);
    }, { once: true });
    element.append(image);
  }

  if (mediaItem.type === "video") {
    const video = document.createElement("video");
    const shouldPlay = shouldPlayVisual(element);

    video.src = encodeURI(mediaItem.src);
    video.muted = false;
    video.loop = true;
    video.playsInline = true;
    video.controls = shouldPlay;
    video.autoplay = false;
    video.preload = "metadata";
    video.addEventListener("click", (event) => event.stopPropagation());
    video.addEventListener("pointerdown", (event) => event.stopPropagation());
    video.addEventListener("pointerup", (event) => event.stopPropagation());
    video.addEventListener("error", () => {
      const fallback = fallbacks.shift();

      if (fallback) {
        applyVisual(element, { ...fallback, fallbacks }, fallbackStyle);
        return;
      }

      applyVisual(element, { type: "placeholder", style: fallbackStyle }, fallbackStyle);
    }, { once: true });
    element.append(video);
    syncVideoPlayback();
  }
}

function renderReflection(element, item, fallbackStyle) {
  if (!element) return;

  if (item.type === "video") {
    applyDeferredVisual(element, item, fallbackStyle, false);
    return;
  }

  const mediaItem = getOptimizedMediaItem(item);
  const visualKey = `${mediaItem.type}:${mediaItem.src || (mediaItem.style || fallbackStyle).join("|")}`;
  const hasRenderedMedia = element.querySelector("img, video");

  element.classList.toggle("has-media", mediaItem.type !== "placeholder");
  applyPictureStyle(element, mediaItem.style || fallbackStyle);

  if (element.dataset.visualKey === visualKey && hasRenderedMedia) {
    return;
  }

  element.replaceChildren();
  element.dataset.visualKey = visualKey;

  if (mediaItem.type === "image") {
    const image = document.createElement("img");
    const fallbacks = [...(mediaItem.fallbacks || [])];

    image.src = encodeURI(mediaItem.src);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.decoding = "async";
    image.decoding = "async";
    image.addEventListener("error", () => {
      const fallback = fallbacks.shift();

      if (fallback) {
        renderReflection(element, { ...fallback, fallbacks }, fallbackStyle);
        return;
      }

      renderReflection(element, { type: "placeholder", style: fallbackStyle }, fallbackStyle);
    }, { once: true });
    element.append(image);
  }
}

function playLofiNote(frequency, startTime, duration = 5.2, volume = 0.065) {
  const oscillator = audioContext.createOscillator();
  const overtone = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const pan = audioContext.createStereoPanner();
  const wobble = audioContext.createOscillator();
  const wobbleGain = audioContext.createGain();

  oscillator.type = "triangle";
  overtone.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.detune.setValueAtTime((Math.random() - 0.5) * 10, startTime);
  overtone.frequency.setValueAtTime(frequency * 1.995, startTime);
  overtone.detune.setValueAtTime((Math.random() - 0.5) * 8, startTime);
  wobble.type = "sine";
  wobble.frequency.setValueAtTime(0.18 + Math.random() * 0.08, startTime);
  wobbleGain.gain.setValueAtTime(5.5, startTime);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(740 + Math.random() * 160, startTime);
  filter.Q.setValueAtTime(0.7, startTime);
  pan.pan.setValueAtTime((Math.random() - 0.5) * 0.38, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.42);
  gain.gain.setValueAtTime(volume * 0.72, startTime + duration * 0.48);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  wobble.connect(wobbleGain);
  wobbleGain.connect(oscillator.detune);
  wobbleGain.connect(overtone.detune);
  oscillator.connect(filter);
  overtone.connect(filter);
  filter.connect(pan);
  pan.connect(gain);
  gain.connect(musicGain);
  gain.connect(musicDelay);
  wobble.start(startTime);
  oscillator.start(startTime);
  overtone.start(startTime);
  wobble.stop(startTime + duration + 0.05);
  oscillator.stop(startTime + duration + 0.05);
  overtone.stop(startTime + duration + 0.05);
}

function playBass(frequency, startTime) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency / 2, startTime);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(170, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.1);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(musicGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + 2.2);
}

function playExpandedPulse(frequency, startTime, index) {
  const oscillator = audioContext.createOscillator();
  const overtone = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const pan = audioContext.createStereoPanner();

  oscillator.type = index % 2 ? "sawtooth" : "square";
  overtone.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  overtone.frequency.setValueAtTime(frequency * 2.01, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.02, startTime + 0.1);
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1320 + index * 210, startTime);
  filter.frequency.exponentialRampToValueAtTime(760 + index * 130, startTime + 0.2);
  filter.Q.value = 2.4;
  pan.pan.value = (index - 1.5) * 0.22;
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);
  oscillator.connect(filter);
  overtone.connect(filter);
  filter.connect(pan);
  pan.connect(gain);
  gain.connect(musicGain);
  gain.connect(musicDelay);
  oscillator.start(startTime);
  overtone.start(startTime);
  oscillator.stop(startTime + 0.22);
  overtone.stop(startTime + 0.22);
}

function playExpandedKick(startTime) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const drive = audioContext.createWaveShaper();

  drive.curve = new Float32Array([-1, -0.82, -0.34, 0, 0.34, 0.82, 1]);
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(118, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(42, startTime + 0.16);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.72, startTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.26);
  oscillator.connect(drive);
  drive.connect(gain);
  gain.connect(musicGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.28);
}

function playExpandedHat(startTime, open = false) {
  const length = Math.floor(audioContext.sampleRate * (open ? 0.12 : 0.045));
  const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const pan = audioContext.createStereoPanner();

  for (let index = 0; index < length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / length);
  }

  source.buffer = buffer;
  filter.type = "highpass";
  filter.frequency.value = open ? 5200 : 7200;
  pan.pan.value = open ? 0.26 : -0.18;
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(open ? 0.3 : 0.18, startTime + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + (open ? 0.16 : 0.07));
  source.connect(filter);
  filter.connect(pan);
  pan.connect(gain);
  gain.connect(musicGain);
  source.start(startTime);
}

function playExpandedBass(frequency, startTime) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(frequency / 2, startTime);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(340, startTime);
  filter.frequency.exponentialRampToValueAtTime(160, startTime + 0.22);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.26, startTime + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.32);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(musicGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.36);
}

function scheduleExpandedPhrase() {
  if (!isMusicPlaying || !audioContext || !isExpanded) return;

  const now = audioContext.currentTime + 0.03;
  const notes = expandedProgression[expandedMusicStep % expandedProgression.length];
  const beat = 0.235;

  notes.forEach((note, index) => {
    const time = now + index * beat;

    playExpandedPulse(note, time + (index % 2 ? 0.035 : 0), index);
    playExpandedHat(time + beat * 0.5, index === 3);
    if (index % 2 === 0) playExpandedKick(time);
    if (index === 0 || index === 2) playExpandedBass(notes[0], time + 0.02);
  });
  expandedMusicStep += 1;
  expandedMusicTimer = window.setTimeout(scheduleExpandedPhrase, 960);
}

function updateExpandedMusicLayer() {
  window.clearTimeout(expandedMusicTimer);
  if (!isMusicPlaying || !audioContext) return;
  if (isUsingCustomTrack) return;

  if (isExpanded) {
    window.clearTimeout(musicTimer);
    expandedMusicStep = 0;
    scheduleExpandedPhrase();
    return;
  }

  window.clearTimeout(musicTimer);
  scheduleAmbientPhrase();
}

function syncMusicButtons() {
  musicToggle.setAttribute("aria-pressed", String(isMusicPlaying));
  musicToggle.setAttribute("aria-label", isMusicPlaying ? "Turn music off" : "Turn music on");
  if (homeMusic) {
    homeMusic.setAttribute("aria-pressed", String(isMusicPlaying));
    homeMusic.setAttribute("aria-label", isMusicPlaying ? "Turn music off" : "Turn music on");
  }
}

function playSfx(audio, { restart = true, offset = 0, playbackRate = 1 } = {}) {
  if (!audio) return;
  audio.load();
  const instance = audio.cloneNode();
  instance.volume = audio.volume;
  instance.playbackRate = playbackRate;
  if (offset > 0) {
    instance.currentTime = offset;
  } else if (!restart) {
    instance.currentTime = audio.currentTime;
  }
  instance.play().catch(() => {});
}

function getNextBeatDelayMs() {
  if (!isMusicPlaying) return 0;

  const activeTimeMs = activeBackgroundTrack && !activeBackgroundTrack.paused
    ? activeBackgroundTrack.currentTime * 1000
    : performance.now();
  const remainder = activeTimeMs % beatDurationMs;
  const delay = beatDurationMs - remainder;

  return delay < 70 ? delay + beatDurationMs : delay;
}

function runOnNextBeat(callback) {
  const delay = getNextBeatDelayMs();

  if (!delay) {
    callback();
    return;
  }

  window.clearTimeout(beatTransitionTimer);
  beatTransitionTimer = window.setTimeout(callback, delay);
}

function unlockSfx() {
  if (isSfxUnlocked) return;
  isSfxUnlocked = true;
  ensureMusicGraph();
  audioContext?.resume?.().catch(() => {});
}

function playBikeTitleNote(noteIndex = 0) {
  window.clearTimeout(bikeTitleSoundTimer);
  ensureMusicGraph();
  if (!audioContext) return;

  const now = audioContext.currentTime;
  const frequency = [261.63, 293.66, 329.63][noteIndex] || 261.63;
  const output = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const oscillator = audioContext.createOscillator();
  const overtone = audioContext.createOscillator();
  const gain = audioContext.createGain();

  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.15, now + 0.035);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(900 + noteIndex * 250, now);
  filter.frequency.exponentialRampToValueAtTime(1500 + noteIndex * 280, now + 0.28);
  filter.Q.value = 0.8;

  oscillator.type = "sine";
  overtone.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency * 0.98, now);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.01, now + 0.34);
  overtone.frequency.setValueAtTime(frequency * 2.01, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.28, now + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  oscillator.connect(gain);
  overtone.connect(gain);
  gain.connect(filter);
  filter.connect(output);
  output.connect(audioContext.destination);
  oscillator.start(now);
  overtone.start(now);
  oscillator.stop(now + 0.46);
  overtone.stop(now + 0.46);

  bikeTitleSoundTimer = window.setTimeout(() => {
    output.disconnect();
  }, 560);
}

function pulseBikeTitleCard(card) {
  if (!card) return;
  card.classList.add("is-touch-expanded");
  window.clearTimeout(bikeTitleTapTimer);
  bikeTitleTapTimer = window.setTimeout(() => {
    card.classList.remove("is-touch-expanded");
  }, 720);
}

function clearBikeTitleTouchSelection() {
  if (!bikeTitle) return;
  window.clearTimeout(bikeTitleTapTimer);
  bikeTitle.querySelectorAll("span").forEach((card) => {
    card.classList.remove("is-touch-expanded");
    card.blur();
  });
  clearHomeColorScheme(true);
}

function toggleBikeTitleTouchSelection(card, index) {
  if (!card) return;
  const isSelected = card.classList.contains("is-touch-expanded");

  clearBikeTitleTouchSelection();
  if (isSelected) return;

  card.classList.add("is-touch-expanded");
  setHomeColorScheme(index);
  playBikeTitleNote(index);
}

function setHomeColorScheme(index) {
  if (!homePage) return;
  homePage.classList.remove("home-scheme-white", "home-scheme-yellow", "home-scheme-red");
  homePage.classList.add(["home-scheme-white", "home-scheme-yellow", "home-scheme-red"][index] || "home-scheme-white", "is-color-awake");
}

function clearHomeColorScheme(force = false) {
  const shouldForce = force === true;
  if (!homePage || (!shouldForce && window.matchMedia("(hover: none)").matches)) return;
  homePage.classList.remove("is-color-awake", "home-scheme-white", "home-scheme-yellow", "home-scheme-red");
}

function playDoorSfx() {
  window.clearTimeout(doorSoundTimer);
  if (activeDoorSfx) {
    activeDoorSfx.pause();
    activeDoorSfx.currentTime = 0;
  }

  const instance = audioLibrary.sfx.garage.cloneNode();
  activeDoorSfx = instance;
  instance.volume = audioLibrary.sfx.garage.volume;
  instance.currentTime = doorSoundOffsetSeconds;
  instance.play().catch(() => {});
  doorSoundTimer = window.setTimeout(() => {
    instance.pause();
    instance.currentTime = 0;
    if (activeDoorSfx === instance) activeDoorSfx = null;
  }, doorDurationMs + doorSoundTailMs);
}

function playOpenSfx() {
  playSfx(audioLibrary.sfx.open);
}

function playCloseSfx() {
  playSfx(audioLibrary.sfx.close);
}

function showContactPanel() {
  playOpenSfx();
  if (typeof contactPanel.showModal === "function") {
    contactPanel.showModal();
  } else {
    contactPanel.setAttribute("open", "");
  }
}

function closeContact() {
  if (!contactPanel.open) return;
  playCloseSfx();
  contactPanel.close();
}

function showInterestPanel() {
  playOpenSfx();
  if (typeof interestPanel.showModal === "function") {
    interestPanel.showModal();
  } else {
    interestPanel.setAttribute("open", "");
  }
}

function closeInterest() {
  if (!interestPanel.open) return;
  playCloseSfx();
  interestPanel.close();
}

function stopBackgroundTracks() {
  window.clearTimeout(backgroundSwitchTimer);
  window.clearTimeout(beatTransitionTimer);
  backgroundFadeTimers.forEach((timer) => window.clearInterval(timer));
  backgroundFadeTimers.clear();
  Object.values(audioLibrary.background).forEach((track) => {
    track.pause();
    track.currentTime = 0;
    track.volume = backgroundBaseVolumes.get(track) ?? 0.62;
  });
  activeBackgroundTrack = null;
}

function fadeBackgroundTrack(track, fromVolume, toVolume, duration = 2400, onDone) {
  const start = performance.now();

  window.clearInterval(backgroundFadeTimers.get(track));
  const timer = window.setInterval(() => {
    const progress = Math.min(1, (performance.now() - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);

    track.volume = fromVolume + (toVolume - fromVolume) * eased;
    if (progress >= 1) {
      window.clearInterval(timer);
      backgroundFadeTimers.delete(track);
      onDone?.();
    }
  }, 50);
  backgroundFadeTimers.set(track, timer);
}

function setBackgroundTrack(trackName, { restart = false } = {}) {
  backgroundTrackName = trackName;
  const nextTrack = audioLibrary.background[trackName] || audioLibrary.background.main;
  const nextVolume = backgroundBaseVolumes.get(nextTrack) ?? 0.62;

  if (!isMusicPlaying) {
    stopBackgroundTracks();
    return;
  }

  if (activeBackgroundTrack === nextTrack && !restart && !nextTrack.paused) return;

  const switchTrack = () => {
    backgroundFadeTimers.forEach((timer) => window.clearInterval(timer));
    backgroundFadeTimers.clear();

    Object.values(audioLibrary.background).forEach((track) => {
      if (track === nextTrack) return;
      track.pause();
      track.currentTime = 0;
      track.volume = backgroundBaseVolumes.get(track) ?? 0.62;
    });

    activeBackgroundTrack = nextTrack;
    if (restart) nextTrack.currentTime = 0;
    nextTrack.volume = nextVolume;
    nextTrack.play().catch(() => {});
  };

  window.clearTimeout(backgroundSwitchTimer);
  switchTrack();
}

function currentSectionTrack() {
  if (document.body.classList.contains("is-secret-disco")) return "secret";
  if (reportPanel.open) return "report";
  if (isExpanded) return "expanded";
  return "main";
}

function currentSectionTrackWithoutSecret() {
  if (reportPanel.open) return "report";
  if (isExpanded) return "expanded";
  return "main";
}

function clearSecretMode({ restoreTrack = true } = {}) {
  const wasSecretMode =
    document.body.classList.contains("is-secret-disco") ||
    backgroundTrackName === "secret" ||
    activeBackgroundTrack === audioLibrary.background.secret;

  document.body.classList.remove("is-secret-disco");
  window.clearTimeout(secretDiscoTimer);

  if (restoreTrack && wasSecretMode) {
    setBackgroundTrack(currentSectionTrackWithoutSecret());
  }
}

function triggerSecretDisco() {
  document.body.classList.add("is-secret-disco");
  window.clearTimeout(secretDiscoTimer);
}

function playCodenameSfx(stage) {
  if (!isMusicPlaying || !audioContext || audioContext.state !== "running") return;

  const now = audioContext.currentTime;
  const output = audioContext.createGain();
  const rev = audioContext.createOscillator();
  const rasp = audioContext.createOscillator();
  const revGain = audioContext.createGain();
  const revFilter = audioContext.createBiquadFilter();

  output.gain.value = stage === 3 ? 1.05 : 0.82;
  rev.type = "sawtooth";
  rasp.type = "square";
  revFilter.type = "bandpass";
  revFilter.frequency.setValueAtTime(stage === 3 ? 860 : 720, now);
  revFilter.Q.value = stage === 3 ? 2.6 : 1.9;
  rev.frequency.setValueAtTime(stage === 1 ? 72 : stage === 2 ? 86 : 96, now);
  rev.frequency.exponentialRampToValueAtTime(stage === 1 ? 170 : stage === 2 ? 240 : 310, now + 0.16);
  rev.frequency.exponentialRampToValueAtTime(stage === 1 ? 96 : stage === 2 ? 118 : 62, now + 0.36);
  rasp.frequency.setValueAtTime(stage === 1 ? 144 : stage === 2 ? 172 : 192, now);
  rasp.frequency.exponentialRampToValueAtTime(stage === 1 ? 340 : stage === 2 ? 480 : 620, now + 0.16);
  rasp.frequency.exponentialRampToValueAtTime(stage === 1 ? 190 : stage === 2 ? 220 : 88, now + 0.36);
  revGain.gain.setValueAtTime(0.0001, now);
  revGain.gain.exponentialRampToValueAtTime(stage === 3 ? 0.62 : 0.48, now + 0.018);
  revGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  rev.connect(revFilter);
  rasp.connect(revFilter);
  revFilter.connect(revGain);
  revGain.connect(output);
  output.connect(musicGain);
  output.connect(musicDelay);
  rev.start(now);
  rasp.start(now);
  rev.stop(now + 0.45);
  rasp.stop(now + 0.45);

  if (stage === 3) {
    const boom = audioContext.createOscillator();
    const boomGain = audioContext.createGain();
    const length = Math.floor(audioContext.sampleRate * 0.36);
    const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    const burst = audioContext.createBufferSource();
    const burstGain = audioContext.createGain();
    const burstFilter = audioContext.createBiquadFilter();

    for (let index = 0; index < length; index += 1) {
      data[index] = (Math.random() * 2 - 1) * (1 - index / length);
    }

    burst.buffer = buffer;
    boom.type = "sine";
    boom.frequency.setValueAtTime(82, now + 0.12);
    boom.frequency.exponentialRampToValueAtTime(34, now + 0.52);
    boomGain.gain.setValueAtTime(0.0001, now + 0.1);
    boomGain.gain.exponentialRampToValueAtTime(0.9, now + 0.13);
    boomGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    burstFilter.type = "lowpass";
    burstFilter.frequency.setValueAtTime(3600, now + 0.12);
    burstFilter.frequency.exponentialRampToValueAtTime(520, now + 0.5);
    burstFilter.Q.value = 0.7;
    burstGain.gain.setValueAtTime(0.0001, now + 0.12);
    burstGain.gain.exponentialRampToValueAtTime(1.0, now + 0.135);
    burstGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
    boom.connect(boomGain);
    boomGain.connect(output);
    burst.connect(burstFilter);
    burstFilter.connect(burstGain);
    burstGain.connect(output);
    boom.start(now + 0.12);
    boom.stop(now + 0.66);
    burst.start(now + 0.12);
  }
}

function scheduleAmbientPhrase() {
  if (!isMusicPlaying || !audioContext) return;
  if (isUsingCustomTrack) return;
  if (isExpanded) {
    musicTimer = window.setTimeout(scheduleAmbientPhrase, 1000);
    return;
  }

  const now = audioContext.currentTime + 0.04;
  const chord = ambientProgression[musicStep % ambientProgression.length];
  const step = 0.28;

  chord.forEach((note, index) => {
    playExpandedPulse(note * (index > 1 ? 2 : 1), now + index * step, index);
  });

  playExpandedBass(chord[0], now + 0.02);
  if (musicStep % 2 === 0) {
    playExpandedHat(now + step * 2.5, true);
  }

  if (musicStep % 3 === 1) {
    playExpandedPulse(chord[2] * 3, now + step * 3.5, 2);
  }

  musicStep += 1;
  const nextDelay = 2200 + Math.random() * 450;
  musicTimer = window.setTimeout(scheduleAmbientPhrase, nextDelay);
}

function createNoiseBed() {
  const length = audioContext.sampleRate * 2;
  const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  const filter = audioContext.createBiquadFilter();

  for (let index = 0; index < length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * 0.32;
  }

  noiseSource = audioContext.createBufferSource();
  noiseGain = audioContext.createGain();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;
  filter.type = "bandpass";
  filter.frequency.value = 780;
  filter.Q.value = 0.45;
  noiseGain.gain.value = 0.0001;
  noiseSource.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(musicGain);
  noiseSource.start();
}

function ensureMusicGraph() {
  if (audioContext) return;

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  musicGain = audioContext.createGain();
  musicDelay = audioContext.createDelay(3);
  musicFeedback = audioContext.createGain();
  musicGain.gain.value = 0.0001;
  musicDelay.delayTime.value = 0.48;
  musicFeedback.gain.value = 0.18;
  musicDelay.connect(musicFeedback);
  musicFeedback.connect(musicDelay);
  musicDelay.connect(musicGain);
  musicGain.connect(audioContext.destination);
  createNoiseBed();
}

async function toggleMusic() {
  playSfx(audioLibrary.sfx.toggleMusic);
  isMusicPlaying = !isMusicPlaying;
  syncMusicButtons();

  if (isMusicPlaying) {
    isUsingCustomTrack = true;
    setBackgroundTrack(currentSectionTrack(), { restart: false });
    return;
  }

  window.clearTimeout(musicTimer);
  window.clearTimeout(expandedMusicTimer);
  isUsingCustomTrack = false;
  stopBackgroundTracks();
  Object.values(audioLibrary.sfx).forEach((track) => {
    track.pause();
    track.currentTime = 0;
  });
  document.body.classList.remove("is-secret-disco");
  window.clearTimeout(secretDiscoTimer);
}

function animatePhotoFlip(cover, swapFace, flipClass) {
  const nextFlipClass = flipClass || flipClasses[flipIndex % flipClasses.length];

  flipIndex += 1;
  cover.classList.remove(...flipClasses);
  void cover.offsetWidth;
  cover.classList.add(nextFlipClass);
  window.setTimeout(swapFace, flipMidpoint);
  window.setTimeout(() => cover.classList.remove(nextFlipClass), flipDuration + 60);
}

function getVerticalFlipClass(previousIndex, nextIndex, total, slotDirection) {
  const rawDelta = nextIndex - previousIndex;
  const wrappedDelta = rawDelta >= total / 2 ? rawDelta - total : rawDelta < -total / 2 ? rawDelta + total : rawDelta;
  const direction = slotDirection || wrappedDelta || 1;

  return direction > 0 ? "flip-down-up" : "flip-up-down";
}

function updateActivePhoto(photoIndex, shouldFlip = true, slotDirection = 0) {
  const album = albums[activeIndex];
  const cover = cards[activeIndex].querySelector(".cover");
  const mediaItems = getMediaItems(album);
  const mediaIndex = ((photoIndex % mediaItems.length) + mediaItems.length) % mediaItems.length;
  const previousIndex = activePhotoIndexes[activeIndex] % mediaItems.length;
  const flipClass = isExpanded ? getVerticalFlipClass(previousIndex, mediaIndex, mediaItems.length, slotDirection) : verticalFlipClasses[flipIndex % verticalFlipClasses.length];

  if (isExpanded && mediaIndex !== previousIndex) {
    const trackDirection = slotDirection || (mediaIndex > previousIndex ? 1 : -1);

    playSfx(audioLibrary.sfx.whoosh, { offset: whooshSoundOffsetSeconds, playbackRate: 2 });
    cover.dataset.previousPhotoIndex = String(previousIndex);
    cover.dataset.mediaDirection = trackDirection > 0 ? "forward" : "backward";
    cover.classList.add("is-media-moving");
    window.clearTimeout(mediaMotionTimer);
    mediaMotionTimer = window.setTimeout(() => {
      cover.classList.remove("is-media-moving");
      delete cover.dataset.previousPhotoIndex;
      delete cover.dataset.mediaDirection;
      cover.querySelectorAll(".cover-slide.leaving").forEach((slide) => slide.classList.remove("leaving"));
    }, 760);
  }

  activePhotoIndexes[activeIndex] = mediaIndex;
  if (isExpanded) {
    renderCarousel();
  } else if (shouldFlip) {
    animatePhotoFlip(cover, () => applyVisual(cover, mediaItems[mediaIndex], album.placeholder), flipClass);
  } else {
    applyVisual(cover, mediaItems[mediaIndex], album.placeholder);
  }
  if (!isExpanded) renderAlbumPanels(album);
  syncVideoPlayback();
}

function renderAlbumPanels(album) {
  const mediaItems = getMediaItems(album);
  const photoIndex = activePhotoIndexes[activeIndex] % mediaItems.length;
  const selectedPhoto = mediaItems[photoIndex];
  const codenameStyle = codenameStyles[activeIndex % codenameStyles.length];

  desktopCopy.querySelector("h2").textContent = album.title;
  desktopCopy.querySelector(".bike-detail").textContent = album.detail;
  if (codenamePanel) {
    if (codenamePanel.classList.contains("revealed") || document.body.classList.contains("is-secret-disco")) {
      clearSecretMode();
    }
    codenamePanel.classList.remove("armed", "half-flipped", "revealed", "bounce-one", "bounce-two", "bounce-three");
    codenamePanel.style.setProperty("--codename-color", codenameStyle.color);
    codenamePanel.style.setProperty("--codename-glow", codenameStyle.glow);
    codenamePanel.style.setProperty("--codename-font", codenameStyle.font);
    codenamePanel.style.setProperty("--codename-angle", codenameStyle.angle);
    codenamePanel.style.setProperty("--codename-stretch", codenameStyle.stretch);
    codenamePanel.querySelector(".codename-front").textContent = codenameWarnings[0];
    codenamePanel.querySelector(".codename-back strong").textContent = album.codename;
    codenameClickCount = 0;
    window.clearTimeout(codenameClickTimer);
    window.clearTimeout(codenameAnimationTimer);
  }
  const stats = Array.from(desktopCopy.querySelectorAll("dd"));
  stats[0].textContent = album.year;
  stats[1].textContent = album.mood;

  activePhotoIndexes[activeIndex] = photoIndex;
  applyVisual(desktopFeature, selectedPhoto, album.placeholder);
  desktopFeature.classList.add("active");
  desktopFeature.setAttribute("aria-label", `Selected picture ${photoIndex + 1} for ${album.title}`);

  renderPictureButtons(desktopPictures, album, "desktop");
  renderPictureButtons(mobilePictures, album, "mobile");

  document.querySelector("#mobileTitle").textContent = album.title;
  document.querySelector("#mobileDetail").textContent = album.detail;
}

function getPictureSlot(index, activePhotoIndex, total) {
  const offset = index - activePhotoIndex;

  return offset >= total / 2 ? offset - total : offset < -total / 2 ? offset + total : offset;
}

function renderPictureButtons(container, album, context) {
  const items = getMediaItems(album);
  const activePhotoIndex = activePhotoIndexes[activeIndex] % items.length;
  const shouldRebuild = container.dataset.albumIndex !== String(activeIndex) || container.children.length !== items.length;

  if (shouldRebuild) {
    container.dataset.albumIndex = String(activeIndex);
    container.replaceChildren(...createPictureButtons(album, context));
    return;
  }

  Array.from(container.children).forEach((button, index) => {
    const slot = getPictureSlot(index, activePhotoIndex, items.length);

    button.style.setProperty("--slot", slot);
    button.style.setProperty("--depth", Math.max(0, 2 - Math.abs(slot)));
    button.dataset.slot = String(slot);
    button.classList.toggle("active", index === activePhotoIndex);
  });
}

function createPictureButtons(album, context) {
  const items = getMediaItems(album);
  const activePhotoIndex = activePhotoIndexes[activeIndex] % items.length;

  return items.map((photo, index) => createPictureButton(album, photo, index, getPictureSlot(index, activePhotoIndex, items.length), context, activePhotoIndex));
}

function createPictureButton(album, photo, index, slot, context, activePhotoIndex) {
  const button = document.createElement("button");

  button.className = "mini-picture";
  button.type = "button";
  button.style.setProperty("--slot", slot);
  button.style.setProperty("--depth", Math.max(0, 2 - Math.abs(slot)));
  button.dataset.slot = String(slot);
  button.setAttribute("aria-label", `Select picture ${index + 1} for ${album.title}`);
  button.classList.toggle("active", index === activePhotoIndex);
  applyVisual(button, photo, album.placeholder);
  button.addEventListener("click", () => {
    updateActivePhoto(index, true, Number(button.dataset.slot) || 0);
    if (context === "mobile") mobileDrawer.dataset.mode = "pictures";
  });

  return button;
}

function getBlueprintMedia(album) {
  const mediaItems = getMediaItems(album);
  const image = mediaItems.find((item) => item.type === "image");
  const video = mediaItems.find((item) => item.type === "video");
  const fallback = image || video || mediaItems[0];

  if (album.blueprint) return { ...album.blueprint, isBlueprint: true };
  return getNamedAsset(album, "blueprint", fallback);
}

function createFallbackBlueprint() {
  const fallback = document.createElement("div");

  fallback.className = "blueprint-fallback";
  fallback.append(
    Object.assign(document.createElement("span"), { className: "info-frame" }),
    Object.assign(document.createElement("span"), { className: "info-engine" }),
    Object.assign(document.createElement("span"), { className: "info-tank" }),
    Object.assign(document.createElement("span"), { className: "info-seat" }),
    Object.assign(document.createElement("span"), { className: "info-fork" }),
    Object.assign(document.createElement("span"), { className: "info-shaft" }),
    Object.assign(document.createElement("span"), { className: "info-bars" }),
    Object.assign(document.createElement("span"), { className: "info-shocks" }),
  );

  return fallback;
}

function renderInfographic(album) {
  const infographic = document.querySelector("#reportInfographic");
  const features = album.report.features || [];
  const [toneA, toneB, toneC] = album.placeholder;
  const hero = document.createElement("div");
  const visual = document.createElement("div");
  const callouts = document.createElement("div");
  const blueprintLabel = document.createElement("span");
  const blueprintMedia = getBlueprintMedia(album);

  infographic.style.setProperty("--tone-a", toneA);
  infographic.style.setProperty("--tone-b", toneB);
  infographic.style.setProperty("--tone-c", toneC);
  blueprintLabel.className = "info-blueprint-label";
  blueprintLabel.textContent = "hologram blueprint study";
  hero.className = "blueprint-hero";
  visual.className = "blueprint-visual";
  visual.classList.toggle("is-blueprint-asset", Boolean(blueprintMedia.isBlueprint));

  if (blueprintMedia.type === "placeholder") {
    applyPictureStyle(visual, album.placeholder);
    visual.append(createFallbackBlueprint());
  } else {
    applyVisual(visual, blueprintMedia, album.placeholder);
  }

  visual.append(
    Object.assign(document.createElement("span"), { className: "blueprint-marker" }),
    Object.assign(document.createElement("span"), { className: "blueprint-marker" }),
    Object.assign(document.createElement("span"), { className: "blueprint-marker" }),
  );
  hero.append(visual);

  callouts.className = "feature-callouts";
  callouts.replaceChildren(...features.map(([label, description], index) => {
    const card = document.createElement("article");
    const title = document.createElement("strong");
    const body = document.createElement("span");

    card.className = "feature-card";
    card.dataset.index = String(index + 1).padStart(2, "0");
    title.textContent = label;
    body.textContent = description;
    card.append(title, body);
    return card;
  }));

  infographic.replaceChildren(...(blueprintMedia.isBlueprint ? [] : [blueprintLabel]), hero, callouts);
}

function setExpanded(nextExpanded) {
  const wasExpanded = isExpanded;
  if (nextExpanded === wasExpanded) return;

  playSfx(nextExpanded ? audioLibrary.sfx.open : audioLibrary.sfx.close);
  isExpanded = nextExpanded;
  if (!nextExpanded) {
    clearSecretMode({ restoreTrack: false });
  }
  mobileDrawer.dataset.mode = "none";
  galleryPage.classList.remove("is-settled");
  setBackgroundTrack(nextExpanded ? "expanded" : "main");
  if (nextExpanded) {
    galleryPage.classList.remove("is-collapsing");
  }
  if (wasExpanded && !nextExpanded) {
    galleryPage.classList.add("is-collapsing");
  }
  window.clearTimeout(settleTimer);
  renderCarousel();
  updateExpandedMusicLayer();

  if (isExpanded) {
    settleTimer = window.setTimeout(() => {
      galleryPage.classList.add("is-settled");
    }, expandSettleDelay);
  } else {
    settleTimer = window.setTimeout(() => {
      galleryPage.classList.remove("is-collapsing");
    }, collapseDuration);
  }
}

function toggleExpanded() {
  setExpanded(!isExpanded);
}

function cycleActivePhoto() {
  const album = albums[activeIndex];
  const nextPhotoIndex = (activePhotoIndexes[activeIndex] + 1) % getMediaItems(album).length;

  updateActivePhoto(nextPhotoIndex);
}

function advanceCodenamePanel(event) {
  event.stopPropagation();
  if (!isExpanded || !codenamePanel) return;

  if (codenamePanel.classList.contains("revealed")) return;

  codenameClickCount += 1;
  window.clearTimeout(codenameClickTimer);
  window.clearTimeout(codenameAnimationTimer);
  codenamePanel.classList.remove("bounce-one", "bounce-two", "bounce-three", "half-flipped");
  codenamePanel.querySelector(".codename-front").textContent = codenameWarnings[Math.min(codenameClickCount - 1, codenameWarnings.length - 1)];
  void codenamePanel.offsetWidth;
  codenamePanel.classList.add("armed", `bounce-${["one", "two", "three"][Math.min(codenameClickCount, 3) - 1]}`);
  codenamePanel.classList.toggle("half-flipped", codenameClickCount === 2);
  if (codenameClickCount >= 3) {
    playSfx(audioLibrary.sfx.boom);
  } else {
    playSfx(audioLibrary.sfx.slap);
  }

  if (codenameClickCount >= 3) {
    window.setTimeout(() => {
      codenamePanel.classList.add("revealed");
      codenamePanel.classList.remove("half-flipped", "bounce-three");
      window.clearTimeout(secretDiscoTimer);
      setBackgroundTrack("secret", { restart: true });
      triggerSecretDisco();
    }, 560);
    codenameClickCount = 0;
    return;
  }

  codenameAnimationTimer = window.setTimeout(() => {
    codenamePanel.classList.remove("armed", "half-flipped", "bounce-one", "bounce-two");
    if (codenameClickCount > 0) {
      codenamePanel.querySelector(".codename-front").textContent = codenameWarnings[Math.min(codenameClickCount, codenameWarnings.length - 1)];
    }
  }, codenameClickCount === 1 ? 540 : 620);

  codenameClickTimer = window.setTimeout(() => {
    codenameClickCount = 0;
    codenamePanel.querySelector(".codename-front").textContent = codenameWarnings[0];
    codenamePanel.classList.remove("armed", "half-flipped", "bounce-one", "bounce-two");
  }, 950);
}

function setMobileDrawer(mode) {
  if (window.innerWidth > 720) return;
  mobileDrawer.dataset.mode = mode;
}

buildGalleryShell();

document.addEventListener("pointerdown", unlockSfx, { once: true });
document.addEventListener("keydown", unlockSfx, { once: true });

cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    if (index === activeIndex) {
      if (isExpanded && event.target.closest(".cover")) {
        cycleActivePhoto();
        return;
      }
      toggleExpanded();
      return;
    }
    showAlbum(index);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showAlbum(index));
});

previousButton.addEventListener("click", () => showAlbum(activeIndex - 1));
nextButton.addEventListener("click", () => showAlbum(activeIndex + 1));
expandedClose.addEventListener("click", (event) => {
  event.stopPropagation();
  setExpanded(false);
});
closeContactPanel.addEventListener("click", closeContact);
closeInterestPanel.addEventListener("click", closeInterest);
if (codenamePanel) {
  codenamePanel.addEventListener("click", advanceCodenamePanel);
}
if (closeReportPanel) {
  closeReportPanel.addEventListener("click", () => closeReport());
}

galleryPage.addEventListener("click", (event) => {
  if (!isExpanded) return;
  if (event.target.closest(".album-card.active, .picture-board, .desktop-copy, .mobile-drawer, .site-header, dialog")) return;

  setExpanded(false);
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

musicToggle.addEventListener("click", toggleMusic);
if (homeMusic) {
  homeMusic.addEventListener("click", toggleMusic);
}
if (homeContact) {
  homeContact.addEventListener("click", () => {
    showContactPanel();
  });
}
if (bikeTitle) {
  bikeTitle.querySelectorAll("span").forEach((card, index) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") return;
      setHomeColorScheme(index);
      playBikeTitleNote(index);
    });
    card.addEventListener("focus", () => {
      setHomeColorScheme(index);
      playBikeTitleNote(index);
    });
  });
  bikeTitle.addEventListener("pointerleave", clearHomeColorScheme);
  bikeTitle.addEventListener("focusout", (event) => {
    if (!bikeTitle.contains(event.relatedTarget)) clearHomeColorScheme();
  });
  bikeTitle.addEventListener("click", (event) => {
    const card = event.target.closest(".bike-title span");

    if (!card || !window.matchMedia("(hover: none)").matches) return;
    const index = Array.from(bikeTitle.children).indexOf(card);
    toggleBikeTitleTouchSelection(card, index);
  });
}

document.addEventListener("click", (event) => {
  if (!window.matchMedia("(hover: none)").matches) return;
  if (event.target.closest(".bike-title span")) return;
  clearBikeTitleTouchSelection();
});

function openMuseum() {
  if (document.body.classList.contains("is-museum-open") || document.body.classList.contains("is-entering-museum")) return;
  document.body.classList.remove("is-returning-home");
  document.body.classList.add("is-museum-open", "is-entering-museum");
  playDoorSfx();
  setBackgroundTrack("main");
  renderCarousel();
  window.setTimeout(() => {
    document.body.classList.remove("is-entering-museum");
  }, doorDurationMs);
}

function closeMuseum() {
  if (!document.body.classList.contains("is-museum-open") || document.body.classList.contains("is-returning-home")) return;
  if (isExpanded) {
    setExpanded(false);
  }
  closeReport();
  document.body.classList.remove("is-entering-museum");
  document.body.classList.add("is-returning-home");
  playDoorSfx();
  window.requestAnimationFrame(() => {
    document.body.classList.remove("is-museum-open");
  });
  window.setTimeout(() => {
    document.body.classList.remove("is-returning-home");
    setBackgroundTrack("main");
  }, doorDurationMs);
}

if (enterMuseum) {
  enterMuseum.addEventListener("click", () => {
    openMuseum();
  });
}

siteNav.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (!link) return;
  if (link.getAttribute("href") === "#gallery") {
    event.preventDefault();
    openMuseum();
  }
  if (link.getAttribute("href") === "#home") {
    event.preventDefault();
    closeMuseum();
  }

  siteHeader.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
});

contactLink.addEventListener("click", () => {
  siteHeader.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");

  showContactPanel();
});

contactPanel.addEventListener("click", (event) => {
  const dialogBox = contactPanel.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) closeContact();
});

contactPanel.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeContact();
});

interestPanel.addEventListener("click", (event) => {
  const dialogBox = interestPanel.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) closeInterest();
});

interestPanel.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeInterest();
});

function openReport() {
  const album = albums[activeIndex];
  playOpenSfx();
  clearSecretMode({ restoreTrack: false });
  setBackgroundTrack("report", { restart: true });

  document.querySelector("#reportHistory").textContent = album.report.history;
  renderInfographic(album);

  const workList = document.querySelector("#reportWork");
  workList.replaceChildren(...album.report.work.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));

  const specsList = document.querySelector("#reportSpecs");
  specsList.replaceChildren(...album.report.specs.flatMap(([label, value]) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = label;
    dd.textContent = value;
    return [dt, dd];
  }));

  if (typeof reportPanel.showModal === "function") {
    reportPanel.showModal();
  } else {
    reportPanel.setAttribute("open", "");
  }
  reportPanel.classList.remove("is-closing");
  requestAnimationFrame(() => reportPanel.classList.add("is-open"));
}

function closeReport() {
  if (!reportPanel.open || reportPanel.classList.contains("is-closing")) return;
  playCloseSfx();
  window.clearTimeout(reportCloseTimer);
  reportPanel.classList.remove("is-open");
  reportPanel.classList.add("is-closing");
  reportCloseTimer = window.setTimeout(() => {
    reportPanel.classList.remove("is-closing");
    reportPanel.close();
    setBackgroundTrack(currentSectionTrack());
  }, 320);
}

reportButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openReport();
});

if (interestButton) {
  interestButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showInterestPanel();
  });
}

reportPanel.addEventListener("click", (event) => {
  const dialogBox = reportPanel.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) closeReport();
});

reportPanel.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeReport();
});

reportPanel.addEventListener("close", () => {
  reportPanel.classList.remove("is-open", "is-closing");
});

document.addEventListener("keydown", (event) => {
  if (isExpanded) return;
  if (event.key === "ArrowLeft") showAlbum(activeIndex - 1);
  if (event.key === "ArrowRight") showAlbum(activeIndex + 1);
});

carousel.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});

carousel.addEventListener("pointerup", (event) => {
  const deltaX = event.clientX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;

  if (isExpanded) {
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 42) {
      updateActivePhoto(activePhotoIndexes[activeIndex] + (deltaY < 0 ? 1 : -1), true, deltaY < 0 ? 1 : -1);
    }
    return;
  }

  if (Math.abs(deltaY) > Math.abs(deltaX)) return;

  if (Math.abs(deltaX) < 48) return;
  showAlbum(activeIndex + (deltaX < 0 ? 1 : -1));
});

carousel.addEventListener("wheel", (event) => {
  if (Math.abs(event.deltaX) < 6 && Math.abs(event.deltaY) < 6) return;

  event.preventDefault();
  if (wheelTimer) return;

  if (isExpanded) {
    const direction = event.deltaY > 0 ? 1 : -1;
    updateActivePhoto(activePhotoIndexes[activeIndex] + direction, true, direction);
  } else {
    const direction = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    showAlbum(activeIndex + (direction > 0 ? 1 : -1));
  }

  wheelTimer = window.setTimeout(() => {
    wheelTimer = null;
  }, 520);
}, { passive: false });

window.addEventListener("resize", renderCarousel);

renderCarousel();

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
      { type: "video", src: "assets/1970 gl000 goldwing/IMG_5510.MOV" },
      { type: "video", src: "assets/1970 gl000 goldwing/signal-2026-03-30-17-02-46-909~2.mp4" },
      { type: "image", src: "assets/1970 gl000 goldwing/signal-2026-03-30-17-02-56-168.jpg" },
    ],
    placeholder: ["#27484d", "#76a68f", "#e0c66b", "radial-gradient(circle at 50% 50%, #f6f0c7 0 18%, transparent 19%)", "repeating-linear-gradient(90deg, rgba(255,255,255,.12) 0 2px, transparent 2px 14px)"],
  },
  {
    artist: "Honda Standard Build",
    title: "Honda CB900",
    codename: "Ten-Speed Undertaker",
    assetFolder: "assets/1980 cb900",
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
      { type: "video", src: "assets/2010 roketa jl250p/Snapchat-1107529940.mp4" },
    ],
    placeholder: ["#1c5060", "#82bcb2", "#eef4dc", "radial-gradient(circle at 72% 28%, rgba(255,255,255,.8) 0 8%, transparent 9%)", "linear-gradient(180deg, rgba(255,255,255,.18), transparent)"],
  },
];

const carousel = document.querySelector("#carousel");
const scrubber = document.querySelector(".scrubber");
let cards = [];
let dots = [];
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const meta = document.querySelector("#albumMeta");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menuToggle");
const musicToggle = document.querySelector("#musicToggle");
const siteNav = document.querySelector("#siteNav");
const contactLink = document.querySelector("#contactLink");
const contactPanel = document.querySelector("#contactPanel");
const closeContactPanel = contactPanel.querySelector(".close-panel");
const reportButton = document.querySelector("#reportButton");
const reportPanel = document.querySelector("#reportPanel");
const closeReportPanel = reportPanel.querySelector(".close-panel");
const galleryPage = document.querySelector(".gallery-page");
const desktopCopy = document.querySelector("#desktopCopy");
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
let audioContext;
let musicGain;
let musicDelay;
let musicFeedback;
let noiseSource;
let noiseGain;
let musicTimer;
let musicStep = 0;
let isMusicPlaying = false;
let reportCloseTimer;
const revealedCodenames = albums.map(() => false);
const declassifiedCodenames = albums.map(() => false);
const codenameClickCounts = albums.map(() => 0);

const flipClasses = ["flip-left-right", "flip-right-left", "flip-up-down", "flip-down-up"];
const verticalFlipClasses = ["flip-up-down", "flip-down-up"];
const flipDuration = 680;
const flipMidpoint = flipDuration / 2;
const expandSettleDelay = 0;
const collapseDuration = 660;
const imageExtensions = ["jpg", "jpeg", "png", "webp"];
const ambientProgression = [
  [174.61, 220.0, 261.63, 329.63],
  [146.83, 196.0, 246.94, 293.66],
  [164.81, 207.65, 246.94, 311.13],
  [130.81, 174.61, 220.0, 261.63],
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
    caption.className = "card-caption";
    title.textContent = album.title;
    year.textContent = album.year;
    reflection.className = "reflection";
    caption.append(title, year);
    card.append(cover, caption, reflection);
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
  const spacing = isExpanded ? Math.max(118, Math.min(230, viewport * 0.16)) : Math.max(104, Math.min(250, viewport * 0.19));

  cards.forEach((card, index) => {
    const distance = wrappedDistance(index, activeIndex);
    const abs = Math.abs(distance);
    const direction = Math.sign(distance);
    const x = distance * spacing;
    const z = isExpanded && abs === 0 ? 110 : isExpanded ? -260 - abs * 54 : abs === 0 ? 90 : -120 - abs * 90;
    const rotation = abs === 0 ? 0 : direction * (isExpanded ? -46 : -54);
    const opacity = isExpanded && abs > 2 ? 0 : isExpanded && abs > 0 ? 0.3 : abs > 2 ? 0 : abs === 2 ? 0.35 : abs === 1 ? 0.74 : 1;
    const scale = isExpanded && abs === 0 ? 1 : isExpanded ? 0.46 : abs === 0 ? 1.16 : abs === 1 ? 0.82 : 0.68;
    const cover = card.querySelector(".cover");
    const caption = card.querySelector(".card-caption");
    const album = albums[index];
    const mediaItems = getMediaItems(album);
    const mediaIndex = activePhotoIndexes[index] % mediaItems.length;

    card.classList.toggle("active", index === activeIndex);
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--z", `${z}px`);
    card.style.setProperty("--rot", `${rotation}deg`);
    card.style.setProperty("--scale", scale);
    card.style.setProperty("--opacity", opacity);
    card.style.zIndex = String(10 - abs);

    caption.querySelector("strong").textContent = album.title;
    caption.querySelector("span").textContent = album.year;
    activePhotoIndexes[index] = mediaIndex;
    if (isExpanded && index === activeIndex) {
      renderCoverMediaCarousel(cover, album, index);
    } else {
      cover.dataset.mediaCarouselAlbum = "";
      cover.dataset.mediaCarouselCount = "";
      cover.classList.remove("has-media-carousel", "has-video");
      applyVisual(cover, mediaItems[mediaIndex], album.placeholder);
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
    const shouldPlay = holder && shouldPlayVisual(holder);

    video.muted = !shouldPlay;
    video.controls = shouldPlay;
    video.loop = true;
    video.playsInline = true;

    if (shouldPlay) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
      return;
    }

    video.pause();
  });
}

function renderCoverMediaCarousel(cover, album, albumIndex) {
  const items = getMediaItems(album);
  const activePhotoIndex = activePhotoIndexes[albumIndex] % items.length;
  const shouldRebuild = cover.dataset.mediaCarouselAlbum !== String(albumIndex) || cover.dataset.mediaCarouselCount !== String(items.length);

  cover.classList.add("has-media", "has-media-carousel");
  cover.classList.toggle("has-video", items[activePhotoIndex]?.type === "video");
  applyPictureStyle(cover, items[activePhotoIndex]?.style || album.placeholder);
  cover.style.setProperty("--media-index", activePhotoIndex);
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
      slide.classList.toggle("active", index === activePhotoIndex);
      slide.setAttribute("aria-hidden", String(index !== activePhotoIndex));
      applyVisual(slide, item, album.placeholder);
      track.append(slide);
    });
  } else {
    Array.from(cover.querySelectorAll(".cover-slide")).forEach((slide, index) => {
      slide.classList.toggle("active", index === activePhotoIndex);
      slide.setAttribute("aria-hidden", String(index !== activePhotoIndex));
    });
  }
}

function applyVisual(element, item, fallbackStyle) {
  const fallbacks = [...(item.fallbacks || [])];

  element.replaceChildren();
  element.classList.toggle("has-media", item.type !== "placeholder");
  applyPictureStyle(element, item.style || fallbackStyle);

  if (item.type === "image") {
    const image = document.createElement("img");

    image.src = encodeURI(item.src);
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

  if (item.type === "video") {
    const video = document.createElement("video");
    const shouldPlay = shouldPlayVisual(element);

    video.src = encodeURI(item.src);
    video.muted = !shouldPlay;
    video.loop = true;
    video.playsInline = true;
    video.controls = shouldPlay;
    video.autoplay = shouldPlay;
    video.preload = "metadata";
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

function scheduleAmbientPhrase() {
  if (!isMusicPlaying || !audioContext) return;

  const now = audioContext.currentTime + 0.04;
  const chord = ambientProgression[musicStep % ambientProgression.length];
  const chordStart = now + (Math.random() * 0.08);

  chord.forEach((note, index) => {
    playLofiNote(note, chordStart + index * 0.035, 5.4 + index * 0.28, index === 0 ? 0.055 : 0.045);
  });

  playBass(chord[0], now + 0.15);
  if (musicStep % 2 === 0) {
    playBass(chord[0] * 0.75, now + 2.45);
  }

  if (musicStep % 3 === 1) {
    playLofiNote(chord[2] * 2, now + 3.2, 3.8, 0.026);
  }

  musicStep += 1;
  const nextDelay = 5600 + Math.random() * 1200;
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
  ensureMusicGraph();
  await audioContext.resume();

  const now = audioContext.currentTime;
  isMusicPlaying = !isMusicPlaying;
  musicToggle.setAttribute("aria-pressed", String(isMusicPlaying));
  musicToggle.setAttribute("aria-label", isMusicPlaying ? "Turn music off" : "Turn music on");

  if (isMusicPlaying) {
    musicStep = 0;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(Math.max(musicGain.gain.value, 0.0001), now);
    musicGain.gain.exponentialRampToValueAtTime(0.58, now + 0.85);
    noiseGain.gain.cancelScheduledValues(now);
    noiseGain.gain.setValueAtTime(Math.max(noiseGain.gain.value, 0.0001), now);
    noiseGain.gain.exponentialRampToValueAtTime(0.035, now + 1.1);
    scheduleAmbientPhrase();
    return;
  }

  window.clearTimeout(musicTimer);
  musicGain.gain.cancelScheduledValues(now);
  musicGain.gain.setValueAtTime(Math.max(musicGain.gain.value, 0.0001), now);
  musicGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
  noiseGain.gain.cancelScheduledValues(now);
  noiseGain.gain.setValueAtTime(Math.max(noiseGain.gain.value, 0.0001), now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
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
  const mediaIndex = photoIndex % mediaItems.length;
  const previousIndex = activePhotoIndexes[activeIndex] % mediaItems.length;
  const flipClass = isExpanded ? getVerticalFlipClass(previousIndex, mediaIndex, mediaItems.length, slotDirection) : verticalFlipClasses[flipIndex % verticalFlipClasses.length];

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
  const titleText = revealedCodenames[activeIndex] && album.codename ? album.codename : album.title;

  desktopCopy.querySelector("h2").textContent = titleText;
  updateSecretTitle(desktopCopy.querySelector("[data-secret-title]"), album);
  desktopCopy.querySelector(".bike-detail").textContent = album.detail;
  const stats = Array.from(desktopCopy.querySelectorAll("dd"));
  stats[0].textContent = album.year;
  stats[1].textContent = album.mood;

  activePhotoIndexes[activeIndex] = photoIndex;
  applyVisual(desktopFeature, selectedPhoto, album.placeholder);
  desktopFeature.classList.add("active");
  desktopFeature.setAttribute("aria-label", `Selected picture ${photoIndex + 1} for ${album.title}`);

  renderPictureButtons(desktopPictures, album, "desktop");
  renderPictureButtons(mobilePictures, album, "mobile");

  document.querySelector("#mobileTitle").textContent = titleText;
  updateSecretTitle(document.querySelector(".drawer-info [data-secret-title]"), album);
  document.querySelector("#mobileDetail").textContent = album.detail;
}

function updateSecretTitle(container, album) {
  const isRevealed = Boolean(revealedCodenames[activeIndex] && album.codename);
  const isDeclassified = Boolean(declassifiedCodenames[activeIndex] && album.codename);
  const button = container.querySelector(".secret-peel");
  const stamp = container.querySelector(".secret-stamp");
  const hint = container.querySelector(".secret-hint");

  container.classList.toggle("is-secret", isRevealed);
  container.classList.remove("is-open", "is-dragging", "is-fading", "stamp-hit-1", "stamp-hit-2", "stamp-hit-3", "stamp-pop", "stamp-bump");
  container.classList.toggle("is-declassified", isDeclassified || isRevealed);
  button.hidden = !album.codename;
  stamp.textContent = isDeclassified || isRevealed ? "Declassified" : "Classified";
  hint.textContent = isDeclassified || isRevealed ? "Tap to swap the title" : "Tap the stamp three times";
  updateSecretCounter(container);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", isRevealed ? "Show motorcycle name" : "Reveal secret codename");
}

function setSecretTitleOpen(container, isOpen) {
  const button = container.querySelector(".secret-peel");

  container.classList.toggle("is-open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
}

function fadeSecretTitle(container, nextText, nextIsSecret) {
  const title = container.querySelector("h2");
  const button = container.querySelector(".secret-peel");
  const stamp = container.querySelector(".secret-stamp");
  const hint = container.querySelector(".secret-hint");

  container.classList.add("is-fading");
  window.setTimeout(() => {
    title.textContent = nextText;
    container.classList.toggle("is-secret", nextIsSecret);
    container.classList.toggle("is-declassified", nextIsSecret || declassifiedCodenames[activeIndex]);
    stamp.textContent = nextIsSecret || declassifiedCodenames[activeIndex] ? "Declassified" : "Classified";
    hint.textContent = "Tap to swap the title";
    button.setAttribute("aria-label", nextIsSecret ? "Show motorcycle name" : "Reveal secret codename");
  }, 150);
  window.setTimeout(() => container.classList.remove("is-fading"), 340);
}

function toggleSecretCodename(container) {
  const album = albums[activeIndex];

  if (!album.codename || !declassifiedCodenames[activeIndex]) return;

  revealedCodenames[activeIndex] = !revealedCodenames[activeIndex];
  document.querySelectorAll("[data-secret-title]").forEach((titleContainer) => {
    fadeSecretTitle(titleContainer, revealedCodenames[activeIndex] ? album.codename : album.title, revealedCodenames[activeIndex]);
  });
}

function pulseClassifiedStamp(container) {
  if (declassifiedCodenames[activeIndex]) {
    toggleSecretCodename(container);
    return;
  }

  codenameClickCounts[activeIndex] = Math.min(3, codenameClickCounts[activeIndex] + 1);
  document.querySelectorAll("[data-secret-title]").forEach((titleContainer) => {
    titleContainer.classList.remove("stamp-hit-1", "stamp-hit-2", "stamp-hit-3", "stamp-bump");
    titleContainer.classList.add(`stamp-hit-${codenameClickCounts[activeIndex]}`);
    updateSecretCounter(titleContainer);
    void titleContainer.offsetWidth;
    titleContainer.classList.add("stamp-bump");
  });

  if (codenameClickCounts[activeIndex] < 3) return;

  document.querySelectorAll("[data-secret-title]").forEach((titleContainer) => {
    titleContainer.classList.add("stamp-pop");
  });
  window.setTimeout(() => {
    declassifiedCodenames[activeIndex] = true;
    document.querySelectorAll("[data-secret-title]").forEach((titleContainer) => {
      titleContainer.classList.remove("stamp-hit-1", "stamp-hit-2", "stamp-hit-3", "stamp-pop");
      titleContainer.classList.add("is-declassified");
      titleContainer.querySelector(".secret-stamp").textContent = "Declassified";
      titleContainer.querySelector(".secret-hint").textContent = "Tap to swap the title";
      updateSecretCounter(titleContainer);
    });
  }, 360);
}

function updateSecretCounter(container) {
  const dots = Array.from(container.querySelectorAll(".secret-counter span"));
  const count = declassifiedCodenames[activeIndex] ? dots.length : codenameClickCounts[activeIndex];

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-lit", index < count);
  });
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

  isExpanded = nextExpanded;
  mobileDrawer.dataset.mode = "none";
  galleryPage.classList.remove("is-settled");
  if (nextExpanded) {
    galleryPage.classList.remove("is-collapsing");
  }
  if (wasExpanded && !nextExpanded) {
    galleryPage.classList.add("is-collapsing");
  }
  window.clearTimeout(settleTimer);
  renderCarousel();

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

function setMobileDrawer(mode) {
  if (window.innerWidth > 720) return;
  mobileDrawer.dataset.mode = mode;
}

buildGalleryShell();

document.querySelectorAll("[data-secret-title]").forEach((titleContainer) => {
  const peel = titleContainer.querySelector(".secret-peel");
  let dragStartY = 0;
  let isDraggingSecret = false;
  let suppressSecretClick = false;

  titleContainer.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || peel.hidden) return;
    dragStartY = event.clientY;
    isDraggingSecret = false;
    suppressSecretClick = false;
    titleContainer.classList.add("is-dragging");
    titleContainer.setPointerCapture(event.pointerId);
  });

  titleContainer.addEventListener("pointermove", (event) => {
    if (!titleContainer.classList.contains("is-dragging")) return;

    const dragDistance = Math.max(0, dragStartY - event.clientY);
    titleContainer.style.setProperty("--peel-drag", `${Math.min(dragDistance, 64)}px`);
    if (dragDistance > 22) {
      isDraggingSecret = true;
      setSecretTitleOpen(titleContainer, true);
    }
  });

  titleContainer.addEventListener("pointerup", (event) => {
    titleContainer.classList.remove("is-dragging");
    titleContainer.style.removeProperty("--peel-drag");
    if (titleContainer.hasPointerCapture(event.pointerId)) {
      titleContainer.releasePointerCapture(event.pointerId);
    }
    suppressSecretClick = isDraggingSecret;
    isDraggingSecret = false;
  });

  titleContainer.addEventListener("pointercancel", () => {
    titleContainer.classList.remove("is-dragging");
    titleContainer.style.removeProperty("--peel-drag");
    isDraggingSecret = false;
    suppressSecretClick = false;
  });

  titleContainer.addEventListener("click", (event) => {
    if (peel.hidden) return;
    if (!event.target.closest(".secret-title")) return;
    event.stopPropagation();
    event.preventDefault();
    if (suppressSecretClick) {
      suppressSecretClick = false;
      return;
    }

    if (!titleContainer.classList.contains("is-open")) {
      setSecretTitleOpen(titleContainer, true);
      return;
    }

    if (event.target.closest(".secret-peel")) {
      pulseClassifiedStamp(titleContainer);
    }
  }, true);
});

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
closeContactPanel.addEventListener("click", () => contactPanel.close());
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

siteNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;

  siteHeader.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
});

contactLink.addEventListener("click", () => {
  siteHeader.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");

  if (typeof contactPanel.showModal === "function") {
    contactPanel.showModal();
  } else {
    contactPanel.setAttribute("open", "");
  }
});

contactPanel.addEventListener("click", (event) => {
  const dialogBox = contactPanel.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) contactPanel.close();
});

function openReport() {
  const album = albums[activeIndex];

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
  window.clearTimeout(reportCloseTimer);
  reportPanel.classList.remove("is-open");
  reportPanel.classList.add("is-closing");
  reportCloseTimer = window.setTimeout(() => {
    reportPanel.classList.remove("is-closing");
    reportPanel.close();
  }, 320);
}

reportButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openReport();
});

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

  if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 54) {
    setMobileDrawer(deltaY < 0 ? "pictures" : "info");
    return;
  }

  if (isExpanded) return;
  if (Math.abs(deltaX) < 48) return;
  showAlbum(activeIndex + (deltaX < 0 ? 1 : -1));
});

window.addEventListener("resize", renderCarousel);

renderCarousel();

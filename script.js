// ============================================================
// Beeline Product Updates — data + interactions
// ============================================================

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// --- Update entries -------------------------------------------------
// device: moto2 | velo2 | og-moto | og-velo | app (device-agnostic)
// platform: ios | android | web
// Content grounded in the Beeline dev changelog (Notion) + the in-app
// "What's new" v3.4.4598 popup. Version strings kept verbatim where known.
const UPDATES = [
  // ---- 12 Aug 2026 — app v3.4.4598 -----------------------------------
  {
    id: 'search-home-screen',
    date: '2026-08-12',
    stage: 'new',
    level: 'main',
    versions: { app: 'App 3.4.4598' },
    title: 'Search your saved routes and places from the home screen',
    description: 'A single search bar now sits front and centre on the home screen. Start typing to filter your saved routes and favourite places instantly, instead of scrolling to find them.',
    platforms: ['ios','android'],
    devices: ['app'],
    media: { type: 'video', src: 'assets/media/search-saved-routes-home-screen.mp4', alt: 'Typing into the home screen search bar to filter saved routes' }
  },
  {
    id: 'landscape-riding',
    date: '2026-08-12',
    stage: 'update',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Landscape support for riding screens',
    description: 'Mount your phone sideways and the ride view now rotates properly, so bar-mounted phones get a wider map.',
    platforms: ['ios','android'],
    devices: ['app']
  },
  {
    id: 'find-my-beeline',
    date: '2026-08-12',
    stage: 'update',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Improved Find My Beeline screen',
    description: 'A clearer last-seen map, plus better signal strength and distance readouts when you’re tracking down a misplaced device.',
    platforms: ['ios','android'],
    devices: ['moto2','velo2','og-moto','og-velo'],
    media: { type: 'video', src: 'assets/media/find-my-beeline-map-screen.mp4', alt: 'The updated Find My Beeline last-seen map' }
  },
  {
    id: 'device-nicknames',
    date: '2026-08-12',
    stage: 'new',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Give your device a nickname',
    description: 'Riding with more than one Beeline? Rename each device from Settings so you can tell them apart at a glance.',
    platforms: ['ios','android'],
    devices: ['moto2','velo2','og-moto','og-velo'],
    media: { type: 'video', src: 'assets/media/device-nicknames.mp4', alt: 'Renaming a device from the Settings screen' }
  },
  {
    id: 'settings-whats-new',
    date: '2026-08-12',
    stage: 'new',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Find this page from Settings',
    description: 'Curious what changed? Settings → About now links straight to this updates page from inside the app.',
    platforms: ['ios','android'],
    devices: ['app'],
    media: { type: 'video', src: 'assets/media/whats-new-settings-screen.mp4', alt: 'Opening the What’s New page from the app Settings screen' }
  },
  {
    id: 'end-ride-stats-fix',
    date: '2026-08-12',
    stage: 'update',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Fixed invalid end-of-ride stats',
    description: 'Rides started directly from a device no longer occasionally show impossible locations in the ride summary.',
    platforms: ['ios','android'],
    devices: ['moto2','velo2']
  },
  {
    id: 'turn-notification-distance',
    date: '2026-08-12',
    stage: 'update',
    level: 'other',
    versions: { app: 'App 3.4.4598' },
    title: 'Shorter-range turn notifications at low speed',
    description: 'Cycling turn alerts now trigger closer to the junction when you’re riding slowly, so they feel timed to your pace.',
    platforms: ['ios','android'],
    devices: ['app']
  },

  // ---- 25 Jun 2026 — app v3.4.4220 / 4.2.7910 -------------------------
  {
    id: 'edit-route-mid-ride',
    date: '2026-06-25',
    stage: 'new',
    level: 'main',
    versions: { app: 'App 3.4.4220' },
    title: 'Edit your route mid-ride',
    description: 'You asked, we listened. Open Options during a ride to edit your route on the fly — add a stop, avoid what’s ahead, or reroute home — without cancelling navigation and starting again.',
    note: 'Rolling out on Android first — iOS is coming very soon.',
    platforms: ['android'],
    devices: ['app'],
    media: { type: 'image', src: 'assets/media/edit-route-midride-options-button.png', alt: 'In-ride Options button highlighted on the navigation screen' }
  },
  {
    id: 'shuffle-route',
    date: '2026-06-25',
    stage: 'new',
    level: 'other',
    versions: { app: 'App 3.4.4220' },
    title: 'Shuffle to generate a fresh route',
    description: 'Not feeling the route you’re looking at? Hit shuffle in the planner for an instant alternative, no need to start over.',
    platforms: ['ios','android'],
    devices: ['app']
  },
  {
    id: 'gpx-match-viz',
    date: '2026-06-25',
    stage: 'update',
    level: 'other',
    versions: { app: 'App 3.4.4220' },
    title: 'See where a GPX import didn’t quite match',
    description: 'Importing a GPX file that doesn’t line up cleanly with our road network now shows you exactly where it couldn’t be matched, so you can fix it before you ride.',
    platforms: ['ios','android'],
    devices: ['app']
  },

  // ---- 28 Apr 2025 — the feature’s original release ------------------
  {
    id: 'start-ride-device',
    date: '2025-04-28',
    stage: 'new',
    level: 'main',
    versions: { app: 'iOS 3.4.2295 · Android 4.2.5277', device: 'Velo 2 4.2.400 · Moto II 4.1.400' },
    title: 'Start a ride straight from your device',
    description: 'No more reaching for your phone first. Power on Moto II or Velo 2, pick a saved place or route right from the dial, and go — the app catches up once you’re rolling.',
    platforms: ['ios','android'],
    devices: ['moto2','velo2'],
  },

  // ---- Online Route Planner (web) — from the Beeline blog -------------
  {
    id: 'route-planner-units-elevation',
    date: '2026-07-23',
    stage: 'update',
    level: 'main',
    versions: { app: 'Web' },
    title: 'Choose your units, see elevation and surface, and more',
    description: 'The Route Planner now remembers whether you ride in kilometres or miles, with elevation in feet or metres to match. Elevation profiles show surface type, adding waypoints is quicker, the map remembers where you left off, and the planner now speaks more languages.',
    platforms: ['web'],
    devices: ['app'],
    media: { type: 'image', src: 'assets/media/route-planner-jul-2026.png', alt: 'Online Route Planner showing unit preferences and an elevation profile' }
  },
  {
    id: 'route-planner-delete-sort',
    date: '2025-12-17',
    stage: 'update',
    level: 'other',
    versions: { app: 'Web' },
    title: 'Delete saved routes online, newest first',
    description: 'Your saved routes on the web planner now sort newest to oldest, and you can delete ones you no longer need — it syncs straight back to the app. We also ran a survey to help decide what to build next.',
    platforms: ['web'],
    devices: ['app'],
    media: { type: 'image', src: 'assets/media/route-planner-dec-2025.png', alt: 'Saved routes list in the Online Route Planner' }
  },
  {
    id: 'route-planner-relaunch',
    date: '2025-11-18',
    stage: 'update',
    level: 'other',
    versions: { app: 'Web' },
    title: 'Route Planner gets some love',
    description: 'We’re finally giving our (still-beta) online Route Planner the attention it deserves — a batch of bug fixes, plus the ability to edit your saved routes right from the browser.',
    platforms: ['web'],
    devices: ['app'],
    media: { type: 'image', src: 'assets/media/route-planner-nov-2025.png', alt: 'The Online Route Planner interface' }
  },
];

// --- Derived data -----------------------------------------------------
function monthKey(dateStr){ const d = new Date(dateStr); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; }
function monthLabel(key){ const [y,m] = key.split('-').map(Number); return { short: MONTH_NAMES[m-1], year: y }; }

const sorted = [...UPDATES].sort((a,b)=> new Date(b.date) - new Date(a.date));
const monthsWithData = [...new Set(sorted.map(u=>monthKey(u.date)))]; // newest first — the rail only ever shows these

// --- Icons / labels -----------------------------------------------------
const DEVICE_META = {
  'moto2':   { label: 'Moto II',        icon: 'icon-device-moto' },
  'velo2':   { label: 'Velo 2',         icon: 'icon-device-velo' },
  'og-moto': { label: 'Original Moto',  icon: 'icon-device-moto-og' },
  'og-velo': { label: 'Original Velo',  icon: 'icon-device-velo-og' },
  'app':     { label: 'App',           icon: 'icon-web' },
};
const PLATFORM_META = {
  ios: { label: 'iOS', icon: 'icon-apple' },
  android: { label: 'Android', icon: 'icon-android' },
  web: { label: 'Web', icon: 'icon-web' },
};

function formatDate(dateStr){
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// --- Render feed --------------------------------------------------------
const feedEl = document.getElementById('feed');

function versionLine(versions){
  if (!versions) return '';
  return [versions.app, versions.device].filter(Boolean).join('  ·  ');
}

function cardHTML(u){
  const isFeature = u.level === 'main';
  const deviceTags = u.devices.map(d => `<span class="tag"><svg><use href="#${DEVICE_META[d].icon}"/></svg>${DEVICE_META[d].label}</span>`).join('');
  const platformIcons = u.platforms.map(p => `<svg><use href="#${PLATFORM_META[p].icon}"/></svg>`).join('');
  const mediaEl = u.media
    ? (u.media.type === 'video'
        ? `<video src="${u.media.src}" muted loop playsinline preload="metadata" aria-label="${u.media.alt || ''}"></video>`
        : `<img src="${u.media.src}" alt="${u.media.alt || ''}" loading="lazy">`)
    : '';
  const media = u.media ? `
    <div class="card-media">
      <div class="media-badges">
        ${u.stage === 'new' ? '<span class="badge badge--new">New</span>' : '<span class="badge badge--updated">Updated</span>'}
      </div>
      ${mediaEl}
      ${u.media.type === 'video' ? `<button class="play" aria-label="Play preview"><svg width="52" height="52"><use href="#icon-play"/></svg></button>` : ''}
    </div>` : '';

  return `
    <article class="card ${isFeature ? 'card--feature' : ''}" data-devices="${u.devices.join(',')}" data-platforms="${u.platforms.join(',')}">
      ${media}
      <div class="card-body">
        ${!u.media ? `<div class="card-tags">${u.stage === 'new' ? '<span class="badge badge--new">New</span>' : '<span class="badge badge--updated">Updated</span>'}</div>` : ''}
        <h3>${u.title}</h3>
        <p>${u.description}</p>
        ${u.note ? `<p class="card-note">${u.note}</p>` : ''}
        <div class="card-tags">${deviceTags}</div>
        <div class="card-footer">
          <span>${formatDate(u.date)}<span class="version-line">${versionLine(u.versions)}</span></span>
          <span class="device-icons">${platformIcons}</span>
        </div>
      </div>
    </article>`;
}

function render(){
  feedEl.innerHTML = monthsWithData.map(key => {
    const { short, year } = monthLabel(key);
    const items = sorted.filter(u => monthKey(u.date) === key);
    return `
      <section class="month-section" id="month-${key}" data-month="${key}">
        <div class="month-heading">
          <h2>${short} ${year}</h2>
          <span class="count">${items.length} update${items.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="cards">${items.map(cardHTML).join('')}</div>
      </section>`;
  }).join('');

  document.getElementById('stat-count').textContent = UPDATES.length;
  document.getElementById('stat-latest').textContent = formatDate(sorted[0].date);

  feedEl.querySelectorAll('.card-media').forEach(mediaEl => {
    const video = mediaEl.querySelector('video');
    const playBtn = mediaEl.querySelector('.play');
    if (!video || !playBtn) return;
    playBtn.addEventListener('click', ()=>{
      if (video.paused){ video.play(); playBtn.classList.add('is-hidden'); }
      else { video.pause(); playBtn.classList.remove('is-hidden'); }
    });
    video.addEventListener('ended', ()=> playBtn.classList.remove('is-hidden'));
  });
}

// --- Month rail -----------------------------------------------------
const track = document.getElementById('month-track');

function renderMonthRail(){
  track.innerHTML = monthsWithData.map(key => {
    const { short, year } = monthLabel(key);
    return `<button class="month-pill" data-month="${key}">${short}<span class="year">'${String(year).slice(2)}</span></button>`;
  }).join('');
}
renderMonthRail();

function setCurrentMonthPill(key){
  track.querySelectorAll('.month-pill').forEach(p => p.classList.toggle('is-current', p.dataset.month === key));
}

track.addEventListener('click', (e)=>{
  const pill = e.target.closest('.month-pill');
  if (!pill || pill.disabled) return;
  const section = document.getElementById(`month-${pill.dataset.month}`);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// No custom drag-to-scroll here on purpose: a hand-rolled mousedown/pointer
// drag has to guess where a "click" ends and a "drag" begins, and on real
// trackpads that guess is wrong often enough that pills become unclickable.
// Two-finger trackpad swipes and touch already scroll this natively via
// overflow-x, so we only add a plain-mouse-wheel convenience on top —
// wheel events never compete with click at all.
track.addEventListener('wheel', (e)=>{
  if (e.deltaY === 0) return;
  track.scrollLeft += e.deltaY;
  e.preventDefault();
}, { passive: false });

const monthPrev = document.getElementById('month-prev');
const monthNext = document.getElementById('month-next');
const monthTrackWrap = document.querySelector('.month-rail-track-wrap');
monthPrev.addEventListener('click', ()=> track.scrollBy({ left: -240, behavior: 'smooth' }));
monthNext.addEventListener('click', ()=> track.scrollBy({ left: 240, behavior: 'smooth' }));

// Both arrows (and the fade behind the "later" one) only earn their place
// once there's actually more to scroll to in that direction — nothing to
// see at either end of the rail at rest.
function updateRailArrows(){
  const canScrollPrev = track.scrollLeft > 4;
  const canScrollNext = track.scrollLeft < track.scrollWidth - track.clientWidth - 4;
  monthPrev.classList.toggle('is-visible', canScrollPrev);
  monthNext.classList.toggle('is-visible', canScrollNext);
  monthTrackWrap.classList.toggle('has-more-right', canScrollNext);
}
track.addEventListener('scroll', updateRailArrows, { passive: true });
window.addEventListener('resize', updateRailArrows);
updateRailArrows();

// Scrollspy: highlight the month pill matching the section in view
const sections = () => Array.from(document.querySelectorAll('.month-section'));
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting){
      setCurrentMonthPill(entry.target.dataset.month);
      const pill = track.querySelector(`.month-pill[data-month="${entry.target.dataset.month}"]`);
      if (pill) pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

function observeSections(){ sections().forEach(s => spy.observe(s)); }

// --- Filters -----------------------------------------------------------
const filterRow = document.getElementById('filter-row');
const deviceSubrow = document.getElementById('device-subrow');
const devicesToggle = document.getElementById('devices-toggle');
const devicesCount = document.getElementById('devices-count');
let activeFilters = new Set();

function onChipClick(e){
  const chip = e.target.closest('.chip');
  if (!chip || chip === devicesToggle) return;
  const { filterType, filterValue } = chip.dataset;

  if (filterType === 'all'){
    activeFilters.clear();
  } else {
    const key = `${filterType}:${filterValue}`;
    if (activeFilters.has(key)) activeFilters.delete(key); else activeFilters.add(key);
  }
  updateFilterUI();
  applyFilters();
}
filterRow.addEventListener('click', onChipClick);
deviceSubrow.addEventListener('click', onChipClick);

// The "Devices" chip is a pure show/hide toggle for the sub-row beneath it —
// it never filters anything itself, the four chips it reveals do that.
devicesToggle.addEventListener('click', ()=>{
  const isOpen = deviceSubrow.hasAttribute('hidden') === false;
  if (isOpen){ deviceSubrow.setAttribute('hidden', ''); }
  else { deviceSubrow.removeAttribute('hidden'); }
  devicesToggle.setAttribute('aria-expanded', String(!isOpen));
});

function updateFilterUI(){
  const allChip = filterRow.querySelector('[data-filter-type="all"]');
  allChip.classList.toggle('is-active', activeFilters.size === 0);
  [...filterRow.querySelectorAll('.chip[data-filter-type]:not([data-filter-type="all"])'), ...deviceSubrow.querySelectorAll('.chip[data-filter-type]')].forEach(chip => {
    const key = `${chip.dataset.filterType}:${chip.dataset.filterValue}`;
    chip.classList.toggle('is-active', activeFilters.has(key));
  });

  const deviceCount = [...activeFilters].filter(f => f.startsWith('device:')).length;
  devicesToggle.classList.toggle('is-active', deviceCount > 0);
  devicesCount.style.display = deviceCount === 0 ? 'none' : 'inline-flex';
  devicesCount.textContent = deviceCount;
}

function applyFilters(){
  const deviceFilters = [...activeFilters].filter(f=>f.startsWith('device:')).map(f=>f.split(':')[1]);
  const platformFilters = [...activeFilters].filter(f=>f.startsWith('platform:')).map(f=>f.split(':')[1]);

  let totalVisible = 0;
  document.querySelectorAll('.card').forEach(card => {
    const devices = card.dataset.devices.split(',');
    const platforms = card.dataset.platforms.split(',');
    const deviceOk = deviceFilters.length === 0 || deviceFilters.some(d => devices.includes(d));
    const platformOk = platformFilters.length === 0 || platformFilters.some(p => platforms.includes(p));
    const visible = deviceOk && platformOk;
    card.style.display = visible ? '' : 'none';
    if (visible) totalVisible += 1;
  });

  document.querySelectorAll('.month-section').forEach(section => {
    const visibleCards = section.querySelectorAll('.card:not([style*="display: none"])');
    section.style.display = visibleCards.length === 0 ? 'none' : '';
  });

  let empty = document.getElementById('empty-state');
  if (totalVisible === 0){
    if (!empty){
      empty = document.createElement('div');
      empty.id = 'empty-state';
      empty.className = 'empty-state';
      empty.innerHTML = `
        <h3>No updates match those filters</h3>
        <p>Try a different device or platform combination.</p>
        <button class="btn btn-ghost" id="empty-state-reset">Clear filters</button>`;
      feedEl.after(empty);
      document.getElementById('empty-state-reset').addEventListener('click', ()=>{
        activeFilters.clear();
        updateFilterUI();
        applyFilters();
      });
    }
  } else if (empty){
    empty.remove();
  }
}

// --- Ticker (Dia-inspired masthead) -----------------------------------
function digitBoxes(str){
  return `<span class="ticker-digits">${[...str].map(ch => `<span>${ch}</span>`).join('')}</span>`;
}

function renderTicker(){
  const trackEl = document.getElementById('ticker-track');
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
  const latestVersion = (sorted[0].versions?.app || '').replace(/^\D*/, '') || '—';
  const issueNo = String(UPDATES.length).padStart(3, '0');

  const parts = [
    `${today}`,
    `<strong>What&#39;s new on Beeline</strong>`,
    `Update No. ${digitBoxes(issueNo)}`,
    `App v${digitBoxes(latestVersion)}`,
    `${UPDATES.length} shipped this cycle`,
  ];

  function copy(hidden){
    return parts.map(p => `<span class="ticker-item"${hidden ? ' aria-hidden="true"' : ''}>${p}<span class="rule">/</span></span>`).join('');
  }

  const PX_PER_SECOND = 55; // constant scroll speed regardless of content/viewport width

  // The loop only reads seamlessly if the track holds enough repeated
  // copies to out-run the widest viewport it'll be shown at — on a very
  // wide screen, two copies of a short ticker can be narrower than the
  // screen itself, so the animation "runs out" of content before it can
  // loop back around. We measure one copy's rendered width, then repeat
  // it as many times as needed to comfortably cover 2x the window width.
  trackEl.innerHTML = copy(false) + copy(true);
  const singleWidth = trackEl.children[parts.length].offsetLeft;
  const copiesNeeded = Math.max(2, Math.ceil((window.innerWidth * 2) / singleWidth));

  trackEl.innerHTML = Array.from({ length: copiesNeeded }, (_, i) => copy(i > 0)).join('');
  trackEl.style.setProperty('--ticker-shift', `${singleWidth}px`);
  trackEl.style.animationDuration = `${singleWidth / PX_PER_SECOND}s`;
}

window.addEventListener('resize', (()=>{
  let raf = null;
  return () => {
    if (raf) return;
    raf = requestAnimationFrame(()=>{ raf = null; renderTicker(); });
  };
})());

// --- Mobile nav toggle -----------------------------------------------
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
navToggle?.addEventListener('click', ()=> mobileNav.classList.toggle('is-open'));

// --- Init -----------------------------------------------------------
render();
renderTicker();
observeSections();
setCurrentMonthPill(monthsWithData[0]);
track.querySelector('.month-pill.is-current')?.scrollIntoView({ inline: 'start', block: 'nearest' });

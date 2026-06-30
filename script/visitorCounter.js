// ============================================================
//  LIVE VISITOR COUNTER  —  per-project-card view tracking
//  Backend: Abacus (https://abacus.jasoncameron.dev) — a free,
//  no-signup, key/value hit-counter API. Every device that opens
//  a card "hits" the same remote key, so the count is shared and
//  updates live across all visitors/devices — no server of your
//  own required.
// ============================================================

const VISITOR_API   = "https://abacus.jasoncameron.dev";
// Unique namespace so your counters never collide with anyone else's.
// Change this if you fork the project to get a fresh, separate set of counters.
const VISITOR_NS     = "yashtambade56-my-projects";
const VISITOR_REFRESH_MS = 30000; // poll for live updates every 30s

// In-memory cache: { [repoKey]: count }
const VISITOR_CACHE = {};

// Builds a safe, unique counter key for a repo (account + name).
function visitorKey(repo) {
  return `${repo.account}__${repo.name}`.toLowerCase().replace(/[^a-z0-9_\-.]/g, "-");
}

// Fetches (without incrementing) the current view count for a repo.
async function getVisitorCount(repo) {
  const key = visitorKey(repo);
  try {
    const res = await fetch(`${VISITOR_API}/get/${VISITOR_NS}/${key}`);
    if (!res.ok) return VISITOR_CACHE[key] ?? 0;
    const data = await res.json();
    VISITOR_CACHE[key] = data.value ?? 0;
    return VISITOR_CACHE[key];
  } catch {
    return VISITOR_CACHE[key] ?? 0;
  }
}

// Increments (records a new visit/view) for a repo and returns the new count.
async function hitVisitorCount(repo) {
  const key = visitorKey(repo);
  try {
    const res = await fetch(`${VISITOR_API}/hit/${VISITOR_NS}/${key}`);
    if (!res.ok) return VISITOR_CACHE[key] ?? 0;
    const data = await res.json();
    VISITOR_CACHE[key] = data.value ?? 0;
    return VISITOR_CACHE[key];
  } catch {
    return VISITOR_CACHE[key] ?? 0;
  }
}

// Writes a count value into every badge currently in the DOM for that repo.
function paintVisitorBadge(repo, count) {
  document.querySelectorAll(`[data-views-for="${visitorKey(repo)}"]`).forEach(el => {
    el.textContent = `👁 ${formatVisitorCount(count)}`;
  });
}

function formatVisitorCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

// Fetches live counts for a list of repos (e.g. the cards currently
// rendered) and paints them into the DOM as soon as each resolves.
function refreshVisitorBadges(repos) {
  repos.forEach(repo => {
    getVisitorCount(repo).then(count => paintVisitorBadge(repo, count));
  });
}

// Records a "view" once a card/modal is opened, then updates the badge
// everywhere it appears (card grid, pinned strip, modal) so all open
// tabs/devices converge on the same live number on next refresh.
function trackVisitorOpen(repo) {
  hitVisitorCount(repo).then(count => paintVisitorBadge(repo, count));
}

// Keep counts "live" across devices: every visitor's open tab polls the
// backend periodically and repaints, so a count someone else triggers on
// another device shows up here too without a page reload.
let _visitorPollTimer = null;
function startVisitorLivePolling() {
  if (_visitorPollTimer) clearInterval(_visitorPollTimer);
  _visitorPollTimer = setInterval(() => {
    if (typeof ALL_REPOS !== "undefined" && ALL_REPOS.length) {
      refreshVisitorBadges(ALL_REPOS);
    }
  }, VISITOR_REFRESH_MS);
}

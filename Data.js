// ============================================================
//  PORTFOLIO DATA  —  edit this file to update your info
//  Projects are fetched LIVE from GitHub automatically
// ============================================================

const PROFILE = {
  name:     "Yash Tambade",
  initials: "YT",
  title:    "Full Stack Developer",
  tagline:  "Building cool stuff with code.",
  avatar:   "",           
  socials: {
    githubMain:  "https://github.com/yashtambade56-ux",
    githubAlt:   "https://github.com/Yashhh710",
    linkedin:    "https://www.linkedin.com/in/yash-tambade-173508379",
    instagram:   "https://www.instagram.com/yashhh.710",
    email:       "yashtambade56@gmail.com"
  },
  // GitHub usernames to fetch repos from (both accounts merged)
  githubUsers: ["yashtambade56-ux", "Yashhh710"]
};

const SKILLS = [
  { label: "HTML5",            pct: 95 },
  { label: "CSS3",             pct: 90 },
  { label: "JavaScript",       pct: 85 },
  { label: "React.js",         pct: 75 },
  { label: "Python",           pct: 80 },
  { label: "C++",              pct: 70 },
  { label: "Git & GitHub",     pct: 85 },
  { label: "UI/UX Design",     pct: 75 },
  { label: "Drawing",          pct: 85 },
  { label: "Sketching",        pct: 90 },
  { label: "Problem Solving",  pct: 80 }
];


const CATEGORIES = [
  { key: "portfolios", label: "Portfolios",       icon: "💼" },
  { key: "web",        label: "Web Apps & Games", icon: "⚙️" },
  { key: "Class Work", label: "Class Work",       icon: "📚" },
  { key: "beginner",   label: "beginner",         icon: "🔰" },
  { key: "prototypes", label: "Prototypes",       icon: "🎨" },
  { key: "projects",   label: "Projects",         icon: "🏗️" },
  { key: "demos",      label: "Demos",            icon: "🧪" },
  { key: "hackathons", label: "Hackathons",       icon: "🏆" },
  { key: "other",      label: "Other",            icon: "📦" }
];


// Language → accent colour
const LANG_COLOR = {
  "JavaScript":       "#f7df1e",
  "TypeScript":       "#3178c6",
  "Python":           "#3572a5",
  "HTML":             "#e34c26",
  "CSS":              "#563d7c",
  "Dart":             "#00b4ab",
  "Swift":            "#f05138",
  "Kotlin":           "#a97bff",
  "Shell":            "#89e051",
  "Go":               "#00add8",
  "Rust":             "#dea584",
  "C":                "#555555",
  "C++":              "#f34b7d",
  "Jupyter Notebook": "#da5b0b",
  "Dockerfile":       "#384d54",
};

// Language → dark card bg
const LANG_BG = {
  "JavaScript":       "#1a1a00",
  "TypeScript":       "#0a0e1a",
  "Python":           "#0a0e1a",
  "HTML":             "#1a0a00",
  "CSS":              "#0e0a1a",
  "Dart":             "#001a1a",
  "Swift":            "#1a0a00",
  "Kotlin":           "#0e0a1a",
  "Shell":            "#0a1a00",
  "Go":               "#001a1a",
  "Rust":             "#1a0e00",
  "Jupyter Notebook": "#1a0800",
};


// Each entry can now also carry:
//   account : which GitHub username the repo lives under (used for the
//             fallback card grid + to build the source-code link)
//   live    : live demo / deployed URL (Live Demo button)
//   source  : source code URL — leave blank to auto-build from
//             https://github.com/{account}/{repoName}
// These "live" + "source" values are ONLY used as a fallback when the
// live GitHub API fetch fails (e.g. rate limit). When the API call
// succeeds, "live" comes from the repo's real GitHub homepage field and
// "source" from the repo's real GitHub URL, same as before.
const REPO_OVERRIDES = {
// ====== yashtambade56-ux: { img: "", category: "web" } =======
"GameBox-Scratch-Mini-Game-Collection": { img: "imgs/GameBox-Scratch-Mini-Game-Collection.png", category: "other", account: "yashtambade56-ux", live: "", source: "" },
"MathBlaze-Dragon-Strike": { img: "imgs/mathblaze.png", category: ["other","projects"], account: "yashtambade56-ux", live: "", source: "" },
"python": { img: "imgs/python.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"axon-ev-project": { img: "imgs/axon-ev-project.png", category: ["web","projects"], account: "yashtambade56-ux", live: "", source: "" },
"cpp-practice": { img: "imgs/cpp-practice.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"javascript-progress": { img: "imgs/javascript-progress.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"html-css": { img: "imgs/html-css.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"Data-Structures-and-Algorithm-1-Cpp": { img: "imgs/Data-Structures-and-Algorithm-1-Cpp.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"yashtambade56-ux": { img: "imgs/yashtambade56-ux.png", category: "other", account: "yashtambade56-ux", live: "", source: "" },
"React-js": { img: "imgs/React-js.png", category: "Class Work", account: "yashtambade56-ux", live: "", source: "" },
"My-Projects": { img: "imgs/My-Projects.png", category: "web", account: "yashtambade56-ux", live: "", source: "" },

// ========== Yashhh710: { img: "", category: "web" } ==========
"graphic-design": { img: "imgs/graficsdesing.png", category: "other", account: "Yashhh710", live: "", source: "" },
"20-tasks": { img: "imgs/20task.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"Makar-Sankranti-Website": { img: "imgs/makarsnkarnti.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"Photography-Application": { img: "imgs/photografy.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"Travel-Destinations-Explorer": { img: "imgs/travel-destinetion-exproler.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"Responsive-Offline-Discovery": { img: "imgs/reaponsive-expreiment.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"SVG-Animation-Gallery": { img: "imgs/Svg-animetion.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"My-Website": { img: "imgs/my-website.png", category: ["beginner","portfolios"], account: "Yashhh710", live: "", source: "" },
"my-Location": { img: "imgs/my-locetion.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"css-post2025-examples": { img: "imgs/css-post2025-examples.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"pokedex": { img: "imgs/pokedex.png", category: "web", account: "Yashhh710", live: "", source: "" },
"porshe": { img: "imgs/porshe.png", category: "web", account: "Yashhh710", live: "", source: "" },
"Frontend-Master": { img: "imgs/Frontend-Master.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"Yashhh710": { img: "imgs/Yashhh710.png", category: "other", account: "Yashhh710", live: "", source: "" },
"tic-tac-toe-html-css": { img: "imgs/tic-tac-toe-html-css.png", category: "web", account: "Yashhh710", live: "", source: "" },
"reaction-speed-test": { img: "imgs/reaction-speed-test.png", category: "web", account: "Yashhh710", live: "", source: "" },
"demo-portfolio": { img: "imgs/demo-portfolio.png", category: "web", account: "Yashhh710", live: "", source: "" },
"FoodieExpress": { img: "imgs/FoodieExpress.png", category: "web", account: "Yashhh710", live: "", source: "" },
"gta-6": { img: "imgs/gta-6.png", category: "web", account: "Yashhh710", live: "", source: "" },
"axon-ai": { img: "imgs/axon-ai.png", category: "web", account: "Yashhh710", live: "", source: "" },
"HackX": { img: "imgs/HackX.png", category: "demos", account: "Yashhh710", live: "", source: "" },
"How-I-Build-Webs": { img: "imgs/How-I-Build-Webs.png", category: "web", account: "Yashhh710", live: "", source: "" },
"ATMOS-WEATHER-WEB": { img: "imgs/ATMOS-WEATHER-WEB.png", category: "web", account: "Yashhh710", live: "", source: "" },
"Exploring-JS-Lib-s": { img: "imgs/Exploring-JS-Lib-s.png", category: "beginner", account: "Yashhh710", live: "", source: "" },
"hack-demo": { img: "imgs/hack-demo.png", category: "demos", account: "Yashhh710", live: "", source: "" },
"AxonPrompt": { img: "imgs/AxonPrompt.png", category: "web", account: "Yashhh710", live: "", source: "" },
"Dev-flash-cards": { img: "imgs/Dev-flash-cards.png", category: ["web","projects"], account: "Yashhh710", live: "", source: "" },
"Html-csss-mini-project": { img: "imgs/Html-csss-mini-project.png", category: ["web","projects"], account: "Yashhh710", live: "", source: "" },
"MindScreen": { img: "imgs/MindScreen.png", category: "hackathons", account: "Yashhh710", live: "", source: "" },
"Needle-Noise": { img: "imgs/Needle-Noise.png", category: "web", account: "Yashhh710", live: "", source: "" },
"Mac": { img: "imgs/Mac.png", category: "portfolios", pinned: true, account: "Yashhh710", live: "", source: "" },
"my-skiills": { img: "imgs/my-skiills.png", category: "web", account: "Yashhh710", live: "", source: "" },
"home-port-v1": { img: "imgs/home-port-v1.png", category: "web", account: "Yashhh710", live: "", source: "" },
"My-Portfolio-Hub": { img: "imgs/My-Portfolio-Hub.png", category: "web", account: "Yashhh710", live: "", source: "" },
"map-port-v1": { img: "imgs/map-port-v1.png", category: "portfolios", account: "Yashhh710", live: "", source: "" },
"Portfolio_v1": { img: "imgs/Portfolio_v1.png", category: "portfolios", account: "Yashhh710", live: "", source: "" },
"Portfolio-v4": { img: "imgs/Portfolio-v4.png", category: "portfolios", account: "Yashhh710", live: "", source: "" },
"digital-trade-proto": { img: "imgs/digital-trade-proto.png", category: "prototypes", account: "Yashhh710", live: "", source: "" },
"Flavoria-proto": { img: "imgs/Flavoria-proto.png", category: "prototypes", account: "Yashhh710", live: "", source: "" },
"BMW-m4-Comp-Proto": { img: "imgs/BMW-m4-Comp-Proto.png", category: "prototypes", account: "Yashhh710", live: "", source: "" },
"Krishna-Divine-Journey-Landing-Page-Proto": { img: "imgs/Krishna-Divine-Journey-Landing-Page-Proto.png", category: "prototypes", account: "Yashhh710", live: "", source: "" },
"test-quiz": { img: "imgs/test-quiz.png", category: "demos", account: "Yashhh710", live: "", source: "" },
"QuizBlast.Co": { img: "imgs/QuizBlast.Co.png", category: "web", account: "Yashhh710", live: "", source: "" },
"Portfolio": { img: "imgs/Portfolio.png", category: "portfolios", account: "Yashhh710", live: "", source: "" },
"Vehicle-Fleet-Management-System-": { img: "imgs/Vehicle-Fleet-Management-System-.png", category:"projects", account: "Yashhh710", live: "", source: "" },
"EduGrid-Central": { img: "imgs/EduGrid-Central.png", category: ["web","projects"], account: "Yashhh710", live: "", source: "" },
"yash.portfolio.professional-": { img: "imgs/yash.portfolio.professional-.png", category: "portfolios", pinned: true, account: "Yashhh710", live: "", source: "" },
"spotify.clone": { img: "imgs/spotify.clone.png", category: "web", account: "Yashhh710", live: "", source: "" },
"pokedex-v2": { img: "imgs/pokedex-v2.png", category: "web", account: "Yashhh710", live: "", source: "" },
};

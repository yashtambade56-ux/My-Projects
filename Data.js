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


const REPO_OVERRIDES = {
// ====== yashtambade56-ux: { img: "", category: "web" } =======
"GameBox-Scratch-Mini-Game-Collection": { img: "imgs/GameBox-Scratch-Mini-Game-Collection.png", category: "other" },
"MathBlaze-Dragon-Strike": { img: "imgs/mathblaze.png", category: ["other","projects"] },
"python": { img: "imgs/python.png", category: "Class Work" },
"axon-ev-project": { img: "imgs/axon-ev-project.png", category: ["web","projects"] },
"cpp-practice": { img: "imgs/cpp-practice.png", category: "Class Work" },
"javascript-progress": { img: "imgs/javascript-progress.png", category: "Class Work" },
"html-css": { img: "imgs/html-css.png", category: "Class Work" },
"Data-Structures-and-Algorithm-1-Cpp": { img: "imgs/Data-Structures-and-Algorithm-1-Cpp.png", category: "Class Work" },
"yashtambade56-ux": { img: "imgs/yashtambade56-ux.png", category: "other" },
"React-js": { img: "imgs/React-js.png", category: "Class Work" },
"My-Projects": { img: "imgs/My-Projects.png", category: "web" },
    
// ========== Yashhh710: { img: "", category: "web" } ==========
"graphic-design": { img: "imgs/graficsdesing.png", category: "other" },
"20-tasks": { img: "imgs/20task.png", category: "beginner" },
"Makar-Sankranti-Website": { img: "imgs/makarsnkarnti.png", category: "beginner" },
"Photography-Application": { img: "imgs/photografy.png", category: "beginner" },
"Travel-Destinations-Explorer": { img: "imgs/travel-destinetion-exproler.png", category: "beginner" },
"Responsive-Offline-Discovery": { img: "imgs/reaponsive-expreiment.png", category: "beginner" },
"SVG-Animation-Gallery": { img: "imgs/Svg-animetion.png", category: "beginner" },
"My-Website": { img: "imgs/my-website.png", category: ["beginner","portfolios"] },
"my-Location": { img: "imgs/my-locetion.png", category: "beginner" },
"css-post2025-examples": { img: "imgs/css-post2025-examples.png", category: "beginner" },
"pokedex": { img: "imgs/pokedex.png", category: "web" },
"porshe": { img: "imgs/porshe.png", category: "web" },
"Frontend-Master": { img: "imgs/frontend-master.png", category: "beginner" },
"Yashhh710": { img: "imgs/yashhh710.png", category: "other" },
"axon-ev-project": { img: "imgs/axon-ev-project.png", category: ["web","projects"] },
"tic-tac-toe-html-css": { img: "imgs/tic-tac-toe-html-css.png", category: "web" },
"reaction-speed-test": { img: "imgs/reaction-speed-test.png", category: "web" },
"demo-portfolio": { img: "imgs/demo-portfolio.png", category: "web" },
"FoodieExpress": { img: "imgs/FoodieExpress.png", category: "web" },
"gta-6": { img: "imgs/gta-6.png", category: "web" },
"axon-ai": { img: "imgs/axon-ai.png", category: "web" },
"HackX": { img: "imgs/HackX.png", category: "demos" },
"How-I-Build-Webs": { img: "imgs/How-I-Build-Webs.png", category: "web" },
"ATMOS-WEATHER-WEB": { img: "imgs/ATMOS-WEATHER-WEB.png", category: "web" },
"Exploring-JS-Lib-s": { img: "imgs/Exploring-JS-Lib-s.png", category: "beginner" },
"hack-demo": { img: "imgs/hack-demo.png", category: "demos" },
"AxonPrompt": { img: "imgs/AxonPrompt.png", category: "web" },
"Dev-flash-cards": { img: "imgs/Dev-flash-cards.png", category: ["web","projects"] },
"Html-csss-mini-project": { img: "imgs/Html-csss-mini-project.png", category: ["web","projects"] },
"html-css": { img: "imgs/html-css.png", category: "Class Work" },
"MindScreen": { img: "imgs/MindScreen.png", category: "hackathons" },
"Needle-Noise": { img: "imgs/Needle-Noise.png", category: "web" },
"Mac": { img: "imgs/Mac.png", category: "portfolios", pinned: true },
"my-skiills": { img: "imgs/my-skiills.png", category: "web" },
"home-port-v1": { img: "imgs/home-port-v1.png", category: "web" },
"My-Portfolio-Hub": { img: "imgs/My-Portfolio-Hub.png", category: "web" },
"map-port-v1": { img: "imgs/map-port-v1.png", category: "portfolios" },
"Portfolio_v1": { img: "imgs/Portfolio_v1.png", category: "portfolios" },
"Portfolio-v4": { img: "imgs/Portfolio-v4.png", category: "portfolios" },
"digital-trade-proto": { img: "imgs/digital-trade-proto.png", category: "prototypes" },
"Flavoria-proto": { img: "imgs/Flavoria-proto.png", category: "prototypes" },
"BMW-m4-Comp-Proto": { img: "imgs/BMW-m4-Comp-Proto.png", category: "prototypes" },
"Krishna-Divine-Journey-Landing-Page-Proto": { img: "imgs/Krishna-Divine-Journey-Landing-Page-Proto.png", category: "prototypes" },
"test-quiz": { img: "imgs/test-quiz.png", category: "demos" },
"QuizBlast.Co": { img: "imgs/QuizBlast.Co.png", category: "web" },
"Portfolio": { img: "imgs/Portfolio.png", category: "portfolios" },
"Vehicle-Fleet-Management-System-": { img: "imgs/Vehicle-Fleet-Management-System-.png", category:"projects" },
"EduGrid-Central": { img: "imgs/EduGrid-Central.png", category: ["web","projects"] },
"yash.portfolio.professional-": { img: "imgs/yash.portfolio.professional-.png", category: "portfolios", pinned: true },
};
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


// ========== GitHub Rrepo's ==========
"GameBox-Scratch-Mini-Game-Collection": { img: "imgs/GameBox-Scratch-Mini-Game-Collection.png", category: "other", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/GameBox-Scratch-Mini-Game-Collection" },
"MathBlaze-Dragon-Strike": { img: "imgs/mathblaze.png", category: ["other","projects"], account: "yashtambade56-ux", live: "https://scratch.mit.edu/projects/1257806716/fullscreen/", source: "https://github.com/yashtambade56-ux/MathBlaze-Dragon-Strike" },
"python": { img: "imgs/python.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/python" },
"graphic-design": { img: "imgs/graficsdesing.png", category: "other", account: "Yashhh710", source: "https://github.com/Yashhh710/graphic-design" },
"20-tasks": { img: "imgs/20task.png", category: ["beginner","web"] , account: "Yashhh710", live: "https://yashhh710.github.io/20-tasks/", source: "https://github.com/Yashhh710/20-tasks" },
"Makar-Sankranti-Website": { img: "imgs/makarsnkarnti.png", category: ["beginner","web"] , account: "Yashhh710", live: "https://yashhh710.github.io/Makar-Sankranti-Website/", source: "https://github.com/Yashhh710/Makar-Sankranti-Website" },
"Photography-Application": { img: "imgs/photografy.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Photography-Application/", source: "https://github.com/Yashhh710/Photography-Application" },
"Travel-Destinations-Explorer": { img: "imgs/travel-destinetion-exproler.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Travel-Destinations-Explorer/", source: "https://github.com/Yashhh710/Travel-Destinations-Explorer" },
"Responsive-Offline-Discovery": { img: "imgs/reaponsive-expreiment.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Responsive-Offline-Discovery/", source: "https://github.com/Yashhh710/Responsive-Offline-Discovery" },
"SVG-Animation-Gallery": { img: "imgs/Svg-animetion.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/SVG-Animation-Gallery/", source: "https://github.com/Yashhh710/SVG-Animation-Gallery" },
"My-Website": { img: "imgs/my-website.png", category: ["beginner","portfolios","web"], account: "Yashhh710", live: "https://yashhh710.github.io/My-Website/index.html", source: "https://github.com/Yashhh710/My-Website" },
"my-Location": { img: "imgs/my-locetion.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/my-Location/", source: "https://github.com/Yashhh710/my-Location" },
"pokedex": { img: "imgs/pokedex.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/pokedex/", source: "https://github.com/Yashhh710/pokedex" },
"porshe": { img: "imgs/porshe.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/porshe/", source: "https://github.com/Yashhh710/porshe" },
"Frontend-Master": { img: "imgs/Frontend-Master.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Frontend-Master/", source: "https://github.com/Yashhh710/Frontend-Master" },
"Yashhh710": { img: "imgs/Yashhh710.png", category: ["other","web"], account: "Yashhh710", source: "https://github.com/Yashhh710/Yashhh710" },
"tic-tac-toe-html-css": { img: "imgs/tic-tac-toe-html-css.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/tic-tac-toe-html-css/index.html", source: "https://github.com/Yashhh710/tic-tac-toe-html-css" },
"reaction-speed-test": { img: "imgs/reaction-speed-test.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/reaction-speed-test/", source: "https://github.com/Yashhh710/reaction-speed-test" },
"demo-portfolio": { img: "imgs/demo-portfolio.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/demo-portfolio/", source: "https://github.com/Yashhh710/demo-portfolio" },
"FoodieExpress": { img: "imgs/FoodieExpress.png", category: "web", account: "Yashhh710", live: "https://foodie-express-ten-topaz.vercel.app/", source: "https://github.com/Yashhh710/FoodieExpress" },
"gta-6": { img: "imgs/gta-6.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/gta-6/", source: "https://github.com/Yashhh710/gta-6" },
"axon-ev-project": { img: "imgs/axon-ev-project.png", category: ["web","projects"], account: "yashtambade56-ux", live: "https://axonev.vercel.app/", source: "https://github.com/yashtambade56-ux/axon-ev-project" },
"axon-ai": { img: "imgs/axon-ai.png", category: "web", account: "Yashhh710", live: "https://axon-ai-nine.vercel.app/", source: "https://github.com/Yashhh710/axon-ai" },
"HackX": { img: "imgs/HackX.png", category: "demos", account: "Yashhh710", live: "https://yashhh710.github.io/HackX/Loading.html", source: "https://github.com/Yashhh710/HackX" },
"How-I-Build-Webs": { img: "imgs/How-I-Build-Webs.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/How-I-Build-Webs/", source: "https://github.com/Yashhh710/How-I-Build-Webs" },
"ATMOS-WEATHER-WEB": { img: "imgs/ATMOS-WEATHER-WEB.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/ATMOS-WEATHER-WEB/", source: "https://github.com/Yashhh710/ATMOS-WEATHER-WEB" },
"Exploring-JS-Lib-s": { img: "imgs/Exploring-JS-Lib-s.png", category: ["beginner","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Exploring-JS-Lib-s/", source: "https://github.com/Yashhh710/Exploring-JS-Lib-s" },
"hack-demo": { img: "imgs/hack-demo.png", category: ["demos","web"], account: "Yashhh710", live: "https://yashhh710.github.io/hack-demo/", source: "https://github.com/Yashhh710/hack-demo" },
"AxonPrompt": { img: "imgs/AxonPrompt.png", category: "web", account: "Yashhh710", live: "https://axon-prompt.vercel.app/", source: "https://github.com/Yashhh710/AxonPrompt" },
"Dev-flash-cards": { img: "imgs/Dev-flash-cards.png", category: ["web","projects"], account: "Yashhh710", live: "https://dev-flash-cards-phi.vercel.app/", source: "https://github.com/Yashhh710/Dev-flash-cards" },
"cpp-practice": { img: "imgs/cpp-practice.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/cpp-practice" },
"javascript-progress": { img: "imgs/javascript-progress.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/javascript-progress" },
"Html-csss-mini-project": { img: "imgs/Html-csss-mini-project.png", category: ["web","projects"], account: "Yashhh710", live: "https://yashhh710.github.io/Html-csss-mini-project/", source: "https://github.com/Yashhh710/Html-csss-mini-project" },
"html-css": { img: "imgs/html-css.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/html-css" },
"MindScreen": { img: "imgs/MindScreen.png", category: ["hackathons","web"], account: "Yashhh710", live: "https://mind-screen.vercel.app/", source: "https://github.com/Yashhh710/MindScreen" },
"Needle-Noise": { img: "imgs/Needle-Noise.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/Needle-Noise/", source: "https://github.com/Yashhh710/Needle-Noise" },
"Mac": { img: "imgs/Mac.png", category: ["portfolios","web"], pinned: true, account: "Yashhh710", live: "https://mac-lyart.vercel.app/", source: "https://github.com/Yashhh710/Mac" },
"my-skiills": { img: "imgs/my-skiills.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/my-skiills/", source: "https://github.com/Yashhh710/my-skiills" },
"home-port-v1": { img: "imgs/home-port-v1.png", category: "web", account: "Yashhh710", live: "https://home-port-v1.vercel.app/", source: "https://github.com/Yashhh710/home-port-v1" },
"My-Portfolio-Hub": { img: "imgs/My-Portfolio-Hub.png", category: "web", account: "Yashhh710", live: "https://my-portfolio-hub-ten.vercel.app/", source: "https://github.com/Yashhh710/My-Portfolio-Hub" },
"Data-Structures-and-Algorithm-1-Cpp": { img: "imgs/Data-Structures-and-Algorithm-1-Cpp.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/Data-Structures-and-Algorithm-1-Cpp" },
"map-port-v1": { img: "imgs/map-port-v1.png", category: ["portfolios","web"], account: "Yashhh710", live: "https://map-port-v1.vercel.app/", source: "https://github.com/Yashhh710/map-port-v1" },
"Portfolio_v1": { img: "imgs/Portfolio_v1.png", category: ["portfolios","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Portfolio_v1/", source: "https://github.com/Yashhh710/Portfolio_v1" },
"Portfolio-v4": { img: "imgs/Portfolio-v4.png", category: ["portfolios","web"], account: "Yashhh710", live: "https://portfolio-v4-three-mauve.vercel.app/", source: "https://github.com/Yashhh710/Portfolio-v4" },
"React-js": { img: "imgs/React-js.png", category: "Class Work", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/React-js" },
"digital-trade-proto": { img: "imgs/digital-trade-proto.png", category: ["prototypes","web"], account: "Yashhh710", live: "https://yashhh710.github.io/digital-trade-proto/", source: "https://github.com/Yashhh710/digital-trade-proto" },
"Flavoria-proto": { img: "imgs/Flavoria-proto.png", category: ["prototypes","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Flavoria-proto/", source: "https://github.com/Yashhh710/Flavoria-proto" },
"BMW-m4-Comp-Proto": { img: "imgs/BMW-m4-Comp-Proto.png", category: ["prototypes","web"], account: "Yashhh710", live: "https://yashhh710.github.io/BMW-m4-Comp-Proto/", source: "https://github.com/Yashhh710/BMW-m4-Comp-Proto" },
"Krishna-Divine-Journey-Landing-Page-Proto": { img: "imgs/Krishna-Divine-Journey-Landing-Page-Proto.png", category: ["prototypes","web"], account: "Yashhh710", live: "https://yashhh710.github.io/Krishna-Divine-Journey-Landing-Page-Proto/", source: "https://github.com/Yashhh710/Krishna-Divine-Journey-Landing-Page-Proto" },
"test-quiz": { img: "imgs/test-quiz.png", category: ["demos","web"], account: "Yashhh710", live: "https://yashhh710.github.io/test-quiz/", source: "https://github.com/Yashhh710/test-quiz" },
"QuizBlast.Co": { img: "imgs/QuizBlast.Co.png", category: ["web","projects"], account: "Yashhh710", live: "https://quiz-blast-co.vercel.app/", source: "https://github.com/Yashhh710/QuizBlast.Co" },
"Portfolio": { img: "imgs/Portfolio.png", category: ["portfolios","web"], account: "Yashhh710", live: "https://yashfolio-v1.vercel.app/", source: "https://github.com/Yashhh710/Portfolio" },
"Vehicle-Fleet-Management-System-": { img: "imgs/Vehicle-Fleet-Management-System-.png", category:["web","projects"], account: "Yashhh710", source: "https://github.com/Yashhh710/Vehicle-Fleet-Management-System-" },
"EduGrid-Central": { img: "imgs/EduGrid-Central.png", category: ["web","projects"], account: "Yashhh710", live: "https://edu-grid-co.vercel.app/", source: "https://github.com/Yashhh710/EduGrid-Central" },
"yashtambade56-ux": { img: "imgs/yashtambade56-ux.png", category: "other", account: "yashtambade56-ux", source: "https://github.com/yashtambade56-ux/yashtambade56-ux" },
"yash.portfolio.professional-": { img: "imgs/yash.portfolio.professional-.png", category: ["portfolios","web"], pinned: true, account: "Yashhh710", live: "https://yash-portfolio-professional.vercel.app/", source: "https://github.com/Yashhh710/yash.portfolio.professional-" },
"spotify.clone": { img: "imgs/spotify.clone.png", category: "web", account: "Yashhh710", live: "https://spotify-clone-yt710.vercel.app/", source: "https://github.com/Yashhh710/spotify.clone" },
"pokedex-v2": { img: "imgs/pokedex-v2.png", category: "web", account: "Yashhh710", live: "https://yashhh710.github.io/pokedex-v2/", source: "https://github.com/Yashhh710/pokedex-v2" },
"My-Projects": { img: "imgs/My-Projects.png", category: "web", account: "yashtambade56-ux", live: "https://myprojects-yash.vercel.app/", source: "https://github.com/yashtambade56-ux/My-Projects" },
};

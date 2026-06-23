const fs = require('fs');

// Load tokens from .env file
const envPath = '.env';
const env = fs.existsSync(envPath)
  ? Object.fromEntries(
      fs.readFileSync(envPath, 'utf8')
        .split('\n')
        .filter(l => l.trim() && !l.startsWith('#'))
        .map(l => l.split('=').map(s => s.trim()))
    )
  : {};

const GH_TOKEN_1 = env.GITHUB_TOKEN_1 || '';
const GH_TOKEN_2 = env.GITHUB_TOKEN_2 || '';

if (!GH_TOKEN_1 || !GH_TOKEN_2) {
  console.warn('⚠️  No tokens found in .env — using unauthenticated (60 req/hr limit)');
}

async function main() {
  try {
    const dataJs = fs.readFileSync('Data.js', 'utf8');

    const [res1, res2] = await Promise.all([
      fetch('https://api.github.com/users/Yashhh710/repos?per_page=100', {
        headers: GH_TOKEN_1 ? { Authorization: 'token ' + GH_TOKEN_1 } : {}
      }),
      fetch('https://api.github.com/users/yashtambade56-ux/repos?per_page=100', {
        headers: GH_TOKEN_2 ? { Authorization: 'token ' + GH_TOKEN_2 } : {}
      })
    ]);

    if (!res1.ok) throw new Error(`Yashhh710 fetch failed: ${res1.status}`);
    if (!res2.ok) throw new Error(`yashtambade56-ux fetch failed: ${res2.status}`);

    const d1 = await res1.json();
    const d2 = await res2.json();

    const allRepos = [...d1, ...d2].map(r => ({ name: r.name, owner: r.owner.login }));
    console.log('Total repos fetched:', allRepos.length);

    const missing = allRepos.filter(r => !dataJs.includes(`"${r.name}": {`));
    console.log('Missing repos count:', missing.length);
    console.log(JSON.stringify(missing, null, 2));

    let newEntries = '';
    for (const r of missing) {
      newEntries += `"${r.name}": { img: "imgs/${r.name}.png", category: "web" },\n`;
    }

    fs.writeFileSync('missing.txt', newEntries);
    console.log('Done! Check missing.txt');
  } catch (err) {
    console.error('Error:', err.message);
  }
}
main();
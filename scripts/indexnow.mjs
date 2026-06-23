// IndexNow — notifie Bing, Yandex, Naver (et donc Copilot) des URLs à (re)crawler.
// Lit les URLs depuis le sitemap en production et les soumet en une requête.
//
// Usage :
//   node scripts/indexnow.mjs                      → soumet tout le sitemap
//   node scripts/indexnow.mjs /dj-mariage/ploermel /blog/...   → soumet des URLs précises
//
// IndexNow ne concerne PAS Google (qui ignore le protocole) mais accélère
// l'indexation sur Bing / Microsoft Copilot. Pour Google : « Demander
// l'indexation » dans Search Console.

const HOST = 'www.mg-events35.com';
const KEY = '21c02a9ecba71b4b2f8f639dd0a90e16';
const BASE = `https://${HOST}`;
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

async function urlsFromSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml inaccessible (HTTP ${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((u) => (u.startsWith('http') ? u : `${BASE}${u.startsWith('/') ? '' : '/'}${u}`))
    : await urlsFromSitemap();

  if (!urlList.length) {
    console.error('Aucune URL à soumettre.');
    process.exit(1);
  }

  console.log(`Soumission de ${urlList.length} URL(s) à IndexNow…`);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // 200 ou 202 = succès. IndexNow renvoie souvent un corps vide.
  if (res.ok) {
    console.log(`✓ IndexNow OK (HTTP ${res.status}) — ${urlList.length} URL(s) soumises.`);
  } else {
    const body = await res.text();
    console.error(`✗ IndexNow a répondu HTTP ${res.status}\n${body}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});

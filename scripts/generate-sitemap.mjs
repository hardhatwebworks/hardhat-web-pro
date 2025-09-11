import { writeFileSync, mkdirSync } from 'fs';

const today = new Date().toISOString().slice(0,10);

const urls = [
  { loc: 'https://hardhatwebworks.com/', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://hardhatwebworks.com/services', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://hardhatwebworks.com/pricing', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://hardhatwebworks.com/about', changefreq: 'monthly', priority: '0.7' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('') +
`
</urlset>`;

mkdirSync('public', { recursive: true });
writeFileSync('public/sitemap.xml', xml);
console.log(`Generated sitemap.xml with date: ${today}`);
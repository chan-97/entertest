import fs from "fs"

const generateSitemap = () => {
  const date = new Date().toISOString().slice(0, 10);
  
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://idoltest.com/</loc>
    <lastmod>${date}</lastmod>
  </url>
</urlset>`
}

fs.writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>${generateSitemap()}`);
console.log("generate sitemap");
import fs from "fs";

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

fs.writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>${generateSitemap()}`, (writeFileError) => {
  if (writeFileError) {
    console.log('writeFileError: ', writeFileError);
  } else {
    console.log("generate sitemap");
    fs.readFile('public/sitemap.xml', 'utf8', (readFileError, data) => {
      if (readFileError) {
        console.log("readFileError: ", readFileError)
        return;
      }
      console.log(data);
    });
  }
});
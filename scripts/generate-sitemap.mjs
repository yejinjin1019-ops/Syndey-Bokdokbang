// Writes public/sitemap.xml from SITEMAP_PATHS in src/lib/seo.js (the same
// list the prerender step uses). Runs automatically before `npm run build`.
import { writeFileSync } from "node:fs";
import { SITE_URL, SITEMAP_PATHS } from "../src/lib/seo.js";

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_PATHS.map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${SITEMAP_PATHS.length} URLs`);

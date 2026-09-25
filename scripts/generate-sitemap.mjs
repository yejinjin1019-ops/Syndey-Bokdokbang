// Writes public/sitemap.xml from the routes in App.jsx plus every listing,
// development and guide in src/data. Runs automatically before `npm run build`.
import { writeFileSync } from "node:fs";
import { BUY_LISTINGS } from "../src/data/buyListings.js";
import { RENT_LISTINGS } from "../src/data/rentListings.js";
import { DEVELOPMENTS } from "../src/data/developments.js";
import { GUIDES } from "../src/data/guides.js";

const SITE_URL = "https://www.sydneybokdokbang.com";

const STATIC_PATHS = [
  "/",
  "/properties",
  "/buy",
  "/rent",
  "/new-developments",
  "/appraisal",
  "/services",
  "/services/property-advisory",
  "/services/settlement-care",
  "/services/leasing-care",
  "/services/move-in-care",
  "/services/property-management",
  "/about",
  "/contact",
  "/guides",
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/disclaimer",
  "/legal/licence",
];

const paths = [
  ...STATIC_PATHS,
  ...[...BUY_LISTINGS, ...RENT_LISTINGS].map((p) => `/property/${p.id}`),
  ...DEVELOPMENTS.map((d) => `/new-developments/${d.id}`),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${paths.length} URLs`);

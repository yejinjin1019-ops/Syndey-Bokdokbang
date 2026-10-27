// Runs after `vite build` and the SSR build of src/entry-server.jsx: renders
// every route in PRERENDER_PATHS to its own HTML file (dist/about.html,
// dist/services/settlement-care.html, ...) with that page's title,
// description, Open Graph tags and canonical link, so search engines get real
// content instead of an empty <div id="root">. vercel.json's cleanUrls serves
// them at /about etc.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const distUrl = new URL("../dist/", import.meta.url);
const serverEntry = new URL("../dist-server/entry-server.js", import.meta.url);
const { render, PRERENDER_PATHS, SITE_URL, getPageMeta } = await import(serverEntry);

const template = readFileSync(new URL("index.html", distUrl), "utf8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// The replacer is a function so "$" in prices etc. is never read as a
// replacement pattern.
function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in dist/index.html`);
  return html.replace(pattern, () => replacement);
}

for (const path of PRERENDER_PATHS) {
  const { title, description } = getPageMeta(path);
  const url = `${SITE_URL}${path}`;
  const appHtml = render(path);

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escapeText(title)}</title>`, "<title>");
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(description)}" />`, "meta description");
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(title)}" />`, "og:title");
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(description)}" />`, "og:description");
  html = replaceOnce(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />\n    <link rel="canonical" href="${url}" />`,
    "og:url"
  );
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${appHtml}</div>`, "#root");

  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  const out = fileURLToPath(new URL(file, distUrl));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

rmSync(new URL("../dist-server/", import.meta.url), { recursive: true, force: true });
console.log(`prerendered ${PRERENDER_PATHS.length} pages`);

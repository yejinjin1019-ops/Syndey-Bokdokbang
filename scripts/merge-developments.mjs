import fs from "node:fs";

const scratch = "C:\\Users\\WIN10\\AppData\\Local\\Temp\\claude\\C--Users-WIN10-OneDrive-Desktop-Bokdokbang-website-Syndey-Bokdokbang\\9183ddba-23b4-4d56-b844-ed11eb54f0dc\\scratchpad";
const files = [
  "dev-billbergia.json",
  "dev-boston-a.json",
  "dev-boston-b.json",
  "dev-boston-c.json",
  "dev-boston-d.json",
  "dev-boston-e.json",
];

let all = [];
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(`${scratch}\\${f}`, "utf-8"));
  all = all.concat(arr);
}

// sanity checks
const ids = new Set();
for (const d of all) {
  if (ids.has(d.id)) throw new Error(`Duplicate id: ${d.id}`);
  ids.add(d.id);
  for (const img of [d.img, ...d.gallery]) {
    const p = `C:\\Users\\WIN10\\OneDrive\\Desktop\\Bokdokbang website\\Syndey Bokdokbang\\public${img.replace(/\//g, "\\")}`;
    if (!fs.existsSync(p)) throw new Error(`Missing image for ${d.id}: ${img}`);
  }
}
console.log(`OK: ${all.length} projects, all ids unique, all images exist.`);

function js(v, indent) {
  const pad = "  ".repeat(indent);
  const pad1 = "  ".repeat(indent + 1);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    return `[\n${v.map((x) => pad1 + js(x, indent + 1)).join(",\n")},\n${pad}]`;
  }
  if (v && typeof v === "object") {
    const keys = Object.keys(v);
    return `{ ${keys.map((k) => `${k}: ${js(v[k], indent)}`).join(", ")} }`;
  }
  return JSON.stringify(v);
}

let out = `// New Developments / Projects data (PRD \u00a75.5).
// DEVELOPMENTS backs both the /new-developments listing grid and the
// /new-developments/:id project detail page. FEATURED_DEVELOPMENT keeps the
// homepage "New Developments" spotlight section pointed at the lead project.
//
// Sourced from real developer marketing collateral supplied by our agency
// partners Billbergia and Boston Projects (brochures, pricelists, contracts
// and fact sheets) — see internal source folders for the underlying documents.
// Photos are real marketing photography (public/developments/<id>/).
export const DEVELOPMENTS = [
`;
for (const d of all) {
  out += `  ${js(d, 1)},\n`;
}
out += `];

export const FEATURED_DEVELOPMENT = DEVELOPMENTS[0];

export const DEV_PRICE_BUCKETS = [
  { id: "0-800", min: 0, max: 800000, label: "$0 \u2013 $800K" },
  { id: "800-1000", min: 800000, max: 1000000, label: "$800K \u2013 $1M" },
  { id: "1000-1500", min: 1000000, max: 1500000, label: "$1M \u2013 $1.5M" },
  { id: "1500-plus", min: 1500000, max: Infinity, label: "$1.5M+" },
];

export const DEV_COMPLETION_OPTIONS = [
  { id: "2025", year: 2025, label: "2025 or earlier" },
  { id: "2026", year: 2026, label: "2026" },
  { id: "2027", year: 2027, label: "2027" },
  { id: "2028", year: 2028, label: "2028+" },
];

export const DEV_AVAILABILITY_OPTIONS = [
  { id: "selling-now", labelKo: "\uBD84\uC591 \uC911", labelEn: "Selling Now" },
  { id: "coming-soon", labelKo: "\uCD9C\uC2DC \uC608\uC815", labelEn: "Coming Soon" },
];
`;

fs.writeFileSync(
  "C:\\Users\\WIN10\\OneDrive\\Desktop\\Bokdokbang website\\Syndey Bokdokbang\\src\\data\\developments.js",
  out,
  "utf-8"
);
console.log("Wrote src/data/developments.js");

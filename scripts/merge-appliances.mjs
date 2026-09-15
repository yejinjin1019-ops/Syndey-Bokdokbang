import fs from "node:fs";

const scratch = "C:\\Users\\WIN10\\AppData\\Local\\Temp\\claude\\C--Users-WIN10-OneDrive-Desktop-Bokdokbang-website-Syndey-Bokdokbang\\9183ddba-23b4-4d56-b844-ed11eb54f0dc\\scratchpad";
const files = [
  "appliances-billbergia.json",
  "appliances-boston-a.json",
  "appliances-boston-b.json",
  "appliances-boston-c.json",
  "appliances-boston-d.json",
  "appliances-boston-e.json",
];

let merged = {};
for (const f of files) {
  const obj = JSON.parse(fs.readFileSync(`${scratch}\\${f}`, "utf-8"));
  merged = { ...merged, ...obj };
}

const devIds = new Set(
  fs
    .readFileSync(
      "C:\\Users\\WIN10\\OneDrive\\Desktop\\Bokdokbang website\\Syndey Bokdokbang\\src\\data\\developments.js",
      "utf-8"
    )
    .match(/id: "([a-z0-9-]+)"/g)
    .map((m) => m.slice(5, -1))
);
for (const id of Object.keys(merged)) {
  if (!devIds.has(id)) throw new Error(`Unknown development id in appliance data: ${id}`);
}
console.log(`OK: ${Object.keys(merged).length} of 29 projects have appliance data.`);

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

let out = `// Real appliance-brand data pulled from each project's official Schedule of
// Finishes / Features & Finishes documents (see internal source folders).
// Keyed by developments.js id. A project is omitted here when its finishes
// schedule doesn't name a brand (e.g. "stainless steel ... or similar") —
// never guess a brand that isn't in the source document.
export const APPLIANCE_BRANDS = {
`;
for (const [id, items] of Object.entries(merged)) {
  out += `  "${id}": ${js(items, 1)},\n`;
}
out += `};\n`;

fs.writeFileSync(
  "C:\\Users\\WIN10\\OneDrive\\Desktop\\Bokdokbang website\\Syndey Bokdokbang\\src\\data\\applianceBrands.js",
  out,
  "utf-8"
);
console.log("Wrote src/data/applianceBrands.js");

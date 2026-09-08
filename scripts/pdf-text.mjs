// Extract plain text from a PDF for reading in the terminal.
// Usage: node scripts/pdf-text.mjs <path-to-pdf>
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/pdf-text.mjs <path-to-pdf>");
  process.exit(1);
}
const buf = fs.readFileSync(file);
const parser = new PDFParse({ data: buf });
const data = await parser.getText();
console.log(`--- ${file} (${data.total ?? data.pages?.length ?? "?"} pages) ---`);
console.log(data.text);
await parser.destroy();

// Recursively extract text from every PDF under a folder into one combined
// text file, so it can be searched with Grep instead of opening PDFs one by one.
// Usage: node scripts/dump-folder-text.mjs "<sourceFolder>" "<outputTxtFile>"
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const [, , srcFolder, outFile] = process.argv;
if (!srcFolder || !outFile) {
  console.error('Usage: node scripts/dump-folder-text.mjs "<sourceFolder>" "<outputTxtFile>"');
  process.exit(1);
}

function findPdfs(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(findPdfs(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) out.push(full);
  }
  return out;
}

const pdfs = findPdfs(srcFolder);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
const stream = fs.createWriteStream(outFile, { encoding: "utf-8" });

for (const pdf of pdfs) {
  stream.write(`\n\n########## FILE: ${pdf} ##########\n\n`);
  try {
    const buf = fs.readFileSync(pdf);
    const parser = new PDFParse({ data: buf });
    const data = await parser.getText();
    stream.write(data.text || "");
    await parser.destroy();
    console.log(`OK   ${pdf}`);
  } catch (err) {
    stream.write(`[EXTRACTION FAILED: ${err.message}]`);
    console.log(`FAIL ${pdf}: ${err.message}`);
  }
}
stream.end();
console.log(`\nDone. ${pdfs.length} PDFs -> ${outFile}`);

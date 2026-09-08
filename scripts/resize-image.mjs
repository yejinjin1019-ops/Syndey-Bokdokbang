// One-off helper: resize + compress a source image into public/developments/<slug>/.
// Usage: node scripts/resize-image.mjs <srcPath> <destRelPath> [maxWidth]
// destRelPath is relative to /public, e.g. developments/chatswood-grand/01-hero.jpg
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const [, , src, destRel, maxWidthArg] = process.argv;
if (!src || !destRel) {
  console.error("Usage: node scripts/resize-image.mjs <src> <destRelPath> [maxWidth]");
  process.exit(1);
}
const maxWidth = maxWidthArg ? Number(maxWidthArg) : 1600;
const destAbs = path.join(process.cwd(), "public", destRel);
fs.mkdirSync(path.dirname(destAbs), { recursive: true });

const ext = path.extname(destAbs).toLowerCase();
let pipeline = sharp(src).resize({ width: maxWidth, withoutEnlargement: true });
if (ext === ".png") {
  pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
} else {
  pipeline = pipeline.jpeg({ quality: 76, mozjpeg: true });
}

await pipeline.toFile(destAbs);
const { size } = fs.statSync(destAbs);
console.log(`OK ${destRel} (${(size / 1024).toFixed(0)} KB)`);

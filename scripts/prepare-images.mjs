import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
const [hero, atlas] = process.argv.slice(2);
if (!hero || !atlas)
  throw new Error(
    "Usage: node scripts/prepare-images.mjs <hero.png> <atlas.png>",
  );
await mkdir("public/images", { recursive: true });
await sharp(hero)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 86 })
  .toFile("public/images/hero.webp");
const { width, height } = await sharp(atlas).metadata();
for (let i = 0; i < 10; i++) {
  const x = Math.round(((i % 5) * width) / 5),
    y = Math.round((Math.floor(i / 5) * height) / 2);
  const right = Math.round((((i % 5) + 1) * width) / 5),
    bottom = Math.round(((Math.floor(i / 5) + 1) * height) / 2);
  await sharp(atlas)
    .extract({ left: x, top: y, width: right - x, height: bottom - y })
    .resize({ width: 500 })
    .webp({ quality: 86 })
    .toFile(path.join("public/images", `product-${i}.webp`));
}
console.log("Prepared hero and ten local catalog images.");

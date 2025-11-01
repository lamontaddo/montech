import sharp from "sharp";

const INPUT = "public/montech-icon.webp";
const OUTPUT = "public/og.jpg";

await sharp(INPUT)
  .resize(1200, 630, { fit: "contain", background: "#0f172a" })
  .jpeg({ quality: 88 })
  .toFile(OUTPUT);

console.log("✅ Wrote", OUTPUT);

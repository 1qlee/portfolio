import sharp from "sharp";
import fs from "fs";
import path from "path";

const fileName = "sqnces";
const inputPath = `src/images/${fileName}.webp`;
const outputDir = "src/images";

const sizes = [320, 640, 1024]; // Different sizes for srcset

async function generateImages() {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const imagePromises = sizes.map(async (size) => {
    const outputPath = path.join(outputDir, `${fileName}-${size}.webp`);
    await sharp(inputPath).resize(size).webp({ quality: 80 }).toFile(outputPath);
    return { size, path: outputPath.replace("src/images", "/") };
  });

  const generatedImages = await Promise.all(imagePromises);
}

generateImages();
import sharp from 'sharp';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');

const DESKTOP = { width: 1920, height: 820 };
const MOBILE = { width: 900, height: 1125 };
const LEGACY_DESKTOP = { width: 1920, height: 1080 };
const LEGACY_MOBILE_WIDTH = 768;

async function exportSized(base, input, { width, height }) {
  const pipeline = sharp(input).resize(width, height, { fit: 'cover', position: 'center' });
  await pipeline.clone().webp({ quality: 82 }).toFile(path.join(imagesDir, `${base}.webp`));
  await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(imagesDir, `${base}.jpg`));
  console.log(`  → ${base} @ ${width}x${height}`);
}

async function exportLegacy(base, input) {
  const desktop = sharp(input).resize(LEGACY_DESKTOP.width, LEGACY_DESKTOP.height, {
    fit: 'cover',
    position: 'center',
  });
  const mobile = sharp(input).resize(
    LEGACY_MOBILE_WIDTH,
    Math.round((LEGACY_MOBILE_WIDTH * LEGACY_DESKTOP.height) / LEGACY_DESKTOP.width),
    { fit: 'cover', position: 'center' },
  );

  await desktop.clone().webp({ quality: 82 }).toFile(path.join(imagesDir, `${base}.webp`));
  await desktop.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(imagesDir, `${base}.jpg`));
  await mobile.clone().webp({ quality: 80 }).toFile(path.join(imagesDir, `${base}-768.webp`));
  await mobile.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(imagesDir, `${base}-768.jpg`));
  console.log(`  → ${base} legacy 1920x1080 + 768w`);
}

const files = await readdir(imagesDir);
const imageExt = /\.(png|jpe?g)$/i;

const responsiveDesktop = files.filter((f) => /-portada-desktop\.(png|jpe?g)$/i.test(f));
const responsiveMobile = files.filter((f) => /-portada-mobile\.(png|jpe?g)$/i.test(f));
const legacySources = files.filter(
  (f) =>
    f.startsWith('hero-') &&
    f.endsWith('-portada.png') &&
    !f.includes('-desktop') &&
    !f.includes('-mobile'),
);

if (responsiveDesktop.length) {
  console.log('Responsive desktop:');
  for (const file of responsiveDesktop) {
    const base = file.replace(imageExt, '');
    await exportSized(base, path.join(imagesDir, file), DESKTOP);
  }
}

if (responsiveMobile.length) {
  console.log('Responsive mobile:');
  for (const file of responsiveMobile) {
    const base = file.replace(imageExt, '');
    await exportSized(base, path.join(imagesDir, file), MOBILE);
  }
}

if (legacySources.length) {
  console.log('Legacy single-source:');
  for (const file of legacySources) {
    const base = file.replace(/\.png$/i, '');
    await exportLegacy(base, path.join(imagesDir, file));
  }
}

const homeSourceCandidates = [
  'hero-home-portada.png',
  'hero-home-portada.jpg',
  'hero-home-portada.jpeg',
];
const homeInput = homeSourceCandidates
  .map((name) => path.join(imagesDir, name))
  .find((filePath) => existsSync(filePath));

if (homeInput) {
  console.log('Home landing hero (hero-home.webp):');
  await sharp(homeInput)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .webp({ quality: 82 })
    .toFile(path.join(imagesDir, 'hero-home.webp'));
  console.log('  → hero-home.webp @ 1920x1080');
}

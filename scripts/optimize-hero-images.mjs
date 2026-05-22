import sharp from 'sharp';
import { existsSync } from 'fs';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');

const DESKTOP = { width: 1920, height: 820 };
/** 9:16 para evitar recortes laterales agresivos en heroes de celular. */
const MOBILE = { width: 900, height: 1600 };
const LEGACY_DESKTOP = { width: 1920, height: 1080 };
const LEGACY_MOBILE_WIDTH = 1200;

async function exportSized(base, input, { width, height }) {
  const source = await readFile(input);
  const pipeline = sharp(source).resize(width, height, { fit: 'cover', position: 'center' });
  const webpOut = path.join(imagesDir, `${base}.webp`);
  const jpgOut = path.join(imagesDir, `${base}.jpg`);
  await pipeline.clone().webp({ quality: 84 }).toFile(webpOut);
  await pipeline.clone().jpeg({ quality: 84, mozjpeg: true }).toFile(jpgOut);
  console.log(`  → ${base} @ ${width}x${height}`);
}

function findMaster(base) {
  for (const ext of ['.png', '.jpg', '.jpeg']) {
    const p = path.join(imagesDir, `${base}${ext}`);
    if (existsSync(p)) return p;
  }
  return null;
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

  await desktop.clone().webp({ quality: 84 }).toFile(path.join(imagesDir, `${base}.webp`));
  await desktop.clone().jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(imagesDir, `${base}.jpg`));
  await mobile.clone().webp({ quality: 82 }).toFile(path.join(imagesDir, `${base}-768.webp`));
  await mobile.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(imagesDir, `${base}-768.jpg`));
  console.log(`  → ${base} legacy 1920x1080 + ${LEGACY_MOBILE_WIDTH}w`);
}

async function exportHomeMobile() {
  const desktopWebp = path.join(imagesDir, 'hero-home.webp');
  const mobileWebp = path.join(imagesDir, 'hero-home-mobile.webp');
  const mobileInput = existsSync(mobileWebp) ? mobileWebp : desktopWebp;
  if (!existsSync(mobileInput)) {
    console.log('Skip hero-home-mobile: no hero-home-mobile.webp or hero-home.webp');
    return;
  }
  console.log(`Home mobile hero (from ${path.basename(mobileInput)}):`);
  await exportSized('hero-home-mobile', mobileInput, MOBILE);
  if (!existsSync(path.join(imagesDir, 'hero-home.jpg'))) {
    await sharp(desktopWebp)
      .resize(LEGACY_DESKTOP.width, LEGACY_DESKTOP.height, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(path.join(imagesDir, 'hero-home.jpg'));
    console.log('  → hero-home.jpg (fallback for picture)');
  }
}

async function reexportMobileFromExisting() {
  const files = await readdir(imagesDir);
  const mobileBases = [
    ...new Set(
      files
        .filter((f) => /-portada-mobile\.(jpg|webp|png)$/i.test(f))
        .map((f) => f.replace(/\.(jpg|webp|png)$/i, '')),
    ),
  ];

  if (!mobileBases.length) return;

  console.log('Re-export mobile portadas @ 900x1600:');
  for (const base of mobileBases) {
    const input =
      ['.png', '.jpg', '.webp'].map((ext) => path.join(imagesDir, `${base}${ext}`)).find((p) => existsSync(p)) ??
      null;
    if (!input) continue;
    await exportSized(base, input, MOBILE);
  }
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
    const input = path.join(imagesDir, file);
    await exportSized(base, input, DESKTOP);
  }
}

if (responsiveMobile.length) {
  console.log('Responsive mobile (from PNG masters):');
  for (const file of responsiveMobile) {
    const base = file.replace(imageExt, '');
    await exportSized(base, path.join(imagesDir, file), MOBILE);
  }
} else {
  await reexportMobileFromExisting();
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
    .resize(LEGACY_DESKTOP.width, LEGACY_DESKTOP.height, { fit: 'cover', position: 'center' })
    .webp({ quality: 84 })
    .toFile(path.join(imagesDir, 'hero-home.webp'));
  await sharp(homeInput)
    .resize(LEGACY_DESKTOP.width, LEGACY_DESKTOP.height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(imagesDir, 'hero-home.jpg'));
  console.log('  → hero-home.webp + hero-home.jpg @ 1920x1080');
}

await exportHomeMobile();

console.log('Done.');

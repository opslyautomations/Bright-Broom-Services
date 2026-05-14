import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCATIONS_DIR = path.join(__dirname, '..', 'public', 'images', 'locations');

// Convert decimal degrees to EXIF rational string format "deg/1, min/1, sec/100"
function toExifRational(decimal) {
  const abs = Math.abs(decimal);
  const deg = Math.floor(abs);
  const minFull = (abs - deg) * 60;
  const min = Math.floor(minFull);
  const sec = Math.round((minFull - min) * 60 * 1000);
  return `${deg}/1, ${min}/1, ${sec}/1000`;
}

// source file (relative to locations dir) → { dst slug, lat, lng, city name }
const IMAGE_MAP = [
  // ── Arizona ────────────────────────────────────────────────────────────────
  { src: 'arizona/Chandler Az.jpg',   dst: 'arizona/chandler.webp',         lat: 33.3062, lng: -111.8413, name: 'Chandler, AZ' },
  { src: 'arizona/Gilbert AZ.jpg',    dst: 'arizona/gilbert.webp',          lat: 33.3528, lng: -111.7890, name: 'Gilbert, AZ' },
  { src: 'arizona/Mesa Az.jpg',       dst: 'arizona/mesa.webp',             lat: 33.4152, lng: -111.8315, name: 'Mesa, AZ' },
  { src: 'arizona/Phoenix.jpg',       dst: 'arizona/phoenix.webp',          lat: 33.4484, lng: -112.0740, name: 'Phoenix, AZ' },
  { src: 'arizona/Scottsdale Az.jpg', dst: 'arizona/scottsdale.webp',       lat: 33.4942, lng: -111.9261, name: 'Scottsdale, AZ' },

  // ── California ─────────────────────────────────────────────────────────────
  { src: 'california/Arroyo Grande.jpg',    dst: 'california/arroyo-grande.webp',    lat: 35.1185, lng: -120.5903, name: 'Arroyo Grande, CA' },
  { src: 'california/Avila Beach.jpg',      dst: 'california/avila-beach.webp',      lat: 35.1800, lng: -120.7307, name: 'Avila Beach, CA' },
  { src: 'california/Bakersfield.jpg',      dst: 'california/bakersfield.webp',      lat: 35.3733, lng: -119.0187, name: 'Bakersfield, CA' },
  { src: 'california/Buelton.webp',         dst: 'california/buellton.webp',         lat: 34.6136, lng: -120.1941, name: 'Buellton, CA' },
  { src: 'california/Guadalupe.webp',       dst: 'california/guadalupe.webp',        lat: 34.9747, lng: -120.5740, name: 'Guadalupe, CA' },
  { src: 'california/Lompoc.webp',          dst: 'california/lompoc.webp',           lat: 34.6391, lng: -120.4579, name: 'Lompoc, CA' },
  { src: 'california/Nipomo.jpg',           dst: 'california/nipomo.webp',           lat: 35.0447, lng: -120.4752, name: 'Nipomo, CA' },
  { src: 'california/Orcutt.jpg',           dst: 'california/orcutt.webp',           lat: 34.8647, lng: -120.4368, name: 'Orcutt, CA' },
  { src: 'california/Pismo Beach.jpg',      dst: 'california/pismo-beach.webp',      lat: 35.1428, lng: -120.6413, name: 'Pismo Beach, CA' },
  { src: 'california/San Luis Obispo.jpg',  dst: 'california/san-luis-obispo.webp',  lat: 35.2828, lng: -120.6596, name: 'San Luis Obispo, CA' },
  { src: 'california/Santa Barbara.webp',   dst: 'california/santa-barbara.webp',    lat: 34.4208, lng: -119.6982, name: 'Santa Barbara, CA' },
  { src: 'california/Santa Ynez.webp',      dst: 'california/santa-ynez.webp',       lat: 34.6081, lng: -120.0813, name: 'Santa Ynez, CA' },
  { src: 'california/Solvang.jpg',          dst: 'california/solvang.webp',          lat: 34.5958, lng: -120.1376, name: 'Solvang, CA' },

  // ── Colorado ───────────────────────────────────────────────────────────────
  { src: 'colorado/Arvada Co.jpg',      dst: 'colorado/arvada.webp',   lat: 39.8028, lng: -105.0875, name: 'Arvada, CO' },
  { src: 'colorado/Aurora Co.jpg',      dst: 'colorado/aurora.webp',   lat: 39.7294, lng: -104.8319, name: 'Aurora, CO' },
  { src: 'colorado/Denver Co.jpg',      dst: 'colorado/denver.webp',   lat: 39.7392, lng: -104.9903, name: 'Denver, CO' },
  { src: 'colorado/Lakewood Co.webp',   dst: 'colorado/lakewood.webp', lat: 39.7047, lng: -105.0814, name: 'Lakewood, CO' },

  // ── Nevada ─────────────────────────────────────────────────────────────────
  { src: 'nevada/Las Vegas Nv.jpg',      dst: 'nevada/las-vegas.webp',     lat: 36.1716, lng: -115.1391, name: 'Las Vegas, NV' },
  { src: 'nevada/Paradise Nv.jpg',       dst: 'nevada/paradise.webp',      lat: 36.0995, lng: -115.1439, name: 'Paradise, NV' },
  { src: 'nevada/Spring Valley Nv.jpg',  dst: 'nevada/spring-valley.webp', lat: 36.1085, lng: -115.2384, name: 'Spring Valley, NV' },

  // ── Virginia ───────────────────────────────────────────────────────────────
  { src: 'virginia/Alexandria Va.jpg',   dst: 'virginia/alexandria.webp',    lat: 38.8048, lng: -77.0469, name: 'Alexandria, VA' },
  { src: 'virginia/Annandale Va.webp',   dst: 'virginia/annandale.webp',     lat: 38.8307, lng: -77.1958, name: 'Annandale, VA' },
  { src: 'virginia/Arlington Va.jpg',    dst: 'virginia/arlington.webp',     lat: 38.8816, lng: -77.0910, name: 'Arlington, VA' },
  { src: 'virginia/Mclean Va.jpg',       dst: 'virginia/mclean.webp',        lat: 38.9340, lng: -77.1773, name: 'McLean, VA' },
  { src: 'virginia/Washington Dc.webp',  dst: 'virginia/washington-dc.webp', lat: 38.9072, lng: -77.0369, name: 'Washington, DC' },
];

// Photos that don't match a known location slug (noted for user)
const SKIPPED = [
  'california/Santa Monica Ca.jpg', // no santa-monica slug in locations data
];

async function processImage({ src, dst, lat, lng, name }) {
  const srcPath = path.join(LOCATIONS_DIR, src);
  const dstPath = path.join(LOCATIONS_DIR, dst);

  if (!fs.existsSync(srcPath)) {
    console.warn(`  SKIP (not found): ${src}`);
    return;
  }

  // Build GPS EXIF block
  const latRef = lat >= 0 ? 'N' : 'S';
  const lngRef = lng >= 0 ? 'E' : 'W';
  const exifGPS = {
    GPS: {
      GPSLatitudeRef:  latRef,
      GPSLatitude:     toExifRational(lat),
      GPSLongitudeRef: lngRef,
      GPSLongitude:    toExifRational(Math.abs(lng)),
      GPSAltitudeRef:  '0',
      GPSAltitude:     '0/1',
    },
    IFD0: {
      ImageDescription: `Bright Broom cleaning services – ${name}`,
      Copyright: 'Bright Broom Service',
    },
  };

  const srcIsWebp = src.toLowerCase().endsWith('.webp');

  await sharp(srcPath)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .withExifMerge(exifGPS)
    .toFile(dstPath + '.tmp');

  // Atomic replace: rename tmp → final destination
  fs.renameSync(dstPath + '.tmp', dstPath);

  const srcSize = fs.statSync(srcPath).size;
  const dstSize = fs.statSync(dstPath).size;
  const saving = (((srcSize - dstSize) / srcSize) * 100).toFixed(1);
  console.log(`  ✓ ${name.padEnd(26)} ${(srcSize / 1024).toFixed(0).padStart(6)} KB → ${(dstSize / 1024).toFixed(0).padStart(5)} KB  (${saving}% smaller)`);
}

async function main() {
  console.log('\nProcessing location images…\n');
  let ok = 0, failed = 0;

  for (const entry of IMAGE_MAP) {
    try {
      await processImage(entry);
      ok++;
    } catch (err) {
      console.error(`  ERROR ${entry.src}: ${err.message}`);
      failed++;
    }
  }

  if (SKIPPED.length) {
    console.log('\nSkipped (no matching location slug):');
    SKIPPED.forEach(f => console.log(`  - ${f}`));
  }

  console.log(`\nDone. ${ok} processed, ${failed} errors.\n`);
}

main();

#!/usr/bin/env node
/**
 * scripts/generate-favicons.js
 * Generates the full MediGuide.health favicon suite from public/favicon.svg
 * using the globally-available `sharp` package.
 *
 * Run with: node scripts/generate-favicons.js
 */

"use strict";

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(process.cwd(), "public");
const SVG_PATH = path.join(PUBLIC_DIR, "favicon.svg");

const SVG_BUF = fs.readFileSync(SVG_PATH);

// Render the SVG to a PNG buffer at the requested pixel size.
// density=600 ensures a crisp initial rasterisation before any downscaling.
async function renderPng(size, opts = {}) {
  const { whiteBg = false } = opts;
  let pipeline = sharp(SVG_BUF, { density: 600 }).resize(size, size, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  });
  if (whiteBg) {
    pipeline = pipeline.flatten({ background: { r: 255, g: 255, b: 255 } });
  }
  return pipeline.png().toBuffer();
}

// Build a minimal ICO container from an array of PNG buffers + their pixel sizes.
// Modern browsers accept PNG-inside-ICO (no BMP conversion needed).
function buildIco(pngBufs, sizes) {
  const n = pngBufs.length;

  // 6-byte ICONDIR header
  const hdr = Buffer.alloc(6);
  hdr.writeUInt16LE(0, 0); // reserved
  hdr.writeUInt16LE(1, 2); // type: 1 = icon
  hdr.writeUInt16LE(n, 4); // image count

  // 16-byte ICONDIRENTRY per image
  let offset = 6 + n * 16;
  const dirs = pngBufs.map((buf, i) => {
    const d = Buffer.alloc(16);
    const sz = sizes[i] >= 256 ? 0 : sizes[i]; // 0 means 256
    d.writeUInt8(sz, 0); // width
    d.writeUInt8(sz, 1); // height
    d.writeUInt8(0, 2); // colour count (0 = 256+)
    d.writeUInt8(0, 3); // reserved
    d.writeUInt16LE(1, 4); // colour planes
    d.writeUInt16LE(32, 6); // bits per pixel
    d.writeUInt32LE(buf.length, 8); // image data size
    d.writeUInt32LE(offset, 12); // image data offset
    offset += buf.length;
    return d;
  });

  return Buffer.concat([hdr, ...dirs, ...pngBufs]);
}

async function main() {
  console.log("Generating MediGuide.health favicons…\n");

  // ── PNG files ──────────────────────────────────────────────────────────
  const renders = [
    // [filename,   size,  whiteBg]
    ["favicon-16x16.png",          16,  false],
    ["favicon-32x32.png",          32,  false],
    ["apple-touch-icon.png",      180,  true ],
    ["android-chrome-192x192.png",192,  true ],
    ["android-chrome-512x512.png",512,  true ],
  ];

  for (const [name, size, whiteBg] of renders) {
    const buf = await renderPng(size, { whiteBg });
    fs.writeFileSync(path.join(PUBLIC_DIR, name), buf);
    console.log(`  ✓  ${name.padEnd(30)}  ${size}×${size}`);
  }

  // ── favicon.ico (16 + 32 + 48 inside one container) ───────────────────
  const [p16, p32, p48] = await Promise.all([
    renderPng(16, { whiteBg: true }),
    renderPng(32, { whiteBg: true }),
    renderPng(48, { whiteBg: true }),
  ]);
  const ico = buildIco([p16, p32, p48], [16, 32, 48]);
  fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), ico);
  console.log(`  ✓  ${"favicon.ico".padEnd(30)}  16/32/48 multi-res`);

  console.log("\nDone — all assets written to public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

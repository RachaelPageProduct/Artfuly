import * as fkmod from 'fontkitten';
import sharp from 'sharp';
import { writeFileSync } from 'fs';

const fontkit = fkmod.default ?? fkmod;
const FONT = '/Users/rachaelpage/Library/Fonts/Montserrat-VariableFont_wght.ttf';

let f = fontkit.openSync(FONT);
if (typeof f.getVariation === 'function') {
  f = f.getVariation({ wght: 700 });
  console.log('variation wght:700 applied');
} else {
  console.log('WARNING: getVariation not available; using default weight');
}

const upm = f.unitsPerEm;
const run = f.layout('RP');
const ls = -0.02 * upm; // letter-spacing -0.02em to match nav

let x = 0, minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
const placed = [];
run.glyphs.forEach((g, i) => {
  const bb = g.bbox;
  placed.push({ d: g.path.toSVG(), X: x });
  minX = Math.min(minX, x + bb.minX);
  maxX = Math.max(maxX, x + bb.maxX);
  minY = Math.min(minY, bb.minY);
  maxY = Math.max(maxY, bb.maxY);
  x += run.positions[i].xAdvance + ls;
});

const cw = maxX - minX, ch = maxY - minY;
const SIZE = 100, PAD = 14;
const scale = Math.min((SIZE - 2 * PAD) / cw, (SIZE - 2 * PAD) / ch);
const offX = (SIZE - cw * scale) / 2;
const offY = (SIZE - ch * scale) / 2;
const glyphPaths = placed.map(p => `<path transform="translate(${p.X.toFixed(2)} 0)" d="${p.d}"/>`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">
  <rect width="${SIZE}" height="${SIZE}" rx="22" fill="#CEEAEB"/>
  <g fill="#000000" transform="translate(${offX.toFixed(2)} ${offY.toFixed(2)}) scale(${scale.toFixed(5)} ${(-scale).toFixed(5)}) translate(${(-minX).toFixed(2)} ${(-maxY).toFixed(2)})">${glyphPaths}</g>
</svg>`;

writeFileSync('public/favicon-rp.svg', svg);
console.log('favicon-rp.svg written. RP box w/h(units):', cw.toFixed(0), ch.toFixed(0), 'scale:', scale.toFixed(4));

await sharp(Buffer.from(svg)).resize(32, 32).png().toFile('public/favicon-rp.png');
await sharp(Buffer.from(svg)).resize(180, 180).png().toFile('public/apple-touch-icon-rp.png');
console.log('PNGs written (favicon-rp.png 32, apple-touch-icon-rp.png 180)');

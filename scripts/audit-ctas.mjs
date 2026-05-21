/**
 * Audita enlaces CTA en el build de producción.
 * Uso: node scripts/audit-ctas.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const WA_PATTERN = /https:\/\/wa\.me\/5491170671050\?text=/;
const BAD_PATTERNS = [
  { name: 'href a /contacto/ en HTML estático', regex: /href=["']\/contacto\//, files: /\.html$/ },
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(js|html)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = walk(distDir);
let waCount = 0;
const issues = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/https:\/\/wa\.me\/[^"'`\s]+/g) || [];
  for (const url of matches) {
    waCount++;
    if (!url.includes('5491170671050') && !url.includes('${')) {
      issues.push({ file, type: 'wa.me sin número correcto', url: url.slice(0, 80) });
    }
  }
  for (const bad of BAD_PATTERNS) {
    if (bad.files && !bad.files.test(file)) continue;
    if (bad.regex.test(content)) {
      issues.push({ file, type: bad.name });
    }
  }
}

console.log(`Archivos revisados: ${files.length}`);
console.log(`URLs wa.me encontradas: ${waCount}`);
if (issues.length) {
  console.error('PROBLEMAS:');
  issues.forEach((i) => console.error(` - ${path.relative(distDir, i.file)}: ${i.type}${i.url ? ' ' + i.url : ''}`));
  process.exit(1);
}
console.log('OK: sin patrones rotos detectados en dist/');

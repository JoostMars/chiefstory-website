// Zet brand/tokens.json om naar src/styles/tokens.css.
// Draait automatisch vóór `npm run dev` en `npm run build`.
// Wijzig kleuren en maten in brand/tokens.json, niet in de CSS.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const t = JSON.parse(readFileSync(new URL('../brand/tokens.json', import.meta.url), 'utf8'));
const first = t.color.themes[0].id;
const val = (v, theme) => (typeof v === 'string' ? v : v[theme] ?? v[first]);
const lines = ['/* Gegenereerd uit brand/tokens.json door scripts/tokens.mjs. Niet met de hand wijzigen. */', ':root {'];
for (const c of t.color.tokens) lines.push(`  --${c.name}: ${val(c.value, first)};`);
for (const fam of ['spacing', 'radius', 'diagonaal']) for (const k of t[fam]?.tokens ?? []) lines.push(`  --${k.name}: ${k.value};`);
for (const [k, v] of Object.entries(t.type.families)) lines.push(`  --font-${k}: ${v};`);
lines.push('}');
for (const th of t.color.themes.slice(1)) {
  lines.push(`[data-theme="${th.id}"] {`);
  for (const c of t.color.tokens) lines.push(`  --${c.name}: ${val(c.value, th.id)};`);
  lines.push('}');
}
mkdirSync(new URL('../src/styles/', import.meta.url), { recursive: true });
writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), lines.join('\n') + '\n');
console.log('tokens.css geschreven uit brand/tokens.json');

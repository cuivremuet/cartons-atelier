import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function renderCard(data) {
  const lines = ['title', 'classification', 'date', 'id'].map(field => {
    const value = data[field];
    if (typeof value !== 'string' || !value.trim() || value.length > 64 || /[\r\n]/.test(value)) throw new Error(`${field} : texte requis, 64 caractères au maximum, une ligne`);
    return escapeXml(value);
  });
  const rows = lines.map((line, index) => `<text x="64" y="${100 + index * 90}" font-size="${index === 3 ? 28 : 26}">${line}</text>`).join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 480" role="img" aria-label="Carton documentaire statique"><rect width="1280" height="480" fill="#151a1e"/><g fill="#f4e4c6" font-family="monospace">\n${rows}\n</g></svg>\n`;
}

function escapeXml(text) {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

async function main() {
  const [input, output] = process.argv.slice(2);
  if (!input || !output) throw new Error('Usage : node main.mjs entree.json carton.svg');
  const svg = renderCard(JSON.parse(await readFile(input, 'utf8')));
  await writeFile(output, svg, 'utf8');
  console.log('Carton SVG écrit ; aucune vidéo produite.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(`Erreur : ${error.message}`); process.exitCode = 1; });
}

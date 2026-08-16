const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, '..');

const PANELS = [
  ['capa-sobre',    'capas/capa-sobre.png'],
  ['capa-servicos', 'capas/capa-servicos.png'],

  ['sobre-1', 'sobre/story-01.png'],
  ['sobre-2', 'sobre/story-02.png'],
  ['sobre-3', 'sobre/story-03.png'],
  ['sobre-4', 'sobre/story-04.png'],
  ['sobre-5', 'sobre/story-05-cta.png'],

  ['serv-1', 'servicos/story-01.png'],
  ['serv-2', 'servicos/story-02-sites.png'],
  ['serv-3', 'servicos/story-03-trafego.png'],
  ['serv-4', 'servicos/story-04-seo.png'],
  ['serv-5', 'servicos/story-05-automacao.png'],
  ['serv-6', 'servicos/story-06-cta.png'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'destaques.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);

  for (const [id, file] of PANELS) {
    const el = await page.$('#' + id);
    const dest = path.join(OUT, file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await el.screenshot({ path: dest });
    const b = fs.readFileSync(dest);
    console.log(file.padEnd(30), b.readUInt32BE(16) + 'x' + b.readUInt32BE(20), (b.length / 1024).toFixed(0) + 'KB');
  }

  await browser.close();
})();

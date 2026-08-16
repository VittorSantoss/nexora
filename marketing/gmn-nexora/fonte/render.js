const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const OUT = path.join('c:', 'Users', 'kelvi', 'OneDrive', 'Desktop', 'treinamento', 'marketing', 'gmn-nexora');

const PANELS = [
  ['perfil', 'perfil-logo.png'],
  ['capa',   'capa.png'],
  ['v1',     'vitrine-01-sites.png'],
  ['v2',     'vitrine-02-trafego.png'],
  ['v3',     'vitrine-03-seo.png'],
  ['v4',     'vitrine-04-automacao.png'],
  ['cta',    'vitrine-05-contato.png'],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1960, height: 1200 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'gmn.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);

  for (const [id, file] of PANELS) {
    const el = await page.$('#' + id);
    const dest = path.join(OUT, file);
    await el.screenshot({ path: dest });
    const b = fs.readFileSync(dest);
    console.log(file.padEnd(28), b.readUInt32BE(16) + 'x' + b.readUInt32BE(20), (b.length / 1024).toFixed(0) + 'KB');
  }

  await browser.close();
})();

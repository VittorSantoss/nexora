const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'instagram');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(__dirname, 'carrossel.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const dest = path.join(OUT, 'post-01.png');
  const el = await page.$('#post-1');
  await el.screenshot({ path: dest });
  const b = fs.readFileSync(dest);
  console.log('OK', path.basename(dest), b.readUInt32BE(16) + 'x' + b.readUInt32BE(20), (b.length / 1024).toFixed(0) + 'KB');

  await browser.close();
})();

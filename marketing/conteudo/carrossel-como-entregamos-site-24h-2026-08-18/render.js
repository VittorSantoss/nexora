const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'instagram');
fs.mkdirSync(OUT, { recursive: true });

const SLIDES = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'carrossel.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);

  for (let i = 0; i < SLIDES.length; i++) {
    const el = await page.$('#' + SLIDES[i]);
    const dest = path.join(OUT, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await el.screenshot({ path: dest });
    const b = fs.readFileSync(dest);
    console.log(path.basename(dest).padEnd(16), b.readUInt32BE(16) + 'x' + b.readUInt32BE(20), (b.length / 1024).toFixed(0) + 'KB');
  }

  await browser.close();
})();

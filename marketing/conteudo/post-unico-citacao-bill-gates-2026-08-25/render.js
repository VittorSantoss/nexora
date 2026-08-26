const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(__dirname, 'carrossel.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  const dest = path.join(__dirname, 'instagram', 'slide-01.png');
  const el = await page.$('#post-1');
  await el.screenshot({ path: dest });
  console.log('OK', dest);

  await browser.close();
})();

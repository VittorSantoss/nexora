// A logo vem como PNG chapado sobre um azul-escuro (~#0d1420), sem alpha.
// Sobre qualquer fundo que nao seja exatamente essa cor, o retangulo aparece.
// Aqui o fundo e amostrado no canto, subtraido de cada pixel, e o residual
// vira o alpha (unpremultiply preserva o antialias e o gradiente do monograma).
const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

// carregada como data URL: uma pagina about:blank nao tem permissao de ler file://
const SRC = 'data:image/png;base64,' + fs.readFileSync(
  'c:/Users/kelvi/OneDrive/Desktop/treinamento/identidade/nexora-logo-principal.png'
).toString('base64');
const DEST = path.join(__dirname, 'logo-alpha.png');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('about:blank');

  const dataUrl = await page.evaluate(async (src) => {
    const img = new Image();
    img.src = src;
    await img.decode();

    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const d = ctx.getImageData(0, 0, c.width, c.height);
    const p = d.data;
    const br = p[0], bg = p[1], bb = p[2]; // cor de fundo amostrada no canto

    for (let i = 0; i < p.length; i += 4) {
      const r = Math.max(0, p[i] - br);
      const g = Math.max(0, p[i + 1] - bg);
      const b = Math.max(0, p[i + 2] - bb);
      const a = Math.max(r, g, b);
      if (a === 0) { p[i + 3] = 0; continue; }
      const k = 255 / a;
      p[i] = Math.min(255, r * k);
      p[i + 1] = Math.min(255, g * k);
      p[i + 2] = Math.min(255, b * k);
      p[i + 3] = a;
    }
    ctx.putImageData(d, 0, 0);
    return c.toDataURL('image/png');
  }, SRC);

  fs.writeFileSync(DEST, Buffer.from(dataUrl.split(',')[1], 'base64'));
  const b = fs.readFileSync(DEST);
  console.log('logo-alpha.png', b.readUInt32BE(16) + 'x' + b.readUInt32BE(20), (b.length / 1024).toFixed(1) + 'KB');

  await browser.close();
})();

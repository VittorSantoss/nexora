// Recorte de retrato com fundo branco de estúdio → PNG com alfa.
//
// Uso:  node scripts/recorta-fundo-branco.mjs entrada.png saida.png
// Precisa do playwright instalado (npm i playwright) e do Chromium que já
// existe em %LOCALAPPDATA%\ms-playwright\chromium-1234.
//
// Por que não erode: flood fill + erode de 1px deixa a borda do cabelo
// serrilhada. Aqui são DOIS limiares de branco — 250 marca fundo certo
// (alfa 0), 216 marca a franja anti-serrilhada — e na franja o alfa é uma
// rampa proporcional à distância do branco, com descontaminação do RGB
// (desfaz a mistura com o branco, senão fica halo claro sobre fundo escuro).
// Só alcança pixels ligados à borda da imagem, então não fura realces claros
// no rosto ou na roupa.
//
// Validado no retrato da Dra. Íris Coan Zacarias (11/09/2026): ruído em
// área lisa 23,9 contra 47,2 do recorte do remove.bg gratuito da mesma foto.

import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
const exe = process.env.LOCALAPPDATA + '/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const [entrada, saida] = process.argv.slice(2);
const b64 = readFileSync(entrada).toString('base64');
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage();

const out = await p.evaluate(async (u) => {
  const img = new Image(); img.src = u; await img.decode();
  const W = img.width, H = img.height;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, W, H), d = id.data;

  // Flood fill com dois limiares, em vez de um limiar + erode.
  // O erode cortava reto e deixava serrilhado; a faixa entre os dois
  // limiares vira rampa de alfa, que e o que da borda suave.
  const flood = (lim) => {
    const vis = new Uint8Array(W * H);
    const fila = [];
    for (let x = 0; x < W; x++) { fila.push(x); fila.push((H - 1) * W + x); }
    for (let y = 0; y < H; y++) { fila.push(y * W); fila.push(y * W + W - 1); }
    while (fila.length) {
      const pos = fila.pop();
      if (vis[pos]) continue;
      const i = pos * 4;
      if (!(d[i] >= lim && d[i+1] >= lim && d[i+2] >= lim)) continue;
      vis[pos] = 1;
      const x = pos % W, y = (pos / W) | 0;
      if (x > 0) fila.push(pos - 1);
      if (x < W - 1) fila.push(pos + 1);
      if (y > 0) fila.push(pos - W);
      if (y < H - 1) fila.push(pos + W);
    }
    return vis;
  };

  const certo = flood(250);   // branco puro = fundo com certeza
  const talvez = flood(216);  // quase branco = provavel fundo (a franja)

  for (let pos = 0; pos < W * H; pos++) {
    const i = pos * 4;
    if (certo[pos]) { d[i+3] = 0; continue; }
    if (!talvez[pos]) continue;              // sujeito solido, nao mexe

    // Na faixa: alfa proporcional a quao longe do branco o pixel esta.
    const lum = 0.2126*d[i] + 0.7152*d[i+1] + 0.0722*d[i+2];
    let a = (250 - lum) / (250 - 216);
    a = Math.max(0, Math.min(1, a));
    if (a < 0.03) { d[i+3] = 0; continue; }
    // descontamina: tira a contribuicao do branco que estava misturado
    for (let k = 0; k < 3; k++) {
      const real = (d[i+k] - (1 - a) * 255) / a;
      d[i+k] = Math.max(0, Math.min(255, Math.round(real)));
    }
    d[i+3] = Math.round(255 * a);
  }

  ctx.putImageData(id, 0, 0);
  let transp = 0;
  for (let pos = 0; pos < W*H; pos++) if (d[pos*4+3] === 0) transp++;
  return { png: c.toDataURL('image/png'), W, H, pct: (100*transp/(W*H)).toFixed(1) };
}, 'data:image/png;base64,' + b64);

writeFileSync(saida, Buffer.from(out.png.split(',')[1], 'base64'));
console.log(`recorte v3 (rampa de alfa): ${out.W}x${out.H} — ${out.pct}% transparente`);
await b.close();

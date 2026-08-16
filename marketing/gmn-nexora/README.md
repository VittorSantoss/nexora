# Imagens do Google Meu Negócio — Nexora

Peças geradas em 14/08/2026 para o perfil da Nexora no Google Meu Negócio,
seguindo `identidade/design-guide.md` (fundo #050505, Clash Display nos
títulos, gradiente da marca só em palavra-chave).

## Onde sobe cada arquivo

| Arquivo | Onde | Tamanho |
|---|---|---|
| `perfil-logo.png` | Foto do perfil (logo) | 1080x1080 |
| `capa.png` | Foto de capa | 1920x1080 (16:9) |
| `vitrine-01-sites.png` | Fotos → Vitrine | 1080x1080 |
| `vitrine-02-trafego.png` | Fotos → Vitrine | 1080x1080 |
| `vitrine-03-seo.png` | Fotos → Vitrine | 1080x1080 |
| `vitrine-04-automacao.png` | Fotos → Vitrine | 1080x1080 |
| `vitrine-05-contato.png` | Fotos → Vitrine | 1080x1080 |

Todas passam do mínimo que o Google pede (250x250) com folga.

A capa é recortada em proporções diferentes conforme onde aparece
(desktop, mobile, resultado de busca) — por isso o texto fica menor e
mais central do que o espaço disponível sugere.

## Como regerar

Os fontes ficam em `fonte/`. Para mudar um texto, editar `fonte/gmn.html`
e rodar, de dentro de `fonte/`:

```
npm i playwright-core
npx playwright install chromium
node render.js
```

`render.js` sobrescreve os PNGs desta pasta.

### logo-alpha.png

`identidade/nexora-logo-principal.png` vem chapada sobre um azul-escuro,
sem canal alpha — sobre qualquer outro fundo o retângulo do PNG aparece.
`logo-alpha.js` amostra essa cor no canto, subtrai de cada pixel e usa o
residual como alpha (com unpremultiply, o que preserva o antialias e o
gradiente do monograma). Rodar de novo só se a logo original mudar:

```
node logo-alpha.js
```

# Destaques do Instagram — @nexoramkt.agencia

Peças geradas em 15/08/2026 seguindo `identidade/design-guide.md`
(fundo #050505, Clash Display nos títulos, gradiente da marca só em
palavra-chave e detalhe).

Dois destaques: **Sobre** e **Serviços**.

## Arquivos

| Arquivo | Onde entra | Tamanho |
|---|---|---|
| `capas/capa-sobre.png` | Capa do destaque "Sobre" | 1080x1080 |
| `capas/capa-servicos.png` | Capa do destaque "Serviços" | 1080x1080 |
| `sobre/story-01..04.png` + `story-05-cta.png` | Stories do destaque "Sobre" | 1080x1920 |
| `servicos/story-01..05` + `story-06-cta.png` | Stories do destaque "Serviços" | 1080x1920 |

As capas são recortadas em círculo pelo Instagram — por isso o ícone fica
pequeno e bem no centro, com folga sobrando de todo lado.

Os stories têm 300px vazios no topo e 330px embaixo de propósito: é onde
ficam a barra de progresso, o @ do perfil e a caixa "Enviar mensagem".
Nada de texto importante cai nessas faixas.

## Ritmo do destaque "Sobre"

Cada tela usa um layout diferente — quem passa o dedo não vê o mesmo
molde cinco vezes:

| Tela | Layout |
|---|---|
| 01 | Capa tipográfica: título tomando a tela + selo circular girado |
| 02 | Painel claro (off-white) com lista numerada — única tela clara, quebra o preto no meio |
| 03 | Algarismo gigante em contorno como elemento gráfico, texto por cima |
| 04 | Citação com aspa em marca d'água e assinatura |
| 05 | Cartão de contato (WhatsApp e site em linhas), não centralizado |

O destaque "Serviços" mantém o molde numerado de propósito: ali a
repetição é o que faz as quatro frentes parecerem um conjunto.

## Como publicar (ordem importa)

1. Postar os stories de um destaque **na ordem** (01, 02, 03...). Pode
   postar os 5 do "Sobre" de uma vez.
2. No perfil → **Novo** (o `+` abaixo da bio) → selecionar os stories na
   ordem → nomear o destaque (`Sobre` / `Serviços`) → Adicionar.
3. Trocar a capa: segurar o destaque → **Editar destaque** → **Editar
   capa** → ícone da galeria → escolher `capa-sobre.png` ou
   `capa-servicos.png` → ajustar o zoom até o ícone caber no círculo.

Se preferir não deixar os stories no feed de stories por 24h, pode
postar e criar o destaque na sequência — o destaque continua no ar
depois que o story expira.

## Como regerar

Os fontes ficam em `fonte/`. Pra mudar um texto, editar
`fonte/destaques.html` e rodar, de dentro de `fonte/`:

```
npm i playwright-core
npx playwright install chromium
node render.js
```

`render.js` sobrescreve os PNGs das pastas `capas/`, `sobre/` e
`servicos/`.

`fonte/logo-alpha.png` é a logo com fundo já convertido em alpha — cópia
da que está em `marketing/gmn-nexora/fonte/` (ver o README de lá pra
saber como foi feita).

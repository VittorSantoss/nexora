# Estética Boituva — briefing

> Clínica de estética e harmonização orofacial em Boituva/SP.
> Site institucional premium (hub + 5 LPs de tratamento).
> Briefing montado em 28/08/2026 a partir dos dados passados pelo Manoel.

## Identidade

| Campo | Dado |
|---|---|
| Nome | Estética Boituva |
| Categoria | Clínica especializada em estética e harmonização orofacial |
| Profissional | Dra. Gisele Fernandes |
| Especialidade | Harmonização Orofacial |
| Cidade | Boituva — SP |
| Endereço | Rua João Domingos Barreto, 143 — Centro, Boituva/SP, 18550-000 |
| Telefone / WhatsApp | (15) 99791-1559 → `wa.me/5515997911559` |
| Horário | "aberto até 18:00" (só o fechamento foi informado) |
| Site | ainda não publicado — sem domínio definido |

## Prova social (dados reais, não inventar)

- Google: **5,0 estrelas** com **35 avaliações**
- Depoimentos recebidos (usados literalmente no site, atribuídos a quem disse):
  - "Saí da clínica com a pele linda e radiante." — Vitoria Mislene
  - "Competentes e profissionais no que fazem." — Jeane Lira
  - "O lugar é acolhedor, com ótimo atendimento." — Cintia Fiaschi

## Posicionamento

Atendimento personalizado, resultados naturais, segurança, sofisticação e
alta qualidade. Não é clínica de volume — é clínica de avaliação individual.
A copy do site nunca promete resultado, nunca cita preço e nunca compara com
concorrente.

## Serviços que viraram LP própria

| Tratamento | Arquivo | Palavra-chave |
|---|---|---|
| Harmonização Orofacial (carro-chefe) | `harmonizacao-orofacial.html` | harmonização orofacial em Boituva |
| Botox (toxina botulínica) | `botox.html` | botox em Boituva |
| Bioestimulador de colágeno | `bioestimulador-de-colageno.html` | bioestimulador de colágeno em Boituva |
| Preenchimento com ácido hialurônico | `preenchimento-acido-hialuronico.html` | preenchimento facial em Boituva |
| Mesoterapia | `mesoterapia.html` | mesoterapia em Boituva |

Hub: `index.html` — palavra-chave principal **"clínica de estética em Boituva"**.

## Identidade visual (exclusiva do cliente — nada da dark da Nexora)

```
--areia   #F5F5F5   fundo principal
--areia-2 #E3E3E3   fundo secundário
--branco  #FFFFFF   superfícies / cards
--tinta   #111111   textos fortes e seção final
--cinza   #4A4A4A   corpo de texto
--ouro    #D8A936   CTA, fios, ícones
--ouro-2  #E5C56A   realce claro do dourado
```

- Tipografia: **Montserrat** (400/500/600/700) — pedido explícito do cliente.
  Contraste vem da escala e do tracking (-.03em nos displays, +.28em nos
  eyebrows), não de uma segunda família.
- Dourado só em fio de 1px, ícone, borda e CTA. Nunca em bloco grande.
- Cantos quase retos (2–4px), sombra quase nula, muito espaço negativo.
- Grão SVG a ~4% de opacidade nas faixas escuras.

## Fotos — TUDO pendente

Nenhuma imagem real foi entregue. O site usa placeholders com gradiente da
paleta e legenda discreta "foto real em breve"; cada um já tem `<img>` com
`alt` e `onerror` que remove a imagem quebrada e revela o placeholder.
**Basta jogar os arquivos em `img/` com os nomes abaixo que as fotos aparecem
sozinhas** — nenhum HTML precisa ser editado.

Ver `img/README.md` para a lista exata de nomes e proporções.

## Pendências a confirmar com a cliente

1. **Nome exato da rua** — o dado veio como "Rua João Domingos, R. João D.
   Barreto, 143" (artefato de scrape). Assumi **Rua João Domingos Barreto,
   143**. Confirmar antes de publicar (NAP precisa bater com o Google).
2. **Horário completo** — só veio "aberto até 18:00". O site mostra
   "Atendimento com hora marcada — confirme no WhatsApp" e o schema **não**
   declara `openingHoursSpecification` (não invento horário).
3. **Coordenadas / link do Google Maps** — o `geo` do schema ficou de fora e o
   botão "Ver todas as avaliações" aponta para uma busca no Maps. Trocar pelo
   link curto do perfil real quando ele for passado.
4. **Antes e depois** — a seção está montada como pedido, mas com risco
   regulatório: se a Dra. Gisele é CD (harmonização orofacial é especialidade
   do CFO), o art. 44 do Código de Ética Odontológica veda divulgação de
   imagens de antes e depois; para CFM vale a Res. 1.974/2011 no mesmo
   sentido. A seção inteira está isolada em `<section id="resultados">` e pode
   ser removida em um corte só. **Confirmar conselho e registro antes de
   publicar com fotos reais.**
5. **Registro profissional** (CRO/CRM/CRBM + número) — não foi informado.
   Deve entrar no rodapé e no schema quando vier; publicidade em saúde exige.
6. **Instagram** — não informado. Slot pronto no rodapé e no `sameAs`.
7. **Domínio** — no ar como demo em `estetica-boituva-demo.vercel.app`.
   `canonical`, `og:url`, sitemap e schema já apontam pra lá. Quando o
   domínio próprio for comprado, trocar essa string nos 6 HTML + sitemap +
   robots e tirar o `noindex` (ver seção Deploy no fim deste arquivo).
8. **Descrição dos tratamentos** — usei exatamente o texto que a cliente
   mandou nos cards; o texto extra das LPs é educativo e conservador, sem
   promessa de resultado. Vale ela revisar antes de publicar.

## Status

- [x] Briefing
- [x] `index.html` (hub institucional, 9 seções)
- [x] 5 LPs de tratamento
- [ ] Fotos reais
- [ ] Revisão da cliente
- [ ] Domínio + deploy

## Entregue em 28/08/2026

```
clientes/Estetica-Boituva/
├── index.html                            hub institucional (9 seções do briefing)
├── harmonizacao-orofacial.html           LP — carro-chefe
├── botox.html                            LP
├── bioestimulador-de-colageno.html       LP (com tabela bioestimulador × preenchimento)
├── preenchimento-acido-hialuronico.html  LP
├── mesoterapia.html                      LP
├── robots.txt
├── sitemap.xml
├── .vercelignore                         barra briefing.md e img/README.md no deploy
├── briefing.md                           (interno — não vai pro ar)
└── img/README.md                         (interno — nomes e recortes das fotos)
```

Sem framework, sem build: cada HTML é autocontido, com o mesmo bloco de
tokens `:root{}` repetido. Zero dependência externa além do Google Fonts.

**Validado:** JSON-LD parseia nas 6 páginas (Service + BreadcrumbList +
FAQPage nas LPs, MedicalClinic/HealthAndBeautyBusiness no hub); nenhum link
interno ou âncora quebrada; um `<h1>` por página; detector do `impeccable`
limpo; as 6 páginas respondem 200 servidas em localhost.

**Ainda não feito:** fotos reais, revisão da cliente, domínio próprio.

---

## Deploy — demo pro lead

- **URL:** https://estetica-boituva-demo.vercel.app
- **Projeto Vercel:** `estetica-boituva-demo` (conta axubaka-6945)
- **Subiu em:** 28/08/2026

Mesmo padrão do `elisangela-paz-demo`. O alias de produção foi conferido
depois do deploy — `vercel --prod` sozinho nem sempre move o alias.

### O demo saiu com `noindex` (de propósito)

As 6 páginas têm `<meta name="robots" content="noindex, nofollow">`,
diferente do demo da Elisângela. Motivo: a Estética Boituva ainda é lead, e
o NAP real dela (nome, endereço, telefone) está numa URL que ela não possui.
Se o Google indexar isso, o negócio dela passa a ter uma segunda URL
associada à mesma ficha — ruído no SEO local dela, sem ela ter pedido nada.

O `robots.txt` continua liberando o crawl de propósito: bloquear ali
impediria o Google de ler a própria tag `noindex`.

**Quando fechar**, é um comando:

```bash
sed -i 's|content="noindex, nofollow"|content="index, follow, max-image-preview:large"|' *.html
```

### O que não vai pro ar

O `.vercelignore` barra `briefing.md`, `img/README.md` e `.vercel`.
Testado no ar depois do deploy: os três dão 404.

---
name: site-cliente
description: >
  Monta um site completo pra cliente da Nexora: hub institucional (index.html)
  + uma landing page própria por serviço, HTML/CSS autocontido, com identidade
  visual exclusiva do cliente (nunca a identidade dark da Nexora). Parte de
  dados brutos que o usuário cola no chat — perfil do Google, Instagram,
  avaliações, PDF de venda existente, Linktree fraco a substituir.
  Use quando o usuário disser "monta o site da/do <cliente>", "cria um site
  pra ela/ele", "site estruturado pra substituir o Linktree", "cria uma LP
  pra cada serviço", ou colar prints/PDF de um negócio pedindo site novo.
---

# /site-cliente — Site institucional + LP por serviço

## O que a skill entrega

Dentro de `clientes/<Nome>/`:

1. `briefing.md` — todo dado bruto coletado (Google, Instagram, avaliações,
   material de venda existente) organizado, mais as decisões de escopo e a
   lista de pendências a confirmar com o cliente
2. `index.html` — hub: quem é, credenciais/prova social, cards pros serviços,
   depoimentos, contato
3. Uma LP por serviço (`<slug-do-servico>.html`) — self-contained, focada em
   converter (agendar, comprar, se inscrever)

Nunca é só portar um PDF ou Linktree existente pro HTML — o conteúdo é
reorganizado pra vender melhor, no padrão editorial da Nexora.

## Passo 1 — Coletar e organizar o briefing

Dos dados colados (print do Google Perfil da Empresa, Instagram, avaliações,
PDF de venda, etc.), extrair:

- Identidade: nome, categoria, localização, telefone/WhatsApp, horário
- Prova social: nota e nº de avaliações do Google, seguidores do Instagram,
  prêmios/parcerias/credenciais citadas na bio
- Depoimentos reais (nunca inventar) — separar por qual serviço cada um valida
- Os serviços que vão virar LP própria — geralmente ficam claros pelo que o
  usuário mandou ("os dois que ela faz")

Salvar tudo em `clientes/<Nome>/briefing.md` **antes** de desenhar qualquer
página. Terminar o briefing com uma seção **Pendências** listando o que não
dá pra confirmar pelos dados recebidos (preço, horário completo, lista de
serviço truncada, fotos reais) — essas pendências viram nota no site
("confirme no WhatsApp"), nunca dado inventado.

## Passo 2 — Identidade visual exclusiva do cliente

**Nunca aplicar `identidade/design-guide.md` (dark editorial) no site do
cliente** — essa identidade é só pras entregas da própria Nexora (propostas,
carrossel). Cada cliente tem marca própria, calibrada pelo negócio dele
(precedente: `propostas/alex-barbosa/`, verde/palha rural; nada a ver com o
dark da Nexora).

- Escolher paleta e tom que combinem com o setor e o posicionamento do
  cliente (premium, popular, técnico, afetivo — depende do que os dados
  mostrarem)
- Tipografia com personalidade — **evitar fontes batidas de UI gerada por
  IA**: Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, Space Grotesk. O
  hook `impeccable` acusa isso no save; se acusar, trocar por algo mais
  distintivo antes de fechar (ex.: serifas editoriais como Bodoni Moda,
  Instrument Serif, Newsreader — escolher pelo tom do cliente, não repetir
  sempre a mesma)
- Ícones em SVG inline no lugar de foto, quando não tem material real

## Passo 3 — Nunca fabricar o que não foi confirmado

- **Fotos:** se não veio arquivo de imagem real (só print/PDF de referência
  visual), não gerar foto do cliente nem de "trabalho genérico". Usar bloco
  de cor/gradiente com nota discreta tipo "foto real em breve" no lugar,
  documentado como pendência no briefing
- **Preço, horário completo, lista de serviço truncada:** se o dado não veio
  explícito, não estimar. CTA de WhatsApp resolve ("fale pra saber valores")
- **Depoimento:** só usar o que foi mandado, atribuído a quem realmente
  disse

## Passo 4 — Estrutura técnica

Seguir o padrão já validado em `propostas/alex-barbosa/index.html`: HTML
único por página, CSS embutido em `<style>`, sem framework/build. Em site
multi-página, repetir o **mesmo bloco de tokens** (`:root{...}` com cores,
fontes, radius) em todo arquivo do cliente — é o que garante que hub e LPs
pareçam a mesma marca.

Itens que sempre entram:
- `<script type="application/ld+json">` com schema.org apropriado
  (`BeautySalon`/`LocalBusiness`, `Service`, `Course`, etc. conforme o caso)
- Textura de grain sutil (SVG de ruído em `background-image`, opacidade ~.05)
- `:focus-visible`, `::selection`, scrollbar customizada,
  `prefers-reduced-motion`
- CTA principal sempre com link direto (`wa.me/55...`, `tel:`), nunca
  formulário genérico sem destino

## Passo 5 — Rodar local pra revisar

**Nunca suba o servidor local pela ferramenta Bash** — ela roda num sandbox
isolado (filesystem e rede próprios) que o navegador real do Windows não
enxerga; o processo sobe, responde 200 dentro do sandbox, mas a aba do
usuário fica em branco/erro. Use a ferramenta PowerShell, que roda nativa no
host:

```powershell
Set-Location "clientes/<Nome>"
Start-Process -WindowStyle Hidden -FilePath "npx" -ArgumentList "serve","-l","<porta>"
```

Confirmar com `Invoke-WebRequest` (também via PowerShell) antes de abrir, e
abrir as páginas com `Start-Process "http://localhost:<porta>/..."` — tudo
na mesma ferramenta, pra garantir que servidor e navegador enxergam a mesma
rede.

**Evitar portas da lista de "unsafe ports" do Chrome** (ex.: 5060/5061, são
SIP) — o navegador recusa com `ERR_UNSAFE_PORT` mesmo com o servidor
respondendo 200. Usar porta alta e comum tipo 8080, 5500 ou 3000.

Se `Start-Process -FilePath "npx" -ArgumentList "serve","-l","<porta>"`
não conectar, o `npx` é um `.cmd` no Windows e às vezes falha silencioso
nesse modo. Rodar via `cmd.exe /c "npx serve -l <porta> > log.txt 2>&1"`
pra ver erro real no log antes de insistir na mesma porta.

## Depois de entregar

Seguir o fluxo padrão do `CLAUDE.md` da raiz: se o cliente é novo, perguntar
se atualiza `_memoria/empresa.md` / seção "Clientes ativos"; se o trabalho
te ensinou algo que vale pra próxima (novo tipo de identidade, novo jeito de
estruturar LP), atualizar esta skill em vez de deixar o aprendizado só na
conversa.

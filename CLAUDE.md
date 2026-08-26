# Nexora — MazyOS

> Operação da Nexora, agência de marketing digital sendo construída do
> zero por Manoel Vitor, sozinho. Aqui ficam todos os clientes,
> briefings, entregas e cobrança.

**Estrutura de pastas:**
- `_memoria/` — quem é a Nexora, como fala, foco atual
- `identidade/` — marca da Nexora (dark, editorial) aplicada nas entregas
- `clientes/` — uma subpasta por cliente, autossuficiente
- `propostas/` — propostas em rascunho ou enviadas
- `referencias/` — sites de referência pra usar na criação de sites futuros
- `marketing/` — conteúdo próprio da Nexora (site, blog, Insta, prospecção, portfólio)
- `templates/` — modelos reaproveitáveis (skills, identidade, perfis, ferramentas)
- `scripts/` — utilitários avulsos do workspace
- `saidas/` — emails, documentos pontuais
- `dados/` — arquivos a analisar
- `tarefas.md` — pipeline, prazos, próximos passos

## Quem sou

Sou o Manoel Vitor, construindo a Nexora, agência de marketing digital,
sozinho e do zero. Hoje entrego sites e landing pages; a Nexora já se
posiciona como agência completa (site, tráfego pago, SEO, automação com
IA), mesmo entregando só sites por enquanto.

## Meu serviço

- Criação de sites e landing pages (foco atual)
- Tráfego pago, SEO e automação com IA (próximos passos, ainda não
  ativos)

Capacidade simultânea: solo, sem equipe — um projeto de cada vez até
ganhar ritmo.

## Clientes ativos

**Jeniffer Almeida** — instrutora de unhas em Boituva/SP (Manicure Russa +
Curso VIP Manicure Combinada). Primeira pasta real em `clientes/`. Site
completo em construção (hub + LP de atendimento + LP do curso) pra
substituir o Linktree fraco dela — ver `clientes/Jeniffer-Almeida/briefing.md`.
Status de pagamento ainda não confirmado.

**Dra. Elisângela Paz** — advogada trabalhista/família/cível em Boituva/SP.
Fechou na reunião de 19/08: escopo travado por escrito em
`propostas/elisangela-paz/prestacao-servico.html` (LP + blog, 3 artigos
publicados na entrega, R$500). Primeira cliente paga da Nexora — status de
pagamento (entrada/total) ainda não confirmado. Falta migrar
`propostas/elisangela-paz/` pra `clientes/Elisangela-Paz/` e criar o
`briefing.md` de lá.

Fora essas duas, nenhum cliente pago confirmado ainda. Fase segue de treino:
construir mais alguns sites pra pegar o jeito antes de vender pra valer. O
`/atualizar` mantém isso sincronizado com as pastas em `clientes/`.

## Perfil de cliente

Empresas de pequeno/médio porte que já têm marketing ok (postam com
frequência no Instagram, bem avaliadas no Google, ticket um pouco
maior), mas ainda não têm site, não rodam tráfego pago/SEO nem
automação com IA. Já sabem que têm essa lacuna — não precisam ser
convencidas do problema, só de quem resolve.

## Como trabalho

Ainda no início — processo de briefing, entrega e prazos vai sendo
definido conforme os primeiros projetos (de treino e depois pagos)
acontecerem. Site oficial da Nexora, no ar desde 14/08/2026:
https://nexoramkt.com.br (fonte de estilo pras entregas — o código fica
em `marketing/site-nexora/`)

## Tom de voz

Direto, conversacional, sem jargão de guru. Frases curtas, travessão
pra ênfase, foco em resultado prático. Exemplo real: "Um site que não
é cartão de visita. É vendedor trabalhando 24 horas por dia."

Evitar: linguagem que soe como quem só quer vender sem entregar de
verdade — "vamos juntos!", "alavancar", "sinergia", promessa vazia. A
satisfação real do cliente é a prioridade da Nexora, e a escrita
precisa deixar isso claro.

## Regras do sistema

- **Demonstração de site → sempre usar `referencias/modelo-demonstracao-lp.html` como
  esqueleto.** Qualquer pedido de "faz uma demonstração de site" (uso em
  prospecção, antes de fechar) segue a mesma estrutura, seções e fluxo de
  copy desse modelo (base: demo da Dra. Elisângela Paz). Só muda a
  identidade visual (nunca a dark da Nexora) e as informações do cliente.
  Diferente da skill `/site-cliente`, que monta o site completo pro
  cliente já fechado (hub + LP por serviço) — o modelo aqui é só pra
  demo de venda, página única.
- **Blog (demo ou de cliente) → sempre lista + página HTML separada por
  artigo.** A página do blog (`blog.html`) é só hero + grade de cards
  linkando pra fora; nunca embutir o corpo dos artigos na mesma página com
  âncoras. Cada artigo é um arquivo próprio (mesmo padrão do blog da
  própria Nexora em `marketing/site-nexora/blog-*.html`), com cabeçalho,
  corpo, CTA e "leia também" linkando os outros artigos.
- **Artigo de blog → sempre usar a skill `/artigo`.** Qualquer pedido de
  artigo, post ou texto pro blog da Nexora passa pela skill, mesmo que o
  tema pareça simples. Ela tem a metodologia editorial completa (resposta
  imediata, profundidade, tabelas, contrapontos, FAQ, cluster de links) e
  entrega o HTML já linkado no `blog.html` e no `sitemap.xml`
- **Prospecção de leads → sempre usar a skill `/prospectar`.** Qualquer
  scrape do Google Maps colado no chat, pedido de "filtra esses leads",
  "quem abordar" ou lista de prospecção passa pela skill. Nicho atual:
  advocacia. Ela dedupa, corta institucional, classifica em tiers por
  reputação × fraqueza digital e salva em `marketing/prospeccao/`
- **Site novo pra cliente → sempre usar a skill `/site-cliente`.** Qualquer
  "monta o site da/do <cliente>", "cria uma LP pra ela/ele" ou material
  bruto (print do Google, Instagram, PDF de venda) pedindo site passa pela
  skill. Ela monta hub + LP por serviço, com identidade visual exclusiva do
  cliente — nunca a identidade dark da Nexora
- **Peça de portfólio → sempre usar a skill `/anonimizar-demo`.** Qualquer
  "tira as informações reais desse site", "transforma essa demo em
  portfólio" ou "cria uma versão de exemplo pra mostrar pra outros
  clientes" passa pela skill. Ela troca WhatsApp, telefone, endereço,
  e-mail, redes, nome do negócio e depoimentos por dados fictícios, gera
  arquivo novo sem sobrescrever o original, e o resultado fica em
  `marketing/portfolio/`
- Cliente novo → criar pasta `clientes/<Nome>/` com `briefing.md`
- Proposta enviada → `clientes/<Nome>/proposta.html` (ou pasta
  `propostas/` se ainda não fechou)
- Gargalo atual é duplo: (1) construir mais sites de treino até
  entregar um resultado confiável, (2) executar a cadência de prospecção
  com constância — a skill `/prospectar` e a `cadencia-follow-up.md` já
  resolveram o "como", o que falta é ritmo
- Outras regras que aparecerem com o uso

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Stripe / cobrança

*(Marcar conforme for instalando os MCPs)*

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

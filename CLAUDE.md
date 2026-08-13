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
- `marketing/` — conteúdo próprio da Nexora (Insta, portfolio)
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

Nenhum cliente pago ainda. Fase atual é de treino: construir mais
alguns sites pra pegar o jeito antes de vender pra valer. O
`/atualizar` mantém isso sincronizado com as pastas em `clientes/`
assim que o primeiro cliente entrar.

## Perfil de cliente

Empresas de pequeno/médio porte que já têm marketing ok (postam com
frequência no Instagram, bem avaliadas no Google, ticket um pouco
maior), mas ainda não têm site, não rodam tráfego pago/SEO nem
automação com IA. Já sabem que têm essa lacuna — não precisam ser
convencidas do problema, só de quem resolve.

## Como trabalho

Ainda no início — processo de briefing, entrega e prazos vai sendo
definido conforme os primeiros projetos (de treino e depois pagos)
acontecerem. Site de referência de estilo (treino, não definitivo):
https://website-alpha-rust-86.vercel.app

## Tom de voz

Direto, conversacional, sem jargão de guru. Frases curtas, travessão
pra ênfase, foco em resultado prático. Exemplo real: "Um site que não
é cartão de visita. É vendedor trabalhando 24 horas por dia."

Evitar: linguagem que soe como quem só quer vender sem entregar de
verdade — "vamos juntos!", "alavancar", "sinergia", promessa vazia. A
satisfação real do cliente é a prioridade da Nexora, e a escrita
precisa deixar isso claro.

## Regras do sistema

- Cliente novo → criar pasta `clientes/<Nome>/` com `briefing.md`
- Proposta enviada → `clientes/<Nome>/proposta.html` (ou pasta
  `propostas/` se ainda não fechou)
- Gargalo atual é duplo: (1) construir mais sites de treino até
  entregar um resultado confiável, (2) resolver prospecção ativa —
  candidata forte a virar skill via `/mapear-rotinas`
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

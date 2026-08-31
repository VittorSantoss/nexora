---
name: artigo
description: >
  Escreve artigos de blog da Nexora com padrão editorial completo — resposta imediata à
  intenção de busca, profundidade que demonstra domínio, tabelas, simulações, contrapontos
  honestos, FAQ, links internos de cluster e CTA contextual. Entrega o HTML pronto no padrão
  do site, já linkado no blog.html e no sitemap.xml.
  Use SEMPRE que o usuário pedir "cria um artigo", "escreve um artigo", "artigo sobre X",
  "post pro blog", "novo texto pro blog", "conteúdo pro blog" ou /artigo — mesmo que o pedido
  pareça simples ou o tema pareça pequeno.
---

# /artigo — Fábrica de conteúdo SEO da Nexora

> Um artigo excelente não é um artigo de 3.000 palavras.
> É um artigo que faz três coisas ao mesmo tempo:
> **1)** responde muito bem à intenção de busca,
> **2)** demonstra que a Nexora entende do assunto,
> **3)** leva o leitor naturalmente para uma próxima ação comercial.
>
> Tamanho é consequência, nunca meta. Se o tema se resolve em 1.200 palavras,
> o artigo tem 1.200 palavras.

## Dependências

- **Contexto:** `_memoria/empresa.md`, `_memoria/preferencias.md`, `_memoria/estrategia.md`
- **Visual:** `identidade/design-guide.md`
- **Pesquisa SEO (se existir):** `marketing/seo/01-pesquisa-demanda.md`, `02-analise-concorrencia.md`, `05-estrategia-conteudo.md`, `08-geo-otimizacao-ia.md`
- **Site:** `marketing/site-nexora/` — HTML estático puro, sem build. Artigos são arquivos `blog-<slug>.html` na raiz
- **Blocos HTML prontos:** `blocos.html` (nesta pasta)
- **Auditoria final:** `checklist.md` (nesta pasta)
- **Ferramentas:** WebSearch e WebFetch para pesquisa real de SERP

---

## A diferença entre mediano e excelente

Antes de qualquer coisa, entender o que estamos evitando.

**Artigo mediano** (o que uma IA genérica entrega):

> Gestor de tráfego é o profissional responsável por criar campanhas no Google e Meta Ads.
> O preço varia de acordo com a experiência do profissional, número de campanhas e orçamento.
> [algumas faixas de preço soltas]
> Entre em contato conosco para saber mais.

Informativo, correto e completamente inútil. Não responde de verdade, não prova domínio, não gera confiança.

**Artigo excelente** segue esta espinha, nesta ordem:

```
Keyword
  ↓ Resposta imediata      ← a pessoa recebe o que veio buscar em 15 segundos
  ↓ Explicação profunda    ← ensina o que está por trás
  ↓ Dados / tabelas        ← torna comparável e utilizável
  ↓ Exemplos práticos      ← simulação com números reais
  ↓ Cenários diferentes    ← "depende" respondido caso a caso
  ↓ Contrapontos           ← quando a resposta NÃO é a Nexora
  ↓ FAQ                    ← perguntas que o leitor ainda não fez
  ↓ Links internos         ← constrói o cluster de autoridade
  ↓ Experiência própria    ← o que IA genérica não consegue copiar
  ↓ CTA contextual         ← ação natural, não pedido genérico
```

Cada seção abaixo do pipeline existe para produzir um desses blocos.

---

## Estratégia de clusters de conteúdo

Artigo nenhum nasce solto. Todo artigo pertence a um **cluster temático** — uma rede de
conteúdo pilar + conteúdos satélites que, juntos, mostram pro Google (e pro leitor) que a
Nexora domina aquele assunto de verdade, não só escreveu um post avulso sobre ele.

**Pilar** — o artigo mais abrangente sobre um tema, geralmente o "o que não pode faltar"
ou "tudo sobre X" do nicho. Ex.: `blog-site-para-advogado.html`.

**Satélite** — artigo específico que aprofunda UMA dúvida, objeção ou intenção de busca
dentro do mesmo tema. Ex.: "quanto custa um site para advogado?", "advogado precisa ter
site?", "SEO para advogados: como funciona?".

```
                    ┌──────────────────────────┐
                    │   PILAR: Site para X      │
                    └──────────────────────────┘
                       ↑         ↑         ↑
                  satélite   satélite   satélite
                  (custo)   (precisa)  (SEO local)
```

Satélite linka pro pilar sempre que houver contexto. Pilar linka de volta pros satélites
relevantes. As duas pontas do link precisam existir — satélite sem pilar publicado ainda
funciona (o pilar pode vir depois), mas pilar sem nenhum satélite é um artigo isolado,
não um cluster.

Isso é uma camada **além** da "regra de ouro — cluster fecha nos dois sentidos" (logo
depois do papel 4, mais abaixo), que liga artigo → página de serviço. Um artigo passa a
fechar em duas direções diferentes, e nenhuma substitui a outra:

1. **Satélite ↔ Pilar** — blog ↔ blog, constrói autoridade temática
2. **Artigo ↔ Página de serviço** — blog ↔ LP, constrói intenção comercial

### Clusters ativos hoje

| Nicho | Pilar | Satélites de nicho publicados | Serviço |
|---|---|---|---|
| Advocacia | `blog-site-para-advogado.html` | `blog-quanto-custa-um-site-para-advogado.html`, `blog-advogado-precisa-ter-site.html`, `blog-seo-para-advogados.html`, `blog-site-ou-instagram-para-advogado.html`, `blog-erros-site-advogado-perde-cliente.html` | `servico-criacao-de-sites.html` · `servico-seo.html` |
| Odontologia | `blog-site-para-dentista.html` | `blog-quanto-custa-um-site-para-dentista.html`, `blog-site-ou-instagram-para-dentista.html`, `blog-dentista-precisa-ter-site.html`, `blog-seo-google-meu-negocio-para-dentista.html`, `blog-erros-site-dentista-perde-cliente.html` | `servico-criacao-de-sites.html` · `servico-seo.html` |
| Estética | `blog-site-para-clinica-de-estetica.html` | `blog-quanto-custa-um-site-para-clinica-de-estetica.html`, `blog-clinica-de-estetica-precisa-ter-site.html`, `blog-site-ou-instagram-para-clinica-de-estetica.html`, `blog-seo-google-meu-negocio-clinica-de-estetica.html`, `blog-erros-site-clinica-de-estetica-perde-cliente.html` | `servico-criacao-de-sites.html` · `servico-seo.html` |
| Salão / manicure | `blog-site-para-salao-de-beleza-ou-manicure.html` | `blog-site-ou-instagram-salao-de-beleza.html`, `blog-quanto-custa-um-site-para-salao-de-beleza.html`, `blog-seo-google-meu-negocio-salao-de-beleza.html`, `blog-manicure-cabeleireiro-precisa-ter-site.html` | `servico-criacao-de-sites.html` · `servico-seo.html` |
| Nutrição | `blog-site-para-nutricionista.html` | `blog-quanto-custa-um-site-para-nutricionista.html`, `blog-nutricionista-precisa-ter-site.html` | `servico-criacao-de-sites.html` · `servico-seo.html` |

> Atualizar esta tabela sempre que um pilar ou satélite novo entrar no ar — ela é a
> fotografia rápida de quem já tem cluster fechado e quem ainda é artigo isolado.
> Conferir sempre com `ls marketing/site-nexora/blog-*.html`, a lista cresce a cada artigo.

### Expansão por nicho

Sempre que um nicho mostrar potencial comercial real (prospecção ativa, cliente fechado,
ou volume de busca visível na pesquisa do papel 2), vale abrir cluster próprio pra ele —
não só deixar o "site para X" solto. Esqueleto de cluster completo por nicho (checklist
de expansão, não lista obrigatória — criar só o satélite que tiver ângulo real):

- Site para [nicho] ← pilar
- Quanto custa um site para [nicho]?
- [Profissão] precisa ter site?
- Site ou Instagram para [nicho]: qual funciona melhor?
- SEO / Google Meu Negócio para [nicho]
- Erros que fazem o site de um [nicho] perder cliente

### Regra de criação — checar antes de escrever

Antes de aceitar um tema novo (pedido pelo usuário ou sugerido no papel 1), responder:

1. **Qual cluster esse artigo pertence?** Nicho existente, tema cross-nicho (ex.: "quanto
   custa um site"), ou cluster novo?
2. **Existe um pilar relacionado?** Se sim, o satélite precisa linkar pra ele. Se não, o
   próprio artigo pode nascer como pilar — primeiro do nicho.
3. **Quais satélites já existem nesse cluster?** Checar a tabela acima + `ls
   marketing/site-nexora/blog-*.html` — linkar os relevantes.
4. **Quais artigos devem receber link de volta desse conteúdo novo?** O pilar do cluster,
   no mínimo — editar o pilar pra adicionar o link de volta faz parte da entrega, não é
   opcional (ver papel 7, EDITOR).
5. **Que outros satélites completariam esse cluster depois?** Não precisa criar agora, mas
   vale registrar como sugestão no resumo de entrega.

Não criar artigo só pra aumentar contagem de posts. Profundidade temática vence
quantidade — um cluster de 4 artigos bem interligados vale mais que 10 artigos soltos
sobre temas parecidos.

### Prioridade de cluster

Dar prioridade a clusters (novos ou em expansão), nesta ordem:

1. Alta intenção comercial — perto de decisão de compra
2. Relação direta com um serviço ativo da Nexora — hoje, Criação de Sites
3. Nicho com prospecção ativa ou cliente já fechado
4. Potencial de SEO real, validado no papel 2 — nunca achismo
5. Várias dúvidas/objeções diferentes dentro do mesmo tema — sinal de que dá pra sustentar
   vários satélites sem forçar conteúdo

```
Nicho → Pilar → Satélites → Links internos → Autoridade temática → Tráfego orgânico → Lead
```

---

## Pipeline — 7 papéis, um artigo

Executar os papéis em sequência. Cada um tem entrada, trabalho e saída definidos.
Não pular papéis, mesmo em tema simples — o que muda é a profundidade, não a existência.

### 1. ORQUESTRADOR — o brief

**Entrada:** o tema que o usuário pediu (ou a estratégia de conteúdo).

Se o usuário deu um tema → usar.
Se não deu → ler `marketing/seo/05-estrategia-conteudo.md`, checar quais temas já viraram artigo (`ls marketing/site-nexora/blog-*.html`) e oferecer as opções ainda não escritas.

Antes de definir o brief, rodar a **Regra de criação** da seção "Estratégia de clusters
de conteúdo" (acima) — todo artigo pertence a um cluster, e isso muda o que entra na
tabela abaixo (pilar existente pra linkar? satélites do mesmo nicho? o artigo nasce como
pilar novo?).

Definir e registrar mentalmente antes de escrever:

| Campo | Como decidir |
|---|---|
| **Keyword principal** | Como a pessoa realmente digita no Google, em português falado |
| **Intenção de busca** | Informacional / comparativa / **comercial** / transacional |
| **Estágio do funil** | Descoberta → consideração → **decisão** |
| **Quem lê** | Dono de PME que já sabe que tem a lacuna, não precisa ser convencido do problema |
| **O que ele decide depois de ler** | A ação concreta que o artigo destrava |
| **Serviço da Nexora conectado** | Sites / Tráfego / SEO / Automação |
| **Ângulo** | O que esse artigo diz que os outros não dizem |
| **Cluster / papel no cluster** | Nicho ou tema cross-nicho + é satélite de um pilar existente ou nasce como pilar novo |

> **Regra de escolha de tema:** priorizar quem já está perto de contratar.
> "Quanto custa contratar um gestor de tráfego em 2026?" vale mais que
> "O que é marketing digital?" — porque quem busca preço está com a mão no bolso.

### 2. PESQUISADOR — a SERP real

**Nunca escrever no escuro.** Sempre pesquisar antes.

1. `WebSearch` na keyword principal — ler os títulos e descrições do top 10
2. `WebFetch` nos 2-4 melhores resultados — entender o que já está bem respondido
3. Anotar:
   - **O padrão:** o que todo mundo cobre (o mínimo obrigatório)
   - **O gap:** o que ninguém explica direito ← aqui mora o ângulo
   - **As perguntas relacionadas:** "As pessoas também perguntam" → matéria-prima do FAQ
   - **Faixas de preço / números reais** citados no mercado, com fonte
4. Buscar variações e cauda longa da keyword para distribuir no texto

**Saída:** um mapa mental de "o que já existe" + "onde a Nexora entra diferente".

**Regra dura:** todo número que entrar no artigo tem origem — pesquisa real ou cálculo explícito.
Nunca inventar volume de busca, CPC, CPL, ticket médio ou percentual de conversão.

**Quando o artigo depende de informação atual do Google** (algoritmo, fator de ranqueamento,
funcionamento do Perfil da Empresa, política de conteúdo, atualização recente), a afirmação
**não entra sem checar fonte oficial primeiro**. Ver ordem de prioridade abaixo.

### 3. ESPECIALISTA DE CONTEÚDO — a profundidade

Este papel responde: **por que alguém pagaria por isso?**

Pegar o assunto e destrinchar o trabalho invisível por trás dele. É aqui que se prova domínio.

Exemplo, gestão de tráfego — não é "apertar o botão de anunciar":

- **Pesquisa** → concorrentes, público, palavras-chave, oferta
- **Estratégia** → objetivo, funil, estrutura de campanha, orçamento
- **Execução** → anúncios, segmentação, landing page, conversão
- **Otimização** → CPC, CTR, CPL, CPA, ROAS
- **Análise** → o que funciona, o que não funciona, onde a verba está sendo queimada

Sempre que o artigo falar de preço de um serviço, esta seção é **obrigatória** —
é ela que transforma "caro" em "faz sentido".

Traduzir cada sigla na primeira aparição: *CPL (custo por lead)*. O leitor é dono de
empresa, não profissional de marketing.

### 4. SEO / ESTRATÉGIA — a arquitetura

Definir antes de escrever:

**Título e URL**
- `<title>`: 50-60 caracteres, keyword no início, ano quando o tema for de preço/tendência
- Slug: `blog-<kebab-case-curto>.html`, sem stopwords → `blog-quanto-custa-gestor-de-trafego.html`
- Meta description: 150-160 caracteres, com a promessa concreta do texto

**Estrutura de headings**
- Um `<h1>` só, com a keyword de forma natural
- `<h2>` em linguagem de pergunta sempre que couber — é o que IA e featured snippet leem
- `<h3>` para os cenários dentro de cada bloco

**Links internos (o cluster)** — mínimo 3, sendo:
- 1+ para outro artigo do blog (contexto lateral)
- 1+ para a página de serviço correspondente (intenção comercial)
- Âncoras descritivas, nunca "clique aqui"
- **Se o artigo pertence a um cluster de nicho com pilar já publicado** (ver "Clusters
  ativos hoje"), o link pro pilar é obrigatório — conta dentro do mínimo de 3, mas não
  substitui o link pra página de serviço
- **Se o artigo É o pilar** de um cluster novo, linkar pros satélites que já existirem
  nesse nicho (se nenhum existir ainda, seguir normal — o pilar nasce sozinho e recebe
  link de satélites futuros)

Artigos disponíveis hoje para linkar:

| Página | Arquivo |
|---|---|
| Quanto custa um site | `blog-quanto-custa-um-site.html` |
| Site ou landing page | `blog-site-ou-landing-page.html` |
| Instagram mas não Google | `blog-instagram-mas-nao-google.html` |
| Serviço — Criação de Sites | `servico-criacao-de-sites.html` |
| Serviço — Tráfego Pago | `servico-trafego-pago.html` |
| Serviço — SEO | `servico-seo.html` |
| Serviço — Automação com IA | `servico-automacao-com-ia.html` |

> Sempre conferir a pasta antes — a lista cresce a cada artigo publicado.

**Schema JSON-LD:** `BlogPosting` sempre. Somar `FAQPage` quando houver FAQ (é o que faz
o artigo aparecer expandido na busca e ser citado por ChatGPT/Gemini/Perplexity).

---

## Regra de ouro — o cluster fecha nos dois sentidos

Esta regra cobre a ligação **artigo → página de serviço**. Pra ligação **satélite ↔
pilar** dentro do próprio blog, ver "Estratégia de clusters de conteúdo" no início deste
arquivo — o princípio é o mesmo (nunca deixar link de mão única), só a ponta de chegada
muda.

Link interno de artigo → página de serviço não é o suficiente. Isso é rua de mão única:
quem cai direto na página de serviço (vindo de anúncio, busca ou link direto) nunca vê
o artigo, e o Google enxerga uma conexão capenga em vez de um conjunto de páginas que
domina o assunto de verdade.

**Todo artigo novo precisa aparecer na página de serviço correspondente**, na seção
"Pra aprofundar" (logo antes do CTA final). Duas situações:

- **A seção já existe** (SEO, Sites, Tráfego, Automação já têm) → adicionar o card do
  artigo novo, mantendo os melhores já lá. Se a seção usa `grid grid-3` e já tem três
  cards de peso equivalente, avaliar se o artigo novo substitui um mais fraco ou se
  vale subir pra `grid-4`.
- **A seção não existe** (tema novo sem página de serviço direta, ou serviço com um
  artigo só usando o card "Ver blog" de preenchimento) → criar a seção copiando o
  bloco abaixo, ou trocar o card de preenchimento pelo artigo novo.

```html
<!-- ===== LEIA NO BLOG ===== -->
<section class="section">
  <div class="container">
    <div class="reveal" style="margin-bottom: clamp(2rem,4vw,3rem);">
      <h2 class="section-title">Pra aprofundar</h2>
      <p class="section-sub">FRASE CURTA LIGANDO O TEMA AO SERVICO.</p>
    </div>
    <div class="grid grid-3">
      <a href="blog-SLUG.html" class="bezel reveal">
        <div class="bezel-inner post-card">
          <div class="post-meta"><span>CATEGORIA</span><span class="dot"></span><span>N min</span></div>
          <h3>TITULO DO ARTIGO</h3>
          <p>CHAMADA DE 1-2 LINHAS.</p>
          <span class="post-link">Ler artigo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </span>
        </div>
      </a>
    </div>
  </div>
</section>
```

Página de serviço por tema, pra saber onde mexer:

| Tema do artigo | Página de serviço |
|---|---|
| SEO, Google, GMB | `servico-seo.html` |
| Google Ads, Meta Ads, anúncio | `servico-trafego-pago.html` |
| Site, landing page, prazo, preço de site | `servico-criacao-de-sites.html` |
| Automação, chatbot, IA, atendimento | `servico-automacao-com-ia.html` |

Isso vale mesmo quando o artigo é o primeiro daquele tema — um card sozinho (sem `grid`,
com `style="max-width:420px"`) já fecha o ciclo melhor que nenhum.

### 5. COPYWRITER — o texto

Escrever seguindo a espinha, bloco a bloco.

**Abertura (2 parágrafos, no máximo)**
Situação concreta que o leitor reconhece. Nada de "no mundo atual do marketing digital".

**Resposta imediata** — bloco `.answer-box`, logo depois da abertura.
A pessoa veio buscar uma resposta. Ela recebe ali, sem rolar a página.

> Em 2026, a gestão de tráfego pago para pequenas e médias empresas varia aproximadamente
> de R$ 800 a R$ 5.000 por mês, dependendo da quantidade de campanhas, plataformas,
> complexidade da operação e nível de acompanhamento.
>
> Mas o valor da gestão é só uma parte. Você também precisa contar a verba dos anúncios.

Duas frases. A resposta e a ressalva que ninguém dá.

**Tabela de faixas** — sempre seguida de `.article-note` deixando claro que são
faixas referenciais, não tabela oficial de mercado.

**Profundidade** (saída do papel 3) — o trabalho por trás do preço.

**Simulação com números** — bloco `.article-calc`.
Escolher um cenário concreto do público real da Nexora (clínica, oficina, escritório, loja).
Mostrar a conta inteira: ticket → meta → taxa de fechamento → leads necessários →
custo por lead → mídia → gestão → total.
Fechar **sempre** com a ressalva: CPC, CPL, conversão e fechamento variam por segmento,
região, oferta, concorrência e qualidade do atendimento comercial.

**A pergunta que o leitor ainda não fez**
O bloco que separa artigo bom de artigo excelente. Antecipar a objeção real:
*"gestor de tráfego barato vale a pena?"*, *"posso fazer eu mesmo?"*,
*"quanto tempo até dar resultado?"*
Responder com honestidade desconfortável — um gestor de R$ 500 pode ser ótimo para
determinada operação, e um de R$ 3.000 pode não entregar. O que se compara é escopo.

**Comparação de cenários** — tabela ou seção com as opções reais
(fazer sozinho / freelancer / agência), dizendo quando **cada uma** faz sentido.

> Isto gera confiança justamente porque não afirma que a Nexora é a solução para todo mundo.
> Um artigo que empurra a agência em todas as linhas queima a credibilidade que o resto construiu.

**Só agora: como a Nexora trabalha**
Depois de entregar valor de verdade. Processo numerado, curto, concreto —
diagnóstico → estrutura → implementação → otimização → escala. Sem adjetivo de vendedor.

**FAQ** — 5-8 perguntas reais, tiradas do "As pessoas também perguntam" do papel 2.
Resposta objetiva em 2-4 linhas. Usa `.faq-item` (o accordion já funciona via `js/main.js`).

**Experiência própria** — ver a regra de ouro logo abaixo.

**CTA contextual — em duas camadas**

Nunca "entre em contato para saber mais". Sempre ligado ao que o artigo acabou de discutir.

*Camada 1 — dentro do artigo, baixo compromisso.* Um parágrafo oferecendo o diagnóstico
gratuito, com link do WhatsApp e texto pré-preenchido coerente com o tema:
`https://wa.me/5515992468675?text=<mensagem-url-encoded>`

*Camada 2 — `cta-band` no fim da página, o lead quente.* **Quem leu um artigo inteiro sobre
um assunto é o lead mais qualificado que existe para o serviço daquele assunto.** O botão
primário leva para a landing page do serviço correspondente — não para o WhatsApp:

| Tema do artigo | LP de destino |
|---|---|
| SEO, aparecer no Google, GMB | `servico-seo.html` |
| Anúncio, Google Ads, Meta Ads | `servico-trafego-pago.html` |
| Site, landing page, preço de site | `servico-criacao-de-sites.html` |
| Automação, resposta de lead, IA | `servico-automacao-com-ia.html` |

O WhatsApp continua no `cta-band` como botão secundário (`btn-line`), preservando quem
quer conversar direto. Link interno não leva `target="_blank"`.

O texto do `cta-band` faz a ponte honesta com o que o artigo concluiu — nada de repetir a
oferta que a própria LP já faz. Exemplo que funcionou: *"Se você leu até aqui e concluiu que
prefere alguém tocando isso com método e constância, a página do serviço mostra exatamente
como funciona."*

### 6. REVISOR SEO — a auditoria

Rodar o `checklist.md` desta pasta, item por item. Nada de "parece bom".
Se algum item falhar, voltar ao papel responsável e corrigir antes de seguir.

### 7. EDITOR — a entrega

1. Gravar `marketing/site-nexora/blog-<slug>.html`
2. Adicionar o card em `marketing/site-nexora/blog.html` — **no topo do grid**, mais recente primeiro
3. Adicionar a URL em `marketing/site-nexora/sitemap.xml` com `lastmod` de hoje e `priority` 0.8
4. **Fechar o cluster na página de serviço correspondente** (ver regra de ouro abaixo) — sem isso o artigo fica em rua de mão única
5. **Se o artigo é satélite de um pilar existente**, editar o pilar pra adicionar o link
   de volta (seção final ou "leia também") — e atualizar a tabela "Clusters ativos hoje"
   no início deste arquivo. Se o artigo nasce como pilar novo, registrar a linha nova
   nessa mesma tabela.
6. Apresentar o resumo de entrega (formato no fim deste arquivo)

---

## Regra de ouro — experiência própria nunca se inventa

O que torna o artigo impossível de copiar por IA genérica é a experiência real:
*"em nossos testes com empresas locais, percebemos que..."*,
*"neste projeto, começamos com R$ X por dia e encontramos..."*

**A Nexora ainda não tem cliente pago.** Então:

- **Proibido** inventar case, resultado, número de cliente ou print de campanha
- Onde a experiência entraria, inserir um marcador visível no HTML:

```html
<!-- [EXPERIENCIA PROPRIA] Quando tiver dado real, trocar este paragrafo por:
     "No projeto X, comecamos com R$ Y/dia e o custo por lead ficou em R$ Z."
     Ate la, o paragrafo abaixo sustenta o texto sem inventar nada. -->
```

- E listar todos os marcadores no resumo de entrega, para o Manoel preencher quando tiver os dados
- Enquanto não houver caso próprio, sustentar a autoridade com **raciocínio e método** —
  mostrar *como se pensa o problema* já prova domínio, e é honesto

O que **pode** ser usado hoje sem mentir: o raciocínio por trás das decisões, a lógica das
contas, o que se observa no mercado (com fonte), e o próprio site da Nexora como exemplo.

---

## Regra de ouro — fatos, fontes e verificação

**Nunca inventar** regra, número, estatística, atualização de algoritmo, fator de
ranqueamento ou afirmação atribuída ao Google. Se não tem certeza, não afirma — pesquisa
ou marca a lacuna.

Toda afirmação do artigo se encaixa em um destes cinco tipos, e o texto deixa isso
implícito pelo jeito como fala (sem precisar rotular no HTML):

| Tipo | Como soa no texto |
|---|---|
| **Fato confirmado** | "O Google recomenda X" (com fonte checada) |
| **Recomendação** | "O ideal é fazer X" (orientação da Nexora, não regra do Google) |
| **Experiência prática** | "No que observamos em projetos parecidos..." (só com dado real, nunca inventado) |
| **Hipótese** | "É provável que..." / "Tudo indica que..." (deixar claro que é leitura, não certeza) |
| **Dado de mercado** | "Pesquisas apontam que..." (com fonte real, nunca solto) |

Misturar esses tipos sem deixar a diferença perceptível é o erro mais comum de conteúdo
genérico sobre SEO — o leitor não consegue saber o que é regra e o que é opinião.

**Ordem de prioridade das fontes**, da mais confiável pra menos:

1. Google Search Central
2. Google Business Profile Help
3. Documentação oficial da ferramenta/plataforma (Meta Business Help, Google Ads Help etc.)
4. Estudos e pesquisas de fontes reconhecidas
5. Fontes secundárias confiáveis

**Blog de terceiro não é fonte sobre o algoritmo do Google** — só o próprio Google é.
Um blog de agência dizendo "o Google agora prioriza X" é opinião de mercado, no máximo
categoria 4 ou 5 — nunca tratar como fato confirmado.

Na prática: se o **PESQUISADOR** (papel 2) encontrar uma afirmação sobre o Google que
precisa entrar no artigo, ele busca a fonte oficial via WebSearch/WebFetch antes de o
**COPYWRITER** (papel 5) escrever a frase. Sem fonte oficial encontrada → a frase vira
recomendação ou hipótese, nunca fato.

---

## Tom de voz — inegociável

Segue `_memoria/preferencias.md`:

- Direto, conversacional, sem jargão de guru
- Frases curtas. Travessão para ênfase — como este.
- Parágrafos de 2-4 linhas. Bloco de texto denso afasta leitor de celular
- Concreto sempre: número, prazo, exemplo. Nunca adjetivo vago
- Referência viva: *"Um site que não é cartão de visita. É vendedor trabalhando 24 horas por dia."*

**Banido:** "vamos juntos!", "alavancar", "sinergia", "no mundo atual", "cada vez mais",
"não é segredo que", "revolucionar", "solução completa", promessa de resultado garantido,
qualquer frase que soe como quem quer vender sem entregar.

**Teste final:** se a frase caberia igual no site de qualquer concorrente, ela não merece estar lá.

---

## Formato de saída — HTML no padrão do site

O site é HTML estático puro, **sem build**. O artigo é um arquivo completo.

Copiar a estrutura de `marketing/site-nexora/blog-quanto-custa-um-site.html`:
`<head>` completo → grain → header/nav (com `class="active"` no Blog) → `page-hero` com
`post-meta` e `h1` → `section-tight` com `<article class="article">` → `cta-band` →
footer → FAB do WhatsApp → scripts.

Os blocos novos (resposta direta, tabela, simulação, nota, FAQ, leia também) estão prontos
para copiar em `blocos.html` desta pasta. O CSS já existe em `css/style.css`.

**Nunca** inventar classe nova nem escrever CSS inline de estrutura. Se um bloco realmente
não existir no design system, avisar o usuário antes de criar.

---

## Resumo de entrega

Ao terminar, apresentar exatamente assim:

```
ARTIGO: <título>

Arquivo:   marketing/site-nexora/blog-<slug>.html
Keyword:   <keyword principal> · intenção <tipo>
Tamanho:   <n> palavras · <n> min de leitura
Cluster:   <nicho ou tema cross-nicho> · <papel: pilar novo / satélite de <pilar>>

Blocos:    resposta direta · tabela de faixas · simulação · contrapontos · FAQ (<n>)
Links:     <n> internos (<lista>)
Schema:    BlogPosting + FAQPage

Também atualizei:
  blog.html    → card no topo do grid
  sitemap.xml  → URL nova, priority 0.8
  <pilar/satélite editado pra linkar de volta, se houver>
  Tabela "Clusters ativos hoje" (neste SKILL.md) → <o que mudou, se mudou>

Satélites que completariam esse cluster depois: <sugestões, ou "nenhuma por ora">

PRA VOCÊ PREENCHER:
  <lista dos marcadores [EXPERIENCIA PROPRIA], com linha e o que colocar>
  (se não houver, escrever: nenhum — o artigo se sustenta sem dado próprio)

Próximo passo: revisar, e rodar /salvar pra publicar.
```

---

## Revisão final — as dez perguntas

Além do `checklist.md` (auditoria técnica item a item), rodar este teste de leitura antes
de considerar o artigo pronto. Se qualquer resposta for "não", o artigo volta pra mesa:

1. Eu responderia minha própria pergunta depois de ler isso?
2. Existe informação aqui que não encontrei facilmente nos concorrentes?
3. Existe alguma afirmação sem fonte?
4. Alguma frase apresenta hipótese como fato?
5. Existe alguma promessa exagerada?
6. O conteúdo demonstra experiência?
7. O artigo possui uma intenção comercial clara?
8. O CTA faz sentido?
9. Existem links internos relevantes?
10. O leitor consegue tomar uma decisão depois de ler?

---

## Quando NÃO usar

- Carrossel avulso → `/carrossel`
- Artigo + carrossel + legendas de uma vez → `/publicar-tema` (que chama esta skill para a parte do artigo)
- Editar artigo já publicado → editar o HTML direto
- Pesquisa de palavra-chave sem escrever nada → `/seo`

## Princípios

1. **Responder antes de explicar.** A resposta vem no topo, nunca no fim.
2. **Profundidade prova domínio.** Mostrar o trabalho invisível é o que justifica o preço.
3. **Honestidade converte mais que persuasão.** Dizer quando a Nexora não é a resposta é o que faz acreditarem quando ela é.
4. **Todo número tem origem.** Pesquisa real ou conta explícita — nunca chute com cara de dado.
5. **A Nexora entra por último.** Valor primeiro, oferta depois.
6. **Cluster, não texto solto.** Todo artigo linka e é linkado — pro pilar do seu nicho (se existir) e pra página de serviço correspondente. Profundidade temática vence quantidade de posts.
7. **Tamanho é consequência.** Nem uma palavra de enchimento.
8. **Nunca resumir concorrente, superar ele.** Achar o que ele não respondeu, o que ele
   errou, o exemplo que faltou — e entregar isso. Resumo de SERP não constrói autoridade.
9. **Fato, recomendação, experiência, hipótese e dado de mercado nunca se confundem.**
   O leitor sempre sabe qual é qual, mesmo sem rótulo explícito no texto.

---
name: prospectar
description: >
  Transforma um scrape bruto do Google Maps (perfis GMN) numa lista de leads qualificados
  e priorizada por tier, focada em escritórios de advocacia com boa reputação e site fraco
  ou inexistente. Faz dedupe, corta institucional e ruído, classifica por força do perfil ×
  fraqueza digital, e entrega o markdown pronto em marketing/prospeccao/ com telefone,
  diagnóstico e ângulo de abordagem por lead.
  Use SEMPRE que o usuário colar dados do Google Maps, pedir "filtra esses leads",
  "separa quem tem tendência de comprar site", "prospecção em <cidade>", "lista de
  advogados", "quem abordar" ou /prospectar.
---

# /prospectar — Qualificação de leads da Nexora

> Nicho atual: **advocacia**. A metodologia vale pra outros nichos, mas as
> regras de compliance, os ângulos de abordagem e os critérios de corte deste
> arquivo foram calibrados pra escritórios de advocacia. Não aplicar em outro
> setor sem o Manoel pedir explicitamente.

## O que a skill entrega

Um arquivo `marketing/prospeccao/<nicho>-<cidade>.md` com:

1. Leads em 4 tiers, ordenados por prioridade real de abordagem
2. Nome, nota, nº de avaliações, telefone e diagnóstico digital de cada um
3. Lista explícita do que foi descartado e por quê
4. Ângulo de abordagem por tier
5. Checklist de verificação antes de mandar mensagem

Nunca entregar só a tabela no chat. O arquivo é a entrega — o chat é o resumo.

## Dependências

- **Contexto:** `_memoria/empresa.md`, `_memoria/preferencias.md`, `_memoria/estrategia.md`
- **Perfil de cliente:** definido no `CLAUDE.md` — empresas que já fazem marketing
  ok (postam, bem avaliadas) mas não têm site. Esse é o alvo, não "qualquer
  empresa sem site"
- **Abordagem:** `abordagem.md` (nesta pasta) — mensagens prontas por tier
- **Ferramentas:** WebSearch/WebFetch pra verificar sites quando o dado do
  scrape for ambíguo

---

## Entrada: o scrape do Google Maps

O Manoel cola um TSV com as colunas do scraper do Maps. As colunas úteis:

| Coluna do scraper | O que é |
|---|---|
| `hfpxzc href` | URL do perfil no Maps |
| `xxVWCe` / `qBF1Pd` | Nome do estabelecimento (duplicado) |
| `MW4etd` | Nota (ex: `5,0`) |
| `UY7F9` | Nº de avaliações (ex: `(63)`) |
| `UsdlK` | Telefone |
| `lcr4fd href` | Site cadastrado no perfil |
| `e4rVHe` | Flag `Nenhuma avaliação` |

### Três armadilhas conhecidas do scrape

Verificar sempre, porque já apareceram no primeiro uso:

1. **Linhas desalinhadas.** O scraper às vezes joga o site de um perfil na linha
   de outro (ex: "Alessandra Antunes" apareceu com o nome e telefone do Borges
   Gonzalez). Sinal: nome da coluna `xxVWCe` diferente do `qBF1Pd`. Quando os
   dois não batem, **descartar a linha** e usar a ocorrência limpa do mesmo
   estabelecimento.
2. **Duplicatas.** O mesmo escritório aparece 2–3 vezes (o Maps repete quando
   o scroll recarrega). Deduplicar pelo ID do perfil na URL (`0x...:0x...`),
   não pelo nome — nome pode variar.
3. **Links `google.com/aclk`** na coluna de site **não são site**. São anúncio
   patrocinado. Esses perfis vão pro Tier D, não pro "tem site".

---

## Filtro em 3 passos

### Passo 1 — Cortar o que não é lead

Descartar sem dó:

- **Institucional / entidade de classe:** OAB, CAASP, Defensoria, sindicato
- **Fora do serviço:** cobrança, contabilidade, despachante, cartório —
  aparecem na busca por proximidade mas não são advocacia
- **Sem nome real:** "Escritório de Advocacia", "A D V O C A C I A" — perfil
  abandonado, sem dono identificável pra abordar
- **Zero avaliação** (`Nenhuma avaliação`): não atende o perfil de cliente da
  Nexora. Sem prova social não existe o "já faz marketing ok". Manter numa
  lista separada só se o Manoel pedir volume.
- **Já tem site bom:** domínio próprio, HTTPS, site institucional real.
  Verificar antes de assumir — ver Passo 3.

### Passo 2 — Classificar em tiers

O eixo é sempre o mesmo: **quanto de reputação já construíram × quanto estão
desperdiçando por não ter onde converter.**

| Tier | Critério | Ângulo |
|---|---|---|
| **A** | Nota ≥ 4,5 · **10+ avaliações** · sem site | Máxima prioridade. Já provaram que atendem bem e não têm pra onde mandar quem busca |
| **B** | Nota ≥ 4,5 · **3 a 9 avaliações** · sem site | Mesmo argumento, menos prova social. Segunda leva |
| **C** | Nota ≥ 4,5 · qualquer volume · **site fraco** | Não é "você precisa de site", é reforma. Argumento mais difícil |
| **D** | **Paga anúncio** (link `aclk`) e não tem site próprio | Tem verba de mídia e manda o clique pra lugar nenhum |

**O que conta como "site fraco" (Tier C):**

- HTTP sem SSL (`http://` no link) — o Chrome marca como "não seguro"
- Subdomínio de plataforma grátis: `.wixsite.com`, `.lovable.app`,
  `.webnode`, `.blogspot`, `.negocio.site`
- Só link de rede social: Instagram profilecard, página do Facebook
- Só uma landing page de campanha, sem site institucional

**Dentro de cada tier, ordenar por nº de avaliações (decrescente).** Volume de
avaliação é o melhor proxy de que o escritório tem movimento e verba.

### Passo 3 — Verificar antes de cravar

Campo de site vazio no GMN **não prova** que o escritório não tem site — muitos
simplesmente não cadastraram. Antes de fechar o arquivo:

- Rodar WebSearch no nome + cidade dos leads do **Tier A** (os outros o Manoel
  verifica na hora da abordagem)
- Se achar site próprio ativo, mover pro Tier C ou pro descarte
- Anotar no arquivo quais foram verificados e quais não

Nunca afirmar "não tem site" sem ter verificado. Escrever "sem site cadastrado
no GMN" quando não deu pra confirmar.

---

## Compliance: a trava da advocacia

**Isto entra em todo arquivo gerado.** É o que separa a Nexora de quem vende
site genérico pra advogado e coloca o cliente em risco.

O **Provimento 205/2021 do CFOAB** regula publicidade na advocacia:

**Pode:**
- Site institucional com áreas de atuação, currículo, artigos e conteúdo informativo
- SEO e presença orgânica no Google
- Google Meu Negócio, redes sociais com conteúdo educativo
- Anúncio pago com conteúdo informativo (permitido desde 2021, com limites)

**Não pode:**
- Promessa ou garantia de resultado ("ganhe sua causa", "receba seu INSS")
- Mercantilização: preço em destaque, promoção, "consulta grátis" como chamariz
- Captação agressiva de clientes, sensacionalismo, uso de casos concretos
  com identificação

Na abordagem, citar isso **de leve** — mostra que a Nexora conhece o setor e
não vai entregar uma landing page de infoproduto pra um escritório sério.
Não transformar a mensagem numa aula de compliance.

---

## Formato do arquivo de saída

Caminho: `marketing/prospeccao/advogados-<cidade>.md`
Se já existir, **atualizar** o arquivo (marcar leads já abordados), não sobrescrever.

```markdown
# Prospecção — Advocacia em <Cidade>/<UF>

**Fonte:** scrape do Google Maps (perfis GMN) · **Data:** <data>
**Critério:** nota alta + volume de avaliação relevante + site fraco ou inexistente
**Total bruto:** ~N perfis · **Qualificados:** N

## Tier A — prioridade máxima
<uma linha explicando o critério>

| Escritório | Nota | Avaliações | Telefone | Situação | Status |
|---|---|---|---|---|---|

**Por que abordar:** <parágrafo curto, tom Nexora, o argumento real>

## Tier B — bom perfil, volume menor
## Tier C — tem site, mas é fraco
(tabela ganha coluna "Site atual" e "Fraqueza")
## Tier D — pagam anúncio e não têm site

## Descartados
- **Institucional:** ...
- **Fora do serviço:** ...
- **Sem avaliação nenhuma:** ...
- **Já têm site decente:** ...

## Antes de abordar
<checklist de 4 itens, incluindo o Provimento 205/2021>
```

A coluna **Status** começa vazia. Vai sendo preenchida com
`abordado 20/08` / `respondeu` / `sem interesse` conforme o Manoel trabalha a
lista — é o que faz o arquivo virar pipeline em vez de relatório morto.

---

## Resumo no chat

Depois de salvar o arquivo, no chat entregar **só**:

1. Link pro arquivo
2. Tabela do Tier A completa (é a que ele vai usar hoje)
3. Contagem dos Tiers B, C e D
4. **O destaque** — o lead mais óbvio da lista e por quê
5. As ressalvas de verificação (máximo 3 itens)

Não repetir as tabelas B/C/D no chat. Elas estão no arquivo.

---

## Tom

Vale o tom de voz da Nexora do `CLAUDE.md`: direto, frase curta, sem jargão.

- ✅ "Alex Barbosa tem 63 avaliações 5,0 e nenhum site. Começaria por ele."
- ❌ "Este lead apresenta um alto potencial de conversão, vamos alavancar!"

No diagnóstico de cada lead, ser factual. "Sem site" é melhor que "grande
oportunidade digital inexplorada".

---

## Depois de entregar

Se o Manoel abordar leads e alguém responder, perguntar se quer atualizar a
coluna Status. Se algum critério do filtro se mostrar errado na prática
(ex: escritórios com 3 avaliações respondem melhor que os com 30), atualizar
esta skill — o filtro é hipótese, não verdade.

# Checklist — auditoria antes de entregar o artigo

> Rodar item por item, sem pular. Marcar cada um.
> Se algum falhar, voltar ao papel responsável e corrigir **antes** de gravar o arquivo.
> "Parece bom" não é auditoria.

---

## 1. Intenção de busca

- [ ] A resposta que a pessoa veio buscar aparece **antes da primeira rolagem** (bloco `.answer-box`)
- [ ] A resposta é objetiva — número, faixa ou afirmação direta, não "depende de vários fatores"
- [ ] A ressalva que ninguém dá está junto da resposta (o que mais entra na conta)
- [ ] O `<h1>` entrega a mesma promessa que o texto cumpre — sem isca
- [ ] Um leitor que sair após 20 segundos já saiu com valor

## 2. Profundidade — prova de domínio

- [ ] Existe uma seção que mostra o **trabalho invisível** por trás do serviço
- [ ] Toda sigla é traduzida na primeira aparição — *CPL (custo por lead)*
- [ ] Tem pelo menos um bloco que um concorrente não copiaria em cinco minutos
- [ ] Nenhum parágrafo poderia ser colado igual no site de outra agência

## 3. Dados e números

- [ ] Todo número tem origem: pesquisa real (papel 2) ou conta explícita no texto
- [ ] Nenhum volume de busca, CPC, CPL ou taxa de conversão foi chutado
- [ ] Tabela de faixas presente quando o tema envolve preço
- [ ] **Toda** tabela de valores tem `.article-note` de ressalva logo abaixo
- [ ] Simulação (`.article-calc`) fecha a conta do começo ao fim, sem pular etapa
- [ ] A simulação diz explicitamente que é simulação, não previsão

## 3.1 Fontes e tipo de afirmação

- [ ] Toda afirmação sobre o Google (algoritmo, ranqueamento, Perfil da Empresa, política)
      foi checada em fonte oficial — Google Search Central ou Google Business Profile Help
- [ ] Nenhuma afirmação sobre o Google tem como única base um blog de terceiro
- [ ] Fato confirmado, recomendação, experiência prática, hipótese e dado de mercado são
      distinguíveis no texto — nenhuma hipótese está disfarçada de fato
- [ ] Nenhuma atualização de algoritmo ou fator de ranqueamento foi citado sem fonte

## 4. Honestidade

- [ ] O artigo responde a pergunta que o leitor **ainda não fez** (a objeção real)
- [ ] Existe comparação de cenários dizendo quando **cada** opção faz sentido
- [ ] O texto admite em algum ponto que a Nexora **não** é a resposta para todo mundo
- [ ] Nenhuma promessa de resultado garantido
- [ ] Nenhum case, cliente, número ou resultado inventado
- [ ] Onde faltou experiência real, há marcador `[EXPERIENCIA PROPRIA]` — nunca invenção

## 5. Tom de voz

- [ ] Frases curtas, parágrafos de 2-4 linhas
- [ ] Zero ocorrências de: "vamos juntos", "alavancar", "sinergia", "solução completa",
      "no mundo atual", "cada vez mais", "não é segredo que", "revolucionar"
- [ ] Nada soa como vendedor empurrando — soa como quem entende e explica
- [ ] Travessão usado para ênfase, no ritmo do site
- [ ] Concreto no lugar de adjetivo vago

## 6. SEO técnico

- [ ] `<title>` de 50-60 caracteres, keyword no início
- [ ] `<meta name="description">` de 150-160 caracteres, com a promessa concreta
- [ ] `<link rel="canonical">` com a URL final correta
- [ ] Um `<h1>` só, com a keyword de forma natural
- [ ] `<h2>` em forma de pergunta onde couber (featured snippet e IA leem isso)
- [ ] Open Graph e Twitter Card preenchidos com o título e a descrição **deste** artigo
- [ ] JSON-LD `BlogPosting` com datas, URL e autor corretos
- [ ] JSON-LD `FAQPage` presente quando há FAQ, com o **mesmo texto** das perguntas do corpo
- [ ] `datePublished` e `dateModified` batem com a data real

## 7. Links internos — o cluster

- [ ] Mínimo 3 links internos
- [ ] Pelo menos 1 para outro artigo do blog
- [ ] Pelo menos 1 para a página de serviço correspondente
- [ ] Âncoras descritivas — nenhum "clique aqui" ou "saiba mais"
- [ ] Bloco `.article-related` no fim do artigo
- [ ] Todos os arquivos linkados **existem** de fato em `marketing/site-nexora/`

## 8. Conversão

- [ ] O CTA final é contextual — fala do que o artigo discutiu, não "entre em contato"
- [ ] Link do WhatsApp com texto pré-preenchido coerente com o tema
- [ ] O texto do WhatsApp está URL-encoded corretamente
- [ ] A Nexora só aparece **depois** de o artigo ter entregue valor
- [ ] Seção `cta-band` no fim da página, no padrão do site
- [ ] **Botão primário do `cta-band` aponta para a LP do serviço do tema** — não pro WhatsApp
- [ ] WhatsApp presente como botão secundário (`btn-line`)
- [ ] O link interno da LP **não** tem `target="_blank"`
- [ ] O texto do `cta-band` faz ponte com a conclusão do artigo, sem repetir a oferta da LP

## 9. HTML e padrão do site

- [ ] Estrutura idêntica à de `blog-quanto-custa-um-site.html`
- [ ] `class="active"` no link Blog da navegação
- [ ] Nav mobile completo (o mesmo conjunto de links das outras páginas)
- [ ] `post-meta` com categoria · data · tempo de leitura
- [ ] Toda tabela envolvida em `.table-wrap` — se não, estoura no celular
- [ ] Nenhuma classe inventada; nenhum CSS inline de estrutura
- [ ] Footer, FAB do WhatsApp e os três `<script>` finais presentes
- [ ] Scripts da Vercel (insights e speed-insights) no fim do `<body>`

## 10. Publicação

- [ ] Arquivo gravado como `marketing/site-nexora/blog-<slug>.html`
- [ ] Card adicionado **no topo** do grid em `blog.html`
- [ ] URL adicionada em `sitemap.xml` com `lastmod` de hoje e `priority` 0.8
- [ ] Tempo de leitura do card bate com o do artigo
- [ ] Resumo de entrega apresentado, com os marcadores `[EXPERIENCIA PROPRIA]` listados

---

## Teste final — as dez perguntas

Se qualquer uma falhar, o artigo volta pra mesa:

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

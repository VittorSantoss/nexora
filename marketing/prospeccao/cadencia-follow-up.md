# Cadência de follow-up — prospecção Nexora

> Processo pra depois do primeiro contato: quantos toques mandar, quanto tempo
> esperar entre eles, quando trocar de canal e quando parar. Complementa a
> skill `/prospectar` e o `abordagem.md` — aquele arquivo tem a mensagem certa
> por tier, este arquivo diz **quando e quantas vezes mandar**.

**Criado:** 26/08/2026 · **Por quê:** o Manoel prospecta 20–40 leads/dia mas
`abordagem.md` hoje só previa 1 follow-up. Dado de mercado (IRC Sales
Solutions, ZoomInfo, Flowlu) mostra que 80% das vendas fecham a partir do 5º
contato, e a maioria dos vendedores desiste antes disso. Esse processo ajusta
a cadência da Nexora pra captar isso sem virar spam nem tomar o dia inteiro.

---

## O que muda em relação ao que já existe

`abordagem.md` hoje diz: *"Um follow-up só. Se não respondeu depois de 4–5
dias, mais um. Depois disso, para."* — isso é só **2 toques no total**. Os
dados mostram que a maior parte das respostas positivas vem entre o 3º e o
5º toque, e ligação/troca de canal recupera lead que mensagem sozinha não
recupera. A cadência abaixo substitui essa regra por **4 toques em até 2
canais**, adaptado ao seu volume e ao nicho (advocacia, com a trava do
Provimento 205/2021 já coberta no `abordagem.md`).

**Isso não vira 10 toques em 21 dias** (modelo comum em B2B genérico) porque
você é solo, o produto é simples de explicar, e ligar demais pra escritório
pequeno cansa a lista antes de fechar. 4 toques bem espaçados cobrem o grosso
do ganho da pesquisa sem exigir uma operação que você não tem tempo de rodar.

---

## A cadência: 4 toques, 2 canais, ~12 dias

| # | Quando | Canal | Objetivo | Referência |
|---|---|---|---|---|
| 1 | Dia 0 | WhatsApp | Abertura — gancho específico do lead (nota, avaliação, Instagram) | Mensagem principal por tier em `abordagem.md` |
| 2 | Dia 3–4 | WhatsApp | Reforço curto, sem cobrar resposta | Variante curta já existe em `abordagem-tier-a.md` |
| 3 | Dia 7–8 | Troca de canal (Instagram DM, ou ligação se o número for de celular) | Reaparecer de um jeito diferente — quem ignorou texto às vezes responde ligação, ou vice-versa | Novo — ver script abaixo |
| 4 | Dia 12–14 | WhatsApp | Fechamento educado — pergunta objetiva, não insiste depois disso | Novo — ver script abaixo |

Depois do toque 4 sem resposta: **status vira "pausado"**, não "perdido". Volta
pra fila de abordagem em 60–90 dias (situação muda — pode ter trocado de site,
perdido paciência com o Instagram, etc.).

### Por que trocar de canal no toque 3, não repetir WhatsApp de novo

Dado da pesquisa: variar o canal recupera contato que insistir no mesmo canal
não recupera — cada canal reativa a atenção de um jeito diferente. No seu caso:

- **Se o lead tem Instagram ativo** (você já registra isso no diagnóstico do
  `/prospectar`): manda DM no Instagram. Mais informal, menos "mais uma
  cobrança no WhatsApp".
- **Se não tem Instagram ativo, mas o telefone é celular**: liga. Escritório
  de advocacia que não responde texto às vezes atende ligação — é mais direto
  e sinaliza que não é disparo em massa.
- **Se só tem telefone fixo e nenhuma rede social**: repete WhatsApp mesmo,
  mas muda o ângulo (não repete a mesma mensagem — ver script do toque 3).

### Scripts dos toques novos (3 e 4)

**Toque 3 — troca de canal (exemplo Instagram, adaptar pro tier):**

```
Oi, [nome]! Te mandei uma mensagem no WhatsApp semana passada sobre o site
do escritório — te chamando aqui também porque vi que vocês postam bastante
por aqui.

Sem pressa nenhuma, mas fica o link do exemplo que fiz pra um advogado aqui
da região: [link do mockup]
```

**Toque 4 — fechamento educado (WhatsApp):**

```
[Nome], última vez que te chamo sobre isso — não quero encher.

Faz sentido pra vocês esse tipo de projeto agora, ou prefere que eu volte a
falar mais pra frente?
```

Essa pergunta é o ponto mais importante da cadência inteira: ela dá ao lead
uma saída fácil ("agora não, mas volta depois") em vez de silêncio. Silêncio
vira "pausado" sem clareza; uma resposta, mesmo negativa, vira dado real pro
Status.

---

## Como isso se encaixa no volume de 20–40 leads/dia

Qualificar 20–40 leads/dia (o que a skill `/prospectar` já faz) é diferente
de **abordar** 20–40 pela primeira vez todo dia — isso não é sustentável
sozinho nem seguro pro número de WhatsApp. Dois ritmos separados:

1. **Qualificação:** continua no volume que já está, sem mudança — é rodar a
   skill sobre o scrape, o gargalo não é aqui.
2. **Abordagem (toque 1):** limitar a **10–15 primeiros contatos por dia**.
   Não é regra arbitrária — WhatsApp Business sem consentimento prévio
   (cold outreach) tem risco real de bloqueio, e número novo/pouco aquecido é
   mais visado. Ficar nessa faixa protege o número que também é o contato
   oficial da Nexora no site.
3. **Follow-ups (toques 2, 3, 4):** entram na agenda do dia junto com os
   toques 1 novos — é só olhar quem "vence" follow-up hoje. Com 4 toques
   espalhados em ~12 dias, o volume de follow-up pendente por dia fica baixo
   e cabe dentro da mesma janela de horário comercial (9h–18h) que já vale
   pra abordagem.

Isso naturalmente empurra o Manoel a trabalhar com uma **fila**, não com a
lista inteira de uma vez — os arquivos `advogados-boituva.md` e
`advogados-sao-roque.md` já têm mais leads qualificados do que dá pra abordar
num dia só, e está certo que seja assim: é reserva pra semanas seguintes, não
trabalho atrasado.

---

## O "CRM" que você já tem: a coluna Status

Você não precisa de ferramenta nova — os arquivos de prospecção já têm coluna
`Status`. Ela só precisa carregar mais informação pra virar cadência de
verdade em vez de anotação solta. Formato sugerido:

```
t1 26/08 · t2 30/08 (agendado)
t1 20/08 · t2 24/08 · t3 31/08 (Instagram, sem resposta) · pausado até 30/10
t1 19/08 · respondeu 19/08 · fechou
```

Regra prática: toda manhã, antes de qualificar leads novos, dar uma olhada
rápida nas colunas Status dos arquivos já abertos e ver quem "vence" toque
hoje. Isso é literalmente o que um CRM faz — só que sem manutenção de
ferramenta nova, dentro do arquivo que você já teria aberto de qualquer jeito.

Se esse ritual começar a doer (muitos leads em cadência simultânea, difícil
enxergar quem vence hoje só olhando o markdown), **aí sim** vale reconsiderar
uma ferramenta — não antes.

---

## Critério de desistência definitivo

Sai da fila de vez (não volta em 60–90 dias) quando:

- O lead responde "não tem interesse" de forma clara, ou
- Fechou com outra agência/site no meio do processo (verificar antes de
  reabrir depois dos 60–90 dias), ou
- Pediu explicitamente pra não ser mais contatado

Fora isso, "sem resposta" nunca é definitivo — é "pausado".

---

## Resumo pra aplicar amanhã

1. Separar os leads Tier A que ainda não foram abordados nos dois arquivos
   (`advogados-boituva.md`, `advogados-sao-roque.md`)
2. Abordar no máximo 10–15 novos por dia (toque 1)
3. Marcar a data do toque 1 na coluna Status de cada um
4. Toda manhã, checar quem vence toque 2/3/4 hoje antes de abrir leads novos
5. No toque 3, trocar de canal (Instagram ou ligação, conforme o que o lead
   tem disponível)
6. No toque 4, perguntar direto — não insistir depois da resposta

---

## Fontes usadas nesse processo

- [Sales Follow-Up Statistics 2026 — LeadResponse](https://leadresponse.co/blog/sales-follow-up-statistics)
- [Sales Follow-Up Statistics in B2B (2026 Study) — Belkins](https://belkins.io/blog/sales-follow-up-statistics)
- [Cadência de prospecção WhatsApp + email para B2B — SocialHub](https://www.socialhub.pro/blog/cadencia-prospeccao-whatsapp-email-b2b/)
- [Optimizing B2B Sales Outreach Cadence — Growleads](https://growleads.io/blog/optimizing-b2b-sales-outreach-cadence-timing-frequency-and-follow-up/)
- [Limite de disparo no WhatsApp Business — Brendi](https://brendi.com.br/blog/limite-disparo-whatsapp-business-2026/)

# Prospecção — Advocacia no Rio de Janeiro/RJ

**Fonte:** scrape do Google Maps (perfis GMN), busca "serviço de advogado" · **Data:** 26/08/2026
**Critério:** nota alta + volume de avaliação relevante + site fraco ou inexistente
**Total bruto:** 30 perfis · **Qualificados:** 22

**Nota sobre o scrape:** este export do Apify **não trouxe a coluna de site**
(campo `website` não foi marcado na configuração do scraper). Diferente dos
scrapes de Boituva/São Roque, aqui não dá pra cravar "sem site" só pelo CSV —
foi feita verificação individual por WebSearch nos leads de maior prioridade
(ver coluna Situação). Pra próxima extração nesta cidade, marcar o campo
`website` no Apify antes de rodar — economiza essa etapa manual.

---

## Tier A — prioridade máxima
Perfil forte no Google, sem site próprio identificado.

| Escritório | Nota | Avaliações | Telefone | Bairro | Situação |
|---|---|---|---|---|---|
| Sandro Lima - Advocacia e Consultoria Jurídica | 5,0 | 160 | (21) 97956-1056 | Bonsucesso | Verificado: só Instagram/Facebook/LinkedIn, sem site próprio |
| Pena Advogado Especialista para Loas, BPC, Curatelas | 5,0 | 130 | — (sem telefone no perfil) | Centro | Verificado: nenhuma presença própria encontrada |
| Advogada Miriã Custodio | 4,9 | 59 | (21) 99131-6823 | Centro | Verificado: nenhum site encontrado |
| Ribeiro e Nascimento Advocacia | 5,0 | 58 | (21) 96563-7682 | Campo Grande | Verificado: nenhum site encontrado |
| Santana & Cabral Advogados | 4,9 | 45 | (21) 97065-8865 | Sepetiba | Verificado: nenhum site encontrado |
| d'AZEVEDO ADVOGADOS | 4,9 | 41 | (21) 2260-8466 | Olaria | Verificado: só Facebook (cuidado: não confundir com "De Azevedo Advogados", outro escritório no Centro) |
| Ambé & Couto Advogados | 5,0 | 35 | (21) 99688-9292 | Maria da Graça | Verificado: nenhum site encontrado |
| Suzani Costa Advocacia | 4,8 | 34 | (21) 96984-3071 | Ramos | Verificado: só Instagram (@suzani_costa_advocacia) |
| Araujo Advocacia | 5,0 | 31 | (21) 98120-1431 | Paciência | Verificado: nenhum site encontrado |
| LFCS Sociedade Individual de Advocacia | 5,0 | 26 | (21) 98161-8666 | Ilha do Governador | Não verificado individualmente — sem site cadastrado no GMN |
| Isaac Ederson advocacia | 5,0 | 22 | (21) 97137-9199 | Santa Cruz | Não verificado individualmente — sem site cadastrado no GMN |
| Thiessen & Dias Advogados Associados LTDA | 5,0 | 22 | (21) 99172-2545 | Santa Cruz | Não verificado individualmente — sem site cadastrado no GMN |
| Priscila Reis Advogada | 5,0 | 16 | (21) 98354-1184 | Jardim Guanabara | Não verificado individualmente — sem site cadastrado no GMN |
| Riza Costa Advogada | 5,0 | 16 | (21) 99531-4104 | — | Não verificado individualmente — sem site cadastrado no GMN |
| Beatriz Cassiano Advocacia e Consultoria Jurídica | 5,0 | 14 | (21) 95101-0048 | Ipanema | Não verificado individualmente — sem site cadastrado no GMN |
| Omiltes Amaro Advocacia | 5,0 | 13 | (21) 96517-4343 | Bonsucesso | Não verificado individualmente — sem site cadastrado no GMN |
| Advogado em Bonsucesso Dr Anderson Costa (Inventário Extrajudicial) | 4,8 | 12 | (21) 97660-5757 | Bonsucesso | Não verificado individualmente — sem site cadastrado no GMN |
| Camila Fontoura Assessoria Jurídica | 5,0 | 12 | (21) 98339-8979 | Moneró | Não verificado individualmente — sem site cadastrado no GMN |
| Vieira & Vieira Advogados | 5,0 | 11 | (21) 99007-2780 | Campo Grande | Não verificado individualmente — sem site cadastrado no GMN |
| Advogada Dra Elaine Nazareth | 4,8 | 10 | (21) 2462-4762 | Jardim Guanabara | Não verificado individualmente — sem site cadastrado no GMN |

**Por que abordar:** perfis com reputação real (a maioria 5,0, muitos com
20–160 avaliações) e presença digital que para no Instagram/Facebook — sem
lugar pra converter quem os encontra pelo Google. Os 9 primeiros já foram
confirmados individualmente; os demais seguem a regra do GMN (sem site
cadastrado), mas vale um Google rápido antes de mandar mensagem.

---

## Tier B — bom perfil, volume menor

| Escritório | Nota | Avaliações | Telefone | Bairro | Situação |
|---|---|---|---|---|---|
| Lira Alves Advogados | 4,6 | 9 | (21) 3045-4086 | Ilha do Governador | Verificado: só Facebook/Jusbrasil, sem site próprio |
| Douglas Brum Advogado | 5,0 | 7 | (21) 97127-7776 | Cocotá | Não verificado individualmente — sem site cadastrado no GMN |

---

## Tier C — tem site, mas é fraco

Nenhum lead deste scrape se qualificou aqui — o único perfil com site confirmado
(Alderito Assis) tem site institucional próprio e cai em "já tem site", não em
"site fraco" (ver Descartados).

## Tier D — pagam anúncio e não têm site

Nenhum perfil deste scrape veio marcado como anúncio patrocinado (`isAdvertisement`
= false em todas as linhas).

---

## Descartados

- **Já tem site confirmado:** Escritório de Advocacia Alderito Assis (997
  avaliações, 4,9 — o maior volume da lista). Site próprio em
  alderitoassis.com.br, opera em 3 unidades (Santa Cruz, Campo Grande e
  Pernambuco) e tem página profissional no LinkedIn com serviços de
  mentoria pra advogados. Porte grande demais pro perfil de cliente da
  Nexora — provavelmente já tem agência ou estrutura própria.
- **Nome genérico, sem dono identificável:** "ADVOCACIA E ASSESSORIA
  JURÍDICA" (Santa Cruz, 20 aval.), "Advocacia Popular" (Maré, 1 aval.)
- **Perfil não reivindicado no Google** (dono não gerencia a própria ficha —
  sinal de que ainda não cuida do próprio marketing, foge do perfil de
  cliente da Nexora): Advogados Rosa & Santos (11 aval.), Advocacia Barcelos
  (5 aval.), Isabele Ferreira Advogada Trabalho\|Consumidor (3 aval.)
- **Avaliação insuficiente (abaixo do corte de 3):** Ygor Cura - Advocacia e
  Assessoria Jurídica (1), PEDRO AZEVEDO DE SOUSA SOCIEDADE INDIVIDUAL DE
  ADVOCACIA (1)
- **Institucional / fora do serviço:** nenhum neste scrape

---

## Antes de abordar

1. **Confirmar individualmente os leads marcados "não verificado"** (11 no
   Tier A + 1 no Tier B) — buscar nome + bairro no Google antes de mandar
   mensagem. Campo vazio no GMN não é prova de que não tem site.
2. **Cuidado com nomes parecidos.** d'Azevedo Advogados (Olaria, este lead)
   é diferente de "De Azevedo Advogados" (Centro, imobiliário/empresarial) —
   confirmar qual é qual antes de citar o nome errado na abordagem.
3. **Pena Advogado não tem telefone no perfil.** Verificar se tem Instagram
   ativo antes de decidir o canal de primeiro contato.
4. **Ler 2–3 avaliações recentes de cada lead** — dá gancho real pra mensagem.
5. **Advocacia tem trava do CFOAB.** O Provimento 205/2021 proíbe publicidade
   com captação/mercantilização. Site institucional, conteúdo informativo e
   SEO são permitidos; promessa de resultado e "consulta grátis" não.

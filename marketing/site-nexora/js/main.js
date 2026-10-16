// Menu mobile — nav flutuante com overlay em vidro
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");
if (navToggle && navMobile) {
  const setNav = (isOpen) => {
    navToggle.classList.toggle("is-open", isOpen);
    navMobile.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  navToggle.addEventListener("click", () => setNav(!navToggle.classList.contains("is-open")));
  navMobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));

  // Esc fecha, e voltar pro desktop nao pode deixar o overlay preso aberto
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.classList.contains("is-open")) {
      setNav(false);
      navToggle.focus();
    }
  });
  window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => {
    if (e.matches) setNav(false);
  });
}

// Revelar elementos ao entrar na tela
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
}

// Paginação dos cards de artigo (blog e "Pra aprofundar" dos serviços).
// Todos os links continuam no HTML — o Google enxerga tudo, o JS só mostra
// uma página por vez. A página fica no #pagina-N pra quem volta de um artigo.
document.querySelectorAll("[data-paginate]").forEach((grid) => {
  const items = Array.from(grid.children);
  const perPage = Number(grid.dataset.paginate) || 9;
  const total = Math.ceil(items.length / perPage);
  if (total < 2) return;

  const pager = document.createElement("nav");
  pager.className = "pager";
  pager.setAttribute("aria-label", "Páginas de artigos");
  grid.after(pager);

  const narrow = window.matchMedia("(max-width: 520px)");
  const hashPage = Number((location.hash.match(/^#pagina-(\d+)$/) || [])[1]);
  let current = hashPage >= 1 && hashPage <= total ? hashPage : 1;

  // 1 … 4 5 6 … 9 — nunca troca uma página só por reticências
  const pageList = () => {
    const span = (narrow.matches ? 0 : 1) + (current === 1 || current === total ? 1 : 0);
    const shown = (p) => p === 1 || p === total || Math.abs(p - current) <= span;
    const list = [];
    for (let p = 1; p <= total; p++) {
      if (shown(p) || (shown(p - 1) && shown(p + 1))) list.push(p);
      else if (list[list.length - 1] !== null) list.push(null);
    }
    return list;
  };

  const arrow = (points) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="${points}"/></svg>`;

  const button = (page, html, label) => {
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = html;
    b.setAttribute("aria-label", label);
    if (page === current) b.setAttribute("aria-current", "page");
    if (page < 1 || page > total) b.disabled = true;
    else b.addEventListener("click", () => goTo(page));
    return b;
  };

  const render = () => {
    items.forEach((el, i) => (el.hidden = Math.floor(i / perPage) + 1 !== current));
    pager.replaceChildren(
      button(current - 1, arrow("15 18 9 12 15 6"), "Página anterior"),
      ...pageList().map((p) => {
        if (p !== null) return button(p, String(p), `Página ${p}`);
        const gap = document.createElement("span");
        gap.className = "pager-gap";
        gap.textContent = "…";
        return gap;
      }),
      button(current + 1, arrow("9 18 15 12 9 6"), "Próxima página")
    );
  };

  const goTo = (page) => {
    if (page === current) return;
    current = page;
    render();
    history.replaceState(null, "", current === 1 ? location.pathname + location.search : `#pagina-${current}`);
    // Volta pro começo da lista (título da seção incluso) e leva o foco junto
    const top = grid.parentElement.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo(0, top);
    items[(current - 1) * perPage].focus({ preventScroll: true });
  };

  render();
  narrow.addEventListener("change", render);
});

// Formulário de contato -> abre o WhatsApp com a mensagem preenchida
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = contactForm.nome.value.trim();
    const email = contactForm.email.value.trim();
    const telefone = contactForm.telefone.value.trim();
    const mensagem = contactForm.mensagem.value.trim();

    const texto =
      `Olá, meu nome é ${nome}.\n` +
      `E-mail: ${email}\n` +
      (telefone ? `Telefone: ${telefone}\n` : "") +
      `Mensagem: ${mensagem}`;

    const numero = "5515992468675";
    reportWhatsApp();
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  });
}

// Cards de preço — brilho que segue o mouse
document.querySelectorAll(".price-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// FAQ accordion — altura anima via CSS (grid-template-rows), JS só alterna a classe
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-q");
  if (!question) return;
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    item.closest(".faq-list")?.querySelectorAll(".faq-item").forEach((other) => other.classList.remove("is-open"));
    if (!isOpen) item.classList.add("is-open");
  });
});

// Dropdown "Serviços" — hover no desktop, clique em telas de toque
document.querySelectorAll(".nav-drop").forEach((drop) => {
  const trigger = drop.querySelector(".nav-drop-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = drop.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!drop.contains(e.target)) {
      drop.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  // Fecha com Esc
  drop.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      drop.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
});

// Google Ads — mede quem chega pelo anúncio e clica no WhatsApp.
// Carregado daqui (e não inline) pra caber na CSP do vercel.json.
// Quem liga o Global Privacy Control no navegador não é rastreado.
const ADS_ID = "AW-18503311042";
const ADS_CONVERSAO_WHATSAPP = "AW-18503311042/ooXhCKH6_pcdEMK9iPdE";
const adsAtivo = !navigator.globalPrivacyControl;

if (adsAtivo) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", ADS_ID);

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.appendChild(gtagScript);

  document.addEventListener("click", (e) => {
    if (e.target.closest('a[href*="wa.me/"]')) reportWhatsApp();
  });
}

function reportWhatsApp() {
  if (!adsAtivo || typeof window.gtag !== "function") return;
  gtag("event", "conversion", {
    send_to: ADS_CONVERSAO_WHATSAPP,
    value: 1.0,
    currency: "BRL",
    transport_type: "beacon",
  });
}

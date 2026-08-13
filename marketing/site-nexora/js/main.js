// Menu mobile — nav flutuante com overlay em vidro
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");
if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    navMobile.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  navMobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navToggle.classList.remove("is-open");
      navMobile.classList.remove("is-open");
      document.body.style.overflow = "";
    })
  );
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

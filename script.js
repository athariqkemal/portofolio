document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// WORK GALLERY DATA
// ============================================
const projects = {
  dcc: {
    title: "D'Celup Chicken Crispy",
    images: [
      "images/dcc-hero.jpg",
      "images/dcc-flyer-saus.jpg",
      "images/dcc-flyer-hangat.jpg",
      "images/dcc-flyer-kejutan.jpg",
      "images/dcc-menu.jpg",
      "images/dcc-spanduk-1.jpg",
      "images/dcc-spanduk-2.jpg",
    ],
  },
  mandarin: {
    title: "Mandarin Mulai Nol",
    images: [
      "images/mandarin-logo.png",
      "images/mandarin-post-1.jpg",
      "images/mandarin-post-2.jpg",
      "images/mandarin-post-3.jpg",
    ],
  },
  ea: {
    title: "English Academy Center",
    images: ["images/ea-bts.jpg", "images/ea-back-to-campus.jpg"],
  },
  ruangsamping: {
    title: "Ruang Samping",
    images: [
      "images/ruangsamping-logo.png",
      "images/ruangsamping-eskulkul.jpg",
      "images/ruangsamping-menu.jpg",
    ],
  },
  beban: {
    title: "BeBan Crispy",
    images: ["images/beban-crispy.jpg"],
  },
  goodstuffle: {
    title: "Goodstuffle",
    images: [
      "images/goodstuffle-web.jpg",
      "images/goodstuffle-ad.jpg",
      "images/goodstuffle-shopee-dashboard.jpg",
      "images/goodstuffle-shopee-orders.jpg",
      "images/goodstuffle-wa-chats.jpg",
    ],
  },
};

// ============================================
// CERTIFICATIONS DATA
// ============================================
const certificates = {
  whatsappBusiness: {
    title: "WhatsApp Business (Smartphone)",
    caption: "Skillpedia — Nilai 100 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-whatsapp-business.jpg"],
  },
  whatsappMarketing: {
    title: "WhatsApp Marketing",
    caption: "Skillpedia — Nilai 100 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-whatsapp-marketing.jpg"],
  },
  copywriting: {
    title: "Copywriting Fundamentals",
    caption: "Skillpedia — Nilai 95 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-copywriting.jpg"],
  },
  shopee: {
    title: "Jualan Online di Shopee",
    caption: "Skillpedia — Nilai 75 (B) Baik — Lulus 31 Jul 2026",
    images: ["images/cert-shopee.jpg"],
  },
  tiktokShop: {
    title: "Jualan Online di TikTok Shop",
    caption: "Skillpedia — Nilai 75 (B) Baik — Lulus 31 Jul 2026",
    images: ["images/cert-tiktok-shop.jpg"],
  },
  canvaSmartphone: {
    title: "Desain dengan Canva (Smartphone)",
    caption: "Skillpedia — Nilai 90 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-canva-smartphone.jpg"],
  },
  canvaDesktop: {
    title: "Desain dengan Canva (Desktop)",
    caption: "Skillpedia — Nilai 95 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-canva-desktop.jpg"],
  },
  capcutSmartphone: {
    title: "Video Editing CapCut (Smartphone)",
    caption: "Skillpedia — Nilai 100 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-capcut-smartphone.jpg"],
  },
  capcutDesktop: {
    title: "Video Editing CapCut (Desktop)",
    caption: "Skillpedia — Nilai 85 (A) Sangat Baik — Lulus 30 Jul 2026",
    images: ["images/cert-capcut-desktop.jpg"],
  },
  excel: {
    title: "Microsoft Excel",
    caption: "Skillpedia — Nilai 100 (A) Sangat Baik — Lulus 31 Jul 2026",
    images: ["images/cert-excel.jpg"],
  },
  powerpoint: {
    title: "Microsoft PowerPoint",
    caption: "Skillpedia — Nilai 100 (A) Sangat Baik — Lulus 31 Jul 2026",
    images: ["images/cert-powerpoint.jpg"],
  },
  wordLanjutan: {
    title: "Microsoft Word Lanjutan",
    caption: "Skillpedia — Nilai 95 (A) Sangat Baik — Lulus 31 Jul 2026",
    images: ["images/cert-word-lanjutan.jpg"],
  },
  starEa: {
    title: "Sales Trainee Academy (STAR) — English Academy",
    caption: "Ruangguru — 15 Jun – 11 Jul 2026 — Jakarta, 30 Jul 2026",
    images: ["images/cert-star-ea.jpg"],
  },
  aiGoogle: {
    title: "AI for Work & Career Readiness with Google AI Products",
    caption: "Hacktiv8 × Maju Bareng AI (Google.org) — 4–9 Jul 2026",
    images: ["images/cert-ai-google.jpg"],
  },
};

// ============================================
// LIGHTBOX (shared by Work gallery + Certifications)
// ============================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentSource = null; // "projects" or "certificates"
let currentKey = null;
let currentIndex = 0;

function getCurrentEntry() {
  const store = currentSource === "certificates" ? certificates : projects;
  return store[currentKey];
}

function openLightbox(source, key, index = 0) {
  currentSource = source;
  currentKey = key;
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderLightbox() {
  const entry = getCurrentEntry();
  if (!entry) return;
  lightboxImg.src = entry.images[currentIndex];
  lightboxImg.alt = entry.title;

  if (currentSource === "certificates") {
    lightboxCaption.textContent = `${entry.title} — ${entry.caption}`;
  } else {
    lightboxCaption.textContent = `${entry.title} — ${currentIndex + 1}/${entry.images.length}`;
  }

  const multi = entry.images.length > 1;
  lightboxPrev.style.display = multi ? "" : "none";
  lightboxNext.style.display = multi ? "" : "none";
}

function stepLightbox(delta) {
  const entry = getCurrentEntry();
  if (!entry) return;
  currentIndex = (currentIndex + delta + entry.images.length) % entry.images.length;
  renderLightbox();
}

document.querySelectorAll(".work-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-project");
    openLightbox("projects", key, 0);
  });
});

document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-cert");
    openLightbox("certificates", key, 0);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

/**
 * NOCTIS HELLFORGE // 3D INTERACTIVE ENGINE
 * Física 3D Tilt + Spotlight Dinámico + E-Commerce State
 */

(() => {
  "use strict";

  /* ==========================================================================
     1. DATA STORE: PIEZAS DE ALTA COSTURA GÓTICA & PLATA .925
     ========================================================================== */
  const PRODUCTS = [
    {
      id: "nc-001",
      sku: "HF-HD-600 // HELLFORGE",
      name: "Infernal Sigil 600GSM Zip Hoodie",
      category: "hoodies",
      price: 720,
      status: "LIMITED DROP",
      tagClass: "tag-limited",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Sudadera pesada de 600 GSM con gráficos góticos en serigrafía de alta densidad, lavado ácido oscuro y cremallera con daga en plata .925.",
      specs: [
        "Algodón pesado 600 GSM con interior brushed",
        "Tirador de daga fundido en plata esterlina .925",
        "Parches de cuero de becerro cosidos a mano",
        "Numerada individualmente (100 unidades)"
      ],
      sizes: [
        { label: "S", stock: 3 },
        { label: "M", stock: 5 },
        { label: "L", stock: 2 },
        { label: "XL", stock: 0 }
      ]
    },
    {
      id: "nc-002",
      sku: "HF-OW-001 // GRAIL",
      name: "Sanctum Dagger Leather Moto Jacket",
      category: "outerwear",
      price: 2450,
      status: "1 OF 1",
      tagClass: "tag-one",
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Chaqueta motociclista de cuero italiano plena flor con 8 cremalleras de daga en plata maciza .925 y forro de seda jacquard.",
      specs: [
        "Cuero italiano plena flor 1.4mm curtido al vegetal",
        "8 herrajes macizos en plata esterlina .925",
        "Chip NFC interno de verificación criptográfica",
        "Pieza única irrepetible en archivo"
      ],
      sizes: [
        { label: "M", stock: 0 },
        { label: "L", stock: 1 },
        { label: "XL", stock: 0 }
      ]
    },
    {
      id: "nc-003",
      sku: "HF-JW-925 // STERLING",
      name: "Cemetery Gothic Keeper Ring .925",
      category: "jewelry",
      price: 890,
      status: "LIMITED DROP",
      tagClass: "tag-limited",
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Anillo esculpido a mano en cera perdida con cruces catedralicias entrelazadas y oxidación profunda de contraste.",
      specs: [
        "Plata esterlina maciza .925 (44 gramos)",
        "Pulido espejo sobre relieve oxidado negro",
        "Estuche rígido en cuero con sello de lacre"
      ],
      sizes: [
        { label: "US 7", stock: 4 },
        { label: "US 8", stock: 6 },
        { label: "US 9", stock: 2 },
        { label: "US 10", stock: 1 }
      ]
    },
    {
      id: "nc-004",
      sku: "HF-AC-042 // HEAVY AG",
      name: "Noctis Guillotine Wallet Chain",
      category: "accessories",
      price: 1320,
      status: "SOLD OUT",
      tagClass: "tag-sold",
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Cadena industrial de eslabones cruzados en plata .925 con mosquetón giratorio grabado.",
      specs: [
        "Peso total: 220 gramos / Longitud: 58 cm",
        "Plata .925 con mecanismo interno de titanio",
        "Agotada permanentemente"
      ],
      sizes: [{ label: "ÚNICA", stock: 0 }]
    },
    {
      id: "nc-005",
      sku: "HF-HD-104 // DISTRESSED",
      name: "Abyssal Thermal Chrome Hoodie",
      category: "hoodies",
      price: 760,
      status: "LIMITED DROP",
      tagClass: "tag-limited",
      images: [
        "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Construcción doble capa con forro térmico waffle, desgaste manual en bordes y estampado metálico cromo.",
      specs: [
        "540 GSM exterior + forro térmico interior",
        "Ojales de capucha en plata esterlina",
        "Silueta boxy drop-shoulder"
      ],
      sizes: [
        { label: "S", stock: 2 },
        { label: "M", stock: 4 },
        { label: "L", stock: 3 },
        { label: "XL", stock: 2 }
      ]
    },
    {
      id: "nc-006",
      sku: "HF-AC-077 // TITANIUM",
      name: "Obsidian Dagger Titanium Eyewear",
      category: "accessories",
      price: 960,
      status: "1 OF 1",
      tagClass: "tag-one",
      images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=90",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=90"
      ],
      description:
        "Montura japonesa en acetato Takiron de 8mm con núcleo de titanio e incrustaciones de dagas de plata en las varillas.",
      specs: [
        "Lentes Zeiss categoría 3 antirreflejo",
        "Bisagras de 7 barriles en plata .925",
        "Hecho a mano en Sabae, Japón"
      ],
      sizes: [{ label: "52-21-145", stock: 1 }]
    }
  ];

  /* ==========================================================================
     2. ESTADO Y REFERENCIAS DOM
     ========================================================================== */
  const state = {
    filter: "all",
    cart: JSON.parse(localStorage.getItem("noctis_hellforge_cart")) || [],
    selectedProduct: null,
    selectedSize: null
  };

  const dom = {
    countdown: document.getElementById("countdown"),
    header: document.getElementById("hudHeader"),
    productGrid: document.getElementById("productGrid"),
    filterBtns: document.querySelectorAll(".dock-btn"),
    productModal: document.getElementById("productModal"),
    modalBody: document.getElementById("modalBody"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    openCartBtn: document.getElementById("openCartBtn"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartBackdrop: document.getElementById("cartBackdrop"),
    cartItemsContainer: document.getElementById("cartItemsContainer"),
    cartCounter: document.getElementById("cartCounter"),
    drawerCount: document.getElementById("drawerCount"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    checkoutMsg: document.getElementById("checkoutMsg"),
    vipForm: document.getElementById("vipForm"),
    vipEmail: document.getElementById("vipEmail"),
    vipFeedback: document.getElementById("vipFeedback")
  };

  /* ==========================================================================
     3. MOTOR DE FÍSICA 3D TILT & SPOTLIGHT EN TARJETAS
     ========================================================================== */
  function attach3DTilt(elements) {
    elements.forEach((card) => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Coordenadas para el foco de luz especular
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        // Rotación 3D sutil y responsiva
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  }

  /* ==========================================================================
     4. COUNTDOWN EN TIEMPO REAL
     ========================================================================== */
  function initCountdown() {
    const saved = localStorage.getItem("noctis_hf_drop");
    const target = saved
      ? parseInt(saved, 10)
      : Date.now() + 2 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000;

    if (!saved) localStorage.setItem("noctis_hf_drop", target.toString());

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      const pad = (n) => String(n).padStart(2, "0");
      dom.countdown.textContent = `${pad(d)}D : ${pad(h)}H : ${pad(m)}M : ${pad(s)}S`;
    };

    tick();
    setInterval(tick, 1000);
  }

  /* ==========================================================================
     5. RENDERIZADO DEL CATÁLOGO & FILTROS
     ========================================================================== */
  function renderProducts() {
    const list =
      state.filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === state.filter);

    dom.productGrid.innerHTML = list
      .map(
        (p) => `
        <article class="product-card tilt-card" data-tilt>
          <div class="card-spotlight"></div>
          <div class="card-visual" data-quickview="${p.id}">
            <span class="status-tag ${p.tagClass}">${p.status}</span>
            <img src="${p.images[0]}" alt="${p.name}" class="primary" loading="lazy" />
            <img src="${p.images[1]}" alt="${p.name} vista alternativa" class="secondary" loading="lazy" />
            <div class="quick-inspect-bar">+ VISTA RÁPIDA 3D & TALLAS</div>
          </div>
          <div class="card-body">
            <div>
              <span class="mono-tag">${p.sku}</span>
              <h3 class="card-name">${p.name}</h3>
            </div>
            <div class="card-meta-row">
              <span class="card-price">$${p.price.toLocaleString("en-US")} USD</span>
              <button type="button" class="mono-tag txt-crimson" data-quickview="${p.id}">
                SELECCIONAR →
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    attach3DTilt(dom.productGrid.querySelectorAll("[data-tilt]"));
  }

  function setupFilters() {
    dom.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        dom.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.filter = btn.dataset.filter;
        renderProducts();
      });
    });
  }

  /* ==========================================================================
     6. MODAL DE VISTA RÁPIDA & VALIDACIÓN DE STOCK
     ========================================================================== */
  function openModal(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    state.selectedProduct = product;
    const available = product.sizes.find((s) => s.stock > 0);
    state.selectedSize = available ? available.label : null;
    const soldOut = product.status === "SOLD OUT" || !available;

    dom.modalBody.innerHTML = `
      <div class="modal-media">
        <img src="${product.images[0]}" alt="${product.name}" class="modal-hero-img" id="modalHeroImg" />
        <div class="modal-thumb-row">
          ${product.images
            .map(
              (src, idx) => `
            <button type="button" class="m-thumb ${idx === 0 ? "active" : ""}" data-src="${src}">
              <img src="${src}" alt="Miniatura ${idx + 1}" />
            </button>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="modal-specs-col">
        <div>
          <span class="mono-tag txt-crimson">${product.sku} // ${product.status}</span>
          <h2 class="modal-prod-title">${product.name}</h2>
          <p class="modal-prod-price">$${product.price.toLocaleString("en-US")} USD</p>

          <div class="modal-desc-box">
            <p>${product.description}</p>
            <ul class="modal-spec-list">
              ${product.specs.map((item) => `<li>✠ ${item}</li>`).join("")}
            </ul>
          </div>

          <div style="margin-top: 1.2rem;">
            <div style="display:flex; justify-content:space-between;">
              <span class="mono-tag">TALLA</span>
              <span class="mono-tag txt-gold" id="modalStockLabel">
                ${available ? `STOCK VERIFICADO: ${available.stock}` : "AGOTADO"}
              </span>
            </div>
            <div class="size-grid">
              ${product.sizes
                .map(
                  (s) => `
                <button
                  type="button"
                  class="size-pill ${state.selectedSize === s.label ? "selected" : ""}"
                  data-size="${s.label}"
                  data-stock="${s.stock}"
                  ${s.stock === 0 ? "disabled" : ""}
                >
                  ${s.label}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn-neon-primary btn-block"
          id="addToBagModalBtn"
          ${soldOut ? "disabled style='opacity:0.35; cursor:not-allowed; box-shadow:none;'" : ""}
        >
          ${soldOut ? "PIEZA AGOTADA" : "AÑADIR A LA BOLSA VIP ⚡"}
        </button>
      </div>
    `;

    dom.productModal.classList.add("open");
    dom.productModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    dom.productModal.classList.remove("open");
    dom.productModal.setAttribute("aria-hidden", "true");
  }

  function setupModal() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-quickview]");
      if (trigger) {
        openModal(trigger.dataset.quickview);
      }
    });

    dom.modalBody.addEventListener("click", (e) => {
      const thumb = e.target.closest(".m-thumb");
      if (thumb) {
        document.getElementById("modalHeroImg").src = thumb.dataset.src;
        dom.modalBody.querySelectorAll(".m-thumb").forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      }

      const sizeBtn = e.target.closest(".size-pill");
      if (sizeBtn && !sizeBtn.disabled) {
        state.selectedSize = sizeBtn.dataset.size;
        document.getElementById("modalStockLabel").textContent = `STOCK VERIFICADO: ${sizeBtn.dataset.stock}`;
        dom.modalBody.querySelectorAll(".size-pill").forEach((b) => b.classList.remove("selected"));
        sizeBtn.classList.add("selected");
      }

      if (e.target.id === "addToBagModalBtn" && state.selectedProduct && state.selectedSize) {
        addToCart(state.selectedProduct, state.selectedSize);
        closeModal();
        openCart();
      }
    });

    dom.closeModalBtn.addEventListener("click", closeModal);
    dom.productModal.addEventListener("click", (e) => {
      if (e.target === dom.productModal) closeModal();
    });
  }

  /* ==========================================================================
     7. CARRITO LATERAL (SLIDE-OVER CART)
     ========================================================================== */
  function saveCart() {
    localStorage.setItem("noctis_hellforge_cart", JSON.stringify(state.cart));
  }

  function addToCart(product, size) {
    const sizeData = product.sizes.find((s) => s.label === size);
    const maxStock = sizeData ? sizeData.stock : 1;
    const found = state.cart.find((item) => item.id === product.id && item.size === size);

    if (found) {
      if (found.qty < maxStock) found.qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size,
        qty: 1,
        maxStock
      });
    }

    saveCart();
    renderCart();
  }

  function renderCart() {
    const totalQty = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    dom.cartCounter.textContent = String(totalQty).padStart(2, "0");
    dom.drawerCount.textContent = totalQty;
    dom.cartSubtotal.textContent = `$${subtotal.toLocaleString("en-US")} USD`;

    if (state.cart.length === 0) {
      dom.cartItemsContainer.innerHTML = `
        <div style="text-align:center; padding:4rem 1rem;">
          <p class="mono-tag">BOLSA VACÍA</p>
          <p class="mono-tag" style="margin-top:0.5rem; color:#6b7280;">SELECCIONA UNA PIEZA DEL DROP 09</p>
        </div>
      `;
      return;
    }

    dom.cartItemsContainer.innerHTML = state.cart
      .map(
        (item, index) => `
        <div class="cart-row">
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-row-details">
            <div>
              <div class="cart-row-head">
                <h4 class="cart-row-title">${item.name}</h4>
                <button type="button" class="del-btn" data-del="${index}">✕</button>
              </div>
              <span class="mono-tag">TALLA: ${item.size}</span>
            </div>
            <div class="cart-row-foot">
              <div class="stepper">
                <button type="button" data-step="${index}" data-dir="-1">−</button>
                <span>${item.qty}</span>
                <button type="button" data-step="${index}" data-dir="1">+</button>
              </div>
              <span class="card-price">$${(item.price * item.qty).toLocaleString("en-US")}</span>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  function openCart() {
    dom.cartDrawer.classList.add("open");
    dom.cartBackdrop.classList.add("open");
  }

  function closeCart() {
    dom.cartDrawer.classList.remove("open");
    dom.cartBackdrop.classList.remove("open");
    dom.checkoutMsg.textContent = "";
  }

  function setupCart() {
    dom.openCartBtn.addEventListener("click", openCart);
    dom.closeCartBtn.addEventListener("click", closeCart);
    dom.cartBackdrop.addEventListener("click", closeCart);

    dom.cartItemsContainer.addEventListener("click", (e) => {
      const del = e.target.closest("[data-del]");
      if (del) {
        state.cart.splice(Number(del.dataset.del), 1);
        saveCart();
        renderCart();
        return;
      }

      const step = e.target.closest("[data-step]");
      if (step) {
        const idx = Number(step.dataset.step);
        const dir = Number(step.dataset.dir);
        const item = state.cart[idx];
        if (!item) return;

        const next = item.qty + dir;
        if (next <= 0) state.cart.splice(idx, 1);
        else if (next <= item.maxStock) item.qty = next;

        saveCart();
        renderCart();
      }
    });

    dom.checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        dom.checkoutMsg.textContent = "ERROR: TU BOLSA ESTÁ VACÍA.";
        return;
      }
      dom.checkoutMsg.textContent = "INICIANDO PASARELA CIFRADA SSL / NFC...";
    });
  }

  /* ==========================================================================
     8. VIP FORM & SCROLL REVEAL
     ========================================================================== */
  function setupVipAndScroll() {
    dom.vipForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = dom.vipEmail.value.trim();
      if (!val || !val.includes("@")) {
        dom.vipFeedback.style.color = "var(--neon-crimson)";
        dom.vipFeedback.textContent = "ERROR // INGRESA UN CORREO VÁLIDO.";
        return;
      }
      dom.vipFeedback.style.color = "var(--antique-gold)";
      dom.vipFeedback.textContent = `ACCESO CONCEDIDO A ${val.toUpperCase()} // LLAVE ENVIADA.`;
      dom.vipForm.reset();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    window.addEventListener(
      "scroll",
      () => {
        dom.header.classList.toggle("scrolled", window.scrollY > 30);
      },
      { passive: true }
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        closeCart();
      }
    });
  }

  /* ==========================================================================
     9. INIT
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initCountdown();
    renderProducts();
    setupFilters();
    attach3DTilt(document.querySelectorAll("[data-tilt]"));
    setupModal();
    renderCart();
    setupCart();
    setupVipAndScroll();
  });
})();

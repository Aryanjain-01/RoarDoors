/**
 * ROAR DOORS - Dynamic Product Detail Controller
 * Deep Spec Tables, Image Gallery Switcher, WhatsApp Prefill & Related Products
 */

(function () {
  "use strict";

  function initProductDetail() {
    if (!window.ROAR_DATA) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "roar-sovereign-marine-is710";

    const product = window.ROAR_DATA.products.find((p) => p.id === productId) || window.ROAR_DATA.products[0];
    if (!product) return;

    // 01. Update Document Meta & Title
    document.title = `${product.name} | ROAR DOORS Architectural Timber`;

    // 02. Breadcrumbs
    const bcCategory = document.getElementById("detail-bc-category");
    const bcProduct = document.getElementById("detail-bc-product");
    if (bcCategory) {
      bcCategory.textContent = product.categoryName;
      bcCategory.href = `products.html?category=${product.category}`;
    }
    if (bcProduct) {
      bcProduct.textContent = product.name;
    }

    // 03. Core Info
    const titleEl = document.getElementById("detail-product-title");
    const taglineEl = document.getElementById("detail-product-tagline");
    const descEl = document.getElementById("detail-product-desc");
    const gradeBadge = document.getElementById("detail-grade-badge");

    if (titleEl) titleEl.textContent = product.name;
    if (taglineEl) taglineEl.textContent = product.tagline;
    if (descEl) descEl.textContent = product.description;
    if (gradeBadge) gradeBadge.textContent = product.grade;

    // 04. Gallery Setup
    setupGallery(product);

    // 05. Key Features
    const featuresList = document.getElementById("detail-features-list");
    if (featuresList && product.keyFeatures) {
      featuresList.innerHTML = product.keyFeatures
        .map(
          (feat) => `
          <li class="feature-item">
            <svg class="feature-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feat}</span>
          </li>
        `
        )
        .join("");
    }

    // 06. Specifications Table
    populateSpecsTable(product);

    // 07. Applications Grid
    populateApplications(product);

    // 08. Direct Action Buttons (Quote & WhatsApp)
    const quoteBtn = document.getElementById("detail-quote-btn");
    if (quoteBtn) {
      quoteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.ROAR && window.ROAR.openQuoteModal) {
          window.ROAR.openQuoteModal(product.name);
        }
      });
    }

    const waBtn = document.getElementById("detail-whatsapp-btn");
    if (waBtn) {
      const rawNumber = window.ROAR_DATA.brand.whatsappRaw || "919999999999";
      const waMsg = `Hello ROAR DOORS, I am an architect/specifier requesting technical pricing and availability for ${product.name} (${product.grade}).`;
      waBtn.href = `https://wa.me/${rawNumber}?text=${encodeURIComponent(waMsg)}`;
      waBtn.target = "_blank";
    }

    const downloadTdsBtn = document.getElementById("detail-download-tds");
    if (downloadTdsBtn) {
      downloadTdsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.ROAR.showToast(`Technical Data Sheet (TDS) for "${product.name}" prepared. Download starting...`);
        setTimeout(() => {
          window.print();
        }, 1000);
      });
    }

    // 09. Related Products
    renderRelatedProducts(product);
  }

  function setupGallery(product) {
    const mainImg = document.getElementById("detail-main-img");
    const thumbContainer = document.getElementById("detail-thumbnails");
    if (!mainImg || !thumbContainer) return;

    const galleryImgs = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

    mainImg.src = galleryImgs[0];
    mainImg.alt = product.name;

    thumbContainer.innerHTML = galleryImgs
      .map(
        (src, idx) => `
        <button class="thumb-btn ${idx === 0 ? "active" : ""}" data-img-src="${src}" aria-label="View photo ${idx + 1}">
          <img src="${src}" alt="${product.name} thumb ${idx + 1}">
        </button>
      `
      )
      .join("");

    thumbContainer.querySelectorAll(".thumb-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-img-src");
        mainImg.src = src;
        thumbContainer.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  function populateSpecsTable(product) {
    const tbody = document.getElementById("detail-specs-tbody");
    if (!tbody) return;

    const rows = [
      { label: "Available Thicknesses", value: product.thickness.join(", ") },
      { label: "Standard Sheet Dimensions", value: product.sizes },
      { label: "Quality Grade & Standard", value: product.grade },
      { label: "Surface Finish & Face", value: product.finish },
      { label: "Core Timber Species", value: product.woodType },
      { label: "Bonding Adhesive / Resin", value: product.adhesive },
      { label: "Boiling Water Performance", value: product.boilingTest || "Complies with Indian Standard Cyclic Tests" },
      { label: "Average Density Profile", value: product.density },
      { label: "Moisture Content", value: product.moistureContent },
      { label: "Formaldehyde Emission Level", value: product.formaldehyde || "E0 / CARB Phase II Ultra Low VOC" },
      { label: "Official Certifications", value: product.certification },
      { label: "Manufacturer Warranty", value: product.warranty }
    ];

    tbody.innerHTML = rows
      .map(
        (r) => `
        <tr>
          <th scope="row">${r.label}</th>
          <td>${r.value}</td>
        </tr>
      `
      )
      .join("");
  }

  function populateApplications(product) {
    const grid = document.getElementById("detail-applications-grid");
    if (!grid || !product.applications) return;

    grid.innerHTML = product.applications
      .map(
        (app) => `
        <div class="application-box">
          <div class="app-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span class="app-name">${app}</span>
        </div>
      `
      )
      .join("");
  }

  function renderRelatedProducts(currentProduct) {
    const container = document.getElementById("detail-related-grid");
    if (!container) return;

    // Filter products from same category or others
    let related = window.ROAR_DATA.products.filter(
      (p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.featured)
    );

    if (related.length < 3) {
      related = window.ROAR_DATA.products.filter((p) => p.id !== currentProduct.id);
    }

    related = related.slice(0, 3);

    container.innerHTML = related
      .map(
        (prod) => `
        <article class="product-card">
          <div class="product-card-media">
            <img src="${prod.image}" alt="${prod.name}" loading="eager">
            <span class="product-badge">${prod.grade.split("/")[0].trim()}</span>
          </div>
          <div class="product-card-body">
            <span class="product-card-category">${prod.categoryName}</span>
            <h3 class="product-card-title">${prod.name}</h3>
            <p class="product-card-desc">${prod.shortDesc}</p>
            <div class="product-card-actions">
              <a href="product-detail.html?id=${prod.id}" class="link-editorial">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button class="btn btn-sage" style="padding: 0.5rem 1rem; font-size: 0.68rem;" data-open-quote-modal data-product="${prod.name}">
                Quote
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    container.querySelectorAll("[data-open-quote-modal]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const pName = btn.getAttribute("data-product");
        if (window.ROAR && window.ROAR.openQuoteModal) {
          window.ROAR.openQuoteModal(pName);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initProductDetail);
})();

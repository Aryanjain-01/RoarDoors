/**
 * ROAR DOORS - Dynamic Brand & Division Controller
 * Handles Brand Tab Switching, URL synchronization (?id=...), Spec Ledgers & Product Line rendering
 */

(function () {
  "use strict";

  function initBrandsPage() {
    if (!window.ROAR_DATA || !window.ROAR_DATA.brands) return;

    const brands = window.ROAR_DATA.brands;
    const urlParams = new URLSearchParams(window.location.search);
    let activeBrandId = urlParams.get("id") || "roar-commercial";

    // Verify brand exists, fallback to first
    let activeBrand = brands.find((b) => b.id === activeBrandId) || brands[0];
    activeBrandId = activeBrand.id;

    // 01. Render Brand Switcher Tabs
    const tabsContainer = document.getElementById("brand-tabs-strip");
    if (tabsContainer) {
      tabsContainer.innerHTML = brands
        .map(
          (b) => `
          <button class="brand-tab-btn ${b.id === activeBrandId ? "active" : ""}" 
                  data-brand-id="${b.id}" 
                  type="button">
            <span>${b.name}</span>
            <span class="tab-badge">${b.role}</span>
          </button>
        `
        )
        .join("");

      // Add click listener
      tabsContainer.querySelectorAll(".brand-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const brandId = btn.getAttribute("data-brand-id");
          switchBrand(brandId);
        });
      });
    }

    // 02. Handle Browser Popstate (Back/Forward)
    window.addEventListener("popstate", () => {
      const currentParams = new URLSearchParams(window.location.search);
      const brandId = currentParams.get("id") || "roar-commercial";
      renderBrand(brandId, false);
    });

    // 03. Switch Brand Function
    function switchBrand(brandId) {
      const newUrl = `${window.location.pathname}?id=${encodeURIComponent(brandId)}`;
      window.history.pushState({ brandId }, "", newUrl);
      renderBrand(brandId, true);
    }

    // 04. Render Active Brand Content
    function renderBrand(brandId, shouldScroll) {
      const brand = brands.find((b) => b.id === brandId) || brands[0];
      if (!brand) return;

      // Update Active Tab UI
      if (tabsContainer) {
        tabsContainer.querySelectorAll(".brand-tab-btn").forEach((btn) => {
          if (btn.getAttribute("data-brand-id") === brand.id) {
            btn.classList.add("active");
            btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          } else {
            btn.classList.remove("active");
          }
        });
      }

      // Update Document Meta
      document.title = `${brand.name} | Architectural Specifications & Product Line — ROAR DOORS`;

      // Update Breadcrumbs
      const bcName = document.getElementById("brand-bc-name");
      if (bcName) bcName.textContent = brand.name;

      // Update Hero Elements
      const roleEl = document.getElementById("brand-hero-role");
      const titleEl = document.getElementById("brand-hero-title");
      const taglineEl = document.getElementById("brand-hero-tagline");
      const descEl = document.getElementById("brand-hero-desc");
      const highlightsEl = document.getElementById("brand-hero-highlights");
      const heroImg = document.getElementById("brand-hero-img");
      const visualTitle = document.getElementById("brand-visual-title");
      const visualSub = document.getElementById("brand-visual-sub");

      if (roleEl) roleEl.textContent = brand.role;
      if (titleEl) titleEl.textContent = brand.name;
      if (taglineEl) taglineEl.textContent = brand.tagline;
      if (descEl) descEl.textContent = brand.description;

      if (visualTitle) visualTitle.textContent = brand.name;
      if (visualSub) visualSub.textContent = brand.category;
      if (heroImg && brand.heroImage) {
        heroImg.src = brand.heroImage;
        heroImg.alt = `${brand.name} Architectural Photography`;
      }

      // Render Highlights
      if (highlightsEl && brand.highlights) {
        highlightsEl.innerHTML = brand.highlights
          .map(
            (hl) => `
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${hl}</span>
            </li>
          `
          )
          .join("");
      }

      // WhatsApp Prefill
      const whatsappBtn = document.getElementById("brand-whatsapp-btn");
      if (whatsappBtn) {
        const rawPhone = window.ROAR_DATA.brand.whatsappRaw || "917568552255";
        const message = encodeURIComponent(
          `Hello ROAR DOORS Concierge, I am reviewing your ${brand.name} (${brand.role}) collection and would like technical catalogs and pricing for an upcoming architectural project.`
        );
        whatsappBtn.href = `https://wa.me/${rawPhone}?text=${message}`;
      }

      // Quote Button Trigger
      const quoteBtn = document.getElementById("brand-quote-btn");
      if (quoteBtn) {
        quoteBtn.setAttribute("data-quote-product", `${brand.name} (${brand.category})`);
      }

      // Update Specs Section
      const specsTitle = document.getElementById("brand-specs-title");
      if (specsTitle) specsTitle.textContent = `${brand.name} Technical Ledger`;

      const specsGrid = document.getElementById("brand-specs-grid");
      if (specsGrid && brand.specs) {
        specsGrid.innerHTML = brand.specs
          .map(
            (spec) => `
            <div class="brand-spec-item">
              <div class="brand-spec-label">${spec.label}</div>
              <div class="brand-spec-val">${spec.val}</div>
            </div>
          `
          )
          .join("");
      }

      // Update Product Line Section
      const lineHeading = document.getElementById("brand-line-heading");
      const lineSub = document.getElementById("brand-line-sub");
      if (lineHeading) lineHeading.textContent = `The ${brand.name} Product Line`;
      if (lineSub) {
        lineSub.textContent = `Explore our curated architectural offerings within the ${brand.name} series. Available across Udaipur and Southern Rajasthan.`;
      }

      const productGrid = document.getElementById("brand-product-grid");
      if (productGrid && brand.productLine) {
        const rawPhone = window.ROAR_DATA.brand.whatsappRaw || "917568552255";
        productGrid.innerHTML = brand.productLine
          .map((prod) => {
            const productWaMsg = encodeURIComponent(
              `Hello ROAR DOORS Concierge, I am interested in specifying "${prod.name}" under ${brand.name}. Please share technical sheets and thickness availability.`
            );
            return `
            <div class="brand-product-card">
              <div class="brand-product-img-wrap">
                <img src="${prod.image}" alt="${prod.name}" loading="lazy">
                <span class="brand-product-tag">${prod.tag}</span>
              </div>
              <div class="brand-product-body">
                <h3>${prod.name}</h3>
                <p>${prod.desc}</p>
                <div class="brand-product-specs-bar">
                  <strong>Specifications:</strong> ${prod.specs}
                </div>
                <div class="brand-product-actions">
                  <button class="btn btn-outline" 
                          data-open-quote-modal 
                          data-quote-product="${brand.name} - ${prod.name}">
                    Request Quote
                  </button>
                  <a href="https://wa.me/${rawPhone}?text=${productWaMsg}" 
                     class="btn btn-primary" 
                     target="_blank" 
                     rel="noopener">
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          `;
          })
          .join("");
      }

      // Smooth scroll to hero on tab change if requested
      if (shouldScroll) {
        const heroSection = document.querySelector(".brand-hero-section");
        if (heroSection) {
          const headerOffset = 130;
          const elementPosition = heroSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }

    // 05. Initial Render
    renderBrand(activeBrandId, false);
  }

  // Run on DOM load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBrandsPage);
  } else {
    initBrandsPage();
  }
})();

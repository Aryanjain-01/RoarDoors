/**
 * ROAR DOORS - Products Catalog Controller
 * Multi-criteria Filtering, URL State Sync, Instant Live Search & Sorting
 */

(function () {
  "use strict";

  const state = {
    category: "all",
    thickness: "all",
    finish: "all",
    search: "",
    sort: "featured"
  };

  function initCatalog() {
    const grid = document.getElementById("catalog-products-grid");
    if (!grid || !window.ROAR_DATA) return;

    // 01. Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category");
    if (catParam) {
      state.category = catParam;
    }

    // 02. Build Category Filter Pills
    buildCategoryPills();

    // 03. Setup Event Listeners
    setupFilterEvents();

    // 04. Initial Render
    renderCatalog();
  }

  function buildCategoryPills() {
    const container = document.getElementById("category-pills-container");
    if (!container) return;

    container.innerHTML = "";

    // "All Collections" Pill
    const allBtn = document.createElement("button");
    allBtn.className = `filter-pill ${state.category === "all" ? "active" : ""}`;
    allBtn.setAttribute("data-cat", "all");
    allBtn.textContent = "All Collections";
    container.appendChild(allBtn);

    // Dynamic Category Pills
    window.ROAR_DATA.categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = `filter-pill ${state.category === cat.id ? "active" : ""}`;
      btn.setAttribute("data-cat", cat.id);
      btn.textContent = cat.name;
      container.appendChild(btn);
    });
  }

  function setupFilterEvents() {
    const container = document.getElementById("category-pills-container");
    const searchInput = document.getElementById("catalog-search-input");
    const sortSelect = document.getElementById("catalog-sort-select");
    const thicknessSelect = document.getElementById("filter-thickness-select");
    const finishSelect = document.getElementById("filter-finish-select");

    // Category Click
    if (container) {
      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-pill");
        if (!btn) return;
        const cat = btn.getAttribute("data-cat");
        state.category = cat;

        // Update active UI
        container.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");

        // Update browser URL without reload
        const newUrl = new URL(window.location);
        if (cat === "all") {
          newUrl.searchParams.delete("category");
        } else {
          newUrl.searchParams.set("category", cat);
        }
        window.history.replaceState({}, "", newUrl);

        renderCatalog();
      });
    }

    // Search Input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.search = e.target.value.trim().toLowerCase();
        renderCatalog();
      });
    }

    // Sort Select
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.sort = e.target.value;
        renderCatalog();
      });
    }

    // Thickness Select
    if (thicknessSelect) {
      thicknessSelect.addEventListener("change", (e) => {
        state.thickness = e.target.value;
        renderCatalog();
      });
    }

    // Finish Select
    if (finishSelect) {
      finishSelect.addEventListener("change", (e) => {
        state.finish = e.target.value;
        renderCatalog();
      });
    }
  }

  function renderCatalog() {
    const grid = document.getElementById("catalog-products-grid");
    const countBadge = document.getElementById("catalog-results-count");
    if (!grid) return;

    let items = [...window.ROAR_DATA.products];

    // Filter by Category
    if (state.category !== "all") {
      items = items.filter((p) => p.category === state.category);
    }

    // Filter by Thickness
    if (state.thickness !== "all") {
      items = items.filter((p) => p.thickness.includes(state.thickness));
    }

    // Filter by Finish
    if (state.finish !== "all") {
      items = items.filter((p) => p.finish.toLowerCase().includes(state.finish.toLowerCase()));
    }

    // Filter by Search Query
    if (state.search) {
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(state.search) ||
          p.categoryName.toLowerCase().includes(state.search) ||
          p.grade.toLowerCase().includes(state.search) ||
          p.shortDesc.toLowerCase().includes(state.search)
      );
    }

    // Sort items
    if (state.sort === "name-asc") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sort === "grade") {
      items.sort((a, b) => a.grade.localeCompare(b.grade));
    } else {
      // featured first
      items.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Update Count
    if (countBadge) {
      countBadge.textContent = `Showing ${items.length} ${items.length === 1 ? "Product" : "Products"}`;
    }

    // Render Grid
    if (items.length === 0) {
      grid.innerHTML = `
        <div class="catalog-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--brass-gold); margin-bottom: 1rem;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No timber collections match your criteria</h3>
          <p>Try clearing your active filters or searching for another specification such as "Marine", "Birch", or "Oak".</p>
          <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="location.href='products.html'">Reset All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = items
      .map(
        (prod) => `
        <article class="product-card" id="card-${prod.id}">
          <div class="product-card-media">
            <img src="${prod.image}" alt="${prod.name}" loading="eager">
            <span class="product-badge">${prod.grade.split("/")[0].trim()}</span>
          </div>
          <div class="product-card-body">
            <span class="product-card-category">${prod.categoryName}</span>
            <h3 class="product-card-title">${prod.name}</h3>
            <p class="product-card-desc">${prod.shortDesc}</p>
            
            <div class="product-specs-chips">
              <span class="spec-chip">${prod.thickness.slice(0, 3).join(", ")}${prod.thickness.length > 3 ? "..." : ""}</span>
              <span class="spec-chip">${prod.woodType.split(" ")[0]} Core</span>
              <span class="spec-chip">${prod.density.split(" ")[0]} kg/m³</span>
            </div>

            <div class="product-card-actions">
              <a href="product-detail.html?id=${prod.id}" class="link-editorial">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <button class="btn btn-sage" style="padding: 0.5rem 1rem; font-size: 0.68rem;" data-open-quote-modal data-product="${prod.name}">
                Request Quote
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // Rebind quote buttons on freshly rendered cards
    grid.querySelectorAll("[data-open-quote-modal]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const pName = btn.getAttribute("data-product");
        if (window.ROAR && window.ROAR.openQuoteModal) {
          window.ROAR.openQuoteModal(pName);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initCatalog);
})();

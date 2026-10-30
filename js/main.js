/**
 * ROAR DOORS - Core Interactions & Architecture
 * Sticky Nav, Accessible Dialog Modals, WhatsApp Concierge & Scroll Animations
 */

(function () {
  "use strict";

  // Global namespace
  window.ROAR = window.ROAR || {};

  // -------------------------------------------------------------------------
  // 01. Sticky Header on Scroll
  // -------------------------------------------------------------------------
  function initStickyHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // -------------------------------------------------------------------------
  // 02. Mobile Navigation Drawer
  // -------------------------------------------------------------------------
  function initMobileDrawer() {
    const toggleBtn = document.querySelector(".mobile-toggle");
    const drawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".mobile-drawer-overlay");
    const closeBtn = document.querySelector(".drawer-close-btn");

    if (!toggleBtn || !drawer || !overlay) return;

    const openDrawer = () => {
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    };

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("active")) {
        closeDrawer();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 03. Accessible Dialog Modal (<dialog> with Progressive Enhancement)
  // -------------------------------------------------------------------------
  function initQuoteModal() {
    const dialog = document.getElementById("quote-dialog");
    if (!dialog) return;

    window.ROAR.openQuoteModal = function (preselectedProduct) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      document.body.style.overflow = "hidden";

      const productInput = dialog.querySelector("#dlg-product") || 
                           dialog.querySelector("[name='product']") || 
                           dialog.querySelector("#quote-product-select");
      if (preselectedProduct && productInput) {
        productInput.value = preselectedProduct;
      }
    };

    window.ROAR.closeQuoteModal = function () {
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
      document.body.style.overflow = "";
    };

    // Delegated click handler for opening modal (works with dynamic buttons)
    document.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-open-quote-modal]");
      if (openBtn) {
        e.preventDefault();
        const productName = openBtn.getAttribute("data-quote-product") || openBtn.getAttribute("data-product") || "";
        window.ROAR.openQuoteModal(productName);
        return;
      }

      const closeBtn = e.target.closest("[data-close-quote-modal]") || e.target.closest("#dialog-close-btn");
      if (closeBtn) {
        e.preventDefault();
        window.ROAR.closeQuoteModal();
      }
    });

    // Close on click backdrop
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        window.ROAR.closeQuoteModal();
      }
    });

    // Handle form submit in modal (supports both #quote-modal-form and #dialog-quote-form)
    const modalForm = document.getElementById("quote-modal-form") || document.getElementById("dialog-quote-form");
    if (modalForm) {
      modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = modalForm.querySelector("[name='name']");
        const productInput = modalForm.querySelector("[name='product']");
        const name = nameInput ? nameInput.value : "Valued Architect";
        const product = productInput ? productInput.value : "ROAR Timber";

        window.ROAR.closeQuoteModal();
        modalForm.reset();

        window.ROAR.showToast(
          `Thank you, ${name}. Your architectural inquiry for "${product || "ROAR Timber"}" has been received. Our concierge will contact you shortly.`
        );
      });
    }
  }

  // -------------------------------------------------------------------------
  // 04. Toast Notification System
  // -------------------------------------------------------------------------
  function initToast() {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    window.ROAR.showToast = function (message, duration = 4800) {
      const toast = document.createElement("div");
      toast.className = "toast-msg";
      toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--brass-gold); flex-shrink: 0;">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(15px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }, duration);
    };
  }

  // -------------------------------------------------------------------------
  // 05. WhatsApp Concierge Setup
  // -------------------------------------------------------------------------
  function initWhatsAppConcierge() {
    const rawNumber = window.ROAR_DATA?.brand?.whatsappRaw || "919999999999";
    const waElements = document.querySelectorAll("[data-wa-trigger]");

    waElements.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const customText = el.getAttribute("data-wa-msg") || 
          "Hello ROAR DOORS, I would like to inquire regarding your architectural timber and doors.";
        const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(customText)}`;
        window.open(url, "_blank");
      });
    });
  }

  // -------------------------------------------------------------------------
  // 06. Scroll Animations (IntersectionObserver)
  // -------------------------------------------------------------------------
  function initScrollAnimations() {
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // -------------------------------------------------------------------------
  // 07. Populate Product Dropdown in Quote Modal
  // -------------------------------------------------------------------------
  function populateProductDropdown() {
    const select = document.getElementById("quote-product-select");
    if (!select || !window.ROAR_DATA) return;

    window.ROAR_DATA.products.forEach((prod) => {
      const opt = document.createElement("option");
      opt.value = prod.name;
      opt.textContent = `${prod.name} (${prod.categoryName})`;
      select.appendChild(opt);
    });
  }

  // -------------------------------------------------------------------------
  // DOM Ready
  // -------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initStickyHeader();
    initMobileDrawer();
    initQuoteModal();
    initToast();
    initWhatsAppConcierge();
    initScrollAnimations();
    populateProductDropdown();
  });
})();

/**
 * ROAR DOORS - Contact & Architectural Consultation Controller
 * Form Handling, Role Presets, File Upload Previews & Direct WhatsApp Linkage
 */

(function () {
  "use strict";

  function initContactPage() {
    const form = document.getElementById("master-contact-form");
    const roleSelect = document.getElementById("contact-role-select");
    const fileInput = document.getElementById("contact-file-input");
    const fileNameDisplay = document.getElementById("file-name-display");
    const waDirectBtn = document.getElementById("contact-send-whatsapp");

    if (!form) return;

    // File input preview
    if (fileInput && fileNameDisplay) {
      fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
          fileNameDisplay.textContent = `Attached: ${fileInput.files[0].name} (${(fileInput.files[0].size / 1024).toFixed(0)} KB)`;
          fileNameDisplay.style.color = "var(--brass-gold)";
        } else {
          fileNameDisplay.textContent = "No architectural drawings attached.";
          fileNameDisplay.style.color = "var(--text-muted)";
        }
      });
    }

    // Role-based helper
    if (roleSelect) {
      roleSelect.addEventListener("change", () => {
        const role = roleSelect.value;
        const msgField = document.getElementById("contact-message-input");
        if (!msgField || msgField.value.trim().length > 0) return;

        if (role === "Architect" || role === "Interior Designer") {
          msgField.placeholder = "Please mention your firm name, project typology (residential/commercial), estimated square footage, and required wood species / certifications.";
        } else if (role === "Dealer") {
          msgField.placeholder = "Please share your showroom/firm location, current timber brands represented, and monthly plywood volume requirements.";
        } else {
          msgField.placeholder = "Describe your project requirements, quantities, or preferred door styles.";
        }
      });
    }

    // Direct WhatsApp send button
    if (waDirectBtn) {
      waDirectBtn.addEventListener("click", () => {
        const name = form.querySelector("[name='name']").value.trim() || "Prospective Client";
        const role = form.querySelector("[name='role']")?.value || "Client";
        const phone = form.querySelector("[name='phone']").value.trim();
        const category = form.querySelector("[name='category']").value;
        const volume = form.querySelector("[name='volume']").value.trim();
        const city = form.querySelector("[name='city']").value.trim();
        const notes = form.querySelector("[name='message']").value.trim();

        const rawNumber = window.ROAR_DATA?.brand?.whatsappRaw || "919999999999";
        const text = 
`*ROAR DOORS Architectural Inquiry*
• *Name:* ${name}
• *Role:* ${role}
• *Phone:* ${phone || "Not specified"}
• *Category Interest:* ${category || "General"}
• *Project Volume:* ${volume || "Not specified"}
• *Location:* ${city || "Not specified"}
• *Requirements:* ${notes || "Requesting catalog and technical price list."}`;

        window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`, "_blank");
      });
    }

    // Standard Form Submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("[name='name']").value.trim();
      const role = form.querySelector("[name='role']")?.value || "Valued Client";
      const submitBtn = form.querySelector("button[type='submit']");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Transmitting Inquiry...";
      }

      setTimeout(() => {
        form.reset();
        if (fileNameDisplay) fileNameDisplay.textContent = "No architectural drawings attached.";
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit Consultation Request";
        }

        window.ROAR.showToast(
          `Inquiry received, ${name}. An architectural liaison has been assigned to your project.`
        );
      }, 900);
    });
  }

  document.addEventListener("DOMContentLoaded", initContactPage);
})();

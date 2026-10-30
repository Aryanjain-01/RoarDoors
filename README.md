# ROAR DOORS — Luxury Architectural Timber & Bespoke Doors

> **"Crafted Timber. Lasting Legacy."**  
> An old-money, quiet-luxury multi-page web platform engineered for architects, interior designers, builders, dealers, and discerning homeowners.

---

## 🏛️ Brand Aesthetics & Design System

The visual identity of **ROAR DOORS** reflects timeless refinement, understated wealth, and architectural permanence:
- **Foundational Surfaces:** Warm Ivory / Cream (`#FAF6EE`), Natural Linen (`#F4EFE6`), Elevated White Sand (`#FCFAF4`).
- **Harmonic Accents:** Soft Sage Green (`#C9D3C0`), Dusty Powder Blue (`#CBD5DB`), Pale Champagne (`#EADFC8`), Muted Blush / Dusty Rose (`#E3CFC6`).
- **Details & Structure:** Deep Walnut Brown (`#3B2A20`), Antique Brushed Brass / Gold (`#A88B52`), Satin Hairline Borders (`rgba(168, 139, 82, 0.32)`).
- **Typography:** Classical Editorial Serif (**Cormorant Garamond**) paired with light, clean geometric sans-serif (**Jost**).
- **Tactile Texture:** Subtle microscopic organic grain overlay simulating fine archival paper and finished timber.

---

## 📑 Pages Included

1. **Home Page (`index.html`)**
   - Full-screen architectural hero featuring bespoke walnut pivot door, wordmark, tagline, and instant action buttons.
   - Generational brand craftsmanship introduction with workshop visual and 100% Zero-Void seal.
   - **"Our Collections"**: Asymmetric 7-category luxury grid linking directly into filtered catalog states.
   - **"Why ROAR DOORS"**: Four Pillars (Quad-Core Calibrated Quality, Organic Borate Termite Shield, 72-Hour Boiling Hydro-Shield, Up to 25-Year Warranty).
   - Curated Featured Products strip with quick specs and direct quote triggers.
   - Professional endorsements and testimonials from renowned architects and timber dealers.
   - High-impact call-to-action banner: *"Build with Confidence."*
   - Comprehensive footer with BIS certifications, company details, and social links.

2. **Products Catalog (`products.html`)**
   - Full master lineup of 12+ architectural products across all 7 categories.
   - Dynamic URL-synchronized filter pills (`?category=...`), enabling category cards on the homepage to link straight to pre-filtered states.
   - Multi-criteria filtering by **Category**, **Thickness** (6mm – 45mm), and **Finish** (Calibrated, Teak, Walnut, Oak, Fluted, Acoustic).
   - Live instantaneous search bar with zero lag.
   - Direct quote modal triggers and "View Details" links on every card.

3. **Product Detail Specification Template (`product-detail.html`)**
   - Universal dynamic template driven by `js/product-detail.js` and URL query parameter (`?id=...`).
   - High-resolution image gallery with real-time thumbnail switcher.
   - Editorial product narrative and key engineering features checklist.
   - **Technical Ledger Table**: Thicknesses, Sheet Dimensions, Standards (IS:710, IS:303, IS:2202, IS:1659), Density, Moisture Content, Resin Type, Boiling Water Test, Formaldehyde Emission class, and Warranty.
   - Architectural Applications grid with custom icons.
   - Direct "Request a Quote" and "WhatsApp Us" buttons pre-populated with the active product.
   - Printable / downloadable Technical Data Sheet (TDS) trigger.
   - Dynamic complementary/related collections showcase.

4. **Heritage & Craftsmanship (`about.html`)**
   - Atelier founding story and philosophy of quiet luxury.
   - Core Values: Uncompromising Calibration, Generational Forestry, Molecular Bonding, and Architectural Partnership.
   - Full-bleed estate drawing room and library interior showcase.
   - **5-Stage Manufacturing Journey**: Hydrostatic log conditioning, core alignment, hydraulic hot-press fusion, quad-head sanding, and destructive hydrostatic lab testing.
   - Official Certifications ledger (IS:710, IS:303, IS:2202, IS:1659, FSC 100%, ISO 9001, CARB Phase II).

5. **Architectural Consultation & Contact (`contact.html`)**
   - Two-column layout: Direct concierge channels (phone, email, hours, loading bay) alongside a comprehensive inquiry form.
   - Role-based guidance for Architects, Designers, Builders, Dealers, and Homeowners.
   - Project location, volume estimator, and drawing/BOQ file attachment simulation.
   - **"Send via WhatsApp"** button: instantly formats all entered project parameters into a structured WhatsApp message.
   - Warm-tinted architectural location map of the headquarters and dispatch hub.

---

## 🛠️ File Structure

```
ROAR DOORS/
├── index.html                  # Home page
├── products.html               # Product catalog with live filter/search
├── product-detail.html         # Dynamic product detail & spec sheet
├── about.html                  # Heritage, values, manufacturing & certs
├── contact.html                # Consultation form, map & WhatsApp concierge
├── README.md                   # Documentation & customization guide
├── css/
│   ├── style.css               # Design tokens, typography, hero, cards, dialog
│   └── responsive.css          # Breakpoints, mobile drawer, catalog toolbar
├── js/
│   ├── data.js                 # Central database for products, categories & specs
│   ├── main.js                 # Sticky nav, mobile drawer, dialog modal, toast alerts
│   ├── products.js             # Catalog filtering, search, sorting & URL state
│   ├── product-detail.js       # Dynamic detail page loader, gallery & spec table
│   └── contact.js              # Form validation, role hints & WhatsApp formatting
└── assets/
    └── images/                 # High-resolution architectural photography
        ├── hero_timber_interior.jpg
        ├── category_commercial_ply.jpg
        ├── category_marine_ply.jpg
        ├── category_waterproof_bwp.jpg
        ├── category_flush_doors.jpg
        ├── category_designer_doors.jpg
        ├── category_veneers_laminates.jpg
        ├── category_blockboards.jpg
        ├── artisan_craftsmanship.jpg
        ├── architectural_estate.jpg
        ├── marine_plywood_luxury.jpg
        ├── product_birch_plywood.jpg
        ├── product_arch_door.jpg
        ├── product_flush_door_walnut.jpg
        ├── product_designer_fluted_door.jpg
        ├── product_natural_veneers.jpg
        ├── product_blockboard.jpg
        ├── product_fire_retardant.jpg
        └── roar_doors_logo.png
```

---

## ✏️ How to Replace Placeholders

All contact details and placeholders are centralized in **`js/data.js`** under the `ROAR_DATA.brand` object, as well as in the static HTML templates:

| Placeholder | Where to Replace | Example Value |
| :--- | :--- | :--- |
| `[Phone]` | `js/data.js` & HTML files | `+91 98200 12345` |
| `[Email]` | `js/data.js` & HTML files | `concierge@roardoors.com` |
| `[Address]` | `js/data.js` & HTML files | `ROAR Estate, Timber Industrial Zone, Mumbai - 400054` |
| `[WhatsApp number]` | `js/data.js` & HTML files | `+91 98200 12345` |
| `[Year established]` | `js/data.js` & HTML files | `1988` |
| `whatsappRaw` | `js/data.js` (line 17) | `919820012345` (digits only without `+` or spaces for wa.me links) |

---

## 🚀 Running Locally

The website is pure modern HTML5, CSS3, and Vanilla JavaScript with zero npm build step required. You can serve it using any local static server:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node.js npx serve
npx serve .
```

Open `http://localhost:8080` in any browser.

---

## 🌟 Interactive Features

1. **Universal Floating WhatsApp Concierge:** Present on every single page with an online status indicator. Clicking opens a direct conversation with custom prefilled messages depending on the page or active product.
2. **Accessible Native `<dialog>` Modal:** Seamlessly opens the "Request an Architectural Quote" form from any button across the entire site without page reload.
3. **Smart URL Synchronization:** Clicking any category card on `index.html` (e.g. *Marine Plywood*) navigates to `products.html?category=marine-plywood`, automatically activating the corresponding filter pill and showing only those products.
4. **Instant Dynamic Product Switching:** Visiting `product-detail.html?id=roar-fluted-brass-designer-door` or clicking any product in the catalog immediately populates the page with that product's unique image gallery, thickness options, technical specs, application tiles, and related collections.
5. **Toast Notification System:** Subtle luxury feedback alerts when submitting inquiries, downloading spec sheets, or requesting sample folios.

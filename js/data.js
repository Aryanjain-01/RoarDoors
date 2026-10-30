/**
 * ROAR DOORS - Architectural Product & Category Data
 * Brand: ROAR DOORS
 * Tagline: Crafted Timber. Lasting Legacy.
 */

const ROAR_DATA = {
  brand: {
    name: "ROAR DOORS",
    tagline: "Crafted Timber. Lasting Legacy.",
    subtagline: "A Legacy of Shrinath Marketing Company (SMC) & M M Plylam — Trusted in Udaipur Since 2007.",
    parentFirms: "Shrinath Marketing Company (SMC) & M M Plylam",
    established: "2007",
    experienceYears: "17+ Years",
    city: "Udaipur, Rajasthan",
    phone: "+91 95099 25846",
    email: "concierge@roardoors.com",
    address: "Udaipur, Rajasthan, India",
    whatsapp: "+91 95099 25846",
    whatsappRaw: "7568552255", // Clean digits for wa.me links
    hours: "Monday – Saturday: 9:30 AM – 8:00 PM (IST)",
    consultationHours: "Architectural Studio & Showroom Consultations by Appointment",
    authorizedDealerships: [
      {
        id: "roar-commercial",
        name: "ROAR Commercial",
        badge: "Proprietary Line",
        tagline: "Avant-Garde Architectural Louvers, Acoustic Wall Panels & Commercial Surfaces",
        category: "Wall Panels, Fluted Louvers & Acrylics"
      },
      {
        id: "roar-decor",
        name: "ROAR Decor",
        badge: "Proprietary Line",
        tagline: "Architectural Surface Finishes, High-Pressure Decorative Laminates & Mattes",
        category: "Designer Decorative Laminates"
      },
      {
        id: "greenply",
        name: "Greenply",
        badge: "Official Stockist",
        tagline: "India’s Foremost Certified Structural & Marine Grade Plywood",
        category: "IS:710 Marine & IS:303 Calibrated Plywood"
      },
      {
        id: "keto-ply",
        name: "Keto Ply",
        badge: "Official Stockist",
        tagline: "High-Density Precision Calibrated Plywood Solutions",
        category: "Heavy-Duty Core Plywood"
      },
      {
        id: "smc-plylam",
        name: "SMC & M M Plylam",
        badge: "Founding Firm",
        tagline: "Udaipur’s Central Timber Depot & Architectural Consultation Atelier Since 2007",
        category: "Udaipur Distribution Hub"
      }
    ]
  },

  brands: [
    {
      id: "roar-commercial",
      name: "ROAR Commercial",
      role: "Proprietary Line",
      category: "Wall Panels, Louvers & Commercial Surfaces",
      tagline: "Avant-Garde Architectural Wall Styling, Acoustic Fluted Louvers & High-Traffic Surfaces",
      heroImage: "assets/images/category_designer_doors.jpg",
      description: "ROAR Commercial represents our specialized architectural division engineered for commercial complexes, corporate headquarters, hospitality lounges, and high-end residential interiors. Conceived to deliver uncompromising durability with striking aesthetic flair, ROAR Commercial integrates precision-extruded acoustic louvers, lightweight composite wall panels, translucent alabaster sheets, and moisture-shield acrylic accents. Every product is calibrated for rapid modular installation, superior impact resistance, and effortless maintenance in high-traffic environments.",
      highlights: [
        "Class-1 & Class-A fire retardant composite formulations",
        "Acoustic noise reduction coefficient (NRC) rating up to 0.75",
        "Concealed tongue-and-groove interlocking rapid assembly",
        "Zero-porosity moisture and steam repellent architectural cores",
        "10-Year commercial performance and color stability warranty"
      ],
      specs: [
        { label: "Division Status", val: "ROAR Proprietary Architectural Division" },
        { label: "Core Focus", val: "Acoustic Fluted Louvers, Wall Panels & Translucent Acrylics" },
        { label: "Fire Resistance", val: "Class 1 / Class A Flame Spread Compliant" },
        { label: "Acoustic Rating", val: "NRC up to 0.75 for Reverberation Control" },
        { label: "Warranty", val: "10-Year Commercial Surface Guarantee" },
        { label: "Applications", val: "Boardrooms, Lobbies, Theaters, Hotels & Feature Walls" }
      ],
      productLine: [
        {
          name: "ROAR Fluted Acoustic Louver Panels",
          tag: "Acoustic & Wall Styling",
          image: "assets/images/product_designer_fluted_door.jpg",
          desc: "Precision-milled fluted wall louvers with concealed tongue-and-groove interlocking joints. Designed for acoustic warmth and architectural shadow lines in luxury commercial lounges and residences.",
          specs: "Depth: 12mm – 18mm | Width: 120mm – 200mm | Length: 8ft – 10ft | Finishes: Smoked Walnut, Charcoal Oak, Brass Inlay"
        },
        {
          name: "ROAR Monolithic Interior Wall Cladding",
          tag: "Heavy-Duty Surfacing",
          image: "assets/images/category_designer_doors.jpg",
          desc: "Continuous large-format architectural wall panels engineered with high scratch resistance, stain repellence, and zero maintenance for high-traffic corridors and corporate reception areas.",
          specs: "Thickness: 6mm, 8mm, 10mm | Dimensions: 8ft x 4ft, 9ft x 4ft | Scratch Resistance: > 3.5N | Anti-Bacterial Surface"
        },
        {
          name: "ROAR Lumina Translucent Acrylic & Alabaster",
          tag: "Backlit Architectural Feature",
          image: "assets/images/architectural_estate.jpg",
          desc: "High-translucency mineral acrylic sheets tailored for backlit luxury counters, elevator portals, bar backsplashes, and glowing ceiling soffit accents.",
          specs: "Thickness: 6mm – 12mm | Translucency: 42% – 68% | Thermoformable for Curves | Zero Porosity"
        },
        {
          name: "ROAR Exterior Weather-Shield HPL Louvers",
          tag: "Exterior Facade System",
          image: "assets/images/hero_timber_interior.jpg",
          desc: "UV-stabilized exterior grade high-pressure composite louvers that withstand scorching Rajasthan sunlight, monsoon humidity, and thermal shock without fading.",
          specs: "Core: Solid Phenolic Resin | UV Protection: Dual Double-Hardened Resin | Flame Resistance: Class 1 | 15-Year Exterior Warranty"
        }
      ]
    },
    {
      id: "roar-decor",
      name: "ROAR Decor",
      role: "Proprietary Line",
      category: "Architectural Laminates & Surfaces",
      tagline: "High-Pressure Decorative Laminates, Zero-Fingerprint Mattes & Natural Textures",
      heroImage: "assets/images/category_veneers_laminates.jpg",
      description: "ROAR Decor is our premier decorative surface collection curated specifically for interior architects, millwork craftsmen, and custom cabinet ateliers. Sourced and manufactured using high-pressure resin technology, ROAR Decor offers an expansive palette of anti-fingerprint soft-touch velvet mattes, authentic synchronized woodgrains, tactile stone textures, and liquid metal inlays. Engineered to resist abrasions, boiling water, household chemicals, and UV degradation, ROAR Decor transforms mundane millwork into bespoke sculptural furniture.",
      highlights: [
        "Electron-beam cured ultra-matte finishes with zero fingerprint retention",
        "Synchronized embossed pore-matched European timber textures",
        "Stain-proof food-grade surface safe for kitchen islands and dining surfaces",
        "High-density phenolic core backing ensuring crack resistance under CNC routing",
        "15-Year color fastness and surface integrity guarantee"
      ],
      specs: [
        { label: "Collection Status", val: "ROAR Proprietary Decorative Collection" },
        { label: "Core Focus", val: "High-Pressure Decorative Laminates, Mattes & Textures" },
        { label: "Sheet Thickness", val: "0.8mm, 1.0mm, 1.2mm & 12mm Compact Board" },
        { label: "Certification", val: "IS:2046 & EN 438-2 Certified" },
        { label: "Warranty", val: "15-Year Color Fastness & Surface Integrity" },
        { label: "Applications", val: "Modular Kitchens, Wardrobes, Vanity Units, Wall Linings" }
      ],
      productLine: [
        {
          name: "ROAR Velvet-Touch Zero-Fingerprint Mattes",
          tag: "Super-Matte Technology",
          image: "assets/images/product_natural_veneers.jpg",
          desc: "State-of-the-art electron-beam cured matte laminates with zero light reflection, anti-fingerprint coating, and microscopic thermal scratch recovery for pristine kitchen and wardrobe fronts.",
          specs: "Thickness: 1.0mm | Gloss Level: < 5 Gloss Units | Anti-Bacterial Shield | Resistant to Boiling Water & Stains"
        },
        {
          name: "ROAR Synchronized Woodgrain Architectural Laminates",
          tag: "Deep Textured Timber",
          image: "assets/images/category_veneers_laminates.jpg",
          desc: "Tactile relief laminates where the physical wood texture precisely aligns with the visual grain lines. Faithfully captures raw European oak, American walnut, and rift teak.",
          specs: "Sheet Size: 8ft x 4ft (2440 x 1220mm) | Pore-Matched Embossing | Scratch Resistance: > 1200 Cycles"
        },
        {
          name: "ROAR Natural Stone & Terrazzo High-Pressure Sheets",
          tag: "Mineral & Concrete Textures",
          image: "assets/images/product_birch_plywood.jpg",
          desc: "Authentic haptic reproductions of Italian travertine, honed slate, cast concrete, and Venetian terrazzo for architectural dadoes and kitchen islands.",
          specs: "Thickness: 1.0mm & 1.2mm | Heat Resistant up to 180°C | Stain-Proof Food-Safe Surface"
        },
        {
          name: "ROAR Compact High-Pressure Solid Phenolic Boards",
          tag: "100% Waterproof Structural HPL",
          image: "assets/images/marine_plywood_luxury.jpg",
          desc: "Self-supporting 12mm high-density solid core boards requiring no substrate. Impervious to water, steam, and heavy impacts for luxury vanity partitions and outdoor kitchen carcasses.",
          specs: "Thickness: 12mm Solid Core | 100% Boiling Water Proof | Density: 1400 kg/m³ | Zero Core Delamination"
        }
      ]
    },
    {
      id: "greenply",
      name: "Greenply",
      role: "Official Stockist",
      category: "IS:710 Marine & Structural Plywood",
      tagline: "India’s Foremost Certified Structural & Marine Grade Plywood",
      heroImage: "assets/images/marine_plywood_luxury.jpg",
      description: "As Udaipur's premier authorized stockist for Greenply, we maintain ready local inventory of BIS-certified plywood lines. Greenply represents decades of trusted structural integrity, certified IS:710 boiling waterproof compliance, and low-VOC emissions. Backed by manufacturer warranties and certified batch testing, Greenply products delivered through our depot ensure total peace of mind for structural builders and discerning homeowners.",
      highlights: [
        "Certified BIS IS:710 Marine Grade with 72+ hour boiling water proof testing",
        "Zero-emission E0 formaldehyde compliance for wholesome indoor air quality",
        "Triple-layer anti-termite and borer chemical infusion",
        "Direct manufacturer backed warranties up to lifetime structural coverage",
        "Substantial ready stock in Udaipur warehouse for same-day dispatch"
      ],
      specs: [
        { label: "Partnership Role", val: "Official Certified Stockist & Supply Partner" },
        { label: "Core Focus", val: "BIS Certified IS:710 Marine & IS:303 Structural Plywood" },
        { label: "Emission Standard", val: "E0 Compliant (Ultra Low VOC Emission)" },
        { label: "Certification", val: "IS:710, IS:303, GreenPro Gold, CARB Phase II" },
        { label: "Warranty", val: "Up to Lifetime / 30-Year Manufacturer Warranty" },
        { label: "Depot Availability", val: "Ready Stock in Udaipur Warehouse for Immediate Dispatch" }
      ],
      productLine: [
        {
          name: "Green Platinum IS:710 Marine Plywood",
          tag: "Flagship Marine Plywood",
          image: "assets/images/category_marine_ply.jpg",
          desc: "2X fire-retardant and boiling water proof marine plywood bonded with unextended phenolic resin. Anti-termite treated with lifelong structural assurance.",
          specs: "Grades: IS:710 BWP | Thickness: 6mm – 25mm | Warranty: 30-Year Manufacturer Warranty | 72h+ Boiling Proof"
        },
        {
          name: "Green Club 700 Structural Plywood",
          tag: "Dual-Calibrated BWP",
          image: "assets/images/marine_plywood_luxury.jpg",
          desc: "Precision dual-calibrated premium structural plywood featuring zero core gaps, virgin timber veneers, and 7x boiling resistance.",
          specs: "Grade: Premium BWP | Thickness: 9mm, 12mm, 16mm, 19mm | Uniform 0.1mm calibration"
        },
        {
          name: "Green E0 Zero-Emission Calibrated Ply",
          tag: "Health & Eco-Conscious",
          image: "assets/images/product_birch_plywood.jpg",
          desc: "Certified E0 ultra-low formaldehyde emitting plywood engineered for children's bedrooms, luxury penthouses, and healthcare spaces.",
          specs: "Grade: E0 Certified | Low VOC | Non-Toxic Resins | Anti-Microbial & Anti-Viral"
        }
      ]
    },
    {
      id: "keto-ply",
      name: "Keto Ply",
      role: "Official Stockist",
      category: "Calibrated Core Timber",
      tagline: "High-Density Precision Calibrated Plywood Solutions",
      heroImage: "assets/images/category_commercial_ply.jpg",
      description: "Keto Ply is engineered for precision joinery, CNC machine routing, and modular architectural cabinetry. Sourced from high-density seasoned timber cores and calibrated through 4-head automated sanding lines, Keto Ply panels provide the flat, non-warping foundation demanded by contemporary modular furniture manufacturers and interior contractors.",
      highlights: [
        "Quad-head automated calibration ensuring ±0.15mm uniform thickness",
        "100% seasoned timber cores minimizing warp and deflection across spans",
        "High screw-holding capacity exceeding 2800 N on all edge planes",
        "Uniformly balanced veneer lay-up preventing surface undulation",
        "Backed by 15-Year anti-borer and termite protection guarantee"
      ],
      specs: [
        { label: "Partnership Role", val: "Official Stockist" },
        { label: "Core Focus", val: "High-Density Calibrated Plywood & Core Timber" },
        { label: "Calibration", val: "Quad-Head Sanded (±0.15mm Tolerance)" },
        { label: "Standards", val: "IS:710 & IS:303 Precision Formats" },
        { label: "Warranty", val: "15 to 20-Year Anti-Borer Guarantee" },
        { label: "Applications", val: "CNC Modular Kitchens, Wardrobes, Bed Platforms & Partitioning" }
      ],
      productLine: [
        {
          name: "Keto Quad-Calibrated Heavy-Duty Core Ply",
          tag: "Precision Calibrated",
          image: "assets/images/plywood_macro_layers.jpg",
          desc: "Engineered specifically for computer-numeric-control (CNC) routing machines with razor-sharp tolerances and zero surface undulations.",
          specs: "Thickness: 12mm, 16mm, 19mm | Core: 100% Hardwood | Surface: 400-grit calibrated smoothness"
        },
        {
          name: "Keto BWP 710 Water-Shield Plywood",
          tag: "Boiling Water Proof",
          image: "assets/images/category_waterproof_bwp.jpg",
          desc: "Phenolic bonded moisture barrier plywood designed for continuous durability under humid tropical weather conditions and domestic wet areas.",
          specs: "Grade: IS:710 Marine | 72-Hour Boiling Test Passed | Anti-Termite Vacuum Treatment"
        },
        {
          name: "Keto Solid Timber Batten Blockboards",
          tag: "Zero-Warp Core Battens",
          image: "assets/images/product_blockboard.jpg",
          desc: "Seasoned pine batten blockboards that eliminate warping in tall 8ft to 10ft sliding door shutters and heavy-load library shelving.",
          specs: "Grade: IS:1659 Grade I | Thickness: 19mm, 25mm | Kiln-Seasoned Pine Core"
        }
      ]
    },
    {
      id: "smc-plylam",
      name: "SMC & M M Plylam",
      role: "Founding Firm",
      category: "Udaipur Distribution Hub & Atelier",
      tagline: "Udaipur's Trusted Timber & Plywood Distribution Hub Since 2007",
      heroImage: "assets/images/artisan_craftsmanship.jpg",
      description: "Founded in 2007 in Udaipur, Shrinath Marketing Company (SMC) & M M Plylam represent the bedrock upon which the ROAR DOORS luxury atelier was established. Operating as the region's central timber depot, consultation center, and supply hub, we stock thousands of sheets of certified structural plywood, authentic veneers, designer laminates, and bespoke flush doors with same-day inspection and dispatch capabilities.",
      highlights: [
        "17+ years of continuous service to architects, designers, builders, and homeowners",
        "Thousands of certified sheets in active local warehouse inventory",
        "In-person sheet selection, micrometer verification, and grading inspection",
        "Over 500+ material swatches across veneers, laminates, louvers, and cores",
        "Dedicated logistics fleet serving Udaipur and Southern Rajasthan"
      ],
      specs: [
        { label: "Founding Year", val: "2007 (17+ Years of Heritage)" },
        { label: "Location", val: "Udaipur, Rajasthan, India" },
        { label: "Depot Capacity", val: "Comprehensive Warehouse with Thousands of Ready Sheets" },
        { label: "Consultation", val: "In-Person Architectural & Builder Walkthroughs" },
        { label: "Logistics", val: "Direct Udaipur & Southern Rajasthan Dispatch Network" },
        { label: "Clientele", val: "500+ Distinguished Architects, Designers, Builders & Homeowners" }
      ],
      productLine: [
        {
          name: "Full-Scale Timber Warehouse & Direct Inspection",
          tag: "Distribution Depot",
          image: "assets/images/artisan_craftsmanship.jpg",
          desc: "Inspect full 8ft x 4ft sheets in person, check core calibrations with micrometers, verify BIS stamps, and hand-select master veneers before dispatch.",
          specs: "Depot: Udaipur Hub | Ready Stocks: Marine Ply, Flush Doors, Decorative Panels, Hardwood Cores"
        },
        {
          name: "Architectural Material Folio & Swatch Library",
          tag: "Design Studio Concierge",
          image: "assets/images/architectural_estate.jpg",
          desc: "Over 500+ physical samples of laminates, fluted louvers, real veneers, and core cutouts available for architects, interior designers, and their clients.",
          specs: "Consultation by Appointment | Custom Sample Box Delivery across Rajasthan"
        },
        {
          name: "Project Volume Sourcing & Precision Cut Logistics",
          tag: "Turnkey Commercial Supply",
          image: "assets/images/hero_timber_interior.jpg",
          desc: "Direct bulk procurement and tailored sizing for multi-unit residential developments, heritage hotel restorations, and commercial offices.",
          specs: "Guaranteed Lot Consistency | Direct Mill Sourcing | On-Site Transit Insurance"
        }
      ]
    }
  ],

  categories: [
    {
      id: "commercial-plywood",
      name: "Commercial Plywood",
      tagline: "Calibrated Stability for High-End Millwork",
      desc: "Uniformly balanced hardwood veneers bonded with fortified MUF resins for seamless interior cabinetry and paneling.",
      image: "assets/images/category_commercial_ply.jpg",
      grade: "IS:303 MR Grade",
      featuredCount: "4 Products"
    },
    {
      id: "marine-plywood",
      name: "Marine Plywood",
      tagline: "Uncompromising 72-Hour Boiling Proof Timber",
      desc: "Engineered from select Gurjan face and dense core plies under 100% unextended phenolic resin for extreme durability.",
      image: "assets/images/category_marine_ply.jpg",
      grade: "IS:710 Marine Grade",
      featuredCount: "3 Products"
    },
    {
      id: "waterproof-bwp",
      name: "Waterproof / BWP Plywood",
      tagline: "Hydro-Shield Moisture Barrier for Wet Spaces",
      desc: "Formulated for luxury kitchens, spas, and vanity architecture with complete borer, termite, and fungi protection.",
      image: "assets/images/category_waterproof_bwp.jpg",
      grade: "IS:710 / BWP Certified",
      featuredCount: "3 Products"
    },
    {
      id: "flush-doors",
      name: "Flush Doors",
      tagline: "Bespoke Solid-Core Planarity & Architectural Presence",
      desc: "Kiln-seasoned pine batten cores, quadruple-rail framing, and seamless concealed-hinge readiness for grand portals.",
      image: "assets/images/category_flush_doors.jpg",
      grade: "IS:2202 Part 1",
      featuredCount: "3 Products"
    },
    {
      id: "designer-doors",
      name: "Designer & Laminated Doors",
      tagline: "A Sculptural Statement at Every Threshold",
      desc: "Fluted reliefs, brushed antique brass inlays, tactile natural textures, and acoustic perimeter sealing for bespoke estates.",
      image: "assets/images/category_designer_doors.jpg",
      grade: "Bespoke Architectural",
      featuredCount: "3 Products"
    },
    {
      id: "veneers-laminates",
      name: "Veneers & Laminates",
      tagline: "Natural Grain Symphony & Muted Textural Depth",
      desc: "Bookmatched European smoked oak, American walnut, and matte tactile high-pressure architectural surfacing sheets.",
      image: "assets/images/category_veneers_laminates.jpg",
      grade: "Grade AA Architectural",
      featuredCount: "3 Products"
    },
    {
      id: "blockboards-mdf",
      name: "Block Boards & MDF",
      tagline: "Zero-Warp Core Rigidity for Continuous Joinery",
      desc: "Precision-seasoned solid wood blocks joined with negligible gap tolerances for tall wardrobe shutters and structural frames.",
      image: "assets/images/category_blockboards.jpg",
      grade: "IS:1659 Grade I",
      featuredCount: "3 Products"
    }
  ],

  products: [
    {
      id: "roar-sovereign-marine-is710",
      name: "ROAR Sovereign Marine IS:710 Plywood",
      category: "marine-plywood",
      categoryName: "Marine Plywood",
      tagline: "The Pinnacle of Boiling-Water-Proof Timber Engineering",
      shortDesc: "Premium Gurjan face and 100% hardwood core ply bonded with unextended bordeaux phenolic adhesive. Tested to withstand 72+ hours in boiling water.",
      description: "ROAR Sovereign Marine IS:710 is our flagship timber panel, conceived specifically for coastal residences, architectural wet zones, superyacht cabinetry, and external soffits. Sourced from responsibly managed mature hardwood plantations, each core veneer is peeled with micrometer precision and conditioned to achieve balanced moisture uniformity. Coated with pure, unextended Bordeaux phenolic formaldehyde resin, Sovereign Marine undergoes multi-stage hydraulic hot pressing under 14 kg/cm² pressure, ensuring absolute molecular fusion across all plies. Guaranteed 100% borer and termite proof with our proprietary organic borate vacuum pressure impregnation.",
      image: "assets/images/marine_plywood_luxury.jpg",
      gallery: [
        "assets/images/marine_plywood_luxury.jpg",
        "assets/images/category_marine_ply.jpg",
        "assets/images/plywood_macro_layers.jpg",
        "assets/images/category_waterproof_bwp.jpg"
      ],
      thickness: ["6mm", "9mm", "12mm", "16mm", "19mm", "25mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft (2440 x 1220mm), 7ft x 4ft, 7ft x 3ft, 6ft x 4ft",
      grade: "IS:710 Marine Grade BWP / Calibrated Quad-Core",
      finish: "Natural Teak & Gurjan Face / Calibrated Smooth",
      woodType: "100% Selected Hardwood Core & Grade-A Teak Face",
      adhesive: "100% Unextended Bordeaux Phenolic Resin",
      warranty: "25-Year Unconditional Replacement Warranty",
      certification: "IS:710, FSC Certified, CARB Phase II, GreenPro Gold",
      density: "760 - 810 kg/m³",
      moistureContent: "8.5% ± 1.5%",
      formaldehyde: "E0 Emission Compliant (Ultra Low VOC)",
      boilingTest: "Exceeds 72 Hours Boiling Water Test without delamination",
      keyFeatures: [
        "100% Calibrated 4-side planar core with zero core gaps or overlapping",
        "Unextended Bordeaux phenolic resin for perpetual moisture resistance",
        "Vacuum Pressure Impregnation (VPI) with organic borate preservatives",
        "25-Year lifetime warranty against wood-boring insects and delamination",
        "Ultra-smooth surface ready for direct high-end natural veneer press"
      ],
      applications: [
        "Luxury Kitchen Countertops & Island Carcasses",
        "Maritime & Superyacht Interior Joinery",
        "Spa, Sauna & Powder Room Vanity Millwork",
        "Exterior Architectural Soffits & Verandah Ceilings",
        "High-Traffic Commercial Architectural Partitions"
      ],
      featured: true
    },
    {
      id: "roar-imperial-walnut-flush-door",
      name: "ROAR Imperial American Walnut Flush Door",
      category: "flush-doors",
      categoryName: "Flush Doors",
      tagline: "Architectural Height & Silent Mass for Grand Thresholds",
      shortDesc: "Kiln-dried solid pine stile-and-rail construction with high-density acoustic core and natural American walnut timber face.",
      description: "Engineered to deliver exceptional thermal inertia, acoustic solitude, and stately tactile presence. The ROAR Imperial American Walnut Flush Door features seasoned kiln-dried pine stiles, double-width timber rails, and a solid acoustic core that dampens ambient sound transmission up to 34 dB. Balanced with calibrated 3.5mm cross-bands and crowned by bookmatched quarter-cut American walnut veneers, each door leaf is hand-sanded to 400-grit silk finish and ready for concealed 3D hinges and magnetic mortise locksets.",
      image: "assets/images/category_flush_doors.jpg",
      gallery: [
        "assets/images/category_flush_doors.jpg",
        "assets/images/product_flush_door_walnut.jpg",
        "assets/images/product_arch_door.jpg",
        "assets/images/artisan_craftsmanship.jpg"
      ],
      thickness: ["32mm", "35mm", "38mm", "40mm", "45mm", "50mm"],
      thicknessDefault: "40mm",
      sizes: "84in x 36in, 96in x 42in, 108in x 48in (Custom Architectural Heights up to 12ft)",
      grade: "IS:2202 Part 1 Solid Core Flush Door",
      finish: "Hand-Rubbed American Walnut / Matte Satin Polyurethane",
      woodType: "Kiln-Seasoned Pinewood Core with Hardwood Frame & Walnut Veneer",
      adhesive: "Moisture-Resistant Cross-Linked Phenolic Polymer",
      warranty: "20-Year Anti-Warp & Structural Integrity Warranty",
      certification: "IS:2202 (Pt 1), ISO 9001:2015, Green Building Certified",
      density: "680 - 740 kg/m³",
      moistureContent: "10% ± 2%",
      formaldehyde: "E1 European Standard",
      boilingTest: "Endures cyclic moisture soak without edge swelling",
      keyFeatures: [
        "Heavy double-width solid hardwood perimeter frame for concealed hardware",
        "Multi-chamber acoustic dampening core rated at Rw 34 dB",
        "Calibrated anti-warp balancing ply preventing deflection across 10ft spans",
        "Pre-routed for magnetic latching systems and architectural drop seals",
        "Rich architectural crown-cut and quarter-cut walnut wood grain"
      ],
      applications: [
        "Master Bedroom & Penthouse Entry Portals",
        "Private Executive Offices & Boardrooms",
        "Luxury Villa Guest Suites & Powder Rooms",
        "Home Cinemas & Acoustic Listening Salons",
        "High-End Boutique Hotel Guest Rooms"
      ],
      featured: true
    },
    {
      id: "roar-fluted-brass-designer-door",
      name: "ROAR Atelier Fluted Timber & Brass Door",
      category: "designer-doors",
      categoryName: "Designer & Laminated Doors",
      tagline: "Sculptural Fluting with Hand-Inlaid Antique Brass Hairlines",
      shortDesc: "A masterwork of geometric shadow lines, natural timber reed relief, and hand-patinated antique brass metal strips.",
      description: "Conceived as an architectural art piece, the ROAR Atelier Fluted Timber Door integrates precision CNC-milled fluted solid wood relief with 4mm solid brushed brass inlay extrusions. Each brass hairline is meticulously seated flush by our master artisans and sealed with an invisible micro-crystalline wax. The solid hardwood internal chassis ensures zero warp even in dry climates with variable indoor heating, making it the definitive threshold statement for discerning residential architects.",
      image: "assets/images/category_designer_doors.jpg",
      gallery: [
        "assets/images/category_designer_doors.jpg",
        "assets/images/product_designer_fluted_door.jpg",
        "assets/images/architectural_estate.jpg",
        "assets/images/product_arch_door.jpg"
      ],
      thickness: ["38mm", "42mm", "45mm", "55mm Pivot Edition"],
      thicknessDefault: "42mm",
      sizes: "Custom Bespoke Widths up to 1400mm; Heights up to 3200mm",
      grade: "Artisanal Architectural Grade",
      finish: "Smoked Walnut Fluted Relief with Brushed Antique Brass Inlay",
      woodType: "Dense Engineered Core with Solid Walnut Reed Cladding",
      adhesive: "Dual-Cure Structural Polyurethane (PUR)",
      warranty: "15-Year Craftsmanship & Material Assurance",
      certification: "Architectural Custom Guild Standard, BIS Certified Core",
      density: "780 kg/m³",
      moistureContent: "9% ± 1%",
      formaldehyde: "E0 Compliant (Zero Toxins)",
      boilingTest: "Weatherproof UV-stabilized exterior seal",
      keyFeatures: [
        "Precision 12mm fluted reeding with rounded acoustic shadow reveals",
        "Solid 4mm unlacquered antique brushed brass accent strips",
        "Heavy-duty internal steel-stabilizing core for grand oversized pivot formats",
        "Custom jamb system with integrated perimeter acoustic rubber gasket",
        "Compatible with motorized smart locks and concealed FritsJurgens pivots"
      ],
      applications: [
        "Grand Townhouse Main Foyer Entrance",
        "Formal Drawing Room & Dining Salon Portals",
        "Private Wine Cellar & Tasting Room Access",
        "Luxury Spa Sanctuary Entries",
        "Penthouse Gallery Double Doors"
      ],
      featured: true
    },
    {
      id: "roar-prime-calibrated-birch-ply",
      name: "ROAR Nordic Birch Calibrated Plywood",
      category: "commercial-plywood",
      categoryName: "Commercial Plywood",
      tagline: "Multi-Ply Scandinavian Birch with Razor-Clean Edge Purity",
      shortDesc: "13-to-19 ply cross-laminated 100% white birch timber with 0.1mm thickness calibration tolerance for precision joinery.",
      description: "When architectural projects demand exposed edge joinery, laser-cut accuracy, and flawless structural flat planes, ROAR Nordic Birch is the industry benchmark. Every single ply is 1.4mm peeled birch veneer, laid with grain perpendicular to adjacent layers. Pressed under extreme uniform pressure and calibrated on our quadruple-head wide-belt sanders, this panel eliminates warping and telegraphing under thin laminates.",
      image: "assets/images/product_birch_plywood.jpg",
      gallery: [
        "assets/images/product_birch_plywood.jpg",
        "assets/images/category_commercial_ply.jpg",
        "assets/images/plywood_macro_layers.jpg"
      ],
      thickness: ["6mm", "9mm", "12mm", "15mm", "18mm", "21mm", "24mm"],
      thicknessDefault: "18mm",
      sizes: "8ft x 4ft (2440 x 1220mm), 5ft x 5ft (1525 x 1525mm)",
      grade: "B/BB Architectural Cabinet Grade (IS:303 Calibrated)",
      finish: "Raw Silk Sanded (240 Grit) / Pale Blonde Birch",
      woodType: "100% Select European Birch Throughout",
      adhesive: "Low-VOC Melamine Fortified Bond (Interior / Exterior Enclosed)",
      warranty: "15-Year Precision Assurance",
      certification: "FSC Mix, CARB Phase II, EN 13986, IS:303",
      density: "700 - 730 kg/m³",
      moistureContent: "8% ± 1%",
      formaldehyde: "CARB Phase II / E0 Certified",
      boilingTest: "Resistant to cyclical moisture and thermal cycling",
      keyFeatures: [
        "Uniform multi-ply aesthetic ideal for exposed layered edge detailing",
        "Exceptional screw-holding strength exceeding 3000 N",
        "0.1mm surface calibration ensuring zero veneer telegraphing",
        "Homogeneous density profile throughout core and surface",
        "Perfect substrate for high-gloss lacquering and ultra-thin veneers"
      ],
      applications: [
        "Exposed-Edge Architectural Millwork & Floating Shelves",
        "Minimalist Scandinavian Wardrobes & Cabinetry",
        "CNC Routed Parametric Wall Paneling",
        "Designer Furniture Framing & Sculptural Seating",
        "Museum & Art Gallery Display Architecture"
      ],
      featured: true
    },
    {
      id: "roar-aquashield-bwp-plywood",
      name: "ROAR AquaShield 72h BWP Plywood",
      category: "waterproof-bwp",
      categoryName: "Waterproof / BWP Plywood",
      tagline: "Total Hydro-Repulsion for Wet-Area Architectural Masterpieces",
      shortDesc: "Triple-treated boiling water proof panel with hydro-shield preservative barrier. Engineered specifically for humid climate challenges.",
      description: "Humidity, steam, and thermal oscillations pose the most severe threats to interior timberwork. ROAR AquaShield BWP is engineered with specialized cross-linking phenolic adhesives cured at 155°C. Combined with dual-barrier timber seasoning and vacuum preservative dip, AquaShield resists continuous steam immersion in luxury spa bathrooms, under-sink vanities, and tropical open-air kitchens.",
      image: "assets/images/category_waterproof_bwp.jpg",
      gallery: [
        "assets/images/category_waterproof_bwp.jpg",
        "assets/images/marine_plywood_luxury.jpg",
        "assets/images/hero_timber_interior.jpg"
      ],
      thickness: ["9mm", "12mm", "16mm", "19mm", "25mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft, 7ft x 4ft, 7ft x 3ft",
      grade: "BWP (Boiling Water Proof) / IS:710 Equivalent",
      finish: "Hydrophobic Calibrated Matte Face",
      woodType: "Selected Seasoned Dense Plantation Hardwood Core",
      adhesive: "Phenolic Formaldehyde Resorcinol Blend",
      warranty: "20-Year Anti-Fungal & Anti-Borer Guarantee",
      certification: "IS:710, ISO 14001, Green Rating for Integrated Habitat Assessment",
      density: "750 kg/m³",
      moistureContent: "9% ± 2%",
      formaldehyde: "E1 Compliant",
      boilingTest: "Continuous 72-hour boiling water immersion with 0% ply separation",
      keyFeatures: [
        "Chemically fortified against damp-induced fungal spores and rot",
        "High modulus of elasticity (MOE) prevents sagging under heavy granite counters",
        "Quad-core alignment with staggered joints for structural equilibrium",
        "Compatible with exterior polyurethane adhesives and tile backer bonds",
        "Zero void inner veneers for effortless screw and hinge anchoring"
      ],
      applications: [
        "Gourmet Kitchen Island Bases & Dishwasher Surround Carcasses",
        "Architectural Spa, Hammam, and Sauna Rest Areas",
        "Master Bath Double-Sink Vanities & Medicine Cabinets",
        "Basement Wine Vaults & Sub-Grade Storage Enclosures",
        "Covered Balcony Planter Enclosures & Alfresco Bar Joinery"
      ],
      featured: true
    },
    {
      id: "roar-regatta-maritime-gurjan-ply",
      name: "ROAR Regatta Club 100% Gurjan Marine Ply",
      category: "marine-plywood",
      categoryName: "Marine Plywood",
      tagline: "True Dipterocarpus Timber Plies for Superlative Strength",
      shortDesc: "Authentic dense Gurjan core and face veneers. The gold standard for naval architecture and structural coastal construction.",
      description: "For heritage estates by the sea and demanding nautical applications, nothing compares to authentic Gurjan hardwood (Dipterocarpus turbinatus). ROAR Regatta Club is manufactured solely from aged Gurjan logs known for their dense oily resin canals that naturally repel moisture. Each panel possesses tremendous tensile strength, resistance to marine borer mollusks, and a deep reddish-walnut hue.",
      image: "assets/images/marine_plywood_luxury.jpg",
      gallery: [
        "assets/images/marine_plywood_luxury.jpg",
        "assets/images/plywood_macro_layers.jpg",
        "assets/images/category_marine_ply.jpg"
      ],
      thickness: ["12mm", "16mm", "19mm", "25mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft (2440 x 1220mm)",
      grade: "IS:710 True Gurjan Marine",
      finish: "Warm Cinnamon Reddish Gurjan Calibrated",
      woodType: "100% Selected Imported Gurjan Face & Core",
      adhesive: "High Solid Content Bordeaux Phenolic Resin",
      warranty: "30-Year Comprehensive Structural Guarantee",
      certification: "IS:710 Marine Specification, Lloyd's Standards Tested",
      density: "820 - 850 kg/m³",
      moistureContent: "7% ± 1.5%",
      formaldehyde: "E0 Compliant",
      boilingTest: "Tested beyond 100 hours in boiling water without shear failure",
      keyFeatures: [
        "Natural high-resin timber density providing organic termite immunity",
        "Heavy mass for exceptional acoustic and vibration damping",
        "Superior tensile strength over 50 MPa along grain",
        "Precision thickness tolerance of ± 0.2mm across entire sheet",
        "Designed for marine hulls, coastal estates, and multi-generational structures"
      ],
      applications: [
        "Yacht & Boat Decks, Bulkheads and Galley Millwork",
        "Coastal Villa Architectural Cladding & Open Verandahs",
        "Heavy-Load Library Bookcases & Mezzanine Floor Substrates",
        "Luxury Exterior Door Cores in Humid Climates",
        "Heritage Estate Structural Restoration"
      ],
      featured: false
    },
    {
      id: "roar-heritage-arch-door",
      name: "ROAR Romanesque Arched Oak Door",
      category: "designer-doors",
      categoryName: "Designer & Laminated Doors",
      tagline: "Graceful Classical Arches Handcrafted in French Oak",
      shortDesc: "Custom-curved solid timber head with raised panel molding and antique brass backplate hardware.",
      description: "Echoing the enduring proportions of European manor houses and classical town residences, the ROAR Romanesque Arched Door brings architectural serenity to interior portals. Built using a combination of precision timber bending jigs and traditional mortise-and-tenon joinery, the arched frame preserves its smooth geometric radius for decades. Enhanced with subtle beading and custom-forged antique brass locksets.",
      image: "assets/images/product_arch_door.jpg",
      gallery: [
        "assets/images/product_arch_door.jpg",
        "assets/images/architectural_estate.jpg",
        "assets/images/category_designer_doors.jpg"
      ],
      thickness: ["40mm", "45mm", "50mm"],
      thicknessDefault: "45mm",
      sizes: "Custom Radii (Standard: 84in x 36in arch, 96in x 42in grand arch)",
      grade: "Master Craftsman Custom Grade",
      finish: "European French Oak / Natural Beeswax & Matte Lacquer",
      woodType: "Solid Seasoned French White Oak with Engineered Core Railing",
      adhesive: "Weather-Resistant D4 Polyurethane Bond",
      warranty: "25-Year Generational Heritage Warranty",
      certification: "Handmade Artisanal Guild Standard",
      density: "760 kg/m³",
      moistureContent: "9% ± 1%",
      formaldehyde: "Zero Formaldehyde (Pure Timber)",
      boilingTest: "Stable under indoor climate variations",
      keyFeatures: [
        "True continuous curved arch casing and matching architrave trims",
        "Raised field panels with classical ovolo bead profile",
        "Hand-distressed or pristine architectural satin finishes",
        "Reversible antique brass lever handles with traditional escutcheon plates",
        "Full matching door jamb assembly crafted from matching seasoned oak"
      ],
      applications: [
        "Main Villa Gallery & Vestibule Entrances",
        "Wine Cellar & Tasting Room Arched Portals",
        "Formal Library & Study Entryways",
        "Courtyard-Facing Private Verandah Doors",
        "Heritage Property Renovations"
      ],
      featured: false
    },
    {
      id: "roar-smoked-oak-bookmatched-veneer",
      name: "ROAR Estate Smoked Oak Bookmatched Veneer",
      category: "veneers-laminates",
      categoryName: "Veneers & Laminates",
      tagline: "Deep Smokey Amber Grain with Natural Silver Ray Flecks",
      shortDesc: "Quarter-cut European oak smoked through core vacuum chambers to achieve deep, rich chocolate tones without surface staining.",
      description: "Unlike surface-stained wood veneers that fade or reveal raw timber upon scratching, ROAR Estate Smoked Oak is subjected to a proprietary vacuum ammonia fumigation process that reacts with natural timber tannins throughout the entire cell structure. The result is a luminous, smoky bronze-brown coloration with shimmering medullary rays that reflect light with quiet, old-money nobility.",
      image: "assets/images/product_natural_veneers.jpg",
      gallery: [
        "assets/images/product_natural_veneers.jpg",
        "assets/images/category_veneers_laminates.jpg",
        "assets/images/architectural_estate.jpg"
      ],
      thickness: ["0.6mm", "1.2mm", "2.0mm Thick-Cut"],
      thicknessDefault: "0.6mm",
      sizes: "Leaves 2500 - 3200mm Length x 150 - 300mm Width; Custom Pre-Stitched 8ft x 4ft Sheets",
      grade: "Architectural Grade AAA Flitch Selection",
      finish: "Natural Open-Pore Matte Finish Ready",
      woodType: "Authentic European Quercus Robur (French / German Oak)",
      adhesive: "Fleece Backed with Low-Formaldehyde Hot-Melt",
      warranty: "15-Year Color Stability & Delamination Warranty",
      certification: "FSC 100% Certified, PEFC Certified Timber",
      density: "690 kg/m³",
      moistureContent: "7% ± 1%",
      formaldehyde: "E0 Compliant",
      boilingTest: "Interior architectural dry/medium-humidity paneling",
      keyFeatures: [
        "Through-and-through core fumed color that never fades with scratching",
        "Pre-sorted flitch sequences for perfect bookmatched or slipmatched layouts",
        "Available on fleece backing for effortless curved architectural application",
        "Tactile wirebrushed or smooth velvet sanded surface options",
        "Supplied with batch-certified grain sequence photos for architectural sign-off"
      ],
      applications: [
        "Full-Height Architectural Wall Paneling & Secret Doors",
        "Bespoke Wardrobe Fronts & Dressing Room Cabinetry",
        "Executive Boardroom Credenzas & Wall Cladding",
        "Luxury Bed Headboards & Nightstand Integration",
        "Boutique Retail & Private Club Lounge Interiors"
      ],
      featured: false
    },
    {
      id: "roar-calibrated-pine-blockboard",
      name: "ROAR Calibrated Pine Core Block Board",
      category: "blockboards-mdf",
      categoryName: "Block Boards & MDF",
      tagline: "Solid Kiln-Dried Battens for Tall Non-Warping Shutters",
      shortDesc: "Selected 100% New Zealand pinewood core battens seasoned to 8% moisture. Sanded to 0.15mm tolerance for tall wardrobe joinery.",
      description: "When designing floor-to-ceiling wardrobe shutters and wide sliding doors, plywood can experience flex while particle board lacks screw-holding integrity. ROAR Calibrated Pine Block Board solves this challenge with finger-jointed solid pine timber battens laid side by side with zero gaps. Sandwiched between thick hardwood cross-bands, it delivers unbeatable dimensional rigidity, high flexural strength, and lightness.",
      image: "assets/images/product_blockboard.jpg",
      gallery: [
        "assets/images/product_blockboard.jpg",
        "assets/images/category_blockboards.jpg",
        "assets/images/artisan_craftsmanship.jpg"
      ],
      thickness: ["19mm", "25mm", "30mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft (2440 x 1220mm), 7ft x 4ft, 7ft x 3ft",
      grade: "IS:1659 Grade I (Commercial & Waterproof Grades)",
      finish: "Smooth Hardwood Face Ready for Direct Veneering or Laminate",
      woodType: "Kiln-Seasoned Solid Pine Battens with Dense Gurjan Crossband",
      adhesive: "Phenolic Resin / Fortified Melamine (MR/BWP options)",
      warranty: "20-Year Anti-Borer & Anti-Warp Assurance",
      certification: "IS:1659, ISO 9001:2015, GreenPro Eco Certified",
      density: "560 - 620 kg/m³ (Lightweight yet rigid)",
      moistureContent: "8% ± 1.5%",
      formaldehyde: "E1 Compliant",
      boilingTest: "Complies with IS:1659 resistance tests",
      keyFeatures: [
        "Lightweight cellular construction reducing stress on wardrobe hinges",
        "Rigid linear battens prevent deflection in doors exceeding 8 feet in height",
        "Double-sided crossband veneer prevents surface ripples and warping",
        "Exceptional edge screw-holding capability (no pre-edge wood fill required)",
        "Fully seasoned in computerized dehumidification kilns to prevent sap rot"
      ],
      applications: [
        "Tall Floor-to-Ceiling Wardrobe Shutters",
        "Pocket Sliding Doors & Architectural Partition Panels",
        "Structural Bookshelf Spans over 900mm without sagging",
        "Conference Table Substrates and Executive Desks",
        "High-End Bed Platforms & Storage Divans"
      ],
      featured: false
    },
    {
      id: "roar-fire-retardant-acoustic-ply",
      name: "ROAR PyroGuard & Acoustic Ply IS:5509",
      category: "waterproof-bwp",
      categoryName: "Waterproof / BWP Plywood",
      tagline: "Certified Fire Resistance Meets Sound Reflection Control",
      shortDesc: "Class-1 fire retardant timber panel pressure-impregnated with non-leaching intumescent mineral salts. BWP bonded for lifetime safety.",
      description: "Specified by top architectural engineering practices for auditoriums, luxury hospitality suites, and high-rise penthouses. ROAR PyroGuard delays flame spread, reduces smoke generation, and releases non-toxic vapor barriers under extreme heat. Available with precision micro-perforations backed by sound-absorbing acoustic fleece for reverberation control in home theaters and private listening rooms.",
      image: "assets/images/product_fire_retardant.jpg",
      gallery: [
        "assets/images/product_fire_retardant.jpg",
        "assets/images/category_commercial_ply.jpg",
        "assets/images/plywood_macro_layers.jpg"
      ],
      thickness: ["12mm", "16mm", "19mm", "25mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft (2440 x 1220mm)",
      grade: "IS:5509 Fire Retardant & IS:710 BWP Dual Certified",
      finish: "Natural Smoked Walnut / Perforated Acoustic Face",
      woodType: "Dense Hardwood Core with Fire-Proof Chemical Impregnation",
      adhesive: "Waterproof Intumescent Fortified Phenolic Resin",
      warranty: "15-Year Certified Fire Rating & Structural Guarantee",
      certification: "IS:5509, ASTM E84 Class A, BS 476 Part 7 Class 1",
      density: "790 - 830 kg/m³",
      moistureContent: "9% ± 1%",
      formaldehyde: "E0 Low Emission Standard",
      boilingTest: "Withstands boiling test without leaching fire retardant salts",
      keyFeatures: [
        "Flame penetration time exceeds 45 minutes on standard 19mm panel",
        "Low smoke emission with zero toxic halogens",
        "Acoustic NRC (Noise Reduction Coefficient) rating up to 0.85 with micro-perforations",
        "Non-hygroscopic formula prevents sweating and efflorescence on surfaces",
        "Meets stringent fire safety codes for commercial public assemblies"
      ],
      applications: [
        "Home Cinema Theaters & Hi-Fi Acoustic Listening Rooms",
        "Luxury Hotel Lobbies, Corridors, and Escape Stairways",
        "Commercial Auditorium & Concert Hall Cladding",
        "Executive Boardroom Partitions & High-Rise Wall Linings",
        "Server Rooms & Technical Equipment Joinery"
      ],
      featured: false
    },
    {
      id: "roar-white-oak-flush-door",
      name: "ROAR Signature French White Oak Flush Door",
      category: "flush-doors",
      categoryName: "Flush Doors",
      tagline: "Quiet Organic Minimalism with Natural Raw-Touch Feel",
      shortDesc: "Solid core engineered flush door faced with rift-sawn European White Oak veneer and matte ultra-flat protective lacquer.",
      description: "Designed for architects embracing the quiet luxury of warm minimalism and organic modernism. The ROAR Signature White Oak Flush Door celebrates the linear grain of sustainably harvested European oak. Sealed with a matte dead-flat bio-based finish that feels like unpolished raw timber while resisting skin oils, smudges, and moisture.",
      image: "assets/images/product_flush_door_walnut.jpg",
      gallery: [
        "assets/images/product_flush_door_walnut.jpg",
        "assets/images/category_flush_doors.jpg",
        "assets/images/product_arch_door.jpg"
      ],
      thickness: ["35mm", "38mm", "42mm", "48mm"],
      thicknessDefault: "42mm",
      sizes: "84in x 36in, 96in x 40in, Custom Heights to 10ft",
      grade: "IS:2202 Part 1 Architect Grade",
      finish: "Dead-Matte Raw-Look European White Oak",
      woodType: "Solid Seasoned Hardwood Stile with Rift White Oak Face",
      adhesive: "Cross-Linked Thermosetting Phenolic Polymer",
      warranty: "20-Year Anti-Deflection Assurance",
      certification: "IS:2202, FSC 100%, GreenPro Platinum",
      density: "710 kg/m³",
      moistureContent: "9.5% ± 1%",
      formaldehyde: "E0 Compliant",
      boilingTest: "Moisture resistant core prevents seasonal sticking",
      keyFeatures: [
        "Rift-sawn vertical linear grain matching modern minimalist architecture",
        "Dead-flat 3% sheen lacquer preserves authentic raw timber tactile texture",
        "Factory-mortised for magnetic silent latching systems and German pivots",
        "Internal solid hardwood lock-blocks on both sides for flexible handing",
        "Heavy mass for satisfying, substantial closing feel"
      ],
      applications: [
        "Modern Minimalist Estate Bedrooms & Suites",
        "Architectural Gallery Doors with Concealed Frames",
        "Quiet Reading Rooms & Dressing Enclosures",
        "Contemporary Luxury Hotel Suites",
        "Artisan Apartment Entrances"
      ],
      featured: false
    },
    {
      id: "roar-commercial-hardwood-ply",
      name: "ROAR Crown Commercial MR Hardwood Ply",
      category: "commercial-plywood",
      categoryName: "Commercial Plywood",
      tagline: "Reliable Everyday Strength for Superior Living Spaces",
      shortDesc: "Moisture-resistant commercial grade plywood formulated with synthetic amino resin for wardrobes, beds, and living room furniture.",
      description: "ROAR Crown Commercial is the dependable workhorse panel for premium residential fit-outs where direct moisture exposure is absent. Built with high-density hardwood core veneers and seasoned in automated kilns, Crown MR resists bending, cupping, and twisting over time. Vacuum-treated with synthetic pyrethroid insecticides to safeguard your investments against wood-destroying organisms.",
      image: "assets/images/category_commercial_ply.jpg",
      gallery: [
        "assets/images/category_commercial_ply.jpg",
        "assets/images/plywood_macro_layers.jpg",
        "assets/images/product_birch_plywood.jpg"
      ],
      thickness: ["6mm", "9mm", "12mm", "16mm", "19mm", "25mm"],
      thicknessDefault: "19mm",
      sizes: "8ft x 4ft (2440 x 1220mm), 7ft x 4ft, 7ft x 3ft, 6ft x 4ft",
      grade: "IS:303 MR Grade (Moisture Resistant)",
      finish: "Uniformly Sanded Calibrated Face",
      woodType: "100% Seasoned Hardwood Core",
      adhesive: "Fortified Melamine Urea Formaldehyde (MUF)",
      warranty: "15-Year Anti-Borer Guarantee",
      certification: "IS:303, ISO 9001:2015",
      density: "680 - 720 kg/m³",
      moistureContent: "10% ± 2%",
      formaldehyde: "E1 Compliant",
      boilingTest: "Withstands 3 cycles of 60°C water immersion",
      keyFeatures: [
        "Quad-core alignment with double-side sanding for flat cabinetry",
        "Formulated with micro-encapsulated anti-termite compounds",
        "High mechanical screw-holding and nail-retention capacity",
        "Zero core voids preventing weak spots when cut for joinery",
        "Economical yet uncompromised quality standard"
      ],
      applications: [
        "Master Bedroom Wardrobe Internals & Shelving",
        "Living Room Entertainment Units & Wall Niches",
        "Study Desks, Bookshelves & Wall Storage",
        "Platform Bed Bases and Headboard Structures",
        "Dry-Zone Commercial Office Partitioning"
      ],
      featured: false
    }
  ],

  testimonials: [
    {
      quote: "In thirty years of residential practice across London and Mumbai, I have rarely encountered timber panels with the planar calibration and silent mass of ROAR DOORS. Their Sovereign Marine ply is an architect's dream — flawless edges, zero core voids, and an uncompromising finish.",
      author: "Vikramaditya Singhania",
      role: "Principal Architect, Studio Singhania & Partners",
      location: "New Delhi & London",
      project: "Private Manor Estate, 14,000 sq.ft."
    },
    {
      quote: "When designing high-end custom joinery, any deflection in a 10-foot wardrobe door ruins the whole aesthetic. ROAR's solid-core flush doors and pine blockboards remain completely flat year after year. They understand quiet luxury like no other manufacturer in the region.",
      author: "Eleanor Vance-Deshmukh",
      role: "Lead Interior Designer, Vance Interior Architecture",
      location: "South Mumbai",
      project: "Seaside Penthouse & Heritage Villa"
    },
    {
      quote: "As timber dealers catering to the most demanding luxury builders, ROAR DOORS has been our most trusted partner. Their consistency in IS:710 certification, rapid logistics, and transparent grading make them the gold standard in premium timber supplies.",
      author: "Rajeshwar Goenka",
      role: "Managing Director, Goenka Timber & Architectural Supplies",
      location: "Bangalore & Hyderabad",
      project: "Commercial & Ultra-Luxury Residential Projects"
    }
  ],

  pillars: [
    {
      icon: "quality",
      title: "Quad-Core Precision Calibration",
      desc: "Every sheet undergoes 4-side micro-sanding and automated thickness calibration within ±0.1mm, ensuring zero surface telegraphing under veneers and high-gloss laminates."
    },
    {
      icon: "termite",
      title: "Organic Borate Termite & Borer Shield",
      desc: "Deep vacuum-pressure impregnation (VPI) forces non-toxic insecticidal borates into the heart of every veneer cell, granting lifelong immunity against borers and white ants."
    },
    {
      icon: "water",
      title: "72-Hour Boiling Hydro-Shield",
      desc: "Formulated with 100% unextended Bordeaux phenolic resins cured under 14 kg/cm² pressure, completely impervious to coastal humidity, steam, and cyclic soaking."
    },
    {
      icon: "warranty",
      title: "Up to 25-Year Generational Warranty",
      desc: "Our confidence is backed by a legal, documented replacement guarantee against delamination, warping, and insect infestation — crafted for generations to inherit."
    }
  ],

  faqs: [
    {
      q: "What distinguishes ROAR DOORS Marine Plywood (IS:710) from conventional commercial ply?",
      a: "Commercial plywood (IS:303) utilizes Melamine Urea Formaldehyde (MUF) resin suitable for dry interiors, whereas ROAR Marine Plywood (IS:710) is bonded exclusively with unextended, high-solid Bordeaux phenolic formaldehyde resin. It is subjected to rigorous 72-hour continuous boiling water immersion tests without any delamination or glue line failure."
    },
    {
      q: "Can architects request custom door dimensions and pivot hardware pre-routing?",
      a: "Yes. Our bespoke atelier manufactures solid core flush and designer doors in custom heights up to 12 feet (3650mm) and widths up to 4.5 feet (1370mm). We provide precision factory CNC pre-routing for concealed 3D adjustable hinges, drop-down acoustic seals, and FritsJurgens pivot systems."
    },
    {
      q: "What wood species are utilized in ROAR core construction?",
      a: "We selectively utilize mature, sustainably harvested Gurjan hardwood (Dipterocarpus turbinatus) and high-density plantation timber for our marine panels, alongside kiln-seasoned New Zealand pine battens for our warp-resistant blockboards."
    },
    {
      q: "How can architects, designers, or dealers order sample folios?",
      a: "We provide bespoke architectural sample kits comprising 18mm calibrated cross-sections, marine ply water-bead swatches, and natural veneer fan books. You can request a sample kit via our contact page or through our WhatsApp architectural concierge."
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.ROAR_DATA = ROAR_DATA;
}

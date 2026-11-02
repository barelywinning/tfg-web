const solutions = [
  {
    id: "ict",
    title: "ICT & Enterprise Infrastructure",
    short: "Networks, communications and the physical foundations of enterprise IT.",
    intro: "TFG's ICT and ELV division works across enterprise and wireless networks, communications, data-centre infrastructure and structured cabling. The company profile records deployments for clients across several sectors.",
    items: ["Unified network infrastructure", "Wireless network infrastructure", "IP telephony", "Voice, data and video systems", "UPS systems", "Data-centre infrastructure", "Structured cabling systems", "Fibre-optic networks"],
    related: "The profile also lists CCTV and access control, IPTV, audio and video conferencing, and public-address and paging systems."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Enterprise IT",
    short: "IT management tools spanning identities, endpoints, operations and security.",
    intro: "TFG implements and supports enterprise IT management solutions, with ManageEngine identified in the profile as its platform of choice. The documented portfolio covers infrastructure management as well as security-related capabilities.",
    items: ["Identity and access management", "Enterprise service management", "Unified endpoint management and security", "IT operations management", "Security information and event management", "Advanced IT analytics", "Zero Trust security", "Remote-work management"],
    related: "Documented deployment options include on-premises, cloud-native, cloud-ready and Managed Service Provider models."
  },
  {
    id: "elv",
    title: "ELV & Physical Systems",
    short: "Integrated low-voltage systems for communication, safety and shared spaces.",
    intro: "The profile describes a broad ELV and ICT systems portfolio. These capabilities are presented as systems TFG has deployed; project-specific scope is established with each customer.",
    items: ["CCTV and access control", "IP telephony", "Voice, data and video systems", "IPTV", "Audio and video conferencing", "Public-address and paging systems", "Structured cabling", "Fibre-optic networks"],
    related: "UPS systems and data-centre infrastructure are also listed in the ICT and ELV portfolio."
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    short: "Plant and process control, upgrades and turnkey automation projects.",
    intro: "TFG delivers industrial and process automation across DCS, PLC, SCADA, HMI, drives and MCC. The profile also describes turnkey projects and upgrades or migrations of existing systems.",
    items: ["DCS, PLC and SCADA systems", "HMI and process visualisation", "Drives and motor control centres", "System upgrades and migration", "Logic, interlocks and sequence control", "Plant control loops", "Turnkey automation projects", "Factory and site acceptance test support"],
    related: "Platforms named in the company profile include Honeywell, Emerson, ABB, Rockwell / Allen-Bradley and Siemens. See the technology ecosystem page for the listed examples."
  },
  {
    id: "building-automation",
    title: "Building Automation",
    short: "Controls for building comfort, operation, energy use and lifecycle.",
    intro: "TFG describes building automation as a way to support comfortable spaces, efficient operation, lower energy consumption and operating costs, and longer utility life cycles.",
    items: ["Infrastructure controllers", "Occupancy systems", "Lighting systems", "Constant-volume air-handling units", "VAV hybrid systems", "Variable-volume air-handling units", "Chilled-, condenser- and hot-water systems", "Alarms, room automation and central plant systems"],
    related: "The exact system design and scope are determined against the building and customer requirements."
  },
  {
    id: "instrumentation",
    title: "Field Instrumentation",
    short: "Instrumentation engineering and documentation for operating plant.",
    intro: "The profile describes field instrumentation and engineering for domestic and international projects, including measurement of forces, movement, temperature, vibration, acoustics and emissions.",
    items: ["P&ID reconciliation", "Instrument specification and selection", "Junction-box schedules and drawings", "Cable schedules and routing drawings", "System inspection services", "I/O listings", "Instrument location and hook-up drawings", "Control-room layouts and procurement support"],
    related: "The profile also lists supply of measuring and controlling field instruments."
  },
  {
    id: "engineering",
    title: "Engineering Services",
    short: "System design, implementation, commissioning and on-site support.",
    intro: "TFG's engineers program PLC and DCS systems, logic and interlocks, recipes and batch control, and SCADA. Services extend from system architecture and drawings through implementation and support.",
    items: ["Turnkey DCS, PLC and SCADA projects", "System architecture design", "AutoCAD / MicroStation drafting", "Logic and safety interlocks", "Logs, reports, history and trends", "Sequence-of-operations implementation", "HMI and SCADA design and development", "FAT / SAT support, installation and commissioning", "Troubleshooting, maintenance and resident support", "Functional specifications and control-system integration"],
    related: "Engagement scope may include design, system selection, procurement support, configuration, integration and commissioning."
  },
  {
    id: "software",
    title: "Software & IT Services",
    short: "Custom software, digital products and specialist IT delivery.",
    intro: "TFG builds software and provides IT services for clients internationally. The profile lists product and application development alongside design, augmentation and workflow automation.",
    items: ["IT staff augmentation", "Web development", "Java development", "Mobile application development", "Website design", "E-commerce development", "Product development", "Custom UI/UX development", "Workflow and process automation using Python and n8n"],
    related: "Technical expertise listed includes Java, Android, iOS, React Native, Flutter, Angular, React, JavaScript, Node.js, PHP, .NET and Python."
  }
];

const industries = [
  "Telecommunications", "Banking & financial services", "Oil & gas", "Defence",
  "Education & e-learning", "Hospitality", "Healthcare", "Government", "Retail",
  "Manufacturing", "E-commerce & m-commerce", "Media & entertainment", "Insurance",
  "Transportation & logistics", "Payment gateways", "Water & power"
];

const industrialClients = [
  { name: "Honeywell Automation", logo: "honeywell-automation.png", website: "https://automation.honeywell.com/" },
  { name: "Rockwell Automation", website: "https://www.rockwellautomation.com/" },
  { name: "SKF India", logo: "skf-india.png", website: "https://www.skf.com/in" },
  { name: "OQ", logo: "oq.png", website: "https://oq.com/en" },
  { name: "PDO", website: "https://www.pdo.co.om/en/Pages/Home.aspx" },
  { name: "Shell Technology", logo: "shell-technology.png", website: "https://www.shell.com/" },
  { name: "OPTUM CPC", logo: "optum-cpc.png", website: "https://www.optum.in/" },
  { name: "Sensia Energy" },
  { name: "ARG Technology" }
];
const enterpriseClients = [
  { name: "Datamatics", logo: "datamatics.png", website: "https://www.datamatics.com/" },
  { name: "Snapdeal", logo: "snapdeal.png", website: "https://www.snapdeal.com/" },
  { name: "AJIO", logo: "ajio.png", website: "https://www.ajio.com/" },
  { name: "Network International", logo: "network-international.png", website: "https://www.network.ae/en" },
  { name: "Paytm", logo: "paytm.png", website: "https://paytm.com/" },
  { name: "InnovationM Technology Solutions" },
  { name: "IDFC FIRST Bank", logo: "idfc-first-bank.png", website: "https://www.idfcfirstbank.com/" },
  { name: "Roundglass", logo: "roundglass.png", website: "https://www.round.glass/" },
  { name: "FoodKonnekt" },
  { name: "PharmEasy", logo: "pharmeasy.png", website: "https://pharmeasy.in/" },
  { name: "Intelliswift", logo: "intelliswift.png", website: "https://www.intelliswift.com/" },
  { name: "EzMall" },
  { name: "ATRIBS" }
];

const partners = [
  { group: "Networking & communications", names: [
    { name: "Aruba", logo: "aruba.png" }, { name: "Ruijie", logo: "ruijie.png" },
    { name: "24online" }, { name: "Avaya", logo: "avaya.png" },
    { name: "Alcatel-Lucent Enterprise", logo: "alcatel-lucent-enterprise.png" },
    { name: "Moxa", logo: "moxa.png" }
  ] },
  { group: "Security", names: [{ name: "Fortinet", logo: "fortinet.png" }] },
  { group: "Industrial & building automation", names: [
    { name: "Honeywell", logo: "honeywell-automation.png" }, { name: "Rockwell Automation" },
    { name: "Emerson", logo: "emerson.png" }, { name: "ABB", logo: "abb.png" },
    { name: "Siemens", logo: "siemens.png" }, { name: "Delta", logo: "delta.png" }
  ] },
  { group: "Enterprise IT management", names: [{ name: "ManageEngine", logo: "manageengine.png" }] }
];

const solutionLinks = solutions.map((item, index) => `
  <a class="solution-card" href="${solutionHref(item.id)}">
    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
    <span>
      <h2>${item.title}</h2>
      <p>${item.short}</p>
      <span class="text-link">Explore capability →</span>
    </span>
  </a>`).join("");

function isSolutionPage() {
  return document.body.dataset.page === "solution";
}

function basePath() {
  return isSolutionPage() ? "../" : "";
}

function solutionHref(id) {
  return `${basePath()}solutions/${id}.html`;
}

function navLink(path, label, active) {
  return `<a href="${basePath()}${path}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
}

function renderHeader() {
  const active = document.body.dataset.page;
  const detailLinks = solutions.map(item => `<a href="${solutionHref(item.id)}">${item.title}</a>`).join("");
  document.querySelector("#site-header").innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="${basePath()}index.html" aria-label="Tech Fusion Gulf home">
          <img class="brand-logo" src="${basePath()}assets/brand/tfg-logo.png" alt="">
          <span class="brand-name"><strong>Tech Fusion Gulf</strong><span>MUSCAT · OMAN</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">☰</button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          ${navLink("index.html", "Home", active === "home")}
          <details class="nav-dropdown"${active === "solutions" || active === "solution" ? " open" : ""}>
            <summary${active === "solutions" || active === "solution" ? ' aria-current="page"' : ""}>Solutions</summary>
            <div class="dropdown-panel">
              ${navLink("solutions.html", "All solutions", active === "solutions")}
              ${detailLinks}
            </div>
          </details>
          ${navLink("industries.html", "Industries", active === "industries")}
          ${navLink("experience.html", "Experience", active === "experience")}
          ${navLink("partners.html", "Partners", active === "partners")}
          ${navLink("about.html", "About", active === "about")}
        </nav>
        <a class="header-cta" href="${basePath()}contact.html">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </header>`;

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !expanded);
  });
}

function renderFooter() {
  document.querySelector("#site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand" href="${basePath()}index.html">
              <img class="brand-logo" src="${basePath()}assets/brand/tfg-logo.png" alt="">
              <span class="brand-name"><strong>Tech Fusion Gulf</strong><span>TECHNOLOGY · INFRASTRUCTURE · ENGINEERING</span></span>
            </a>
            <p>A multidisciplinary ICT, engineering and technology solutions company based in Muscat, Sultanate of Oman.</p>
          </div>
          <div class="footer-column"><strong>Explore</strong>
            <a href="${basePath()}solutions.html">Solutions</a>
            <a href="${basePath()}industries.html">Industries</a>
            <a href="${basePath()}experience.html">Experience</a>
            <a href="${basePath()}partners.html">Partners &amp; platforms</a>
          </div>
          <div class="footer-column"><strong>Company</strong>
            <a href="${basePath()}about.html">About TFG</a>
            <a href="${basePath()}contact.html">Contact</a>
            <span>Established 2023</span>
          </div>
          <div class="footer-column"><strong>Get in touch</strong>
            <a href="mailto:sales@techfusiongulf.com">sales@techfusiongulf.com</a>
            <a href="tel:+96894352333">+968 9435 2333</a>
            <span>Muscat, Sultanate of Oman</span>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="current-year"></span> Tech Fusion Gulf LLC</span>
          <span>Company information based on the 2026 TFG profile.</span>
        </div>
      </div>
    </footer>`;
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
}

function hero(label, title, lead, aside = "") {
  return `<section class="page-hero"><div class="container page-hero-grid">
    <div><span class="eyebrow section-kicker">${label}</span><h1>${title}</h1><p class="lead">${lead}</p></div>
    ${aside ? `<aside class="page-aside">${aside}</aside>` : ""}
  </div></section>`;
}

function renderHome() {
  const featuredIndustries = ["Oil & gas", "Water & power", "Manufacturing", "Banking", "Healthcare", "Government", "Telecommunications", "Education"];
  return `
    <section class="hero hero-cover"><div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow section-kicker">Technology · Infrastructure · Engineering</span>
        <h1>One team across <span>IT and industry.</span></h1>
        <p class="lead">Integrated technology and engineering solutions for enterprise, industrial and institutional environments.</p>
        <div class="hero-actions"><a class="button" href="contact.html">Discuss a requirement <span aria-hidden="true">↗</span></a><a class="button button-secondary" href="solutions.html">Explore capabilities</a></div>
        <div class="hero-note"><strong>Tech Fusion Gulf LLC</strong><span>Muscat, Sultanate of Oman · Established 2023</span></div>
      </div>
    </div><span class="hero-photo-credit">IMAGE: TFG COMPANY PROFILE · 2026</span></section>
    <div class="stats-strip"><div class="container stats-inner">
      <div class="stat"><strong>Enterprise IT</strong><span>Infrastructure, management &amp; security</span></div>
      <div class="stat"><strong>Industrial systems</strong><span>Automation, instrumentation &amp; control</span></div>
      <div class="stat"><strong>Project delivery</strong><span>From planning through implementation</span></div>
      <div class="stat"><strong>Based in Oman</strong><span>Muscat, Sultanate of Oman</span></div>
    </div></div>
    <section class="section"><div class="container intro-grid">
      <div><span class="eyebrow section-kicker">About TFG</span><h2>Technology that connects operational needs.</h2></div>
      <div class="intro-aside"><strong>One multidisciplinary portfolio across enterprise ICT, industrial systems, automation and software.</strong>
        <p class="body-copy">Tech Fusion Gulf LLC helps organisations monitor, manage and secure their digital enterprise, while delivering industrial automation, engineering design, integration and software. Based in Muscat and established in 2023, TFG brings these capabilities together around the requirements of each engagement.</p>
        <a class="text-link" href="about.html">More about the company →</a>
      </div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">What we do</span><h2>Connected disciplines.<br>Practical delivery.</h2></div><p>Bring together the capabilities required for a project, from infrastructure and control systems to engineering and software.</p></div>
      <div class="capability-grid">${solutions.map((item, index) => `<a class="capability-card" href="${solutionHref(item.id)}"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><h3>${item.title}</h3><p>${item.short}</p><span class="card-arrow">Explore →</span></a>`).join("")}</div>
    </div></section>
    <section class="section industry-band"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Industry exposure</span><h2>Experience across sectors.</h2></div><p>The company profile names experience across enterprise, industrial, energy and institutional sectors. These categories reflect the profile, not a claim of completed work in every listed industry.</p></div>
      <div class="industry-list">${featuredIndustries.map(name => `<a href="industries.html">${name}</a>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Clients &amp; experience</span><h2>Organisations named in the TFG profile.</h2></div><p>Browse the complete list from TFG's 2026 profile, grouped by the profile's industrial and energy, and enterprise and digital categories. No client names have been dropped.</p></div>
      ${companyCarousel("home-clients")}
      <p class="company-note">Names and categories follow TFG's profile. Verified company-site links and marks are included for identification; unverified marks are intentionally omitted. Listing an organisation does not imply endorsement or describe a specific project.</p>
      <p style="margin-top:17px"><a class="text-link" href="experience.html">Explore TFG's experience →</a></p>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Technology ecosystem</span><h2>Platforms named in the profile.</h2></div><p>TFG's profile describes work as a system integrator, partner or reseller. Specific status and authorisation can vary by brand and should be confirmed for each enquiry.</p></div>
      <div class="partner-rail">${["Aruba", "Fortinet", "Honeywell", "Siemens", "ABB", "ManageEngine", "Rockwell Automation", "Emerson"].map(name => `<span>${name}</span>`).join("")}</div>
      <p style="margin-top:17px"><a class="text-link" href="partners.html">View listed partners and platforms →</a></p>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">How we engage</span><h2>From requirements to support.</h2></div><p>Engagements can include the phases below, with the work shaped to the agreed scope and customer requirements.</p></div>
      <div class="process-grid">
        <div class="process-step"><span class="process-number">01 / PROOF OF CONCEPT</span><h3>Validate the approach</h3><p>Test assumptions and demonstrate the proposed direction before finalising scope.</p></div>
        <div class="process-step"><span class="process-number">02 / PLANNING</span><h3>Design the work</h3><p>Architecture, specifications, system selection and schedule planning.</p></div>
        <div class="process-step"><span class="process-number">03 / DELIVERY</span><h3>Coordinate implementation</h3><p>Project management, configuration, integration and installation where included.</p></div>
        <div class="process-step"><span class="process-number">04 / SUPPORT</span><h3>Commission and support</h3><p>Commissioning, troubleshooting and maintenance support according to scope.</p></div>
      </div>
    </div></section>
    ${ctaBand("Have a project or technical requirement?", "Tell us what you need to connect, automate or improve.", "contact.html", "Contact TFG")}`;
}

function companyCarousel(id) {
  const organizations = [
    ...industrialClients.map(company => ({ ...company, group: "Industrial & energy" })),
    ...enterpriseClients.map(company => ({ ...company, group: "Enterprise & digital" }))
  ];
  const pageSize = 6;
  const pageCount = Math.ceil(organizations.length / pageSize);
  const slides = Array.from({ length: pageCount }, (_, index) => {
    const first = index * pageSize;
    const companies = organizations.slice(first, first + pageSize);
    return `<div class="company-slide" data-company-slide${index ? " hidden" : ""} role="group" aria-roledescription="slide" aria-label="Companies ${first + 1} to ${first + companies.length} of ${organizations.length}">
      <ul class="company-wall">${companies.map(({ name, logo, group, website }) => `
        <li class="company-card">
          ${website ? `<a class="company-link" href="${website}" target="_blank" rel="noopener noreferrer" aria-label="Visit the official ${name} website">` : '<div class="company-link">'}
            ${logo ? `<span class="company-mark"><img src="${basePath()}assets/companies/${logo}" alt="" loading="lazy"></span>` : ""}
            <span class="company-copy"><span class="company-name">${name}</span><span class="company-category">${group}</span></span>
          ${website ? "</a>" : "</div>"}
        </li>`).join("")}
      </ul>
    </div>`;
  }).join("");
  return `<section class="company-carousel" id="${id}" data-company-carousel aria-roledescription="carousel" aria-label="Organisations listed in the TFG company profile">
    ${slides}
    <div class="carousel-controls">
      <button class="carousel-button" type="button" data-company-prev aria-label="Previous companies" disabled>← <span>Previous</span></button>
      <p class="carousel-status" data-company-status aria-live="polite">1 / ${pageCount} <span>·</span> Companies 1–${Math.min(pageSize, organizations.length)} of ${organizations.length}</p>
      <button class="carousel-button" type="button" data-company-next aria-label="Next companies"> <span>Next</span> →</button>
    </div>
  </section>`;
}

function partnerWall(organizations) {
  return `<div class="partner-wall">${organizations.map(({ name, logo }) => `
    <div class="partner-card">
      ${logo ? `<span class="partner-mark"><img src="${basePath()}assets/companies/${logo}" alt="" loading="lazy"></span>` : ""}
      <span>${name}</span>
    </div>`).join("")}
  </div>`;
}

function ctaBand(title, copy, href, label) {
  return `<section class="cta-band"><div class="container cta-inner"><div><span class="eyebrow section-kicker">${title}</span><h2>${copy}</h2></div><a class="button" href="${href}">${label} <span aria-hidden="true">↗</span></a></div></section>`;
}

function renderSolutions() {
  return `${hero("Solutions", "Technology and engineering, brought together.", "TFG's documented capabilities span enterprise ICT, ELV, industrial and building automation, field instrumentation, system engineering and software.", `<strong>Scope-led delivery</strong>Capabilities are selected and combined around the project brief. Technical scope, platforms and delivery responsibilities are confirmed for each engagement.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Capabilities</span><h2>Eight areas of expertise.</h2></div><p>Explore each discipline for its documented services and systems. No service is implied beyond the published company profile.</p></div>
      <div class="solutions-grid">${solutionLinks}</div>
      <div class="scope-note" style="margin-top:30px"><strong>How scope works.</strong> The company profile describes turnkey infrastructure and complex projects across proof of concept, planning, project management and support. The exact combination depends on customer requirements and agreed scope.</div>
    </div></section>
    ${ctaBand("Start with the requirement", "We can help map the right capabilities to your project.", "contact.html", "Discuss a project")}`;
}

function renderSolutionDetail() {
  const item = solutions.find(solution => solution.id === document.body.dataset.solution);
  if (!item) {
    document.querySelector("#main-content").innerHTML = `${hero("Solutions", "Capability not found", "This solution page is unavailable.")}`;
    return;
  }
  const idx = solutions.indexOf(item) + 1;
  return `${hero(`Solution  /  ${String(idx).padStart(2, "0")}`, item.title, item.short, `<strong>Tech Fusion Gulf LLC</strong>Muscat, Sultanate of Oman<br>Company profile: 2026`)}
    <section class="section"><div class="container details-layout">
      <aside class="detail-sidebar"><span class="eyebrow">At a glance</span><h3>${item.title}</h3><p>${item.short}</p></aside>
      <div class="detail-content"><span class="eyebrow section-kicker">Capability overview</span><h2>Defined around your operating context.</h2><p>${item.intro}</p>
        <h3>Systems and services in the profile</h3>
        <ul class="item-grid">${item.items.map(text => `<li>${text}</li>`).join("")}</ul>
        <div class="scope-note"><strong>Additional detail.</strong> ${item.related}</div>
        <p style="margin-top:27px"><a class="text-link" href="../partners.html">View the technology ecosystem →</a></p>
      </div>
    </div></section>
    ${ctaBand("Discuss a scope", "Talk to TFG about your requirements and delivery context.", "../contact.html", "Contact TFG")}`;
}

function renderIndustries() {
  const groupContent = [
    ["Industrial & energy", "Oil & gas, water and power, manufacturing, transportation and logistics, and defence."],
    ["Enterprise & institutions", "Banking and financial services, government, healthcare, education and e-learning, and telecommunications."],
    ["Consumer & digital", "Hospitality, retail, e-commerce and m-commerce, media and entertainment, insurance, and payment gateways."]
  ];
  return `${hero("Industries", "Built around the environments customers operate in.", "The company profile identifies a varied sector footprint, spanning industrial and energy environments as well as enterprise, institutional and digital businesses.", `<strong>Evidence-led presentation</strong>Industries shown here are taken from the company profile. They are not a claim of completed projects in every sector.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Industry list</span><h2>Sectors named by TFG.</h2></div><p>TFG's profile describes experience serving organisations in these sectors and application areas.</p></div>
      <div class="industries-grid">${industries.map((name, index) => `<article class="industry-card"><span>${String(index + 1).padStart(2, "0")}</span><h2>${name}</h2></article>`).join("")}</div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">A connected portfolio</span><h2>Enterprise and operational technology.</h2></div><p>TFG describes a multidisciplinary approach that combines ICT, ELV, automation, instrumentation, engineering and software for both enterprise IT and operational technology environments.</p></div>
      <div class="category-grid">${groupContent.map(([title, copy]) => `<article class="category-panel"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
    </div></section>
    ${ctaBand("Sector requirements differ", "Share your operating context and the outcomes you need.", "contact.html", "Make an enquiry")}`;
}

function renderPartners() {
  return `${hero("Partners & platforms", "A technology ecosystem across enterprise and industry.", "TFG's 2026 profile names technology companies and platforms across ICT, communications, enterprise IT and automation.", `<strong>Relationship clarity</strong>The profile describes TFG as working as a system integrator, partner or reseller. Formal authorisations and current status are not specified brand by brand here; please confirm them for a particular engagement.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Companies listed in the profile</span><h2>Organised by technology area.</h2></div><p>Categories are a practical grouping of the vendors mentioned by TFG; they do not imply a particular authorisation, tier or commercial status.</p></div>
      <div class="category-grid">${partners.map(group => `<article class="category-panel"><h3>${group.group}</h3>${partnerWall(group.names)}</article>`).join("")}</div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Platforms and product families</span><h2>Examples documented by TFG.</h2></div><p>The profile lists examples of automation systems TFG works on. Product availability and project fit must be validated for each requirement.</p></div>
      <div class="platform-list">
        <div><strong>Honeywell</strong><span>Experion PKS, TPS / TDC3000, ML-200, HC-900 and PlantCruise.</span></div>
        <div><strong>Emerson</strong><span>DeltaV DCS.</span></div>
        <div><strong>ABB</strong><span>AC500 and S500 PLCs; CP600 and Compact HMI 800; AC 800M DCS.</span></div>
        <div><strong>Rockwell / Allen-Bradley</strong><span>SLC 500 and SmartGuard 600.</span></div>
        <div><strong>Siemens</strong><span>S7-300, S7-400, S7-1200 and S7-1500 PLCs.</span></div>
        <div><strong>ManageEngine</strong><span>Enterprise IT management platform identified as TFG's platform of choice.</span></div>
      </div>
      <div class="scope-note" style="margin-top:25px"><strong>Before procurement or proposal.</strong> Confirm the specific vendor relationship, authorisation, product version and availability directly with TFG for the relevant scope.</div>
    </div></section>
    ${ctaBand("Need a particular platform?", "Ask us about fit, implementation scope and current status.", "contact.html", "Enquire with TFG")}`;
}

function renderExperience() {
  return `${hero("Experience", "A broad base across industrial and digital organisations.", "The company profile names organisations in industrial and energy as well as enterprise and digital categories. It also describes automation project execution in India and overseas.", `<strong>Transparent credentials</strong>The profile does not publish project-level scopes, dates, outcomes or client endorsements. No case studies or performance claims have been inferred.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Client ecosystem</span><h2>Companies TFG names in its 2026 profile.</h2></div><p>The profile groups these organisations under industrial and energy clients, and enterprise and digital clients. TFG has not supplied individual project descriptions for this list.</p></div>
      ${companyCarousel("experience-clients")}
      <p class="company-note">Names and categories follow the TFG profile. Company-site links and logo marks are included for identification where verified; marks are not extracted from the profile's company-list artwork. Listing does not imply endorsement or describe a specific project relationship.</p>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="experience-feature">
        <div><span class="eyebrow section-kicker">Automation project reach</span><h2>Project experience beyond Oman.</h2><p class="body-copy">TFG's profile says its team has executed key automation projects in India and overseas, including Canada, the United Kingdom, the United States, Oman and the Philippines.</p></div>
        <div class="scope-note"><strong>Project details available on request.</strong> The profile does not attach specific client names, scopes, dates or outcomes to individual projects. We have therefore not presented invented case studies or attributed deliverables.</div>
      </div>
    </div></section>
    ${ctaBand("Looking for relevant experience?", "Tell us about your project and we can discuss the closest matching capabilities.", "contact.html", "Talk to TFG")}`;
}

function renderAbout() {
  const values = [
    ["Ethics", "Conduct business with integrity and accountability."],
    ["Commitment", "Follow through on responsibilities and customer requirements."],
    ["Nurturing", "Support people and foster their development."],
    ["Respect for all", "Treat people fairly and with consideration."],
    ["Right the first time", "Value quality and correctness in delivery."],
    ["Learning & sharing", "Build a culture of learning and sharing knowledge."]
  ];
  return `${hero("About TFG", "A multidisciplinary technology company, based in Muscat.", "Tech Fusion Gulf LLC is an Oman-based ICT, engineering and technology solutions company established in 2023.", `<strong>Tech Fusion Gulf LLC</strong>Building #110, 1st floor, Office #12<br>Way No. 5744, Al Maha Street, Bausher<br>Muscat, Sultanate of Oman`)}
    <section class="section"><div class="container intro-grid">
      <div><span class="eyebrow section-kicker">Company introduction</span><h2>Connecting digital enterprise and operational technology.</h2></div>
      <div class="intro-aside"><strong>TFG helps organisations monitor, manage and secure their digital enterprise.</strong><p class="body-copy">Alongside enterprise ICT, the company delivers industrial automation, engineering design, integration and software for customers in oil and gas, energy, manufacturing, banking, healthcare and government. Its portfolio brings together enterprise systems and plant technologies.</p><p class="body-copy">TFG's stated mission is to enable customer growth through engineering services built on automated solutions—shortening engineering cycles and improving productivity, accuracy and standardisation.</p></div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Vision & approach</span><h2>Value through engineering.</h2></div><p>TFG's stated vision is to be a leading ICT, IT security, automation and data integration solutions provider that adds value and enhances return on customer investment.</p></div>
      <div class="process-grid">
        <div class="process-step"><span class="process-number">01 / UNDERSTAND</span><h3>Start with requirements</h3><p>Align the engagement with the customer's needs and operating environment.</p></div>
        <div class="process-step"><span class="process-number">02 / DESIGN</span><h3>Plan the solution</h3><p>Engineering design, architecture and system selection as scope requires.</p></div>
        <div class="process-step"><span class="process-number">03 / IMPLEMENT</span><h3>Integrate and deliver</h3><p>Configuration, integration, installation and commissioning where applicable.</p></div>
        <div class="process-step"><span class="process-number">04 / SUPPORT</span><h3>Support operations</h3><p>Troubleshooting and maintenance support according to the agreed engagement.</p></div>
      </div>
    </div></section>
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Values</span><h2>How we aim to work.</h2></div></div>
      <div class="values-grid">${values.map(([title, copy]) => `<article class="value-card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
      <div class="scope-note" style="margin-top:20px"><strong>Safety &amp; health.</strong> TFG states a commitment to preventing harm and providing a healthy work environment.</div>
    </div></section>
    ${ctaBand("Based in Muscat", "Connect with Tech Fusion Gulf about your project or enquiry.", "contact.html", "Contact the team")}`;
}

function renderContact() {
  return `${hero("Contact", "Start with a conversation.", "Share a project, service or technology enquiry with Tech Fusion Gulf. Include enough context for the team to direct your message.", `<strong>Tech Fusion Gulf LLC</strong>Building #110, 1st floor, Office #12<br>Way No. 5744, Al Maha Street, Bausher<br>Muscat, Sultanate of Oman`)}
    <section class="section"><div class="container contact-grid">
      <div class="contact-details">
        <div><span class="eyebrow section-kicker">Reach TFG</span><h2>Enquiries and business contact.</h2><p class="body-copy">The details below are taken from the company profile.</p></div>
        <div class="contact-block"><strong>General enquiries</strong><a href="mailto:sales@techfusiongulf.com">sales@techfusiongulf.com</a></div>
        <div class="contact-block"><strong>Primary contact</strong><p>Aditya Sharma<br>Technology &amp; Commercial Manager</p><a href="tel:+96894352333">+968 9435 2333</a></div>
        <div class="contact-block"><strong>Office</strong><p>Building #110, 1st floor, Office #12<br>Way No. 5744, Al Maha Street, Bausher<br>Muscat, Sultanate of Oman</p></div>
      </div>
      <div>
        <form class="contact-form" id="enquiry-form">
          <div class="form-field"><label for="name">Name *</label><input id="name" name="name" autocomplete="name" required></div>
          <div class="form-field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization"></div>
          <div class="form-field"><label for="email">Business email *</label><input id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="form-field"><label for="category">Enquiry area *</label><select id="category" name="category" required><option value="">Select an area</option>${solutions.map(item => `<option>${item.title}</option>`).join("")}<option>Partnership or general enquiry</option></select></div>
          <div class="form-field full"><label for="message">How can we help? *</label><textarea id="message" name="message" required></textarea></div>
          <p class="form-status" id="form-status">Submitting opens your email application with the enquiry details. This website does not send or store form data.</p>
          <button class="button" type="submit">Prepare enquiry email <span aria-hidden="true">↗</span></button>
        </form>
        <p class="contact-warning" style="margin-top:14px">This form uses your device's email application; it is not connected to a server. If no email app opens, contact <a href="mailto:sales@techfusiongulf.com">sales@techfusiongulf.com</a> directly.</p>
      </div>
    </div></section>`;
}

const pages = {
  home: renderHome,
  solutions: renderSolutions,
  solution: renderSolutionDetail,
  industries: renderIndustries,
  partners: renderPartners,
  experience: renderExperience,
  about: renderAbout,
  contact: renderContact
};

renderHeader();
renderFooter();
const page = pages[document.body.dataset.page];
if (page) {
  const content = page();
  if (content) document.querySelector("#main-content").innerHTML = content;
}

const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const formData = new FormData(enquiryForm);
    const subject = `TFG website enquiry: ${formData.get("category")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Email: ${formData.get("email")}`,
      `Enquiry area: ${formData.get("category")}`,
      "",
      String(formData.get("message"))
    ].join("\n");
    const mailto = `mailto:sales@techfusiongulf.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector("#form-status").textContent = "Your email application should open with the enquiry details. Review and send the message there.";
    window.location.href = mailto;
  });
}

document.querySelectorAll("[data-company-carousel]").forEach(carousel => {
  const slides = [...carousel.querySelectorAll("[data-company-slide]")];
  const previous = carousel.querySelector("[data-company-prev]");
  const next = carousel.querySelector("[data-company-next]");
  const status = carousel.querySelector("[data-company-status]");
  let activeSlide = 0;

  function showSlide(index) {
    activeSlide = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeSlide;
    });
    const rangeStart = activeSlide * 6 + 1;
    const rangeEnd = Math.min(rangeStart + 5, industrialClients.length + enterpriseClients.length);
    status.innerHTML = `${activeSlide + 1} / ${slides.length} <span aria-hidden="true">·</span> Companies ${rangeStart}–${rangeEnd} of ${industrialClients.length + enterpriseClients.length}`;
    previous.disabled = activeSlide === 0;
    next.disabled = activeSlide === slides.length - 1;
  }

  previous.addEventListener("click", () => showSlide(activeSlide - 1));
  next.addEventListener("click", () => showSlide(activeSlide + 1));
});

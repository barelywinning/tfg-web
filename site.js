const solutions = [
  {
    id: "ict",
    division: "technology-infrastructure",
    title: "ICT & Enterprise Infrastructure",
    short: "Networks, communications and the physical foundations of enterprise IT.",
    intro: "TFG's ICT and ELV division works across enterprise and wireless networks, communications, data-centre infrastructure and structured cabling. Project-specific scope is agreed around each operating environment.",
    items: ["Unified network infrastructure", "Wireless network infrastructure", "IP telephony", "Voice, data and video systems", "UPS systems", "Data-centre infrastructure", "Structured cabling systems", "Fibre-optic networks"],
    related: "Related capabilities include CCTV and access control, IPTV, audio and video conferencing, and public-address and paging systems."
  },
  {
    id: "cybersecurity",
    division: "technology-infrastructure",
    title: "Cybersecurity & Enterprise IT",
    short: "IT management tools spanning identities, endpoints, operations and security.",
    intro: "TFG implements and supports enterprise IT management solutions, including ManageEngine. The portfolio covers infrastructure management as well as security-related capabilities.",
    items: ["Identity and access management", "Enterprise service management", "Unified endpoint management and security", "IT operations management", "Security information and event management", "Advanced IT analytics", "Zero Trust security", "Remote-work management"],
    related: "Documented deployment options include on-premises, cloud-native, cloud-ready and Managed Service Provider models."
  },
  {
    id: "elv",
    division: "building-digital",
    title: "ELV & Physical Systems",
    short: "Integrated low-voltage systems for communication, safety and shared spaces.",
    intro: "TFG works across low-voltage and ICT systems for connected, functional spaces. Project-specific scope is established with each customer.",
    items: ["CCTV and access control", "IP telephony", "Voice, data and video systems", "IPTV", "Audio and video conferencing", "Public-address and paging systems", "Structured cabling", "Fibre-optic networks"],
    related: "UPS systems and data-centre infrastructure are also part of the ICT and ELV offering."
  },
  {
    id: "industrial-automation",
    division: "industrial-technologies",
    title: "Industrial Automation",
    short: "Plant and process control, upgrades and turnkey automation projects.",
    intro: "TFG delivers industrial and process automation across DCS, PLC, SCADA, HMI, drives and MCC, including turnkey projects and upgrades or migrations of existing systems.",
    items: ["DCS, PLC and SCADA systems", "HMI and process visualisation", "Drives and motor control centres", "System upgrades and migration", "Logic, interlocks and sequence control", "Plant control loops", "Turnkey automation projects", "Factory and site acceptance test support"],
    related: "Platforms in the technology ecosystem include Honeywell, Emerson, ABB, Rockwell / Allen-Bradley and Siemens. See the technology ecosystem page for examples."
  },
  {
    id: "building-automation",
    division: "building-digital",
    title: "Building Automation",
    short: "Controls for building comfort, operation, energy use and lifecycle.",
    intro: "Building automation can support comfortable spaces, efficient operation, lower energy consumption and operating costs, and longer utility life cycles.",
    items: ["Infrastructure controllers", "Occupancy systems", "Lighting systems", "Constant-volume air-handling units", "VAV hybrid systems", "Variable-volume air-handling units", "Chilled-, condenser- and hot-water systems", "Alarms, room automation and central plant systems"],
    related: "The exact system design and scope are determined against the building and customer requirements."
  },
  {
    id: "instrumentation",
    division: "engineering-instrumentation",
    title: "Field Instrumentation",
    short: "Instrumentation engineering and documentation for operating plant.",
    intro: "TFG provides field instrumentation and engineering, including measurement of forces, movement, temperature, vibration, acoustics and emissions.",
    items: ["P&ID reconciliation", "Instrument specification and selection", "Junction-box schedules and drawings", "Cable schedules and routing drawings", "System inspection services", "I/O listings", "Instrument location and hook-up drawings", "Control-room layouts and procurement support"],
    related: "The offering also includes supply of measuring and controlling field instruments."
  },
  {
    id: "engineering",
    division: "engineering-instrumentation",
    title: "Engineering Services",
    short: "System design, implementation, commissioning and on-site support.",
    intro: "TFG's engineers program PLC and DCS systems, logic and interlocks, recipes and batch control, and SCADA. Services extend from system architecture and drawings through implementation and support.",
    items: ["Turnkey DCS, PLC and SCADA projects", "System architecture design", "AutoCAD / MicroStation drafting", "Logic and safety interlocks", "Logs, reports, history and trends", "Sequence-of-operations implementation", "HMI and SCADA design and development", "FAT / SAT support, installation and commissioning", "Troubleshooting, maintenance and resident support", "Functional specifications and control-system integration"],
    related: "Engagement scope may include design, system selection, procurement support, configuration, integration and commissioning."
  },
  {
    id: "software",
    division: "building-digital",
    title: "Software & IT Services",
    short: "Custom software, digital products and specialist IT delivery.",
    intro: "TFG builds software and provides IT services, spanning product and application development, design, augmentation and workflow automation.",
    items: ["IT staff augmentation", "Web development", "Java development", "Mobile application development", "Website design", "E-commerce development", "Product development", "Custom UI/UX development", "Workflow and process automation using Python and n8n"],
    related: "Technical expertise includes Java, Android, iOS, React Native, Flutter, Angular, React, JavaScript, Node.js, PHP, .NET and Python."
  }
];


const nordenCategories = [
  { id: "surveillance", title: "Surveillance Systems", description: "Cameras, recording and video surveillance infrastructure." },
  { id: "cabling", title: "Cabling Solutions", description: "Copper and fibre connectivity, cabinets, racks and cabling infrastructure." },
  { id: "pro-av", title: "Pro AV Solutions", description: "Professional audio, video, conferencing, displays and AVoIP." },
  { id: "power", title: "Power Solutions", description: "Power continuity and conversion products, including UPS and solar inverters." },
  { id: "access-control", title: "Access Control Systems", description: "Biometric controllers, access panels and readers." },
  { id: "fire-alarm", title: "Fire Alarm Systems", description: "Fire alarm panels, detectors, modules and associated cabling." },
  { id: "data-centres", title: "Data Centres", description: "Racks, containment, infrastructure management and cooling." },
  { id: "lenexa", title: "Lenexa", description: "AI-enabled video management and analytics solutions." }
];

const nordenProductFamilies = [
  ["surveillance","Thermal Cameras","Thermal imaging options for specialist surveillance requirements."],
  ["surveillance","PTZ Cameras","Pan, tilt and zoom cameras for flexible area coverage."],
  ["surveillance","Dome Cameras","Dome-format cameras for indoor and outdoor surveillance."],
  ["surveillance","Bullet Cameras","Bullet-format cameras for perimeter and general surveillance."],
  ["surveillance","Explosion-proof Cameras","Specialist camera options for demanding hazardous environments."],
  ["surveillance","Body-worn Cameras","Wearable video capture for mobile personnel."],
  ["surveillance","Vehicle Cameras","Video surveillance options for vehicle applications."],
  ["surveillance","Network Video Recorders","Recording and management hardware for video surveillance systems."],
  ["cabling","Copper Cabling","Structured copper cabling products for network connectivity."],
  ["cabling","Fibre-optic Cabling","Fibre connectivity products for data and communications networks."],
  ["cabling","Network Cabinets & Racks","Enclosures and rack infrastructure for network equipment."],
  ["cabling","Power Distribution Units","Rack-level power distribution products."],
  ["cabling","Fire-resistant Cables","Cable options for fire and life-safety system installations."],
  ["pro-av","Public Address & Voice Alarm","PA and PAVA systems for communication and emergency announcements."],
  ["pro-av","Audio Conferencing","Audio solutions for meeting and collaboration spaces."],
  ["pro-av","Professional Displays","Display solutions for commercial and collaboration environments."],
  ["pro-av","Audio-Video over IP","Network-based distribution of professional audio and video."],
  ["power","Uninterruptible Power Supplies","UPS products for continuity of critical electrical loads."],
  ["power","Solar Inverters","Power conversion products for solar installations."],
  ["access-control","Biometric Controllers","Biometric access control hardware."],
  ["access-control","Access Control Panels","Control panels for electronic access management."],
  ["access-control","Access Readers","Reader devices for credential-based entry systems."],
  ["fire-alarm","Fire Alarm Panels","Control and indication panels for fire detection systems."],
  ["fire-alarm","Fire Detectors","Detection devices for fire alarm installations."],
  ["fire-alarm","Fire Alarm Modules","Modules and interface components for fire alarm systems."],
  ["data-centres","Data Centre Cabinets","Cabinet infrastructure for data centre environments."],
  ["data-centres","Containment Systems","Containment solutions for organised data centre infrastructure."],
  ["data-centres","Data Centre Infrastructure Management","DCIM tools for monitoring and managing data centre infrastructure."],
  ["data-centres","Precision Cooling","Cooling solutions for data centre environments."],
  ["lenexa","Video Management Software","Video management software for surveillance environments."],
  ["lenexa","Video Analytics","AI-enabled video analytics capabilities."]
].map(([category,title,description]) => ({category,title,description}));

function nordenEnquiryHref(productName = "") {
  const subject = productName ? `Norden product enquiry: ${productName}` : "Norden product enquiry";
  const body = productName
    ? `Hello TechFusionGulf,\n\nI would like to enquire about: ${productName}.\n\nPlease share the relevant product information, datasheet and quotation details.\n\nOrganisation: \nName: \nContact number: `
    : "Hello TechFusionGulf,\n\nI would like to enquire about Norden products.\n\nProduct / category: \nOrganisation: \nName: \nContact number: ";
  return `mailto:sales@techfusiongulf.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const industryGroups = [
  { title: "Industrial & Energy", prominent: true, industries: ["Oil & gas", "Water & power", "Manufacturing", "Transportation & logistics", "Defence"] },
  { title: "Enterprise & Financial", industries: ["Banking & financial services", "Insurance", "Telecommunications", "Payment gateways"] },
  { title: "Institutional & Public", industries: ["Government", "Healthcare", "Education & e-learning"] },
  { title: "Commercial & Digital", industries: ["Hospitality", "Retail", "E-commerce & m-commerce", "Media & entertainment"] }
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

const solutionDivisions = [
  { id: "technology-infrastructure", title: "Technology & Infrastructure", description: "Enterprise networks, communications, IT operations and security.", solutions: ["ict", "cybersecurity"] },
  { id: "industrial-technologies", title: "Industrial Technologies", description: "Process control, automation systems, upgrades and plant integration.", solutions: ["industrial-automation"] },
  { id: "engineering-instrumentation", title: "Engineering & Instrumentation", description: "Engineering design, instrumentation, commissioning and field support.", solutions: ["engineering", "instrumentation"] },
  { id: "building-digital", title: "Building & Digital Solutions", description: "Building controls, connected physical systems and software delivery.", solutions: ["building-automation", "elv", "software"] }
];

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
        <a class="brand" href="${basePath()}index.html" aria-label="TechFusionGulf home">
          <span class="brand-mark"><img class="brand-logo" src="${basePath()}assets/brand/tfg-logo.png" alt=""></span>
          <span class="brand-name"><strong>TechFusionGulf</strong><span>Technology. Infrastructure. Engineering.</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">☰</button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          ${navLink("index.html", "Home", active === "home")}
          <details class="nav-dropdown"${active === "solutions" || active === "solution" ? " open" : ""}>
            <summary${active === "solutions" || active === "solution" ? ' aria-current="page"' : ""}>Solutions</summary>
            <div class="dropdown-panel">
              ${navLink("solutions.html", "All divisions", active === "solutions")}
              ${detailLinks}
            </div>
          </details>
          ${navLink("industries.html", "Industries", active === "industries")}
          ${navLink("norden.html", "Norden", active === "norden")}
          ${navLink("experience.html", "Our Experience", active === "experience")}
          ${navLink("about.html", "About", active === "about")}
          ${navLink("contact.html", "Contact", active === "contact")}
        </nav>
        <a class="header-cta" href="${basePath()}contact.html">Discuss a project <span aria-hidden="true">↗</span></a>
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
  nav.addEventListener("click", event => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

function renderFooter() {
  document.querySelector("#site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand" href="${basePath()}index.html">
              <span class="brand-mark"><img class="brand-logo" src="${basePath()}assets/brand/tfg-logo.png" alt=""></span>
              <span class="brand-name"><strong>TechFusionGulf</strong><span>Technology. Infrastructure. Engineering.</span></span>
            </a>
            <p>A multidisciplinary ICT, engineering and technology solutions company based in Muscat, Sultanate of Oman.</p>
          </div>
          <div class="footer-column"><strong>Explore</strong>
            <a href="${basePath()}solutions.html">Solutions</a>
            <a href="${basePath()}industries.html">Industries</a>
            <a href="${basePath()}norden.html">Norden products</a>
            <a href="${basePath()}experience.html">Our Experience</a>
          </div>
          <div class="footer-column"><strong>Company</strong>
            <a href="${basePath()}about.html">About TFG</a>
            <a href="${basePath()}contact.html">Contact</a>
            <span>Established 2023</span>
          </div>
          <div class="footer-column"><strong>Get in touch</strong>
            <a href="mailto:sales@techfusiongulf.com">sales@techfusiongulf.com</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="current-year"></span> TechFusionGulf LLC</span>
          <span>Technology · Infrastructure · Engineering</span>
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
  return `
    <section class="hero"><div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow section-kicker">Technology · Infrastructure · Engineering</span>
        <h1>Technology.<br>Infrastructure.<br><span>Engineering.</span></h1>
        <h2 class="hero-subheading">Connecting enterprise technology with industrial systems.</h2>
        <p class="lead">From enterprise infrastructure to industrial automation, we bring together the technologies and engineering capabilities that keep businesses operating.</p>
        <div class="hero-actions"><a class="button" href="solutions.html">Explore our capabilities <span aria-hidden="true">↗</span></a><a class="button button-secondary" href="contact.html">Discuss a project</a></div>
      </div>
      <div class="hero-image"><img src="assets/cover/factory-engineering.jpg" alt="Workers operating machinery on a manufacturing factory floor" width="1400" height="788" fetchpriority="high" decoding="async"></div>
    </div></section>
    <div class="stats-strip"><div class="container stats-inner">
      <div class="stat"><span class="stat-index" aria-hidden="true">01</span><strong>Technology &amp; Infrastructure</strong><span>Networks, communications &amp; enterprise IT</span></div>
      <div class="stat"><span class="stat-index" aria-hidden="true">02</span><strong>Industrial Technologies</strong><span>Automation, control &amp; process systems</span></div>
      <div class="stat"><span class="stat-index" aria-hidden="true">03</span><strong>Engineering &amp; Instrumentation</strong><span>Design, integration &amp; field services</span></div>
      <div class="stat"><span class="stat-index" aria-hidden="true">04</span><strong>Building &amp; Digital Solutions</strong><span>Building systems, ELV &amp; software</span></div>
    </div></div>
    <section class="section norden-home-feature"><div class="container norden-feature-grid">
      <div class="norden-feature-copy">
        <span class="eyebrow section-kicker">Featured distribution portfolio · Oman</span>
        <h2>Norden products.<br>Through TechFusionGulf.</h2>
        <p class="body-copy">Explore Norden's portfolio of surveillance, connectivity, professional AV, power and building technology products available through TechFusionGulf in Oman.</p>
        <a class="text-link" href="norden.html">Explore the Norden catalogue →</a>
      </div>
      <div class="norden-feature-categories" aria-label="Norden product categories">
        <a href="norden.html#catalogue"><span>01</span><strong>Surveillance systems</strong><b>↗</b></a>
        <a href="norden.html#catalogue"><span>02</span><strong>Cabling solutions</strong><b>↗</b></a>
        <a href="norden.html#catalogue"><span>03</span><strong>Pro AV &amp; communications</strong><b>↗</b></a>
        <a href="norden.html#catalogue"><span>04</span><strong>Power &amp; infrastructure</strong><b>↗</b></a>
      </div>
    </div></section>
    <section class="section section-compact"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">What we do</span><h2>Connected disciplines.<br>Practical delivery.</h2></div><p>Bring together the capabilities required for a project, from infrastructure and control systems to engineering and software.</p></div>
      <div class="division-grid">${solutionDivisions.map((division, index) => `<a class="division-card" href="solutions.html#${division.id}"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><h3>${division.title}</h3><p>${division.description}</p><span class="card-arrow">Explore division →</span></a>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container intro-grid">
      <div><span class="eyebrow section-kicker">About TechFusionGulf</span><h2>Technology that connects operational needs.</h2></div>
      <div class="intro-aside"><strong>One multidisciplinary portfolio across enterprise ICT, industrial systems, automation and software.</strong>
        <p class="body-copy">TechFusionGulf LLC helps organisations monitor, manage and secure their digital enterprise, while delivering industrial automation, engineering design, integration and software. Based in Muscat and established in 2023, TFG brings these capabilities together around the requirements of each engagement.</p>
        <a class="text-link" href="about.html">More about the company →</a>
      </div>
    </div></section>
    <section class="section industry-band"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Industry focus</span><h2>Technology for complex operating environments.</h2></div><p>Our work spans industrial operations, enterprise infrastructure, public services and digital businesses. Engagements are shaped around the requirements of each environment.</p></div>
      <div class="industry-list">${industryGroups[0].industries.map(name => `<a href="industries.html">${name}</a>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Experience</span><h2>Experience across industrial and digital organisations.</h2></div><p>Explore the company ecosystem and learn how our capabilities align with operational and enterprise environments.</p></div>
      <p><a class="text-link" href="experience.html">Explore our experience →</a></p>
    </div></section>
    <section class="section section-compact"><div class="container">
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

function companyEcosystem() {
  const groups = [
    { title: "Industrial & Energy", organizations: industrialClients },
    { title: "Enterprise & Digital", organizations: enterpriseClients }
  ];
  return `<div class="company-ecosystem">${groups.map(group => `
    <section class="ecosystem-group" aria-labelledby="ecosystem-${group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}">
      <div class="ecosystem-heading"><h3 id="ecosystem-${group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}">${group.title}</h3><span>${group.organizations.length} organisations</span></div>
      <ul class="company-wall">${group.organizations.map(({ name, logo, website }) => `
        <li class="company-card">
          ${website ? `<a class="company-link" href="${website}" target="_blank" rel="noopener noreferrer" aria-label="Visit the official ${name} website">` : '<div class="company-link">' }
            ${logo ? `<span class="company-mark"><img src="${basePath()}assets/companies/${logo}" alt="${name} logo" loading="lazy" decoding="async"></span>` : ""}
            <span class="company-copy"><span class="company-name">${name}</span></span>
          ${website ? "</a>" : "</div>"}
        </li>`).join("")}
      </ul>
    </section>`).join("")}
  </div>`;
}

function ctaBand(title, copy, href, label) {
  return `<section class="cta-band"><div class="container cta-inner"><div><span class="eyebrow section-kicker">${title}</span><h2>${copy}</h2></div><a class="button" href="${href}">${label} <span aria-hidden="true">↗</span></a></div></section>`;
}

function renderSolutions() {
  return `${hero("Solutions", "Four divisions. One connected portfolio.", "Bring together enterprise technology, industrial systems and engineering disciplines around the needs of your operation.", `<strong>Scope-led delivery</strong>Technical scope, platforms and delivery responsibilities are agreed for each engagement.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Capabilities</span><h2>Four divisions, eight disciplines.</h2></div><p>Explore the technical areas below. Each solution page outlines relevant systems, services and delivery considerations.</p></div>
      <div class="solution-divisions">${solutionDivisions.map((division, divisionIndex) => `<section class="solution-division" id="${division.id}" aria-labelledby="${division.id}-title">
        <div class="solution-division-heading"><span class="card-index">${String(divisionIndex + 1).padStart(2, "0")}</span><div><h2 id="${division.id}-title">${division.title}</h2><p>${division.description}</p></div></div>
        <div class="solutions-grid${division.solutions.length === 1 ? " solution-grid-single" : ""}">${division.solutions.map(id => {
          const item = solutions.find(solution => solution.id === id);
          const index = solutions.indexOf(item) + 1;
          return `<a class="solution-card" href="${solutionHref(item.id)}"><span class="card-index">${String(index).padStart(2, "0")}</span><span><h3>${item.title}</h3><p>${item.short}</p><span class="text-link">Explore capability →</span></span></a>`;
        }).join("")}</div>
      </section>`).join("")}</div>
      <div class="scope-note scope-note-spaced"><strong>How scope works.</strong> Project scope and delivery responsibilities are shaped around customer requirements, operating conditions and agreed outcomes.</div>
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
  const division = solutionDivisions.find(group => group.id === item.division);
  return `${hero(`${division.title}  /  ${String(idx).padStart(2, "0")}`, item.title, item.short, `<strong>TechFusionGulf</strong>Muscat, Oman`) }
    <section class="section"><div class="container details-layout">
      <aside class="detail-sidebar"><span class="eyebrow">At a glance</span><h3>${item.title}</h3><p>${item.short}</p></aside>
      <div class="detail-content"><span class="eyebrow section-kicker">Capability overview</span><h2>Defined around your operating context.</h2><p>${item.intro}</p>
        <h3>Systems and services</h3>
        <ul class="item-grid">${item.items.map(text => `<li>${text}</li>`).join("")}</ul>
        <div class="scope-note"><strong>Additional detail.</strong> ${item.related}</div>
      </div>
    </div></section>
    ${ctaBand("Discuss a scope", "Talk to TFG about your requirements and delivery context.", "../contact.html", "Contact TFG")}`;
}

function renderIndustries() {
  return `${hero("Industries", "Built around the environments customers operate in.", "From plant floors and energy systems to enterprise, public services and digital commerce, TFG brings relevant technology and engineering disciplines together.", `<strong>Sector-led thinking</strong>Every operating environment has different priorities. We shape the conversation around the systems, people and outcomes involved.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Industry landscape</span><h2>Capabilities for distinct sectors.</h2></div><p>Our portfolio spans industrial operations, financial services, public institutions and customer-facing digital businesses.</p></div>
      <div class="industry-groups">${industryGroups.map((group, groupIndex) => `<section class="industry-group${group.prominent ? " industry-group-featured" : ""}" aria-labelledby="industry-group-${groupIndex}">
        <div class="industry-group-heading"><span class="card-index">${String(groupIndex + 1).padStart(2, "0")}</span><h3 id="industry-group-${groupIndex}">${group.title}</h3></div>
        <div class="industry-tags">${group.industries.map(name => `<span>${name}</span>`).join("")}</div>
      </section>`).join("")}</div>
    </div></section>
    <section class="section section-compact"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">A connected portfolio</span><h2>Enterprise and operational technology.</h2></div><p>TFG combines ICT, ELV, automation, instrumentation, engineering and software for enterprise IT and operational technology environments.</p></div>
      <div class="category-grid">${solutionDivisions.map(division => `<article class="category-panel"><h3>${division.title}</h3><p>${division.description}</p></article>`).join("")}</div>
    </div></section>
    ${ctaBand("Sector requirements differ", "Share your operating context and the outcomes you need.", "contact.html", "Make an enquiry")}`;
}

function renderExperience() {
  return `${hero("Experience", "Experience built across industry and enterprise.", "Our experience comes from work across industrial operations, enterprise technology and digital environments — bringing practical understanding of the systems, teams and constraints involved in real-world delivery.", `<strong>Past experience</strong>This page brings together selected organisations and sectors connected to our team's previous project and professional experience.`)}
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Selected experience</span><h2>Experience across organisations and operating environments.</h2></div><p>Our team's previous experience spans industrial, energy, enterprise, financial and digital organisations. It informs the technical perspective we bring to current customer engagements.</p></div>
      ${companyEcosystem()}
      <p class="company-note">The organisations shown represent selected elements of our team's previous project and professional experience. They are not presented as a list of current TechFusionGulf customers, formal partners or endorsements. Specific engagement details are shared only where accurate and permitted.</p>
    </div></section>
    <section class="section section-compact"><div class="container">
      <div class="experience-feature">
        <div><span class="eyebrow section-kicker">Project and technical experience</span><h2>Practical exposure to complex operating environments.</h2><p class="body-copy">Our team's experience includes industrial automation, process control, enterprise infrastructure, communications, software and digital platforms. This breadth helps us understand how technology decisions affect both business operations and the systems that support them.</p></div>
        <div class="scope-note"><strong>Relevant experience, clearly scoped.</strong> Project references, individual responsibilities and delivery outcomes vary by engagement. We discuss the most relevant examples in the context of each customer requirement.</div>
      </div>
    </div></section>
    ${ctaBand("Discuss your requirements", "Tell us what you are looking to build, integrate or improve.", "contact.html", "Talk to TFG")}`;
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
  return `${hero("About TechFusionGulf", "A multidisciplinary technology company, based in Muscat.", "TechFusionGulf is an Oman-based ICT, engineering and technology solutions company established in 2023.")}
    <section class="section"><div class="container intro-grid">
      <div><span class="eyebrow section-kicker">Company introduction</span><h2>Connecting digital enterprise and operational technology.</h2></div>
      <div class="intro-aside"><strong>Connecting digital enterprise with operational technology.</strong><p class="body-copy">TechFusionGulf delivers enterprise ICT, industrial automation, engineering design, integration and software. By bringing digital systems and plant technologies into one conversation, we help customers plan practical solutions for their operating context.</p><p class="body-copy">Our mission is to enable customer growth through engineering services built on automated solutions—shortening engineering cycles and improving productivity, accuracy and standardisation.</p></div>
    </div></section>
    <section class="section section-compact"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Vision &amp; approach</span><h2>Value through engineering.</h2></div><p>Our vision is to be a leading ICT, IT security, automation and data integration solutions provider—adding value and enhancing return on customer investment.</p></div>
      <div class="process-grid">
        <div class="process-step"><span class="process-number">01 / UNDERSTAND</span><h3>Start with requirements</h3><p>Align the engagement with the customer's needs and operating environment.</p></div>
        <div class="process-step"><span class="process-number">02 / DESIGN</span><h3>Plan the solution</h3><p>Engineering design, architecture and system selection as scope requires.</p></div>
        <div class="process-step"><span class="process-number">03 / IMPLEMENT</span><h3>Integrate and deliver</h3><p>Configuration, integration, installation and commissioning where applicable.</p></div>
        <div class="process-step"><span class="process-number">04 / SUPPORT</span><h3>Support operations</h3><p>Troubleshooting and maintenance support according to the agreed engagement.</p></div>
      </div>
    </div></section>
    <section class="section section-compact"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Values</span><h2>How we aim to work.</h2></div></div>
      <div class="values-grid">${values.map(([title, copy]) => `<article class="value-card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
      <div class="scope-note scope-note-spaced"><strong>Safety &amp; health.</strong> We are committed to preventing harm and providing a healthy work environment.</div>
    </div></section>
    ${ctaBand("Based in Muscat", "Connect with TechFusionGulf about your project or enquiry.", "contact.html", "Contact the team")}`;
}


function renderNorden() {
  const categoryCards = nordenCategories.map((category, index) => `
    <a class="norden-category-card" href="#catalogue" data-category-link="${category.id}">
      <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <span class="card-arrow">Explore products →</span>
    </a>`).join("");
  const productCards = nordenProductFamilies.map(product => {
    const category = nordenCategories.find(item => item.id === product.category);
    return `
      <article class="norden-product-card" data-category="${product.category}" data-search="${(product.title + " " + product.description + " " + category.title).toLowerCase()}">
        <span class="norden-product-category">${category.title}</span>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a class="text-link" href="${nordenEnquiryHref(product.title)}">Enquire about this product →</a>
      </article>`;
  }).join("");
  return `${hero("Norden · Distribution in Oman", "Norden technology, through TechFusionGulf.", "Explore Norden's portfolio of products across surveillance, cabling, professional AV, power, access control, fire safety and data-centre infrastructure.", `<strong>Product enquiries</strong>Contact TechFusionGulf for product information, model-specific specifications, datasheets and quotation requests in Oman.`)}
    <section class="section section-compact"><div class="container">
      <div class="norden-intro-panel">
        <span class="eyebrow section-kicker">Norden at TechFusionGulf</span>
        <h2>Technology for connected, secure and operational environments.</h2>
        <p class="body-copy">TechFusionGulf makes Norden's product portfolio accessible to customers in Oman. Browse the product families below and contact our team for model selection, current documentation, availability and quotations.</p>
        <a class="button" href="${nordenEnquiryHref()}">Enquire about Norden <span aria-hidden="true">↗</span></a>
      </div>
    </div></section>
    <section class="section"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Product portfolio</span><h2>Explore by category.</h2></div><p>Browse the main product areas within Norden's portfolio. Select a category to view its product families.</p></div>
      <div class="norden-category-grid">${categoryCards}</div>
    </div></section>
    <section class="section section-compact" id="catalogue"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-kicker">Norden catalogue</span><h2>Browse product families.</h2></div><p>Use the search and category filter to find a product family, then send an enquiry directly to TechFusionGulf.</p></div>
      <div class="norden-catalogue-controls">
        <label class="norden-search-label" for="norden-search">Search catalogue
          <input id="norden-search" type="search" placeholder="Search products or categories" autocomplete="off">
        </label>
        <label class="norden-filter-label" for="norden-category-filter">Category
          <select id="norden-category-filter">
            <option value="all">All categories</option>
            ${nordenCategories.map(category => `<option value="${category.id}">${category.title}</option>`).join("")}
          </select>
        </label>
      </div>
      <p class="norden-results-count" id="norden-results-count" aria-live="polite">${nordenProductFamilies.length} product families</p>
      <div class="norden-product-grid" id="norden-product-grid">${productCards}</div>
      <p class="norden-empty-state" id="norden-empty-state" hidden>No product families match that search. Try another term or category.</p>
      <p class="company-note">This catalogue presents product families, not a live stock list. Exact models, technical specifications, datasheets, compatibility and availability are confirmed against current Norden documentation for each enquiry.</p>
    </div></section>
    ${ctaBand("Norden product enquiries", "Looking for a particular product or specification?", nordenEnquiryHref(), "Enquire with TFG")}`;
}

function initNordenCatalogue() {
  const search = document.querySelector("#norden-search");
  const filter = document.querySelector("#norden-category-filter");
  const grid = document.querySelector("#norden-product-grid");
  if (!search || !filter || !grid) return;
  const cards = [...grid.querySelectorAll(".norden-product-card")];
  const count = document.querySelector("#norden-results-count");
  const empty = document.querySelector("#norden-empty-state");
  const update = () => {
    const query = search.value.trim().toLowerCase();
    const category = filter.value;
    let visible = 0;
    cards.forEach(card => {
      const show = (!query || card.dataset.search.includes(query)) &&
        (category === "all" || card.dataset.category === category);
      card.hidden = !show;
      if (show) visible += 1;
    });
    count.textContent = `${visible} product famil${visible === 1 ? "y" : "ies"}`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener("input", update);
  filter.addEventListener("change", update);
  document.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", () => {
      filter.value = link.dataset.categoryLink;
      update();
    });
  });
}

function renderContact() {
  return `${hero("Contact", "Start with a conversation.", "Share a project, service or technology enquiry with TechFusionGulf. Include enough context for the team to direct your message.")}
    <section class="section"><div class="container contact-grid">
      <div class="contact-details">
        <div><span class="eyebrow section-kicker">Reach TechFusionGulf</span><h2>Enquiries and business contact.</h2><p class="body-copy">Contact us to discuss a project, service or technology requirement.</p></div>
      </div>
      <aside class="contact-card">
        <strong>Business Enquiries</strong>
        <a href="mailto:sales@techfusiongulf.com">sales@techfusiongulf.com</a>
        <p>For enquiries relating to technology, infrastructure, cybersecurity, automation and engineering, please contact our team.</p>
      </aside>
    </div></section>`;
}

const pages = {
  home: renderHome,
  solutions: renderSolutions,
  solution: renderSolutionDetail,
  industries: renderIndustries,
  experience: renderExperience,
  about: renderAbout,
  norden: renderNorden,
  contact: renderContact
};

renderHeader();
renderFooter();
const page = pages[document.body.dataset.page];
if (page) {
  const content = page();
  if (content) document.querySelector("#main-content").innerHTML = content;
  if (document.body.dataset.page === "norden") initNordenCatalogue();
}

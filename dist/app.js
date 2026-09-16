const products = ["patch", "intake", "nett", "proof", "relay", "rove", "span"];

const sites = {
  articial: {
    name: "ARTICIAL",
    title: "Ideas, software, systems.",
    description: "An independent technology and product practice. We explore where software, operations, and useful ideas meet.",
    accent: "#ff5c35",
    accent2: "#3758ff",
  },
  utuh: {
    name: "UTUH",
    title: "Software for work, made whole.",
    description: "Businesses have enough software. UTUH connects the fragmented tools, handoffs, and information between them into reliable operational systems.",
    accent: "#ff5c35",
    accent2: "#3758ff",
  },
  patch: {
    name: "PATCH",
    category: "Custom operational systems",
    title: "Software for the gaps between your systems.",
    description: "PATCH maps the work that still depends on exports, spreadsheets, messages, and memory—then builds the missing operational layer.",
    accent: "#ff6433",
    accent2: "#ffb000",
    index: "01",
    flow: ["Map the work", "Find the gap", "Build the layer", "Measure the change"],
    outcomes: ["Fewer manual handoffs", "Clear ownership", "Reliable operational data"],
    capabilities: [
      ["Workflow systems", "Approvals, internal tools, exception queues, and portals shaped around the real process."],
      ["Connected operations", "APIs, spreadsheet automation, document flows, and notifications across existing tools."],
      ["Product discovery", "Repeated workflow patterns become evidence for focused, reusable software."],
    ],
    signalTitle: "A typical broken flow",
    signal: ["Export marketplace data", "Clean it in Excel", "Send approval in chat", "Update ERP manually"],
    fit: "For teams whose important workflows live between otherwise useful tools.",
  },
  intake: {
    name: "INTAKE",
    category: "Conversational order infrastructure",
    title: "Unstructured in. Orders out.",
    description: "INTAKE turns customer messages, voice notes, PDFs, photos, and forms into structured orders that an operator can verify before fulfillment.",
    accent: "#3758ff",
    accent2: "#72d7ff",
    index: "02",
    flow: ["Receive", "Interpret", "Resolve ambiguity", "Confirm order"],
    outcomes: ["Faster order entry", "Fewer SKU mistakes", "No forgotten messages"],
    capabilities: [
      ["Natural input", "Let customers order through familiar channels without changing how they buy."],
      ["Structured drafts", "Map customer, SKU, quantity, price, delivery, and payment terms into one reviewable order."],
      ["Human confirmation", "Flag uncertainty instead of pretending every message is perfectly clear."],
    ],
    signalTitle: "Message becomes order",
    signal: ["“Kirim 4 dus yang biasa”", "Customer + catalog match", "Ambiguity flagged", "Draft ready to approve"],
    fit: "For distributors and wholesalers taking repeat orders through WhatsApp and documents.",
  },
  nett: {
    name: "NETT",
    category: "Commerce profitability intelligence",
    title: "See what every sale actually makes.",
    description: "NETT combines revenue with the costs that disappear across marketplace, ad, affiliate, logistics, packaging, and returns data.",
    accent: "#b9f447",
    accent2: "#ffda44",
    index: "03",
    flow: ["Load sales", "Apply real costs", "Find leakage", "Change the decision"],
    outcomes: ["True contribution margin", "Loss-making SKU visibility", "Decision-ready scenarios"],
    capabilities: [
      ["Order economics", "Calculate contribution after COGS, fees, shipping, affiliates, ads, packaging, and returns."],
      ["Action, not vanity", "Know which price, commission, campaign, or cost assumption needs to change."],
      ["Start with exports", "Begin with the files teams already have before investing in live integrations."],
    ],
    signalTitle: "One Rp100k sale",
    signal: ["Revenue 100,000", "Costs −66,000", "Ads + affiliate −18,000", "NETT 16,000"],
    fit: "For marketplace sellers and commerce teams who know revenue but cannot trust profit.",
  },
  proof: {
    name: "PROOF",
    category: "Transaction document operations",
    title: "Every transaction. Accounted for.",
    description: "PROOF connects transaction records with the documents required for trust, reconciliation, and auditability.",
    accent: "#ffd447",
    accent2: "#ff824d",
    index: "04",
    flow: ["Ingest evidence", "Classify", "Match", "Resolve exceptions"],
    outcomes: ["Complete transaction files", "Faster audit preparation", "Visible exceptions"],
    capabilities: [
      ["Evidence matching", "Pair purchase orders, invoices, tax documents, delivery notes, and payment proof."],
      ["Completeness control", "See which transactions are ready and which still need specific evidence."],
      ["Reviewable automation", "Keep people in the loop for ambiguous files and low-confidence matches."],
    ],
    signalTitle: "Transaction package",
    signal: ["PO ✓", "Invoice ✓", "Delivery note missing", "Payment proof ✓"],
    fit: "For finance, procurement, contractors, and project teams with evidence scattered everywhere.",
  },
  relay: {
    name: "RELAY",
    category: "Commerce data infrastructure",
    title: "Data where it needs to go.",
    description: "RELAY moves, normalizes, maps, and monitors operational data between commerce systems without trying to replace them.",
    accent: "#30d6b0",
    accent2: "#45a3ff",
    index: "05",
    flow: ["Connect sources", "Normalize schemas", "Map ownership", "Deliver clean data"],
    outcomes: ["One operational language", "Healthy syncs", "Traceable failures"],
    capabilities: [
      ["Purpose-built connectors", "Move the data needed for the workflow, not every field a platform exposes."],
      ["Canonical models", "Make products, orders, channels, and brands mean the same thing across systems."],
      ["Exception visibility", "Put failed records and mapping gaps into a queue people can act on."],
    ],
    signalTitle: "One clean route",
    signal: ["Marketplace + ERP", "Canonical order schema", "Brand + channel mapping", "Finance + BI outputs"],
    fit: "For multi-channel businesses whose systems disagree about the same operation.",
  },
  rove: {
    name: "ROVE",
    category: "Rental asset operations",
    title: "Assets in motion. Operations in control.",
    description: "ROVE manages the whole asset lifecycle—from availability and reservation to return, inspection, and readiness.",
    accent: "#ff4f91",
    accent2: "#8f69ff",
    index: "06",
    flow: ["Available", "Reserved", "Checked out", "Returned + inspected"],
    outcomes: ["Higher utilization", "Fewer late returns", "Faster turnaround"],
    capabilities: [
      ["Asset-level truth", "Know what is available, where it is, who has it, and what condition it is in."],
      ["Reliable circulation", "Connect booking, checkout, due dates, reminders, deposits, return, and inspection."],
      ["Operational economics", "See idle days, revenue per asset, damage frequency, and asset profitability."],
    ],
    signalTitle: "Asset 0247",
    signal: ["Checked out", "Due Friday 16:00", "Deposit received", "Inspection queued on return"],
    fit: "For focused rental operators managing physical assets, not only calendar bookings.",
  },
  span: {
    name: "SPAN",
    category: "Project and construction control",
    title: "From budget to completion.",
    description: "SPAN connects budget, commitments, purchases, vendors, invoices, evidence, progress, and variance across a project.",
    accent: "#ff7b33",
    accent2: "#e1ff45",
    index: "07",
    flow: ["Budget", "Commit", "Pay + prove", "Forecast completion"],
    outcomes: ["Current committed spend", "Documented payments", "Visible project variance"],
    capabilities: [
      ["Project money map", "See budget, committed, invoiced, paid, unverified, remaining, and projected cost."],
      ["Connected evidence", "Keep purchase, vendor, invoice, payment, and proof context attached to the work."],
      ["Early variance", "Find cost and document gaps while the project can still respond."],
    ],
    signalTitle: "Project control",
    signal: ["Budget 2.4B", "Committed 1.7B", "Unverified 84M", "Forecast variance +3.2%"],
    fit: "For contractors and project teams too complex for spreadsheets, but not served by enterprise ERP.",
  },
};

function getSite() {
  const query = new URLSearchParams(location.search).get("site");
  if (query && sites[query]) return query;
  const subdomain = location.hostname.split(".")[0].toLowerCase();
  return sites[subdomain] ? subdomain : "articial";
}

const siteKey = getSite();
const site = sites[siteKey];
document.body.dataset.site = siteKey;
document.documentElement.style.setProperty("--accent", site.accent);
document.documentElement.style.setProperty("--accent-2", site.accent2);

function href(key) {
  const local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if (local) return `/?site=${key}`;
  return key === "articial" ? "https://articial.app" : `https://${key}.articial.app`;
}

function arrow() {
  return `<svg aria-hidden="true" viewBox="0 0 18 18"><path d="M3 9h11M10 4l5 5-5 5"/></svg>`;
}

function nav() {
  const productLinks = products.map((key) => `<a href="${href(key)}"><span>${sites[key].index}</span>${sites[key].name}</a>`).join("");
  return `
    <header class="site-header">
      <a class="brand" href="${href(siteKey === "articial" ? "articial" : "utuh")}" aria-label="${siteKey === "articial" ? "Articial" : "UTUH"} home">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>${siteKey === "articial" ? "ARTICIAL" : "UTUH"}</strong>
        ${products.includes(siteKey) ? `<em>/ ${site.name}</em>` : ""}
      </a>
      <nav aria-label="Main navigation">
        <button class="nav-products" type="button" aria-expanded="false" aria-controls="product-menu">Products <span>+</span></button>
        <a href="${href("utuh")}">About UTUH</a>
        <a class="nav-cta" href="mailto:hello@articial.app?subject=${encodeURIComponent(`A conversation about ${site.name}`)}">Talk to us</a>
      </nav>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
      <div class="product-menu" id="product-menu" hidden>
        <p>One family. Seven operational gaps.</p>
        <div>${productLinks}</div>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer>
      <div class="footer-lead">
        <p>Have a fragmented workflow?</p>
        <a href="mailto:hello@articial.app?subject=Make this workflow whole">Let’s map it ${arrow()}</a>
      </div>
      <div class="footer-grid">
        <a class="brand footer-brand" href="${href("articial")}"><span class="brand-mark"><i></i><i></i><i></i></span><strong>ARTICIAL</strong></a>
        <p>Independent technology and product practice.<br />Jakarta, Indonesia.</p>
        <div class="footer-links">
          <a href="${href("utuh")}">UTUH</a>${products.map((key) => `<a href="${href(key)}">${sites[key].name}</a>`).join("")}
        </div>
        <p class="fine">© ${new Date().getFullYear()} Articial. Product names remain provisional until formally cleared.</p>
      </div>
    </footer>`;
}

function articialPage() {
  return `
    <main id="main">
      <section class="articial-hero">
        <div class="hero-copy reveal">
          <p class="kicker">Independent technology + product practice</p>
          <h1>Ideas,<br />software,<br /><span>systems.</span></h1>
          <p class="hero-lead">${site.description}</p>
          <a class="text-link" href="${href("utuh")}">Meet UTUH ${arrow()}</a>
        </div>
        <figure class="system-art reveal delay-1">
          <img src="/assets/whole-system.png" alt="An abstract modular system assembling into a coherent whole" />
          <figcaption><span>01</span> Fragments become systems.</figcaption>
        </figure>
      </section>
      <section class="manifesto section-pad">
        <p class="section-label">What we make</p>
        <h2>Useful things for<br />complicated work.</h2>
        <p>Articial is where research, operational thinking, and software meet. UTUH is our product family for making fragmented business operations whole.</p>
      </section>
      <section class="utuh-feature section-pad">
        <div class="feature-number">A / 01</div>
        <div>
          <p class="kicker">Operational software company</p>
          <h2>UTUH</h2>
          <p>Software for work, made whole.</p>
        </div>
        <a class="round-link" href="${href("utuh")}" aria-label="Explore UTUH">${arrow()}</a>
      </section>
      <section class="product-index section-pad">
        <div class="index-head"><p class="section-label">UTUH products</p><p>Each product solves one expensive operational gap.</p></div>
        <div class="index-list">
          ${products.map((key) => `<a href="${href(key)}" style="--row-accent:${sites[key].accent}"><span>${sites[key].index}</span><strong>${sites[key].name}</strong><em>${sites[key].category}</em>${arrow()}</a>`).join("")}
        </div>
      </section>
    </main>`;
}

function utuhPage() {
  return `
    <main id="main">
      <section class="utuh-hero section-pad">
        <div class="hero-copy reveal">
          <p class="kicker">Operational software company</p>
          <h1>Make work<br /><span>whole.</span></h1>
          <p class="hero-lead">${site.description}</p>
          <div class="hero-actions"><a class="button" href="#products">Explore the family ${arrow()}</a><a class="text-link" href="mailto:hello@articial.app?subject=An operational workflow">Bring us a workflow</a></div>
        </div>
        <div class="whole-machine reveal delay-1" data-assembled="false">
          <div class="machine-grid" aria-hidden="true">
            <span class="fragment f1">Messages</span><span class="fragment f2">Sheets</span><span class="fragment f3">ERP</span><span class="fragment f4">PDFs</span><span class="fragment f5">People</span><span class="core">ONE<br />SYSTEM</span>
          </div>
          <button type="button" class="assemble-button">Make it whole <span>+</span></button>
        </div>
      </section>
      <section class="problem-strip"><p>Fragmented tools</p><span></span><p>Manual handoffs</p><span></span><p>Incomplete information</p><span></span><strong>Reliable operations</strong></section>
      <section class="principle section-pad">
        <p class="section-label">The operating idea</p>
        <div><h2>Keep what works.<br />Fix what doesn’t.</h2><p>The best operational system does not force a business to rebuild itself around software. It connects the work already happening, gives exceptions a place to go, and makes ownership visible.</p></div>
      </section>
      <section class="product-grid section-pad" id="products">
        ${products.map((key) => `<a class="product-card" href="${href(key)}" style="--card-accent:${sites[key].accent}"><span>${sites[key].index}</span><div><h3>${sites[key].name}</h3><p>${sites[key].title}</p></div>${arrow()}</a>`).join("")}
      </section>
      <section class="patch-band section-pad">
        <p class="kicker">Start with the pain</p><h2>When the software you need does not exist yet.</h2><p>PATCH maps the workflow, builds the missing layer, and turns repeated patterns into product evidence.</p><a class="button light" href="${href("patch")}">Explore PATCH ${arrow()}</a>
      </section>
    </main>`;
}

function productPage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  return `
    <main id="main" class="product-main">
      <section class="product-hero section-pad">
        <div class="product-title reveal"><p class="kicker">${site.category}</p><span class="product-number">${site.index} / 07</span><h1>${site.name}</h1></div>
        <div class="product-promise reveal delay-1"><h2>${site.title}</h2><p>${site.description}</p><a class="button" href="mailto:hello@articial.app?subject=${encodeURIComponent(`Talk about ${site.name}`)}">Talk about ${site.name} ${arrow()}</a></div>
        <div class="signal-panel reveal delay-2">
          <div class="signal-head"><span>${site.signalTitle}</span><i>Live logic</i></div>
          ${site.signal.map((item, index) => `<div class="signal-row"><span>${String(index + 1).padStart(2, "0")}</span><p>${item}</p><i></i></div>`).join("")}
        </div>
      </section>
      <section class="flow-section section-pad">
        <p class="section-label">How the work moves</p>
        <div class="flow-line">${site.flow.map((step, index) => `<div><span>${index + 1}</span><p>${step}</p></div>`).join("")}</div>
      </section>
      <section class="outcome-band section-pad"><p class="section-label">Designed to change</p>${site.outcomes.map((outcome) => `<h2>${outcome}</h2>`).join("")}</section>
      <section class="capability-section section-pad"><div class="capability-intro"><p class="section-label">The system</p><h2>Small enough to use.<br />Strong enough to trust.</h2></div><div class="capability-list">${capabilities}</div></section>
      <section class="fit-section section-pad"><p class="section-label">Built for</p><h2>${site.fit}</h2><a class="text-link" href="mailto:hello@articial.app?subject=${encodeURIComponent(`${site.name} fit check`)}">See if the workflow fits ${arrow()}</a></section>
      <nav class="next-product section-pad" aria-label="Next product">
        ${(() => { const next = products[(products.indexOf(siteKey) + 1) % products.length]; return `<span>Next in the family</span><a href="${href(next)}"><strong>${sites[next].name}</strong><em>${sites[next].title}</em>${arrow()}</a>`; })()}
      </nav>
    </main>`;
}

document.title = `${site.name} — ${site.title}`;
document.querySelector('meta[name="description"]').content = site.description;
document.getElementById("app").innerHTML = `${nav()}${siteKey === "articial" ? articialPage() : siteKey === "utuh" ? utuhPage() : productPage()}${footer()}`;

const header = document.querySelector(".site-header");
const productButton = document.querySelector(".nav-products");
const productMenu = document.querySelector(".product-menu");
const menuButton = document.querySelector(".menu-toggle");

function closeMenus() {
  productMenu.hidden = true;
  productButton.setAttribute("aria-expanded", "false");
  header.classList.remove("mobile-open");
  menuButton.setAttribute("aria-expanded", "false");
}

productButton.addEventListener("click", () => {
  const opening = productMenu.hidden;
  productMenu.hidden = !opening;
  productButton.setAttribute("aria-expanded", String(opening));
});

menuButton.addEventListener("click", () => {
  const opening = !header.classList.contains("mobile-open");
  header.classList.toggle("mobile-open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
});

document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenus(); });

document.querySelector(".assemble-button")?.addEventListener("click", (event) => {
  const machine = event.currentTarget.closest(".whole-machine");
  const assembled = machine.dataset.assembled === "true";
  machine.dataset.assembled = String(!assembled);
  event.currentTarget.firstChild.textContent = assembled ? "Make it whole " : "Take it apart ";
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add("visible");
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

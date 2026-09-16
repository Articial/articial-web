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
  const matchingLabel = location.hostname.toLowerCase().split(".").find((label) => sites[label]);
  return matchingLabel || "articial";
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
  const isProduct = products.includes(siteKey);
  const brandName = site.name;
  const links = siteKey === "articial"
    ? `<a href="${href("utuh")}">UTUH</a><a href="mailto:hello@articial.app?subject=Articial inquiry">Contact</a>`
    : siteKey === "utuh"
      ? `<a href="#products">Products</a><a href="#approach">Approach</a><a class="nav-cta" href="#contact">Start a conversation</a>`
      : `<a href="#how-it-works">How it works</a><a href="#system">The system</a><a href="#fit">Built for</a><a class="nav-cta" href="#contact">Talk to ${site.name}</a>`;
  return `
    <header class="site-header">
      <a class="brand ${isProduct ? "product-brand" : ""}" href="/" aria-label="${brandName} home">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>${brandName}</strong>
        ${isProduct ? `<em>by UTUH</em>` : ""}
      </a>
      <nav aria-label="Main navigation">${links}</nav>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    </header>`;
}

function footer() {
  if (siteKey === "articial") return `
    <footer id="contact">
      <div class="footer-lead"><p>Building something useful?</p><a href="mailto:hello@articial.app?subject=Articial inquiry">Let’s talk ${arrow()}</a></div>
      <div class="footer-grid compact-footer">
        <a class="brand footer-brand" href="/"><span class="brand-mark"><i></i><i></i><i></i></span><strong>ARTICIAL</strong></a>
        <p>Independent technology and product practice.<br />Jakarta, Indonesia.</p>
        <p class="fine">© ${new Date().getFullYear()} Articial.</p>
      </div>
    </footer>`;

  const isProduct = products.includes(siteKey);
  const contactSubject = encodeURIComponent(`${site.name} — website inquiry`);
  const footerLinks = isProduct
    ? `<a href="#how-it-works">How it works</a><a href="#system">The system</a><a href="#fit">Built for</a><a href="${href("utuh")}">About UTUH</a>`
    : `<a href="#approach">Approach</a><a href="#products">Products</a>${products.map((key) => `<a href="${href(key)}">${sites[key].name}</a>`).join("")}`;
  return `
    <footer id="contact">
      <div class="footer-lead">
        <p>${isProduct ? `Could ${site.name} fit your workflow?` : "Have a fragmented workflow?"}</p>
        <a href="mailto:hello@articial.app?subject=${contactSubject}">${isProduct ? "Let’s find out" : "Let’s map it"} ${arrow()}</a>
      </div>
      <div class="footer-grid">
        <a class="brand footer-brand" href="/"><span class="brand-mark"><i></i><i></i><i></i></span><strong>${site.name}</strong>${isProduct ? "<em>by UTUH</em>" : ""}</a>
        <p>${isProduct ? `${site.category}.` : "Operational software for fragmented work."}<br />Jakarta, Indonesia.</p>
        <div class="footer-links">${footerLinks}</div>
        <p class="fine">© ${new Date().getFullYear()} ${isProduct ? `${site.name} by UTUH` : "UTUH"}. Product names remain provisional until formally cleared.</p>
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
    <main id="main" class="utuh-main">
      <section class="utuh-hero-v2">
        <div class="utuh-hero-copy reveal">
          <p class="kicker">Operational software company</p>
          <h1>Software that makes<br />operations <span>whole.</span></h1>
          <p>${site.description}</p>
          <div class="hero-actions"><a class="utuh-button primary" href="#products">Explore the products ${arrow()}</a><a class="utuh-button secondary" href="#approach">How we think</a></div>
        </div>
        <div class="utuh-system-stage whole-machine reveal delay-1" data-assembled="false" aria-label="An interactive view of UTUH products connecting into one operational system">
          <div class="utuh-orbit" aria-hidden="true">
            <article class="orbit-card orbit-patch"><small>PATCH</small><strong>Gap mapped</strong><span class="mini-route"><i></i><i></i><i></i></span></article>
            <article class="orbit-card orbit-intake"><small>INTAKE</small><strong>12 drafts</strong><span>Ready to review</span></article>
            <article class="orbit-card orbit-nett"><small>NETT</small><strong>True margin</strong><span class="mini-chart"><i></i><i></i><i></i><i></i></span></article>
            <article class="orbit-card orbit-proof"><small>PROOF</small><strong>Matched</strong><span>Invoice + payment</span></article>
            <article class="orbit-card orbit-relay"><small>RELAY</small><strong>Sync healthy</strong><span class="health-dot">Live</span></article>
            <article class="orbit-card orbit-span"><small>SPAN</small><strong>Variance visible</strong><span>Before it becomes a surprise</span></article>
          </div>
          <button type="button" class="assemble-button"><span>Make it whole</span><b aria-hidden="true">↗</b></button>
        </div>
        <p class="utuh-system-note reveal delay-2"><span>● ● ● ● ●</span> Seven focused products. One operational idea.</p>
      </section>
      <section class="utuh-trust-strip" aria-label="Operational areas"><span>Commerce</span><i></i><span>Distribution</span><i></i><span>Finance</span><i></i><span>Rental</span><i></i><span>Projects</span></section>
      <section class="utuh-about section-pad" id="approach">
        <p class="section-label">The operating idea</p>
        <h2>A practical software partner for <span class="word-blue">smarter</span> operations and <span class="word-lime">more adaptive</span> businesses.</h2>
        <div class="utuh-metrics">
          <article class="metric-card metric-blue"><p>Focused products</p><strong>07</strong><span>One for each expensive operational gap we keep seeing.</span><div class="metric-chip">UTUH PRODUCT FAMILY</div></article>
          <article class="metric-card metric-paper"><p>Our commitment</p><strong>Start with the work.</strong><span>We map the real handoffs, exceptions, and ownership before shaping the software.</span><div class="metric-people"><i>01</i><i>02</i><i>03</i><em>workflow → system</em></div></article>
          <div class="metric-stack"><article class="metric-card metric-lime"><p>Shared foundation</p><strong>One operational language.</strong><span>Connected data, clear ownership, reviewable automation.</span></article><article class="metric-card metric-dark"><p>Coverage</p><strong>End to end</strong></article></div>
        </div>
      </section>
      <section class="product-grid section-pad" id="products">
        ${products.map((key) => `<a class="product-card" href="${href(key)}" style="--card-accent:${sites[key].accent}"><span>${sites[key].index}</span><div><h3>${sites[key].name}</h3><p>${sites[key].title}</p></div>${arrow()}</a>`).join("")}
      </section>
      <section class="patch-band section-pad">
        <p class="kicker">Start with the pain</p><h2>When the software you need does not exist yet.</h2><p>PATCH maps the workflow, builds the missing layer, and turns repeated patterns into product evidence.</p><a class="button light" href="${href("patch")}">Explore PATCH ${arrow()}</a>
      </section>
    </main>`;
}

function patchPage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  return `
    <main id="main" class="patch-main">
      <section class="patch-hero-v2">
        <img src="/assets/patch-hero.webp" alt="An operations leader working with documents and digital systems" />
        <div class="patch-hero-shade"></div>
        <div class="patch-tags" aria-hidden="true">
          <span class="patch-tag tag-one"><i></i>Manual handoffs</span>
          <span class="patch-tag tag-two"><i></i>Spreadsheet debt</span>
          <span class="patch-tag tag-three"><i></i>Missing ownership</span>
          <span class="patch-tag tag-four"><i></i>Exceptions everywhere</span>
        </div>
        <div class="patch-hero-copy reveal">
          <p class="kicker">Custom operational systems</p>
          <h1>Map the gap.<br />Build what’s missing.</h1>
          <p>${site.description}</p>
          <div class="patch-actions"><a class="patch-button solid" href="mailto:hello@articial.app?subject=Map%20a%20workflow%20with%20PATCH">Bring us a workflow ${arrow()}</a><a class="patch-button ghost" href="#how-it-works">See how PATCH works</a></div>
        </div>
      </section>

      <section class="patch-partnership" id="system">
        <div class="patch-partnership-copy">
          <p class="section-label">The PATCH partnership</p>
          <h2>The important work is already happening. It just needs a system.</h2>
          <p>We work alongside operators to understand the real process, reveal where information and ownership break down, and build the missing layer around the tools worth keeping.</p>
        </div>
        <div class="patch-methods">
          <article><strong>01</strong><h3>Map the work</h3><p>Follow the handoffs, decisions, exceptions, and evidence as they really happen.</p></article>
          <article><strong>02</strong><h3>Build the layer</h3><p>Connect the useful tools and give the missing operational logic a dependable home.</p></article>
          <article><strong>03</strong><h3>Measure the change</h3><p>Track speed, errors, ownership, and exceptions so improvement becomes visible.</p></article>
        </div>
        <div class="patch-system-strip" aria-label="Systems PATCH commonly connects"><span>Messages</span><span>Spreadsheets</span><span>Documents</span><span>ERP</span><span>People</span></div>
      </section>

      <section class="patch-about section-pad">
        <div class="patch-about-copy">
          <p class="section-label">About PATCH</p>
          <h2>Make invisible work visible—and fragile work reliable.</h2>
          <p>PATCH is for the process that matters too much to remain a workaround, but is too specific for off-the-shelf software.</p>
          <a class="patch-button dark" href="#fit">Is PATCH right for us? ${arrow()}</a>
        </div>
        <div class="patch-health-card reveal">
          <div class="health-card-head"><span>Workflow health</span><i>Live view</i></div>
          <strong>Clear</strong>
          <div class="health-track"><i></i></div>
          <p>Every handoff has an owner.<br />Every exception has a place to go.</p>
          <div class="health-pills"><span>Mapped</span><span>Connected</span><span>Reviewable</span><span>Measurable</span></div>
        </div>
      </section>

      <section class="patch-process section-pad" id="how-it-works">
        <p class="section-label">How the work moves</p>
        <div>${site.flow.map((step, index) => `<article><span>0${index + 1}</span><h3>${step}</h3></article>`).join("")}</div>
      </section>

      <section class="patch-capabilities section-pad">
        <div><p class="section-label">What we build</p><h2>Small enough to use.<br />Strong enough to trust.</h2></div>
        <div class="patch-capability-list">${capabilities}</div>
      </section>

      <section class="patch-fit section-pad" id="fit">
        <p class="section-label">Built for</p>
        <h2>${site.fit}</h2>
        <a class="patch-button solid" href="mailto:hello@articial.app?subject=PATCH%20fit%20check">Talk through the workflow ${arrow()}</a>
      </section>
    </main>`;
}

function rovePage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  return `
    <main id="main" class="rove-main">
      <section class="rove-hero-v2">
        <img src="/assets/rove-hero.webp" alt="A rental depot operator overseeing organized equipment ready for dispatch" />
        <div class="rove-hero-shade"></div>
        <div class="rove-hero-copy reveal">
          <div class="rove-pills"><span>Equipment</span><span>Vehicles</span><span>Production gear</span></div>
          <h1>Every asset ready.<br />Every movement <em>accounted for.</em></h1>
          <p>${site.description}</p>
          <div class="rove-actions"><a class="rove-button lime" href="#lifecycle">See the lifecycle ${arrow()}</a><a class="rove-button text" href="#fit">Is ROVE for us?</a></div>
        </div>
        <aside class="rove-live-card reveal delay-1"><p>Asset 0247</p><strong>Ready now</strong><span><i></i> Inspected · complete</span></aside>
      </section>

      <section class="rove-status-strip" aria-label="Rental asset lifecycle"><span><i></i>Available</span><span><i></i>Reserved</span><span><i></i>Checked out</span><span><i></i>Returned</span><span><i></i>Inspected</span></section>

      <section class="rove-about section-pad" id="system">
        <figure><img src="/assets/rove-ready.webp" alt="Organized rental equipment and cases ready for booking" /><figcaption>Ready means checked, complete, and findable.</figcaption></figure>
        <div><p class="section-label">About ROVE</p><h2>Run the whole asset journey—not just the booking calendar.</h2><p>ROVE gives rental operators one reliable view of availability, reservations, custody, due dates, returns, condition, and readiness.</p><a class="rove-button dark" href="#lifecycle">Follow an asset ${arrow()}</a></div>
      </section>

      <section class="rove-services section-pad">
        <div class="rove-section-head"><div><p class="section-label">The operating system</p><h2>Everything your fleet needs.</h2></div><p>One connected lifecycle, with every handoff visible.</p></div>
        <div class="rove-service-grid">
          <article class="service-photo ready"><span>01 · Availability</span><h3>Know what is actually ready.</h3><p>Location, condition, completeness, and the next commitment in one view.</p></article>
          <article class="service-solid"><span>02 · Reservation</span><h3>Promise with confidence.</h3><p>Prevent conflicts and hold the exact assets required for the job.</p><div class="mini-calendar"><b>12</b><i></i><i></i><i></i><i></i><i></i><i></i></div></article>
          <article class="service-dark"><span>03 · Custody</span><h3>Always know who has it.</h3><p>Checkout, deposit, due date, reminders, and responsibility stay connected.</p><div class="custody-line"><i></i><span>Depot</span><b>→</b><i></i><span>Customer</span></div></article>
          <article class="service-photo inspect"><span>04 · Return</span><h3>Inspect before “available.”</h3><p>Capture condition, missing parts, damage, and the work needed next.</p></article>
        </div>
      </section>

      <section class="rove-process section-pad" id="lifecycle">
        <div class="rove-section-head"><div><p class="section-label">The lifecycle</p><h2>From shelf to customer—and safely back again.</h2></div><p>No asset disappears between statuses.</p></div>
        <div class="rove-process-grid">
          <article class="process-tall"><span>Step 01</span><h3>Confirm availability</h3><p>See the exact item, location, condition, and commitments before promising it.</p><img src="/assets/rove-ready.webp" alt="Rental equipment arranged on ready shelves" /></article>
          <article><span>Step 02</span><h3>Reserve the asset</h3><p>Assign dates, customer, price, deposit, and preparation requirements.</p><div class="process-radar"><i></i><i></i><i></i></div></article>
          <article><span>Step 03</span><h3>Check out with custody clear</h3><p>Record who received what, when it is due, and what went with it.</p><div class="process-ticket">OUT <b>0247</b></div></article>
          <article class="process-wide"><div><span>Step 04</span><h3>Return, inspect, and make ready</h3><p>Do not release the asset until condition and completeness are verified.</p></div><img src="/assets/rove-inspection.webp" alt="An operator inspecting a returned rental equipment case" /></article>
        </div>
      </section>

      <section class="rove-capabilities section-pad" id="how-it-works">
        <div><p class="section-label">Built into ROVE</p><h2>Operational truth at asset level.</h2></div>
        <div class="rove-capability-list">${capabilities}</div>
      </section>

      <section class="rove-fit section-pad" id="fit">
        <p class="section-label">Built for</p><h2>${site.fit}</h2>
        <a class="rove-button dark" href="mailto:hello@articial.app?subject=ROVE%20workflow%20fit">Talk through your fleet ${arrow()}</a>
      </section>
    </main>`;
}

function proofPage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const evidence = [
    ["Purchase order", "Matched", "complete"],
    ["Supplier invoice", "Matched", "complete"],
    ["Tax document", "Review", "review"],
    ["Delivery note", "Missing", "missing"],
    ["Payment proof", "Matched", "complete"],
  ];
  return `
    <main id="main" class="proof-main">
      <section class="proof-hero-v2">
        <img src="/assets/proof-hero.webp" alt="An Indonesian finance and procurement team standing together in Jakarta" />
        <div class="proof-hero-shade"></div>
        <div class="proof-hero-copy reveal">
          <p class="kicker">Transaction document operations</p>
          <h1>Every transaction clear.<br /><em>Every document accounted for.</em></h1>
          <p>${site.description}</p>
          <a class="proof-button dark" href="#matching">See how it matches ${arrow()}</a>
        </div>
        <div class="proof-hero-status reveal delay-1" aria-label="Transaction evidence status"><span><i></i> Matched</span><span><i></i> Needs review</span><span><i></i> Missing</span></div>
      </section>

      <section class="proof-intro section-pad" id="system">
        <div class="proof-intro-copy"><p class="section-label">Welcome to PROOF</p><h2>Take control of transaction evidence—and make every audit trail reliable.</h2><p>Bring records and supporting documents into one reviewable package. PROOF shows what matches, what is uncertain, and exactly what is still missing.</p></div>
        <figure><img src="/assets/proof-review.webp" alt="Finance operators reviewing a transaction package together" /><figcaption><span>Human-in-the-loop</span> Ambiguity stays visible until someone resolves it.</figcaption></figure>
      </section>

      <section class="proof-features section-pad" id="how-it-works">
        <div class="proof-section-head"><p class="section-label">Made for finance</p><h2>Clear, complete, and reviewable.</h2></div>
        <div class="proof-feature-grid">
          <article class="proof-feature dark"><span>01 · Match</span><div class="proof-match-lines"><i></i><i></i><i></i></div><h3>Build the transaction package.</h3><p>Connect each record to the evidence that proves it.</p></article>
          <article class="proof-feature photo"><img src="/assets/proof-evidence.webp" alt="A transaction evidence package being organized" /><div><span>02 · Detect</span><h3>Find what is missing.</h3><p>See gaps before month-end or an audit makes them urgent.</p></div></article>
          <article class="proof-feature blue"><span>03 · Resolve</span><div class="proof-confidence"><b>86%</b><small>match confidence</small></div><h3>Keep judgment where it belongs.</h3><p>Route low-confidence matches to a person, not a black box.</p></article>
        </div>
      </section>

      <section class="proof-matrix section-pad" id="matching">
        <div class="proof-section-head"><p class="section-label">One transaction</p><h2>Every required document, in one place.</h2></div>
        <div class="proof-matrix-card">
          <div class="proof-matrix-top"><div><span>Transaction package</span><strong>TRX · 0284</strong></div><b>3 / 5 complete</b></div>
          <div class="proof-matrix-rows">${evidence.map(([name, status, state], index) => `<article><span>0${index + 1}</span><strong>${name}</strong><em class="${state}"><i></i>${status}</em><button type="button" aria-label="Open ${name}">↗</button></article>`).join("")}</div>
          <div class="proof-matrix-foot"><p>One visible exception is easier to resolve than five disconnected folders.</p><a class="proof-button dark" href="mailto:hello@articial.app?subject=PROOF%20transaction%20workflow">Map your evidence flow ${arrow()}</a></div>
        </div>
      </section>

      <section class="proof-packages section-pad">
        <div class="proof-section-head"><p class="section-label">At a glance</p><h2>Know which packages can move forward.</h2></div>
        <div class="proof-package-grid">
          <article class="complete"><div><span>Ready</span><b>TRX · 0279</b></div><h3>Complete package</h3><p>All required evidence matched and ready for review.</p><em>5 / 5</em></article>
          <article class="review"><div><span>Check</span><b>TRX · 0284</b></div><h3>Needs review</h3><p>A tax document is present, but the match needs a decision.</p><em>4 / 5</em></article>
          <article class="missing"><div><span>Action</span><b>TRX · 0291</b></div><h3>Missing evidence</h3><p>The delivery note has not been attached to the transaction.</p><em>3 / 5</em></article>
        </div>
      </section>

      <section class="proof-capabilities section-pad">
        <div><p class="section-label">Built into PROOF</p><h2>Evidence operations without the guesswork.</h2></div>
        <div class="proof-capability-list">${capabilities}</div>
      </section>

      <section class="proof-fit section-pad" id="fit">
        <p class="section-label">Built for</p><h2>${site.fit}</h2>
        <a class="proof-button light" href="mailto:hello@articial.app?subject=PROOF%20workflow%20fit">Talk through your evidence flow ${arrow()}</a>
      </section>
    </main>`;
}

function nettPage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  return `
    <main id="main" class="nett-main">
      <div class="nett-shell">
        <section class="nett-hero-v2">
          <div class="nett-hero-copy reveal">
            <p class="kicker">Commerce profitability intelligence</p>
            <h1>Your next best profit <span>decision</span><br /><em>starts here.</em></h1>
            <p>NETT connects revenue to the costs that actually shape margin—so every pricing, campaign, and channel decision starts with the whole picture.</p>
            <a class="nett-button yellow" href="#system">See the profit system ${arrow()}</a>
          </div>
          <div class="nett-hero-grid">
            <article class="nett-strategy reveal delay-1">
              <p class="section-label">The operating principle</p>
              <h2>Revenue is loud.<br /><span>Margin is truth.</span></h2>
              <p>Bring marketplace fees, COGS, logistics, ads, affiliates, packaging, and returns into the same decision.</p>
              <a class="nett-button white" href="#how-it-works">How NETT works ${arrow()}</a>
              <div class="nett-sample"><div><span>Sample order</span><strong>Rp100k sale</strong></div><div><span>Contribution</span><strong>Rp16k NETT</strong></div></div>
            </article>
            <figure class="nett-portrait reveal delay-2">
              <img src="/assets/nett-operator.webp" alt="An Indonesian commerce operations leader" />
              <figcaption><span><b>16%</b> contribution margin</span><span><b>−18k</b> ads + affiliate</span></figcaption>
            </figure>
          </div>
        </section>

        <section class="nett-source-strip" aria-label="Commerce data sources"><span>Marketplace</span><i></i><span>Ads</span><i></i><span>Affiliate</span><i></i><span>Logistics</span><i></i><span>Returns</span><i></i><span>COGS</span></section>

        <section class="nett-principles section-pad" id="system">
          <div class="nett-section-head"><p class="section-label">The NETT philosophy</p><h2>Revenue visible.<br /><span>Profit understood.</span></h2><p>Not another vanity dashboard. A decision system built around the economics of each order.</p></div>
          <div class="nett-principle-grid">
            <article><span>01</span><h3>Map every cost</h3><div class="nett-icon magnify"><i></i></div><p>Put direct and hidden costs against the sale they belong to.</p></article>
            <article><span>02</span><h3>See order economics</h3><div class="nett-icon nodes"><i></i><i></i><i></i><i></i></div><p>Compare contribution by SKU, channel, campaign, and order.</p></article>
            <article><span>03</span><h3>Model the decision</h3><div class="nett-icon bars"><i></i><i></i><i></i></div><p>Test price, commission, ad spend, and cost assumptions before acting.</p></article>
          </div>
        </section>

        <section class="nett-economics section-pad" id="how-it-works">
          <div class="nett-economics-head"><div><p class="section-label">One sale, fully explained</p><h2>From gross revenue to what remains.</h2></div><p>A clean contribution bridge makes leakage visible and decisions specific.</p></div>
          <div class="nett-waterfall" aria-label="Example contribution margin calculation">
            <article class="positive"><span>Revenue</span><strong>100,000</strong><i style="--h:100%"></i></article>
            <article><span>COGS</span><strong>−41,000</strong><i style="--h:41%"></i></article>
            <article><span>Fees + logistics</span><strong>−25,000</strong><i style="--h:25%"></i></article>
            <article><span>Ads + affiliate</span><strong>−18,000</strong><i style="--h:18%"></i></article>
            <article class="result"><span>NETT</span><strong>16,000</strong><i style="--h:16%"></i></article>
          </div>
          <p class="nett-example-note">Illustrative order economics—not a customer performance claim.</p>
        </section>

        <section class="nett-capabilities section-pad">
          <div><p class="section-label">Built into NETT</p><h2>Growth-focused profit intelligence.</h2></div>
          <div class="nett-capability-list">${capabilities}</div>
        </section>

        <section class="nett-fit section-pad" id="fit">
          <p class="section-label">Built for</p><h2>${site.fit}</h2>
          <a class="nett-button yellow" href="mailto:hello@articial.app?subject=NETT%20profitability%20fit">Talk through your margins ${arrow()}</a>
        </section>
      </div>
    </main>`;
}

function intakePage() {
  const capabilities = site.capabilities.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  return `
    <main id="main" class="intake-main">
      <section class="intake-hero-v2">
        <div class="intake-hero-copy reveal">
          <p class="kicker">Conversational order infrastructure</p>
          <h1>Orders arrive messy.<br /><span>INTAKE makes them ready.</span></h1>
          <p>Turn customer messages, voice notes, photos, PDFs, and forms into structured draft orders an operator can verify.</p>
          <div class="intake-actions"><a class="intake-button navy" href="#system">See the order flow ${arrow()}</a><a class="intake-button clear" href="#fit">Built for distributors</a></div>
        </div>
        <div class="intake-device-stage reveal delay-1">
          <figure><img src="/assets/intake-phone.webp" alt="A hand holding a smartphone against a bright blue sky" /></figure>
          <div class="intake-screen-ui" aria-label="Example structured order draft">
            <span>Draft order</span><strong>PT Sumber Jaya</strong>
            <div><i></i><p><b>4 dus</b> · SKU matched</p></div>
            <div><i></i><p><b>2 dus</b> · needs review</p></div>
            <button type="button">Review draft</button>
          </div>
          <aside class="intake-float chat"><span>Customer message</span><p>“Kirim 4 dus yang biasa, tambah 2 yang besar.”</p></aside>
          <aside class="intake-float status"><span>Order status</span><strong>Draft ready</strong><p><i></i> 1 ambiguity flagged</p></aside>
        </div>
      </section>

      <section class="intake-statement section-pad"><p class="section-label">The idea</p><h2>Every order starts somewhere.<br /><span>INTAKE structures it.</span></h2></section>

      <section class="intake-system section-pad" id="system">
        <div class="intake-system-copy"><p class="section-label">Built for the real order desk</p><h2>Keep the conversation. Remove the retyping.</h2><p>INTAKE sits between familiar customer channels and the systems your team already uses. It prepares a structured draft, shows uncertainty, and waits for a person to confirm.</p></div>
        <div class="intake-order-card">
          <header><div><span>Incoming order</span><strong>ORD · DRAFT 0284</strong></div><em>Needs review</em></header>
          <div class="intake-customer"><span>Customer</span><strong>PT Sumber Jaya</strong><small>Matched from customer master</small></div>
          <div class="intake-lines"><article><span>01</span><div><strong>Mineral Water 600ml</strong><small>SKU · MWA-600-24</small></div><b>4 dus</b><em>Matched</em></article><article><span>02</span><div><strong>“Yang besar”</strong><small>2 possible catalog matches</small></div><b>2 dus</b><em class="review">Review</em></article></div>
          <footer><span>Delivery · Thursday</span><button type="button">Confirm order ${arrow()}</button></footer>
        </div>
      </section>

      <section class="intake-inputs section-pad">
        <div class="intake-section-head"><p class="section-label">Unstructured in</p><h2>Let customers order the way they already do.</h2><p>Start with the channels and files already present in the workflow.</p></div>
        <div class="intake-input-grid">
          <article><span>01</span><div class="input-glyph message">•••</div><h3>Text message</h3><p>Paste or receive repeat orders written in the customer’s own shorthand.</p></article>
          <article><span>02</span><div class="input-glyph voice"><i></i><i></i><i></i><i></i><i></i></div><h3>Voice note</h3><p>Turn spoken quantities, product names, and delivery notes into reviewable fields.</p></article>
          <article><span>03</span><div class="input-glyph document">PDF</div><h3>Photo or PDF</h3><p>Extract order lines without asking the admin to retype the document.</p></article>
          <article><span>04</span><div class="input-glyph form"><i></i><i></i><i></i></div><h3>Form or sheet</h3><p>Bring structured inputs into the same confirmation queue.</p></article>
        </div>
      </section>

      <section class="intake-flow section-pad" id="how-it-works">
        <div class="intake-section-head"><p class="section-label">The workflow</p><h2>From conversation to confirmed order.</h2></div>
        <div class="intake-flow-line">${site.flow.map((step, index) => `<article><span>0${index + 1}</span><h3>${step}</h3><i></i></article>`).join("")}</div>
      </section>

      <section class="intake-review section-pad">
        <div><p class="section-label">Human confirmation</p><h2>Ambiguity stays visible.</h2><p>When a product, quantity, price, or delivery detail is uncertain, INTAKE flags the exact field instead of silently guessing.</p><a class="intake-button navy" href="#fit">See who it fits ${arrow()}</a></div>
        <div class="intake-review-panel"><span>Review queue</span><strong>“Tambah 2 yang besar”</strong><p>Which catalog item did the customer mean?</p><button type="button"><i></i> Mineral Water 1.5L · 12</button><button type="button"><i></i> Mineral Water 1.5L · 6</button><small>Operator confirmation required</small></div>
      </section>

      <section class="intake-capabilities section-pad">
        <div><p class="section-label">Built into INTAKE</p><h2>Structured enough to move forward.</h2></div>
        <div class="intake-capability-list">${capabilities}</div>
      </section>

      <section class="intake-fit section-pad" id="fit"><p class="section-label">Built for</p><h2>${site.fit}</h2><a class="intake-button white" href="mailto:hello@articial.app?subject=INTAKE%20order%20workflow">Talk through your order desk ${arrow()}</a></section>
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
      <section class="flow-section section-pad" id="how-it-works">
        <p class="section-label">How the work moves</p>
        <div class="flow-line">${site.flow.map((step, index) => `<div><span>${index + 1}</span><p>${step}</p></div>`).join("")}</div>
      </section>
      <section class="outcome-band section-pad"><p class="section-label">Designed to change</p>${site.outcomes.map((outcome) => `<h2>${outcome}</h2>`).join("")}</section>
      <section class="capability-section section-pad" id="system"><div class="capability-intro"><p class="section-label">The system</p><h2>Small enough to use.<br />Strong enough to trust.</h2></div><div class="capability-list">${capabilities}</div></section>
      <section class="fit-section section-pad" id="fit"><p class="section-label">Built for</p><h2>${site.fit}</h2><a class="text-link" href="#contact">See if the workflow fits ${arrow()}</a></section>
      <section class="product-origin section-pad"><span>${site.name}</span><div><p>A focused operational product</p><a href="${href("utuh")}">by UTUH ${arrow()}</a></div></section>
    </main>`;
}

document.title = `${site.name} — ${site.title}`;
document.querySelector('meta[name="description"]').content = site.description;
document.getElementById("app").innerHTML = `${nav()}${siteKey === "articial" ? articialPage() : siteKey === "utuh" ? utuhPage() : siteKey === "patch" ? patchPage() : siteKey === "rove" ? rovePage() : siteKey === "proof" ? proofPage() : siteKey === "nett" ? nettPage() : siteKey === "intake" ? intakePage() : productPage()}${footer()}`;

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");

function closeMenus() {
  header.classList.remove("mobile-open");
  menuButton.setAttribute("aria-expanded", "false");
}

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
  event.currentTarget.querySelector("span").textContent = assembled ? "Make it whole" : "Take it apart";
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add("visible");
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

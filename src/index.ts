const siteMeta: Record<string, { title: string; description: string }> = {
  articial: {
    title: "Articial — Ideas, software, systems",
    description: "An independent technology and product practice building clearer, more capable systems.",
  },
  utuh: {
    title: "UTUH — Software for work, made whole",
    description: "Operational software for the parts of work that remain fragmented, manual, or unreliable.",
  },
  patch: {
    title: "PATCH by UTUH — Software for the gaps",
    description: "Custom operational systems for workflows that off-the-shelf software cannot solve.",
  },
  intake: {
    title: "INTAKE by UTUH — Unstructured in. Orders out.",
    description: "Turn conversations, documents, and forms into structured, reviewable orders.",
  },
  nett: {
    title: "NETT by UTUH — See what you actually make",
    description: "Commerce profitability intelligence for every order, SKU, channel, and campaign.",
  },
  proof: {
    title: "PROOF by UTUH — Every transaction accounted for",
    description: "Match transaction evidence, find missing documents, and prepare a reliable audit trail.",
  },
  relay: {
    title: "RELAY by UTUH — Data where it needs to go",
    description: "Normalize and move commerce data between the systems your business already uses.",
  },
  rove: {
    title: "ROVE by UTUH — Assets in motion, operations in control",
    description: "Run the full rental asset lifecycle from availability to return and inspection.",
  },
  span: {
    title: "SPAN by UTUH — From budget to completion",
    description: "Connect project budgets, commitments, payments, documents, progress, and variance.",
  },
};

function siteFromHost(hostname: string): string {
  const subdomain = hostname.toLowerCase().split(".")[0];
  return siteMeta[subdomain] ? subdomain : "articial";
}

class TextHandler implements HTMLRewriterElementContentHandlers {
  constructor(private readonly value: string) {}
  element(element: Element): void {
    element.setInnerContent(this.value);
  }
}

class AttributeHandler implements HTMLRewriterElementContentHandlers {
  constructor(
    private readonly attribute: string,
    private readonly value: string,
  ) {}
  element(element: Element): void {
    element.setAttribute(this.attribute, this.value);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("text/html")) return response;

    const site = siteFromHost(url.hostname);
    const meta = siteMeta[site];
    const canonical = `https://${site === "articial" ? "articial.app" : `${site}.articial.app`}${url.pathname}`;

    return new HTMLRewriter()
      .on("title", new TextHandler(meta.title))
      .on('meta[name="description"]', new AttributeHandler("content", meta.description))
      .on('meta[property="og:title"]', new AttributeHandler("content", meta.title))
      .on('meta[property="og:description"]', new AttributeHandler("content", meta.description))
      .on('meta[property="og:url"]', new AttributeHandler("content", canonical))
      .on('link[rel="canonical"]', new AttributeHandler("href", canonical))
      .on("body", new AttributeHandler("data-site", site))
      .transform(response);
  },
} satisfies ExportedHandler<Env>;

import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

type PageKey =
  | "home"
  | "layanan"
  | "paketHarga"
  | "tentangKami"
  | "kontak"
  | "insight"
  | "faq";

type PageConfig = {
  file: string;
  route: string;
  title: string;
  description: string;
};

const ERP_LOGIN_URL =
  process.env.NEXT_PUBLIC_ERP_LOGIN_URL ??
  "https://valuintcorp-erp.vercel.app/login";

const pages: Record<PageKey, PageConfig> = {
  home: {
    file: "home.html",
    route: "/",
    title: "Valuintcorp",
    description:
      "Konsultan dan sistem operasional untuk akuntansi, pajak, payroll, dan pertumbuhan UMKM.",
  },
  layanan: {
    file: "layanan.html",
    route: "/layanan",
    title: "Layanan",
    description:
      "Layanan Valuintcorp untuk pembukuan, pajak, payroll, advisory, dan implementasi sistem bisnis.",
  },
  paketHarga: {
    file: "paket-harga.html",
    route: "/paket-harga",
    title: "Paket Harga",
    description:
      "Pilih paket layanan Valuintcorp yang sesuai dengan kebutuhan dan tahap pertumbuhan bisnis.",
  },
  tentangKami: {
    file: "tentang-kami.html",
    route: "/tentang-kami",
    title: "Tentang Kami",
    description:
      "Kenali Valuintcorp dan pendekatan kami dalam membantu bisnis menjadi lebih rapi dan terukur.",
  },
  kontak: {
    file: "kontak.html",
    route: "/kontak",
    title: "Kontak",
    description:
      "Hubungi Valuintcorp untuk konsultasi akuntansi, pajak, payroll, atau implementasi ERP.",
  },
  insight: {
    file: "insight.html",
    route: "/insight",
    title: "Insight",
    description:
      "Artikel dan insight Valuintcorp tentang keuangan, pajak, operasional, dan pertumbuhan bisnis.",
  },
  faq: {
    file: "faq.html",
    route: "/faq",
    title: "FAQ",
    description:
      "Pertanyaan umum tentang layanan, proses kerja, dan dukungan Valuintcorp.",
  },
};

export function metadataFor(pageKey: PageKey): Metadata {
  const page = pages[pageKey];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.route,
    },
  };
}

export function MarketingPage({ pageKey }: { pageKey: PageKey }) {
  const payload = readPage(pageKey);

  return (
    <div
      className={payload.bodyClassName}
      dangerouslySetInnerHTML={{ __html: payload.html }}
    />
  );
}

function readPage(pageKey: PageKey) {
  const page = pages[pageKey];
  const source = fs.readFileSync(
    path.join(process.cwd(), "content", page.file),
    "utf8",
  );
  const body = extractBody(source);

  return {
    bodyClassName:
      body.className ||
      "bg-background text-on-surface font-body-md antialiased",
    html: normalizeHtml(body.html),
  };
}

function extractBody(source: string) {
  const match = source.match(/<body([^>]*)>([\s\S]*)<\/body>/i);

  if (!match) {
    return {
      className: "",
      html: source,
    };
  }

  const attrs = match[1] ?? "";
  const classMatch = attrs.match(/class=(["'])(.*?)\1/i);

  return {
    className: classMatch?.[2] ?? "",
    html: match[2] ?? "",
  };
}

function normalizeHtml(html: string) {
  return html
    .replace(
      /<script\b[^>]*src=(["'])(?:\.\.\/)?assets\/site\.js\1[^>]*><\/script>/gi,
      "",
    )
    .replaceAll("http://localhost:3000/login", ERP_LOGIN_URL)
    .replaceAll("https://valuintcorp.vercel.app/login", ERP_LOGIN_URL)
    .replaceAll("Â©", "&copy;")
    .replace(/(<a\b[^>]*?)href=(["'])#\2/gi, replacePlaceholderHref);
}

function replacePlaceholderHref(
  match: string,
  prefix: string,
  quote: string,
  offset: number,
  fullHtml: string,
) {
  const anchorEnd = fullHtml.indexOf("</a>", offset);
  const anchorHtml =
    anchorEnd === -1 ? match : fullHtml.slice(offset, anchorEnd + 4);
  const anchorText = anchorHtml
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  return `${prefix}href=${quote}${routeForAnchor(anchorText)}${quote}`;
}

function routeForAnchor(anchorText: string) {
  if (
    anchorText.includes("valuintcorp") ||
    anchorText.includes("home") ||
    anchorText.includes("beranda")
  ) {
    return "/";
  }

  if (anchorText.includes("layanan")) {
    return "/layanan";
  }

  if (anchorText.includes("harga") || anchorText.includes("paket")) {
    return "/paket-harga";
  }

  if (anchorText.includes("tentang")) {
    return "/tentang-kami";
  }

  if (
    anchorText.includes("insight") ||
    anchorText.includes("artikel") ||
    anchorText.includes("blog")
  ) {
    return "/insight";
  }

  if (anchorText.includes("faq")) {
    return "/faq";
  }

  return "/kontak";
}

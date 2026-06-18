import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";

type LegalHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type LegalSection = {
  id: string;
  title: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  badge: string;
  title: string;
  description: string;
  effectiveDate: string;
  version: string;
  highlights: LegalHighlight[];
  sections: LegalSection[];
  relatedLink: {
    href: string;
    label: string;
  };
};

export function LegalPage({
  badge,
  title,
  description,
  effectiveDate,
  version,
  highlights,
  sections,
  relatedLink,
}: LegalPageProps) {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-outline-variant/30 bg-surface-container-low">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,108,73,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary-container px-4 py-2 text-sm font-bold text-on-secondary-container">
              {badge}
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-on-surface md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold text-on-surface shadow-sm">
                <CalendarDays className="text-secondary" size={18} />
                Berlaku sejak {effectiveDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold text-on-surface shadow-sm">
                <BookOpen className="text-secondary" size={18} />
                Versi {version}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3 md:px-6 md:py-14">
        {highlights.map((item) => (
          <div
            className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-lg shadow-slate-200/40"
            key={item.title}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-container text-secondary">
              <item.icon size={24} />
            </div>
            <h2 className="text-lg font-bold text-on-surface">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-24 md:px-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-lg shadow-slate-200/40">
            <h2 className="text-sm font-bold uppercase tracking-wider text-on-surface">
              Daftar Isi
            </h2>
            <nav className="mt-5 grid gap-2">
              {sections.map((section) => (
                <Link
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-secondary"
                  href={`#${section.id}`}
                  key={section.id}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
            <Link
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:gap-3 transition-all"
              href={relatedLink.href}
            >
              {relatedLink.label}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>

        <div className="grid gap-5">
          {sections.map((section, index) => (
            <article
              className="scroll-mt-28 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-lg shadow-slate-200/40 md:p-8"
              id={section.id}
              key={section.id}
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                  {index + 1}
                </span>
                {section.eyebrow ? (
                  <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary-container">
                    {section.eyebrow}
                  </span>
                ) : null}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  className="mt-5 text-base leading-relaxed text-on-surface-variant"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      className="flex gap-3 text-base leading-relaxed text-on-surface-variant"
                      key={bullet}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

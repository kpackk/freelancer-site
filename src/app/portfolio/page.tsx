import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portfolio from "@/../content/data/portfolio.json";

export const metadata: Metadata = {
  title: "Портфолио проектов",
  description:
    "Выполненные проекты: espaniero.ru, assoro.ru, exactcarbon.ru, danila-master.ru. Сайты, интернет-магазины, LMS-платформы.",
  openGraph: {
    title: "Портфолио проектов",
    description: "Сайты, интернет-магазины, LMS-платформы. Проекты Ruslan WEB.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/portfolio" },
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Портфолио проектов — Ruslan WEB",
  description: "Выполненные проекты: сайты, интернет-магазины, LMS-платформы.",
  numberOfItems: portfolio.length,
  itemListElement: portfolio.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      url: `${BASE_URL}/portfolio/${p.slug}`,
      description: p.description,
      image: `${BASE_URL}/images/portfolio-${p.slug}-website.jpg`,
      creator: { "@id": `${BASE_URL}/#person` },
      keywords: p.technologies.join(", "),
    },
  })),
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <h1 className="text-3xl font-bold tracking-tight">Портфолио</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Избранные проекты — сайты, интернет-магазины и веб-платформы.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {portfolio.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group overflow-hidden rounded-xl border border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={`/images/portfolio-${p.slug}-website.jpg`}
                alt={p.imageAlt ?? p.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold group-hover:underline">
                  {p.title}
                </h2>
                {p.featured && (
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import portfolio from "@/../content/data/portfolio.json";

export const metadata: Metadata = {
  title: "Портфолио проектов",
  description:
    "Выполненные проекты: espaniero.ru, assoro.ru, exactcarbon.ru, danila-master.ru. Сайты, интернет-магазины, LMS-платформы.",
  openGraph: {
    title: "Портфолио проектов",
    description: "Сайты, интернет-магазины, LMS-платформы. Проекты Ruslan WEB.",
  },
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Портфолио</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Избранные проекты — сайты, интернет-магазины и веб-платформы.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {portfolio.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
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
          </Link>
        ))}
      </div>
    </section>
  );
}

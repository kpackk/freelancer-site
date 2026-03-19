import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portfolio from "@/../content/data/portfolio.json";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  const title = project?.title ? `${project.title} — кейс` : "Проект";
  const description = project?.description ?? "Детали проекта.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: `/images/portfolio-${slug}-website.jpg`, width: 1200, height: 630 }],
    },
    twitter: { title, description, card: "summary_large_image", images: [`/images/portfolio-${slug}-website.jpg`] },
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Проект не найден</h1>
        <Link href="/portfolio" className="mt-4 inline-block text-sm underline">
          &larr; Вернуться к портфолио
        </Link>
      </section>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Портфолио", item: `${BASE_URL}/portfolio` },
      { "@type": "ListItem", position: 3, name: project.title },
    ],
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.title} — кейс`,
    description: project.description,
    image: `${BASE_URL}/images/portfolio-${slug}-website.jpg`,
    url: `${BASE_URL}/portfolio/${slug}`,
    author: { "@id": `${BASE_URL}/#person` },
    publisher: { "@id": `${BASE_URL}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/portfolio/${slug}`,
    },
    about: {
      "@type": "CreativeWork",
      name: project.title,
      url: project.url,
      description: project.description,
      creator: { "@id": `${BASE_URL}/#person` },
      keywords: (project.fullTechnologies ?? project.technologies).join(", "),
    },
    inLanguage: "ru-RU",
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      {/* Breadcrumb nav */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">Главная</Link>
        <span>/</span>
        <Link href="/portfolio" className="hover:text-zinc-900 dark:hover:text-zinc-100">Портфолио</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">{project.title}</span>
      </nav>

      {/* Hero */}
      <header className="mt-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {project.category === "ecommerce" ? "E-commerce" : "Веб-сайт"}
          </span>
          {project.featured && (
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
              Featured
            </span>
          )}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-lg text-zinc-600 leading-relaxed dark:text-zinc-400">
          {project.description}
        </p>
      </header>

      {/* Image */}
      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
        <Image
          src={`/images/portfolio-${project.slug}-website.jpg`}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </div>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {(project.fullTechnologies ?? project.technologies).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Case Study Body */}
      <div className="mt-12 space-y-10">
        {/* Client */}
        {project.client && (
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">1</span>
              Клиент
            </h2>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              {project.client}
            </p>
          </section>
        )}

        {/* Challenge */}
        {project.challenge && (
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">2</span>
              Задача
            </h2>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              {project.challenge}
            </p>
            {project.requirements && project.requirements.length > 0 && (
              <ul className="mt-4 space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                {project.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-zinc-200 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                      {i + 1}
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Solution */}
        {project.solution && (
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">3</span>
              Решение
            </h2>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              {project.solution}
            </p>
            {project.solutionDetails && project.solutionDetails.length > 0 && (
              <div className="mt-4 space-y-3">
                {project.solutionDetails.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <span className="mt-0.5 text-lg text-zinc-400">&#x2713;</span>
                    <span className="text-zinc-700 dark:text-zinc-300">{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">4</span>
              Результат
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.results.map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    {r.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">{r.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA */}
      <div className="mt-14 flex flex-wrap gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Открыть сайт &rarr;
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Заказать похожий проект
        </Link>
      </div>

      {/* Navigation to other projects */}
      <nav className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h3 className="text-sm font-medium text-zinc-500">Другие проекты</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {portfolio
            .filter((p) => p.slug !== slug)
            .slice(0, 2)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={`/images/portfolio-${p.slug}-website.jpg`}
                    alt={p.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium group-hover:underline">{p.title}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{p.technologies.slice(0, 3).join(", ")}</div>
                </div>
              </Link>
            ))}
        </div>
      </nav>
    </article>
  );
}

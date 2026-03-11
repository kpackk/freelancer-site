import type { Metadata } from "next";
import Link from "next/link";
import portfolio from "@/../content/data/portfolio.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  const title = project?.title ? `${project.title} — кейс` : "Проект";
  const description = project?.description ?? "Детали проекта.";
  return {
    title,
    description,
    openGraph: { title, description },
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

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/portfolio"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Портфолио
      </Link>

      <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {(project.fullTechnologies ?? project.technologies).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Client */}
      {project.client && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Клиент</h2>
          <p className="mt-2 text-zinc-700 leading-relaxed dark:text-zinc-300">
            {project.client}
          </p>
        </section>
      )}

      {/* Challenge */}
      {project.challenge && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Задача</h2>
          <p className="mt-2 text-zinc-700 leading-relaxed dark:text-zinc-300">
            {project.challenge}
          </p>
          {project.requirements && project.requirements.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.requirements.map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {req}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Решение</h2>
          <p className="mt-2 text-zinc-700 leading-relaxed dark:text-zinc-300">
            {project.solution}
          </p>
          {project.solutionDetails && project.solutionDetails.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.solutionDetails.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Результат</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.results.map((r, i) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {r.value}
                </div>
                <div className="mt-1 text-sm text-zinc-500">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-12 flex gap-4">
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
          Заказать похожий
        </Link>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import portfolio from "@/../content/data/portfolio.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Проект",
    description: project?.description ?? "Детали проекта.",
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
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-8 text-zinc-700 leading-relaxed dark:text-zinc-300">
        {project.description}
      </p>

      <div className="mt-8 flex gap-4">
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

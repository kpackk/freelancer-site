import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Примеры выполненных проектов.",
};

const projects = [
  {
    slug: "project-1",
    title: "Корпоративный сайт",
    desc: "Next.js, Tailwind CSS, Vercel. Адаптивный сайт с CMS.",
  },
  {
    slug: "project-2",
    title: "Telegram-бот для бизнеса",
    desc: "Node.js, Telegraf. Автоматизация обработки заявок.",
  },
  {
    slug: "project-3",
    title: "E-commerce платформа",
    desc: "React, Node.js, PostgreSQL. Интернет-магазин с оплатой.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Портфолио</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Избранные проекты.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <div className="mb-4 h-32 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
            <h2 className="text-lg font-semibold group-hover:underline">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {p.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

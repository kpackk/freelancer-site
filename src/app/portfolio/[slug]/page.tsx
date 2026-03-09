import type { Metadata } from "next";
import Link from "next/link";

const projects: Record<string, { title: string; desc: string }> = {
  "project-1": {
    title: "Корпоративный сайт",
    desc: "Разработка корпоративного сайта на Next.js с Tailwind CSS. Адаптивный дизайн, быстрая загрузка, интеграция с headless CMS.",
  },
  "project-2": {
    title: "Telegram-бот для бизнеса",
    desc: "Бот для автоматической обработки заявок. Node.js, Telegraf, интеграция с Google Sheets и CRM.",
  },
  "project-3": {
    title: "E-commerce платформа",
    desc: "Интернет-магазин с корзиной, оплатой через Stripe, панелью управления. React, Node.js, PostgreSQL.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  return {
    title: project?.title ?? "Проект",
    description: project?.desc ?? "Детали проекта.",
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];

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
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/portfolio"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Портфолио
      </Link>
      <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
      <div className="mt-4 h-48 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
      <p className="mt-6 text-zinc-600 dark:text-zinc-400">{project.desc}</p>
    </section>
  );
}

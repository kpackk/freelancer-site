import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Отзывы клиентов",
  description:
    "Отзывы клиентов о работе Ruslan WEB. 50+ проектов, 5+ лет опыта. Реальные кейсы и результаты.",
  openGraph: {
    title: "Отзывы клиентов",
    description: "Отзывы клиентов о работе Ruslan WEB. 50+ проектов.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/reviews" },
};

const reviews = [
  {
    name: "Владелец espaniero.ru",
    text: "Отличная работа! Сайт был готов в срок и полностью соответствовал ТЗ. LMS-платформа работает стабильно, ученики довольны интерфейсом.",
    project: "espaniero.ru",
  },
  {
    name: "Владелица ASSORO",
    text: "Профессиональный подход — от брифа до запуска. Магазин работает быстро, мобильная версия идеальна. Рекомендую.",
    project: "assoro.ru",
  },
  {
    name: "Директор Danila-Master",
    text: "Быстро разобрался в задаче, реализовал сложный каталог с SEO-оптимизацией. Позиции в Google выросли в первый месяц.",
    project: "danila-master.ru",
  },
];

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Отзывы</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Что говорят клиенты о сотрудничестве.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <blockquote
            key={r.name}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="mt-4">
              <cite className="block text-sm font-medium not-italic">
                {r.name}
              </cite>
              <span className="text-xs text-zinc-500">{r.project}</span>
            </div>
          </blockquote>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          Хотите обсудить проект?
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Связаться
        </Link>
      </div>
    </section>
  );
}

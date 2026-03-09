import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы клиентов о работе.",
};

const reviews = [
  {
    name: "Клиент А",
    text: "Отличная работа! Сайт был готов в срок и полностью соответствовал ТЗ.",
  },
  {
    name: "Клиент Б",
    text: "Профессиональный подход, грамотная коммуникация. Рекомендую.",
  },
  {
    name: "Клиент В",
    text: "Быстро разобрался в задаче, предложил оптимальное решение. Буду обращаться ещё.",
  },
];

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Отзывы</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Что говорят клиенты.
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
            <cite className="mt-4 block text-sm font-medium not-italic">
              {r.name}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

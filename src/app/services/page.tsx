import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги",
  description: "IT-услуги: веб-разработка, автоматизация, консалтинг.",
};

const services = [
  {
    title: "Веб-разработка",
    desc: "Лендинги, корпоративные сайты, SPA и PWA на React/Next.js. Адаптивная вёрстка, SEO-оптимизация.",
  },
  {
    title: "Автоматизация",
    desc: "Telegram-боты, парсеры, интеграции с CRM и API. Ускорение бизнес-процессов.",
  },
  {
    title: "Техническое консультирование",
    desc: "Аудит кода, выбор технологий, архитектурное проектирование. Помогу принять правильные технические решения.",
  },
  {
    title: "Поддержка и развитие",
    desc: "Доработка существующих проектов, устранение багов, повышение производительности.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Услуги</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Полный цикл IT-услуг для вашего бизнеса.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

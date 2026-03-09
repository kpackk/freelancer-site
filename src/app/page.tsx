import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          IT-фрилансер
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Веб-разработка, автоматизация процессов, техническое консультирование.
          Качественные решения для вашего бизнеса.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Связаться
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Портфолио
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold">Что я делаю</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Веб-разработка",
                desc: "Создание современных сайтов и веб-приложений на React, Next.js, Node.js.",
              },
              {
                title: "Автоматизация",
                desc: "Боты, скрипты, интеграции — автоматизация рутинных бизнес-процессов.",
              },
              {
                title: "Консалтинг",
                desc: "Технический аудит, выбор стека, архитектурные решения для вашего проекта.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              Все услуги &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

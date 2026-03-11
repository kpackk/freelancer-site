import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Обо мне — IT-фрилансер",
  description:
    "IT-фрилансер полного стека: веб-разработка, Telegram-боты, парсинг, ИИ-решения. Работаю на Kwork и FL.ru. Более 5 лет в разработке.",
  openGraph: {
    title: "Обо мне — IT-фрилансер",
    description:
      "Руслан — IT-разработчик 5+ лет. Специализация: Telegram-боты, сайты, автоматизация, ИИ. Работаю официально, NDA по запросу.",
    type: "profile",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Обо мне</h1>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed dark:text-zinc-300">
            Я — IT-фрилансер полного стека. Разрабатываю сайты, Telegram-боты,
            системы автоматизации и ИИ-решения для бизнеса. Работаю самостоятельно,
            без посредников — заказчик всегда общается напрямую со мной.
          </p>
        </div>
        <Image
          src="/images/ruslan-web-developer.jpg"
          alt="Руслан — IT-фрилансер, разработчик сайтов и Telegram-ботов с опытом 5+ лет"
          width={240}
          height={240}
          className="shrink-0 rounded-full"
          loading="lazy"
        />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Чем занимаюсь</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Мой основной фокус — практические задачи, которые экономят бизнесу
          время и деньги:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            ["Веб-разработка", "сайты под ключ, лендинги, корпоративные порталы, интернет-магазины"],
            ["Автоматизация", "боты, парсеры, интеграции между сервисами"],
            ["ИИ-решения", "GPT-ассистенты, чатботы для продаж, автоматические обработчики данных"],
            ["Frontend", "вёрстка по макетам Figma/PSD, React, Next.js, Vue.js"],
            ["Backend", "PHP, Laravel, Python, 1С-Битрикс, WordPress"],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>
                <strong>{title}</strong>: {desc}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Опыт и портфолио</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Работаю с заказчиками на Kwork и FL.ru. В портфолио — проекты из
          разных ниш:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            { name: "espaniero.ru", url: "https://espaniero.ru" },
            { name: "assoro.ru", url: "https://assoro.ru" },
            { name: "exactcarbon.ru", url: "https://exactcarbon.ru" },
            { name: "danila-master.ru", url: "https://danila-master.ru" },
          ].map((project) => (
            <li key={project.name} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Также реализованы проекты на 1С-Битрикс, парсеры для крупных
          маркетплейсов, Telegram-боты с тысячами активных пользователей.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Как я работаю</h2>
        <ol className="mt-4 space-y-3">
          {[
            ["Быстрая оценка", "отвечаю в течение часа, даю чёткую оценку по ТЗ"],
            ["Фиксация условий", "договор или переписка как официальное подтверждение"],
            ["Прозрачность", "регулярные обновления о ходе работы"],
            ["Результат", "сдаю с документацией и объясняю, как пользоваться"],
          ].map(([title, desc], i) => (
            <li key={title} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium dark:bg-zinc-800">
                {i + 1}
              </span>
              <span>
                <strong>{title}</strong> — {desc}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Связаться</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href="https://t.me/ruslan_web_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium">Telegram: @ruslan_web_dev</span>
          </a>
          <a
            href="mailto:hello@ruslanweb.ru"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <span className="text-lg">✉️</span>
            <span className="text-sm font-medium">hello@ruslanweb.ru</span>
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Обсудить проект
        </Link>
      </div>
    </article>
  );
}

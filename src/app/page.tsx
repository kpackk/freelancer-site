import Image from "next/image";
import Link from "next/link";
import services from "@/../content/data/services.json";
import portfolio from "@/../content/data/portfolio.json";

export const revalidate = 86400;

const homeReviews = [
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

const faqItems = [
  {
    question: "Сколько стоит разработка?",
    answer: "Цены начинаются от 4 000 \u20BD за простые задачи (бот, парсер, вёрстка). Сайт под ключ — от 20 000 \u20BD. Точная стоимость зависит от объёма: пришлите ТЗ или опишите задачу — дам оценку в течение нескольких часов.",
  },
  {
    question: "Какие сроки выполнения?",
    answer: "Простые задачи — 2\u20135 дней. Сайт под ключ — 14\u201345 дней. Точные сроки фиксируются до начала работы и не меняются без согласования.",
  },
  {
    question: "Работаете по договору?",
    answer: "Да, работаю официально. Возможен договор ГПХ или оферта. NDA по запросу. Также работаю через безопасные сделки на Kwork и FL.ru.",
  },
  {
    question: "Какие технологии используете?",
    answer: "Python (aiogram, Scrapy, Selenium), PHP (Laravel, 1С-Битрикс), JavaScript (Next.js, Vue.js, React), WordPress, PostgreSQL, GPT API. Выбираю стек под задачу, а не наоборот.",
  },
  {
    question: "Что входит в поддержку после сдачи?",
    answer: "30 дней бесплатной поддержки: исправление багов, мелкие корректировки, консультации. Дальнейшая поддержка — по отдельной договорённости.",
  },
];

export default function Home() {
  const featuredProjects = portfolio.filter((p) => p.featured);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ruslan WEB — разработка сайтов, ботов и автоматизации
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Full-stack фрилансер. 5+ лет опыта, 50+ проектов. Работаю с малым
              бизнесом и стартапами — фиксированные сроки, NDA по запросу.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-zinc-900 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-zinc-700 hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Обсудить проект
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-zinc-300 px-8 py-3.5 text-center text-base font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Смотреть портфолио
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/images/ruslan-web-developer.jpg"
              alt="Руслан — IT-фрилансер, веб-разработчик и создатель Telegram-ботов"
              width={280}
              height={280}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold">Услуги</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            8 направлений — от Telegram-ботов до SEO-аналитики
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                prefetch={false}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/icons/${service.slug}.svg`}
                  alt={`Иконка услуги: ${service.title}`}
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="mb-3 text-zinc-700 dark:text-zinc-300"
                />
                <h3 className="text-lg font-semibold group-hover:underline">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {service.shortDescription}
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  от {service.price.from.toLocaleString("ru-RU")} ₽
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold">Портфолио</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group overflow-hidden rounded-xl border border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={`/images/portfolio-${project.slug}-website.jpg`}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              Все проекты &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold">Отзывы клиентов</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeReviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
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
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              Все отзывы &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold">Частые вопросы</h2>
          <dl className="mt-12 space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold">{item.question}</dt>
                <dd className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              Остались вопросы?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Обсудить проект &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold">Есть задача?</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Опишите, что нужно сделать — отвечу с оценкой в течение нескольких
            часов.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Обсудить проект
          </Link>
        </div>
      </section>
    </>
  );
}

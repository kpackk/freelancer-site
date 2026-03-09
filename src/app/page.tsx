import Link from "next/link";
import services from "@/../content/data/services.json";
import portfolio from "@/../content/data/portfolio.json";

export default function Home() {
  const featuredProjects = portfolio.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ruslan WEB — разработка сайтов, ботов и автоматизации
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Full-stack фрилансер. 5+ лет опыта, 50+ проектов. Работаю с малым
          бизнесом и стартапами — фиксированные сроки, NDA по запросу.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Обсудить проект
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Смотреть портфолио
          </Link>
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
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
              >
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
                className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
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

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
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

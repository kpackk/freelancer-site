import type { Metadata } from "next";
import Link from "next/link";
import services from "@/../content/data/services.json";

export const metadata: Metadata = {
  title: "Услуги IT-фрилансера",
  description:
    "8 направлений разработки: Telegram-боты, сайты под ключ, парсинг, WordPress, ИИ, SEO-аналитика. Цены от 4 000 ₽. Официально, NDA по запросу.",
  openGraph: {
    title: "Услуги IT-фрилансера",
    description: "8 направлений: Telegram-боты, сайты, парсинг, WordPress, ИИ, SEO. От 4 000 ₽.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Услуги</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Полный цикл IT-услуг для вашего бизнеса — от Telegram-ботов до
        SEO-аналитики.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/icons/${s.slug}.svg`}
              alt={`Иконка услуги: ${s.title}`}
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              className="mb-3"
            />
            <h2 className="text-lg font-semibold group-hover:underline">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {s.shortDescription}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                от {s.price.from.toLocaleString("ru-RU")} ₽
              </span>
              <span className="text-xs text-zinc-500">
                ~{s.deliveryDays} дн.
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {s.technologies.slice(0, 4).map((tech) => (
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
    </section>
  );
}

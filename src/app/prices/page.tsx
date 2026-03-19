import type { Metadata } from "next";
import Link from "next/link";
import services from "@/../content/data/services.json";

export const metadata: Metadata = {
  title: "Цены на IT-услуги фрилансера",
  description:
    "Прозрачные цены на разработку: Telegram-боты от 4 000 ₽, сайты под ключ от 20 000 ₽, парсинг, WordPress, SEO-аналитика. 11 направлений — выберите своё.",
  openGraph: {
    title: "Цены на IT-услуги фрилансера",
    description:
      "11 направлений разработки с прозрачными ценами. Telegram-боты, сайты, парсинг, WordPress, ИИ, SEO. От 4 000 ₽.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Цены на IT-услуги фрилансера",
    description:
      "11 направлений разработки. Telegram-боты, сайты, парсинг, WordPress. От 4 000 ₽.",
  },
  alternates: { canonical: "/prices" },
};

function ServicePriceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="flex items-start gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/${service.slug}.svg`}
          alt=""
          width={32}
          height={32}
          className="mt-1 shrink-0"
        />
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">{service.title}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold">
          {service.price.from.toLocaleString("ru-RU")}
        </span>
        <span className="text-sm text-zinc-500"> ₽</span>
        <span className="ml-1 text-sm text-zinc-400">и выше</span>
      </div>

      <ul className="mt-4 flex-1 space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <span className="text-xs text-zinc-500">
          Срок: ~{service.deliveryDays} дн.
        </span>
        <Link
          href="/contact"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Заказать
        </Link>
      </div>
    </div>
  );
}

export default function PricesPage() {
  const sorted = [...services].sort((a, b) => a.order - b.order);

  const schemaServices = sorted.map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.shortDescription,
    provider: {
      "@type": "Person",
      name: "Руслан",
      url: "https://ruslanfreelance.ru",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: s.price.from,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: s.price.from,
        priceCurrency: "RUB",
        unitText: "проект",
      },
      availability: "https://schema.org/InStock",
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Цены на IT-услуги фрилансера",
    numberOfItems: sorted.length,
    itemListElement: schemaServices.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: s,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight">Цены</h1>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Прозрачные цены без скрытых платежей. Финальная стоимость зависит от
          сложности — напишите, и я оценю ваш проект бесплатно.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sorted.map((s) => (
            <ServicePriceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold">Не нашли подходящую услугу?</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Опишите задачу — оценю бесплатно в течение 2 часов.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Обсудить проект
          </Link>
        </div>
      </section>
    </>
  );
}

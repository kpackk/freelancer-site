import type { Metadata } from "next";
import Link from "next/link";
import services from "@/../content/data/services.json";
import { servicesContent, getServiceContent } from "@/lib/services-content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://freelancer-site.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent(slug);
  const service = services.find((s) => s.slug === slug);
  const title = service?.title ?? "Услуга";
  const description = content?.metaDescription ?? service?.shortDescription ?? "";
  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: `/services/${slug}` },
  };
}

export function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const content = getServiceContent(slug);
  const service = services.find((s) => s.slug === slug);

  if (!content || !service) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Услуга не найдена</h1>
        <Link href="/services" className="mt-4 inline-block text-sm underline">
          &larr; Вернуться к услугам
        </Link>
      </section>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: content.metaDescription,
    url: `${BASE_URL}/services/${slug}`,
    provider: { "@id": `${BASE_URL}/#person` },
    areaServed: { "@type": "Country", name: "Россия" },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: String(service.price.from),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RUB",
        price: String(service.price.from),
        unitText: "от",
      },
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Link
        href="/services"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Все услуги
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">{content.h1}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {content.subtitle}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="mt-10 space-y-4 text-zinc-700 dark:text-zinc-300">
        {content.description.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Что входит</h2>
        <ul className="mt-4 space-y-2">
          {content.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing */}
      <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold">Сроки и стоимость</h2>
        <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
          {content.pricing}
        </p>
        <ul className="mt-4 space-y-2">
          {content.pricingExamples.map((example, i) => (
            <li
              key={i}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              {example}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">{content.cta}</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Связаться
        </Link>
      </div>
    </article>
  );
}

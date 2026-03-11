const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Руслан",
        alternateName: "Ruslan WEB",
        url: BASE_URL,
        jobTitle: "IT-фрилансер",
        description:
          "Разработчик Telegram-ботов, сайтов под ключ, систем автоматизации и ИИ-решений",
        knowsAbout: [
          "Python",
          "aiogram",
          "PHP",
          "Laravel",
          "WordPress",
          "Vue.js",
          "Next.js",
          "Scrapy",
          "Selenium",
          "GPT API",
          "SEO",
        ],
        sameAs: [
          "https://kwork.ru/user/ruslan_web",
          "https://fl.ru/users/ruslan_web",
          "https://t.me/ruslan_web_dev",
        ],
        knowsLanguage: ["ru", "en"],
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "4000",
          highPrice: "100000",
          priceCurrency: "RUB",
          offerCount: "8",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#business`,
        name: "Ruslan WEB",
        description:
          "IT-фрилансер: разработка сайтов, Telegram-ботов, парсинг, автоматизация, ИИ-решения",
        url: BASE_URL,
        priceRange: "от 4 000 ₽",
        areaServed: {
          "@type": "Country",
          name: "Россия",
        },
        founder: { "@id": `${BASE_URL}/#person` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@ruslanweb.ru",
          url: "https://t.me/ruslan_web_dev",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Ruslan WEB",
        description:
          "Персональный сайт IT-фрилансера: Telegram-боты, сайты, автоматизация",
        publisher: { "@id": `${BASE_URL}/#person` },
        inLanguage: "ru-RU",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

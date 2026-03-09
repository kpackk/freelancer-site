export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ruslan",
    alternateName: "Ruslan WEB",
    jobTitle: "Full-stack веб-разработчик",
    description:
      "Фриланс-разработчик с опытом в Python, PHP, WordPress и AI-интеграциях. Помогаю бизнесу автоматизировать процессы и выглядеть профессионально в сети.",
    url: "https://freelancer-site.vercel.app",
    sameAs: [
      "https://kwork.ru/user/ruslan_web",
      "https://fl.ru/users/ruslan_web",
      "https://t.me/ruslan_web_dev",
    ],
    knowsAbout: [
      "Python",
      "PHP",
      "Laravel",
      "WordPress",
      "JavaScript",
      "Vue.js",
      "Next.js",
      "Telegram Bot Development",
      "Web Scraping",
      "AI Integration",
      "SEO",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Веб-разработка и автоматизация",
        description:
          "Разработка сайтов, Telegram-ботов, парсинг данных, AI-интеграции",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

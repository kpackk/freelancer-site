export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Freelancer",
    jobTitle: "IT-специалист",
    description:
      "Веб-разработка, автоматизация процессов, техническое консультирование.",
    url: "https://freelancer-site.vercel.app",
    sameAs: [],
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

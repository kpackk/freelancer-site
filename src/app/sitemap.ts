import type { MetadataRoute } from "next";
import services from "@/../content/data/services.json";
import portfolio from "@/../content/data/portfolio.json";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/prices", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/reviews", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const servicePages = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const portfolioPages = portfolio.map((p) => ({
    path: `/portfolio/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Exclude slugs that have nginx 301 redirects (canonical URL already in sitemap)
  const redirectedSlugs = new Set(["verstka-po-maketu-figma-pixel-perfect"]);

  const blogPosts = getAllPosts()
    .filter((post) => !redirectedSlugs.has(post.slug))
    .map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }));

  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPosts].map(
    (page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  );
}

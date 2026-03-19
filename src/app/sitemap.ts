import type { MetadataRoute } from "next";
import services from "@/../content/data/services.json";
import portfolio from "@/../content/data/portfolio.json";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ruslanfreelance.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  // Site launch date — used for static pages that don't change often
  const siteLastUpdated = new Date("2026-03-11");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: siteLastUpdated, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/services`, lastModified: siteLastUpdated, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/prices`, lastModified: siteLastUpdated, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/portfolio`, lastModified: siteLastUpdated, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, lastModified: siteLastUpdated, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/reviews`, lastModified: siteLastUpdated, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, lastModified: siteLastUpdated, priority: 0.7, changeFrequency: "monthly" },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: siteLastUpdated,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const portfolioPages: MetadataRoute.Sitemap = portfolio.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: siteLastUpdated,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  // Exclude slugs that have nginx 301 redirects (canonical URL already in sitemap)
  const redirectedSlugs = new Set(["verstka-po-maketu-figma-pixel-perfect"]);

  const blogPosts: MetadataRoute.Sitemap = getAllPosts()
    .filter((post) => !redirectedSlugs.has(post.slug))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : siteLastUpdated,
      priority: 0.6,
      changeFrequency: "monthly",
    }));

  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPosts];
}

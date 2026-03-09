import type { MetadataRoute } from "next";

const BASE_URL = "https://freelancer-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/portfolio",
    "/blog",
    "/reviews",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

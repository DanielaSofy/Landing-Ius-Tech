import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ius-tech.com.mx";
  const lastModified = new Date("2026-07-02");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/fiscalistas`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/in-house`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hennridev.work/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          pt: "https://hennridev.work/pt",
          en: "https://hennridev.work/en",
          es: "https://hennridev.work/es",
        },
      },
    },
  ];
}

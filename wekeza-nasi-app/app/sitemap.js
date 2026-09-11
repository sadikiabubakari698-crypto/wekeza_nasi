export default function sitemap() {
  const baseUrl = "https://wekeza-nasi.vercel.app";

  // Masomo yote (20)
  const lessons = Array.from({ length: 20 }, (_, i) => ({
    url: `${baseUrl}/somo${i + 1}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Kampuni zote (8)
  const companies = [
    "crdb",
    "nmb",
    "tbl",
    "vodacom",
    "tcc",
    "tpcc",
    "swissport",
    "dse",
  ].map((slug) => ({
    url: `${baseUrl}/kampuni/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Somo la Mwezi (articles)
  const monthlyDives = [
    "crdb-2026-09",
    "nmb-2026-10",
    "tbl-2026-11",
  ].map((slug) => ({
    url: `${baseUrl}/somo-la-mwezi/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/academy`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/kampuni`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/soko`, priority: 0.8, changeFrequency: "daily" },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));

  return [...mainPages, ...monthlyDives, ...companies, ...lessons];
}

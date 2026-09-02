export default function sitemap() {
  const base = "https://wekeza-nasi.vercel.app";
  const lessons = Array.from({ length: 16 }, (_, i) => `/somo${i + 1}`);
  const other = ["/", "/madalali", "/tahadhari", "/kampuni/crdb", "/kampuni/nmb"];
  const all = [...other, ...lessons];
  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

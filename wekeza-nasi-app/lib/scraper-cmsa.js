// Scraper ya CMSA — Matangazo
// Tunachukua matangazo kutoka cmsa.go.tz

export async function fetchCmsa() {
  try {
    const res = await fetch("https://www.cmsa.go.tz/announcements", {
      headers: { "User-Agent": "WEKEZA-NASI/1.0" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const html = await res.text();
    return parseCmsaHtml(html);
  } catch (e) {
    return [];
  }
}

function parseCmsaHtml(html) {
  const items = [];
  // Tafuta links za matangazo
  const linkRegex = /<a[^>]+href="([^"]*announcement[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    if (text.length > 10) {
      items.push({
        title: text,
        link: href.startsWith("http") ? href : "https://www.cmsa.go.tz" + href,
        description: "Tangazo la CMSA",
        pubDate: new Date().toISOString(),
        source: "CMSA",
        type: "tangazo",
      });
    }
  }
  return items;
}

// Scraper ya BOT — Riba, Sera
// Tunachukua taarifa kutoka bot.go.tz

export async function fetchBot() {
  try {
    const res = await fetch("https://www.bot.go.tz/", {
      headers: { "User-Agent": "WEKEZA-NASI/1.0" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const html = await res.text();
    return parseBotHtml(html);
  } catch (e) {
    return [];
  }
}

function parseBotHtml(html) {
  const items = [];
  // Tafuta links za taarifa
  const linkRegex = /<a[^>]+href="([^"]*(?:press|news|publication)[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    if (text.length > 10 && (text.toLowerCase().includes("riba") || text.toLowerCase().includes("sera") || text.toLowerCase().includes("fedha"))) {
      items.push({
        title: text,
        link: href.startsWith("http") ? href : "https://www.bot.go.tz" + href,
        description: "Taarifa ya BOT",
        pubDate: new Date().toISOString(),
        source: "BOT",
        type: "taarifa",
      });
    }
  }
  return items;
}

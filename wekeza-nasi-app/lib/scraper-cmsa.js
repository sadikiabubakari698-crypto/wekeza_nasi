// Scraper ya CMSA — Matangazo
// Inachukua matangazo kutoka cmsa.go.tz/search

function cleanText(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function parseDate(text) {
  if (!text) return new Date().toISOString();
  // Tafuta tarehe — mfano "Oct 20, 2022"
  const match = text.match(/([A-Za-z]+)\s+(\d+),\s+(\d+)/);
  if (match) {
    try {
      const d = new Date(`${match[1]} ${match[2]}, ${match[3]}`);
      if (!isNaN(d.getTime())) return d.toISOString();
    } catch (e) {}
  }
  return new Date().toISOString();
}

export async function fetchCmsa() {
  try {
    const res = await fetch("https://cmsa.go.tz/search", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; WEKEZA-NASI/1.0)",
        "Accept": "text/html,application/xhtml+xml",
      },
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
  
  // Tafuta kila div.news-item
  const itemRegex = /<div[^>]*class="[^"]*news-item[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  
  while ((m = itemRegex.exec(html)) !== null) {
    const block = m[1];
    
    // Kichwa
    const titleMatch = block.match(/<div[^>]*class="[^"]*news-title[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    const title = titleMatch ? cleanText(titleMatch[1]) : "";
    
    // Link
    const linkMatch = block.match(/<a[^>]*href="([^"]*)"[^>]*class="[^"]*read-more[^"]*"[^>]*>/i)
      || block.match(/<a[^>]*class="[^"]*read-more[^"]*"[^>]*href="([^"]*)"[^>]*>/i);
    const link = linkMatch ? linkMatch[1] : "";
    
    // Tarehe
    const dateMatch = block.match(/<span[^>]*class="[^"]*post-date[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
    const dateText = dateMatch ? cleanText(dateMatch[1]) : "";
    
    if (title && title.length > 5) {
      items.push({
        title: title,
        link: link.startsWith("http") ? link : ("https://cmsa.go.tz" + (link.startsWith("/") ? link : "/" + link)),
        description: "Tangazo la CMSA",
        pubDate: parseDate(dateText),
        source: "CMSA",
        type: "tangazo",
      });
    }
  }
  
  // Kama regex haikupata kitu — jaribu njia nyingine
  if (items.length === 0) {
    const altRegex = /<div[^>]*class="[^"]*news-title[^"]*"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>[\s\S]*?Read More[\s\S]*?<span[^>]*class="[^"]*post-date[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
    let altMatch;
    while ((altMatch = altRegex.exec(html)) !== null) {
      const title = cleanText(altMatch[1]);
      const link = altMatch[2];
      const dateText = cleanText(altMatch[3]);
      if (title && title.length > 5) {
        items.push({
          title: title,
          link: link.startsWith("http") ? link : ("https://cmsa.go.tz" + (link.startsWith("/") ? link : "/" + link)),
          description: "Tangazo la CMSA",
          pubDate: parseDate(dateText),
          source: "CMSA",
          type: "tangazo",
        });
      }
    }
  }
  
  return items;
}

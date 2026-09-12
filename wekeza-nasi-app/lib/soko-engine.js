import sokoData from "../content/soko.json";

// Content inayoonekana kwa sasa (haijafika expiry)
function isActive(item) {
  const now = new Date();
  const publishDate = new Date(item.publishDate);
  const expiryDate = item.expiryDate ? new Date(item.expiryDate) : null;

  if (item.status !== "published") return false;
  if (publishDate > now) return false;
  if (expiryDate && expiryDate < now) return false;
  return true;
}

// Timely content (breaking news) — inaingia JUU
export function getTimelySoko() {
  return sokoData
    .filter((item) => item.category === "timely" && isActive(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Planned content (Framework + Case Studies) — inaendelea
export function getPlannedSoko() {
  return sokoData
    .filter((item) => item.category === "planned" && isActive(item))
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
}

// Get by slug (kwa ukurasa wa uchambuzi kamili)
export function getSokoBySlug(slug) {
  return sokoData.find((item) => item.slug === slug);
}

// All items (kwa sitemap)
export function getAllSokoItems() {
  return sokoData
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

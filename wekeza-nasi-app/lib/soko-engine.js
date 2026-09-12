import sokoData from "../content/soko.json";

function isActive(item) {
  const now = new Date();
  const publishDate = new Date(item.publishDate);
  const expiryDate = item.expiryDate ? new Date(item.expiryDate) : null;

  if (item.status !== "published") return false;
  if (publishDate > now) return false;
  if (expiryDate && expiryDate < now) return false;
  return true;
}

export function getTimelySoko() {
  return sokoData
    .filter((item) => item.category === "timely" && isActive(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Onyesha tu Sehemu 1 (au items zisizo na parts) — ili list isijae
export function getPlannedSoko() {
  return sokoData
    .filter((item) => item.category === "planned" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
}

export function getSokoBySlug(slug) {
  return sokoData.find((item) => item.slug === slug);
}

export function getAllSokoItems() {
  return sokoData
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

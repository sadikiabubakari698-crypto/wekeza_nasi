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

// 1. TIMELY — breaking news
export function getTimelySoko() {
  return sokoData
    .filter((item) => item.category === "timely" && isActive(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// 2. FRAMEWORK — zote, daima (Sehemu 1 TU kwenye list)
export function getFrameworkSoko() {
  return sokoData
    .filter((item) => item.type === "framework" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
}

// 3. CASE STUDY YA WIKI — moja tu, inabadilika kila wiki
export function getWeeklyCaseStudy() {
  // Case Studies zote (Sehemu 1 TU)
  const all = sokoData
    .filter((item) => item.type === "case-study" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));

  if (all.length === 0) return null;

  // Hesabu wiki tangu epoch
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
  const weekNumber = Math.floor(Date.now() / MS_PER_WEEK);
  const index = weekNumber % all.length;

  return all[index];
}

// Case Studies zote (kwa archive)
export function getAllCaseStudies() {
  return sokoData
    .filter((item) => item.type === "case-study" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// Get by slug
export function getSokoBySlug(slug) {
  return sokoData.find((item) => item.slug === slug);
}

export function getAllSokoItems() {
  return sokoData
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

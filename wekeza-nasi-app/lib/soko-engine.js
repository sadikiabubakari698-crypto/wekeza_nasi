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

// 1. TIMELY
export function getTimelySoko() {
  return sokoData
    .filter((item) => item.category === "timely" && isActive(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

// 2. FRAMEWORK — zote (Sehemu 1 TU)
export function getFrameworkSoko() {
  return sokoData
    .filter((item) => item.type === "framework" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
}

// 3. CASE STUDY YA SASA — ile ya mwisho iliyofunguliwa
export function getCurrentCaseStudy() {
  const now = new Date();
  const unlocked = sokoData
    .filter((item) => item.type === "case-study" && isActive(item))
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .filter((item) => !item.unlockDate || new Date(item.unlockDate) <= now)
    .sort((a, b) => new Date(b.unlockDate || b.publishDate) - new Date(a.unlockDate || a.publishDate));

  return unlocked[0] || null;
}

// 4. CASE STUDIES ZOTE (kwa archive) — pamoja na locked
export function getAllCaseStudies() {
  const now = new Date();
  return sokoData
    .filter((item) => item.type === "case-study" && item.status === "published")
    .filter((item) => !item.partNumber || item.partNumber === 1)
    .map((item) => ({
      ...item,
      locked: item.unlockDate ? new Date(item.unlockDate) > now : false,
    }))
    .sort((a, b) => new Date(a.unlockDate || a.publishDate) - new Date(b.unlockDate || b.publishDate));
}

export function getSokoBySlug(slug) {
  return sokoData.find((item) => item.slug === slug);
}

export function getAllSokoItems() {
  return sokoData
    .filter((item) => item.status === "published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

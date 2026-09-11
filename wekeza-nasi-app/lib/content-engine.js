import contentData from "../content/content.json";

function isPublishedByNow(item) {
  const now = new Date();
  const publishDate = new Date(item.publishDate);
  return item.status === "published" && publishDate <= now;
}

export function getTimelyContent() {
  return contentData
    .filter((item) => item.category === "timely" && isPublishedByNow(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

export function getPlannedContent() {
  return contentData
    .filter((item) => item.category === "planned" && isPublishedByNow(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

export function getAllPlannedItems() {
  return contentData
    .filter((item) => item.category === "planned" && item.status === "published")
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
}

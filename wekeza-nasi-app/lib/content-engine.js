import contentData from "../content/content.json";

function isPublishedByToday(item) {
  const today = new Date();
  const publishDate = new Date(item.publishDate);
  return item.status === "published" && publishDate <= today;
}

export function getTimelyContent() {
  return contentData
    .filter((item) => item.category === "timely" && isPublishedByToday(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

export function getPlannedContent() {
  return contentData
    .filter((item) => item.category === "planned" && isPublishedByToday(item))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}

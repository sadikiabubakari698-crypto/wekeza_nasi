const KEY = "wekeza_notifications";
const MAX = 50;

export const NOTIFICATION_TYPES = {
  ACADEMY: "academy",
  MARKET: "market",
  COMPANY: "company",
  COMMUNITY: "community",
  JOURNAL: "journal",
};

export const TYPE_LABELS = {
  academy: "📚 Academy",
  market: "📊 Soko",
  company: "🏢 Kampuni",
  community: "👥 Jamii",
  journal: "🧠 Mfuko",
};

export function getNotifications() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addNotification(notif) {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const newNotif = {
    id: notif.id || `notif-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: notif.type || "info",
    level: notif.level || "info",
    title: notif.title,
    message: notif.message || "",
    status: "unread",
    action: notif.action || "Fungua",
    link: notif.link || "",
    createdAt: new Date().toISOString(),
  };
  if (!list.some((n) => n.id === newNotif.id)) {
    list.unshift(newNotif);
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
  }
}

export function markAsRead(id) {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const updated = list.map((n) => (n.id === id ? { ...n, status: "read" } : n));
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function markAllAsRead() {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const updated = list.map((n) => ({ ...n, status: "read" }));
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function getUnreadCount() {
  return getNotifications().filter((n) => n.status === "unread").length;
}

export function deleteNotification(id) {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const updated = list.filter((n) => n.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function clearAll() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function notifyAcademy(title, message, link, action = "Endelea Kujifunza") {
  addNotification({ type: "academy", level: "journey", title, message, action, link });
}

export function notifyMarket(title, message, link, action = "Soma Uchambuzi") {
  addNotification({ type: "market", level: "important", title, message, action, link });
}

export function notifyCompany(title, message, link, action = "Soma Uchambuzi") {
  addNotification({ type: "company", level: "info", title, message, action, link });
}

export function notifyCommunity(title, message, link, action = "Angalia") {
  addNotification({ type: "community", level: "info", title, message, action, link });
}

export function notifyJournal(title, message, link, action = "Fungua Mfuko") {
  addNotification({ type: "journal", level: "info", title, message, action, link });
}

export function seedNotifications() {
  const samples = [
    { type: "market", level: "important", title: "Uchambuzi mpya wa soko", message: "Case Study ya NMB Stock Split imeongezwa.", action: "Soma Uchambuzi", link: "/soko/kwa-nini-nmb-ilifanya-stock-split" },
    { type: "academy", level: "journey", title: "Endelea na safari yako", message: "Una masomo 20 ya Academy yanayokungoja.", action: "Endelea Kujifunza", link: "/academy" },
    { type: "journal", level: "info", title: "Mfuko wako wa Maarifa", message: "Hifadhi masomo unayopenda kwa marejeleo.", action: "Fungua Mfuko", link: "/mfuko-wa-maarifa" },
  ];
  samples.forEach((s) => addNotification(s));
}

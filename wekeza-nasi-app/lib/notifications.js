const KEY = "wekeza_notifications";
const NOTIFIED_KEY = "wekeza_notified_items";
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

// ============ TRACKING YA "ALREADY NOTIFIED" ============
function getNotifiedItems() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(NOTIFIED_KEY) || "{}");
  } catch {
    return {};
  }
}

function markAsNotified(itemId) {
  if (typeof window === "undefined") return;
  const notified = getNotifiedItems();
  notified[itemId] = new Date().toISOString();
  localStorage.setItem(NOTIFIED_KEY, JSON.stringify(notified));
}

function isNotified(itemId) {
  return !!getNotifiedItems()[itemId];
}

// ============ AUTO-CHECK ============
// Inaitwa mara moja kila mtu anafungua website
// Inaangalia content mpya (Somo la Mwezi, Case Study, Timely)
// Inatengeneza notification MARA MOJA tu kwa kila item

export function autoCheckNotifications({ somoLaMwezi, caseStudies, timely }) {
  if (typeof window === "undefined") return;

  const now = new Date();

  // 1. SOMO LA MWEZI — yale yaliyofunguliwa
  (somoLaMwezi || []).forEach((item) => {
    const notifId = `somo-la-mwezi-${item.slug}`;
    if (isNotified(notifId)) return;
    if (!item.publishDate) return;
    if (new Date(item.publishDate) > now) return;

    addNotification({
      id: notifId,
      type: "company",
      level: "journey",
      title: `Somo la Mwezi: ${item.title}`,
      message: item.subtitle || "Uchambuzi mpya wa kina wa kampuni.",
      action: "Soma Uchambuzi",
      link: `/somo-la-mwezi/${item.slug}`,
    });
    markAsNotified(notifId);
  });

  // 2. CASE STUDIES — yale yaliyofunguliwa
  (caseStudies || []).forEach((item) => {
    const notifId = `case-study-${item.slug}`;
    if (isNotified(notifId)) return;
    if (!item.unlockDate) return;
    if (new Date(item.unlockDate) > now) return;

    addNotification({
      id: notifId,
      type: "market",
      level: "important",
      title: `Case Study Mpya: ${item.title}`,
      message: item.subtitle || item.excerpt || "Uchambuzi wa tukio halisi la soko.",
      action: "Soma Case Study",
      link: `/soko/${item.slug}`,
    });
    markAsNotified(notifId);
  });

  // 3. TIMELY — yale ya sasa
  (timely || []).forEach((item) => {
    const notifId = `timely-${item.slug || item.id}`;
    if (isNotified(notifId)) return;
    if (!item.publishDate) return;
    if (new Date(item.publishDate) > now) return;
    if (item.expiryDate && new Date(item.expiryDate) < now) return;

    addNotification({
      id: notifId,
      type: "market",
      level: "important",
      title: `🚨 ${item.title}`,
      message: item.excerpt || "Jambo jipya la soko limechambuliwa.",
      action: "Soma Uchambuzi",
      link: `/soko/${item.slug}`,
    });
    markAsNotified(notifId);
  });
}

// ============ MANUAL TRIGGERS (Kwa Founder) ============
export function notifyCommunity(title, message, link, action = "Angalia") {
  addNotification({ type: "community", level: "info", title, message, action, link });
}

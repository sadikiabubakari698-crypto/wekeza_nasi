const KEY = "wekeza_notifications";
const NOTIFIED_KEY = "wekeza_notified_items";
const VERSION_KEY = "wekeza_notifications_version";
const CURRENT_VERSION = "v2"; // Badilisha hii kila tunabadilisha muundo
const MAX = 15;
const FRESH_WINDOW_DAYS = 5;
const CLEANUP_DAYS = 14;

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

// ============ VERSION CHECK ============
// Kama version imebadilika, futa zote za zamani
function checkVersion() {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem(VERSION_KEY);
  if (stored !== CURRENT_VERSION) {
    localStorage.removeItem(KEY);
    localStorage.removeItem(NOTIFIED_KEY);
    localStorage.removeItem("wekeza_notifications_seeded");
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  }
}

export function getNotifications() {
  if (typeof window === "undefined") return [];
  checkVersion();
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addNotification(notif) {
  if (typeof window === "undefined") return;
  checkVersion();
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

export function markByLink(link) {
  if (typeof window === "undefined") return;
  if (!link) return;
  const list = getNotifications();
  let changed = false;
  const updated = list.map((n) => {
    if (n.status === "unread" && n.link === link) {
      changed = true;
      return { ...n, status: "read" };
    }
    return n;
  });
  if (changed) {
    localStorage.setItem(KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("wekeza-notifications-updated"));
  }
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

function cleanupOldNotifications() {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const cutoff = new Date(Date.now() - CLEANUP_DAYS * 24 * 60 * 60 * 1000);
  const filtered = list.filter((n) => new Date(n.createdAt) >= cutoff);
  if (filtered.length !== list.length) {
    localStorage.setItem(KEY, JSON.stringify(filtered));
  }
}

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
// Kanuni:
// - Onyesha matukio ya msingi tu (Case Study, Somo la Mwezi, Timely)
// - Fresh window: siku 5
// - Max 3 za kila aina (kupunguza msongamano)
// - Priority: Timely > Case Study > Somo la Mwezi

export function autoCheckNotifications({ somoLaMwezi, caseStudies, timely }) {
  if (typeof window === "undefined") return;
  checkVersion();
  cleanupOldNotifications();

  const now = new Date();
  const freshCutoff = new Date(now.getTime() - FRESH_WINDOW_DAYS * 24 * 60 * 60 * 1000);

  // ===== PRIORITY 1: TIMELY (tukio la soko) =====
  (timely || []).slice(0, 2).forEach((item) => {
    const notifId = `timely-${item.slug || item.id}`;
    if (isNotified(notifId)) return;
    if (!item.publishDate) return;
    const pubDate = new Date(item.publishDate);
    if (pubDate > now) return;
    if (item.expiryDate && new Date(item.expiryDate) < now) return;
    if (pubDate < freshCutoff) return;

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

  // ===== PRIORITY 2: CASE STUDIES (zilizofunguliwa siku 5 zilizopita) =====
  const freshCases = (caseStudies || [])
    .filter((item) => {
      if (!item.unlockDate) return false;
      const unlockDate = new Date(item.unlockDate);
      return unlockDate <= now && unlockDate >= freshCutoff;
    })
    .sort((a, b) => new Date(b.unlockDate) - new Date(a.unlockDate))
    .slice(0, 2);

  freshCases.forEach((item) => {
    const notifId = `case-study-${item.slug}`;
    if (isNotified(notifId)) return;

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

  // ===== PRIORITY 3: SOMO LA MWEZI (lililofunguliwa siku 5 zilizopita) =====
  const freshMonthly = (somoLaMwezi || [])
    .filter((item) => {
      if (!item.publishDate) return false;
      const pubDate = new Date(item.publishDate);
      return pubDate <= now && pubDate >= freshCutoff;
    })
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 1);

  freshMonthly.forEach((item) => {
    const notifId = `somo-la-mwezi-${item.slug}`;
    if (isNotified(notifId)) return;

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
}

export function notifyCommunity(title, message, link, action = "Angalia") {
  addNotification({ type: "community", level: "info", title, message, action, link });
}

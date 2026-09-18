const KEY = "wekeza_notifications";
const NOTIFIED_KEY = "wekeza_notified_items";
const MAX = 20;
const FRESH_WINDOW_DAYS = 7; // Notification inaonekana kwa siku 7 tu
const CLEANUP_DAYS = 30; // Notifications za zamani zinafutwa

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

// ============ STORAGE ============
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

// ============ CLEANUP ============
// Futa notifications za zamani (> siku 30)
function cleanupOldNotifications() {
  if (typeof window === "undefined") return;
  const list = getNotifications();
  const cutoff = new Date(Date.now() - CLEANUP_DAYS * 24 * 60 * 60 * 1000);
  const filtered = list.filter((n) => new Date(n.createdAt) >= cutoff);
  if (filtered.length !== list.length) {
    localStorage.setItem(KEY, JSON.stringify(filtered));
  }
}

// ============ TRACKING ============
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
// Kanuni: Notification KWA matukio ya msingi PEKEE
// - Somo la Mwezi: limefunguliwa siku 7 zilizopita
// - Case Study: imefunguliwa siku 7 zilizopita
// - Timely: bado ipo hai (haijaisha)
// - HAKUNA seed, HAKUNA vitu vya zamani

export function autoCheckNotifications({ somoLaMwezi, caseStudies, timely }) {
  if (typeof window === "undefined") return;

  // Safisha notifications za zamani kwanza
  cleanupOldNotifications();

  const now = new Date();
  const freshCutoff = new Date(now.getTime() - FRESH_WINDOW_DAYS * 24 * 60 * 60 * 1000);

  // 1. SOMO LA MWEZI — lililofunguliwa siku 7 zilizopita
  (somoLaMwezi || []).forEach((item) => {
    const notifId = `somo-la-mwezi-${item.slug}`;
    if (isNotified(notifId)) return;
    if (!item.publishDate) return;
    const pubDate = new Date(item.publishDate);
    if (pubDate > now) return;
    if (pubDate < freshCutoff) return; // Zamani sana

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

  // 2. CASE STUDIES — zilizofunguliwa siku 7 zilizopita
  (caseStudies || []).forEach((item) => {
    const notifId = `case-study-${item.slug}`;
    if (isNotified(notifId)) return;
    if (!item.unlockDate) return;
    const unlockDate = new Date(item.unlockDate);
    if (unlockDate > now) return;
    if (unlockDate < freshCutoff) return; // Zamani sana

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

  // 3. TIMELY — bado ipo hai
  (timely || []).forEach((item) => {
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
}

// ============ MANUAL (Kwa Founder) ============
export function notifyCommunity(title, message, link, action = "Angalia") {
  addNotification({ type: "community", level: "info", title, message, action, link });
}

// ============ HAKUNA SEED ============
// Seed imeondolewa — notifications zinatoka kwa matukio halisi pekee

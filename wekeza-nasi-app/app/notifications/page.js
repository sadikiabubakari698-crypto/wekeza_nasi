"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import { getNotifications, markAsRead, markAllAsRead, deleteNotification, TYPE_LABELS } from "../../lib/notifications";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const load = () => setNotifications(getNotifications());

  useEffect(() => {
    load();
    setLoaded(true);
  }, []);

  const handleRead = (id) => { markAsRead(id); load(); };
  const handleMarkAllRead = () => { markAllAsRead(); load(); };
  const handleDelete = (id) => { deleteNotification(id); load(); };

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday.getTime() - 24 * 60 * 60 * 1000);

  const groups = { leo: [], jana: [], zamani: [] };
  notifications.forEach((n) => {
    const d = new Date(n.createdAt);
    if (d >= startOfToday) groups.leo.push(n);
    else if (d >= startOfYesterday) groups.jana.push(n);
    else groups.zamani.push(n);
  });

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };

  const cardStyle = (unread) => ({
    padding: "1rem 1.25rem",
    background: unread ? "#f0fdf4" : "#ffffff",
    border: unread ? "1px solid #86efac" : "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.6rem",
    color: "#1a1a1a",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  });

  const groupTitleStyle = {
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#888888",
    margin: "1.5rem 0 0.5rem 0",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const renderGroup = (title, items) => {
    if (items.length === 0) return null;
    return (
      <>
        <p style={groupTitleStyle}>{title}</p>
        {items.map((n) => (
          <NotifCard key={n.id} n={n} onRead={handleRead} onDelete={handleDelete} cardStyle={cardStyle} />
        ))}
      </>
    );
  };

  return (
    <main style={pageStyle}>
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Taarifa" }]} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <h1 style={{ margin: 0, color: "#1a1a1a" }}>Taarifa</h1>
        {notifications.some((n) => n.status === "unread") && (
          <button onClick={handleMarkAllRead} style={{ background: "transparent", border: "none", color: "#1e7b4c", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline" }}>
            Weka zote kama zimesomwa
          </button>
        )}
      </div>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1rem" }}>
        Taarifa muhimu kwa safari yako ya uwekezaji.
      </p>

      {!loaded ? (
        <p style={{ color: "#888888" }}>Inapakia...</p>
      ) : notifications.length === 0 ? (
        <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600 }}>Hakuna taarifa kwa sasa.</p>
          <p style={{ margin: "0.5rem 0 0 0", color: "#555555", fontSize: "0.9rem" }}>
            Utaarifiwa hapa somo jipya linapotoka, soko linapotokea, au mwanajamii anapojibu.
          </p>
        </div>
      ) : (
        <>
          {renderGroup("Leo", groups.leo)}
          {renderGroup("Jana", groups.jana)}
          {renderGroup("Zamani", groups.zamani)}
        </>
      )}

      <Footer />
    </main>
  );
}

function NotifCard({ n, onRead, onDelete, cardStyle }) {
  const unread = n.status === "unread";
  const label = TYPE_LABELS[n.type] || n.type;

  return (
    <div style={cardStyle(unread)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <div style={{ flex: 1 }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, color: "#1e7b4c", marginBottom: "0.25rem" }}>
            {label}
          </span>
          <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#1a1a1a" }}>{n.title}</h3>
          {n.message && <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem", color: "#555555" }}>{n.message}</p>}
          {n.link && (
            <Link href={n.link} onClick={() => onRead(n.id)} style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.4rem 0.9rem", borderRadius: "var(--radius-pill)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
              {n.action || "Fungua"}
            </Link>
          )}
        </div>
        <button onClick={() => onDelete(n.id)} style={{ background: "transparent", border: "none", color: "#888888", cursor: "pointer", fontSize: "0.9rem", padding: "0.2rem", flexShrink: 0 }} title="Ondoa">✕</button>
      </div>
    </div>
  );
}

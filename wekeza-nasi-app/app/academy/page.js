"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { isLessonUnlocked, hasPassed } from "../../lib/progress";

const LESSONS = [
  { id: "somo1", title: "Somo 1: Hisa ni nini?" },
  { id: "somo2", title: "Somo 2: Kampuni kwa nini huuza hisa?" },
  { id: "somo3", title: "Somo 3: Nani ananunua hisa?" },
  { id: "somo4", title: "Somo 4: Soko la hisa ni nini?" },
  { id: "somo5", title: "Somo 5: Soko la hisa lipo chini ya nani?" },
  { id: "somo6", title: "Somo 6: DSE ni nini?" },
  { id: "somo7", title: "Somo 7: Hisa inanunuaje na kuuzwaje?" },
  { id: "somo8", title: "Somo 8: Bei ya hisa hupanda na kushuka kwa nini?" },
  { id: "somo9", title: "Somo 9: Mwekezaji anapataje faida?" },
  { id: "somo10", title: "Somo 10: Hatari ya uwekezaji ni nini?" },
  { id: "somo11", title: "Somo 11: Diversification" },
  { id: "somo12", title: "Somo 12: Gawio - Masharti na Taratibu" },
  { id: "somo13", title: "Somo 13: IPO ni nini?" },
  { id: "somo14", title: "Somo 14: Stock Split ni nini?" },
  { id: "somo15", title: "Somo 15: Soko la Tanzania linafanyaje kazi?" },
  { id: "somo16", title: "Somo 16: Kuanza kuchambua kampuni" },
  { id: "somo17", title: "Somo 17: Jinsi ya Kusoma Data za DSE" },
  { id: "somo18", title: "Somo 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2" },
  { id: "somo19", title: "Somo 19: Kusoma Mwenendo wa Bei kwa Siku Nyingi" },
  { id: "somo20", title: "Somo 20: Kusoma Ripoti za Fedha (Financial Statements)" },
];

export default function Academy() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    // Soma progress
    const p = JSON.parse(localStorage.getItem("wekeza_progress") || "[]");
    setProgress(p);
    setLoaded(true);
  }, []);

  const cardStyle = (unlocked, passed) => ({
    display: "block",
    padding: "1rem 1.25rem",
    background: unlocked ? (passed ? "#f0fdf4" : "#ffffff") : "#f0f0f0",
    border: passed ? "1px solid #86efac" : "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.6rem",
    color: unlocked ? "#1a1a1a" : "#888888",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: unlocked ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  });

  const statusBadge = (passed, unlocked) => {
    if (passed) {
      return { text: "✓ Imepasi", bg: "#d1fae5", color: "#166534" };
    }
    if (!unlocked) {
      return { text: "🔒 Imefungwa", bg: "#e5e7eb", color: "#6b7280" };
    }
    return { text: "Anza →", bg: "#e3f0ea", color: "#1e7b4c" };
  };

  return (
    <main id="main-content" style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Academy" }]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Academy</h1>
      <p style={{ color: "#555555", marginTop: 0 }}>Jifunze uwekezaji hatua kwa hatua — masomo 20.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {LESSONS.map((l) => {
          const passed = progress.includes(l.id);
          const unlocked = l.id === "somo1" || progress.includes("somo" + (parseInt(l.id.replace("somo", "")) - 1));
          const badge = statusBadge(passed, unlocked);

          if (!unlocked) {
            return (
              <div key={l.id} style={cardStyle(false, false)}>
                <span>{l.title}</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "999px", background: badge.bg, color: badge.color, whiteSpace: "nowrap" }}>
                  {badge.text}
                </span>
              </div>
            );
          }

          return (
            <Link key={l.id} href={"/" + l.id} style={cardStyle(true, passed)}>
              <span>{l.title}</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "999px", background: badge.bg, color: badge.color, whiteSpace: "nowrap" }}>
                {badge.text}
              </span>
            </Link>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}

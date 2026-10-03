"use client";
import { useEffect, useState } from "react";
import SokoMuhtasari from "../../components/SokoMuhtasari";
import { getSokoData } from "../../lib/soko-data";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

const STORAGE_KEY = "wekeza_soko_selected";

export default function Soko() {
  const data = getSokoData();
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const items = Object.values(stored).sort((a, b) => new Date(b.selectedAt) - new Date(a.selectedAt));
      setNews(items);
    } catch (e) {}
  }, []);

  const cardStyle = { background: "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };

  return (
    <main id="main-content" style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Soko" }]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Soko</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Picha ya soko la hisa Tanzania.
      </p>

      <SokoMuhtasari />

      {news.length > 0 && (
        <>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>Habari za Soko</h2>
          {news.map((n, i) => (
            <div key={i} style={cardStyle}>
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", marginBottom: "0.5rem", background: "#e3f0ea", color: "#1e7b4c" }}>
                {n.source}
              </span>
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem", color: "#1a1a1a" }}>{n.title}</h3>
              {n.description && (
                <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.9rem", color: "#555555" }}>{n.description}</p>
              )}
              <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", color: "#1e7b4c", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                Soma →
              </a>
            </div>
          ))}
        </>
      )}

      {news.length === 0 && (
        <div style={{ background: "#f3f7fb", borderLeft: "5px solid #1e7b4c", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginTop: "1.5rem" }}>
          <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600, fontSize: "0.9rem" }}>Karibu WEKEZA NASI</p>
          <p style={{ margin: "0.25rem 0 0.75rem 0", color: "#555555", fontSize: "0.85rem" }}>
            Hujui hisa ni nini? Tunaanza hapa, hatua kwa hatua.
          </p>
          <a href="/somo1" style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
            Somo la 1: Hisa ni nini? →
          </a>
        </div>
      )}

      <Footer />
    </main>
  );
}

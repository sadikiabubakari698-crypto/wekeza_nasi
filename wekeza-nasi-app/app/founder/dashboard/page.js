"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wekeza_soko_selected";

export default function FounderDashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Pakia kile kilichohifadhiwa
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      setSelected(stored);
    } catch (e) {}

    fetch("/api/scrape")
      .then((r) => r.json())
      .then((d) => {
        setNews(d.habari || []);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  const toggle = (item) => {
    const next = { ...selected };
    if (next[item.link]) {
      delete next[item.link];
    } else {
      next[item.link] = {
        title: item.title,
        link: item.link,
        description: item.description,
        source: item.source,
        pubDate: item.pubDate,
        selectedAt: new Date().toISOString(),
      };
    }
    setSelected(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const pageStyle = {
    padding: "2rem",
    maxWidth: "650px",
    margin: "0 auto",
    fontFamily: "var(--font-sans)",
    color: "#1a1a1a",
    background: "#ffffff",
    minHeight: "100vh",
  };

  const cardStyle = (isSel, level) => ({
    background: isSel ? "#f0fdf4" : "#ffffff",
    border: isSel ? "2px solid #1e7b4c" : "1px solid #e9edf2",
    borderLeft: level === "muhimuSana" ? "4px solid #d48d3b" : level === "muhimu" ? "4px solid #1e7b4c" : "4px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "1rem 1.25rem",
    marginBottom: "0.75rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  });

  const badgeStyle = (level) => {
    const colors = {
      muhimuSana: { bg: "#d48d3b", color: "#ffffff", text: "MUHIMU SANA" },
      muhimu: { bg: "#1e7b4c", color: "#ffffff", text: "MUHIMU" },
      kawaida: { bg: "#f3f7fb", color: "#555555", text: "KAWAIDA" },
    };
    return colors[level] || colors.kawaida;
  };

  const btnStyle = (active) => ({
    display: "inline-block",
    padding: "0.4rem 0.9rem",
    background: active ? "#1e7b4c" : "#ffffff",
    color: active ? "#ffffff" : "#1a1a1a",
    border: "1.5px solid #1e7b4c",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.8rem",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "0.4rem",
  });

  const selectedCount = Object.keys(selected).length;

  return (
    <main style={pageStyle}>
      <h1 style={{ marginBottom: "0.25rem" }}>Dashboard ya Chief</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Habari zilizopatikana leo. Chagua ni ipi inaenda Soko Leo.
      </p>

      {saved && (
        <div style={{ background: "#f0fdf4", borderLeft: "4px solid #1e7b4c", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
          <p style={{ margin: 0, color: "#166534", fontWeight: 600, fontSize: "0.9rem" }}>Imehifadhiwa. Soko itaonyesha habari hii.</p>
        </div>
      )}

      {loading && <p style={{ color: "#888888" }}>Inapakia habari...</p>}

      {error && (
        <div style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "1rem", marginBottom: "1rem" }}>
          <p style={{ margin: 0, color: "#991b1b", fontWeight: 600 }}>Kosa: {error}</p>
        </div>
      )}

      {!loading && !error && news.length === 0 && (
        <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#555555" }}>Hakuna habari za soko leo.</p>
          <p style={{ margin: "0.5rem 0 0 0", color: "#888888", fontSize: "0.85rem" }}>
            Hii ni kawaida. Sio kila siku kuna habari za soko.
          </p>
        </div>
      )}

      {!loading && news.length > 0 && (
        <>
          <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "#555555" }}>
              Habari <strong>{news.length}</strong> za soko
            </span>
            <span style={{ fontSize: "0.9rem", color: "#1e7b4c", fontWeight: 700 }}>
              Umechagua: {selectedCount}
            </span>
          </div>

          {news.map((n, i) => {
            const b = badgeStyle(n.level);
            const isSel = !!selected[n.link];
            return (
              <div key={i} style={cardStyle(isSel, n.level)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", letterSpacing: "0.05em", background: b.bg, color: b.color }}>
                    {b.text}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#888888" }}>
                    {n.source} — {new Date(n.pubDate).toLocaleDateString("sw-TZ")}
                  </span>
                </div>

                <h3 style={{ margin: "0 0 0.4rem 0", fontSize: "1rem", lineHeight: 1.4 }}>{n.title}</h3>

                {n.description && (
                  <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.85rem", color: "#555555" }}>{n.description}</p>
                )}

                <div>
                  <a href={n.link} target="_blank" rel="noopener noreferrer" style={btnStyle(false)}>Soma</a>
                  <button style={btnStyle(isSel)} onClick={() => toggle(n)}>
                    {isSel ? "Imechaguliwa" : "Weka Soko"}
                  </button>
                </div>
              </div>
            );
          })}

          {selectedCount > 0 && (
            <div style={{ background: "#f0f6fd", borderLeft: "5px solid #1e7b4c", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginTop: "1.5rem" }}>
              <p style={{ margin: 0, fontWeight: 700, color: "#1a1a1a" }}>Umachagua habari {selectedCount}</p>
              <p style={{ margin: "0.25rem 0 0.75rem 0", fontSize: "0.85rem", color: "#555555" }}>
                Habari hizi zitaonekana kwenye Soko.
              </p>
              <a href="/soko" style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
                Angalia Soko →
              </a>
            </div>
          )}
        </>
      )}
    </main>
  );
}

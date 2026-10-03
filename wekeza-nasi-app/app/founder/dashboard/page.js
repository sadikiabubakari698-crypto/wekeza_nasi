"use client";
import { useEffect, useState } from "react";

export default function FounderDashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
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

  const toggle = (link) => {
    setSelected((p) => ({ ...p, [link]: !p[link] }));
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
    borderLeft: level === "muhimuSana"
      ? "4px solid #d48d3b"
      : level === "muhimu"
      ? "4px solid #1e7b4c"
      : "4px solid #e9edf2",
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

  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <main style={pageStyle}>
      <h1 style={{ marginBottom: "0.25rem" }}>Dashboard ya Chief</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Habari zilizopatikana leo. Chagua ni ipi inaenda Soko Leo.
      </p>

      {loading && <p style={{ color: "#888888" }}>Inapakia habari...</p>}

      {error && (
        <div style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "1rem", marginBottom: "1rem" }}>
          <p style={{ margin: 0, color: "#991b1b", fontWeight: 600 }}>Kosa: {error}</p>
        </div>
      )}

      {!loading && !error && news.length === 0 && (
        <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#555555" }}>Hakuna habari zilizopatikana leo.</p>
        </div>
      )}

      {!loading && news.length > 0 && (
        <>
          <div
            style={{
              background: "#f3f7fb",
              borderRadius: "var(--radius-md)",
              padding: "0.75rem 1rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.9rem", color: "#555555" }}>
              Habari <strong>{news.length}</strong> zimepatikana
            </span>
            <span style={{ fontSize: "0.9rem", color: "#1e7b4c", fontWeight: 700 }}>
              Umechagua: {selectedCount}
            </span>
          </div>

          {news.map((n, i) => {
            const b = badgeStyle(n.level);
            const isSel = selected[n.link];
            return (
              <div key={i} style={cardStyle(isSel, n.level)}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.6rem",
                      borderRadius: "999px",
                      letterSpacing: "0.05em",
                      background: b.bg,
                      color: b.color,
                    }}
                  >
                    {b.text}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#888888" }}>
                    {n.source} — {new Date(n.pubDate).toLocaleDateString("sw-TZ")}
                  </span>
                </div>

                <h3 style={{ margin: "0 0 0.4rem 0", fontSize: "1rem", lineHeight: 1.4 }}>
                  {n.title}
                </h3>

                {n.description && (
                  <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.85rem", color: "#555555" }}>
                    {n.description}
                  </p>
                )}

                <div>
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnStyle(false)}
                  >
                    Soma
                  </a>
                  <button style={btnStyle(isSel)} onClick={() => toggle(n.link)}>
                    {isSel ? "Imechaguliwa" : "Weka Soko"}
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </main>
  );
}

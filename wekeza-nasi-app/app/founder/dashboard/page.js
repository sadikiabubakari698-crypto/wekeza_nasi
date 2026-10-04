"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wekeza_soko_selected";
const DATE_KEY = "wekeza_soko_date";

function todayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}

export default function FounderDashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [uchambuzi, setUchambuzi] = useState({});
  const [analyzing, setAnalyzing] = useState({});
  const [aiResults, setAiResults] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedDate = localStorage.getItem(DATE_KEY);
    const today = todayStr();
    if (savedDate !== today) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(DATE_KEY, today);
    }
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      setSelected(stored);
      const u = {};
      Object.keys(stored).forEach((k) => { u[k] = stored[k].uchambuziWetu || ""; });
      setUchambuzi(u);
    } catch (e) {}
    fetch("/api/scrape")
      .then((r) => r.json())
      .then((d) => { setNews(d.habari || []); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  }, []);

  const toggle = (item) => {
    const next = { ...selected };
    if (next[item.link]) {
      delete next[item.link];
    } else {
      next[item.link] = {
        kichwa: item.title,
        muhtasari: item.description,
        chanzo: item.source,
        tarehe: item.pubDate,
        aina: item.type || "habari",
        uchambuziWetu: uchambuzi[item.link] || "",
        selectedAt: new Date().toISOString(),
      };
    }
    setSelected(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const updateUchambuzi = (link, text) => {
    setUchambuzi((p) => ({ ...p, [link]: text }));
    if (selected[link]) {
      const next = { ...selected };
      next[link].uchambuziWetu = text;
      setSelected(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  };

  const handleAnalyze = async (item) => {
    setAnalyzing((p) => ({ ...p, [item.link]: true }));
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: item.title, description: item.description }),
      });
      const data = await res.json();
      if (data.ok) {
        setAiResults((p) => ({ ...p, [item.link]: data }));
        updateUchambuzi(item.link, data.uchambuzi || data.muhtasari || "");
      } else {
        setAiResults((p) => ({ ...p, [item.link]: { error: data.error } }));
      }
    } catch (e) {
      setAiResults((p) => ({ ...p, [item.link]: { error: e.message } }));
    } finally {
      setAnalyzing((p) => ({ ...p, [item.link]: false }));
    }
  };

  const pageStyle = { padding: "2rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const cardStyle = (isSel, level) => ({
    background: isSel ? "#f0fdf4" : "#ffffff",
    border: isSel ? "2px solid #1e7b4c" : "1px solid #e9edf2",
    borderLeft: level === "muhimuSana" ? "4px solid #d48d3b" : level === "muhimu" ? "4px solid #1e7b4c" : "4px solid #e9edf2",
    borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginBottom: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  });
  const badgeStyle = (level) => {
    const c = {
      muhimuSana: { bg: "#d48d3b", color: "#ffffff", text: "MUHIMU SANA" },
      muhimu: { bg: "#1e7b4c", color: "#ffffff", text: "MUHIMU" },
      kawaida: { bg: "#f3f7fb", color: "#555555", text: "KAWAIDA" },
    };
    return c[level] || c.kawaida;
  };
  const sourceBadgeStyle = (type) => {
    const colors = {
      "tangazo": { bg: "#fef8ee", color: "#d48d3b" },
      "taarifa": { bg: "#e8f0f8", color: "#16633d" },
      "habari": { bg: "#e3f0ea", color: "#1e7b4c" },
    };
    return colors[type] || colors.habari;
  };
  const btnStyle = (active, color) => ({
    display: "inline-block", padding: "0.4rem 0.9rem",
    background: active ? (color || "#1e7b4c") : "#ffffff",
    color: active ? "#ffffff" : "#1a1a1a",
    border: "1.5px solid " + (color || "#1e7b4c"),
    borderRadius: "var(--radius-pill)", fontSize: "0.8rem", fontWeight: 600,
    cursor: "pointer", textDecoration: "none", marginRight: "0.4rem",
  });
  const textareaStyle = { width: "100%", padding: "0.75rem", fontSize: "0.9rem", border: "1.5px solid #e9edf2", borderRadius: "var(--radius-md)", background: "#ffffff", color: "#1a1a1a", fontFamily: "inherit", minHeight: "80px", marginTop: "0.5rem", boxSizing: "border-box" };
  const aiBoxStyle = { background: "#f0f6fd", borderLeft: "4px solid #1e7b4c", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", marginTop: "0.75rem" };

  const selectedCount = Object.keys(selected).length;

  return (
    <main style={pageStyle}>
      <h1 style={{ marginBottom: "0.25rem" }}>Dashboard ya Chief</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>Habari za soko leo. Chagua, chambua kwa AI, na uandike uchambuzi.</p>

      {loading && <p style={{ color: "#888888" }}>Inapakia habari...</p>}
      {error && <div style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "1rem", marginBottom: "1rem" }}><p style={{ margin: 0, color: "#991b1b", fontWeight: 600 }}>Kosa: {error}</p></div>}

      {!loading && !error && news.length === 0 && (
        <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#555555" }}>Hakuna habari za soko leo.</p>
          <p style={{ margin: "0.5rem 0 0 0", color: "#888888", fontSize: "0.85rem" }}>Hii ni kawaida. Sio kila siku kuna habari za soko.</p>
        </div>
      )}

      {!loading && news.length > 0 && (
        <>
          <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "#555555" }}>Habari <strong>{news.length}</strong></span>
            <span style={{ fontSize: "0.9rem", color: "#1e7b4c", fontWeight: 700 }}>Umechagua: {selectedCount}</span>
          </div>

          {news.map((n, i) => {
            const b = badgeStyle(n.level);
            const sb = sourceBadgeStyle(n.type || "habari");
            const isSel = !!selected[n.link];
            const isAnalyzing = analyzing[n.link];
            const ai = aiResults[n.link];
            return (
              <div key={i} style={cardStyle(isSel, n.level)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", letterSpacing: "0.05em", background: b.bg, color: b.color }}>{b.text}</span>
                    <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", background: sb.bg, color: sb.color }}>{n.source}</span>
                    {n.type === "tangazo" && <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", background: "#f3e8fd", color: "#6b21a8" }}>TANGAZO</span>}
                    {n.type === "taarifa" && <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", background: "#f3e8fd", color: "#6b21a8" }}>TAARIFA</span>}
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#888888" }}>{new Date(n.pubDate).toLocaleDateString("sw-TZ")}</span>
                </div>
                <h3 style={{ margin: "0 0 0.4rem 0", fontSize: "1rem", lineHeight: 1.4 }}>{n.title}</h3>
                {n.description && <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.85rem", color: "#555555" }}>{n.description}</p>}
                <div>
                  <button style={btnStyle(isAnalyzing, "#d48d3b")} onClick={() => handleAnalyze(n)} disabled={isAnalyzing}>{isAnalyzing ? "Inachambua..." : "Chambua kwa AI"}</button>
                  <button style={btnStyle(isSel)} onClick={() => toggle(n)}>{isSel ? "Imechaguliwa" : "Weka Soko"}</button>
                  <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle(false), borderColor: "#888", color: "#555" }}>Chanzo</a>
                </div>
                {ai && ai.ok && (
                  <div style={aiBoxStyle}>
                    <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 700, color: "#1e7b4c", textTransform: "uppercase" }}>AI Uchambuzi</p>
                    {ai.muhtasari && <p style={{ margin: "0.4rem 0 0 0", fontSize: "0.85rem" }}><strong>Muhtasari:</strong> {ai.muhtasari}</p>}
                    {ai.uchambuzi && <p style={{ margin: "0.4rem 0 0 0", fontSize: "0.85rem" }}><strong>Uchambuzi:</strong> {ai.uchambuzi}</p>}
                    {ai.maswali && ai.maswali.length > 0 && (
                      <div style={{ marginTop: "0.4rem" }}>
                        <p style={{ margin: 0, fontSize: "0.85rem" }}><strong>Maswali:</strong></p>
                        <ol style={{ margin: "0.2rem 0 0 1.2rem", padding: 0, fontSize: "0.85rem" }}>
                          {ai.maswali.map((q, j) => <li key={j}>{q}</li>)}
                        </ol>
                      </div>
                    )}
                  </div>
                )}
                {ai && !ai.ok && <div style={{ background: "#fef2f2", borderRadius: "var(--radius-md)", padding: "0.75rem", marginTop: "0.75rem", fontSize: "0.8rem", color: "#991b1b" }}>Kosa: {ai.error}</div>}
                {isSel && (
                  <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #e9edf2" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>Uchambuzi Wetu:</label>
                    <textarea style={textareaStyle} placeholder="Andika au hariri uchambuzi..." value={uchambuzi[n.link] || ""} onChange={(e) => updateUchambuzi(n.link, e.target.value)} />
                  </div>
                )}
              </div>
            );
          })}

          {selectedCount > 0 && (
            <div style={{ background: "#f0f6fd", borderLeft: "5px solid #1e7b4c", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", marginTop: "1.5rem" }}>
              <p style={{ margin: 0, fontWeight: 700 }}>Umechagua habari {selectedCount}</p>
              <a href="/soko" style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", marginTop: "0.5rem" }}>Angalia Soko →</a>
            </div>
          )}
        </>
      )}
    </main>
  );
}

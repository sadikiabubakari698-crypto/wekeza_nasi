"use client";
import { useEffect, useState } from "react";

export default function FounderDashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", color: "#1a1a1a" }}>
      <h1>Dashboard ya Chief</h1>
      {loading && <p>Inapakia habari...</p>}
      {error && <p style={{ color: "#991b1b" }}>Kosa: {error}</p>}
      {!loading && !error && (
        <>
          <p>Habari <strong>{news.length}</strong> zimepatikana.</p>
          {news.map((n, i) => (
            <div key={i} style={{ background: "#f3f7fb", padding: "1rem", borderRadius: "8px", marginBottom: "0.5rem" }}>
              <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "0.95rem" }}>{n.title}</h3>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#555" }}>{n.source}</p>
            </div>
          ))}
        </>
      )}
    </main>
  );
}

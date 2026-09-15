"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import { searchAll, getCategories } from "../../lib/search-index";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState(null);
  const categories = getCategories();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setResults(searchAll(query));
  }, [query]);

  const filtered = filter ? results.filter((r) => r.type === filter) : results;

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1.1rem",
    fontSize: "1rem",
    border: "2px solid #1e7b4c",
    borderRadius: "var(--radius-pill)",
    outline: "none",
    color: "#1a1a1a",
    background: "#ffffff",
    boxSizing: "border-box",
  };

  const chipStyle = (active) => ({
    padding: "0.4rem 0.9rem",
    background: active ? "#1e7b4c" : "#f3f7fb",
    color: active ? "#ffffff" : "#1a1a1a",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.8rem",
    fontWeight: 600,
    cursor: "pointer",
  });

  const cardStyle = {
    display: "block",
    padding: "1rem 1.25rem",
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.6rem",
    color: "#1a1a1a",
    textDecoration: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const badgeStyle = (type) => {
    const colors = {
      "Somo": { bg: "#e3f0ea", color: "#1e7b4c" },
      "Kampuni": { bg: "#fef8ee", color: "#d48d3b" },
      "Soko": { bg: "#e8f0f8", color: "#16633d" },
      "Somo la Mwezi": { bg: "#f3e8fd", color: "#6b21a8" },
    };
    return colors[type] || { bg: "#f0f0f0", color: "#555555" };
  };

  return (
    <main style={pageStyle}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Tafuta" },
      ]} />

      <h1 style={{ marginBottom: "0.25rem", color: "#1a1a1a" }}>Tafuta</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Tafuta masomo, kampuni, na uchambuzi wa soko.
      </p>

      <input
        type="text"
        placeholder="Andika kitu... (mfano: CRDB, gawio, IPO)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
        autoFocus
      />

      {query.length >= 2 && (
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setFilter(null)}
            style={chipStyle(filter === null)}
          >
            Zote ({results.length})
          </button>
          {categories.map((cat) => {
            const count = results.filter((r) => r.type === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={chipStyle(filter === cat)}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        {query.length < 2 && (
          <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
            <p style={{ margin: 0, color: "#555555", fontSize: "0.9rem" }}>
              Andika herufi 2 au zaidi ili kuanza kutafuta.
            </p>
          </div>
        )}

        {query.length >= 2 && filtered.length === 0 && (
          <div style={{ background: "#fef8ee", borderLeft: "5px solid #d48d3b", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
            <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600 }}>
              Hakuna matokeo kwa "{query}".
            </p>
            <p style={{ margin: "0.5rem 0 0 0", color: "#555555", fontSize: "0.9rem" }}>
              Jaribu neno lingine — mfano "hisa", "CRDB", "gawio".
            </p>
          </div>
        )}

        {filtered.map((item, i) => {
          const badge = badgeStyle(item.type);
          return (
            <Link key={i} href={item.href} style={cardStyle}>
              <span style={{
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.15rem 0.6rem",
                borderRadius: "999px",
                marginBottom: "0.5rem",
                background: badge.bg,
                color: badge.color,
                letterSpacing: "0.03em",
              }}>
                {item.type}
              </span>
              <h3 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1rem" }}>
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}

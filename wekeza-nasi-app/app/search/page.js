"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import { searchAll, getCategories, POPULAR_SEARCHES } from "../../lib/search-index";

const RECENT_KEY = "wekeza_recent_searches";
const MAX_RECENT = 5;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState(null);
  const [recent, setRecent] = useState([]);
  const inputRef = useRef(null);
  const categories = getCategories();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    setRecent(saved);
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setResults(searchAll(query));
  }, [query]);

  const saveRecent = (q) => {
    if (!q || q.length < 2) return;
    const trimmed = q.trim();
    const updated = [trimmed, ...recent.filter((r) => r !== trimmed)].slice(0, MAX_RECENT);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  const clearRecent = () => {
    setRecent([]);
    localStorage.removeItem(RECENT_KEY);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.length >= 2) saveRecent(query);
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    saveRecent(text);
    if (inputRef.current) inputRef.current.focus();
  };

  const filtered = filter ? results.filter((r) => r.type === filter) : results;

  const pageStyle = { padding: "1.75rem", maxWidth: "700px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const inputStyle = { width: "100%", padding: "0.9rem 1.1rem", fontSize: "1rem", border: "2px solid #1e7b4c", borderRadius: "var(--radius-pill)", outline: "none", color: "#1a1a1a", background: "#ffffff", boxSizing: "border-box" };
  const chipStyle = (active) => ({ padding: "0.4rem 0.9rem", background: active ? "#1e7b4c" : "#f3f7fb", color: active ? "#ffffff" : "#1a1a1a", border: "1px solid #e9edf2", borderRadius: "var(--radius-pill)", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" });
  const cardStyle = { display: "block", padding: "1rem 1.25rem", background: "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-md)", marginBottom: "0.6rem", color: "#1a1a1a", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };
  const sectionTitleStyle = { fontSize: "0.85rem", fontWeight: 700, color: "#888888", margin: "1.5rem 0 0.75rem 0", textTransform: "uppercase", letterSpacing: "0.05em" };
  const pillBtnStyle = { padding: "0.5rem 1rem", background: "#f3f7fb", color: "#1a1a1a", border: "1px solid #e9edf2", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer" };

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
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Tafuta" }]} />

      <h1 style={{ marginBottom: "0.25rem", color: "#1a1a1a" }}>Tafuta</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Tafuta masomo, kampuni, na uchambuzi wa soko.
      </p>

      <form onSubmit={handleSearchSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Andika kitu... (mfano: CRDB, gawio, IPO)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={inputStyle}
        />
      </form>

      {/* Query < 2 — Onyesha suggestions + recent */}
      {query.length < 2 && (
        <>
          {/* Recent searches */}
          {recent.length > 0 && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={sectionTitleStyle}>Umetafuta Hivi Karibuni</p>
                <button onClick={clearRecent} style={{ background: "transparent", border: "none", color: "#888888", fontSize: "0.8rem", cursor: "pointer", textDecoration: "underline" }}>
                  Safisha
                </button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {recent.map((r, i) => (
                  <button key={i} onClick={() => handleSuggestionClick(r)} style={pillBtnStyle}>
                    {r}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Popular searches */}
          <p style={sectionTitleStyle}>Yanayotafutwa Sana</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {POPULAR_SEARCHES.map((s, i) => (
              <button key={i} onClick={() => handleSuggestionClick(s)} style={pillBtnStyle}>
                {s}
              </button>
            ))}
          </div>

          <p style={{ marginTop: "2rem", color: "#888888", fontSize: "0.85rem", textAlign: "center" }}>
            Andika herufi 2 au zaidi ili kuanza kutafuta.
          </p>
        </>
      )}

      {/* Query >= 2 — Filters */}
      {query.length >= 2 && (
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button onClick={() => setFilter(null)} style={chipStyle(filter === null)}>
            Zote ({results.length})
          </button>
          {categories.map((cat) => {
            const count = results.filter((r) => r.type === cat).length;
            if (count === 0) return null;
            return (
              <button key={cat} onClick={() => setFilter(cat)} style={chipStyle(filter === cat)}>
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Results */}
      <div style={{ marginTop: "1.5rem" }}>
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
            <Link key={i} href={item.href} style={cardStyle} onClick={() => saveRecent(query)}>
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", marginBottom: "0.5rem", background: badge.bg, color: badge.color, letterSpacing: "0.03em" }}>
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

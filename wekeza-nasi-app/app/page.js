import { getAllPlannedItems } from "../lib/content-engine";
import MonthlyContent from "../components/MonthlyContent";

export default function Home() {
  const allPlanned = getAllPlannedItems();

  const cardStyle = {
    display: "block",
    padding: "1.25rem",
    background: "#f7f7f7",
    borderRadius: "12px",
    marginBottom: "1rem",
    color: "#1a1a1a",
    textDecoration: "none",
  };

  const mainCardStyle = {
    display: "block",
    padding: "1.5rem",
    background: "#1e7b4c",
    borderRadius: "12px",
    marginBottom: "1rem",
    color: "#ffffff",
    textDecoration: "none",
  };

  const statBoxStyle = {
    background: "#f3f7fb",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    flex: 1,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <p style={{ color: "#555", marginTop: 0 }}>Jenga maarifa. Jenga uwezo.</p>

      {/* ANZA HAPA */}
      <a href="/somo1" style={mainCardStyle}>
        <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9, fontWeight: 600 }}>MPYA WEKEZA NASI?</p>
        <h3 style={{ margin: "0.25rem 0", color: "#ffffff" }}>Anza na Somo la 1: Hisa ni nini?</h3>
        <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Tuanze safari yetu hapa, hatua kwa hatua →</p>
      </a>

      {/* SAFARI YANGU */}
      <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>Safari Yangu</h2>

      <a href="/academy" style={cardStyle}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>📚 Academy</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Masomo 20 — kujifunza uwekezaji hatua kwa hatua.</p>
      </a>

      <a href="/somo-la-mwezi/crdb-2026-09" style={cardStyle}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>🎯 Somo la Mwezi</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Uchambuzi wa kina wa kampuni moja kila mwezi.</p>
      </a>

      <a href="/kampuni" style={cardStyle}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>🏢 Uchambuzi wa Kampuni</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Kampuni 8 — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE.</p>
      </a>

      <a href="/soko" style={cardStyle}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>📊 Uchambuzi wa Soko</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Nini kimetokea? Kwa nini? Ushahidi unasemaje?</p>
      </a>

      <div style={{ ...cardStyle, background: "#f0f0f0", opacity: 0.7 }}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>🤖 AI</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Inakuja hivi karibuni.</p>
      </div>

      <div style={{ ...cardStyle, background: "#f0f0f0", opacity: 0.7 }}>
        <h3 style={{ margin: 0, color: "#1a1a1a" }}>👥 Community</h3>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>Inakuja hivi karibuni.</p>
      </div>

      {/* MAENDELEO */}
      <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>Maendeleo Yetu</h2>
      <div style={gridStyle}>
        <div style={statBoxStyle}>
          <p style={{ margin: 0, fontSize: "1.75rem", fontWeight: 700, color: "#1e7b4c" }}>20</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>Masomo</p>
        </div>
        <div style={statBoxStyle}>
          <p style={{ margin: 0, fontSize: "1.75rem", fontWeight: 700, color: "#1e7b4c" }}>8</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>Kampuni</p>
        </div>
      </div>

      {/* SOMO LA MWEZI (FEATURED) */}
      <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>Somo la Mwezi</h2>
      <MonthlyContent items={allPlanned} />

      {/* FOOTER */}
      <p style={{ marginTop: "2.5rem", fontSize: "0.8rem", color: "#888", textAlign: "center", borderTop: "1px solid #eee", paddingTop: "1.5rem" }}>
        WEKEZA NASI — Mshirika wa safari yako ya uwekezaji.
      </p>
    </main>
  );
}

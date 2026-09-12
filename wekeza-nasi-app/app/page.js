import { getAllPlannedItems } from "../lib/content-engine";
import MonthlyContent from "../components/MonthlyContent";
import Footer from "../components/Footer";

export default function Home() {
  const allPlanned = getAllPlannedItems();

  const mainCardStyle = {
    display: "block",
    padding: "1.5rem",
    background: "#1e7b4c",
    borderRadius: "12px",
    marginBottom: "1rem",
    color: "#ffffff",
    textDecoration: "none",
  };

  // Slide cards (horizontal carousel)
  const slideCardStyle = {
    flex: "0 0 70%",
    scrollSnapAlign: "start",
    display: "block",
    padding: "1.25rem",
    background: "#f7f7f7",
    borderRadius: "12px",
    color: "#1a1a1a",
    textDecoration: "none",
    minHeight: "130px",
  };

  const carouselStyle = {
    display: "flex",
    gap: "0.75rem",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    paddingBottom: "0.75rem",
    marginLeft: "-2rem",
    marginRight: "-2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
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

  const slides = [
    {
      href: "/academy",
      title: "Academy",
      subtitle: "Masomo 20 — kujifunza uwekezaji hatua kwa hatua.",
    },
    {
      href: "/somo-la-mwezi/crdb-2026-09",
      title: "Somo la Mwezi",
      subtitle: "Uchambuzi wa kina wa kampuni moja kila mwezi.",
    },
    {
      href: "/kampuni",
      title: "Uchambuzi wa Kampuni",
      subtitle: "Kampuni 8 — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE.",
    },
    {
      href: "/soko",
      title: "Uchambuzi wa Soko",
      subtitle: "Nini kimetokea? Kwa nini? Ushahidi unasemaje?",
    },
    {
      href: null,
      title: "AI",
      subtitle: "Inakuja hivi karibuni.",
      comingSoon: true,
    },
    {
      href: null,
      title: "Community",
      subtitle: "Inakuja hivi karibuni.",
      comingSoon: true,
    },
  ];

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

      {/* SAFARI YANGU — CAROUSEL */}
      <h2 style={{ marginTop: "2rem", color: "#1a1a1a", marginBottom: "0.75rem" }}>Safari Yangu</h2>
      <div style={carouselStyle}>
        {slides.map((s, i) => {
          if (s.comingSoon) {
            return (
              <div key={i} style={{ ...slideCardStyle, background: "#f0f0f0", opacity: 0.7 }}>
                <h3 style={{ margin: 0, color: "#1a1a1a" }}>{s.title}</h3>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>{s.subtitle}</p>
              </div>
            );
          }
          return (
            <a key={i} href={s.href} style={slideCardStyle}>
              <h3 style={{ margin: 0, color: "#1a1a1a" }}>{s.title}</h3>
              <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#555" }}>{s.subtitle}</p>
            </a>
          );
        })}
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

      {/* SOMO LA MWEZI */}
      <h2 style={{ marginTop: "2rem", color: "#1a1a1a" }}>Somo la Mwezi</h2>
      <MonthlyContent items={allPlanned} />

      <Footer />
    </main>
  );
}

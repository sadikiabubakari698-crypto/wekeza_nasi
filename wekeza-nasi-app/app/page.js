import { getAllPlannedItems } from "../lib/content-engine";
import MonthlyContent from "../components/MonthlyContent";
import Footer from "../components/Footer";

export default function Home() {
  const allPlanned = getAllPlannedItems();

  const heroStyle = {
    background: "linear-gradient(135deg, #1e7b4c 0%, #16633d 100%)",
    borderRadius: "var(--radius-lg)",
    padding: "1.75rem 1.5rem",
    color: "#ffffff",
    marginBottom: "2rem",
    boxShadow: "var(--shadow-md)",
  };

  const heroTitleStyle = {
    fontSize: "1.75rem",
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    margin: "0 0 0.5rem 0",
    color: "#ffffff",
  };

  const heroSubStyle = {
    fontSize: "0.98rem",
    lineHeight: 1.5,
    opacity: 0.95,
    margin: "0 0 1.25rem 0",
    color: "#ffffff",
  };

  const ctaPrimaryStyle = {
    display: "inline-block",
    padding: "0.7rem 1.35rem",
    background: "#ffffff",
    color: "#1e7b4c",
    fontWeight: 700,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    textDecoration: "none",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  };

  const ctaSecondaryStyle = {
    display: "inline-block",
    padding: "0.7rem 1.35rem",
    background: "transparent",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    textDecoration: "none",
    border: "1.5px solid rgba(255,255,255,0.6)",
    marginBottom: "0.5rem",
  };

  const slideCardStyle = {
    flex: "0 0 72%",
    scrollSnapAlign: "start",
    display: "block",
    padding: "1.25rem",
    background: "#ffffff",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    textDecoration: "none",
    minHeight: "150px",
    border: "1px solid var(--color-border)",
    boxShadow: "var(--shadow-sm)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
  };

  const carouselStyle = {
    display: "flex",
    gap: "0.75rem",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    paddingBottom: "0.75rem",
    marginLeft: "-1.75rem",
    marginRight: "-1.75rem",
    paddingLeft: "1.75rem",
    paddingRight: "1.75rem",
  };

  const statBoxStyle = {
    background: "#ffffff",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem 1rem",
    textAlign: "center",
    flex: 1,
    boxShadow: "var(--shadow-sm)",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.35rem",
    fontWeight: 700,
    color: "var(--color-text)",
    marginTop: "2rem",
    marginBottom: "0.75rem",
    letterSpacing: "-0.01em",
  };

  const slides = [
    { href: "/academy", title: "Academy", subtitle: "Masomo 20 — kujifunza uwekezaji hatua kwa hatua." },
    { href: "/somo-la-mwezi/crdb-2026-09", title: "Somo (Mwezi)", subtitle: "Uchambuzi wa kina wa kampuni moja kila mwezi." },
    { href: "/kampuni", title: "Uchambuzi wa Kampuni", subtitle: "Kampuni 8 — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE." },
    { href: "/soko", title: "Uchambuzi wa Soko", subtitle: "Nini kimetokea? Kwa nini? Ushahidi unasemaje?" },
    { href: null, title: "AI", subtitle: "Inakuja hivi karibuni.", comingSoon: true },
    { href: null, title: "Community", subtitle: "Inakuja hivi karibuni.", comingSoon: true },
  ];

  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "var(--color-text)", background: "var(--color-bg)", minHeight: "100vh" }}>
      <section style={heroStyle}>
        <h1 style={heroTitleStyle}>Jifunze Uwekezaji. Anza Safari.</h1>
        <p style={heroSubStyle}>
          Elimu ya uwekezaji kwa Kiswahili rahisi. Afrika (Tanzania).
        </p>
        <a href="/somo1" style={ctaPrimaryStyle}>Anza Somo la 1 →</a>
        <a href="/kampuni" style={ctaSecondaryStyle}>Chunguza Kampuni</a>
      </section>

      <h2 style={sectionTitleStyle}>Safari Yangu</h2>
      <div style={carouselStyle} className="scroll-x">
        {slides.map((s, i) => {
          if (s.comingSoon) {
            return (
              <div key={i} style={{ ...slideCardStyle, background: "#f0f0f0", opacity: 0.7, boxShadow: "none" }}>
                <h3 style={{ margin: 0, color: "var(--color-text)", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{s.subtitle}</p>
              </div>
            );
          }
          return (
            <a key={i} href={s.href} style={slideCardStyle}>
              <h3 style={{ margin: 0, color: "var(--color-text)", fontSize: "1.1rem" }}>{s.title}</h3>
              <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{s.subtitle}</p>
            </a>
          );
        })}
      </div>

      <h2 style={sectionTitleStyle}>Maendeleo Yetu</h2>
      <div style={gridStyle}>
        <div style={statBoxStyle}>
          <p style={{ margin: 0, fontSize: "1.75rem", fontWeight: 700, color: "var(--color-primary)" }}>20</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Masomo</p>
        </div>
        <div style={statBoxStyle}>
          <p style={{ margin: 0, fontSize: "1.75rem", fontWeight: 700, color: "var(--color-primary)" }}>8</p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Kampuni</p>
        </div>
      </div>

      <h2 style={sectionTitleStyle}>Somo (Mwezi)</h2>
      <MonthlyContent items={allPlanned} />

      <Footer />
    </main>
  );
}

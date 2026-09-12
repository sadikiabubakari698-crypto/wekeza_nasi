import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Uchambuzi wa Kampuni 8 za DSE",
  description:
    "Uchambuzi wa kina wa kampuni 8 za DSE: CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE Plc.",
};

export default function Kampuni() {
  const companies = [
    { href: "/kampuni/crdb", name: "CRDB Bank Plc", sector: "Benki" },
    { href: "/kampuni/nmb", name: "NMB Bank Plc", sector: "Benki" },
    { href: "/kampuni/tbl", name: "Tanzania Breweries Plc (TBL)", sector: "Vinywaji" },
    { href: "/kampuni/vodacom", name: "Vodacom Tanzania Plc", sector: "Mawasiliano" },
    { href: "/kampuni/tcc", name: "Tanzania Cigarette Company (TCC)", sector: "Bidhaa za Matumizi" },
    { href: "/kampuni/tpcc", name: "TPCC — Twiga Cement", sector: "Ujenzi / Saruji" },
    { href: "/kampuni/swissport", name: "Swissport Tanzania Plc", sector: "Huduma za Anga" },
    { href: "/kampuni/dse", name: "DSE Plc — Dar es Salaam Stock Exchange", sector: "Soko la Hisa" },
  ];

  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Kampuni" },
      ]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Uchambuzi wa Kampuni</h1>
      <p style={{ color: "#555555", marginTop: 0 }}>Jifunze kampuni, historia yake, inavyofanya kazi, na inavyotengeneza fedha.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {companies.map((c) => (
          <a
            key={c.href}
            href={c.href}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              background: "#ffffff",
              border: "1px solid #e9edf2",
              borderRadius: "var(--radius-md)",
              marginBottom: "0.6rem",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {c.name}
            <div style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#666666", marginTop: "0.2rem" }}>
              {c.sector}
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </main>
  );
}

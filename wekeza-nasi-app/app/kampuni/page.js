export default function Kampuni() {
  const companies = [
    { href: "/kampuni/crdb", name: "CRDB Bank Plc", sector: "Benki" },
    { href: "/kampuni/nmb", name: "NMB Bank Plc", sector: "Benki" },
    { href: "/kampuni/tbl", name: "Tanzania Breweries Plc (TBL)", sector: "Vinywaji" },
    { href: "/kampuni/vodacom", name: "Vodacom Tanzania Plc", sector: "Mawasiliano" },
    { href: "/kampuni/tcc", name: "Tanzania Cigarette Company (TCC)", sector: "Bidhaa za Matumizi" },
    { href: "/kampuni/tpcc", name: "TPCC — Twiga Cement", sector: "Ujenzi / Saruji" },
    { href: "/kampuni/swissport", name: "Swissport Tanzania Plc", sector: "Huduma za Anga" },
  ];

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a" }}>Uchambuzi wa Kampuni</h1>
      <p style={{ color: "#1a1a1a" }}>Jifunze kampuni, historia yake, inavyofanya kazi, na inavyotengeneza fedha.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {companies.map((c) => (
          <a
            key={c.href}
            href={c.href}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              background: "#f7f7f7",
              borderRadius: "10px",
              marginBottom: "0.75rem",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {c.name}
            <div style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#666", marginTop: "0.2rem" }}>
              {c.sector}
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: "2rem" }}>
        <a href="/" style={{ color: "#1a1a1a" }}>← Rudi Nyumbani</a>
      </p>
    </main>
  );
}

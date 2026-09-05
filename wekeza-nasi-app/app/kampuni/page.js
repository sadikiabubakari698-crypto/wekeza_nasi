export default function Kampuni() {
  const link = { display: "block", padding: "1rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1rem", color: "#1a1a1a", textDecoration: "none", fontWeight: "bold" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Uchambuzi wa Kampuni</h2>
      <p>Jifunze kampuni, historia yake, inavyofanya kazi, na inavyotengeneza fedha.</p>
      <a href="/kampuni/crdb" style={link}>CRDB Bank Plc</a>
      <a href="/kampuni/nmb" style={link}>NMB Bank Plc</a>
      <a href="/kampuni/tbl" style={link}>Tanzania Breweries Plc (TBL)</a>
      <a href="/kampuni/vodacom" style={link}>Vodacom Tanzania Plc</a>
      <a href="/kampuni/tcc" style={link}>Tanzania Cigarette Company (TCC)</a>
      <p><a href="/">&larr; Rudi Nyumbani</a></p>
    </main>
  );
}

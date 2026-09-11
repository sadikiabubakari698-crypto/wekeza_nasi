import Link from "next/link";

export default function Footer() {
  const linkStyle = { color: "#1e7b4c", textDecoration: "none", fontWeight: 500 };

  return (
    <footer style={{
      marginTop: "3rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid #e9edf2",
      fontSize: "0.85rem",
      color: "#888",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
        <Link href="/" style={linkStyle}>Nyumbani</Link>
        <Link href="/academy" style={linkStyle}>Academy</Link>
        <Link href="/somo-la-mwezi/crdb-2026-09" style={linkStyle}>Somo la Mwezi</Link>
        <Link href="/kampuni" style={linkStyle}>Kampuni</Link>
        <Link href="/soko" style={linkStyle}>Soko</Link>
      </div>
      <p style={{ margin: 0, textAlign: "center" }}>
        WEKEZA NASI — Mshirika wa safari yako ya uwekezaji.
      </p>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  const linkStyle = { color: "#1e7b4c", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem" };
  const headerStyle = { color: "var(--color-text)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" };
  const columnStyle = { flex: "1 1 100%", minWidth: "160px" };

  return (
    <footer style={{
      marginTop: "3rem",
      paddingTop: "2rem",
      borderTop: "1px solid var(--color-border)",
      color: "var(--color-text-muted)",
      fontSize: "0.9rem",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem" }}>
        {/* Column 1: Brand */}
        <div style={columnStyle}>
          <p style={{ fontWeight: 800, fontSize: "1.05rem", color: "#1e7b4c", margin: "0 0 0.5rem 0" }}>
            WEKEZA NASI
          </p>
          <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.5, color: "#666" }}>
            Mshirika wa safari yako ya uwekezaji. Elimu kwa Kiswahili rahisi.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div style={columnStyle}>
          <p style={headerStyle}>Kurasa</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/" style={linkStyle}>Nyumbani</Link>
            <Link href="/academy" style={linkStyle}>Academy</Link>
            <Link href="/somo-la-mwezi/crdb-2026-09" style={linkStyle}>Somo (Mwezi)</Link>
            <Link href="/kampuni" style={linkStyle}>Kampuni</Link>
            <Link href="/soko" style={linkStyle}>Soko</Link>
          </div>
        </div>

        {/* Column 3: Kuhusu */}
        <div style={columnStyle}>
          <p style={headerStyle}>Kuhusu</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", color: "#666" }}>
            <span>Elimu ya uwekezaji</span>
            <span>Kuanzia Tanzania</span>
            <span>Kwa Afrika</span>
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: "1.5rem",
        borderTop: "1px solid var(--color-border)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "0.8rem",
        color: "#888",
      }}>
        <span>© 2026 WEKEZA NASI. Haki zote zimehifadhiwa.</span>
        <span>Kwa elimu tu — sio ushauri wa kifedha.</span>
      </div>
    </footer>
  );
}

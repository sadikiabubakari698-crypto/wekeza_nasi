import SokoMuhtasari from "../../components/SokoMuhtasari";
import { getSokoData } from "../../lib/soko-data";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Soko Leo",
  description: "Picha ya soko la hisa Tanzania — bei, DSEI, tukio la sasa na lijalo.",
};

export default function Soko() {
  const data = getSokoData();

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem",
    marginBottom: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const badgeStyle = (color, bg) => ({
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.15rem 0.6rem",
    borderRadius: "999px",
    letterSpacing: "0.05em",
    marginBottom: "0.5rem",
    color: color,
    background: bg,
  });

  return (
    <main id="main-content" style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Soko" }]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Soko</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Picha ya soko la hisa Tanzania.
      </p>

      <SokoMuhtasari />

      {/* TUKIO LA SASA */}
      {data.tukioLaSasa && (
        <div style={{ ...cardStyle, borderLeft: "4px solid #d48d3b", background: "#fef8ee" }}>
          <span style={badgeStyle("#ffffff", "#d48d3b")}>🚨 TUKIO LA SASA</span>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#1a1a1a", fontSize: "1.05rem" }}>{data.tukioLaSasa.kichwa}</h3>
          <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.9rem", color: "#555555" }}>{data.tukioLaSasa.muhtasari}</p>
          <a href={data.tukioLaSasa.link} style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
            Soma Uchambuzi →
          </a>
        </div>
      )}

      {/* TUKIO LIJALO */}
      {data.tukioLijalo && (
        <div style={{ ...cardStyle, borderLeft: "4px solid #1e7b4c", background: "#f0f6fd" }}>
          <span style={badgeStyle("#ffffff", "#1e7b4c")}>🔮 TUKIO LIJALO</span>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#1a1a1a", fontSize: "1.05rem" }}>{data.tukioLijalo.kichwa}</h3>
          <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.9rem", color: "#555555" }}>{data.tukioLijalo.muhtasari}</p>
          <a href={data.tukioLijalo.link} style={{ display: "inline-block", color: "#1e7b4c", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
            Angalia Zaidi →
          </a>
        </div>
      )}

      {/* KIUNGO CHA ACADEMY */}
      <div style={{ background: "#f0f6fd", borderLeft: "5px solid #1e7b4c", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", marginTop: "1.5rem" }}>
        <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600, fontSize: "0.9rem" }}>📚 Karibu WEKEZA NASI</p>
        <p style={{ margin: "0.25rem 0 0.75rem 0", color: "#555555", fontSize: "0.85rem" }}>
          Hujui hisa ni nini? Tunaanza hapa, hatua kwa hatua.
        </p>
        <a href="/somo1" style={{ display: "inline-block", background: "#1e7b4c", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "var(--radius-pill)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
          Somo la 1: Hisa ni nini? →
        </a>
      </div>

      <Footer />
    </main>
  );
}

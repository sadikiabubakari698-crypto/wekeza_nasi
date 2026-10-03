import SokoMuhtasari from "../../components/SokoMuhtasari";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Soko Leo",
  description: "Muhtasari wa soko la hisa Tanzania — bei, DSEI, na mwenendo wa leo.",
};

export default function Soko() {
  return (
    <main id="main-content" style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Soko" },
      ]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Soko</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Muhtasari wa soko la hisa Tanzania.
      </p>

      <SokoMuhtasari />

      <div style={{ background: "#f0f6fd", borderLeft: "5px solid #1e7b4c", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", marginTop: "1.5rem" }}>
        <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600, fontSize: "0.9rem" }}>
          📚 Karibu WEKEZA NASI
        </p>
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

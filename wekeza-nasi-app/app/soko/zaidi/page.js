import { getTimelySoko, getFrameworkSoko, getCurrentCaseStudy } from "../../../lib/soko-engine";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Soko — Zaidi",
  description: "Habari za leo, kinachoendelea, na misingi ya uchambuzi wa soko.",
};

export default function SokoZaidi() {
  const timely = getTimelySoko();
  const frameworks = getFrameworkSoko();
  const currentCase = getCurrentCaseStudy();

  const cardStyle = { display: "block", padding: "1.25rem", background: "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-md)", marginBottom: "0.75rem", color: "#1a1a1a", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };
  const badgeStyle = { display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "999px", letterSpacing: "0.05em", marginBottom: "0.5rem" };
  const sectionTitleStyle = { fontSize: "1.15rem", fontWeight: 700, color: "#1a1a1a", marginTop: "2rem", marginBottom: "0.75rem" };

  return (
    <main id="main-content" style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[{ label: "Nyumbani", href: "/" }, { label: "Soko", href: "/soko" }, { label: "Zaidi" }]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Soko — Zaidi</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1rem" }}>Habari za leo, kinachoendelea, na misingi ya uchambuzi.</p>

      {timely.length > 0 && (
        <>
          <h2 style={sectionTitleStyle}>🚨 Kinachoendelea Sasa</h2>
          {timely.map((item) => (
            <a key={item.id} href={`/soko/${item.slug}`} style={{ ...cardStyle, borderLeft: "4px solid #d48d3b", background: "#fef8ee" }}>
              <span style={{ ...badgeStyle, background: "#d48d3b", color: "#ffffff" }}>SASA</span>
              <h3 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1.05rem" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#555555" }}>{item.excerpt}</p>
            </a>
          ))}
        </>
      )}

      <h2 style={sectionTitleStyle}>📚 Misingi ya Uchambuzi</h2>
      <p style={{ color: "#555555", marginTop: 0, fontSize: "0.9rem", marginBottom: "1rem" }}>Masomo ya kudumu — zana za kufikiri kuhusu soko.</p>
      {frameworks.map((item) => (
        <a key={item.id} href={`/soko/${item.slug}`} style={cardStyle}>
          <span style={{ ...badgeStyle, background: "#e3f0ea", color: "#1e7b4c" }}>MSINGI</span>
          <h3 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1.05rem" }}>{item.title}</h3>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555555" }}>{item.subtitle || item.excerpt}</p>
        </a>
      ))}

      {currentCase && (
        <>
          <h2 style={sectionTitleStyle}>📊 Case Study ya Sasa</h2>
          <p style={{ color: "#555555", marginTop: 0, fontSize: "0.9rem", marginBottom: "1rem" }}>Uchambuzi wa tukio halisi la soko.</p>
          <a href={`/soko/${currentCase.slug}`} style={{ ...cardStyle, borderLeft: "4px solid #1e7b4c" }}>
            <span style={{ ...badgeStyle, background: "#1e7b4c", color: "#ffffff" }}>CASE STUDY</span>
            <h3 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1.05rem" }}>{currentCase.title}</h3>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#555555" }}>{currentCase.subtitle || currentCase.excerpt}</p>
          </a>
          <a href="/soko/archive" style={{ display: "inline-block", marginTop: "0.5rem", color: "#1e7b4c", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>Ona Case Studies zote →</a>
        </>
      )}

      <Footer />
    </main>
  );
}

import { getAllCaseStudies } from "../../../lib/soko-engine";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Case Studies za Soko",
  description: "Case Studies zote za soko la hisa Tanzania — uchambuzi wa matukio halisi ya kihistoria.",
};

export default function SokoArchive() {
  const caseStudies = getAllCaseStudies();

  const cardStyle = {
    display: "block",
    padding: "1.25rem",
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.75rem",
    color: "#1a1a1a",
    textDecoration: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const lockedCardStyle = {
    ...cardStyle,
    background: "#f7f7f7",
    opacity: 0.75,
  };

  const badgeStyle = {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.15rem 0.6rem",
    borderRadius: "999px",
    letterSpacing: "0.05em",
  };

  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Soko", href: "/soko" },
        { label: "Case Studies" },
      ]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Case Studies za Soko</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Uchambuzi wa matukio halisi ya soko la hisa la Tanzania. Kila Case Study inafunguliwa kila siku 5 — zilizofungwa zinasubiri zamu yao.
      </p>

      {caseStudies.length === 0 ? (
        <p style={{ color: "#555555" }}><em>Hakuna case study kwa sasa.</em></p>
      ) : (
        caseStudies.map((item) => {
          const isLocked = item.locked;
          const card = isLocked ? lockedCardStyle : cardStyle;

          const content = (
            <>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ ...badgeStyle, background: "#1e7b4c", color: "#ffffff" }}>CASE STUDY</span>
                {item.totalParts > 1 && (
                  <span style={{ ...badgeStyle, background: "#f3f7fb", color: "#1a1a1a" }}>Sehemu 1 kati ya {item.totalParts}</span>
                )}
                {isLocked ? (
                  <span style={{ ...badgeStyle, background: "#f0f0f0", color: "#666666" }}>
                    🔒 Inafunguliwa {item.unlockDate}
                  </span>
                ) : (
                  <span style={{ ...badgeStyle, background: "#e3f0ea", color: "#1e7b4c" }}>
                    ✓ Inapatikana
                  </span>
                )}
              </div>
              <h3 style={{ margin: "0 0 0.25rem 0", color: isLocked ? "#555555" : "#1a1a1a", fontSize: "1.1rem" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#555555" }}>{item.subtitle || item.excerpt}</p>
            </>
          );

          if (isLocked) {
            return <div key={item.id} style={card}>{content}</div>;
          }
          return <a key={item.id} href={`/soko/${item.slug}`} style={card}>{content}</a>;
        })
      )}

      <Footer />
    </main>
  );
}

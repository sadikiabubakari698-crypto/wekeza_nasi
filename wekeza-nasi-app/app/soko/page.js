import { getTimelySoko, getPlannedSoko } from "../../lib/soko-engine";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Uchambuzi wa Soko",
  description:
    "Uchambuzi wa matukio ya soko la hisa Tanzania — nini kimetokea, kwa nini, na ushahidi unasemaje.",
};

export default function Soko() {
  const timely = getTimelySoko();
  const planned = getPlannedSoko();

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

  const timelyCardStyle = {
    ...cardStyle,
    borderLeft: "4px solid #d48d3b",
    background: "#fef8ee",
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
        { label: "Soko" },
      ]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Uchambuzi wa Soko</h1>
      <p style={{ color: "#555555", marginTop: 0 }}>
        Tukio la sasa, uchambuzi wa kina, na masomo ya kudumu kuhusu soko la hisa Tanzania.
      </p>

      {/* TIMELY */}
      {timely.length > 0 && (
        <>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1a1a1a", marginTop: "2rem", marginBottom: "0.75rem" }}>
            Kinachoendelea Sasa
          </h2>
          {timely.map((item) => (
            <a key={item.id} href={`/soko/${item.slug}`} style={timelyCardStyle}>
              <span style={{ ...badgeStyle, background: "#d48d3b", color: "#ffffff" }}>TIMELY</span>
              <h3 style={{ margin: "0.5rem 0 0.25rem 0", color: "#1a1a1a", fontSize: "1.1rem" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#555555" }}>{item.excerpt}</p>
            </a>
          ))}
        </>
      )}

      {/* PLANNED */}
      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1a1a1a", marginTop: "2rem", marginBottom: "0.75rem" }}>
        Masomo ya Kudumu
      </h2>
      {planned.length === 0 ? (
        <p style={{ color: "#555555" }}><em>Hakuna masomo kwa sasa. Rudi tena hivi karibuni.</em></p>
      ) : (
        planned.map((item) => {
          const isCase = item.type === "case-study";
          const hasParts = item.totalParts > 1;

          return (
            <a key={item.id} href={`/soko/${item.slug}`} style={cardStyle}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ ...badgeStyle, background: isCase ? "#1e7b4c" : "#e3f0ea", color: isCase ? "#ffffff" : "#1e7b4c" }}>
                  {isCase ? "CASE STUDY" : "FRAMEWORK"}
                </span>
                {hasParts && (
                  <span style={{ ...badgeStyle, background: "#f3f7fb", color: "#1a1a1a" }}>
                    Sehemu 1 kati ya {item.totalParts}
                  </span>
                )}
              </div>
              <h3 style={{ margin: "0 0 0.25rem 0", color: "#1a1a1a", fontSize: "1.1rem" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#555555" }}>
                {item.subtitle || item.excerpt}
              </p>
            </a>
          );
        })
      )}

      <Footer />
    </main>
  );
}

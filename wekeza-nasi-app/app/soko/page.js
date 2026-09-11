import { getTimelyContent } from "../../lib/content-engine";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Uchambuzi wa Soko",
  description:
    "Uchambuzi wa matukio ya soko la hisa Tanzania — nini kimetokea, kwa nini, na ushahidi unasemaje.",
};

export default function Soko() {
  const timely = getTimelyContent();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a" }}>Uchambuzi wa Soko</h2>
      <p style={{ color: "#555" }}>
        Hapa hatufundishi misingi (hiyo ipo Academy). Hapa tunachukua matukio halisi ya soko, tunayachambua kwa ushahidi, na kukusaidia kuelewa yanamaanisha nini.
      </p>

      {timely.length > 0 ? (
        <div style={{ background: "#f3f7fb", borderRadius: "10px", padding: "1.25rem", marginTop: "1.5rem" }}>
          <h3 style={{ marginTop: 0, color: "#1a1a1a" }}>Kinachoendelea Sasa</h3>
          {timely.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", margin: 0, color: "#1a1a1a" }}>{item.title}</p>
              <p style={{ margin: "0.25rem 0", color: "#1a1a1a" }}>{item.excerpt}</p>
              <a href={`/habari/${item.id}`} style={{ color: "#1e7b4c" }}>Soma uchambuzi →</a>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#555" }}><em>Hakuna tukio la kuchambuliwa kwa sasa. Rudi tena hivi karibuni.</em></p>
      )}

      <Footer />
    </main>
  );
}

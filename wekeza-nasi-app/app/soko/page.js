import { getTimelyContent } from "../../lib/content-engine";

export default function Soko() {
  const timely = getTimelyContent();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Uchambuzi wa Soko</h2>
      <p>
        Hapa hatufundishi misingi (hiyo ipo Academy). Hapa tunachukua
        matukio halisi ya soko, tunayachambua kwa ushahidi, na kukusaidia
        kuelewa yanamaanisha nini.
      </p>

      {timely.length > 0 ? (
        <div className="risk-box">
          <h3>Kinachoendelea Sasa</h3>
          {timely.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
              <p style={{ margin: "0.25rem 0" }}>{item.excerpt}</p>
              <a href={`/habari/${item.id}`}>Soma uchambuzi &rarr;</a>
            </div>
          ))}
        </div>
      ) : (
        <p><em>Hakuna tukio la kuchambuliwa kwa sasa. Rudi tena hivi karibuni.</em></p>
      )}

      <p><a href="/">&larr; Rudi Nyumbani</a></p>
    </main>
  );
}

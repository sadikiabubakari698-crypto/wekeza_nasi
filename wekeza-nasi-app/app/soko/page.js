import { getTimelyContent, getPlannedContent } from "../../lib/content-engine";

export default function Soko() {
  const timely = getTimelyContent();
  const planned = getPlannedContent();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Soko</h2>

      {timely.length > 0 && (
        <div className="risk-box">
          <h3>Kinachoendelea Sasa</h3>
          {timely.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
              <p style={{ margin: "0.25rem 0" }}>{item.excerpt}</p>
              <a href={`/habari/${item.id}`}>Soma zaidi &rarr;</a>
            </div>
          ))}
        </div>
      )}

      {planned.length > 0 && (
        <div className="lesson-box">
          <h3>Mwezi Huu</h3>
          {planned.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
              <p style={{ margin: "0.25rem 0" }}>{item.excerpt}</p>
              <a href={item.link}>Fungua &rarr;</a>
            </div>
          ))}
        </div>
      )}

      <p><a href="/">&larr; Rudi Academy</a></p>
    </main>
  );
}

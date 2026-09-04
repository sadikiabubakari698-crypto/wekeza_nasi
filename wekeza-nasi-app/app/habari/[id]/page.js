import contentData from "../../../content/content.json";

export default async function Habari({ params }) {
  const { id } = await params;
  const item = contentData.find((c) => c.id === id);

  if (!item) {
    return (
      <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
        <p>Habari hii haikupatikana.</p>
        <p><a href="/soko">&larr; Rudi Soko</a></p>
      </main>
    );
  }

  const s = item.sections;

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Uchambuzi wa Soko</h2>
      <h3>{item.title}</h3>

      <div className="lesson-box">
        <h3>1. Tukio</h3>
        <p>{s.tukio}</p>
      </div>

      <div className="lesson-box">
        <h3>2. Ushahidi</h3>
        <p>{s.ushahidi}</p>
      </div>

      <div className="lesson-box">
        <h3>3. Sababu</h3>
        <p>{s.sababu}</p>
      </div>

      <div className="lesson-box">
        <h3>4. Data</h3>
        <ul>
          {s.data.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div className="lesson-box">
        <h3>5. Maana</h3>
        <p>{s.maana}</p>
      </div>

      <div className="lesson-box">
        <h3>6. Masasisho</h3>
        {s.masasisho && s.masasisho.length > 0 ? (
          <ul>
            {s.masasisho.map((m, i) => <li key={i}><strong>{m.tarehe}:</strong> {m.taarifa}</li>)}
          </ul>
        ) : (
          <p><em>Bado hakuna masasisho tangu tukio hili.</em></p>
        )}
      </div>

      <div className="risk-box">
        <h3>Funzo la WEKEZA NASI</h3>
        <p>
          Usichukulie tukio la soko kama sababu ya kununua au kuuza. WEKEZA
          NASI inakuletea tukio, ushahidi, sababu, na data, wewe unatengeneza
          uelewa wako mwenyewe.
        </p>
      </div>

      {item.link && <p><a href={item.link}>Ona uchambuzi kamili wa kampuni &rarr;</a></p>}
      <p><a href="/soko">&larr; Rudi Soko</a></p>
    </main>
  );
}

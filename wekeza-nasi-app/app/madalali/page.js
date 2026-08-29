export default function Madalali() {
  const brokers = [
    "Tanzania Securities Limited (TSL)",
    "Vertex International Securities Ltd",
    "Solomon Stockbrokers Limited",
    "Orbit Securities Company Limited",
    "CORE Securities Limited",
    "Zan Securities Limited",
    "E.A. Capital Limited",
  ];
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Madalali Walioidhinishwa (Brokers)</h2>

      <div className="lesson-box">
        <p>
          Hawa ni baadhi ya madalali (stockbrokers) walioidhinishwa na CMSA
          kufanya biashara ya hisa DSE. Kabla ya kuchagua, hakikisha
          unathibitisha leseni yao ya sasa na taarifa za mawasiliano moja
          kwa moja kupitia tovuti rasmi ya CMSA, kwa sababu taarifa hizi
          zinaweza kubadilika.
        </p>
        <ul>
          {brokers.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p>
          <a href="https://www.cmsa.go.tz" target="_blank" rel="noopener noreferrer">
            Tembelea CMSA kwa orodha kamili na mawasiliano &rarr;
          </a>
        </p>
      </div>

      <p><a href="/">&larr; Rudi Academy</a></p>
    </main>
  );
}

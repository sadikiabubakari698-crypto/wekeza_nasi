export default function Madalali() {
  const vigezo = [
    { jina: "Leseni halali", maelezo: "Thibitisha kwenye tovuti ya CMSA kabla ya kumchagua" },
    { jina: "Ada za wazi", maelezo: "Akuambie gharama zote kabla hujaanza, si kujificha" },
    { jina: "Urahisi wa mawasiliano", maelezo: "Anapatikana kwa simu, mtandao, au app (MTP)" },
    { jina: "Muda wa kudumu sokoni", maelezo: "Uzoefu wa miaka mingi ni ishara nzuri" },
    { jina: "Huduma za ziada", maelezo: "Ushauri wa uwekezaji, elimu, ripoti za soko" },
    { jina: "Sifa kwa wateja wengine", maelezo: "Uliza watu wanaomtumia tayari" },
  ];
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Jinsi ya Kuchagua Broker Mzuri</h2>

      <div className="lesson-box">
        <p>Tumia vigezo hivi kutathmini broker yeyote unayefikiria kumtumia:</p>
        <ol>
          {vigezo.map((v) => (
            <li key={v.jina}><strong>{v.jina}</strong> &mdash; {v.maelezo}</li>
          ))}
        </ol>
        <p>
          Kwa orodha kamili na iliyosasishwa ya madalali walioidhinishwa,{" "}
          <a href="https://www.cmsa.go.tz" target="_blank" rel="noopener noreferrer">
            tembelea cmsa.go.tz &rarr;
          </a>
        </p>
      </div>

      <p><a href="/">&larr; Rudi Academy</a></p>
    </main>
  );
}

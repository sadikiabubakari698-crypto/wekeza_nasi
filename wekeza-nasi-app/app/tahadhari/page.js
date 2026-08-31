export default function Tahadhari() {
  const alama = [
    "Ahadi ya faida ya \"uhakika\" ya juu sana kwa muda mfupi",
    "Shinikizo la haraka, \"wekeza sasa au upoteze fursa\"",
    "Mtu au kampuni isiyo na leseni ya CMSA",
    "Kuombwa kulipa moja kwa moja kwa simu ya mtu binafsi badala ya broker rasmi",
    "Mfumo wa \"leta wengine upate bonus\" (muundo wa piramidi)",
    "Kuombwa kuweka siri, kutomwambia mtu yeyote",
  ];
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Tahadhari za Utapeli wa Uwekezaji</h2>

      <div className="lesson-box">
        <h3>Alama za Hatari</h3>
        <p>Ukiona mojawapo ya haya, kuwa mwangalifu sana:</p>
        <ul>
          {alama.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>

      <div className="lesson-box">
        <h3>Jinsi ya Kujilinda Unaponunua Kihalali</h3>
        <p>
          Ununuzi wa hisa halali kupitia Mobile Trading Platform (MTP)
          hutumia <strong>control number</strong> maalum ya kufanya malipo,
          ikiwa hai kwa masaa 24 tu. Kabla ya kulipa, hakiki jina lako na
          taarifa za muamala zinaendana kabisa na control number
          uliyopewa. Kama kuna tofauti yoyote, au umepewa control number
          bila mchakato rasmi wa broker, usilipe.
        </p>
      </div>

      <div className="lesson-box">
        <h3>Hatua ya Mwisho</h3>
        <p>
          Thibitisha kila fursa ya uwekezaji kupitia{" "}
          <a href="https://www.cmsa.go.tz" target="_blank" rel="noopener noreferrer">
            CMSA (cmsa.go.tz)
          </a>{" "}
          kabla ya kutoa fedha zako.
        </p>
      </div>

      <p><a href="/">&larr; Rudi Academy</a></p>
    </main>
  );
}

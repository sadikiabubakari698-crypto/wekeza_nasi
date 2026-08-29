export default function Somo5() {
  const box = { padding: "1.25rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1.5rem", color: "#1a1a1a" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 5: Soko la hisa lipo chini ya nani?</h2>

      <div style={box}>
        <h3>01. Lengo la Somo</h3>
        <p>Utaelewa ni taasisi gani inayosimamia soko la hisa Tanzania na kwa nini usimamizi huo ni muhimu.</p>
      </div>

      <div style={box}>
        <h3>02. Swali la Kuanza</h3>
        <p>Kama hakuna mtu wa kusimamia soko la hisa, nini kingeweza kutokea kwa wawekezaji?</p>
      </div>

      <img src="/diagrams/somo5-ngazi.svg" alt="Ngazi ya usimamizi wa soko la hisa" style={{ width: "100%", height: "auto", marginBottom: "1.5rem" }} />

      <div style={box}>
        <h3>03. Maelezo Rahisi</h3>
        <p>
          Soko la hisa halifanyi kazi lenyewe bila usimamizi. Kuna taasisi ya
          serikali inayohakikisha kila mtu anafuata sheria, makampuni yanatoa
          taarifa za kweli, madalali wanafanya kazi kwa uadilifu, na wawekezaji
          wanalindwa dhidi ya udanganyifu.
        </p>
      </div>

      <div style={box}>
        <h3>04. Mfano wa Tanzania</h3>
        <p>
          Tanzania, taasisi hiyo inaitwa Capital Markets and Securities
          Authority (CMSA), iliyoanzishwa mwaka 1995. CMSA inatoa leseni kwa
          madalali, inasimamia DSE, na inachunguza malalamiko ya wawekezaji.
        </p>
      </div>

      <div style={box}>
        <h3>05. Jambo la Muhimu</h3>
        <ul>
          <li>CMSA ndiyo mlinzi mkuu wa soko la hisa Tanzania</li>
          <li>Kila broker lazima awe na leseni kutoka CMSA</li>
          <li>CMSA inalinda wawekezaji dhidi ya udanganyifu na taarifa za uongo</li>
          <li>Makampuni yaliyoorodheshwa DSE lazima yatoe taarifa za fedha mara kwa mara</li>
        </ul>
      </div>

      <div style={box}>
        <h3>06. Jaribu Kufikiri</h3>
        <p>Kwa nini ni muhimu broker awe na leseni rasmi badala ya mtu yeyote kuweza kuuza au kununua hisa kwa niaba yako?</p>
      </div>

      <div style={box}>
        <h3>07. Kipimo Kidogo</h3>
        <p>1. CMSA inasimamia nini?<br />(a) Mabenki &nbsp; (b) Soko la hisa na masuala ya mitaji &nbsp; (c) Kodi</p>
        <p>2. Broker anahitaji nini kufanya kazi kihalali?<br />(a) Shahada &nbsp; (b) Leseni kutoka CMSA &nbsp; (c) Gari</p>
      </div>

      <div style={box}>
        <h3>08. Muhtasari wa Dakika 1</h3>
        <p>CMSA ndiyo taasisi inayosimamia soko la hisa Tanzania, ikihakikisha usalama na uwazi kwa wawekezaji wote.</p>
      </div>

      <div style={box}>
        <h3>09. Hatua Inayofuata</h3>
        <p>Somo 6: DSE ni nini?</p>
      </div>

      <p><a href="/somo4" style={{ marginRight: "1.5rem" }}>&larr; Somo la 4</a><a href="/somo6" style={{ fontWeight: "bold" }}>Endelea na Somo la 6 &rarr;</a></p>
    </main>
  );
}

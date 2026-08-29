export default function Somo4() {
  const box = { padding: "1.25rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1.5rem", color: "#1a1a1a" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 4: Soko la hisa ni nini?</h2>

      <div style={box}>
        <h3>01. Lengo la Somo</h3>
        <p>Utaelewa soko la hisa ni nini na kwa nini linahitajika.</p>
      </div>

      <div style={box}>
        <h3>02. Swali la Kuanza</h3>
        <p>Kama watu wengi wananunua na kuuza hisa za makampuni tofauti, wanakutana wapi kufanya hivyo?</p>
      </div>

      <div style={box}>
        <h3>03. Maelezo Rahisi</h3>
        <p>
          Soko la hisa ni mahali maalum (halisi au la kidijitali) ambapo
          wanunuzi na wauzaji wa hisa za makampuni mbalimbali hukutana kufanya
          biashara. Ni kama soko kuu la kijiji, lakini badala ya mazao,
          kinachouzwa ni hisa za makampuni.
        </p>
      </div>

      <div style={box}>
        <h3>04. Mfano wa Tanzania</h3>
        <p>
          Dar es Salaam Stock Exchange (DSE) ndilo soko rasmi la hisa Tanzania,
          mahali ambapo hisa za makampuni yaliyoorodheshwa (kama CRDB, TBL, NMB)
          zinauzwa na kununuliwa. DSE inafanya biashara Jumatatu hadi Ijumaa,
          kuanzia saa 10:00 asubuhi hadi saa 16:00 jioni.
        </p>
      </div>

      <div style={box}>
        <h3>05. Jambo la Muhimu</h3>
        <ul>
          <li>Soko la hisa huunganisha wanunuzi na wauzaji mahali pamoja</li>
          <li>Bila soko, itakuwa vigumu kupata mtu wa kuuziana hisa</li>
          <li>Soko huhakikisha bei zinawekwa wazi kwa kila mtu kuona</li>
          <li>Kila nchi kubwa ina soko lake la hisa, mfano NYSE Marekani, JSE Afrika Kusini</li>
        </ul>
      </div>

      <div style={box}>
        <h3>06. Jaribu Kufikiri</h3>
        <p>Kama hakukuwa na soko rasmi la hisa, ungefanyaje ili kuuza hisa zako kwa mtu mwingine?</p>
      </div>

      <div style={box}>
        <h3>07. Kipimo Kidogo</h3>
        <p>1. Soko la hisa ni nini?<br />(a) Duka la mazao &nbsp; (b) Mahali panapokutanisha wanunuzi na wauzaji wa hisa &nbsp; (c) Benki</p>
        <p>2. Soko la hisa Tanzania linaitwaje?<br />(a) NYSE &nbsp; (b) JSE &nbsp; (c) DSE</p>
      </div>

      <div style={box}>
        <h3>08. Muhtasari wa Dakika 1</h3>
        <p>Soko la hisa ni mahali maalum linalounganisha wanunuzi na wauzaji wa hisa za makampuni mbalimbali, kama DSE hapa Tanzania.</p>
      </div>

      <div style={box}>
        <h3>09. Hatua Inayofuata</h3>
        <p>Somo 5: Soko la hisa lipo chini ya nani?</p>
      </div>

      <p><a href="/somo3" style={{ marginRight: "1.5rem" }}>&larr; Somo la 3</a><a href="/somo5" style={{ fontWeight: "bold" }}>Endelea na Somo la 5 &rarr;</a></p>
    </main>
  );
}

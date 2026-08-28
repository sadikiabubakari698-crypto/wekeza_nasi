export default function Home() {
  const box = { padding: "1.25rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1.5rem", color: "#1a1a1a" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 1: Hisa ni nini?</h2>

      <div style={box}>
        <h3>01. Lengo la Somo</h3>
        <p>Mwisho wa somo hili, utaelewa hisa ni nini na kwa nini watu huwekeza kwenye soko la hisa.</p>
      </div>

      <div style={box}>
        <h3>02. Swali la Kuanza</h3>
        <p>Je, umeshawahi kufikiria kumiliki sehemu ya biashara bila kuwa na fedha nyingi za kuianzisha peke yako?</p>
      </div>

      <img src="/somo1-hisa.png" alt="Hisa ni nini - mfano wa shamba" style={{ width: "100%", height: "auto", borderRadius: "12px", marginBottom: "1.5rem" }} />

      <div style={box}>
        <h3>03. Maelezo Rahisi</h3>
        <p>
          Fikiria shamba kubwa la mazao. Badala ya mtu mmoja kumiliki shamba lote,
          wamiliki kadhaa wanagawana shamba hilo. Sehemu ya umiliki wa kila mmoja
          ndicho kinachoitwa hisa.
        </p>
      </div>

      <div style={box}>
        <h3>04. Mfano wa Tanzania</h3>
        <p>
          Makampuni kama CRDB Bank na TBL yameorodheshwa kwenye Soko la Hisa la
          Dar es Salaam (DSE). Mtanzania yeyote anaweza kununua hisa za
          makampuni haya na kuwa mmiliki mdogo wa kampuni hizo.
        </p>
      </div>

      <div style={box}>
        <h3>05. Jambo la Muhimu</h3>
        <ul>
          <li>Hisa ni sehemu ya umiliki, si mkopo</li>
          <li>Faida (gawio) hutegemea utendaji wa kampuni</li>
          <li>Thamani ya hisa inaweza kupanda au kushuka</li>
          <li>Uwekezaji wa hisa unahitaji uvumilivu na uelewa</li>
        </ul>
      </div>

      <div style={box}>
        <h3>06. Jaribu Kufikiri</h3>
        <p>
          Kama kampuni A ina hisa 1,000 zote, na wewe unamiliki hisa 10,
          ni asilimia ngapi ya kampuni unayomiliki?
        </p>
      </div>

      <div style={box}>
        <h3>07. Kipimo Kidogo</h3>
        <p>1. Hisa ni nini?<br />(a) Mkopo &nbsp; (b) Sehemu ya umiliki &nbsp; (c) Zawadi</p>
        <p>2. Gawio ni nini?<br />(a) Adhabu &nbsp; (b) Sehemu ya faida &nbsp; (c) Kodi</p>
      </div>

      <div style={box}>
        <h3>08. Muhtasari wa Dakika 1</h3>
        <p>Hisa = umiliki mdogo wa kampuni. Kampuni ikifanya vizuri, wewe unafaidika.</p>
      </div>

      <div style={box}>
        <h3>09. Hatua Inayofuata</h3>
        <p>Somo la 2: Soko la Hisa la Dar es Salaam ni nini na linafanyaje kazi?</p>
      </div>
    </main>
  );
}

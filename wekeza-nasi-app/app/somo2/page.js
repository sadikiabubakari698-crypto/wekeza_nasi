export default function Somo2() {
  const box = { padding: "1.25rem", background: "#f7f7f7", borderRadius: "10px", marginBottom: "1.5rem", color: "#1a1a1a" };
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 2: Kampuni kwa nini huuza hisa?</h2>

      <div style={box}>
        <h3>01. Lengo la Somo</h3>
        <p>Utaelewa ni kwa nini makampuni huamua kuuza sehemu ya umiliki wao (hisa) kwa umma badala ya kubaki na umiliki wote.</p>
      </div>

      <div style={box}>
        <h3>02. Swali la Kuanza</h3>
        <p>Kama una shamba dogo na unataka kulipanua kuwa kubwa zaidi, lakini huna fedha za kutosha, utafanyaje?</p>
      </div>

      <div style={box}>
        <h3>03. Maelezo Rahisi</h3>
        <p>
          Kampuni inapohitaji fedha nyingi za kukua, ina njia mbili: kukopa benki
          na kulipa riba, au kuuza sehemu ya umiliki wake kwa wawekezaji (hisa).
          Wakiuza hisa, hawana deni la kulipa riba, lakini wanashiriki umiliki na
          faida na wamiliki wapya.
        </p>
      </div>

      <div style={box}>
        <h3>04. Mfano wa Tanzania</h3>
        <p>
          CRDB Bank iliuza hisa zake kwa umma ili kupata mtaji wa kupanua matawi
          yake nchi nzima, badala ya kutegemea mikopo pekee.
        </p>
      </div>

      <div style={box}>
        <h3>05. Jambo la Muhimu</h3>
        <ul>
          <li>Kuuza hisa ni njia ya kampuni kupata mtaji bila kukopa</li>
          <li>Kampuni ikiuza hisa, wamiliki wapya wanashiriki umiliki na faida</li>
          <li>Hii ni tofauti na mkopo, hakuna riba ya kulipa</li>
          <li>Mwenye hisa nyingi zaidi ana sauti kubwa zaidi kwenye maamuzi</li>
        </ul>
      </div>

      <div style={box}>
        <h3>06. Jaribu Kufikiri</h3>
        <p>Kwa nini baadhi ya wamiliki wa kampuni wangependa kukopa benki badala ya kuuza hisa, hata ikiwa watalipa riba?</p>
      </div>

      <div style={box}>
        <h3>07. Kipimo Kidogo</h3>
        <p>1. Kampuni ikiuza hisa, inapata nini?<br />(a) Deni &nbsp; (b) Mtaji &nbsp; (c) Riba</p>
        <p>2. Tofauti kuu kati ya mkopo na kuuza hisa ni ipi?<br />(a) Hakuna tofauti &nbsp; (b) Mkopo una riba, hisa hazina &nbsp; (c) Hisa ni ghali zaidi</p>
      </div>

      <div style={box}>
        <h3>08. Muhtasari wa Dakika 1</h3>
        <p>Kampuni huuza hisa ili kupata mtaji wa kukua bila kukopa, badala ya riba, wanashiriki umiliki na faida na wawekezaji wapya.</p>
      </div>

      <div style={box}>
        <h3>09. Hatua Inayofuata</h3>
        <p>Somo 3: Nani ananunua hisa?</p>
      </div>

      <p><a href="/">Rudi Somo la 1</a></p>
    </main>
  );
}

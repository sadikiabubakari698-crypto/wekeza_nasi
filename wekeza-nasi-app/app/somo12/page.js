export default function Somo12() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 12: Gawio - Masharti na Taratibu</h2>

      <div className="lesson-box">
        <h3>01. Lengo la Somo</h3>
        <p>Utaelewa masharti na taratibu za kupokea gawio kutoka kwa kampuni uliyowekeza.</p>
      </div>

      <div className="lesson-box">
        <h3>02. Swali la Kuanza</h3>
        <p>Kama kampuni imetangaza itatoa gawio, unadhani utahitaji nini ili uweze kulipokea?</p>
      </div>

      <img src="/diagrams/somo12-tarehe.svg" alt="Tarehe tano za mchakato wa gawio" style={{ width: "100%", height: "auto", marginBottom: "1.5rem" }} />

      <div className="lesson-box">
        <h3>03. Maelezo Rahisi</h3>
        <p>Kabla ya kupokea gawio, kuna tarehe tano muhimu za kufahamu:</p>
        <ol>
          <li><strong>Tangazo</strong> &mdash; kampuni yatangaza itatoa gawio na kiasi</li>
          <li><strong>Cum-Dividend</strong> &mdash; siku ya mwisho ya kununua hisa ili bado ustahili gawio hilo</li>
          <li><strong>Ex-Dividend</strong> &mdash; ukinunua kuanzia siku hii, hutapata gawio hilo</li>
          <li><strong>Record Date</strong> &mdash; kampuni yafunga orodha rasmi ya watu watakaolipwa</li>
          <li><strong>Tarehe ya Malipo</strong> &mdash; pesa halisi zaingia akaunti yako au hundi</li>
        </ol>
        <p><strong>Kanuni rahisi:</strong> ukinunua KABLA ya Ex-Dividend, unapata; ukinunua SIKU ya Ex-Dividend au baadaye, hupati.</p>
      </div>

      <div className="lesson-box">
        <h3>10. Je, Nikichelewa Kukamilisha KYC?</h3>
        <ul>
          <li>Gawio lako halipotei, linabaki kwenye akaunti ya gawio lisilolipwa ya kampuni likisubiri wewe kukamilisha taarifa sahihi</li>
          <li>Ukikamilisha KYC baadaye, unaweza kudai gawio hilo lililobaki</li>
          <li>Hatari kubwa zaidi ni kwa watu waliopotea KABISA kimawasiliano (wamehama bila kujulisha broker, simu haipatikani kabisa) kwa miaka 12, ambapo Sheria ya Makampuni inaruhusu hisa zao kuuzwa na fedha kuhamishiwa Serikalini</li>
          <li>Suluhisho: kamilisha KYC yako mapema na hakikisha taarifa za mawasiliano ni sahihi kila wakati</li>
        </ul>
      </div>

      <div className="lesson-box">
        <h3>04. Mfano wa Tanzania</h3>
        <p>
          Kwa makampuni yaliyoorodheshwa DSE, kodi ya zuio kwenye gawio ni
          asilimia 5 tu (badala ya asilimia 10 ya kawaida), hii ni motisha
          ya serikali kuhamasisha uwekezaji kupitia soko la hisa. TRA
          ndiyo inayosimamia TIN na makato haya.
        </p>
      </div>

      <div className="lesson-box">
        <h3>05. Jambo la Muhimu</h3>
        <ul>
          <li>Jaza fomu ya KYC wakati wa kufungua akaunti ya CDS, ikijumuisha upendeleo wa malipo</li>
          <li>Lazima uwe na TIN kwa sababu gawio hutozwa kodi ya zuio ya 5% (makampuni ya DSE)</li>
          <li>Gawio halilipwi moja kwa moja kwenye akaunti ya CDS, unahitaji akaunti ya benki au hundi</li>
          <li>Nunua hisa KABLA ya Ex-Dividend ili ustahili gawio hilo</li>
        </ul>
      </div>

      <div className="lesson-box">
        <h3>06. Jaribu Kufikiri</h3>
        <p>Kwa nini serikali imepunguza kodi ya gawio kwa makampuni ya DSE (5%) badala ya kiwango cha kawaida (10%)?</p>
      </div>

      <div className="lesson-box">
        <h3>07. Kipimo Kidogo</h3>
        <p>1. Ukinunua hisa siku ya Ex-Dividend, je utapata gawio linalofuata?<br />(a) Ndiyo &nbsp; (b) Hapana &nbsp; (c) Nusu tu</p>
        <p className="quiz-answer">Jibu: (b) Hapana</p>
        <p>2. Kodi ya zuio kwenye gawio la makampuni ya DSE ni asilimia ngapi?<br />(a) 10% &nbsp; (b) 5% &nbsp; (c) 20%</p>
        <p className="quiz-answer">Jibu: (b) 5%</p>
      </div>

      <div className="lesson-box">
        <h3>08. Muhtasari wa Dakika 1</h3>
        <p>Kupokea gawio kunahitaji KYC iliyojazwa, TIN kwa kodi ya zuio (5%), na kununua hisa kabla ya Ex-Dividend.</p>
      </div>

      <div className="lesson-box">
        <h3>09. Hatua Inayofuata</h3>
        <p>Somo 13: IPO ni nini?</p>
      </div>

      <p><a href="/somo11" style={{ marginRight: "1.5rem" }}>&larr; Somo la 11</a><a href="/somo13" style={{ fontWeight: "bold" }}>Endelea na Somo la 13 &rarr;</a></p>
    </main>
  );
}

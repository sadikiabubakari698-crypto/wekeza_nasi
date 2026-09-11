export default function TCC() {
  const sectionStyle = { marginBottom: "2.5rem" };
  const h2Style = { fontSize: "1.4rem", color: "#1a1a1a", marginBottom: "0.75rem", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem" };
  const h3Style = { fontSize: "1.1rem", color: "#1e7b4c", marginTop: "1.2rem", marginBottom: "0.4rem" };
  const pStyle = { color: "#1a1a1a", lineHeight: 1.7, marginBottom: "0.75rem" };
  const ulStyle = { color: "#1a1a1a", paddingLeft: "1.5rem", lineHeight: 1.8 };
  const infoBoxStyle = { background: "#f3f7fb", borderRadius: "10px", padding: "1rem 1.25rem", margin: "1rem 0", color: "#1a1a1a" };
  const warningBoxStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", margin: "1.5rem 0", color: "#1a1a1a", fontSize: "0.95rem" };

  return (
    <main style={{ padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <a href="/kampuni" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi kwa Uchambuzi wa Kampuni</a>

      <h1 style={{ fontSize: "2rem", marginTop: "1.5rem", marginBottom: "0.25rem", color: "#1a1a1a" }}>
        Tanzania Cigarette Company (TCC)
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Kampuni ya zamani zaidi iliyoorodheshwa DSE
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> TCC</div>
        <div><strong>Sekta:</strong> Bidhaa za Matumizi (Sigara)</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2000 (moja ya za kwanza)</div>
        <div><strong>Mmiliki mkuu:</strong> Japan Tobacco International (JTI)</div>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Tanzania Cigarette Company (TCC) ilianzishwa mwaka 1961 kama kampuni ya serikali. Ni moja ya makampuni ya zamani zaidi Tanzania, ikiwa na historia ya zaidi ya miaka 60.
        </p>
        <p style={pStyle}>
          Ilibinafsishwa mwaka 2000 na kuorodheshwa DSE. Mwaka 2002, Japan Tobacco International (JTI) — moja ya makampuni makubwa ya sigara duniani — ilinunua sehemu kubwa ya umiliki. TCC ni moja ya makampuni yenye faida kubwa kwenye DSE, na inajulikana kwa gawio kubwa kwa wanahisa.
        </p>
        <p style={pStyle}>
          Makao makuu yapo Dar es Salaam, na kiwanda kikubwa kipo Ubungo.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}><strong>Dhamira (Mission):</strong> Kutoa bidhaa za sigara za ubora wa kimataifa, kwa kuzingatia viwango vya juu vya uzalishaji na uendelevu wa biashara.</p>
        <p style={pStyle}><strong>Maono (Vision):</strong> Kuwa kampuni inayoongoza ya sigara Tanzania na Afrika Mashariki, ikitoa bidhaa bora na thamani kwa wanahisa.</p>
        <p style={pStyle}><strong>Tatizo linalotatua:</strong> Wateja wa sigara Tanzania wanahitaji bidhaa za ubora na bei nafuu. TCC inazalisha sigara za chapa mbalimbali zinazokidhi mahitaji ya makundi tofauti.</p>
        <p style={pStyle}><strong>Wateja:</strong> Watu wazima wanaovuta sigara (umri 18+), wauzaji wa rejareja, maduka makubwa, na wauzaji wa jumla.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>TCC inazalisha na kuuza sigara za chapa mbalimbali:</p>
        <ul style={ulStyle}>
          <li><strong>Portsman</strong> — chapa maarufu ya kimataifa</li>
          <li><strong>Sweet Menthol</strong> — chapa ya kienyeji maarufu</li>
          <li><strong>Camel, Winston</strong> — chapa za kimataifa</li>
          <li><strong>Sigara nyingine</strong> — kwa makundi mbalimbali ya wateja</li>
        </ul>
        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Uuzaji wa sigara ndani ya nchi</strong> — ndiyo mapato makuu (~90%+)</li>
          <li><strong>Usafirishaji (machache)</strong> — sigara kwa nchi jirani</li>
          <li><strong>Bidhaa nyingine za tumbaku</strong> — kwa makundi maalum</li>
        </ul>
        <p style={pStyle}>
          Mapato yanategemea mauzo ya sigara. TCC ina sehemu kubwa ya soko la sigara Tanzania — zaidi ya asilimia 90%.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>TCC ina sehemu kubwa ya soko la sigara Tanzania (zaidi ya 90%). Ushindani ni mdogo kwa sababu:</p>
        <ul style={ulStyle}>
          <li>Viwango vya udhibiti viko juu — ni vigumu kwa wazalishaji wapya kuingia</li>
          <li>TCC ina chapa zenye nguvu (brands) zilizojengwa kwa miaka 60+</li>
          <li>Mtandao mkubwa wa usambazaji nchi nzima</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> TCC ni moja ya walipa kodi wakubwa Tanzania. Kodi ya sigara (excise duty) ni chanzo kikubwa cha mapato ya serikali. TCC pia inatoa ajira kwa maelfu ya Watanzania na inasaidia wakulima wa tumbaku.
        </p>
        <p style={pStyle}>
          <strong>Changamoto za sekta:</strong> Sekta ya sigara inakabiliana na changamoto kubwa — sheria kali za udhibiti, kupungua kwa idadi ya wavutaji, na kampeni za afya. Lakini kwa sababu ya utegemezi wa kodi, serikali inaendelea kuruhusu biashara hii.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>TCC ni moja ya makampuni yenye faida kubwa kwenye DSE. ROE yake ni ~30%+, moja ya juu zaidi. Mapato yamekuwa thabiti kwa miaka mingi, yakitokana na mauzo ya sigara. Kupanda kwa kodi ya sigara kunapunguza faida kidogo, lakini TCC inaendelea kuwa na faida kubwa.</p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>TCC inajulikana kwa gawio kubwa. Sera ni kugawa asilimia 80-100 ya faida kama gawio — moja ya juu zaidi kwenye DSE. Hii inafanya TCC kuwa maarufu sana kwa wawekezaji wanaotafuta mapato ya mara kwa mara (income investors).</p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>TCC ina madeni madogo sana. Kampuni ina mtiririko wa fedha thabiti na haina deni kubwa. Hii inafanya kuwa kampuni salama kwa wawekezaji.</p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Kiwanda kikubwa Ubungo, Dar es Salaam</li>
          <li>Mitambo ya kisasa ya kutengeneza sigara</li>
          <li>Mtandao mkubwa wa usambazaji nchi nzima</li>
          <li>Chapa (brands) maarufu zenye thamani kubwa</li>
          <li>Wafanyakazi wa kudumu 1,000+</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>Bei ya hisa ya TCC inabadilika kulingana na ugavi na mahitaji. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.</p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni, angalia ripoti ya mwaka ya TCC au tangazo la DSE.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Hatari ya Udhibiti:</strong> Sheria kali za sigara (kodi kubwa, matangazo yaliyozuiwa, maeneo ya kuvutia) zinaweza kupunguza mauzo.</li>
          <li><strong>Hatari ya Afya:</strong> Kampeni za afya zinapunguza idadi ya wavutaji, hasa vijana.</li>
          <li><strong>Hatari ya Kodi:</strong> Serikali inaweza kuongeza kodi ya sigara (excise duty) — hii inapunguza faida au kupandisha bei.</li>
          <li><strong>Hatari ya Uharamia:</strong> Sigara za kutoroka (illicit trade) zinaweza kupunguza mauzo rasmi.</li>
          <li><strong>Hatari ya Utegemezi wa Soko Moja:</strong> TCC inategemea soko la Tanzania — mabadiliko ya uchumi yanaathiri moja kwa moja.</li>
          <li><strong>Hatari ya Mabadiliko ya Tabia:</strong> Kupungua kwa wavutaji duniani ni mwelekeo wa kudumu — hii inaweza kupunguza mauzo kwa miaka ijayo.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          TCC inatufundisha kuhusu <strong>nguvu ya biashara yenye gawio kubwa</strong>. Kwa kugawa asilimia 80-100 ya faida kama gawio, TCC inavutia wawekezaji wanaotafuta mapato ya mara kwa mara. Hata kama bei ya hisa haikui kwa kasi, gawio kubwa linafanya uwekezaji kuwa wa faida.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>biashara zinazokabiliana na changamoto za kimaadili</strong>. Sigara ni bidhaa inayojulikana kuwa na madhara kiafya, lakini bado inatoa faida kubwa kwa wanahisa. Mwekezaji mwerevu anahitaji kufikiri kuhusu maadili ya uwekezaji wake, sio faida tu.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama kampeni za afya zinaendelea kupunguza idadi ya wavutaji duniani, je, TCC inaweza kudumisha faida yake kwa miaka 10-20 ijayo — au inahitaji kubadilisha mfano wake wa biashara ili kukabiliana na mabadiliko haya?
        </p>
      </section>

      <div style={warningBoxStyle}>
        <strong>Kumbuka:</strong> Uchambuzi huu ni kwa madhumuni ya elimu pekee. Sio ushauri wa kifedha, kodi, au uwekezaji. Bei ya hisa inabadilika kila siku — angalia DSE au broker wako kwa bei ya sasa. Kabla ya kuwekeza, fanya utafiti wako mwenyewe na uzingatie hali yako ya kifedha.
      </div>

      <p style={{ marginTop: "2.5rem" }}>
        <a href="/kampuni" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi kwa Uchambuzi wa Kampuni</a>
      </p>
    </main>
  );
}

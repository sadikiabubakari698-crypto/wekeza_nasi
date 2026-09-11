export default function DSE() {
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
        DSE Plc — Dar es Salaam Stock Exchange
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Soko la hisa lenyewe ni kampuni — kesi ya kipekee
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> DSE</div>
        <div><strong>Sekta:</strong> Huduma za Fedha / Soko la Hisa</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2016 (self-listing)</div>
        <div><strong>Aina:</strong> Public Limited Company (Plc)</div>
      </div>

      {/* SEHEMU 1 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Dar es Salaam Stock Exchange Public Limited Company (DSE Plc) ni soko la hisa la Tanzania. Ilianzishwa mwaka 1996 kama taasisi inayosimamia biashara ya hisa nchini. Kwa miaka 20+, DSE ilikuwa taasisi ya umma inayomilikiwa na serikali na wanachama.
        </p>
        <p style={pStyle}>
          Mwaka 2015-2016, DSE ilifanya mabadiliko makubwa ya kimuundo (demutualization) — ikawa kampuni ya umma. Kisha mwaka 2016, DSE ilijiorodhesha yenyewe kwenye soko lake — ikawa moja ya masoko ya hisa ya kwanza Afrika kufanya hivi.
        </p>
        <p style={pStyle}>
          Hii ina maana: <strong>DSE ni kampuni inayomilikiwa na wanahisa, na hisa zake zinabiashara kwenye soko la DSE lenyewe.</strong> Ni mfano wa kipekee wa "meta" — soko linajifanya kampuni.
        </p>
      </section>

      {/* SEHEMU 2 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}>
          <strong>Dhamira (Mission):</strong> Kutoa jukwaa la uwekezaji lenye usalama, ufanisi, na uwazi kwa Watanzania na wawekezaji wa kimataifa.
        </p>
        <p style={pStyle}>
          <strong>Maono (Vision):</strong> Kuwa soko la hisa linaloongoza Afrika Mashariki, linalowavutia wawekezaji wa ndani na nje, na kuchangia ukuaji wa uchumi wa Tanzania.
        </p>
        <p style={pStyle}>
          <strong>Tatizo linalotatua:</strong> Watanzania wanahitaji mahali salama pa kuwekeza fedha zao, na makampuni yanahitaji mahali pa kupata mtaji. DSE inatoa jukwaa la kukutanisha wawekezaji na makampuni — ikichangia ukuaji wa uchumi.
        </p>
        <p style={pStyle}>
          <strong>Wateja:</strong> Wawekezaji binafsi, taasisi za kifedha (benki, pension funds), makampuni yanayotafuta mtaji, brokers, na serikali.
        </p>
      </section>

      {/* SEHEMU 3 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>
          DSE inatoa huduma za msingi:
        </p>
        <ul style={ulStyle}>
          <li><strong>Jukwaa la biashara ya hisa</strong> — wawekezaji wanauza na kununua hisa</li>
          <li><strong>Uorodheshaji wa makampuni</strong> — makampuni yanajiunga na DSE ili kupata mtaji</li>
          <li><strong>Usimamizi wa soko</strong> — kuhakikisha biashara inafanyika kwa haki na uwazi</li>
          <li><strong>Utoaji wa taarifa</strong> — bei, data, na ripoti za soko</li>
          <li><strong>Elimu kwa wawekezaji</strong> — kufundisha umma kuhusu uwekezaji</li>
          <li><strong>Ufuatiliaji wa kanuni</strong> — kuhakikisha makampuni yanafuata sheria</li>
        </ul>

        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Listing fees</strong> — makampuni yanalipa kujiunga na kubaki DSE</li>
          <li><strong>Trading fees</strong> — ada ndogo kwa kila biashara inayofanyika</li>
          <li><strong>Data fees</strong> — malipo kwa taarifa za soko (kwa brokers, waandishi, n.k.)</li>
          <li><strong>Membership fees</strong> — brokers na wanachama wengine wanalipa</li>
          <li><strong>Annual fees</strong> — makampuni yaliyoorodheshwa yanalipa kila mwaka</li>
        </ul>
        <p style={pStyle}>
          Mapato yanategemea shughuli za soko — biashara nyingi, makampuni mengi yaliyoorodheshwa, na wawekezaji wengi = mapato zaidi.
        </p>
      </section>

      {/* SEHEMU 4 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>
          DSE ni soko pekee la hisa Tanzania. Hii inatoa nafasi ya kipekee — lakini pia changamoto:
        </p>
        <ul style={ulStyle}>
          <li><strong>Ukiritimba wa asili:</strong> DSE ni soko pekee rasmi la hisa Tanzania</li>
          <li><strong>Ukubwa mdogo:</strong> Ikilinganishwa na masoko ya Kenya (NSE), Afrika Kusini (JSE), au Nigeria (NGX), DSE ni ndogo</li>
          <li><strong>Idadi ndogo ya makampuni:</strong> Makampuni ~28 tu yameorodheshwa (kulinganisha: NSE Kenya ina 60+)</li>
          <li><strong>Ukwasi mdogo:</strong> Biashara za kila siku ni ndogo ikilinganishwa na masoko mengine</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> DSE inasaidia makampuni kupata mtaji, inatoa nafasi kwa Watanzania kuwekeza, na inachangia uwazi wa makampuni. Serikali inawekeza katika kuimarisha soko hili ili kuvutia wawekezaji wa kimataifa.
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa soko:</strong> DSE imekua kwa kiasi kikubwa miaka ya hivi karibuni. Market capitalization ilifikia zaidi ya TSh trilioni 35 kufikia 2026. Serikali inaendelea kuhamasisha makampuni kujiunga na soko.
        </p>
      </section>

      {/* SEHEMU 5 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>
          Mapato ya DSE yanategemea shughuli za soko. Miaka ya hivi karibuni imeonyesha ukuaji mzuri, ukisaidiwa na:
        </p>
        <ul style={ulStyle}>
          <li>Kuongezeka kwa wawekezaji wa ndani</li>
          <li>Makampuni mapya yanayoorodheshwa</li>
          <li>Ukuaji wa huduma za kidijitali za DSE</li>
          <li>Kuvutia wawekezaji wa kimataifa</li>
        </ul>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>
          DSE imekuwa ikitoa gawio kwa wanahisa kwa miaka kadhaa. Sera ni kugawa sehemu ya faida kama gawio huku ikibakiza sehemu kwa uwekezaji wa teknolojia na ukuaji wa soko.
        </p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>
          DSE ina madeni madogo ikilinganishwa na kampuni nyingine. Mapato yake ya ada na subscription yanatoa mtiririko thabiti wa fedha.
        </p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Mfumo wa kielektroniki wa biashara (trading platform)</li>
          <li>Mikataba ya muda mrefu na brokers na wanachama</li>
          <li>Data ya kihistoria ya soko</li>
          <li>Timu ya wataalamu wa soko</li>
          <li>Umiliki wa hisa kwenye taasisi za kifedha</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>
          Bei ya hisa ya DSE inabadilika kulingana na shughuli za soko. Kwa bei ya sasa, angalia DSE au broker wako.
        </p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Uchambuzi huu ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni, angalia ripoti ya mwaka ya DSE Plc au tovuti ya DSE (dse.co.tz).
        </div>
      </section>

      {/* HATARI MAALUM */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Utegemezi wa soko:</strong> Kama soko lina shida (biashara kidogo), mapato ya DSE yanapungua.</li>
          <li><strong>Ukubwa mdogo wa soko:</strong> DSE ni ndogo ikilinganishwa na masoko mengine — ukuaji unaweza kuwa wa polepole.</li>
          <li><strong>Idadi ndogo ya makampuni:</strong> Makampuni machache yaliyoorodheshwa = mapato machache ya ada.</li>
          <li><strong>Ushindani wa kikanda:</strong> Wawekezaji wanaweza kuchagua NSE (Kenya) au JSE (Afrika Kusumi) badala ya DSE.</li>
          <li><strong>Udhibiti wa serikali:</strong> Sheria mpya za CMSA zinaweza kuongeza gharama.</li>
          <li><strong>Utegemezi wa teknolojia:</strong> Kama mfumo wa biashara unashindwa, soko linaweza kusimama.</li>
          <li><strong>Hali ya uchumi:</strong> Kushuka kwa uchumi kunaathiri wawekezaji na biashara za soko.</li>
        </ul>
      </section>

      {/* SEHEMU 6 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          DSE inatufundisha kuhusu <strong>umuhimu wa miundombinu ya kifedha</strong>. Bila soko la hisa, makampuni yangekuwa na ugumu kupata mtaji, na wawekezaji wasingekuwa na mahali pa kuwekeza. DSE ni msingi wa mfumo wa kifedha wa Tanzania.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>"meta" — kampuni inayomiliki soko, na soko linaihalalisha kampuni</strong>. Hii ni dhana ya kuvutia: DSE ni kampuni, lakini pia ni soko ambalo kampuni zingine zinaorodheshwa. Hii inaonyesha jinsi mifumo ya kifedha inavyoshirikiana.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama DSE inataka kukua zaidi, inahitaji makampuni mengi zaidi kuorodheshwa. Je, ni nini kinazuia makampuni mengi Tanzania kujiunga na soko la hisa — na DSE inaweza kufanya nini kuhusu hilo?
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

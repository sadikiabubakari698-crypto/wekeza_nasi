export default function Swissport() {
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
        Swissport Tanzania Plc
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Huduma za uwanja wa ndege — mlango wa anga wa Tanzania
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> SWIS</div>
        <div><strong>Sekta:</strong> Huduma za Anga (Aviation Ground Services)</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2003</div>
        <div><strong>Mmiliki mkuu:</strong> Swissport International Ltd (Uswisi)</div>
      </div>

      {/* SEHEMU 1 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Swissport Tanzania Plc ni kampuni inayotoa huduma za ardhini (ground handling) kwenye viwanja vya ndege Tanzania. Ilianzishwa awali kama <strong>DAHACO (Dar es Salaam Airport Handling Company)</strong>, kisha ikabadilishwa jina kuwa <strong>DAS Handling</strong>, na mwaka 2003 iliorodheshwa DSE.
        </p>
        <p style={pStyle}>
          Mwaka 2011, Swissport International — kampuni kubwa ya kimataifa ya huduma za anga kutoka Uswisi — ilinunua sehemu kubwa ya umiliki. Tangu wakati huo, kampuni inajulikana kama <strong>Swissport Tanzania Plc</strong>.
        </p>
        <p style={pStyle}>
          Makao makuu yake yapo Dar es Salaam, na inafanya kazi hasa kwenye <strong>Julius Nyerere International Airport (JNIA)</strong>, <strong>Kilimanjaro International Airport (KIA)</strong>, na viwanja vingine vya ndege Tanzania.
        </p>
      </section>

      {/* SEHEMU 2 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}>
          <strong>Dhamira (Mission):</strong> Kutoa huduma bora za ardhini kwa mashirika ya ndege, kwa kuzingatia usalama, ufanisi, na viwango vya kimataifa.
        </p>
        <p style={pStyle}>
          <strong>Maono (Vision):</strong> Kuwa mtoa huduma anayeongoza wa huduma za anga Tanzania, na kuhimili viwango vya kimataifa vya Swissport International.
        </p>
        <p style={pStyle}>
          <strong>Tatizo linalotatua:</strong> Mashirika ya ndege yanahitaji huduma za ardhini kama abiria, mizigo, mafuta, usafi wa ndege — lakini hayawezi kufanya yote yenyewe. Swissport inatoa huduma hizi kwa ufanisi, ikiruhusu mashirika kuzingatia usafiri wa anga.
        </p>
        <p style={pStyle}>
          <strong>Wateja:</strong> Mashirika ya ndege ya kimataifa (kama Emirates, Qatar Airways, KLM), mashirika ya ndani (Air Tanzania, Precision Air), na mashirika ya mizigo.
        </p>
      </section>

      {/* SEHEMU 3 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>
          Swissport Tanzania inatoa huduma kuu za ardhini:
        </p>
        <ul style={ulStyle}>
          <li><strong>Passenger Services</strong> — kuhudumia abiria: check-in, boarding, uhamisho wa abiria</li>
          <li><strong>Ramp Services</strong> — kuhudumia ndege: kupakia mizigo, mafuta, kusafisha, kuandaa ndege kwa safari</li>
          <li><strong>Cargo Services</strong> — kuhudumia mizigo: kupokea, kuhifadhi, kupakia mizigo kwenye ndege</li>
          <li><strong>Into-plane Services</strong> — kuhudumia mafuta ya ndege</li>
          <li><strong>Aviation Security</strong> — usalama wa abiria na mizigo</li>
          <li><strong>Lounge Services</strong> — kuhudumia abiria kwenye kumbi maalum</li>
        </ul>

        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Huduma kwa mashirika ya ndege</strong> — malipo kwa kila ndege inayohudumiwa</li>
          <li><strong>Huduma kwa abiria</strong> — malipo kwa kila abiria anayehudumiwa</li>
          <li><strong>Huduma za mizigo</strong> — malipo kwa tani za mizigo</li>
          <li><strong>Kodi za kukodisha nafasi</strong> — kwa mashirika yanayotumia vifaa vya Swissport</li>
        </ul>
        <p style={pStyle}>
          Mapato yanategemea idadi ya ndege zinazofika na kuondoka Tanzania, abiria wanaosafiri, na mizigo inayopita.
        </p>
      </section>

      {/* SEHEMU 4 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>
          Swissport Tanzania ni mmoja wa watoa huduma wakuu wa ardhini Tanzania. Ushindani upo kwenye viwanja vya ndege vikuu:
        </p>
        <ul style={ulStyle}>
          <li><strong>Swissport Tanzania</strong> — mtoa huduma mkuu</li>
          <li><strong>Nas Servair</strong> — mshindani kwenye huduma za chakula</li>
          <li><strong>Ground handlers wengine</strong> — mashirika yenye huduma zao</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> Tanzania inategemea usafiri wa anga kwa utalii (Serengeti, Zanzibar, Kilimanjaro), biashara, na uhusiano wa kimataifa. Bila huduma bora za ardhini, viwanja vya ndege haviwezi kufanya kazi.
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa sekta:</strong> Serikali ya Tanzania inawekeza sana kwenye sekta ya anga: ujenzi wa Terminal 3 JNIA, uboreshaji wa viwanja vya mikoa, ununuzi wa ndege za Air Tanzania. Hii yote inaongeza mahitaji ya huduma za Swissport.
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
          Mapato ya Swissport yanategemea idadi ya ndege na abiria. Baada ya janga la COVID-19 (2020-2021), sekta ya anga ilipata hasara kubwa. Lakini kuanzia 2022, safari za ndege zimeanza kuongezeka tena, na kampuni imeanza kurejesha mapato yake.
        </p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>
          Swissport imekuwa ikitoa gawio kwa wanahisa katika miaka ya utendaji mzuri. Lakini wakati wa janga la COVID-19, gawio lilisimama kwa muda. Hivi karibuni, kampuni inaendelea kufuatilia hali ya sekta ya anga kabla ya kurudisha gawio kikamilifu.
        </p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>
          Swissport ina madeni ya wastani. Deni kubwa linatokana na uwekezaji wa mitambo (magari ya kuhudumia ndege, vifaa vya mizigo). Wakati wa janga, kampuni ilikopa kusaidia uendeshaji.
        </p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Magari na mitambo ya kuhudumia ndege (ramp equipment)</li>
          <li>Vifaa vya kuhudumia mizigo (cargo handling equipment)</li>
          <li>Kumbi za abiria (lounges) kwenye viwanja vya ndege</li>
          <li>Mikataba ya muda mrefu na mashirika ya ndege</li>
          <li>Wafanyakazi wenye ujuzi wa kimataifa</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>
          Bei ya hisa ya Swissport inabadilika kila siku. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.
        </p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Sekta ya anga ilipata athari kubwa kutokana na COVID-19. Kwa taarifa za hivi karibuni, angalia ripoti ya mwaka ya Swissport Tanzania.
        </div>
      </section>

      {/* HATARI MAALUM */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Utegemezi wa sekta ya anga:</strong> Kama sekta ya anga ina shida (kama COVID-19), Swissport inapata hasara kubwa.</li>
          <li><strong>Mikataba na mashirika:</strong> Kama shirika kubwa la ndege linaondoka Tanzania, mapato yanapungua.</li>
          <li><strong>Ushindani:</strong> Watoa huduma wengine wanaweza kuchukua sehemu ya soko.</li>
          <li><strong>Udhibiti wa serikali:</strong> Sheria mpya za usalama, mazingira, au kodi zinaweza kuongeza gharama.</li>
          <li><strong>Mzunguko wa uchumi:</strong> Wakati wa kushuka kwa uchumi, watu wanasafiri kidogo, na hivyo mapato ya Swissport yanapungua.</li>
          <li><strong>Utegemezi wa utalii:</strong> Watalii ni sehemu kubwa ya abiria — kupungua kwa utalii kunaathiri mapato.</li>
          <li><strong>Kushuka kwa shilingi:</strong> Sehemu ya gharama ziko kwa fedha za kigeni, hivyo kushuka kwa shilingi kunaongeza gharama.</li>
        </ul>
      </section>

      {/* SEHEMU 6 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          Swissport inatufundisha kuhusu <strong>kampuni zinazohusiana na mzunguko wa sekta fulani</strong>. Sekta ya anga ina mzunguko mkubwa: wakati mzuri, abiria ni wengi na kampuni inapata faida kubwa; wakati mbaya (kama janga la COVID-19), abiria wanapungua na kampuni inapata hasara kubwa.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>umuhimu wa mikataba ya muda mrefu</strong>. Kwa kuwa na mikataba na mashirika makubwa ya ndege, Swissport ina uhakika wa mapato — lakini pia ina hatari kama mkataba unavunjika.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama Tanzania inaendelea kuwekeza kwenye sekta ya anga (viwanja vipya, Air Tanzania), je, Swissport inaweza kukua pamoja na sekta hii — au ushindani na mabadiliko ya teknolojia yanaweza kuathiri biashara yake?
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

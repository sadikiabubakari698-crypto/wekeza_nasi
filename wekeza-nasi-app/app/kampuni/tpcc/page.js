export default function TPCC() {
  const sectionStyle = { marginBottom: "2.5rem" };
  const h2Style = { fontSize: "1.4rem", color: "#1a1a1a", marginBottom: "0.75rem", borderBottom: "2px solid #1e7b4c", paddingBottom: "0.4rem" };
  const h3Style = { fontSize: "1.1rem", color: "#1e7b4c", marginTop: "1.2rem", marginBottom: "0.4rem" };
  const pStyle = { color: "#1a1a1a", lineHeight: 1.7, marginBottom: "0.75rem" };
  const ulStyle = { color: "#1a1a1a", paddingLeft: "1.5rem", lineHeight: 1.8 };
  const infoBoxStyle = { background: "#f3f7fb", borderRadius: "10px", padding: "1rem 1.25rem", margin: "1rem 0", color: "#1a1a1a" };
  const warningBoxStyle = { background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "8px", margin: "1.5rem 0", color: "#1a1a1a", fontSize: "0.95rem" };
  const questionBoxStyle = { background: "#f0f6fd", borderLeft: "5px solid #1e7b4c", padding: "1.25rem 1.5rem", borderRadius: "8px", margin: "1.5rem 0", color: "#1a1a1a", fontStyle: "italic", fontSize: "1.05rem" };

  return (
    <main style={{ padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.7, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <a href="/kampuni" style={{ color: "#1e7b4c", fontWeight: 600 }}>← Rudi kwa Uchambuzi wa Kampuni</a>

      <h1 style={{ fontSize: "2rem", marginTop: "1.5rem", marginBottom: "0.25rem", color: "#1a1a1a" }}>
        TPCC — Tanzania Portland Cement Plc
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Twiga Cement — Saruji inayojenga Tanzania
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> TPCC</div>
        <div><strong>Sekta:</strong> Ujenzi / Saruji</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2000</div>
        <div><strong>Mmiliki mkuu:</strong> HeidelbergCement Group (Ujerumani)</div>
      </div>

      {/* SEHEMU 1 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Tanzania Portland Cement Public Limited Company (TPCC) ilianzishwa mwaka 1959 kama Tanganyika Portland Cement. Ni moja ya makampuni ya zamani zaidi ya viwanda Tanzania, ikiwa na historia ya zaidi ya miaka 60.
        </p>
        <p style={pStyle}>
          Bidhaa yake maarufu inajulikana kwa jina la <strong>Twiga Cement</strong> — jina lililochukuliwa kutoka kwa mnyama twiga, ishara ya Tanzania. Makao makuu yake yapo Wazo, Dar es Salaam, na kiwanda kikubwa kipo Wazo.
        </p>
        <p style={pStyle}>
          TPCC iliorodheshwa kwenye Dar es Salaam Stock Exchange (DSE) mwaka 2000, na kwa muda mrefu imekuwa moja ya makampuni makubwa kwenye soko.
        </p>
      </section>

      {/* SEHEMU 2 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}>
          <strong>Dhamira (Mission):</strong> Kutoa saruji bora ya ubora wa kimataifa kwa bei nafuu, kwa ajili ya ujenzi wa Tanzania.
        </p>
        <p style={pStyle}>
          <strong>Maono (Vision):</strong> Kuwa kiongozi wa sekta ya saruji Tanzania na Afrika Mashariki, kwa kuzingatia ubora, uendelevu, na uvumbuzi.
        </p>
        <p style={pStyle}>
          <strong>Tatizo linalotatua:</strong> Tanzania ina uhaba wa saruji ya kutosha kwa ujenzi wa miundombinu, nyumba, na viwanda. TPCC inazalisha saruji kwa wingi, ikisaidia ukuaji wa uchumi na ujenzi wa nchi.
        </p>
        <p style={pStyle}>
          <strong>Wateja:</strong> Wakandarasi wa ujenzi, wazalishaji wa zege (concrete), makampuni ya miundombinu, serikali (barabara, madaraja), na wateja binafsi wanaojenga nyumba.
        </p>
      </section>

      {/* SEHEMU 3 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>
          TPCC inazalisha na kuuza saruji na clinker. Bidhaa zake kuu:
        </p>
        <ul style={ulStyle}>
          <li><strong>Twiga Ordinary Portland Cement</strong> — saruji ya kawaida kwa ujenzi wa jumla</li>
          <li><strong>Twiga Portland Pozzolana Cement</strong> — saruji ya kudumu kwa miundombinu</li>
          <li><strong>Clinker</strong> — malighafi ya saruji inayouzwa kwa wazalishaji wengine</li>
          <li><strong>Saruji maalum</strong> kwa miradi ya barabara, madaraja, na majengo makubwa</li>
        </ul>

        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Uuzaji wa saruji</strong> — ndiyo chanzo kikuu cha mapato (~90%+)</li>
          <li><strong>Uuzaji wa clinker</strong> — kwa wazalishaji wengine wa saruji</li>
          <li><strong>Usafirishaji</strong> — huduma za usambazaji kwa wateja</li>
        </ul>
        <p style={pStyle}>
          Mapato yanategemea sana mahitaji ya saruji sokoni — ambayo yanaambatana na ukuaji wa sekta ya ujenzi na miundombinu nchini.
        </p>
      </section>

      {/* SEHEMU 4 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>
          TPCC ni moja ya wazalishaji wakubwa wa saruji Tanzania, ikiwa na sehemu kubwa ya soko. Sekta ya saruji Tanzania ina wazalishaji wakuu:
        </p>
        <ul style={ulStyle}>
          <li><strong>TPCC (Twiga Cement)</strong> — moja ya wakubwa</li>
          <li><strong>Tanga Cement</strong> — mshindani mkuu</li>
          <li><strong>Dangote Cement</strong> — mzalishaji mkubwa wa Afrika</li>
          <li><strong>Lake Cement</strong> — mzalishaji mdogo</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> Saruji ni msingi wa ujenzi. Kila barabara, daraja, shule, hospitali, na nyumba inahitaji saruji. Kwa hiyo TPCC ina nafasi muhimu kwenye ukuaji wa uchumi wa Tanzania.
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa mahitaji:</strong> Serikali ya Tanzania inaendelea na miradi mikubwa ya miundombinu (barabara, reli ya SGR, bandari). Ukuaji wa miji na mahitaji ya nyumba unaongeza mahitaji ya saruji.
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
          TPCC imekuwa na utendaji thabiti kwa miaka mingi. Mapato yake yanategemea mauzo ya saruji na clinker. Kwa mwaka wa fedha wa hivi karibuni, kampuni imeendelea kuonyesha faida, ikisaidiwa na mahitaji ya saruji kutokana na miradi ya miundombinu.
        </p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>
          TPCC imekuwa ikitoa gawio kwa wanahisa kwa miaka mingi. Sera ya kampuni ni kugawa sehemu ya faida kama gawio, huku ikibakiza sehemu kwa uwekezaji wa ukuaji na uboreshaji wa kiwanda.
        </p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>
          TPCC ina madeni ya wastani ikilinganishwa na kampuni nyingine za viwanda. Deni hutumika kwa uwekezaji wa mitambo na upanuzi wa uwezo wa uzalishaji.
        </p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Kiwanda kikubwa Wazo, Dar es Salaam</li>
          <li>Machinery ya kisasa ya uzalishaji wa saruji</li>
          <li>Mtandao wa usambazaji nchi nzima</li>
          <li>Hifadhi ya malighafi (limestone)</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>
          Bei ya hisa ya TPCC inabadilika kila siku kulingana na ugavi na mahitaji sokoni. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.
        </p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni za kifedha, angalia ripoti ya mwaka ya TPCC au tangazo la DSE.
        </div>
      </section>

      {/* HATARI MAALUM (Section 21) */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Ushindani mkali:</strong> Tanga Cement, Dangote, na wazalishaji wengine wanashindana kwa bei na soko.</li>
          <li><strong>Gharama za nishati:</strong> Saruji inahitaji nishati nyingi (umeme, makaa). Kupanda kwa gharama za nishati kunapunguza faida.</li>
          <li><strong>Utegemezi wa ujenzi:</strong> Mahitaji ya saruji yanategemea sekta ya ujenzi. Kushuka kwa ujenzi kunapunguza mauzo.</li>
          <li><strong>Fedha za kigeni:</strong> Sehemu ya malighafi na mitambo inanunuliwa kwa fedha za kigeni — kushuka kwa shilingi kunaongeza gharama.</li>
          <li><strong>Mabadiliko ya sera:</strong> Kodi mpya au sheria za mazingira zinaweza kuongeza gharama.</li>
          <li><strong>Utegemezi wa miradi ya serikali:</strong> Miradi mikubwa ya serikali inaweza kucheleweshwa au kubadilishwa.</li>
        </ul>
      </section>

      {/* SEHEMU 6 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          TPCC inatufundisha kitu muhimu kuhusu uwekezaji: <strong>kampuni inayohusiana na ukuaji wa uchumi ina nafasi nzuri ya kukua pamoja na uchumi.</strong> Tanzania inajenga — barabara, madaraja, nyumba, shule. Kila mradi unahitaji saruji. Kwa hiyo, kama uchumi wa Tanzania unakua, TPCC ina nafasi ya kukua pamoja nao.
        </p>
        <p style={pStyle}>
          Lakini pia inatufundisha kuhusu <strong>mzunguko wa sekta</strong>. Wakati ujenzi unapungua, mauzo ya saruji yanapungua. Wakati ujenzi unaongezeka, mauzo yanaongezeka. Hii inaonyesha kwamba hata kampuni nzuri inaweza kuathiriwa na mzunguko wa uchumi.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Je, ukuaji wa miundombinu Tanzania unaendelea kwa kasi ya kutosha kuhimili ukuaji wa TPCC kwa miaka 5 ijayo — au kuna hatari kwamba ujenzi utapungua?
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

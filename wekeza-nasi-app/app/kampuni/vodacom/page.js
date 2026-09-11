export default function Vodacom() {
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
        Vodacom Tanzania Plc
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Kampuni kubwa zaidi ya mawasiliano Tanzania
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> VODA</div>
        <div><strong>Sekta:</strong> Mawasiliano</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2017</div>
        <div><strong>Mmiliki mkuu:</strong> Vodacom Group (Afrika Kusini) + umma</div>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Vodacom Tanzania Plc ilianzishwa mwaka 2000 kama kampuni ya mawasiliano ya simu. Ilikuwa moja ya makampuni ya kwanza ya simu Tanzania, na kwa muda mrefu imekuwa kiongozi wa soko.
        </p>
        <p style={pStyle}>
          Iliorodheshwa DSE mwaka 2017 — hii ilikuwa moja ya IPO kubwa zaidi kwenye historia ya DSE, ikivutia wawekezaji wengi. Umiliki wake: Vodacom Group (kampuni ya Afrika Kusini inayomilikiwa na Vodafone), pamoja na umma.
        </p>
        <p style={pStyle}>
          Makao makuu yapo Dar es Salaam. Vodacom ina mfumo mkubwa wa minara ya mawasiliano nchi nzima, ikiwemo maeneo ya vijijini.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}><strong>Dhamira (Mission):</strong> Kuunganisha Watanzania kupitia teknolojia ya mawasiliano, na kuboresha maisha yao kwa huduma za kidijitali.</p>
        <p style={pStyle}><strong>Maono (Vision):</strong> Kuwa kampuni inayoongoza ya teknolojia Tanzania, ikitoa huduma za mawasiliano na fedha za kidijitali kwa watu wote.</p>
        <p style={pStyle}><strong>Tatizo linalotatua:</strong> Watanzania wanahitaji mawasiliano ya simu, intaneti, na huduma za fedha za kidijitali (M-Pesa). Vodacom inatoa huduma hizi kwa mamilioni ya Watanzania, ikiwawezesha kuunganishwa na kufanya biashara.</p>
        <p style={pStyle}><strong>Wateja:</strong> Watu binafsi, biashara, taasisi za serikali, na makampuni.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>Vodacom inatoa huduma kuu:</p>
        <ul style={ulStyle}>
          <li><strong>Mawasiliano ya simu</strong> — sauti na SMS</li>
          <li><strong>Intaneti</strong> — data ya 3G, 4G, na 5G</li>
          <li><strong>M-Pesa</strong> — huduma za fedha za kidijitali (kutuma, kupokea, kulipa)</li>
          <li><strong>Huduma za biashara</strong> — suluhisho za mawasiliano kwa makampuni</li>
          <li><strong>Vifaa vya simu</strong> — kuuza simu na vifaa</li>
        </ul>
        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Data ya intaneti</strong> — inakua kwa kasi, ni chanzo kikuu cha mapato</li>
          <li><strong>Simu (voice)</strong> — bado ni chanzo muhimu, lakini kinapungua</li>
          <li><strong>M-Pesa</strong> — ada za miamala ya fedha</li>
          <li><strong>Huduma za biashara</strong> — kwa makampuni</li>
          <li><strong>Uuzaji wa vifaa</strong> — simu na vifaa vingine</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>Sekta ya mawasiliano Tanzania ina washindani wakuu:</p>
        <ul style={ulStyle}>
          <li><strong>Vodacom</strong> — inaongoza kwa ukubwa wa soko</li>
          <li><strong>Airtel Tanzania</strong> — mshindani mkuu</li>
          <li><strong>Tigo</strong> — inamilikiwa na Axian (Madagascar)</li>
          <li><strong>Halotel</strong> — inamilikiwa na Viettel (Vietnam)</li>
          <li><strong>TTCL</strong> — kampuni ya serikali</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> Mawasiliano ni msingi wa uchumi wa kisasa. Vodacom inasaidia mamilioni ya Watanzania kuwasiliana, kufanya biashara, na kufikia huduma za fedha (M-Pesa). Hii inachangia sana kwenye ukuaji wa uchumi.
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa sekta:</strong> Matumizi ya intaneti na simu za mkononi yanaendelea kukua Tanzania. Vodacom inawekeza kwenye teknolojia ya 4G na 5G ili kuboresha huduma na kukidhi mahitaji yanayokua.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>Mapato ya Vodacom yamekua kwa kasi, yakisaidiwa na ukuaji wa data ya intaneti na M-Pesa. Faida halisi imeendelea kuwa thabiti, ingawa kuna ushindani mkali wa bei na gharama kubwa za uwekezaji wa minara. ROE ni ya wastani kwenye sekta.</p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>Vodacom imekuwa ikitoa gawio kwa wanahisa kila mwaka tangu kuorodheshwa. Sera ya kampuni ni kugawa asilimia 60-80 ya faida kama gawio — hii inafanya kuwa maarufu kwa wawekezaji wanaotafuta mapato ya mara kwa mara.</p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>Vodacom ina madeni ya wastani, yanayotokana na uwekezaji mkubwa kwenye minara na teknolojia ya 4G/5G. Deni linapungua kadiri mapato yanavyokua.</p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Mtandao mkubwa wa minara nchi nzima</li>
          <li>Leseni za mawasiliano kutoka TCRA</li>
          <li>Mfumo wa M-Pesa (watumiaji mamilioni)</li>
          <li>Wafanyakazi wa kudumu 1,000+</li>
          <li>Wakala wa M-Pesa nchi nzima</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>Bei ya hisa ya Vodacom inabadilika kila siku kulingana na ugavi na mahitaji sokoni. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.</p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni za kifedha, angalia ripoti ya mwaka ya Vodacom au tangazo la DSE.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Hatari ya Udhibiti:</strong> TCRA inaweza kubadilisha leseni au kanuni, kuathiri faida.</li>
          <li><strong>Hatari ya Ushindani:</strong> Airtel, Tigo, na Halotel wanashindana kwa bei na soko.</li>
          <li><strong>Hatari ya Kodi:</strong> Serikali inaweza kuongeza kodi kwenye simu, data, au M-Pesa — hii inapunguza faida.</li>
          <li><strong>Hatari ya Uwekezaji wa Mitambo:</strong> Kujenga minara na kuboresha teknolojia (5G) ni gharama kubwa.</li>
          <li><strong>Hatari ya Fedha za Kigeni:</strong> Uwekezaji wa mitambo unanunuliwa kwa fedha za kigeni — kushuka kwa shilingi kunaongeza gharama.</li>
          <li><strong>Hatari ya Usalama wa Mtandao:</strong> Mashambulizi ya cyber yanaweza kuathiri huduma.</li>
          <li><strong>Hatari ya Mabadiliko ya Teknolojia:</strong> Kupanda kwa WhatsApp, VoIP, na apps zinaweza kupunguza mapato ya simu (voice).</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          Vodacom inatufundisha kuhusu <strong>mabadiliko ya teknolojia na athari zake kwenye biashara</strong>. Miaka 10-15 iliyopita, mapato makubwa ya Vodacom yalitoka kwenye simu (voice). Lakini kupanda kwa WhatsApp, Skype, na VoIP kumepunguza mapato ya simu. Vodacom ilibadilika haraka — ikawekeza kwenye data na M-Pesa. Leo, data na M-Pesa ni chanzo kikuu cha mapato.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>nguvu ya huduma za fedha za kidijitali</strong>. M-Pesa imekuwa moja ya biashara yenye mafanikio makubwa Tanzania. Imewawezesha Watanzania wengi kufikia huduma za fedha bila kwenda benki — ikiwemo vijijini.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama teknolojia inaendelea kubadilika — 5G, AI, na apps mpya — je, Vodacom inaweza kudumisha uongozi wake Tanzania, au ushindani kutoka makampuni mapya (kama Starlink au fintech mpya) unaweza kubadilisha sekta nzima?
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

export default function NMB() {
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
        NMB Bank Plc
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Benki yenye faida kubwa zaidi Tanzania
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> NMB</div>
        <div><strong>Sekta:</strong> Benki</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2008</div>
        <div><strong>Mmiliki mkuu:</strong> Serikali ya Tanzania + umma</div>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          NMB Bank Plc ilianzishwa mwaka 1997 kutokana na muungano wa benki za serikali. Iliorodheshwa DSE mwaka 2008. Kwa miaka 20+, imekua kuwa benki ya pili kwa ukubwa Tanzania kwa mtaji wa soko, lakini mara nyingi inaongoza kwa faida halisi.
        </p>
        <p style={pStyle}>
          Umiliki wake: Serikali ya Tanzania kupitia Treasury Registrar, na umma kupitia DSE. Makao makuu yapo Dar es Salaam. Mnamo Julai 2026, NMB ilifanya stock split ya 1:10 ili kuongeza ukwasi wa hisa zake.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}><strong>Dhamira (Mission):</strong> Kutoa huduma za kifedha kwa ufanisi, kwa kuzingatia wateja wadogo na wa kati, na kuchangia maendeleo ya uchumi wa Tanzania.</p>
        <p style={pStyle}><strong>Maono (Vision):</strong> Kuwa benki inayoongoza kwa huduma za kidijitali na ubunifu Tanzania na Afrika Mashariki.</p>
        <p style={pStyle}><strong>Tatizo linalotatua:</strong> Watanzania wengi, hasa wakulima na wafanyabiashara wadogo, wanahitaji huduma za benki rahisi na mikopo. NMB inawekeza sana kwenye teknolojia ili kufikisha huduma kwa watu wengi.</p>
        <p style={pStyle}><strong>Wateja:</strong> Wakulima, biashara ndogo na za kati (SMEs), watu binafsi, na taasisi za serikali.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>NMB inatoa huduma kuu:</p>
        <ul style={ulStyle}>
          <li><strong>Mikopo</strong> — kwa wakulima, SMEs, na watu binafsi</li>
          <li><strong>Akaunti na Amana</strong> — akaunti za akiba, akaunti za biashara</li>
          <li><strong>Huduma za Kidijitali</strong> — NMB Mkononi, NMB Wakala</li>
          <li><strong>Huduma za Kimataifa</strong> — biashara za foreign exchange</li>
        </ul>
        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Riba kutoka mikopo</strong> — chanzo kikuu</li>
          <li><strong>Ada za huduma</strong> — uhamisho, akaunti, kadi</li>
          <li><strong>Uwekezaji wa fedha</strong> — dhamana za serikali</li>
          <li><strong>Huduma za kidijitali</strong> — ada za NMB Mkononi</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>Washindani wakuu wa NMB:</p>
        <ul style={ulStyle}>
          <li><strong>CRDB</strong> — benki kubwa zaidi kwa mtaji</li>
          <li><strong>Exim Bank, NBC, Stanbic, Absa</strong> — benki nyingine kubwa</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> NMB ni muhimu kwa sekta ya kilimo Tanzania. Inatoa mikopo kwa wakulima wa kahawa, pamba, korosho, na mazao mengine. Pia inaongoza kwenye huduma za kidijitali — NMB Mkononi ina watumiaji milioni 5+.
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa sekta:</strong> NMB inaendelea kuwekeza kwenye teknolojia (fintech, AI, data analytics) ili kuboresha huduma na kupunguza gharama.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>Mapato ya jumla yalikua kwa wastani wa asilimia 15 kwa mwaka kati ya 2022-2025. Faida halisi iliongezeka kutoka TSh bilioni 450 (2023) hadi TSh bilioni 600+ (2025). NMB ina moja ya uwiano bora wa ufanisi (cost-to-income ratio) chini ya asilimia 45.</p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>NMB imekuwa ikitoa gawio kila mwaka tangu 2010. Sera ya kampuni ni kugawa asilimia 35-45 ya faida kama gawio. Baada ya stock split ya 1:10 Julai 2026, gawio kwa kila hisa mpya lilibadilika.</p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>Kama benki, NMB ina madeni makubwa kwa asili (amana za wateja). Capital Adequacy Ratio ni ~19%, juu ya mahitaji ya BOT.</p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Jumla ya mali: TSh trilioni 11+</li>
          <li>Mikopo: TSh trilioni 7+</li>
          <li>Amana: TSh trilioni 9+</li>
          <li>Matawi 230+ nchi nzima</li>
          <li>Mfumo wa NMB Mkononi (watumiaji milioni 5+)</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>Bei ya hisa ya NMB inabadilika kila siku. Baada ya stock split ya 1:10, bei ya kila hisa mpya ni sehemu ya kumi ya bei ya zamani. Kwa bei ya sasa, angalia DSE au broker wako.</p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni, angalia ripoti ya mwaka ya NMB au tangazo la DSE.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Hatari ya Mikopo:</strong> Mikopo mikubwa kwa biashara ndogo ina hatari kubwa ya kushindwa kulipwa.</li>
          <li><strong>Hatari ya Udhibiti:</strong> Mabadiliko ya sera za BOT yanaweza kuathiri faida.</li>
          <li><strong>Hatari ya Ushindani wa Kidijitali:</strong> Benki mpya za kidijitali (mobile money) zinaweza kuchukua sehemu ya soko.</li>
          <li><strong>Hatari ya Fedha za Kigeni:</strong> Kushuka kwa shilingi kunaathiri mikopo ya fedha za kigeni.</li>
          <li><strong>Hatari ya Mkusanyiko:</strong> Umiliki mkubwa wa Serikali unaweza kuathiri maamuzi ya kimkakati.</li>
          <li><strong>Hatari ya Kilimo:</strong> Mikopo mingi inategemea kilimo — ukame au mabadiliko ya bei za mazao yanaathiri wakopaji.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          NMB inatufundisha kuhusu <strong>nguvu ya teknolojia kwenye benki</strong>. Kwa kuwekeza mapema kwenye NMB Mkononi na NMB Wakala, NMB imeweza kufikisha huduma kwa mamilioni ya Watanzania bila kujenga matawi mengi. Hii inapunguza gharama na kuongeza ufanisi.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>stock split kama mkakati wa biashara</strong>. NMB ilifanya stock split ya 1:10 ili kufanya hisa zake ziwe nafuu na kuvutia wawekezaji wengi zaidi. Hii iliongeza ukwasi wa hisa zake.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Je, ukuaji wa NMB unaweza kuendelea kwa kasi hii kama ushindani wa benki za kidijitali ukiongezeka — au NMB inahitaji kubadilika zaidi ili kudumisha uongozi wake?
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

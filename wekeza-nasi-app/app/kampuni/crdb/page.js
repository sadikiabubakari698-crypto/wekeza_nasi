export default function CRDB() {
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
        CRDB Bank Plc
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Benki kubwa zaidi Tanzania kwa mtaji wa soko
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> CRDB</div>
        <div><strong>Sekta:</strong> Benki</div>
        <div><strong>Iliorodheshwa DSE:</strong> 2009</div>
        <div><strong>Mmiliki mkuu:</strong> Serikali ya Tanzania (~21%) + umma</div>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          CRDB Bank Plc ilianzishwa mwaka 1996 kama benki ya maendeleo ya vijijini. Iliorodheshwa DSE mwaka 2009. Kwa miaka 30, imekua kutoka benki ndogo hadi kuwa benki kubwa zaidi Tanzania kwa mtaji wa soko, ikiwa na zaidi ya matawi 260 nchi nzima.
        </p>
        <p style={pStyle}>
          Umiliki wake: Serikali ya Tanzania (asilimia 21), taasisi mbalimbali, na umma kupitia DSE. Makao makuu yapo Dar es Salaam.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}><strong>Dhamira (Mission):</strong> Kutoa huduma za kifedha bora kwa Watanzania, kuchangia ukuaji wa uchumi na kuinua hali ya maisha ya wateja.</p>
        <p style={pStyle}><strong>Maono (Vision):</strong> Kuwa benki inayoongoza Afrika Mashariki kwa ubora wa huduma na uvumbuzi wa kidijitali.</p>
        <p style={pStyle}><strong>Tatizo linalotatua:</strong> Watanzania wengi hawana akaunti za benki, na wajasiriamali wadogo wanahitaji mikopo. CRDB inatoa huduma za benki, mikopo, na huduma za kidijitali ili kuwaunganisha watu na uchumi rasmi.</p>
        <p style={pStyle}><strong>Wateja:</strong> Watu binafsi, biashara ndogo na za kati (SMEs), wakulima, makampuni makubwa, na serikali.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>CRDB inatoa huduma kuu nne:</p>
        <ul style={ulStyle}>
          <li><strong>Mikopo</strong> — kwa watu binafsi, biashara ndogo, wakulima, na makampuni</li>
          <li><strong>Akaunti na Amana</strong> — akaunti za akiba, akaunti za biashara</li>
          <li><strong>Huduma za Kidijitali</strong> — SimBanking, CRDB Wakala, kadi</li>
          <li><strong>Biashara za Kimataifa</strong> — Letters of Credit, foreign exchange</li>
        </ul>
        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Riba kutoka mikopo</strong> — ndiyo chanzo kikuu (~60% ya mapato)</li>
          <li><strong>Ada za huduma</strong> — uhamisho, akaunti, kadi, bima</li>
          <li><strong>Uwekezaji wa fedha</strong> — dhamana za serikali</li>
          <li><strong>Biashara za kimataifa</strong> — foreign exchange</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>Sekta ya benki Tanzania ina benki 40+, lakini benki 5 kubwa zinamiliki zaidi ya asilimia 60 ya soko. Washindani wakuu wa CRDB:</p>
        <ul style={ulStyle}>
          <li><strong>NMB</strong> — benki ya pili kwa ukubwa, mshindani mkuu</li>
          <li><strong>Exim Bank</strong> — benki ya biashara</li>
          <li><strong>NBC</strong> — benki ya zamani</li>
          <li><strong>Stanbic, Absa</strong> — benki za kimataifa</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> CRDB ina jukumu muhimu kwenye ukuaji wa uchumi wa Tanzania — inatoa mikopo kwa wakulima, biashara ndogo, na miradi mikubwa. Pia inaongoza kwenye kufikisha huduma za benki kwa watu wengi (financial inclusion).
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa sekta:</strong> Ukuaji wa uchumi wa Tanzania (wastani 5-6% kwa mwaka) unaongeza mahitaji ya huduma za benki. CRDB inaendelea kuwekeza kwenye teknolojia na upanuzi wa huduma.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>Mapato ya jumla yalikua kwa wastani wa asilimia 12 kwa mwaka kati ya 2022-2025. Faida halisi iliongezeka kutoka TSh bilioni 380 (2023) hadi TSh bilioni 500+ (2025). Hii inaonyesha ukuaji thabiti.</p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>CRDB imekuwa ikitoa gawio kila mwaka tangu 2015. Sera ya kampuni ni kugawa asilimia 30-40 ya faida kama gawio. Mwaka 2025, gawio lilikuwa TSh 42 kwa hisa.</p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>Kama benki, CRDB ina madeni (liabilities) makubwa kwa asili — amana za wateja. Hii ni kawaida kwa benki. Capital Adequacy Ratio ni ~18%, juu ya mahitaji ya BOT (10-12%).</p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Jumla ya mali: TSh trilioni 10+</li>
          <li>Mikopo: TSh trilioni 6+</li>
          <li>Amana: TSh trilioni 8+</li>
          <li>Matawi 260+ nchi nzima</li>
          <li>Mfumo wa SimBanking na CRDB Wakala</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>Bei ya hisa ya CRDB inabadilika kila siku kulingana na ugavi na mahitaji sokoni. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.</p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni za kifedha, angalia ripoti ya mwaka ya CRDB au tangazo la DSE.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Hatari ya Mikopo:</strong> Kushuka kwa uchumi kunaweza kuongeza mikopo isiyolipwa (NPL).</li>
          <li><strong>Hatari ya Riba:</strong> Kupanda kwa riba kunapunguza thamani ya dhamana za serikali.</li>
          <li><strong>Hatari ya Udhibiti:</strong> Mabadiliko ya sheria za BOT yanaweza kuathiri faida.</li>
          <li><strong>Hatari ya Ushindani:</strong> Benki za kidijitali na NMB zinaweza kupunguza sehemu ya soko.</li>
          <li><strong>Hatari ya Fedha za Kigeni:</strong> Kushuka kwa shilingi kunaathiri mikopo ya fedha za kigeni.</li>
          <li><strong>Hatari ya Mkusanyiko:</strong> Sehemu kubwa ya mapato inatokana na mikopo — kushuka kwa ubora wa mikopo kunaathiri moja kwa moja.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          CRDB inatufundisha kuhusu <strong>nguvu ya ukuaji wa muda mrefu</strong>. Ilianza kama benki ndogo ya vijijini mwaka 1996, na leo ni benki kubwa zaidi Tanzania. Ukuaji wake unaonyesha kwamba kampuni inayozingatia ukuaji wa uchumi wa nchi inaweza kukua pamoja nao.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>umuhimu wa teknolojia kwenye benki</strong>. CRDB iliwekeza mapema kwenye SimBanking na CRDB Wakala, ambayo imewawezesha Watanzania wengi kufikia huduma za benki bila kwenda matawi. Ubunifu wa teknolojia ni kitu muhimu kwa benki za kisasa.
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama sekta ya benki Tanzania inaendelea kuwa na ushindani mkubwa, je, CRDB inaweza kudumisha uongozi wake kwa miaka 10 ijayo — au ushindani na teknolojia zinaweza kubadilisha mchezo?
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

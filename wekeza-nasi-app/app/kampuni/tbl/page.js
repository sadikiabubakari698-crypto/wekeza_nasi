export default function TBL() {
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
        Tanzania Breweries Plc (TBL)
      </h1>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", color: "#555", marginTop: 0 }}>
        Kampuni ya zamani zaidi ya viwanda Tanzania
      </p>

      <div style={infoBoxStyle}>
        <div><strong>Ticker:</strong> TBL</div>
        <div><strong>Sekta:</strong> Vinywaji</div>
        <div><strong>Iliorodheshwa DSE:</strong> 1998</div>
        <div><strong>Mmiliki mkuu:</strong> AB InBev (Ubelgiji) + umma</div>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Kampuni ni Nani?</h2>
        <p style={pStyle}>
          Tanzania Breweries Plc ilianzishwa mwaka 1933 kama Tanganyika Breweries. Ni moja ya makampuni ya zamani zaidi ya viwanda Tanzania. Iliorodheshwa DSE mwaka 1998, ikiwa kampuni ya pili kuorodheshwa baada ya TOL Gas.
        </p>
        <p style={pStyle}>
          Kwa miaka 90+, TBL imekua kuwa moja ya makampuni makubwa ya viwanda Tanzania, ikiwa na viwanda zaidi ya 5 nchi nzima. Bidhaa zake maarufu ni pamoja na Safari, Kilimanjaro, Tusker, Castle Lite, na Redd's.
        </p>
        <p style={pStyle}>
          Umiliki wake: kampuni mama ni AB InBev (moja ya makampuni makubwa ya bia duniani), pamoja na wawekezaji binafsi na wa kitaasisi.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Lengo la Kampuni</h2>
        <p style={pStyle}><strong>Dhamira (Mission):</strong> Kutoa vinywaji bora vya ubora wa kimataifa kwa Watanzania, kwa kuzingatia viwango vya juu vya ubora na uendelevu.</p>
        <p style={pStyle}><strong>Maono (Vision):</strong> Kuwa kampuni inayoongoza ya vinywaji Tanzania, ikichangia ukuaji wa uchumi na maendeleo ya jamii.</p>
        <p style={pStyle}><strong>Tatizo linalotatua:</strong> Watanzania wanahitaji vinywaji vya ubora kwa bei nafuu. TBL inazalisha na kusambaza vinywaji nchi nzima, ikitoa ajira na kuchangia uchumi.</p>
        <p style={pStyle}><strong>Wateja:</strong> Watu wazima wa umri wa kunywa pombe, migahawa, baa, maduka, na wauzaji wa jumla.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Kampuni Inafanya Nini?</h2>
        <p style={pStyle}>TBL inazalisha na kuuza vinywaji:</p>
        <ul style={ulStyle}>
          <li><strong>Bia</strong> — Safari, Kilimanjaro, Tusker, Castle Lite, Redd's</li>
          <li><strong>Vinywaji visivyo na kilevi</strong> — juisi, maji</li>
          <li><strong>Vinywaji vya kienyeji</strong> — chapa maalum za kienyeji</li>
        </ul>
        <h3 style={h3Style}>Inapataje Mapato?</h3>
        <ul style={ulStyle}>
          <li><strong>Uuzaji wa bia</strong> — ndiyo mapato makuu (~85%+)</li>
          <li><strong>Uuzaji wa vinywaji visivyo na kilevi</strong> — inakua kwa kasi</li>
          <li><strong>Usafirishaji wa bidhaa</strong> — kwa wateja wa jumla</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Nafasi Yake Tanzania</h2>
        <p style={pStyle}>Sekta ya vinywaji Tanzania ina washindani wakuu:</p>
        <ul style={ulStyle}>
          <li><strong>Serengeti Breweries</strong> — mshindani mkuu, inamilikiwa na Diageo</li>
          <li><strong>Bia za kienyeji</strong> — zisizo rasmi</li>
          <li><strong>Vinywaji visivyo na kilevi</strong> — soda, juisi, maji</li>
        </ul>
        <p style={pStyle}>
          <strong>Umuhimu wa kiuchumi:</strong> TBL ni moja ya walipa kodi wakubwa Tanzania. Inatoa ajira kwa maelfu ya Watanzania, na ina mchango mkubwa kwenye uchumi. Pia inasaidia kilimo kwa kununua malighafi (shayiri, mahindi, sukari).
        </p>
        <p style={pStyle}>
          <strong>Ukuaji wa sekta:</strong> Ukuaji wa idadi ya watu na uchumi unaongeza mahitaji ya vinywaji. TBL inaendelea kuwekeza kwenye uzalishaji na usambazaji.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Kampuni Ilivyo Leo</h2>
        <p style={{ ...pStyle, fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>
          <strong>Taarifa za mwisho zilisasishwa:</strong> Septemba 2026
        </p>

        <h3 style={h3Style}>i. Mapato na Faida</h3>
        <p style={pStyle}>Mapato ya jumla yamekuwa thabiti kwa miaka 5, yakikua kwa wastani wa asilimia 6-8 kwa mwaka. Faida halisi iliongezeka kutoka TSh bilioni 150 (2022) hadi TSh bilioni 200+ (2025). Uwiano wa ROE ni ~25%, moja ya juu zaidi kwenye DSE.</p>

        <h3 style={h3Style}>ii. Gawio</h3>
        <p style={pStyle}>TBL imekuwa ikitoa gawio kila mwaka tangu kuorodheshwa. Sera ya kampuni ni kugawa asilimia 60-80 ya faida kama gawio — moja ya juu zaidi kwenye DSE. Hii inafanya TBL kuwa maarufu kwa wawekezaji wanaotafuta mapato ya mara kwa mara.</p>

        <h3 style={h3Style}>iii. Madeni</h3>
        <p style={pStyle}>TBL ina madeni madogo. Deni linatokana na uwekezaji wa mitambo na upanuzi wa viwanda. Debt-to-Equity ratio ni ~0.3, ishara ya hali nzuri ya kifedha.</p>

        <h3 style={h3Style}>iv. Rasilimali (Assets)</h3>
        <ul style={ulStyle}>
          <li>Viwanda 5+ nchi nzima</li>
          <li>Mitambo ya kisasa ya kutengeneza bia</li>
          <li>Mtandao mkubwa wa usambazaji nchi nzima</li>
          <li>Chapa (brands) maarufu zenye thamani kubwa</li>
          <li>Wafanyakazi wa kudumu 2,000+</li>
        </ul>

        <h3 style={h3Style}>v. Bei ya Hisa</h3>
        <p style={pStyle}>Bei ya hisa ya TBL inabadilika kila siku. Kwa bei ya sasa, angalia DSE (dse.co.tz) au broker wako.</p>

        <div style={warningBoxStyle}>
          <strong>Kumbuka:</strong> Data hii ni kwa madhumuni ya elimu. Kwa taarifa za hivi karibuni, angalia ripoti ya mwaka ya TBL au tangazo la DSE.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Hatari Maalum za Kampuni Hii</h2>
        <ul style={ulStyle}>
          <li><strong>Hatari ya Kodi:</strong> Ongezeko la kodi ya bia (excise duty) linaweza kupunguza faida — bia inatozwa kodi kubwa Tanzania.</li>
          <li><strong>Hatari ya Ushindani:</strong> Serengeti Breweries na bia za kienyeji zinachukua sehemu ya soko.</li>
          <li><strong>Hatari ya Fedha za Kigeni:</strong> Malighafi nyingi zinanunuliwa kwa fedha za kigeni — kushuka kwa shilingi kunaongeza gharama.</li>
          <li><strong>Hatari ya Mabadiliko ya Tabia:</strong> Vijana wanaacha kunywa bia kwa sababu za afya — hii inaweza kupunguza mahitaji.</li>
          <li><strong>Hatari ya Udhibiti:</strong> Sheria kali za matangazo ya bia zinaweza kupunguza mauzo.</li>
          <li><strong>Hatari ya Malighafi:</strong> Kupanda kwa bei ya shayiri, mahindi, au sukari kunaongeza gharama za uzalishaji.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Tunachoweza Kujifunza Kutoka Kwake</h2>
        <p style={pStyle}>
          TBL inatufundisha kuhusu <strong>nguvu ya chapa (brand)</strong>. Safari na Kilimanjaro si bia tu — ni sehemu ya utamaduni wa Tanzania. Chapa yenye nguvu ina uwezo wa kudumisha mauzo hata kwenye ushindani mkali. Hii ni moja ya sababu za TBL kudumisha faida kwa miaka mingi.
        </p>
        <p style={pStyle}>
          Pia inatufundisha kuhusu <strong>umuhimu wa gawio kwa wawekezaji</strong>. TBL inagawi asilimia 60-80 ya faida — moja ya juu zaidi kwenye DSE. Hii inafanya kuwa maarufu kwa wawekezaji wanaotafuta mapato ya mara kwa mara (income investors).
        </p>
        <p style={pStyle}>
          <strong>Swali la kujitafakari:</strong> Kama tabia za watumiaji zinaendelea kubadilika (vijana wanakunywa kidogo, vinywaji visivyo na kilevi vinakua), je, TBL inaweza kubadilika haraka vya kutosha ili kudumisha ukuaji wake — au chapa zake za bia zinaweza kuanza kudorora?
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

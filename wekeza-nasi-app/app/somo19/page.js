import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Katika Somo 17 tumejifunza kusoma data ya siku moja. Katika Somo 18 tumejifunza order book, bid, offer, spread, na liquidity. Sasa tunaingia hatua muhimu zaidi: kusoma MWENENDO wa bei kwa siku nyingi."
  },
  {
    title: "02. Swali la Kuanza",
    body: "Kama mtu anakwambia 'CRDB imepanda jana' — hiyo inatosha kukuambia kampuni inafanya vizuri? Kwa nini hapana? Kwa sababu siku moja haitoshi. Tunaangalia mwenendo wa siku 5, siku 10, mwezi mmoja, miezi 6, mwaka mmoja."
  },
  {
    title: "03. Data ya Siku Moja vs Siku Nyingi",
    body: "Somo 17 lilikuwa siku moja. Lakini mwekezaji wa kweli anatazama mfululizo. Mfano wa CRDB kwa siku 5: Siku 1 = 2,620; Siku 2 = 2,610; Siku 3 = 2,600; Siku 4 = 2,630; Siku 5 = 2,650. Kwa kuunganisha, tunaona mwelekeo: CRDB ilishuka kwa siku 3 za kwanza, kisha ikaanza kupanda."
  },
  {
    title: "04. Multi-Day Trend",
    body: "Tunapochora bei kwa siku nyingi, tunaona moja ya mwelekeo mitatu: 1) Upward Trend — bei inapanda. 2) Downward Trend — bei inashuka. 3) Sideways Trend — bei inabaki karibu sawa. Hii haituambii kesho itatokea nini, lakini inatuonyesha mwelekeo wa sasa."
  },
  {
    title: "05. Kuunganisha Volume na Deals",
    body: "Volume kubwa siku moja inaweza kuwa bahati. Lakini Volume kubwa kwa siku nyingi mfululizo inaonyesha kitu. Volume kubwa + Deals chache = mtu mmoja mkubwa ananunua. Volume kubwa + Deals nyingi = watu wengi wananunua. Hii ni taswira tofauti kabisa."
  },
  {
    title: "06. Fair Value vs Market Price",
    body: "Fair Value ni thamani halisi ya kampuni — inategemea mapato, faida, madeni, na ukuaji. Market Price ni bei inayotrade sokoni sasa. Mara nyingi hazilingani. Bei inaweza kuwa juu (overvalued) au chini (undervalued). Kujua Fair Value kunahitaji uchambuzi wa kampuni."
  },
  {
    title: "07. Usiite 'Cheap' au 'Ghali' Bila Uchambuzi",
    body: "Tunapoona bei imeshuka, ni rahisi kufikiri 'bei ni nafuu, nunua.' Hii ni mtego. Bei inaweza kuwa chini kwa sababu: kampuni ina matatizo, sekta ina shida, au soko lina hofu. Hatuwezi kusema bei ni nafuu au ghali bila kuangalia: Mapato, faida, madeni, gawio, na mwenendo wa sekta."
  },
  {
    title: "08. Uchambuzi wa Msingi — Utangulizi",
    body: "Uchambuzi wa msingi (fundamental analysis) ni kuangalia: 1) Mapato (Revenue). 2) Faida (Profit). 3) Madeni (Debt). 4) Gawio (Dividend). 5) Ukuaji (Growth). Hivi vinaitwa financial statements — ripoti za fedha za kampuni. Zinapatikana kwenye tovuti za kampuni au DSE."
  },
  {
    title: "09. Kujiuliza Maswali Sahihi",
    body: "Badala ya kuuliza 'Nunua au usinunue?', jiulize: 1) Bei imekuwa wapi kwa miezi 6? 2) Volume na Deals zinaonyesha nini? 3) Kampuni ilipata faida mwaka jana? 4) Inatoa gawio? 5) Sekta yake inaenda wapi? 6) Kuna habari gani mpya? Maswali haya yanakufanya mchambuzi."
  },
  {
    title: "10. Muhtasari wa Dakika 1",
    body: "Siku moja haitoshi. Angalia mwenendo wa siku 5, 10, mwezi, miezi 6. Volume kubwa + Deals nyingi = watu wengi. Volume kubwa + Deals chache = mtu mmoja mkubwa. Fair Value ni thamani halisi; Market Price ni bei ya soko. Usiite 'cheap' au 'ghali' bila kuangalia mapato, faida, madeni, gawio."
  },
  {
    title: "11. Hatua Inayofuata",
    body: "SOMO 20: Tutaanza kujifunza kusoma ripoti za fedha (financial statements) kwa lugha rahisi. Tutajifunza Balance Sheet, Income Statement, na Cash Flow. Pia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC."
  }
];

export default function Somo19() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 19: Kusoma Mwenendo wa Bei kwa Siku Nyingi</h2>
      <LessonStepper steps={steps} nextHref="/somo20" nextLabel="Somo la 20" />
    </main>
  );
}

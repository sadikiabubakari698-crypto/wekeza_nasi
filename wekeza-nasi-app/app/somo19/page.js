import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Katika Somo 17 na 18 tumejifunza kusoma data ya siku moja na order book. Sasa tunaingia hatua muhimu zaidi: kusoma MWENENDO wa bei kwa siku nyingi. Utajifunza jinsi ya kuunganisha data za siku tofauti, kuona mwelekeo, na kujiuliza maswali sahihi kabla ya kufikiri kuhusu uwekezaji."
  },
  {
    title: "02. Swali la Kuanza",
    body: "Kama mtu anakwambia 'CRDB imepanda jana' — hiyo inatosha kukuambia kampuni inafanya vizuri?\n\nKwa nini hapana?\n\nKwa sababu siku moja haitoshi. Tunaangalia mwenendo wa siku 5, siku 10, mwezi mmoja, miezi 6, mwaka mmoja. Safari hii inaanza kwa kuunganisha data."
  },
  {
    title: "03. Mchoro Mkuu",
    body: "Somo 17 lilikuwa siku moja (31 July 2026). Lakini mwekezaji wa kweli anatazama mfululizo.\n\nMfano wa CRDB kwa siku 5:\n\nSiku 1 = 2,620\nSiku 2 = 2,610\nSiku 3 = 2,600\nSiku 4 = 2,630\nSiku 5 = 2,650\n\nKwa kuunganisha, tunaona mwelekeo: CRDB ilishuka kwa siku 3 za kwanza, kisha ikaanza kupanda.\n\nHii ni picha tofauti kabisa na kuangalia siku moja tu."
  },
  {
    title: "04. Maelezo Rahisi",
    body: "Tunapochora bei kwa siku nyingi, tunaona moja ya mwelekeo mitatu:\n\n1. UPWARD TREND (kupanda) — bei inapanda kwa siku nyingi mfululizo.\n\n2. DOWNWARD TREND (kushuka) — bei inashuka kwa siku nyingi mfululizo.\n\n3. SIDEWAYS TREND (kutulia) — bei inabaki karibu sawa, ikipanda na kushuka kidogo.\n\nHii haituambii kesho itatokea nini, lakini inatuonyesha mwelekeo wa sasa.\n\nKuunganisha Volume na Deals:\n• Volume kubwa + Deals chache = mtu mmoja mkubwa ananunua\n• Volume kubwa + Deals nyingi = watu wengi wananunua\n\nHii ni taswira tofauti kabisa."
  },
  {
    title: "05. Mfano wa Tanzania",
    body: "Hebu tuangalie CRDB kwa miezi 6:\n\n• Januari: TSh 2,500\n• Machi: TSh 2,550\n• Mei: TSh 2,600\n• Julai: TSh 2,620\n• Septemba: TSh 2,650\n\nMwelekeo: Upward trend ya taratibu kwa miezi 6.\n\nLakini angalia NMB:\n• Januari: TSh 3,200\n• Machi: TSh 3,100\n• Mei: TSh 3,000\n• Julai: TSh 3,150\n• Septemba: TSh 3,250\n\nMwelekeo: Sideways trend — ilishuka kwa miezi 3, kisha ikapanda.\n\nKila kampuni ina mwelekeo wake. Kuzingatia mwelekeo wa siku 5-10 kunasaidia kuona mwelekeo wa wiki 2-4."
  },
  {
    title: "06. Jambo la Muhimu",
    body: "Tunapoona bei imeshuka kwa siku nyingi, ni rahisi kufikiri 'bei ni nafuu, nunua.' Hii ni MTEGO.\n\nBei inaweza kuwa chini kwa sababu:\n• Kampuni ina matatizo\n• Sekta ina shida\n• Soko lina hofu kwa ujumla\n\nHATUWEZI kusema bei ni 'nafuu' au 'ghali' bila kuangalia:\n• Mapato ya kampuni\n• Faida\n• Madeni\n• Gawio\n• Mwenendo wa sekta\n\nData ya bei peke yake haitoshi. Ndio maana Somo 20 linaingia.\n\nFair Value = thamani halisi ya kampuni (inategemea mapato, faida, madeni, ukuaji).\nMarket Price = bei inayotrade sokoni sasa (inategemea nia ya wanunuzi na wauzaji).\n\nMara nyingi HAZILINGANI."
  },
  {
    title: "07. Jaribu Kufikiri",
    body: "Angalia data hii:\n\nKampuni A kwa miezi 6:\nJan: 2,500 | Feb: 2,600 | Mar: 2,700 | Apr: 2,800 | May: 2,900 | Jun: 3,000\n\nKampuni B kwa miezi 6:\nJan: 3,000 | Feb: 2,900 | Mar: 2,800 | Apr: 2,700 | May: 2,600 | Jun: 2,500\n\nMaswali:\n\n1. Kampuni A ina mwelekeo gani? Kampuni B ina mwelekeo gani?\n2. Kama ungekuwa na fedha za kuwekeza, ungejiuliza maswali gani kuhusu kila kampuni?\n3. Je, mwelekeo wa bei peke yake unatosha kuamua? Kwa nini?"
  },
  {
    title: "08. Kipimo Kidogo",
    quiz: [
      {
        q: "Multi-day trend inamaanisha nini?",
        options: "(a) Bei ya siku moja   (b) Mwelekeo wa bei kwa siku nyingi   (c) Idadi ya wanahisa",
        answer: "Jibu: (b) Mwelekeo wa bei kwa siku nyingi."
      },
      {
        q: "Volume kubwa + Deals nyingi inaonyesha nini?",
        options: "(a) Mtu mmoja ananunua   (b) Watu wengi wananunua   (c) Hakuna anayenunua",
        answer: "Jibu: (b) Watu wengi wananunua."
      },
      {
        q: "Fair Value ni nini?",
        options: "(a) Bei ya soko sasa   (b) Thamani halisi ya kampuni   (c) Faida ya mwaka",
        answer: "Jibu: (b) Thamani halisi ya kampuni inayotegemea mapato, faida, madeni, na ukuaji."
      },
      {
        q: "Kwa nini tusiseme bei ni 'nafuu' au 'ghali' bila uchambuzi?",
        options: "(a) Kwa sababu bei inabadilika kila siku   (b) Kwa sababu bei peke yake haitoshi — tunahitaji kuangalia mapato, faida, madeni, gawio   (c) Kwa sababu hatuna data",
        answer: "Jibu: (b) Bei peke yake haitoshi — tunahitaji uchambuzi kamili."
      }
    ]
  },
  {
    title: "09. Muhtasari wa Dakika 1",
    body: "Siku moja haitoshi. Angalia mwenendo wa siku 5, 10, mwezi, miezi 6.\n\n• Volume kubwa + Deals nyingi = watu wengi\n• Volume kubwa + Deals chache = mtu mmoja mkubwa\n• Fair Value ni thamani halisi; Market Price ni bei ya soko — mara nyingi hazilingani\n• Usiite 'cheap' au 'ghali' bila kuangalia mapato, faida, madeni, gawio\n\nKuuliza maswali sahihi ni hatua ya kwanza ya kuwa mchambuzi."
  },
  {
    title: "10. Hatua Inayofuata",
    body: "SOMO 20: Kusoma Ripoti za Fedha (Financial Statements).\n\nTutajifunza: Income Statement, Balance Sheet, na Cash Flow — kwa Kiswahili na mifano ya makampuni ya Tanzania.\n\nPia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE Plc."
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

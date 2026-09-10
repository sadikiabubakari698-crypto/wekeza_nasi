import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Katika Somo 17 tumejifunza kusoma muhtasari wa siku (Opening, High, Low, Closing, Volume, Deals, Turnover). Sasa tunaingia ndani zaidi: tunaangalia jinsi wanunuzi na wauzaji wanavyokutana kwenye soko. Utajifunza Bid, Offer, Spread, Liquidity, Limit Order, na Market Order — kwa lugha rahisi na mifano halisi."
  },
  {
    title: "02. Swali la Kuanza",
    body: "Fikiria uko sokoni unataka kununua embe. Muuzaji anasema 'nauza kwa TSh 1,000.' Wewe unasema 'nitanunua kwa TSh 800.' Hakuna anayekubali bado. Nini kitatokea ili biashara ifanyike? Hii ndiyo hali halisi ya soko la hisa kila siku."
  },
  {
    title: "03. Order Book ni Nini?",
    body: "Order book ni orodha ya maagizo yote ya kununua (bids) na kuuza (offers) yaliyowekwa na wawekezaji kwa hisa fulani. Kila wakati, order book inaonyesha: Wanunuzi wanataka kununua kwa bei gani (Bids), na Wauzaji wanataka kuuza kwa bei gani (Offers). DSE huchapisha muhtasari wa order book kwenye ripoti yake ya siku — unaitwa Outstanding Bids na Outstanding Offers."
  },
  {
    title: "04. Outstanding Bids na Outstanding Offers",
    body: "Outstanding Bids = maagizo yote ya kununua ambayo HAYAJATEKELEZWA bado mwisho wa siku. Outstanding Offers = maagizo yote ya kuuza ambayo HAYAJATEKELEZWA bado mwisho wa siku. Kwa mfano: kama kuna wanunuzi 5 wanataka kununua shares 100,000 kwa bei tofauti, lakini hakuna muuzaji aliyekubali — hizo shares 100,000 zinaonekana kama 'Outstanding Bids'. Hii inatuambia kuna SHINIKIZO la kununua upande mmoja."
  },
  {
    title: "05. Best Bid na Best Offer",
    body: "Best Bid = bei ya juu kabisa ambayo mnunuzi yuko tayari kulipa kwa sasa. Best Offer = bei ya chini kabisa ambayo muuzaji yuko tayari kuuza kwa sasa. Mfano: Best Bid = TSh 2,610, Best Offer = TSh 2,620. Hii ina maana hakuna biashara inayoweza kufanyika mara moja — kwa sababu mnunuzi hataki kulipa zaidi ya 2,610, na muuzaji hataki kupokea chini ya 2,620. Wanahitaji mmoja wao kubadilika."
  },
  {
    title: "06. Spread — Pengo Kati ya Bid na Offer",
    body: "Spread = Best Offer − Best Bid. Kwa mfano wetu: Spread = 2,620 − 2,610 = TSh 10. Spread ni kipimo cha gharama ya kufanya biashara. Spread ndogo (mfano TSh 5) ina maana bei za kununua na kuuza ziko karibu — biashara ni rahisi. Spread kubwa (mfano TSh 50) ina maana kuna pengo kubwa — biashara inaweza kuwa ngumu au ghali. Kwa hisa za DSE, spread kubwa mara nyingi huashiria liquidity ndogo."
  },
  {
    title: "07. Liquidity — Urahisi wa Kubadilisha Hisa Kuwa Fedha",
    body: "Liquidity ni urahisi wa kununua au kuuza hisa bila kubadilisha bei sana. Hisa yenye liquidity kubwa: ina wanunuzi na wauzaji wengi, spread ndogo, na biashara nyingi kila siku (Volume kubwa). Hisa yenye liquidity ndogo: ina wanunuzi na wauzaji wachache, spread kubwa, na biashara chache. Mfano: CRDB na NMB zina liquidity kubwa kwa sababu zinabiashara sana. Hisa ndogo zinaweza kuchukua siku au wiki kupata mnunuzi au muuzaji."
  },
  {
    title: "08. Limit Order — Weka Bei Yako",
    body: "Limit Order ni maagizo ya kununua au kuuza kwa BEI MAALUM unayoichagua. Mfano: 'Ninataka kununua CRDB shares 1,000 kwa TSh 2,600.' Maagizo haya hayatekelezwi papo hapo — yanasubiri hadi bei ifikie kiwango chako. Faida: unadhibiti bei. Hasara: inaweza kuchukua muda mrefu, au usipate hisa kabisa kama bei haifiki."
  },
  {
    title: "09. Market Order — Nunua Haraka",
    body: "Market Order ni maagizo ya kununua au kuuza PAPO HAPO kwa bei yoyote iliyopo sokoni. Mfano: 'Ninataka kununua CRDB shares 1,000 kwa bei yoyote iliyopo sasa.' Maagizo haya yanatekelezwa mara moja, lakini bei inaweza kuwa ya juu zaidi (kama unanunua) au chini zaidi (kama unauza) kuliko ulivyotarajia. Tumia market order unapohitaji haraka. Tumia limit order unapojali bei."
  },
  {
    title: "10. Jambo la Muhimu — Bid Kubwa Haipandishi Bei Yenyewe",
    body: "Tunapoona Outstanding Bids kubwa (wanunuzi wengi), ni rahisi kufikiri 'bei itapanda kesho.' Hii SI kweli kila wakati. Bid kubwa inaonyesha nia ya kununua, lakini kama wauzaji pia wapo wengi kwa bei hiyo hiyo, bei inaweza kubaki palepale. Kumbuka: Bid kubwa + Offer ndogo = shinikizo la kupanda. Bid ndogo + Offer kubwa = shinikizo la kushuka. Bid kubwa + Offer kubwa = biashara nyingi, bei inaweza kutulia. Data ya leo haituambii bei ya kesho. Inatuambia hali ya sasa."
  },
  {
    title: "11. Muhtasari wa Dakika 1",
    body: "Order book inatuonyesha bids (wanunuzi) na offers (wauzaji). Best Bid ni bei ya juu ya mnunuzi; Best Offer ni bei ya chini ya muuzaji. Spread ni tofauti kati yao — ndogo ni nzuri, kubwa ni ishara ya liquidity ndogo. Liquidity ni urahisi wa kubadilisha hisa kuwa fedha. Limit Order = bei yako; Market Order = bei ya soko. Kumbuka: data ya sasa haituambii baadaye — tunachambua, hatubahatishi."
  },
  {
    title: "12. Hatua Inayofuata",
    body: "SOMO 19: Tutaanza kuunganisha data ya DSE na uchambuzi wa kampuni. Tutajifunza jinsi ya kuangalia mwenendo wa bei kwa siku nyingi (multi-day), kuunganisha Volume na Deals, na kujiuliza maswali sahihi kabla ya kufikiri kuhusu uwekezaji. Pia, tayari unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC."
  }
];

export default function Somo18() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2</h2>
      <LessonStepper steps={steps} nextHref="/somo19" nextLabel="Somo la 19" />
    </main>
  );
}

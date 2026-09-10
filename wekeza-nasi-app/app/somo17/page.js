import LessonStepper from "../../components/LessonStepper";

const steps = [
  {
    title: "01. Lengo la Somo",
    body: "Utaelewa jinsi ya kusoma jedwali la DSE kwa macho, kujua kila namba inamaanisha nini, na kutofautisha kile data inachosema na kile ambacho data haijasema. Mfano wetu ni data halisi ya CRDB kutoka DSE ya 31 July 2026."
  },
  {
    title: "02. Data ya Mfano",
    body: "Tuanze na jedwali hili la CRDB:",
    list: [
      "Opening: TSh 2,630",
      "Closing: TSh 2,620",
      "High: TSh 2,630",
      "Low: TSh 2,600",
      "Turnover: TSh 1.127B",
      "Deals: 1,784",
      "Volume: 429,799"
    ]
  },
  {
    title: "03. Opening Price",
    body: "Opening Price = TSh 2,630. Hii ni bei ambayo biashara ilianza nayo siku hiyo. Je, hiyo ndiyo bei ambayo kila mtu alinunua? Hapana. Ni bei ya kuanzia tu."
  },
  {
    title: "04. High na Low",
    body: "High = TSh 2,630. Low = TSh 2,600. Hizi ni bei ya juu zaidi na chini zaidi zilizofikiwa siku hiyo. Hazimaanishi kila mtu alinunua kwa bei hizo."
  },
  {
    title: "05. Closing Price",
    body: "Closing = TSh 2,620. Kwa DSE, Closing Price ni VWAP ya trades za session ikiwa shares 100 zime-trade. Ni bei rasmi ya kufunga siku. Bei ilibadilika TSh 30 tu siku hiyo."
  },
  {
    title: "06. Volume",
    body: "Volume = 429,799. Shares 429,799 zilihusika kwenye trades. Volume ni idadi ya shares, si idadi ya watu."
  },
  {
    title: "07. Deals",
    body: "Deals = 1,784. Miamala 1,784 ilirekodiwa. Volume na Deals si kitu kimoja: mtu anaweza kununua shares 10,000 kwenye deal moja."
  },
  {
    title: "08. Turnover",
    body: "Turnover = TSh 1.127B. Hii ni thamani ya fedha iliyohusika. Tuna vitu vitatu: Volume (shares), Deals (miamala), Turnover (fedha)."
  },
  {
    title: "09. Jambo la Muhimu",
    body: "Data hii haijatuambia: thamani halisi ya CRDB, itapanda au kushuka, ni nzuri au mbaya, bei ni nafuu au ghali. Data inakupa taarifa. Analysis inahitaji hatua nyingine."
  },
  {
    title: "10. Muhtasari wa Dakika 1",
    body: "Ukiona DSE data, anza na maswali haya: Opening — Ilianza wapi? High — Ilifika juu kiasi gani? Low — Ilishuka kiasi gani? Closing — Siku ilifungwaje? Volume — Shares ngapi? Deals — Trades ngapi? Turnover — Fedha kiasi gani? Usikimbilie kufanya uamuzi."
  },
  {
    title: "11. Hatua Inayofuata",
    body: "SOMO 18: Jinsi ya Kusoma Data za DSE — Sehemu ya 2. Tutajifunza Outstanding Bids, Outstanding Offers, Spread, Liquidity, Limit Order, Market Order."
  }
];

export default function Somo17() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 17: Jinsi ya Kusoma Data za DSE — Sehemu ya 1</h2>
      <LessonStepper steps={steps} nextHref="/somo18" nextLabel="Somo la 18" />
    </main>
  );
}

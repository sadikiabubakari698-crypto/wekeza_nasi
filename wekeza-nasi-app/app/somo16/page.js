import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa vitu vya msingi vya kuangalia kabla ya kuamua kuwekeza kwenye kampuni fulani." },
  { title: "02. Swali la Kuanza", body: "Kabla ya kununua ng'ombe sokoni, unaangalia nini kwanza ili kujua ni mnyama mzuri?\n\nJibu: Unaangalia afya yake, umri, uzalishaji, na historia. Vivyo hivyo, kabla ya kuwekeza kwenye kampuni, unaangalia taarifa zake." },
  { title: "03. Mchoro Mkuu", body: "Kuchambua kampuni ni kuangalia taarifa zake kabla ya kuwekeza, badala ya kubahatisha.\n\nVitu vya msingi vya kuangalia:\n\n1. RIPOTI YA MWAKA (faida/hasara)\n2. HISTORIA YA GAWIO\n3. MWENENDO WA BEI YA HISA\n4. HABARI ZA HIVI KARIBUNI" },
  { title: "04. Maelezo Rahisi", body: "1. RIPOTI YA MWAKA\nKampuni inachapisha ripoti kila mwaka. Inaonyesha:\n• Mapato\n• Gharama\n• Faida au hasara\n\n2. HISTORIA YA GAWIO\nKampuni inalipa gawio?\nMara ngapi kwa mwaka?\nKiasi gani?\n\n3. MWENENDO WA BEI\nBei imepanda au kushuka miaka iliyopita?\nKwa kasi gani?\n\n4. HABARI ZA HIVI KARIBUNI\nKuna mabadiliko yoyote?\nUongozi mpya?\nMikataba mipya?" },
  { title: "05. Mfano wa Tanzania", body: "Kwa sasa, kupata ripoti hizi moja kwa moja kupitia tovuti za makampuni au DSE kunaweza kuwa na changamoto.\n\nTaarifa hazipo kwa mpangilio rahisi kwa kila mtu.\n\nHili ndilo hasa eneo ambalo WEKEZA NASI inalenga kulitatua siku zijazo — kukuletea uchambuzi wa makampuni yaliyorahisishwa, kampuni moja baada ya nyingine, papa hapa ndani ya app.\n\nKwa sasa, unaweza kuanza na Uchambuzi wa Kampuni tulizoshaandaa." },
  { title: "06. Jambo la Muhimu", list: [
    "Soma ripoti ya mwaka — kampuni ilipata faida au hasara?",
    "Angalia historia ya gawio — kampuni inalipa mara kwa mara?",
    "Fuatilia mwenendo wa bei — imepanda au kushuka miaka iliyopita?",
    "Soma habari za hivi karibuni kuhusu kampuni na sekta yake",
    "Kuchambua kampuni ni ujuzi — unakua kwa mazoezi"
  ]},
  { title: "07. Jaribu Kufikiri", body: "Kama kampuni A imepata faida kila mwaka kwa miaka mitano, na kampuni B imepata hasara mara tatu kati ya miaka mitano, ni ipi inayoonekana thabiti zaidi kuwekeza?\n\nJibu: Kampuni A inaonekana thabiti zaidi — kwa sababu ina historia ya faida ya mara kwa mara. Lakini hii sio jibu la mwisho — tunahitaji kuangalia mambo mengine pia." },
  { title: "08. Muhtasari wa Dakika 1", body: "Kuchambua kampuni kunahusisha:\n\n1. Kusoma ripoti ya mwaka — faida/hasara\n2. Historia ya gawio\n3. Mwenendo wa bei\n4. Habari za hivi karibuni\n\nKuchambua ni ujuzi unaokua kwa mazoezi. Kuanza ni muhimu — kila uchambuzi unakufanya bora zaidi." },
  { title: "09. Hatua Inayofuata", body: "Hongera! Umemaliza masomo yote 16 ya msingi ya WEKEZA NASI Academy.\n\nSasa unaweza kuanza Uchambuzi wa Kampuni — CRDB, NMB, TBL, Vodacom, TCC, TPCC, Swissport, DSE.\n\nBaada ya hapo, unaweza kuendelea na masomo 17-20 yanayohusu data za DSE na ripoti za fedha." }
];

const quiz = [
  { q: "Wapi unaweza kupata ripoti ya mwaka ya kampuni?", options: "(a) Tovuti ya kampuni au DSE   (b) Duka la vitabu   (c) Ofisi ya Rais", answer: "Jibu: (a) Tovuti ya kampuni au DSE — huko ndiko ripoti za mwaka zinapatikana." },
  { q: "Nini kinachoashiria kampuni thabiti?", options: "(a) Faida ya mara kwa mara   (b) Hasara kila mwaka   (c) Kutokuwa na taarifa", answer: "Jibu: (a) Faida ya mara kwa mara — inaonyesha kampuni inafanya kazi vizuri kwa muda mrefu." },
  { q: "Kwa nini kuchambua kampuni ni muhimu?", options: "(a) Kufanya maamuzi kwa data, sio bahati   (b) Kupoteza muda   (c) Kupunguza faida", answer: "Jibu: (a) Kufanya maamuzi kwa data, sio bahati — uchambuzi unakusaidia kuchagua kampuni bora." }
];

export default function Somo16() {
  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>WEKEZA NASI</h1>
      <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Somo la 16: Kuanza kuchambua kampuni</h2>
      <LessonStepper
        steps={steps}
        quiz={quiz}
        lessonTitle="Somo la 16: Kuanza kuchambua kampuni"
        lessonHref="/somo16"
        nextHref="/somo17"
        nextLabel="Somo la 17"
      />
    </main>
  );
}

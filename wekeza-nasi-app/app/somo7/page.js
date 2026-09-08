import LessonStepper from "../../components/LessonStepper";

const steps = [
  { title: "01. Lengo la Somo", body: "Utaelewa hatua halisi za kununua na kuuza hisa DSE." },
  { title: "02. Swali la Kuanza", body: "Kama umeamua kununua hisa za kampuni fulani, unadhani hatua ya kwanza ni ipi?" },
  { title: "03. Maelezo Rahisi", body: "Huwezi kwenda DSE mwenyewe kununua hisa moja kwa moja. Kwanza, unatakiwa kuchagua broker (dalali) aliyesajiliwa kihalali na CMSA. Ukishamchagua, unafungua akaunti maalum inayoitwa CDS (Central Depository System) kupitia kwake, kisha unaweza kutoa maagizo ya kununua au kuuza hisa." },
  { title: "04. Mfano wa Tanzania", body: "Siku hizi baadhi ya madalali huruhusu kufungua akaunti na kutoa maagizo moja kwa moja kwa simu, kupitia Mobile Trading Platform (MTP) ya DSE, bila kuhitaji kwenda ofisini." },
  { title: "05. Jambo la Muhimu", list: ["Kabla ya kuchagua broker, hakikisha yupo kwenye orodha rasmi ya CMSA", "Angalia ada za huduma, mawasiliano, na muda wa kudumu sokoni", "Lazima ufungue akaunti ya CDS kupitia broker uliyemchagua", "Biashara hukamilika kupitia mfumo wa kielektroniki (Automated Trading System)"] },
  { title: "06. Jaribu Kufikiri", body: "Kwa nini ni muhimu kujua ada za huduma kabla ya kufanya muamala wa kununua au kuuza hisa?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Hatua ya kwanza ya kununua hisa DSE ni ipi?", options: "(a) Kufungua akaunti ya CDS kupitia broker   (b) Kwenda benki tu   (c) Kumpigia simu Rais", answer: "Jibu: (a) Kufungua akaunti ya CDS kupitia broker" },
    { q: "Biashara za hisa DSE hukamilika kupitia mfumo gani?", options: "(a) WhatsApp   (b) Automated Trading System   (c) Barua pepe", answer: "Jibu: (b) Automated Trading System" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Kununua au kuuza hisa DSE kunahitaji akaunti ya CDS kupitia broker aliyesajiliwa, na maagizo hukamilika kupitia mfumo wa kielektroniki. Ona vigezo vya kuchagua broker mzuri kwenye ukurasa wa 'Jinsi ya Kuchagua Broker'." },
  { title: "09. Hatua Inayofuata", body: "Somo 8: Bei ya hisa hupanda na kushuka kwa nini?" },
];

export default function Somo7() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 7: Hisa inanunuaje na kuuzwaje?</h2>
      <LessonStepper steps={steps} nextHref="/somo8" nextLabel="Somo la 8" />
      <p style={{ marginTop: "1rem" }}><a href="/madalali">Ona vigezo vya kuchagua broker mzuri &rarr;</a></p>
    </main>
  );
}

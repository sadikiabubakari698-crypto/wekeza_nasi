"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  { title: "01. Lengo la Somo", body: "Mwisho wa somo hili, utaelewa hisa ni nini na kwa nini watu huwekeza kwenye soko la hisa." },
  { title: "02. Swali la Kuanza", body: "Je, umeshawahi kufikiria kumiliki sehemu ya biashara bila kuwa na fedha nyingi za kuianzisha peke yako?" },
  { title: "03. Maelezo Rahisi", body: "Fikiria shamba kubwa la mazao. Badala ya mtu mmoja kumiliki shamba lote, wamiliki kadhaa wanaweza kugawana shamba hilo, kila mmoja akimiliki sehemu yake. Sehemu hiyo ya umiliki ndicho kinachoitwa hisa.", image: true },
  { title: "04. Mfano wa Tanzania", body: "Makampuni kama CRDB Bank na TBL yameorodheshwa kwenye Soko la Hisa la Dar es Salaam (DSE). Mtanzania yeyote anaweza kununua hisa za makampuni haya na kuwa mmiliki mdogo wa kampuni hizo." },
  { title: "05. Jambo la Muhimu", list: ["Hisa ni sehemu ya umiliki, si mkopo", "Faida (gawio) hutegemea utendaji wa kampuni", "Thamani ya hisa inaweza kupanda au kushuka", "Uwekezaji wa hisa unahitaji uvumilivu na uelewa"] },
  { title: "06. Jaribu Kufikiri", body: "Kama kampuni A ina hisa 1,000 zote, na wewe unamiliki hisa 10, ni asilimia ngapi ya kampuni unayomiliki?" },
  { title: "07. Kipimo Kidogo", quiz: [
    { q: "Hisa ni nini?", options: "(a) Mkopo   (b) Sehemu ya umiliki   (c) Zawadi", answer: "Jibu: (b) Sehemu ya umiliki" },
    { q: "Gawio ni nini?", options: "(a) Adhabu   (b) Sehemu ya faida   (c) Kodi", answer: "Jibu: (b) Sehemu ya faida" }
  ]},
  { title: "08. Muhtasari wa Dakika 1", body: "Hisa = umiliki mdogo wa kampuni. Kampuni ikifanya vizuri, wewe unafaidika." },
  { title: "09. Hatua Inayofuata", body: "Somo 2: Kampuni kwa nini huuza hisa?", next: true },
];

export default function Somo1() {
  const [current, setCurrent] = useState(0);
  const step = steps[current];
  const isLast = current === steps.length - 1;
  const isFirst = current === 0;

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <h2>Somo la 1: Hisa ni nini?</h2>

      <p style={{ color: "#666", fontSize: "0.9rem" }}>Hatua {current + 1} kati ya {steps.length}</p>

      <div className="lesson-box">
        <h3>{step.title}</h3>
        {step.image && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "1536 / 1024", marginBottom: "1rem" }}>
            <Image src="/somo1-hisa.png" alt="Hisa ni nini - mfano wa shamba" fill sizes="(max-width: 600px) 100vw, 600px" style={{ objectFit: "contain", borderRadius: "12px" }} />
          </div>
        )}
        {step.body && <p>{step.body}</p>}
        {step.list && (
          <ul>
            {step.list.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        )}
        {step.quiz && step.quiz.map((q, i) => (
          <div key={i} style={{ marginBottom: "0.75rem" }}>
            <p>{i + 1}. {q.q}<br />{q.options}</p>
            <p className="quiz-answer">{q.answer}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {!isFirst ? (
          <button onClick={() => setCurrent(current - 1)} style={{ padding: "0.75rem 1.25rem", borderRadius: "8px", border: "1px solid #2f8f4e", background: "white", color: "#2f8f4e", fontWeight: "bold" }}>
            &larr; Iliyotangulia
          </button>
        ) : <span></span>}

        {!isLast ? (
          <button onClick={() => setCurrent(current + 1)} style={{ padding: "0.75rem 1.25rem", borderRadius: "8px", border: "none", background: "#2f8f4e", color: "white", fontWeight: "bold" }}>
            Inayofuata &rarr;
          </button>
        ) : (
          <a href="/somo2" style={{ padding: "0.75rem 1.25rem", borderRadius: "8px", background: "#2f8f4e", color: "white", fontWeight: "bold", textDecoration: "none" }}>
            Somo la 2 &rarr;
          </a>
        )}
      </div>
    </main>
  );
}

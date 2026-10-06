"use client";
import { useState } from "react";
import Link from "next/link";
import { PLACEMENT_STAGES, FINAL_START_LESSON, savePlacementProgress } from "../lib/placement";

const btn = {
  display: "block", width: "100%", textAlign: "left", padding: "0.85rem 1rem",
  marginBottom: "0.6rem", background: "#ffffff", color: "#1a1a1a",
  border: "1px solid #e9edf2", borderRadius: "12px", fontSize: "1rem", cursor: "pointer",
};
const primary = {
  display: "inline-block", padding: "0.85rem 1.4rem", background: "#1e7b4c", color: "#ffffff",
  border: "none", borderRadius: "999px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", textDecoration: "none",
};
const para = { lineHeight: 1.7, color: "#555555", marginBottom: "1rem" };
const celebrate = {
  background: "#e3f0ea", border: "1px solid #1e7b4c", borderLeft: "6px solid #1e7b4c",
  borderRadius: "12px", padding: "1.25rem 1rem", marginBottom: "1.25rem",
};

export default function PlacementTest() {
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState(0);
  const [q, setQ] = useState(0);
  const [startLesson, setStartLesson] = useState(null);

  function answer(choice) {
    const st = PLACEMENT_STAGES[stage];
    if (choice !== st.questions[q].answer) {
      setStartLesson(st.firstLesson);
      return;
    }
    if (q < st.questions.length - 1) { setQ(q + 1); return; }
    if (stage < PLACEMENT_STAGES.length - 1) { setStage(stage + 1); setQ(0); return; }
    setStartLesson(FINAL_START_LESSON);
  }

  function restart() {
    setStarted(false); setStage(0); setQ(0); setStartLesson(null);
  }

  if (!started) {
    return (
      <div>
        <h1 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>Karibu, mwekezaji</h1>
        <p style={para}>
          Tuanze safari yetu pamoja. Hapa hakuna kushinda wala kushindwa. Maswali machache yatatusaidia
          kujua tunapoanzia, ili usipoteze muda kwenye unayoyajua tayari, wala usiruke unayoyahitaji.
        </p>
        <p style={para}>
          Ukiona swali gumu, chagua &quot;Sijui bado&quot;. Hilo ni jibu zuri kabisa, kwa sababu
          linatuonyesha mahali pazuri pa kukusaidia kuanzia.
        </p>
        <button style={primary} onClick={() => setStarted(true)}>Tuanze Pamoja</button>
      </div>
    );
  }

  if (startLesson !== null) {
    const skipped = startLesson > 1;
    return (
      <div>
        {skipped ? (
          <div style={celebrate}>
            <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", color: "#16633d" }}>
              HONGERA SANA
            </p>
            <h1 style={{ fontSize: "1.7rem", margin: "0.35rem 0 0.5rem", color: "#16633d", lineHeight: 1.25 }}>
              Una msingi imara tayari, mwekezaji!
            </h1>
            <p style={{ margin: 0, lineHeight: 1.6, color: "#1a1a1a" }}>
              Umeonyesha kuwa unajua misingi ya Masomo 1 hadi {startLesson - 1}. Hiyo inaonyesha juhudi na
              hamu yako ya kujifunza. Tunafurahi kuwa pamoja nawe.
            </p>
          </div>
        ) : (
          <h1 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>Tuanze Somo 1 pamoja</h1>
        )}
        <p style={para}>
          {skipped
            ? "Tutakufungulia masomo hayo ili uanze Somo " + startLesson + " moja kwa moja. Unaweza kuyasoma wakati wowote kwa marudio, hakuna kinachopotea."
            : "Asante kwa kujaribu. Tutaanza mwanzo ili kila hatua ijengwe juu ya iliyotangulia, na utaenda kwa kasi yako mwenyewe. Tuko pamoja."}
        </p>
        <Link href="/academy" style={primary} onClick={() => savePlacementProgress(startLesson)}>
          {skipped ? "Hifadhi na Nenda Academy" : "Nenda Academy"}
        </Link>
        <p style={{ marginTop: "1rem" }}>
          <button onClick={restart} style={{ background: "none", border: "none", color: "#1e7b4c", textDecoration: "underline", cursor: "pointer", fontSize: "1rem", padding: 0 }}>
            Napenda kujaribu tena
          </button>
        </p>
      </div>
    );
  }

  const current = PLACEMENT_STAGES[stage].questions[q];
  return (
    <div>
      <p style={{ color: "#555555", fontSize: "0.9rem" }}>
        Kipande {stage + 1} kati ya {PLACEMENT_STAGES.length} &middot; Swali {q + 1} kati ya {PLACEMENT_STAGES[stage].questions.length} &middot; Chukua muda wako
      </p>
      <h2 style={{ fontSize: "1.2rem", lineHeight: 1.4, margin: "0.5rem 0 1rem" }}>{current.q}</h2>
      {current.options.map((opt, i) => (
        <button key={i} style={btn} onClick={() => answer(i)}>
          {String.fromCharCode(97 + i)}) {opt}
        </button>
      ))}
      <button style={{ ...btn, color: "#555555" }} onClick={() => answer(-1)}>d) Sijui bado</button>
    </div>
  );
}

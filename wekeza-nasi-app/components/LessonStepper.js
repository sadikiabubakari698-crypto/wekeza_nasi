"use client";
import { useState } from "react";
import Image from "next/image";

export default function LessonStepper({ steps, nextHref, nextLabel }) {
  const [current, setCurrent] = useState(0);
  const step = steps[current];
  const isLast = current === steps.length - 1;
  const isFirst = current === 0;

  return (
    <>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>Hatua {current + 1} kati ya {steps.length}</p>

      <div className={step.risk ? "risk-box" : "lesson-box"}>
        <h3>{step.title}</h3>
        {step.image && (
          <div style={{ position: "relative", width: "100%", aspectRatio: step.imageRatio || "1536 / 1024", marginBottom: "1rem" }}>
            <Image src={step.image} alt={step.imageAlt || ""} fill sizes="(max-width: 600px) 100vw, 600px" style={{ objectFit: "contain", borderRadius: "12px" }} />
          </div>
        )}
        {step.svgImage && (
          <img src={step.svgImage} alt={step.imageAlt || ""} style={{ width: "100%", height: "auto", marginBottom: "1rem" }} />
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
        ) : nextHref ? (
          <a href={nextHref} style={{ padding: "0.75rem 1.25rem", borderRadius: "8px", background: "#2f8f4e", color: "white", fontWeight: "bold", textDecoration: "none" }}>
            {nextLabel || "Inayofuata"} &rarr;
          </a>
        ) : <span></span>}
      </div>
    </>
  );
}

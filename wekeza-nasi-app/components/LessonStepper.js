"use client";
import { useState } from "react";
import Link from "next/link";
import LessonQuiz from "./LessonQuiz";
import SaveToJournal from "./SaveToJournal";
import { markPassed } from "../lib/progress";

export default function LessonStepper({
  steps,
  lessonTitle,
  lessonHref,
  nextHref,
  nextLabel,
  quiz,
}) {
  const [current, setCurrent] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);

  const contentSteps = steps;
  const totalSteps = contentSteps.length;
  const isLastStep = current === totalSteps - 1;

  const handlePass = () => {
    setQuizPassed(true);
    // Hifadhi progress — lessonId inatokana na lessonHref (mfano "/somo1" → "somo1")
    const lessonId = lessonHref ? lessonHref.replace(/^\//, "") : null;
    if (lessonId) markPassed(lessonId);
  };

  const containerStyle = { marginTop: "1.5rem" };

  const stepBoxStyle = {
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-lg)",
    padding: "1.5rem",
    marginBottom: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const stepTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.75rem",
    borderBottom: "2px solid #1e7b4c",
    paddingBottom: "0.4rem",
  };

  const bodyStyle = { color: "#1a1a1a", lineHeight: 1.7, whiteSpace: "pre-line" };
  const listStyle = { color: "#1a1a1a", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.75rem" };
  const counterStyle = { fontSize: "0.85rem", color: "#555555", marginBottom: "0.5rem" };
  const navRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1.5rem",
    gap: "0.5rem",
  };

  const btnPrevStyle = {
    display: "inline-block",
    padding: "0.75rem 1.25rem",
    background: "transparent",
    color: "#1e7b4c",
    fontWeight: 600,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid #1e7b4c",
    cursor: "pointer",
    textDecoration: "none",
  };

  const btnNextStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    background: "#1e7b4c",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  };

  const currentStep = contentSteps[current];

  return (
    <div style={containerStyle}>
      <div style={stepBoxStyle}>
        <p style={counterStyle}>Hatua {current + 1} kati ya {totalSteps}</p>
        <h2 style={stepTitleStyle}>{currentStep.title}</h2>
        {currentStep.body && <div style={bodyStyle}>{currentStep.body}</div>}
        {currentStep.list && (
          <ul style={listStyle}>
            {currentStep.list.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div style={navRowStyle}>
        {current > 0 ? (
          <button style={btnPrevStyle} onClick={() => setCurrent(current - 1)}>
            ← Iliyotangulia
          </button>
        ) : (
          <span style={{ ...btnPrevStyle, opacity: 0.3, cursor: "not-allowed" }}>← Iliyotangulia</span>
        )}

        {!isLastStep ? (
          <button style={btnNextStyle} onClick={() => setCurrent(current + 1)}>
            Inayofuata →
          </button>
        ) : (
          <span style={{ fontSize: "0.85rem", color: "#1e7b4c", fontWeight: 600 }}>
            ✓ Umemaliza maudhui
          </span>
        )}
      </div>

      {isLastStep && quiz && quiz.length > 0 && (
        <LessonQuiz
          quiz={quiz}
          lessonTitle={lessonTitle}
          lessonHref={lessonHref}
          onPass={handlePass}
        />
      )}

      {isLastStep && quizPassed && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "#f0fdf4",
            borderRadius: "var(--radius-lg)",
            border: "1px solid #86efac",
          }}
        >
          <p style={{ margin: 0, color: "#166534", fontWeight: 700, fontSize: "1.1rem" }}>
            🎉 Hongera! Umemaliza somo hili.
          </p>
          <p style={{ margin: "0.5rem 0 1rem 0", color: "#1a1a1a", fontSize: "0.95rem" }}>
            Unaweza kuhifadhi somo kwenye Mfuko wa Maarifa, au kuendelea na somo linalofuata.
          </p>
          <SaveToJournal
            lessonId={lessonHref?.replace("/", "") || lessonTitle}
            lessonTitle={lessonTitle}
            lessonHref={lessonHref}
          />
          {nextHref && (
            <div style={{ marginTop: "1rem" }}>
              <Link href={nextHref} style={btnNextStyle}>
                {nextLabel || "Somo linalofuata"} →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

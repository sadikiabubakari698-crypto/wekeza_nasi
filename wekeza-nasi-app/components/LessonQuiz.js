"use client";
import { useState } from "react";

export default function LessonQuiz({ quiz, lessonTitle, lessonHref }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz || quiz.length === 0) return null;

  const handleSelect = (qIndex, option) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      // answer format: "Jibu: (b) ..." — extract letter
      const match = q.answer.match(/\(([a-d])\)/i);
      if (match && answers[i] === match[1].toLowerCase()) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const total = quiz.length;
  const percent = Math.round((score / total) * 100);

  const boxStyle = {
    background: "#ffffff",
    border: "2px solid #1e7b4c",
    borderRadius: "var(--radius-lg)",
    padding: "1.5rem",
    marginTop: "2rem",
  };

  const headerStyle = {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.25rem",
  };

  const subtitleStyle = {
    fontSize: "0.9rem",
    color: "#555555",
    marginBottom: "1.5rem",
  };

  const qStyle = {
    marginBottom: "1.5rem",
    paddingBottom: "1.25rem",
    borderBottom: "1px solid #e9edf2",
  };

  const qTitleStyle = {
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "0.75rem",
    fontSize: "1rem",
  };

  const optionStyle = (selected) => ({
    display: "block",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    background: selected ? "#e3f0ea" : "#f7f7f7",
    border: selected ? "2px solid #1e7b4c" : "2px solid transparent",
    borderRadius: "var(--radius-md)",
    cursor: submitted ? "default" : "pointer",
    fontSize: "0.95rem",
    color: "#1a1a1a",
  });

  const btnPrimaryStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    background: "#1e7b4c",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    marginRight: "0.5rem",
    marginTop: "0.5rem",
  };

  const btnSecondaryStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    background: "transparent",
    color: "#1e7b4c",
    fontWeight: 600,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid #1e7b4c",
    cursor: "pointer",
    marginTop: "0.5rem",
  };

  const resultBoxStyle = (passed) => ({
    background: passed ? "#f0fdf4" : "#fef8ee",
    borderLeft: passed ? "5px solid #16a34a" : "5px solid #d48d3b",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem 1.5rem",
    marginTop: "1rem",
  });

  // Parse options string: "(a) Option 1   (b) Option 2   (c) Option 3"
  const parseOptions = (optionsStr) => {
    if (!optionsStr) return [];
    const parts = optionsStr.split(/\s{2,}/);
    return parts.map((p) => {
      const match = p.match(/^\(([a-d])\)\s*(.+)$/i);
      if (match) return { letter: match[1].toLowerCase(), text: match[2].trim() };
      return null;
    }).filter(Boolean);
  };

  return (
    <div style={boxStyle}>
      <h3 style={headerStyle}>Kipimo Kidogo</h3>
      <p style={subtitleStyle}>
        Jaribu kile ulichojifunza. Ukikamilisha, unaweza kuendelea na somo linalofuata.
      </p>

      {quiz.map((q, i) => {
        const options = parseOptions(q.options);
        const selected = answers[i];
        const match = q.answer.match(/\(([a-d])\)/i);
        const correctLetter = match ? match[1].toLowerCase() : null;
        const isCorrect = submitted && selected === correctLetter;

        return (
          <div key={i} style={qStyle}>
            <p style={qTitleStyle}>{i + 1}. {q.q}</p>

            {options.map((opt) => {
              const isSelected = selected === opt.letter;
              let bg = "#f7f7f7";
              let border = "2px solid transparent";
              if (isSelected && !submitted) {
                bg = "#e3f0ea";
                border = "2px solid #1e7b4c";
              }
              if (submitted && opt.letter === correctLetter) {
                bg = "#d1fae5";
                border = "2px solid #16a34a";
              }
              if (submitted && isSelected && opt.letter !== correctLetter) {
                bg = "#fee2e2";
                border = "2px solid #dc2626";
              }

              return (
                <div
                  key={opt.letter}
                  onClick={() => handleSelect(i, opt.letter)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    marginBottom: "0.5rem",
                    background: bg,
                    border: border,
                    borderRadius: "var(--radius-md)",
                    cursor: submitted ? "default" : "pointer",
                    fontSize: "0.95rem",
                    color: "#1a1a1a",
                  }}
                >
                  <strong style={{ textTransform: "uppercase", marginRight: "0.5rem" }}>({opt.letter})</strong>
                  {opt.text}
                </div>
              );
            })}

            {submitted && (
              <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", color: isCorrect ? "#166534" : "#991b1b", fontWeight: 600 }}>
                {isCorrect ? "✓ Sahihi!" : "Sio sahihi — jibu sahihi ni (" + correctLetter + ")."}
              </p>
            )}

            {submitted && (
              <p style={{ marginTop: "0.25rem", fontSize: "0.85rem", color: "#555555" }}>
                {q.answer}
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          style={btnPrimaryStyle}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length !== quiz.length}
        >
          Angalia Matokeo →
        </button>
      ) : (
        <div style={resultBoxStyle(percent >= 60)}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem", color: percent >= 60 ? "#166534" : "#991b1b" }}>
            {percent >= 60 ? "🎉 Hongera!" : "Karibu tena!"}
          </p>
          <p style={{ margin: "0.25rem 0 0.75rem 0", color: "#1a1a1a" }}>
            Umepata {score} kati ya {total} ({percent}%).
          </p>
          <button style={btnSecondaryStyle} onClick={handleReset}>Jaribu Tena</button>
        </div>
      )}
    </div>
  );
}

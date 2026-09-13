"use client";
import { useEffect, useState } from "react";

export default function SaveToJournal({ lessonId, lessonTitle, lessonHref }) {
  const [saved, setSaved] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const journal = JSON.parse(localStorage.getItem("wekeza_journal") || "[]");
    setSaved(journal.some((item) => item.id === lessonId));
  }, [lessonId]);

  const handleToggle = () => {
    if (typeof window === "undefined") return;
    const journal = JSON.parse(localStorage.getItem("wekeza_journal") || "[]");

    if (saved) {
      const updated = journal.filter((item) => item.id !== lessonId);
      localStorage.setItem("wekeza_journal", JSON.stringify(updated));
      setSaved(false);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2500);
    } else {
      journal.push({
        id: lessonId,
        title: lessonTitle,
        href: lessonHref,
        savedAt: new Date().toISOString(),
      });
      localStorage.setItem("wekeza_journal", JSON.stringify(journal));
      setSaved(true);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2500);
    }
  };

  const btnStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    background: saved ? "#ffffff" : "#1e7b4c",
    color: saved ? "#1e7b4c" : "#ffffff",
    fontWeight: 700,
    fontSize: "0.95rem",
    borderRadius: "var(--radius-pill)",
    border: saved ? "1.5px solid #1e7b4c" : "none",
    cursor: "pointer",
    marginTop: "0.5rem",
  };

  const msgStyle = {
    display: "inline-block",
    marginLeft: "0.75rem",
    color: "#1e7b4c",
    fontSize: "0.85rem",
    fontWeight: 600,
  };

  return (
    <div>
      <button style={btnStyle} onClick={handleToggle}>
        {saved ? "★ Imehifadhiwa" : "☆ Hifadhi kwenye Mfuko"}
      </button>
      {showMsg && (
        <span style={msgStyle}>
          {saved ? "Somo limehifadhiwa!" : "Somo limeondolewa."}
        </span>
      )}
    </div>
  );
}

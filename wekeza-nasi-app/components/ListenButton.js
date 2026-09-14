"use client";
import { useEffect, useState, useRef } from "react";

export default function ListenButton({ text, label = "Sikiliza" }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [voiceOk, setVoiceOk] = useState(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    setSupported(true);

    const checkVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;
      const swVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("sw"));
      setVoiceOk(!!swVoice);
    };

    checkVoice();
    window.speechSynthesis.onvoiceschanged = checkVoice;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (!supported) return;

    if (speaking && paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      return;
    }

    if (speaking) {
      window.speechSynthesis.pause();
      setPaused(true);
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    // Jaribu Kiswahili, fallback English
    const voices = window.speechSynthesis.getVoices();
    const swVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("sw"));
    if (swVoice) {
      utterance.voice = swVoice;
      utterance.lang = swVoice.lang;
    } else {
      utterance.lang = "sw-TZ";
    }
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };
    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
    setPaused(false);
  };

  const handleStop = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    if (speaking) {
      // Lazima tuanze upya kwa rate mpya
      handleStop();
    }
  };

  if (!supported) {
    return null;
  }

  const wrapperStyle = {
    background: "#f3f7fb",
    border: "1px solid #dfe8f2",
    borderRadius: "var(--radius-md)",
    padding: "1rem 1.25rem",
    margin: "1.5rem 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    alignItems: "center",
  };

  const btnPrimary = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.6rem 1.2rem",
    background: speaking && !paused ? "#d48d3b" : "#1e7b4c",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "0.9rem",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
  };

  const btnStop = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.6rem 1rem",
    background: "transparent",
    color: "#991b1b",
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid #991b1b",
    cursor: "pointer",
  };

  const rateBtn = (active) => ({
    padding: "0.3rem 0.7rem",
    background: active ? "#1e7b4c" : "#ffffff",
    color: active ? "#ffffff" : "#1a1a1a",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.75rem",
    fontWeight: 600,
    cursor: "pointer",
  });

  return (
    <div style={wrapperStyle}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center", flex: "1 1 100%" }}>
        <button style={btnPrimary} onClick={handlePlay}>
          {speaking && !paused ? "⏸ Simamisha" : speaking && paused ? "▶ Endelea" : "🔊 " + label}
        </button>

        {speaking && (
          <button style={btnStop} onClick={handleStop}>⏹ Acha</button>
        )}

        <div style={{ display: "flex", gap: "0.3rem", alignItems: "center", marginLeft: "auto" }}>
          <span style={{ fontSize: "0.75rem", color: "#555555", marginRight: "0.2rem" }}>Mwendo:</span>
          <button style={rateBtn(rate === 0.75)} onClick={() => handleRateChange(0.75)}>0.75×</button>
          <button style={rateBtn(rate === 1)} onClick={() => handleRateChange(1)}>1×</button>
          <button style={rateBtn(rate === 1.25)} onClick={() => handleRateChange(1.25)}>1.25×</button>
          <button style={rateBtn(rate === 1.5)} onClick={() => handleRateChange(1.5)}>1.5×</button>
        </div>
      </div>

      {voiceOk === false && (
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#888888", width: "100%" }}>
          Kifaa chako hakiwezi kuwa na sauti ya Kiswahili — sauti ya kawaida itatumika. Ubora unaweza kutofautiana.
        </p>
      )}
    </div>
  );
}

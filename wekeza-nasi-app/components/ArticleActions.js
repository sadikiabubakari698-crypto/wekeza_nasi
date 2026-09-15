"use client";
import { useState, useEffect, useRef } from "react";

export default function ArticleActions({ text, title, path }) {
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [supported, setSupported] = useState(false);
  const [rate, setRate] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [url, setUrl] = useState("");

  const chunksRef = useRef([]);
  const currentChunkRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setUrl(window.location.origin + path);
    if ("speechSynthesis" in window) setSupported(true);
    return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); };
  }, [path]);

  const splitIntoChunks = (fullText) => {
    if (!fullText) return [];
    const sentences = fullText.split(/(?<=[.!?\n])\s+/).map((s) => s.trim()).filter((s) => s.length > 0);
    const chunks = [];
    let current = "";
    for (const s of sentences) {
      if ((current + " " + s).length > 200) {
        if (current) chunks.push(current.trim());
        current = s;
      } else {
        current = current ? current + " " + s : s;
      }
    }
    if (current) chunks.push(current.trim());
    return chunks;
  };

  const speakChunk = (index) => {
    if (index >= chunksRef.current.length) {
      setSpeaking(false); setPaused(false); setProgress(100);
      return;
    }
    currentChunkRef.current = index;
    const utterance = new window.SpeechSynthesisUtterance(chunksRef.current[index]);
    const voices = window.speechSynthesis.getVoices();
    const sw = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("sw"));
    if (sw) { utterance.voice = sw; utterance.lang = sw.lang; }
    else { utterance.lang = "sw-TZ"; }
    utterance.rate = rate;
    utterance.onend = () => {
      setProgress(Math.round(((index + 1) / chunksRef.current.length) * 100));
      speakChunk(index + 1);
    };
    utterance.onerror = () => { setSpeaking(false); setPaused(false); };
    window.speechSynthesis.speak(utterance);
  };

  const handleListen = () => {
    if (!supported) return;
    if (speaking && paused) { window.speechSynthesis.resume(); setPaused(false); return; }
    if (speaking) { window.speechSynthesis.pause(); setPaused(true); return; }
    chunksRef.current = splitIntoChunks(text);
    currentChunkRef.current = 0;
    setProgress(0); setSpeaking(true); setPaused(false);
    speakChunk(0);
  };

  const handleStop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false); setPaused(false); setProgress(0);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleShare = async () => {
    const shareText = encodeURIComponent(`${title} — WEKEZA NASI`);
    const shareUrl = encodeURIComponent(url);
    if (navigator.share) {
      try {
        await navigator.share({ title: `${title} — WEKEZA NASI`, text: "Soma hii kwenye WEKEZA NASI:", url });
        return;
      } catch {}
    }
    window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, "_blank");
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    setShowMenu(false);
    if (speaking) handleStop();
  };

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    padding: "0.75rem 0",
    margin: "1rem 0",
    borderTop: "1px solid #e9edf2",
    borderBottom: "1px solid #e9edf2",
    position: "relative",
  };

  const iconBtnStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "34px",
    height: "34px",
    background: active ? "#e3f0ea" : "transparent",
    color: active ? "#1e7b4c" : "#555555",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.15s, color 0.15s",
    padding: 0,
  });

  const progressBarStyle = {
    flex: 1,
    height: "3px",
    background: "#e5e7eb",
    borderRadius: "999px",
    overflow: "hidden",
    maxWidth: "80px",
    marginLeft: "0.25rem",
  };

  const progressFillStyle = {
    height: "100%",
    width: progress + "%",
    background: "#1e7b4c",
    transition: "width 0.3s ease",
  };

  const dropdownStyle = {
    position: "absolute",
    bottom: "calc(100% + 0.4rem)",
    right: 0,
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "0.4rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 20,
    minWidth: "150px",
  };

  const menuItemStyle = (active = false) => ({
    display: "block",
    width: "100%",
    padding: "0.45rem 0.75rem",
    background: active ? "#e3f0ea" : "transparent",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "var(--radius-sm)",
    fontSize: "0.8rem",
    fontWeight: active ? 700 : 500,
    textAlign: "left",
    cursor: "pointer",
  });

  return (
    <div style={wrapperStyle}>
      {/* Copy */}
      <button style={iconBtnStyle(copied)} onClick={handleCopy} aria-label="Nakili" title="Nakili link">
        {copied ? "✓" : "⧉"}
      </button>

      {/* Listen (Sikiliza) */}
      {supported && (
        <>
          <button
            style={iconBtnStyle(speaking)}
            onClick={handleListen}
            aria-label={speaking ? "Simamisha" : "Sikiliza"}
            title={speaking ? "Simamisha" : "Sikiliza"}
          >
            {speaking && !paused ? "⏸" : speaking && paused ? "▶" : "🔊"}
          </button>
          {speaking && (
            <>
              <div style={progressBarStyle}>
                <div style={progressFillStyle} />
              </div>
              <button style={iconBtnStyle()} onClick={handleStop} aria-label="Acha" title="Acha">⏹</button>
            </>
          )}
        </>
      )}

      {/* Share (Shiriki) */}
      <button style={iconBtnStyle()} onClick={handleShare} aria-label="Shiriki" title="Shiriki">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {/* Menu (⋯) */}
      <button
        style={iconBtnStyle(showMenu)}
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Mipangilio zaidi"
        title="Mipangilio zaidi"
      >
        ⋯
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div style={dropdownStyle}>
          <p style={{ fontSize: "0.65rem", color: "#888888", margin: "0 0 0.25rem 0", padding: "0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Mwendo wa sauti
          </p>
          {[0.75, 1, 1.25, 1.5].map((r) => (
            <button key={r} style={menuItemStyle(rate === r)} onClick={() => handleRateChange(r)}>
              {rate === r ? "✓ " : ""}{r}× {r === 1 ? "(kawaida)" : ""}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

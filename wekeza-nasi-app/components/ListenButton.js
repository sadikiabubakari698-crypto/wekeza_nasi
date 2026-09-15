"use client";
import { useEffect, useState, useRef } from "react";

const USE_API = false;

export default function ListenButton({ text, label = "Sikiliza" }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [swahiliVoice, setSwahiliVoice] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showVoicePicker, setShowVoicePicker] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const chunksRef = useRef([]);
  const currentChunkRef = useRef(0);
  const utteranceRef = useRef(null);
  const audioRef = useRef(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (USE_API) { setSupported(true); return; }
    if (!("speechSynthesis" in window)) { setSupported(false); return; }
    setSupported(true);

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length === 0) return;
      setVoices(v);
      const sw = v.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("sw"));
      if (sw) { setSwahiliVoice(sw); setSelectedVoice(sw); }
      else {
        const en = v.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"));
        setSelectedVoice(en || v[0]);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); };
  }, []);

  const speakChunk = (index) => {
    if (index >= chunksRef.current.length) {
      setSpeaking(false); setPaused(false); setProgress(100);
      return;
    }
    currentChunkRef.current = index;
    const chunk = chunksRef.current[index];
    const utterance = new window.SpeechSynthesisUtterance(chunk);
    if (selectedVoice) { utterance.voice = selectedVoice; utterance.lang = selectedVoice.lang; }
    else { utterance.lang = "sw-TZ"; }
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.onend = () => {
      const pct = Math.round(((index + 1) / chunksRef.current.length) * 100);
      setProgress(pct);
      speakChunk(index + 1);
    };
    utterance.onerror = () => { setSpeaking(false); setPaused(false); };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (!supported) return;
    setError(null);

    if (USE_API) {
      if (audioRef.current) {
        if (audioRef.current.paused) { audioRef.current.play(); setSpeaking(true); setPaused(false); }
        else { audioRef.current.pause(); setPaused(true); }
        return;
      }
      return;
    }

    if (speaking && paused) { window.speechSynthesis.resume(); setPaused(false); return; }
    if (speaking) { window.speechSynthesis.pause(); setPaused(true); return; }

    chunksRef.current = splitIntoChunks(text);
    currentChunkRef.current = 0;
    setProgress(0);
    setSpeaking(true);
    setPaused(false);
    speakChunk(0);
  };

  const handleStop = () => {
    if (typeof window === "undefined") return;
    if (USE_API) {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
      setAudioSrc(null);
    } else {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false); setPaused(false); setProgress(0);
    currentChunkRef.current = 0;
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    setShowMenu(false);
    if (speaking) handleStop();
  };

  const handleVoiceChange = (voiceName) => {
    const v = voices.find((voice) => voice.name === voiceName);
    if (v) setSelectedVoice(v);
    setShowVoicePicker(false);
    if (speaking) handleStop();
  };

  if (!supported && !USE_API) return null;

  // ============ COMPACT DESIGN ============
  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#f3f7fb",
    border: "1px solid #dfe8f2",
    borderRadius: "var(--radius-pill)",
    padding: "0.35rem 0.5rem 0.35rem 0.35rem",
    margin: "1rem 0",
    position: "relative",
  };

  const playBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    background: speaking && !paused ? "#d48d3b" : "#1e7b4c",
    color: "#ffffff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "0.95rem",
    flexShrink: 0,
    transition: "background 0.2s",
  };

  const progressWrapStyle = {
    flex: 1,
    height: "6px",
    background: "#e5e7eb",
    borderRadius: "999px",
    overflow: "hidden",
    minWidth: "40px",
  };

  const progressFillStyle = {
    height: "100%",
    width: progress + "%",
    background: "linear-gradient(90deg, #1e7b4c 0%, #d48d3b 100%)",
    transition: "width 0.3s ease",
  };

  const menuBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    background: "transparent",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1rem",
    flexShrink: 0,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "calc(100% + 0.4rem)",
    right: 0,
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 20,
    minWidth: "180px",
  };

  const menuItemStyle = (active = false) => ({
    display: "block",
    width: "100%",
    padding: "0.5rem 0.75rem",
    background: active ? "#e3f0ea" : "transparent",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "var(--radius-sm)",
    fontSize: "0.85rem",
    fontWeight: active ? 700 : 500,
    textAlign: "left",
    cursor: "pointer",
  });

  const dividerStyle = {
    height: "1px",
    background: "#e9edf2",
    margin: "0.35rem 0",
  };

  const infoPopupStyle = {
    position: "absolute",
    top: "calc(100% + 0.4rem)",
    right: 0,
    background: "#fef8ee",
    border: "1px solid #f5d99a",
    borderRadius: "var(--radius-md)",
    padding: "0.75rem 1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 20,
    minWidth: "240px",
    fontSize: "0.8rem",
    color: "#1a1a1a",
    lineHeight: 1.5,
  };

  return (
    <div style={wrapperStyle}>
      {/* Play/Pause Button */}
      <button style={playBtnStyle} onClick={handlePlay} aria-label={speaking ? "Simamisha" : label}>
        {loading ? "⏳" : speaking && !paused ? "⏸" : speaking && paused ? "▶" : "🔊"}
      </button>

      {/* Progress Bar */}
      <div style={progressWrapStyle}>
        <div style={progressFillStyle} />
      </div>

      {/* Percent Text */}
      {(speaking || progress > 0) && (
        <span style={{ fontSize: "0.7rem", color: "#555555", fontWeight: 600, flexShrink: 0 }}>
          {progress}%
        </span>
      )}

      {/* Stop Button (kama inasoma) */}
      {speaking && (
        <button style={menuBtnStyle} onClick={handleStop} aria-label="Acha">⏹</button>
      )}

      {/* Menu Button */}
      <button style={menuBtnStyle} onClick={() => { setShowMenu(!showMenu); setShowInfo(false); }} aria-label="Mipangilio">
        ⋯
      </button>

      {/* Info Button (kama hakuna Kiswahili) */}
      {!swahiliVoice && (
        <button style={{ ...menuBtnStyle, color: "#d48d3b" }} onClick={() => { setShowInfo(!showInfo); setShowMenu(false); }} aria-label="Maelezo">
          ⓘ
        </button>
      )}

      {/* Menu Dropdown */}
      {showMenu && (
        <div style={dropdownStyle}>
          <p style={{ fontSize: "0.7rem", color: "#888888", margin: "0 0 0.35rem 0", padding: "0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Mwendo
          </p>
          {[0.75, 1, 1.25, 1.5].map((r) => (
            <button key={r} style={menuItemStyle(rate === r)} onClick={() => handleRateChange(r)}>
              {rate === r ? "✓ " : ""}{r}× {r === 1 ? "(kawaida)" : ""}
            </button>
          ))}
          {!swahiliVoice && (
            <>
              <div style={dividerStyle} />
              <button style={menuItemStyle()} onClick={() => { setShowVoicePicker(true); setShowMenu(false); }}>
                Chagua sauti ({voices.length})
              </button>
            </>
          )}
        </div>
      )}

      {/* Info Popup */}
      {showInfo && (
        <div style={infoPopupStyle}>
          <strong>Kifaa chako hakina sauti ya Kiswahili.</strong> Sauti itasoma kwa lafudhi ya Kiingereza. Maneno yanaweza kusikika vibaya.
          <br /><br />
          <button
            onClick={() => { setShowVoicePicker(true); setShowInfo(false); }}
            style={{ background: "#1e7b4c", color: "#fff", border: "none", borderRadius: "var(--radius-pill)", padding: "0.35rem 0.9rem", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
          >
            Chagua sauti nyingine
          </button>
        </div>
      )}

      {/* Voice Picker Overlay */}
      {showVoicePicker && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)", zIndex: 1000,
          display: "flex", alignItems: "flex-end",
        }} onClick={() => setShowVoicePicker(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%", maxHeight: "70vh", overflowY: "auto",
              background: "#ffffff", borderTopLeftRadius: "16px", borderTopRightRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, fontSize: "1rem", color: "#1a1a1a" }}>Chagua Sauti</h3>
              <button onClick={() => setShowVoicePicker(false)} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#555" }}>✕</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {voices.map((v, i) => (
                <button
                  key={i}
                  onClick={() => handleVoiceChange(v.name)}
                  style={{
                    padding: "0.75rem 1rem",
                    background: selectedVoice?.name === v.name ? "#e3f0ea" : "#f7f7f7",
                    border: selectedVoice?.name === v.name ? "2px solid #1e7b4c" : "1px solid #e9edf2",
                    borderRadius: "var(--radius-md)",
                    textAlign: "left",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    color: "#1a1a1a",
                  }}
                >
                  {v.name} <span style={{ color: "#888", fontSize: "0.8rem" }}>({v.lang})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

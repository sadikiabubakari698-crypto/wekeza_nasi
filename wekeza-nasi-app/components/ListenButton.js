"use client";
import { useEffect, useState, useRef } from "react";

// Mfumo wa Sauti — V1 (Browser SpeechSynthesis)
// Baadaye: V2 (Google Cloud TTS API)
// Interface ni ile ile — kubadilisha backend ni kubadilisha USE_API tu.

const USE_API = false; // Badilisha kuwa true baada ya API key ya Google Cloud

export default function ListenButton({ text, label = "Sikiliza" }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [swahiliVoice, setSwahiliVoice] = useState(null);
  const [progress, setProgress] = useState(0);
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
    const sentences = fullText
      .split(/(?<=[.!?\n])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

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

    if (USE_API) {
      setSupported(true);
      return;
    }

    if (!("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    setSupported(true);

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length === 0) return;
      setVoices(v);

      const sw = v.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("sw"));
      if (sw) {
        setSwahiliVoice(sw);
        setSelectedVoice(sw);
      } else {
        const en = v.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"));
        setSelectedVoice(en || v[0]);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  // ==== BROWSER SPEECH ====
  const speakChunk = (index) => {
    if (index >= chunksRef.current.length) {
      setSpeaking(false);
      setPaused(false);
      setProgress(100);
      return;
    }

    currentChunkRef.current = index;
    const chunk = chunksRef.current[index];
    const utterance = new window.SpeechSynthesisUtterance(chunk);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = "sw-TZ";
    }
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onend = () => {
      const pct = Math.round(((index + 1) / chunksRef.current.length) * 100);
      setProgress(pct);
      speakChunk(index + 1);
    };

    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // ==== API TTS ====
  const fetchAudio = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: "sw-KE-Standard-A", rate }),
      });
      if (!res.ok) throw new Error("TTS API imeshindwa");
      const blob = await res.blob();
      setAudioSrc(URL.createObjectURL(blob));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = () => {
    if (!supported) return;
    setError(null);

    if (USE_API) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setSpeaking(true);
          setPaused(false);
        } else {
          audioRef.current.pause();
          setPaused(true);
        }
        return;
      }
      fetchAudio();
      return;
    }

    // Browser SpeechSynthesis
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
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setAudioSrc(null);
    } else {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
    setPaused(false);
    setProgress(0);
    currentChunkRef.current = 0;
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    if (speaking) handleStop();
  };

  const handleVoiceChange = (voiceName) => {
    const v = voices.find((voice) => voice.name === voiceName);
    if (v) setSelectedVoice(v);
    if (speaking) handleStop();
  };

  // Auto-play API audio baada ya kupatikana
  useEffect(() => {
    if (USE_API && audioSrc && audioRef.current) {
      audioRef.current.play().then(() => {
        setSpeaking(true);
        setPaused(false);
      }).catch((err) => {
        setError("Browser ilizuia autoplay. Bonyeza kitufe tena.");
      });
    }
  }, [audioSrc]);

  if (!supported && !USE_API) {
    return (
      <div style={{ background: "#fef8ee", borderLeft: "5px solid #d48d3b", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", margin: "1.5rem 0", fontSize: "0.9rem", color: "#1a1a1a" }}>
        Kifaa chako hakiwezi kusoma maandishi kwa sauti.
      </div>
    );
  }

  const wrapperStyle = {
    background: "#f3f7fb",
    border: "1px solid #dfe8f2",
    borderRadius: "var(--radius-md)",
    padding: "1rem 1.25rem",
    margin: "1.5rem 0",
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
    cursor: loading ? "wait" : "pointer",
    opacity: loading ? 0.6 : 1,
  };

  const btnStop = {
    padding: "0.6rem 1rem",
    background: "transparent",
    color: "#991b1b",
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid #991b1b",
    cursor: "pointer",
  };

  const btnSmall = {
    padding: "0.3rem 0.7rem",
    background: "#ffffff",
    color: "#1a1a1a",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.75rem",
    fontWeight: 600,
    cursor: "pointer",
  };

  const rateBtn = (active) => ({
    ...btnSmall,
    background: active ? "#1e7b4c" : "#ffffff",
    color: active ? "#ffffff" : "#1a1a1a",
  });

  const progressBarBg = {
    width: "100%",
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "999px",
    overflow: "hidden",
    marginTop: "0.75rem",
  };

  const progressBarFill = {
    height: "100%",
    width: progress + "%",
    background: "linear-gradient(90deg, #1e7b4c 0%, #d48d3b 100%)",
    transition: "width 0.3s ease",
  };

  return (
    <div style={wrapperStyle}>
      {/* API Audio Element */}
      {USE_API && audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={(e) => {
            const pct = Math.round((e.target.currentTime / e.target.duration) * 100);
            setProgress(pct);
          }}
          onEnded={() => {
            setSpeaking(false);
            setProgress(100);
          }}
          style={{ width: "100%", marginBottom: "0.5rem" }}
          controls
        />
      )}

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <button style={btnPrimary} onClick={handlePlay} disabled={loading}>
          {loading
            ? "⏳ Inatengeneza..."
            : speaking && !paused
            ? "⏸ Simamisha"
            : speaking && paused
            ? "▶ Endelea"
            : "🔊 " + label}
        </button>

        {speaking && <button style={btnStop} onClick={handleStop}>⏹ Acha</button>}

        {!USE_API && (
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center", marginLeft: "auto" }}>
            <span style={{ fontSize: "0.75rem", color: "#555555", marginRight: "0.2rem" }}>Mwendo:</span>
            <button style={rateBtn(rate === 0.75)} onClick={() => handleRateChange(0.75)}>0.75×</button>
            <button style={rateBtn(rate === 1)} onClick={() => handleRateChange(1)}>1×</button>
            <button style={rateBtn(rate === 1.25)} onClick={() => handleRateChange(1.25)}>1.25×</button>
            <button style={rateBtn(rate === 1.5)} onClick={() => handleRateChange(1.5)}>1.5×</button>
          </div>
        )}
      </div>

      {/* Progress (kwa browser tu — API inatumia controls za audio) */}
      {!USE_API && (speaking || progress > 0) && (
        <div style={{ marginTop: "0.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "0.8rem", color: "#1a1a1a", fontWeight: 600 }}>
              {progress}% imekamilika
            </span>
            {progress === 100 && (
              <span style={{ fontSize: "0.8rem", color: "#1e7b4c", fontWeight: 600 }}>
                ✓ Umekamilisha kusikiliza
              </span>
            )}
          </div>
          <div style={progressBarBg}>
            <div style={progressBarFill} />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#991b1b", fontWeight: 600 }}>
          {error}
        </p>
      )}

      {/* Onyo la Kiswahili — browser tu */}
      {!USE_API && !swahiliVoice && (
        <div style={{ marginTop: "0.75rem", padding: "0.75rem 1rem", background: "#fef8ee", borderLeft: "4px solid #d48d3b", borderRadius: "var(--radius-md)", fontSize: "0.8rem", color: "#1a1a1a" }}>
          <strong>Kifaa chako hakina sauti ya Kiswahili.</strong> Sauti itasoma kwa lafudhi ya Kiingereza.
          <br />
          <button
            style={{ ...btnSmall, marginTop: "0.5rem" }}
            onClick={() => setShowVoicePicker(!showVoicePicker)}
          >
            {showVoicePicker ? "Funga" : `Chagua sauti nyingine (${voices.length} zipo)`}
          </button>
        </div>
      )}

      {showVoicePicker && !USE_API && (
        <div style={{ marginTop: "0.75rem" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.8rem", color: "#555555" }}>Chagua sauti:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", maxHeight: "200px", overflowY: "auto" }}>
            {voices.map((v, i) => (
              <button
                key={i}
                onClick={() => {
                  handleVoiceChange(v.name);
                  setShowVoicePicker(false);
                }}
                style={{
                  ...btnSmall,
                  textAlign: "left",
                  background: selectedVoice?.name === v.name ? "#e3f0ea" : "#ffffff",
                  border: selectedVoice?.name === v.name ? "1.5px solid #1e7b4c" : "1px solid #e9edf2",
                }}
              >
                {v.name} <span style={{ color: "#888888" }}>— {v.lang}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

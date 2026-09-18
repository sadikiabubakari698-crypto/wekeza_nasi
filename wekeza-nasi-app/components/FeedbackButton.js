"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "255700000000"; // Badilisha na namba yako
const EMAIL = "info@wekeza-nasi.co.tz"; // Badilisha na email yako

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("maoni");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleWhatsApp = () => {
    if (!message.trim()) return;
    const typeLabel = { bug: "🐛 Bug", maoni: "💬 Maoni", ombi: "💡 Ombi" }[type];
    const text = encodeURIComponent(`${typeLabel} kutoka WEKEZA NASI:\n\n${message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setMessage(""); }, 2000);
  };

  const handleEmail = () => {
    if (!message.trim()) return;
    const typeLabel = { bug: "Bug", maoni: "Maoni", ombi: "Ombi" }[type];
    const subject = encodeURIComponent(`[${typeLabel}] WEKEZA NASI Feedback`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setMessage(""); }, 2000);
  };

  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.6rem 1.1rem",
    background: "#1e7b4c",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };

  const modalStyle = {
    background: "#ffffff",
    width: "100%",
    maxWidth: "500px",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    padding: "1.5rem",
    maxHeight: "90vh",
    overflowY: "auto",
  };

  const labelStyle = { fontSize: "0.85rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem", display: "block" };
  const selectStyle = { width: "100%", padding: "0.7rem 1rem", fontSize: "0.95rem", border: "1.5px solid #e9edf2", borderRadius: "var(--radius-md)", background: "#ffffff", color: "#1a1a1a", marginBottom: "1rem" };
  const textareaStyle = { width: "100%", padding: "0.8rem 1rem", fontSize: "0.95rem", border: "1.5px solid #e9edf2", borderRadius: "var(--radius-md)", background: "#ffffff", color: "#1a1a1a", minHeight: "120px", resize: "vertical", fontFamily: "inherit", marginBottom: "1rem", boxSizing: "border-box" };

  return (
    <>
      <button onClick={() => setOpen(true)} style={btnStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Tuma Maoni
      </button>

      {open && (
        <div style={overlayStyle} onClick={() => setOpen(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#1a1a1a", fontSize: "1.15rem" }}>Tuma Maoni</h3>
              <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#888" }}>✕</button>
            </div>

            {sent ? (
              <div style={{ padding: "1.5rem", background: "#f0fdf4", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <p style={{ margin: 0, color: "#166534", fontWeight: 700 }}>🎉 Asante!</p>
                <p style={{ margin: "0.5rem 0 0 0", color: "#1a1a1a", fontSize: "0.9rem" }}>Maoni yako yametumwa. Tutayafanyia kazi.</p>
              </div>
            ) : (
              <>
                <label style={labelStyle}>Aina ya Maoni</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
                  <option value="maoni">💬 Maoni / Mapendekezo</option>
                  <option value="bug">🐛 Kosa / Bug</option>
                  <option value="ombi">💡 Ombi la Kipengele</option>
                </select>

                <label style={labelStyle}>Maelezo</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Eleza kwa ufupi..."
                  style={textareaStyle}
                />

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <button onClick={handleWhatsApp} disabled={!message.trim()} style={{ ...btnStyle, background: message.trim() ? "#25D366" : "#cccccc", cursor: message.trim() ? "pointer" : "not-allowed" }}>
                    Tuma kwa WhatsApp
                  </button>
                  <button onClick={handleEmail} disabled={!message.trim()} style={{ ...btnStyle, background: message.trim() ? "#1e7b4c" : "#cccccc", cursor: message.trim() ? "pointer" : "not-allowed" }}>
                    Tuma kwa Email
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

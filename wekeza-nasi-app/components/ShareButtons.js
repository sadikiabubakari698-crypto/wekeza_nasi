"use client";
import { useState, useEffect } from "react";

export default function ShareButtons({ title, path }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.origin + path);
    }
  }, [path]);

  const shareText = encodeURIComponent(`${title} — WEKEZA NASI`);
  const shareUrl = encodeURIComponent(url || "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} — WEKEZA NASI`,
          text: "Soma hii kwenye WEKEZA NASI:",
          url: url,
        });
      } catch {}
    }
  };

  const containerStyle = { background: "#f3f7fb", border: "1px solid #dfe8f2", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", margin: "2rem 0 0 0" };
  const titleStyle = { fontSize: "0.85rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.75rem 0", letterSpacing: "0.03em", textTransform: "uppercase" };
  const rowStyle = { display: "flex", gap: "0.5rem", flexWrap: "wrap" };
  const btnBase = { display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.6rem 1.1rem", borderRadius: "var(--radius-pill)", border: "none", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", cursor: "pointer" };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Shiriki</p>
      <div style={rowStyle}>
        <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ ...btnBase, background: "#25D366", color: "#ffffff" }}>
          WhatsApp
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ ...btnBase, background: "#000000", color: "#ffffff" }}>
          X (Twitter)
        </a>
        <button style={{ ...btnBase, background: "#ffffff", color: "#1a1a1a", border: "1.5px solid #e9edf2" }} onClick={handleCopy}>
          {copied ? "✓ Imenakiliwa" : "Nakili Link"}
        </button>
        {typeof navigator !== "undefined" && navigator.share && (
          <button style={{ ...btnBase, background: "#1e7b4c", color: "#ffffff" }} onClick={handleNativeShare}>
            Shiriki
          </button>
        )}
      </div>
    </div>
  );
}

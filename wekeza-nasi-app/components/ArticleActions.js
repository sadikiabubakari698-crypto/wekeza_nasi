"use client";
import { useState, useEffect } from "react";

export default function ArticleActions({ title, path }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.origin + path);
    }
  }, [path]);

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

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    padding: "0.75rem 0",
    margin: "1rem 0",
    borderTop: "1px solid #e9edf2",
    borderBottom: "1px solid #e9edf2",
  };

  const iconBtnStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px",
    height: "38px",
    background: active ? "#e3f0ea" : "transparent",
    color: active ? "#1e7b4c" : "#555555",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.05rem",
    transition: "background 0.15s, color 0.15s",
    padding: 0,
  });

  return (
    <div style={wrapperStyle}>
      {/* Copy */}
      <button style={iconBtnStyle(copied)} onClick={handleCopy} aria-label="Nakili" title="Nakili link">
        {copied ? (
          <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>✓</span>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>

      {/* Share */}
      <button style={iconBtnStyle()} onClick={handleShare} aria-label="Shiriki" title="Shiriki">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {/* More (⋯) */}
      <button style={iconBtnStyle()} aria-label="Zaidi" title="Zaidi">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
        </svg>
      </button>
    </div>
  );
}

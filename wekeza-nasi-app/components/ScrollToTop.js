"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Rudi juu"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        width: "48px",
        height: "48px",
        background: "#1e7b4c",
        color: "#ffffff",
        border: "none",
        borderRadius: "50%",
        fontSize: "1.25rem",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(30,123,76,0.3)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      ↑
    </button>
  );
}

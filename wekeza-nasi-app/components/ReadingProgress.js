"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        setVisible(false);
        return;
      }
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setProgress(pct);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "4px", background: "#e9edf2", zIndex: 200 }} aria-hidden="true">
      <div style={{ height: "100%", width: progress + "%", background: "linear-gradient(90deg, #1e7b4c 0%, #d48d3b 100%)", transition: "width 0.1s ease-out" }} />
    </div>
  );
}

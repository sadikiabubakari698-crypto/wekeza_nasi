"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUnreadCount, autoCheckNotifications } from "../lib/notifications";
import contentData from "../content/content.json";
import sokoData from "../content/soko.json";

export default function NotificationBell() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ===== AUTO-CHECK =====
    // Angalia content mpya — Somo la Mwezi, Case Study, Timely
    try {
      const somoLaMwezi = contentData.filter((item) => item.category === "planned" && item.type === "monthly-deep-dive");
      const caseStudies = sokoData.filter((item) => item.type === "case-study" && (!item.partNumber || item.partNumber === 1));
      const timely = sokoData.filter((item) => item.category === "timely");

      autoCheckNotifications({ somoLaMwezi, caseStudies, timely });
    } catch (e) {
      // Fail silently — notifications si critical
    }

    const update = () => setCount(getUnreadCount());
    update();
    const interval = setInterval(update, 3000);
    return () => clearInterval(interval);
  }, []);

  const bellStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    background: "transparent",
    color: "#1a1a1a",
    textDecoration: "none",
    borderRadius: "50%",
    fontSize: "1.05rem",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  };

  const badgeStyle = {
    position: "absolute",
    top: "2px",
    right: "2px",
    background: "#dc2626",
    color: "#ffffff",
    fontSize: "0.6rem",
    fontWeight: 700,
    borderRadius: "999px",
    minWidth: "16px",
    height: "16px",
    padding: "0 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  };

  return (
    <Link href="/notifications" style={bellStyle} aria-label="Taarifa" title="Taarifa">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
      {count > 0 && <span style={badgeStyle}>{count > 9 ? "9+" : count}</span>}
    </Link>
  );
}

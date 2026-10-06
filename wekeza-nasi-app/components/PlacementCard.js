"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PlacementCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("wekeza_progress");
      const parsed = raw ? JSON.parse(raw) : [];
      setShow(!Array.isArray(parsed) || parsed.length === 0);
    } catch (e) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div style={{
      background: "#e3f0ea", border: "1px solid #e9edf2", borderLeft: "6px solid #1e7b4c",
      borderRadius: "12px", padding: "1rem", margin: "0 0 1.25rem", color: "#1a1a1a",
    }}>
      <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.4rem", color: "#1a1a1a" }}>
        Una uzoefu wa uwekezaji?
      </h2>
      <p style={{ margin: "0 0 0.85rem", lineHeight: 1.6, color: "#1a1a1a" }}>
        Tupe dakika chache za kukujua, kisha tutakuanzisha kwenye somo linalokufaa. Kama ndio unaanza,
        karibu sana, Somo 1 liko tayari kwako.
      </p>
      <Link href="/academy/kiwango" style={{
        display: "inline-block", padding: "0.7rem 1.2rem", background: "#1e7b4c", color: "#ffffff",
        borderRadius: "999px", fontWeight: 700, textDecoration: "none",
      }}>
        Pima Kiwango Chako
      </Link>
    </div>
  );
}

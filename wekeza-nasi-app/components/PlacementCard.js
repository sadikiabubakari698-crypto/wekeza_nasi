"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PLACEMENT_FLAG } from "../lib/placement";

export default function PlacementCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("wekeza_progress");
      const parsed = raw ? JSON.parse(raw) : [];
      const hasProgress = Array.isArray(parsed) && parsed.length > 0;
      const done = window.localStorage.getItem(PLACEMENT_FLAG) === "1";
      setShow(!hasProgress && !done);
    } catch (e) {
      setShow(true);
    }
  }, []);

  function startFromBeginning() {
    try { window.localStorage.setItem(PLACEMENT_FLAG, "1"); } catch (e) {}
    window.location.reload();
  }

  if (!show) return null;

  return (
    <div style={{
      background: "#e3f0ea", border: "1px solid #e9edf2", borderLeft: "6px solid #1e7b4c",
      borderRadius: "12px", padding: "1rem", margin: "0 0 1.25rem", color: "#1a1a1a",
    }}>
      <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.4rem", color: "#1a1a1a" }}>
        Tuanze safari yetu pamoja
      </h2>
      <p style={{ margin: "0 0 0.85rem", lineHeight: 1.6, color: "#1a1a1a" }}>
        Jibu maswali machache ili tukuanzishe mahali panapokufaa. Hata kama ndio unaanza, ni dakika moja
        tu: chagua &quot;Sijui bado&quot; na tutakuanzisha Somo 1.
      </p>
      <Link href="/academy/kiwango" style={{
        display: "inline-block", padding: "0.7rem 1.2rem", background: "#1e7b4c", color: "#ffffff",
        borderRadius: "999px", fontWeight: 700, textDecoration: "none",
      }}>
        Pima Kiwango Chako
      </Link>
      <p style={{ margin: "0.85rem 0 0" }}>
        <button onClick={startFromBeginning} style={{
          background: "none", border: "none", padding: 0, color: "#16633d",
          textDecoration: "underline", cursor: "pointer", fontSize: "0.95rem",
        }}>
          Naanza mwanzo, sihitaji kupimwa
        </button>
      </p>
    </div>
  );
}

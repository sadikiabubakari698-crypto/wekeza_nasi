"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function MfukoWaMaarifa() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const journal = JSON.parse(localStorage.getItem("wekeza_journal") || "[]");
    setItems(journal);
    setLoaded(true);
  }, []);

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    localStorage.setItem("wekeza_journal", JSON.stringify(updated));
    setItems(updated);
  };

  const cardStyle = {
    display: "block",
    padding: "1.25rem",
    background: "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.75rem",
    color: "#1a1a1a",
    textDecoration: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    position: "relative",
  };

  const removeBtnStyle = {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    background: "transparent",
    border: "none",
    color: "#888888",
    fontSize: "1.1rem",
    cursor: "pointer",
    padding: "0.25rem 0.5rem",
  };

  return (
    <main style={{ padding: "1.75rem", maxWidth: "600px", margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: 1.6, color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" }}>
      <Breadcrumbs items={[
        { label: "Nyumbani", href: "/" },
        { label: "Mfuko wa Maarifa" },
      ]} />

      <h1 style={{ color: "#1a1a1a", marginBottom: "0.25rem" }}>Mfuko wa Maarifa</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Masomo uliyochagua kuhifadhi kwa marejeleo ya baadaye.
      </p>

      {!loaded ? (
        <p style={{ color: "#555555" }}>Inapakia...</p>
      ) : items.length === 0 ? (
        <div style={{ background: "#f3f7fb", borderRadius: "var(--radius-md)", padding: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600 }}>
            Mfuko wako ni tupu bado.
          </p>
          <p style={{ margin: "0.5rem 0 0 0", color: "#555555", fontSize: "0.9rem" }}>
            Ukimaliza somo, unaweza kuhifadhi kwa marejeleo ya baadaye. Bonyeza "☆ Hifadhi kwenye Mfuko" baada ya somo.
          </p>
          <Link href="/academy" style={{ display: "inline-block", marginTop: "1rem", color: "#1e7b4c", fontWeight: 700 }}>
            Anza kujifunza →
          </Link>
        </div>
      ) : (
        <div>
          <p style={{ color: "#555555", fontSize: "0.9rem", marginBottom: "1rem" }}>
            Masomo {items.length} yamehifadhiwa:
          </p>
          {items.map((item) => (
            <div key={item.id} style={cardStyle}>
              <button
                style={removeBtnStyle}
                onClick={() => handleRemove(item.id)}
                title="Ondoa"
              >
                ✕
              </button>
              <Link href={item.href} style={{ textDecoration: "none", color: "#1a1a1a" }}>
                <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.05rem", paddingRight: "1.5rem" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#888888" }}>
                  Ilhifadhiwa: {new Date(item.savedAt).toLocaleDateString("sw-TZ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </main>
  );
}

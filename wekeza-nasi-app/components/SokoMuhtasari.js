"use client";
import Link from "next/link";
import { getSokoData } from "../lib/soko-data";

export default function SokoMuhtasari() {
  const data = getSokoData();

  const formatTarehe = (tareheStr) => {
    const d = new Date(tareheStr);
    const miezi = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
    return `${d.getDate()} ${miezi[d.getMonth()]} ${d.getFullYear()}`;
  };

  const wrapperStyle = { background: "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-lg)", padding: "1.25rem", marginBottom: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" };
  const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" };
  const titleStyle = { fontSize: "1.15rem", fontWeight: 700, color: "#1a1a1a", margin: 0 };
  const dseiStyle = { display: "flex", alignItems: "center", gap: "0.5rem", background: data.dsei.change >= 0 ? "#f0fdf4" : "#fef2f2", padding: "0.4rem 0.85rem", borderRadius: "var(--radius-pill)" };
  const dseiLabelStyle = { fontSize: "0.75rem", color: "#555555", fontWeight: 600 };
  const dseiValueStyle = { fontSize: "0.95rem", fontWeight: 700, color: "#1a1a1a" };
  const dseiChangeStyle = { fontSize: "0.8rem", fontWeight: 700, color: data.dsei.change >= 0 ? "#166534" : "#991b1b" };
  const rowStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid #f3f7fb" };
  const tickerStyle = { fontWeight: 700, color: "#1a1a1a", fontSize: "0.9rem", minWidth: "55px" };
  const jinaStyle = { fontSize: "0.8rem", color: "#888888", flex: 1, marginLeft: "0.5rem" };
  const beiStyle = { fontWeight: 700, color: "#1a1a1a", fontSize: "0.9rem", textAlign: "right" };
  const changeStyle = (val) => ({ fontSize: "0.8rem", fontWeight: 700, minWidth: "55px", textAlign: "right", color: val > 0 ? "#166534" : val < 0 ? "#991b1b" : "#888888" });
  const tareheStyle = { fontSize: "0.75rem", color: "#888888", marginTop: "1rem", textAlign: "center" };
  const btnStyle = { display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.65rem 1.25rem", background: "#1e7b4c", color: "#ffffff", fontWeight: 600, fontSize: "0.85rem", borderRadius: "var(--radius-pill)", textDecoration: "none", marginTop: "1rem" };

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>📊 Soko Leo</h2>
        <div style={dseiStyle}>
          <span style={dseiLabelStyle}>DSEI</span>
          <span style={dseiValueStyle}>{data.dsei.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
          <span style={dseiChangeStyle}>{data.dsei.change >= 0 ? "▲ +" : "▼ "}{data.dsei.change}%</span>
        </div>
      </div>

      {data.hisa.map((h, i) => (
        <div key={h.ticker} style={{ ...rowStyle, borderBottom: i === data.hisa.length - 1 ? "none" : "1px solid #f3f7fb" }}>
          <span style={tickerStyle}>{h.ticker}</span>
          <span style={jinaStyle}>{h.jina}</span>
          <span style={beiStyle}>{h.bei.toLocaleString("en-US")}</span>
          <span style={changeStyle(h.change)}>{h.change > 0 ? "▲ +" : h.change < 0 ? "▼ " : "— "}{h.change !== 0 ? h.change + "%" : ""}</span>
        </div>
      ))}

      <p style={tareheStyle}>Data: {formatTarehe(data.tarehe)} ({data.muda})</p>

      <div style={{ textAlign: "center" }}>
        <Link href="/soko/zaidi" style={btnStyle}>Kuona Zaidi →</Link>
      </div>
    </div>
  );
}

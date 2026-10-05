"use client";
import { useState } from "react";
import { createEmptyTemplate, updateStatus, STATUSES } from "../../../lib/analysis-template";

export default function DashboardV2() {
  const [template, setTemplate] = useState(() => {
    const t = createEmptyTemplate("demo-bot-2026-10-04");
    return {
      ...t,
      source: {
        jina: "Bank of Tanzania",
        aina: "rasmi",
        url: "https://www.bot.go.tz/",
        tarehe: "2026-10-04",
        lugha: "sw",
      },
      headline: "BOT yapandisha policy rate kwa 0.5%",
      content: "Bank of Tanzania imetangaza kupandisha policy rate kutoka 5.5% hadi 6.0%, kuanzia 1 Novemba 2026. Uamuzi huu unalenga kudhibiti mfumuko wa bei.",
      contentAvailable: "full",
      facts: [
        { fact: "BOT imepandisha policy rate kutoka 5.5% hadi 6.0%", sourceQuote: "BOT official statement", supported: true },
        { fact: "Mabadiliko yanaanza 1 Novemba 2026", sourceQuote: "BOT official statement", supported: true },
      ],
      analysis: { whatHappened: "", whyItMatters: "", whoIsAffected: [], investorImplications: "", relevantSectors: [], relevantCompanies: [], whatToWatch: [], whatWeCannotConclude: [], evidence: [] },
      impactLevel: "",
      impactReason: "",
      confidence: "",
      confidenceReason: "",
      status: "NEW",
      statusHistory: [{ status: "NEW", tarehe: new Date().toISOString() }],
    };
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          headline: template.headline,
          content: template.content,
          sourceName: template.source.jina,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setTemplate((t) => ({
          ...t,
          analysis: {
            whatHappened: data.analysis.whatHappened,
            whyItMatters: data.analysis.whyItMatters,
            whoIsAffected: data.analysis.whoIsAffected,
            investorImplications: data.analysis.investorImplications,
            relevantSectors: data.analysis.relevantSectors,
            relevantCompanies: data.analysis.relevantCompanies,
            whatToWatch: data.analysis.whatToWatch,
            whatWeCannotConclude: data.analysis.whatWeCannotConclude,
            evidence: t.analysis.evidence,
          },
          impactLevel: data.impactLevel,
          impactReason: data.impactReason,
          confidence: data.confidence,
          confidenceReason: data.confidenceReason,
          status: "AI_DRAFT",
          statusHistory: [...t.statusHistory, { status: "AI_DRAFT", tarehe: new Date().toISOString() }],
        }));
      } else {
        setError(data.error || "Kosa la AI");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const pageStyle = { padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "var(--font-sans)", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };
  const sectionStyle = (color) => ({ background: color || "#ffffff", border: "1px solid #e9edf2", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" });
  const h3Style = { fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", marginTop: 0, marginBottom: "0.75rem", borderBottom: "1px solid #e9edf2", paddingBottom: "0.4rem" };
  const badgeStyle = (level) => {
    const colors = {
      HIGH: { bg: "#fef2f2", color: "#991b1b" },
      MEDIUM: { bg: "#fef8ee", color: "#d48d3b" },
      LOW: { bg: "#f0fdf4", color: "#166534" },
    };
    return colors[level] || colors.MEDIUM;
  };

  return (
    <main style={pageStyle}>
      <h1 style={{ marginBottom: "0.25rem" }}>Dashboard ya Chief — v2</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>Uchambuzi wa habari kwa template ya WEKEZA NASI.</p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <span style={{ background: "#f3f7fb", color: "#1a1a1a", padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>
          Status: {template.status}
        </span>
        {template.impactLevel && (
          <span style={{ background: badgeStyle(template.impactLevel).bg, color: badgeStyle(template.impactLevel).color, padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
            Impact: {template.impactLevel}
          </span>
        )}
        {template.confidence && (
          <span style={{ background: badgeStyle(template.confidence).bg, color: badgeStyle(template.confidence).color, padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
            Confidence: {template.confidence}
          </span>
        )}
      </div>

      <div style={sectionStyle()}>
        <h3 style={h3Style}>1. Source</h3>
        <p style={{ margin: "0.25rem 0" }}><strong>Jina:</strong> {template.source.jina}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>Aina:</strong> {template.source.aina}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>Tarehe:</strong> {template.source.tarehe}</p>
      </div>

      <div style={sectionStyle()}>
        <h3 style={h3Style}>2. Habari</h3>
        <p style={{ margin: "0.25rem 0", fontWeight: 700, fontSize: "1.1rem" }}>{template.headline}</p>
        <p style={{ margin: "0.5rem 0", color: "#555555" }}>{template.content}</p>
      </div>

      <div style={sectionStyle()}>
        <h3 style={h3Style}>3. Facts</h3>
        {template.facts.map((f, i) => (
          <div key={i} style={{ marginBottom: "0.5rem", paddingLeft: "0.5rem", borderLeft: "3px solid #1e7b4c" }}>
            <p style={{ margin: 0 }}>{f.fact}</p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>Source: {f.sourceQuote}</p>
          </div>
        ))}
      </div>

      {/* AI BUTTON */}
      <div style={{ ...sectionStyle("#f0f6fd"), borderLeft: "5px solid #1e7b4c" }}>
        <h3 style={h3Style}>Chambua kwa AI</h3>
        <p style={{ margin: "0 0 0.75rem 0", fontSize: "0.9rem", color: "#555" }}>
          Bonyeza ili AI ichambue habari hii kwa template yetu.
        </p>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          style={{ background: "#1e7b4c", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "999px", fontWeight: 700, cursor: loading ? "wait" : "pointer", opacity: loading ? 0.6 : 1 }}
        >
          {loading ? "Inachambua..." : "Chambua kwa AI"}
        </button>
        {error && (
          <div style={{ background: "#fef2f2", borderLeft: "4px solid #dc2626", borderRadius: "var(--radius-md)", padding: "0.75rem", marginTop: "0.75rem", fontSize: "0.85rem", color: "#991b1b" }}>
            Kosa: {error}
          </div>
        )}
      </div>

      {/* ANALYSIS */}
      {template.analysis.whatHappened && (
        <div style={sectionStyle()}>
          <h3 style={h3Style}>4. Uchambuzi</h3>
          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>① What Happened?</p>
          <p style={{ margin: 0 }}>{template.analysis.whatHappened}</p>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>② Why Does It Matter?</p>
          <p style={{ margin: 0 }}>{template.analysis.whyItMatters}</p>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>③ Who Is Affected?</p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
            {template.analysis.whoIsAffected.map((w, i) => <li key={i}>{w}</li>)}
          </ul>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>④ How Can It Affect Investors?</p>
          <p style={{ margin: 0 }}>{template.analysis.investorImplications}</p>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>⑤ Relevant Sectors & Companies</p>
          <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Sectors:</strong> {template.analysis.relevantSectors.join(", ")}</p>
          <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Companies:</strong> {template.analysis.relevantCompanies.join(", ")}</p>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>⑥ What Should Investors Watch?</p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
            {template.analysis.whatToWatch.map((w, i) => <li key={i}>{w}</li>)}
          </ul>

          <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#991b1b" }}>⑦ What We Cannot Conclude</p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#991b1b" }}>
            {template.analysis.whatWeCannotConclude.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      )}

      {template.impactLevel && (
        <div style={sectionStyle()}>
          <h3 style={h3Style}>5 & 6. Impact & Confidence</h3>
          <p style={{ margin: "0.25rem 0" }}><strong>Impact Level:</strong> {template.impactLevel}</p>
          <p style={{ margin: "0.25rem 0", fontSize: "0.9rem", color: "#555" }}>{template.impactReason}</p>
          <p style={{ margin: "0.5rem 0 0.25rem 0" }}><strong>Confidence:</strong> {template.confidence}</p>
          <p style={{ margin: "0.25rem 0", fontSize: "0.9rem", color: "#555" }}>{template.confidenceReason}</p>
        </div>
      )}
    </main>
  );
}

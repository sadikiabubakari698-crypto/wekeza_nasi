"use client";
import { useState } from "react";
import { createEmptyTemplate, updateStatus, STATUSES, IMPACT_LEVELS, CONFIDENCE_LEVELS } from "../../../lib/analysis-template";

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
        originalDocument: "BOT imepandisha policy rate kutoka 5.5% hadi 6.0%, kuanzia 1 Novemba 2026.",
        originalLink: "https://www.bot.go.tz/",
      },
      headline: "BOT yapandisha policy rate kwa 0.5%",
      content: "Bank of Tanzania imetangaza kupandisha policy rate kutoka 5.5% hadi 6.0%, kuanzia 1 Novemba 2026. Uamuzi huu unalenga kudhibiti mfumuko wa bei.",
      contentAvailable: "full",
      contentSource: "https://www.bot.go.tz/",
      facts: [
        { fact: "BOT imepandisha policy rate kutoka 5.5% hadi 6.0%", sourceQuote: "BOT official statement", supported: true },
        { fact: "Mabadiliko yanaanza 1 Novemba 2026", sourceQuote: "BOT official statement", supported: true },
      ],
      analysis: {
        whatHappened: "BOT imepandisha policy rate kutoka 5.5% hadi 6.0%, kuanzia 1 Novemba 2026.",
        whyItMatters: "Policy rate inaathiri gharama ya fedha nchini. Kupanda kwake kunaweza kuongeza gharama za mikopo kwa benki na wateja.",
        whoIsAffected: ["Benki", "Wakopaji", "Biashara", "Wawekezaji", "Sekta za uzalishaji"],
        investorImplications: "Kupanda kwa policy rate kunaweza kuathiri faida ya benki kwa njia mbili: gharama ya fedha inaweza kupanda, na mapato ya riba yanaweza kupanda. Athari halisi inategemea jinsi benki zinavyoweza kubadilisha gharama kwa wateja.",
        relevantSectors: ["Benki", "Fedha"],
        relevantCompanies: ["CRDB", "NMB", "NBC", "Stanbic", "Exim", "Absa"],
        whatToWatch: ["Interest income ya benki", "Cost of funding", "Loan growth", "Asset quality (NPL ratio)", "Profitability (ROE, NIM)"],
        whatWeCannotConclude: [
          "Hatuwezi kusema CRDB itapanda au itashuka",
          "Hatuwezi kusema faida ya benki itapanda au itashuka",
          "Hatuwezi kusema mwekezaji anunue au akuze",
          "Athari halisi itategemea factors nyingine (ushindani, sera za benki, hali ya uchumi)",
        ],
        evidence: [
          { claim: "BOT imepandisha policy rate", source: "BOT official statement", supported: true },
          { claim: "Hii itafanya CRDB share price ishuke", source: null, supported: false, reason: "Source haijasema hivyo" },
        ],
      },
      impactLevel: "HIGH",
      impactReason: "Policy rate inaathiri sekta nzima ya benki — ambayo ni sekta kubwa kwenye DSE.",
      confidence: "HIGH",
      confidenceReason: "Source ni rasmi (BOT). Facts zote zina source.",
      status: "AI_DRAFT",
      statusHistory: [
        { status: "NEW", tarehe: "2026-10-04T10:00:00Z" },
        { status: "ANALYZING", tarehe: "2026-10-04T10:05:00Z" },
        { status: "AI_DRAFT", tarehe: "2026-10-04T10:10:00Z" },
      ],
    };
  });

  const pageStyle = { padding: "2rem", maxWidth: "750px", margin: "0 auto", fontFamily: "var(--font-sans)", color: "#1a1a1a", background: "#ffffff", minHeight: "100vh" };

  const sectionStyle = (color) => ({
    background: color || "#ffffff",
    border: "1px solid #e9edf2",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem",
    marginBottom: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  });

  const h3Style = { fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", marginTop: 0, marginBottom: "0.75rem", borderBottom: "1px solid #e9edf2", paddingBottom: "0.4rem" };

  const badgeStyle = (level) => {
    const colors = {
      HIGH: { bg: "#fef2f2", color: "#991b1b", text: "HIGH" },
      MEDIUM: { bg: "#fef8ee", color: "#d48d3b", text: "MEDIUM" },
      LOW: { bg: "#f0fdf4", color: "#166534", text: "LOW" },
    };
    return colors[level] || colors.MEDIUM;
  };

  const handleApprove = () => {
    setTemplate(updateStatus(template, STATUSES.APPROVED));
    setTemplate((t) => ({ ...t, founderReview: { status: "APPROVED", tarehe: new Date().toISOString(), maoni: "", edits: "" } }));
  };

  const handleReject = () => {
    setTemplate(updateStatus(template, STATUSES.REJECTED));
    setTemplate((t) => ({ ...t, founderReview: { status: "REJECTED", tarehe: new Date().toISOString(), maoni: "", edits: "" } }));
  };

  const impactBadge = badgeStyle(template.impactLevel);
  const confidenceBadge = badgeStyle(template.confidence);

  return (
    <main style={pageStyle}>
      <h1 style={{ marginBottom: "0.25rem" }}>Dashboard ya Chief — v2</h1>
      <p style={{ color: "#555555", marginTop: 0, marginBottom: "1.5rem" }}>
        Uchambuzi wa habari kwa template ya WEKEZA NASI.
      </p>

      {/* STATUS */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <span style={{ background: "#f3f7fb", color: "#1a1a1a", padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>
          Status: {template.status}
        </span>
        <span style={{ background: impactBadge.bg, color: impactBadge.color, padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
          Impact: {impactBadge.text}
        </span>
        <span style={{ background: confidenceBadge.bg, color: confidenceBadge.color, padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
          Confidence: {confidenceBadge.text}
        </span>
      </div>

      {/* SEHEMU 1: SOURCE */}
      <div style={sectionStyle()}>
        <h3 style={h3Style}>1. Source</h3>
        <p style={{ margin: "0.25rem 0" }}><strong>Jina:</strong> {template.source.jina}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>Aina:</strong> {template.source.aina}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>Tarehe:</strong> {template.source.tarehe}</p>
        <p style={{ margin: "0.25rem 0" }}><strong>URL:</strong> {template.source.url}</p>
      </div>

      {/* SEHEMU 2: HEADLINE */}
      <div style={sectionStyle()}>
        <h3 style={h3Style}>2. Habari</h3>
        <p style={{ margin: "0.25rem 0", fontWeight: 700, fontSize: "1.1rem" }}>{template.headline}</p>
        <p style={{ margin: "0.5rem 0", color: "#555555" }}>{template.content}</p>
        <p style={{ margin: "0.25rem 0", fontSize: "0.8rem", color: "#888" }}>Content: {template.contentAvailable}</p>
      </div>

      {/* SEHEMU 3: FACTS */}
      <div style={sectionStyle()}>
        <h3 style={h3Style}>3. Facts</h3>
        {template.facts.map((f, i) => (
          <div key={i} style={{ marginBottom: "0.5rem", paddingLeft: "0.5rem", borderLeft: "3px solid #1e7b4c" }}>
            <p style={{ margin: 0 }}>{f.fact}</p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>Source: {f.sourceQuote} — {f.supported ? "Supported" : "Not supported"}</p>
          </div>
        ))}
      </div>

      {/* SEHEMU 4: ANALYSIS */}
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

        <p style={{ margin: "0.75rem 0 0.25rem 0", fontWeight: 700, color: "#1e7b4c" }}>⑧ Evidence</p>
        {template.analysis.evidence.map((e, i) => (
          <div key={i} style={{ marginBottom: "0.5rem", paddingLeft: "0.5rem", borderLeft: "3px solid " + (e.supported ? "#1e7b4c" : "#dc2626") }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>{e.claim}</p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>
              {e.supported ? "✓ Supported" : "✗ Not supported"} — {e.source || e.reason}
            </p>
          </div>
        ))}
      </div>

      {/* SEHEMU 5 & 6: IMPACT & CONFIDENCE */}
      <div style={sectionStyle()}>
        <h3 style={h3Style}>5 & 6. Impact & Confidence</h3>
        <p style={{ margin: "0.25rem 0" }}><strong>Impact Level:</strong> {template.impactLevel}</p>
        <p style={{ margin: "0.25rem 0", fontSize: "0.9rem", color: "#555" }}>{template.impactReason}</p>
        <p style={{ margin: "0.5rem 0 0.25rem 0" }}><strong>Confidence:</strong> {template.confidence}</p>
        <p style={{ margin: "0.25rem 0", fontSize: "0.9rem", color: "#555" }}>{template.confidenceReason}</p>
      </div>

      {/* SEHEMU 8: FOUNDER DECISION */}
      <div style={{ ...sectionStyle("#f0f6fd"), borderLeft: "5px solid #1e7b4c" }}>
        <h3 style={h3Style}>8. Founder Decision</h3>
        <p style={{ margin: "0.25rem 0" }}><strong>Status:</strong> {template.founderReview.status}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
          <button onClick={handleApprove} style={{ background: "#1e7b4c", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "999px", fontWeight: 700, cursor: "pointer" }}>
            Approve
          </button>
          <button onClick={handleReject} style={{ background: "#fff", color: "#991b1b", border: "1.5px solid #991b1b", padding: "0.6rem 1.2rem", borderRadius: "999px", fontWeight: 700, cursor: "pointer" }}>
            Reject
          </button>
        </div>
      </div>
    </main>
  );
}

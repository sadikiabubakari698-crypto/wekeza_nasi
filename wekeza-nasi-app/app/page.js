import { getAllPlannedItems } from "../lib/content-engine";
import MonthlyContent from "../components/MonthlyContent";

export default function Home() {
  const allPlanned = getAllPlannedItems();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>WEKEZA NASI</h1>
      <p>Jenga maarifa. Jenga uwezo.</p>

      <div className="anza-hapa">
        <h2 style={{ marginTop: 0 }}>Mpya WEKEZA NASI?</h2>
        <p>Tuanze safari yetu hapa, hatua kwa hatua.</p>
        <a href="/somo1">Anza na Somo la 1: Hisa ni nini? &rarr;</a>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Safari Yangu</h2>
      <a href="/academy" className="area-card">
        <h3>Academy</h3>
        <p style={{ margin: 0 }}>Jifunze uwekezaji hatua kwa hatua.</p>
      </a>
      <a href="/soko" className="area-card">
        <h3>Uchambuzi wa Soko</h3>
        <p style={{ margin: 0 }}>Nini kimetokea? Kwa nini? Ushahidi unasemaje?</p>
      </a>
      <a href="/kampuni" className="area-card">
        <h3>Uchambuzi wa Kampuni</h3>
        <p style={{ margin: 0 }}>Jifunze kampuni zinavyofanya kazi na kutengeneza fedha.</p>
      </a>
      <div className="area-card-soon">
        <h3>AI</h3>
        <p style={{ margin: 0 }}>Inakuja hivi karibuni.</p>
      </div>
      <div className="area-card-soon">
        <h3>Community</h3>
        <p style={{ margin: 0 }}>Inakuja hivi karibuni.</p>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Somo la Mwezi</h2>
      <MonthlyContent items={allPlanned} />
    </main>
  );
}

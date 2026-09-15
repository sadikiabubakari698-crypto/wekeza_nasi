export default function Loading() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "#ffffff",
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "4px solid #e9edf2",
          borderTop: "4px solid #1e7b4c",
          borderRadius: "50%",
          margin: "0 auto 1rem",
          animation: "spin 0.8s linear infinite",
        }} />
        <p style={{ color: "#555555", margin: 0, fontSize: "0.9rem" }}>
          Inapakia...
        </p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </main>
  );
}

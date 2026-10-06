import PlacementTest from "../../../components/PlacementTest";

export const metadata = {
  title: "Pima Kiwango Chako",
  description: "Jibu maswali machache ili ujue unapaswa kuanzia somo gani la uwekezaji.",
};

export default function Page() {
  return (
    <main id="main-content" style={{ background: "#ffffff", color: "#1a1a1a", minHeight: "60vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem 0.75rem" }}>
        <PlacementTest />
      </div>
    </main>
  );
}

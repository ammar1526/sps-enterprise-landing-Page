import Navbar from "@/components/layout/Navbar";
import ComplianceHero from "./components/ComplianceHero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <ComplianceHero />
      <Footer />
    </main>
  );
}

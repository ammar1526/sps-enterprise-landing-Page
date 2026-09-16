import Navbar from "@/components/layout/Navbar";
import HealthcareHero from "./components/HealthcareHero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <HealthcareHero />
      <Footer />
    </main>
  );
}

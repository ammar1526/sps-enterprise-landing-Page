import Navbar from "@/components/layout/Navbar";
import BmsHero from "./components/BmsHero";
import BmsContent from "./components/BmsContent";
import BenefitsSection from "./components/BenefitSection";
import Bma from "./components/Bma";
import Stat from "./components/Stat";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <BmsHero />
      <BmsContent />
      <BenefitsSection />
      <Bma />
      <Stat />
      <Footer />
    </main>
  );
}

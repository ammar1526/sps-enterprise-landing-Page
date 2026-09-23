import Navbar from "@/components/layout/Navbar";
import VitaHero from "./components/VitaHero";
import VitaMainContent from "./components/VitaMainContent";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <VitaHero />
      <VitaMainContent />
      <Footer />
    </div>
  );
}

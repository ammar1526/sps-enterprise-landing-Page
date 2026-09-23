import Navbar from "@/components/layout/Navbar";
import IndustryHero from "./components/IndustryHero";
import IndustryInfo from "./components/Industryinfo";
import IndustryTechHub from "./components/IndustryTechHub";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <IndustryHero />
      <IndustryInfo />
      <IndustryTechHub />
      <Footer />
    </main>
  );
}

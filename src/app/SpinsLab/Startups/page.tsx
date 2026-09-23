import Navbar from "@/components/layout/Navbar";
import StartupsHero from "./components/StartupsHero";
import StartupsInfo from "./components/StartupsInfo";
import ComprehensiveGrid from "@/components/sections/ComprehensiveGrid";
import StartupsTech from "./components/StartupsTech";
import StartupsTechHub from "./components/StartupsTechHub";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <StartupsHero />
      <StartupsInfo />
      <ComprehensiveGrid />
      <StartupsTech />
      <StartupsTechHub />
      <Footer />
    </main>
  );
}

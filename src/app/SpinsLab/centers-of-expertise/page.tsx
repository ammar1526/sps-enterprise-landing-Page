import Navbar from "@/components/layout/Navbar";
import ExpertiseHero from "./components/ExpertiseHero";
import ExpertiseInfo from "./components/ExpertiseInfo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <ExpertiseHero />
      <ExpertiseInfo />
      <Footer />
    </main>
  );
}

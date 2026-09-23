import Navbar from "@/components/layout/Navbar";
import HealthHero from "./components/healthHero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <HealthHero />
      <Footer />
    </main>
  );
}

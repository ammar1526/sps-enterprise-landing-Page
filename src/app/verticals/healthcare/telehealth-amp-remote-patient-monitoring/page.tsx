import Navbar from "@/components/layout/Navbar";
import TelehealthHero from "./components/TelehealthHero";
import TelehealthInfo from "./components/TeleHealthInfo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <TelehealthHero />
      <TelehealthInfo />
      <Footer />
    </main>
  );
}

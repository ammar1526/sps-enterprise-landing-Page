import Navbar from "@/components/layout/Navbar";
import TelecosHero from "./components/TelecosHero";
import TelecosServices from "./components/TelecosServices";
import TelecosInfo from "./components/TelecosInfo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <TelecosHero />
      <TelecosServices />
      <TelecosInfo />
      <Footer />
    </main>
  );
}

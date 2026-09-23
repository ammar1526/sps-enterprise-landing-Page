import Navbar from "@/components/layout/Navbar";
import RoundtableHero from "./components/RoundHero";
import RoundAbout from "./components/RoundAbout";
import RoundAgenda from "./components/RoundAgenda";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <RoundtableHero />
      <RoundAbout />
      <RoundAgenda />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import SmaasHero from "./components/SmaasHero";
import SmaasCards from "./components/SmaasCards";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <SmaasHero />
      <SmaasCards />
      <Footer />
    </main>
  );
}

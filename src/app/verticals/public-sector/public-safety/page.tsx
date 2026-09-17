import Navbar from "@/components/layout/Navbar";
import PublicHero from "./components/PublicHero";
import PublicServices from "./components/PublicServices";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <PublicHero />
      <PublicServices />
      <Footer />
    </main>
  );
}

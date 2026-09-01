import Navbar from "@/components/layout/Navbar";
import DetailedHero from "./components/DetailedHero";
import DetailedMain from "./components/DetailedMain";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <DetailedHero />
      <DetailedMain />
      <Footer />
    </main>
  );
}

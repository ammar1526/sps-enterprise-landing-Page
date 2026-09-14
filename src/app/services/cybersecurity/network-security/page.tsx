import Navbar from "@/components/layout/Navbar";
import NetworkHero from "./components/NetworkHero";
import NetworkCards from "./components/NetworkCards";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <NetworkHero />
      <NetworkCards />
      <Footer />
    </main>
  );
}

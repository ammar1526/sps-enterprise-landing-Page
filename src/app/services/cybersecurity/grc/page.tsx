import Navbar from "@/components/layout/Navbar";
import GrcHero from "./components/GrcHero";
import GrcCards from "./components/GrcCards";
import GrcCustomers from "./components/GrcCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <GrcHero />
      <GrcCards />
      <GrcCustomers />
      <Footer />
    </main>
  );
}

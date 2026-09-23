import Navbar from "@/components/layout/Navbar";
import ElectricHero from "./components/ElectricHero";
import ElectricServices from "./components/ElectricServices";
import ElectricCustomers from "./components/ElectricCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <ElectricHero />
      <ElectricServices />
      <ElectricCustomers />
      <Footer />
    </main>
  );
}

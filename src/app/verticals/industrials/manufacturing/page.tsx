import Navbar from "@/components/layout/Navbar";
import ManufactureHero from "./components/ManufactureHero";
import ManufactureServices from "./components/ManufactureServices";
import ManufactureProducts from "./components/ManufactureProducts";
import ManufactureCustomers from "./components/ManufactureCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <ManufactureHero />
      <ManufactureServices />
      <ManufactureProducts />
      <ManufactureCustomers />
      <Footer />
    </main>
  );
}

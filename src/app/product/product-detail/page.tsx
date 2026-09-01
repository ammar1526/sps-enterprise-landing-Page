import Navbar from "@/components/layout/Navbar";
import DetailHero from "./components/DetailHero";
import DetailTech from "./components/DetailTech";
import DetailProduct from "./components/DetailProduct";
import DetailOurProduct from "./components/DetailOurProduct";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <DetailHero />
      <DetailTech />
      <DetailProduct />
      <DetailOurProduct />
      <Footer />
    </main>
  );
}

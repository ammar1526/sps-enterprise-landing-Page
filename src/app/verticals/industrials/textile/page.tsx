import Navbar from "@/components/layout/Navbar";
import TextileHero from "./components/TextileHero";
import TextileServices from "./components/TextileServices";
import TextileInfo from "./components/TextileInfo";
import TextileCustomers from "./components/TextileCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <TextileHero />
      <TextileServices />
      <TextileInfo />
      <TextileCustomers />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import CountyHero from "./components/CountyHero";
import CountyServices from "./components/CountyServices";
import CountyInfo from "./components/CountyInfo";
import CountyCustomers from "./components/CountyCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <CountyHero />
      <CountyServices />
      <CountyInfo />
      <CountyCustomers />
      <Footer />
    </main>
  );
}

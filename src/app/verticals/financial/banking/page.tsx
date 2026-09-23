import Navbar from "@/components/layout/Navbar";
import BankHero from "./components/BankHero";
import BankServices from "./components/BankServices";
import BankCustomers from "./components/BankCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <BankHero />
      <BankServices />
      <BankCustomers />
      <Footer />
    </main>
  );
}

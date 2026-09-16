import Navbar from "@/components/layout/Navbar";
import GovernmentHero from "./components/GovernHero";
import GovernInfo from "./components/GovernInfo";
import GovernCustomers from "./components/GovernCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <GovernmentHero />
      <GovernInfo />
      <GovernCustomers />
      <Footer />
    </main>
  );
}

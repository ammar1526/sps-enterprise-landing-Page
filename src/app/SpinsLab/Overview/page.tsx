import Navbar from "@/components/layout/Navbar";
import OverviewHero from "./components/OverviewHero";
import OverviewInfo from "./components/OverviewInfo";
import OverviewAcademia from "./components/OverviewAcademia";
import OverviewTechhub from "./components/OverviewTechhub";
import OverviewCustomers from "./components/OverviewCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <OverviewHero />
      <OverviewInfo />
      <OverviewAcademia />
      <OverviewTechhub />
      <OverviewCustomers />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import AcademiaHero from "./components/AcademiaHero";
import AcademiaInfo from "./components/AcademiaInfo";
import AcademiaTechHub from "./components/AcademiaTechHub";
import AcademiaCustomers from "./components/AcademiaCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <AcademiaHero />
      <AcademiaInfo />
      <AcademiaTechHub />
      <AcademiaCustomers />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import CareerHero from "./components/CareerHero";
import CareerDropdown from "./components/CareerDropdown";
import CareerOpportunities from "./components/CareerOpportunities";
import CareerValues from "./components/CareerValues";
import CareerDiversity from "./components/CareerDiversity";
import CareerBenefits from "./components/CareerBenefits";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <CareerHero />
      <CareerDropdown />
      <CareerOpportunities />
      <CareerValues />
      <CareerDiversity />
      <CareerBenefits />
      <Footer />
    </div>
  );
}

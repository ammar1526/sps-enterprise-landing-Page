import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StartupsSection from "@/components/sections/StartupSection";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ProductsSection from "@/components/sections/ProductsSection";
import RequestForm from "@/components/sections/RequestForm";
import HowItWorks from "@/components/sections/HowItWorks";
import TechPartners from "@/components/sections/TechPartners";
import AwardBanner from "@/components/sections/AwardBanner";
import ClientLogos from "@/components/sections/ClientLogos";
import NewsSection from "@/components/sections/NewsSection";
import ComprehensiveGrid from "@/components/sections/ComprehensiveGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StartupsSection />
      <SolutionsGrid />
      <ProductsSection />
      <RequestForm />
      <HowItWorks />
      <TechPartners />
      <AwardBanner />
      <ClientLogos />
      <NewsSection />
      <ComprehensiveGrid />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import ContactHero from "./components/ContactHero";
import ContactContent from "./components/ContactContent";
import Global from "./components/Global";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Global />
      <Footer />
    </div>
  );
}

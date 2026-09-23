import Navbar from "@/components/layout/Navbar";
import InternshipHero from "./components/InternHero";
import InternDropdown from "./components/InternDropdown";
import InternPhases from "./components/InternPhases";
import InternAreas from "./components/InternAreas";
import InternGuide from "./components/InternGuide";
import InternFaq from "./components/InternFaq";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <InternshipHero />
      <InternDropdown />
      <InternPhases />
      <InternAreas />
      <InternGuide />
      <InternFaq />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import AutomationHero from "./components/AutomationHero";
import AutomationAbout from "./components/AutomationAbout";
import AutomationSolution from "./components/AutomationSolution";
import AutomationIbm from "./components/AutomationIbm";
import AutomationWorkflow from "./components/AutomationWorkflow";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <AutomationHero />
      <AutomationAbout />
      <AutomationSolution />
      <AutomationIbm />
      <AutomationWorkflow />
      <Footer />
    </main>
  );
}

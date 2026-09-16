import Navbar from "@/components/layout/Navbar";
import DataHero from "./components/DataHero";
import DataCards from "./components/DataCards";
import DataTechPartners from "./components/DataTechPartners";
import DataPortfolio from "./components/DataPortfolio";
import DataStat from "./components/DataStat";
import DataRoadmap from "./components/DataRoadmap";
import ScheduleMeeting from "./components/ScheduleMeeting";
import DataCustomers from "./components/DataCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <DataHero />
      <DataCards />
      <DataTechPartners />
      <DataPortfolio />
      <DataStat />
      <DataRoadmap />
      <ScheduleMeeting />
      <DataCustomers />
      <Footer />
    </main>
  );
}

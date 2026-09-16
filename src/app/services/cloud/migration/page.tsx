import Navbar from "@/components/layout/Navbar";
import MigrationHero from "./components/MigrationHero";
import MigrationProducts from "./components/MigrationProducts";
import ScheduleMeeting from "./components/ScheduleMeeting";
import MigrationCustomers from "./components/MigrationCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <MigrationHero />
      <MigrationProducts />
      <ScheduleMeeting />
      <MigrationCustomers />
      <Footer />
    </main>
  );
}

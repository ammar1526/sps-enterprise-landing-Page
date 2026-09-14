import Navbar from "@/components/layout/Navbar";
import DevopsHero from "./components/DevopsHero";
import DevopsProducts from "./components/DevopsProducts";
import ScheduleMeeting from "./components/ScheduleMeeting";
import DevopsCustomers from "./components/DevopsCustomers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-white antialiased">
      <Navbar />
      <DevopsHero />
      <DevopsProducts />
      <ScheduleMeeting />
      <DevopsCustomers />
      <Footer />
    </main>
  );
}

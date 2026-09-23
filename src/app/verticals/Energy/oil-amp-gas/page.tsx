import Navbar from "@/components/layout/Navbar";
import OilHero from "./components/OilHero";
import OilServices from "./components/OilServices";
import OilMeeting from "./components/OilMeeting";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <OilHero />
      <OilServices />
      <OilMeeting />
      <Footer />
    </main>
  );
}

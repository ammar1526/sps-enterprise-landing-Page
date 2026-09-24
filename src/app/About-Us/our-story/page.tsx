import Navbar from "@/components/layout/Navbar";
import StoryHero from "./components/StoryHero";
import StoryVision from "./components/StoryVision";
import StoryWhoWeAre from "./components/StoryWhoWeAre";
import StoryHighlights from "./components/StoryHighlights";
import StoryAwards from "./components/StoryAwards";
import StoryProcess from "./components/StoryProcess";
import StorySharing from "./components/StorySharing";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <StoryHero />
      <StoryVision />
      <StoryWhoWeAre />
      <StoryHighlights />
      <StoryAwards />
      <StoryProcess />
      <StorySharing />
      <Footer />
    </div>
  );
}

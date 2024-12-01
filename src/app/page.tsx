import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Callout from "@/components/Callout";
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-white">
        <Hero />
        <VideoSection />
        <Callout />
      </main>
    </>
  );
}

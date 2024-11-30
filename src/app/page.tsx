import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-white">
        <Hero />
        <VideoSection />
      </main>
    </>
  );
}

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Callout from "@/components/Callout";
import CallToAction from "@/components/CallToAction";
import LeadMag from "@/components/LeadMag";
import Testimonials from "@/components/Testimonials";
import Donate from "@/components/Donate";
import Workshops from "@/components/Workshops";
import Team_home from "@/components/Team_home"; 
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-brand-white">
        <Hero />
        <VideoSection />
        <Callout />
        <CallToAction />
        <LeadMag />
        <Testimonials />
        <Donate />
        <Workshops />
        <Team_home />
        <Footer />
      </main>
    </>
  );
}

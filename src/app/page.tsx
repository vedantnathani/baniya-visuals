import IntroPreloader from "@/components/IntroPreloader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import SelectedWork from "@/components/SelectedWork";
import ServicesAccordion from "@/components/ServicesAccordion";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ScrollNotes from "@/components/ScrollNotes";
import ContactSection from "@/components/ContactSection";
import NowWidget from "@/components/NowWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <IntroPreloader />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <MarqueeStrip />
        <SelectedWork />
        <ServicesAccordion />
        <PricingSection />
        <AboutSection />
        <ScrollNotes />
        <ContactSection />
      </main>

      <NowWidget />
      <Footer />
    </SmoothScroll>
  );
}

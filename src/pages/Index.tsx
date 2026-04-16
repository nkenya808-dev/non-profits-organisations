import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import CausesSection from "@/components/CausesSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowToHelpSection from "@/components/HowToHelpSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <CausesSection />
      <ProgramsSection />
      <HowToHelpSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvocationSection from "@/components/ProvocationSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ClosingCTASection from "@/components/ClosingCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f9f8f3] min-h-screen">
      <Navbar />
      <HeroSection />
      <ProvocationSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ClosingCTASection />
      <Footer />
    </main>
  );
}

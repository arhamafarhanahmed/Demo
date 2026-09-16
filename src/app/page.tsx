import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <TrustBar />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustedPartners from "@/components/TrustedPartners";
import Philosophy from "@/components/Philosophy";
import VisionMission from "@/components/VisionMission";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TrustedPartners />
      <Philosophy />
      <VisionMission />
      <Process />
      <Portfolio />
      <Team />
      <Trust />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingElements />
    </main>
  );
}


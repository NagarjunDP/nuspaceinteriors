import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FeaturedProject from "@/components/FeaturedProject";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";
import Trust from "@/components/Trust";
import InstagramGallery from "@/components/InstagramGallery";
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
      <Portfolio />
      <Process />
      <FeaturedProject />
      <Testimonials />
      <Quiz />
      <Trust />
      <InstagramGallery />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingElements />
    </main>
  );
}

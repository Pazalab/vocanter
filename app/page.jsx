import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/navigation/Navbar";
import Solutions from "./components/Solutions";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
             <Navbar />
             <HeroSection />
             <AboutSection />
             <Solutions />
             <CaseStudies />
             <Testimonials />
             <ContactSection />
             <Footer />
    </main>
  );
}

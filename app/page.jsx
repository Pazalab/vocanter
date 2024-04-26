
import styles from "./page.module.css";
import Header from "./components/navigation/Header"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/navigation/Navbar";
import Solutions from "./components/Solutions";
export default function Home() {
  return (
    <main>
             <Navbar />
             <HeroSection />
             <AboutSection />
             <Solutions />
    </main>
  );
}


import styles from "./page.module.css";
import Header from "./components/navigation/Header"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/navigation/Navbar";
export default function Home() {
  return (
    <main>
             <Navbar />
             <HeroSection />
             <AboutSection />
    </main>
  );
}

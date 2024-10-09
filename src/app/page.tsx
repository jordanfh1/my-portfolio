import EasterEgg from "@/components/EasterEgg/EasterEgg";
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import About from  "@/components/About/About";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <EasterEgg />
    <Footer />
    </>
  );
}

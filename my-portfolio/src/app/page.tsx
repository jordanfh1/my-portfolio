import Image from "next/image";
import styles from "./page.module.css";
import EasterEgg from "@/components/EasterEgg/EasterEgg";
import Hero from '@/components/Hero/Hero'
import Skills from '@/components/Skills/Skills'
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import About from  "@/components/About/About";


export default function Home() {
  return (
    <>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <EasterEgg />
    </>
  );
}

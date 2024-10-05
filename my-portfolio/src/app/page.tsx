import Image from "next/image";
import styles from "./page.module.css";
import EasterEgg from "@/components/EasterEgg/EasterEgg";
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <>
    <Hero />
    <EasterEgg />
    </>
  );
}

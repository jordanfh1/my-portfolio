import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.grid} aria-hidden="true" />
    <div className={styles.glow} aria-hidden="true" />

    <div className={styles.heroContent}>
      <p className={styles.eyebrow}>Software Developer</p>

      <h1 className={styles.title}>
        <span>Hey, I&apos;m Jordan</span>
        <span className={styles.titleAccent}>Houghton.</span>
      </h1>

      <p className={styles.subtitle}>
        I build practical software with{" "}
        <span>React</span>, <span>TypeScript</span> and{" "}
        <span>Next.js</span>.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.primaryButton}>
          View my work
          <span>↗</span>
        </a>

        <a href="#contact" className={styles.secondaryButton}>
          Let&apos;s talk
        </a>
      </div>
    </div>

    <div className={styles.scrollIndicator}>
      <span>Scroll to explore</span>
      <div className={styles.scrollLine} />
    </div>
  </section>
);

export default Hero;
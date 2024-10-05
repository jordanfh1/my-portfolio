import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.backgroundAnimation}></div>
    <h1 className={styles.title}><span className={styles.span}>Hey, I'm Jordan  <br />Houghton</span></h1>
    <p className={styles.subtitle}>Software Developer | React | TypeScript | Jazz</p>
  </section>
);

export default Hero;

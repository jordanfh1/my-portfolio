import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar} aria-label="Main navigation">
      <a href="/" className={styles.logo}>
        <span className={styles.logoBracket}>[</span>
        JH
        <span className={styles.logoBracket}>]</span>
      </a>

      <div className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>
          About
        </a>

        <a href="#skills" className={styles.navLink}>
          Skills
        </a>

        <a href="#projects" className={styles.navLink}>
          Projects
        </a>

        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </div>

      <a href="#contact" className={styles.contactButton}>
        Let's talk
        <span>↗</span>
      </a>
    </nav>
  </header>
);

export default Header;
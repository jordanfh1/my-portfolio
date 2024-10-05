import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <div className={styles.logo}><a href="/">Jordan Houghton</a></div>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#skills" className={styles.navLink}>Skills</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </div>
    </nav>
  </header>
);

export default Header;

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.logo}>
          <span>[</span>JH<span>]</span>
        </span>

        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/jordan-houghton-2441711ba/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a
            href="https://github.com/jordanfh1"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Jordan Houghton</span>
        <span>Built with Next.js &amp; TypeScript</span>
      </div>
    </div>
  </footer>
);

export default Footer;
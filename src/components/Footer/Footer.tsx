import React from "react";
import styles from "./Footer.module.css";


const Footer = () => (
    <section id="footer" className={styles.footer}>
        <div className={styles.container}>
            
            <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/jordan-houghton-2441711ba/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin">LinkedIn</i>
        </a>
        <a href="https://github.com/jordanfh1" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github">GitHub</i>
        </a>
        
      </div>
        </div>
    </section>
    );

    export default Footer;
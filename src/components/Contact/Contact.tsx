import styles from './Contact.module.css';
import React from 'react';


const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className="container">
      <h2>Contact</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" className={styles.inputField} required />
        <input type="email" placeholder="Your Email" className={styles.inputField} required />
        <textarea placeholder="Your Message" className={styles.textareaField} rows={5} required></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
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

export default Contact;

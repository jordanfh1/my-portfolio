import React from 'react';
import styles from './About.module.css';

const About = () => (
    <section id="about" className={styles.about}>
        <div>
            <h2 className={styles.h2}>About</h2>
            <p className={styles.p}>I am a musician turned software developer.</p> 
            <p className={styles.p}>Following my passion for creativity and technology, attempting to solve problems with fun creative ideas.</p>
        </div>
    </section>
);

export default About;
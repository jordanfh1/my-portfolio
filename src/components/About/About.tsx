import styles from "./About.module.css";

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>01 / About</span>

        <h2>
          From music
          <br />
          <span>to software.</span>
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            I&apos;m a musician turned software developer, with a background
            in Commercial Music and years of experience teaching and creating
            music.
          </p>
        </div>

        <div className={styles.story}>
          <p>
            I eventually found the same creative problem-solving I enjoyed in
            music in software development. Now I enjoy building practical
            applications, automating repetitive processes and turning messy
            problems into simple, usable solutions.
          </p>

          <p>
            I like working across the stack, learning by building and finding
            better ways to make technology genuinely useful.
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        <span className={styles.footerLabel}>Currently working with</span>

        <div className={styles.technologies}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>PostgreSQL</span>
          <span>Automation</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;
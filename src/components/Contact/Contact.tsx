"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkonyvg");

  if (state.succeeded) {
    return (
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.success}>
            <span className={styles.successNumber}>✓</span>

            <span className={styles.eyebrow}>Message sent</span>

            <h2>
              Thanks for
              <br />
              getting in touch.
            </h2>

            <p>
              Your message has made its way through the internet and into my
              inbox. I&apos;ll get back to you as soon as I can.
            </p>

            <a href="/" className={styles.backButton}>
              Back to home
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>04 / Contact</span>

          <h2>
            Let&apos;s build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have a project in mind, want to talk software, or just fancy
            saying hello? Send me a message.
          </p>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Your name
              </label>

              <input
                className={styles.input}
                id="name"
                type="text"
                name="name"
                placeholder="Jordan..."
                required
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email address
              </label>

              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Your message
              </label>

              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                placeholder="Tell me a little about what you're working on..."
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className={styles.button}
              type="submit"
              disabled={state.submitting}
            >
              <span>
                {state.submitting ? "Sending..." : "Send message"}
              </span>

              {!state.submitting && <span>↗</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkonyvg");
  if (state.succeeded) {
      return <p>Message Sent!</p>;
  }
  return (
          <div ><h2 className={styles.h2}>Contact</h2>
    <form className={styles.form} onSubmit={handleSubmit}>
      
        <label className={styles.label} htmlFor="name">
        Your name
      </label>
      <input className={styles.input}
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="Name"
        errors={state.errors}
      />

      <label className={styles.label} htmlFor="email">
        Email Address
      </label>
      <input className={styles.input}
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className={styles.label} htmlFor="email">
        Your message
      </label>
      <textarea className={styles.textarea}
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className={styles.button} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
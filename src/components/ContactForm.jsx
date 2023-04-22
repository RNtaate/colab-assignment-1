import React from 'react'

import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
  return (
    <div className={`${styles.contactFormDiv}`}>
      <form
        action="https://formspree.io/f/xpzolzyg"
        method="POST"
        className={`${styles.contactForm} d-flex flex-col`}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="_relpyto"
          autoComplete="off"
          required
        />
        <textarea placeholder="Message" name="message" required />
        <button type="submit" className={styles.contactFormSubmitButton}>
          SEND
        </button>
      </form>
    </div>
  )
}

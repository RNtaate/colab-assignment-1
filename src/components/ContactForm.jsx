import React from 'react'

import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
  return (
    <div className={`${styles.contactFormDiv}`}>
      <form className={`${styles.contactForm} d-flex flex-col`}>
        <input type="text" placeholder="Name" autoComplete="off" />
        <input type="email" placeholder="Email" autoComplete="off" />
        <textarea placeholder="Message" />
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

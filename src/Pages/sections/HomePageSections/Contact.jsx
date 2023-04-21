import React from 'react'

import styles from '../../../styles/Contact.module.css'
import ContactForm from '../../../components/ContactForm'

export default function Contact() {
  return (
    <section
      className={`${styles.contactSection} bg-primary d-flex justify-content-center align-items-center`}
    >
      <ContactForm />
    </section>
  )
}

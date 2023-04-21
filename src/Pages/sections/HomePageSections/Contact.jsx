import React, { useState, useEffect } from 'react'

import styles from '../../../styles/Contact.module.css'
import headerStyles from '../../../styles/Header.module.css'
import ContactForm from '../../../components/ContactForm'

export default function Contact() {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (
        this.window.innerHeight + this.window.scrollY >=
        this.document.body.offsetHeight
      ) {
        setReveal(true)
      } else {
        setReveal(false)
      }
    })

    return () =>
      window.removeEventListener('scroll', function () {
        if (
          this.window.innerHeight + this.window.scrollY >=
          this.document.body.offsetHeight
        ) {
          setReveal(true)
        } else {
          setReveal(false)
        }
      })
  }, [])

  return (
    <section
      className={`${styles.contactSection} bg-primary d-flex justify-content-center align-items-center`}
      style={{ zIndex: reveal ? 0 : -1 }}
    >
      <div
        className={`${styles.contactContainer} d-flex flex-col align-items-center`}
      >
        <h3>CONTACT ME</h3>
        <ContactForm />
        <div
          className={`${headerStyles.headerSocialsDiv} ${styles.contactSocialsDiv} d-flex align-items-center`}
        >
          <a href="https://github.com/RNtaate" target="_blank">
            <span>
              <i class="fa-brands fa-github"></i>
            </span>
          </a>

          <a href="https://linkedin.com/in/roy-ntaate" target="_blank">
            <span>
              <i class="fa-brands fa-linkedin"></i>
            </span>
          </a>
          <a href="https://twitter.com/RNtaate" target="_blank">
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </a>

          <a href="mailto:royhyde14@gmail.com" target="_blank">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

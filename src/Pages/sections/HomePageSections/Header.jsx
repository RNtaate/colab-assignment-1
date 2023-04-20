import React from 'react'

import styles from '../../../styles/Header.module.css'
export default function Header() {
  return (
    <header
      className={`${styles.header} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.heroDiv} d-flex flex-col justify-content-center align-items-center`}
      >
        <h1 className={styles.heroName}>ROY</h1>

        <h2>FULL-STACK WEB DEVELOPER</h2>

        <p>
          👋 Hey there!, I am Roy Ntaate, a Full-Stack Web Developer and tech
          enthusiast who is based in Kampala, Uganda 🇺🇬.
        </p>

        <div className={`${styles.headerSocialsDiv} d-flex align-items-center`}>
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
    </header>
  )
}

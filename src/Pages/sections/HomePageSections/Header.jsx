import React from 'react';

import styles from '../../../styles/Header.module.css';
import profileImage from '../../../assets/profile_photo-min.jpg';
import dots from '../../../assets/dots.svg';

export default function Header() {
  return (
    <header
      className={`${styles.header} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.headerContentsWrapper} d-flex align-items-center justify-content-center`}
      >
        <div className={`${styles.avatarContainer}`}>
          <img className={styles.dotsImg} src={dots} alt="dots" />
          <div className={styles.avatarDiv}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.avatarImg}
            />
          </div>
        </div>
        <div
          className={`${styles.heroDiv} d-flex flex-col justify-content-center align-items-center`}
        >
          <h1
            className={`${styles.heroName}`}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            ROY
          </h1>

          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            FULL-STACK WEB DEVELOPER
          </h2>

          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            👋 Hey there!, I am Roy Ntaate, a Full-Stack Web Developer and tech
            enthusiast who is based in Kampala, Uganda 🇺🇬.
          </p>

          <div
            className={`${styles.headerSocialsDiv} d-flex align-items-center`}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            <a
              href="https://github.com/RNtaate"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fa-brands fa-github" />
              </span>
            </a>

            <a
              href="https://linkedin.com/in/roy-ntaate"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fa-brands fa-linkedin" />
              </span>
            </a>
            <a
              href="https://twitter.com/RNtaate"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fa-brands fa-twitter" />
              </span>
            </a>

            <a
              href="mailto:royhyde14@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fa-solid fa-envelope" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

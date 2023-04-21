import React from 'react'

import styles from '../styles/About.module.css'
import profileImage from '../assets/profile_photo.jpg'

export default function About() {
  return (
    <div className={`${styles.aboutPageMainDiv} bg-secondary`}>
      <div
        className={`${styles.aboutContainer} d-flex flex-col align-items-center`}
      >
        <h1 className={'text-center'}>ABOUT</h1>
        <div
          className={`${styles.aboutDetailsWrapper} d-flex flex-col align-items-center`}
        >
          <div className={`${styles.imageContainer}`}>
            <img src={profileImage} altg="profile image" />
          </div>

          <div className={styles.detailsSection}>
            <p>
              "My name is Roy Ntaate and I am a Full-Stack Web Developer who is
              enthusiastic about technological advancement and highly values
              collaborative programming as well as writing efficient and
              scalable code for clients or organizations.
            </p>
            <p>
              I started as a self-taught developer but its limitations
              especially in scope drove me to pursue a deeper and more
              structured form of development curriculum which led me to
              Microverse--An online software development learning institution.
            </p>
            <p>
              While at Microverse, I had the opportunity to collaboratively work
              with individuals from all over the world on a wide range of
              projects ranging from landing pages to APIs and as a result, I
              became proficient in some software stacks such as JavaScript,
              React JS, Ruby, Rails, HTML & CSS as well as Algorithms and Data
              Structures. I also became quite adept in several soft/professional
              skills such as pair programming, communication, conflict
              resolution, and management.
            </p>
            <p>
              I currently work as a Freelance Web Developer and I am open to any
              development opportunities."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

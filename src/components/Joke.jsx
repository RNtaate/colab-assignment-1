import React from 'react'

import styles from '../styles/Joke.module.css'

export default function Joke() {
  return (
    <div
      className={`${styles.jokeContainer} d-flex justify-content-center align-items-center`}
    >
      <span className={styles.upperSpan}></span>
      <span className={styles.lowerSpan}></span>

      <div className={`${styles.jokeDetails} bg-secondary`}>
        <p className={styles.punchLine}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea
          asperiores distinctio amet ipsam reprehenderit!
        </p>
        <p className={styles.pun}>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>
    </div>
  )
}

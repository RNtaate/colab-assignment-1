import React, { useState, useEffect } from 'react'

import styles from '../styles/Joke.module.css'

export default function Joke() {
  const [jokeData, setJokeData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchAJoke() {
      try {
        const result = await fetch(
          'https://official-joke-api.appspot.com/random_joke'
        )
        const data = await result.json()
        setJokeData({ ...data })
        setError('')
        console.log(data)
      } catch (e) {
        setError('Error: Something went wrong, May be come back later!')
      }
    }

    fetchAJoke()
  }, [])

  return (
    <div
      className={`${styles.jokeContainer} d-flex justify-content-center align-items-center`}
    >
      <span className={styles.upperSpan}></span>
      <span className={styles.lowerSpan}></span>

      <div
        className={`${styles.jokeDetails} bg-secondary d-flex flex-col justify-content-center`}
      >
        {jokeData?.punchline ? (
          <>
            <p className={styles.setUp}>{jokeData.setup}</p>
            <p className={styles.punchline}>{jokeData.punchline}.</p>
          </>
        ) : error ? (
          <p className={styles.errorParagraph}>{error}</p>
        ) : (
          <p>Fetching a joke ...</p>
        )}
      </div>
    </div>
  )
}

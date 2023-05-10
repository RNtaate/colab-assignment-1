import React, { useState, useEffect } from 'react';
import Dots from 'react-activity/dist/Dots';

import styles from '../styles/Joke.module.css';
import API_URL from '../services/HelperConstants';

export default function Joke() {
  const [jokeData, setJokeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    async function fetchAJoke() {
      try {
        const result = await fetch(`${API_URL}`);
        const data = await result.json();
        setJokeData({ ...data });
        setError(null);
        setIsLoading(false);
      } catch (e) {
        setError('Error: Something went wrong, May be come back later!');
        setIsLoading(false);
      }
    }

    fetchAJoke();
  }, []);

  return (
    <div
      className={`${styles.jokeContainer} d-flex justify-content-center align-items-center`}
    >
      <span className={styles.upperSpan} />
      <span className={styles.lowerSpan} />

      <div
        className={`${styles.jokeDetails} bg-secondary d-flex flex-col justify-content-center`}
      >
        {!isLoading && !error && jokeData?.punchline && (
          <>
            <p className={styles.setUp}>{jokeData.setup}</p>
            <p className={styles.punchline}>{jokeData.punchline}</p>
          </>
        )}

        {isLoading && (
          <span
            className={`${styles.fetchIndicatorSpan} d-flex align-items-center`}
          >
            <i>Fetching a joke </i>
            {' '}
            <Dots size={15} />
          </span>
        )}
        {error && <p className={styles.errorParagraph}>{error}</p>}
      </div>
    </div>
  );
}

import React from 'react';

import styles from '../styles/Extra.module.css';
import aboutStyles from '../styles/About.module.css';
import Joke from '../components/Joke';

export default function Extra() {
  return (
    <div
      className={`${styles.extraMain} bg-primary d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.extraContainer} d-flex flex-col align-items-center justify-content-center`}
      >
        <h1
          className={`${aboutStyles.aboutHeading} text-center`}
          data-aos="fade"
          data-aos-duration="1000"
        >
          EXTRA
        </h1>

        <h3
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          &#34;Every body deserves a little laughter in their lives. Which is
          why a random joke will show up on this page every time you visit it.
          😊&#34;
        </h3>

        <Joke />
      </div>
    </div>
  );
}

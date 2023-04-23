import React from 'react';

import styles from '../styles/SkillsCarousel.module.css';
import * as svgImages from '../assets/colab carousel svgs';

export default function SkillsCarousel() {
  const svgSize = 75;

  return (
    <div className={`${styles.carouselWrapper}`}>
      <div
        className={`${styles.carouselDiv} ${styles.carouselDiv1} d-flex justify-content-center align-items-center`}
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {Object.keys(svgImages).map((singleKey) => (
          <div
            className={`${styles.svgImageDiv} d-flex justify-content-center align-items-center`}
            key={`${singleKey.toString()}`}
          >
            <img
              width={svgSize}
              height={svgSize}
              src={svgImages[`${singleKey}`]}
              alt="stack"
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.carouselDiv} ${styles.carouselDiv2} d-flex justify-content-center align-items-center`}
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {Object.keys(svgImages).map((singleKey) => (
          <div
            className={`${styles.svgImageDiv} d-flex justify-content-center align-items-center`}
            key={`${singleKey.toString()}`}
          >
            <img
              width={svgSize}
              height={svgSize}
              src={svgImages[`${singleKey}`]}
              alt="stack"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

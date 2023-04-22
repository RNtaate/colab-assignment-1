import React from 'react';

import styles from '../styles/SkillsCarousel.module.css';
import * as svgImages from '../assets/colab carousel svgs';

export default function SkillsCarousel() {
  const svgSize = 75;
  console.log(Object.keys(svgImages).length);

  return (
    <div className={`${styles.carouselWrapper}`}>
      <div
        className={`${styles.carouselDiv} ${styles.carouselDiv1} d-flex justify-content-center align-items-center`}
      >
        {Object.keys(svgImages).map((singleKey) => (
          <div
            className={`${styles.svgImageDiv} d-flex justify-content-center align-items-center`}
          >
            <img
              width={svgSize}
              height={svgSize}
              src={svgImages[`${singleKey}`]}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.carouselDiv} ${styles.carouselDiv2} d-flex justify-content-center align-items-center`}
      >
        {Object.keys(svgImages).map((singleKey) => (
          <div
            className={`${styles.svgImageDiv} d-flex justify-content-center align-items-center`}
          >
            <img
              width={svgSize}
              height={svgSize}
              src={svgImages[`${singleKey}`]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

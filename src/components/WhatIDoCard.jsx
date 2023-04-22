import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/WhatIDoCard.module.css';

export default function WhatIDoCard({ imgSrc, title, corner }) {
  const curve = '50px';
  return (
    <div
      className={`${styles.cardContainer} bg-secondary d-flex align-items-center`}
      style={{ borderRadius: `${curve}`, [`${corner}`]: '0' }}
    >
      <img src={imgSrc} alt="What I do skill" />
      <h4>{title}</h4>
    </div>
  );
}

WhatIDoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  corner: PropTypes.string.isRequired,
};

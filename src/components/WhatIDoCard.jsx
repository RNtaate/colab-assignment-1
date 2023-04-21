import React from 'react'

import styles from '../styles/WhatIDoCard.module.css'

export default function WhatIDoCard({ imgSrc, title, corner }) {
  const curve = '50px'
  return (
    <div
      className={`${styles.cardContainer} bg-secondary d-flex align-items-center`}
      style={{ borderRadius: `${curve}`, [`${corner}`]: '0' }}
    >
      <img src={imgSrc} />
      <h4>{title}</h4>
    </div>
  )
}

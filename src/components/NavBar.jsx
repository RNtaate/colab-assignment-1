import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/NavBar.module.css'
import logoImage from '../assets/logo.svg'
export default function NavBar() {
  return (
    <nav className={`${styles.navBar} d-flex align-items-center`}>
      <div className={`${styles.navLogo}`}>
        <Link to="/">
          <div className={`${styles.logoDiv}`}>
            <img src={logoImage} alt="Logo" />
          </div>
        </Link>
      </div>
      <ul
        className={`${styles.navBarList} d-flex align-items-center justify-content-center`}
      >
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/extra">
            <span>Extra</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

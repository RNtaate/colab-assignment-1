import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/NavBar.module.css'
export default function NavBar() {
  return (
    <nav className={`${styles.navBar}`}>
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import logoImage from '../assets/logo.svg';

export default function NavBar() {
  return (
    <nav className={`${styles.navBar} d-flex align-items-center`}>
      <div className={`${styles.navLogo}`}>
        <NavLink to="/">
          <div className={`${styles.logoDiv}`}>
            <img src={logoImage} alt="Logo" />
          </div>
        </NavLink>
      </div>
      <ul
        className={`${styles.navBarList} d-flex align-items-center justify-content-center`}
      >
        <li>
          <NavLink to="/" className="navbarLink">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbarLink">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/extra" className="navbarLink">
            <span>Extra</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

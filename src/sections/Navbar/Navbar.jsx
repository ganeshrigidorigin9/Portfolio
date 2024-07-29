import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './NavbarStyles.module.css';

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle}/>
      <label htmlFor="menu-toggle" className={styles.hamburger}>
        <FaBars className={styles.bars} />
        <FaTimes className={styles.times} />
      </label>
      <ul className={styles.list}>
        <li className={styles.navbarItem}><Link className={styles.link} to="/#hero">About</Link></li>
        <li className={styles.navbarItem}><Link className={styles.link} to="/#projects">Projects</Link></li>
        <li className={styles.navbarItem}><Link className={styles.link} to="/#skills">Skills</Link></li>
        <li className={styles.navbarItem}><Link className={styles.link} to="/#certifications">Certifications</Link></li>
        <li className={styles.navbarItem}><Link className={styles.link} to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

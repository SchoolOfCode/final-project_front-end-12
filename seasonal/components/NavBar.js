import React from 'react';
import styles from '../styles/NavBar.module.css'
import { BurgerMenu } from './BurgerMenu.js';
import Link from 'next/link';


export function NavBar() {

  return (
    <div className={styles.div} role="navigation">
      <div className={styles.spaceHelp}></div>

      <div className={styles.titleDiv}>
        <Link href="/">
          <a  className={styles.title}><h1 >SEASONAL</h1></a>
        </Link>
      </div>
      
      <div className={styles.linkDiv}>
        <Link href="/" className={styles.pageLinks}>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about" className={styles.pageLinks}>
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/credits" className={styles.pageLinks}>
          <a className={styles.link}>Credits</a>
        </Link>
      </div>

      <BurgerMenu className={styles.menu} aria-label="Click to view navigation links"/>
      
    </div>
  )
}
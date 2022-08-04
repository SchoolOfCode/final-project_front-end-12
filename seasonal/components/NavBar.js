import React from 'react';
import styles from '../styles/NavBar.module.css'
import { BurgerMenu } from './BurgerMenu.js';
import Link from 'next/link';


export function NavBar() {

  return (
    <div className={styles.div} role="navigation">
      <h1 className={styles.title} >SEASONAL</h1>
      
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>

      <BurgerMenu className={styles.menu} aria-label="Click to view navigation links"/>
      
    </div>
  )
}
import React from 'react';
import styles from '../styles/NavBar.module.css'
import { BurgerMenu } from './BurgerMenu.js';
import Link from 'next/link';


export function NavBar() {

  return (
    <div className={styles.div}>
      <h1 className={styles.title}>SEASONAL</h1>
      
      <Link href="/about" className={styles.links}>About</Link>

      <BurgerMenu className={styles.menu}/>
      
    </div>
  )
}
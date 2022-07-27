// We want a function that returns a div
// the div should contain links that route to different pages
// Later the component should house the burger menu component
// It should include an h1 with the app name 

import React from 'react';
import styles from '../styles/navbar.module.css'
import { BurgerMenu } from './burgerMenu.js';
import Link from 'next/link'

export function NavBar() {

  return (
    <div className={styles.div}>
      <h1>SEASONAL</h1>
      <Link href="/listPage/listPage">List Page</Link>
      <Link href="/aboutPage/aboutPage">About Page</Link>
      <Link href="/singleItemPage/singleItemPage">SingleItemPage</Link>
      <BurgerMenu/>
      
    </div>
  )
}
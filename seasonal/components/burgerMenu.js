import React from "react";
import styles from '../styles/burgerMenu.module.css';
import Image from 'next/image'

export function BurgerMenu() {
  
  return(
    //icon for burger menu
    //onClick, (toggles state to display: dropdown menu)
    <Image src='/burgerMenu.png' className={styles.menu} alt='burger menu' height={50} width={50} layout="raw" />
    
    //dropdown menu contains links to other pages
  )
};
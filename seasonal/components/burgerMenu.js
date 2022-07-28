import React from "react";
import styles from '../styles/burger-menu.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function BurgerMenu() {
  
  return(
    //icon for burger menu
    //onClick, (toggles state to display: dropdown menu)
    //  

    <>
      <Image src='/burgerMenu.png' className={styles.menu} alt='burger menu' height={50} width={50} />
      
      <div className={styles.dropdown}> 
        <Link href="/aboutPage">About Page</Link>
      </div>
    {/* dropdown div should be rendered when the burger button is toggled.
    This requires */}
    </>
  )
};
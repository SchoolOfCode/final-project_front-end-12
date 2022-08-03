import React, {useState} from "react";
import styles from '../styles/BurgerMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function BurgerMenu() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(current => !current);
  };

  return(
    <>
      <div className={styles.wrapper}>
      <Image src='/burgerMenu.png' onClick={toggleDropdown} alt='burger menu' height={40} width={40} className={styles.menu} />
      </div>
      
      {dropdown &&
          <div className={styles.dropdown}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Image src='/close.png' onClick={toggleDropdown} alt='burger menu' height={20} width={20} className={styles.closeMenu} />
          </div>
      }
    </>
  )
};
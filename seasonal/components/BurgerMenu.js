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
      <Image src='/burgerMenu.png' onClick={toggleDropdown} className={styles.menu} alt='burger menu' height={50} width={50} />
      
      {dropdown &&
        <div className={styles.dropdown}> 
          <Link href="/about">About</Link>
        </div>
      }
    </>
  )
};
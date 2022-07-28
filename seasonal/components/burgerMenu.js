import React, {useState} from "react";
import styles from '../styles/burger-menu.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function BurgerMenu() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    // 👇️ passed function to setState
    setDropdown(current => !current);
  };

  return(
     

    <>
      <Image src='/burgerMenu.png' onClick={toggleDropdown} className={styles.menu} alt='burger menu' height={50} width={50} />
      
      {dropdown &&
        <div className={styles.dropdown}> 
          <Link href="/aboutPage">About Page</Link>
        </div>
      }
    {/* dropdown div should be rendered when the burger button is toggled.
    This requires */}
    </>
  )
};
import React, { useState } from "react";
import styles from "../styles/BurgerMenu.module.css";
import Image from "next/image";

export function BurgerMenu({ handleLinkClick }) {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown((current) => !current);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src="/burgerIcon.png"
          onClick={toggleDropdown}
          alt="burger menu"
          height={40}
          width={40}
          className={styles.menu}
          data-cy="burger-menu"
        />
      </div>
      {dropdown && (
        <div
          className={styles.dropdown}
          aria-label="dropdown menu for navigation"
          data-cy="dropdown-menu"
        >
          <span className={styles.burgerOption}>
            <a onClick={(e) => handleLinkClick(e, "/")}>Home</a>
          </span>
          <span className={styles.burgerOption}>
            <a onClick={(e) => handleLinkClick(e, "/about")}>About</a>
          </span>
          <span className={styles.burgerOption}>
            <a onClick={(e) => handleLinkClick(e, "/credits")}>Credits</a>
          </span>
          <Image
            src="/close.png"
            onClick={toggleDropdown}
            alt="close menu"
            height={20}
            width={20}
            className={styles.closeMenu}
          />
        </div>
      )}
    </>
  );
}

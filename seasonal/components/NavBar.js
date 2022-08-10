import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import { BurgerMenu } from "./BurgerMenu.js";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavBar() {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  function handleLinkClick(e, path) {
    e.preventDefault();

    if (currentPath === path) {
      router.reload();
    } else {
      router.push(path);
    }
  }

  useEffect(() => {
    const updatePath = () => {
      console.log("Setting path name");
      console.log(`The pathname is: ${router.pathname}`);
      setCurrentPath(router.pathname);
    };
    if (!router.isReady) return;
    updatePath();
  }, [router.isReady]);

  return (
    <div className={styles.div} role='navigation'>
      <div className={styles.spaceHelp}></div>

      <div className={styles.titleDiv}>
        <a
          href=''
          className={styles.title}
          onClick={(e) => handleLinkClick(e, "/")}
        >
          <h1>SEASONAL</h1>
        </a>
      </div>

      <div className={styles.linkDiv}>
        <a
          href=''
          className={styles.link}
          onClick={(e) => handleLinkClick(e, "/")}
        >
          Home
        </a>
        <a
          href=''
          className={styles.link}
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          About
        </a>
        <a
          href=''
          className={styles.link}
          onClick={(e) => handleLinkClick(e, "/credits")}
        >
          Credits
        </a>
      </div>

      <BurgerMenu
        className={styles.menu}
        aria-label='Click to view navigation links'
        handleLinkClick={handleLinkClick}
      />
    </div>
  );
}
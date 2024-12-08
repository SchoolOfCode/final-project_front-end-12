import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import { BurgerMenu } from "./BurgerMenu.js";
import { useRouter } from "next/router";

export function NavBar() {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
//e.preventDefault prevents a full page reload, however if option pressed is the same as the current page then the page will do a reload- else will push teh qeury 

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
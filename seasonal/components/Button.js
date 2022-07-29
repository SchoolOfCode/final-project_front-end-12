import React from "react";
import styles from "../styles/Button.module.css"; 
import Link from "next/link";

//Plan
// Button needs to be clickable and take us to {prop} url.
// Button text needs to be a {prop}
// Button Styling needs to be a variable that follows the seasons.

// we want some state which passes down the text of the search result 
// the href 


export default function Button({text, url}) {
  
  return (
    <Link href={url}>
    <a className={styles.link}>
    <button className={styles.button}>{text}</button>
    </a>
   </Link>
  )
}
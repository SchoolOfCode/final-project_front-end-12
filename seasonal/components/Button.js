import React from "react";
import styles from "../styles/Button.module.css";
// import Link from "next/link";

//Plan
// Button needs to be clickable and take us to {prop} url.
// Button text needs to be a {prop}
// Button Styling needs to be a variable that follows the seasons.

export default function Button({text, url}) {
  return (
    // <Link >
    <a href={url} target="_blank">
    <button className={styles.button}>{text}</button>
    </a>
    // </Link>
  )
}


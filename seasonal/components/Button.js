import React from "react";
import styles from "../styles/Button.module.css";
import { useRouter } from "next/router";

export default function Button({ text, image }) {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: "/item", query: { food: text, recipe: text } });
  }

  return (
    <a className={styles.link} onClick={handleClick}>
      <div className={styles.buttonbox}>
        <img src={image} alt={text} className={styles.buttonimage} />
        <div className={styles.button}>{text}</div>
      </div>
    </a>
  );
}

// This is not technically a button, but acts as a button.
// See Trello and README for some of Fiona's notes on accessibility of a and button HTML.
// Will elaborate further at later time in README.

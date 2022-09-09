import React from "react";
import styles from "../styles/MoreButton.module.css";
import { useRouter } from "next/router";

export default function MoreButton({ text }) {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: "/results", query: { month: text } });
  }

  return (
    <a className={styles.link}>
      <div className={styles.morebutton} onClick={handleClick}>
        More in Season
      </div>
    </a>
  );
}

// This is not technically a button, but acts as a button.
// See Trello and README for some of Fiona's notes on accessibility of a and button HTML.
// Will elaborate further at later time in README.

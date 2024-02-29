import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { RandomFiveArray } from "../components/RandomFiveArray.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeStamp, setTimeStamp] = useState("");

  function getMonth() {
    const today = new Date();
    let longMonth = today.toLocaleString("default", { month: "long" });
    setTimeStamp(longMonth);
  }

  useEffect(() => {
    getMonth();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Seasonal</title>
        <meta
          name="description"
          content="An app that helps people find what food is in season in the UK"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="preload" href="https://fonts.googleapis.com" as="font" />
        <link
          rel="preload"
          href="https://fonts.gstatic.com"
          as="font"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="preload"
          as="font"
        />
      </Head>
      <NavBar aria-label="Navigation" role="navigation bar" />
      <main className={styles.main} role="main">
        {timeStamp && (
          <>
            <h2 className={styles.title}>It&apos;s {timeStamp}!</h2>
            <h3 className={styles.titleh3}>Some things in season...</h3>
          </>
        )}
        <div data-cy="random-five-array-container">
          <RandomFiveArray timeStamp={timeStamp} />
        </div>
      </main>
      <footer className={styles.footer} aria-label="Search bar" role="search">
        <SearchBar />
      </footer>
    </div>
  );
}

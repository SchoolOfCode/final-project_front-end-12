import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { RandomFiveArray } from "../components/RandomFiveArray.js";
import { useEffect, useState } from "react";
import MoreButton from "../components/MoreButton";

export default function Home() {
  const [timeStamp, setTimeStamp] = useState("");

  function getMonth() {
    const today = new Date();
    let longMonth = today.toLocaleString("default", { month: "long" });
    console.log(longMonth);
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
        <link rel="icon" href="/seasonalfaviconlarger.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar aria-label="Navigation" role="navigation bar" />
      <main className={styles.main} role="main">
        <h2 className={styles.title}>It&apos;s {timeStamp}!</h2>
        <h3 className={styles.titleh3}>Some things in season...</h3>
        <div
          className={styles.randomarray}
          data-cy="random-five-array-container"
        >
          <RandomFiveArray timeStamp={timeStamp} getMonth={getMonth} />
        </div>
        <MoreButton text={timeStamp} />
      </main>
      <footer className={styles.footer} aria-label="Search bar" role="search">
        <SearchBar />
      </footer>
    </div>
  );
}

//PLAN
/*
Make a new button component called MoreButton.js 
  - Hard code the text on the button - "More in Season"
  - Buttons page path to '/results'
  - Hand it the state of Month (use logic from RandomFive Component and place that in index.js - pass down the 
    the timestamp to button and random5.

Make a new styles modeule for the button. Size smaller

Add button to index. Import at Top.

fingers crossed.


*/

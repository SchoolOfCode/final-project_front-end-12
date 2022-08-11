import React from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { ResultsItem } from "../components/ResultsItem.js";
import styles from "../styles/Results.module.css";

export default function Results() {
  return (
    <div>
      <Head>
        <title>Seasonal</title>
        <meta name="description" content="Search by months results page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar aria-label="Navigation" />
      <div className={styles.resultsItem}>
        <ResultsItem aria-label="A list of food items in season as a result of the search filter" />
      </div>
      <footer className={styles.footer} aria-label="Search bar">
        <SearchBar />
      </footer>
    </div>
  );
}

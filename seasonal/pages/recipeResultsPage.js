import React from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import Recipes from "../components/RecipeResults"; 
import styles from "../styles/Results.module.css"

const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export default function Results() {

return(
<div>
  <Head>
    <title>Seasonal</title>
    <meta name="description" content="Search by recipe results page" />
    <link rel="icon" href="/seasonalfaviconlarger.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>
  
  <NavBar aria-label="Navigation"/>
<main>
  <div className={styles.resultsItem} >
  <Recipes/>
  </div>
</main>
  <footer className={styles.footer} aria-label="Search bar">
    <SearchBar/>
  </footer>
 </div>
)};

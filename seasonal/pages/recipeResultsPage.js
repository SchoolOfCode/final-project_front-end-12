import React from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import Recipes, { recipeResults } from "../components/RecipeResults"; 
import styles from "../styles/Results.module.css"

const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export default function Results() {

return(
<div>
  <Head>
        <title>Seasonal</title>
        <meta name="description" content="Search by recipe results page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
  <NavBar aria-label="Navigation"/>
  <div className={styles.resultsItem} >

  <Recipes/>
  
  </div>
  <footer className={styles.footer} aria-label="Search bar">
    <SearchBar />
  </footer>
 </div>
)};

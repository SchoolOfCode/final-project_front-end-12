import React from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { ResultsItem } from "../components/ResultsItem.js"; 
import styles from "../styles/Card.module.css";

const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export default function Results() {

return(
<div>
  <Head>
        <title>Seasonal</title>
        <meta name="description" content="Search by months results page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
  <NavBar/>
  <ResultsItem/> 
  <footer className={styles.footer}>
    <SearchBar />
  </footer>
 </div>
)


}

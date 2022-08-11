import Card from "../components/Card.js";
import Recipes from "../components/RecipeResults.js";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/Card.module.css";
import Head from "next/head";

export default function Item() {
  return (
    <div className={styles.pagecontainer}>
      <Head>
        <title>Seasonal</title>
        <meta name="description" content="Individual item page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar aria-label="Navigation" />
      <Card />
      <div className={styles.recipeSection}>
        <Recipes />
      </div>
      <footer className={styles.footer} aria-label="Search bar">
        <SearchBar />
      </footer>
    </div>
  );
}

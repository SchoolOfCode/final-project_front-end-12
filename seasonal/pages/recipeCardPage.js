import Card from "../components/RecipeCard.js";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/RecipeCard.module.css";
import Head from "next/head";

export default function RecipeCardPage() {
  return (
    <div className={styles.pagecontainer}>
    <Head>
        <title>Seasonal</title>
        <meta name="description" content="Individual recipe page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar aria-label="Navigation"/>
      <main>
      <Card />
      </main>
      <footer className={styles.footer} aria-label="Search bar">
        <SearchBar />
      </footer>
    </div>
  )
  
  
}

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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
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

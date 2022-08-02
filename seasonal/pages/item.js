import Card from "../components/Card.js";
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
      <NavBar />
      <Card />
      <footer className={styles.footer}>
        <SearchBar />
      </footer>
    </div>
  )
  
  
}

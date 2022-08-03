import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { RandomFiveArray } from '../components/RandomFiveArray.js'
import Button from '../components/Button';




 let text = "Aubergine";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seasonal</title>
        <meta name="description" content="An app that helps people find what food is in season in the UK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar aria-label="Navigation" role='navigation bar'/>
      <main className={styles.main} role='main content'>
        <h2 className={styles.title}>What&apos;s in season?</h2>
        <RandomFiveArray/>
      {/* //  <Button text={text}/> */}
      </main>
      <footer className={styles.footer} aria-label="Search bar" role='search bar'>
        <SearchBar />
      </footer>
    </div>
  );
}

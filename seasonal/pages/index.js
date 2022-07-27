import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/navbar";
import { Searchbar } from "../components/Searchbar.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is in season?</title>
        <meta name="description" content="Seasonal Foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
      </main>
      <footer className={styles.footer}>
        THIS IS WHERE THE SEARCH BAR WILL GO!
        <Searchbar />
      </footer>
    </div>
  );
}

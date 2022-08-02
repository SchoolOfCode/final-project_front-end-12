import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import { RandomFiveArray } from '../components/RandomFiveArray.js'
//import Button from '../components/Button';




 let text = "Aubergine";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seasonal</title>
        <meta name="description" content="Seasonal Foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h3 className={styles.title}>What&apos;s in season?</h3>
        <RandomFiveArray/>
      {/* //  <Button text={text}/> */}
      </main>
      <footer className={styles.footer}>
        <SearchBar />
      </footer>
    </div>
  );
}

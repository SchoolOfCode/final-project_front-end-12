import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import Button from '../components/Button';

    let text = "Aubergine";
    let url = "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/bakedstuffedaubergin_71986_16x9.jpg";

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
        <Button text={text} url={url} />
      </main>
      <footer className={styles.footer}>
        THIS IS WHERE THE SEARCH BAR WILL GO!
        <SearchBar />
      </footer>
    </div>
  );
}

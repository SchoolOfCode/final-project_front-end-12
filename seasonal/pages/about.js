import React from "react";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/About.module.css";
import Head from "next/head";


export default function About() {

    return (
        <div className={styles.container}>
        <Head>
        <title>Seasonal</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <NavBar />
            <div className={styles.pagecontainer}>
                <h1>About Seasonal</h1>
                <p>This is where we will insert a bunch of useful information about the app and how to eat seasonally!</p>
            </div>
            <footer className={styles.footer}>
                <SearchBar />
            </footer>
        </div>
    )
}
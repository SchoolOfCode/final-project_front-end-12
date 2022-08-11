import React from "react";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/Credits.module.css"
import Head from "next/head";


export default function Credits() {

    return (
        <div className={styles.container}>
        <Head>
        <title>Seasonal</title>
        <meta name="description" content="Credits page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>
            <NavBar aria-label="Navigation" />
            <div className={styles.pagecontainer}>
                <div className={styles.textcontainer}>
 <div>Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> were made by:
  <ul className={styles.listColumn}>
  <div >
    <li><a href="https://www.flaticon.com/authors/andinur" title="andinur">andinur</a></li>
    <li><a href="https://www.flaticon.com/authors/angdiz" title="AngDiz">AngDiz</a></li>
    <li><a href="https://www.flaticon.com/authors/amethystdesign" title="AmethystDesign">AmethystDesign</a></li>
    <li><a href="https://www.flaticon.com/authors/artlega-studio" title="Artlèga Studio">Artlèga Studio</a></li>
    <li><a href="https://www.flaticon.com/authors/designbydai" title="designbydai">designbydai</a></li>
    <li><a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a></li>
    <li><a href="https://www.freepik.com" title="Freepik">Freepik</a></li>
    <li><a href="https://www.flaticon.com/authors/futuer" title="Futuer">Futuer</a></li>
    <li><a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a></li>
    <li><a href="https://www.flaticon.com/authors/imaginationlol" title="imaginationlol">imaginationlol</a></li>
    <li><a href="https://www.flaticon.com/authors/kerismaker" title="kerismaker">kerismaker</a></li>
    <li><a href="https://www.flaticon.com/authors/kosonicon" title="kosonicon">kosonicon</a></li>
    <li><a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a></li>
    </div>
    <div>
    <li><a href="https://www.flaticon.com/authors/luvdat" title="Luvdat">Luvdat</a></li>
    <li><a href="https://www.flaticon.com/authors/maxicons" title="max.icons">max.icons</a></li>
    <li><a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a></li>
    <li><a href="https://www.flaticon.com/authors/yukyik" title="yukyik">yukyik</a></li>
    <li><a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a></li>
    <li><a href="https://www.flaticon.com/authors/popo2021" title="popo2021">popo2021</a></li>
    <li><a href="https://www.flaticon.com/authors/smashingstocks" title="smashingstocks">smashingstocks</a></li>
    <li><a href="https://www.flaticon.com/authors/seaicon" title="Sea.icon">Sea.icon</a></li>
    <li><a href="https://www.flaticon.com/authors/shmai" title="shmai">shmai</a></li>
    <li><a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a></li>
    <li><a href="https://www.flaticon.com/authors/surang" title="surang">surang</a></li>
    
    <li><a href="https://www.flaticon.com/authors/umeicon" title="Umeicon">Umeicon</a></li>
    </div>
  </ul>
</div>
                </div>
            </div>
            <footer className={styles.footer} aria-label="Search Bar">
                <SearchBar />
            </footer>
        </div>
    )
}
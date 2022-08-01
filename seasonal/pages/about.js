import React from "react";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/About.module.css";


export default function About() {

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pagecontainer}>
                <h1>About Seasonal</h1>
                <p>Seasonal is an app that helps people find out what food is in season in the UK.</p>
                <p>There are many benefits to eating food that is in season. </p>
                <p>Not only is it cheaper for you, but it means that food doesn’t need to be shipped overseas. We can all reduce our carbon footprint by eating locally farmed produce. The further from home that your food is grown, the more energy and emissions it takes to reach your plate. </p>
                <p>By eating seasonally, you’ll also be supporting British farmers all year round.</p>
                <p>It isn’t easy to know what’s in season, so Seasonal was created to help people make informed choices about the food they eat. We’ve made finding food in season easier and more accessible. All you have to do is search by month or by a desired food item to see what times of the year food is grown in the UK.</p>
                <p>Seasonal was made by 12** - a team of junior software developers - for our final project at the School of Code. Our team consists of:</p>
                <ul>
                    <li> <a href="">Andy Johnson</a></li> 
                    <li> <a href="https://www.linkedin.com/in/fiona-kitchen" target="_blank">Fiona Kitchen</a></li>
                    <li> <a href="https://www.linkedin.com/in/gdarar/" target="_blank">Guiji Darar</a></li> 
                    <li> <a href="https://www.linkedin.com/in/madisonclowe/" target="_blank">Madison Lowe</a></li> 
                    <li> <a href="" target="_blank">Matthew Miller</a></li> 
                    <li> <a href="https://www.linkedin.com/in/nathanlee94" target="_blank">Nathan Lee</a></li> 
                </ul>
            </div>
            <footer className={styles.footer}>
                <SearchBar />
            </footer>
        </div>
    )
}
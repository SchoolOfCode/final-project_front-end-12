import React from "react";
import styles from "../styles/Button.module.css"; 
import Link from "next/link";
import { useRouter } from 'next/router'
//Plan
// Button needs to be clickable and take us to {prop} url.
// Button text needs to be a {prop}
// Button Styling needs to be a variable that follows the seasons.

// we want some state which passes down the text of the search result 
// the href 


export default function Button({text}) {
  
  
const router = useRouter()




function handleClick(){
router.push({pathname:'/item', query:{food:text}})
}

  return (
  
    <a className={styles.link}>
    <button className={styles.button} onClick={handleClick}>{text}</button>
    </a>

  )
}
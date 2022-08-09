import React from "react";
import styles from "../styles/Button.module.css"; 
import Link from "next/link";
import { useRouter } from 'next/router'
//Plan
//Create some state
//useEffect function
//Make a request to the database
//navigate the response object to retrieve the url
//store the url into the state
//put the state into the img within the return

export default function Button({text, image}) {

const router = useRouter()

function handleClick(){
router.push({pathname:'/item', query:{food:text,recipe:text }})
}

  return (
  
    <a className={styles.link} onClick={handleClick}>
    <div className={styles.buttonbox}>
      <img src={image} alt={text} className={styles.buttonimage}/>
      <button className={styles.button} >{text}</button>
    </div>
    </a>

  )
}
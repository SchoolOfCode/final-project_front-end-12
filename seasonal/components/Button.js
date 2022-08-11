import React from "react";
import styles from "../styles/Button.module.css"; 
import { useRouter } from 'next/router'


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
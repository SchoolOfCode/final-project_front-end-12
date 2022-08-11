import React from "react";
import styles from "../styles/MoreButton.module.css"; 
import { useRouter } from 'next/router'


export default function MoreButton({text}) {
const router = useRouter()

function handleClick(){
router.push({pathname:'/results', query:{month:text}})
}

  return (
    <a className={styles.link}>
    <button className={styles.morebutton} onClick={handleClick}>More in Season</button>
    </a>

  )
}
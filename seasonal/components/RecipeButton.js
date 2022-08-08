import React from "react";
import styles from "../styles/Button.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RecipeButton({ title, image, id }) {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: "/recipecard", query: { recipe: id } });
  }

  return (
    <a className={styles.link}>
      <div className={styles.buttonbox}>
        <img src={image} alt={title} className={styles.buttonimage} />
        <button className={styles.button} onClick={handleClick}>
          {title}
        </button>
      </div>
    </a>
  );
}

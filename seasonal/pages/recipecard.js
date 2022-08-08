import styles from "../styles/Card.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const searchString = `https://www.themealdb.com/api/json/v1/1/lookup.php`;

function getIngredients(recipe) {
  let ingredientsArray = [];
  for (const [key, value] of Object.entries(recipe)) {
    console.log(`${key}: ${value}`);
    if (key.includes("strIngredient")) {
      if (value !== "") {
        ingredientsArray.push(value);
      }
    }
  }
  console.log("Ingredients array is next");
  console.log(ingredientsArray);
  return ingredientsArray;
}

function getQuantities(recipe) {
  let quantityArray = [];
  for (const [key, value] of Object.entries(recipe)) {
    console.log(`${key}: ${value}`);
    if (key.includes("strMeasure")) {
      if (value !== "") {
        quantityArray.push(value);
      }
    }
  }
  console.log("Quantity array is next");
  console.log(quantityArray);
  return quantityArray;
}

export default function Card() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState([]);

  let ingredientsArray = [];
  let quantityArray = [];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${searchString}?i=${router.query.recipe}`);
      let result = await data.json();
      if (result.meals.length > 0) {
        console.log("Getting ingredients and quantities");
        result.meals[0].ingredientsArray = getIngredients(result.meals[0]);
        console.log(JSON.stringify(result.meals));
        result.meals[0].quantityArray = getQuantities(result.meals[0]);
      } else {
        console.log("Can't get ingredients or quantities");
      }
      setCurrentItem(result.meals);
    };

    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady]);

  if (currentItem.length > 0) {
    return (
      <div
        className={styles.container}
        aria-label='Card containing details about the food item'
      >
        <h2 className={styles.header}>{currentItem[0].strMeal}</h2>
        <h3>{currentItem[0].strCategory}</h3>
        <img src={currentItem[0].strMealThumb} alt={currentItem[0].strMeal} />
        <h4>Ingredients:</h4>
        {
          <ul className={styles.months}>
            {currentItem[0].ingredientsArray.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        }
        <h4>Quantities:</h4>
        <ul className={styles.foodTags}>
          {currentItem[0].ingredientsArray.map((quantity, index) => {
            return <li key={index}>{quantity}</li>;
          })}
        </ul>
        <p className={styles.mainDescription}>
          {currentItem[0].strInstructions}
        </p>
        <p>
          <a href={currentItem[0].strYouTube} target='_blank'>
            Link to YouTube if available
          </a>
        </p>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

import styles from "../styles/RecipeCard.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const searchString = `https://www.themealdb.com/api/json/v1/1/lookup.php`;
//Takes in recipe from fetchData
//Loops through object entries to search for ingredients that are not empty
//Pushes them to a new array called ingredientsArray and returns them
function getIngredients(recipe) {
  let ingredientsArray = [];
  for (const [key, value] of Object.entries(recipe)) {
    if (key.includes("strIngredient")) {
      if (Boolean(value) !== false) {
        ingredientsArray.push(value);
      }
    }
  }

  return ingredientsArray;
}
//Takes in recipe from fetchData
//Loops through object entries to search for quantities that are not empty
//Pushes them to a new array called quantities Array and returns them
function getQuantities(recipe) {
  let quantityArray = [];
  for (const [key, value] of Object.entries(recipe)) {
 
    if (key.includes("strMeasure")) {
      if (Boolean(value) !== false) {
        quantityArray.push(value);
      }
    }
  }
   return quantityArray;
}

export default function Card() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //Fetches data from recipe API using ID from URL query (router.query)
      const data = await fetch(`${searchString}?i=${router.query.recipe}`);
      let result = await data.json();
      //Call getIngredients and getQuantities as outlined above
      if (result.meals.length > 0) {
        
        const ingredientsArray = getIngredients(result.meals[0]);
      
        const quantityArray = getQuantities(result.meals[0]);
        //Combines ingredients and quantities in to one string
        let combinedArray = [];
        for (let i = 0; i < ingredientsArray.length; i++) {
          combinedArray[i] = `${quantityArray[i]} `;
          combinedArray[i] += ingredientsArray[i];
        }
        //Adds combined array to results object we got from API
        result.meals[0].combinedArray = combinedArray;
        
      }
      //Console log an error if unable to call getIngredients or getQuantities due to there being no results from API
      else {
        console.log("Can't get ingredients or quantities");
      }
      //Updates state with result from API (including appended combined quantities/ingredients array)
      setCurrentItem(result.meals);
    };
    //Checks if router has parsed URL to obtain the query so fetch can be made
    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady, router.query]);

  //Conditionally renders page if we received result from API and successfully set it as state
  if (currentItem.length > 0) {
    return (
      <div
        className={styles.container}
        aria-label="Card containing details about the food item"
      >
        <h2 className={styles.header}>{currentItem[0].strMeal}</h2>
        <h3>{currentItem[0].strCategory}</h3>
        <div className={styles.imgIngredients}>
          <img
            src={currentItem[0].strMealThumb}
            alt={currentItem[0].strMeal}
            className={styles.recipeImage}
          />
          <h4 className={styles.smallHeader}>Ingredients</h4>
          <ul className={styles.ingredients}>
            {currentItem[0].combinedArray.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
        <h4 className={styles.smallHeader}>Method</h4>
        <p className={styles.mainDescription}>
          {currentItem[0].strInstructions}
        </p>
      </div>
    );
  }
  //If there is nothing in the state, render a placeholder loading tag
  else {
    return <p>Loading</p>;
  }
}

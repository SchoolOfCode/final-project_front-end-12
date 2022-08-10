import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RecipeButton from "./RecipeButton.js";

const searchString = `https://www.themealdb.com/api/json/v1/1/search.php`;

export default function Recipes() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
    console.log("this is because of a fetch happening");
    const fetchData = async () => {
      console.log(JSON.stringify(router.query));
      let recipeSearch = router.query.recipe;
      const data = await fetch(`${searchString}?s=${recipeSearch}`);
      let result = await data.json();
      setSearchResults(result.meals);
      console.log(
        `this is the recipes results console log: ${JSON.stringify(
          result.meals
        )}`
      );
    };
    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady, router.query]);

  if (searchResults) {
    console.log('we have the search results and are mapping')
    return(
          
       searchResults.map((recipe) => {
      /*       return (
        <div>
          <h2>{recipe.strMeal}</h2>
          <p>{recipe.idMeal}</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
      ); */
      return (
     
              <RecipeButton
          title={recipe.strMeal}
          key={recipe.idMeal}
          image={recipe.strMealThumb}
          id={recipe.idMeal}
        />
    
      );
    }));
  } else {
    console.log('nothing has come back')
    return <p>We don&apos;t have any recipes for that item yet but please check back in future!</p>;
  }
}

import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RecipeButton from "./RecipeButton.js";

const searchString = `https://www.themealdb.com/api/json/v1/1/search.php`;

export default function Recipes() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
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
  // this is a conditional render- if search results exist then we map it into a recipe button component
  if (searchResults) {
    console.log("we have the search results and are mapping");
    return searchResults.map((recipe) => {
      return (
        <RecipeButton
          title={recipe.strMeal}
          key={recipe.idMeal}
          image={recipe.strMealThumb}
          id={recipe.idMeal}
        />
      );
    });
  } else {
    console.log(`we don't have any recipe results`);
    return (
      <p>
        We don&apos;t have any recipes for that item yet but please check back
        in future!
      </p>
    );
  }
}

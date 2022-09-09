import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../components/Button.js";

const searchString = "https://drab-ruby-seahorse-veil.cyclic.app//produce";

export function ResultsItem() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState({ payload: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.month !== undefined) {
        let modifiedMonth = router.query.month;
        console.log(`this is the month= ${modifiedMonth}`);
        const data = await fetch(`${searchString}?month=${modifiedMonth}`);
        let result = await data.json();
        setSearchResults(result);
      } else {
        let allergen = router.query.allergen;
        console.log(`this is the allergen = ${allergen}`);
        const data = await fetch(`${searchString}?allergen=${allergen}`);
        let result = await data.json();
        setSearchResults(result);
        console.log(`this is the result: ${JSON.stringify(result)}`);
      }
    };
    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady, router.query]);
  // if search results for this month exist then it will conditionally render the button
  if (searchResults.payload.length > 0) {
    return searchResults.payload.map((result) => {
      return (
        <Button text={result.name} key={result.id} image={result.imageurl} />
      );
    });
  } else {
    return (
      <p>
        We couldn&apos;t find anything for your search, check your filter
        options and try a new search!
      </p>
    );
  }
}

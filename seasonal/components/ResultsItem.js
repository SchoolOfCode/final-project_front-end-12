import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../components/Button.js";

const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export function ResultsItem() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState({ payload: [] });

  useEffect(() => {
    const fetchData = async () => {
      console.log(JSON.stringify(router.query));
      let modifiedMonth = router.query.month;
      const data = await fetch(`${searchString}?month=${modifiedMonth}`);
      let result = await data.json();
      setSearchResults(result);
      console.log(
        `this is the search results console log: ${JSON.stringify(result)}`
      );
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

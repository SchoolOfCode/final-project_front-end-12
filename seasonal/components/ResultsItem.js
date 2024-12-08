import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../components/Button.js";
import { API_BASE_URL } from '../util/constants';

export function ResultsItem() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState({ payload: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.month !== undefined) {
        let modifiedMonth = router.query.month;
       
        const data = await fetch(`${API_BASE_URL}?month=${modifiedMonth}`);
        let result = await data.json();
        setSearchResults(result);
      } else if (router.query.allergen !== undefined){
        let allergen = router.query.allergen;
       
        const data = await fetch(`${API_BASE_URL}?allergen=${allergen}`);
        let result = await data.json();
        setSearchResults(result);
        
      }
      else if (router.query.family !== undefined){
        let family = router.query.family;
        const data = await fetch(`${API_BASE_URL}?family=${family}`);
        let result = await data.json();
        setSearchResults(result);
      }
      else if (router.query.usedAs !== undefined){
        let usedAs = router.query.usedAs;
        const data = await fetch(`${API_BASE_URL}?usedAs=${usedAs}`);
        let result = await data.json();
        setSearchResults(result);
      }
      else{
        let foodType = router.query.foodType;
        const data = await fetch(`${API_BASE_URL}?foodType=${foodType}`);
        let result = await data.json();
        setSearchResults(result);
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

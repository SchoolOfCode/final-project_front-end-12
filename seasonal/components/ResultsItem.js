import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../components/Button.js";


const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export function ResultsItem(){
    const router = useRouter();
    const [searchResults, setSearchResults] = useState({ payload: [] });
  
    useEffect(() => {
        console.log('this is because of a fetch happening')
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
    }, [router.isReady]);
  
    if (searchResults.payload.length > 0) {
      return searchResults.payload.map((result) => {
        return <Button text={result.name} key={result.id}/>;
      });
    } else {
      return <p>Loading</p>;
    }

}
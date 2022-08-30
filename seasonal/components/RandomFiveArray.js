import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";

export function RandomFiveArray({ timeStamp, getMonth }) {
  const [randomArray, setRandomArray] = useState({ payload: [] });

  let fetchString =
    "https://drab-ruby-seahorse-veil.cyclic.app//produce/random";

  useEffect(() => {
    const fetchData = async () => {
      console.log(`this is today's month-  ${timeStamp}`);
      const data = await fetch(`${fetchString}?month=${timeStamp}`);
      let result = await data.json();
      setRandomArray(result);
      console.log(
        `this is the search results console log: ${JSON.stringify(result)}`
      );
    };

    if (timeStamp === "") {
      getMonth();
    }
    if (timeStamp === "") return;
    fetchData();
  }, [timeStamp]);

  if (randomArray.payload.length > 0) {
    return randomArray.payload.map((result) => {
      return (
        <Button text={result.name} key={result.id} image={result.imageurl} />
      );
    });
  } else {
    return (
      <p>
        Hmm, that&apos;s strange we know we put something here, please refresh
        to try again !
      </p>
    );
  }
}

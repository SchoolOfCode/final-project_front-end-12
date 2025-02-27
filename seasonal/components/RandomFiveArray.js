import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
import { API_BASE_URL } from '../util/constants';

export function RandomFiveArray({ timeStamp, getMonth }) {
  const [randomArray, setRandomArray] = useState({ payload: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API_BASE_URL}/random?month=${timeStamp}`);
      let result = await data.json();
      setRandomArray(result);   
    };

    if (timeStamp === "") {
      getMonth();
    }
    if (timeStamp === "") return;
    fetchData()
      .catch(console.error);
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

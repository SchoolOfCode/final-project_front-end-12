import React from "react";
import Button from "./Button";
import MoreButton from "./MoreButton";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export function RandomFiveArray({ timeStamp }) {
  const [randomArray, setRandomArray] = useState({ payload: [] });

  const fetchString =
    "https://drab-ruby-seahorse-veil.cyclic.app//produce/random";

  const fetchData = async () => {
    const data = await fetch(`${fetchString}?month=${timeStamp}`);
    let result = await data.json();
    setRandomArray(result);
  };

  useEffect(() => {
    if (timeStamp === "") return;
    fetchData();
  }, [timeStamp]);

  if (randomArray.payload.length > 0) {
    return (
      <>
        <div className={styles.randomarray}>
          {randomArray.payload.map((result) => {
            return (
              <Button
                text={result.name}
                key={result.id}
                image={result.imageurl}
              />
            );
          })}
        </div>
        <MoreButton text={timeStamp} />
      </>
    );
  }
}

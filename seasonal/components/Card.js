import Image from "next/image";
import styles from "../styles/Card.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Import for when using proper state (once it persists on route change)
import { useSearchContext } from "../context/search.js";

const exampleState = {
  success: true,
  payload: [
    {
      allergens: "NA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      family: "Rose",
      foodtype: "Pome",
      id: 1,
      imageurl: "https://via.placeholder.com/200x200",
      month: [
        "January",
        "February",
        "September",
        "October",
        "November",
        "December",
      ],
      name: "Apple",
      usedas: "Fruit",
    },
  ],
};

const searchString = "https://seasonality-server-new.herokuapp.com/produce";

export default function Card() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState({ payload: [] });

  useEffect(() => {
    const fetchData = async () => {
      console.log(JSON.stringify(router.query));
      const data = await fetch(`${searchString}?item=${router.query.food}`);
      let result = await data.json();
      setCurrentItem(result);
      console.log(
        `this is the search results console log: ${JSON.stringify(result)}`
      );
    };
    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady]);

  if (currentItem.payload.length > 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>{currentItem.payload[0].name}</h1>
        <ol className={styles.months}>
          {currentItem.payload[0].month.map((individualMonth, index) => {
            return <li key={index}>{individualMonth}</li>;
          })}
        </ol>
        <ul className={styles.foodTags}>
          <li>Family: {currentItem.payload[0].family}</li>
          <li>Food Type: {currentItem.payload[0].foodtype}</li>
          <li>Used As: {currentItem.payload[0].usedas}</li>
          <li>Allergens: {currentItem.payload[0].allergens}</li>
        </ul>
        <div className={styles.descriptionContainer}>
          <Image
            src='https://res.cloudinary.com/dvpop7e9w/image/upload/v1659018752/cld-sample-4.jpg'
            alt={currentItem.payload[0].name}
            width={300}
            height={200}
            className={styles.mainImage}
          />
          <p className={styles.mainDescription}>
            {currentItem.payload[0].description}
          </p>
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

/*

*/
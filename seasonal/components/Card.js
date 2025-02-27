import styles from "../styles/Card.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_BASE_URL } from '../util/constants';

export default function Card() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState({ payload: [] });

  function handleMonthClick(individualMonth) {
    router.push({ pathname: "/results", query: { month: individualMonth } });
  }

  function handleAllergenClick(searchedAllergen) {
    router.push({
      pathname: "/results",
      query: { allergen: searchedAllergen },
    });
  }

  function handleFamilyClick(searchedFamily) {
    router.push({ pathname: "/results", query: { family: searchedFamily } });
  }

  function handleUsedAsClick(searchedUsedAs) {
    router.push({ pathname: "/results", query: { usedAs: searchedUsedAs } });
  }

  function handleFoodTypeClick(searchedFoodType) {
    router.push({
      pathname: "/results",
      query: { foodType: searchedFoodType },
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API_BASE_URL}?item=${router.query.food}`);
      let result = await data.json();
      setCurrentItem(result);
    };
    if (!router.isReady) return;
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [router.isReady, router.query]);
  // if the current item exists then we map it into a card format
  if (currentItem.payload.length > 0) {
    return (
      <div
        className={styles.container}
        aria-label="Card containing details about the food item"
      >
        <h2 className={styles.header}>{currentItem.payload[0].name}</h2>
        <ol className={styles.months} data-cy="card-months-container">
          {currentItem.payload[0].month.map((individualMonth, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleMonthClick(individualMonth);
                }}
              >
                {individualMonth}
              </li>
            );
          })}
        </ol>
        <ul className={styles.foodTags}>
          <li
            onClick={() => {
              handleFamilyClick(currentItem.payload[0].family);
            }}
          >
            Family: {currentItem.payload[0].family}
          </li>
          <li
            onClick={() => {
              handleFoodTypeClick(currentItem.payload[0].foodtype);
            }}
          >
            Food Type: {currentItem.payload[0].foodtype}
          </li>
          <li
            onClick={() => {
              handleUsedAsClick(currentItem.payload[0].usedas);
            }}
          >
            Used As: {currentItem.payload[0].usedas}
          </li>
          <li
            onClick={() => {
              handleAllergenClick(currentItem.payload[0].allergens);
            }}
          >
            Allergens: {currentItem.payload[0].allergens}
          </li>
        </ul>
        <img
          src={currentItem.payload[0].imageurl}
          alt={currentItem.payload[0].name}
          className={styles.mainImage}
        />
        <p className={styles.mainDescription}>
          {currentItem.payload[0].description}
        </p>
      </div>
    );
  } else {
    // this is an error message if we don't have a match for the search query
    return (
      <p className={styles.errorContainer}>
        We don&apos;t seem to have that item, if you&apos;re expecting something
        here please check your search term!
      </p>
    );
  }
}

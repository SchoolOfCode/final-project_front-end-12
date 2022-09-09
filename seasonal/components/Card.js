import styles from "../styles/Card.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const searchString = "https://drab-ruby-seahorse-veil.cyclic.app/produce";

export default function Card() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState({ payload: [] });

  function handleMonthClick(individualMonth) {
    router.push({ pathname: "/results", query: { month: individualMonth } });
  }


function handleAllergenClick(searchedAllergen){
  router.push({ pathname: "/results", query: { allergen: searchedAllergen } })
}

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
          <li>Family: {currentItem.payload[0].family}</li>
          <li>Food Type: {currentItem.payload[0].foodtype}</li>
          <li>Used As: {currentItem.payload[0].usedas}</li>
          <li onClick={() => {
                  handleAllergenClick(currentItem.payload[0].allergens);
                }}>Allergens: {currentItem.payload[0].allergens}</li>
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

/*
- SURPRISE HIDDEN TASK ACCOMPLISHED: updated the buttons.
- add onclick to maps for the months and allergens
- onclick returns a search for selected value
- change li to a? or put an a inside the li, so we keep the semantic use of having the ul, while also having a tags?
*/

import Image from "next/image";
import styles from "../styles/Card.module.css";
//Import for when using proper state (once it persists on route change)
//import { useSearchContext } from "../context/search.js";

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

export default function Card() {
  //Import for when using proper state (once it persists on route change)
  //const [exampleState, setexampleState] = useSearchContext();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{exampleState.payload[0].name}</h1>
      <ol className={styles.months}>
        {exampleState.payload[0].month.map((individualMonth, index) => {
          return <li key={index}>{individualMonth}</li>;
        })}
      </ol>
      <ul className={styles.foodTags}>
        <li>
          <i>Family</i> <b>{exampleState.payload[0].family}</b>
        </li>
        <li>
          <i>Food Type</i> <b>{exampleState.payload[0].foodtype}</b>
        </li>
        <li>
          <i>Used As</i> <b>{exampleState.payload[0].usedas}</b>
        </li>
        <li>
          <i>Allergens</i> <b>{exampleState.payload[0].allergens}</b>
        </li>
      </ul>
      <div className={styles.descriptionContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://res.cloudinary.com/dvpop7e9w/image/upload/v1659018752/cld-sample-4.jpg"
            alt="Image of food item"
            width={600}
            height={400}
            className={styles.mainImage}
          />
        </div>
        <p className={styles.mainDescription}>
          {exampleState.payload[0].description}
        </p>
      </div>
    </div>
  );
}

/*

*/

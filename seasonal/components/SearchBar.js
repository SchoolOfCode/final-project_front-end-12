import { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { useRouter } from "next/router";

export function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const router = useRouter();
// on the press of the submit button here is where we check and pass on the query
//we have a regex check here to make sure only letters are handed in and it throws an error alert if not
// we also have an error for if the select value is empty prompting the user to select a value
// the query is then passed to the relevant path and each component performs a fetch with the qeury
  async function handleClick(e) {
    e.preventDefault();
    var letters = /^[A-Za-z]+$/;
    if (searchText.match(letters)) {
      if (selectValue === "Month") {
        router.push({ pathname: "/results", query: { month: searchText } });
      } else if (selectValue === "Item") {
        router.push({ pathname: "/item", query: { food: searchText, recipe: searchText } });
      } else if (selectValue === "Recipe") {
        router.push({ pathname: "/recipeResultsPage", query: { recipe: searchText } });
      } else if (selectValue === "") {
        alert("Please select to search by month, item or recipe");
      }
    } else {
      alert("Please use letters only in your search");
    }
  }

  function handleChange(e) {
    setSearchText(e.target.value);
    
  }

  return (
    <form>
      <div className={styles.searchContainer}>
        <label htmlFor="search input">
          <input
            type="text"
            className={styles.searchBar}
            id="search input"
            aria-label="Enter food item or month here to search"
            onChange={handleChange}
            placeholder='Search for more'
          />
        </label>
        <label htmlFor="search dropdown">
          <select
            aria-label="search dropdown"
            name="search dropdown"
            id="search dropdown"
            className={styles.dropdown}
            defaultValue=""
            onChange={(e) => {
              setSelectValue(e.target.value);
              console.log(selectValue);
            }}
          >
            <option value=''>Choose Filter</option>
            <option value='Month'>Month</option>
            <option value='Item'>Item</option>
            <option value='Recipe'>Recipe</option>
          </select>
        </label>
        <button
          id="search-button"
          type="submit"
          aria-label="Click to submit search"
          className={styles.submitButton}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <span className={styles.visuallyHidden}>Submit Search</span>
          Submit
        </button>
      </div>
    </form>
  );
}


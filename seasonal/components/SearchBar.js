import { useState, useEffect } from "react";
import styles from "../styles/SearchBar.module.css";
import { useSearchContext } from "../context/search.js";
import { useRouter } from "next/router";

export function SearchBar() {
  const [searchResults, setSearchResults] = useSearchContext();
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const router = useRouter();

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
        alert("Please select to search by month or item");
      }
    } else {
      alert("Please use letters only in your search");
    }
  }

  function handleChange(e) {
    setSearchText(e.target.value);
    console.log(searchText);
  }

  return (
    <form>
      <div className={styles.searchContainer}>
        <label htmlFor='search input'>
          <input
            type='text'
            className={styles.searchBar}
            id='search input'
            aria-label='Enter food item or month here to search'
            onChange={handleChange}
            placeholder='Search for more'
          />
        </label>
        <label htmlFor='search dropdown'>
          <select
            aria-label='search dropdown'
            name='search dropdown'
            id='search dropdown'
            className={styles.dropdown}
            defaultValue=''
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
          id='search-button'
          type='submit'
          aria-label='Click to submit search'
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

/*
PLAN
- create component file for searchbar DONE
- create styles file for searchbar DONE
- create a cheeky little searchbar DONE
- profit
- WE HAVE REMOVED BROKEN NAVBAR FROM PAGES / INDEX.JS TO TEST OUR COMPONENT
- TODO: FORM VALIDATION NOT QUITE WORKING, ONCLICK STILL RUNS EVEN IF ERROR REGISTERS. NOT A PRIORITY, OTHER WAYS TO ACHIEVE.
- TODO: MAYBE REMOVE TYPE="SUBMIT" ON BUTTON FOR REFRESH REASONS

WHAT IS HAPPENING
- we are taking searchText
- sling it at the back-end in a fetch request
- get back relevant results in the console

TO DO NEXT 
- TODO: make this interact with new page / components to display results
- TODO: Can't search by food item at the moment.
*/

// Plan
// making a drop down using the select - drop down menu
// look at search by item and search by month
// understand where the value is being passed to
// onChange select e.target.value
// when there's no selection made we just run get item

//error handling is horrific but kind of works?

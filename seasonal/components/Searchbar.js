import { useState } from "react";
import styles from "../styles/Searchbar.module.css";
import { useSearchContext } from "../context/search.js";

export function Searchbar() {
  const [searchResults, setSearchResults] = useSearchContext();
  const [searchText, setSearchText] = useState("");

  async function handleClick() {
    let searchString = "https://seasonality-server-new.herokuapp.com/produce";
    let modifiedMonth = searchText.slice(0, 3);
    const data = await fetch(`${searchString}?month=${modifiedMonth}`);
    let result = await data.json();
    console.log(result);
    setSearchResults(result.payload);
    console.log(`this is the search results console log: ${searchResults}`);
  }

  function handleChange(e) {
    setSearchText(e.target.value);
    console.log(searchText);
  }

  return (
    <form>
      <label for="searchInput">
        <input
          type="text"
          placeholder="Searchbar"
          id="searchInput"
          pattern="[a-zA-Z]"
          title="Please use letters only!"
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
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
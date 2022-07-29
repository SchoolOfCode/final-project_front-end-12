import { useState, useEffect } from "react";
import styles from "../styles/SearchBar.module.css";
import { useSearchContext } from "../context/search.js";
import { useRouter } from "next/router";

export function SearchBar() {
  const [searchResults, setSearchResults] = useSearchContext();
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const router = useRouter();

  //changes here- handleClick need to take in the value of the select and perform an if check

  async function handleClick() {
    var letters = /^[A-Za-z]+$/;
    if (searchText.match(letters)) {
      if (selectValue === "Month") {
        let searchString =
          "https://seasonality-server-new.herokuapp.com/produce";
        let modifiedMonth = searchText.slice(0, 3);
        const data = await fetch(`${searchString}?month=${modifiedMonth}`);
        let result = await data.json();
        console.log(result);
        setSearchResults(result.payload);
        console.log(`this is the search results console log: ${searchResults}`);
      } else if (selectValue === "Item") {
        router.push({ pathname: "/item", query: { food: searchText } });
        /* let searchString =
          "https://seasonality-server-new.herokuapp.com/produce";
        const data = await fetch(`${searchString}?item=${searchText}`);
        let result = await data.json();
        console.log(result);
        setSearchResults(result.payload);
        console.log(`this is the search results console log: ${searchResults}`);
        setTimeout(() => {

        }, 1000); */
      } else if (selectValue === "") {
        let searchString =
          "https://seasonality-server-new.herokuapp.com/produce";
        const data = await fetch(`${searchString}?item=${searchText}`);
        let result = await data.json();
        console.log(result);
        setSearchResults(result.payload);
        console.log(`this is the search results console log: ${searchResults}`);
      }
    } else {
      alert("Please enter a viable search");
    }
  }

  /* async function handleClick() {

if (selectValue==='Month'){
 let searchString = "https://seasonality-server-new.herokuapp.com/produce";
  let modifiedMonth = searchText.slice(0, 3);
  const data = await fetch(`${searchString}?month=${modifiedMonth}`);
  let result = await data.json();
  console.log(result);
  setSearchResults(result.payload);
  console.log(`this is the search results console log: ${searchResults}`);
}
else if(selectValue==='Item'){
  let searchString = "https://seasonality-server-new.herokuapp.com/produce";
  const data = await fetch(`${searchString}?item=${searchText}`);
  let result = await data.json();
  console.log(result);
  setSearchResults(result.payload);
  console.log(`this is the search results console log: ${searchResults}`);
}
else if (selectValue===''){
  let searchString = "https://seasonality-server-new.herokuapp.com/produce";
  const data = await fetch(`${searchString}?item=${searchText}`);
  let result = await data.json();
  console.log(result);
  setSearchResults(result.payload);
  console.log(`this is the search results console log: ${searchResults}`);
 
}
} */

  /* 
  async function handleClick() {
    let searchString = "https://seasonality-server-new.herokuapp.com/produce";
    let modifiedMonth = searchText.slice(0, 3);
    const data = await fetch(`${searchString}?month=${modifiedMonth}`);
    let result = await data.json();
    console.log(result);
    setSearchResults(result.payload);
    console.log(`this is the search results console log: ${searchResults}`);
  } */

  function handleChange(e) {
    setSearchText(e.target.value);
    console.log(searchText);
  }

  return (
    <form>
      <label for='searchInput'>
        <input
          type='text'
          placeholder='Searchbar'
          id='searchInput'
          pattern='[a-zA-Z]'
          title='Please use letters only!'
          onChange={handleChange}
        />
      </label>
      <button type='submit' onClick={handleClick}>
        Submit
      </button>
      <label for='searchDropdown'>
        <select
          name='searchDropdown'
          id='searchDropdown'
          onChange={(e) => {
            setSelectValue(e.target.value);
            console.log(selectValue);
          }}
        >
          <option value='' disabled selected hidden>
            Filter by Month or item
          </option>
          <option value='Month'>Month</option>
          <option value='Item'>Item</option>
        </select>
      </label>
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

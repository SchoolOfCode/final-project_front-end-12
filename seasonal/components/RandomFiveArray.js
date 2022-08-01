import React from 'react';
import Button from './Button';
import { useState, useEffect } from 'react';



export function RandomFiveArray(){
const [randomArray, setRandomArray]=useState({ payload: [] })
const [timeStamp, setTimeStamp]=useState('')

/* let dummydata= {payload: [{name:'carrot' },{name:'pear'},{name:'apple'}] }
 */
// we made usestates for the random array - this will be updated by the fetch 
// we want to find out how to get timestamp data from a user when they press on teh site
// we need to see what format that is in and how we pass it to the fetch request 

 useEffect(() => {
    let date= Date()
    console.log(date)
    let month= date.slice(4,7)
    setTimeStamp(month)

    const fetchData = async () => {
     // here we want to the fetch string the month 
      const data = await fetch(``);
      let result = await data.json();
      setRandomArray(result);
      console.log(
        `this is the search results console log: ${JSON.stringify(result)}`);
    
}

fetchData()
   
  },[]); 

  if (randomArray.payload.length > 0) {
    return randomArray.payload.map((result) => {
      return <Button text={result.name} />;
    });
  } else {
    return <p>Hmm, that's strange we know we put something here, please refresh to try again !</p>;
  }

}

import React from 'react';
import Button from './Button';
import { useState } from 'react';



export function RandomFiveArray(){
const [randomArray, setRandomArray]=useState({ payload: [] })
const [timeStamp, setTimeStamp]=useState('')

// we made usestates for the random array - this will be updated by the fetch 
// we want to find out how to get timestamp data from a user when they press on teh site
// we need to see what format that is in and how we pass it to the fetch request 


useEffect(() => {
    const fetchData = async () => {
     // here we want to pass in the date time stamp 
        
      const data = await fetch(``);
      let result = await data.json();
      setRandomArray(result);
      console.log(
        `this is the search results console log: ${JSON.stringify(result)}`
      );
   
  },[timeStamp]);


 return randomArray.payload.map((result) => {
            return <Button text={result.name} />;
          });
        }

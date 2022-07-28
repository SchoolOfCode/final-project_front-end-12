import Image from "next/image";
//Import for when using proper state (once it persists on route change)
//import { useSearchContext } from "../context/search.js";

const exampleState = {
  success: true,
  payload: [
    {
      allergens: "NA",
      description:
        "This is an example entry, and this is an example description.",
      family: "Rose",
      foodtype: "Pome",
      id: 1,
      imageurl: "https://via.placeholder.com/200x200",
      month: ["Jan", "Feb", "Sep", "Oct", "Nov", "Dec"],
      name: "Apple",
      usedas: "Fruit",
    },
  ],
};

export default function Card() {
  //Import for when using proper state (once it persists on route change)
  //const [exampleState, setexampleState] = useSearchContext();
  return (
    <div>
      <h1>{exampleState.payload[0].name}</h1>
      <ol>
        {exampleState.payload[0].month.map((individualMonth, index) => {
          return <li key={index}>{individualMonth}</li>;
        })}
      </ol>
      <ul>
        <li>Family: {exampleState.payload[0].family}</li>
        <li>Food Type: {exampleState.payload[0].foodtype}</li>
        <li>Used As: {exampleState.payload[0].usedas}</li>
        <li>Allergens: {exampleState.payload[0].allergens}</li>
      </ul>
      <Image
        src='https://res.cloudinary.com/dvpop7e9w/image/upload/v1659018752/cld-sample-4.jpg'
        className=''
        alt='Image of food item'
        width={300}
        height={200}
      />
      <p>{exampleState.payload[0].description}</p>
    </div>
  );
}

/*

*/

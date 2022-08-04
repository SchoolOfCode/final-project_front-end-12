import "../styles/globals.css";
import { SearchResultsProvider } from "../context/search.js";
import ReactDOM from "react-dom";
import React from "react";
import { useEffect } from "react"
import axe from "@axe-core/react";



function MyApp({ Component, pageProps }) {


  useEffect(() => {
    
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== "production") {
     
      axe(React, ReactDOM, 1000);
    }
  }, []);

  return (
    <SearchResultsProvider>
      <Component {...pageProps} />
    </SearchResultsProvider>
  );
}

export default MyApp;

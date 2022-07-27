import { createContext, useContext, useState } from "react";

const Context = createContext();

export function SearchResultsProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <Context.Provider value={[searchResults, setSearchResults]}>
      {children}
    </Context.Provider>
  );
}

export function useSearchContext() {
  return useContext(Context);
}

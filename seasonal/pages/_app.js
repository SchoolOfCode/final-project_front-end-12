import "../styles/globals.css";
import { SearchResultsProvider } from "../context/search.js";

function MyApp({ Component, pageProps }) {
  return (
    <SearchResultsProvider>
      <Component {...pageProps} />
    </SearchResultsProvider>
  );
}

export default MyApp;

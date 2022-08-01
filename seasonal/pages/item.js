import Card from "../components/Card.js";
import { NavBar } from "../components/NavBar.js";
import { SearchBar } from "../components/SearchBar.js";
import styles from "../styles/Card.module.css";

export default function Item() {
  return (
    <div className={styles.pagecontainer}>
      <NavBar />
      <Card />
      <footer className={styles.footer}>
        <SearchBar />
      </footer>
    </div>
  )
  
  
}

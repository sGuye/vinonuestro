import { useState } from "react";
import styles from "./searchbar.module.css";

function Searchbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form className={styles.searchbar} role="search">
        <input
          type="search"
          name="q"
          placeholder="Buscar"
          aria-label="Buscar"
          autocomplete="off"
        />
        <button
          type="button"
          aria-label="Limpiar búsqueda"
          className={styles.searchClearBtn}
        >
          <i className="fas fa-times"></i>
        </button>
        <button type="submit" aria-label="Buscar">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </>
  );
}
export default Searchbar;
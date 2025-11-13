import { useState } from "react";
import Searchbar from "../Searchbar/searchbar";
import Card from "../Card/card";
import styles from "./explore.module.css";

function Explore() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.explore}>
        <h2 className={styles.exploreTitle}>Explorar catálogo</h2>

        <nav className={styles.exploreNav}>
          <form className={styles.exploreSearchForm} role="search">
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

          <ul className={styles.categories}>
            <li className={styles.category}>
              <a href="#" data-category="all">
                Todos
              </a>
            </li>
            <li className={styles.category}>
              <a href="#" data-category="red">
                Tintos
              </a>
            </li>
            <li className={styles.category}>
              <a href="#" data-category="white">
                Blancos
              </a>
            </li>
            <li className={styles.category}>
              <a href="#" data-category="rose">
                Rosados
              </a>
            </li>
            <li className={styles.category}>
              <a href="#" data-category="sparkling">
                Espumantes
              </a>
            </li>
          </ul>

          <div className={styles.filters}>
            <div className={styles.filter}>
              <select name="profile" id="profile">
                <option value="" disabled selected hidden>
                  Perfil de sabor
                </option>
                <option value="smooth">Vino suave</option>
                <option value="bold">Vino intenso</option>
                <option value="fruity">Vino frutal</option>
                <option value="sweet">Vino frutal</option>
                <option value="dry">Vino seco</option>
                <option value="spicy">Vino especiado</option>
                <option value="crisp">Vino fresco</option>
              </select>
            </div>
            <div className={styles.filter}>
              <select name="price" id="price">
                <option value="" disabled selected hidden>
                  Precio
                </option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </div>
          </div>
       

        <div className={styles.cardContainer}>
          
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
         </nav>
      </div>
    </>
  );
}

export default Explore;

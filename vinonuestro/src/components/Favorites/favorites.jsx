import { useState } from "react";
import styles from "./favorites.module.css";

function Favorites() {
  // sample inicial con >10 para ver el comportamiento de "Ver más"
  const [favorites, setFavorites] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      name: i === 0 ? "Malbec Reserva" : `Vino ${i + 1}`,
      price: i === 0 ? "$850" : "$650",
    }))
  );

  const [visibleCount, setVisibleCount] = useState(10);
  const [cart, setCart] = useState([]);

  const addToCart = (wine) => {
    setCart((prev) => [...prev, wine]);
    // placeholder: luego conectas con tu lógica real
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const handleVerMas = () => {
    setVisibleCount((prev) => Math.min(prev + 10, favorites.length));
  };

  const handleVerMenos = () => {
    setVisibleCount(10);
  };

  const visibleFavorites = favorites.slice(0, visibleCount);

  return (
    <div className={styles.favorites}>
      <h1 className={styles.title}>
        <span class="material-symbols-rounded">favorite</span>Favoritos
      </h1>

    
        {visibleFavorites.map((wine) => (
          <div key={wine.id} className={styles.item}>
            <img
              className={styles.wineImage}
              src="../../src/assets/vinonuestrocard.jpg"
              alt="Logo de Vino Nuestro"
            />
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <div className={styles.name}>{wine.name}</div>
                <div className={styles.price}>{wine.price}</div>
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.addBtn}
                  onClick={() => addToCart(wine)}
                  aria-label={`Agregar ${wine.name} al carrito`}
                >
                  Añadir a la cesta
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => removeFavorite(wine.id)}
                  aria-label={`Eliminar ${wine.name} de favoritos`}
                >
                  <span class="material-symbols-rounded">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
 
    </div>
  );
}

export default Favorites;

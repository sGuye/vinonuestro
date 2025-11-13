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
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.heart}>♡</span>
        <h3 className={styles.title}>Mis favoritos</h3>
      </div>

      <div className={styles.list}>
        {visibleFavorites.map((wine) => (
          <div key={wine.id} className={styles.item}>
            <div className={styles.left}>
              <div className={styles.thumb} aria-hidden>
                {/* placeholder imagen */}
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{wine.name}</div>
                <div className={styles.price}>{wine.price}</div>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.addBtn}
                onClick={() => addToCart(wine)}
                aria-label={`Agregar ${wine.name} al carrito`}
              >
                Añadir
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => removeFavorite(wine.id)}
                aria-label={`Eliminar ${wine.name} de favoritos`}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {favorites.length > visibleCount ? (
        <button className={styles.viewMore} onClick={handleVerMas}>
          Ver más
        </button>
      ) : favorites.length > 10 ? (
        <button className={styles.viewMore} onClick={handleVerMenos}>
          Ver menos
        </button>
      ) : null}
    </div>
  );
}

export default Favorites;
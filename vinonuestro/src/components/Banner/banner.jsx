import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./banner.module.css";

function Banner() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/aboutyou");
  };

  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Vino Nuestro</h1>
        <h2 className={styles.bannerSubtitle}>
          Cada vino cuenta una historia...
        </h2>
        <p className={styles.bannerText}>
          Descubre vinos únicos con narrativas auténticas. <br /> Desde pequeñas
          bodegas familiares hasta grandes reservas, <br />
          cada botella tiene algo especial que contar.
        </p>
        <button onClick={handleClick} className={styles.bannerButton}>
          Descubrir vino para mí
          <span class="material-symbols-rounded">magic_button</span>
        </button>
      </div>
    </>
  );
}

export default Banner;

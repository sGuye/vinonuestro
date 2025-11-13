import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./card.module.css";

function Card() {
   const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleViewDetail = () => {
    navigate('/detail')
  }

  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src="../../src/assets/vinonuestrocard.jpg"
          alt="Logo de Vino Nuestro"
        />
         <div className={styles.cardDetail}>
        <div className={styles.cardTitle}>
          <h3>Nombre del Vino</h3>
        </div>

        <div className={styles.cardSubtitle}>
          <p>Bodega</p>
        </div>

        <div className={`${styles.cardPrice} material-symbols-rounded`}>
          <p>$1,000.00</p>
        </div>
        </div>
         <button onClick={handleViewDetail} className={styles.cardButton}>Ver detalles</button>
      </div>
    </>
  );
}
export default Card;

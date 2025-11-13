import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./aboutYou.module.css";

function AboutYou() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleRecommendations = () => {
    navigate("/foryou");
  };

  return (
    <>
      <div className={styles.abaoutYou}>
        <h2 className={styles.abaoutYouTitle}>Contanos sobre vos:</h2>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <h3 className={styles.abaoutYouSubtitle}>
              ¿Cuál es tu presupuesto?
            </h3>
            <select name="" id="">
              <option value="" disabled selected hidden>
                Presupuesto
              </option>
              <option value="low">Menos de $500</option>
              <option value="mid">$500 - $1500</option>
              <option value="high">Más de $1500</option>
            </select>
          </div>
          <div className={styles.filter}>
            <h3 className={styles.abaoutYouSubtitle}>
              ¿Qué tipo de vino preferís?
            </h3>
            <select name="" id="">
              <option value="" disabled selected hidden>
                Tipo de vino
              </option>
              <option value="">Tintos intensos</option>
              <option value="">Blancos frescos</option>
              <option value="">Rosados suaves</option>
              <option value="">Espumantes</option>
            </select>
          </div>
          <div className={styles.filter}>
            <h3 className={styles.abaoutYouSubtitle}>¿Para qué ocasión?</h3>
            <select name="" id="">
              <option value="" disabled selected hidden>
                Oacasión
              </option>
              <option value="">Cena romántica</option>
              <option value="">Reunión con amigos</option>
              <option value="">Celebración especial</option>
              <option value="">Momento personal</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleRecommendations}
          className={styles.abaoutYouButton}
        >
          Ver Recomendaciones
        </button>
      </div>
    </>
  );
}

export default AboutYou;

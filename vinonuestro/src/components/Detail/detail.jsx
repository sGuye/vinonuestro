import { useState } from 'react'
import styles from './detail.module.css'

function Detail() {
  const [currentImage, setCurrentImage] = useState(0)
  const wineData = {
    name: "Malbec Reserva 2021",
    winery: "Bodega Familia Mendoza",
    price: "$850",
    history: "En 1920, Don Carlos Mendoza plantó las primeras vides en esta parcela de Luján de Cuyo. Cuatro generaciones después, sus bisnietos continúan la tradición familiar, cuidando cada planta con el mismo amor y dedicación. Este Malbec representa la esencia de una familia que ha dedicado su vida a crear vinos excepcionales.",
    taste: {
      description: "Intenso y elegante, con notas de frutos rojos maduros y un toque especiado.",
      body: 3, // en una escala de 1-4
      tannins: 3 // en una escala de 1-4
    },
    pairing: "Ideal con carnes rojas a la parrilla, cordero patagónico o quesos duros. Su estructura permite acompañar platos intensos sin perder elegancia."
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.mainImage}>
        <img
          className={styles.cardImg}
          src="../../src/assets/vinonuestrocard.jpg"
          alt="Logo de Vino Nuestro"
        />
      </div>

      <div className={styles.wineInfo}>
        <h2>{wineData.name}</h2>
        <h3>{wineData.winery}</h3>
        <p className={styles.price}>{wineData.price}</p>

        <section>
          <h4>Su historia</h4>
          <p>{wineData.history}</p>
        </section>

        <section>
          <h4>Perfil de sabor</h4>
          <p>{wineData.taste.description}</p>
          
          <div className={styles.characteristics}>
            <div className={styles.characteristic}>
              <span>Cuerpo</span>
              <div className={styles.dots}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < wineData.taste.body ? styles.activeDot : styles.dot}></span>
                ))}
              </div>
            </div>

            <div className={styles.characteristic}>
              <span>Taninos</span>
              <div className={styles.dots}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < wineData.taste.tannins ? styles.activeDot : styles.dot}></span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4>Maridaje sugerido</h4>
          <p>{wineData.pairing}</p>
        </section>

        <div className={styles.actions}>
          <button className={styles.buyButton}>Comprar ahora</button>
          <button className={styles.favoriteButton}><span class="material-symbols-rounded">favorite</span></button>
        </div>
      </div>
    </div>
  )
}

export default Detail
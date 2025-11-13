import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './profile.module.css'

function Profile() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Malbec Reserva', price: '$850' },
    { id: 2, name: 'Chardonnay Premium', price: '$650' }
  ])

  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: 1, name: 'Pedido #001', date: '15 Ene 2025', price: '$1200', status: 'Entregado' },
    { id: 2, name: 'Pedido #002', date: '10 Ene 2025', price: '$850', status: 'En camino' }
  ])

  const [recommendations, setRecommendations] = useState([
    { id: 1, name: 'Nuevo Blend', description: 'Basado en tus gustos' }
  ])






  const navigate = useNavigate();

  const handleRecommendations = () => {
    navigate("/foryou");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mi perfil</h1>
        <div className={styles.profileIcon}>👤</div>
      </div>

      <div className={styles.content}>
        {/* Mis favoritos */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>♡</span> Mis favoritos
          </h2>
          <div className={styles.favoritesList}>
            {favorites.map((wine) => (
              <div key={wine.id} className={styles.favoriteItem}>
                <div className={styles.wineImage}></div>
                <div className={styles.wineInfo}>
                  <p className={styles.wineName}>{wine.name}</p>
                  <p className={styles.winePrice}>{wine.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historial de compras */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⏱</span> Historial de compras
          </h2>
          <div className={styles.purchaseList}>
            {purchaseHistory.map((purchase) => (
              <div key={purchase.id} className={styles.purchaseItem}>
                <div className={styles.purchaseInfo}>
                  <p className={styles.purchaseNumber}>{purchase.name}</p>
                  <p className={styles.purchaseDate}>{purchase.date} - {purchase.price}</p>
                  <p className={styles.purchaseStatus}>{purchase.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recomendaciones */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⭐</span> Recomendaciones
          </h2>
          <div className={styles.recommendationsList}>
            {recommendations.map((rec) => (
              <div key={rec.id} className={styles.recommendationItem}>
                <div className={styles.recImage}></div>
                <div className={styles.recInfo}>
                  <p className={styles.recName}>{rec.name}</p>
                  <p className={styles.recDescription}>{rec.description}</p>
                </div>
              </div>
            ))}
            <button onClick={handleRecommendations} className={styles.viewAllButton}>Ver todas las recomendaciones</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
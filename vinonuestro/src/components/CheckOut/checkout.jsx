import { useState } from 'react'
import styles from './checkout.module.css'

function Checkout() {
  const [quantity, setQuantity] = useState(1)
  const [ageVerified, setAgeVerified] = useState(false)
  const [shippingOption, setShippingOption] = useState('standard')

  const wine = {
    name: 'Malbec Reserva 2021',
    winery: 'Bodega Familia Mendoza',
    price: 850,
    image: '/path-to-wine-image.jpg'
  }

  const shippingCost = shippingOption === 'standard' ? 150 : 300
  const subtotal = wine.price * quantity
  const total = subtotal + shippingCost

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.title}>Carrito de compras</h1>

      {/* Wine Item */}
      <div className={styles.cartItem}>
        <div className={styles.wineImage}>
          <span>Vino</span>
        </div>
        <div className={styles.wineDetails}>
          <h2 className={styles.wineName}>{wine.name}</h2>
          <p className={styles.winery}>{wine.winery}</p>
          <p className={styles.price}>${wine.price}</p>
        </div>
        <div className={styles.quantityControl}>
          <button onClick={() => handleQuantityChange(-1)}>−</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>

      {/* Summary */}
      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Envío</span>
          <span>${shippingCost}</span>
        </div>
        <div className={styles.summaryRow + ' ' + styles.total}>
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Age Verification */}
      <div className={styles.ageVerification}>
        <h3>Verificación de edad</h3>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={ageVerified}
            onChange={(e) => setAgeVerified(e.target.checked)}
          />
          <span>Confirmo que soy mayor de 18 años</span>
        </label>
      </div>

      {/* Shipping Options */}
      <div className={styles.shippingOptions}>
        <h3>Opciones de envío</h3>
        <label className={styles.radioOption}>
          <input
            type="radio"
            value="standard"
            checked={shippingOption === 'standard'}
            onChange={(e) => setShippingOption(e.target.value)}
          />
          <div className={styles.radioContent}>
            <span className={styles.shippingTitle}>Envío estándar</span>
            <span className={styles.shippingDetails}>3-5 días hábiles - $150</span>
          </div>
        </label>

        <label className={styles.radioOption}>
          <input
            type="radio"
            value="express"
            checked={shippingOption === 'express'}
            onChange={(e) => setShippingOption(e.target.value)}
          />
          <div className={styles.radioContent}>
            <span className={styles.shippingTitle}>Envío express</span>
            <span className={styles.shippingDetails}>1-2 días hábiles - $300</span>
          </div>
        </label>
      </div>

      {/* Checkout Button */}
      <button
        className={styles.checkoutButton}
        disabled={!ageVerified}
      >
        Proceder al pago
      </button>
    </div>
  )
}

export default Checkout
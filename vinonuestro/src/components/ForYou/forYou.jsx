import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './forYou.module.css'

function ForYou() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleViewDetail = () => {
    navigate('/detail')
  }

  return (
    <div>
      <h1>Vinos perfectos parra ti</h1>
      <li>
        <ul>
          <img src='' alt='icono de vino'/>
          <h2>Malbec Reserva 2021</h2>
          <p>Un vino robusto con notas de frutas rojas y especias.</p>
          <button onClick={handleViewDetail}>Ver ficha completa</button>
        </ul>
        <ul>
          <img src='' alt='icono de vino'/>
          <h2>Chardonnay Premium 2020</h2>
          <p>Un vino blanco fresco con aromas cítricos y toques de vainilla.</p>
          <button onClick={handleViewDetail}>Ver ficha completa</button>
        </ul>
        <ul>
          <img src='' alt='icono de vino'/>
          <h2>Rosé Delight 2022</h2>
          <p>Un vino rosado ligero y afrutado, perfecto para el verano.</p>
          <button onClick={handleViewDetail}>Ver ficha completa</button>
        </ul>
      </li>
    </div>
  )
}

export default ForYou
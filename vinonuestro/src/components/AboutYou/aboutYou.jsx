import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AboutYou() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleRecommendations = () => {
    navigate('/foryou')
  }

  return (
    <>
      <div><h1>Cuentanos sobre Ti</h1></div>

      <div>
        <p>Cual es tu presupuesto?</p>
        <div>   
          <button>Menos de $500</button>
          <button>$500 - $1500</button>
          <button>Mas de $1500</button>
        </div>
        <div> 
          <p>que tipo de vinos prefieres?</p>
          <button>Tinto</button>
          <button>Blanco</button>
          <button>Rosado</button>
          <button>Espumante</button>
        </div>
        
        <div>
          <div>para que ocasiones sueles comprar vino?</div> 
          <button>Cena Romantica</button>
          <button>Reunion con Amigos</button>
          <button>Celebracion especial</button>
          <button>momento personal</button>
        </div>

        <button onClick={handleRecommendations}>Ver Recomendaciones</button>
      </div>
    </>
  )
}

export default AboutYou
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './banner.module.css'

function Banner() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/aboutyou')
  }

  return (
    <>
      <div>
        <h1>Vino Nuestro</h1>
        <p>Welcome to Vino Nuestro, your go-to place for exquisite wines!</p>
      </div>
      <button onClick={handleClick}>Descubrir vino para mi</button>
    </>
  )
}

export default Banner
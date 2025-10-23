import { useState } from 'react'
import './banner.module.css'

function Banner() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vino Nuestro</h1>
        <p>Welcome to Vino Nuestro, your go-to place for exquisite wines!</p>
      </div>
      <button>Descubrir vino para mi</button>
    </>
  )
}

export default Banner
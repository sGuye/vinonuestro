import { useState } from 'react'
import './catalog.module.css'

function Catalog() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Catalog of Exquisite Wines</h2>
        <p>Explore our curated selection of fine wines from around the world.</p>



        <select>
          <option value="red">Red Wines</option>
          <option value="white">White Wines</option>
          <option value="rose">Rosé Wines</option>
          <option value="sparkling">Sparkling Wines</option>
        </select>

        <select>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>    
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
        </select>

        <div>
          <h3>Featured Wines</h3>
          <ul>
            <li>Chateau Margaux 2015 - $999 - 4.9 Stars</li>
            <li>Dom Pérignon 2010 - $199 - 4.8 Stars</li>
            <li>Screaming Eagle Cabernet 2016 - $2999 - 5.0 Stars</li>
            <li>Cloudy Bay Sauvignon Blanc 2020 - $30 - 4.5 Stars</li>
            <li>Whispering Angel Rosé 2021 - $25 - 4.6 Stars</li>
            <li>Chateau Margaux 2015 - $999 - 4.9 Stars</li>
            <li>Dom Pérignon 2010 - $199 - 4.8 Stars</li>
            <li>Screaming Eagle Cabernet 2016 - $2999 - 5.0 Stars</li>
            <li>Cloudy Bay Sauvignon Blanc 2020 - $30 - 4.5 Stars</li>
            <li>Whispering Angel Rosé 2021 - $25 - 4.6 Stars</li>
            <li>Chateau Margaux 2015 - $999 - 4.9 Stars</li>
            <li>Dom Pérignon 2010 - $199 - 4.8 Stars</li>
            <li>Screaming Eagle Cabernet 2016 - $2999 - 5.0 Stars</li>
            <li>Cloudy Bay Sauvignon Blanc 2020 - $30 - 4.5 Stars</li>
            <li>Whispering Angel Rosé 2021 - $25 - 4.6 Stars</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Catalog
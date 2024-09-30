import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from '../Components/Product'

const Products = () => {
  // Variáel de estado dos produtos>
  const [products, setProducts] = useState(Data.products)
  return (
    <div className="container mt-5">
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {
          products.map(p => (
            <Product product = {p}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products
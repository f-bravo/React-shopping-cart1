import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'

const Carts = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-8">
          {cart.map(p =>(
            <CartProduct product={p} >

            </CartProduct>
          ))}
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  )
}

export default Carts
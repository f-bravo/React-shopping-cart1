import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const ContextProvider = ({children}) => {
  // Context Cart
  const [cart, dispatch] = useReducer(CartReducer, [])
  return (
  <CartContext.Provider value={{cart, dispatch}}>
    {children}
  </CartContext.Provider>

  )
}

export default ContextProvider
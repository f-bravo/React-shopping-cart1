import React from 'react'

const CartProduct = ({product}) => {
  return (
    <div className='d-flex border my-3 '>
      <img src={product.thumbnail} className='w-25 h-25' alt="" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button className='rounded-circle px-2'><b>-</b></button>
          <button className='rounded'>{product.quantity}</button>
          <button className='rounded-circle px-2'><b>+</b></button>
        </div>
        <button className='btn btn-sm btn-warning'> Remove</button>
      </div>    
    </div>
  )
}

export default CartProduct
import React from 'react'
import { BsCart } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between bg-secondary py-3 px-5 text-white'>
        <a href="" className='navbar-brand fs-4 fw-bolder'>Shop</a>
        <a href="" className='navbar-link fs-5 text-white'><BsCart />0</a>
    </div>
  )
}

export default Navbar
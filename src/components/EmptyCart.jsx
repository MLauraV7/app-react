import React from 'react';
import { Link } from 'react-router-dom';
import '../css/EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
        <h2>Tu carrito está vacío</h2>
        <h3>Te invitamos a ver nuestra colección de productos</h3>
        <Link to= '/'> Ir a Home </Link>
    </div>
  )
}

export default EmptyCart
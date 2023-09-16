import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

  const {cantidadEnCarrito} = useContext(CartContext);

  return (
    <div className="fs-5 text px-5 text-light">
      <Link>
        <i className="bi bi-cart-fill"></i>
        <span>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const vaciar = () => {
        vaciarCarrito()
    }

  return (
    <div>
        <h1>Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <p>precio unidad: ${prod.precio}</p>
                    <p>precio total: ${prod.precio * prod.cantidad}</p>
                    <p>cantidad: {prod.cantidad}</p>
                </div>
            )   )
        }

        {   
            carrito.length > 0 ?
            <>
                <h2>precio total: ${precioTotal()}</h2>
                <button onClick={vaciar}>Vaciar carrito</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> : <h2>Su carrito esta vacio  :( </h2>

        }
    </div>
  )
}

export default Carrito
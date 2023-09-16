import React from 'react'
import { Link } from 'react-router-dom';

function Item({producto}) {

  

  return (
    <div className="juegos">
        <img src={producto.imagen} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p className="fs-5">Plataforma: {producto.plataforma}</p>
        <p className="fs-5">Precio: ${producto.precio}</p>
        <p className="fs-5">Disponibles: {producto.stock}</p>
        <Link className="border border-light px-5 py-1 bg-success rounded text-light" to={`/item/${producto.id}`}>Ver Mas</Link>
    </div> 
  )
}

export default Item;
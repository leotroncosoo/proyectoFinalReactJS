import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({item}) {

  const {carrito, onAdd} = useContext(CartContext);

  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
  
  const sumar = () => { cantidad < item.stock && setCantidad  (cantidad + 1)};
  
  const restar = () => {cantidad > 1 && setCantidad (cantidad - 1)};
  
  
  
  return (
    <div className="detalle">
      <div className="contenedor-detalle">
        <img src={item.imagen} alt={item.nombre} />
        <div className="contenido">
          <h3>{item.nombre}</h3>
          <p>Plataforma: {item.plataforma}</p>
          <p>Precio: {item.precio}</p>
          <ItemCount  cantidad={cantidad} sumar={sumar} restar={restar} onAdd={() => { onAdd (item, cantidad)}}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
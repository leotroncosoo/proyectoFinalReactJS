import ItemCount from "./ItemCount";

function ItemDetail({item}) {

  const onAdd = (valor) => {
    console.log(`Agregado al carrito: ${valor}`);
  };

  return (
    <div className="detalle">
      <div className="contenedor-detalle">
        <img src={item.imagen} alt={item.nombre} />
        <div className="contenido">
          <h3>{item.nombre}</h3>
          <p>Plataforma: {item.plataforma}</p>
          <p>Precio: {item.precio}</p>
          <ItemCount  initial={0} stock={10} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
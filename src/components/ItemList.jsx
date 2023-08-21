import React, { useEffect, useState } from 'react'
import data from '../productos.json'
import Item from './Item';
import { useParams } from 'react-router-dom';

function ItemList() {

    const [productos , setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
        });
      };


      const plataforma = useParams().plataforma;
      console.log(plataforma);

    useEffect(() => {
        pedirProductos ()
            .then((res) =>{
              if (plataforma){
                setProductos(res.filter((prod) => prod.plataforma === plataforma));
              }else{
                setProductos(res);
              }
            });
    },  [plataforma]);

    

  return (
    <div className="contenedor">
      
        {
            productos.length > 0 && 
            productos.map((producto) => <Item key={producto.id} producto={producto} />
            ) 
        }
    </div>
  )
}

export default ItemList;
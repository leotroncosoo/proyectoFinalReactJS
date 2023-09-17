import React, { useEffect, useState } from 'react'
/* import data from '../productos.json' */
import Item from './Item';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/datos"
import { getDocs , collection, query, where } from 'firebase/firestore';
import { pedirItemPorId, products } from './pedirDatos';
import { toast } from 'sonner';


function ItemList() {

    const [productos , setProductos] = useState([]);
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryID} = useParams();


    const pedirProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
          }, 2000);
        });
      };
      
      
      const plataforma = useParams().plataforma;
      console.log(plataforma);
     
     useEffect(() => {
       
       const juegosCollection = collection(db, "juegos");
       const filtrarJuegos = query(juegosCollection, where("plataforma", "==", "nintendo"));
       const losJuegos = getDocs(filtrarJuegos);
       
       const asyncFunc = categoryID ? pedirItemPorId : pedirProductos

       toast.promise(losJuegos, {
         loading: "Cargando...",
         success: (resultado) => {
   
             const aux = resultado.docs.map((doc) => {
                 const producto = doc.data()
                 producto.id = doc.id
                 return producto
             })
   
             setData(aux)
   
             return "Se cargaron los productos"
         },
         error: (error) => {
             console.log(error)
             toast("Hubo un error al cargar los productos")
         }
     })
   
     asyncFunc(categoryID)
         .then(response => {
             setProductos(response)
         })
         .catch(error => {
             console.error(error)
         })
         .finally(()=> setLoading(false))
     },[categoryID]); 

     
       

  return (
    <div className="contenedor">
        {
            products.length > 0 && 
            products.map((producto) => <Item key={producto.id} producto={producto} />
            ) 
        }
    </div>
  )
      }
export default ItemList;
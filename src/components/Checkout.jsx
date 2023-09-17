import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import { db } from '../firebase/datos';




const Checkout = () => {
  
    const [user, setUser] = useState({});
    const [orderID, setOrderID] = useState("");
    const [validate, setValidate] = useState("");
    const {carrito, cantidadEnCarrito, vaciarCarrito} = useContext(CartContext);


    const datosUsuarios = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const terminarCompra = (e) => {
        e.preventDefault()
        if(!user.name && user.phone){
            toast("rellenar este campo")
        }else{
            let order = {
                user,
                item: carrito,
                total: cantidadEnCarrito(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "ventas")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderID(res.id)
                vaciarCarrito()
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
    return (
        <div>
            {orderID !== ""
            ? <div><h5>su token de compra es {orderID}</h5></div>
            : 
            <div>
                <h2 className="">Terminar su compra</h2>
                <h4 className="">Complete con sus datos el formulario</h4>
                <form onSubmit={terminarCompra}>
            <div >
                <label className='form-label'>Ingrese su nombre primero y luego su apellido </label>
                <input className='form-control' onChange={datosUsuarios} type="text" placeholder='Nombre y apellido' name='name' required />
            </div>
            <div >
                <label className='form-label'>Ingrese su numero de telefono sin +54 </label>
                <input className='form-control' onChange={datosUsuarios} type="number" placeholder='Ej: 1122443366' name='phone' required />
            </div>
            <div >
                <label className='form-label'>Ingrese su correo electronico </label>
                <input className='form-control' onChange={datosUsuarios} type="email" placeholder='Ej: velez@gmail.com' name='mail' required />
            </div>
            <div >
                <label className='form-label'>Repita su correo electronico </label>
                <input className='form-control' type="email" placeholder='Ej: velez@gmail.com' name='mail' onChange={((e)=>setValidate(e.target.value))} />
            </div>
            <button className='btn btn-dark' type='submit' disabled={validate !== user.mail} >Generar orden de compra</button>
        </form>
        </div>  
            } 
        </div>
    )

}

export default Checkout
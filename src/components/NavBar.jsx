import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className="d-flex justify-content-between align-items-center p-4 navegador">
        <Link to="/" className="fs-4 text-primary-emphasis m-0 ">TuskGaming</Link>
        <ul className="d-flex list-unstyled gap-5 m-0">
            <li><Link to="/"className="text-light letra">inicio</Link></li>
            <li><Link to="/plataforma/ps4"className="text-light letra">Ps4</Link></li>
            <li><Link to="/plataforma/nintendo"className="text-light letra">Nintendo Switch</Link></li>
        </ul>
        <li><Link to="/carrito"className="text-light letra"><CartWidget/></Link></li>  
    </div>
  )
}

export default NavBar
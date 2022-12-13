import React from 'react';
import { NavLink } from "react-router-dom";

import '../../estilos/componentes/Nav.css';


const Nav = (props) => {
    return (
        <Nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink avtiveClassName="activo" exact to ="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to ="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to ="/contacto">Contacto</NavLink></li>
                </ul>
            </div>

        </Nav>
    )
}
export default Nav;
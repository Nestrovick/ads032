import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return(
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/unidades">Unidades</NavLink></li>
            <li><NavLink to="/aulas">Aulas</NavLink></li>
            <li><NavLink to="/matricula">Matricula</NavLink></li>
        </ul>
    )
}
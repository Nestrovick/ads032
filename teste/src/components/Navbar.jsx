import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return(
        <ul>
            <li><NavLink to="/">Carrinho</NavLink></li>
            <li><NavLink to="/produtos">Produtos</NavLink></li>
        </ul>
    )
}
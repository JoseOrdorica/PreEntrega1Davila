import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
    <header>
    <h2>Mercado Cautivo</h2>
    <nav>
        <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
        </ul>
    </nav>
    <CartWidget/>
    </header>
    )
}

export default NavBar

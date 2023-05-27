import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const contadorCarrito = useRef(0);

    function agregaralCarrito() {
    contadorCarrito.current = contadorCarrito.current + 1;
    console.log(contadorCarrito.current)
    }
    return (
        <div>
            <h2>Productos en el carrito</h2>
            <button onClick={agregaralCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default UseRef

import { useEffect, useState } from 'react'

const Contador = ({inicial, stock}) => {
    const [contador, setContador] = useState(inicial)
    const [color, setColor] =useState('black');

    useEffect( ()=> {
        console.log('useEffect ejecutado!');
        document.title = `Contador ${contador}`;
        if(contador > 6) {
            setColor('red');
        } else {
            setColor('black');
        }
    },[contador]

    )

    const aumentarContador = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    const agregarCarrito = () => {
        console.log(`Se agregaron ${contador} items al carrito`)
    }

    return (
    <div>
        <h2>Contador</h2>
        <button onClick={disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> + </button>
        <br />
        <button onClick={agregarCarrito} style={{color}}>Agregar al Carrito</button>
    </div>
    )
}

export default Contador

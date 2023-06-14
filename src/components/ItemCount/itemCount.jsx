import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({initial, stock, addFunction}) => {
    const [counter, setCounter] = useState(initial);
        
    const increase = () => {
        if(counter < stock) { 
            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if(counter > initial) { 
            setCounter(counter - 1);
        }
    }

    return (
    <>
        <div>
            <button onClick={decrease}> - </button>
            <p>{counter}</p>
            <button onClick={increase}> + </button>
        </div>
        <button onClick={() => addFunction(counter)}> Add to Cart </button>
    </>
    )
}

export default ItemCount

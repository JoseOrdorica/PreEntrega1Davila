import { useRef } from 'react'

const UseRefDom = () => {
    const ref = useRef(null);
    const handleClick = () => {
        if(ref.current){
            ref.current.textContent = "Este es el nuevo parrafo"
            }
        }
    return (
        <div>
            <h2>UseRefDom</h2>
            <p ref={ref}>Este parrafo sera reemplazado</p>
            <button onClick={handleClick}>Click para modificar el parrafo!</button>
        </div>
    )
}

export default UseRefDom
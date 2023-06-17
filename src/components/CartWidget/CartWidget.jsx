import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/263/263142.png";

    return (
        <Link to='/cart'>
            <img className='imgCarrito' src={imgCarrito} width='30px' />
            {
                totalQuantity > 0 && <span> {totalQuantity} </span>
            }
        </Link>
    )
}

export default CartWidget

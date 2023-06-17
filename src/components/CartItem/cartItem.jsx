import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartItem = ({item, quantity}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <div>
            <h4> {item.nombre} </h4>
            <p>Quantity : {quantity}</p>
            <p>Price: $ {item.precio}</p>
            <button onClick={()=> removeItem(item.id)}>Remove Product</button>
        </div>
    )
}

export default CartItem

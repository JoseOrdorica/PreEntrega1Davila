import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartItem from "../CartItem/cartItem"

const Cart = () => {
    const {cart, emptyCart, total, totalQuantity} = useContext(CartContext);

    if(totalQuantity === 0) {
        return(
            <>
                <h2>You have no items in the shopping cart</h2>
                <Link to={'/'}> Return to homescreen </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>Total: $ {total} </h3>
            <button onClick={()=> emptyCart()}> Empty Cart </button>
            <Link to="/checkout"> Go to Checkout </Link>
        </div>
    )
}

export default Cart
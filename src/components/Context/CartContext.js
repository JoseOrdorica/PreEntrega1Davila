import { useState, createContext } from "react"

export const CartContext = createContext({ cart: [] });
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addProduct = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { item, quantity }]);
        } else {
            console.log("This product is already added to the cart!");
        }
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }
    const removeItem = (id) => {
        const updatecart = cart.filter(prod => prod.id !== id);
        setCart(updatecart);
    }
    const emptyCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )

}

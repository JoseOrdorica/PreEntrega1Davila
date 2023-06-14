import { useState, createContext } from "react"

export const CartContext = createContext({cart:[]});
export const CartProvider = ({}) => {
    const [cart, setCart] =useState([]);

    const addProduct = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {item, quantity}]);
        }
        else {
            console.log("This product is already in the cart!")
        }
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }
    const deleteProduct = (id) => {
        const updatecart = cart.filter(prod => prod.id !== id);
        setCart(updatecart);
    }
    const emptyCart = () => {
        setCart([]);
    }
}




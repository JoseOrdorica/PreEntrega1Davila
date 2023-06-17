import { useState, createContext } from "react"

export const CartContext = createContext({ 
    cart: [],
    total: 0,
    totalQuantity: 0

});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addProduct = (item, quantity) => {
        const isInCart = cart.find(product => product.item.id === item.id);
        
        if (!isInCart) {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity( prev => prev + quantity);
            setTotal(prev => prev + (item.precio * quantity));
        } else {
            const updatedCart = cart.map(product => {
                if (product.item.id === item.id) {
                    return { ...product, quantity: product.quantity + quantity };
                } else {
                    return product;
                }
            });
            setCart(updatedCart);
            setTotalQuantity( prev => prev + quantity);
            setTotal(prev => prev + (item.precio * quantity));
        }
    }

    const removeItem = (id) => {
        const removedItem = cart.find(product => product.item.id === id);
        const updatedCart = cart.filter(product => product.item.id !== id);
        setCart(updatedCart);
        setTotalQuantity(prev => prev - removedItem.quantity);
        setTotal(prev => prev - (removedItem.item.precio * removedItem.cantidad));
    }

    const emptyCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addProduct, 
                removeItem, 
                emptyCart,
                total,
                totalQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};





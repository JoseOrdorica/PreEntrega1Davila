import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { cart, emptyCart } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const submitManager = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !phone || !email || !emailConfirm) {
            setError("Please complete the form");
            return
        }

        if (email !== emailConfirm) {
            setError("Entered Emails don't match")
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                Name: product.item.nombre,
                quantity: product.quantity,
            })),
            total: cart.reduce((total, product) => total + product.item.precio * product.quantity, 0),
            nombre,
            apellido,
            phone,
            email
        };

        addDoc(collection(db, "ordenes"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                emptyCart();
            })
            .catch((error) => {
                console.log("Error while creating the order", error);
                setError("There has been an error while posting the order, please try again later.");
            })
    }
    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={submitManager}>
                {cart.map(product => (
                    <div key={product.item.id}>
                        <p> {product.item.nombre} x {product.quantity}</p>
                        <p>Precio: $ {product.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div>
                    <label htmlFor=""> Name </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Last Name </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Phone </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Email </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Confirm Email </label>
                    <input type="text" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }

                <button type="submit"> Place order </button>

                {
                    orderId && (
                        <strong>Thanks for your purchase! Your order number is: {orderId}</strong>
                    )
                }
            </form>
        </div>
    )
}

export default Checkout

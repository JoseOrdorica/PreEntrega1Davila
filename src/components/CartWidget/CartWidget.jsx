import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} width='70px'/>
        <strong> 11 </strong>
    </div>
    )
}

export default CartWidget

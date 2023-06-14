import './itemDetail.css'
import ItemCount from '../ItemCount/itemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const manageQuantity = (quantity) => {
    setAddQuantity(quantity);
    console.log("Products added:" + quantity);
  }

  return (
    <div className='productCard'>
      <h2>Name: {nombre}</h2>
      <h3>Price: {precio}</h3>
      <h3>ID: {id}</h3>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos sequi fugiat iure maiores natus eum eligendi impedit ea omnis?</p>
      <img src={img} alt={nombre} className='productImg' />
      {
        addQuantity > 0 ? (<Link to="/cart"> Go to Cart </Link>) : (<ItemCount initial={1} stock={stock} addFunction={manageQuantity} />)
      }
    </div>
  )
}

export default ItemDetail

import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='productCard'>
      <img className='productImg' src={img} alt={nombre} />
      <h3>Name: {nombre} </h3>
      <p>Price {precio}</p>
      <p>ID: {id} </p>
      <Link className='productBtn' to={`/item/${id}`}>Details</Link>
    </div>
  )
}

export default Item

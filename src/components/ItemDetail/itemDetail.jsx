import './itemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='productCard'>
      <h2>Name: {nombre}</h2>
      <h3>Price: {precio}</h3>
      <h3>ID: {id}</h3>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos sequi fugiat iure maiores natus eum eligendi impedit ea omnis?</p>
      <img src={img} alt={nombre} className='productImg'/>
    </div>
  )
}

export default ItemDetail

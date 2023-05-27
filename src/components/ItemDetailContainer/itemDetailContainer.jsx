import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then(res => setProduct(res))
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer

import { useState, useEffect } from 'react'
import ItemList from '../ItemList/itemList'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        const functionProducts = idCategory ? getProductsByCategory : getProducts;
        
        functionProducts(idCategory)
        .then(respuesta => setProducts(respuesta))
        .catch(error => console.log(error))
    }, [idCategory])

    return (
    <>
        <h2>My Products</h2>
        <ItemList products={products}/>
    </>
    )
}

export default ItemListContainer

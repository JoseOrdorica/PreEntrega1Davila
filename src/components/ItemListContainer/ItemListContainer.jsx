import { useState, useEffect } from 'react'
import ItemList from '../ItemList/itemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    useEffect(()=> {
        const myProducts = idCategory ? query(collection(db, "inventario"), where("idCat", "==", idCategory)) : collection(db, "inventario");
        
        getDocs(myProducts)
            .then(res => {
                const newProducts = res.docs.map( doc=> {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
    },[idCategory])

    return (
    <>
        <h2>My Products</h2>
        <ItemList products={products}/>
    </>
    )
}

export default ItemListContainer

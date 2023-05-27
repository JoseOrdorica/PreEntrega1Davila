import { useState } from 'react'
import { useEffect } from 'react'
import './category.css'

const Category = () => {
    const [category, setCategory] = useState("")

    useEffect( ()=> {
        document.title = `Category ${category}`;
    }, [category])

    const handleClick = (category) => {
        setCategory(category)
    }
    
    return (
        <div>
            <h2>Categories</h2>
            <button onClick={() => handleClick("Periferals")}>Periferals</button>
            <button onClick={() => handleClick("Monitors")}>Monitors</button>
            <button onClick={() => handleClick("Audio")}>Audio</button>
        </div>
    )
}

export default Category

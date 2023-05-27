import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwE5Z2vqY_Rw5l5M377-waVRf7Qczeeqp1hg&usqp=CAU'
    return (
    <header>
        <Link to={"/"}>
            <img className="imgLogo" src={imgLogo} alt="logo" />
        </Link>
    <nav>
        <ul>
            <li><NavLink className='categs' to={"/category/Periferals"}>Periferals</NavLink></li>
            <li><NavLink className='categs' to={"/category/Monitors"}>Monitors</NavLink></li>
            <li><NavLink className='categs' to={"/category/Audio"}>Audio</NavLink></li>
        </ul>
    </nav>
    <CartWidget/>
    </header>
    )
}

export default NavBar

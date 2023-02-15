import { Link, NavLink } from 'react-router-dom'
import '../App.css';

function Navbar() {
    return (
        <>
            <ul className='navbar-one' style={{textAlign:"right"}}>
                <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/About">About</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/Contact">contact us</NavLink></li>
            </ul>


        </>
    )
}
export default Navbar;
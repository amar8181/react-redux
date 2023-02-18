import {NavLink } from 'react-router-dom'
import '../App.css';

function Navbar() {
    return (
        <>
            <ul className='navbar-one' style={{textAlign:"right"}}>
                <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/contact">contact us</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/filter">filter</NavLink></li>

                <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>

            </ul>


        </>
    )
}
export default Navbar;
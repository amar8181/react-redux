import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">contact us</Link></li>
            </ul>
            
            
        </>
    )
}
export default Navbar;
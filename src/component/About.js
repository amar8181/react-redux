import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About page</h1>
           <ul>
                <li><Link to="/User/anil">Anil</Link></li>
                <li><Link to="/User/peter">peter</Link></li>
                <li><Link to="/User/sam">peter</Link></li>
           </ul>
        </div>
    )
}
export default About;
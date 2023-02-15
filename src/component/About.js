import { NavLink} from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About page</h1>
           <ul className="about-one">
                <li><NavLink className="about-link" to="/User/anil">Anil</NavLink ></li>
                <li><NavLink className="about-link" to="/User/peter">peter</NavLink ></li>
                <li><NavLink className="about-link" to="/User/sam">peter</NavLink ></li>
           </ul>
        </div>
    )
}
export default About;
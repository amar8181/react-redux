import { Link, Outlet } from "react-router-dom";

function Contact() {
    return (
        <>
            <h1>this is contact Page</h1>
            <h2>Here we have some other business</h2>

            <Link to="company">company</Link>
            <Link to="channel">chennel</Link>
            <Link to="other">other</Link>
            <Outlet />
        </>
    )
}
export default Contact;
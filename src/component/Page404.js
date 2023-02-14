import { Link } from "react-router-dom";
function Page404(){
    return(
        <>
        <h1>Error 404 -Page not found</h1>
        <Link to="/">Go to home page</Link>
        </>
    )
}
export default Page404;
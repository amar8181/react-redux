import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Home page</h1>
            <Link to="/about">Go to about Page</Link><br /><br />
            <button onClick={() => navigate('/About')}>go to About page</button><br /><br />
            <button onClick={() => navigate('/Filter')}>goto filter page</button>
        </>
    )
}
export default Home;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(){

    const login =()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }

    const navigate = useNavigate();

    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    });

    return(
            <div>
            
                        <h1>Login</h1>
                        <input type="text" />   <br/> <br/>
                        <input type="text" /> <br/> <br/>
                <button onClick={login}>Login</button>
            </div>
        )
}
export default Login;

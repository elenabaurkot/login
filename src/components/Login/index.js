import React from "react";
import "./style.css";

function Login(props){
    return (
        <div>
            <h1>Welcome to YellowChat!</h1>
            <h2>Click Below to Login</h2>
            <button onClick={() => props.loginWithRedirect({})}>Log in</button>
        </div>
    )
}


export default Login; 
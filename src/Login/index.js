import React, { useState } from "react"
import { userLogin } from '../Server/users/client';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from "../Navigation";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginHandler = () => {
        userLogin(dispatch, {
            username: credentials.username,
            password: credentials.password
          }).then((res)=>{console.log("success", res); navigate('/profile')})
              .catch()
    };
    return (
        <div>
            <Navigation active="login" />
            <div className="p-3 text-center">
                <h1>Login</h1>
                <input className="form-control w-50 block m-auto mb-2" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                <input className="form-control w-50 block m-auto mb-2" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                <button className="btn btn-primary purple w-50" onClick={loginHandler}> Login </button>
            </div>
        </div>
    );
};

export default Login;
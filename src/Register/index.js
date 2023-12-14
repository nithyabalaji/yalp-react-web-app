import React, { useState } from 'react';
import { userRegister } from '../Server/users/client';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';

const Register = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "", email: "", role: "" });
    const [errorMsg, setErrorMsg] = useState()

    const navigate = useNavigate();
    const registerHandler = () => {
        userRegister({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          role: credentials.role,
        }).then(()=>{navigate('/login')})
            .catch(()=>setErrorMsg("Invalid username or email"))
    }
    return (
        <>
            <Navigation active="register" />
            <div className="p-3 text-center">
                <h1>Register</h1>
                <input className="form-control w-50 block m-auto mb-2" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                <input className="form-control w-50 block m-auto mb-2" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                <input className="form-control w-50 block m-auto mb-2" placeholder="Email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
                <div className="mb-3">
                    <select className="form-select w-50 m-auto" onChange={e => setCredentials({ ...credentials, role: e.target.value })}>
                        <option defaultValue={"USER"}>Please select a role</option>
                        <option value="USER">User</option>
                        <option value="HOST">Host</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <button className="btn btn-primary purple w-50 mb-4" onClick={registerHandler}> Register </button>
                {errorMsg &&
                <div className='bg-error w-50 m-auto p-3'>
                    <h6>{errorMsg}</h6>
                </div>}
            </div>
        </>
    )
};

export default Register;
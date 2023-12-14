import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { findUserById, getUser, updateUserProfile} from '../../Server/users/client';

const ProfileEdit = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectUser = (state) => state.user;
    
    const user = useSelector(selectUser)
    // useEffect(() => {
    //     if (id) {
    //         findUserById(dispatch, id);
    //         console.log(user);
    //     }
    // }, [dispatch])
    const [updatedUser, setUser] = useState(user);
    console.log("============in profile component, user: ", user)

    const handleSave = () => {
        updateUserProfile(dispatch, {
            username: updatedUser.username,
            password: updatedUser.password,
            email: updatedUser.email,
        }, id).then((res) => {console.log("Profile Saved!", res)})
            .catch(()=>console.log("update profile error"))
            navigate(`/profile`)
    }

    const handleCancel = () => {
        navigate(`/profile`);
    }

    return (
        <>
            <div className="p-3">
                <div className="card-body">
                    <h3>
                        Edit Profile
                    </h3>
                    <div className="mb-3">
                        <label for="username" className='form-label'><b>Username:</b></label>
                        <input className="form-control w-50"
                            id="username"
                            value={updatedUser.username}
                            placeholder='Username'
                            onChange={(e) => setUser({ ...updatedUser, username: e.target.value })}></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" className='form-label'><b>Email:</b></label>
                        <input className="form-control w-50"
                            id="email"
                            value={updatedUser.email}
                            placeholder='Email'
                            onChange={(e) => setUser({ ...updatedUser, email: e.target.value })}></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className='form-label'><b>Password:</b></label>
                        <input className="form-control w-50"
                            id="password"
                            value={updatedUser.password}
                            placeholder='Password'
                            onChange={(e) => setUser({ ...updatedUser, password: e.target.value })}></input>
                    </div>
                    <div className="mb-3">
                        <b>Role:</b> {user.role}
                    </div>


                    <div className="mb-3">
                        <button className="btn btn-danger purple me-2"
                            onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="btn btn-primary purple"
                            onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};



export default ProfileEdit;


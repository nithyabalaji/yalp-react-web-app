import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

const ProfileInfo = () => {
    const { id } = useParams();
    //console.log(id);
    const selectProfile = (state) => state.profile;
    const navigate = useNavigate();
    var user = useSelector(selectProfile);

    const handleEditProfile = () => {
        if (id) {
            navigate(`/profile/edit/${id}`);
        } else {
            navigate(`/profile/edit/${user._id}`)
        }
    }

    return (
        <>
            <div className="p-3">
                <div className="card-body">
                    <h3>
                        Profile
                    </h3>
                    <div className="mb-3">
                        <b>Username:</b> {user.username}
                    </div>
                    <div className="mb-3">
                        <b>Email:</b> {user.email}
                    </div>
                    <div className="mb-3">
                        <b>Role:</b> {user.role}
                    </div>
                    {!id &&
                        <div className="mb-3">
                            <button className="btn btn-primary purple"
                                onClick={handleEditProfile}>
                                Edit Profile
                            </button>
                        </div>}
                </div>
            </div>
        </>
    )
};

export default ProfileInfo;


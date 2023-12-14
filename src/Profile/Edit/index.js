import React, { useEffect, useState } from 'react';
import ProfileEditor from './ProfileEditor';
import Navigation from '../../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, findUserById } from '../../Server/users/client';
import { useParams } from 'react-router-dom';

const ProfileEdit = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const selectUser = (state) => state.user;
    const currentUser = useSelector(selectUser)
    const selectProfile = (state) => state.profile;
    const user = useSelector(selectProfile)
    console.log("--- user before getUser")
    console.log(currentUser);
    console.log(user);

    return (
        <div>
            <Navigation active="profile" />
            {(currentUser && user && currentUser._id != user._id) || !user &&
                <h5 className="p-3"> You can only edit your own profile.</h5>}
            {currentUser && user && currentUser._id == user._id &&
                <ProfileEditor />
            }
        </div>

    )
};

export default ProfileEdit;
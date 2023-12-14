import React, { useEffect, useState } from 'react';
import ProfileEditor from './ProfileEditor';
import Navigation from '../../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfileEdit = () => {
    const { id } = useParams();
    const selectUser = (state) => state.user;
    const currentUser = useSelector(selectUser)
    const selectProfile = (state) => state.profile;
    const user = useSelector(selectProfile)

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
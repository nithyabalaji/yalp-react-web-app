import React, { useEffect, useState } from 'react';
import ProfileEditor from './ProfileEditor';
import Navigation from '../../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, findUserById } from '../../Server/users/client';
import { useParams } from 'react-router-dom';

const selectUser = (state) => state.user;

const ProfileEdit = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log("--- user before getUser")
    console.log(user);
    //useEffect(()=>getUser(dispatch), [dispatch])
    useEffect(() => {
        if (id) {
            console.log("getting the logged in user");
            findUserById(dispatch, id);
        } else {
            console.log("getting user by id");
            getUser(dispatch);
        }
    }, [dispatch])

    return (
        <div>
            <Navigation active="profile" />
            {user &&
                <ProfileEditor />
            }
        </div>

    )
};

export default ProfileEdit;
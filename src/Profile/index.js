import React, { useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import Navigation from '../Navigation';
import RestaurantPostList from './RestaurantPostList';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, findUserById } from '../Server/users/client';
import { useNavigate, useParams } from 'react-router-dom';

const selectUser = (state) => state.user;
const selectProfile = (state) => state.profile;
const selectRestaurants = (state) => state.restaurants;

const Profile = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
        if (!id) {
            if (currentUser) {
                console.log("at /profile");
                findUserById(dispatch, currentUser._id);
            }
        } else {
            console.log("at /profile/id");
            findUserById(dispatch, id);
        }
    }, [dispatch])
    const currentUser = useSelector(selectUser)
    var user = useSelector(selectProfile);

    if (!id) {
        const profile = currentUser;
        dispatch({
            type: 'set-user-profile',
            profile
        });
    }

    const restaurants = useSelector(selectRestaurants);

    return (
        <div>
            <Navigation active="profile" />
            {!currentUser &&
                <h5 className="p-3">Please login before viewing a profile.</h5>}
            {currentUser && user &&
                <ProfileInfo />
            }
            {currentUser && user &&
                <RestaurantPostList user={user}/>
            }
        </div>

    )
};

export default Profile;
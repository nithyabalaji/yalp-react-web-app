import React, { useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import Navigation from '../Navigation';
import RestaurantPostList from './RestaurantPostList';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, findUserById } from '../Server/users/client';
import RestaurantItem from '../Search/RestaurantItem';
import { findRestaurantsByAuthor } from '../Server/restaurant/client';
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
        //findUserById(dispatch, id);
        // if (id) {
        //     console.log("getting the logged in user");
        //     user = findUserById(dispatch, id);
        // } else {
        //     console.log("getting user by id");
        //     getUser(dispatch);
        // }
        // const author_id = user ? user._id : null;
        // // getUser(dispatch);
        // if (author_id) {
        //     findRestaurantsByAuthor(dispatch, author_id);
        // }
    }, [dispatch])
    const currentUser = useSelector(selectUser)
    var user = useSelector(selectProfile);

    if (!id) {
        const profile = currentUser;
        dispatch({
            type: 'set-user-profile',
            profile
        });
        //user = currentUser;
    }

    const restaurants = useSelector(selectRestaurants);
    const navigate = useNavigate();

    console.log("TTTTTTTTTTTT");
    console.log(restaurants);
    console.log(currentUser);
    console.log(user);
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
            {/* {currentUser && user &&
                <h3 className="mt-4">Your restaurant post</h3>}
            {!id && user && user.role === 'HOST' && restaurants &&
                <div>
                    <button
                        className="btn btn-primary purple mb-3"
                        onClick={() => navigate(`/post`)}>
                        Post Restaurant
                    </button>
                </div>}
            {user &&
                <ul className="list-group">
                    {
                        restaurants.map(restaurant => {
                            if (restaurant && restaurant.name)
                                return (
                                    <RestaurantItem restaurant={restaurant} />
                                )
                        })
                    }
                </ul>
            } */}
        </div>

    )
};

export default Profile;
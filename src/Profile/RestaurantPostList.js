import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { findUserById, getUser, updateUserProfile } from '../Server/users/client';
import RestaurantItem from '../Search/RestaurantItem';
import { findRestaurantsByAuthor } from '../Server/restaurant/client';

const RestaurantPostList = ({ user }) => {
    // const { id } = useParams();
    // console.log(id);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const selectUser = (state) => state.user;

    // const user = useSelector(selectUser)
    // // useEffect(() => {
    // //     if (id) {
    // //         findUserById(dispatch, id);
    // //         console.log(user);
    // //     }
    // // }, [dispatch])
    // const [updatedUser, setUser] = useState(user);
    // console.log("============in profile component, user: ", user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectUser = (state) => state.user;
    const currentUser = useSelector(selectUser)

    useEffect(() => {
        const author_id = user ? user._id : null;
        console.log(`  in restaurant post - author id: ${author_id}`);
        console.log(user);
        if (author_id) {
            findRestaurantsByAuthor(dispatch, author_id);
        }
    }, [dispatch])

    const selectRestaurants = (state) => state.restaurants;
    const restaurants = useSelector(selectRestaurants);

    // const handleSave = () => {
    //     updateUserProfile(dispatch, {
    //         username: updatedUser.username,
    //         password: updatedUser.password,
    //         email: updatedUser.email,
    //     }, id).then((res) => { console.log("Profile Saved!", res) })
    //         .catch(() => console.log("update profile error"))
    //     navigate(`/profile`)
    // }

    // const handleCancel = () => {
    //     navigate(`/profile`);
    // }

    return (
        <div>
            {user && user.role === 'HOST' &&
                <h3 className="mt-4">Restaurant posts by {user.username}</h3>}
            {currentUser && currentUser.role === 'HOST' && currentUser._id == user._id &&
                <div>
                    <button
                        className="btn btn-primary purple mb-3"
                        onClick={() => navigate(`/post`)}>
                        Post Restaurant
                    </button>
                </div>}
            {user && user.role === 'HOST' &&
                <ul className="list-group">
                    {
                        restaurants.map(restaurant => {
                            if (restaurant && restaurant.name)
                                return (
                                    <RestaurantItem restaurant={restaurant} />
                                )
                        })
                    }
                </ul>}
        </div>
    )
};



export default RestaurantPostList;


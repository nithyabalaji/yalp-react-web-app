import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import RestaurantItem from '../Search/RestaurantItem';
import { findRestaurantsByAuthor } from '../Server/restaurant/client';

const RestaurantPostList = ({ user }) => {
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

    return (
        <div className='p-3'>
            {user && user.role === 'HOST' &&
                <h3 className="mt-4 purple">Restaurant posts by {user.username}</h3>}
            {currentUser && currentUser.role === 'HOST' && currentUser._id == user._id &&
                <div>
                    <button
                        className="btn btn-primary purple mb-3"
                        onClick={() => navigate(`/post`)}>
                        Post Restaurant
                    </button>
                </div>}
            {user && user.role === 'HOST' && restaurants.length === 0 &&
                <h6>No restaurants posted yet.</h6>
            }
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


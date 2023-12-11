import React, { useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import Navigation from '../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, findUserById } from '../Server/users/client';
import RestaurantItem from '../Search/RestaurantItem';
import { findRestaurantsByAuthor } from '../Server/restaurant/client';
import { useNavigate, useParams } from 'react-router-dom';

const selectUser = (state) => state.user;
const selectRestaurants = (state) => state.restaurants;

const Profile = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log("--- user before getUser")
    console.log(user);
    const restaurants = useSelector(selectRestaurants)
    var author_id = user ? user._id : null;
    const navigate = useNavigate();
    //useEffect(()=>getUser(dispatch), [dispatch])
    useEffect(() => {
        if (id) {
            console.log("getting the logged in user");
            findUserById(dispatch, id);
        } else {
            console.log("getting user by id");
            getUser(dispatch);
        }
        author_id = user ? user._id : null;
        if (author_id) {
            findRestaurantsByAuthor(dispatch, author_id);
        }
    }, [dispatch])
    //useEffect(() => findRestaurantsByAuthor(dispatch, author_id), [dispatch])

    console.log(restaurants)
    return (
        <div>
            <Navigation active="profile" />
            {user &&
                <ProfileInfo />
            }
            <h1 className="mt-4">Your restaurant post</h1>
            {!id && user && user.role === 'HOST' && restaurants &&
                <div>
                    <button
                        className="btn btn-primary purple mb-3"
                        onClick={() => navigate(`/post`)}>
                        Post Restaurant
                    </button>
                </div>}
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
        </div>

    )
};

export default Profile;
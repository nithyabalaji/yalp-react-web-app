import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import RestaurantItem from '../Search/RestaurantItem';
import RecentReviewItem from '../Home/RecentReviewItem';
import { findAllReviews } from "../Server/review/client";
import { findRestaurantsByAuthor } from '../Server/restaurant/client';

const UserReviewList = ({ user }) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const selectUser = (state) => state.user;
    // const currentUser = useSelector(selectUser)

    // useEffect(() => {
    //     const author_id = user ? user._id : null;
    //     console.log(`  in restaurant post - author id: ${author_id}`);
    //     console.log(user);
    //     if (author_id) {
    //         findRestaurantsByAuthor(dispatch, author_id);
    //     }
    // }, [dispatch])

    // const selectRestaurants = (state) => state.restaurants;
    // const restaurants = useSelector(selectRestaurants);

    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        findAllReviews(dispatch)
    }, [dispatch])

    const findReviewsByUser = (reviews) => {
        const filteredReviews = reviews.filter(
            (review) => review.user._id === user._id
        );

        return filteredReviews;
    };

    const reviewsByUser = findReviewsByUser(reviews);

    return (
        <div className='p-3'>
            {user && user.role === 'USER' &&
                <h3 className="mt-4 purple">Reviews by {user.username}</h3>}
            {user && user.role === 'USER' && reviewsByUser.length === 0 &&
                <h6>No reviews posted yet.</h6>
            }
            {user && user.role === 'USER' &&
                <ul>
                    {reviewsByUser.map(review => <RecentReviewItem review={review} />)}
                </ul>
            }
        </div>
    )
};

export default UserReviewList;


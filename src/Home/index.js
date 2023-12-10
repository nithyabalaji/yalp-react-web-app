import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findAllReviews } from "../Server/review/client";
import RecentReviewItem from "./RecentReviewItem";

const Home = (user) => {
    const currentUser = useSelector(state => state.user);
    console.log(currentUser);
    const navigate = useNavigate();
    const reviews = useSelector(state => state.reviews);
    console.log("----reviews");
    console.log(reviews);
    const dispatch = useDispatch();

    //useEffect(() => findAllReviews(dispatch), []);
    // const recentReviews = (reviews) => {
    //     const sortedReviews = reviews.sort((a,b) => {
    //         return new Date(b.date)- new Date(a.date);
    //     });
    
    //     return sortedReviews.slice(0, 4);
    // };

    return (
        <div>
            <Navigation active="home" />
            <div className='flex-row-container'>
                <div>
                    <img src="/images/restaurant_eating.jpg" />
                </div>
                <div className='p-5'>
                    <h1 className="text-center font-100px mt-5 purple">
                        Yalp
                    </h1>
                    <h2 className="text-center mb-5">
                        Search and review restaurants in your area right here!
                    </h2>
                    {
                        currentUser &&
                        <h5 className='text-center purple'>Hi {currentUser.username}!</h5>
                    }
                    {
                        !currentUser &&
                        <div className='text-center'>
                            <button className='btn btn-primary purple m-2'
                                onClick={() => {
                                    navigate(`/login`);
                                }}>
                                Login
                            </button>
                            <button className='btn btn-primary purple m-2'
                                onClick={() => {
                                    navigate(`/register`);
                                }}>
                                Register
                            </button>
                        </div>
                    }
                </div>

            </div>
            <div className="card border-0">

                <div className="card-body">
                    <div className="card-title text-center font-60px mb-4">
                    </div>
                    <div className="card-text">
                        <h2 className='purple'>Most Recent Reviews</h2>
                        <ul>
                            {/* {RecentReviews(reviews).map(review => <RecentReviewItem review={review}/>)} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
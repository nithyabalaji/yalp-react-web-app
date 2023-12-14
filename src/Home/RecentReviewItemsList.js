import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../Server/api/client";
import RecentReviewItem from "./RecentReviewItem";

const RecentReviewItemsList = () => {
    const reviews = useSelector(state => state.reviews);
    
    const recentReviews = (reviews) => {
        const sortedReviews = reviews.sort((a,b) => {
            return new Date(b.date)- new Date(a.date);
        });
    
        return sortedReviews.slice(0, 4);
    };

    return (
        <ul>
            {recentReviews(reviews).map(review => <RecentReviewItem review={review}/>)}
        </ul>
    );
};

export default RecentReviewItemsList;
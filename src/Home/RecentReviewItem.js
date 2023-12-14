import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
//import Rating from "../Reviews/Rating";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from '../Server/api/client';

const selectUser = (state) => state.user;

const RecentReviewItem = ({ review }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {fetchDetails(review.restaurant.location_id).then(data => setRestaurant(data))}, []);
    const convertDate = (date) => {
        const dateObj = new Date(date);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return new Intl.DateTimeFormat('en-US', options).format(dateObj);
    }


    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-2 d-none d-md-block text-center">
                    <img
                        alt="avatar"
                        src={review.user && review.user.avatarIcon}
                        className="rounded-circle d-none d-md-inline"
                        width="110px" />
                </div>
                <div className="col-12 col-md-10">
                    <div className="d-flex flex-column">
                        <img
                            alt="icon"
                            src={review.user && review.user.avatarIcon}
                            className="rounded-circle d-block d-md-none"
                            width="100px" />
                        <div className="d-flex align-items-center">
                            <div className="col-10 rf-font-18px rf-font-bold">
                                <span>{review.user && review.user.username}</span>
                                <span className="badge bg-dark ms-3">
                                    <a href={restaurant.website} className="rf-font-color-white" target="_blank">
                                        {restaurant.name}</a>
                                </span>
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                                {review.rating}/5 <FaStar />
                                {/* <Rating rating={review.rating}/> */}
                            </div>
                        </div>
                        <div className="rf-color-darkgray">
                            {convertDate(review.date)}
                        </div>
                        <div className="rf-font-18px">
                            {review.content}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default RecentReviewItem;